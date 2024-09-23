let calculateResult = (num) => {
  num = parseInt(num);
  let grade = "";
  let result = "";
  if (num >= 90 && num <=100) {
    grade = "A+";
    result = "Pass";
  } else if (num >= 80 && num <= 89) {
    grade = "A";
    result = "Pass";
  } else if (num >= 70 && num <= 79) {
    grade = "B+";
    result = "Pass";
  } else if (num >= 60 && num <= 69) {
    grade = "B";
    result = "Pass";
  } else if (num >= 50 && num <= 59) {
    grade = "C+";
    result = "Pass";
  } else if (num >= 40 && num <= 49) {
    grade = "C";
    result = "Pass";
  } else if (num >= 30 && num <= 39) {
    grade = "D+";
    result = "Pass";
  } else if (num >= 20 && num <= 29) {
    grade = "D";
    result = "Fail";
  } else if(num >= 0 && num <=19){
    grade = "E";
    result = "Fail";
  }else{
    grade = "Invalid";
    result = "Invalid Score; Enter mark between 0 to 100"
  }
  document.getElementById("result").innerHTML = `Result: ${result}`;
  document.getElementById("grade").innerHTML = `Grade: ${grade}`;
};
