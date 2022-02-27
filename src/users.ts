import { Config } from './jsonconfig';
import { JsonRest } from './reqapi';
import { ConfigParam, IUser, ResponseObj, User } from './schema';

export class UserTable implements IUser{
    constructor(public config:ConfigParam) { }

    async getUsers(): Promise<ResponseObj<User[]>> {
        const path = Config.USER.GETUSERS;
        const dataResp = await JsonRest<User[]>(this.config,path);
        return dataResp;
    }

    async updateUser(data:User): Promise<ResponseObj<User>> {
        const path = Config.USER.INSERTUSER;
        const dataResp = await JsonRest<User>(this.config,path,data);
        return dataResp;
    }

    async insertUser(data:User): Promise<ResponseObj<User>> {
        const path = Config.USER.INSERTUSER;
        const dataResp = await JsonRest<User>(this.config,path,data);
        return dataResp;
    }

}
