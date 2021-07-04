// Promise<ExampleType>

type FromPromise<T extends Promise<any>> = T extends Promise<infer R> ? R : never;

type PromiseType = FromPromise<Promise<number>>