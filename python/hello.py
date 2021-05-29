# print("What's your name?")

# name = input("> ")

# print(f"Hello {name}")
# print("xin chào")

# my_name = "Ba"
# my _age = 28
# is_hadsome = True
# a_poem = """


# my_computer = "Dell"
# my_phone_number "p96 533 828x"

# các kiểu dữ liệu cơ bản 
# số nguyên - in 
# số thực - float 
# logic - bool
# chuỗi - str

# type_int = 1 
# type_float = 0.5
# type_bool = true # false

# kiểm tra kiểu dư liệu 
# type(type_int)
# class <class 'int'>

# python là ngôn ngữ có kiểu động dynamic typing tương tự 1 số ngôn ngữ như JAVASCRIPT, biến 

# Type Annotation 
# python 3 hỗ trợ cí pháp ghi chú kiểu dữ liệu cho biến 
# và còn đc sử dụng để ghi chú kiểu DL của các tham số hàm, kiểu DL trả về từ hàm 

# với các kiểu DL cơ bản, giá trị trong biến là ko thể thay đổi, khi cập nhật giá trị của biến, thực chất biến sẽ đc gái cho  1 vùng nhỏ  khác lưu trữ giá trị mới

# id(obj) cho biết địa chỉ vùng nhớ của biến 
# name = "Ba"
# print(id(name)) # 1888929324400

# name = "Tokuda"
# print(id(name)) # 140029576942504

# Mutable thì ngược lại, bất kì thay đổi nào đều đc cập nhật ngay tại vùng lãnh thổ
# #VD
# list = [1, 2 ,3]
# print(id(list)) # 140029576941504

# list[1] = 0
# print(id(list)) #140029576941504

# s =  "Hello"
# s[0] 
# h[1]

# str = "Hello"
# print(len(str)) #5
# print(str[0]) 
# print(str[-1])
# print(str[0:2])
# print(str[-4:-1])
# print(str[:3])
# print(str[::2])
# print(str[:])

# Escape Strings 
# làm thế nào để in ra chuỗi: I'm Ba "xấu trai" ?
# print("im ba xấu trai")

# Formatted strings 
# python cho phép nhúng giá trị của 1 biến, phương thức, hoặc 1 biểu thức, ... vào 1 chuỗi với cú pháp f-strings

# name = "ba"
# age = 28 
# greeting = f"chào, tớ là {name}, {age} tuổi!"
# print(greenting)

# # cách cổ điển
# greenting = "chào tớ là" + {name}

# s = 'Hello'
# print(s.startswith('H'))
# print(s.find("i"))
# print(s.isalnum())
# print(s.isupper())

# Numbers 
# kiểu số, bao gồm số nguyên int, số thực float và số phức complex. python cũng hỗ trợ định dạng số binary và hex với diền tố prefix

# Operators (toán tử)
# thường đc sử dụng kết hợp với các biến hoặc giá trị tạo ra biểu thức và khi kết hợp các biểu tức kết hợp với nhau  tạo ra các giải thuật 

# Basic Pẻators
# các loại toán tử
# x = 1+ 2
# x = 10 - 5 
# x =  2*3 Toán tử nhân các giá trị lại với nhau
# x = 2 / 3 Toán tử chia các giá trị cho nhau
# x =  2 // 3 Toán tử chia làm tròn xuống.
# x = 2 % 3 Toán tử chia lấy phần dư 
# x = 2**3 Toán tử mũ

# có 5 loại toán tử, ngôn ngữ lập trình nào cũng thế thôi 
# lưu ý trong python không có toán tử ++, -- giống các ngôn ngữ khác

# Working width Numbers
# khác với chuỗi, Python ko cung cấp sẵn nhiều phương thức để làm việc với kiểu số. Thay vào đó nó cung cấp 
# import math 
# print(math.ceil(1.242234))



