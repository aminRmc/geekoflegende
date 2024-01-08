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
    constructor(nom,postureDeCombat,pointDeVie,pointDattaque) {
        this.nom = nom;
        this.pointDeVie = pointDeVie;
        this.pointDattaque =pointDattaque
        this.postureDeCombat = postureDeCombat
    }
}


let guerrier = new Hero('luffy','attack',150,20)



