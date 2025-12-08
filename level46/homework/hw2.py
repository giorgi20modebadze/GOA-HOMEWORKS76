# შექმენით სია რომელშიც იქნება მხოლოდ სტრინგ მონაცემთა ტიპის ელემენტები, ამ სიის ბოლოში ცალ-ცალკე მეორედ ჩაამატე ყველა ის სიტყვა რაც უკვე არის ამ სიაში, გამოიყენეთ for ციკლი და სიის შესაბამისი ფუნქცია.


names = ["mate", "nika", "levani", "giorgi", "gegi", "sandro", "gigi"]

length = len(names)   

for i in range(length):
    names.append(names[i])

print(names)
