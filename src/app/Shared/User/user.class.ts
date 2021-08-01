import {IUser} from "./user.interface";

export class User implements IUser{
  public name: string;
  public department: string;
  public address: string;
  public image: string;

  constructor(name: string, department: string, address: string, image: string) {
    this.name = name;
    this.department = department;
    this.address = address;
    this.image = image;
  }

}
