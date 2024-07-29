export interface INewReleases {
  error: string;
  total: string;
  books: IBookShort[];
  page?: string;
}

export interface IBookShort {
  title: string;
  subtitle: string;
  isbn13: string;
  price: string;
  url: string;
  image: string;
}
