/** @format */

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
/**
 * Restfull API que ya provee Next
 */

export default function handler(req, res) {
	res.status(200).json({ name: 'John Doe' });
}
