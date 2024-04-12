import loremDescriptionText from './loremDescription';
import loremShortDescriptionText from './loremShortDescriptionText';
import сategories from './categories';

const element = {
	name: 'Polysexual',
	category: [`empty`],

	description: [loremDescriptionText],
	flagInfo: {
		description: ['It was designed by Tumblr user fuckyeahpolysexuality in 2012.'],
		colors: [
			{
				color: 'Pink',
				description: 'attraction to women'
			},
			{
				color: 'green',
				description: 'attraction to non-binary (or otherwise gender non-conforming)'
			},
			{
				color: 'Blue',
				description: 'attraction to men'
			}
		]
	},
	linkOriginalWiki: 'https://lgbtqia.fandom.com/wiki/Polysexual',
	etymology: [
		'The word "polysexual" comes from the Greek prefix polus, meaning "many". Another Greek prefix, polloi, meaning "much," may also have had an influence.'
	],
	references: [
		{
			name: `The Gay BC's of LGBT+: An Accompaniment to The ABC's of LGBT+. Mango Media Inc.`,
			link: 'https://mango.bz/books/the-gaybcs-of-lgbtq-365-b',
			source: 'Hardell, Ash.'
		},
		{
			name: '"What Is Polysexuality?"',
			link: 'https://www.webmd.com/sex/what-is-polysexuality',
			source: 'webmd.com.'
		},
		{
			name: '"Gender and Sexuality Dictionary: Polysexual"',
			link: 'https://www.dictionary.com/e/gender-sexuality/polysexual/',
			source: 'dictionary.com'
		},
		{
			name: 'Old Dominian University: "Queer 101". ',
			link: 'https://www.odu.edu/life/support/wgec/lgbt',
			source: 'Old Dominian University - LGBTQ2S+ Initiatives.'
		},
		{
			name: '',
			link: 'https://ohyeahpolysexual-blog.tumblr.com/post/26964203712/fuckyeahpolysexuality-i-as-a-poly-individual',
			source: 'Oh yeah polysexual'
		}
	],

	brandColor: '#702282',
	alternativeName: [''],
	specifics: {
		genders: ['Any'],
		attractedTo: ['Various'],
		attractionType: ['Sexual'],
		spectrumOrUmbrella: ['']
	},
	relatedTerms: {
		differentFrom: ['Pansexual', 'Bisexual', 'Omnisexual', 'Polyamorous'],
		associatedRomanticism: ['Polyromantic']
	},

	img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/polysexual.png',
	shortDescription:
		'Polysexuality is the sexual attraction to various, but not necessarily all, genders. A polysexual person may experience sexual attraction to any number of genders, varying between (at least) two and all but one. Polysexual individuals may have a preference when it comes to which gender they are attracted to, but this is not necessarily the case.',
	number: 44
};

export default element;
