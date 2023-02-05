<script>
	const data = [
		{
			img: '/images/photo/comp.JPG',
			title: ''
		},
		{
			img: '',
			title: ''
		},
		{
			img: '',
			title: ''
		},
		{
			img: '',
			title: ''
		},
		{
			img: '',
			title: ''
		},
		{
			img: '',
			title: ''
		},
		{
			img: '',
			title: ''
		},
		{
			img: '',
			title: ''
		},
		{
			img: '',
			title: ''
		},
		{
			img: '',
			title: ''
		},
		{
			img: '',
			title: ''
		},
		{
			img: '',
			title: ''
		},
		{
			img: '',
			title: ''
		},
		{
			img: '',
			title: ''
		},
		{
			img: '',
			title: ''
		}
	];
</script>

<ul class="main-nav">
	<li class="item1">
		<div class="bg" />
	</li>
	<li class="item2">
		<div class="bg" />
	</li>
	<li class="item3">
		<div class="bg" />
	</li>
	<li class="item4">
		<div class="bg" />
	</li>
	<li class="item5">
		<div class="bg" />
	</li>
</ul>

<!--


    /images/photo/comp.JPG 
    /images/photo/table.JPG
    /images/photo/table_1.JPG
    /images/photo/app_1.JPG
    /images/photo/app_2.JPG
    /images/photo/app_3.JPG
/images/photo/hand_2.JPG
    /images/photo/hand_1.JPG
    -->
<style>

	.main-nav {
		position: relative;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		margin: 0;
		padding: 0;
		width: 600px;
		height: 150px;
	}

	.main-nav li {
		list-style: none;
		position: absolute;
		width: 200px;
		height: 200px;
		background: #000;
		transform: rotate(45deg);
		transition: 0.5s;
		margin: -100px;
		overflow: hidden;
		opacity: 0.5;
        border-radius: 8%;
	}

	.main-nav li:hover {
		opacity: 1;
	}

	.main-nav li.item1 {
		top: 0;
		left: 0;
	}

	.main-nav li.item2 {
		bottom: 0;
		left: 25%;
	}

	.main-nav li.item3 {
		top: 0;
		left: 50%;
	}

	.main-nav li.item4 {
		bottom: 0;
		left: 75%;
	}

	.main-nav li.item5 {
		top: 0;
		left: 100%;
	}

	.main-nav li .bg {
		width: 100%;
		height: 100%;
		transform: scale(1.1);
	}
/* 
    /images/photo/comp.JPG 
    /images/photo/table.JPG
    /images/photo/table_1.JPG
    /images/photo/app_1.JPG
    /images/photo/app_2.JPG
    /images/photo/app_3.JPG
/images/photo/hand_2.JPG
    /images/photo/hand_1.JPG
     */
	.main-nav li.item1 .bg {
		background: url(/images/photo/comp.JPG);
		background-size: cover;
		background-position: center;
	}

	.main-nav li.item2 .bg {
		background: url(/images/photo/boardgame_1.JPG); 
		background-size: cover;
		background-position: center;
	}

	.main-nav li.item3 .bg {
		background: url(/images/photo/table_1.JPG);
		background-size: cover;
		background-position: center;
	}

	.main-nav li.item4 .bg {
		background: url(/images/photo/players_1.JPG);
		background-size: cover;
		background-position: center;
	}

	.main-nav li.item5 .bg {
		background: url(/images/photo/hand_2.JPG);
		background-size: cover;
		background-position: center;
	}

	/* img {
        border-radius: 2%;
    }
	.gallery {
		display: flex;
		padding: 2px;
		transition: 0.3s;
	}
	.gallery:hover .gallery__image {
		filter: grayscale(1);
	}
	.gallery__column {
		display: flex;
		flex-direction: column;
		width: 25%;
	}
	.gallery__link {
		margin: 2px;
		overflow: hidden;
	}
	.gallery__link:hover .gallery__image {
		filter: grayscale(0);
	}
	.gallery__link:hover .gallery__caption {
		opacity: 1;
	}
	.gallery__thumb {
		position: relative;
	}
	.gallery__image {
		display: block;
		width: 100%;
		transition: 0.3s;
	}
	.gallery__image:hover {
		transform: scale(1.1);
	}
	.gallery__caption {
		position: absolute;
		bottom: 0;
		left: 0;
		padding: 25px 15px 15px;
		width: 100%;
		font-family: 'Raleway', sans-serif;
		font-size: 16px;
		color: white;
		opacity: 0;
		background: linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(255, 255, 255, 0) 100%);
		transition: 0.3s;
	} */
</style>
