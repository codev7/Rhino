import CrudService from './CrudServiceZ';
import UserDto from '../model/dtoZ/user/UserDto';
import * as http from './HttpUtil';

class UserService extends CrudService<UserDto, any> {
    constructor() {
        super('users');
    }

    public async getSuggestions(): Promise<{ users: UserDto[] }> {
        return http.get<{ users: UserDto[] }>
            (`${this.resource}?exclude[]=*&include[]=username&include[]=id`);
    }
}

export default UserService;