//NUMBER GUESSING GAME
//a very simple program to practice basic js, html and css skills. 
const minNum = 1;
const maxNum = 100;
//Math.random() generates a number between 1 and 10, so we multiply it with our range to be able to get numbers outside of 1-10
//I use Math.floor() to round down
const solution = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);

let attempts = 0;
let guess;
let running = true;

while (running)
{
    guess = window.prompt("Guess a number between "+ minNum + "-" + maxNum + "!");
    guess = Number(guess);
    if(isNaN(guess))
    {
        window.alert("Please enter a valid number");
        console.log("Guess not a number");
    }
    else if (guess < minNum || guess > maxNum)
    {
        window.alert("Please enter a valid number");
        console.log("Guess out of range");
    }
    else {
        attempts++;
        if(guess < solution)
        {
            window.alert("Too low, try again");
        }
        else if (guess > solution){
            window.alert("Too high, try again");
        }
        else if (guess == solution)
            {
                window.alert("CORRECT, The answer was " + solution + " it took you " + attempts + " attenpts");
                running = false;
            }
        
    }
    console.log(typeof guess, guess);
}