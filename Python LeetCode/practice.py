def mergeOverlappingIntervals(intervals):
    new_intervals = sorted(intervals, key=lambda x: x[0])
    currentInterval = new_intervals[0]
    res = [currentInterval]
    for nextInterval in new_intervals:
        if currentInterval[1] > nextInterval[0]:
            currentInterval[1] = max(currentInterval[1], nextInterval[1])
        else:
            currentInterval = nextInterval
            res.append(currentInterval)
    return res








intervals = [[1,2], [3,5], [4,7], [6,8], [9,10]]
print(mergeOverlappingIntervals(intervals))
