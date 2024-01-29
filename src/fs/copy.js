import fs from "fs/promises"
import path from "path"
import { fileURLToPath } from "url"
import { isPathExist } from "../utils/utils.js"

const __dirname = fileURLToPath(path.dirname(import.meta.url))

const copy = async () => {
  const src = path.join(__dirname, "files")
  const dest = path.join(__dirname, "files_copy")

  try {
    if (!(await isPathExist(src)) || (await isPathExist(dest))) throw Error
    await fs.cp(src, dest, { recursive: true, errorOnExist: true, force: false })
  } catch {
    throw new Error("FS operation failed")
  }
}

await copy()
