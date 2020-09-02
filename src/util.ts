import fs from 'fs'

export async function statAsync(filepath: string): Promise<fs.Stats | null> {
  return new Promise(resolve => {
    fs.stat(filepath, (err, stats) => {
      if (err) resolve(null)
      resolve(stats)
    })
  })
}

export async function writeFileAsync(fullpath: string, content: string): Promise<void> {
  return new Promise((resolve, reject) => {
    fs.writeFile(fullpath, content, 'utf8', err => {
      if (err) reject()
      resolve()
    })
  })
}

export function readFileAsync(fullpath: string, encoding = 'utf8'): Promise<string> {
  return new Promise((resolve, reject) => {
    fs.readFile(fullpath, encoding, (err, content) => {
      if (err) reject(err)
      resolve(content)
    })
  })
}

export function mkdirAsync(filepath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    fs.mkdir(filepath, err => {
      if (err) reject(err)
      resolve()
    })
  })
}

export function rmFileAsync(fullpath: string): Promise<boolean> {
  return new Promise((resolve, reject) => {
    fs.unlink(fullpath, err => {
      if (err) reject(err)
      resolve(true)
    })
  })
}

export function readdirAsync(path: string): Promise<string[]> {
  return new Promise((resolve, reject) => {
    fs.readdir(path, (err, files) => {
      if (err) return reject(err)
      resolve(files)
    })
  })
}
