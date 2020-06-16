class FError extends Error {
  readonly extraInfo: any

  constructor(name: string, msg: string, extraInfo: any = {}) {
    super(msg)
    this.name = name
    this.extraInfo = extraInfo
  }
}

export const throwError = (name: string, msg: string, extraInfo?: any): never => {
  throw new FError(name, msg, extraInfo)
}

export const reThrow = (name: string) => (e: Error) => throwError(name, e.message, e)

export const on = (pattern: string, fn: Function) => (event: FError) =>
  event.name === pattern
    ? fn(event.extraInfo)
    : reThrow(event.name)(event)

export default {
  throwError,
  reThrow,
  on
}