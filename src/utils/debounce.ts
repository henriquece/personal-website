export function debounce(func: (...funcArgs: any) => unknown, timeout = 250) {
  let timer: NodeJS.Timeout

  return (...args: any[]) => {
    clearTimeout(timer)

    timer = setTimeout(() => {
      func(...args)
    }, timeout)
  }
}
