function getProperty<T, K extends keyof T>(obj: T, prop: K) {
  return obj[prop]
}

interface oX {
  a: string;
}

const x = {
  a: 'hi',
  b: 1,
}

const a = getProperty(x, 'a')
//const m = getProperty(x, 'm') //error