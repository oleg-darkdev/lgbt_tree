import loremDescriptionText from './loremDescription';
import loremShortDescriptionText from './loremShortDescriptionText';
import сategories from './categories';

const element = {
	name: 'Androgyne',
	category: [сategories.genderIdentity],
	description: [loremDescriptionText],
	flagInfo: {
		description: [
			'The most common androgyne flag, coined by Tumblr user saveferris on September 10, 2014, has 3 colors. '
		],
		colors: [
			{
				color: 'Pink',
				description: 'femininity'
			},
			{
				color: 'Blue',
				description: 'masculinity'
			},
			{
				color: 'Purple',
				description: 'a combination of the both'
			}
		]
	},
	linkOriginalWiki: 'https://lgbtqia.fandom.com/wiki/Androgyne',
	etymology: [
		'The word androgyne is a combination of two Greek words: "andró" meaning "man", and "gynḗ" meaning "woman".'
	],
	references: [
		{
			name: `The ABC's of LGBT+.`,
			link: '',
			source: 'Hardell, Ash. / Mango Media Inc., 2016.'
		},
		{
			name: 'Androgyne',
			link: 'https://web.archive.org/web/20211031231811/https://translanguageprimer.com/androgyne',
			source: 'The Trans Language Primer'
		},
		{
			name: 'Andro- Definition & Meaning',
			link: 'https://www.dictionary.com/browse/andro-',
			source: 'dictionary.com'
		},
		{
			name: 'Gyne- Definition & Meaning',
			link: 'https://www.dictionary.com/browse/gyne-',
			source: 'dictionary.com'
		},
		{
			name: 'Not This, Not That',
			link: 'https://web.archive.org/web/20041209234238/http://www.chaparraltree.com/raq/notthis.shtml',
			source: 'Carter, Raphael / chaparraltree.com'
		},
		{
			name: 'Autobiography of an Androgyne. Herring, Scott, Rutgers University Press, February 22nd 2008.',
			link: 'https://www.goodreads.com/en/book/show/3063427-autobiography-of-an-androgyne',
			source: 'Werther, Ralph / '
		},
		{
			name: 'The Trouble With Tribbles',
			link: 'http://www.chakoteya.net/StarTrek/42.htm',
			source: 'chakoteya.net'
		}
	],

	brandColor: '#702282',
	alternativeName: ['Andro'],
	specifics: {
		genders: [''],
		attractedTo: [''],
		attractionType: [''],
		spectrumOrUmbrella: ['Non-binary']
	},
	relatedTerms: {
		differentFrom: ['Bigender', 'Intersex', 'Neutrois'],
		associatedRomanticism: ['']
	},

	img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/androgyne.png',
	shortDescription: `Androgyne is a gender identity in which a person has a gender that is a blend of both binary genders. People who are androgyne may describe this as being "between" female and male, man and woman, masculine and feminine, or simply 'in between.' They may also identify as neither feminine nor masculine, or neither female nor male.`,
	number: 62
};

export default element;
