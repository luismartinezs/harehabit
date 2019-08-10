<template>
	<v-layout justify-center>
		<v-dialog v-model="isModalOpen" hide-overlay max-width="500">
			<v-card>
				<v-form v-model="validInput">
					<v-container grid-list-xl>
						<v-layout wrap>
							<v-flex xs12>
								<v-text-field v-model="habitName" :rules="habitNameRules" label="Habit name" required></v-text-field>
							</v-flex>
						</v-layout>
					</v-container>
				</v-form>

				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn color="grey darken-1" text @click="$emit('close-habit-modal')">Discard</v-btn>
					<v-btn color="green darken-1" text @click="saveHabit">Save</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</v-layout>
</template>

<script>
import { mapActions } from 'vuex';
import { ADD_HABIT } from '@/App/store/actions';

export default {
	name: 'TheHabitDetailModal',
	props: {
		openModal: {
			type: Boolean,
			default: false
		}
	},
	data: () => ({
		validInput: false,
		habitName: '',
		habitNameRules: [(v) => !!v || 'Habit name is required']
	}),
	computed: {
		isModalOpen: {
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
			}
		}
	},
	methods: {
		...mapActions([ADD_HABIT]),
		saveHabit() {
			if (!this.validInput) return null;
			this.ADD_HABIT({ title: this.habitName });
			this.$emit('close-habit-modal');
			return null;
		}
	}
};
</script>
