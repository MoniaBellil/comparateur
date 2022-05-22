import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxMaterialTimepickerTheme } from 'ngx-material-timepicker';
import Swal from 'sweetalert2';
import { ContactService } from '../service-data/contact.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  firstFormGroup: FormGroup;
firsttime = false
secondtime = true
  constructor(private _formBuilder: FormBuilder, private contactService: ContactService) { }


minDate: Date = new Date();

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstname: ['', Validators.required],
      text: ['', Validators.required],
      date: ['', Validators.required],
      phonenumber: ['', [Validators.pattern("^[0-9]*$"),
      Validators.minLength(10), Validators.maxLength(10)]   ],
      email: ['', [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      time: ['10-12',],

    });
  }
  choose(e){
  console.log(e)
}

  public sendEmail() {
    var datePipe = new DatePipe('en-US');


    const body =  { 
    "subject": this.firstFormGroup.value.firstname, 
    "content":  this.firstFormGroup.value.text, 
    "date": datePipe.transform(this.firstFormGroup.value.date, 'dd/MM/yyyy'),
    "phonenumber":this.firstFormGroup.value.phonenumber, 
    "from": this.firstFormGroup.value.email, 
    "time": "10-12"
     }

     this.contactService.sendMessage(body).subscribe(data => { 
      Swal.fire('Merci,votre message a été envoyé')

       console.log(data)
     })

    this.firstFormGroup.reset()  
  } 

}
