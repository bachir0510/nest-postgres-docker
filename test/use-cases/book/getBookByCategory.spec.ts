import { Connection } from 'typeorm';
import { CatetoryInputDto } from '../../../src/domain/dto/book/categoryInput.dto';
import { CriteriaInputDto } from '../../../src/domain/dto/book/criteriaInput.dto';
import { GetBookApi } from '../../../src/domain/use_cases/book/getApi.book';
import { mockBookEntity } from '../../bookDate';
import { testsAppModule } from '../../test.app.module.factory';

describe('BookController', () => {
  let database: Connection;
  let getBook: GetBookApi;

  beforeAll(async () => {
    const [nestModule] = await testsAppModule();
    database = nestModule.get('DATABASE_CONNECTION');
    getBook = nestModule.get(GetBookApi);
  });

  afterAll(async () => {
    await database.close();
  });

  it('should be defined', () => {
    expect(getBook).toBeDefined();
  });

  describe('Get Book', () => {
    it('should get Book by category', async () => {
      const category: CatetoryInputDto = {};
      const criteria: CriteriaInputDto = {};
      const data = [mockBookEntity];
      jest
        .spyOn(getBook, 'call')
        .mockImplementationOnce(() => Promise.resolve(data));
      expect(await getBook.call(category, criteria)).toEqual(data);
    });
  });
});
