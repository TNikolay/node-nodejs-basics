import crypto from "crypto"
import { createReadStream } from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = fileURLToPath(path.dirname(import.meta.url))

const calculateHash = async () => {
  const src = path.join(__dirname, "files", "fileToCalculateHashFor.txt")
  const hash = crypto.createHash("sha256")

  const input = createReadStream(src)
  input.on("readable", () => {
    const data = input.read()
    if (data) hash.update(data)
    else console.log(hash.digest("hex"))
  })
}

await calculateHash()
