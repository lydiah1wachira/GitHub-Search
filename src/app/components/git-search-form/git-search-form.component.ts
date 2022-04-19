import { Component, OnInit,  Output, EventEmitter } from '@angular/core';
import { GitsearchService } from 'src/app/search-service/gitsearch.service';

@Component({
  selector: 'app-git-search-form',
  templateUrl: './git-search-form.component.html',
  styleUrls: ['./git-search-form.component.css']
})
export class GitSearchFormComponent implements OnInit {

  @Output() newUsername=new EventEmitter ()
  username:string = ''

  inputClick(username:string){
    this.newUsername.emit(username)
  }

  constructor(private gitsearchService:GitsearchService ) { }

  ngOnInit(): void {
  }

}
