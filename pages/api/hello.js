// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from "fs";

import { getFileData, getFilePath } from "../../helpers/feedback";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { user, email } = req.body;
    const filePath = getFilePath();
    const data = getFileData(filePath);
    data.push({ user: user, email: email });
    fs.writeFileSync(filePath, JSON.stringify(data));

    res.status(201).json({ body: { user: user, email: email } });
  } else if (req.method === "GET") {
    const filePath = getFilePath();
    const data = getFileData(filePath);
    res.status(200).json({ data: data });
  }
}
