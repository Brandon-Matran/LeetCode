def tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest):

    redShirtSpeeds.sort()
    sorted_asc_blue = sorted(blueShirtSpeeds)
    blueShirtSpeeds.sort(reverse=True)

    result = []

    for i in range(len(redShirtSpeeds)):
        if fastest == True:
            result.append(max(redShirtSpeeds[i], blueShirtSpeeds[i]))
        else:
            result.append(max(redShirtSpeeds[i], sorted_asc_blue[i]))

    return sum(result)
