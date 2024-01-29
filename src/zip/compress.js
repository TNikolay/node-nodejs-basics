import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"
import zlib from "zlib"

const __dirname = fileURLToPath(path.dirname(import.meta.url))

const compress = async () => {
  const folder = path.join(__dirname, "files")
  const src = path.join(folder, "fileToCompress.txt")
  const dest = path.join(folder, "archive.gz")

  fs.createReadStream(src).pipe(zlib.createGzip()).pipe(fs.createWriteStream(dest))
}

await compress()
