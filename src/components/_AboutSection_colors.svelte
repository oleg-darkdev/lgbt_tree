<section class="bgc-section ">
	<div class="fixed">
		<slot />
	</div>
</section>

<style>
	:global(.bgc-section) {
		text-align: center;
		position: absolute;
		width: 100%;
		height: 100vh;
		letter-spacing: 4px;
		overflow: hidden;
		clip: rect(0, auto, auto, 0);
	}
	:global(.bgc-section .fixed) {
		overflow: hidden;
		position: fixed;
		top: 50%;
		left: 50%;
	}

	:global(.bgc-section:nth-child(1)) {
		background-color: #fff;
		color: #000;
		top: 0;
		z-index: 1;
	}
	:global(
			.bgc-section:nth-child(1) .fixed,
			.bgc-section:nth-child(2) .fixed,
			.bgc-section:nth-child(3) .fixed,
			.bgc-section:nth-child(4) .fixed,
			.bgc-section:nth-child(5) .fixed,
			.bgc-section:nth-child(6) .fixed,
			.bgc-section:nth-child(7) .fixed,
			.bgc-section:nth-child(8) .fixed,
			.bgc-section:nth-child(9) .fixed
		) {
		transform: translate(-50%, -50%);
	}

	:global(.bgc-section:nth-child(2)) {
		box-shadow: inset 0 1px 80px rgba(0, 0, 0, 0.14);
		background-color: #fbbd23;
		color: #fff;
		top: 100vh;
		z-index: 2;
	}
	:global(.bgc-section:nth-child(3)) {
		box-shadow: inset 0 1px 80px rgba(0, 0, 0, 0.14);
		background-color: #661ae6;
		color: #fff;
		top: 200vh;
		z-index: 3;
	}
	:global(.bgc-section:nth-child(4)) {
		box-shadow: inset 0 1px 80px rgba(0, 0, 0, 0.14);
		background-color: #36d399;
		color: #fff;
		top: 300vh;
		z-index: 4;
	}
	:global(.bgc-section:nth-child(5)) {
		box-shadow: inset 0 1px 80px rgba(0, 0, 0, 0.14);
		background-color: #1fb2a5;
		color: #fff;
		top: 400vh;
		z-index: 5;
	}
	:global(.bgc-section:nth-child(6)) {
		box-shadow: inset 0 1px 80px rgba(0, 0, 0, 0.14);
		background-color: #3abff8;
		color: #fff;
		top: 500vh;
		z-index: 6;
	}

	:global(.bgc-section:nth-child(7)) {
		box-shadow: inset 0 1px 80px rgba(0, 0, 0, 0.14);
		background-color: #d926aa;
		color: #fff;
		top: 600vh;
		z-index: 7;
	}

	:global(.bgc-section:nth-child(8)) {
		box-shadow: inset 0 1px 80px rgba(0, 0, 0, 0.14);
		background-color: #0ac285;
		color: #fff;
		top: 700vh;
		z-index: 8;
	}

	:global(.bgc-section:nth-child(9)) {
		box-shadow: inset 0 1px 80px rgba(0, 0, 0, 0.14);
		background-color: #f87272;
		color: #fff;
		top: 800vh;
		z-index: 9;
	}

	/* .bgc-section:nth-child(10) {
    background-color: #000;
    color: #fff;
    top: 900vh;
    z-index: 10;
  } */
	/* .bgc-section:nth-child(10) .fixed {
    transform: translate(-50%, -50%);
  } */
</style>
