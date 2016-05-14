import {Component, Injectable} from '@angular/core';
import {RouteParams} from '@angular/router-deprecated';

export class SessionHandler {
  private storage;
  private hash = "Infoworld"; 
  public modal ;
  
  constructor(modal: any){
    console.log();
    if(modal) {
      modal = 'common';
    }
    this.modal = modal;
  }
  
  protected set(key: string, data: any ): void {
    var modal_key = this.get_key(key);
    
   return localStorage.setItem(modal_key, data); 
  }
  
  public get(key: string): any {
    if(this.has(key)){
      var modal_key = this.get_key(key);
      return localStorage.getItem(modal_key);
    }
    return false;
  }
  
  public has(key: string): boolean {
     var modal_key = this.get_key(key);
    if(localStorage.getItem(modal_key)){     
      return true;
    }
    return false;
  }
  
  public remove(key: string): void {
     var modal_key = this.get_key(key);
    localStorage.removeItem(modal_key);
  }
  
  private get_key(key: string) {    
    return this.hash + '-' + this.modal + '-' + key;    
  }
}

@Injectable()
export class SessionUrlHandler extends SessionHandler {
  private profileurl;
  constructor(private _routeParams: RouteParams) {
    super("url");
    this.profileurl = _routeParams.get('profileurl');
    console.log(this.profileurl);
  }
  
  public getcontent() : any {
   if(this.has(this.profileurl)){
     return JSON.parse(this.get(this.profileurl));
   }
   return false;
  }
  
  public createContent(data : any) : any {
   if(this.hasUrl()){
     return {"error":true,'type':"EXIST"};
   }
   data = JSON.stringify(data);
   return this.set(this.profileurl,data);
  }
  
  public updateContent(data : any) : any {
   if(!this.hasUrl()){
     return {"error":true,'type':"EXIST"};
   }
   data = JSON.stringify(data);
   return this.set(this.profileurl,data);
  }
  
  public hasUrl() : any {
   if(this.has(this.profileurl)){
     return true;
   }
   return false;
  }
  
  public updateKeyContent(key:string,data:any) : any {
   if(this.has(this.profileurl)){
     var data =  JSON.parse(this.get(this.profileurl));
     data[key] = data;
     this.updateContent(data);      
   }
   return false;
  }
  
  
  
  
}

