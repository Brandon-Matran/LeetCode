def rna_transcription(dna_strand):
    promoter = "TATAAT"
    for i in range(len(dna_strand)):
        if dna_strand[i : i + 6] == promoter:
            transcription_unit_start = i + 10
    dna_dict = {"A": "T", "T": "A", "G": "C", "C": "G"}
    reverse_dna = dna_strand[:transcription_unit_start:-1]
    print("REVERSE", reverse_dna)
    dna = dna_strand[transcription_unit_start + 1 :]
    print("DNA", dna)
    t_match = ""
    for d in dna:
        if d in dna_dict:
            t_match += dna_dict[d]
    res = []

    print("______________________", t_match)

    for i in range(len(reverse_dna)):
        for c in t_match:
            if reverse_dna[i] == c:
                res.append(i)
            else:
                



dna = "AGATTATATAATGATAGGATTTAGATTGACCCGTCATGCAAGTCCATGCATGACAGC"
print(rna_transcription(dna))
