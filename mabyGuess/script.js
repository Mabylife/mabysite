let tries = 0;
document.getElementById("ans1").innerHTML = " ";
document.getElementById("ans2").innerHTML = " ";
document.getElementById("ans3").innerHTML = " ";
document.getElementById("ans4").innerHTML = " ";
let count = 1;
let standard = {
 real1: Math.floor(Math.random()*10),
 real2: Math.floor(Math.random()*10),
 real3: Math.floor(Math.random()*10),
 real4: Math.floor(Math.random()*10),
};
const standardDis = `${standard.real1}${standard.real2}${standard.real3}${standard.real4}`;
for(let i=1; i<=4; i++){
console.log(standard["real" + i]);
}

function number(num){
	let indexAns = document.getElementById("ans" + count);
	indexAns.innerHTML = num; 
  if (count <= 4){
  count += 1;
  }else{
  count = 4;
  }
}

function del(){
 count -= 1;
 let indexAns = document.getElementById("ans" + count);
 indexAns.innerHTML = " ";
}

function ans(index){
let indexAns = document.getElementById("ans" + index);
indexAns.innerHTML = " ";
if(index > count){

}else{
count = index;
}
}

function enter() {
if(
(document.getElementById("ans1").innerHTML === " ") || (document.getElementById("ans2").innerHTML === " ") || (document.getElementById("ans3").innerHTML === " ") || (document.getElementById("ans4").innerHTML === " ")
){
return;
}
		let tempDis = {
        tempDis1: document.getElementById("ans1").innerHTML,
        tempDis2: document.getElementById("ans2").innerHTML,
        tempDis3: document.getElementById("ans3").innerHTML,
        tempDis4: document.getElementById("ans4").innerHTML,
    };
    let temp = {
        temp1: parseInt(document.getElementById("ans1").innerHTML),
        temp2: parseInt(document.getElementById("ans2").innerHTML),
        temp3: parseInt(document.getElementById("ans3").innerHTML),
        temp4: parseInt(document.getElementById("ans4").innerHTML),
    };

    let trueA = 0;
    let trueB = 0;
    let used = [];

    for (let x = 1; x <= 4; x++) {
        let alreadyA = false;
        let alreadyB = false;

        for (let i = 1; i <= 4; i++) {
            if ((standard["real" + x] === temp["temp" + i]) && (!used.includes(i))) {
                if (x === i) {
                    alreadyA = true;
                    used.push(i);
                    break;
                } else{
                    alreadyB = true;
                    used.push(i);
                }
            }
        }

        if (alreadyA) {
            trueA ++;
        } else if (alreadyB) {
            trueB ++;
        }
    }
			console.log("trueA: " + trueA + ", trueB: " + trueB);
			//start output
			const old = tempDis.tempDis1 + tempDis.tempDis2 + tempDis.tempDis3 + tempDis.tempDis4;
			const outputDiv = document.getElementById("output");
 			const newLine = document.createElement("p");
 			newLine.textContent = old + ": " + trueA + "A" + trueB + "B" + " | ";
 			outputDiv.appendChild(newLine);
 			tries ++;
 			document.getElementById("ans1").innerHTML = " ";
    		document.getElementById("ans2").innerHTML = " ";
    		document.getElementById("ans3").innerHTML = " ";
    		document.getElementById("ans4").innerHTML = " ";
    		count = 1;
			if(tries >= 10){
			end("Lose");
			}
			if(trueA === 4){
			end("Win");
			}
}

function end(rs){
 document.getElementById("overlay").style.visibility = "visible";
 document.getElementById("result").innerHTML = "You " + rs;
 if (rs === "Win"){
 document.getElementById("result").style.color = "green";
 }else{
 document.getElementById("result").style.color = "red";
 }
 document.getElementById("realAnswer").innerHTML = standardDis;
 document.getElementById("tries").innerHTML = tries;
}


