function mincost(arr)
{ 
	var first=num;
	var second=num;
	for(let i=0;i<arr.length;i++){
		if(arr[i]>first){
			second=first;
			first=arr[i];
		}
		else if(arr[i]>second && arr[i]<first){
			second=arr[i];
			
		}
	}
	return second;
//write your code here
// return the min cost
  
}

module.exports=mincost;
