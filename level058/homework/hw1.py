#შექმენით რიცხვებით სავსე სია, ამ სიიდან იპოვეთ და დაპრინტეთ მეორე ყველაზე დიდი რიცხვი, გამოიყენეთ for ციკლი.

numbers = [3, 5, 78, 43, 98]

maxnumbers = numbers[0]
secondmaxnumbers = numbers[0]



for i in numbers:
    if i > maxnumbers:
        secondmaxnumbers = maxnumbers
        maxnumbers = i
    elif i > secondmaxnumbers and i != maxnumbers:
        secondmaxnumbers = i

print(secondmaxnumbers)

