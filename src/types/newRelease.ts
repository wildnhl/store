export interface INewReleasesType {
  error: string;
  total: string;
  books: IBookShort[];
}

export interface IBookShort {
  title: string;
  subtitle: string;
  isbn13: string;
  price: string;
  url: string;
  image: string;
}
