function mincost(arr)
{ 
	var first;
	var mincost;
	for(let i=0;i<arr.length;i++){
		if(arr[i]>first){
			second=first;
			first=arr[i];
		}
		else if(arr[i]>second && arr[i]<first){
			second=arr[i];
			
		}
	}
	return mincost;
//write your code here
// return the min cost
  
}
module.exports=mincost;
