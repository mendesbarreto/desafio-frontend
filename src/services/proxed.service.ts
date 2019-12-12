import Axios, { AxiosInstance } from "axios";
import { getEnvs } from "../utils";

export class ProxedService {
  protected api: AxiosInstance;

  constructor(protected apiUrl: string) {
    /**
     * API PROXED
     * https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9
     */
    const { REACT_APP_PROXY } = getEnvs();
    this.api = Axios.create({ baseURL: `${REACT_APP_PROXY}/${apiUrl}` })
  }
}
