#შექმენით სია სადაც შეინახავთ სხვადასხვა ქალაქების სახელებს.  
   #for loop ით დაბეჭდეთ მხოლოდ ის ქალაქები, რომელთა სახელის სიგრძე მეტია 6-ზე.

list = ["batumi", "tbilisi", "qutaisi", "rustavi", "poti"]


for i in range(len(list)):
    if len(list[i]) > 6:
        print(list[i])