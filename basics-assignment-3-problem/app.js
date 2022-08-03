const app = Vue.createApp({
    data() { 
        return {
            nvalue: 0
        }
    },
    watch: {
        nvalue() {
            const that = this;
            setTimeout(function () { 
                that.nvalue = 0
            }, 5000);
        }
    },
    computed: {
        showresult() {
            return this.nvalue < 37 ?
                "Not there yet" :
                (this.nvalue > 37 ? "Too much!" : this.nvalue)
        }
    },
    methods: {
        add(n) { 
            this.nvalue += n;
        }
    }
});
app.mount('#assignment');