# n = int(input("nhaaoh 1 số N: "))

# if n % 2 == 0:
#     # print(f"{n} là số chẵn") 
#     pass
# else:
#     print(f"{n} là số lẻ") 


# for i in range(10, 1, -2):
#     print(i)

# for i in range(2, n / 2):
#     if n % i == 0:
#         print(f"{n không phải số nguyên tố!}")
#         break
#     else:
#         print(f"{n} là số nguyên tố ")


# 1. Viết chương trình yêu cầu nhập một số nguyên n, kiểm tra và in ra số đó có chia hết cho cả 3 và 5 hay không

# Ví dụ:

# Nhập một số nguyên: 5
# 5 không chia hết cho cả 3 và 5

# n = int(input("nhập số nguyên vào đây: "))

# if (n % 3 == 0 and n % 5 == 0):
#     print(f"n chia hết cho cả 3 và 5")
# elif n % 3 == 0:
#     print(f"n chia hết cho cả 3")

# elif n % 5 == 0:
#     print(f"n chia hết cho 5")
# else:
#     print(f"n không chia hết cho số nào cả")

# 2. Viết chương trình yêu cầu nhập 3 số a, b, c. Kiểm tra và in ra số lớn nhất

# Ví dụ:

# Nhập số a: 1
# Nhập số b: 2
# Nhập số c: 3
# Số lớn nhất trong 3 số [1 2 3] là 3






# 3. Viết chương trình yêu cầu nhập 3 số a, b, c tương ứng với độ dài 3 cạnh tam giác. Kiểm tra và in ra 3 số có tạo thành một tam giác hợp lệ hay không

# Ví dụ:

# Nhập cạnh a: 1
# Nhập cạnh b: 3
# Nhập cạnh c: 3
# [1 3 3] là một tam giác hợp lệ




# 4. Viết chương trình yêu cầu nhập 3 số a, b, c. Kiểm tra và in ra 3 số là dãy tăng dần (a < b < c), giảm dần (a > b > c) hay không

# Ví dụ:

# Nhập số a: 1
# Nhập số b: 2
# Nhập số c: 3
# [1 2 3] là dãy tăng dần

# a = input("nhập số a: ")
# b = input("nhập số b: ")
# c = input("nhập số c: ")
# if a < b < c: 
#     print(f"{a} {b} {c} là dãy số tăng dần")
    
# elif a > b > c:
#     print(f"{a} {b} {c} là dãy số giảm dần")
# else: 
#     print(">>Erro<<") 
    

# 5. Viết chương trình yêu cầu nhập một ký tự, kiểm tra và in ra ký tự đó có thuộc bảng alphabet (a-zA-Z) hay không

# Ví dụ:

# Nhập một ký tự: g
# 'g' thuộc bảng ký tự alphabet

# 6. Viết chương trình yêu cầu nhập một tháng trong năm, kiểm tra và in ra mùa tương ứng

# Ví dụ:

# Nhập một tháng bất kỳ: 5
# Tháng 5 là mùa hè

# month = int(input("nhập một tháng bất kỳ: "))
# if month >= 3 and month <= 5:
#     print(f"Tháng {month} là mùa xuân")
# elif month >=  6 and month <= 8:
#     print(f"Tháng {month} là mùa hạ")
# elif month >= 9 and month <= 11:
#     print(f"Tháng {month} là mùa thu")
# elif month > 12: 
#     print(">>Erro<<")
# else:
#     print(f"Tháng {month} là mùa đông")
# 7. Viết chương trình yêu cầu nhập một số, in ra bảng cửu chương của số đó

# Ví dụ:

# Nhập một số (1 - 9): 5
# 5 x 1 = 5
# 5 x 2 = 10
# ...

