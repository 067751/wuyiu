
var yzm = document.getElementsByClassName('yzm')[0];
var phone = document.getElementById('phone');
var itme = 60;
var time;
var yzmv = document.getElementById('yzmv');
//获取随机四位数
var sj = Math.floor(Math.random() * 9000 + 1000);
//验证码
function yz() {
    clearInterval(time);;
    time = setInterval(function () {
        itme--;
        yzm.innerHTML = "(" + itme + ")秒 重发";
        if (itme == 56) {
            alert(sj);

        } else if (itme < 0) {
            clearInterval(time);
            yzm.innerHTML = "发送验证码";
        }
    }, 1000)
}

// 整体验证
function fn() {
    //验证码验证
    var value_ = yzmv.value;
    if (value_ != sj) {
        alert('验证码错误');
    }
    //手机号验证
    var arr = /^1[3|4|5|7|8][0-9]\d{8}$/;
    var val = phone.value;
    if (!arr.test(val)) {
        alert('请输入正确的11位手机号');
        return false;
    } else if (val == "") {
        alert('手机号不能为空')
    }
    //密码验证
    var password = document.getElementById('password');
    var arra = /^[A-z0-9_]{6,11}$/;
    var vala = password.value;
    if (!arra.test(vala)) {
        alert('6-12位内,数字字母下划线,不能为空');
    }
    //确认密码验证
    var passworda = document.getElementById('passworda');
    var valb = passworda.value;
    if (valb != vala) {
        alert('密码不一致');
        return false;
    }

    localStorage.setItem('手机号', val);
    localStorage.setItem('password', vala);
    window.location.href = "./登录.html";
}
