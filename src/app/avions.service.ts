import { Injectable } from '@angular/core';
import { Avions } from './model/avions.model';
@Injectable({
  providedIn: 'root'
})
export class AvionsService {
  Avions : Avions[]; //un tableau de Avions
  Avion!: Avions; 
  constructor() {
    this.Avions = [
      { idAvions : 216, nomAvions : "TU 0216", prixAvions : 3000.600, dateCreation: new Date("01/14/2011")},
      { idAvions : 217, nomAvions : "TU 0217", prixAvions : 450, dateCreation : new Date("12/17/2010")},
      { idAvions : 218, nomAvions : "TU 0218", prixAvions : 900.123, dateCreation : new Date("02/20/2020")}
    ];
  }

    listeAvions():Avions[] {
      return this.Avions;
    }
    ajouterAvions( Avi: Avions){
    this.Avions.push(Avi);
  }
    supprimerAvions( Avi: Avions){
      //supprimer le produit prod du tableau produits
     const index = this.Avions.indexOf(Avi, 0);
     if (index > -1) {
      this.Avions.splice(index, 1);
    }
      //ou Bien
      /* this.produits.forEach((cur, index) => {
      if(prod.idProduit === cur.idProduit) {
      this.produits.splice(index, 1);
      }
      }); */
    }
    consulterAvions(id:number): Avions{
      this.Avion = this.Avions.find(A => A.idAvions == id)!;
      return this.Avion;
    }
    trierAvions(){
      this.Avions = this.Avions.sort((n1,n2) => {
      if (n1.idAvions! > n2.idAvions!) {
        return 1;
      }
      if (n1.idAvions! < n2.idAvions!) {
        return -1;
      }
        return 0;
      });
      }
      updateAvions(A:Avions)
    {
      // console.log(p);
      this.supprimerAvions(A);
      this.ajouterAvions(A);
      this.trierAvions();
}
}