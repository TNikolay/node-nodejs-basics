import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = fileURLToPath(path.dirname(import.meta.url))

const write = async () => {
  const src = path.join(__dirname, "files", "fileToWrite.txt")
  process.stdin.pipe(fs.createWriteStream(src, "utf-8"))
}

await write()
