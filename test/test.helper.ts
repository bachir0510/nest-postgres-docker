import { Connection, createConnection } from 'typeorm';

export class TestHelper {
  private static _instance: TestHelper;

  public static get instance(): TestHelper {
    if (!this._instance) this._instance = new TestHelper();

    return this._instance;
  }

  private dbConnect!: Connection;

  async setupTestDB() {
    this.dbConnect = await createConnection({
      name: 'default',
      type: 'better-sqlite3',
      database: ':memory:',
      entities: ['src/entity/**/*.ts'],
      synchronize: true,
    });
  }

  teardownTestDB() {
    this.dbConnect.close();
  }
}
