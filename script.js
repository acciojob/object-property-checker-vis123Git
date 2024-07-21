const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
	if(sampleObject[key]){
		return true;
	}else{
		return false
	}
}

const key = prompt("Enter Key.");
alert(hasKey(key));
