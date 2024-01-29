const parseArgs = () => {
  let res = ""
  for (let i = 2; i < process.argv.length; i++) {
    const el = process.argv[i]
    if (!el.startsWith("--") || i == process.argv.length - 1) continue

    const elNext = process.argv[i + 1]
    if (elNext.startsWith("--")) continue

    res += `${el.slice(2)} is ${elNext}, `
    i++
  }
  console.log(res.slice(0, -2))
}

parseArgs()
