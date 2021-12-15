
export class Signup {
        
    public username : string ;
    public password : string ;
    public nom : string ;
    public prenom : string; 

    public role : string[]

    constructor(nom:string,prenom:string,username:string,password:string,role:string[]){
         this.nom=nom;
         this.prenom=prenom;
         this.username=username;
         this.password=password;
        this.role=role ;
     }


}
