import loremDescriptionText from './loremDescription';
import loremShortDescriptionText from './loremShortDescriptionText';
import сategories from './categories';

const element = {
	name: 'Pangender',
	category: [сategories.genderIdentity],
	description: [loremDescriptionText],
	flagInfo: {
		description: [
			'The most known pangender flag was created by Cari Rez Lobo, known as pangendering on Tumblr. All colors of the flag are very light and bright, because the white color represents broad inclusion.'
		],
		colors: [
			{
				color: 'White',
				description:
					'has all the different colors in it, much like how pangender has all the genders in it.'
			},
			{
				color: 'Yellow ',
				description: 'all genders not related to female and male'
			},
			{
				color: 'Light red',
				description:
					'stands for the transition to the genders associated with the male and female binary'
			},
			{
				color: 'Violet ',
				description: 'transition to and combination of female and male.'
			}
		]
	},
	linkOriginalWiki: 'https://lgbtqia.fandom.com/wiki/Pangender',
	etymology: ['Pangender derives from the Greek prefix pan-, meaning "all" or "every".'],
	references: [
		{
			name: 'The A-Z of Gender and Sexuality: From Ace to Ze',
			link: '',
			source: 'Holleb, Morgan Lev Edward / Jessica Kingsley Publishers, 2019'
		},
		{
			name: 'Definition of Pan-',
			link: 'https://www.merriam-webster.com/dictionary/pan-',
			source: 'Merriam-Webster'
		},
		{
			name: 'The Flock: The Autobiography of a Multiple Personality',
			link: 'https://books.google.com/books?id=rt-kDQAAQBAJ&pg=PT11&lpg=PT11&dq=pangender+the+flock+book&source=bl&ots=p33LxsZnhC&sig=ACfU3U0T-ejIDkkrUBeQ2__BNSYGE19N7g&hl=en&sa=X&ved=2ahUKEwiQ_7_bro_2AhVkEEQIHYVZA7sQ6AF6BAgjEAM#v=onepage&q=pangender%20the%20flock%20book&f=false',
			source: 'Casey, Joan Frances / Ballantine Books, 2017.'
		},
		{
			name: 'What it means to be pangender',
			link: 'https://www.dailydot.com/irl/pangender-definition-pronouns/',
			source: 'Collyn Burke'
		},
		{
			name: 'Possible pangender pride flags',
			link: 'https://pangendering.tumblr.com/post/109400686126/possible-pangender-pride-flags',
			source: 'Lobo, Cari Rez '
		},
		{
			name: 'Pangender Definition - What Does Pangender Mean?',
			link: 'https://www.cosmopolitan.com/sexopedia/a36722153/pangender/',
			source: 'Sophia Melissa Caraballo Piñeiro'
		},
		{
			name: 'What Is Polygender? Polygender Definition',
			link: 'https://www.cosmopolitan.com/sex-love/a38832030/polygender/',
			source: 'Naydeline Mejia / cosmopolitan.com'
		}
	],
	brandColor: '#702282',
	alternativeName: ['Omnigender'],
	specifics: {
		genders: [''],
		attractedTo: [''],
		attractionType: [''],
		spectrumOrUmbrella: ['Multigender', 'Non-binary', 'Transgender']
	},
	relatedTerms: {
		differentFrom: ['Polygender', 'Pansexual'],
		associatedRomanticism: ['']
	},

	img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/pangender.png',
	shortDescription: `Pangender is a gender identity defined as experiencing many or all genders. As an identity that is multigender—experiencing or having multiple genders—the number of genders experienced may be unknown or may fluctuate, and they may be experienced one at a time or simultaneously. Pangender falls under the non-binary and transgender umbrella terms.`,
	number: 73
};

export default element;
