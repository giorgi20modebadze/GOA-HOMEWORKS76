#4) მომხმარებელს შემოატანინეთ წინადადება.  
#-> დაუარეთ მას for ლუპით  
#-> გამოტოვეთ ხმოვნები (a, e, i, o, u)  
#-> დაბეჭდეთ მხოლოდ თანხმოვნები და თავისთავათ ყველა სხვა სიმბოლო 



sentence = input("enter the sentence: ")

result = ""

for i in sentence:
    if i in ("a", "e", "i", "o", "u"):
        continue
print(i)
