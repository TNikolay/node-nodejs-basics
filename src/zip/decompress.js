import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"
import zlib from "zlib"

const __dirname = fileURLToPath(path.dirname(import.meta.url))

const decompress = async () => {
  const folder = path.join(__dirname, "files")
  const src = path.join(folder, "archive.gz")
  const dest = path.join(folder, "fileToCompress.txt")

  fs.createReadStream(src).pipe(zlib.createUnzip()).pipe(fs.createWriteStream(dest))
}

await decompress()
