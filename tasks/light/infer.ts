type R = { a: number }

type MyType<T> = T extends infer R ? R : never; // infer R from T
type MyType2<T> = T extends R ? R : never; // compare T with R

type T1 = MyType<{b: string}> // T1 is { b: string; }
type T2 = MyType2<{b: string}> // T2 is never


type Foo<T> = T extends { a: infer U; b: infer U } ? U : never;
type T10 = Foo<{ a: string; b: string }>; // string
type T11 = Foo<{ a: string; b: number }>; // string | number