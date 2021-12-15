import {Produit} from "../produit/produit";

export class Stock {

  idStock !: number;
  qte !: number;
  qteMin !: number;
  libelleStock !: string;
  stockproduittt !: Produit[];

  constructor(qte:number, qteMin:number,libelle:string) {
    this.qte = qte;
    this.qteMin = qteMin;
    this.libelleStock= libelle;
  }
}
