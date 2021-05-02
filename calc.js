function calc(){
	var c = document.getElementById('c').value;
	var i = document.getElementById('i').value;
	var t = document.getElementById('t').value;
	var result = c * i * t / 100;
	var div = document.getElementById('in');
	div.innerText=result + " R$ de juros";
}