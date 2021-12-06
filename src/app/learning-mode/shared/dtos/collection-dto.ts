import {FlashcardDto} from "./flashcard-dto";

export interface CollectionDto {
  'id': number,
  "name": string,
  "description": string,
  "cards": FlashcardDto[]
}
