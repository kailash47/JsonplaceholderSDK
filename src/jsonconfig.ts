export class Config{
    constructor(){}
    public static readonly HOST_URL= 'jsonplaceholder.typicode.com';
    public static readonly PORT= 443;
    public static readonly PROTOCOL = 'https:';
    public static readonly VERSION = 'v1';
    public static readonly USER = {
        GETUSERS: {
            method:'GET',
            path:'/users'
        },
        GETUSERBYID : {
            method:'GET',
            path:'users'
        },
        INSERTUSER : {
            method:'POST',
            path:'users'
        },
        UPDATEUSER : {
            method:'PUT',
            path:'users'
        },
        DELETEUSER : {
            method:'DELETE',
            path:'users'
        }
    }
}