<template> 
  <header> <h1> App Test </h1> </header>
  <section>
    <h2> User Data </h2>
    <user-data @changeusername="changeUsername" @changeage="changeage"></user-data>
  </section>
  <section>
    <h2> Active User </h2>
      <active-user :username="username" :age="age"/>
  </section>
</template>

<script>
export default {
  data(){
    return {
      username: "",
      age: ""
    }
  },
  methods: {
    changeUsername(username){
      this.username = username
    },
    changeage(age){
      this.age = age
    }
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
  font-family: 'Jost', sans-serif;
  text-align: center;
}

section {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem;
  border-radius: 10px;
  padding: 1rem;
  background-color: #1b995e;
  color: white;
}

ul {
  list-style: none;
  margin: 1rem 0;
  padding: 0;
}

input {
  font: inherit;
  border: 1px solid #ccc;
}

input:focus {
  outline: none;
  border-color: #1b995e;
  background-color: #d7fdeb;
}

button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

button:hover,
button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #1b995e;
  margin: 0 0 1rem 0;
}

h3 {
  font-size: 1.5rem;
  border-bottom: 2px solid #ccc;
  color: #363636;
  margin: 0 0 1rem 0;
}

</style>