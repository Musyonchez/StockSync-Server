// src/types.ts

export interface UserData {
    email: string; // Add the email property
    name: string;
  age: number;
  }
  
export type ProductsUpdateInput = {
    name?: string;
    description?: string | null;
    minimumQuantity?: number | null;
    currentQuantity?: number | null;
    reorderQuantity?: number | null;
    costCurrent?: number | null;
    costPrevious?: number | null;
    active?: boolean;
  };
  