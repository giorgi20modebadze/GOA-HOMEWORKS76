#შექმენით სია რომელშიც იქნება მხოლოდ int მონაცემთა ტიპის ელემენტები, ამ სიიდან ამოშალე ყოველი რიცხვი რომელიც არის ლუწი ან დგას კენტ ინდექსზე სიაში, გამოიყენეთ remove() ფუნქცია და for ციკლი.


numbers = [3, 5, 6, 8, 13, 16, 19]

for i in range(len(numbers[:])):   
    num = numbers[i]
    if num % 2 == 0 or i % 2 != 0:
        numbers.remove(num)

print(numbers)
