export interface ImageLinks {
    thumbnail: string;
}

export interface VolumeInfo {
    title: string;
    authors?: string[] | null;
    publisher?: string | null;
    publishedDate: string;
    description?: string | null;
    pageCount?: number | null;
    printType: string;
    categories?: string[] | null;
    maturityRating: string;
    allowAnonLogging: boolean;
    contentVersion: string;
    imageLinks: ImageLinks;
    language: string;
    previewLink: string;
    infoLink: string;
    canonicalVolumeLink: string;
    subtitle?: string | null;
    averageRating?: number | null;
    ratingsCount?: number | null;
}
// export interface IndustryIdentifiersEntity {
//     type: string;
//     identifier: string;
// }
// export interface ReadingModes {
//     text: boolean;
//     image: boolean;
// }

export interface BookListEntity {
    id: string;
    // etag: string;
    selfLink: string;
    volumeInfo: VolumeInfo;
}
export interface BookList {
    totalItems: number;
    items?: BookListEntity[] | null;
}
