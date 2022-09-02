import './style.scss'

const password = document.getElementById("password")
// const passwordtoggle = document.getElementsByClassName("password_icon")[0]
const passwordtoggle = document.querySelector(".password_icon")

console.log(password);
console.log(passwordtoggle);

passwordtoggle.addEventListener('click', () => {
    if(password.type === 'password'){
        password.setAttribute('type', 'text')
        passwordtoggle.classList.remove('show')
        passwordtoggle.classList.add('show')
    }else {
        password.setAttribute('type', 'password')
        passwordtoggle.classList.remove('show')
    }
})

password.addEventListener('keyup',() => {
    console.log(password.value);
    checkPassword(password.value)
})

function checkPassword(info) {
    const passwordMsg = document.getElementById("password_msg")
    passwordMsg.textContent = 'Need'
    const lower = new RegExp('(?=.*[a-z])')
    const upper = new RegExp('(?=.*[A-Z])')
    const number = new RegExp('(?=.*[0-9])')
    const special = new RegExp('(?=.*[!@#\$%\^&\*])')
    const length = new RegExp('(?=.{8,})')

    // const email = new RegExp('(^,[a-z A-Z])')z

    let falg = false;

    if (!lower.test(info)){
        passwordMsg.textContent += " 小写"
        falg = true
    }
    if (!upper.test(info)){
        passwordMsg.textContent += " 大写"
        falg = true
    }
    if (!number.test(info)){
        passwordMsg.textContent += " 数字"
        falg = true
    }
    if (!special.test(info)){
        passwordMsg.textContent += " 特殊字符"
        falg = true
    }
    if (!length.test(info)){
        passwordMsg.textContent += " 长度要大于等于8"
        falg = true
    }
    const passwordGroup = document.getElementById('password_group')
    if(falg) {
        passwordGroup.classList.remove('success')
        passwordGroup.classList.add('error')
    } else {
        passwordMsg.textContent += "满足所有需求"
        passwordGroup.classList.add('success')
        passwordGroup.classList.remove('error')
    }
}
