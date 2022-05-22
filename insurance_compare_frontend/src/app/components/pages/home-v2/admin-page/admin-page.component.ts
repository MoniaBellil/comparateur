import { User } from '../models/user.model';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../service-data/user.service';
import Swal from 'sweetalert2';
import { Partner } from '../models/partner.model';
import { DatePipe } from '@angular/common';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
export interface PeriodicElement {
  name: string;
  email: string;
  role: string;
  id: string;
}


@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})

export class AdminPageComponent {
  // inisital for santé
  private gridApi;
  private gridColumnApi;
  // 1 for protection juridique
  private gridApi1;
  private gridColumnApi1;
  // 2 provoyance
  private gridApi2;
  private gridColumnApi2;
  // 3 animal 
  private gridApi3;
  private gridColumnApi3;
  // 4 moto 
  private gridApi4;
  private gridColumnApi4;
  // 5 emprunteur
  private gridApi5;
  private gridColumnApi5;
  // 6 auto 
  private gridApi6;
  private gridColumnApi6;
  // 7 energie
  private gridApi7;
  private gridColumnApi7;
  // 8 defiscalisation
  private gridApi8;
  private gridColumnApi8;
  // 9 rachat de credit 
  private gridApi9;
  private gridColumnApi9;

  partnerData: Partner[] = []
  displayedColumnsTow: string[] = ['name', 'Logo', "getdetails", "aa"];
  dataSourceTwo = new MatTableDataSource<Partner>(this.partnerData.reverse());
  columnsToDisplayTow = ['name', 'Logo', "getdetails", "aa"];
  adminList: PeriodicElement[] = []
  displayedColumnsOne: string[] = ['name', 'email', 'role', "getdetails", "aa"];
  dataSourceOne = new MatTableDataSource<PeriodicElement>(this.adminList.reverse());
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild('MatPaginator1') MatPaginator1: MatPaginator;
  @ViewChild('MatPaginator2') MatPaginator2: MatPaginator;
  role
  columnsToDisplayOne = ['name', 'email', 'role', "getdetails", "aa"];
  imageSrc: string = '';
  constructor(private userService: UserService, private ref: ChangeDetectorRef) { }
  token = { token: localStorage.getItem('Token') }
  isLoaded = false
  isLoadedPartners = false
  user: User = new User();
  partner: Partner = new Partner();
  show = false

  columnDefs = [
    { headerName: 'Prénom', field: 'firstname', suppressMovable: true, filter: 'agSetColumnFilter', },
    { headerName: 'Nom de famille', field: 'lastname', suppressMovable: true, filter: true, },
    { headerName: 'Email', field: 'email', suppressMovable: true, filter: true, },
    { headerName: 'Numéro de téléphone', field: 'phonenumber', suppressMovable: true, filter: true, },
    { headerName: 'Date d\'inscrption', field: 'date', suppressMovable: true, filter: true, },
    { headerName: 'permettre a appeler', field: 'appeler', suppressMovable: true, filter: true, },
    { headerName: 'Type', field: 'type', suppressMovable: true, filter: true, },
    { headerName: 'Date de naissance', field: 'birthDay', suppressMovable: true, filter: true, },
    { headerName: 'ZIP Code', field: 'postalCode', suppressMovable: true, filter: true, },
    { headerName: 'Date d\'effet', field: 'dateEffect', suppressMovable: true, filter: true, },
    { headerName: 'regime', field: 'regime', suppressMovable: true, filter: true, },
    { headerName: 'hospitalisation', field: 'hospitalisation', suppressMovable: true, filter: true, },
    { headerName: 'optic', field: 'optic', suppressMovable: true, filter: true, },
    { headerName: 'dentaire', field: 'dentaire', suppressMovable: true, filter: true, },
    { headerName: 'consultation', field: 'consultation', suppressMovable: true, filter: true, },

  ];
  columnDefs1 = [
    { headerName: 'Prénom', field: 'firstname', suppressMovable: true, filter: 'agSetColumnFilter', },
    { headerName: 'Nom de famille', field: 'lastname', suppressMovable: true, filter: true, },
    { headerName: 'Email', field: 'email', suppressMovable: true, filter: true, },
    { headerName: 'Numéro de téléphone', field: 'phonenumber', suppressMovable: true, filter: true, },
    { headerName: 'Date d\'inscrption', field: 'date', suppressMovable: true, filter: true, },
    { headerName: 'permettre a appeler', field: 'appeler', suppressMovable: true, filter: true, },
    { headerName: 'Type', field: 'type', suppressMovable: true, filter: true, },
    { headerName: 'Date de naissance', field: 'birthDay', suppressMovable: true, filter: true, },
    { headerName: 'regime', field: 'regime', suppressMovable: true, filter: true, },
    { headerName: 'ZIP Code', field: 'postalCode', suppressMovable: true, filter: true, },
    { headerName: 'Date d\'effet', field: 'dateEffect', suppressMovable: true, filter: true, },

  ];
  columnDefs2 = [
    { headerName: 'Prénom', field: 'firstname', suppressMovable: true, filter: 'agSetColumnFilter', },
    { headerName: 'Nom de famille', field: 'lastname', suppressMovable: true, filter: true, },
    { headerName: 'Email', field: 'email', suppressMovable: true, filter: true, },
    { headerName: 'Numéro de téléphone', field: 'phonenumber', suppressMovable: true, filter: true, },
    { headerName: 'Date d\'inscrption', field: 'date', suppressMovable: true, filter: true, },
    { headerName: 'permettre a appeler', field: 'appeler', suppressMovable: true, filter: true, },
    { headerName: 'Type', field: 'type', suppressMovable: true, filter: true, },
    { headerName: 'Date de naissance', field: 'birthDay', suppressMovable: true, filter: true, },
    { headerName: 'regime', field: 'regime', suppressMovable: true, filter: true, },
    { headerName: 'ZIP Code', field: 'postalCode', suppressMovable: true, filter: true, },
    { headerName: 'Date d\'effet', field: 'dateEffect', suppressMovable: true, filter: true, },
  ];

