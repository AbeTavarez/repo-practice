
#* ==== Demo func 1
def demo(x):
    y = x + 3
    return y

# print(demo(3))


#* ==== Demo func 2
a = 3
b = 2
c = 1
def demo2():
    y = (a + b + c)
    return y
# print(demo2() )




#* ============ Simple function

def greet_user():
    print('Hello there!')
    
# print(greet_user() )


def greet_user2(name):
    print('Hello' + ' ' + name)

# print(greet_user2('Abraham'))



#* =========== args functions
def mySum(num1, num2):
    return num1 + num2

result = mySum(3,3)
# print(result)






def sum2():
    num1 = input('Enter a number 1: ')
    num2 = input('Enter a number 2: ')
    sum = float(num1) + float(num2)
    return int(sum)

print(sum2())



#* ================================================== 
myList = ['a', 'b', 'c']

def double(list):
    doubleList = [letter + letter for letter in list]
    return doubleList

# print(double(myList))

