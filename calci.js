
function display_digit (val) {
	

	var s = document.querySelector("#submit")
	console.log(s)
	
	var v = document.querySelector("#screen").value+=val;
	console.log(v)
	
}

function clear(){
	var c = document.querySelector("#clear")
	c.addEventListener("click",function(){
		document.querySelector("#screen").value = ""

	})
	
}clear()


function solution(){
	var d = document.querySelector("#screen").value;
	console.log(d)
	
	var y = eval(d)
	console.log(y)
	console.log(document.querySelector("#screen").value = y)
	
	
	


}

	

	

