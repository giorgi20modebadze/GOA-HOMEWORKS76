# შექმენით სახელებით სავსე სია და ასევე ცარიელი სია: Upper_name = [].  სახელების სიიდან ცარიელ სიაში ჩაამატეთ ყველა ის სახელი რომელიც იწყება დიდი ასოთი, გამოიყენეთ for ციკლი და შესაფერისი სიის და სტრინგის ფუნქციები.



list = ["dog", "Elephant", "fish", "cat", "apple", "orange"]

Upper_name = []

for i in range(len(list)):
    if list[i][0].isupper():
        Upper_name.append(list[i])

print(Upper_name)

