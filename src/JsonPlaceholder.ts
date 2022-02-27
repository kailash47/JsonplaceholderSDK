import { ConfigParam } from './schema';
import { UserTable } from './users';
export class JsonPlaceholder{
    constructor(public config:ConfigParam){}
    public User = new UserTable(this.config);
}