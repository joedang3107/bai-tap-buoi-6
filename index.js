/*Cho phương trình bậc 2 như sau

a * x*x + b * x + c = 0

với a, b, c : được nhập thông qua hàm promt() trong javascript

Ví du: a = prompt('Nhập giá trị của a') => hiển thị 1 form cho bạn nhập => giá trị nhập sẽ được gán vào a

tương tự làm với b, c

=> In kết quả của x */

let a = prompt('nhap gia tri cua a')
let b = prompt('nhap gia tri cua b')
let c = prompt('nhap gia tri cua c')

let delta = b*b - 4*a*c

if (isNaN(a) || isNaN(b) || isNaN(c)){
    alert("Hãy nhập vào số!")
}
else if (a==0 && b==0 && c==0) {
    alert('phuong trinh vo so nghiem')
}
else if (delta > 0) {
    x1 = (-b + Math.sqrt(delta))/2*a
    x2 = (-b - Math.sqrt(delta))/2*a
    alert("phuong trinh co 2 nghiem phan biet x1 = " + x1 + " va x2 = " + x2)
}
else if (delta == 0) {
    x = -b/(2*a)
    alert('phuong trinh co nghiem kep x =' + x)
}
else if (delta < 0) {
    alert('phuong trinh vo nghiem')
}