const Calculator = {
    data() {
        return {
            currentNumber: 0,
            sign: false,
            result: 0
        }
    },
    methods: {
        clear() {
            this.result = 0;
            this.sign = "";
            this.currentNumber = 0;
        },
        addNumber(number) {
            this.currentNumber = (this.currentNumber * 10) + number;
        },
        addSign(sign) {
            this.sign = sign;
            console.log(this.sign)
            console.log(this.currentNumber)
            if (this.sign == "+") {
                this.result += this.currentNumber;
            } else if (this.sign == "-") {
                this.result -= this.currentNumber;
            } else if (this.sign == "*") {
                this.result *= this.currentNumber;
            } else if (this.sign == "/") {
                this.result /= this.currentNumber;
            } else if (this.sign == "=" && this.currentNumber) {
                console.log(this.result)
            }
            this.currentNumber = 0;
            this.sign = false;
            console.log(this.result)
        }
    },
    computed: {
        updateResult() {
            return this.result;
        }
    }
}

Vue.createApp(Calculator).mount('.calculator')