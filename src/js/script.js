const Calculator = {
    data() {
        return {
            currentNumber: 0,
            sign: false,
            result: 0,
        }
    },
    methods: {
        clear() {
            this.result = 0;
            this.sign = false;
            this.currentNumber = 0;
        },
        addNumber(number) {
            this.currentNumber = (this.currentNumber * 10) + number;
        },
        addSign(sign) {
            if (this.sign) {
                this.signsLogic();
            } else {
                this.result = this.currentNumber;
            }
            this.sign = sign;
            this.currentNumber = 0;
        },
        signsLogic() {
            let obj = {
                "+": () => { this.result += this.currentNumber; },
                "-": () => { this.result -= this.currentNumber },
                "x": () => { this.result *= this.currentNumber },
                "/": () => { this.result /= this.currentNumber },
                "=": () => { return this.result }
            }
            obj[this.sign]();
            this.currentNumber = 0;
            this.sign = false;
        }
    },
    computed: {
        updateResult() {
            return this.result;
        }
    }
}

Vue.createApp(Calculator).mount('.calculator')