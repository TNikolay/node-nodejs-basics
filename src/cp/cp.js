import { spawn } from "child_process"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = fileURLToPath(path.dirname(import.meta.url))

const spawnChildProcess = async args => {
  const script = path.join(__dirname, "files", "script.js")
  const child = spawn("node", [script, ...args])

  process.stdin.pipe(child.stdin)

  child.on("exit", function (code, signal) {
    console.log(`child process exited with code ${code} and signal ${signal}`)
  })

  child.stdout.on("data", data => {
    console.log(`child stdout:\n${data}`)
  })

  child.stderr.on("data", data => {
    console.error(`child stderr:\n${data}`)
  })
}

// Put your arguments in function call to test this functionality
spawnChildProcess(["a1", "someArgument2", 56])
