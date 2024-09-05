/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0;
    let start = 0;
    for(let i=1 ; i < prices.length ; i++){
       let profit = prices[i] - prices[start];
       
       if(profit < 0){
         start = i;
       }

       max = Math.max(max,profit);
    }
    return max;
};

//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/