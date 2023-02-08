import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import prisma from "../../lib/prisma";

type Data = {
  sheetName: string;
  googleEmbed: string;
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
    const { sheetName, googleEmbed } = req.body;
    await prisma.googleSheetsIds.create({
      data: {
        user: { connect: { email: session.user.email } },
        sheetName: sheetName,
        googleEmbed: googleEmbed,
      },
    });
    res.redirect(307, '/profile');
    res.status(200).json({
      sheetName: sheetName,
      googleEmbed: googleEmbed,
    });
  }
}
