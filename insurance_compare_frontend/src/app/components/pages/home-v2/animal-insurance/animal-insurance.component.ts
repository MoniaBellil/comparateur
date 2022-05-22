import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { AnimalService } from '../service-data/animal.service';
import { PostalcodeService } from '../service-data/postalcode.service';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-animal-insurance',
  templateUrl: './animal-insurance.component.html',
  styleUrls: ['./animal-insurance.component.css']
})
export class AnimalInsuranceComponent implements OnInit {


 
  constructor(private _formBuilder: FormBuilder,
    private router: Router,
    private animalService: AnimalService,
    private postalcodeService : PostalcodeService
  ) { }
  isDog = false
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  isLinear = true;
  minDate: Date = new Date();
  mindate =  new Date(this.minDate.getFullYear(), this.minDate.getMonth() + 1 , 1);
  isLoading = false
  selectedDate
  lastFormGroup: FormGroup;
  animalList = []
  filteredOptions: Observable<string[]>;
  myControl = new FormControl()


  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      date: [, Validators.required],
      type: [, Validators.required],
      checked1: [false,],
      checked2: [false,],
      animalBirth: [, Validators.required],
      race: [,],
      nomanimal: [, Validators.required],
      sexe: ['male', Validators.required],


    });
    this.secondFormGroup = this._formBuilder.group({
      regime: [, Validators.required],
      couverture: [, Validators.required],
    });
    
    this.lastFormGroup = this._formBuilder.group({
      birthDate: [, Validators.required],
      postalCode: [, Validators.pattern('[0-9]{5}')],
      firstname: [, Validators.required],
      lastname: [, Validators.required],
      phonenumber: [, [Validators.pattern("^[0-9]*$"),
      Validators.minLength(10), Validators.maxLength(10)]   ],
      email: [, [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      callMe: [true,],
    });
  }
  classname = "";

  couverture: any = [
    {
      text: "Formule Économique",
      value: "1"
    },
    {
      text: "Formule Intermédiaire ",
      value: "2"
    },
    {
      text: "Formule Optimum",
      value: "3"
    },
  ];

  type: any = [
    {
      text: "Chat",
      value: "1"
    },
    {
      text: "Chien",
      value: "2"
    },
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

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.animalList.filter(option => option.toLowerCase().includes(filterValue));
  }

  onTypeSelect(e){
  
    if(e.value == '2') {
      this.animalList = []
      this.animalService.getAllChien().subscribe((data:any) =>{
        data.forEach(element => {
          this.animalList.push(element.Race_long)
        });
      })
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value)),
      );
      this.isDog = true 
    } else if(e.value == '1'){
      this.animalList = []
      this.animalService.getAllChat().subscribe((data:any) =>{
        data.forEach(element => {
          console.log(element)
          this.animalList.push(element.Race_long)
        });
      })
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value)),
      );
      this.isDog = false
    }
  }
  checkPostalCode(){
    const body = { code : this.lastFormGroup.value.postalCode.toString()}
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
      "date_effect": datePipe.transform( this.selectedDate, 'dd/MM/yyyy'),
      "date": datePipe.transform(this.lastFormGroup.value.birthDate, 'dd/MM/yyyy'),
      "dateanimal": datePipe.transform(this.firstFormGroup.value.animalBirth, 'dd/MM/yyyy'),
      "animalType": this.firstFormGroup.value.type.text,
      "race": this.myControl.value,
      "nomanimal": this.firstFormGroup.value.nomanimal,
      "sexanimal": this.firstFormGroup.value.sexe,
      "regime": this.secondFormGroup.value.regime.value,
      "couverture": this.secondFormGroup.value.couverture.text,
      "regimeText": this.secondFormGroup.value.regime.text,
      "couvertureText": this.secondFormGroup.value.couverture.text,
      "code_postal": this.lastFormGroup.value.postalCode.toString(),
      "LOF": this.firstFormGroup.value.checked1,
      "bonneSante": this.firstFormGroup.value.checked2,
      "firstname": this.lastFormGroup.value.firstname,
      "lastname": this.lastFormGroup.value.lastname,
      "phonenumber": this.lastFormGroup.value.phonenumber,
      "email": this.lastFormGroup.value.email,
      "time":  datePipe.transform( this.minDate, 'dd/MM/yyyy'),
      "Type": 'Animal',
      "devis": [],
      "call": this.lastFormGroup.value.callMe,
    }
    this.isLoading = true
    const rating: any = []
    console.log(body)
    this.animalService.getAnimal(body).subscribe((data: any) => {
      this.isLoading = false
      console.log(data)
     this.router.navigateByUrl("/animal-insurance-list", { state: [data, rating] });
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

