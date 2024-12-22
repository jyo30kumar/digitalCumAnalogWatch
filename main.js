const secondElement = document.getElementById("second-hand");
const minuteElement = document.getElementById("minute-hand");
const hourElement = document.getElementById("hour-hand");

var second = 0;
var minute = 0;
var hour = 0;
var d = new Date();

const secondHandHeight = 150;
const minuteHandHeight = 150;
const hourHandHeight = 100;

const numLabels = 5;

const secondLabelSteps = secondHandHeight/numLabels;
const minuteLabelSteps = minuteHandHeight/numLabels;
const hourLabelSteps = hourHandHeight/numLabels;

// declare function for creating label 
function createLabelDiv(numOfLabels, labelSteps, timeElement, divClass){
  for(var i=0; i<numOfLabels;i++)
    {
      const label = document.createElement("div");
      label.classList.add(divClass);
      label.style.bottom = `${i * labelSteps}px`;
      timeElement.appendChild(label);
    }    
}

// declare function for updating label 
function updateLabel(labelElement, currentTimeUnit){
  labelElement.forEach(label =>{
    label.textContent = currentTimeUnit;
  })
}

// create label div 
createLabelDiv(numLabels, minuteLabelSteps, minuteElement, "minute");
createLabelDiv(numLabels, hourLabelSteps, hourElement, "hour");
createLabelDiv(numLabels, secondLabelSteps, secondElement, "second");

setInterval(()=>{
  d = new Date();
  second = d.getSeconds() * 6;
  minute = d.getMinutes() * 6;
  hour = d.getHours() * 30 + Math.round(minute / 12);
  secondElement.style.transform = `rotate(${second}deg)`;
  minuteElement.style.transform = `rotate(${minute}deg)`;
  hourElement.style.transform = `rotate(${hour}deg)`;

  //update time in boxes
  const currentSecond = d.getSeconds();
  const currentMinute = d.getMinutes();
  const currentHour = d.getHours();
  const secondLabels = document.querySelectorAll(".second");
  const minuteLabels = document.querySelectorAll(".minute");
  const hourLabels = document.querySelectorAll(".hour");

  updateLabel(secondLabels, currentSecond);
  updateLabel(minuteLabels, currentMinute);
  updateLabel(hourLabels, currentHour);
},1000);