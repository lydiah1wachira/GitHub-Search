import { Component, OnInit } from '@angular/core';
import { GitsearchService } from 'src/app/search-service/gitsearch.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  username = 'lydiah1wachira'
  
  user!:any;
  repo!:any;

  constructor(private gitsearchService:GitsearchService  ) { }

  getData(newUsername:any):void{
    this.username = newUsername;
    this.getRepoData=(newUsername)
    this.getUserData =(newUsername)
    this.gitsearchService.getUserRepo(this.username).subscribe((repo)=>{
      this.repo = repo
      console.log(repo)
    })
    this.gitsearchService.searchUsers(this.username).then((user) =>(this.user = user))
    console.log(this.username)
  } 

  getRepoData(username:string):void{
    this.gitsearchService.getUserRepo(username).subscribe((repo)=>{
      this.repo = repo
      console.log(repo)
    })
  }

  getUserData(username:string):void{
    this.gitsearchService.searchUsers(username).then((user) =>(this.user = user))
    console.log(username)
  }

  ngOnInit(): void {

    this.getRepoData(this.username)

    this.getUserData(this.username)
  }

}
