<template>
  <!-- Separate Refs
    <h2>My Course Goal</h2>
    <h3 v-show="showGoal">{{goal}}</h3>
    <button @click="toggleGoal">Toggle Goal</button>
    with help of the composition API 
  -->

  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3 v-show="goal.show">{{goal.text}}</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toggleGoal">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate Refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API --> 
</template>

<script>
// import {ref} from 'vue';
import {reactive} from 'vue';

export default {
  setup(){
    // ------------- Separate Refs --------------
    // const goal = ref('Learn Vue!');
    // const showGoal = ref(true);

    // function toggleGoal(){
    //   showGoal.value = !showGoal.value;
    // }

    // return {
    //   goal: goal,
    //   showGoal: showGoal,
    //   toggleGoal: toggleGoal
    // }
    // ------------------------------------------

    // -------------- Ref Object ----------------
    // const goal = ref({
    //     text: 'Learn Vue!',
    //     show: true
    // });

    // function toggleGoal(){
    //   goal.value.show = !goal.value.show;
    // }

    // return {
    //   goal: goal,
    //   toggleGoal: toggleGoal
    // }
    // ------------------------------------------

    // ------------  Reactive Object ------------
    const goal = reactive({
        text: 'Learn Vue!',
        show: true
    });

    function toggleGoal(){
      goal.show = !goal.show;
    }

    return {
      goal: goal,
      toggleGoal: toggleGoal
    }
    // ------------------------------------------

  }  
}
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>