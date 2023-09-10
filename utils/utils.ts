export type Whitespace = ' ' | '\n' | '\t'

export type StringToArray<S extends string> = S extends `${infer Head}${infer Tail}`
    ? [Head, ...StringToArray<Tail>]
    : []
export type ReplaceAll<S extends string, From extends string, To extends string> = From extends ''
    ? S
    : S extends `${infer Prefix}${From}${infer Suffix}`
        ? `${Prefix}${To}${ReplaceAll<Suffix, From, To>}`
        : S

// TODO: this could be reused in many previous answers
export type IndexEither<P extends keyof O | keyof O1, O, O1> = 
    P extends keyof O1
        ? O1[P] 
        : P extends keyof O 
            ? O[P] 
            : never

export type IndexMaybe<P, O> = P extends keyof O ? O[P] : never

export type ReverseArray<T extends unknown[]> = T extends [infer Head, ...infer Tail]
? [...ReverseArray<Tail>, Head]
: []

export type ReverseString<T extends string> = T extends `${infer Head}${infer Tail}` ? `${ReverseString<Tail>}${Head}` : ''

export type Pop<T extends unknown[]> = T extends [...infer Rest, unknown] ? Rest : never
export type Push<T extends unknown[], U> = [...T, U]
export type Shift<T extends unknown[]> = T extends [unknown, ...infer Rest] ? Rest : never
export type Unshift<T extends unknown[], U> = [U, ...T]

export type IsNever<T> = [T] extends [never] ? true : false
export type Falsy = 0 | '' | false | [] | Record<string, never> | undefined | null
export type Digit = StringToArray<'0123456789'>[number]