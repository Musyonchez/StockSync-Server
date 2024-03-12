
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
exports.Prisma.UsersScalarFieldEnum = {
  id: 'id',
  firstName: 'firstName',
  lastName: 'lastName',
  email: 'email',
  password: 'password',
  store1: 'store1',
  store2: 'store2',
  store3: 'store3',
  store4: 'store4',
  company: 'company',
  role: 'role',
  firstsignin: 'firstsignin',
  firstRecordAction: 'firstRecordAction',
  active: 'active',
  temporaryPassword: 'temporaryPassword',
  imageURL: 'imageURL',
  companyLogo: 'companyLogo'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};
exports.UserRole = exports.$Enums.UserRole = {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

exports.Prisma.ModelName = {
  Users: 'Users'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "usersClient",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\musyo\\Code\\stock-sync\\server\\prisma\\generated\\usersClient",
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
    "usersDb"
  ],
  "activeProvider": "mongodb",
  "postinstall": false,
  "inlineDatasources": {
    "usersDb": {
      "url": {
        "fromEnvVar": "MONGODB_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Ly8gdXNlcnNTY2hlbWEucHJpc21hDQpnZW5lcmF0b3IgdXNlcnNDbGllbnQgew0KICBwcm92aWRlciA9ICJwcmlzbWEtY2xpZW50LWpzIg0KICBvdXRwdXQgICA9ICIuL2dlbmVyYXRlZC91c2Vyc0NsaWVudCINCiAgYmluYXJ5VGFyZ2V0cyA9IFsibmF0aXZlIiwgImRlYmlhbi1vcGVuc3NsLTEuMS54IiwgInJoZWwtb3BlbnNzbC0xLjAueCJdDQp9DQoNCmRhdGFzb3VyY2UgdXNlcnNEYiB7DQogIHByb3ZpZGVyID0gIm1vbmdvZGIiDQogIHVybCAgICAgID0gZW52KCJNT05HT0RCX1VSTCIpDQp9DQoNCm1vZGVsIFVzZXJzIHsNCiAgaWQgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgQGlkIEBkZWZhdWx0KGF1dG8oKSkgQG1hcCgiX2lkIikgQHVzZXJzRGIuT2JqZWN0SWQNCiAgZmlyc3ROYW1lICAgICAgICAgICBTdHJpbmc/IA0KICBsYXN0TmFtZSAgICAgICAgICAgIFN0cmluZz8gDQogIGVtYWlsICAgICAgICAgICAgICAgU3RyaW5nPyBAdW5pcXVlDQogIHBhc3N3b3JkICAgICAgICAgICAgU3RyaW5nPw0KICBzdG9yZTEgICAgICAgICAgICAgIEJvb2xlYW4gQGRlZmF1bHQoZmFsc2UpDQogIHN0b3JlMiAgICAgICAgICAgICAgQm9vbGVhbiBAZGVmYXVsdChmYWxzZSkNCiAgc3RvcmUzICAgICAgICAgICAgICBCb29sZWFuIEBkZWZhdWx0KGZhbHNlKQ0KICBzdG9yZTQgICAgICAgICAgICAgIEJvb2xlYW4gQGRlZmF1bHQoZmFsc2UpDQogIGNvbXBhbnkgICAgICAgICAgICAgU3RyaW5nPw0KICByb2xlICAgICAgICAgICAgICAgIFVzZXJSb2xlICAgICAgIEBkZWZhdWx0KFVTRVIpDQogIGZpcnN0c2lnbmluICAgICAgICAgQm9vbGVhbiBAZGVmYXVsdCh0cnVlKQ0KICBmaXJzdFJlY29yZEFjdGlvbiAgIEJvb2xlYW4gQGRlZmF1bHQoZmFsc2UpDQogIGFjdGl2ZSAgICAgICAgICAgICAgQm9vbGVhbiAgIEBkZWZhdWx0KHRydWUpDQogIHRlbXBvcmFyeVBhc3N3b3JkICAgU3RyaW5nICAgQGRlZmF1bHQoIkVNUFRZIikNCiAgaW1hZ2VVUkwgICAgICAgICAgICBTdHJpbmc/ICAgQGRlZmF1bHQoIm51bGwiKQ0KICBjb21wYW55TG9nbyAgICAgICAgIFN0cmluZz8gICBAZGVmYXVsdCgibnVsbCIpDQp9DQoNCmVudW0gVXNlclJvbGUgew0KICBBRE1JTg0KICBVU0VSDQp9",
  "inlineSchemaHash": "3bf6a4490c4eb2b1ad768a7ea53408a2d349b7acf402021be7186b8c6a58b939",
  "noEngine": false
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Users\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"firstName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"store1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"store2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"store3\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"store4\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"company\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"UserRole\",\"default\":\"USER\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"firstsignin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"firstRecordAction\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"temporaryPassword\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"EMPTY\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"imageURL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"null\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"companyLogo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"null\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"UserRole\":{\"values\":[{\"name\":\"ADMIN\",\"dbName\":null},{\"name\":\"USER\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    MONGODB_URL: typeof globalThis !== 'undefined' && globalThis['MONGODB_URL'] || typeof process !== 'undefined' && process.env && process.env.MONGODB_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