  columnDefs3 = [
    { headerName: 'Prénom', field: 'firstname', suppressMovable: true, filter: 'agSetColumnFilter', },
    { headerName: 'Nom de famille', field: 'lastname', suppressMovable: true, filter: true, },
    { headerName: 'Email', field: 'email', suppressMovable: true, filter: true, },
    { headerName: 'Numéro de téléphone', field: 'phonenumber', suppressMovable: true, filter: true, },
    { headerName: 'Date d\'inscrption', field: 'date', suppressMovable: true, filter: true, },
    { headerName: 'permettre a appeler', field: 'appeler', suppressMovable: true, filter: true, },
    { headerName: 'Type', field: 'type', suppressMovable: true, filter: true, },
    { headerName: 'Date de naissance', field: 'birthDay', suppressMovable: true, filter: true, },
    { headerName: 'regime', field: 'regime', suppressMovable: true, filter: true, },
    { headerName: 'ZIP Code', field: 'postalCode', suppressMovable: true, filter: true, },
    { headerName: 'Date d\'effet', field: 'dateEffect', suppressMovable: true, filter: true, },

    { headerName: 'Date de naissance de l\'animal', field: 'dateanimal', suppressMovable: true, filter: true, },
    { headerName: 'Type de l\'animal', field: 'animalType', suppressMovable: true, filter: true, },
    { headerName: 'Race', field: 'race', suppressMovable: true, filter: true, },
    { headerName: 'Non de l\'animal', field: 'nomanimal', suppressMovable: true, filter: true, },
    { headerName: 'sexe', field: 'sexanimal', suppressMovable: true, filter: true, },

  ];

  columnDefs4 = [
    { headerName: 'Prénom', field: 'firstname', suppressMovable: true, filter: 'agSetColumnFilter', },
    { headerName: 'Nom de famille', field: 'lastname', suppressMovable: true, filter: true, },
    { headerName: 'Email', field: 'email', suppressMovable: true, filter: true, },
    { headerName: 'Numéro de téléphone', field: 'phonenumber', suppressMovable: true, filter: true, },
    { headerName: 'Date d\'inscrption', field: 'date', suppressMovable: true, filter: true, },
    { headerName: 'permettre a appeler', field: 'appeler', suppressMovable: true, filter: true, },
    { headerName: 'Type', field: 'type', suppressMovable: true, filter: true, },
    { headerName: 'Date de naissance', field: 'BirthDate', suppressMovable: true, filter: true, },
    { headerName: 'ZIP Code', field: 'postalCode', suppressMovable: true, filter: true, },
    { headerName: 'Date d\'effet', field: 'dateEffect', suppressMovable: true, filter: true, },


    { headerName: 'Date de circulation', field: 'dateCirculation', suppressMovable: true, filter: true, },
    { headerName: 'Date d\'acquisition', field: 'dateAcquisition', suppressMovable: true, filter: true, },
    { headerName: 'Type de garage', field: 'typegarage', suppressMovable: true, filter: true, },
    { headerName: 'Type de moto', field: 'motoType', suppressMovable: true, filter: true, },
    { headerName: 'Carte grise', field: 'griscard', suppressMovable: true, filter: true, },
    { headerName: 'Utilisation de la moto', field: 'motoUse', suppressMovable: true, filter: true, },
    { headerName: 'Civilité', field: 'civilite', suppressMovable: true, filter: true, },
    { headerName: 'Avoir un permis', field: 'havepermis', suppressMovable: true, filter: true, },
    { headerName: 'Date de permis', field: 'permiDate', suppressMovable: true, filter: true, },
    { headerName: 'permis', field: 'permis', suppressMovable: true, filter: true, },
    {
      headerName: "Devis",
      field: "icon",
      width: 100,
      cellRenderer: function (params) {
        return '<span><i class="fas fa-download"></i></span>';
      }
    }
  ];
  columnDefs5 = [
    { headerName: 'Prénom', field: 'firstname', suppressMovable: true, filter: 'agSetColumnFilter', },
    { headerName: 'Nom de famille', field: 'lastname', suppressMovable: true, filter: true, },
    { headerName: 'Email', field: 'email', suppressMovable: true, filter: true, },
    { headerName: 'Numéro de téléphone', field: 'phonenumber', suppressMovable: true, filter: true, },
    { headerName: 'Date d\'inscrption', field: 'time', suppressMovable: true, filter: true, },
    { headerName: 'permettre a appeler', field: 'appeler', suppressMovable: true, filter: true, },
    { headerName: 'Type', field: 'type', suppressMovable: true, filter: true, },
    { headerName: 'Date de naissance', field: 'date', suppressMovable: true, filter: true, },
    { headerName: 'ZIP Code', field: 'postalCode', suppressMovable: true, filter: true, },
    { headerName: 'Date d\'effet', field: 'dateEffect', suppressMovable: true, filter: true, },


    { headerName: 'Deplacements', field: 'DeplacementsText', suppressMovable: true, filter: true, },
    { headerName: 'Statut', field: 'StatutText', suppressMovable: true, filter: true, },
    { headerName: 'Civilité', field: 'civilite', suppressMovable: true, filter: true, },
    { headerName: 'Fumeur', field: 'fumeur', suppressMovable: true, filter: true, },
    { headerName: 'Traitement', field: 'handling', suppressMovable: true, filter: true, },
    { headerName: 'Hauteur', field: 'height', suppressMovable: true, filter: true, },
    { headerName: 'Risque', field: 'risque', suppressMovable: true, filter: true, },
    { headerName: 'Financement', field: 'projectStateText', suppressMovable: true, filter: true, },
    { headerName: 'Banque', field: 'banqueText', suppressMovable: true, filter: true, },
    { headerName: 'Qualification', field: 'projectQualificationText', suppressMovable: true, filter: true, },

    { headerName: 'prêt', field: 'loanText', suppressMovable: true, filter: true, },
    { headerName: 'Type de Delay', field: 'delayTypeText', suppressMovable: true, filter: true, },
    { headerName: 'Delay', field: 'delay', suppressMovable: true, filter: true, },
    { headerName: 'Garantie', field: 'warrantyText', suppressMovable: true, filter: true, },
    { headerName: 'Durée', field: 'duration', suppressMovable: true, filter: true, },
    { headerName: 'Montant', field: 'amount', suppressMovable: true, filter: true, },
    { headerName: 'Taux', field: 'rate', suppressMovable: true, filter: true, },


  ];

