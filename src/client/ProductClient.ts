import RestService from "./RestService";
import { Product } from "../store/productSlice";
import { AxiosResponse } from "axios";

export default abstract class ProductClient {
  static saveProduct(product: Product): Promise<AxiosResponse> {
    return RestService.post("/product/save", product);
  }

  static getAll(): Promise<AxiosResponse> {
    return RestService.get("/product/all");
  }
}
