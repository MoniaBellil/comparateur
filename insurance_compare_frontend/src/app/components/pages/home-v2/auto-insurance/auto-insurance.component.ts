import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LegalProtectionService } from '../service-data/legal-protection.service';
import { PostalcodeService } from '../service-data/postalcode.service';
import Swal from 'sweetalert2';
import { AutoService } from '../service-data/auto.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
@Component({
  selector: 'app-auto-insurance',
  templateUrl: './auto-insurance.component.html',
  styleUrls: ['./auto-insurance.component.css']
})
export class AutoInsuranceComponent implements OnInit {


  constructor(private _formBuilder: FormBuilder,
    private router: Router,
    private legalProtectionService: LegalProtectionService,
    private postalcodeService: PostalcodeService,
    private autoService: AutoService,
  ) { }

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  therdFormGroup: FormGroup;
  fourFormGroup: FormGroup;
  sexeText
  typeText
  contratText
  assureText
  isLinear = true;
  minDate: Date = new Date();
  mindate = new Date(this.minDate.getFullYear(), this.minDate.getMonth() + 1, 1);
  isLoading = false
  lastFormGroup: FormGroup;
  show = false
  show1 = false
  show2 = false
  show3 = false
  show4 = false
  show5 = false
  show6 = false
  show7 = false
  assurelList = []
  filteredOptions: Observable<string[]>;
  filteredOptions1: Observable<string[]>;
  selectedDate
  maxDate = new Date(this.minDate.getFullYear(), this.minDate.getMonth() + 3, 1);

