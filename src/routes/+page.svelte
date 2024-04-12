<script>
	import Cards from '../components/landing/Cards.svelte';
	import TransparentCardBtn from '../components/landing/TransparentCardBtn.svelte';
	import TransparentCard from '../components/landing/TransparentCard.svelte';
	import ImageGallery from '../components/landing/ImageGallery.svelte';

	let dataPinkSection = [
		{
			title: 'Cel projektu',
			description: `jest sprawienie, aby pierwsze wprowadzenie do społeczności LGBTQ2S+ było dla graczy jak
					najciekawsze. Ten cel zostanie osiągnięty za pomocą edukacyjnej gry planszowej oraz
					aplikacji internetowej.`
		},
		{
			title: 'Cel gry planszowej',
			description: `jest poinformowanie społeczności w zabawny sposób o tym, jak rozwijała się społeczność
					LGBTQ2S+, jaka jest jej historia i jakich flagużywa.`
		},
		{
			title: 'Problem',
			description: `na który staram się wpływać: stereotypowe postrzeganie społeczności LGBTQ2S+ - jego
					historia i filozofia. Wiele osób jest po prostu wyobcowanych ze społeczności LGBTQ2S+ i
					nie wie jak zrobić pierwszy krok w kierunku jej poznania - proponuję zacząć od gry
					planszowej.`
		}
	];

	let dataBlueSection = [
		{
			title: '',
			description: ``
		}
	];
</script>

<section class="" style="background-color: #fff; height: 60vh;">
	<div class="wrap">
		<ul style="max-width: 760px; width: 90%;">
			<li style="--clr:#ff6492">
				<a href="#" data-text="&nbsp;Drzewo">&nbsp;Drzewo&nbsp;</a>
			</li>
			<li style="--clr:#00ade1">
				<a href="#" data-text="&nbsp;Genealogiczne">&nbsp;Genealogiczne&nbsp;</a>
			</li>
			<li style="--clr:#00dc82">
				<a href="#" data-text="&nbsp;Flag">&nbsp;Flag&nbsp;</a>
			</li>
			<li style="--clr:#ffdd1c">
				<a href="#" data-text="&nbsp;LGBTQ2S+">&nbsp;LGBTQ2S+&nbsp;</a>
			</li>
		</ul>
	</div>
</section>

<section class="py-5 section-bubble1">
	<div class="">
		<Cards />
	</div>
</section>
<section class="py-5 section-bubble2">
	<div class="card-gallery">
		<TransparentCard data={dataPinkSection} />
	</div>
</section>
<section class="py-5 section-bubble3">
	<div class="">
		<TransparentCardBtn />
	</div>
</section>
<section class="py-5 section-bubble4">
	<!-- <TransparentCard data={dataBlueSection} /> -->
	<div
		data-aos="flip-up"
		data-aos-delay="100"
		data-aos-duration="1000"
		data-aos-once="false"
		data-aos-mirror="true"
		style="display: flex; align-items: center; flex-direction: column; margin-bottom: 60px;"
	>
		<h2 style="max-width: 560px; text-align: center;">
			Interakcja pomiędzy aplikacją a grą planszową za pomocą NFC
		</h2>
		<iframe
			style="border-radius: 2%;"
			width="560"
			height="315"
			src="https://www.youtube.com/embed/ZIGONYVxp5A"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen
		/>
	</div>
	<div
		data-aos="flip-up"
		data-aos-delay="100"
		data-aos-duration="1000"
		data-aos-once="false"
		data-aos-mirror="true"
		style="display: flex; align-items: center; flex-direction: column;"
	>
		<h2 style="max-width: 560px; text-align: center;">Demonstracja online biblioteki flag LGBT</h2>
		<iframe
			style="border-radius: 2%;"
			width="560"
			height="315"
			src="https://www.youtube.com/embed/i0mx47jFJeA"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen
		/>
	</div>
</section>
<section class="py-5 section-bubble5">
	<div
		data-aos="zoom-in"
		data-aos-delay="100"
		data-aos-duration="1000"
		data-aos-once="false"
		data-aos-mirror="true"
		style="padding-bottom: 80px;"
		class=""
	>
		<p>Zrobione podczas GameJam 2023</p>
		<h2>artysta Oleg DarkDev</h2>
		<!-- <ImageGallery /> -->
		<a href="https://globalgamejam.org/2023/games/korzenie-lgbt-3" target="_blank" class="link">
			Wspieraj projekt
		</a>
		<br /><br /><br /><br />
	</div>
