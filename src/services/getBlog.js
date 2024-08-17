import { httpAxios } from "../helper/httpHelper";

export async function getBlog() {
  const result = await httpAxios
    .get("/api/getBlog")
    .then((response) => response.data);
  return result;
}
