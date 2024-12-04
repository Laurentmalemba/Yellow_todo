// /src/copilotkit/route.ts

import { NextApiRequest, NextApiResponse } from "next";
import { copilotKitServer } from  "@copi";

export default copilotKitServer({
  apiKey: process.env.COPILOTKIT_API_KEY || "",
  instructions: "Assist users in managing their Todo list.",
})(async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).end();
});