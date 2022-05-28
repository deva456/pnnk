import { Component, Inject, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Inject(UserService)
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  user={};

  constructor(private userService :  UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((user:any)=>{
      console.log(user.data.emails);
    })
  }

}
