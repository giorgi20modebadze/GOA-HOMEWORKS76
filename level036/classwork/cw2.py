#მომხმარებელს შემოატანინეთ ტექსტი. დაუარეთ ამ ტექტის ასოებს for ლუპით. თუ ასო არის 'a' ან 'A' დასკიპეთ, სხვა შემთხვევაში დაპრინტეთ ასო

text = input("enter your sentence")


for i in text:
    if i == 'a' or i == 'A':
        continue 
    print(i)
