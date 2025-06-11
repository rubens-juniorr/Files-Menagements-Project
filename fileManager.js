import fs from "fs";

function createDirectory(dirPath) {
  return new Promise((resolve, reject) => {
    fs.mkdir(dirPath, { recursive: true }, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve(`Directory '${dirPath}' created successfully`);
      }
    });
  });
}
function createFile(filePath, content = "") {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, content, "utf8", (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(`File '${filePath}', created successfully`);
      }
    });
  });
}

function listFiles(dirPath) {
  //Retorna uma Promise que reolve com a lista de arquivos
  return new Promise((resolve, reject) => {
    fs.readdir(dirPath, (err, files) => {
      if (err) {
        reject(err);
      } else {
        resolve(files);
      }
    });
  });
}

function readFile(filePath) {
  //Retorna uma Promise que resolve com conteúdo do arquivo
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        reject(err); //Rejeita a Promise em caso de Erro
      } else {
        resolve(data);
      } // Resolve a Promise com com o conteúdo do arquivo
    });
  });
}

function writeFile(filePath, content) {
  // retorna uma Promise que resolve quando o arquivo e escrito
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, content, "utf8", (err) => {
      if (err) {
        reject(err);
      } else {
        resolve("File written successfully");
      }
    });
  });
}

function deleteFile(filePath) {
  // retorna uma Promise que resolve quando o arquivo e escrito
  return new Promise((resolve, reject) => {
    fs.unlink(filePath, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve("File deled successfully");
      }
    });
  });
}

export default {
  createDirectory,
  createFile,
  listFiles,
  readFile,
  writeFile,
  deleteFile,
};
