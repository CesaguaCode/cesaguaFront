import axios from "axios";

export class MilestoneService {
  private URL: string = "http://localhost:3200/milestone";

  public async getAll() {
    const request = await axios.get(this.URL).then(({ data }) => data.data);
    return request[0];
  }

  public async delete(id: number) {
    const config = {
      headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoIjp7InJvbCI6M30sImlhdCI6MTY2NTE4MzE1OSwiZXhwIjoxNjY1MjE5MTU5fQ.aUapKIhreD9AbJHEiJ5OIt4-3NXxv-kMFH7yBV0ys9c` },
    };

    return await axios.delete(`${this.URL}/${id}`, config);
  }
}
