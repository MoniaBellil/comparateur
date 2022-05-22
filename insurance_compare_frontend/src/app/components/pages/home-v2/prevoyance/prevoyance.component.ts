import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { PostalcodeService } from '../service-data/postalcode.service';
import { ProvoyanceService } from '../service-data/provoyance.service';

@Component({
  selector: 'app-prevoyance',
  templateUrl: './prevoyance.component.html',
  styleUrls: ['./prevoyance.component.css']
})
export class PrevoyanceComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder,
    private router: Router,
    private provoyanceService: ProvoyanceService,
    private postalcodeService: PostalcodeService,
  ) { }
  firstFormGroup: FormGroup;
  isLinear = true;
  minDate: Date = new Date();
  date = new Date(this.minDate.getFullYear(), this.minDate.getMonth() + 1, 1);
  isLoading = false
  selectedDate
  lastFormGroup: FormGroup;
  show = false
  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      postalCode: [, Validators.pattern('[0-9]{5}')],
      date: [, Validators.required],
      birthDate: [, Validators.required],
      regime: [, Validators.required],
      cotisation: [, Validators.required],
      capital: [, Validators.required],
      checked: [false,],
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
  onMonthSelect(event) {
    this.selectedDate = new Date(event._d.getFullYear(), event._d.getMonth(), 1);
  }
  onDateSelect(event) {
    console.log(event._d)
    this.selectedDate = new Date(event._d.getFullYear(), event._d.getMonth(), 1);
  }
  onBirthDateSelect(event) {
    var datePipe = new DatePipe('en-US');
    var timeDiff = Math.abs(Date.now() - new Date(datePipe.transform(event._d, 'dd/MM/yyyy')).getTime());
    const age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
    if (age >= 40) {
      this.show = true
      this.firstFormGroup.get('cotisation').reset()
    } else {
      this.show = false
      this.firstFormGroup.get('cotisation').reset()

    }
  }


  classname = "";


  capital: any = [
    {
      text: "2 000 €",
      value: "2 000 €"
    },
    {
      text: "2 500 €",
      value: "2 500 €"
    },
    {
      text: "3 500 €",
      value: "3 500 €"

    },
    {
      text: "4 000 €",
      value: "4 000 €"

    },
    {
      text: "4 500 €",
      value: "4 500 €"

    },
    {
      text: "5 000 €",
      value: "5 000 €"

    },
    {
      text: "5 500 €",
      value: "5 500 €"

    },
    
    {
      text: "6 000 €",
      value: "6 000 €"

    },
    {
      text: "6 500 €",
      value: "6 500 €"

    },
    
    {
      text: "7 000 €",
      value: "7 000 €"
    },
    {
      text: "7 500 €",
      value: "7 500 €"

    },  
    {
      text: "8 000 €",
      value: "8 000 €"
    },
    {
      text: "8 500 €",
      value: "8 500 €"

    },
    {
      text: "9 000 €",
      value: "9 000 €"

    },
    {
      text: "9 500 €",
      value: "9 500 €"

    },
    {
      text: "10 000 €",
      value: "10 000 €"

    },  
    {
      text: "10 500 €",
      value: "10 500 €"

    },
    {
      text: "11 000 €",
      value: "11 000 €"

    },  
    {
      text: "11 500 €",
      value: "11 500 €"

    },
    {
      text: "12 000 €",
      value: "12 000 €"

    }
  ];

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

  checkPostalCode() {
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
      "code_postal": this.firstFormGroup.value.postalCode.toString(),
      "date_effect": datePipe.transform(this.selectedDate, 'dd/MM/yyyy'),
      "date": datePipe.transform(this.firstFormGroup.value.birthDate, 'dd/MM/yyyy'),
      "regime": this.firstFormGroup.value.regime.value,
      "capital": this.firstFormGroup.value.capital.value,
      "regimeText": this.firstFormGroup.value.regime.text,
      "stars": this.firstFormGroup.value.checked.value,
      "firstname": this.lastFormGroup.value.firstname,
      "COTISATION": this.firstFormGroup.value.cotisation,
      "lastname": this.lastFormGroup.value.lastname,
      "phonenumber": this.lastFormGroup.value.phonenumber,
      "email": this.lastFormGroup.value.email,
      "call": this.lastFormGroup.value.callMe,
      "time": datePipe.transform(this.minDate, 'dd/MM/yyyy'),
      "Type": 'prevoyance',
      "devis": [],


    }
    this.isLoading = true
    console.log(body)
    this.provoyanceService.getPrevoyanceNeoliane(body).subscribe((data: any) => {
      this.isLoading = false
      console.log(data)
      this.router.navigateByUrl("/provident-list", { state: [data, []] });
    },
      (error) => {
        this.isLoading = false
        Swal.fire('Merci de vérifier vos champs')
      }
    )
  }


}
