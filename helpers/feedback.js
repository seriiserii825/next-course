import path from "path";
import fs from "fs";

export function getFilePath() {
  return path.join(process.cwd(), "data", "feedback.json");
}

export function getFileData(filePath) {
  const fileData = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(fileData);
}
