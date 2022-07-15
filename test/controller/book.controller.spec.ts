import { Connection } from 'typeorm';
import { BookController } from '../../src/app/controllers/v1/book/book.controller';
import { CatetoryInputDto } from '../../src/domain/dto/book/categoryInput.dto';
import { CriteriaInputDto } from '../../src/domain/dto/book/criteriaInput.dto';
import { GetBookApi } from '../../src/domain/use_cases/book/getApi.book';
import { mockBookEntity } from '../bookDate';
import { testsAppModule } from '../test.app.module.factory';

describe('BookController', () => {
  let database: Connection;
  let bookController: BookController;
  let getBook: GetBookApi;

  beforeAll(async () => {
    const [nestModule] = await testsAppModule();
    database = nestModule.get('DATABASE_CONNECTION');
    bookController = nestModule.get(BookController);
    getBook = nestModule.get(GetBookApi);
  });

  afterAll(async () => {
    await database.close();
  });

  it('should be defined', () => {
    expect(bookController).toBeDefined();
  });

  describe('Get Book', () => {
    it('should get Book by category', async () => {
      const category: CatetoryInputDto = {};
      const criteria: CriteriaInputDto = {};

      const findSpy = jest
        .spyOn(getBook, 'call')
        .mockImplementationOnce(() => Promise.resolve([mockBookEntity]));
      const response = await bookController.findAll(category, criteria);
      expect(response).toEqual([mockBookEntity]);
      expect(findSpy).toHaveBeenCalled();
    });
  });
});
