import { Component,OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent {
  deleteModal:any;
  idTodelete:number=0;
  allusers:User[]=[];

  formdata:User={
    id: 0,
    name: '',
    email: ''
  }

  constructor(private userService:UserService,private router:Router){}

  ngOnInit(): void{
    this.getUser();
   /* this.userService.getAll().subscribe((data: User[])=>{
      this.allusers=data; 
    })*/
  }

  getUser(){
    this.userService.getAll().subscribe(data=>{
      this.allusers=data;
      console.log("...........",data)
  });
}

create(){
  this.userService.creat(this.formdata).subscribe({
    next:(data)=>{
      this.router.navigate(["/user"])
    },
   // error:(er)=>{
    //  console.log(er);
    //}
  })
}

editUser(item:any){
  debugger
}

  delete(item:any){
    this.userService.deleteUser(item.id).subscribe(res=>{
      console.log(",,,,,,,,,,,,,,,,,,,",res);
      alert("user deleted")
      this.getUser();
    },
    err=>{
      alert("........")
    },
    )}

 /* update(){
    this.userService.updateUser(this.formdata,this.formdata.id).subscribe(res=>{
      alert("updated succesfully")
    })
  }*/
}
