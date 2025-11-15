#შექმენით სია სადაც შეინახავთ სხვადასხვა სტრინგებს. დაპრინტეთ ამ სიიდან ყველაზე გრძელი სტრინგი


list = ["giorgi", "zero", "5", "49.8"]

longest_item = list[0]

for i in list:
    if len(i) > len(longest_item):
        i = longest_item


print(longest_item)