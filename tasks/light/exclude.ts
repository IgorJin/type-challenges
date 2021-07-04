//Exclude from T those types that are assignable to U

type T0 = Exclude<"a" | "b" | "c", "a">; //type T0 = "b" | "c"

type MyExclude<T, U> = T extends U ? never : T

type T1 = MyExclude<"a" | "b" | "c", "a">; //type T1 = "b" | "c"