# შექმენით სიტყვებით სავსე სია და ამ სიაში ყველა ისეთ სიტყვას რომელიც იწყება პატარა ასოთი, პირველი ასო გაუხადეთ დიდი. გამოიყენეთ for ციკლი და სტრინგის შესაბამისი ფუნქცია.


names = ["mate", "Nika", "Levani", "Giorgi", "gegi", "Sandro", "gigi"]

for i in range(len(names)):
    if names[i][0].islower():
        names[i] = names[i].capitalize()

print(names)
    
    