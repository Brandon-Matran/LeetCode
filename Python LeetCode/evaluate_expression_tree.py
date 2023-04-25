# This is an input class. Do not edit.
class BinaryTree:
    def __init__(self, value, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right


def evaluateExpressionTree(tree):
    if tree.value >= 0:
        return tree.value
    left_value = evaluateExpressionTree(tree.left)
    print(left_value, "LEFT")
    right_value = evaluateExpressionTree(tree.right)
    print(right_value, "RIGHT")

    if tree.value == -1:
        return left_value + right_value
    if tree.value == -2:
        return left_value - right_value
    if tree.value == -3:
        return int(left_value / right_value)
    if tree.value == -4:
        return left_value * right_value


# Create the expression tree from the input JSON
# Note: In Python, 'null' in JSON is represented as 'None'
tree1 = BinaryTree(-1,
                  BinaryTree(2),
                  BinaryTree(-2,
                             BinaryTree(4),
                             BinaryTree(5)
                             )
                  )

# Evaluate the expression tree and print the result
result = evaluateExpressionTree(tree1)
print("Result:", result)

#previous commit
