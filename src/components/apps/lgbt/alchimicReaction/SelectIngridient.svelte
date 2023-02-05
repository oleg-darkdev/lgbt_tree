<script>
	import List, { Item, Graphic, Meta, Text, PrimaryText, SecondaryText } from '@smui/list';
	export let wikipediaData;
    export let selectedIngridient;
    export let showIngridientsList;
    export let hideMixedBtn;
	export let showSecondIngridient;
	export let showFirstIngridient;
</script>


<List
	style="width: 100%; height: 560px; "
	class="demo-list"
	twoLine
	avatarList
	singleSelection
>
	{#each wikipediaData as flag}
		<Item style="margin: 0 10px 0 0; height: 70px; padding: 0; "
			on:SMUI:action={() => {
                selectedIngridient = flag;
                showIngridientsList = false;
                hideMixedBtn = false;
				showSecondIngridient = true;
				showFirstIngridient = true;
            }}>
			<div class="flag-promo" style="background-image: url({flag.img});" />
			<Text>
				<PrimaryText style="color: #fff;">#{flag.number}</PrimaryText>
				<SecondaryText style="overflow: hidden; color: #fff;">{flag.name}</SecondaryText>
			</Text>
		</Item>
	{/each}
</List>

<style>
	.flag-promo {
		width: 100px;
		height: 60px;
		margin: 0 10px 0 0;
		border-radius: 4px;
		background-size: cover;
		background-position: center;
		background-size: cover;
	}
</style>