# number = int(input("nhập một số từ 1 đến 9: "))
# if number == 1:
#     print(f"{number} x 1 = {number * 1}")
#     print(f"{number} x 2 = {number * 2}")
#     print(f"{number} x 3 = {number * 3}")
#     print(f"{number} x 4 = {number * 4}")
#     print(f"{number} x 5 = {number * 5}")
#     print(f"{number} x 6 = {number * 6}")
#     print(f"{number} x 7 = {number * 7}")
#     print(f"{number} x 8 = {number * 8}")
#     print(f"{number} x 9 = {number * 9}")
#     print(f"{number} x 10 = {number * 10}")
# elif number == 2:
#     print(f"{number} x 1 = {number * 1}")
#     print(f"{number} x 2 = {number * 2}")
#     print(f"{number} x 3 = {number * 3}")
#     print(f"{number} x 4 = {number * 4}")
#     print(f"{number} x 5 = {number * 5}")
#     print(f"{number} x 6 = {number * 6}")
#     print(f"{number} x 7 = {number * 7}")
#     print(f"{number} x 8 = {number * 8}")
#     print(f"{number} x 9 = {number * 9}")
#     print(f"{number} x 10 = {number * 10}")
# elif number == 3:
#     print(f"{number} x 1 = {number * 1}")
#     print(f"{number} x 2 = {number * 2}")
#     print(f"{number} x 3 = {number * 3}")
#     print(f"{number} x 4 = {number * 4}")
#     print(f"{number} x 5 = {number * 5}")
#     print(f"{number} x 6 = {number * 6}")
#     print(f"{number} x 7 = {number * 7}")
#     print(f"{number} x 8 = {number * 8}")
#     print(f"{number} x 9 = {number * 9}")
#     print(f"{number} x 10 = {number * 10}")
# elif number == 4:
#     print(f"{number} x 1 = {number * 1}")
#     print(f"{number} x 2 = {number * 2}")
#     print(f"{number} x 3 = {number * 3}")
#     print(f"{number} x 4 = {number * 4}")
#     print(f"{number} x 5 = {number * 5}")
#     print(f"{number} x 6 = {number * 6}")
#     print(f"{number} x 7 = {number * 7}")
#     print(f"{number} x 8 = {number * 8}")
#     print(f"{number} x 9 = {number * 9}")
#     print(f"{number} x 10 = {number * 10}")
# elif number == 5:
#     print(f"{number} x 1 = {number * 1}")
#     print(f"{number} x 2 = {number * 2}")
#     print(f"{number} x 3 = {number * 3}")
#     print(f"{number} x 4 = {number * 4}")
#     print(f"{number} x 5 = {number * 5}")
#     print(f"{number} x 6 = {number * 6}")
#     print(f"{number} x 7 = {number * 7}")
#     print(f"{number} x 8 = {number * 8}")
#     print(f"{number} x 9 = {number * 9}")
#     print(f"{number} x 10 = {number * 10}")
# elif number == 6:
#     print(f"{number} x 1 = {number * 1}")
#     print(f"{number} x 2 = {number * 2}")
#     print(f"{number} x 3 = {number * 3}")
#     print(f"{number} x 4 = {number * 4}")
#     print(f"{number} x 5 = {number * 5}")
#     print(f"{number} x 6 = {number * 6}")
#     print(f"{number} x 7 = {number * 7}")
#     print(f"{number} x 8 = {number * 8}")
#     print(f"{number} x 9 = {number * 9}")
#     print(f"{number} x 10 = {number * 10}")
# elif number == 7:
#     print(f"{number} x 1 = {number * 1}")
#     print(f"{number} x 2 = {number * 2}")
#     print(f"{number} x 3 = {number * 3}")
#     print(f"{number} x 4 = {number * 4}")
#     print(f"{number} x 5 = {number * 5}")
#     print(f"{number} x 6 = {number * 6}")
#     print(f"{number} x 7 = {number * 7}")
#     print(f"{number} x 8 = {number * 8}")
#     print(f"{number} x 9 = {number * 9}")
#     print(f"{number} x 10 = {number * 10}")
# elif number == 8:
#     print(f"{number} x 1 = {number * 1}")
#     print(f"{number} x 2 = {number * 2}")
#     print(f"{number} x 3 = {number * 3}")
#     print(f"{number} x 4 = {number * 4}")
#     print(f"{number} x 5 = {number * 5}")
#     print(f"{number} x 6 = {number * 6}")
#     print(f"{number} x 7 = {number * 7}")
#     print(f"{number} x 8 = {number * 8}")
#     print(f"{number} x 9 = {number * 9}")
#     print(f"{number} x 10 = {number * 10}")
# elif number == 9:
#     print(f"{number} x 1 = {number * 1}")
#     print(f"{number} x 2 = {number * 2}")
#     print(f"{number} x 3 = {number * 3}")
#     print(f"{number} x 4 = {number * 4}")
#     print(f"{number} x 5 = {number * 5}")
#     print(f"{number} x 6 = {number * 6}")
#     print(f"{number} x 7 = {number * 7}")
#     print(f"{number} x 8 = {number * 8}")
#     print(f"{number} x 9 = {number * 9}")
#     print(f"{number} x 10 = {number * 10}")
# else: 
#     print(">>Erro<<")

    # có thể sử dụng vòng lặp 
