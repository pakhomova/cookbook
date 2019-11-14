export type Params = {
    id: string;
}

export const findIdFromUrl = (params: Params) =>  params.id;