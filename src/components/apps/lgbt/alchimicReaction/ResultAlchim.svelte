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
			// console.log(sortArr);
			// console.log(reactionArrayForSecondElement);
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
	export let firstIngridient = {
			number: 0
		},
		secondIngridient = {
			number: 0
		},
		step,
        tagInfo;

	// console.log(firstIngridient);
	// console.log(secondIngridient);
</script>

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
				// console.log('numbers');
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
				MsgMenu('Nie ma takiej reakcji 😅');
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
					step = 0;
                    tagInfo = [];
				}}
			>
				<Label>Сontinued</Label>
				<i class="material-icons" aria-hidden="true">arrow_forward</i>
			</Button>
		</Actions>
	</Card>
{/if}
