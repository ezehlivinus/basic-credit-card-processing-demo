import service from "../services/index.service.js";
import { fileReader } from "../services/file.service.js";
import { standardInput } from "../services/stdin.service.js";

export const handleInput = (input) => {
  service.newInput(input);
}

export const handleFileReading = async (filename) => {
  return fileReader(filename);
}

export const handleStandardInput = async () => {
  return standardInput();
}
