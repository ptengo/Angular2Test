import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  @Input()
  showChat: boolean;

  @Output()
  change: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  constructor() { }

  ngOnInit() {
  }

  toggleChat(event) {
    this.change.emit(this.showChat);
  }
}
