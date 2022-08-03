const app = Vue.createApp({
    data() { 
        return {
            output_1: "OUTPUT",
            output_2: "OUTPUT"
        }
    },
    methods: {
        showAlert() {
            alert("This is an Alert!")
        },
        input1Change(event) { 
            this.output_1 = event.target.value;
        },
        input2Change(event) { 
            this.output_2 = event.target.value;
        }
    }
});
app.mount('#assignment')