# # Type Conversion 
# # Python khoong hỗ trợ chuyển đổi kiểu dữ kiệu tự động khi thực  hiện tính toán các biểu thức giống 1 cố ngôn ngữ khác như javaScript,
# #  để chuyển đổi dữ kiệu cần sử dụng các phương thức chuyển đổi chuyển đổi kiểu rõ ràng
# false
# # True + 1 
# # i + "sfsdf"
# true
# x = 10 
# print("ten ban la gi?")
# name = int(input(">>> "))
# print(name)
# print(type(name))

# python cung cấp phương thức input() 


# 1. Viết chương trình yêu cầu người dùng nhập vào 2 số a, b. Tính và in ra kết quả của các phép tính(+ - * / // % ...) giữa 2 số đó
# a = int(input("nhập số a "))
# b = int(input("nhập số b "))
# print(f"{a} + {b} = {a + b}")
# print(f"{a} - {b} = {a - b}")
# print(f"{a} * {b} = {a * b}")
# print(f"{a} / {b} = {a / b}")
# print(f"{a} // {b} = {a // b}")
# print(f"{a} % {b} = {a % b}")

# # 2. Viết chương trình yêu cầu người dùng nhập vào bán kính hình tròn(r), tính và in ra chu vi, diện tích hình tròn đó
# a = int(print("nhập số vào "))
# print(f"{a * 2 * 3.14}")

# # 3. Viết chương trình yêu cầu người dùng nhập vào chiều dài(w), chiều rộng(w) của hình chữ nhật, tính và in ra chu vi, diện tích hình chữ nhật đó
# a = int(input("nhập số a "))
# b = int(input("nhập số b "))
# print(f"({a} + {b}) * 2 = {(a + b) * 2}")

# # 4. Viết chương trình yêu cầu người dùng nhập vào giá trị độ dài(long) với đơn vị là cm, quy đổi và in ra giá trị tương ứng ở các đơn vị km, dm, m, mm
# cm = int(input("nhập độ dài >> "))
# print(f"{cm * 10}") # mm
# # cm 10
# print(f"{cm / 10}") # dm
# print(f"{cm / 100}") # m 
# print(f"{cm / 100000}") # km


# # # 5. Viết chương trình yêu cầu người dùng nhập vào giá trị nhiệt độ thang nhiệt Celsius(c), quy đổi và in ra nhiệt độ tương ứng trong thang nhiệt Fahrenheit và Kevin
# c = int(input("nhập nhiệt độ vào đây >> "))

# print(f"{(c * 1.8) + 32}")
# print(f"{c + 273.5}")

# # 6. Viết chương trình yêu cầu người dùng nhập vào số phút(tính từ 0h của ngày hôm nay, giả sử số phút nhập không quá 1440), tính và in ra giá trị giờ: phút tương ứng(VD: 325 -> 5: 25)
# import datetime
# print(datetime.timedelta(seconds= int(input(" hãy nhập một số >> "))))

# # =====================================================================================================================================================================================

# 1. Viết chương trình yêu cầu người dùng nhập một chuỗi, và một giá trị số (index), hiển thị chuỗi được cắt từ 0 đến vị trí index
# string = input("hãy nhập một chuỗi: ")
# index = input("hãy nhập một số: ")
# print(string[ 0 : int(index) ])



# 2. Viết chương trình yêu cầu người dùng nhập tên, in ra tên viết tắt theo mẫu:
# VD
# Nhập họ tên: Ba Nguyễn
# Ba Ngu.
string = input("Nhập họ tên: ") 
a = string.find(" ")
print(string[0 : a+3])



# 3. Viết chương trình yêu cầu người dùng nhập địa chỉ email, ẩn địa chỉ email và in ra theo mẫu trong ví dụ:

# Ví dụ:

# Nhập email: banguyen@gmail.com
# ba...@gmail.com

# 4. Viết chương trình yêu cầu người dùng nhập một chuỗi, và một ký tự bất kỳ trong chuỗi đó. Đếm số lần xuất hiện của ký tự trong chuỗi, và hiển thị chuỗi khi thay thế ký tự đó thành 😉

# Ví dụ:

