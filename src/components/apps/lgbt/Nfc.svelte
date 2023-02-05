<script>
	import Card, {
		Content,
		Media,
		PrimaryAction,
		Actions,
		ActionButtons,
		ActionIcons,
		MediaContent
	} from '@smui/card';
	import Button, { Label } from '@smui/button';
	import ResultAlchim from './alchimicReaction/ResultAlchim.svelte';
	import flagsList from '../lgbt/../../../data/gamesApps/lgbt/flagsInfo';

	const man = flagsList.man,
		woman = flagsList.woman,
		gay = flagsList.gay,
		lesbian = flagsList.lesbian,
		bisexual = flagsList.bisexual;

	const nfcTagsList = [
		{
			id: '04:c8:aa:ba:b8:5c:80',
			flag: man
		},
		{
			id: '04:a8:aa:ba:b8:5c:80',
			flag: woman
		},
		{
			id: '04:f4:04:ba:b8:5c:84',
			flag: bisexual
		}
	];
	$: status = '';
	$: step = 0;

	let firstIngr = {
			flag: {
				img: ''
			}
		},
		secondIngr = {
			flag: {
				img: ''
			}
		};

	async function nfc() {
		// ingr, tagData
		function findIngr() {
			firstIngr = nfcTagsList.find((flag) => flag.id === tagInfo[0]);
			secondIngr = nfcTagsList.find((flag) => flag.id === tagInfo[1]);
			// ingr = nfcTagsList.find((flag) => flag.id === tagData);

			// console.log(firstIngr);
			// console.log(secondIngr);
		}
		try {
			const ndef = new NDEFReader();
			await ndef.scan();
			status = '> Scan started';

			ndef.addEventListener('readingerror', () => {
				console.log('Argh! Cannot read data from the NFC tag. Try another one?');
			});

			ndef.addEventListener('reading', ({ message, serialNumber }) => {
				tagInfo.push(serialNumber);
				// console.log(tagInfo);
				findIngr();
				// if (step == 1) findIngr(firstIngr, tagInfo[0]);
				// if (step == 2) findIngr(secondIngr, tagInfo[1]);
				// console.log(`> Serial Number: ${serialNumber}`);
				// console.log(`> Records: (${message.records})`);
			});
		} catch (error) {
			console.log('Argh! ' + error);
		}
	}

	function clearArr() {
		tagInfo.pop();
	}

	if (!('NDEFReader' in window)) status = 'Web NFC is not available. Use Chrome on Android.';

	$: tagInfo = [];
	let result = {
		name: '',
		img: ''
	};

	let textSecondStep = 'Dołącz tag NFC do telefonu aby zidentyfikować token.';
</script>

<div style="display: flex; flex-direction: column; justify-content: center;">
	<div style="display: flex; justify-content: center; flex-direction: row; margin-bottom:20px;">
		<div style="margin: 10px;">
			<Card style=" width: 140px; height: 70px; margin: 0 25px 0 0;">
				<Media
					class="card-media-16x9"
					style="background-image: url({tagInfo.length < 1
						? 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/ingridient.png'
						: firstIngr.flag.img});"
					aspectRatio="16x9"
				/>
			</Card>
		</div>

		<div style="margin: 10px;">
			<Card style=" width: 140px; height: 70px; margin: 0 25px 0 0;">
				<Media
					class="card-media-16x9"
					style="background-image: url({tagInfo.length < 2
						? 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/ingridient.png'
						: secondIngr.flag.img});"
					aspectRatio="16x9"
				/>
			</Card>
		</div>
	</div>
	<Card>
		<Content>
			

			{#if step == 0}
				<h2>Krok #{step}</h2>
				<p>Zaczni przyłączać żetony gry do telefonu.</p>
			{:else if step == 1}
				<h2>Krok #{step}</h2>

				<p>Dołączyć następujący token</p>
				{#if tagInfo.length > 1}
					<ResultAlchim bind:step bind:tagInfo firstIngridient={firstIngr.flag} secondIngridient={secondIngr.flag} />
				{/if}
				<!-- {:else if step == 2}
				<p>Dołączyć następujący token</p> -->
				<!-- {:else}
				<p>Czy jesteś zadowolony z rezultatu?</p> -->
			{/if}
		</Content>
		<Actions>
			{#if step > 0}
				<Button
					on:click={() => {
						step--;
						clearArr();
					}}
				>
					<Label>Odwołanie</Label>
				</Button>
			{/if}
			{#if step < 1}
				<Button
					on:click={async () => {
						step++;
						nfc();
					}}
				>
					<Label>{step < 1 ? 'Rozpocząć' : 'Dalej'}</Label>
				</Button>
			{/if}
		</Actions>
	</Card>
</div>

<!-- <div style="display: flex; flex-direction: column; justify-content: center;">
	<div style="display: flex; justify-content: center; flex-direction: row;">
		<div style="margin: 10px;">
			<Card
				on:click={async () => {
					nfc();
					open = !open;
					tokenNumber = 1;
				}}
				style=" width: 140px; height: 70px; margin: 0 25px 0 0;"
			>
				<Media
					class="card-media-16x9"
					style="background-image: url(https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/ingridient.png);"
					aspectRatio="16x9"
				/>
			</Card>
		</div>

		<div style="margin: 10px;">
			<Card
				on:click={() => {
					nfc();
					open = !open;
					tokenNumber = 2;
				}}
				style=" width: 140px; height: 70px; margin: 0 25px 0 0;"
			>
				<Media
					class="card-media-16x9"
					style="background-image: url(https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/ingridient.png);"
					aspectRatio="16x9"
				/>
			</Card>
		</div>
	</div>

	привязать к ним конкретные айдишки тэгов, и симулировать две комбинации с тремя тэгами

	взять код отсюда: https://glitch.com/edit/#!/web-nfc-demo?path=script.js%3A1%3A0
	{#if open}
		<Card style="margin-top: 25px;">
			<PrimaryAction class="mdc-typography--body2" padded>
				<p>Dołącz tag NFC do telefonu aby zidentyfikować token #{tokenNumber}</p>

				<span>{status}</span>
				<span>{messageText}</span>
			</PrimaryAction>
		</Card>
	{/if}


</div> -->
