<script>
	import 'aos/dist/aos.css';
	import AOS from 'aos';
	import { onMount } from 'svelte';
	onMount(() => {
		AOS.init();
	});


</script>

<main class="main-content">
	<slot />
</main>

<style>
	:global(.bdr-25) {
		border-radius: 25px;
	}
	:global(.bdr-12) {
		border-radius: 12px;
	}
	* :global(.app-content) {
		flex: auto;
		overflow: auto;
		position: relative;
		flex-grow: 1;
	}

	:global(.wrap-game-block) {
		display: flex;
		height: 50%;
		padding: 4%;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		background-color: #191b1b;
		margin: 25px 0;
	}

	:global(.bg-img) {
		background-position: center center;
		background-repeat: no-repeat;
		background-attachment: fixed;
		background-size: cover;
		background-color: #fff;
	}
	:global(.wrap-games-hidden-block) {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.logo {
		background-image: url(img/logo.svg);
		padding: 0 5px 0 15px;
		margin: 10px 0 -10px 0;
		height: 40px;
		width: 200px;
		background-repeat: no-repeat;
	}
	.drawer-container {
		background-color: #191b1b;
		position: relative;
		display: flex;
		height: auto;
		width: 256px;
		padding: 50px 0 0 0;
		border: 1px solid var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.1));
		overflow: hidden;
		z-index: 1;
	}
	.main-content {
		overflow: auto;
		padding: 0px;
		height: 100%;
		box-sizing: border-box;
		z-index: 0;
		/* background-color:#191B1B; */
		overflow-x: hidden;
		overflow-y: hidden;
	}

	:global(a) {
		margin: 0;
		padding: 0;
		font-size: 100%;
		vertical-align: baseline;
		background: transparent;
		text-decoration: none;
	}

	/* Hide everything above this component. */
	:global(app),
	:global(body),
	:global(html) {
		display: block !important;
		height: auto !important;
		width: auto !important;
		position: static !important;
		background-color: #191b1b;
	}

	:global(.section-body) {
		display: flex;
		justify-content: center;

		/* padding: 125px 0; */
		padding: 50px 0;
	}

	:global(.tur-bg) {
		min-width: 380px;
		width: auto;
		max-width: 760px;
		/* max-height: 600px; */
		height: auto;
		background-color: #47babb;
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin: -40px 0 15px 0;
		padding: 50px 25px 25px 25px;
		border-radius: 4px;
	}
	:global(.section-svg-line) {
		display: block;
		width: 100%;
		/* margin-bottom: -15px; */
		/* overflow: hidden;
box-sizing: border-box; */
	}

	:global(.games-promo-wrap) {
		display: flex;
		justify-content: center;
		flex-direction: row;
		flex-wrap: wrap;
	}

	:global(.hidden) {
		display: none;
	}

	:global(.flex) {
		display: flex;
	}

	:global(.jc) {
		justify-content: center;
	}
</style>
