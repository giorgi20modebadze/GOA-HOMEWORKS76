# შექმენით 2 სია - სახელების და გვარების. for ციკლის და ფუნქციების გამოყენებით სახელების სიაში ყველა სახელის ყველა ასო გახადეთ დიდი, ხოლო გვარების სიაში ყველა გვარის თითოეული ასო გახადეთ პატარა, სულ ბოლოს კი გააერთიანეთ სახელების სია გვარის სიასთან და დაპრინტეთ მიღებული შედეგი.


names = ["mate", "nika", "levani", "giorgi", "gegi", "sandro", "gigi"]

surnames = ["Ninoshvili", "MODEBADZE", "XVEDELIDZE", "CERCVADZE"]



for i in range(len(names)):
    names[i] = names[i].upper()

for i in range(len(surnames)):
    surnames[i] = surnames[i].lower()

names.extend(surnames)


print(names)



