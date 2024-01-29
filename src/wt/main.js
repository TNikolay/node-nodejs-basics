import os from "os"
import path from "path"
import { fileURLToPath } from "url"
import { Worker } from "worker_threads"

const __dirname = fileURLToPath(path.dirname(import.meta.url))

const performCalculations = async () => {
  const workerPath = path.join(__dirname, "./worker.js")

  const cpus = os.cpus().length
  const tasks = new Array(cpus)
  const res = new Array(cpus)

  for (let i = 0; i < cpus; i++) {
    const wp = new Promise((resolve, reject) => {
      const worker = new Worker(workerPath, { workerData: i + 10 })
      worker.on("message", resolve)
      worker.on("error", reject)
      worker.on("exit", code => {
        if (code !== 0) reject(`Worker stopped with exit code ${code}`)
      })
    })

    tasks[i] = wp
  }

  const t = await Promise.allSettled(tasks)
  for (let i = 0; i < cpus; i++) res[i] = t[i].status === "fulfilled" ? { status: "resolved", data: t[i].value } : { status: "error", data: null }

  console.log(res)
}

await performCalculations()
