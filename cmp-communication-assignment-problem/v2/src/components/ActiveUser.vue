<template>
        <div class="row">
            <div style="float: left; text-align: right; width: 45%;">
                <h3> Username </h3>
                <h3> Age </h3>
            </div>
            <div style="float: left; text-align: center; width: 15%;">
                <h3> {{username}} </h3>
                <h3> {{age}} </h3>
            </div>
        <br style="clear:both;"/>
        </div>
</template>

<script>
export default {
    props: {       
        username : {
            required: true,
            type: String,
        },
        age : {
            required: true,
            type: String,
        }
    }
}
</script>

<style scoped>
li {
  margin: 1rem 0;
  font-size: 1.25rem;
  font-weight: bold;
  background-color: #8ddba4;
  padding: 0.5rem;
  color: #1f1f1f;
  border-radius: 25px;
}
</style>