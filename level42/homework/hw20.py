#20)შექმენი სია values = [1, 2, 3, 4]. მომხმარებელს შემოატანინე ინდექსი. თუ ინდექსი სიის ფარგლებშია, pop()-ით ამოშალე შესაბამისი ელემენტი; თუ არა, დაბეჭდე "Index out of range". ბოლოს დაბეჭდე სია.


values = [1, 2, 3, 4]

num = int((input("enter your num: ")))

if num < len(values):
    values.pop(num)

else:
    print("Index out of range")

print(values)












