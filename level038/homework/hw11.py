#მომხმარებელს შემოაყვანინე ორი რიცხვი start , end და step , თქვენი დავალებაა დაატრიალოთ ფორ ციკლი start იდან end ამდე და სტეპი იყოს step,ამ დიაპაზონში გამოიტანეთ ტერმინალში მხოლოდ ლუწი რიცხვები


start = int(input("please enter starting numbers: "))
end = int(input("please enter ending numbers: "))
step = int(input("please enter step: "))

for num in range(start, end, step):
    if num % 2 == 0:  
        print(num)
