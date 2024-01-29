export interface UserData {
  email: string;
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
