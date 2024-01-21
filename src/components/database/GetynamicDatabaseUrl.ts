// components/database.ts
export async function getDynamicDatabaseUrl(company: string, type: string): Promise<string> {
  // Logic to fetch the DATABASE_URL dynamically based on type
  // Example: Use a switch or if-else statements
  if (company === "addermatt") {
    if (type === 'store1') {
      return process.env.ADDERMATT_STORE1 || '';
    } else if (type === 'store2') {
      return process.env.ADDERMATT_STORE2 || '';
    } else if (type === 'store3') {
      return process.env.ADDERMATT_STORE3 || '';
    } else if (type === 'store4') {
      return process.env.ADDERMATT_STORE4 || '';
    } else if (type === 'users') {
      return process.env.ADDERMATT_USERS || '';
    } else {
      // Default to a generic DATABASE_URL or handle the case appropriately
      return process.env.DATABASE_URL || '';
    }
  } else if (company === "stocksync") {
    if (type === 'store1') {
      return process.env.STOCKSYNC_STORE1 || '';
    } else if (type === 'store2') {
      return process.env.STOCKSYNC_STORE2 || '';
    } else if (type === 'store3') {
      return process.env.STOCKSYNC_STORE3 || '';
    } else if (type === 'store4') {
      return process.env.STOCKSYNC_STORE4 || '';
    } else if (type === 'users') {
      return process.env.STOCKSYNC_USERS || '';
    } else {
      // Default to a generic DATABASE_URL or handle the case appropriately
      return process.env.DATABASE_URL || '';
    }
  } else {
    // Default to a generic DATABASE_URL or handle the case appropriately
    return process.env.DATABASE_URL || '';
  }
}