# 8. Viết chương trình yêu cầu nhập một số nguyên dương n, kiểm tra các số trong khoảng từ 1 - n
# - Nếu số chia hết cho 3 in ra Fizz
# - Nếu số chia hết cho 5 in ra Buzz
# - Nếu số chia hết cho 3 và 5 in ra FizzBuzz
# - Nếu không chia hết cho cả 3 và 5 in ra số đó

# Ví dụ:

# Nhập một số nguyên dương: 10
# 1
# 2
# Fizz
# 4
# Buzz
# ...

# n = int(input("hãy nhập một số nguyên dương: "))
# for n in range(n):
#     if n % 3 == 0 and n % 5 == 0:
#         print("FizzBuzz")
#     elif n % 3 == 0:
#         print("Fizz")
#     elif n % 5 == 0:
#         print("Buzz")
#     else:
#         print(f"{n}")

# 9. Viết chương trình yêu cầu người dùng nhập số nguyên dương n
# tính tổng tất cả các số chia hết cho 3 và 5 trong khoảng từ 1 -> n

# Ví dụ:

# Nhập một số nguyên dương: 10
# Tổng các số từ 1 đến 10 là 55
# a = int(input("hãy nhập một số nguyên dương: "))
# c = 0
# for a in range(a):
#     print(f"{a += a}")

# 10. Viết chương trình yêu cầu người dùng nhập một loạt số, tính và in ra trung bình cộng của các số đó
# - Cho phép nhập số lượng số bất kỳ
# - In ra kết quả ngay lập tức với mỗi số nhập vào
# - Dừng nhập và in ra kết quả khi người dùng nhập 'q' hoặc 'c'

# Ví dụ:

# Nhập một số: 2
# Dãy số đã nhập: 2
# Trung bình cộng các số: 2.0
# Nhập một số: 5
# Dãy số đã nhập: 2 5
# Trung bình cộng các số: 3.5
# ...
# Nhập một số: q
# Exit!

# b = int(input("hãy nhập một số: "))
# c = int((input ("dãy số đã nhập: "))

# print(f"{b * c}")

# a = int(input("hãy nhập một số: "))
# b = int(input("hãy nhập một số "))

# if abs(100 - a) < abs(100 - b):
#     print(a)

# def sum (v1 :, float = 0, u1 :str = "km", v2 :float = 0, u2 :str = "km")  -> str:
# """
# ghi gì cũng đc
# """
#  print(v2)
# # bỏ giá trị 100 thì truyền giá trị v1 
# sum(v2 = 100)
 # gọi là truyền đối số thông qua key word

# - def là viết tắt của từ defind


# 14. Viết hàm sum(value1, unit1, value2, unit2) nhận vào 2 tham số value1 và value2 là giá trị độ dài, 
# unit1 và unit2 là đơn vị độ dài. Quy đổi giá trị unit2 về cùng đơn vị với unit1, tính và in ra tổng giá trị
# VD: sum(1, 'km', 100, 'm') -> 1.1 km


# def to_km(value, unit):
#     if unit == 'km':
#         return Value 
#     if unit == "m":
#         return value / 1000
#     if unit == "dm":
#         return value / 10000
#     if unit == "cm":
#         return value / 100000
#     if unit == "mm":
#         return value / 1000000

# def km_to(value, unit):
#     if unit == "km":
#         return value 
#     if unit == "m":
#         return value * 1000
#     if unit == "dm":
#         return value * 10000
#     if unit == "cm":
#         return value * 100000
#     if unit == "mm":
#         return value * 100000

# def sum(v1: int, u1: str, v2: int, u2 : str):
#     print(f"{km_to(to_km(v1, u1) + to_km(v2, u2), u1)} {u1}")

# sum(1, 'dm', 100, 'cm')



# def sum(v1 : 1,u1 : 'km',v2 : 100, u2 : 'm'):
#     if u1 = "m" or u2 = "m"
#         print(f"{u2}")

