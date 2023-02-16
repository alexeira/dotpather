export default function dotpath(str: string) {
  const parts = str.split('.')
  const len = parts.length

  type ObjectWithPath = {
    [key: string]: unknown
  }

  return function parse(obj: unknown): ObjectWithPath | undefined {
    let testKey

    for (let i = 0; i < len; ++i) {
      testKey = parts[i]

      if (!obj) return

      obj = (obj as ObjectWithPath)[testKey]
    }

    return obj as ObjectWithPath
  }
}
