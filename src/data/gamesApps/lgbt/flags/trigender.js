import loremDescriptionText from './loremDescription';
import loremShortDescriptionText from './loremShortDescriptionText';
import сategories from './categories';

const element = {
	name: 'Trigender',
	category: [сategories.genderIdentity],
	description: [loremDescriptionText],
	flagInfo: {
		description: [
			'The flag was created by an unknown individual on or before July 4, 2015, and uploaded by DeviantArt user Pride-Flags. The meaning of the colors is unknown.'
		],
		colors: [
			{
				color: 'Pink',
				description: 'feminine genders'
			},
			{
				color: 'Purple ',
				description: 'masculine genders'
			},
			{
				color: 'Green',
				description: 'neutral or non-binary genders'
			}
		]
	},
	linkOriginalWiki: 'https://lgbtqia.fandom.com/wiki/Trigender',
	etymology: [
		'The exact origin of the term "trigender" is unknown, but it has been mentioned as early as 1998. The prefix tri- means three, so "trigender" literally means "three gender".'
	],
	references: [
		{
			name: 'Trans* Identities and Lives Glossary',
			link: 'https://web.uri.edu/gender-sexuality/resources/lgbtqa-glossary/trans-101-glossary/',
			source: 'University of Rhode Island'
		},
		{
			name: 'Trans Liberation: Beyond Pink or Blue',
			link: '',
			source: 'Leslie Feinberg / Beacon Press, 1998'
		},
		{
			name: 'Pride-Flags: "Trigender (1)"',
			link: 'https://www.deviantart.com/pride-flags/art/Trigender-1-543983082?ga_changes=1&ga_submit_new=10%253A1470014621&ga_type=edit',
			source: 'deviantart.com'
		}
	],

	brandColor: '#702282',
	alternativeName: ['Tri-gender'],
	specifics: {
		genders: ['Any three'],
		attractedTo: [''],
		attractionType: [''],
		spectrumOrUmbrella: ['Transgender', 'Non-binary', 'Multigender']
	},
	relatedTerms: {
		differentFrom: ['Bigender', 'Genderfluid'],
		associatedRomanticism: ['']
	},

	img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/trigender.png',
	shortDescription: `Trigender is a non-binary gender identity that describes a person who experiences three distinct genders. These genders can be binary or non-binary, and an individual may or may not be fluid between them. Trigender may also relate to the concept of a "third gender" which is not male, female, or between the two.`,
	number: 66
};

export default element;
