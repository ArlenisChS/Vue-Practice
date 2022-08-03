const app = Vue.createApp({
    data() {
        return {
            inputText: "",
            pressedButton: false,
            inputColor: ""
        }   
    },
    computed: {
        userClasses() {
            return {
                user1: this.inputText === "user1",
                user2: this.inputText === "user2",
                hidden: this.pressedButton,
                visible: !this.pressedButton
            }
        },
        colorStyle() {
            return {
                color: this.inputColor
            }
        }
    },
    methods: {
        onClick() { 
            this.pressedButton = !this.pressedButton
        }
    }
});
app.mount('#assignment');