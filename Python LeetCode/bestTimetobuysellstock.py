class Solution:
    def maxProfit(self, prices: list[int]) -> int:
        #establish two pointers one that is for the day to buy stock and one for the day to sell stock
        buy = 0
        sell = 1

        #create a counter variable that will hold the value of the max profit
        maxP = 0

        #while loop to iterate through the elements in the array, we want to iterate through the len of the prices list
        while sell < len(prices):
            #subtract the sell price from the buy price
            profit = prices[sell] - prices[buy]
            if profit < 0:
                buy += 1
            #initialize that value to the max profit variable
            maxP = max(maxP, profit)

            sell +=1

            #return max profit
        return maxP


prices = [2,1,2,1,0,1,2]
sol = Solution()
print(sol.maxProfit(prices))
