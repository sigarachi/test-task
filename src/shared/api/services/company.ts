import { network } from "../common";
import type { CompanyInfo } from "../models/company";

export class CompanyService {
  static async getList(): Promise<Array<CompanyInfo>> {
    const { data } = await network.get<Array<CompanyInfo>>("/posts");

    return data;
  }
}
