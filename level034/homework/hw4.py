#შექმენით სია სხვადასხვა სიტყვებით. for loop-ით დაბეჭდეთ მხოლოდ ის სიტყვები, რომელთა სიგრძე ზუსტად 5 სიმბოლოა


things = ["batumi", "tbilisi", "სტოლი"]


for i in range(len(things)):
    if len(things[i]) % 5 == 0:
        print(things[i])

