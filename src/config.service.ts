import * as dotenv from 'dotenv';
import * as fs from 'fs';

const ENV_FILE = '.env';

export class ConfigService {
  private static envConfig: { [key: string]: string };

  public static get(key: string): string {
    if (!ConfigService.envConfig) {
      ConfigService.envConfig = fs.existsSync(ENV_FILE)
        ? dotenv.parse(fs.readFileSync(ENV_FILE))
        : {};
    }
    return process.env[key] || ConfigService.envConfig[key];
  }
}
