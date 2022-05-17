/** @format */
import { NextApiRequest, NextApiResponse } from 'next';

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

type Data = {
	name: string;
	ok: boolean;
};

/**
 * RESTful API que ya provee Next
 */

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
): void {
	res.status(200).json({ name: 'John Doe', ok: true });
}
