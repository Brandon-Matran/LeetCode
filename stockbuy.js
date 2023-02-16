var maxProfit = function (prices) {
  let i = 0; //buy
  let j = 1; //sell
  let maxProfit = 0; //create a variable to store the maxProfit and update it as needed
  while (i < prices.length) { //create a while loop to loop through the length of the array
    if (prices[i] < prices[j]) { //only perform a check for profit if the sell value is higher than the buy value
        profit = prices[j] - prices[i]; //get profit by subtracting sell from buy
        maxProfit = Math.max(maxProfit, profit); //store the maxProfit in a set
    } else {
        i = j // have i catch up to j
    }
    j++ //always increment j so that we can continue to check the rest of the prices in the array
}
return maxProfit;


};

prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices))