</section>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Mochiy+Pop+One&display=swap');
	* {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
		font-family: 'Mochiy Pop One', sans-serif;
	}
	.link {
		display: inline-block;
		font-size: 1.1em;
		color: #333333;
		background: #36d399;
		padding: 10px;
		border-radius: 4px;
		text-decoration: none;
		font-weight: 700;
		margin-top: 20px;
	}

	.link:hover {
		background: #ffcf4d;
		border: 1px solid rgba(255, 0, 88, 0.4);
		box-shadow: 0 1px 15px rgba(1, 1, 1, 0.2);
	}
	.wrap {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		background: #333333;
	}
	ul {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 30px;
	}
	ul li {
		position: relative;
		list-style: none;
	}
	ul li a {
		font-size: 4em;
		text-decoration: none;
		letter-spacing: 2px;
		line-height: 1em;
		text-transform: uppercase;
		color: transparent;
		-webkit-text-stroke: 1px rgba(255, 255, 255, 0.5);
	}

	@media (max-width: 450px) {
		ul li a {
			font-size: 1.7em;
			letter-spacing: 1px;
			line-height: 2em;
		}
		ul li a::before {
			border-right: 4px solid var(--clr);
		}
		ul {
			gap: 10px;
		}
	}
	ul li a::before {
		content: attr(data-text);
		position: absolute;
		color: var(--clr);
		width: 0;
		overflow: hidden;
		transition: 1s;
		border-right: 8px solid var(--clr);
		-webkit-text-stroke: 1px var(--clr);
	}
	ul li a:hover::before {
		width: 100%;
		filter: drop-shadow(0 0 25px var(--clr));
	}

	.card-gallery {
		display: flex;
		flex-direction: row;
	}
	/* 
		Bubles
	*/
	.section-bubble,
	.section-bubble_type-b,
	.section-bubble_type-a,
	.section-bubble4,
	.section-bubble3,
	.section-bubble2,
	.section-bubble1 {
		margin-bottom: 20vw;
		position: relative;
	}
	.section-bubble:after,
	.section-bubble_type-b:after,
	.section-bubble_type-a:after,
	.section-bubble4:after,
	.section-bubble3:after,
	.section-bubble2:after,
	.section-bubble1:after {
		content: '';
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 20vw;
		background: url('') green;
		background-size: 100%;
		transform: translate(0, 100%);
	}

	.section-bubble1 {
		background-color: #333333;
	}
	.section-bubble1:after {
		background-color: #f87272;
		background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='%23333333' viewBox='0 0 1185 248'><circle cx='76' cy='121.1' r='20' class='a'/><circle cx='870' cy='201.1' r='11' class='a'/><circle cx='814.5' cy='165.6' r='24.5' class='a'/><path d='M0 0v17.7c22.7 14.8 53 31.9 90.7 51.5 150.8 78 322 116.6 424.8 69.3 102.9-47.4 138-69.3 210.8-69.3s118.3 48.6 219.5 38.3 76.3-59.3 188.7-59.3c18.9 0 35.5 2.6 50.5 6.8V0H0z' class='a'/></svg>");
	}

	.section-bubble2 {
		background-color: #f87272;
	}
	.section-bubble2:after {
		background-color: #333333;
		background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1185 248'><path d='M50.5 199.8c112.4 0 87.5-49 188.7-59.3s146.7 38.3 219.5 38.3 107.9-21.9 210.8-69.3c102.8-47.3 274-8.7 424.8 69.3 37.7 19.5 68 36.7 90.7 51.5V0H0v193C15 197.2 31.6 199.8 50.5 199.8zM1109 106.9c11 0 20 9 20 20 0 11-9 20-20 20s-20-9-20-20C1089 115.9 1098 106.9 1109 106.9zM370.5 57.9c13.5 0 24.5 11 24.5 24.5 0 13.5-11 24.5-24.5 24.5S346 95.9 346 82.4C346 68.9 357 57.9 370.5 57.9zM315 35.9c6.1 0 11 4.9 11 11s-4.9 11-11 11 -11-4.9-11-11S308.9 35.9 315 35.9z' fill='%23F87272'/></svg>");
	}

	.section-bubble3 {
		background-color: #333333;
	}
	.section-bubble3:after {
		background-color: #36d399;
		background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='%23333333' viewBox='0 0 1185 248'><circle cx='76' cy='121.1' r='20' class='a'/><circle cx='870' cy='201.1' r='11' class='a'/><circle cx='814.5' cy='165.6' r='24.5' class='a'/><path d='M0 0v17.7c22.7 14.8 53 31.9 90.7 51.5 150.8 78 322 116.6 424.8 69.3 102.9-47.4 138-69.3 210.8-69.3s118.3 48.6 219.5 38.3 76.3-59.3 188.7-59.3c18.9 0 35.5 2.6 50.5 6.8V0H0z' class='a'/></svg>");
	}
	.section-bubble3 h2 {
		color: white;
	}
	.section-bubble3 p {
		color: white;
		opacity: 0.8;
	}

	.section-bubble4 {
		background-color: #36d399;
	}
	.section-bubble4:after {
		background-color: #333333;
		background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1185 248'><path d='M50.5 199.8c112.4 0 87.5-49 188.7-59.3s146.7 38.3 219.5 38.3 107.9-21.9 210.8-69.3c102.8-47.3 274-8.7 424.8 69.3 37.7 19.5 68 36.7 90.7 51.5V0H0v193C15 197.2 31.6 199.8 50.5 199.8zM1109 106.9c11 0 20 9 20 20 0 11-9 20-20 20s-20-9-20-20C1089 115.9 1098 106.9 1109 106.9zM370.5 57.9c13.5 0 24.5 11 24.5 24.5 0 13.5-11 24.5-24.5 24.5S346 95.9 346 82.4C346 68.9 357 57.9 370.5 57.9zM315 35.9c6.1 0 11 4.9 11 11s-4.9 11-11 11 -11-4.9-11-11S308.9 35.9 315 35.9z' fill='%2336D399'/></svg>");
	}

	.section-bubble5 {
		background: #333333;
		color: white;
		text-align: center;
	}

	.section-bubble_type-a:after {
		background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='red' viewBox='0 0 1185 248'><circle cx='76' cy='121.1' r='20' class='a'/><circle cx='870' cy='201.1' r='11' class='a'/><circle cx='814.5' cy='165.6' r='24.5' class='a'/><path d='M0 0v17.7c22.7 14.8 53 31.9 90.7 51.5 150.8 78 322 116.6 424.8 69.3 102.9-47.4 138-69.3 210.8-69.3s118.3 48.6 219.5 38.3 76.3-59.3 188.7-59.3c18.9 0 35.5 2.6 50.5 6.8V0H0z' class='a'/></svg>");
	}

	.section-bubble_type-b:after {
		background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1185 248'><path d='M50.5 199.8c112.4 0 87.5-49 188.7-59.3s146.7 38.3 219.5 38.3 107.9-21.9 210.8-69.3c102.8-47.3 274-8.7 424.8 69.3 37.7 19.5 68 36.7 90.7 51.5V0H0v193C15 197.2 31.6 199.8 50.5 199.8zM1109 106.9c11 0 20 9 20 20 0 11-9 20-20 20s-20-9-20-20C1089 115.9 1098 106.9 1109 106.9zM370.5 57.9c13.5 0 24.5 11 24.5 24.5 0 13.5-11 24.5-24.5 24.5S346 95.9 346 82.4C346 68.9 357 57.9 370.5 57.9zM315 35.9c6.1 0 11 4.9 11 11s-4.9 11-11 11 -11-4.9-11-11S308.9 35.9 315 35.9z' fill='red'/></svg>");
	}

	/* 
		Hero
	*/
	/* @import url(https://fonts.googleapis.com/css?family=Lato:400,300,700,900,100|Oswald:400,300,700|Roboto+Condensed:400,300,700|PT+Sans+Narrow:400,700|Noto+Sans:400,700|Poiret+One|Libre+Baskerville:400,700,400italic);
	html,
	body {
		width: 100%;
		height: 100%;
		font-family: 'Libre Baskerville';
	}

	.hero {
		width: 100%;
		height: 100%;
		position: relative;
	}
	.hero:before,
	.hero:after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}
	.hero:before {
		background: url('//c1.staticflickr.com/9/8771/17298186692_8390fc1c00_k.jpg');
		background-size: cover;
		background-position: center bottom;
		background-repeat: no-repeat;
		filter: sepia(0.25) grayscale(0.1);
	}
	.hero:after {
		background: linear-gradient(to right, #d24335 55%, #6e4cd2);
		opacity: 0.5;
	}

	.hero--content {
		font-size: 4rem;
		line-height: 1.4em;
		color: #fff;
		opacity: 1;
		display: block;
		position: absolute;
		z-index: 1;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.hero--text {
		font-family: 'Lato';
		font-weight: 700;
		background: rgba(0, 0, 0, 0.85);
		padding: 0.08em 1rem;
		-webkit-box-decoration-break: clone;
		box-decoration-break: clone;
	}

	.content {
		max-width: 800px;
		width: 100%;
		margin: 2rem auto;
		display: block;
	}

	p {
		font-size: 1.4rem;
		line-height: 1.4em;
		margin-bottom: 1.6rem;
	} */
</style>
