// import {UserTable} from './../src/users';
import {JsonPlaceholder} from './../src/JsonPlaceholder';
// const ob = new UserTable({id:'sdsd0',token:'',log:true});
const JP = new JsonPlaceholder({id:'sdsd0',token:'Axasikjaksjaksjksjaksassa',log:true});
describe('blah', () => {
  it('call', async() => {
    const res = await JP.User.getUsers();
    expect(res.message).toEqual('OK');
  });
});
