#შექმენი ფუნქცია ერთი პარამეტრით — number.

#ფუნქციამ უნდა დააბრუნოს, ლუწია თუ კენტი.

#გამოიძახე ფუნქცია რამდენჯერმე სხვადასხვა არგუმენტებით


def nums(number):
    if number % 2 == 0:
        return "luwia"
    else:
        return "kentia"
    
print(nums(6))
print(nums(11))
print(nums(12))
print(nums(5))

    