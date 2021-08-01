
export class User {
  id: number;
 name: string;
 department: string;
 address: string;
 image: string;

  constructor(id, name, department, address, image) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.address = address;
    this.image = image;
  }

}
