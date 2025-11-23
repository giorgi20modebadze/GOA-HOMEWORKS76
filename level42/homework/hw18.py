#18)შექმენი სია nums = [10, 20, 30]. მომხმარებელს შემოატანინე მთელი რიცხვი. თუ რიცხვი nums სიაშია, დაბეჭდე "Already in list", თუ არა — append()-ით დაამატე 40 და დაბეჭდე სია.



nums = [10, 20, 30]

number = input("enter your number: ")

if number in nums:
    print("Already in list")

if number not in nums:
    nums.append(40)
    print(nums)


