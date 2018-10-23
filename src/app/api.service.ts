import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: Http) { 
   
  }
  loginApi(form){
    return this.http.post('http://localhost:3000/user/login', form)
  }
  registerApi(form){
    return this.http.post('http://localhost:3000/user/register', form)
  }

  getuser(){
    return this.http.get('http://localhost:3000/user/users')
  }
  deleteuser(id){
    return this.http.delete('http://localhost:3000/user/users/' + id)
  }
  edituser(id, user){
    return this.http.put('http://localhost:3000/user/users/' + id, user)
  }
  
  
}
