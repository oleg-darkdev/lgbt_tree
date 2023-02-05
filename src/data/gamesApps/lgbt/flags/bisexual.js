import loremDescriptionText from './loremDescription';
import loremShortDescriptionText from './loremShortDescriptionText';
import сategories from './categories';

const element = {
	name: 'Bisexual',
	category: [`empty`],

	description: [loremDescriptionText],
	flagInfo: {
		description: [''],
		colors: [
			{
				color: 'Pink ',
				description: 'Sexual attraction to the same sex only (gay and lesbian).'
			},
			{
				color: 'Blue ',
				description: 'Sexual attraction to the opposite sex only (straight).'
			},
			{
				color: 'Purple ',
				description: 'Sexual attraction to both sexes (bi).'
			}
		]
	},
	linkOriginalWiki: 'https://lgbtqia.fandom.com/wiki/Bisexual',
	etymology: [
		'"Bisexual" comes from the roots "bi-", meaning "two" or "double", and "-sexual". The term "bisexuality", when referring to sexual orientation, was first used by neurologist Charles Gilbert Chaddock in his English translation of Psychopathia Sexualis in 1892, which contained a theory that the brain of a person attracted both to their own sex and the opposite sex must be partly of another sex and thus "hermaphroditic". Earlier, it was a term in botany for "having male and female parts".'
	],
	references: [
		{
			name: '"Understanding Bisexuality"',
			link: 'https://www.apa.org/pi/lgbt/resources/bisexual',
			source: 'American Psychological Association'
		},
		{
			name: '"What is Bisexuality?"',
			link: 'https://biresource.org/bi-info/what-is-bisexuality',
			source: 'Bisexual Resource Center'
		},
		{
			name: '"What is Bisexuality?"',
			link: 'https://bi.org/en/101/bisexuality',
			source: 'bi.org.'
		},
		{
			name: 'Psychopathia Sexualis.',
			link: 'https://books.google.pl/books?id=9SYKAAAAIAAJ&redir_esc=y',
			source: 'Kraft-Ebbing, Richard.'
		},
		{
			name: 'M.. Memoir of Observations on the Plants denominated Cryptogamick.',
			link: 'https://www.jstor.org/stable/pdf/1004869.pdf',
			source: 'de Beauvois / American Philosophical Society, 1793'
		},
		{
			name: 'The History of the Bi Pride Flag',
			link: 'https://web.archive.org/web/20010801185547/http://biflag.com/Activism.asp',
			source: 'Michael Page'
		},
		{
			name: 'Queer x Design highlights 50 years of LGBT+ graphic design',
			link: 'https://www.dezeen.com/2019/10/23/queer-design-andrew-campbell-50-years-lgbt-graphic-design/',
			source: ''
		}
	],

	brandColor: '#702282',
	alternativeName: [''],
	specifics: {
		genders: ['Any'],
		attractedTo: ['Two or more genders'],
		attractionType: ['Any'],
		spectrumOrUmbrella: ['']
	},
	relatedTerms: {
		differentFrom: ['Omnisexual', 'Polysexual', 'Pansexual'],
		associatedRomanticism: ['Biromantic']
	},

	img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/bisexual.png',
	shortDescription: `Bisexuality is the sexual attraction to two or more genders on the gender spectrum. Some bisexual people have a preference toward one or several genders and some do not.`,
	number: 68
};

export default element;
