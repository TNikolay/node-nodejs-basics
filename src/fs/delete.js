import { fileURLToPath } from "url"
import path from "path"
import fs from "fs/promises"

const __dirname = fileURLToPath(path.dirname(import.meta.url))

const remove = async () => {
  const file = path.join(__dirname, "files", "fileToRemove.txt")
  try {
    await fs.rm(file)
  } catch {
    throw new Error("FS operation failed")
  }
}

await remove()
