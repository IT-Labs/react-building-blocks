export type Pokemon = {
    id: number;
    name: string;
    height: number;
    weight: number;
    baseExp: number;
    isDefault: boolean;
    img: string;
}
export const mapToPokemon = (x: any) => {
    return {
        id:x.id,
        name:x.name,
        height:x.height,
        weight:x.weight,
        baseExp: x.base_experience,
        isDefault: x.is_default,
        img: x.sprites.front_default
    } as Pokemon
}