  columnDefs6 = [
    { headerName: 'Prénom', field: 'firstname', suppressMovable: true, filter: 'agSetColumnFilter', },
    { headerName: 'Nom de famille', field: 'lastname', suppressMovable: true, filter: true, },
    { headerName: 'Email', field: 'email', suppressMovable: true, filter: true, },
    { headerName: 'Numéro de téléphone', field: 'phonenumber', suppressMovable: true, filter: true, },
    { headerName: 'Date d\'inscrption', field: 'time', suppressMovable: true, filter: true, },
    { headerName: 'permettre a appeler', field: 'appeler', suppressMovable: true, filter: true, },
    { headerName: 'Type', field: 'typeAssurance', suppressMovable: true, filter: true, },
    { headerName: 'Date de naissance', field: 'birthDate', suppressMovable: true, filter: true, },
    { headerName: 'Date de permis', field: 'permiDate', suppressMovable: true, filter: true, },
    { headerName: 'ZIP Code', field: 'code_postal', suppressMovable: true, filter: true, },

    { headerName: 'Matricule', field: 'matricule', suppressMovable: true, filter: true, },
    { headerName: 'Usage du véhicule', field: 'autoUseText', suppressMovable: true, filter: true, },
    { headerName: 'Mode de parkingt', field: 'parkingMode', suppressMovable: true, filter: true, },
    { headerName: 'Bonus-malus', field: 'bonnus', suppressMovable: true, filter: true, },
    { headerName: 'assuré(e)', field: 'assureBefore', suppressMovable: true, filter: true, },
    { headerName: 'précédent assureur', field: 'assureur', suppressMovable: true, filter: true, },
    { headerName: 'Contrat', field: 'contrat', suppressMovable: true, filter: true, },
    { headerName: 'Motif', field: 'motif', suppressMovable: true, filter: true, },
    { headerName: 'Assurance', field: 'companyName', suppressMovable: true, filter: true, },
    { headerName: 'assuré moins de 12 mois', field: 'nombreMois', suppressMovable: true, filter: true, },
    { headerName: 'assuré moins de 36 mois', field: 'nombreMois1', suppressMovable: true, filter: true, },

    { headerName: 'Conducteur', field: 'conducteur', suppressMovable: true, filter: true, },
    { headerName: 'Titulaire', field: 'titulaire', suppressMovable: true, filter: true, },
    { headerName: 'Sexe', field: 'sexe', suppressMovable: true, filter: true, },
    { headerName: 'Situation', field: 'situation', suppressMovable: true, filter: true, },
    { headerName: 'Profession', field: 'profession', suppressMovable: true, filter: true, },
    { headerName: 'conduite accompagnée', field: 'acommpage', suppressMovable: true, filter: true, },

    { headerName: 'Date d\'effet', field: 'date_effect', suppressMovable: true, filter: true, },
    { headerName: 'Date d\'acquisition', field: 'dateAcquisition', suppressMovable: true, filter: true, },
    { headerName: 'Date de circulation', field: 'dateCirculation', suppressMovable: true, filter: true, },
    { headerName: 'Assurance souhaitez ', field: 'type', suppressMovable: true, filter: true, },
    { headerName: 'Mode d\'achat', field: 'modeText', suppressMovable: true, filter: true, },
    { headerName: 'Véhicule assuré', field: 'assure', suppressMovable: true, filter: true, },
    { headerName: 'Depuit quant', field: 'nonassuredate', suppressMovable: true, filter: true, },


  ]
  columnDefs7 = [
    { headerName: 'Prénom', field: 'firstname', suppressMovable: true, filter: 'agSetColumnFilter', },
    { headerName: 'Nom de famille', field: 'lastname', suppressMovable: true, filter: true, },
    { headerName: 'Email', field: 'email', suppressMovable: true, filter: true, },
    { headerName: 'Numéro de téléphone', field: 'phonenumber', suppressMovable: true, filter: true, },
    { headerName: 'Date d\'inscrption', field: 'time', suppressMovable: true, filter: true, },
    { headerName: 'permettre a appeler', field: 'call', suppressMovable: true, filter: true, },
    { headerName: 'Type', field: 'type', suppressMovable: true, filter: true, },

    { headerName: 'Puissance', field: 'puissance', suppressMovable: true, filter: true, },
    { headerName: 'Consommation Electrique', field: 'electConsommation', suppressMovable: true, filter: true, },
    { headerName: 'Livraison', field: 'livraison', suppressMovable: true, filter: true, },
    { headerName: 'Pdl', field: 'pdl', suppressMovable: true, filter: true, },

    { headerName: 'Type de logement', field: 'logementType', suppressMovable: true, filter: true, },
    { headerName: 'Surface', field: 'surface', suppressMovable: true, filter: true, },
    { headerName: 'Personnes', field: 'personne', suppressMovable: true, filter: true, },
    { headerName: 'Eau', field: 'eau', suppressMovable: true, filter: true, },
    { headerName: 'Chauffage', field: 'chauffage', suppressMovable: true, filter: true, },

    { headerName: 'Fournissuer', field: 'fournissuer', suppressMovable: true, filter: 'agSetColumnFilter', },
    { headerName: 'Besoin', field: 'besoin', suppressMovable: true, filter: true, },
    { headerName: 'Logement', field: 'logement', suppressMovable: true, filter: true, },
    { headerName: 'Numéro de téléphone', field: 'phonenumber', suppressMovable: true, filter: true, },
    { headerName: 'Date d\'inscrption', field: 'time', suppressMovable: true, filter: true, },
    { headerName: 'ZIP Code', field: 'postalCode', suppressMovable: true, filter: true, },
    { headerName: 'Consommation', field: 'consommation', suppressMovable: true, filter: true, },
    { headerName: 'Tarif', field: 'tarif', suppressMovable: true, filter: true, },
  ];

