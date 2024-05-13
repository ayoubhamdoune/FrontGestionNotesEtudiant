export interface AppUser{

  username:string;
  password:string;
  roles:String[];
  firstName:string;
  lastName: string;

  email: string;
  _links: {
    self: {
      href: string
    };
    admin: {
      href: string
    };
  }
}
