import {CardDto} from "./card.dto";

export interface DeckDto {
  "id": number,
  "name": string,
  "description": string,
  "userId": number,
  "isPublic": boolean,
  "cards": CardDto[]
}
