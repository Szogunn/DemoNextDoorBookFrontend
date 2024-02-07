import { UserDTO } from "./UserDTO";


export interface Book {
  id: number;
  title: string;
  ISBN: string;
  language: string;
  publishedYear: Date
  publisher: string;
  numPages: number
  userDTO: UserDTO
}
