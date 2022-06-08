function scuberGreetingForFeet(feet){
 // Write your code here!
 //let feet=400;
 let greetings='';
  if(feet<=400){
    greetings="This one is on me!";
    return greetings;
  }
  else if(feet>2000 && feet < 2500){
    greetings="I will gladly take your thirty bucks."
    return greetings;

  }
  else if(feet>2500){
    greetings="No can do."
    return greetings;
  }
}
scuberGreetingForFeet(199);




function ternaryCheckCity(city){

  // Write your code here!
  let message="";
    city==='NYC' ? ( message='Ok, sounds good.') : (message='No go.');
    return message;
  }
  ternaryCheckCity('Nairobi');


function switchOnCharmFromTip(tip){
  // Write your code here!

  let greetings=''
    switch(tip){
    case 'generous':
      greetings="Thank you so much."
      return greetings;
      break;
      case  'not as generous':
        greetings='Thank you.';
        return greetings;
        break;
         default:
           greetings="Bye.";
           return greetings;
           break;



  }
  console.log(switchOnCharmFromTip('generous'));
  switchOnCharmFromTip('generous');
  

}