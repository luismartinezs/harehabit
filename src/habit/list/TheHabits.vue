<template>
	<v-list>
		<v-list-item-group>
			<template v-for="(habit, index) in habits">
				<v-list-item :key="habit.title">
					<template v-slot:default="{ active, toggle }">
						<v-list-item-content>
							<v-list-item-title v-text="habit.title"></v-list-item-title>
						</v-list-item-content>

						<v-list-item-action>
							<v-list-item-action-text v-text="habit.action"></v-list-item-action-text>
						</v-list-item-action>
					</template>
				</v-list-item>

				<v-divider v-if="index + 1 <= habit.length" :key="index"></v-divider>
			</template>
		</v-list-item-group>
	</v-list>
</template>

<script>
import { mapGetters } from 'vuex';
import { GET_HABIT_LIST } from '@/App/store/getters';

export default {
	name: 'TheHabits',
	computed: {
		...mapGetters({ habits: [GET_HABIT_LIST] })
	}
};
</script>
