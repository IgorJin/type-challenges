type Concat<X extends Array<any>, U extends any[]> = [...X, ...U];

type Result = Concat<[1], [2]> // expected to be [1, 2]
