def classPhotos(redShirtHeights, blueShirtHeights):
    # Write your code here.
    if sum(redShirtHeights) > sum(blueShirtHeights):
        for i in range(len(redShirtHeights)):
            if blueShirtHeights[i] <= redShirtHeights[i]:
                continue
            return False
    else:
        for i in range(len(redShirtHeights)):
            if blueShirtHeights[i] > redShirtHeights[i]:
                continue
            else:
                return False
    return True


blueShirtHeights = [2, 4, 7, 5, 1]
redShirtHeights =  [3, 5, 6, 8, 2]

print(classPhotos(redShirtHeights, blueShirtHeights))

#previous commit
