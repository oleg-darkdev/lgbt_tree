import loremDescriptionText from './loremDescription';
import loremShortDescriptionText from './loremShortDescriptionText';
import сategories from './categories';

const element = {
	name: 'Bigender',
	category: [сategories.genderIdentity],
	description: [loremDescriptionText],
	flagInfo: {
		description: [
			'The most known bigender flag was created by Tumblr user no-bucks-for-this-doe. The flag consists of two different pink stripes, a deep pink followed by the traditional depiction of pink. From there, a lilac stripe, a white stripe, and another lilac stripe. The last two stripes are baby blue followed by a deep blue. An alternate version of the bigender flag exists, though the creator is currently unknown as well as the meanings behind each stripe.'
		],
		colors: [
			{
				color: 'Pink',
				description: 'femininity'
			},
			{
				color: 'Yellow',
				description: 'those whose gender exists outside the gender binary'
			},
			{
				color: 'White',
				description: 'non-binary'
			},
			{
				color: 'Purple',
				description: 'combination of male and female or androgyny'
			},
			{
				color: 'Blue',
				description: 'femininity'
			}
		]
	},
	linkOriginalWiki: 'https://lgbtqia.fandom.com/wiki/Bigender',
	etymology: [
		`Early examples of the term 'bigender' appear as early as the late 1980s, though at this time it was grouped under the "androgyne" label as "bigenderist". Definitions were rooted in the expression of "either gender role" or as "having two genders".`
	],
	references: [
		{
			name: `The ABC's of LGBT+`,
			link: '',
			source: 'Hardell, Ash / Mango Media Inc., 2016'
		},
		{
			name: 'The A-Z of Gender and Sexuality: From Ace to Ze.',
			link: '',
			source: 'Holleb, Morgan Lev Edward / Jessica Kingsley Publishers, 2019'
		},
		{
			name: 'Brochure for the Human Outreach and Achievement Institute.',
			link: 'https://www.digitaltransgenderarchive.net/downloads/8g84mm373',
			source: 'The Human Outreach and Achievement Institute'
		},
		{
			name: 'A Dictionary of Words for Masculine Women',
			link: 'https://web.archive.org/web/19961105010926/http://www.ftm-intl.org/Wrtngs/ftm-words.gary.html',
			source: 'Bowen, Gary / FTM International'
		},
		{
			name: 'Queer in the World: "What Does Bigender Mean? + Other Bigender Information To Help You Be A Better Ally!"',
			link: 'https://queerintheworld.com/what-does-bigender-mean/',
			source: 'queerintheworld.com.'
		},
		{
			name: 'Wat is bigender?',
			link: 'https://weten.site/bigender/',
			source: 'weten.site'
		},
		{
			name: 'Non-binary pride flag',
			link: 'https://outrightinternational.org/content/flags-lgbtiq-community',
			source: 'OutRight Action International'
		}
	],

	brandColor: '#702282',
	alternativeName: [''],
	specifics: {
		genders: ['Any two distinct gender identities'],
		attractedTo: [''],
		attractionType: [''],
		spectrumOrUmbrella: [`Transgender`, `Non-binary`, `Multigender`]
	},
	relatedTerms: {
		differentFrom: ['Genderfluid', 'Non-binary', 'Intersex', 'Intergender', 'Androgyne'],
		associatedRomanticism: ['']
	},

	img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/bigender.png',
	shortDescription: `Bigender is a gender identity in which a person has or experiences two genders. The genders may be any combination of two genders, and those genders can be binary ("man" or "woman") or non-binary. They may be experienced simultaneously or may alternate, and they may not be experienced equally or in the same way. For example, a bigender person may be both a woman and a man, agender and neutrois, or non-binary and a woman. Bigender is an identity under the transgender umbrella.`,
	number: 14
};

export default element;
