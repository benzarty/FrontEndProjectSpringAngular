export class Client{
    idClient?: number;
    categorieClient?: string;
    nom?: string;
    prenom?: string;
    email?: string;
    password?: string;
    profession?: string;
    dateNaissance?: string;

    constructor(categorieClient:string,nom:string,prenom:string,email:string,password:string,profession:string,dateNaissance:string,idClient?:number){
       this.idClient=idClient;
        this.categorieClient=categorieClient;
        this.nom=nom;
        this.prenom=prenom;
        this.email=email;
        this.password=password;
        this.profession=profession;
        this.dateNaissance=dateNaissance;
    }
    
    

    }

