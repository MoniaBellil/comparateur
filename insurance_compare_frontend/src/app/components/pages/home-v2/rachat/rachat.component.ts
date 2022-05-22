import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LegalProtectionService } from '../service-data/legal-protection.service';
import { PostalcodeService } from '../service-data/postalcode.service';
import Swal from 'sweetalert2';
import { AssurancesService } from '../service-data/assurances.service';
@Component({
  selector: 'app-rachat',
  templateUrl: './rachat.component.html',
  styleUrls: ['./rachat.component.css']
})
export class RachatComponent implements OnInit {


  constructor(private _formBuilder: FormBuilder,
    private router: Router,
    private legalProtectionService: LegalProtectionService,
    private postalcodeService: PostalcodeService,
    private assurancesService:AssurancesService

  ) { }
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  therdFormGroup: FormGroup;
  fourFormGroup: FormGroup;

  isLinear = true;
  minDate: Date = new Date();
  mindate = new Date(this.minDate.getFullYear(), this.minDate.getMonth() + 1, 1);
  isLoading = false
  lastFormGroup: FormGroup;
  show1 = false
  show2 = false
  show3 = false
  show4 = false
  show5 = false

  selectedDate
  maxDate = new Date(this.minDate.getFullYear(), this.minDate.getMonth() + 3, 1);
  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      logement: ['', Validators.required],
      credit: ['',],
      immobilier: ['',],
      immobiliers: ['',],
      montant: ['',],
      creditImmobilier: ['',],
      capitalRestant: ['',],
      creditConso: ['',],
      creditResto: ['',],
    });

    this.secondFormGroup = this._formBuilder.group({
      rachatdecredit: ['', Validators.required],
      treosorie: ['', Validators.required],
      ficher: ['', Validators.required],
      statut: ['', Validators.required],

    });
    this.therdFormGroup = this._formBuilder.group({
      emprunteur: [, Validators.required],
      sexeEmpr: ['',],
      firstNameEmpr: ['',],
      lastNameEmpr: ['',],
      birthDateEmpr: [,],
      statutEmpr: ['',],
      revenuConjoin: ['',],
      revenuvous: ['', Validators.required],
      foyer: ['', Validators.required],
    });

    this.fourFormGroup = this._formBuilder.group({
      postalCode: ['', Validators.pattern('[0-9]{5}')],
      enfant: ['', Validators.required],
      birthDate: [, Validators.required],
      situation: ['', Validators.required],
    });

    this.lastFormGroup = this._formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      phonenumber: ['', [Validators.pattern("^[0-9]*$"),
      Validators.minLength(10), Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      callMe: [true,],
    });
  }
  classname = "";


  Enfant: any = [

    {
      text: "0",
      value: "0"
    },
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
      text: "4 +",
      value: "4"
    },
  ];

  situation: any = [
    {
      text: "Célibataire",
      value: "1"
    },
    {
      text: "Marié(e) / Pacsé(e)",
      value: "2"
    },
    {
      text: "En concubinage",
      value: "3"
    },
    {
      text: "Divorcé(e)",
      value: "4"
    },
    {
      text: "Veuf(ve)",
      value: "5"
    },
  ];

  statut: any = [
    {
      text: "CDI, PÉRIODE D'ESSAI RÉVOLUE",
      value: "1"
    },
    {
      text: "FONCTIONNAIRE",
      value: "2"
    },
    {
      text: "CDD",
      value: "3"
    },
    {
      text: "TNS",
      value: "4"
    },
    {
      text: "CDI EN PÉRIODE D'ESSAI",
      value: "5"
    },
    {
      text: "SANS EMPLOI",
      value: "6"
    },
    {
      text: "RETRAITÉ(E)",
      value: "7"
    },
    {
      text: "AUTRE",
      value: "8"
    },
  ];


  Logement: any = [
    {
      text: "Propriétaire",
      value: "1"
    },
    {
      text: "Locataire",
      value: "2"
    },
    {
      text: "Hébergé(e) gratuitement",
      value: "3"
    },
  ];

  rachatdecredit: any = [
    {
      text: "NON",
      value: "0"
    },
    {
      text: "OUI, IL Y A MOINS D'UN AN",
      value: "1"
    },
    {
      text: "OUI, IL Y A UN AN OU PLUS",
      value: "2"
    },
  ];

  treosorie: any = [
    {
      text: "0",
      value: "0"
    },
    {
      text: "10.000 €",
      value: "1"
    },
    {
      text: "20.000 €",
      value: "2"
    },
    {
      text: "30.000 €",
      value: "3"
    },
    {
      text: "40.000 €",
      value: "4"
    },
    {
      text: "50.000 €",
      value: "5"
    },
  ];

  immobiliers: any = [
    {
      text: "0",
      value: "0"
    },
    {
      text: "1",
      value: "1"
    },
    {
      text: "2 OU PLUS",
      value: "2"
    },
  ];
  credit: any = [
    {
      text: "0",
      value: "0"
    },
    {
      text: "1",
      value: "1"
    },
    {
      text: "2",
      value: "2"
    },
    {
      text: "3 OU PLUS",
      value: "3"
    },
  ];
  radioChange(e) {

    if (e.value == 'true') {
      this.show5 = true
      this.therdFormGroup.get('revenuConjoin').setValidators(Validators.required)
      this.therdFormGroup.get('sexeEmpr').setValidators(Validators.required)
      this.therdFormGroup.get('firstNameEmpr').setValidators(Validators.required)
      this.therdFormGroup.get('lastNameEmpr').setValidators(Validators.required)
      this.therdFormGroup.get('birthDateEmpr').setValidators(Validators.required)
      this.therdFormGroup.get('statutEmpr').setValidators(Validators.required)
    }
    else {
      this.show5 = false
      this.therdFormGroup.get('revenuConjoin').clearValidators();
      this.therdFormGroup.get('revenuConjoin').updateValueAndValidity();
      this.therdFormGroup.controls['revenuConjoin'].setValue(" ");

      this.therdFormGroup.get('sexeEmpr').clearValidators();
      this.therdFormGroup.get('sexeEmpr').updateValueAndValidity();
      this.therdFormGroup.controls['sexeEmpr'].setValue(" ");

      this.therdFormGroup.get('firstNameEmpr').clearValidators();
      this.therdFormGroup.get('firstNameEmpr').updateValueAndValidity();
      this.therdFormGroup.controls['firstNameEmpr'].setValue(" ");

      this.therdFormGroup.get('lastNameEmpr').clearValidators();
      this.therdFormGroup.get('lastNameEmpr').updateValueAndValidity();
      this.therdFormGroup.controls['lastNameEmpr'].setValue(" ");

      this.therdFormGroup.get('birthDateEmpr').clearValidators();
      this.therdFormGroup.get('birthDateEmpr').updateValueAndValidity();
   //   this.therdFormGroup.controls['birthDateEmpr'].setValue(" ");

      this.therdFormGroup.get('statutEmpr').clearValidators();
      this.therdFormGroup.get('statutEmpr').updateValueAndValidity();
      this.therdFormGroup.controls['statutEmpr'].setValue(" ");

    }
  }
  changeConsommation(e) {
    if (e.value.value == '1' || e.value.value == '2' || e.value.value == '3') {
      this.firstFormGroup.get('creditConso').setValidators(Validators.required)
      this.firstFormGroup.get('creditResto').setValidators(Validators.required)
      this.show4 = true
    } else {
      this.show4 = false
      this.firstFormGroup.get('creditConso').clearValidators();
      this.firstFormGroup.get('creditConso').updateValueAndValidity();
      this.firstFormGroup.controls['creditConso'].setValue(" ");

      this.firstFormGroup.get('creditResto').clearValidators();
      this.firstFormGroup.get('creditResto').updateValueAndValidity();
      this.firstFormGroup.controls['creditResto'].setValue(" ");

    }

  }
  changeNumber(e) {
    if (e.value.value == '1' || e.value.value == '2') {
      this.show3 = true
      this.firstFormGroup.get('creditImmobilier').setValidators(Validators.required)
      this.firstFormGroup.get('capitalRestant').setValidators(Validators.required)
    }
    else {
      this.show3 = false
      this.firstFormGroup.get('creditImmobilier').clearValidators();
      this.firstFormGroup.get('creditImmobilier').updateValueAndValidity();
      this.firstFormGroup.controls['creditImmobilier'].setValue(" ");

      this.firstFormGroup.get('capitalRestant').clearValidators();
      this.firstFormGroup.get('capitalRestant').updateValueAndValidity();
      this.firstFormGroup.controls['capitalRestant'].setValue(" ");

    }
  }
  change(e) {
    if (e.value.value == '1') {
      this.show1 = true
      this.show2 = false
      this.firstFormGroup.get('immobilier').setValidators(Validators.required)
      this.firstFormGroup.get('immobiliers').setValidators(Validators.required)
      this.firstFormGroup.get('montant').clearValidators();
      this.firstFormGroup.get('montant').updateValueAndValidity();
      this.firstFormGroup.controls['montant'].setValue(" ");

    }
    if (e.value.value == '2') {
      this.show1 = false
      this.show2 = true
      this.show3 = false

      this.firstFormGroup.get('montant').setValidators(Validators.required)
      this.firstFormGroup.get('immobilier').clearValidators();
      this.firstFormGroup.get('immobilier').updateValueAndValidity();
      this.firstFormGroup.controls['immobilier'].setValue(" ");

      this.firstFormGroup.get('immobiliers').clearValidators();
      this.firstFormGroup.get('immobiliers').updateValueAndValidity()
      this.firstFormGroup.controls['immobiliers'].setValue(" ");

      this.firstFormGroup.get('creditImmobilier').clearValidators();
      this.firstFormGroup.get('creditImmobilier').updateValueAndValidity();
      this.firstFormGroup.controls['creditImmobilier'].setValue(" ");

      this.firstFormGroup.get('capitalRestant').clearValidators();
      this.firstFormGroup.get('capitalRestant').updateValueAndValidity();
      this.firstFormGroup.controls['capitalRestant'].setValue(" ");

    }
    if (e.value.value == '3') {
      this.show1 = false
      this.show2 = false
      this.show3 = false
      this.firstFormGroup.get('immobilier').clearValidators();
      this.firstFormGroup.get('immobilier').updateValueAndValidity();
      this.firstFormGroup.controls['immobilier'].setValue(" ");

      this.firstFormGroup.get('montant').clearValidators();
      this.firstFormGroup.get('montant').updateValueAndValidity();
      this.firstFormGroup.controls['montant'].setValue(" ");

      this.firstFormGroup.get('immobiliers').clearValidators();
      this.firstFormGroup.get('immobiliers').updateValueAndValidity()
      this.firstFormGroup.controls['immobiliers'].setValue(" ");

      this.firstFormGroup.get('creditImmobilier').clearValidators();
      this.firstFormGroup.get('creditImmobilier').updateValueAndValidity();
      this.firstFormGroup.controls['creditImmobilier'].setValue(" ");

      this.firstFormGroup.get('capitalRestant').clearValidators();
      this.firstFormGroup.get('capitalRestant').updateValueAndValidity();
      this.firstFormGroup.controls['capitalRestant'].setValue(" ");

    }
  }
  checkPostalCode() {
    Swal.fire('Merci, nous vous contacterons dès que possible')
    const body = { code: this.fourFormGroup.value.postalCode.toString() }
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

      //first form group 
      "logement": this.firstFormGroup.value.logement.text,
      "credit": this.firstFormGroup.value.credit.text,
      "immobilier": this.firstFormGroup.value.immobilier,
      "immobiliers": this.firstFormGroup.value.immobiliers.text,
      "montant": this.firstFormGroup.value.montant,
      "creditImmobilier": this.firstFormGroup.value.creditImmobilier.text,
      "capitalRestant": this.firstFormGroup.value.capitalRestant,
      "creditConso": this.firstFormGroup.value.creditConso,
      "creditResto": this.firstFormGroup.value.creditResto,

      //second form group 
      "rachatdecredit": this.secondFormGroup.value.rachatdecredit.text,
      "treosorie": this.secondFormGroup.value.treosorie.text,
      "ficher": this.secondFormGroup.value.ficher,
      "statut": this.secondFormGroup.value.statut.text,

      //therd form group
      "emprunteur": this.therdFormGroup.value.emprunteur,
      "sexeEmpr": this.therdFormGroup.value.sexeEmpr,
      "firstNameEmpr": this.therdFormGroup.value.lastNameEmpr,
      "lastNameEmpr": this.therdFormGroup.value.lastNameEmpr,
      "birthDateEmpr": datePipe.transform(this.therdFormGroup.value.birthDateEmpr, 'dd/MM/yyyy'),
      "statutEmpr": this.therdFormGroup.value.statutEmpr.text,
      "revenuConjoin": this.therdFormGroup.value.revenuConjoin,
      "revenuvous": this.therdFormGroup.value.revenuvous,
      "foyer": this.therdFormGroup.value.revenuvous,

       //four form group
       "situation": this.fourFormGroup.value.situation.text,
       "enfant": this.fourFormGroup.value.enfant.text,
       "date": datePipe.transform(this.fourFormGroup.value.birthDate, 'dd/MM/yyyy'),
       "code_postal": this.fourFormGroup.value.postalCode.toString(),


      "date_effect": datePipe.transform(this.selectedDate, 'dd/MM/yyyy'),
      "firstname": this.lastFormGroup.value.firstname,
      "lastname": this.lastFormGroup.value.lastname,
      "phonenumber": this.lastFormGroup.value.phonenumber,
      "email": this.lastFormGroup.value.email,
      "call": this.lastFormGroup.value.callMe,
      "time": datePipe.transform(this.minDate, 'dd/MM/yyyy'),

      "Type": 'Rachat',
      "devis": [],
    }
    this.isLoading = true
    const rating: any = []
    console.log(body)

    this.assurancesService.getRachat(body).subscribe((data: any) => {
      this.isLoading = false
      console.log('saved!')
    },
    (error) => {                              
      console.error('error caught in component')
      this.isLoading = false
    }
     )

  }

  onDateSelect(event) {
    this.selectedDate = new Date(event._d.getFullYear(), event._d.getMonth(), 1);
    console.log(this.selectedDate)
  }


}
