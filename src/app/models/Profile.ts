import { Address } from "./Address";
import { UserDTO } from "./UserDTO";

export interface Profile {
  userDTO: UserDTO;
  address: Address;
}
