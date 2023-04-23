import { NextApiRequest, NextApiResponse } from 'next'

/**
 * POST Chat
 *
 * Logs a message to console
 *
 * @param req
 * @param res
 */
async function POST(req: NextApiRequest, res: NextApiResponse) {
  console.log("Processing chat message...");

  // Business logic will go here

  // Respond with 200 OK
  return res.status(200).json({ message: "Chat message processed" });
}

export default async function chat(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "POST":
      return await POST(req, res);

    default:
      return res.status(405).json({
        error: {
          code: 405,
          message: "Method Not Allowed",
          suggestion: "Only POST is available from this API",
        },
      });
  }
}
