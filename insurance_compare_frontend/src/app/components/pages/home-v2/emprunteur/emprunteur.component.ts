import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostalcodeService } from '../service-data/postalcode.service';
import Swal from 'sweetalert2';
import { EnprunteurService } from '../service-data/enprunteur.service';

@Component({
  selector: 'app-emprunteur',
  templateUrl: './emprunteur.component.html',
  styleUrls: ['./emprunteur.component.css']
})
export class EmprunteurComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder,
    private router: Router,
    private emprunteurService: EnprunteurService,
    private postalcodeService:PostalcodeService,
  ) { }
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isLinear = true;
  minDate: Date = new Date();
  mindate =  new Date(this.minDate.getFullYear(), this.minDate.getMonth() + 1 , 1);
  isLoading = false
  lastFormGroup: FormGroup;
  therdFormGroup: FormGroup;
  fourFormGroup: FormGroup;


  selectedDate
  maxDate = new Date(this.minDate.getFullYear(), this.minDate.getMonth() + 3 , 1);
  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      postalCode: [, Validators.pattern('[0-9]{5}')],
      firstname: [, Validators.required],
      lastname: [, Validators.required],
      civilisité: [, Validators.required],
      statut: [, Validators.required],
      deplacement: [, Validators.required],
      birthDate: [, Validators.required],
      fumeur: [false,],
      travaux: [false,],
      hauteur: [false,],
      risque: [false,],
    });
    this.secondFormGroup = this._formBuilder.group({
      financement: [, Validators.required],
      banque: [, Validators.required],
      typeProj: [, Validators.required],
      date: [, Validators.required],

    });

    this.therdFormGroup = this._formBuilder.group({
      typePret: [, Validators.required],
      typeDifferer: [, Validators.required],
      garantie: [, Validators.required],
      duree: [, Validators.required],
      mantant: [, Validators.required],
      taux: [, Validators.required],
      delay: [, Validators.required],
    });

    this.fourFormGroup = this._formBuilder.group({
      togl1: [,],
      togl2: [,],
      togl3: [,],
      togl4: [,],
      togl5: [,],
      togl6: [,],
    });


    this.lastFormGroup = this._formBuilder.group({
      phonenumber: [, [Validators.pattern("^[0-9]*$"),
      Validators.minLength(10), Validators.maxLength(10)]   ],
      email: [, [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      callMe: [true,],

    });
  }
  classname = "";


  statut: any = [
    {
      text: "Salarié non Cadre",
      value: "1"
    },
    {
      text: "Artisan",
      value: "3"
    },
    {
      text: "Commerçant",
      value: "11"
    },
    {
      text: "Dirigeant d'entreprise",
      value: "16"
    },
    {
      text: "Exp. agricole/viticole",
      value: "18"
    },
    {
      text: "Fonctionnaire non cadre",
      value: "22"
    },
    {
      text: "Fonctionnaire cadre",
      value: "23"
    },
    {
      text: "Intermittent",
      value: "19"
    },
    {
      text: "Profession libérale",
      value: "8"
    },
    {
      text: "Retraité non cadre",
      value: "20"
    },
    {
      text: "Retraité cadre",
      value: "21"
    },
    {
      text: "Salarié Cadre",
      value: "2"
    },
    {
      text: "Sans profession (indemnisé)",
      value: "10"
    },
    {
      text: "Sans profession (non indemnisé)",
      value: "99"
    },
  ];

  deplacement: any = [
    {
      text: "- de 15 000km/an",
      value: "false"
    },
    {
      text: "+ de 15 000km/an",
      value: "true"
    }
  ];
  typeDifferer: any = [
    {
      text: "Total",
      value: "TOTAL"
    },
    {
      text: "Partiel",
      value: "CAPITAL"
    }
  ];

  garantie: any = [
    {
      text: "DC/PTIA",
      value: "dcptia"
    },
    {
      text: "DCPTIA/ITP/ITT/IPT>66%",
      value: "dcptiaITP66"
    },
    {
      text: "DCPTIA/ITP/ITT/IPT-IPP>33%",
      value: "dcptiaITP66IPP"
    },
  ];


  typePret: any = [
    {
      text: "Amortissable",
      value: "Amortissable"
    },
    {
      text: "In Fine",
      value: "In Fine"
    },
    {
      text: "Relais",
      value: "relais"
    },
    {
      text: "Prêt à taux 0",
      value: "ptz"
    }
  ];



  
  financement: any = [
    {
      text: "Nouveau financement",
      value: "non"
    },
    {
      text: "Reprise d'assurance Hamon ( - 1 an )",
      value: "oui2"
    },
    {
      text: "Reprise d'assurance Bourquin ( + 1 an )",
      value: "oui"
    }
  ];

  typeProj: any = [
    {
      text: "Résidence principale",
      value: "rp"
    },
    {
      text: "Résidence secondaire",
      value: "rs"
    },
    {
      text: "Investissement locatif",
      value: "il"
    },
    
    {
      text: "Travaux",
      value: "tr"
    },
    {
      text: "Prêt professionnel",
      value: "pp"
    },
    {
      text: "RAC LS1 (dominante conso)",
      value: "rac1"
    },
    {
      text: "RAC LS2 (dominante immo)",
      value: "rac2"
    },
    {
      text: "Autre",
      value: "a"
    },
  ];




  banque: any = [
    {
      text: "AUTRES",
      value: "Autres"
    },
    {
      text: "AXA BANQUE",
      value: "AXA BANQUE"
    }
    ,{
      text: "BANQUE POPULAIRE",
      value: "Banque Populaire"
    }
    ,{
      text: "BANQUE POSTALE",
      value: "BANQUE POSTALE"
    }
    ,{
      text: "BARCLAYS",
      value: "Barclays"
    }
    ,{
      text: "BNP PARIBAS",
      value: "BNPPARIBAS"
    }
    ,{
      text: "BOURSORAMA BANQUE",
      value: "BOURSORAMA BANQUE"
    }
    ,{
      text: "BRED",
      value: "bred"
    }
    ,{
      text: "CAISSE D'ÉPARGNE",
      value: "Caisse D épargne"
    }
    ,{
      text: "CIC",
      value: "CIC"
    }
    ,{
      text: "CRÉDIT AGRICOLE",
      value: "CREDIT AGRICOLE"
    }
    ,{
      text: "CRÉDIT DU NORD",
      value: "CREDIT DU NORD"
    }
    ,{
      text: "CRÉDIT FONCIER",
      value: "CREDIT FONCIER"
    }
    ,{
      text: "CRÉDIT MUTUEL",
      value: "CREDIT MUTUEL"
    }
    ,{
      text: "FORTUNEO BANQUE",
      value: "FORTUNEO BANQUE"
    }
    ,{
      text: "GROUPAMA BANQUE",
      value: "GROUPAMA BANQUE"
    }
    ,{
      text: "HELLO BANK",
      value: "HELLO BANK"
    }
    ,{
      text: "HSBC",
      value: "HSBC"
    }
    ,{
      text: "ING DIRECT",
      value: "ING DIRECT"
    }
    ,{
      text: "LCL",
      value: "LCL"
    }
    ,{
      text: "SOCIÉTÉ GÉNÉRALE",
      value: "Société Générale"
    }
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
      "date": datePipe.transform(this.firstFormGroup.value.birthDate, 'dd/MM/yyyy'),
      "Deplacements": this.firstFormGroup.value.deplacement.value,
      "DeplacementsText": this.firstFormGroup.value.deplacement.text,
      "Statut": this.firstFormGroup.value.statut.value,
      "StatutText": this.firstFormGroup.value.statut.text,
      "civilite": this.firstFormGroup.value.civilisité,
      "firstname": this.firstFormGroup.value.firstname,
      "lastname": this.firstFormGroup.value.lastname,
      "fumeur": this.firstFormGroup.value.fumeur.toString(),
      "handling": this.firstFormGroup.value.travaux.toString(),
      "height": this.firstFormGroup.value.hauteur.toString(),
      "riskyProfession": this.firstFormGroup.value.risque.toString(),
      "date_effect": datePipe.transform( this.selectedDate, 'dd/MM/yyyy'),

      "projectState": this.secondFormGroup.value.financement.value,
      "projectStateText": this.secondFormGroup.value.financement.text,
      "banque": this.secondFormGroup.value.banque.value,
      "projectQualification": this.secondFormGroup.value.typeProj.value,
      "banqueText": this.secondFormGroup.value.banque.text,
      "projectQualificationText": this.secondFormGroup.value.typeProj.text,


      "loan": this.therdFormGroup.value.typePret.value,
      "delayType": this.therdFormGroup.value.typeDifferer.value,
      "loanText": this.therdFormGroup.value.typePret.text,
      "delayTypeText": this.therdFormGroup.value.typeDifferer.text,
      "delay": this.therdFormGroup.value.delay.toString(),
      "warranty": this.therdFormGroup.value.garantie.value,
      "warrantyText": this.therdFormGroup.value.garantie.text,
      "duration": this.therdFormGroup.value.duree.toString(),
      "amount": this.therdFormGroup.value.mantant.toString(),
      "rate": this.therdFormGroup.value.taux.toString(),



      "phonenumber": this.lastFormGroup.value.phonenumber,
      "email": this.lastFormGroup.value.email,
      "call": this.lastFormGroup.value.callMe,
      "time":  datePipe.transform( this.minDate, 'dd/MM/yyyy'),
      "Type": 'emprunteur',
      "devis": [],
    }

    this.isLoading = true
    const rating: any = []
    console.log(body)

    this.emprunteurService.getEmprunteur(body).subscribe((data: any) => {
      this.isLoading = false
      console.log(data)
      
    this.router.navigateByUrl("/emprunteur-list", { state: [data, rating] });
    
    },
    (error) => {                              
      this.isLoading = false
      Swal.fire('Merci de vérifier vos champs')
    }
     ) 
  }

  onDateSelect(event) {
    console.log(event)
    this.selectedDate = new Date(event._d.getFullYear(), event._d.getMonth(), 1);
    console.log(this.selectedDate)
  }
  
  onChange(enable: boolean) {
      console.log(enable)
  }

}
