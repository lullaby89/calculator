
var sum = false;
var operator = false;

function doSum(operatorValue,textBoxVal){
	if(operatorValue === "+") {
		operator = operatorValue;
		if(sum)
			sum += textBoxVal;
		else
			sum = textBoxVal;
		return true;
	}
	else if(operatorValue === "-") {
		operator = operatorValue;
		if(sum)
			sum -= textBoxVal;
		else
			sum = textBoxVal;
		return true;
	}
	else if(operatorValue === "*") {
		operator = operatorValue;
		if(sum)
			sum *= textBoxVal;
		else
			sum = textBoxVal;
		return true;
	}
	else if(operatorValue === "/") {
		operator = operatorValue;
		if(sum)
			sum /= textBoxVal;
		else
			sum = textBoxVal;
		return true;
	}	
	else
		{
		return false;		
	}
}

function setValue(n) {
	var val = n.value;
	var textBox = document.getElementById("text");
	var textBoxVal = parseInt(textBox.value,10);
	var isOperator = doSum(val,textBoxVal);
	
	if(isOperator) {
		textBox.value = "";
	}
	else if(val === "=") {
		doSum(operator, textBoxVal);
		textBox.value = sum;
		sum = false;
	}
	else if(val === "CLR") {
		textBox.value = null;
		sum = false;
	}
	else{
		textBox.value += val;
	}
}

