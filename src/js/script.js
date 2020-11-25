const Calculator = {
    data() {
        return {
            currentNumber: 0,
            sign: "",
            result: 155
        }
    },
    methods: {
        clear() {
            this.result = 0;
            this.sign = "";
            this.currentNumber = 0;
        },
        addNumber(number) {
            this.currentNumber = number;
            this.result = this.currentNumber;
        }

    }
}

Vue.createApp(Calculator).mount('.calculator')