<template>
	<v-app>
		<div id="app">
			<the-header @open-habit-modal="openHabitModal" />
			<the-habits @open-habit-modal="openHabitModal" />
			<the-habit-detail-modal
				:openModal="openModal"
				@close-habit-modal="closeHabitModal"
				@click:outside="closeHabitModal"
			/>
		</div>
	</v-app>
</template>

<script>
import TheHeader from './component/TheHeader.vue';
import TheHabits from '@/habit/list/TheHabits.vue';
import TheHabitDetailModal from '@/habit/detail/TheHabitDetailModal.vue';

export default {
	name: 'App',
	components: {
		TheHeader,
		TheHabits,
		TheHabitDetailModal
	},
	data: () => ({
		openModal: false
	}),
	methods: {
		openHabitModal({ id }) {
			console.log('id: ', id);
			this.openModal = true;
		},
		closeHabitModal() {
			this.openModal = false;
		}
	}
};
</script>

<style lang="scss">
body {
	font-family: 'Roboto', sans-serif;
}
</style>
