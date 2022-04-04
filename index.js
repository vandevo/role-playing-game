import characterData from "./data.js";
import Character from "./Character.js"

function render() {
   document.getElementById(wizard.elementId).innerHTML = wizard.getCharacterHtml();
   document.getElementById(orc.elementId).innerHTML = orc.getCharacterHtml();
}

function attack(){
   wizard.getDiceHtml()
   orc.getDiceHtml()
   wizard.takeDamage(wizard.currentDiceScore)
   orc.takeDamage(orc.currentDiceScore)
   render()
   if(wizard.dead | orc.dead){
      endGame()
   }
}

function endGame(){
   const endMessage = wizard.health === 0 && orc.health === 0 ? "No victors - all creatures are dead" :
   wizard.health > 0 ? "The wizard wins!" : "The orc wins!"
   console.log(endMessage)

}


document.getElementById('attack-button').addEventListener('click', attack)
const wizard = new Character(characterData.hero)
const orc = new Character(characterData.monster)
render()



