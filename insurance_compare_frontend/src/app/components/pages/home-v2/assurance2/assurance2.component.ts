import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AssurancesService } from '../service-data/assurances.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-assurance2',
  templateUrl: './assurance2.component.html',
  styleUrls: ['./assurance2.component.css']
})
export class Assurance2Component implements OnInit {

  constructor(private _formBuilder: FormBuilder,
    private assurancesService: AssurancesService,
    private router: Router,

  ) { }
  isLinear = true;
  minDate: Date = new Date();
  mindate = new Date(this.minDate.getFullYear(), this.minDate.getMonth() + 1, 1);
  isLoading = false
  firstFormGroup: FormGroup;
  lastFormGroup: FormGroup;
  selectedDate
  maxDate = new Date(this.minDate.getFullYear(), this.minDate.getMonth() + 3, 1);
  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      postalCode: [, Validators.pattern('[0-9]{5}')],
      enfant: [, Validators.required],
      birthDate: [, Validators.required],
      situation: [, Validators.required],
      revenus: [, Validators.required],
      logement: [, Validators.required],
      activite: [, Validators.required],
    });

    this.lastFormGroup = this._formBuilder.group({
      firstname: [, Validators.required],
      lastname: [, Validators.required],
      phonenumber: [, [Validators.pattern("^[0-9]*$"),
      Validators.minLength(10), Validators.maxLength(10)]],
      email: [, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      callMe: [true,],
    });
  }
  classname = "";

  activite: any = [

    {
      text: "Salarié(e)",
      value: "1"
    },
    {
      text: "Indépendant(e) / dirigeant(e)",
      value: "2"
    },
    {
      text: "Etudiant(e) / apprenti(e)",
      value: "3"
    },
    {
      text: "Au chômage / sans activité",
      value: "4"
    },
    {
      text: "Retraité(e)",
      value: "5"
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

  submit() {


    var datePipe = new DatePipe('en-US');
    const body = {
      "firstname": this.lastFormGroup.value.firstname,
      "lastname": this.lastFormGroup.value.lastname,
      "phonenumber": this.lastFormGroup.value.phonenumber,
      "email": this.lastFormGroup.value.email,
      "call": this.lastFormGroup.value.callMe,
      "codepostal": this.firstFormGroup.value.postalCode,
      "enfant": this.firstFormGroup.value.enfant.text,
      "situation": this.firstFormGroup.value.situation.text,
      "birthDate": datePipe.transform(this.firstFormGroup.value.birthDate, 'dd/MM/yyyy'),
      "revenue": this.firstFormGroup.value.revenus,
      "logement": this.firstFormGroup.value.logement.text,
      "activite": this.firstFormGroup.value.activite.text,
      "time": datePipe.transform(this.minDate, 'dd/MM/yyyy'),
      "Type": 'defiscalisation',
      "devis": [],
    }
    this.isLoading = true
    console.log(body)
    this.assurancesService.getDefiscalisaiton(body).subscribe((data: any) => {
      this.isLoading = false
      console.log('saved!')
    },
      (error) => {
        console.error('error caught in component')
        this.isLoading = false
      }
    )
    Swal.fire('Merci, nous vous contacterons dès que possible')
  }
  onMonthSelect(event) {
    this.selectedDate = new Date(event.getFullYear(), event.getMonth(), 1);
  }

  onDateSelect(event) {
    this.selectedDate = new Date(event._d.getFullYear(), event._d.getMonth(), 1);
    console.log(this.selectedDate)
  }

}
