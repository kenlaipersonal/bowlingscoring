// Question to the user
console.log("Please enter comma-separated line of numbers representing the number of pins knocked down per bowl:");

// Get the input from the user

var stdin = process.openStdin();				
stdin.addListener("data", function(d) {
	var input = d.toString().trim(); 
	var chars = input.split(',').map(Number); // Split from "," and convert to the number
		
	// Put into array of 10
	var result=[];
	chars[chars.length]=0;
	chars[chars.length]=0;
	chars[chars.length]=0;
	
	/* Check the all array
	for (var i = 0; i < chars.length; i++) {
		console.log("chars["+i+"]: "+chars[i]);
	}
	*/
	
	for (var i = 0; i < chars.length; i++) {
		
		//console.log("gg:"+i);
		
		if (chars[i]==10){ // X
			result.push(chars[i]+chars[i+1]+chars[i+2]);
		
		}else if (chars[i]<10 && (chars[i]+chars[i+1])<10){ // 3+5
			result.push(chars[i]+chars[i+1]);
			i=i+1;
		}else if (chars[i]==0 && chars[i+1]==10){ // 0+10
			result.push(chars[i+1]+chars[i+2]+chars[i+3]);
			i=i+1;
		}else if (chars[i]<10 && (chars[i]+chars[i+1])==10){ // 3+7
			result.push(chars[i]+chars[i+1]+chars[i+2]);
			i=i+1;
		}
			
	}
	
	// Total score
	var total=0;
	for (var i = 0; i < result.length; i++) {
		if (i<=9 && result!=null){ // Total 10 box
			console.log("result["+i+"]: "+result[i]);
			total+=result[i];
		}
	}
	console.log("Result:"+total +"\n");
	console.log("Please enter comma-separated line of numbers representing the number of pins knocked down per bowl:");

});