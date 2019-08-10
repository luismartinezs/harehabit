<template>
  <v-toolbar>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-spacer></v-spacer>
    <v-toolbar-title>Harehabit</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn @click.stop="$emit('open-habit-modal')" icon>
      <v-icon>mdi-plus-circle</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  name: 'TheHeader',
};
</script>
