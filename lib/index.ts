export namespace FError {
  class FError extends Error {
    readonly extraInfo: any

    constructor(name: string, msg: string, extraInfo: any) {
      super(msg)
      this.name = name
      this.extraInfo = extraInfo
    }
  }

  function throwError(name: string, msg: string, extraInfo: any): never {
    throw new FError(name, msg, extraInfo)
  }

  function reThrow(e: FError) {
    return throwError(e.name, e.message, e.extraInfo)
  }

  function on(pattern: string, fn: Function) {
    return (event: FError) =>
      event.name === pattern
        ? fn(event.extraInfo)
        : reThrow(event)
  }
}