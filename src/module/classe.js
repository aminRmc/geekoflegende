export class Boss {
    constructor(nom,pointDeVie,pointDattaque) {
        this.nom = nom;
        this.pointDeVie = pointDeVie;
        this.pointDattaque =pointDattaque
    }
}


let Sauron = new Boss("Sauron",150,10)
let Chronos = new Boss("Chronos",120,18)
let Lilith = new Boss("Lilith",180,8)



export class Hero {
    constructor(nom,postureDeCombat,pointDeVie,pointDattaque,specialite) {
        this.nom = nom;
        this.pointDeVie = pointDeVie;
        this.pointDattaque =pointDattaque
        this.postureDeCombat = postureDeCombat
        this.specialite =specialite
    }
}


let guerrier = new Hero('luffy','attack',150,20,0)
let mage = new Hero('Nami','attack',120,10,7)
let archer = new Hero('Ussop','attack',130,15,6)


let setperso = ()=>{
    NomG = prompt('donnez le nom du guerrier')
    toLowerCase(Nom) = guerrier.nom
    PDAG =  prompt('choisie sa position entre attack et defense')
    toLowerCase(PDA) = guerrier.pointDattaque


    

}
