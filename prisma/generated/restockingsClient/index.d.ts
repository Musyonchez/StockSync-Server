
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
 * Model RestockingDetail
 * 
 */
export type RestockingDetail = $Result.DefaultSelection<Prisma.$RestockingDetailPayload>
/**
 * Model Restockings
 * 
 */
export type Restockings = $Result.DefaultSelection<Prisma.$RestockingsPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Restockings
 * const restockings = await prisma.restockings.findMany()
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
   * // Fetch zero or more Restockings
   * const restockings = await prisma.restockings.findMany()
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
   * `prisma.restockings`: Exposes CRUD operations for the **Restockings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Restockings
    * const restockings = await prisma.restockings.findMany()
    * ```
    */
  get restockings(): Prisma.RestockingsDelegate<ExtArgs>;
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
    Restockings: 'Restockings'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    restockingsDb?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'restockings'
      txIsolationLevel: never
    },
    model: {
      Restockings: {
        payload: Prisma.$RestockingsPayload<ExtArgs>
        fields: Prisma.RestockingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RestockingsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RestockingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RestockingsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RestockingsPayload>
          }
          findFirst: {
            args: Prisma.RestockingsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RestockingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RestockingsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RestockingsPayload>
          }
          findMany: {
            args: Prisma.RestockingsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RestockingsPayload>[]
          }
          create: {
            args: Prisma.RestockingsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RestockingsPayload>
          }
          createMany: {
            args: Prisma.RestockingsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.RestockingsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RestockingsPayload>
          }
          update: {
            args: Prisma.RestockingsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RestockingsPayload>
          }
          deleteMany: {
            args: Prisma.RestockingsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.RestockingsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.RestockingsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RestockingsPayload>
          }
          aggregate: {
            args: Prisma.RestockingsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRestockings>
          }
          groupBy: {
            args: Prisma.RestockingsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RestockingsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.RestockingsFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.RestockingsAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.RestockingsCountArgs<ExtArgs>,
            result: $Utils.Optional<RestockingsCountAggregateOutputType> | number
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
   * Model RestockingDetail
   */





  export type RestockingDetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    current?: boolean
    unitCost?: boolean
    sellingPrice?: boolean
    supplier?: boolean
    quantity?: boolean
  }, ExtArgs["result"]["restockingDetail"]>

  export type RestockingDetailSelectScalar = {
    id?: boolean
    name?: boolean
    category?: boolean
    current?: boolean
    unitCost?: boolean
    sellingPrice?: boolean
    supplier?: boolean
    quantity?: boolean
  }


  export type $RestockingDetailPayload = {
    name: "RestockingDetail"
    objects: {}
    scalars: {
      id: string
      name: string
      category: string | null
      current: number | null
      unitCost: number | null
      sellingPrice: number | null
      supplier: string | null
      quantity: number | null
    }
    composites: {}
  }


  type RestockingDetailGetPayload<S extends boolean | null | undefined | RestockingDetailDefaultArgs> = $Result.GetResult<Prisma.$RestockingDetailPayload, S>





  /**
   * Fields of the RestockingDetail model
   */ 
  interface RestockingDetailFieldRefs {
    readonly id: FieldRef<"RestockingDetail", 'String'>
    readonly name: FieldRef<"RestockingDetail", 'String'>
    readonly category: FieldRef<"RestockingDetail", 'String'>
    readonly current: FieldRef<"RestockingDetail", 'Float'>
    readonly unitCost: FieldRef<"RestockingDetail", 'Float'>
    readonly sellingPrice: FieldRef<"RestockingDetail", 'Float'>
    readonly supplier: FieldRef<"RestockingDetail", 'String'>
    readonly quantity: FieldRef<"RestockingDetail", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * RestockingDetail without action
   */
  export type RestockingDetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestockingDetail
     */
    select?: RestockingDetailSelect<ExtArgs> | null
  }



  /**
   * Model Restockings
   */

  export type AggregateRestockings = {
    _count: RestockingsCountAggregateOutputType | null
    _avg: RestockingsAvgAggregateOutputType | null
    _sum: RestockingsSumAggregateOutputType | null
    _min: RestockingsMinAggregateOutputType | null
    _max: RestockingsMaxAggregateOutputType | null
  }

  export type RestockingsAvgAggregateOutputType = {
    totalAmount: number | null
  }

  export type RestockingsSumAggregateOutputType = {
    totalAmount: number | null
  }

  export type RestockingsMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    creatorId: string | null
    creatorName: string | null
    totalAmount: number | null
  }

  export type RestockingsMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    creatorId: string | null
    creatorName: string | null
    totalAmount: number | null
  }

  export type RestockingsCountAggregateOutputType = {
    id: number
    createdAt: number
    creatorId: number
    creatorName: number
    totalAmount: number
    _all: number
  }


  export type RestockingsAvgAggregateInputType = {
    totalAmount?: true
  }

  export type RestockingsSumAggregateInputType = {
    totalAmount?: true
  }

  export type RestockingsMinAggregateInputType = {
    id?: true
    createdAt?: true
    creatorId?: true
    creatorName?: true
    totalAmount?: true
  }

  export type RestockingsMaxAggregateInputType = {
    id?: true
    createdAt?: true
    creatorId?: true
    creatorName?: true
    totalAmount?: true
  }

  export type RestockingsCountAggregateInputType = {
    id?: true
    createdAt?: true
    creatorId?: true
    creatorName?: true
    totalAmount?: true
    _all?: true
  }

  export type RestockingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Restockings to aggregate.
     */
    where?: RestockingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restockings to fetch.
     */
    orderBy?: RestockingsOrderByWithRelationInput | RestockingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RestockingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restockings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restockings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Restockings
    **/
    _count?: true | RestockingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RestockingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RestockingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RestockingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RestockingsMaxAggregateInputType
  }

  export type GetRestockingsAggregateType<T extends RestockingsAggregateArgs> = {
        [P in keyof T & keyof AggregateRestockings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRestockings[P]>
      : GetScalarType<T[P], AggregateRestockings[P]>
  }




  export type RestockingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RestockingsWhereInput
    orderBy?: RestockingsOrderByWithAggregationInput | RestockingsOrderByWithAggregationInput[]
    by: RestockingsScalarFieldEnum[] | RestockingsScalarFieldEnum
    having?: RestockingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RestockingsCountAggregateInputType | true
    _avg?: RestockingsAvgAggregateInputType
    _sum?: RestockingsSumAggregateInputType
    _min?: RestockingsMinAggregateInputType
    _max?: RestockingsMaxAggregateInputType
  }

  export type RestockingsGroupByOutputType = {
    id: string
    createdAt: Date
    creatorId: string
    creatorName: string
    totalAmount: number
    _count: RestockingsCountAggregateOutputType | null
    _avg: RestockingsAvgAggregateOutputType | null
    _sum: RestockingsSumAggregateOutputType | null
    _min: RestockingsMinAggregateOutputType | null
    _max: RestockingsMaxAggregateOutputType | null
  }

  type GetRestockingsGroupByPayload<T extends RestockingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RestockingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RestockingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RestockingsGroupByOutputType[P]>
            : GetScalarType<T[P], RestockingsGroupByOutputType[P]>
        }
      >
    >


  export type RestockingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    details?: boolean | RestockingDetailDefaultArgs<ExtArgs>
    createdAt?: boolean
    creatorId?: boolean
    creatorName?: boolean
    totalAmount?: boolean
  }, ExtArgs["result"]["restockings"]>

  export type RestockingsSelectScalar = {
    id?: boolean
    createdAt?: boolean
    creatorId?: boolean
    creatorName?: boolean
    totalAmount?: boolean
  }

  export type RestockingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}


  export type $RestockingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Restockings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      creatorId: string
      creatorName: string
      totalAmount: number
    }, ExtArgs["result"]["restockings"]>
    composites: {
      details: Prisma.$RestockingDetailPayload[]
    }
  }


  type RestockingsGetPayload<S extends boolean | null | undefined | RestockingsDefaultArgs> = $Result.GetResult<Prisma.$RestockingsPayload, S>

  type RestockingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RestockingsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RestockingsCountAggregateInputType | true
    }

  export interface RestockingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Restockings'], meta: { name: 'Restockings' } }
    /**
     * Find zero or one Restockings that matches the filter.
     * @param {RestockingsFindUniqueArgs} args - Arguments to find a Restockings
     * @example
     * // Get one Restockings
     * const restockings = await prisma.restockings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RestockingsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, RestockingsFindUniqueArgs<ExtArgs>>
    ): Prisma__RestockingsClient<$Result.GetResult<Prisma.$RestockingsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Restockings that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RestockingsFindUniqueOrThrowArgs} args - Arguments to find a Restockings
     * @example
     * // Get one Restockings
     * const restockings = await prisma.restockings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RestockingsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RestockingsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RestockingsClient<$Result.GetResult<Prisma.$RestockingsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Restockings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestockingsFindFirstArgs} args - Arguments to find a Restockings
     * @example
     * // Get one Restockings
     * const restockings = await prisma.restockings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RestockingsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, RestockingsFindFirstArgs<ExtArgs>>
    ): Prisma__RestockingsClient<$Result.GetResult<Prisma.$RestockingsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Restockings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestockingsFindFirstOrThrowArgs} args - Arguments to find a Restockings
     * @example
     * // Get one Restockings
     * const restockings = await prisma.restockings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RestockingsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RestockingsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RestockingsClient<$Result.GetResult<Prisma.$RestockingsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Restockings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestockingsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Restockings
     * const restockings = await prisma.restockings.findMany()
     * 
     * // Get first 10 Restockings
     * const restockings = await prisma.restockings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const restockingsWithIdOnly = await prisma.restockings.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RestockingsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RestockingsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestockingsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Restockings.
     * @param {RestockingsCreateArgs} args - Arguments to create a Restockings.
     * @example
     * // Create one Restockings
     * const Restockings = await prisma.restockings.create({
     *   data: {
     *     // ... data to create a Restockings
     *   }
     * })
     * 
    **/
    create<T extends RestockingsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RestockingsCreateArgs<ExtArgs>>
    ): Prisma__RestockingsClient<$Result.GetResult<Prisma.$RestockingsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Restockings.
     *     @param {RestockingsCreateManyArgs} args - Arguments to create many Restockings.
     *     @example
     *     // Create many Restockings
     *     const restockings = await prisma.restockings.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RestockingsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RestockingsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Restockings.
     * @param {RestockingsDeleteArgs} args - Arguments to delete one Restockings.
     * @example
     * // Delete one Restockings
     * const Restockings = await prisma.restockings.delete({
     *   where: {
     *     // ... filter to delete one Restockings
     *   }
     * })
     * 
    **/
    delete<T extends RestockingsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RestockingsDeleteArgs<ExtArgs>>
    ): Prisma__RestockingsClient<$Result.GetResult<Prisma.$RestockingsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Restockings.
     * @param {RestockingsUpdateArgs} args - Arguments to update one Restockings.
     * @example
     * // Update one Restockings
     * const restockings = await prisma.restockings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RestockingsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RestockingsUpdateArgs<ExtArgs>>
    ): Prisma__RestockingsClient<$Result.GetResult<Prisma.$RestockingsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Restockings.
     * @param {RestockingsDeleteManyArgs} args - Arguments to filter Restockings to delete.
     * @example
     * // Delete a few Restockings
     * const { count } = await prisma.restockings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RestockingsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RestockingsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Restockings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestockingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Restockings
     * const restockings = await prisma.restockings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RestockingsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RestockingsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Restockings.
     * @param {RestockingsUpsertArgs} args - Arguments to update or create a Restockings.
     * @example
     * // Update or create a Restockings
     * const restockings = await prisma.restockings.upsert({
     *   create: {
     *     // ... data to create a Restockings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Restockings we want to update
     *   }
     * })
    **/
    upsert<T extends RestockingsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RestockingsUpsertArgs<ExtArgs>>
    ): Prisma__RestockingsClient<$Result.GetResult<Prisma.$RestockingsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Restockings that matches the filter.
     * @param {RestockingsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const restockings = await prisma.restockings.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: RestockingsFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Restockings.
     * @param {RestockingsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const restockings = await prisma.restockings.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: RestockingsAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Restockings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestockingsCountArgs} args - Arguments to filter Restockings to count.
     * @example
     * // Count the number of Restockings
     * const count = await prisma.restockings.count({
     *   where: {
     *     // ... the filter for the Restockings we want to count
     *   }
     * })
    **/
    count<T extends RestockingsCountArgs>(
      args?: Subset<T, RestockingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RestockingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Restockings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestockingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RestockingsAggregateArgs>(args: Subset<T, RestockingsAggregateArgs>): Prisma.PrismaPromise<GetRestockingsAggregateType<T>>

    /**
     * Group by Restockings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestockingsGroupByArgs} args - Group by arguments.
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
      T extends RestockingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RestockingsGroupByArgs['orderBy'] }
        : { orderBy?: RestockingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RestockingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRestockingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Restockings model
   */
  readonly fields: RestockingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Restockings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RestockingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Restockings model
   */ 
  interface RestockingsFieldRefs {
    readonly id: FieldRef<"Restockings", 'String'>
    readonly createdAt: FieldRef<"Restockings", 'DateTime'>
    readonly creatorId: FieldRef<"Restockings", 'String'>
    readonly creatorName: FieldRef<"Restockings", 'String'>
    readonly totalAmount: FieldRef<"Restockings", 'Float'>
  }
    

  // Custom InputTypes

  /**
   * Restockings findUnique
   */
  export type RestockingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restockings
     */
    select?: RestockingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RestockingsInclude<ExtArgs> | null
    /**
     * Filter, which Restockings to fetch.
     */
    where: RestockingsWhereUniqueInput
  }


  /**
   * Restockings findUniqueOrThrow
   */
  export type RestockingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restockings
     */
    select?: RestockingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RestockingsInclude<ExtArgs> | null
    /**
     * Filter, which Restockings to fetch.
     */
    where: RestockingsWhereUniqueInput
  }


  /**
   * Restockings findFirst
   */
  export type RestockingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restockings
     */
    select?: RestockingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RestockingsInclude<ExtArgs> | null
    /**
     * Filter, which Restockings to fetch.
     */
    where?: RestockingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restockings to fetch.
     */
    orderBy?: RestockingsOrderByWithRelationInput | RestockingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Restockings.
     */
    cursor?: RestockingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restockings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restockings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Restockings.
     */
    distinct?: RestockingsScalarFieldEnum | RestockingsScalarFieldEnum[]
  }


  /**
   * Restockings findFirstOrThrow
   */
  export type RestockingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restockings
     */
    select?: RestockingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RestockingsInclude<ExtArgs> | null
    /**
     * Filter, which Restockings to fetch.
     */
    where?: RestockingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restockings to fetch.
     */
    orderBy?: RestockingsOrderByWithRelationInput | RestockingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Restockings.
     */
    cursor?: RestockingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restockings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restockings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Restockings.
     */
    distinct?: RestockingsScalarFieldEnum | RestockingsScalarFieldEnum[]
  }


  /**
   * Restockings findMany
   */
  export type RestockingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restockings
     */
    select?: RestockingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RestockingsInclude<ExtArgs> | null
    /**
     * Filter, which Restockings to fetch.
     */
    where?: RestockingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restockings to fetch.
     */
    orderBy?: RestockingsOrderByWithRelationInput | RestockingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Restockings.
     */
    cursor?: RestockingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restockings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restockings.
     */
    skip?: number
    distinct?: RestockingsScalarFieldEnum | RestockingsScalarFieldEnum[]
  }


  /**
   * Restockings create
   */
  export type RestockingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restockings
     */
    select?: RestockingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RestockingsInclude<ExtArgs> | null
    /**
     * The data needed to create a Restockings.
     */
    data: XOR<RestockingsCreateInput, RestockingsUncheckedCreateInput>
  }


  /**
   * Restockings createMany
   */
  export type RestockingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Restockings.
     */
    data: RestockingsCreateManyInput | RestockingsCreateManyInput[]
  }


  /**
   * Restockings update
   */
  export type RestockingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restockings
     */
    select?: RestockingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RestockingsInclude<ExtArgs> | null
    /**
     * The data needed to update a Restockings.
     */
    data: XOR<RestockingsUpdateInput, RestockingsUncheckedUpdateInput>
    /**
     * Choose, which Restockings to update.
     */
    where: RestockingsWhereUniqueInput
  }


  /**
   * Restockings updateMany
   */
  export type RestockingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Restockings.
     */
    data: XOR<RestockingsUpdateManyMutationInput, RestockingsUncheckedUpdateManyInput>
    /**
     * Filter which Restockings to update
     */
    where?: RestockingsWhereInput
  }


  /**
   * Restockings upsert
   */
  export type RestockingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restockings
     */
    select?: RestockingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RestockingsInclude<ExtArgs> | null
    /**
     * The filter to search for the Restockings to update in case it exists.
     */
    where: RestockingsWhereUniqueInput
    /**
     * In case the Restockings found by the `where` argument doesn't exist, create a new Restockings with this data.
     */
    create: XOR<RestockingsCreateInput, RestockingsUncheckedCreateInput>
    /**
     * In case the Restockings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RestockingsUpdateInput, RestockingsUncheckedUpdateInput>
  }


  /**
   * Restockings delete
   */
  export type RestockingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restockings
     */
    select?: RestockingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RestockingsInclude<ExtArgs> | null
    /**
     * Filter which Restockings to delete.
     */
    where: RestockingsWhereUniqueInput
  }


  /**
   * Restockings deleteMany
   */
  export type RestockingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Restockings to delete
     */
    where?: RestockingsWhereInput
  }


  /**
   * Restockings findRaw
   */
  export type RestockingsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Restockings aggregateRaw
   */
  export type RestockingsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Restockings without action
   */
  export type RestockingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restockings
     */
    select?: RestockingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RestockingsInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const RestockingsScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    creatorId: 'creatorId',
    creatorName: 'creatorName',
    totalAmount: 'totalAmount'
  };

  export type RestockingsScalarFieldEnum = (typeof RestockingsScalarFieldEnum)[keyof typeof RestockingsScalarFieldEnum]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type RestockingsWhereInput = {
    AND?: RestockingsWhereInput | RestockingsWhereInput[]
    OR?: RestockingsWhereInput[]
    NOT?: RestockingsWhereInput | RestockingsWhereInput[]
    id?: StringFilter<"Restockings"> | string
    details?: RestockingDetailCompositeListFilter | RestockingDetailObjectEqualityInput[]
    createdAt?: DateTimeFilter<"Restockings"> | Date | string
    creatorId?: StringFilter<"Restockings"> | string
    creatorName?: StringFilter<"Restockings"> | string
    totalAmount?: FloatFilter<"Restockings"> | number
  }

  export type RestockingsOrderByWithRelationInput = {
    id?: SortOrder
    details?: RestockingDetailOrderByCompositeAggregateInput
    createdAt?: SortOrder
    creatorId?: SortOrder
    creatorName?: SortOrder
    totalAmount?: SortOrder
  }

  export type RestockingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RestockingsWhereInput | RestockingsWhereInput[]
    OR?: RestockingsWhereInput[]
    NOT?: RestockingsWhereInput | RestockingsWhereInput[]
    details?: RestockingDetailCompositeListFilter | RestockingDetailObjectEqualityInput[]
    createdAt?: DateTimeFilter<"Restockings"> | Date | string
    creatorId?: StringFilter<"Restockings"> | string
    creatorName?: StringFilter<"Restockings"> | string
    totalAmount?: FloatFilter<"Restockings"> | number
  }, "id">

  export type RestockingsOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    creatorId?: SortOrder
    creatorName?: SortOrder
    totalAmount?: SortOrder
    _count?: RestockingsCountOrderByAggregateInput
    _avg?: RestockingsAvgOrderByAggregateInput
    _max?: RestockingsMaxOrderByAggregateInput
    _min?: RestockingsMinOrderByAggregateInput
    _sum?: RestockingsSumOrderByAggregateInput
  }

  export type RestockingsScalarWhereWithAggregatesInput = {
    AND?: RestockingsScalarWhereWithAggregatesInput | RestockingsScalarWhereWithAggregatesInput[]
    OR?: RestockingsScalarWhereWithAggregatesInput[]
    NOT?: RestockingsScalarWhereWithAggregatesInput | RestockingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Restockings"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Restockings"> | Date | string
    creatorId?: StringWithAggregatesFilter<"Restockings"> | string
    creatorName?: StringWithAggregatesFilter<"Restockings"> | string
    totalAmount?: FloatWithAggregatesFilter<"Restockings"> | number
  }

  export type RestockingsCreateInput = {
    id?: string
    details?: XOR<RestockingDetailListCreateEnvelopeInput, RestockingDetailCreateInput> | RestockingDetailCreateInput[]
    createdAt?: Date | string
    creatorId: string
    creatorName: string
    totalAmount: number
  }

  export type RestockingsUncheckedCreateInput = {
    id?: string
    details?: XOR<RestockingDetailListCreateEnvelopeInput, RestockingDetailCreateInput> | RestockingDetailCreateInput[]
    createdAt?: Date | string
    creatorId: string
    creatorName: string
    totalAmount: number
  }

  export type RestockingsUpdateInput = {
    details?: XOR<RestockingDetailListUpdateEnvelopeInput, RestockingDetailCreateInput> | RestockingDetailCreateInput[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: StringFieldUpdateOperationsInput | string
    creatorName?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
  }

  export type RestockingsUncheckedUpdateInput = {
    details?: XOR<RestockingDetailListUpdateEnvelopeInput, RestockingDetailCreateInput> | RestockingDetailCreateInput[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: StringFieldUpdateOperationsInput | string
    creatorName?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
  }

  export type RestockingsCreateManyInput = {
    id?: string
    details?: XOR<RestockingDetailListCreateEnvelopeInput, RestockingDetailCreateInput> | RestockingDetailCreateInput[]
    createdAt?: Date | string
    creatorId: string
    creatorName: string
    totalAmount: number
  }

  export type RestockingsUpdateManyMutationInput = {
    details?: XOR<RestockingDetailListUpdateEnvelopeInput, RestockingDetailCreateInput> | RestockingDetailCreateInput[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: StringFieldUpdateOperationsInput | string
    creatorName?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
  }

  export type RestockingsUncheckedUpdateManyInput = {
    details?: XOR<RestockingDetailListUpdateEnvelopeInput, RestockingDetailCreateInput> | RestockingDetailCreateInput[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: StringFieldUpdateOperationsInput | string
    creatorName?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
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

  export type RestockingDetailCompositeListFilter = {
    equals?: RestockingDetailObjectEqualityInput[]
    every?: RestockingDetailWhereInput
    some?: RestockingDetailWhereInput
    none?: RestockingDetailWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type RestockingDetailObjectEqualityInput = {
    id: string
    name: string
    category?: string | null
    current?: number | null
    unitCost?: number | null
    sellingPrice?: number | null
    supplier?: string | null
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type RestockingDetailOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type RestockingsCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    creatorId?: SortOrder
    creatorName?: SortOrder
    totalAmount?: SortOrder
  }

  export type RestockingsAvgOrderByAggregateInput = {
    totalAmount?: SortOrder
  }

  export type RestockingsMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    creatorId?: SortOrder
    creatorName?: SortOrder
    totalAmount?: SortOrder
  }

  export type RestockingsMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    creatorId?: SortOrder
    creatorName?: SortOrder
    totalAmount?: SortOrder
  }

  export type RestockingsSumOrderByAggregateInput = {
    totalAmount?: SortOrder
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type RestockingDetailListCreateEnvelopeInput = {
    set?: RestockingDetailCreateInput | RestockingDetailCreateInput[]
  }

  export type RestockingDetailCreateInput = {
    id: string
    name: string
    category?: string | null
    current?: number | null
    unitCost?: number | null
    sellingPrice?: number | null
    supplier?: string | null
    quantity?: number | null
  }

  export type RestockingDetailListUpdateEnvelopeInput = {
    set?: RestockingDetailCreateInput | RestockingDetailCreateInput[]
    push?: RestockingDetailCreateInput | RestockingDetailCreateInput[]
    updateMany?: RestockingDetailUpdateManyInput
    deleteMany?: RestockingDetailDeleteManyInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type RestockingDetailWhereInput = {
    AND?: RestockingDetailWhereInput | RestockingDetailWhereInput[]
    OR?: RestockingDetailWhereInput[]
    NOT?: RestockingDetailWhereInput | RestockingDetailWhereInput[]
    id?: StringFilter<"RestockingDetail"> | string
    name?: StringFilter<"RestockingDetail"> | string
    category?: StringNullableFilter<"RestockingDetail"> | string | null
    current?: FloatNullableFilter<"RestockingDetail"> | number | null
    unitCost?: FloatNullableFilter<"RestockingDetail"> | number | null
    sellingPrice?: FloatNullableFilter<"RestockingDetail"> | number | null
    supplier?: StringNullableFilter<"RestockingDetail"> | string | null
    quantity?: IntNullableFilter<"RestockingDetail"> | number | null
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

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type RestockingDetailUpdateManyInput = {
    where: RestockingDetailWhereInput
    data: RestockingDetailUpdateInput
  }

  export type RestockingDetailDeleteManyInput = {
    where: RestockingDetailWhereInput
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

  export type RestockingDetailUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    current?: NullableFloatFieldUpdateOperationsInput | number | null
    unitCost?: NullableFloatFieldUpdateOperationsInput | number | null
    sellingPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    supplier?: NullableStringFieldUpdateOperationsInput | string | null
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
     * @deprecated Use RestockingDetailDefaultArgs instead
     */
    export type RestockingDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RestockingDetailDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RestockingsDefaultArgs instead
     */
    export type RestockingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RestockingsDefaultArgs<ExtArgs>

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