import axios from "axios";

export class MilestoneService {
  private URL: string = "http://localhost:3200/milestone";

  public async getAll() {
    const request = await axios.get(this.URL).then(({ data }) => data.data);
    console.log(request);
    
    return request;
  }

  public async delete(id: number) {
    const config = {
      headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoIjp7InJvbCI6MywiaWQiOjF9LCJpYXQiOjE2NjUyNDI2MjEsImV4cCI6MTY2NTI3ODYyMX0.AGsl3cjsEofudgcLHHfECP2vJFMbWKg19YqVHuAZMak` },
    };

    return await axios.delete(`${this.URL}/${id}`, config);
  }
}
