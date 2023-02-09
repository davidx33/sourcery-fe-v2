import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import prisma from "../../lib/prisma";

type Data = {
  airtableEmbed: string;
  tabName: string;
};

type Error = {
  error: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Error>
) {
  const session = await getSession({ req });
  if (!session) {
    return res
      .status(403)
      .send({ error: "please authenticate to access this view" });
  }
  if (req.method === "POST" && session?.user?.email) {
    const { tabName, airtableEmbed } = req.body;
    await prisma.airtableViewIds.create({
      data: {
        user: { connect: { email: session.user.email } },
        tabName: tabName,
        airtableEmbed: airtableEmbed
      },
    });
    res.redirect(307, '/profile');
    res.status(200).json({
      airtableEmbed: airtableEmbed,
      tabName: tabName
    });
  }
}

