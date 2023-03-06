function(n) {
    let lo = 1
    let hi = n
    while (lo <= hi) {
        let middle = Math.floor((lo + hi) / 2)
        if (isBadVersion(middle)) {
            hi = middle
        } else {
            lo = middle - 1
        }
    }
    return lo
}
