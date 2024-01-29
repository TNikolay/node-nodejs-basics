import { stdin, stdout } from "process"
import { Transform } from "stream"

const transform = async () => {
  const revers = new Transform({
    transform(chunk, _encoding, callback) {
      callback(null, chunk.toString().slice(0, -2).split("").reverse().join("") + "\n")
    },
  })

  stdin.pipe(revers).pipe(stdout)
}

await transform()
