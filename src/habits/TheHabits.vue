<template>
  <v-list>
    <v-list-item-group>
      <template v-for="(item, index) in items">
        <v-list-item :key="item.title">
          <template v-slot:default="{ active, toggle }">
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>

            <v-list-item-action>
              <v-list-item-action-text
                v-text="item.action"
              ></v-list-item-action-text>
            </v-list-item-action>
          </template>
        </v-list-item>

        <v-divider v-if="index + 1 <= items.length" :key="index"></v-divider>
      </template>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  name: 'TheHabits',
  data: () => ({
    items: [
      {
        title: 'Brush teeth',
      },
      {
        title: 'Play badminton',
      },
      {
        title: 'Shoulder exercises',
      },
      {
        title: '300 pushups',
      },
      {
        title: 'Go to karaoke',
      },
    ],
  }),
};
</script>
