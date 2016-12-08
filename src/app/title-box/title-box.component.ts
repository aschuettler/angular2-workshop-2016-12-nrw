import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'bm-title-box',
  templateUrl: './title-box.component.html',
  styleUrls: ['./title-box.component.css']
})
export class TitleBoxComponent implements OnInit {

  @Input() title: string;
  @Output() titleClicked = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  sendEvent() {
    this.titleClicked.emit(`clicked component with ${this.title}`);
  }

}
