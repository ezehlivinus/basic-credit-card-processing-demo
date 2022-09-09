import indexService from './index.service.js';
import fs from 'fs/promises';
import { handleInput } from '../controllers/index.controller.js';

// read file argument line by line until EOF
export const fileReader = async (filename) => {
  const data = await fs.readFile(filename, 'utf8').catch(err => {
    // console.log(err);
    process.exit(1);
  });

  const entries = data.split('\n');

  entries.forEach((entry) => {
    let input = entry.trim()
    if (input) {
      input = input.split(' ');
      handleInput(input);
    }
  })

  indexService.summary();
  return entries;
}