import fs from "fs/promises"
import path from "path"
import { fileURLToPath } from "url"
import { isPathExist } from "../utils/utils.js"

const __dirname = fileURLToPath(path.dirname(import.meta.url))

const read = async () => {
  const src = path.join(__dirname, "files", "fileToRead.txt")
  if (!(await isPathExist(src))) throw new Error("FS operation failed")

  const contents = await fs.readFile(src, "utf8")
  console.log(contents)
}

await read()
