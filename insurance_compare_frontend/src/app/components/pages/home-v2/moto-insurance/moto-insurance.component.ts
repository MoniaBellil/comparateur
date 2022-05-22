import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import { MotoService } from '../service-data/moto.service';
import Swal from 'sweetalert2';
import { PostalcodeService } from '../service-data/postalcode.service';
@Component({
  selector: 'app-moto-insurance',
  templateUrl: './moto-insurance.component.html',
  styleUrls: ['./moto-insurance.component.css']
})
export class MotoInsuranceComponent implements OnInit {


  constructor(private _formBuilder: FormBuilder,
   private motoService: MotoService,
   private postalcodeService :PostalcodeService,
   private router: Router,


  ) { }
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isLinear = true;
  minDate: Date = new Date();
  mindate =  new Date(this.minDate.getFullYear(), this.minDate.getMonth() + 1 , 1);
  isLoading = false
  lastFormGroup: FormGroup;
  options: string[] = [];
  filteredOptions: Observable<string[]>;
  body
  myControl = new FormControl();

  selectedDate
  maxDate = new Date(this.minDate.getFullYear(), this.minDate.getMonth() + 3 , 1);
  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      postalCode: [, Validators.pattern('[0-9]{5}')],
      startDate: [, Validators.required],
      dateCirculation: [, Validators.required],
      dateAcquisition: [, Validators.required],
      typegarage: [, Validators.required],
      motoType: [, Validators.required],
      griscard: [, Validators.required],
      motoUse: [, Validators.required],
    });

    this.secondFormGroup = this._formBuilder.group({
      civilité: [, Validators.required],
      permis: [,],
      havepermis: [, Validators.required],
      BirthDate: [, Validators.required],
      permiDate: [,],

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

  test(){
    this.secondFormGroup.get('havepermis').valueChanges
    .subscribe(value => {
      console.log(value)
      if(value == 'true') {
        this.secondFormGroup.get('permis').setValidators(Validators.required)
        this.secondFormGroup.get('permiDate').setValidators(Validators.required)
      } else {
        this.secondFormGroup.get('permis').reset()
        this.secondFormGroup.get('permis').setValidators(Validators.nullValidator);
        this.secondFormGroup.get('permiDate').reset()
        this.secondFormGroup.get('permiDate').setValidators(Validators.nullValidator);
      }
    });
  }



  classname = "";

  permis: any = [
    {
      text: "BSR option cyclomoteur ",
      value: "1"
    },
    {
      text: "BSR option quadricyle léger",
      value: "2"
    },
    {
      text: "Permis AM option cyclomoteur ",
      value: "3"
    },
    {
      text: "Permis AM option quadricyle léger",
      value: "4"
    },
    {
      text: "Permis A",
      value: "5"
    },
    {
      text: "Permis A2",
      value: "6"
    },
    {
      text: "Permis A1 / AL / B1 ",
      value: "7"
    },
    {
      text: "Permis B",
      value: "8"
    },
  ];

  civilite: any = [
    {
      text: "Madame",
      value: "1"
    },
    {
      text: "Monsieur",
      value: "2"
    },
    {
      text: "Mademoiselle",
      value: "2"
    },
  ];
  griscard: any = [
    {
      text: "Le titulaire, le conjoint, un parent",
      value: "1"
    },
    {
      text: "Une société (avec véhicule de société)",
      value: "2"
    }
  ];


  motoUse: any = [
    {
      text: "Vie privée + trajets domicile-lieu de travail ",
      value: "1"
    },
    {
      text: "Professionnel (avec véhicule privé)",
      value: "2"
    },
    {
      text: "Professionnel (avec véhicule de société)",
      value: "3"

    },
  ];

  modeAqui: any = [
    {
      text: "L.L.D ",
      value: "1"
    },
    {
      text: "Comptant / Crédit ",
      value: "2"
    },
    {
      text: "L.O.A",
      value: "3"

    },
  ];
  garageType: any = [
    {
      text: "Garage clos et couvert",
      value: "1"
    },
    {
      text: "Terrain privé clos",
      value: "2"
    },
    {
      text: "Voie publique",
      value: "3"

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


    if(this.secondFormGroup.value.havepermis == 'true'){
       this.body = {
        "code_postal": this.firstFormGroup.value.postalCode.toString(),
        "date_effect": datePipe.transform( this.firstFormGroup.value.startDate, 'dd/MM/yyyy'),
        "dateCirculation": datePipe.transform(this.firstFormGroup.value.dateCirculation, 'dd/MM/yyyy'),
        "dateAcquisition": datePipe.transform(this.firstFormGroup.value.dateAcquisition, 'dd/MM/yyyy'),
        "typegarage": this.firstFormGroup.value.typegarage.text,
        "motoType": this.firstFormGroup.value.motoType,
        "griscard": this.firstFormGroup.value.griscard.text,
        "motoUse": this.firstFormGroup.value.motoUse.text,
        "BirthDate": datePipe.transform(this.secondFormGroup.value.BirthDate, 'dd/MM/yyyy'),
        "havepermis": this.secondFormGroup.value.havepermis,
        "civilite": this.secondFormGroup.value.civilité.text,
        "permiDate": datePipe.transform(this.secondFormGroup.value.permiDate, 'dd/MM/yyyy'),
        "permis": this.secondFormGroup.value.permis.text,
        "firstname": this.lastFormGroup.value.firstname,
        "lastname": this.lastFormGroup.value.lastname,
        "phonenumber": this.lastFormGroup.value.phonenumber,
        "email": this.lastFormGroup.value.email,
        "call": this.lastFormGroup.value.callMe,
        "time":  datePipe.transform( this.minDate, 'dd/MM/yyyy'),
        "Type": 'moto',
        "devis": [],
      }
    }else
    {
      this.body = {
        "code_postal": this.firstFormGroup.value.postalCode.toString(),
        "date_effect": datePipe.transform( this.firstFormGroup.value.startDate, 'dd/MM/yyyy'),
        "dateCirculation": datePipe.transform(this.firstFormGroup.value.dateCirculation, 'dd/MM/yyyy'),
        "dateAcquisition": datePipe.transform(this.firstFormGroup.value.dateAcquisition, 'dd/MM/yyyy'),
        "typegarage": this.firstFormGroup.value.typegarage.text,
        "motoType": this.firstFormGroup.value.motoType,
        "griscard": this.firstFormGroup.value.griscard.text,
        "motoUse": this.firstFormGroup.value.motoUse.text,
        "BirthDate": datePipe.transform(this.secondFormGroup.value.BirthDate, 'dd/MM/yyyy'),
        "havepermis": this.secondFormGroup.value.havepermis,
        "civilite": this.secondFormGroup.value.civilité.text,
        "firstname": this.lastFormGroup.value.firstname,
        "lastname": this.lastFormGroup.value.lastname,
        "phonenumber": this.lastFormGroup.value.phonenumber,
        "email": this.lastFormGroup.value.email,
        "call": this.lastFormGroup.value.callMe,
        "time":  datePipe.transform( this.minDate, 'dd/MM/yyyy'),
        "Type": 'moto',
        "devis": [],
        
      }
    }

    this.isLoading = true
    console.log(this.body)
    const rating = [this.lastFormGroup.value.firstname,this.lastFormGroup.value.lastname,this.lastFormGroup.value.email,this.lastFormGroup.value.phonenumber]
    this.motoService.getMotoInsurance(this.body).subscribe((data: any) => {
      this.isLoading = false
      console.log(data)
    this.router.navigateByUrl("/moto-list", { state: [data, rating] });
    },
    (error) => {                              
      this.isLoading = false
      Swal.fire('Merci de vérifier vos champs')

    }
    )
  }
  onMonthSelect(event) {
    this.selectedDate = new Date(event.getFullYear(), event.getMonth(), 1);
  }

  onDateSelect(event) {
    this.selectedDate = new Date(event._d.getFullYear(), event._d.getMonth(), 1);
    console.log(this.selectedDate)
  }

}
