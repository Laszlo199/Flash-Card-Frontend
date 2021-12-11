import {Component, HostListener, Input, OnInit} from '@angular/core';
import {Activity} from "../shared/activity";

@Component({
  selector: 'app-activity-card',
  templateUrl: './activity-card.component.html',
  styleUrls: ['./activity-card.component.css']
})
export class ActivityCardComponent implements OnInit {
  @Input() activity: Activity | undefined;
  date: number = 0;
  month: string = "";
  isHover = false;

  constructor() { }

  ngOnInit(): void {
    if(this.activity) {
      // @ts-ignore
      this.date = new Date(this.activity?.date).getDate();
      this.month = this.toMonth(new Date(this.activity.date).getMonth());
    }
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.isHover = true;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.isHover = false;
  }

  private toMonth(month: number) {
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December']
    return months[month];
  }
}
