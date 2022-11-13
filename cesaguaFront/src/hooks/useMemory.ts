const useMemory = () => {
  const lifetime = 0.5;

  
  const obtainMemory = (element: string) => {
    const rawElement: any = localStorage.getItem(element);
    if (!rawElement) return { state: false };

    const storageElement: any = JSON.parse(rawElement);
    const timeDiff = Math.round(
      Math.abs(new Date(storageElement.date).getTime() - new Date().getTime()) /
        1000 /
        60
    );

    if (timeDiff > lifetime) return { state: false };
    return { state: true, data: storageElement.payload };
  };

  const updateMemory = (element: string, payload: any) => {
    localStorage.setItem(
      element,
      JSON.stringify({ date: new Date(), payload: payload })
    );
  };

  const forgetMemory = (element: string) => {
    localStorage.removeItem(element);
  }

  return { obtainMemory, updateMemory, forgetMemory };
};

export default useMemory;
