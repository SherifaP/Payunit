import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { validateUserData } from '../payunit-data';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  getId:any ;
  userArray:any[]=[]
  constructor(
    private UserCards: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.UserCards.params.subscribe((params) =>{
     return this.getId = params.id
    })
    console.log(this.getId);

    validateUserData.map((dataParams)=>{
      if(this.getId ==dataParams.userIds){
        this.userArray.push(dataParams)
      }
      return this.userArray
    })
    console.log(this.userArray); 
  }
  

}
