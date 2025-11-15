#მომხმარებელს შემოატანინე წინადადება.გაიგე რამდენი სიმბოლოა წინადადებაში. for ციკლით დათვალე რამდენი აso "a" ან "A" არის ტექსტში.

sentence = input("enter your sentence: ")


sum = 0
for i in sentence:
    if i == 'a' or i == 'A':
        sum += 1
print(sum)
