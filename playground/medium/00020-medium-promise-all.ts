/*
  20 - Promise.all
  -------
  by Anthony Fu (@antfu) #medium #array #promise

  ### Question

  Type the function `PromiseAll` that accepts an array of PromiseLike objects, the returning value should be `Promise<T>` where `T` is the resolved result array.

  ```ts
  const promise1 = Promise.resolve(3);
  const promise2 = 42;
  const promise3 = new Promise<string>((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
  });

  // expected to be `Promise<[number, 42, string]>`
  const p = PromiseAll([promise1, promise2, promise3] as const)
  ```

  > View on GitHub: https://tsch.js.org/20
*/

type FlattenPromise<T> = T extends Promise<infer U> ? U : T

/* _____________ Your Code Here _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

// TODO: test hypothesis that recursion ([infer X, ...infer Xs]) works only for tuples, MapF<T[number]> only for arrays and {P in keyof T}: MapF<T[P]> on both
// to do that go through all my other solutions and try changing the approach

declare function PromiseAll<T extends unknown[]>(values: readonly [...T]): Promise<{
  [P in keyof T]: FlattenPromise<T[P]>
}>

/* _____________ Test Cases _____________ */

const promiseAllTest1 = PromiseAll([1, 2, 3] as const)
const promiseAllTest2 = PromiseAll([1, 2, Promise.resolve(3)] as const)
const promiseAllTest3 = PromiseAll([1, 2, Promise.resolve(3)])
const promiseAllTest4 = PromiseAll<Array<number | Promise<number>>>([1, 2, 3])

type cases = [
  Expect<Equal<typeof promiseAllTest1, Promise<[1, 2, 3]>>>,
  Expect<Equal<typeof promiseAllTest2, Promise<[1, 2, number]>>>,
  Expect<Equal<typeof promiseAllTest3, Promise<[number, number, number]>>>,
  Expect<Equal<typeof promiseAllTest4, Promise<number[]>>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/20/answer
  > View solutions: https://tsch.js.org/20/solutions
  > More Challenges: https://tsch.js.org
*/