# Nhập một chuỗi bất kỳ: Hello world
# Nhập một ký tự trong chuỗi: o
# Ký tự 'o' xuất hiện 2 lần trong chuỗi 'Hello world'
# Hell😉 w😉rld
 string = input("hãy nhập một chuỗi: ")
 letter = input("hãy nhập một từ bất kì: ")

 Conditional Statements
 thực thi các câu lệnh dựa theo điều kiện
 age = 28 
 if age >= 20:
    print("Adult")
 elif age >= 13
    print('Teenager')
 else ... 

 Code block, pass 
 if age > 20 # X errro
 else 
 # do some thing 
 if age > 20:
     pass  # V right
else:
        pass



Logical Operators
Not - phủ định kết qyar của biểu thức 
name = ""
if not name:
    print("name is empty")


or - kết hợp điều kiện, biểu thức đúng khi 1 trong các điều kện đúng 

and - kết hợp điều kiện, biểu thức đúng khi tất cả điều kiện đúng 
age = 25 
handsome = True 
rich = True 
if 18 <= age and age <= 25 and handsome and rich:
    print("Perfect")
    python hôc trợ chuỗi toán tử so sánh, cho phép viết biều thức logict rõ ràng hơn 
    if 18 <= age and age <= 25 handsome and rich:
        print("Perfect")


Ternary Operator

Ternary Operator (toán tử 3 ngôi) là củ pháp rut gon của if else thường đc sử dụng để gán (hoặc trả về) 1 giá trị theo điều kiện 
age = 25
x = v1 if condition else v2  
if age >= 18:
    message = "Eligible"
else:
    message = "Not eligible"
    message = "Eligible" if age >= 18 else "Not eligible"

x = condition 
? v1 
: condition 
? v2 
: condition 

for loops 
lặp qua bấy kỳ đối tuongwh nào có thể lặp (iterable), thưc hiện các hành động (khối code) lặp lại với mỗi phần của đối tượng
for char in "Mr Ba":            for i in ['b', 'a']:             for n in range(5): -> obj iterable ( hàm đặc biệt) range(n)0 -> n-1 (range truyền vào 1 giá trị)
    print(char)                    print (i)                        print(n)                                       range(x,y) (range truyền vào nhiều tham số)
    M                              B                            0                                                  range(a,b,c): a +b, a+c
    r                              a                            1
    #                                                           2
    B                                                           3
    a                                                           4
    __iter__()
    __next__()
    magic methot

-- trong python chỉ có duy nhất 1 vòng lặp for in 

    VD javaScript
    x = {
        key = v;
        a :1 
        b: 2
        c: 3
    }
    for obj 
    for of arr
    for 

    Braket Notation có 2 cách dùng 
    obh[Pn]
    obj["1afaaf"]
    obj[key]

    range() tạo tra 1 chuỗi (sequense) các số nguyên
    range() trả về 1 range obj là 2 đối tượng có thể lặp giống như string, list,....
    range ko giống như list, nó chiếm rất ít bộ nhớ 
    range(stop)
    range(start, stop,[stept])

    in ra các số lẻ trong khoảng 1 -> 10
    for n in range(1, 10, 2):
        print(n)



break, Continue

continue - dừng lần lặp hiện tại, chyển tới lần lặp tiếp theo 
for n in range(10):
    if n %  2 == 0:
        continue
    else:
        print(n)


break - dừng vòng lặp 
for n in ranfe(10):
    if n > 5:
        break 
    else:
        print(n)


For else
Cú pháp đặc biệt 
 
 Vòng lặp for cũng hỗ trợ mệnh đề else, nếu thưc jhieenj hết vòng lặp mà ko gặp câu lệnh break,
  mện đề ekse sẽ đc thực thi, ngược lại, nếu gapwk câu kệnh brea ngắt vingf lặp thì else không sẽ ko đc thực thi

  while loop 
  do while phải thực hiện tối thiểu 1 lần 
  while sai là ngắt vòng lặp 
  tương tự như for, tuy nhiền vòng lặp while ko xác định trc số lần lặp 
  guess = 0 
  answer = 5 
  while gess != answer:
      guess = int(input("Guess a number\n>"))

      giả lặp do while 


