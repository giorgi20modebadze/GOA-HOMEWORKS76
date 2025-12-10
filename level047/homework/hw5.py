#შექმენით 2 სია, პირველი სია იყოს სავსე 5 ცალი ქალაქის სახელებით, და მეორე სიაში მოთავსებული იყოს 10 ქვეყნის სახელი. თქვენი დავალებაა რომ ქვეყნის სახელებში ჩაამატოთ ყველა ქალაქის სახელები ცალ-ცალკე მენულე ინდექსიდან მეოთხე ინდექსის ჩათვლით. გამოიყენეთ for ციკლი და შესაბამისი ფუნქციები.

cities = ["Tbilisi", "Batumi", "Rustavi", "Zugdidi", "Qutaisi"]

countries = ["Georgia", "France", "Germany", "Italy", "USA",
             "China", "Japan", "Spain", "Brazil", "India"]

for i in range(len(cities)):
    countries.insert(i, cities[i])

print(countries)