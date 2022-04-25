import RestService from "./RestService";
import { AxiosResponse } from "axios";

export default abstract class TrendClient {
  static getProducts(): Promise<AxiosResponse<string[]>> {
    return RestService.get("/trend/products");
  }
}