  columnDefs8 = [
    { headerName: 'Prénom', field: 'firstname', suppressMovable: true, filter: 'agSetColumnFilter', },
    { headerName: 'Nom de famille', field: 'lastname', suppressMovable: true, filter: true, },
    { headerName: 'Email', field: 'email', suppressMovable: true, filter: true, },
    { headerName: 'Numéro de téléphone', field: 'phonenumber', suppressMovable: true, filter: true, },
    { headerName: 'Date d\'inscrption', field: 'time', suppressMovable: true, filter: true, },
    { headerName: 'permettre a appeler', field: 'call', suppressMovable: true, filter: true, },
    { headerName: 'Type', field: 'Type', suppressMovable: true, filter: true, },

    { headerName: 'Zip code', field: 'codepostal', suppressMovable: true, filter: true, },
    { headerName: 'Date de naissance', field: 'birthDate', suppressMovable: true, filter: true, },
    { headerName: 'Enfant', field: 'enfant', suppressMovable: true, filter: true, },
    { headerName: 'Situation', field: 'situation', suppressMovable: true, filter: true, },
    { headerName: 'Revenue', field: 'revenue', suppressMovable: true, filter: true, },
    { headerName: 'Logement', field: 'logement', suppressMovable: true, filter: true, },
    { headerName: 'Activite', field: 'activite', suppressMovable: true, filter: true, },
  ];

