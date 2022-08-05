<template>
    <div class="row">
        <div style="float: left; text-align: right; width: 45%;">
            <h3> Username </h3>
            <h3> Age </h3>
        </div>
        <div style="float: left; text-align: center; width: 15%;">
            <p/>
            <input type="text" v-model="username">
            <p/>
            <input type="text" v-model="age">
        </div>
    <br style="clear:both;"/>
    </div>
    <br/>
</template>

<script>
export default {
    data() {
        return {
            username:"",
            age:""
        }
    }, 
    watch: {
        username(value){
            this.$emit("changeusername", value)
        },
        age(value){
            this.$emit("changeage", value)
        }
    },
    emits: ["changeusername", "changeage"]
}
</script>

<style scoped>
button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}
</style>