# 9. Viết hàm print_number_pattern(n) in ra theo mẫu sau

# Ví dụ:

# n = 5
# 1
# 2  1
# 3  2  1
# 4  3  2  1
# 5  4  3  2  1

# def print_number_pattern(n :int):
#     for i in range(1, n + 1):
#         s = ""

#         for j in range(i, 0 , -1):
#             s += f"{j:<3}" # sử <3 để căn chỉnh treo text 

#         print(s)

# print_number_pattern(5)

# def first_and_last_number(n):
#     last_number = n % 10 
#     first_number = None
#     temp = n 

#     while temp > 0:
#         first_number = temp % 10 
#         temp -= first_number
#         temp //= 10 
#     print(f"First number of {n} is {first_number}")
#     print(f"Last number of {n} is {last_number}")

# first_and_last_number(n=32465723466)

# while True:
#     try:
#         n = int(input("nhập N: "))
#         print("N là số chẵn" if n % 2 == 0 else "N là số lẻ")
#     except (ValueError, TypeError) as e:
#         print("sô không hợp lệ")
#     except TypeError as e:
#         print("cộng chuỗi comment thất bại")



# def sum(a, b):
#     if type(a) == int and type(b) == int:
#         return a + b
#     else: 
#         raise TypeError("a and b must be number")

# try:
#     print(sum(1, "n"))
# except TypeError as e:
#     print(e)


# str = "Hellow World"
# print(list(str(range(1, 10, 2))))

# l = [1, 2, 3]
# c = ["a", "b", "c"]

# print(l+3)
# print(l*3)
# print(l[0])

# 2. Viết chương trình đếm số phần tử có kiểu str trong một list

# Ví dụ:

# l = ["a", "b", 1, 2, "c", True, False]

# str_l = list(filter(lambda i: type(i) == str, l))
# upper_list = list(map(lambda i: i.upper(, str_l))
# print(upper_list)
# print(len(str_l))
# new_list = []
# for i in l:
#     if type(i) == str:
#         new_list.append(i)
# print(new_list)
# new_list = list(filter(lambda i: type(i) == str, l))
# print(new_list)

# upper_list = []
# for i in new_list:
#     upper_list.append(i.upper())
#     print(upper_list)

# upper_list = list(map(lambda i: type(i) == str, l))
# print(upper_list)
# string_list = ["a", "b", 1, 2, "c", True, False]
# const = 0 
# for i in string_list:
#      if type(i) == str:
#         const += 1
# print(const)

# 8. Viết chương trình kết hợp 2 phần tử liền kề nhau trong List strings
# VD: ['a', 'b', 'c', 'd', 'e']
# result ['ab', 'cd', 'e']

# list_string = ['a', 'b', 'c', 'd', 'e']
# result = []
# for i in range(0, len(list_string),  2):
#     if i < len(list_string) - 1:
#         result.append(list_string[i] + list_string[i - 1])
#     else:
#         result.append(list_string[i])
# print(result)

# s = "sdf"
# for char in s:
#     l.append(s)
# print(l)
 

# l = [1, 2, 4, 3, 5, 6, 11]
# l.sort()
# print(l)

# cho một  list số nguyên 
# viết hàm find_second_value(l)
# Tìm giá trị lơn thứ 2 trong list
# lưu ý trong list có thể có nhiều giá trị trùng nhau

# l = [13,4,65,7,8,98,7,44,32,12]

# def find_second_value(l):
#     max_number = l[0]
#     second_number = None

#     for i in l:
#         if i > max_number:
#             second_number = max_number
#             second_number = None

#     return second_number

# second = find_second_value(l)
# print(second)

#     l.sort(reverse=True)
#     max = l[0]

#     for value in l:
#         if value < max:
#             return value

# second = find_second_value(l)
# print(second)

#     for v in l:
#        if v > max:
#            max = v 
# print(max)
            
# l = [
#     ("iphone", 888),
#     ("s21", 999),
#     ("galaxy", 1000)
# ]

# def get_price(item):
#     return item[1]
# l.sort(key=get_price, reverse=True)
# print(l)