  columnDefs9 = [
    { headerName: 'Prénom', field: 'firstname', suppressMovable: true, filter: 'agSetColumnFilter', },
    { headerName: 'Nom de famille', field: 'lastname', suppressMovable: true, filter: true, },
    { headerName: 'Email', field: 'email', suppressMovable: true, filter: true, },
    { headerName: 'Numéro de téléphone', field: 'phonenumber', suppressMovable: true, filter: true, },
    { headerName: 'Date d\'inscrption', field: 'time', suppressMovable: true, filter: true, },
    { headerName: 'permettre a appeler', field: 'call', suppressMovable: true, filter: true, },
    { headerName: 'Type', field: 'Type', suppressMovable: true, filter: true, },
    { headerName: 'Zip code', field: 'postalCode', suppressMovable: true, filter: true, },
    { headerName: 'Date de naissance', field: 'birthDate', suppressMovable: true, filter: true, },
    { headerName: 'Enfant', field: 'enfant', suppressMovable: true, filter: true, },

    { headerName: 'Situation', field: 'situation', suppressMovable: true, filter: true, },
    { headerName: 'Logement', field: 'logement', suppressMovable: true, filter: true, },
    { headerName: 'Crédit', field: 'credit', suppressMovable: true, filter: true, },
    { headerName: 'immobilier', field: 'immobilier', suppressMovable: true, filter: true, },
    { headerName: 'immobiliers', field: 'immobiliers', suppressMovable: true, filter: true, },
    { headerName: 'Montant', field: 'montant', suppressMovable: true, filter: true, },
    { headerName: 'Crédit Immobilier', field: 'creditImmobilier', suppressMovable: true, filter: true, },
    { headerName: 'Capital Restant', field: 'capitalRestant', suppressMovable: true, filter: true, },
    { headerName: 'Crédit Conso', field: 'creditConso', suppressMovable: true, filter: true, },
    { headerName: 'Credit Réstant', field: 'creditResto', suppressMovable: true, filter: true, },


    { headerName: 'Rachat de crédit', field: 'rachatdecredit', suppressMovable: true, filter: true, },
    { headerName: 'Tréosorie', field: 'treosorie', suppressMovable: true, filter: true, },
    { headerName: 'Ficher', field: 'ficher', suppressMovable: true, filter: true, },
    { headerName: 'Statut', field: 'statut', suppressMovable: true, filter: true, },

  

    { headerName: 'Emprunteur', field: 'emprunteur', suppressMovable: true, filter: true, },
    { headerName: 'Sexe Emprunteur', field: 'sexeEmpr', suppressMovable: true, filter: true, },
    { headerName: 'Nom Emprunteur ', field: 'firstNameEmpr', suppressMovable: true, filter: true, },
    { headerName: 'Prénom Emprunteur', field: 'lastNameEmpr', suppressMovable: true, filter: true, },
    { headerName: 'Date de naissance', field: 'birthDateEmpr', suppressMovable: true, filter: true, },
    { headerName: 'Status Emprunteur', field: 'statutEmpr', suppressMovable: true, filter: true, },
    { headerName: 'Revenu de Conjoin', field: 'revenuConjoin', suppressMovable: true, filter: true, },
    { headerName: 'Foyer', field: 'foyer', suppressMovable: true, filter: true, },
    { headerName: 'Vos revenu', field: 'revenuvous', suppressMovable: true, filter: true, },

  


  ];

  rowData = [

  ];
  rowData1 = [

  ];
  rowData2 = [

  ];
  rowData3 = [
  ];
  rowData4 = [

  ];
  rowData5 = [
  ];

  rowData6 = [
  ];

  rowData7 = [
  ];

  rowData8 = [
  ];
  rowData9 = [
  ];
  ngOnInit() {
    this.getAllPartners()
    this.getAdmins()
    this.getCLientList()
    this.getRole()
  }

  getRole() {
    console.log(this.token)
    const body = { "token": this.token.token }
    this.userService.getRole(body).subscribe((data) => {
      this.role = data
    })
  }

