#1) მომხმარებელს შემოატანინეთ სიტყვა.  
#-> იტერაციით გაიარეთ თითო ასო  
#-> თუ შეხვდებით ასო 'e'-ს ან 'E'-ს გაჩერდით (break)  
#-> დაბეჭდეთ მხოლოდ ის ასოები, რაც მანამდე იყო  


word = input("please enter word: ")

for letter in word:
    if letter == 'e' or letter == 'E':
        break
    print(letter)

