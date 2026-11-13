export interface IProduct {
    id: number;
    name: string;
    price: number;
}

export type CreateProductInput = Omit<IProduct, "id">
export type UpdateProductInput = Partial<CreateProductInput>