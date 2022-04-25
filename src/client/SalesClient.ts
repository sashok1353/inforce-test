import RestService from "./RestService";
import { AxiosResponse } from "axios";

export default abstract class SalesClient {
  static getDay(date: string): Promise<AxiosResponse> {
    return RestService.get("/sales/day", { date });
  }
}
