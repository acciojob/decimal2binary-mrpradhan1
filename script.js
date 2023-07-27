function decimalToBinary(num) {
  //Write you code here
	let str ="";
	while(num>0){
		let rem= num%2;
		str +=rem;
		num=Math.floor(num/2);
	}
  console.log(decimalToBinary(7));
console.log(decimalToBinary(10)); 
console.log(decimalToBinary(33));
}

window.decimalToBinary = decimalToBinary;
