/*
  2257 - MinusOne
  -------
  by Mustafo Faiz (@fayzzzm) #medium #math

  ### Question

  Given a number (always positive) as a type. Your type should return the number decreased by one.

  For example:

  ```ts
  type Zero = MinusOne<1> // 0
  type FiftyFour = MinusOne<55> // 54
  ```

  > View on GitHub: https://tsch.js.org/2257
*/

/* _____________ Your Code Here _____________ */
// TODO: use util push pop etc.

type NumberToString<T extends number | string> = `${T}`
type StringToNumber<T extends string> = T extends `${infer N extends number}` ? N : never


type ShiftDigit = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8]

type MinusOne<T extends number> = StringToNumber<ReverseString<ReverseString<NumberToString<T>> extends `${infer LastD extends number}${infer Rest}` ? `${ShiftDigit[LastD]}${Rest}` : ''>>

type t = MinusOne<1101>
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'
import { ReverseString } from '../../utils/utils'
type cases = [
  Expect<Equal<MinusOne<1>, 0>>,
  Expect<Equal<MinusOne<55>, 54>>,
  Expect<Equal<MinusOne<3>, 2>>,
  Expect<Equal<MinusOne<100>, 99>>,
  Expect<Equal<MinusOne<1101>, 1100>>,
  Expect<Equal<MinusOne<0>, -1>>,
  Expect<Equal<MinusOne<9_007_199_254_740_992>, 9_007_199_254_740_991>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/2257/answer
  > View solutions: https://tsch.js.org/2257/solutions
  > More Challenges: https://tsch.js.org
*/
