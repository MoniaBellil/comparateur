import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EnprunteurService } from '../service-data/enprunteur.service';
import { AssurancesService } from '../service-data/assurances.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-assurance1',
  templateUrl: './assurance1.component.html',
  styleUrls: ['./assurance1.component.css']
})
export class Assurance1Component implements OnInit {

  constructor(private _formBuilder: FormBuilder,
    private router: Router,
    private assurancesService:AssurancesService
  ) { }
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  therdFormGroup: FormGroup;
  questionFormGroup: FormGroup;
  isLinear = true;
  minDate: Date = new Date();
  mindate =  new Date(this.minDate.getFullYear(), this.minDate.getMonth() + 1 , 1);
  isLoading = false
  lastFormGroup: FormGroup;
  selectedDate
  show = false
  show1 = false
  show2 = false

  maxDate = new Date(this.minDate.getFullYear(), this.minDate.getMonth() + 3 , 1);
  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      fournissuer: [' ', Validators.required],
      besoin: [' ', Validators.required],
      logement: [' ', Validators.required],
      postalCode: [' ', Validators.pattern('[0-9]{5}')],
      consommation: [' ', Validators.required],
      tarif: [' ',],
    });
    this.secondFormGroup = this._formBuilder.group({
      puissance: [' ', ],
      electConsommation: [' ',],
      livraison: [' ',],
      pdl: [' ',],
    });
    this.questionFormGroup = this._formBuilder.group({
      logementType: [' ',],
      surface: [' ',],
      personne :[' ',],
      cuisine :[' ',],
      eau :[' ',],
      chauffage :[' ',]
    });

    this.therdFormGroup = this._formBuilder.group({
      ConsommationGaz: [' ',],
      livraisonGaz: [' ',],
      pce: [' ',],
    });

    this.lastFormGroup = this._formBuilder.group({
      firstname: [, Validators.required],
      lastname: [, Validators.required],
      phonenumber: [, [Validators.pattern("^[0-9]*$"),
      Validators.minLength(10), Validators.maxLength(10)]],
      email: [, [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      callMe: [true,],
    });
  }

  knowLivraisonGaz(){
    this.therdFormGroup.get('livraisonGaz').valueChanges
    .subscribe(value => {
      console.log(value)
      if(value == 'true') {
        this.secondFormGroup.get('pce').setValidators(Validators.required)
      } else {
        this.secondFormGroup.get('pce').setValidators(Validators.nullValidator);
      }
    });
  }
  knowLivraison(){
    this.secondFormGroup.get('livraison').valueChanges
    .subscribe(value => {
      console.log(value)
      if(value == 'true') {
        this.secondFormGroup.get('pdl').setValidators(Validators.required)
      } else {
        this.secondFormGroup.get('pdl').setValidators(Validators.nullValidator);
      }
    });
  }

  yesIknow(){
    this.firstFormGroup.get('consommation').valueChanges
    .subscribe(value => {
      console.log(value)
      if(value == 'true' ) {
        this.firstFormGroup.get('tarif').setValidators(Validators.required)
      } else 
      {
        this.firstFormGroup.get('tarif').setValidators(Validators.nullValidator);
        this.firstFormGroup.controls['tarif'].setValue(" ");
      }
    });
  }


  changeType(){
    this.firstFormGroup.get('besoin').valueChanges
    .subscribe(value => {
      console.log(value)
      if(value == 'true' ) {
        this.firstFormGroup.get('tarif').setValidators(Validators.required)
      } else 
      {
        this.secondFormGroup.get('tarif').setValidators(Validators.nullValidator);
      }
    
    });
  }

  knowNext(){
  
    if(this.firstFormGroup.value.consommation == 'true' &&  this.firstFormGroup.value.besoin.value == '1' ) {
      this.secondFormGroup.get('puissance').setValidators(Validators.required)
      this.secondFormGroup.get('electConsommation').setValidators(Validators.required)
      this.secondFormGroup.get('puissance').setValidators(Validators.required)
      this.secondFormGroup.get('livraison').setValidators(Validators.required)
      this.show = true
      this.show1 = false
      this.show2 = false

      this.questionFormGroup.controls['logementType'].setValue(" ");
      this.questionFormGroup.controls['surface'].setValue(" ");
      this.questionFormGroup.controls['personne'].setValue(" ");
      this.questionFormGroup.controls['cuisine'].setValue(" ");
      this.questionFormGroup.controls['eau'].setValue(" ");
      this.questionFormGroup.controls['chauffage'].setValue(" ");

/*
      this.questionFormGroup.get('logementType').reset()
      this.questionFormGroup.get('surface').reset()
      this.questionFormGroup.get('personne').reset()
      this.questionFormGroup.get('cuisine').reset()
      this.questionFormGroup.get('eau').reset()
      this.questionFormGroup.get('chauffage').reset()
*/

    } else
    if(this.firstFormGroup.value.consommation == 'false') {
      this.questionFormGroup.get('logementType').setValidators(Validators.required)
      this.questionFormGroup.get('surface').setValidators(Validators.required)
      this.questionFormGroup.get('personne').setValidators(Validators.required)
      this.questionFormGroup.get('cuisine').setValidators(Validators.required)
      this.questionFormGroup.get('eau').setValidators(Validators.required)
      this.questionFormGroup.get('chauffage').setValidators(Validators.required)
      this.show = false
      this.show1 = false
      this.show2 = true
    } 
    
    if (this.firstFormGroup.value.consommation == 'true' &&  this.firstFormGroup.value.besoin.value == '2' )
    {
      this.therdFormGroup.get('ConsommationGaz').setValidators(Validators.required)
      this.therdFormGroup.get('livraisonGaz').setValidators(Validators.required)
      this.therdFormGroup.get('pce').setValidators(Validators.required)
      this.show1 = true
      this.show = false
      this.show2 = false

      this.questionFormGroup.controls['logementType'].setValue(" ");
      this.questionFormGroup.controls['surface'].setValue(" ");
      this.questionFormGroup.controls['personne'].setValue(" ");
      this.questionFormGroup.controls['cuisine'].setValue(" ");
      this.questionFormGroup.controls['eau'].setValue(" ");
      this.questionFormGroup.controls['chauffage'].setValue(" ");
    }
    else  if (this.firstFormGroup.value.consommation == 'true' &&  this.firstFormGroup.value.besoin.value == '3' ){
      this.therdFormGroup.get('ConsommationGaz').setValidators(Validators.required)
      this.therdFormGroup.get('livraisonGaz').setValidators(Validators.required)
      this.therdFormGroup.get('pce').setValidators(Validators.required)
      this.secondFormGroup.get('puissance').setValidators(Validators.required)
      this.secondFormGroup.get('electConsommation').setValidators(Validators.required)
      this.secondFormGroup.get('puissance').setValidators(Validators.required)
      this.secondFormGroup.get('livraison').setValidators(Validators.required)
   
      this.questionFormGroup.controls['logementType'].setValue(" ");
      this.questionFormGroup.controls['surface'].setValue(" ");
      this.questionFormGroup.controls['personne'].setValue(" ");
      this.questionFormGroup.controls['cuisine'].setValue(" ");
      this.questionFormGroup.controls['eau'].setValue(" ");
      this.questionFormGroup.controls['chauffage'].setValue(" ");
      this.show1 = true
      this.show = true
      this.show2 = false
      }
}


  classname = "";

  chauffage: any = [
    {
      text: "Individuel (gaz)",
      value: "1"
    },
    {
      text: "Individuel (électricité)",
      value: "2"
    },
    {
      text: "Collectif",
      value: "3"
    },
    {
      text: "Individuel (fioul, bois…)",
      value: "4"
    },
   
  ]
  personne: any = [
    {
      text: "1",
      value: "1"
    },
    {
      text: "2",
      value: "2"
    },
    {
      text: "3",
      value: "3"
    },
    {
      text: "4",
      value: "4"
    },
    {
      text: "5",
      value: "5"
    },
    {
      text: "6",
      value: "6"
    },
  ]

  logementType: any = [
    {
      text: "Maison",
      value: "1"
    },
    {
      text: "Appartement",
      value: "2"
    },

  ];
  tarif: any = [
    {
      text: "de base",
      value: "1"
    },
    {
      text: "heures pleines / heures creuses",
      value: "2"
    },

  ];

  puissance: any = [
    {
      text: "3 KVA",
      value: "1"
    },
    {
      text: "6 KVA",
      value: "2"
    },
    {
      text: "9 KVA",
      value: "3"
    },
    {
      text: "12 KVA",
      value: "4"
    },
    {
      text: "15 KVA",
      value: "5"
    },

  ];


  logement: any = [
    {
      text: "Mon logement Actuel",
      value: "1"
    },
    {
      text: "Un nouveau Logement",
      value: "2"
    },

  ];

  besoin: any = [
    {
      text: "Électricité",
      value: "1"
    },
    {
      text: "Gaz",
      value: "2"
    },
    {
      text: "Électricité + Gaz",
      value: "3"
    },

  ];
  fournissuer: any = [

    {
      text: "Engie",
      value: "2"
    },
    {
      text: "TotalEnergies",
      value: "3"
    },
    {
      text: "ekWateur",
      value: "4"
    },
    {
      text: "Enercoop",
      value: "5"
    },
    {
      text: "Happ-e by Engie",
      value: "6"
    },
    {
      text: "ilek",
      value: "7"
    },

  ];



  submit() {
    var datePipe = new DatePipe('en-US');

    const body = {

      "fournissuer": this.firstFormGroup.value.fournissuer.text,
      "besoin": this.firstFormGroup.value.besoin.text,
      "logement": this.firstFormGroup.value.logement.text,

      "postalCode": this.firstFormGroup.value.postalCode,
      "consommation": this.firstFormGroup.value.consommation,
      "tarif": this.firstFormGroup.value.tarif.text,


      "puissance": this.secondFormGroup.value.puissance.text,
      "electConsommation": this.secondFormGroup.value.electConsommation,
      "livraison": this.secondFormGroup.value.livraison,
      "pdl": this.secondFormGroup.value.pdl,

      "logementType": this.questionFormGroup.value.logementType.text,
      "surface": this.questionFormGroup.value.surface,
      "personne": this.questionFormGroup.value.personne.text,
      "cuisine": this.questionFormGroup.value.cuisine.text,
      "eau": this.questionFormGroup.value.eau.text,
      "chauffage": this.questionFormGroup.value.chauffage.text,


      "firstname": this.lastFormGroup.value.firstname,
      "lastname": this.lastFormGroup.value.lastname,
      "phonenumber": this.lastFormGroup.value.phonenumber,
      "email": this.lastFormGroup.value.email,
      "call": this.lastFormGroup.value.callMe,
      "time":  datePipe.transform( this.minDate, 'dd/MM/yyyy'),
      "Type": 'energie',
      "devis": [],
    }
    
    this.isLoading = true

    this.assurancesService.getEnergie(body).subscribe((data: any) => {
      this.isLoading = false
    },
    (error) => {                              
      this.isLoading = false
    }
     )

    const rating: any = []
    console.log(body)
    Swal.fire('Merci, nous vous contacterons dès que possible')

  }
  onMonthSelect(event) {
    this.selectedDate = new Date(event. event._d.getFullYear(), event._d.getMonth(), 1);
  }

  onDateSelect(event) {
    this.selectedDate = new Date(event._d.getFullYear(), event._d.getMonth(), 1);
    console.log(this.selectedDate)
  }
}
