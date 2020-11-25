const Calculator = {
    data() {
        return {
            currentNumber: 0,
            sign: "",
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
            if (this.currentNumber === 0) {
                this.currentNumber = number;
                this.result = this.currentNumber;
            } else {
                this.currentNumber = `${this.currentNumber}${number}`;
                this.result = this.currentNumber;
            }
            console.log(this.result)
        },
        addSign(sign) {
            this.sign = sign;
            this.result = `${this.currentNumber}${this.sign}`;
        }

    }
}

Vue.createApp(Calculator).mount('.calculator')