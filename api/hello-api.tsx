import { NextApiRequest, NextApiResponse } from "next";

export default function handler(_: NextApiRequest, response: NextApiResponse) {
    response.status(200).json({text: 'Hello'});
}