import { pricesByCountryCommand } from './infrastructure/commands/price-by-country.js';
import { createProgram, addCommand } from './infrastructure/core/cli.js';

export function bootstrap() {
  const program = createProgram({
    name: 'Gepr',
    description: 'A CLI reporter tool over globalpetrolprices.com',
    version: '0.0.1',
  });
  addCommand(program, pricesByCountryCommand);

  program.parse();
}

export default { App };
