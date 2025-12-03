#შექმენით სახელებით სავსე სია და ამ სიიდან ამოშალეთ ყოველი ის სიტყვა რომელიც იწყება ასო გ-თი და მთავრდება ასო ი-თი, გამოიყენეთ for ციკლი, დაწერეთ ორივე ხერხით, pop() ფუნქციითაც და remove() ფუნქციითაც.


names = ["mate", "nika", "levani", "giorgi", "gegi", "sandro", "gigi"]

for i in names[:]:
    if i[0] == "g" and i[-1] == "i":
        names.remove(i)

print(names)







