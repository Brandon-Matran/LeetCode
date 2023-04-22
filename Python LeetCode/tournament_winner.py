def tournamentWinner(competitions, results):
    # Write your code here.
    d = {}
    for competition, result  in zip(competitions, results):
        winner = competition[not result]
        loser = competition[result]

        if winner not in d:
            d[winner] = 0
        d[winner] += 3

    print(d)
    return max(d, key=lambda key: d[key])




competitions =  [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"]
  ]
results = [0, 0, 1]
print(tournamentWinner(competitions, results))

#previous commit
