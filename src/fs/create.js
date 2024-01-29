import { fileURLToPath } from "url"
import path from "path"
import fs from "fs/promises"

const __dirname = fileURLToPath(path.dirname(import.meta.url))

const create = async () => {
  const folderPath = path.join(__dirname, "files")
  const filePath = path.join(folderPath, "fresh.txt")
  const fileContents = "I am fresh and young"

  try {
    await fs.mkdir(folderPath, { recursive: true })
    await fs.writeFile(filePath, fileContents, { flag: "ax" })
    console.log(`File created: ${filePath}`)
  } catch {
    throw new Error("FS operation failed")
  }
}

await create()
