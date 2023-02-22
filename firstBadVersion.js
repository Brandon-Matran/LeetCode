var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let lo = 1
        let hi = n
        while (lo <= hi) {
            let mid = Math.floor((lo + hi)/2)
            if (isBadVersion(mid)) {
                hi = mid - 1
            } else {
                lo = mid + 1
            }
        }
        return lo
    };
};
