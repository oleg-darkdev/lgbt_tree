import loremDescriptionText from './loremDescription';
import loremShortDescriptionText from './loremShortDescriptionText';
import сategories from './categories';

const element = {
	name: 'Omnisexual',
	category: [сategories.sexualOrientation],
	description: [loremDescriptionText],
	flagInfo: {
		description: ['The omnisexual pride flag was designed in 2015 by Tumblr user pastelmemer.'],
		colors: [
			{
				color: 'Dark purple/black, and blue flag',
				description: 'attraction to all other genders that are outside of the gender binary.'
			},
			{
				color: 'Pink',
				description: 'sexual attraction to femininity '
			},
			{
				color: 'Blue',
				description: 'sexual attraction to masculinity, respectively'
			}
		]
	},
	linkOriginalWiki: 'https://lgbtqia.fandom.com/wiki/Omnisexual',
	etymology: [
		'The term "omnisexual" is derived from the Latin prefix omni-, meaning "all" or "universally".'
	],
	references: [
		{
			name: '"What Is Omnisexual?".',
			link: 'https://www.webmd.com/sex/what-is-omnisexual',
			source: 'webmd.com'
		},
		{
			name: '"Omnisexual: A Closer Look at Omnisexuality"',
			link: 'https://queersforacause.com/lgbtq%2B-tips/f/omnisexual-a-closer-look-at-omnisexuality',
			source: 'Queers for a Cause.'
		},
		{
			name: '"Definition of Omni-"',
			link: 'https://www.merriam-webster.com/dictionary/omni-',
			source: 'Merriam-Webster'
		},
		{
			name: '"What is Bisexuality?"',
			link: 'https://biresource.org/bi-info/what-is-bisexuality',
			source: 'Bisexual Resource Cente'
		}
	],
	brandColor: '#702282',
	alternativeName: [''],
	specifics: {
		genders: ['Any'],
		attractedTo: ['All'],
		attractionType: ['Sexual'],
		spectrumOrUmbrella: ['']
	},
	relatedTerms: {
		differentFrom: ['Pansexual', 'Bisexual', 'Polysexual'],
		associatedRomanticism: ['Omniromantic']
	},

	img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/omnisexual.png',
	shortDescription: `Omnisexuality is the sexual attraction to people of all gender identities, wherein gender plays a role in one's attraction. Some omnisexual people may be more attracted to certain genders, but that is not always the case.`,
	number: 45
};

export default element;
