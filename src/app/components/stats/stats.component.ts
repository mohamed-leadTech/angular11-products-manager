import { Component, OnInit } from '@angular/core';
import { EventDriverService } from 'src/app/state/event-driven.service';
import { ActionEvent } from 'src/app/state/products.state';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  count: number = 0;

  constructor(private eventDriverService: EventDriverService) {
    this.eventDriverService.sourceEventSubjectObservable.subscribe((actionEvent: ActionEvent)=>{
      ++this.count;
    })
   }

  ngOnInit(): void {
  }

}
