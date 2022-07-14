import { Connection } from 'typeorm';
import { GetBookInputDto } from '../../../src/domain/dto/book/getBook.dto';
import { BookService } from '../../../src/infrastructure/services/book/book.service';
import { mockBookEntity } from '../../bookDate';
import { testsAppModule } from '../../test.app.module.factory';

describe('Book Client', () => {
  let database: Connection;
  let bookService: BookService;
  beforeAll(async () => {
    const [nestModule] = await testsAppModule();
    database = nestModule.get('DATABASE_CONNECTION');
    bookService = nestModule.get(BookService);
  });

  afterAll(async () => {
    await database.close();
  });

  it('should be defined', () => {
    expect(bookService).toBeDefined();
  });

  describe('Get Book', () => {
    it('should get Book by category', async () => {
      const category: GetBookInputDto = {};
      const data = [mockBookEntity];
      jest
        .spyOn(bookService, 'getCategorys')
        .mockImplementationOnce(() => Promise.resolve(data));
      expect(await bookService.getCategorys(category)).toEqual(data);
    });
  });
});
