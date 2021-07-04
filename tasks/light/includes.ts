type Includes1<T extends readonly any[], Elem> = {
  [P in T[number]]: true 
}[Elem] extends true ? true : false

type Includes<T extends readonly any[], U> = U extends T[number] ? true : false;

type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Esidisi'> // expected to be `false`
