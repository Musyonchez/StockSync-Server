
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  detectRuntime,
} = require('./runtime/edge')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.8.1
 * Query Engine version: 78caf6feeaed953168c64e15a249c3e9a033ebe2
 */
Prisma.prismaVersion = {
  client: "5.8.1",
  engine: "78caf6feeaed953168c64e15a249c3e9a033ebe2"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */
exports.Prisma.TransactionsScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  creatorId: 'creatorId',
  creatorName: 'creatorName',
  totalAmount: 'totalAmount'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};


exports.Prisma.ModelName = {
  Transactions: 'Transactions'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "transactionsClient",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\musyo\\Code\\stock-sync\\server\\prisma\\generated\\transactionsClient",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      },
      {
        "fromEnvVar": null,
        "value": "debian-openssl-1.1.x"
      },
      {
        "fromEnvVar": null,
        "value": "rhel-openssl-1.0.x"
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env",
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.8.1",
  "engineVersion": "78caf6feeaed953168c64e15a249c3e9a033ebe2",
  "datasourceNames": [
    "transactionsDb"
  ],
  "activeProvider": "mongodb",
  "postinstall": false,
  "inlineDatasources": {
    "transactionsDb": {
      "url": {
        "fromEnvVar": "MONGODB_URL_PRODUCTS",
        "value": null
      }
    }
  },
  "inlineSchema": "Ly8gdHJhbnNhY3Rpb25zU2NoZW1hLnByaXNtYQ0KDQpnZW5lcmF0b3IgdHJhbnNhY3Rpb25zQ2xpZW50IHsNCiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyINCiAgb3V0cHV0ICAgPSAiLi9nZW5lcmF0ZWQvdHJhbnNhY3Rpb25zQ2xpZW50Ig0KICBiaW5hcnlUYXJnZXRzID0gWyJuYXRpdmUiLCAiZGViaWFuLW9wZW5zc2wtMS4xLngiLCAicmhlbC1vcGVuc3NsLTEuMC54Il0NCn0NCg0KZGF0YXNvdXJjZSB0cmFuc2FjdGlvbnNEYiB7DQogIHByb3ZpZGVyID0gIm1vbmdvZGIiDQogIHVybCAgICAgID0gZW52KCJNT05HT0RCX1VSTF9QUk9EVUNUUyIpDQp9DQoNCm1vZGVsIFRyYW5zYWN0aW9ucyB7DQogIGlkICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvKCkpIEBtYXAoIl9pZCIpIEB0cmFuc2FjdGlvbnNEYi5PYmplY3RJZA0KICBkZXRhaWxzICAgICAgIFRyYW5zYWN0aW9uRGV0YWlsW10gDQogIGNyZWF0ZWRBdCAgICAgRGF0ZVRpbWUgICAgICAgICAgIEBkZWZhdWx0KG5vdygpKSANCiAgY3JlYXRvcklkICAgICAgIFN0cmluZw0KICBjcmVhdG9yTmFtZSAgICAgU3RyaW5nDQogIHRvdGFsQW1vdW50ICAgRmxvYXQgICAgICAgICAgICAgDQp9DQoNCg0KdHlwZSBUcmFuc2FjdGlvbkRldGFpbCB7DQogIGlkICAgICAgICAgICAgICBTdHJpbmcNCiAgbmFtZSAgICAgICAgICAgIFN0cmluZw0KICBjYXRlZ29yeSAgICAgICAgU3RyaW5nPw0KICBjdXJyZW50ICAgICAgICAgRmxvYXQ/DQogIHVuaXRDb3N0ICAgICAgICBGbG9hdD8NCiAgc2VsbGluZ1ByaWNlICAgIEZsb2F0Pw0KICB0YXhJbmZvcm1hdGlvbiAgRmxvYXQ/DQogIHN1cHBsaWVyICAgICAgICBTdHJpbmc/DQogIHF1YW50aXR5ICAgICAgICBJbnQ/IC8vIEFkZCB0aGUgcXVhbnRpdHkgZmllbGQNCn0NCg0K",
  "inlineSchemaHash": "e5a2b32f41ddae73c9a5a301790b46f88c4d6329806572724335f9ba1c932e09",
  "noEngine": false
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Transactions\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"details\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TransactionDetail\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"creatorId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"creatorName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"totalAmount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{\"TransactionDetail\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\"},{\"name\":\"category\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\"},{\"name\":\"current\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\"},{\"name\":\"unitCost\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\"},{\"name\":\"sellingPrice\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\"},{\"name\":\"taxInformation\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\"},{\"name\":\"supplier\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\"},{\"name\":\"quantity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\"}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[]}}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    MONGODB_URL_PRODUCTS: typeof globalThis !== 'undefined' && globalThis['MONGODB_URL_PRODUCTS'] || typeof process !== 'undefined' && process.env && process.env.MONGODB_URL_PRODUCTS || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

