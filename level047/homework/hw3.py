#შექმენით სტრინგებით სავსე სია და ამ სიიდან ამოშალეთ ყველა ის სიტყვა რომელიც არის ან 6-ზე ნაკლები სიგრძეში, ან რომელიც მთავრდება დიდი ასოთი.

list1 = ["dog", "Elephant", "fish", "cat", "apple", "orange"]



new_list = []

for i in list1:
    if not (len(i) < 6 or i[-1].isupper()):
        new_list.append(i)

print(new_list)


