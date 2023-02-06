import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import prisma from '../../lib/prisma';

type Data = {
  airtableViewId: string,
}

type Error = {
  error: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data | Error>) {
  const session = await getSession({ req });
  if (!session) {
    return res.status(403).send({ error: 'please authenticate to access this view' });
  }
  if (req.method == 'POST' && session?.user?.email) {
    const { airtableViewId } = req.body;
    await prisma.user.update({
      where: {
        email: session.user.email,
      },
      data: {
        airtableViewId: airtableViewId,
      }
    })
    res.redirect(307, '/profile');
  }
}