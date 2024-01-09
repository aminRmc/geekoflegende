import * as Class from './module/classe.js';



let setperso =()=>{  //add the name,pv,pa of heros
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












let enigme = ()=>{ // take a random riddle 

    switch ( Math.round(Math.random() * (3 - 1)) + 1) {
       case 1:
           let reponse = prompt(`Qu'est-ce qui peut être dans la mer et dans le ciel ?`)
           let cont = 1
          while (reponse != `etoile`) {
           

           reponse = prompt(`Qu'est-ce qui peut être dans la mer et dans le ciel ?`)
           
           if (cont == 3) {
               alert(`Utilise ses derniere ressource pour faire une invocation, le Dieu de la mort prends l'ame de vos combatant`)
               break
           }else if (reponse == `etoile`) {
            monster.pointDeVie =0
            alert(`bien joue`)
           }
          }
          cont += 1
           break;


       case 2:
           

       let reponse2= prompt("Qu'est-ce qui commence la nuit et termine le matin ?")
       let cont2 = 1
      while (reponse2 != `n`) {
       

       reponse2 = prompt("Qu'est-ce qui commence la nuit et termine le matin ?")
       
       if (cont2 == 3) {
        alert(`Utilise ses derniere ressource pour faire une invocation, le Dieu de la mort prends l'ame de vos combatant`)
           break
       }
       else if (reponse2 == `n`) {
        monster.pointDeVie =0
        alert(`bien joue`)
       }
       cont2 += 1
      }
           break;



       case 3:
           let reponse3= prompt("Qu'est-ce qui n'est pas vivant mais qui grandi, n'a pas de poumon mais a besoin d'air, et meurt sous l'eau ?")
           let cont3 = 1
          while (reponse3 != `feu`) {
           reponse2 = prompt("Qu'est-ce qui n'est pas vivant mais qui grandi, n'a pas de poumon mais a besoin d'air, et meurt sous l'eau ?")
           
           if (cont3 == 3) {
            alert(`Utilise ses derniere ressource pour faire une invocation, le Dieu de la mort prends l'ame de vos combatant`)
               break
           }
           else if (reponse3 == `feu`) {
            monster.pointDeVie =0
            alert(`bien joue`)
           }
           cont3 += 1
          }
           break;
    
       
    }
   }











   let attackGerrier=()=>{ //attack of guerrier


    if (Class.guerrier.pointDeVie > 0) {
        let positionG = prompt(`choisis la position de combat du guerrier attack/defense`)
        Class.guerrier.postureDeCombat = positionG.toLowerCase()
            switch (Class.guerrier.postureDeCombat) {
                case 'defense':  
            
                    
                alert(`${Class.guerrier.nom} se replie`)
                        
            
                    
                    break;
                case "attack":
            
                   
                        if (Class.guerrier.specialite = 7) {
                            
                            monster.pointDeVie -= (Class.guerrier.pointDeVie*1.40)   
                            Class.guerrier.specialite = 0
                            
                        }
                        else{
                            alert(`attack du phoenix...`)
                            monster.pointDeVie -= (Class.guerrier.pointDeVie*1.20) 
                        }
                        
            
                    
                break;
                default:
                    alert(`on as dit attack ou defense !!`)
                    return attackGerrier();
                   
            }}
   }









   let attackMage = () =>{//attack of Mage

    if (Class.mage.pointDeVie > 0) {        
        let positionM = prompt(`choisis la position de combat du guerrier attack/defense`)
        Class.mage.postureDeCombat = positionM.toLowerCase()
            switch (Class.mage.postureDeCombat) {
                case 'defense':
                    
                alert(`${Class.mage.nom} se replie`)
                        
            
                    
                    break;
                case "attack":
                   
                    
        
                            if (Class.mage.specialite == 0) {
                                alert(`le mage recharge`)
                                Class.mage.specialite = 7
                                
                            }
                            else{
                                monster.pointDeVie -= (Class.mage.pointDattaque*1.20)
                            }
                            
                
                        
                    
                break;
                default:
                    alert(`on as dit attack ou defense !!`)
                    return attackMage();
            }
        }
   }







   let attackArcher = ()=>{//attack of Archer


    if (Class.archer.pointDeVie > 0) {
        let positionA = prompt(`choisis la position de combat du guerrier attack/defense `)
        Class.archer.postureDeCombat = positionA.toLowerCase()
            switch (Class.archer.postureDeCombat) {
                case 'defense':
                    
                    
                    alert(`${Class.archer.nom} se replie`)
                       
            
                    
                    break;
                case "attack":
                   
                    
            
                    if (Class.archer.specialite == 0 ) {
                        alert(`l'archer recharge`)
                        Class.archer.specialite  = 6 
                       
                    }
                    else{
                        monster.pointDeVie -=  (Class.archer.pointDattaque*1.2)
                    }
                   
        
                
                    
                break;
                default:
                    alert(`on as dit attack ou defense !!`)
                    return attackArcher();
            }}
   }
















let pdvBoss = monster.pointDeVie
let combat =()=> {  // the final fight 
    while (monster.pointDeVie > 0) {


    
       console.log(pdvBoss);
        if (monster.pointDeVie <= (pdvBoss*0.2)) {
            enigme()
        }

        if (monster.pointDeVie < 0) {

            alert(`vous avez gagnez`)
              break
           
        }


        if (Class.guerrier.pointDeVie < 1 && Class.mage.pointDeVie < 1 && Class.archer.pointDeVie < 1 ) {
            alert(`vous avez perdu`);
            break
         }

         attackGerrier()
         attackMage()
         attackArcher()


        let random2 = Math.round(Math.random() * (3 - 1)) + 1;
    
        if (monster.pointDeVie < 0) {

            alert(`vous avez gagnez`)
              break
           
        }
        else {
            if (random2 == 1) {

                if (Class.guerrier.pointDeVie < 0) {
                    return random2
                }
                else{
                    Class.guerrier.pointDeVie -= monster.pointDattaque
                }
                
            }
            else if (random2 == 2) {
                if (Class.archer.pointDeVie < 0) {
                    return random2
                }
                else{Class.archer.pointDeVie -= monster.pointDattaque}
                
            }
            else {

                if (Class.mage.pointDeVie < 0) {
                    return random2
                }
                else{Class.mage.pointDeVie -= monster.pointDattaque}
                
            }
        }
        Class.guerrier.specialite += 1
        Class.mage.specialite -= 1
        Class.archer.specialite -=1

        alert(`point de vie du Boos :${monster.pointDeVie}`)



        if (Class.guerrier.pointDeVie > 0) {
            alert(`point de vie du Guerrier :${Class.guerrier.pointDeVie}`)
        }
        




        if (Class.archer.pointDeVie > 0) {
            alert(`point de vie de l'archer :${Class.archer.pointDeVie}`)
        }
        




        if (Class.mage.pointDeVie > 0) {
            alert(`point de vie du mage :${Class.mage.pointDeVie}`)
        }                               

    }
    
}

combat()



















