import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  constructor(private userservice:UserService,
    private router:Router){}

 formdata: User={
    id: 0,
    name: '',
    email: ''
  } 

   /*formdata: User={
    id:number="0";
    name: string="";
    email: string=""

  } */

  create(){
    this.userservice.creat(this.formdata).subscribe({
      next:(data)=>{
        this.router.navigate(["/user"])
      },
      error:(er)=>{
        console.log(er);
      }
    })
  }

}
