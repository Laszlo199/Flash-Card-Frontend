import {CardDto} from "../card/card.dto";

export interface DeckDto {
  "id": number,
  "name": string,
  "description": string,
  "userId": number,
  "isPublic": boolean,
  "wasCopied": boolean,
  "cards": CardDto[]
}
