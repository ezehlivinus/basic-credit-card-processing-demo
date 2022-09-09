import yargs from 'yargs/yargs';
export const accounts = [];
// import { dirname } from 'path';
// import { fileURLToPath } from 'url';
import { URL } from 'url'
import { standardInput } from './services/stdin.service.js';
import { handleFileReading } from './controllers/index.controller.js';

const argv = yargs(process.argv.slice(2)).argv;

const __filename = new URL(argv._[0], import.meta.url).pathname;

if (argv._.length) {
  console.info(`Reading file ${__filename}`);
  await handleFileReading(__filename)
} else {
  console.info('Reading from stdin...\nPress Ctrl+C to exit and cancel reading');
  console.info('Type "exit" or "quit" or hit the enter key twice to exit and show summary:\n');
  standardInput()
}

// console.log('Something usual happened...')
// process.exit(0)

