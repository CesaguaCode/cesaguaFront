const useInterceptor = () => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoIjp7InJvbCI6MywiaWQiOjF9LCJpYXQiOjE2NjU3NzQ2NTksImV4cCI6MTY2NTgxMDY1OX0.C3VqLx7Vqcv67hXw51bGU2yxIotRje6ZPcuguWSk9JM";

  const getData = async (url: string) => {
    const  data = await fetch(url).then((data) => data.json());
    return data;
  };
  

  const deleteData = async (url: string) => {
    const config = {
      method: "delete",
      headers: new Headers({
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      }),
    };

    return await fetch(url, config).then((data) => data.json());
  };

  const postData = async (url: string, payload: any) => {
    const config = {
      method: "post",
      headers: new Headers({
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(payload),
    };

    return await fetch(url, config).then((data) => data.json());
  };

  const putData = async (url: string, payload: any) => {
    const config = {
      method: "put",
      headers: new Headers({
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(payload),
    };

    console.log(payload);
    

    return await fetch(url, config).then((data) => data.json());
  };

  return { getData, postData, putData, deleteData };
};

export default useInterceptor;