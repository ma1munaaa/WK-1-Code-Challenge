WK-1-Code-Challenge

//function gradeGenerator that takes in an input between 0-100 and returns the output of the correct grade

function gradeGenerator(number) {
    if (number > 79)
        return "A";
} if (number => 60 && number <= 79){
    return "B";
}else if (number => 49 && number <= 59 ){
    return "C-";
}else if (number => 40 && number <= 49){
    return "D-";
}else if (number < 40) {s
    return "E";
  }
 
 // If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

 // For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.
  
 fucntion(speedChecker) (speed)
    {
 }
    let maxSpeed = 70;
    let pointDeduction = 5;
    if(speed < maxSpeed){
        console.log(ok);
        return;
    } 
    let reducePoints = (speed - maxSpeed) / pointDeduction;
  if (reducePoints >= 12) {
    console.log("License suspended");
    return;
  } else {
    console.log(
      `You have been deducted ${reducePoints} points from your licence`
    );
  }

// function calculate P.A.Y.E depending on the tax bracket

function payeCalculator (){
    let salary = parseFloat(prompt ("Enter your gross salary"));
    if (salary <= 24000) {
        console.log(salary - salary * 0.01);

    } esle if (salary >= 24001 && salary == 32333){
        console.log(salary - salary * 0.25);
      } else {
        salary > 32333;
        console.log(salary - salary * 0.3);
      }
      let deductions = parseFloat(prompt("Enter your monthly deductions"));
      const netPay = salary - deductions;
      return prompt(`Your  monthly salary amounts to ${netPay}`);
    }
    payeCalculator();


 