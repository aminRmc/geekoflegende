import * as Class from './module/classe.js';


let setperso =()=>{
    Class.guerrier.nom = prompt('donnez le nom du guerrier')
    
    

    Class.mage.nom = prompt('donnez le nom du mage')
   

    Class.archer.nom = prompt("donne le nom de l'archer")

    let stats =() =>{
        alert('Maintenant repartison les point de pv tu en as 250 pv')

        Class.guerrier.pointDeVie = +prompt( ` indique moi les pv de ${Class.guerrier.nom} `)
    
        if (Class.guerrier.pointDeVie > 250) {
            alert("non non pas plus de 250")
            return stats()
            
        }
        else(
            Class.mage.pointDeVie = +prompt( ` indique moi les pv de ${Class.mage.nom} `)
            
        )
    
    
        if(Class.mage.pointDeVie + Class.guerrier.pointDeVie > 250) {
            alert('non non bg tu as que 250 pv pour les trois ')
            return stats()
        }
        else(
            Class.archer.pointDeVie = +prompt( ` indique moi les pv de ${Class.archer.nom} `)
            
        )
    
    
    
    
    
        alert("Maintenant repartison les point de point d'attack tu en as 50 ")
    
        Class.guerrier.pointDattaque = +prompt( ` indique moi les pa de ${Class.guerrier.nom} `)
    
        if (Class.guerrier.pointDattaque > 50) {
            alert("non non pas plus de 50")
            return stats()
            
        }
        else(
            Class.mage.pointDattaque = +prompt( ` indique moi les pa de ${Class.mage.nom} `)
    
            
        )
    
    
        if(Class.mage.pointDattaque + Class.guerrier.pointDattaque > 50) {
            alert('non non bg tu as que 50  pour les trois ')
            return stats()
            
        }
        else(
            Class.archer.pointDattaque = +prompt( ` indique moi les pa de ${Class.archer.nom} `)
            
            
        )
        
    }
 
    stats()
}



let random = Math.round(Math.random() * (3 - 1)) + 1;

  
  



alert(`Bienvenu sur GeekOfLegend`)

setperso()


let monster = ''
if (random == 1) {
        monster = Class.Sauron
    
}
else if (random == 2) {
        monster = Class.Chronos
}
else(
    monster = Class.Lilith
)
alert(`ton ennemie est ${monster.nom}`)
console.log(monster.pointDeVie);


let combat =()=> {
    while (monster.pointDeVie > 0) {
       
    let positionG = prompt(`choisis la position de combat du guerrier`)
    Class.guerrier.postureDeCombat = positionG.toLowerCase()
        switch (Class.guerrier.postureDeCombat) {
            case 'defense':
                if (Class.guerrier.pointDeVie < 1 % Class.mage.pointDeVie < 1 & Class.archer.pointDeVie < 1 ) {
                    alert(`vous avez perdu`)
                    break
                 }
                
        
                if (Class.guerrier.pointDeVie > 0) {
                    if (Class.guerrier.specialite = 7) {
                        monster.pointDeVie -= (Class.guerrier.pointDeVie*100/20)    
                        Class.guerrier.specialite = 0
                        
                    }
                    else{
                        monster.pointDeVie -= Class.guerrier.pointDattaque
                    }
                    
        
                }
                break;
            case "attack":
                if (Class.guerrier.pointDeVie < 1 % Class.mage.pointDeVie < 1 & Class.archer.pointDeVie < 1 ) {
                    alert(`vous avez perdu`)
                    break
                 }
                
        
                if (Class.guerrier.pointDeVie > 0) {
                    if (Class.guerrier.specialite = 7) {
                        monster.pointDeVie -= (Class.guerrier.pointDeVie*100/40)    
                        Class.guerrier.specialite = 0
                        
                    }
                    else{
                        monster.pointDeVie -= (Class.guerrier.pointDeVie*100/20) 
                    }
                    
        
                }
            break;
            default:
                break;
        }
       
       



        if (Class.mage.pointDeVie > 0) {
            if (Class.mage.specialite = 0) {
                alert(`le mage recharge`)
                Class.mage.specialite = 7
                
            }
            else{
                monster.pointDeVie -= Class.mage.pointDattaque
            }
            

        }
      







        if (Class.archer.pointDeVie > 0) {
            if (Class.archer.specialite =0 ) {
                alert(`l'archer recharge`)
                Class.archer.specialite = 6 
               
            }
            else{
                monster.pointDeVie -=  Class.archer.pointDattaque
            }
           

        }
       


        let random2 = Math.round(Math.random() * (3 - 1)) + 1;
    
        if (monster.pointDeVie < 0) {

            alert(`vous avez gagnez`)
              break
           
        }
        else {
            if (random2 == 1) {
                Class.archer.pointDeVie -= monster.pointDattaque
            }
            else if (random2 == 2) {
                Class.mage.pointDeVie -= monster.pointDattaque
            }
            else {
                Class.guerrier.pointDeVie -= monster.pointDattaque
            }
        }
        Class.guerrier.specialite += 1
        Class.mage.specialite -= 1
        Class.archer.specialite -=1

        alert(`point de vie du Boos :${monster.pointDeVie}`)
        alert(`point de vie du Guerrier :${Class.guerrier.pointDeVie}`)
        alert(`point de vie du mage :${Class.mage.pointDeVie}`)
        alert(`point de vie de l'qrcher :${Class.archer.pointDeVie}`)

    }
    
}

combat()
