import { useCallback } from "react";

const useImageSystem = () => {
  const convertBase64 = (file: any):Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve((reader as any).result);
      reader.onerror = (err) => reject(err);
    });
  };

  const downscaleImage = useCallback(async (file: any) => {
    const dataUrl:string = await convertBase64(file);
    // If the size is less than 0.5mb will return without converting the file
    const newWidth:number = 1024;
    const image: HTMLImageElement = new Image();
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    image.src = dataUrl;
    await image.decode();

    const newHeight = Math.floor((image.height / image.width) * newWidth);

    canvas.width = newWidth;
    canvas.height = newHeight;

    ctx!.drawImage(image, 0, 0, newWidth, newHeight);

    const newDataUrl = canvas.toDataURL("image/webp", 0.6);

    return newDataUrl;
  }, []);

  return { downscaleImage };
};

export default useImageSystem;
