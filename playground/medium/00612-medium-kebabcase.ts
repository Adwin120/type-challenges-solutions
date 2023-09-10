/*
  612 - KebabCase
  -------
  by Johnson Chu (@johnsoncodehk) #medium #template-literal

  ### Question

  Replace the `camelCase` or `PascalCase` string with `kebab-case`.

  `FooBarBaz` -> `foo-bar-baz`

  For example

  ```ts
  type FooBarBaz = KebabCase<"FooBarBaz">
  const foobarbaz: FooBarBaz = "foo-bar-baz"

  type DoNothing = KebabCase<"do-nothing">
  const doNothing: DoNothing = "do-nothing"
  ```

  > View on GitHub: https://tsch.js.org/612
*/

/* _____________ Your Code Here _____________ */

type UpperCaseLetters =  StringToArray<'ABCDEFGHIJKLMNOPQRSTUVWXYZ'>[number]

type KebabCaseRec<S extends string> = S extends `${infer Head}${infer Tail}` 
  ? Head extends UpperCaseLetters
    ? `-${Lowercase<Head>}${KebabCaseRec<Tail>}`
    : `${Head}${KebabCaseRec<Tail>}`
  : ""

type StripFirstDash<S extends string> = S extends `-${infer Rest}` ? Rest : S

type KebabCase<S extends string> = LengthOfString<S> extends 1 ? KebabCaseRec<S> : StripFirstDash<KebabCaseRec<S>>

type t = KebabCase<'-'>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'
import type { StringToArray } from '../../utils/utils'
import { LengthOfString } from './00298-medium-length-of-string'

type cases = [
  Expect<Equal<KebabCase<'FooBarBaz'>, 'foo-bar-baz'>>,
  Expect<Equal<KebabCase<'fooBarBaz'>, 'foo-bar-baz'>>,
  Expect<Equal<KebabCase<'foo-bar'>, 'foo-bar'>>,
  Expect<Equal<KebabCase<'foo_bar'>, 'foo_bar'>>,
  Expect<Equal<KebabCase<'Foo-Bar'>, 'foo--bar'>>,
  Expect<Equal<KebabCase<'ABC'>, 'a-b-c'>>,
  Expect<Equal<KebabCase<'-'>, '-'>>,
  Expect<Equal<KebabCase<''>, ''>>,
  Expect<Equal<KebabCase<'😎'>, '😎'>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/612/answer
  > View solutions: https://tsch.js.org/612/solutions
  > More Challenges: https://tsch.js.org
*/
