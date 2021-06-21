export interface IBookState {
  isLoading: boolean;
  books: IBooks[];
  isCheck: boolean;
}

export interface IBookProps{
  books: IBooks[];
}

export interface IBooks {
  id: number;
  title: string;
  isbn?: number;
  pageCount: number;
  thumbnailUrl: string;
  shortDescription?: string;
  longDescription?: string;
  status?: string;
  authors?: string;
  categories?: string[];
}

export interface IMapStateToProps{
  books: IBooks[];

}

export interface IMapDispatchToProps{
  fetchBooks(): void;
}
