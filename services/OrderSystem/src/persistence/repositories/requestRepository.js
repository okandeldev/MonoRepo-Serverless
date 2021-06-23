import {requestRepository as requestRepositoryBase} from "../../domain/repository/requestRepository"
import {request} from "../../domain/entity/request"

const {constants} = require('../../infrastructure/config/constants')

/*
Implementation Class for base request Repository
*/
export class requestRepository extends requestRepositoryBase {

  constructor({db2, mongoDao}) {
    super();
    this.db2 = db2;
    this.Request = this.db2.Request;
    this.mongoDao = mongoDao;
  }

  //create MySQL request
  async createMySQLRequest(requestData) {
    const res = await this.Request.create({...requestData})
    if (!res) {
      return null;
    }
    return new request(res.id, res);
  }

  //create Mongo request
  async createMongoRequest(requestData) {
    const res = await this.mongoDao.insertOne(constants.mongoCollections.requests, requestData);
    if (!res) {
      return null;
    }
  }

}