# Viết hàm sort_list(l)
# Sắp xấp xếp mảng 2 chiều các giá trị số 
# theo tổng gái trị trong mảng
# l = [ [1, 2], [3,1], [4,-3] ]
# kết quả [ [4,-3], [1, 2], [3,1] ]

# l = [[1, 2], [3, 1], [4,-3]]

# def sum_list(l):
    # sum = 0

    # for value in l:
    #     sum += value 

    # return sum
    #============
    # return l[1]


# l.sort(key=sum_list)
# l.sort(key=lambda l: l[1])
# print(l)

# 1. Viết chương trình gợi ý người dùng nhập một dãy số tùy ý (phân tách bằng dấu cách), lưu vào một list.
#  Sắp xếp list số đã nhập, sau đó, tìm và hiển thị số lớn thứ 3 (Lưu ý trường hợp nhiều số trùng nhau)

# Ví dụ:

# Nhập dãy số: 1 43 53 53 32 65 43 10
# List of numbers: [1 10 32 43 43 53 53 65]
# Số lớn thứ 3 trong dãy đã nhập là 43


# try:
#     print("người dùng hãy nhập một dãy số tùy ý (phân cách bằng dấu ' ')")
#     a = input(">> ").split(' ')
#     a = list(map(lambda i: int(i), a))
#     a.sort(reverse=True)
#     n = None
#     count = 0

#     for i in a:
#         if not n:
#             n = i
#             count += 1 
#         elif i < n:
#             n = i
#             count += 1
#         if count == 3:
#             break
#         a.reverse()
#     print(f"số lớn tứ 3 trong dãy {a}: {n}")
# except ValueError as e:
#     print("dãy số không hợp lệ!")


# def number_list(x):
#     for value in x:




# 2. Viết chương trình đếm số phần tử có kiểu str trong một list

# Ví dụ:

# l = ["a", "b", 1, 2, "c", True, False]

# # Kết quả
# # 3

# print()

# const = 0 
# for i in l:
#     if type(i) == str:
#         const += 1 
# print(const)

# 3. Viết chương trình xáo trộn các phần tử trong List (theo thứ tự ngẫu nhiên). Sử dụng hàm random.randint(a, b) để lấy số ngẫu nhiên

# Ví dụ:

# l = [1, 2, 3, 4, 5, 6]

# Kết quả
# l = [5, 2, 4, 6, 1, 3]

# from random import shuffle
# l = [1, 2, 3, 4, 5, 6]
# shuffle(l)
# print(l)

# 4. Viết chương trình cộng giá trị của 2 hoặc nhiều List chứa các số nguyên 
# (lưu ý số lượng phần tử trong các List có thể khác nhau, cộng giá trị các phần tử có index tương ứng).

# Ví dụ:

# l1 = [1, 2, 3]
# l2 = [3, 4, 5, 6]
# l3 = [5]

# # Kết quả
# l4 = [9, 6, 8, 6]

# def f(*args):
#     max_len = map(lambda l: len[l], args)
    
#     return [ l[i] for i in range(0, max_len) for l in args sum = 0 if i < len(l) sum += l[i] ]
    
# f(l1, l2, l3)

# def conbine_list(*args):
#     max_len = map(lambda i: int[i], args)
#     for i in range(0, max_len):
#         sum  = 0 
#         for l in args:
#             if i < len(l):
#                 sum += l[i]
#             result.append(sum)
#         return result
# conbine_list(l1, l2, l3)



# # 5. Viết chương trình tìm giá trị lớn nhất, nhỏ nhất trong 3 List (số nguyên) cho trước

# Ví dụ:

# l1 = [1, 2, 3]
# l2 = [3, 4, 5, 6]
# l3 = [5]

# Số lớn nhất: 6
# # Số nhỏ nhất: 1

# def list_number(*args):
#     max_number = map(lambda i: int[i], args)
#     for i in range(0, max_number):
#         maxs = 0
#         for j in args:
#             if i > l:
#                 maxs = i

# int(list_number(l1, l2, l3))

# 6. Viết chương trình chuyển đổi một số nguyên thành một binary list tương ứng
# VD: 10 -> [1, 0, 1, 0]

# print(list(bin(10) [2:]))

# try:
#     n = int(input("nhập một số: "))
#     print(f"Giá trị {n} trong hệ nhị phân: {list(map(lambda i: int(i), list(bin(n) [2:])))}")
# except ValueError as e:
#     print(e)
# n = int(input("nhập một số: "))
# l = [int(i) for i in bin(n) [2:]]
# print(f"giá trị {n} trong hệ nhị phân {l}")



