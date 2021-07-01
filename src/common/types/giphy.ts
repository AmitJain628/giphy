export interface IGiphy {
    data: IDatum[];
    pagination: IPagination;
}

export interface IDatum {
    type: Type;
    id: string;
    url: string;
    images: IImages;
    slug: string;
}

export interface IImages {
    original: IFixedHeight;

}

export interface IFixedHeight {
    height: string;
    width: string;
    size: string;
    url: string;
    mp4_size?: string;
    mp4?: string;
    webp_size: string;
    webp: string;
    frames?: string;
    hash?: string;
}

export enum Type {
    GIF = 'gif',
}
export interface IPagination {
    count: number;
    offset: number;
}
