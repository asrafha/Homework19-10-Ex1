

num = 1




a = (num % 2 == 0 && num % 3 != 0  && num % 5 != 0) * 1 
b = (num % 2 != 0 && num % 3 == 0 && num % 5 != 0) * 1;
c = (num % 2 != 0 && num % 3 != 0 && num % 5 == 0) * 1
d =(num % 2 == 0 && num % 3 == 0 && num % 5 != 0) * 2
e = (num % 2 != 0 && num % 3 == 0 && num % 5 == 0) * 2
f = (num % 2 == 0 && num % 3 != 0 && num % 5 == 0) * 2
g = (num % 2 == 0 && num % 3 == 0 && num % 5 == 0 ) * 3
h =(num % 2 != 0 && num % 3 != 0&& num % 5 != 0) * 0

console.log(a+b+c+d+e+f+g+h)