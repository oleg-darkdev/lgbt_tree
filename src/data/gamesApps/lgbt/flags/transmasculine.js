import loremDescriptionText from './loremDescription';
import loremShortDescriptionText from './loremShortDescriptionText';
import сategories from './categories';

const element = {
	name: 'Trans masculine',
	category: [сategories.genderIdentity],
	description: [loremDescriptionText],
	flagInfo: {
		description: [''],
		colors: [
			{
				color: '',
				description: ''
			}
		]
	},
	linkOriginalWiki: 'https://lgbtqia.fandom.com/wiki/Transmasculine',
	etymology: [''],
	references: [
		{
			name: 'Transmasculine',
			link: 'https://gender.fandom.com/wiki/Transmasculine',
			source: 'Gender Wiki'
		}
	],

	brandColor: '#702282',
	alternativeName: ['Transmasc'],
	specifics: {
		genders: [''],
		attractedTo: [''],
		attractionType: [''],
		spectrumOrUmbrella: ['']
	},
	relatedTerms: {
		differentFrom: ['Transgender'],
		associatedRomanticism: ['']
	},

	img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/transmasculine.png',
	shortDescription: `Transmasculine, often abbreviated to transmasc, refers to people who were assigned female at birth and have a gender identity, gender expression, or both that is predominantly masculine. Transmasculine people may or may not identify as male. It can be a standalone identity term or an umbrella term for certain identities, such as:

 * Transgender men
 * Non-binary people who feel their gender is masculine, whether entirely or partially
 * Genderfluid or multigender people who feel predominantly masculine
 * Demiguys
 * People who are boyflux`,
	number: 51
};

export default element;
