
// setup container div
const container = document.createElement('div'); //create div
container.className = 'header-container';  // create class name for div

//button div -- Do I need this?
const buttonDiv = document.createElement('div'); //create div for button

// dice div
const diceDiv = document.createElement('div'); //create div for dice
diceDiv.id = 'diceDivId'; // create ID for dice div


container.appendChild(buttonDiv);
container.appendChild(diceDiv);
document.body.appendChild(container);

let myButtonsDiv = document.getElementById('myButtonsDiv');

// create button elements:
let newDie = document.getElementById('newDie'); // new
let rollDie = document.getElementById('rollDie'); //roll
let sumDie = document.getElementById('sumDie'); // sum

const globalArr = [];

let divCounter = 1; 


class Die {
    
    constructor() {
        
        this.div = document.createElement('div');
        this.div.className = 'die';
        this.div.id = divCounter; 
        diceDiv.appendChild(this.div);
       
        globalArr.push(this);
       
        this.addEvents(); 

        this.roll();
    }

    

    // this is the roll method
    randoNum(){
        let randoNum = Math.floor(Math.random()*6);
        return randoNum+1;
    }
    
    roll(){
        this.value = this.randoNum();
        this.div.textContent = this.value;
    }


    addEvents(){
        
         //  Die (Click Event) ------------------------------
        this.div.addEventListener('click', () => this.roll()) 

        // Double click = REMOVE CHILD
        this.div.addEventListener('dblclick', () => {  
            
            let dieIndex = globalArr.indexOf(this);
            globalArr.splice(dieIndex,1);
            diceDiv.removeChild(this.div);

            //globalArr.pop(this.value);
            console.log(this.div);
            console.log(globalArr);
        });
    }     
}

newDie.addEventListener('click', () =>{  
    new Die ();
    
console.log(globalArr);
console.log(divCounter);
divCounter += 1;  
});

rollDie.addEventListener('click', () => globalArr.forEach((die) =>die.roll()));

// loops through die array and finds sum
sumDie.addEventListener('click', () =>{  
    let result = 0; 
    for (let i = 0; i<globalArr.length; i++){
       result += globalArr[i].value; 
       console.log(globalArr);

    }
    console.log(`Sum Die! ${result}`);
    alert( `Sum of dice is = ${result}`);
    return result;
    });



