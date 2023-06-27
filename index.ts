type ttt = Promise<Promise<Promise<1 | 2>>>;

type ExtractTypeInsideThePromise<P extends Promise<unknown>> =
  P extends Promise<infer B>
    ? B extends Promise<unknown>
      ? ExtractTypeInsideThePromise<B>
      : B
    : never;

type bc = ExtractTypeInsideThePromise<ttt>;

type Reverse<T> = T extends `${infer A}${infer B}${infer C}`
  ? `${C}${Reverse<B>}${A}`
  : T;