Functions
Hàm (phương thức) đc sử dụng để đóng gói các khối mã, cho phép tái sử dụng mã ở nhiều nơi, giảm thiểu code, giảm lỗi 

cú pháp: 
def funcname()

cú pháp gọi hàm:
funcname()

Tham số khai báo các giá trị đc sử dụng bên trong hàm, các ...

vd
def greet():
    print

return
có 2 loại hàm
- thực thi 1 nhiệm vụ nào đó 
- tính toán và trả về 1 giá trị 

mặc định hàm luôn trả về 1 giá trị(none), để chỉ định 1 giá trị trả về từ hàm, sử dụng câu lệnh return

def sum(a, b)

return a  + b 

print sum((1,5)) #6

câu lệnh return (ngừng) ngắt hàm, các câu lệnh phía dưới bị bỏ qua

Type Annotation, Doctring

khai báo hàm nên sử dụng type nannotation và Doctring để ghi chú rõ ràng chức năng của hàm, các tham số truyền vào có kiều dữ liệu gì, laoij dữ liệu trả về

def sum(a: int, b: int) -> int:
    """
    return sum of two number 
    parameters:
    - a: integer
    - b: integer
    return: a + b -> integer
    """
    return a + b 



Scope

trong qython, có 2 kiểu của biến, tương ứng với phạm vi(scope) tồn tại của biến 
- biến cục bộ - Functions scope
- biến toàn cục - file scope
biến cục bộ chỉ tồn tại bên trong hàm mà nó đc khai báo 

python ko có block scope giống như 1 số ngôn ngữ khác 
mặc định việc thay đổi giá trị 1 biến toàn cuccj bên trong hàm ko ảnh hưởng đến biến toàn cục 
(trừ khi khai báo biến stoanf cục bên trong hàm với từ khóa global - dont do this)
first name =" Ba "
last name= "nguyen"
def greet():
    first name = "béo"
    global last name
    last name = "ú"

print( first name, last name) # Béo Ú


Default parameter

có thể gán 

Exception
khi lập trình, chương trình có thể bị fungwf kho gặp 1 lỗi. 
cần phải xử lý các lỗi có thể sảy ra và ngăn chặn việc chương trình bị crash khi hoạt động. Sử dụng khối lệnh try:
try: 
    age = int(input("Age"))
except value lỗi  as e # dùng để sử lí đoạn code lỗi đó 

có rất nhiều loại lỗi VD:
ValueError
ImportError
ZeroDivisionError...


câu lệnh whith có thể sử dụng thay thế finally trong 1 số trường hợp khi làm việc với các tàn nguyền bên ngoài. ví dụn với file
, nó tự động gọi hàm f.close() thay vì gọi 

Data Strudtures

cấu trúc dữ liệu là cách lưu trữ, tổ chức dữ liệu có thứ tự, có hệ thống để dữ liệu  có thể sử dụng một cách hiệu quá nhất 

có nhiều loại cấu trúc dữ liệu khác nhau, mỗi loại cung cấp một cách lưu trữ và sử lí dữ liệu 

Lists 

là một tập hợp các đôú tượng các mục trong lít đc đánh chỉ mục, và khoong nhất thiết phải có cùng một kiểu dữ liệu


Accessing item 

Mỗi phần tử trong lít có thể truy cập chỉnh sửa giá trị sử dụng cú pháp 
numbers = list(range(10))
numbers[0]
numbers[0] = -1
numbers
numbers[0:3]
numbers[:]
numbers[::2]
numbers[::-1]


Looping over Lists 

List Methods


có thể xóa các phần tử khỏi lít với del 
lưu ý xóa phần tử khỏi 

sorting Lists 
khi sắp xếp một lít chứ các object phức tạp hơn, chỉ định một hàm cho tham số key của hàm sort, sắp xếp 

Lambda Function 

