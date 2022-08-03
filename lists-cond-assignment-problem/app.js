const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            inputTask: "",
            showItems: true,
            currentName: "Hide"
        }   
    },
    watch: {
        showItems(value) {
            this.currentName = value ? "Hide" : "Show"
        }
    },
    methods: {
        addTask() { 
            this.tasks.push(this.inputTask)
        },
        hideShow() { 
            this.showItems = !this.showItems 
        }
    }
});
app.mount('#assignment');