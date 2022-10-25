var twoSum = function(nums, target) {
    for(let i=0;i<nums.length-1;i++){
        for(let j=i+1;i<nums.length-1;i++){
            if(nums[i]+nums[j]===target){
                return [i,j]
                break
            }
        }
    }
};