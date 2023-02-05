import loremDescriptionText from './loremDescription';
import loremShortDescriptionText from './loremShortDescriptionText';
import сategories from './categories';

const element = {
	name: 'Asexual',
	category: [сategories.sexualOrientation],
	description: [loremDescriptionText],
	flagInfo: {
		description: [
			'The asexual pride flag was voted on by the Asexual Visibility and Education Network (AVEN) in 2010. It is composed of four horizontal stripes from top to bottom in the colors black, grey, white, and purple. The colors have the following meanings.'
		],
		colors: [
			{
				color: 'Black',
				description: 'Asexuals'
			},
			{
				color: 'Grey',
				description: 'Demisexuals and grayasexuals'
			},
			{
				color: 'White',
				description: 'Sexuals, as in non-asexual partners and allies'
			},
			{
				color: 'Purple',
				description: 'The community'
			}
		]
	},
	linkOriginalWiki: 'https://lgbtqia.fandom.com/wiki/Asexual',
	etymology: [
		`The term 'asexual' comes from the negation prefix a-, meaning 'not' or 'without', with the word 'sexual'. It was initially used to describe biological organisms that had no sex organs. Its use as a label was popularized by Alfred Kinsey in his Heterosexual-Homosexual Rating Scale (the Kinsey scale), with X being used to denote people who did not engage in sexual behaviors`
	],
	references: [
		{
			name: 'General FAQ',
			link: 'https://www.asexuality.org/?q=general.html',
			source: 'Asexual Visibility and Education Network'
		},
		{
			name: 'Overview',
			link: 'https://www.asexuality.org/?q=general.html',
			source: 'Asexual Visibility and Education Network'
		},
		{
			name: 'The Trans Language Primer: "Asexual".',
			link: 'https://web.archive.org/web/20211028100925/https://translanguageprimer.com/asexual/',
			source: 'The Trans Language Primer.'
		},
		{
			name: '"Asexual Flag: And the winner is ..."',
			link: 'https://web.archive.org/web/20211215072417/https://www.asexuality.org/en/topic/53435-asexual-flag-and-the-winner-is/',
			source: 'Asexual Visibility and Education Network'
		},
		{
			name: '"The Asexuality Flag" (2012-02-20).',
			link: 'https://web.archive.org/web/20211128030358/https://www.asexualityarchive.com/the-asexuality-flag/',
			source: 'Asexuality Archive.'
		}
	],

	brandColor: '#702282',
	alternativeName: ['Ace'],
	specifics: {
		genders: ['Any'],
		attractedTo: ['No one (sexually)'],
		attractionType: ['None (sexually)'],
		spectrumOrUmbrella: ['Asexual spectrum']
	},
	relatedTerms: {
		differentFrom: ['Aromantic', 'Demisexual'],
		associatedRomanticism: ['']
	},

	img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/asexual%20.png',
	shortDescription: `Asexual refers to people who do not experience sexual attraction toward others. They may experience other forms of attraction, such as romantic, sensual, or aesthetic attraction. Asexuality is a sexual orientation, not a gender identity, behavior, or medical condition. Some asexual people choose to engage in sexual activities for various reasons despite not experiencing sexual feelings and desire toward any particular person. Asexuality is part of the asexual spectrum (abbreviated "ace"), an umbrella term and a broad community of identities that are closely related to asexuality when placed on a spectrum ranging from asexual to sexual.`,
	number: 27
};

export default element;
