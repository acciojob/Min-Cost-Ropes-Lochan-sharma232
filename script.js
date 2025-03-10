function mincost(arr)
{ 
	arr.sort((a,b)=>a-b)
	let sum=0;
	while(arr.length>1){
		let demo=arr[0]+arr[1];
		arr.shift()
		arr.shift()
	sum+=demo;
		arr.push(demo);
		arr.sort((a,b)=>a-b)
	}
	return sum;
	//write your code here
// return the min cost
  
}
module.exports=mincost;