Map Function 
hàm fiter() đc sử dụng để lọc các phần tử 

hàm map() đc sử dụng để biến 

List Method 


Sorting Lists
khi săp xếp 1 list chứa các pbject phức tạp 

lambda function là 1 hàm ẩn danh đơn giản có thể viế trên 1 dòng.
 lambda fuction ddc dùng để truyền trực tiếp vào hàm khác như 1 đối số

 vd

 l = [
    ("iphone", 888),
    ("s21", 999),
    ("galaxy", 1000)
]

l.sort 
map đc sử dụng để biến đổi hay ánh xạ 1 list thành 1 list 

 m = [
    ("iphone", 888),
    ("s21", 999),
    ("galaxy", 1000)
]

m = map(lambda item: item[1], devices)
prices = list(map(lambda item: item[1], devices)) 


Hàm Filter đc sử dụng để lọc các phần tử 

list conprehensions là cú pháp thay thế cho map và filter

[c for c in s] 
c = expention

for c in s:
    if int(c) % 2 == 0 
    return c

[int(c) if int(c) % 2 == 0 for c in s] 
[int(c) for c in s if int(c) % 2 == 0] 

Hàm zip đc ử dụng để kết hợp với các list mới, các phần tử tronng kít mới là môt tuple chứa các phần tử tại chỉ mục tương ứng từ các lít 

VD:
l1 = [1, 2, 3, 4]
list(zip(l1,, "ab"))
kết quả >> [(1, 'a'), (2, 'b')]

list unpacking 
python cho phép gán giá trị trong list cho cùng lúc nhiều biến 

tuple
về cơ bản giống hệt list, tuy nhiên, tuple chỉ cho phép đọc(read only), không thế thêm mới một phần tử hoặc xóa , sửa một phần tử hiện có 

tuple()  có đầy đủ các tính chất của list, tuy nhiên chỉ hôc trợ 2 phương thức count() và index()

VD:
t = ()
type(t)
có thể không dùng ngoặc tròn và thay vào đó là dấu ","

python hỗ trợ cú pháp swap giá trị của 2 hoặc nhiều biến với cú pháp rất đơn giản

SET()
- set là một tập hợp các phần tử ko đc đánh chỉ mục và giá trị các phần tử trong set là duy nhất(không có giá trị trùng nhau)

- set cũng hỗ trợ một số toán tử đặc biệt

s1 = [1, 2, 3] s2 = [1, 4]
print(s1 | s2) trả về toàn bộ phần từ chứa trong cả 2 mảng
print(s1 & s2) trả về các phần tử có trong cả 2 mảng
print(s1  s2)
print(s1  s2)
print(s1  s2)

s = {1} 
ss = {1, 2}
s. difference_update(ss) 
- hàm này xóa tất cả các phần tử giống nhau trong cả 2 mảng 

Dixtionaries 
là một cấu trúc dữ liệu đặc biệt trong pythpn, nó là một tập hợp các cặp key : value. mỗi key ánh xạ tới một value tương ứng 
chỉ cho phép các giá trị immutable làm key, có thể là bất cứ kiểu dữ liệu nào 


có thể sử dụng ngoặc vuông dấu nháy hoặc truyền vào key word 

khi một key không tồn tại trong dict sẽ gay lỗi 
if "x" in point:
    print(point["x"])

tương tự với list comprehensions, chúng ta có thể sử dụng cùng cú pháp với stet hoặc dictionary 
s = {x * 2 for  x in range(5) }
print(s)

generator Expressions khởi tạo một giá trị mới mỗi vòng lặp, nó không lưu trữ toàn bộ giá trị trong bộ nhớ, so với list , genexpr chiếm ít bộ nhớ hơn rất nhiều

unpacking operator hoạt động với đối tượng có thể lặp 
number  = [1 ,2 ,3] 
print(number)
print(*number)
value [*range(3), *"Ba"]
print(*value)
first = [1, 2]
second = ["a", "b"]
combine = [*first, *second, *"Hello"]

comprihensions ko sử dụng đc với tuple 


