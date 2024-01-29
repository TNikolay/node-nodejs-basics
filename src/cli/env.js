const parseEnv = () => {
  let res = ""
  for (let v in process.env) {
    if (v.startsWith("RSS_")) res += `${v}=${process.env[v]}; `
  }
  console.log(res.slice(0, -2))
}

parseEnv()
