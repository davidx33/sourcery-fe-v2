import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import prisma from '../../lib/prisma';

type Data = {
  companyName: string;
  companySector: string;
  companyURL: string;
  foundingTeamQualification: string;
  proprietary: string;
  missionCritical: string;
  relevantExperience: string;
}

type Error = {
  error: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data | Error>) {
  const session = await getSession({ req });
  if (!session) {
    return res.status(403).send({ error: 'please authenticate to access this view' });
  }
  if (req.method === 'POST' && session?.user?.email) {
    const { companyName, companySector, companyURL, foundingTeamQualification, proprietary, missionCritical, relevantExperience } = req.body;
    const company = await prisma.company.create({
      data: {
        name: companyName,
        sector: companySector,
        url: companyURL,
      }
    });
    await prisma.submission.create({
      data: {
        user: { connect: { email: session.user.email } },
        company: { connect: { id: company.id } },
        foundingTeamQualification: foundingTeamQualification,
        proprietary: proprietary,
        missionCritical: missionCritical,
        relevantExperience: relevantExperience,
      }
    })
    res.status(200).json({
      companyName: companyName,
      companySector: companySector,
      companyURL: companyURL,
      foundingTeamQualification: foundingTeamQualification,
      proprietary: proprietary,
      missionCritical: missionCritical,
      relevantExperience: relevantExperience,
    });
  }
}
