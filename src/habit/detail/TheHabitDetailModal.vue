<template>
  <v-layout justify-center>
    <v-dialog v-model="dialog" hide-overlay max-width="290">
      <v-card>
        Modal content
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="$emit('close-habit-modal')"
            >Disagree</v-btn
          >
          <v-btn color="green darken-1" text @click="saveHabit">Agree</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  name: 'TheHabitDetailModal',
  props: {
    openModal: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    dialog: {
      get() {
        if (this.openModal) {
          return this.openModal;
        }
        return false;
      },
      set(newValue) {
        if (!newValue) {
          this.$emit('close-habit-modal');
        }
      },
    },
  },
  methods: {
    saveHabit() {
      // Save habit data
      this.$emit('close-habit-modal');
      return null;
    },
  },
};
</script>
