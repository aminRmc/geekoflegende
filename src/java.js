import * as Class from './module/classe.js';


let setperso =()=>{
    Class.guerrier.nom = prompt('donnez le nom du guerrier')
    
    

    Class.mage.nom = prompt('donnez le nom du mage')
   

    Class.archer.nom = prompt("donne le nom de l'archer")


    alert('Maintenant repartison les point de pv tu en as 250 pv')

    Class.guerrier.pointDeVie = +prompt( ` indique moi les pv de ${Class.guerrier.nom} `)

    if (Class.guerrier.pointDeVie > 249) {
        alert("non non pas plus de 250")
        
    }
    else(
        Class.mage.pointDeVie = +prompt( ` indique moi les pv de ${Class.mage.nom} `)

        
    )


    if(Class.mage.pointDeVie + Class.guerrier.pointDeVie > 249) {
        alert('non non bg tu as que 250 pv pour les trois ')
    }
    else(
        Class.archer.pointDeVie = +prompt( ` indique moi les pv de ${Class.archer.nom} `)
        
    )



