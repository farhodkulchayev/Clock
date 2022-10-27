let hours = document.querySelector(".hours")
let minutes = document.querySelector(".minutes")
let h = document.querySelector(".h")
let m = document.querySelector(".m")
let s = document.querySelector(".s")

// console.log(new Date().getSeconds());

// let x = 1
// let stop

// function rec() {
//     console.log(x);
//     // if (x < 10) {
//     //     x++
//     //     rec()
//     // }
//     stop = setTimeout(() => {
//         x++
//         rec()
//         if (x == 5) {
//             clearTimeout(stop)
//         }
//     }, 200);
// }

// rec()

function clock() {

    let time = new Date()
    let hour = time.getHours()
    let min = time.getMinutes()
    let sec = time.getSeconds()

    if (hour < 10) {
        hours.innerText = "0" + hour
    } else {
        hours.innerText = hour
    }
    if (min < 10) {
        minutes.innerHTML = "0" + min
    } else {
        minutes.innerHTML = min
    }

    // hours.innerHTML = hour < 10 ? "0" + hour : hour

    s.style.transform = `rotate(${sec * 6}deg)`
    m.style.transform = `rotate(${min * 6}deg)`
    h.style.transform = `rotate(${hour * 30}deg)`

    setTimeout(() => {
        clock()
    }, 1000);

}

clock()

// let tabsItemActive = document.querySelector(".tabsItem.active")

// tabsItemActive.addEventListener("click", function () {
//     // console.log(this);
//     if (this.classList.contains("active")) {
//         // console.log('Yes');
//         // this.classList.add("qwer")
//         // this.classList.remove("active")
//         // this.classList.toggle("aaa")
//     } else {
//         // console.log('No');
//     }
// })

let tabsItem = document.querySelectorAll(".tabsItem")
let tabsContentItem = document.querySelectorAll(".tabsContentItem")

for (let i = 0; i < tabsItem.length; i++) {
    tabsItem[i].addEventListener("click", function () {
        for (let k = 0; k < tabsItem.length; k++) {
            tabsItem[k].classList.remove("active")
            tabsContentItem[k].classList.remove("active")
        }
        tabsItem[i].classList.add("active")
        tabsContentItem[i].classList.add("active")
    })
}


let stopWatchBtn = document.querySelector('.stopwatch__btn')
let stopWatchSeconds = document.querySelector('.stopwatch__seconds')
let stopWatchMinutes = document.querySelector('.stopwatch__minutes')
let stopWatchHours = document.querySelector('.stopwatch__hours')
let active = document.querySelector('.tabsLink__span')



stopWatchBtn.addEventListener('click', function () {
    if (this.innerHTML == 'start') {
        this.innerHTML = 'stop'
        active.classList.add('active')
        let i = 0

        setTimeout(() => {
            stopWatch(this, i)
        }, 10);
    } else if (this.innerHTML == 'stop') {

        this.innerHTML = 'clear'
        active.classList.remove("active")
        active.classList.add("active_clear")
    } else {
        active.classList.remove("active_clear")
        stopWatchSeconds.innerHTML = 0
        stopWatchMinutes.innerHTML = 0
        stopWatchHours.innerHTML = 0
        stopWatchBtn.innerHTML = 'start'

    }
})

function stopWatch(el, i) {
    if (el.innerHTML == 'stop') {
        if (i == 99) {
            i = 0
            stopWatchSeconds.innerHTML = i
            if (stopWatchMinutes.innerHTML == 59) {
                stopWatchMinutes.innerHTML = 0
                stopWatchHours.innerHTML++
            } else {
                stopWatchMinutes.innerHTML++
            }
        } else {
            i++
            stopWatchSeconds.innerHTML = i
        }
        setTimeout(() => {
            stopWatch(el, i)
        }, 10);
    }


}


// let stopH = document.querySelector(".stopwatch__hours")
// let stopM = document.querySelector(".stopwatch__minutes")
// let stopS = document.querySelector(".stopwatch__seconds")

// let x = 0

// let k = 0

// function stopWatch() {
//     setTimeout(() => {
//         x++
//         stopWatch()
//     }, 1000);
// }

// // console.log(stopWatch());
// // stopWatch()
// // let second  = stopWatch()

// let sWatchBtn = document.querySelector(".stopwatch__btn")
// let tabSpan = document.querySelector(".tabsLink__span")
// sWatchBtn.addEventListener("click", function () {
//     console.log(sWatchBtn);

//     if (sWatchBtn.innerHTML == "start") {

//         sWatchBtn.innerHTML = "stop"
//         tabSpan.classList.add("active")

//         stopS.innerText = stopWatch()

//     } else if (sWatchBtn.innerHTML == "stop") {
//         setTimeout(() => {
//             stopWatch()
//         }, 1000);
//         sWatchBtn.innerHTML = "clear"
//         tabSpan.classList.remove("active")
//         tabSpan.classList.add("active_clear")

//         stopS.innerText = "toxta"

//     } else {

//         sWatchBtn.innerHTML = "start"
//         tabSpan.classList.remove("active_clear")

//         stopS.innerText = k

//     }

// })