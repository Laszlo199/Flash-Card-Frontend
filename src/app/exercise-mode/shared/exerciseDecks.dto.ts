import {exerciseCardsDto} from "./exerciseCards.dto";

export interface exerciseDecksDto {
  "id": number,
  "name": string,
  "description": string,
  "userId": number,
  "isPublic": boolean,
  "wasCopied": boolean,
  "cards": exerciseCardsDto[]
}