  getCLientList() {
    let body = {
      token: this.token.token
    }
    this.userService.getClients(body).subscribe((data: any) => {
      console.log('xxxxxxxxx', data)
      data.forEach(element => {
        if (element.Type == 'Sante') {
          this.rowData.push({
            firstname: element.firstname, lastname: element.lastname, email: element.email, phonenumber: element.phonenumber,
            date: element.time, appeler: element.call, type: element.Type, birthDay: element.date, postalCode: element.code_postal, dateEffect: element.date_effect,
            regime: element.regimeText, hospitalisation: element.hospiText, optic: element.opticText, dentaire: element.dentaireText, consultation: element.consultationText
          },
          )
        }
        if (element.Type == 'ProtectionJuridique') {
          this.rowData1.push({
            firstname: element.firstname, lastname: element.lastname, email: element.email, phonenumber: element.phonenumber, date: element.time, appeler: element.call, type: element.Type, birthDay: element.date, postalCode: element.code_postal, dateEffect: element.date_effect,
            regime: element.regimeText,
          },
          )
        }
        if (element.Type == 'prevoyance') {
          this.rowData2.push({
            firstname: element.firstname, lastname: element.lastname, email: element.email, phonenumber: element.phonenumber, date: element.time, appeler: element.call, type: element.Type, birthDay: element.date, postalCode: element.code_postal, dateEffect: element.date_effect,
            regime: element.regimeText,
          },
          )
        }
        if (element.Type == 'Animal') {
          this.rowData3.push({
            firstname: element.firstname, lastname: element.lastname, email: element.email, phonenumber: element.phonenumber, date: element.time, appeler: element.call, type: element.Type, birthDay: element.date, postalCode: element.code_postal, dateEffect: element.date_effect,
            regime: element.regimeText, dateanimal: element.dateanimal, animalType: element.animalType, race: element.race, nomanimal: element.nomanimal, sexanimal: element.sexanimal
          }
          )
        }
        if (element.Type == 'moto') {
          this.rowData4.push({
            firstname: element.firstname, lastname: element.lastname, email: element.email, phonenumber: element.phonenumber, date: element.time, appeler: element.call, type: element.Type, BirthDate: element.BirthDate, postalCode: element.code_postal, dateEffect: element.date_effect,
            dateCirculation: element.dateCirculation, dateAcquisition: element.dateAcquisition, typegarage: element.typegarage, motoUse: element.motoUse, civilite: element.civilite, havepermis: element.havepermis, permiDate: element.permiDate, permis: element.permis, griscard: element.griscard, motoType: element.motoType, element
          }
          )
        }
        if (element.Type == 'emprunteur') {
          this.rowData5.push({
            firstname: element.firstname,
            lastname: element.lastname,
            email: element.email,
            phonenumber: element.phonenumber,
            time: element.time,
            appeler: element.call,
            type: element.Type,
            date: element.date,
            postalCode: element.code_postal,
            dateEffect: element.date_effect,

            DeplacementsText: element.DeplacementsText,
            StatutText: element.StatutText,
            fumeur: element.fumeur,
            handling: element.handling,
            civilite: element.civilite,
            height: element.height,
            risque: element.riskyProfession,
            projectStateText: element.projectStateText,
            banqueText: element.banqueText,
            projectQualificationText: element.projectQualificationText,

            loanText: element.loanText,
            delayTypeText: element.delayTypeText,
            delay: element.delay,
            warrantyText: element.warrantyText,
            duration: element.duration,
            amount: element.amount,
            rate: element.rate
          }
          )
        }
        if (element.typeAssurance == 'auto') {
          this.rowData6.push({

            firstname: element.firstname,
            lastname: element.lastname,
            email: element.email,
            phonenumber: element.phonenumber,
            time: element.time,
            appeler: element.call,
            typeAssurance: element.typeAssurance,
            birthDate: element.birthDate,
            code_postal: element.code_postal,
            matricule: element.matricule,

            date_effect: element.date_effect,
            dateAcquisition: element.dateAcquisition,
            dateCirculation: element.dateCirculation,
            type: element.typeText,
            modeText: element.modeText,
            assure: element.assureText,
            nonassuredate: element.nonassuredate,
            parkingMode: element.parkingModeText,

            acommpage: element.acommpage,
            profession: element.professionText,
            situation: element.situationText,
            permiDate: element.permiDate,
            sexe: element.sexeText,
            titulaire: element.titulaireText,
            conducteur: element.conducteurText,
            autoUseText: element.autoUseText,
            nombreMois1: element.nombreMois1Text,
            nombreMois: element.nombreMoisText,
            companyName: element.companyName,
            motif: element.motifText,
            contrat: element.contratText,
            assureur: element.assureur,
            assureBefore: element.assureBeforeText,
            bonnus: element.bonnus,
          }
          )
        }
        if (element.Type == 'energie') {
          this.rowData7.push({

            firstname: element.firstname,
            lastname: element.lastname,
            email: element.email,
            phonenumber: element.phonenumber,
            time: element.time,
            call: element.call,
            type: element.Type,

            puissance: element.puissance,
            electConsommation: element.electConsommation,
            livraison: element.livraison,
            pdl: element.pdl,

            fournissuer: element.fournissuer,
            besoin: element.besoin,
            logement: element.logement,
            postalCode: element.postalCode,
            consommation: element.consommation,
            tarif: element.tarif,

            logementType: element.logementType,
            surface: element.surface,
            personne: element.personne,
            eau: element.eau,
            chauffage: element.chauffage,
          }
          )
        }

        if (element.Type == 'defiscalisation') {
          this.rowData8.push({
            firstname: element.firstname,
            lastname: element.lastname,
            email: element.email,
            phonenumber: element.phonenumber,
            time: element.time,
            call: element.call,
            Type: element.Type,
            codepostal: element.codepostal,
            birthDate: element.birthDate,
            enfant: element.enfant,
            situation: element.situation,
            revenue: element.revenue,
            logement: element.logement,
            activite: element.activite,

          }
          )
        }

        if (element.Type == 'Rachat') {
          this.rowData9.push({
            emprunteur: element.emprunteur,
            sexeEmpr: element.sexeEmpr,
            firstNameEmpr: element.firstNameEmpr,
            lastNameEmpr: element.lastNameEmpr,
        
            birthDateEmpr: element.birthDateEmpr,
            statutEmpr: element.statutEmpr,
            revenuConjoin: element.revenuConjoin,
            foyer: element.foyer,
            revenuvous: element.revenuvous,
        
            rachatdecredit: element.rachatdecredit,
            treosorie: element.treosorie,
            ficher: element.ficher,
            statut: element.statut,
            enfant: element.enfant,

            firstname: element.firstname,
            lastname: element.lastname,
            email: element.email,
            phonenumber: element.phonenumber,
            time: element.time,
            call: element.call,
            Type: element.Type,
            postalCode: element.code_postal,
            birthDate: element.date,

            situation: element.situation,
            logement: element.logement,
            credit: element.credit,
            immobilier: element.immobilier,
            immobiliers: element.immobiliers,
            montant: element.montant,
            creditImmobilier: element.creditImmobilier,
            capitalRestant: element.capitalRestant,
            creditConso: element.creditConso,
            creditResto: element.creditResto,

          }
          )
        }
      });
      this.rowData.reverse();
      this.rowData1.reverse();
      this.rowData2.reverse();
      this.rowData3.reverse();
      this.rowData4.reverse();
      this.rowData5.reverse();
      this.rowData6.reverse();
      this.rowData7.reverse();
      this.rowData8.reverse();
      this.rowData9.reverse();






      setTimeout(() => {
        this.show = true
      }, 400);
    })
  }
  getAllPartners() {
    this.userService.getAllPartners().subscribe((data: any) => {
      console.log(data)
      data.forEach(element => {
        console.log({ name: element.Name, imageBase64: element.Image })
        this.partnerData.reverse().push({ name: element.Name, imageBase64: element.Image, id: element._id })
        this.dataSourceTwo = new MatTableDataSource<Partner>(this.partnerData.reverse());
        setTimeout(() => {
          this.isLoadedPartners = true
          this.dataSourceTwo.paginator = this.MatPaginator2;
        }, 100);
      });
    })
  }

