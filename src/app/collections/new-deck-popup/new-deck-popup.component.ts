import {Component, Input, OnInit} from '@angular/core';
import {DeckDto} from "../shared/dtos/deck/deck.dto";
import {PostDeckDto} from "../shared/dtos/deck/post-deck.dto";
import {DeckService} from "../shared/deck.service";
import {AuthService} from "../../auth/shared/auth.service";

@Component({
  selector: 'app-new-deck-popup',
  templateUrl: './new-deck-popup.component.html',
  styleUrls: ['./new-deck-popup.component.css']
})
export class NewDeckPopupComponent implements OnInit {
  userId: number | undefined;
  isPublic: boolean = false;
  name: string | undefined;
  description: string = "";

  constructor(private service: DeckService, private loginService: AuthService) { }

  ngOnInit(): void {
    this.userId=this.loginService.getUserId();
  }

  createNew() {
    if(this.name && this.name.length>0 && this.userId) {
      let deck: PostDeckDto = {
        "name": this.name,
        "description": this.description,
        "userId": this.userId,
        "isPublic": this.isPublic
      }
      this.service.createDeck(deck)
        .subscribe(data=> {
          this.closePopup(true);
        });
    }
  }

  cancel() {
    this.closePopup(false);
  }

  private closePopup(deckCreated: boolean) {
    this.service.sendUpdate(deckCreated);
    this.resetFields();
  }

  private resetFields() {
    this.name = "";
    this.description = "";
    this.isPublic = false;
  }
}
