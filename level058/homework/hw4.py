#შექმენით არეული რიცხვებით სავსე გრძელი სია და 2 ცარიელი სია, ერთ სიაში ჩააგდეთ ყველა ის რიცხვი რომელიც არის ლუწი და დგას კენტ ინდექსზე, ხოლო მეორე სიაში ჩააგდეთ ყველა ის რიცხვი რომელიც არის ლუწი და დგას კენტ ინდექსზე, გამოიყენეთ for ციკლი.


numbers = [12, 7, 8, 3, 14, 9, 6, 5, 10, 11, 4, 13]


odd_numbers = []

even_numbers = []


for i in range(len(numbers)):
    if i % 2 != 0 and numbers[i] % 2 == 0:
        even_numbers.append(numbers[i])
    elif i % 2 != 1 and numbers[i] % 2 != 0:
        odd_numbers.append(numbers[i])

print(even_numbers)
print(odd_numbers)