  getAdmins() {
    this.userService.getAllAdmins(this.token).subscribe((data: any) => {
      console.log(data)
      data.forEach(element => {
        console.log({ name: element.fullname, email: element.email, role: element.role })
        this.adminList.reverse().push({ name: element.fullname, email: element.email, role: element.role, id: element._id })
        this.dataSourceOne = new MatTableDataSource<PeriodicElement>(this.adminList.reverse());
        setTimeout(() => {
          this.isLoaded = true
          this.dataSourceOne.paginator = this.MatPaginator1;
        }, 100);
      });
    })
  }

  refresh() {
    this.dataSourceOne = new MatTableDataSource<PeriodicElement>(this.adminList.reverse());
    this.dataSourceOne.paginator = this.MatPaginator1;
  }
  refresh2() {
    this.dataSourceTwo = new MatTableDataSource<Partner>(this.partnerData.reverse());
    this.dataSourceTwo.paginator = this.MatPaginator2;
  }
  onSubmit() {
    this.userService.AddAdmin(this.user).subscribe(data => {
      this.adminList = []
      Swal.fire('administrateur a été ajouté avec succès !')
      this.getAdmins()
    })
  }
  onCellClicked(e) {
    if (e.colDef.headerName == "Devis") {
      if (e.data.element.devis[0]) {
        console.log(e.data.element.devis[0])
        this.generatePdf(e.data)
      }
    }
  }

