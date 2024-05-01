import { hash, hashSync, genSalt, compare, compareSync } from "bcrypt";
import { HashingService } from "./hashing.service";

export class BcryptService extends HashingService{
  public async hash(password: string){
    const salt = await genSalt();
    return hashSync(password, salt);
  }
  public compare(password:string, hashingPassword:string){
    return compareSync(password, hashingPassword);
  }
}