import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LegalProtectionService } from '../service-data/legal-protection.service';
import { PostalcodeService } from '../service-data/postalcode.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-legal-protection',
  templateUrl: './legal-protection.component.html',
  styleUrls: ['./legal-protection.component.css']
})
export class LegalProtectionComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder,
    private router: Router,
    private legalProtectionService: LegalProtectionService,
    private postalcodeService:PostalcodeService,
  ) { }
  firstFormGroup: FormGroup;
  isLinear = true;
  minDate: Date = new Date();
  mindate =  new Date(this.minDate.getFullYear(), this.minDate.getMonth() + 1 , 1);
  isLoading = false
  lastFormGroup: FormGroup;

  selectedDate
  maxDate = new Date(this.minDate.getFullYear(), this.minDate.getMonth() + 3 , 1);
  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      postalCode: [, Validators.pattern('[0-9]{5}')],
      date: [, Validators.required],
      birthDate: [, Validators.required],
      regime: [, Validators.required],
    });
    this.lastFormGroup = this._formBuilder.group({
      firstname: [, Validators.required],
      lastname: [, Validators.required],
      phonenumber: [, [Validators.pattern("^[0-9]*$"),
      Validators.minLength(10), Validators.maxLength(10)]   ],
      email: [, [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      callMe: [true,],
    });
  }
  classname = "";

  regime: any = [
    {
      text: "Salarié",
      value: "1"
    },
    {
      text: "Retraité salarié",
      value: "4"
    },
    {
      text: "TNS Indépendant",
      value: "2"

    },
    {
      text: "Retraité TNS",
      value: "5"
    },
    {
      text: "Exploitant agricole",
      value: "3"
    },
    {
      text: " Salarié Agricole",
      value: "12"
    },
    {
      text: "Alsace-Moselle",
      value: "8 "
    },
    {
      text: "Sans emploi",
      value: "7"
    },
    {
      text: "Fonctionnaire",
      value: "9"
    },
    {
      text: " Etudiant",
      value: "6"
    },
    {
      text: "Enseignant",
      value: "10"
    },
    {
      text: "Expatrié",
      value: "11"
    },
  ];
checkPostalCode(){
    const body = { code : this.firstFormGroup.value.postalCode.toString()}
  this.postalcodeService.CheckZipCodeExist(body).subscribe( (data : any) =>{
    if( data[0]){
      this.submit()  
    }
    else if( !data[0]){
    Swal.fire('le code postal inexistant')
  }
    },
  (error) => {                              
  })
}
  submit() {
    var datePipe = new DatePipe('en-US');
    const body = {
      "code_postal": this.firstFormGroup.value.postalCode.toString(),
      "date_effect": datePipe.transform( this.selectedDate, 'dd/MM/yyyy'),
      "date": datePipe.transform(this.firstFormGroup.value.birthDate, 'dd/MM/yyyy'),
      "regime": this.firstFormGroup.value.regime.value,
      "regimeText": this.firstFormGroup.value.regime.text,
      "firstname": this.lastFormGroup.value.firstname,
      "lastname": this.lastFormGroup.value.lastname,
      "phonenumber": this.lastFormGroup.value.phonenumber,
      "email": this.lastFormGroup.value.email,
      "call": this.lastFormGroup.value.callMe,
      "time":  datePipe.transform( this.minDate, 'dd/MM/yyyy'),
      "Type": "ProtectionJuridique",
      "devis": [],

    }
    this.isLoading = true
    const rating: any = []
    console.log(body)
    this.legalProtectionService.getlegalProtectionNeoliane(body).subscribe((data: any) => {
      this.isLoading = false
      console.log(data)
    this.router.navigateByUrl("/legal-protection-list", { state: [data, rating] });
    },
    (error) => {                              
      this.isLoading = false
      Swal.fire('Merci de vérifier vos champs')

    }
     )
  }

  onDateSelect(event) {
    this.selectedDate = new Date(event._d.getFullYear(), event._d.getMonth(), 1);
    console.log(this.selectedDate)
  }
  
  

}
