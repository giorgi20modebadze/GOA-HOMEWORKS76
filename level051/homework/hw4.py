#შექმენით სტრინგებით სავსე სია, წაშალეთ ის სტრინგ მონაცემთა ტიპის ელემენტები რომლებიც არიან 4-ზე მეტი სიგრძეში ან დგანან კენტ ინდექსზე. გამოიყენეთ remove() ფუნქცია.


names = ["giorgi", "mariami", "tato", "tamuna", "nino", "qeti"]

for i in names[:]:
    if len(i) > 4 and names.index(i) % 2 == 1:
        names.remove(i)

print(names)
    
