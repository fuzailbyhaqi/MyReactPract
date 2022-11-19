import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

export default class AxiosHelper {
  private endPoint: string = "";

  /**
   * @param endPoint This will be different for every endpoint.
   */
  constructor(endPoint: string) {
    this.endPoint = endPoint;
    axios.defaults.baseURL = "https://api.pkubite.com/";
  }

  public get(config?: AxiosRequestConfig): Promise<any> {
    return new Promise((resolve, reject) => {
      axios
        .get(this.endPoint, config)
        .then((value: AxiosResponse) => {
          console.log("success");
          resolve(value.data);
        })
        .catch((error: AxiosError) => {
          console.log("error");
          // TODO: This has to be done... Ahmed
          reject(error);
        });
    });
  }

 
}
