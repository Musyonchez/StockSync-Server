declare const productResolvers: {
    Query: {
        products: (_: any, { company, type }: {
            company: string;
            type: string;
        }) => Promise<{
            id: string;
            name: string;
            description: string | null;
            minimumQuantity: number | null;
            currentQuantity: number | null;
            reorderQuantity: number | null;
            costCurrent: number | null;
            costPrevious: number | null;
            active: boolean;
        }[]>;
        activeProducts: (_: any, { company, type }: {
            company: string;
            type: string;
        }) => Promise<{
            id: string;
            name: string;
            description: string | null;
            minimumQuantity: number | null;
            currentQuantity: number | null;
            reorderQuantity: number | null;
            costCurrent: number | null;
            costPrevious: number | null;
            active: boolean;
        }[]>;
        inactiveProducts: (_: any, { company, type }: {
            company: string;
            type: string;
        }) => Promise<{
            id: string;
            name: string;
            description: string | null;
            minimumQuantity: number | null;
            currentQuantity: number | null;
            reorderQuantity: number | null;
            costCurrent: number | null;
            costPrevious: number | null;
            active: boolean;
        }[]>;
        product: (_: any, { id, company, type }: {
            id: string;
            company: string;
            type: string;
        }) => Promise<{
            id: string;
            name: string;
            description: string | null;
            minimumQuantity: number | null;
            currentQuantity: number | null;
            reorderQuantity: number | null;
            costCurrent: number | null;
            costPrevious: number | null;
            active: boolean;
        } | null>;
    };
    Mutation: {
        addProduct: (_: any, args: {
            name: string;
            description: string;
            minimumQuantity: number;
            currentQuantity: number;
            reorderQuantity: number;
            costCurrent: number;
            costPrevious: number;
            company: string;
            type: string;
        }) => Promise<{
            id: string;
            name: string;
            description: string | null;
            minimumQuantity: number | null;
            currentQuantity: number | null;
            reorderQuantity: number | null;
            costCurrent: number | null;
            costPrevious: number | null;
            active: boolean;
        }>;
        editProduct: (_: any, args: {
            id: string;
            name?: string | undefined;
            description?: string | undefined;
            minimumQuantity?: number | undefined;
            currentQuantity?: number | undefined;
            reorderQuantity?: number | undefined;
            costCurrent?: number | undefined;
            costPrevious?: number | undefined;
            company: string;
            type: string;
        }) => Promise<{
            id: string;
            name: string;
            description: string | null;
            minimumQuantity: number | null;
            currentQuantity: number | null;
            reorderQuantity: number | null;
            costCurrent: number | null;
            costPrevious: number | null;
            active: boolean;
        }>;
        deactivateProduct: (_: any, { id, company, type }: {
            id: string;
            company: string;
            type: string;
        }) => Promise<{
            id: string;
            name: string;
            description: string | null;
            minimumQuantity: number | null;
            currentQuantity: number | null;
            reorderQuantity: number | null;
            costCurrent: number | null;
            costPrevious: number | null;
            active: boolean;
        }>;
        deleteProduct: (_: any, { id }: {
            id: string;
        }) => Promise<{
            id: string;
            name: string;
            description: string | null;
            minimumQuantity: number | null;
            currentQuantity: number | null;
            reorderQuantity: number | null;
            costCurrent: number | null;
            costPrevious: number | null;
            active: boolean;
        }>;
    };
};
export default productResolvers;
