import { redis_url } from "../config/config";
import { createClient, RedisClientType } from "redis";

export class Caches {
  public cacheClient: RedisClientType;
  constructor() {
    this.cacheClient = createClient({ url: String(redis_url) });
  }

  // connect to redis server
  async connectToRedis() {
    try {
      await this.cacheClient.connect();
      console.log("Connect to redis");
    } catch (error: any) {
      console.log("Error While Connecting to redis Server ", error);
    }
  }

  // get the data
  async getData(key: string): Promise<any> {
    return await this.cacheClient.get(key);
  }

  //   set the data
  async setData(key: string, value: string, expireIn: number): Promise<any> {
    await this.cacheClient.set(key, value);
    await this.cacheClient.expire(key, expireIn);
  }

  async removeData(key: string): Promise<any> {
    await this.cacheClient.del(key);
  }
}
