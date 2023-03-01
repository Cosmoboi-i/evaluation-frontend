import axios from "axios";
import { BASE_URL } from "../../constants/apiEndPoints";

export default async function makeRequest(
  endPoint,
  dynamicConfig = {},
  navigate
) {
  try {
    const params = {
      url: BASE_URL + endPoint.url,
      method: endPoint.method,
      ...dynamicConfig,
    };

    console.log(params);

    const { data } = await axios(params);

    return data;
  } catch (e) {
    if (navigate) {
      const status = e.response?.status;
      if (status) navigate(`error/:${status}`);
      else navigate("error");
    }
  }
}
