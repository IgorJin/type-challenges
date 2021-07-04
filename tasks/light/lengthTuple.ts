type tesla = ['tesla', 'model 3', 'model X', 'model Y']
type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']
type teslaZero = []

type Length<T extends readonly any[]> = T['length'] extends 0 ? never : T['length']

type teslaLength = Length<tesla>  // expected 4
type spaceXLength = Length<spaceX> // expected 5
type teslaZeroLength = Length<teslaZero> // expected 5