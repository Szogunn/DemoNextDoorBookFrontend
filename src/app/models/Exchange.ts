import { Book } from "./Book";
import { ExchangeStatus } from "./ExchangeStatus.enum";
import { UserDTO } from "./UserDTO";

export interface Exchange {
  id: number
  bookDTO: Book
  startRent: Date
  endRent: Date
  exchangeStatus: ExchangeStatus
  renter: UserDTO
}