  async generatePdf(data) {
    var datePipe = new DatePipe('en-US');
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)
    var docDefinition = {
      header: {
        columns: [
          {
            image: await this.getBase64ImageFromURL(
              'assets/img/logo-2-old.png'),
            width: 150,
            height: 50,
            style: 'logo'
          },
        ]
      },

      footer: {
        columns: [
          // 'Left part',
          // { text: 'Right part', alignment: 'right' }
        ]
      },
      content: [
        {
          stack: [
            'devis généré par Va-Chercher.com',
            { text: 'Avec  l’assurance' + ' ' + data.element.devis[0].name, style: 'subheader' },
            { text: 'le' + ' ' + data.date, style: 'subheader' },

          ],
          style: 'header'
        },
        {
          text: [
            'Suite à votre demande de devis, nous vous prions de trouver ci-joint notre proposition de tarif pour' + ' ' + data.element.devis[0].name + ' ' + ' Cette offre annule et remplace toute proposition antérieure.\n',
          ],
          margin: [0, 10, 0, 10]
        },
        {
          text: [
            'Nous vous remercions vivement de nous avoir consultés et restons à votre disposition pour répondre à toute question concernant ce devis.',
          ],
          margin: [0, 10, 0, 10]
        },
        {
          text: [
            'Vous en souhaitant bonne réception, nous vous prions de croire, Madame, Monsieur,' + '  ' + data.firstname + ' ' + data.lastname + '  ' + 'en l\'assurance de nos salutations distinguées.',
          ],
          margin: [0, 10, 0, 30]
        },
        { text: 'PLus d\'informations :', style: 'subheader' },
        {
          style: 'tableExample',
          table: {
            body: [
              ['Nom de l\'assurance', 'Prix par mois'],
              [data.element.devis[0].name, data.element.devis[0].prix],
            ],
          },
          margin: [0, 10, 0, 30]
        },
        { text: ' Informations du client', style: 'subheader' },
        {
          style: 'tableExample',
          table: {
            body: [
              ['Nom', 'Prénom', 'Email', 'Numéro de téléphone'],
              [data.firstname, data.lastname, data.email, data.phonenumber]
            ]
          },
          margin: [0, 10, 0, 30]
        },

      ],

      styles: {
        logo: {
          margin: [50, 20, 20, 0],
        },
        header: {
          fontSize: 18,
          bold: true,
          alignment: 'right',
          margin: [0, 50, 0, 80]
        },
        subheader: {
          fontSize: 14
        },
        superMargin: {
          margin: [20, 0, 40, 0],
          fontSize: 15
        }
      }
    };
    pdfMake.createPdf(docDefinition).open();
  }

  getBase64ImageFromURL(url) {
    return new Promise((resolve, reject) => {
      var img = new Image();
      img.setAttribute("crossOrigin", "anonymous");

      img.onload = () => {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;

        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);

        var dataURL = canvas.toDataURL("image/png");

        resolve(dataURL);
      };

      img.onerror = error => {
        reject(error);
      };

      img.src = url;
    });
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
  onGridReady1(params) {
    this.gridApi1 = params.api;
    this.gridColumnApi1 = params.columnApi;
  }
  onGridReady2(params) {
    this.gridApi2 = params.api;
    this.gridColumnApi2 = params.columnApi;
  }
  onGridReady3(params) {
    this.gridApi3 = params.api;
    this.gridColumnApi3 = params.columnApi;
  }
  onGridReady4(params) {
    this.gridApi4 = params.api;
    this.gridColumnApi4 = params.columnApi;
  }
  onGridReady5(params) {
    this.gridApi5 = params.api;
    this.gridColumnApi5 = params.columnApi;
  }
  onGridReady6(params) {
    this.gridApi6 = params.api;
    this.gridColumnApi6 = params.columnApi;
  }
  onGridReady7(params) {
    this.gridApi7 = params.api;
    this.gridColumnApi7 = params.columnApi;
  }
  onGridReady8(params) {
    this.gridApi8 = params.api;
    this.gridColumnApi8 = params.columnApi;
  }
  onGridReady9(params) {
    this.gridApi9 = params.api;
    this.gridColumnApi9 = params.columnApi;
  }
  onBtnExport() {
    this.gridApi.exportDataAsCsv();
    Swal.fire('Extraction a été effectuée avec succès !')
  }
  onBtnExport1() {
    this.gridApi1.exportDataAsCsv();
    Swal.fire('Extraction a été effectuée avec succès !')
  }
  onBtnExport2() {
    this.gridApi2.exportDataAsCsv();
    Swal.fire('Extraction a été effectuée avec succès !')
  }
  onBtnExport3() {
    this.gridApi3.exportDataAsCsv();
    Swal.fire('Extraction a été effectuée avec succès !')
  }
  onBtnExport4() {
    this.gridApi4.exportDataAsCsv();
    Swal.fire('Extraction a été effectuée avec succès !')
  }
  onBtnExport5() {
    this.gridApi5.exportDataAsCsv();
    Swal.fire('Extraction a été effectuée avec succès !')
  }
  onBtnExport6() {
    this.gridApi6.exportDataAsCsv();
    Swal.fire('Extraction a été effectuée avec succès !')
  }
  onBtnExport7() {
    this.gridApi7.exportDataAsCsv();
    Swal.fire('Extraction a été effectuée avec succès !')
  }
  onBtnExport8() {
    this.gridApi8.exportDataAsCsv();
    Swal.fire('Extraction a été effectuée avec succès !')
  }
  onBtnExport9() {
    this.gridApi9.exportDataAsCsv();
    Swal.fire('Extraction a été effectuée avec succès !')
  }
  addPartner() {
    let body = {
      "Name": this.partner.name,
      "Image": this.partner.imageBase64
    }
    setTimeout(() => {
      this.userService.AddAPartner(body).subscribe(data => {
        Swal.fire('Le partenaire a été ajouté avec succès !')
        console.log(data)
        this.partnerData.push({ name: this.partner.name, imageBase64: this.partner.imageBase64, id: this.partner.id })
        this.refresh2();
      })
    }, 100);

  }

  deleteUser(user) {
    let body = {
      "token": this.token.token,
      "id": user.id
    }
    console.log(body)

    Swal.fire({
      title: 'Voulez-vous supprimer cette administrateur?',
      showDenyButton: true,
      confirmButtonText: 'Supprimer',
      denyButtonText: `Annuler`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.removeUser(body).subscribe(data => {
          this.adminList = []
          this.getAdmins()
          Swal.fire('Supprimer', '', 'success')
        })
      } else if (result.isDenied) {
        Swal.fire('utilisateur n a pas été supprimé', '', 'info')
      }
    })
  }
  deletePartner(user) {
    let body = {
      "id": user.id
    }
    console.log(user)
    // add api delete user here
    Swal.fire({
      title: 'Voulez-vous supprimer cette Partenaire?',
      showDenyButton: true,
      confirmButtonText: 'Supprimer',
      denyButtonText: `Annuler`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.removePartner(body).subscribe(data => {
          this.partnerData = []
          this.getAllPartners()
          Swal.fire('Supprimer', '', 'success')
        })
      } else if (result.isDenied) {
        Swal.fire('partenaire n a pas été supprimé', '', 'info')
      }
    })
  }
  handleInputChange(e) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e) {
    let reader = e.target;
    this.imageSrc = reader.result
    console.log(this.imageSrc)
    this.compressImage(this.imageSrc, 100, 100).then(compressed => {
      this.partner.imageBase64 = compressed;

    })
  }
  classname = "";
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  compressImage(src, newX, newY) {
    return new Promise((res, rej) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        const elem = document.createElement('canvas');
        elem.width = newX;
        elem.height = newY;
        const ctx = elem.getContext('2d');
        ctx.drawImage(img, 0, 0, newX, newY);
        const data = ctx.canvas.toDataURL();
        res(data);
      }
      img.onerror = error => rej(error);
    })
  }
}
