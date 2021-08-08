
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

# print(sum2())



#* ================================================== 
myList = ['a', 'b', 'c']

def double(list):
    doubleList = [letter + letter for letter in list]
    return doubleList

# print(double(myList))

#* ===============================
#Exercise 1: A User-Defined Function
def getDoubleAlphabet(alphabet):
   doubleAlphabet = alphabet + alphabet
   return doubleAlphabet


#Exercise 2: Get a Message to Encrypt
def getMessage():
   stringToEncrypt = input("Please enter a message to encrypt: ")
   return stringToEncrypt


#Exercise 3: Get a Cipher Key
def getCipherKey():
   shiftAmount = input( "Please enter a key (whole number from 1-25): ")
   return shiftAmount

#Exercise 4: Encrypt a Message
def encryptMessage(message, cipherKey, alphabet):
    encryptedMessage = ""
    uppercaseMessage = ""
    uppercaseMessage = message.upper()
    for currentCharacter in uppercaseMessage:
        position = alphabet.find(currentCharacter)
        newPosition = position + int(cipherKey)
        if currentCharacter in alphabet:
            encryptedMessage = encryptedMessage + alphabet[newPosition]
        else:
            encryptedMessage = encryptedMessage + currentCharacter
    return encryptedMessage


#Exercise 5: Decrypt a Message
def decryptMessage(message, cipherKey, alphabet):
    decryptKey = -1 * int(cipherKey)
    return encryptMessage(message, decryptKey, alphabet)

# ================ Exercise 6: A Main Function
def runCaesarCipherProgram():
    myAlphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    print(f'Alphabet: {myAlphabet}')
    myAlphabet2 = getDoubleAlphabet(myAlphabet)
    print(f'Alphabet2: {myAlphabet2}')
    myMessage = getMessage()
    print(myMessage)
    myCipherKey = getCipherKey()
    print(myCipherKey)
    myEncryptedMessage = encryptMessage(myMessage, myCipherKey, myAlphabet2)
    print(f'Encrypted Message: {myEncryptedMessage}')
    myDecryptedMessage = decryptMessage(myEncryptedMessage, myCipherKey, myAlphabet2)
    print(f'Decrypted Message: {myDecryptedMessage}')
    
    
runCaesarCipherProgram()