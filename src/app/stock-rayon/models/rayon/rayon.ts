import {Produit} from "../produit/produit";

export class Rayon {

  idRayon !: number;
  code !: string;
  libelle !: string;

  rayonproduittt !: Produit [];
  constructor(code: string, libelle: string) {
    this.code = code;
    this.libelle = libelle;
  }
}
