import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ContactsService } from '../contacts.service';
import { ActivatedRoute } from '@angular/router';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.css']
})
export class AddcontactComponent implements OnInit {
  phoneNumbers: any=[];

  constructor(private contact:ContactsService,private snack:MatSnackBar,private route:Router,private router:ActivatedRoute) { }
adding=true;
editing=false;
sayed=false;
isPhoneExist=false
add=new FormGroup({
  name:new FormControl('',[Validators.required]),
  phone:new FormControl('',[Validators.required])
})
checkPhone($event:any){
if(this.phoneNumbers.includes($event.target.value)){
  this.isPhoneExist=true;
}else{
  
  this.isPhoneExist=false;
}
}
submit(){
  this.contact.addList(this.add.value).subscribe((result:any)=>
  {
    if(result.success){
      this.snack.open(result.success,"cancel")
      this.route.navigate(['/contact'])
    }
  })
  this.add.reset({})
}
updateList(){
  this.contact.updateCurrentList(this.router.snapshot.paramMap.get('id'),this.add.value).subscribe((result)=>{
    
    if(this.sayed=true){
      this.snack.open("CANDIDATE UPADATED SUCCESSFULLY","cancel")
      this.route.navigate(['/contact'])
    }
})
 this.add.reset({})
}
getPhones(){
  this.contact.checkMobile().subscribe((result:any)=>
  {
    this.phoneNumbers=result.phone
  })
}
ngOnInit(): void {
  this.getPhones();
  if(this.router.snapshot.paramMap.get('id')){
  this.contact.getCurrentList(this.router.snapshot.paramMap.get('id')).subscribe((result:any)=>
  {
    console.log(result);
    this.add=new FormGroup({
      name:new FormControl(result['name']),
      phone:new FormControl(result['phone'])
    })
    this.editing=true
   this. adding=false
  })
}
}
get name(){
  return this.add.get('name')
}
get phone(){
  return this.add.get('phone')
}
}
