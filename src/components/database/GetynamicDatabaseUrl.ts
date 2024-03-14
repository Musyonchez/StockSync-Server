export async function getDynamicDatabaseUrl(company: string, type: string): Promise<string> {
   // Validate company string against preset values
   const validCompanies = ["soltase", "addermatt"]; // Add more companies if needed
   if (!validCompanies.includes(company.toLowerCase())) {
     throw new Error(`Invalid company '${company}'. Must be one of: ${validCompanies.join(", ")}.`);
   }
 
   // Validate type string against preset values
   const validTypes = ["store1", "store2", "store3", "store4", "users"]; // Add more types if needed
   if (!validTypes.includes(type.toLowerCase())) {
     throw new Error(`Invalid type '${type}'. Must be one of: ${validTypes.join(", ")}.`);
   }
   
  // Define a map to store environment variables based on company and type
  const envVariables: Record<string, Record<string, string>> = {
    addermatt: {
      store1: process.env.ADDERMATT_STORE1 || "",
      store2: process.env.ADDERMATT_STORE2 || "",
      store3: process.env.ADDERMATT_STORE3 || "",
      store4: process.env.ADDERMATT_STORE4 || "",
      users: process.env.ADDERMATT_USERS || "",
      default: process.env.MONGODB_URL || "",
    },
    soltase: {
      store1: process.env.SOLTASE_STORE1 || "",
      store2: process.env.SOLTASE_STORE2 || "",
      store3: process.env.SOLTASE_STORE3 || "",
      store4: process.env.SOLTASE_STORE4 || "",
      users: process.env.SOLTASE_USERS || "",
      default: process.env.DATABASE_URL || "",
    },
    default: {
      default: process.env.MONGODB_URL || "",
    },
  };

  // Get the corresponding environment variable based on company and type
  const dynamicUrl = envVariables[company.toLowerCase()]?.[type.toLowerCase()] || envVariables.default.default;

  // Check if dynamic URL is empty
  if (!dynamicUrl) {
    throw new Error(`Dynamic database URL for company '${company}' and type '${type}' not found.`);
  }

  return dynamicUrl;
}
