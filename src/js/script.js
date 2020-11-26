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
            console.log(typeof number)
            this.currentNumber = (this.currentNumber * 10) + number;
        },
        addSign(sign) {
            console.log(typeof sign)
        }
    },
    computed: {
        updateResult() {
            return this.result;
        }
    }
}

Vue.createApp(Calculator).mount('.calculator')