import loremDescriptionText from './loremDescription';
import loremShortDescriptionText from './loremShortDescriptionText';
import сategories from './categories';

const element = {
	name: 'Graygender',
	category: [сategories.agenderSpectrum],
	description: [loremDescriptionText],
	flagInfo: {
		description: [
			`The flag for this identity was designed by Pride-Flags on DeviantArt, on August 23, 2015. The meanings for the graygender flag's colors are as follows`
		],
		colors: [
			{
				color: 'Grey',
				description: 'Spectrum of experiences under this identity'
			},
			{
				color: 'Blue',
				description: 'Graygender as an identity and experience, comparing it to deep ocean waters'
			},
			{
				color: 'White',
				description: 'Purity and validity of graygender people and their unique experiences'
			}
		]
	},
	linkOriginalWiki: 'https://lgbtqia.fandom.com/wiki/Graygender',
	etymology: [
		'The use of "gray-" in graygender is intended to be similar to the use of the suffix for graysexual. Instead of feeling a weak attraction as with graysexual, a person who is graygender would instead feel a weak connection to gender.'
	],
	references: [
		{
			name: 'Identifying As “Graygender”/“Greygender”',
			link: 'https://invernom.tumblr.com/post/80158494356/identifying-as-graygendergreygender',
			source: 'invernom'
		},
		{
			name: '68 Terms That Describe Gender Identity and Expression',
			link: 'https://www.healthline.com/health/different-genders',
			source: 'healthline.com'
		},
		{
			name: 'The Gender Identification Flags You Should Know About For Pride Season!',
			link: 'www.thelgbtsentinel.com/gender-identification-flags-know-pride-season/',
			source: 'The LGBT Sentinel'
		},
		{
			name: `The ABC's of LGBT+`,
			link: '',
			source: 'Hardell, Ash. / Mango Media Inc., 2016'
		},
		{
			name: 'What is Greygender? (Video) ',
			link: 'https://www.youtube.com/watch?v=0Amt3YOkNes',
			source: 'Ash Hardell'
		},
		{
			name: 'Graygender / Gray Agender',
			link: 'https://www.deviantart.com/pride-flags/art/Graygender-Gray-Agender-555820442',
			source: 'deviantart.com'
		}
	],

	brandColor: '#702282',
	alternativeName: ['Greygender', 'Grey agender', 'Gray agender'],
	specifics: {
		genders: [''],
		attractedTo: [''],
		attractionType: [''],
		spectrumOrUmbrella: ['']
	},
	relatedTerms: {
		differentFrom: ['Agender', 'Graysexual', 'Grayromantic'],
		associatedRomanticism: ['']
	},

	img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/greygender.png',
	shortDescription: `Graygender, also sometimes spelled as greygender, and sometimes referred to as gray agender or grey agender, is a gender identity where a person feels ambivalent towards their gender. It can also be defined as an identity where a person feels a weak connection to gender in general.`,
	number: 22
};

export default element;
