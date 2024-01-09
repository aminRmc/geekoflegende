import * as Class from './module/classe.js';



let setperso =()=>{
    Class.guerrier.nom = prompt('donnez le nom du guerrier')
    
    

    Class.mage.nom = prompt('donnez le nom du mage')
   

    Class.archer.nom = prompt("donne le nom de l'archer")

    let stats =() =>{
        alert('Maintenant repartison les point de pv tu en as 250 pv')

        Class.guerrier.pointDeVie = +prompt( ` indique moi les pv de ${Class.guerrier.nom} `)
    
        if (Class.guerrier.pointDeVie > 250 || Class.guerrier.pointDeVie < 1) {
            alert("non non pas plus de 250 ou essaye de mettre plus de 0")
            return stats()
            
        }
        else(
            Class.mage.pointDeVie = +prompt( ` indique moi les pv de ${Class.mage.nom} `)
            
        )
    
    
        if(Class.mage.pointDeVie + Class.guerrier.pointDeVie > 250 || Class.mage.pointDeVie < 1) {
            alert('non non bg tu as que 250 pv pour les trois ou essaye de mettre plus de 0')
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












let enigme = ()=>{

    switch ( Math.round(Math.random() * (3 - 1)) + 1) {
       case 1:
           let reponse = prompt(`Qu'est-ce qui peut être dans la mer et dans le ciel ?`)
           let cont = 1
          while (reponse =! `etoile`) {
           

           reponse = prompt(`Qu'est-ce qui peut être dans la mer et dans le ciel ?`)
           cont =+ 1
           if (cont == 3) {
               alert=(`vous avez perdue`)
               break
           }
          }







           break;


       case 2:
           

       let reponse2= prompt("Qu'est-ce qui commence la nuit et termine le matin ?")
       let cont2 = 1
      while (reponse =! `n`) {
       

       reponse2 = prompt("Qu'est-ce qui commence la nuit et termine le matin ?")
       cont2 =+ 1
       if (cont2 == 3) {
           alert=(`vous avez perdue`)
           break
       }
      }
           break;



       case 3:
           let reponse3= prompt("Qu'est-ce qui n'est pas vivant mais qui grandi, n'a pas de poumon mais a besoin d'air, et meurt sous l'eau ?")
           let cont3 = 1
          while (reponse =! `feu`) {
           reponse2 = prompt("Qu'est-ce qui n'est pas vivant mais qui grandi, n'a pas de poumon mais a besoin d'air, et meurt sous l'eau ?")
           cont3 =+ 1
           if (cont3 == 3) {
               alert=(`vous avez perdue`)
               break
           }
          }
           break;
    
       default:
           break;
    }
   }


let combat =()=> {
    while (monster.pointDeVie > 0) {
        if (Class.guerrier.pointDeVie < 1 && Class.mage.pointDeVie < 1 && Class.archer.pointDeVie < 1 ) {
            alert(`vous avez perdu`)
            break
         }

    




    let positionG = prompt(`choisis la position de combat du guerrier attack/defense`)
    Class.guerrier.postureDeCombat = positionG.toLowerCase()
        switch (Class.guerrier.postureDeCombat) {
            case 'defense':  
        
                if (Class.guerrier.pointDeVie > 0) {
                    if (Class.guerrier.specialite = 7) {
                        monster.pointDeVie -= (Class.guerrier.pointDeVie*1.2)   
                        Class.guerrier.specialite = 0
                      
                        
                    }
                    else{
                        monster.pointDeVie -= Class.guerrier.pointDattaque
                      
                    }
                    
        
                }
                break;
            case "attack":
        
                if (Class.guerrier.pointDeVie > 0) {
                    if (Class.guerrier.specialite = 7) {
                        monster.pointDeVie -= (Class.guerrier.pointDeVie*1.4)   
                        Class.guerrier.specialite = 0
                        
                    }
                    else{
                        monster.pointDeVie -= (Class.guerrier.pointDeVie +(Class.guerrier.pointDeVie*100/20)) 
                    }
                    
        
                }
            break;
            default:
                break;
        }
       
       







            
    let positionM = prompt(`choisis la position de combat du guerrier attack/defense`)
    Class.mage.postureDeCombat = positionM.toLowerCase()
        switch (Class.mage.postureDeCombat) {
            case 'defense':
                if (Class.mage.pointDeVie > 0) {
                    if (Class.mage.specialite = 0) {
                        alert(`le mage recharge`)
                        Class.mage.specialite = 7
                        
                    }
                    else{
                        monster.pointDeVie -= Class.mage.pointDattaque
                    }
                    
        
                }
                break;
            case "attack":
               
                
        
                if (Class.guerrier.pointDeVie > 0) {
                    if (Class.mage.pointDeVie > 0) {
                        if (Class.mage.specialite = 0) {
                            alert(`le mage recharge`)
                            Class.mage.specialite = 7
                            
                        }
                        else{
                            monster.pointDeVie -= (Class.mage.pointDattaque*1.2)
                        }
                        
            
                    }
                }
            break;
            default:
                break;
        }
       

       
      









        let positionA = prompt(`choisis la position de combat du guerrier attack/defense `)
        Class.archer.postureDeCombat = positionA.toLowerCase()
            switch (Class.archer.postureDeCombat) {
                case 'defense':
                    if (Class.archer.pointDeVie > 0) {
                        if (Class.archer.specialite =0 ) {
                            alert(`l'archer recharge`)
                            Class.archer.specialite = 6 
                           
                        }
                        else{
                            monster.pointDeVie -=  Class.archer.pointDattaque
                        }
                       
            
                    }
                    break;
                case "attack":
                   
                    
            
                if (Class.archer.pointDeVie > 0) {
                    if (Class.archer.specialite =0 ) {
                        alert(`l'archer recharge`)
                        Class.archer.specialite = 6 
                       
                    }
                    else{
                        monster.pointDeVie -=  (Class.archer.pointDattaque*1.2)
                    }
                   
        
                }
                    
                break;
                default:
                    break;
            }


      
       





















        let random2 = Math.round(Math.random() * (3 - 1)) + 1;
    
        if (monster.pointDeVie < 0) {

            alert(`vous avez gagnez`)
              break
           
        }
        else {
            if (random2 == 1) {

                if (Class.archer.pointDeVie == 0) {
                    return random2
                }
                else{
                    Class.archer.pointDeVie -= monster.pointDattaque
                }
                
            }
            else if (random2 == 2) {
                if (Class.mage.pointDeVie == 0) {
                    return random2
                }
                else{Class.mage.pointDeVie -= monster.pointDattaque}
                
            }
            else {

                if (Class.guerrier.pointDeVie == 0) {
                    return random2
                }
                else{Class.guerrier.pointDeVie -= monster.pointDattaque}
                
            }
        }
        Class.guerrier.specialite += 1
        Class.mage.specialite -= 1
        Class.archer.specialite -=1

        alert(`point de vie du Boos :${monster.pointDeVie}`)
        alert(`point de vie du Guerrier :${Class.guerrier.pointDeVie}`)
        alert(`point de vie du mage :${Class.mage.pointDeVie}`)
        alert(`point de vie de l'archer :${Class.archer.pointDeVie}`)
        if (monster.pointDeVie < (monster.pointDeVie*0.2)) {
            enigme()
        }

    }
    
}

combat()







