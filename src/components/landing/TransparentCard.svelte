<script>
	export let data;
</script>

<div class="container">
	<div class="box">
		<span />
		{#each data as text}
			<div
				data-aos="fade-up"
				data-aos-delay="100"
				data-aos-duration="1000"
				data-aos-once="false"
				data-aos-mirror="true"
				class="content"
				style="margin: 4px;"
			>
				<div>
					<h2>{text.title}</h2>
					<p>{text.description}</p>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		width: 100%;
		/* padding: 40px 0; */
	}

	.container .box {
		position: relative;
		min-width: 320px;
		max-width: 740px;
		width: 90%;
		/* height: 400px; */
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		/* margin: 40px 30px; */
		transition: 0.5s;
	}

	.container .box .content {
		position: relative;
		left: 0;
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		padding: 20px 40px;
		background: rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(10px);
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
		border-radius: 8px;
		z-index: 1;
		transform: 0.5s;
		color: #fff;
	}

	.content h2 {
		font-size: 2em;
		color: #fff;
		margin-bottom: 10px;
	}

	.content p {
		font-size: 1.1em;
		margin-bottom: 10px;
		line-height: 1.4em;
	}
</style>
