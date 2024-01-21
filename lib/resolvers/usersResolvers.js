"use strict";
// usersResolvers.ts
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var usersClient_1 = require("../../prisma/generated/usersClient"); // Adjust the path as needed
var GetynamicDatabaseUrl_1 = require("../components/database/GetynamicDatabaseUrl");
// const prisma = new PrismaClient();
var usersResolvers = {
    Query: {
        users: function (_, _a) {
            var company = _a.company, type = _a.type;
            return __awaiter(void 0, void 0, void 0, function () {
                var dynamicDatabaseUrl, prisma;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, (0, GetynamicDatabaseUrl_1.getDynamicDatabaseUrl)(company, type)];
                        case 1:
                            dynamicDatabaseUrl = _b.sent();
                            process.env.STOCKSYNC_USERS = dynamicDatabaseUrl;
                            prisma = new usersClient_1.PrismaClient();
                            return [4 /*yield*/, prisma.users.findMany()];
                        case 2: return [2 /*return*/, _b.sent()];
                    }
                });
            });
        },
        user: function (_, _a) {
            var id = _a.id, company = _a.company, type = _a.type;
            return __awaiter(void 0, void 0, void 0, function () {
                var dynamicDatabaseUrl, prisma;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, (0, GetynamicDatabaseUrl_1.getDynamicDatabaseUrl)(company, type)];
                        case 1:
                            dynamicDatabaseUrl = _b.sent();
                            process.env.STOCKSYNC_USERS = dynamicDatabaseUrl;
                            prisma = new usersClient_1.PrismaClient();
                            return [4 /*yield*/, prisma.users.findUnique({
                                    where: {
                                        id: id,
                                    },
                                })];
                        case 2: return [2 /*return*/, _b.sent()];
                    }
                });
            });
        },
        authenticateUser: function (_, _a) {
            var email = _a.email, password = _a.password, company = _a.company;
            return __awaiter(void 0, void 0, void 0, function () {
                var type, dynamicDatabaseUrl, prisma, user, isPasswordValid;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            type = "users";
                            return [4 /*yield*/, (0, GetynamicDatabaseUrl_1.getDynamicDatabaseUrl)(company, type)];
                        case 1:
                            dynamicDatabaseUrl = _b.sent();
                            process.env.STOCKSYNC_USERS = dynamicDatabaseUrl;
                            prisma = new usersClient_1.PrismaClient();
                            return [4 /*yield*/, prisma.users.findUnique({
                                    where: { email: email },
                                    select: {
                                        id: true,
                                        firstName: true,
                                        lastName: true,
                                        age: true,
                                        email: true,
                                        password: true,
                                        store1: true,
                                        store2: true,
                                        store3: true,
                                        store4: true,
                                        company: true,
                                        role: true,
                                    },
                                })];
                        case 2:
                            user = _b.sent();
                            if (!user) {
                                throw new Error("User not found");
                            }
                            isPasswordValid = user.password === password;
                            if (isPasswordValid) {
                                return [2 /*return*/, __assign(__assign({}, user), { company: company })];
                            }
                            else {
                                throw new Error("Invalid credentials");
                            }
                            return [2 /*return*/];
                    }
                });
            });
        },
    },
    Mutation: {
        addUser: function (_, args) { return __awaiter(void 0, void 0, void 0, function () {
            var company, type, productData, dynamicDatabaseUrl, prisma;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        company = args.company, type = args.type, productData = __rest(args, ["company", "type"]);
                        return [4 /*yield*/, (0, GetynamicDatabaseUrl_1.getDynamicDatabaseUrl)(company, type)];
                    case 1:
                        dynamicDatabaseUrl = _a.sent();
                        process.env.STOCKSYNC_USERS = dynamicDatabaseUrl;
                        prisma = new usersClient_1.PrismaClient();
                        return [4 /*yield*/, prisma.users.create({ data: productData })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        }); },
        editUser: function (_, args) { return __awaiter(void 0, void 0, void 0, function () {
            var company, type, dynamicDatabaseUrl, prisma, existingUser, updatedUser, error_1;
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
            return __generator(this, function (_l) {
                switch (_l.label) {
                    case 0:
                        company = args.company, type = args.type;
                        return [4 /*yield*/, (0, GetynamicDatabaseUrl_1.getDynamicDatabaseUrl)(company, type)];
                    case 1:
                        dynamicDatabaseUrl = _l.sent();
                        process.env.STOCKSYNC_USERS = dynamicDatabaseUrl;
                        prisma = new usersClient_1.PrismaClient();
                        _l.label = 2;
                    case 2:
                        _l.trys.push([2, 5, , 6]);
                        return [4 /*yield*/, prisma.users.findUnique({
                                where: {
                                    id: args.id,
                                },
                            })];
                    case 3:
                        existingUser = _l.sent();
                        if (!existingUser) {
                            throw new Error("User with id ".concat(args.id, " not found"));
                        }
                        return [4 /*yield*/, prisma.users.update({
                                where: { id: args.id },
                                data: {
                                    firstName: (_a = args.firstName) !== null && _a !== void 0 ? _a : existingUser.firstName,
                                    lastName: (_b = args.lastName) !== null && _b !== void 0 ? _b : existingUser.lastName,
                                    age: (_c = args.age) !== null && _c !== void 0 ? _c : existingUser.age,
                                    email: (_d = args.email) !== null && _d !== void 0 ? _d : existingUser.email,
                                    password: (_e = args.password) !== null && _e !== void 0 ? _e : existingUser.password,
                                    store1: (_f = args.store1) !== null && _f !== void 0 ? _f : existingUser.store1,
                                    store2: (_g = args.store2) !== null && _g !== void 0 ? _g : existingUser.store2,
                                    store3: (_h = args.store3) !== null && _h !== void 0 ? _h : existingUser.store3,
                                    store4: (_j = args.store4) !== null && _j !== void 0 ? _j : existingUser.store4,
                                    role: (_k = args.role) !== null && _k !== void 0 ? _k : existingUser.role,
                                },
                            })];
                    case 4:
                        updatedUser = _l.sent();
                        return [2 /*return*/, updatedUser];
                    case 5:
                        error_1 = _l.sent();
                        throw new Error("Error updating user: ".concat(error_1.message));
                    case 6: return [2 /*return*/];
                }
            });
        }); },
        deleteUser: function (_, _a) {
            var id = _a.id, company = _a.company, type = _a.type;
            return __awaiter(void 0, void 0, void 0, function () {
                var dynamicDatabaseUrl, prisma, currentUser, deletedUser, error_2;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, (0, GetynamicDatabaseUrl_1.getDynamicDatabaseUrl)(company, type)];
                        case 1:
                            dynamicDatabaseUrl = _b.sent();
                            process.env.STOCKSYNC_USERS = dynamicDatabaseUrl; // Set the dynamic URL
                            prisma = new usersClient_1.PrismaClient();
                            _b.label = 2;
                        case 2:
                            _b.trys.push([2, 5, , 6]);
                            return [4 /*yield*/, prisma.users.findUnique({
                                    where: { id: id },
                                })];
                        case 3:
                            currentUser = _b.sent();
                            if (!currentUser) {
                                throw new Error("User with ID ".concat(id, " not found"));
                            }
                            return [4 /*yield*/, prisma.users.delete({
                                    where: { id: id },
                                })];
                        case 4:
                            deletedUser = _b.sent();
                            return [2 /*return*/, deletedUser];
                        case 5:
                            error_2 = _b.sent();
                            throw new Error("Error deleting user: ".concat(error_2.message));
                        case 6: return [2 /*return*/];
                    }
                });
            });
        },
    },
};
exports.default = usersResolvers;
