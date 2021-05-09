import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  getId:any 
  constructor(
    private UserCards: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.UserCards.params.subscribe((params) =>{
     return this.getId = params
    })
    console.log(this.getId);
    
  }

}
