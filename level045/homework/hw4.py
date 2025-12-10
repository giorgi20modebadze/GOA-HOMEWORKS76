#შექმენით სტრინგებით სავსე სია, და ამ სიიდის ყველა ის სიტყვა რომლის პირველი ასო არის Uppercase-ში და რომელიც ამავდროულად დგას კენტ ინდექსზე სიაში, გაუხადეთ ასეთ სიტყვებს ყველა ასო პატარა - lowercase, ხოლო ყველა ის სიტყვა რომლის პირველი ასო არის Uppercase-ში და თან ეს სიტყვა დგას ლუწ ინდექსზე სიაში, ამოშალეთ სიიდან. დაპრინტეთ შეცვლილი სია.


names = ["mate", "Nika", "levani", "Giorgi", "gegi", "Sandro", "Gigi"]



i = 0
while i < len(names):
    if names[i][0].isupper() and i % 2 == 0:
        names.pop(i)
    else:
        i += 1


for i in range(len(names)):
    if names[i][0].isupper() and i % 2 == 1:
        names[i] = names[i].lower()

print(names)


