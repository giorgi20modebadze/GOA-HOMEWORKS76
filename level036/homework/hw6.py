#6) შექმენით უსასრულო while loop:
#--> სანამ მომხმარებელი არ შემოიყვანს 'python is best', მანამდე დაპრინტეთ 'you should learn python'


while True:
    text = input("enter the text: ")
    
    if text == "python is best":
        break
    
    print("you should learn python")
