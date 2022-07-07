export class BookUrl {
  private base: string;

  constructor(category: string) {
    this.base = `${category}/libros`;
  }
}
