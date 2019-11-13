export type Params = {
    id: string;
}

export const findIdFromUrl = (params: Params) => {
    if(typeof params.id === 'string') {
        return Number(params.id) - 1;
    }
    return params.id;
};