import { Connection } from 'typeorm';
import { CatetoryInputDto } from '../../../src/domain/dto/book/categoryInput.dto';
import { CriteriaInputDto } from '../../../src/domain/dto/book/criteriaInput.dto';
import { BookService } from '../../../src/infrastructure/services/book/book.service';
import { mockBookEntity, mockBookInterface } from '../../bookDate';
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
      const category: CatetoryInputDto = {};
      const criteria: CriteriaInputDto = {};
      const data = [mockBookInterface];
      jest
        .spyOn(bookService, 'getCategories')
        .mockImplementationOnce(() => Promise.resolve(data));
      expect(await bookService.getCategories(category, criteria)).toEqual(data);
    });
  });
});
