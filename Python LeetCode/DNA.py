def rna_transcription(dna_strand):
    promoter = "TATAAT"
    length = 6
    for i in range(len(dna_strand)):
        if dna_strand[i : i + 6] == promoter:
            transcription_unit_start = i + 10
    dna_dict = {"A": "T", "T": "A", "G": "C", "C": "G"}
    reverse_dna = dna_strand[:transcription_unit_start:-1]
    print("REVERSE", reverse_dna)
    dna = dna_strand[transcription_unit_start + 1 :]
    print("DNA", dna)
    dna_match = ""
    for d in dna:
        if d in dna_dict:
            dna_match += dna_dict[d]
    print("DNA MATCH", dna_match)
    seq1 = []
    seq2 = []

    for i in range(len(reverse_dna) - length):
        seq1.append(reverse_dna[i : i + length])

        seq2.append(dna_match[i : i + length])

    for seq in seq1:
        if seq in seq2:
            print(seq)
            break






dna = "AGATTATATAATGATAGGATTTAGATTGACCCGTCATGCAAGTCCATGCATGACAGC"
print(rna_transcription(dna))
