import { Component } from '@angular/core';
import { Developper } from '../models/model.developper';

@Component({
  selector: 'app-developper',
  templateUrl: './developper.component.html',
  styleUrls: ['./developper.component.css']
})
export class DevelopperComponent {

developer : Developper = {
  firstname :"alioune",
  lastname : "beye",
  age : 20 ,
  bio : "etudiant ",

  skills : [{name :'js',logo:'nike',site:'wild.com'}],
   
  
}


onSubmit(){

}
  
}