  ngOnInit(): void {



    this.firstFormGroup = this._formBuilder.group({
      date: ['', Validators.required],
      type: ['', Validators.required],
      dateAcquisition: ['', Validators.required],
      dateCirculation: ['',],
      assure: ['',],
      nonassuredate: ['',],
      mode: ['', Validators.required],
      typeVoie: ['', Validators.required],
      nomVoie: ['', Validators.required],
      ville: ['', Validators.required],
      kmetre: ['', Validators.required],
    });

    this.secondFormGroup = this._formBuilder.group({
      postalCode: ['', Validators.pattern('[0-9]{5}')],
      matricule: ['', Validators.required],
      autoUse: ['', Validators.required],
      parkingMode: ['', Validators.required],


    });

    this.therdFormGroup = this._formBuilder.group({
      
      permis: ['', Validators.required],
      conducteur: ['', Validators.required],
      titulaire: ['', Validators.required],
      sexe: ['', Validators.required],
      birthDate: ['', Validators.required],
      permiDate: ['', Validators.required],
      situation: ['', Validators.required],
      profession: ['', Validators.required],
      acommpage: ['', Validators.required],

    });

    this.fourFormGroup = this._formBuilder.group({
      bonnus: ['', Validators.required],
      assureBefore: ['', Validators.required],
      assureur: ['',],
      NbreMois: ['',Validators.required],
      NbreAnnee: ['',Validators.required],
      contrat: ['',],
      motif: ['',],
      companyName: ['',],
      nombreMois: ['',],
      nombreMois1: ['',],
      du: ['',],
      au: ['',],
      nonPaiement: ['',],

    });


    this.lastFormGroup = this._formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      phonenumber: ['', [Validators.pattern("^[0-9]*$"),
      Validators.minLength(10), Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      callMe: [true,],
    });


    this.autoService.getAllAsurances().subscribe((data: any) => {
      data.forEach(element => {
        this.assurelList.push(element.assureur)
      });
    })
    this.filteredOptions = this.fourFormGroup.get('assureur').valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
    this.filteredOptions1 = this.fourFormGroup.get('companyName').valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }
  classname = "";


  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.assurelList.filter(option => option.toLowerCase().includes(filterValue));
  }
  sexChnage(e){
    if (e.value == '2') {this.sexeText = 'Madame'}
    if (e.value == '1') {this.sexeText = 'Monsieur'}
  }
  radioChange(e) {
    if (e.value == '0') {
      this.assureText = 'Non'
      this.show = true
      this.firstFormGroup.get('nonassuredate').setValidators(Validators.required)
    } else {
      this.assureText = 'Oui'
      this.firstFormGroup.get('nonassuredate').clearValidators();
      this.firstFormGroup.get('nonassuredate').updateValueAndValidity();
    //  this.firstFormGroup.get('nonassuredate').reset();
      this.firstFormGroup.controls['nonassuredate'].setValue("");


      this.show = false
    }
  }
  motifChange(e){
  console.log(e.value.value)
  if(e.value.value == '1'){
    this.show7 = true
    this.fourFormGroup.get('nonPaiement').setValidators(Validators.required)
  } else{
    this.show7 = false
    this.fourFormGroup.get('nonPaiement').clearValidators();
    this.fourFormGroup.get('nonPaiement').updateValueAndValidity();  
    this.fourFormGroup.controls['nonPaiement'].setValue("");
  }
  }
  assureBeforeChange(e) {
    console.log(e.value.value)
    if (e.value.value == '1' || e.value.value == '7' || e.value.value == '5' || e.value.value == '6' || e.value.value == '2') {
      this.show3 = true
      this.fourFormGroup.get('assureur').setValidators(Validators.required)
      this.fourFormGroup.get('contrat').setValidators(Validators.required)
      this.show6 = true

      if (e.value.value == '6') {
        this.fourFormGroup.get('nombreMois').setValidators(Validators.required)

        this.fourFormGroup.get('nombreMois1').clearValidators();
        this.fourFormGroup.get('nombreMois1').updateValueAndValidity();
        this.fourFormGroup.controls['nombreMois1'].setValue("");


        this.fourFormGroup.get('du').clearValidators();
        this.fourFormGroup.get('du').updateValueAndValidity();
        this.fourFormGroup.controls['du'].setValue("");


        this.fourFormGroup.get('au').clearValidators();
        this.fourFormGroup.get('au').updateValueAndValidity();
        this.fourFormGroup.controls['au'].setValue("");

        this.show5 = false
        this.show4 = true
      }
      if (e.value.value == '2') {
        this.fourFormGroup.get('nombreMois1').setValidators(Validators.required)
        this.fourFormGroup.get('du').setValidators(Validators.required)
        this.fourFormGroup.get('au').setValidators(Validators.required)
        this.fourFormGroup.get('nombreMois').clearValidators();
        this.fourFormGroup.get('nombreMois').updateValueAndValidity();
        this.fourFormGroup.controls['nombreMois'].setValue("");

        this.show5 = true
        this.show4 = false

      }
      else {
        this.fourFormGroup.get('nombreMois1').clearValidators();
        this.fourFormGroup.get('nombreMois1').updateValueAndValidity();
       //  this.fourFormGroup.get('nombreMois1').reset();
        this.fourFormGroup.controls['nombreMois1'].setValue("");

        this.fourFormGroup.get('du').clearValidators();
        this.fourFormGroup.get('du').updateValueAndValidity();
       // this.fourFormGroup.get('du').reset();
        this.fourFormGroup.controls['du'].setValue("");

        this.fourFormGroup.get('au').clearValidators();
        this.fourFormGroup.get('au').updateValueAndValidity();
       //  this.fourFormGroup.get('au').reset();
        this.fourFormGroup.controls['au'].setValue("");

        this.fourFormGroup.get('nombreMois').clearValidators();
        this.fourFormGroup.get('nombreMois').updateValueAndValidity();
       // this.fourFormGroup.get('nombreMois').reset();
        this.fourFormGroup.controls['nombreMois'].setValue("");

        this.show5 = false
      }
    }

    else {
      this.fourFormGroup.controls['bonnus'].setValue("1");
      this.fourFormGroup.get('nombreMois1').clearValidators();
      this.fourFormGroup.get('nombreMois1').updateValueAndValidity();
    //  this.fourFormGroup.get('nombreMois1').reset();
      this.fourFormGroup.controls['nombreMois1'].setValue("");


      this.fourFormGroup.get('assureur').clearValidators();
      this.fourFormGroup.get('assureur').updateValueAndValidity();
   //    this.fourFormGroup.get('assureur').reset();
      this.fourFormGroup.controls['assureur'].setValue("");


      this.fourFormGroup.get('contrat').clearValidators();
      this.fourFormGroup.get('contrat').updateValueAndValidity();
      this.fourFormGroup.get('contrat').reset();

      this.fourFormGroup.get('nombreMois').clearValidators();
      this.fourFormGroup.get('nombreMois').updateValueAndValidity();
     // this.fourFormGroup.get('nombreMois').reset();
      this.fourFormGroup.controls['nombreMois'].setValue("");

      this.show4 = false
      this.show3 = false
      this.show6 = false
      this.show5 = false
    }
  }

  contratChange(e) {
    if (e.value == '1') {
      this.contratText = 'Oui'
      this.show2 = true
      this.fourFormGroup.get('motif').setValidators(Validators.required)
      this.fourFormGroup.get('companyName').setValidators(Validators.required)
    } else {
      this.contratText = 'Non'
      this.fourFormGroup.get('motif').clearValidators();
      this.fourFormGroup.get('motif').updateValueAndValidity();
      //this.fourFormGroup.get('motif').reset();
      this.fourFormGroup.controls['motif'].setValue("");


      this.fourFormGroup.get('companyName').clearValidators();
      this.fourFormGroup.get('companyName').updateValueAndValidity();
    //  this.fourFormGroup.get('companyName').reset();
      this.fourFormGroup.controls['companyName'].setValue("");

      this.fourFormGroup.get('nonPaiement').clearValidators();
      this.fourFormGroup.get('nonPaiement').updateValueAndValidity();
     // this.fourFormGroup.get('nonPaiement').reset();
      this.fourFormGroup.controls['nonPaiement'].setValue("");

      this.show7 =false
      this.show2 = false
    }

  }

  typeChange(e) {
    if (e.value == '1' || e.value == '3') {
      if(e.value == '1'){
        this.typeText = "un véhicule que vous possédez déjà"
      }
      if(e.value == '3'){
        this.typeText = "acquisition d'un véhicule d'occasion"
      }
      this.show1 = true
      this.firstFormGroup.get('dateCirculation').setValidators(Validators.required)
      this.firstFormGroup.get('assure').setValidators(Validators.required)
    } else {
      this.typeText = "acquisition d'un véhicule neuf"

      this.firstFormGroup.get('assure').clearValidators();
      this.firstFormGroup.get('assure').updateValueAndValidity();
      this.firstFormGroup.get('assure').reset();

      this.firstFormGroup.get('nonassuredate').clearValidators();
      this.firstFormGroup.get('nonassuredate').updateValueAndValidity();
      this.firstFormGroup.get('nonassuredate').reset();

      this.firstFormGroup.get('dateCirculation').clearValidators();
      this.firstFormGroup.get('dateCirculation').updateValueAndValidity();
      this.firstFormGroup.get('dateCirculation').reset();

      this.show1 = false
    }
  }
  nonPaiement: any = [
    {
      text: "1 assureur",
      value: "1"
    },
    {
      text: "2 assureur",
      value: "2"
    }
    ,
    {
      text: "3 assureur",
      value: "3"
    },
    {
      text: "4 assureur",
      value: "4"
    }
    ,  {
      text: "5 assureur",
      value: "5"
    }
    ,  {
      text: "Plus de 5 assureurs",
      value: "6"
    }
  ];

  assureBefore: any = [
    {
      text: "Oui, assuré sans interruption sur les 36 derniers mois et plus",
      value: "1"
    },
    {
      text: "Oui, assuré sans interruption sur les 24 derniers mois",
      value: "7"
    },
    {
      text: "Oui, assuré sans interruption sur les 12 derniers mois",
      value: "5"
    },
    {
      text: "Oui, assuré moins de 12 mois",
      value: "6"
    },
    {
      text: "Oui, avec interruption sur les 36 derniers mois",
      value: "2"
    },
    {
      text: "Non, jamais assuré",
      value: "4"
    },
  ];
  nombreMois1: any = [
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
    {
      text: "7",
      value: "7"
    },
    {
      text: "8",
      value: "8"
    },
    {
      text: "9",
      value: "9"
    },
    {
      text: "10",
      value: "10"
    },
    {
      text: "11",
      value: "11"
    },
    {
      text: "12",
      value: "12"
    },
    {
      text: "13",
      value: "13"
    },
    {
      text: "14",
      value: "14"
    },
    {
      text: "15",
      value: "15"
    },
    {
      text: "16",
      value: "16"
    },
    {
      text: "17",
      value: "17"
    },
    {
      text: "18",
      value: "18"
    },
    {
      text: "19",
      value: "19"
    },
    {
      text: "20",
      value: "20"
    },
    {
      text: "21",
      value: "21"
    },
    {
      text: "22",
      value: "22"
    },
    {
      text: "23",
      value: "23"
    },
    {
      text: "24",
      value: "24"
    },
    {
      text: "25",
      value: "25"
    },
    {
      text: "26",
      value: "26"
    },
    {
      text: "27",
      value: "27"
    },
    {
      text: "28",
      value: "28"
    },
    {
      text: "29",
      value: "29"
    },
    {
      text: "30",
      value: "30"
    },
    {
      text: "31",
      value: "31"
    },
    {
      text: "32",
      value: "32"
    }
  ];

  nombreMois: any = [
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
    {
      text: "7",
      value: "7"
    },
    {
      text: "8",
      value: "8"
    },
    {
      text: "9",
      value: "9"
    },
    {
      text: "10",
      value: "10"
    },
    {
      text: "11",
      value: "11"
    }
  ];

  permis: any = [
    {
      text: "Permis B",
      value: "1"
    },
    {
      text: "Permis B avec conduite accompagnée",
      value: "2"
    },
    {
      text: "Permis étranger UE",
      value: "3"
    },
    {
      text: "Permis étranger hors UE",
      value: "4"
    }
  ];

  motif: any = [
    {
      text: "Pour non paiement",
      value: "1"
    },
    {
      text: "Pour fausse déclaration",
      value: "2"
    },
    {
      text: "Pour sinistre",
      value: "3"
    },
    {
      text: "Pour dossier incomplet",
      value: "4"
    },
    {
      text: "Pour sanction pénale",
      value: "5"
    },
    {
      text: "Pour un autre motif",
      value: "6"
    }
  ];
  situation: any = [
    {
      text: "Marié(e)",
      value: "1"
    },
    {
      text: "Concubin(e)",
      value: "2"
    },
    {
      text: "Célibataire",
      value: "3"
    },
    {
      text: "Séparé(e)",
      value: "4"
    },
    {
      text: "Divorcé(e)",
      value: "5"
    },
    {
      text: "Pacsé(e)",
      value: "6"
    },
  ];
  parkingMode: any = [
    {
      text: "Voie publique",
      value: "1"
    },
    {
      text: "Terrain, parking collectif privé clos",
      value: "2"
    },
    {
      text: "Garage, box privé clos",
      value: "3"
    },
  ];

  profession: any = [
    {
      text: "Salarié",
      value: "1"
    },
    {
      text: "Salarié Non Sédentaire",
      value: "15"
    },
    {
      text: "Fonctionnaire",
      value: "2"
    },
    {
      text: "Fonctionnaire Non Sédentaire",
      value: "13"
    },
    {
      text: "Retraité",
      value: "3"
    },
    {
      text: "Sans profession",
      value: "4"
    },
    {
      text: "Profession libérale",
      value: "5"
    },
    {
      text: "Profession libérale Non Sedentaire",
      value: "14"
    },
    {
      text: "Artisan",
      value: "7"
    },
    {
      text: "Commercant",
      value: "8"
    },
    {
      text: "Agriculteur",
      value: "9"
    },
    {
      text: "Etudiant",
      value: "10"
    },
    {
      text: "Ecclésiastique",
      value: "11"
    },
    {
      text: "V.R.P.",
      value: "12"
    },

  ];

  titulaire: any = [
    {
      text: "Le Souscripteur",
      value: "1"
    },
    {
      text: "Une Société",
      value: "2"
    },
    {
      text: "Le Souscripteur ou son conjoint",
      value: "3"
    },
    {
      text: "Une société de leasing ou de crédit",
      value: "4"
    },
  ];

  conducteur: any = [
    {
      text: "Vous-même",
      value: "1"
    },
    {
      text: "Vous-même et votre conjoint(e)/concubin(e)",
      value: "2"
    },
    {
      text: "Vous-même et un de vos enfants",
      value: "3"
    },
  ];


  autoUse: any = [
    {
      text: "Vie privée",
      value: "1"
    },
    {
      text: "Vie privée + trajet domicile/travail",
      value: "2"
    },
    {
      text: "Vie privée + affaires",
      value: "3"
    },
    {
      text: "Tous déplacements / Tournée régulière visite clientèle",
      value: "4"
    },
    {
      text: "Agricole",
      value: "5"
    },

  ];
  mode: any = [
    {
      text: "Comptant",
      value: "1"
    },
    {
      text: "Crédit",
      value: "2"
    },
    {
      text: "Financement par LLD",
      value: "3"

    },
    {
      text: "Financement par LOA",
      value: "4"
    },
    {
      text: "Donation",
      value: "5"
    },

  ];

  kmetre: any = [
    {
      text: "De 0 à 4999 km",
      value: "1"
    },
    {
      text: "De 5000 à 7999 km",
      value: "2"
    },
    {
      text: "De 8000 à 11999 km",
      value: "3"

    },
    {
      text: "De 12000 à 15999 km",
      value: "4"
    },
    {
      text: "De 16000 à 24999 km",
      value: "5"
    },
    {
      text: "De 25000 à 34999 km",
      value: "6"
    },
    {
      text: "Plus de 35000 km",
      value: "7"
    },
  ];

  NbreMois: any = [
    {
      text: "De 1 à 7 mois",
      value: "1"
    },
    {
      text: "De 8 à 11 mois",
      value: "2"
    },
    {
      text: "De 12 à 15 mois",
      value: "3"

    },
    {
      text: "De 16 à 23 mois",
      value: "4"
    },
    {
      text: "De 24 à 35 mois",
      value: "5"
    },
    {
      text: "Supérieur ou égal à 36 mois",
      value: "6"
    },
  ];


  NbreAnnee: any = [
    {
      text: "1 ans",
      value: "1"
    },
    {
      text: "2 ans",
      value: "2"
    },
    {
      text: "3 ans",
      value: "3"

    },
    {
      text: "4 ans",
      value: "4"
    },
    {
      text: "5 ans",
      value: "5"

    },
    {
      text: "6 ans",
      value: "6"

    },
    {
      text: "7 ans",
      value: "7"

    },
    {
      text: "8 ans",
      value: "8"

    },
    {
      text: "9 ans",
      value: "9"
    },
    {
      text: "10 ans",
      value: "10"
    },
    {
      text: "11 ans",
      value: "11"
    },
    {
      text: "12 ans",
      value: "12"
    },
  ];

  checkPostalCode() {
    console.log(this.firstFormGroup.value, this.secondFormGroup.value, this.therdFormGroup.value, this.fourFormGroup.value, this.lastFormGroup.value)

    const body = { code: this.firstFormGroup.value.postalCode.toString() }
    this.postalcodeService.CheckZipCodeExist(body).subscribe((data: any) => {
      if (data[0]) {
        this.submit()
      }
      else if (!data[0]) {
        Swal.fire('le code postal inexistant')
      }
    },
      (error) => {
      })
  }

  submit() {
    var datePipe = new DatePipe('en-US');
    const body = {
      //first form grp

      "typeVoie": this.firstFormGroup.value.typeVoie, //Bonus-malus auto actuel
      "nomVoie": this.firstFormGroup.value.nomVoie, //Bonus-malus auto actuel
      "ville": this.firstFormGroup.value.ville, //Bonus-malus auto actuel
      // 
      "date_effect": datePipe.transform(this.firstFormGroup.value.date, 'dd/MM/yyyy'), //date effect
      "dateAcquisition": datePipe.transform(this.firstFormGroup.value.dateAcquisition, 'dd/MM/yyyy'), //  Date d'acquisition 
      "dateCirculation": datePipe.transform(this.firstFormGroup.value.dateCirculation, 'dd/MM/yyyy'), //  Date 1ère mise en circulation !
      "type": this.firstFormGroup.value.type, // Vous souhaitez assurer? 
      "typeText": this.typeText, // Vous souhaitez assurer? 
      "mode": this.firstFormGroup.value.mode.value, //Mode d'achat du véhicule
      "modeText": this.firstFormGroup.value.mode.text, //Mode d'achat du véhicule
      "kmetre": this.firstFormGroup.value.kmetre.text, //kilometrage NEW

      "assure": this.firstFormGroup.value.assure, // Le véhicule est-il assuré actuellement? 
      "assureText": this.assureText, // Le véhicule est-il assuré actuellement? 
      "nonassuredate": datePipe.transform(this.firstFormGroup.value.nonassuredate, 'dd/MM/yyyy'), // depuit quant la véhicule no assuré?!

      // second from grp 
      "code_postal": this.secondFormGroup.value.postalCode.toString(), // code postal
      "matricule": this.secondFormGroup.value.matricule.toString(), // matrucule
      "autoUse": this.secondFormGroup.value.autoUse.value, // Usage prévu du véhicule
      "parkingMode": this.secondFormGroup.value.parkingMode.value, // Mode de parking la nuit
      "autoUseText": this.secondFormGroup.value.autoUse.text, // Usage prévu du véhicule
      "parkingModeText": this.secondFormGroup.value.parkingMode.text, // Mode de parking la nuit

      //therd form group
      "conducteur": this.therdFormGroup.value.conducteur.value, //conducteur principal du véhicule
      "titulaire": this.therdFormGroup.value.titulaire.value, //titulaire de la carte grise
      "conducteurText": this.therdFormGroup.value.conducteur.text, //conducteur principal du véhicule
      "titulaireText": this.therdFormGroup.value.titulaire.text, //titulaire de la carte grise
      "sexe": this.therdFormGroup.value.sexe.toString(), // sexe
      "sexeText": this.sexeText, // sexe
      "birthDate": datePipe.transform(this.therdFormGroup.value.birthDate, 'dd/MM/yyyy'), //  date de naissance
      "permiDate": datePipe.transform(this.therdFormGroup.value.permiDate, 'dd/MM/yyyy'), //  permis de conduire
      "situation": this.therdFormGroup.value.situation.value, //Situation matrimoniale
      "permis": this.therdFormGroup.value.permis.text, //Situation matrimoniale

      "profession": this.therdFormGroup.value.profession.value, //Profession / Statut!
      "situationText": this.therdFormGroup.value.situation.text, //Situation matrimoniale
      "professionText": this.therdFormGroup.value.profession.text, //Profession / Statut!
      "acommpage": this.therdFormGroup.value.acommpage, //conduite accompagnée?

      // frour form group
      "bonnus": this.fourFormGroup.value.bonnus, //Bonus-malus auto actuel
      "assureBefore": this.fourFormGroup.value.assureBefore.value, //Avez-vous été assuré(e) depuis le 04/02/2019
      "assureBeforeText": this.fourFormGroup.value.assureBefore.text, //Avez-vous été assuré(e) depuis le 04/02/2019

      "assureur": this.fourFormGroup.value.assureur, //récédent assureur
      "contrat": this.fourFormGroup.value.contrat, //Un assureur a-t-il résilié votre contrat d'assurance depuis le 07/02/2019
      "contratText": this.contratText, //Un assureur a-t-il résilié votre contrat d'assurance depuis le 07/02/2019

      "motif": this.fourFormGroup.value.motif.value, //Pour quel motif
      "motifText": this.fourFormGroup.value.motif.text, //Pour quel motif
      "NbreMois": this.fourFormGroup.value.NbreMois.text, //Nomber de mois
      "NbreAnnee": this.fourFormGroup.value.NbreAnnee.text, //Nomber d'anné


      "companyName": this.fourFormGroup.value.companyName, //Précédent assureur
      "nombreMois": this.fourFormGroup.value.nombreMois.value, // Nombre de mois d’assurance depuis le 07/02/2021 (si le chois est Oui, assuré moins de 12 mois)
      "nombreMois1": this.fourFormGroup.value.nombreMois1.value, //Nombre de mois d’assurance depuis le 07/02/2019 (si le chois est Oui, avec interruption sur les 36 derniers mois)
      "nombreMoisText": this.fourFormGroup.value.nombreMois.text, // Nombre de mois d’assurance depuis le 07/02/2021 (si le chois est Oui, assuré moins de 12 mois)
      "nombreMois1Text": this.fourFormGroup.value.nombreMois1.text, //Nombre de mois d’assurance depuis le 07/02/2019 (si le chois est Oui, avec interruption sur les 36 derniers mois)
      "du": datePipe.transform(this.fourFormGroup.value.du, 'dd/MM/yyyy'), //    Nombre de mois d’assurance depuis le 07/02/2021 (du start date)
      "au": datePipe.transform(this.fourFormGroup.value.au, 'dd/MM/yyyy'), //    Nombre de mois d’assurance depuis le 07/02/2021 (au end date)
      "nonPaiement": this.fourFormGroup.value.nonPaiement.value, //Nombre de mois d’assurance depuis le 07/02/2019 (si le chois est Oui, avec interruption sur les 36 derniers mois)
      "nonPaiementText": this.fourFormGroup.value.nonPaiement.value, //Nombre de mois d’assurance depuis le 07/02/2019 (si le chois est Oui, avec interruption sur les 36 derniers mois)
      //last form group
      "firstname": this.lastFormGroup.value.firstname,
      "lastname": this.lastFormGroup.value.lastname,
      "phonenumber": this.lastFormGroup.value.phonenumber,
      "email": this.lastFormGroup.value.email,
      "call": this.lastFormGroup.value.callMe,
      "time": datePipe.transform(this.minDate, 'dd/MM/yyyy'),

      "typeAssurance": 'auto',
      "devis": [],
    }
    this.isLoading = true
    const rating: any = []
    console.log(body)

    
    this.autoService.getAutoInsurance(body).subscribe((data: any) => {
      this.isLoading = false
      console.log(data)
    this.router.navigateByUrl("/auto-list", { state: [data, rating] });
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
