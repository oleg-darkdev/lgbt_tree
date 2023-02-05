<script>
	import Card, {
		Content,
		PrimaryAction,
		Media,
		MediaContent,
		Actions,
		ActionButtons,
		ActionIcons
	} from '@smui/card';
	import Button, { Label } from '@smui/button';
	import SelectIngridient from './SelectIngridient.svelte';
	import ReactionMsg from './ReactionMsg.svelte';
	import trueReactions from '../../../../data/gamesApps/lgbt/reactions';

	let selectFirstIngridient = false,
		selectSecondIngridient = false,
		showFirstIngridient = true,
		showSecondIngridient = true,
		hideMixedBtn = false,
		noReactionMsg = false;

	let showMsgMenu = false,
		msgText = '';

	let firstIngridient = {
			number: 0
		},
		secondIngridient = {
			number: 0
		};

	let sortArr = [],
		resultReaction = [{}, {}, { img: '' }],
		temp = [];

	function findFirstIngridient() {
		trueReactions.forEach((reactionArrayForFirstElement, ind) => {
			if (reactionArrayForFirstElement[0].number == firstIngridient.number) {
				return sortArr.push(reactionArrayForFirstElement);
			}
			if (reactionArrayForFirstElement[1].number == firstIngridient.number) {
				return sortArr.push(reactionArrayForFirstElement);
			}
		});
	}

	function findSecondIngridient() {
		sortArr.forEach((reactionArrayForSecondElement) => {
			if (
				(reactionArrayForSecondElement[0].number == firstIngridient.number &&
					reactionArrayForSecondElement[1].number == secondIngridient.number) ||
				(reactionArrayForSecondElement[1].number == firstIngridient.number &&
					reactionArrayForSecondElement[0].number == secondIngridient.number)
			) {
				return (resultReaction = reactionArrayForSecondElement);
			} else {
				return (noReactionMsg = true);
			}
		});
	}

	function MsgMenu(text) {
		msgText = text;
		showMsgMenu = true;
	}
	export let wikipediaData;
</script>

<div style="display: flex; justify-content: center; align-items: center; width: 100%;">
	<Card style="width: 340px; margin: 0 0 25px 0; max-height: 600px;">
		<Content style="padding: 25; ">
			<div style=" display: flex; flex-direction: row; overflow-y: auto; max-height: 280px; ">
				{#if !resultReaction[0].img && !showMsgMenu}
					{#if showFirstIngridient}
						<Card
							style=" width: 140px; height: 70px; margin: 0 25px 0 0;"
							on:click={() => {
								selectFirstIngridient = true;
								selectSecondIngridient = false;
								hideMixedBtn = true;
								showSecondIngridient = false;
								showFirstIngridient = false;
							}}
						>
							<Media
								class="card-media-16x9"
								style="background-image: url({firstIngridient.img
									? firstIngridient.img
									: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/ingridient.png'});"
								aspectRatio="16x9"
							/>
						</Card>
					{/if}
					{#if selectFirstIngridient}
						<SelectIngridient
							{wikipediaData}
							bind:selectedIngridient={firstIngridient}
							bind:showIngridientsList={selectFirstIngridient}
							bind:hideMixedBtn
							bind:showSecondIngridient
							bind:showFirstIngridient
						/>
					{/if}

					{#if showSecondIngridient}
						<Card
							style=" width: 140px; height: 70px; margin: 0 25px 0 0;"
							on:click={() => {
								selectFirstIngridient = false;
								selectSecondIngridient = true;
								hideMixedBtn = true;
								showSecondIngridient = false;
								showFirstIngridient = false;
							}}
						>
							<Media
								class="card-media-16x9"
								style="background-image: url({secondIngridient.img
									? secondIngridient.img
									: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/ingridient.png'});"
								aspectRatio="16x9"
							/>
						</Card>
					{/if}
					{#if selectSecondIngridient}
						<SelectIngridient
							{wikipediaData}
							bind:selectedIngridient={secondIngridient}
							bind:showIngridientsList={selectSecondIngridient}
							bind:hideMixedBtn
							bind:showSecondIngridient
							bind:showFirstIngridient
						/>
					{/if}
				{/if}
			</div>

			{#if !hideMixedBtn && !resultReaction[0].img}
				{#if showMsgMenu}
					<ReactionMsg bind:msgText bind:showMsgMenu />
				{/if}
				<Card
					on:click={() => {
						if (firstIngridient.number && secondIngridient.number) {
							(sortArr = []), (temp = []);
							findFirstIngridient();
							findSecondIngridient();
						}
						if (!firstIngridient.number) {
							MsgMenu('First Ingridient');
						}
						if (!secondIngridient.number) {
							MsgMenu('Second Ingridient');
						}
						if (!secondIngridient.number && !firstIngridient.number) {
							MsgMenu('Second && First Ingridient');
						}
						if (noReactionMsg) {
							MsgMenu('No reaction');
						}
					}}
					style="width: 300px; margin: 15px 0 10px 0; background-image: url(https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/bg_btn_hint.png);height: 85px; "
				/>
			{/if}

			{#if resultReaction[0].img}
				<Card style=" width: 300px;  margin: 0  0 25px 0;">
					<Media
						class="card-media-16x9"
						style="background-image: url({resultReaction[2].img});"
						aspectRatio="16x9"
					/>
					<Actions fullBleed>
						<Button
							on:click={() => {
								resultReaction = [{}, {}, { img: '' }];
								firstIngridient = '';
								showMsgMenu = false;
								secondIngridient = '';
							}}
						>
							<Label>Сontinued</Label>
							<i class="material-icons" aria-hidden="true">arrow_forward</i>
						</Button>
					</Actions>
				</Card>
			{/if}
		</Content>
	</Card>
</div>
