let result = document.getElementById("result")
let resultStyle = result.style;

function submit() {
  const height = document.getElementById("height").value
  
  const weight = document.getElementById("weight").value
  
  
  if (!height || !weight) {
    resultStyle.fontSize = "18px";
    result.textContent = "Please fill the form correctly";
  }else{
    
    let bmiPrimary = weight / ( (height/100) * (height/100))
    
    let bmi = bmiPrimary.toFixed(2);
    
    if (bmi >= 18.6 && bmi <= 24.9) {
      result.textContent = bmi;
      resultStyle.fontSize = "40px";
      resultStyle.backgroundColor = "green";
      resultStyle.color = "white";
      //result.textContent = bmi;
      
    } else if (bmi < 18.6) {
      result.textContent = bmi;
      resultStyle.fontSize = "40px";
      resultStyle.backgroundColor = "yellow";
      resultStyle.color = "black";
      result.textContent = bmi;
      
    } else if (bmi > 24.9) {
      
      resultStyle.fontSize = "40px";
      resultStyle.backgroundColor = "red";
      resultStyle.color = "white";
      result.textContent = bmi;
      
    }
  }
}
