import loremDescriptionText from './loremDescription';
import loremShortDescriptionText from './loremShortDescriptionText';
import сategories from './categories';

const element = {
	name: 'Pansexual',
	category: [`empty`],

	description: [loremDescriptionText],
	flagInfo: {
		description: [
			`The most commonly used pansexual pride flag was designed by Jasper V in 2010. It consists of three horizontal stripes: a magenta stripe at the top, a strong gold yellow stripe in the center, and a light cerulean stripe at the bottom.`,
			`Jasper V stated on their Twitter that the pride flag's meanings were intended as follows: "Pink and blue, because of their gendered traditions, and yellow, a generally non-gendered colour, to represent nonbinary folks etc."The meaning of the colors, however, is debated. Some say the pink stand for attraction to women, yellow for attraction to non-binary or gender non-conforming individuals, and blue for attraction to men. Others say that the blue, pink, and yellow stand for those who identify as men, women, and non-binary people, respectively.`
		],
		colors: [
			{
				color: 'Pink',
				description: 'Women colour'
			},
			{
				color: 'Yellow ',
				description: 'Non-gendered colour'
			},
			{
				color: 'Blue',
				description: 'Man colour'
			}
		]
	},
	linkOriginalWiki: 'https://lgbtqia.fandom.com/wiki/Pansexual',
	etymology: [
		'The term "pansexual" is derived from the Greek prefix pan-, meaning "all" or "every".'
	],
	references: [
		{
			name: 'Human Rights Campaign: "Glossary of Terms".',
			link: 'https://www.hrc.org/resources/glossary-of-terms',
			source: 'hrc.org'
		},
		{
			name: 'Admin Silverchip: "What it Means to be Pansexual or Panromantic"',
			link: 'https://lgbt.foundation/news/what-it-means-to-be-pansexual-or-panromantic/300',
			source: 'lgbt.foundation'
		},
		{
			name: '"Definition of Pan"',
			link: 'https://www.merriam-webster.com/dictionary/pan-',
			source: 'merriam-webster.com'
		},
		{
			name: `"LGBTQ Pride flags go beyond the classic rainbow. Here's what each one means".`,
			link: 'https://eu.usatoday.com/in-depth/graphics/2021/06/01/lgbtq-pride-flags-meaning-gay-lesbian-transgender-nonbinary-intersex-pride-flags-represent/5133381001/',
			source: 'eu.usatoday.com'
		},
		{
			name: '"A Storied Glossary of Iconic LGBT Flags and Symbols"',
			link: 'https://mashable.com/archive/lgbt-pride-symbols',
			source: 'mashable.com'
		},
		{
			name: `"Want to know more about the rainbow colors? Here's a guide to Pride flag symbolism".`,
			link: 'https://www.ktvu.com/news/want-to-know-more-about-the-rainbow-colors-heres-a-guide-to-pride-flag-symbolism',
			source: 'KTVU FOX 2'
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
		differentFrom: ['Bisexual', 'Omnisexual', 'Polysexual'],
		associatedRomanticism: ['Panromantic']
	},
	img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/pansexual.png',
	shortDescription:
		'Pansexuality is the sexual attraction toward people regardless of their sex or gender identity. Since gender or sex are not determining factors in who a pansexual person is attracted to, some pansexuals might call themselves gender-blind, therefore rejecting the gender binary.',
	number: 35
};

export default element;
