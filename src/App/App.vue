<template>
  <div id="app">
    <the-header />
    <the-habits />
  </div>
</template>

<script>
import TheHeader from './component/TheHeader.vue';
import TheHabits from '@/habits/TheHabits.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
    TheHabits,
  },
};
</script>

<style lang="scss">
body {
  font-family: 'Roboto', sans-serif;
}
</style>
