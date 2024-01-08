export class Boss {
    constructor(nom,pointDeVie,pointDattaque) {
        this.nom = nom;
        this.pointDeVie = pointDeVie;
        this.pointDattaque =pointDattaque;
    }
}


export let Sauron = new Boss("Sauron",1050,13)
export let Chronos = new Boss("Chronos",5050,15)
export let Lilith = new Boss("Lilith",2050,14)



export class Hero {
    constructor(nom,postureDeCombat,pointDeVie,pointDattaque,specialite) {
        this.nom = nom;
        this.pointDeVie = pointDeVie;
        this.pointDattaque =pointDattaque;
        this.postureDeCombat = postureDeCombat;
        this.specialite =specialite;
    }
}


export let guerrier = new Hero('luffy','attack',0,0,0)
export let mage = new Hero('Nami','attack',0,0,7)
export let archer = new Hero('Ussop','attack',0,0,6)


