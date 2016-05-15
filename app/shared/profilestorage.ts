import {Component, Injectable} from '@angular/core';
import {RouteParams} from '@angular/router-deprecated';
import {SessionHandler} from '../shared/infostorage';

@Injectable()
export class SessionProfileHandler extends SessionHandler {
  private profiles = {};
  constructor(private _routeParams: RouteParams) {
    super("profile");
    let profileurl = _routeParams.get('profileurl');  
    this.getProfiles();
    this.addProfile(profileurl);
    console.log(this.profiles);
  }
  
  public getProfiles(){
      if(this.get("profiles")){
        this.profiles = JSON.parse(this.get("profiles")); 
      }
      return this.profiles 
  }
  
  public refreshProfilesSession(){  
    this.set("profiles",JSON.stringify(this.profiles));
    console.log(this.getProfiles());
    return this.profiles;
  }
    
  public addProfile(profileurl: string){
     if(profileurl){
       if(this.profiles[profileurl] ==undefined){
           this.profiles[profileurl]= {
               'url' : profileurl,
               'visit':1
           };
       } else {
           this.profiles[profileurl]['visit'] =this.profiles[profileurl]['visit'] +1 ;
       } 
     }
    return this.refreshProfilesSession();
  }
  
}
