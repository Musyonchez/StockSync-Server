
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model WriteoffDetail
 * 
 */
export type WriteoffDetail = $Result.DefaultSelection<Prisma.$WriteoffDetailPayload>
/**
 * Model Writeoffs
 * 
 */
export type Writeoffs = $Result.DefaultSelection<Prisma.$WriteoffsPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Writeoffs
 * const writeoffs = await prisma.writeoffs.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Writeoffs
   * const writeoffs = await prisma.writeoffs.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.writeoffs`: Exposes CRUD operations for the **Writeoffs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Writeoffs
    * const writeoffs = await prisma.writeoffs.findMany()
    * ```
    */
  get writeoffs(): Prisma.WriteoffsDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.8.1
   * Query Engine version: 78caf6feeaed953168c64e15a249c3e9a033ebe2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Writeoffs: 'Writeoffs'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    writeoffsDb?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'writeoffs'
      txIsolationLevel: never
    },
    model: {
      Writeoffs: {
        payload: Prisma.$WriteoffsPayload<ExtArgs>
        fields: Prisma.WriteoffsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WriteoffsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WriteoffsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WriteoffsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WriteoffsPayload>
          }
          findFirst: {
            args: Prisma.WriteoffsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WriteoffsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WriteoffsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WriteoffsPayload>
          }
          findMany: {
            args: Prisma.WriteoffsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WriteoffsPayload>[]
          }
          create: {
            args: Prisma.WriteoffsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WriteoffsPayload>
          }
          createMany: {
            args: Prisma.WriteoffsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.WriteoffsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WriteoffsPayload>
          }
          update: {
            args: Prisma.WriteoffsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WriteoffsPayload>
          }
          deleteMany: {
            args: Prisma.WriteoffsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.WriteoffsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.WriteoffsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WriteoffsPayload>
          }
          aggregate: {
            args: Prisma.WriteoffsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateWriteoffs>
          }
          groupBy: {
            args: Prisma.WriteoffsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<WriteoffsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.WriteoffsFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.WriteoffsAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.WriteoffsCountArgs<ExtArgs>,
            result: $Utils.Optional<WriteoffsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model WriteoffDetail
   */





  export type WriteoffDetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    current?: boolean
    unitCost?: boolean
    sellingPrice?: boolean
    quantity?: boolean
  }, ExtArgs["result"]["writeoffDetail"]>

  export type WriteoffDetailSelectScalar = {
    id?: boolean
    name?: boolean
    category?: boolean
    current?: boolean
    unitCost?: boolean
    sellingPrice?: boolean
    quantity?: boolean
  }


  export type $WriteoffDetailPayload = {
    name: "WriteoffDetail"
    objects: {}
    scalars: {
      id: string
      name: string
      category: string | null
      current: number | null
      unitCost: number | null
      sellingPrice: number | null
      quantity: number | null
    }
    composites: {}
  }


  type WriteoffDetailGetPayload<S extends boolean | null | undefined | WriteoffDetailDefaultArgs> = $Result.GetResult<Prisma.$WriteoffDetailPayload, S>





  /**
   * Fields of the WriteoffDetail model
   */ 
  interface WriteoffDetailFieldRefs {
    readonly id: FieldRef<"WriteoffDetail", 'String'>
    readonly name: FieldRef<"WriteoffDetail", 'String'>
    readonly category: FieldRef<"WriteoffDetail", 'String'>
    readonly current: FieldRef<"WriteoffDetail", 'Float'>
    readonly unitCost: FieldRef<"WriteoffDetail", 'Float'>
    readonly sellingPrice: FieldRef<"WriteoffDetail", 'Float'>
    readonly quantity: FieldRef<"WriteoffDetail", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * WriteoffDetail without action
   */
  export type WriteoffDetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WriteoffDetail
     */
    select?: WriteoffDetailSelect<ExtArgs> | null
  }



  /**
   * Model Writeoffs
   */

  export type AggregateWriteoffs = {
    _count: WriteoffsCountAggregateOutputType | null
    _min: WriteoffsMinAggregateOutputType | null
    _max: WriteoffsMaxAggregateOutputType | null
  }

  export type WriteoffsMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    creatorId: string | null
    creatorName: string | null
    Reason: string | null
  }

  export type WriteoffsMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    creatorId: string | null
    creatorName: string | null
    Reason: string | null
  }

  export type WriteoffsCountAggregateOutputType = {
    id: number
    createdAt: number
    creatorId: number
    creatorName: number
    Reason: number
    _all: number
  }


  export type WriteoffsMinAggregateInputType = {
    id?: true
    createdAt?: true
    creatorId?: true
    creatorName?: true
    Reason?: true
  }

  export type WriteoffsMaxAggregateInputType = {
    id?: true
    createdAt?: true
    creatorId?: true
    creatorName?: true
    Reason?: true
  }

  export type WriteoffsCountAggregateInputType = {
    id?: true
    createdAt?: true
    creatorId?: true
    creatorName?: true
    Reason?: true
    _all?: true
  }

  export type WriteoffsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Writeoffs to aggregate.
     */
    where?: WriteoffsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Writeoffs to fetch.
     */
    orderBy?: WriteoffsOrderByWithRelationInput | WriteoffsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WriteoffsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Writeoffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Writeoffs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Writeoffs
    **/
    _count?: true | WriteoffsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WriteoffsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WriteoffsMaxAggregateInputType
  }

  export type GetWriteoffsAggregateType<T extends WriteoffsAggregateArgs> = {
        [P in keyof T & keyof AggregateWriteoffs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWriteoffs[P]>
      : GetScalarType<T[P], AggregateWriteoffs[P]>
  }




  export type WriteoffsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WriteoffsWhereInput
    orderBy?: WriteoffsOrderByWithAggregationInput | WriteoffsOrderByWithAggregationInput[]
    by: WriteoffsScalarFieldEnum[] | WriteoffsScalarFieldEnum
    having?: WriteoffsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WriteoffsCountAggregateInputType | true
    _min?: WriteoffsMinAggregateInputType
    _max?: WriteoffsMaxAggregateInputType
  }

  export type WriteoffsGroupByOutputType = {
    id: string
    createdAt: Date
    creatorId: string
    creatorName: string
    Reason: string
    _count: WriteoffsCountAggregateOutputType | null
    _min: WriteoffsMinAggregateOutputType | null
    _max: WriteoffsMaxAggregateOutputType | null
  }

  type GetWriteoffsGroupByPayload<T extends WriteoffsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WriteoffsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WriteoffsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WriteoffsGroupByOutputType[P]>
            : GetScalarType<T[P], WriteoffsGroupByOutputType[P]>
        }
      >
    >


  export type WriteoffsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    details?: boolean | WriteoffDetailDefaultArgs<ExtArgs>
    createdAt?: boolean
    creatorId?: boolean
    creatorName?: boolean
    Reason?: boolean
  }, ExtArgs["result"]["writeoffs"]>

  export type WriteoffsSelectScalar = {
    id?: boolean
    createdAt?: boolean
    creatorId?: boolean
    creatorName?: boolean
    Reason?: boolean
  }

  export type WriteoffsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}


  export type $WriteoffsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Writeoffs"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      creatorId: string
      creatorName: string
      Reason: string
    }, ExtArgs["result"]["writeoffs"]>
    composites: {
      details: Prisma.$WriteoffDetailPayload[]
    }
  }


  type WriteoffsGetPayload<S extends boolean | null | undefined | WriteoffsDefaultArgs> = $Result.GetResult<Prisma.$WriteoffsPayload, S>

  type WriteoffsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WriteoffsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WriteoffsCountAggregateInputType | true
    }

  export interface WriteoffsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Writeoffs'], meta: { name: 'Writeoffs' } }
    /**
     * Find zero or one Writeoffs that matches the filter.
     * @param {WriteoffsFindUniqueArgs} args - Arguments to find a Writeoffs
     * @example
     * // Get one Writeoffs
     * const writeoffs = await prisma.writeoffs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WriteoffsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, WriteoffsFindUniqueArgs<ExtArgs>>
    ): Prisma__WriteoffsClient<$Result.GetResult<Prisma.$WriteoffsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Writeoffs that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {WriteoffsFindUniqueOrThrowArgs} args - Arguments to find a Writeoffs
     * @example
     * // Get one Writeoffs
     * const writeoffs = await prisma.writeoffs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WriteoffsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WriteoffsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__WriteoffsClient<$Result.GetResult<Prisma.$WriteoffsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Writeoffs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WriteoffsFindFirstArgs} args - Arguments to find a Writeoffs
     * @example
     * // Get one Writeoffs
     * const writeoffs = await prisma.writeoffs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WriteoffsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, WriteoffsFindFirstArgs<ExtArgs>>
    ): Prisma__WriteoffsClient<$Result.GetResult<Prisma.$WriteoffsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Writeoffs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WriteoffsFindFirstOrThrowArgs} args - Arguments to find a Writeoffs
     * @example
     * // Get one Writeoffs
     * const writeoffs = await prisma.writeoffs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WriteoffsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WriteoffsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__WriteoffsClient<$Result.GetResult<Prisma.$WriteoffsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Writeoffs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WriteoffsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Writeoffs
     * const writeoffs = await prisma.writeoffs.findMany()
     * 
     * // Get first 10 Writeoffs
     * const writeoffs = await prisma.writeoffs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const writeoffsWithIdOnly = await prisma.writeoffs.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends WriteoffsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WriteoffsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WriteoffsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Writeoffs.
     * @param {WriteoffsCreateArgs} args - Arguments to create a Writeoffs.
     * @example
     * // Create one Writeoffs
     * const Writeoffs = await prisma.writeoffs.create({
     *   data: {
     *     // ... data to create a Writeoffs
     *   }
     * })
     * 
    **/
    create<T extends WriteoffsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, WriteoffsCreateArgs<ExtArgs>>
    ): Prisma__WriteoffsClient<$Result.GetResult<Prisma.$WriteoffsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Writeoffs.
     *     @param {WriteoffsCreateManyArgs} args - Arguments to create many Writeoffs.
     *     @example
     *     // Create many Writeoffs
     *     const writeoffs = await prisma.writeoffs.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends WriteoffsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WriteoffsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Writeoffs.
     * @param {WriteoffsDeleteArgs} args - Arguments to delete one Writeoffs.
     * @example
     * // Delete one Writeoffs
     * const Writeoffs = await prisma.writeoffs.delete({
     *   where: {
     *     // ... filter to delete one Writeoffs
     *   }
     * })
     * 
    **/
    delete<T extends WriteoffsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, WriteoffsDeleteArgs<ExtArgs>>
    ): Prisma__WriteoffsClient<$Result.GetResult<Prisma.$WriteoffsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Writeoffs.
     * @param {WriteoffsUpdateArgs} args - Arguments to update one Writeoffs.
     * @example
     * // Update one Writeoffs
     * const writeoffs = await prisma.writeoffs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WriteoffsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, WriteoffsUpdateArgs<ExtArgs>>
    ): Prisma__WriteoffsClient<$Result.GetResult<Prisma.$WriteoffsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Writeoffs.
     * @param {WriteoffsDeleteManyArgs} args - Arguments to filter Writeoffs to delete.
     * @example
     * // Delete a few Writeoffs
     * const { count } = await prisma.writeoffs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WriteoffsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WriteoffsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Writeoffs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WriteoffsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Writeoffs
     * const writeoffs = await prisma.writeoffs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WriteoffsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, WriteoffsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Writeoffs.
     * @param {WriteoffsUpsertArgs} args - Arguments to update or create a Writeoffs.
     * @example
     * // Update or create a Writeoffs
     * const writeoffs = await prisma.writeoffs.upsert({
     *   create: {
     *     // ... data to create a Writeoffs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Writeoffs we want to update
     *   }
     * })
    **/
    upsert<T extends WriteoffsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, WriteoffsUpsertArgs<ExtArgs>>
    ): Prisma__WriteoffsClient<$Result.GetResult<Prisma.$WriteoffsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Writeoffs that matches the filter.
     * @param {WriteoffsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const writeoffs = await prisma.writeoffs.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: WriteoffsFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Writeoffs.
     * @param {WriteoffsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const writeoffs = await prisma.writeoffs.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: WriteoffsAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Writeoffs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WriteoffsCountArgs} args - Arguments to filter Writeoffs to count.
     * @example
     * // Count the number of Writeoffs
     * const count = await prisma.writeoffs.count({
     *   where: {
     *     // ... the filter for the Writeoffs we want to count
     *   }
     * })
    **/
    count<T extends WriteoffsCountArgs>(
      args?: Subset<T, WriteoffsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WriteoffsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Writeoffs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WriteoffsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WriteoffsAggregateArgs>(args: Subset<T, WriteoffsAggregateArgs>): Prisma.PrismaPromise<GetWriteoffsAggregateType<T>>

    /**
     * Group by Writeoffs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WriteoffsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WriteoffsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WriteoffsGroupByArgs['orderBy'] }
        : { orderBy?: WriteoffsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WriteoffsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWriteoffsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Writeoffs model
   */
  readonly fields: WriteoffsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Writeoffs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WriteoffsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Writeoffs model
   */ 
  interface WriteoffsFieldRefs {
    readonly id: FieldRef<"Writeoffs", 'String'>
    readonly createdAt: FieldRef<"Writeoffs", 'DateTime'>
    readonly creatorId: FieldRef<"Writeoffs", 'String'>
    readonly creatorName: FieldRef<"Writeoffs", 'String'>
    readonly Reason: FieldRef<"Writeoffs", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Writeoffs findUnique
   */
  export type WriteoffsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Writeoffs
     */
    select?: WriteoffsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WriteoffsInclude<ExtArgs> | null
    /**
     * Filter, which Writeoffs to fetch.
     */
    where: WriteoffsWhereUniqueInput
  }


  /**
   * Writeoffs findUniqueOrThrow
   */
  export type WriteoffsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Writeoffs
     */
    select?: WriteoffsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WriteoffsInclude<ExtArgs> | null
    /**
     * Filter, which Writeoffs to fetch.
     */
    where: WriteoffsWhereUniqueInput
  }


  /**
   * Writeoffs findFirst
   */
  export type WriteoffsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Writeoffs
     */
    select?: WriteoffsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WriteoffsInclude<ExtArgs> | null
    /**
     * Filter, which Writeoffs to fetch.
     */
    where?: WriteoffsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Writeoffs to fetch.
     */
    orderBy?: WriteoffsOrderByWithRelationInput | WriteoffsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Writeoffs.
     */
    cursor?: WriteoffsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Writeoffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Writeoffs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Writeoffs.
     */
    distinct?: WriteoffsScalarFieldEnum | WriteoffsScalarFieldEnum[]
  }


  /**
   * Writeoffs findFirstOrThrow
   */
  export type WriteoffsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Writeoffs
     */
    select?: WriteoffsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WriteoffsInclude<ExtArgs> | null
    /**
     * Filter, which Writeoffs to fetch.
     */
    where?: WriteoffsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Writeoffs to fetch.
     */
    orderBy?: WriteoffsOrderByWithRelationInput | WriteoffsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Writeoffs.
     */
    cursor?: WriteoffsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Writeoffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Writeoffs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Writeoffs.
     */
    distinct?: WriteoffsScalarFieldEnum | WriteoffsScalarFieldEnum[]
  }


  /**
   * Writeoffs findMany
   */
  export type WriteoffsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Writeoffs
     */
    select?: WriteoffsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WriteoffsInclude<ExtArgs> | null
    /**
     * Filter, which Writeoffs to fetch.
     */
    where?: WriteoffsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Writeoffs to fetch.
     */
    orderBy?: WriteoffsOrderByWithRelationInput | WriteoffsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Writeoffs.
     */
    cursor?: WriteoffsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Writeoffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Writeoffs.
     */
    skip?: number
    distinct?: WriteoffsScalarFieldEnum | WriteoffsScalarFieldEnum[]
  }


  /**
   * Writeoffs create
   */
  export type WriteoffsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Writeoffs
     */
    select?: WriteoffsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WriteoffsInclude<ExtArgs> | null
    /**
     * The data needed to create a Writeoffs.
     */
    data: XOR<WriteoffsCreateInput, WriteoffsUncheckedCreateInput>
  }


  /**
   * Writeoffs createMany
   */
  export type WriteoffsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Writeoffs.
     */
    data: WriteoffsCreateManyInput | WriteoffsCreateManyInput[]
  }


  /**
   * Writeoffs update
   */
  export type WriteoffsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Writeoffs
     */
    select?: WriteoffsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WriteoffsInclude<ExtArgs> | null
    /**
     * The data needed to update a Writeoffs.
     */
    data: XOR<WriteoffsUpdateInput, WriteoffsUncheckedUpdateInput>
    /**
     * Choose, which Writeoffs to update.
     */
    where: WriteoffsWhereUniqueInput
  }


  /**
   * Writeoffs updateMany
   */
  export type WriteoffsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Writeoffs.
     */
    data: XOR<WriteoffsUpdateManyMutationInput, WriteoffsUncheckedUpdateManyInput>
    /**
     * Filter which Writeoffs to update
     */
    where?: WriteoffsWhereInput
  }


  /**
   * Writeoffs upsert
   */
  export type WriteoffsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Writeoffs
     */
    select?: WriteoffsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WriteoffsInclude<ExtArgs> | null
    /**
     * The filter to search for the Writeoffs to update in case it exists.
     */
    where: WriteoffsWhereUniqueInput
    /**
     * In case the Writeoffs found by the `where` argument doesn't exist, create a new Writeoffs with this data.
     */
    create: XOR<WriteoffsCreateInput, WriteoffsUncheckedCreateInput>
    /**
     * In case the Writeoffs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WriteoffsUpdateInput, WriteoffsUncheckedUpdateInput>
  }


  /**
   * Writeoffs delete
   */
  export type WriteoffsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Writeoffs
     */
    select?: WriteoffsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WriteoffsInclude<ExtArgs> | null
    /**
     * Filter which Writeoffs to delete.
     */
    where: WriteoffsWhereUniqueInput
  }


  /**
   * Writeoffs deleteMany
   */
  export type WriteoffsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Writeoffs to delete
     */
    where?: WriteoffsWhereInput
  }


  /**
   * Writeoffs findRaw
   */
  export type WriteoffsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Writeoffs aggregateRaw
   */
  export type WriteoffsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Writeoffs without action
   */
  export type WriteoffsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Writeoffs
     */
    select?: WriteoffsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WriteoffsInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const WriteoffsScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    creatorId: 'creatorId',
    creatorName: 'creatorName',
    Reason: 'Reason'
  };

  export type WriteoffsScalarFieldEnum = (typeof WriteoffsScalarFieldEnum)[keyof typeof WriteoffsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type WriteoffsWhereInput = {
    AND?: WriteoffsWhereInput | WriteoffsWhereInput[]
    OR?: WriteoffsWhereInput[]
    NOT?: WriteoffsWhereInput | WriteoffsWhereInput[]
    id?: StringFilter<"Writeoffs"> | string
    details?: WriteoffDetailCompositeListFilter | WriteoffDetailObjectEqualityInput[]
    createdAt?: DateTimeFilter<"Writeoffs"> | Date | string
    creatorId?: StringFilter<"Writeoffs"> | string
    creatorName?: StringFilter<"Writeoffs"> | string
    Reason?: StringFilter<"Writeoffs"> | string
  }

  export type WriteoffsOrderByWithRelationInput = {
    id?: SortOrder
    details?: WriteoffDetailOrderByCompositeAggregateInput
    createdAt?: SortOrder
    creatorId?: SortOrder
    creatorName?: SortOrder
    Reason?: SortOrder
  }

  export type WriteoffsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WriteoffsWhereInput | WriteoffsWhereInput[]
    OR?: WriteoffsWhereInput[]
    NOT?: WriteoffsWhereInput | WriteoffsWhereInput[]
    details?: WriteoffDetailCompositeListFilter | WriteoffDetailObjectEqualityInput[]
    createdAt?: DateTimeFilter<"Writeoffs"> | Date | string
    creatorId?: StringFilter<"Writeoffs"> | string
    creatorName?: StringFilter<"Writeoffs"> | string
    Reason?: StringFilter<"Writeoffs"> | string
  }, "id">

  export type WriteoffsOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    creatorId?: SortOrder
    creatorName?: SortOrder
    Reason?: SortOrder
    _count?: WriteoffsCountOrderByAggregateInput
    _max?: WriteoffsMaxOrderByAggregateInput
    _min?: WriteoffsMinOrderByAggregateInput
  }

  export type WriteoffsScalarWhereWithAggregatesInput = {
    AND?: WriteoffsScalarWhereWithAggregatesInput | WriteoffsScalarWhereWithAggregatesInput[]
    OR?: WriteoffsScalarWhereWithAggregatesInput[]
    NOT?: WriteoffsScalarWhereWithAggregatesInput | WriteoffsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Writeoffs"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Writeoffs"> | Date | string
    creatorId?: StringWithAggregatesFilter<"Writeoffs"> | string
    creatorName?: StringWithAggregatesFilter<"Writeoffs"> | string
    Reason?: StringWithAggregatesFilter<"Writeoffs"> | string
  }

  export type WriteoffsCreateInput = {
    id?: string
    details?: XOR<WriteoffDetailListCreateEnvelopeInput, WriteoffDetailCreateInput> | WriteoffDetailCreateInput[]
    createdAt?: Date | string
    creatorId: string
    creatorName: string
    Reason: string
  }

  export type WriteoffsUncheckedCreateInput = {
    id?: string
    details?: XOR<WriteoffDetailListCreateEnvelopeInput, WriteoffDetailCreateInput> | WriteoffDetailCreateInput[]
    createdAt?: Date | string
    creatorId: string
    creatorName: string
    Reason: string
  }

  export type WriteoffsUpdateInput = {
    details?: XOR<WriteoffDetailListUpdateEnvelopeInput, WriteoffDetailCreateInput> | WriteoffDetailCreateInput[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: StringFieldUpdateOperationsInput | string
    creatorName?: StringFieldUpdateOperationsInput | string
    Reason?: StringFieldUpdateOperationsInput | string
  }

  export type WriteoffsUncheckedUpdateInput = {
    details?: XOR<WriteoffDetailListUpdateEnvelopeInput, WriteoffDetailCreateInput> | WriteoffDetailCreateInput[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: StringFieldUpdateOperationsInput | string
    creatorName?: StringFieldUpdateOperationsInput | string
    Reason?: StringFieldUpdateOperationsInput | string
  }

  export type WriteoffsCreateManyInput = {
    id?: string
    details?: XOR<WriteoffDetailListCreateEnvelopeInput, WriteoffDetailCreateInput> | WriteoffDetailCreateInput[]
    createdAt?: Date | string
    creatorId: string
    creatorName: string
    Reason: string
  }

  export type WriteoffsUpdateManyMutationInput = {
    details?: XOR<WriteoffDetailListUpdateEnvelopeInput, WriteoffDetailCreateInput> | WriteoffDetailCreateInput[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: StringFieldUpdateOperationsInput | string
    creatorName?: StringFieldUpdateOperationsInput | string
    Reason?: StringFieldUpdateOperationsInput | string
  }

  export type WriteoffsUncheckedUpdateManyInput = {
    details?: XOR<WriteoffDetailListUpdateEnvelopeInput, WriteoffDetailCreateInput> | WriteoffDetailCreateInput[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: StringFieldUpdateOperationsInput | string
    creatorName?: StringFieldUpdateOperationsInput | string
    Reason?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type WriteoffDetailCompositeListFilter = {
    equals?: WriteoffDetailObjectEqualityInput[]
    every?: WriteoffDetailWhereInput
    some?: WriteoffDetailWhereInput
    none?: WriteoffDetailWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type WriteoffDetailObjectEqualityInput = {
    id: string
    name: string
    category?: string | null
    current?: number | null
    unitCost?: number | null
    sellingPrice?: number | null
    quantity?: number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type WriteoffDetailOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type WriteoffsCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    creatorId?: SortOrder
    creatorName?: SortOrder
    Reason?: SortOrder
  }

  export type WriteoffsMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    creatorId?: SortOrder
    creatorName?: SortOrder
    Reason?: SortOrder
  }

  export type WriteoffsMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    creatorId?: SortOrder
    creatorName?: SortOrder
    Reason?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type WriteoffDetailListCreateEnvelopeInput = {
    set?: WriteoffDetailCreateInput | WriteoffDetailCreateInput[]
  }

  export type WriteoffDetailCreateInput = {
    id: string
    name: string
    category?: string | null
    current?: number | null
    unitCost?: number | null
    sellingPrice?: number | null
    quantity?: number | null
  }

  export type WriteoffDetailListUpdateEnvelopeInput = {
    set?: WriteoffDetailCreateInput | WriteoffDetailCreateInput[]
    push?: WriteoffDetailCreateInput | WriteoffDetailCreateInput[]
    updateMany?: WriteoffDetailUpdateManyInput
    deleteMany?: WriteoffDetailDeleteManyInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type WriteoffDetailWhereInput = {
    AND?: WriteoffDetailWhereInput | WriteoffDetailWhereInput[]
    OR?: WriteoffDetailWhereInput[]
    NOT?: WriteoffDetailWhereInput | WriteoffDetailWhereInput[]
    id?: StringFilter<"WriteoffDetail"> | string
    name?: StringFilter<"WriteoffDetail"> | string
    category?: StringNullableFilter<"WriteoffDetail"> | string | null
    current?: FloatNullableFilter<"WriteoffDetail"> | number | null
    unitCost?: FloatNullableFilter<"WriteoffDetail"> | number | null
    sellingPrice?: FloatNullableFilter<"WriteoffDetail"> | number | null
    quantity?: IntNullableFilter<"WriteoffDetail"> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type WriteoffDetailUpdateManyInput = {
    where: WriteoffDetailWhereInput
    data: WriteoffDetailUpdateInput
  }

  export type WriteoffDetailDeleteManyInput = {
    where: WriteoffDetailWhereInput
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type WriteoffDetailUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    current?: NullableFloatFieldUpdateOperationsInput | number | null
    unitCost?: NullableFloatFieldUpdateOperationsInput | number | null
    sellingPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use WriteoffDetailDefaultArgs instead
     */
    export type WriteoffDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WriteoffDetailDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WriteoffsDefaultArgs instead
     */
    export type WriteoffsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WriteoffsDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}