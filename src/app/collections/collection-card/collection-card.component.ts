import {Component, Input, OnInit} from '@angular/core';
import {DecksDto} from "../shared/dtos/deck/decks.dto";
import {Router} from "@angular/router";
import {MatDialog} from '@angular/material/dialog';
import {GoToPractisePopupComponent} from "../go-to-practise-popup/go-to-practise-popup.component";

@Component({
  selector: 'app-collection-card',
  templateUrl: './collection-card.component.html',
  styleUrls: ['./collection-card.component.css']
})
export class CollectionCardComponent implements OnInit {

  @Input() deck?: DecksDto;

  constructor(private router: Router,
              private dialog: MatDialog) { }

  ngOnInit(): void {
  }

 /* goToLearningMode(id: number) {
    this.router.navigateByUrl("/learningMode/"+id)
  }*/


  openPractiseDialog() {
    const dialogRef= this.dialog.open(GoToPractisePopupComponent,
      {
        height: '60vh',
        width: '30vw',
        data: {
        id: this.deck?.id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
