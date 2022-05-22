import { DatePipe } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { degrees, PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { MotoService } from '../service-data/moto.service';
pdfMake.vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-moto-list',
  templateUrl: './moto-list.component.html',
  styleUrls: ['./moto-list.component.css']
})
export class MotoListComponent implements OnInit {
  @ViewChild('pdfTable', {static: false}) pdfTable: ElementRef;

 data: any[] = [];

 pdfData

 list

 data1 = [
{
    "liste": {
        "FMA : Formule Tiers": {
            "name": "FMA : Formule Tiers",
            "image": "https://www.fma.fr/App_Themes/FMAv2/images/logo-fma-assurances.png",
            "prix": "42.07 € "
        },
        "FMA : Formule Tiers + Vol": {
            "name": "FMA : Formule Tiers + Vol",
            "image": "https://www.fma.fr/App_Themes/FMAv2/images/logo-fma-assurances.png",
            "prix": "60.75 € "
        }
        },
    "client": "620b9be2416d9f399387248a"
  }
 ]
 
 
  name = 'Empty States Pattern';
  firstname 
  lastname 
  email 
  phoneNumber 
  constructor(
    private router: Router,
     private activatedRoute: ActivatedRoute,
    private motoService: MotoService
  ) {
  }
  ngOnInit(): void {
    this.data = Object.values(history.state[0].liste) ;
    this.firstname = history.state[1][0]
    this.lastname = history.state[1][1] 
    this.email = history.state[1][2]   
    this.phoneNumber = history.state[1][3]
  }
  classname = "";
saveOffer (data){
  const dataTo = {
    "id": history.state[0].client,
    "devis": data
  }
  this.motoService.saveOffer(dataTo).subscribe( data =>{
  })
}
// methode 22 **** 
  async generatePdf(data){
    var datePipe = new DatePipe('en-US');
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)
    var docDefinition = {
      header: {
        columns: [
          {
            image: await this.getBase64ImageFromURL(
             'assets/img/logo-2-old.png') ,
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
        content:[
          {
            stack: [
              'devis généré par Va-Chercher.com',
              {text: 'Avec  l’assurance'+' '+ data.name , style: 'subheader'},
              {text: 'le'+' '+  datePipe.transform(today, 'dd/MM/yyyy') , style: 'subheader'},

            ],
            style: 'header' 
          },
          {
            text: [
              'Suite à votre demande de devis, nous vous prions de trouver ci-joint notre proposition de tarif pour'+' '+ data.name+' ' +' Cette offre annule et remplace toute proposition antérieure.\n',
            ],
            margin: [0, 10, 0, 10]
          },
          {
            text: [
              'Nous attirons votre attention sur le fait que ce devis est valable jusqu\'au'+' '+ tomorrow +' ' +'et qu\'il ne tient pas compte d\'une éventuelle remise.\n',
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
              'Vous en souhaitant bonne réception, nous vous prions de croire, Madame, Monsieur,'+'  '+this.firstname+ ' '+ this.lastname +'  '+'en l\'assurance de nos salutations distinguées.',
            ],
            margin: [0, 10, 0, 30]
          },
          {text: 'PLus d\'informations :', style: 'subheader'},
          {
            style: 'tableExample',
            table: {
              body: [
                ['Nom de l\'assurance', 'Prix par mois'],
                [data.name, data.prix],
              ],
            },
            margin: [0, 10, 0, 30]
          },
          {text: ' Informations du client', style: 'subheader'},
          {
            style: 'tableExample',
            table: {
              body: [
                ['Nom', 'Prénom','Email','Numéro de téléphone'],
                [this.firstname, this.lastname, this.email, this.phoneNumber]
              ]
            },
            margin: [0, 10, 0, 30]
          },

      ],  
  
      styles: {
        logo:{
          margin: [50, 20,20 , 0],
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
    this.router.navigateByUrl("/");

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
    });}




}

