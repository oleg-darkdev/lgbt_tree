<script>
</script>

<div
	data-aos="flip-up"
	data-aos-delay="100"
	data-aos-duration="1000"
	data-aos-once="false"
	data-aos-mirror="true"
	class="container"
>
	<div class="box">
		<span />
		<div class="content">
			<h2>
				Online biblioteka flag spolecznosci LGBTQIA+ jako dodatek do gry planszowej oraz w pełni
				niezależna aplikację.
			</h2>
			<!-- <p style="max-width: 340px;">
				Online biblioteka flag spolecznosci LGBTQIA+, ze szczególowymi informacjami jako dodatek do gry
				planszowej.
			</p> -->
			<a href="/app" target="_blank" id="testbutton" />
		</div>
	</div>
</div>

<style>
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
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
		background: rgba(255, 255, 255, 0.07);
		backdrop-filter: blur(10px);
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
		border-radius: 8px;
		z-index: 1;
		transform: 0.5s;
		color: #fff;
	}

	/* .container .box .content h2 {
		font-size: 2em;
		color: #fff;
		margin-bottom: 10px;
	} */

	.container .box .content p {
		font-size: 1.1em;
		margin-bottom: 10px;
		line-height: 1.4em;
	}

	/* 
		Gradient Button
	*/
	#testbutton {
		width: 150px;
		height: 50px;
		border-radius: 4%;
		position: relative;
		left: calc(75% - 15px);
		top: calc(3% - 5px);
		/* 
		 */
		background: linear-gradient(
			60deg,
			#f79533,
			#f37055,
			#ef4e7b,
			#a166ab,
			#5073b8,
			#1098ad,
			#07b39b,
			#6fba82
		);
		cursor: pointer;
		line-height: 12px;
	}

	#testbutton:before {
		content: '';
		z-index: 1;
		position: absolute;
		display: block;
		width: 80%;
		height: 70%;
		top: 15%;
		left: 10%;
		transition: 0.3s opacity ease-in-out;
		filter: blur(15px);
		opacity: 0;
		background: linear-gradient(
			60deg,
			#f79533,
			#f37055,
			#ef4e7b,
			#a166ab,
			#5073b8,
			#1098ad,
			#07b39b,
			#6fba82
		);
	}

	#testbutton:hover:before {
		opacity: 1;
		transition: 0.3s opacity ease-in-out;
		filter: blur(25px);
		background: linear-gradient(
			60deg,
			#f79533,
			#f37055,
			#ef4e7b,
			#a166ab,
			#5073b8,
			#1098ad,
			#07b39b,
			#6fba82
		);
	}

	#testbutton:after {
		content: 'CLICK ME!';
		text-align: center;
		line-height: 40px;
		font-size: 18px;
		color: rgba(235, 235, 235, 1);
		font-weight: bold;
		z-index: 5;
		position: absolute;
		display: block;
		border-radius: 4%;
		width: 92%;
		height: 80%;
		top: 10%;
		left: 4%;
		background-color: rgb(19, 20, 22);
	}
</style>
