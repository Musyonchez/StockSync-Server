export async function getDynamicDatabaseUrl(
  company: string,
  type: string
): Promise<string> {
  if (company === "addermatt") {
    if (type === "store1") {
      return process.env.ADDERMATT_STORE1 || "";
    } else if (type === "store2") {
      return process.env.ADDERMATT_STORE2 || "";
    } else if (type === "store3") {
      return process.env.ADDERMATT_STORE3 || "";
    } else if (type === "store4") {
      return process.env.ADDERMATT_STORE4 || "";
    } else if (type === "users") {
      return process.env.ADDERMATT_USERS || "";
    } else {
      return process.env.DATABASE_URL || "";
    }
  } else if (company === "stocksync") {
    if (type === "store1") {
      return process.env.STOCKSYNC_STORE1 || "";
    } else if (type === "store2") {
      return process.env.STOCKSYNC_STORE2 || "";
    } else if (type === "store3") {
      return process.env.STOCKSYNC_STORE3 || "";
    } else if (type === "store4") {
      return process.env.STOCKSYNC_STORE4 || "";
    } else if (type === "users") {
      return process.env.STOCKSYNC_USERS || "";
    } else {
      return process.env.DATABASE_URL || "";
    }
  } else {
    return process.env.DATABASE_URL || "";
  }
}
