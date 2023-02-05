<script>
	import List, { Item, Graphic, Meta, Text, PrimaryText, SecondaryText } from '@smui/list';

	let selection = 'Stephen Hawking';
	let selectionIndex = 0;

	export let flags;
</script>

<List
	style="width: auto;"
	class="demo-list"
	twoLine
	avatarList
	singleSelection
	bind:selectedIndex={selectionIndex}
>
	{#each flags as flag}
		<Item
			style="margin: 0 10px 0 0; height: 70px; padding: 0; "
			on:SMUI:action={() => (selection = flag.name)}
			disabled={flag.disabled}
			selected={selection === flag.name}
		>
			<!-- <Graphic style="background-image: url();"
        /> -->
			<div class="flag-promo" style="background-image: url({flag.img});" />
			<Text>
				<PrimaryText>#{flag.number}</PrimaryText>
				<SecondaryText style="overflow: hidden;">{flag.name}</SecondaryText>
			</Text>
		</Item>
	{/each}
</List>

<style>
	.flag-promo {
		width: 100px;
		height: 40px;
		margin: 0 10px 0 0;
		border-radius: 4px;
		background-size: cover;
		background-position: center;
		background-size: cover;
	}
</style>
