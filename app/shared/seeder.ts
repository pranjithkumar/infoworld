import {Component, Injectable} from '@angular/core';
import {RouteParams} from '@angular/router-deprecated';
import {SessionHandler} from '../shared/infostorage';
@Injectable()
export class SeederUrlHandler extends SessionHandler {
  private profileurl;
  private profiles = [];
  private data = [];
  constructor() {
    super("url"); 
    this.getProfiles();
  }
   
  
  public update_seeder(data:any){ 
      let self = this;
      data.forEach(function(row){
          console.log(row);
          self.createProfileContent(row);
      });
      console.log(data);
  }
   
  public createProfileContent(data : any) : any { 
    console.log(data);
    let data_string = JSON.stringify(data);
    if(data.setting == undefined){
        data.setting = {
            "visit" : 10
        }
    }
    this.insert_profile(data.searchUrl,data.setting.visit);
    
    this.change_model("url");
    let temp_data = this.get(data.searchUrl);
    console.log(temp_data);
    if(!temp_data){
        return this.set(data.searchUrl,data_string);
    }
  }
  
  public getProfiles(){
      this.change_model("profile");
      this.profiles = JSON.parse(this.get("profiles"));
      if(!this.profiles) {
          this.profiles = [];
      } 
      return this.profiles 
  }
  
  public insert_profile(profileurl,visit){
     this.change_model("profile"); 
     this.getProfiles();
     if(profileurl){
                  
        let profile_filtred = this.profiles.filter(function(row) {
            return row.url == profileurl;
        }); 
       if(!(profile_filtred && profile_filtred.length > 0)){
          
           this.profiles.push({
               'url' : profileurl,
               'visit':visit
           });
       }  
     }
    return this.refreshProfilesSession();
  }
  
 public refreshProfilesSession(){  
    this.set("profiles",JSON.stringify(this.profiles));
    console.log(this.getProfiles());
    return this.profiles;
  }
    
  
}