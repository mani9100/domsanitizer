import { Component } from '@angular/core';
import {  
  SafeResourceUrl, SafeUrl,
  DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sanitizer';

untrustedurl:string;
GenuineUrl:SafeUrl;


UntrustedVideoUrl:string;
GenuinevideoUrl:SafeResourceUrl;
dummyvideoUrl:string;



  // injectedhtml='in this place atteckers will be <script>alert("attack")</script> text display';
  // attackersUrl='javascript alert:("this is corruetd data base") thanlks youuu';

constructor( private dom:DomSanitizer){
//hear we cant get alert 

  // this.untrustedurl =' javascript:alert("hi by below condition true  so iam excutethis is 0angular project its going to bypass here we can get alert once click the button")';
 //we are going to bypass so we caan get alert
  // this.GenuineUrl=this.dom.bypassSecurityTrustUrl(this.untrustedurl)


//below code belongs to video 
// we are going to assign id
// by below to steps we cant get videos 
this.dummyvideoUrl='2dAk1D-kb28';
this.UntrustedVideoUrl='https://www.youtube.com/embed/' + this.dummyvideoUrl

//by adding below step we can get video

this.GenuinevideoUrl=this.dom.bypassSecurityTrustResourceUrl(this.UntrustedVideoUrl)
}


}
