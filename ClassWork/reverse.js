//Reverse 2-pointer function
let nums = [2,5,7,3,1,6,7];
if(nums.length > 1){
let left = 0;
let right = nums.length - 1;

while(left < right){
    
    [nums[left],nums[right]] = [nums[right],nums[left]];
     
    left++;
    right--;
}
console.log(nums);
}