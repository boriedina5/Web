export interface IUser{
    username: string;
    email: string;
    password: string;
}

export const defaultUser: IUser ={ //default obj
    username: "",
    email: "",
    password: ""
}
