import loremDescriptionText from './loremDescription';
import loremShortDescriptionText from './loremShortDescriptionText';
import сategories from './categories';

const element = {
	name: 'Demiromantic',
	category: [сategories.romanticOrientation],
	description: [loremDescriptionText],
	flagInfo: {
		description: [
			'The origins of the flag are also unknown, but those within the demiromantic community speculate that it is based off the aromantic flag and AVEN logo. While people often have different takes on the significance for each of the colors used, possible interpretations could be the following'
		],
		colors: [
			{
				color: 'Black',
				description: 'The sexuality spectrum as a whole'
			},
			{
				color: 'Gray',
				description: 'Grayaromanticism and demiromanticism'
			},
			{
				color: '',
				description:
					'Platonic and aesthetic attraction, queer/quasi platonic relationships, or being outside the straight-gay and male-female binaries'
			},
			{
				color: 'Green',
				description: 'Demiromanticism, or the aromantic spectrum'
			}
		]
	},
	linkOriginalWiki: 'https://lgbtqia.fandom.com/wiki/Demiromantic',
	etymology: [
		`The prefix 'demi-' derives from the Latin dimidium, meaning "divided in half"; its usage in relation to romantic/sexual orientations means "half" or "partial". `
	],
	references: [
		{
			name: 'All Aromantic Terms".',
			link: 'https://web.archive.org/web/20220129083533/https://www.aromanticism.org/en/all-terms',
			source: 'AUREA - Aromantic-spectrum Union for Recognition, Education, and Advocacy'
		},
		{
			name: `The Gay BC's of LGBT+: An Accompaniment to The ABC's of LGBT+`,
			link: 'https://mango.bz/books/the-gaybcs-of-lgbtq-by-ashley-mardell-365-b',
			source: 'Hardell, Ash. / Mango Media Inc.'
		},
		{
			name: 'The A-Z of Gender and Sexuality: From Ace to Ze',
			link: '',
			source: 'Holleb, Morgan Lev Edward / Jessica Kingsley Publishers, 2019'
		},
		{
			name: 'Demiromantic Definition - What Does It Mean to be Demiromantic',
			link: 'https://www.cosmopolitan.com/sexopedia/a31094953/demiromantic-definition/',
			source: 'Cosmopolitan'
		},
		{
			name: 'Pride Flags',
			link: 'https://www.unco.edu/gender-sexuality-resource-center/resources/pride-flags.aspx',
			source: 'University of Northern Colorado'
		},
		{
			name: 'What Does Demiromantic Mean?',
			link: 'https://www.webmd.com/sex/what-demiromanticism-means',
			source: 'WebMD'
		},
		{
			name: 'City of Strife',
			link: 'https://queerbooksforteens.com/2018/01/15/city-of-strife/',
			source: 'Queer Books for Teens'
		},
		{
			name: 'The AroAce Database',
			link: 'https://www.aroacedatabase.com/character/120',
			source: 'Jenny Strings'
		}
	],

	brandColor: '#702282',
	alternativeName: [''],
	specifics: {
		genders: ['Any'],
		attractedTo: [''],
		attractionType: ['Romantic'],
		spectrumOrUmbrella: ['Aromantic spectrum']
	},
	relatedTerms: {
		differentFrom: ['Greyromantic'],
		associatedRomanticism: ['']
	},

	img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/demiromantic.png',
	shortDescription: `Demiromantic describes people who do not experience romantic attraction until they have formed a deep emotional connection with someone, according to the most common definition.Other definitions of this romantic orientation are only experiencing limited romantic attraction, or falling somewhere on a spectrum between aromantic and romantic; the latter definition overlaps with one for grayromantic.`,
	number: 52
};

export default element;
