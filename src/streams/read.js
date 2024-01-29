import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = fileURLToPath(path.dirname(import.meta.url))

const read = async () => {
  const src = path.join(__dirname, "files", "fileToRead.txt")
  fs.createReadStream(src, "utf-8").pipe(process.stdout)
}

await read()
