#შექმენით სტრინგის ცვლადი და ცარიელი სია. სტრინგში მყოფი დიდი ასოები გახადეთ პატარა და ამ სიაში ჩაამატეთ, ხოლო სტრინგში მყოფი პატარა ასოები გახადეთ დიდი და ასევე ჩააგდეთ ამ სიაში. დაპრინტეთ საბოლოო სია, გამოიყენეთ while ციკლი.

list1 = "What iS ThIs"

list2 = []

i = 0

while i < len(list1):
    if list1[i] == list1[i].upper():
        list2.append(list1[i].lower())
    else:
        list2.append(list1[i].upper())

    i += 1

print(list2)








