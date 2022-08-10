// Xử lý khi bấm vào thẻ "Quên mật khẩu"
const loginForget = document.querySelector('.login__forget');
const loginWrap1 = document.querySelector('.login__item-input-wrap1');
const loginWrap2 = document.querySelector('.login__item-input-wrap2');
const loginSpan1 = document.querySelector('.login__forget > span:nth-child(1)');
const loginSpan2 = document.querySelector('.login__forget > span:nth-child(2)');


loginForget.addEventListener('click', function(){
    loginWrap1.classList.toggle('hide__wrap');
    loginWrap2.classList.toggle('hide__wrap');
    loginSpan1.classList.toggle('hide__wrap');
    loginSpan2.classList.toggle('hide__wrap');
})


// Xử lý Đăng nhập và Đăng ký
const dangNhapInputList = document.querySelectorAll('.login-dn-input');
const dangKyInputList = document.querySelectorAll('.login-dk-input');
const dangNhapBtn = document.querySelector('.login__item-btn1');
const dangKyBtn = document.querySelector('.login__item-btn-dk');
let arrAccount = [];

console.log(dangKyInputList)

// Xử lý đăng ký
dangKyBtn.addEventListener('click', function(){
    let check = 1;
    dangKyInputList.forEach(function(e,index){
        if(e.value === ''){
            check = 0;
        }
    })
    if(check == 0){
        alert('Vui lòng nhập đầy đủ thông tin!')
    }
    else{
        let currAccount = {
            userEmail : dangKyInputList[2].value,
            password : dangKyInputList[3].value
        } 
        arrAccount.push(currAccount);
        alert('Tạo tài khoản thành công!')
        console.log(arrAccount);
    }
})


// Xử lý đăng nhập
dangNhapBtn.addEventListener('click', function(){
    let ktra = 1;
    dangNhapInputList.forEach(function(e,index){
        if(e.value === ''){
            ktra = 0;
        }
    })
    if(ktra == 0){
        alert('Vui lòng nhập đầy đủ các trường!')
    }
    else{
        let isCheck = 0;
        arrAccount.forEach(function(e,index){
            if(dangNhapInputList[0].value === arrAccount[index].userEmail && dangNhapInputList[1].value === arrAccount[index].password){
                isCheck = 1;
            }
        })
        if(isCheck == 0){
            alert('Tài khoản hoặc mật khẩu không đúng!')
        }
        else{
            alert('Đăng nhập thành công');
            alert(`Xin chào ${dangKyInputList[0].value} ${dangKyInputList[1].value} <3`);
        }
    } 
})

// Xử lý khi lấy lại mật khẩu đã quên
const confirmEmail = document.querySelector('.confirm-email-input');
const confirmDangNhap = document.querySelector('.login__item-btn2');

confirmDangNhap.addEventListener('click', function(){
    if(confirmEmail.value === ''){
        alert('Vui lòng nhập email của bạn')
    }
    else{
        alert('Đã gửi mật khẩu đến email của bạn, vui lòng kiểm tra trong hòm thư')
    }
})
