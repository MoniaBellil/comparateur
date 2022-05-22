import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MutualService } from '../service-data/mutual.service';
import { PostalcodeService } from '../service-data/postalcode.service';

@Component({
  selector: 'app-mutual-insurance',
  templateUrl: './mutual-insurance.component.html',
  styleUrls: ['./mutual-insurance.component.css']
})
export class MutualInsuranceComponent implements OnInit {

  classname = "";


  constructor(private _formBuilder: FormBuilder,
    private mutualService:MutualService,
    private router: Router,
    private postalcodeService:PostalcodeService,

) { }
  title = 'newMat';
  body: any[]
  minDate: Date = new Date();
  date =  new Date(this.minDate.getFullYear(), this.minDate.getMonth() + 1 , 1); 
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  lastFormGroup: FormGroup;

  isLoading = false

  options: any = [{
    text: "Minimum",
    value: "1"
  },
  {
    text: "Moyen",
    value: "2"
  },
  {
    text: "Fort",
    value: "3"
  },
  {
    text: "Maximum",
    value: "4"
  },

  ];
  selectedDate
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      postalCode: ['', Validators.pattern('[0-9]{5}')],
      date: ['',  Validators.required],
      birthDate:['',Validators.required],
      regime: ['', Validators.required],
      salaire: ['', Validators.required],
      checked2: [false,],

    });
    this.secondFormGroup = this._formBuilder.group({
      hospitalisation: [this.options[0], Validators.required],
      dentaire: [this.options[0], Validators.required],
      optique: [this.options[0], Validators.required],
      soins: [this.options[0], Validators.required],
    });
    this.lastFormGroup = this._formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      phonenumber: ['', [Validators.pattern("^[0-9]*$"),
      Validators.minLength(10), Validators.maxLength(10)]],
      email: ['', [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      callMe: [true,],
    });
  }
  onMonthSelect(event) {
    this.selectedDate = new Date(event._d.getFullYear(), event._d.getMonth(), 1);
  }

  onDateSelect(event) {
    this.selectedDate = new Date(event._d.getFullYear(), event._d.getMonth(), 1);
  }
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

  onEndpointValChange(e: any) {
    console.log(e)
  }

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
      "date_effect":  datePipe.transform( this.selectedDate, 'dd/MM/yyyy'),
      "date":  datePipe.transform(this.firstFormGroup.value.birthDate, 'dd/MM/yyyy'), 
      "regime": this.firstFormGroup.value.regime.value,
      "regimeText": this.firstFormGroup.value.regime.text,
      "hospi": this.secondFormGroup.value.hospitalisation.value,
      "optic": this.secondFormGroup.value.optique.value,
      "dentaire": this.secondFormGroup.value.dentaire.value,
      "consultation": this.secondFormGroup.value.soins.value,
      "hospiText": this.secondFormGroup.value.hospitalisation.text,
      "opticText": this.secondFormGroup.value.optique.text,
      "dentaireText": this.secondFormGroup.value.dentaire.text,
      "consultationText": this.secondFormGroup.value.soins.text,
      "firstname": this.lastFormGroup.value.firstname,
      "lastname": this.lastFormGroup.value.lastname,
      "salaire": this.firstFormGroup.value.salaire.toString(),
      "checked2": this.firstFormGroup.value.checked2,
      "phonenumber": this.lastFormGroup.value.phonenumber,
      "email": this.lastFormGroup.value.email,
      "call": this.lastFormGroup.value.callMe,
      "time":  datePipe.transform( this.minDate, 'dd/MM/yyyy'),
      "Type": 'Sante',
      "devis": [],
    }

    console.log(body)    
   this.isLoading = true
    const rating = [Number(this.secondFormGroup.value.hospitalisation.value), Number(this.secondFormGroup.value.optique.value), Number(this.secondFormGroup.value.dentaire.value), Number(this.secondFormGroup.value.soins.value)]
    this.mutualService.getMutualNeoliane(body).subscribe((data: any) => {
      this.isLoading = false
      console.log(data)
      this.router.navigateByUrl("/mutual-list", { state: [data, rating] })
    },
    (error) => {   
      this.isLoading = false                    
      Swal.fire('Merci de vérifier vos champs')
       
    }
    )
  }
}
