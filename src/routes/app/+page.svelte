<script>
	import Paper, { Title, Content, Subtitle } from '@smui/paper/dist';
	import Card, {
		PrimaryAction,
		Actions,
		ActionButtons,
		ActionIcons,
		Media,
		MediaContent
	} from '@smui/card';

	import Nfc from '../../components/apps/lgbt/Nfc.svelte';
	import FlagCard from '../../components/apps/lgbt/FlagCard.svelte';
	// import SmartyFlagList from '../../components/apps/lgbt/SmartyFlagList.svelte'
	// import TabPanel from '../../components/apps/lgbt/TabPanel.svelte';
	import allflags from '../../data/gamesApps/lgbt/arrayFlags.js';
	import AlchimIngridients from '../../components/apps/lgbt/alchimicReaction/AlchimIngridients.svelte';

	const lesbianFlags = allflags.lesbian,
		bearFlags = allflags.bear,
		gayFirstPartFlags = allflags.gayFirstPart,
		gaySecondPartFlags = allflags.gaySecondPart,
		bisexualFlags = allflags.bisexual;

	let showWikipedia = false,
		showNfc = false,
		showNfcCard = true,
		wikipediaData = [];

	let brandColor = '#702282';

	let branches = [
		{
			data: lesbianFlags,
			name: 'Lesbian',
			img: `https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/main__menu/lesbian.png`
		},
		{
			data: gayFirstPartFlags,
			name: '',
			img: `https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/main__menu/gay_1.png`
		},
		// {
		//   data: gaySecondPartFlags,
		//   name: 'Bear',
		//   img: `https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/main__menu/bear.png`,
		// },
		{
			data: bearFlags,
			name: 'Bear',
			img: `https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/main__menu/bear.png`
		},
		{
			data: bisexualFlags,
			name: 'Bisexual',
			img: `https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/main__menu/bisexual.png`
		}
	];
</script>

<div class="app-wrap">
	<Paper
		style="width: auto; min-height: 100vh; width: 90%; margin: 15px 20%; max-width: 1200px; background-color: {brandColor};"
		class="paper-demo"
	>
		<Content
			style="display: flex; align-items: center; flex-direction: column;
"
		>
			{#if showNfc}
				<div style="display: flex; flex-direction: row; flex-wrap: wrap;">
					<Nfc />
				</div>
			{:else}
				<!-- {#if showNfcCard} -->
					<div class="nfc-wrap">
						<!-- <div
						
						class="card-media-square mdc-card__media mdc-card__media--square"
						style="width: 500px; max-height: 250px; margin-bottom: 50px; background-image: url(/images/nfc.svg);"
					/> -->
						<Card style="width: 200px; margin-bottom: 25px;" on:click={() => (showNfc = true)}>
							<Media
								class="card-media-square"
								style="background-image: url(/images/nfc.svg);"
								aspectRatio="square"
							/>
						</Card>
					</div>
				<!-- {/if} -->
				<div class="branches-wrap" style={showWikipedia ? 'display: none' : ''}>
					{#each branches as branch}
						<Card
							style="width: 300px; margin: 5px;"
							on:click={() => {
								showNfcCard = false;
								showWikipedia = true;
								wikipediaData = branch.data;
							}}
						>
							<Media
								class="card-media-square"
								style="background-image: url({branch.img});"
								aspectRatio="square"
							/>
						</Card>
					{/each}
				</div>

				<div class={showWikipedia ? '' : 'hidden'}>
					<AlchimIngridients {wikipediaData} />
					<div class="flags">
						{#each wikipediaData as flag}
							<FlagCard {flag} {brandColor} />
						{/each}
					</div>
				</div>
			{/if}
		</Content>
	</Paper>
</div>

<style>
	.nfc-wrap {
		width: 100%;
		display: flex;
		justify-content: center;
	}
	.app-wrap {
		display: flex;
		justify-content: center;
		width: 100%;
		padding: 0 auto;
	}
	.branches-wrap {
		max-width: 720px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		flex-wrap: wrap;
		height: auto;
	}
	.flags {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		width: 100%;
		/* max-width: 700px; */
		min-width: 350px;
		margin: 0;
		padding: 0;
	}

	.smartyFlagList-wrap {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-content: center;
		align-items: center;
		width: 100%;
		padding: 0;
		flex-wrap: wrap;
	}
</style>
