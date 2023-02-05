<script>
	import List, { Item, Graphic, Meta, Text, PrimaryText, SecondaryText } from '@smui/list';
	import { createEventDispatcher } from 'svelte';
	import { fly } from 'svelte/transition';

	const dispatch = createEventDispatcher();

	const showReaction = () => dispatch('showReaction');


	export let sortArr;
	export let selectionReaction;
</script>

<List
	style="width: auto;"
	class="demo-list"
	twoLine
	avatarList
	singleSelection
>

	{#each  sortArr as reaction}
		<Item style="margin: 0px 0px 10px 0; height: 60px; padding: 0; "
			on:SMUI:action={() => {
				selectionReaction = reaction
				showReaction();
			}}
			disabled={reaction.disabled}
		>
		<!-- transition:fly="{{ y: -100, duration: 600 }}" -->
			 <div  class="reaction-promo" style="background-image: url({reaction[0].img});" />
			 <div  class="reaction-promo" style="background-image: url({reaction[1].img});" />
			 <div  class="reaction-promo" style="background-image: url({reaction[2].img});" />
			<!-- <Text>
				<PrimaryText>{reaction[0].number} + {reaction[1].name} </PrimaryText>
				<SecondaryText style="overflow: hidden;">{reaction[2].number}</SecondaryText>
			</Text> -->
		</Item>
	{/each}
</List>

<style>
	.reaction-promo {
		width: 100px;
		height: 60px;
		margin: 0 5px 0 0;
		border-radius: 4px;
		background-size: cover;
		background-position: center;
		background-size: cover;
	}
</style>
