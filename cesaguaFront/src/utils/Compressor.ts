import Compressor from "compressorjs";

const CompressorImage = (file:any, compresorLevel:any) => {
    return new Promise((resolve, reject) => {
      new Compressor(file, {
        quality: compresorLevel,
        success(result) {
          resolve(result);
        },
        error(err) {
          reject(err.message);
        },
      });
    });
  }

  export {CompressorImage}