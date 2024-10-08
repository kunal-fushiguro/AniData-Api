import { logger } from "../logs/config";
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
      logger.info("Connect to redis");
    } catch (error: any) {
      logger.error("Error While Connecting to redis Server ", error);
    }
  }

  // get the data
  async getData(key: string): Promise<any> {
    try {
      return await this.cacheClient.get(key);
    } catch (error: any) {
      logger.error(
        `Error Occured while getting the data from redis : ${error.message}`
      );
    }
  }

  //   set the data
  async setData(key: string, value: string, expireIn: number): Promise<any> {
    try {
      await this.cacheClient.set(key, value);
      await this.cacheClient.expire(key, expireIn);
    } catch (error: any) {
      logger.error(
        `Error Occured while getting the data from redis : ${error.message}`
      );
    }
  }

  async removeData(key: string): Promise<any> {
    try {
      await this.cacheClient.del(key);
    } catch (error: any) {
      logger.error(
        `Error Occured while getting the data from redis : ${error.message}`
      );
    }
  }
}
