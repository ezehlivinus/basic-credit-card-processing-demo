import { handleInput } from '../controllers/index.controller.js';
import { accounts } from '../index.js';
import { fileReader } from './file.service.js';
import indexService from './index.service.js';


export const standardInput = () => {
process.stdin.on('readable', () => {
  let chunk;
  // Use a loop to make sure we read all available data.
  while ((chunk = process.stdin.read()) !== null) {
    
    if (chunk.toString().trim() === 'exit' || chunk.toString().trim() === 'quit' || !chunk.toString().trim()) {
      // process.stdout.write('exiting...');
      process.exit();
    }

    const input = chunk.toString().trim().split(' ');
    handleInput(input);
  //  process.stdout.write(`data: ${chunk}`);
  }
  
});

process.on('exit', (code) => {
  // console.log(`About to exit with code: ${code} and data:\n $ {accounts}`);
  // indexService.inputCollector();
  indexService.summary();
});

}