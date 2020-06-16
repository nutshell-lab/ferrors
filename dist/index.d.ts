declare class FError extends Error {
    readonly extraInfo: any;
    constructor(name: string, msg: string, extraInfo: any);
}
export declare const throwError: (name: string, msg: string, extraInfo: any) => never;
export declare const reThrow: (e: FError) => never;
export declare const on: (pattern: string, fn: Function) => (event: FError) => any;
declare const _default: {
    throwError: (name: string, msg: string, extraInfo: any) => never;
    reThrow: (e: FError) => never;
    on: (pattern: string, fn: Function) => (event: FError) => any;
};
export default _default;
