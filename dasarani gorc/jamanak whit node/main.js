// class clock {
//     constructor(time) {

//         setInterval(function () {
//             this.d = new Date();
//             this.m = this.d.getUTCMinutes();
//             this.s = this.d.getSeconds();
//             this.c = this.d.getUTCHours() + time;
//             if (this.m < 10) {
//                 this.m = "0" + this.d.getUTCMinutes()
//             }

//             if (this.s < 10) {
//                 this.s = "0" + this.d.getSeconds()
//             }

//             console.log(`${this.c}:${this.m}:${this.s}`);
//         }, 1000);
//     };

// }
// new clock(1)



////---------------Vom Maxim
const args = process.argv.slice(2)

class Clock {
    constructor(offset) {
        this.offset = parseFloat(offset.replace(",", ".")) * 3600000;
        this.tick = this.tick.bind(this);
        setInterval(this.tick, 1000);
    }
    addZero(num) {
        return num < 10 ? "0" + num : num
    }
    tick() {
        const UTCMilliseconds = Date.now() + new Date().getTimezoneOffset() * 60000
        const targetTimeMilliseconds = UTCMilliseconds + this.offset
        const now = new Date(targetTimeMilliseconds)
        const hours = this.addZero(now.getHours())
        const minutes = this.addZero(now.getMinutes())
        const seconds = this.addZero(now.getSeconds())

        console.log(`${hours}:${minutes}:${seconds}`)
    }
}

new Clock(args[0])