# 7. Viết chương trình sắp xếp các chữ số của một số sao cho giá trị sau khi sắp xếp là nhỏ nhất (lưu ý giữ nguyên số lượng các chữ số)
# VD: 23434004
# result 20033444

# n = 23434004
# l = list(str(n))
# l.sort()

# if int(l[0]) == 0:
#     for index, value in enumerate(l): 
#         if int(value) != 0:
#             l[0], l[index] = l[index], l[0]
#             break
# n = "".join(l)
# print(n)


# 9. Viết chương trình tìm các cặp giá trị trong một List số nguyên sao cho tổng giá trị 
# của chúng bằng một giá trị chỉ định. Các cặp giá trị đặt trong một list of list

# Ví dụ:
# l = [2, 3, 4, 5, 6], n = 9
# Kết quả
# l = [[3, 6], [4, 5]]


# def f(_list, n):
#     result = []

#     for i in range(0, len(_list) - 1):
#         for j in range(i + 1, len(_list)):
#             if _list[i] + _list[j] == n:
#                 result.append([_list[i], _list[j]])
#     return result

# print(f([2, 3, 4, 5, 6], 7))

# def f(l, n):
#     return [[l[i], l[j]] for i in range(0, len(l) -1) for j in range(i + 1, len(l)) if l[i] + l[j] == n]
# print(f([2, 3, 4, 5, 6], 7))

# 10. Viết chương trình tách một list các giá trị hỗn hợp(số, chuỗi) thành các tuples chứa các giá trị dựa theo kiểu dữ liệu của chúng, các tuples đặt trong một list

# Ví dụ:
# l = [1, 2, 3, 'a', 'b', 'c']
# Kết quả
# l = [(1, 2, 3), ('a', 'b', 'c')]

# 11. Viết chương trình tìm số lần xuất hiện nhiều nhất của một ký tự trong một chuỗi(không tính dấu cách)

# Ví dụ:
# Xin chào các bạn, mình tên là Ba
# ()

# l1 = [1, 2, 3, 4]
# print(list(zip(l1, "ab")))

# key = "x"
# d = dict(x=1, y=2, f=lambda x: x * 10)
# def get(key, default = None):
#     if key in d:
#         return d[key]
#     else:
#         return default

# print(get("xx", "Nothing"))

# number  = [1 ,2 ,3] 
# print(number)
# print(*number)
# value = [*range(3), *"Ba"]
# print(*value)
# first = [1, 2]
# second = ["a", "b"]
# combine = [*first, *second, *"Hello"]
# print(*combine)

# sentence = "this is a common interview question"

# def max_char(s):
#     l = dict()

#     for char in s:
#         if char != " ":
#             if char in l: 
#                 l[char] += 1
#             else:
#                 l[char] = 1

#     l = list(l.items())
#     l.sort(key=lambda item: item[1])
#     return l.pop()

# char, count = max_char(sentence)

# print(f"ký tự có số lền cuấy hiện nhiều nhất trong chuỗi '{sentence}' là: {max_char(sentence)}")


# # 12. Viết chương trình hợp nhất 2 dictionaries

# # VD:
# d1 = {a: 1, b: 2}
# d2 = {a: 2, c: 1}
# # => d3 = {a: 3, b: 2, c:1}

# def concat_two_distionari(d1, d2):
#     result = dict()
#     key = list(set([*d1.key(), *d2.key()]))
    
#     for i in keys:
#         total = d1.get(i, 0) + d2.get(i, 0)
#         result.[i] = total

# print(concat_two_distionari({'a' : 1, 'b' : 2}, {'a' : 2, 'c': 1}) )

# 13. Viết chương trình in dictionaries theo dạng bảng
# VD: {C1: [1, 2], C2: [3, 4]}
# C1  C2
#  1   3
#  2   4

def print_as_table(d):
    column = d.keys()
    rows = zip(*d.values()) 

    header = ""
    for col in column:
        header += f"{col:^12}"
    print(header)

    
    for row in rows:
        r = ""
        for v in row:
            r += f"{v:^12}"

        print(r)
print_as_table({"column 1": [1, 2], "column 2": [3, 4]})