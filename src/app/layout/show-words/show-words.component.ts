import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-words',
  templateUrl: './show-words.component.html',
  styleUrls: ['./show-words.component.scss']
})
export class ShowWordsComponent implements OnInit {

   @Input() fjala:string;


  constructor() { }

  ngOnInit(): void {
  }

}
