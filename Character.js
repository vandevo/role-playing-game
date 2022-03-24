import {getDiceRollArray, getDicePlaceholderHtml} from "./utils.js"

function Character(data) {
    Object.assign(this, data)


    this.diceArray = getDicePlaceholderHtml(this.diceCount)

    this.getDiceHtml = function(diceCount) {
        this.currentDiceScore = getDiceRollArray(this.diceCount)
        this.diceArray = this.currentDiceScore.map(function(dice){
            return `<div class="dice">${dice}</div>`
        }).join('')
    }
 

    this.takeDamage = function(){
        console.log(`${this.name}is damaged`)
    }

    this.getCharacterHtml = function () {
        const { elementId, name, avatar, health, diceCount, diceArray } = this;      
        let diceHtml = this.getDiceHtml(diceCount);
        
           return `
            <div class="character-card">
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}" />
                <div class="health">health: <b> ${health} </b></div>
                <div class="dice-container">
                    ${diceArray}
                </div>
            </div>`;
    }  
 }

 export default Character