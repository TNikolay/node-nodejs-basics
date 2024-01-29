import fs from "fs/promises"
import path from "path"
import { fileURLToPath } from "url"
import { isPathExist } from "../utils/utils.js"

const __dirname = fileURLToPath(path.dirname(import.meta.url))

const rename = async () => {
  const src = path.join(__dirname, "files", "wrongFilename.txt")
  const dest = path.join(__dirname, "files", "properFilename.md")

  try {
    if (!(await isPathExist(src)) || (await isPathExist(dest))) throw Error
    await fs.rename(src, dest)
  } catch {
    throw new Error("FS operation failed")
  }
}

await rename()
