import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private contact:ContactsService,private snack:MatSnackBar) { }
collection:any=[]
  ngOnInit(): void {
    this.contact.getList().subscribe((result:any)=>{
      this.collection=result.result
    })
  }
  delete(item:number){
    console.log(this.collection);
    this.contact.deleteList(item).subscribe((result:any)=>
    {
      if(result.isSuccess){
        this.snack.open(result.messege,"cancel")

        window.location.reload();
      }
      console.log(result);
      
    })
    
      }
}
