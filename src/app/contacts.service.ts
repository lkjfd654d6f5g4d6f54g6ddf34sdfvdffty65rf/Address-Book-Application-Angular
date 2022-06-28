import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http:HttpClient) { }
  url="http://localhost:3000/";
  

  getList(){
    return this.http.get(`${this.url}list`)
  }
  addList(data:any){
    return this.http.post(`${this.url}list`,data)
  }
  checkMobile(){
    return this.http.post(`${this.url}check-mobile`,"hh")
  }
  deleteList(id:any){
    console.log(id);
     return this.http.post(`${this.url}delete?id=${id}`,id)
      }
      getCurrentList(id:any){
        return this.http.get(`${this.url}update/${id}`) 
      }
      updateCurrentList(id:any,data:any){
        return this.http.put(`${this.url}update/${id}`,data) 
      }
}
