// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiResponse } from "next";
import { Sample, sample } from "../../lib/sample";

export default function handler(res: NextApiResponse<Sample>) {
  try {
    res.status(200).json(sample);
  } catch (error) {
    console.error(error);
  }
}
