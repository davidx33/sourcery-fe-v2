import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import prisma from '../../lib/prisma';

type Data = {
  companyName: string;
  companySector: string;
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
    const { companyName, companySector } = req.body;
    const company = await prisma.company.create({
      data: {
        name: companyName,
        sector: companySector
      }
    });
    await prisma.submission.create({
      data: {
        user: { connect: { email: session.user.email } },
        company: { connect: { id: company.id } }
      }
    })
    res.status(200).json({
      companyName: companyName,
      companySector: companySector
    });
  }
}
