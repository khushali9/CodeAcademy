var userChoice=prompt( "Do you choose rock, paper or scissors?");
var computerChoice=Math.random();
console.log(computerChoice);
if(computerChoice>=0 && computerChoice<=0.33)
{
    computerChoice="rock";
}
else if(computerChoice>=0.34 && computerChoice<=0.66)
{
    computerChoice="paper";
}
else(computerChoice>=0.67 && computerChoice<=1)
{
    computerChoice="scissors";
}
compare(userChoice,computerChoice);
function compare(choice1, choice2){
    
    if(choice1 === choice2)
    return "The result is a tie!";
    
    else if(choice1 === "rock"){
        if(choice2 === "scissors")
        return "rock wins";
        else 
        return "paper wins";
    }
    
    else if(choice1 === "paper"){
        if(choice2 === "rock")
        return "paper wins";
        else 
        return "scissors wins";
    }
}

//for loop syntex
//for(var i="0";i<text.length;i++)//no length(), i=0 not ok do i="0"

//empty array var i=[];

//var slaying = true;
//while(slaying)

//var smart = prompt("Are you smart?").toUpperCase();

//switch(troll) {
  //  case 'FIGHT':
    // break;
     //case 'PAY':
     // break;
     // default:
     // console.log("I didn't understand your choice. Hit Run and try again, this time picking FIGHT, PAY, or RUN!");
 // }


// create obj

//another way for object 



