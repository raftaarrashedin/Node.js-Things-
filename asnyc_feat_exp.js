// This is just show that how node.js work in asynchronous mode
console.log("Starting.....")

setTimeout(() =>{
	console.log("Loading.....")
})

console.log("Ending.....")

let a = 20;
let b = 0;
let waitingData = new Promise((resolve,reject) => {
	setTimeout(() => {
		resolve(30)
	},2000)
})

waitingData.then((data) =>{
	b = data;
	console.log(a+b)
})