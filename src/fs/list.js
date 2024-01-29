import fs from "fs/promises"
import path from "path"
import { fileURLToPath } from "url"
import { isPathExist } from "../utils/utils.js"

const __dirname = fileURLToPath(path.dirname(import.meta.url))

const list = async () => {
  const src = path.join(__dirname, "files")
  if (!(await isPathExist(src))) throw new Error("FS operation failed")

  const files = [...(await fs.readdir(src, { withFileTypes: true }))].filter(v => v.isFile()).map(v => v.name)
  console.log(files)
}

await list()
