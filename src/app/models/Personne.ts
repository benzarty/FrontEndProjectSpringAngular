import { Role } from "./Role";


export class Personne{
      public id : number ;
      public username : string ;
      public active : boolean ;
      public password : string ;
      public role : number ;
      public imageUrl :string ;
      public nom : string ;
      public prenom : string; 
      public roles : Role[]
}
