import loremDescriptionText from './loremDescription';
import loremShortDescriptionText from './loremShortDescriptionText';
import сategories from './categories';

const element = {
	name: 'Lesbian',
	category: [сategories.romanticOrientation, сategories.sexualOrientation],
	// `Certain lesbians have used the label to describe their gender in addition to their attractions. In the 2021 Gender Census, an annual online international survey of people who do not strictly identify with the gender binary, participants indicated their personal identifiers; the item "lesbian (partially or completely in relation to gender)" was selected by 12.9% of the participants.`,
	// `For over a century, lesbians have debated who shares their identity and is part of the lesbian community. They have variously been defined based on sexual behaviors, sexual attractions, or self-identifying with the label. For instance, women who self-identify as both bisexual and lesbian would not be included in a definition that specifies lesbians are only oriented toward women, but would be in a broader definition that encompasses other labels.`

	description: [loremDescriptionText],
	flagInfo: {
		description: [
			`At the end of June 2017, Mod Q of the Tumblr blog butch positivity (butchspace) posted a seven-striped orange and yellow butch flag design and color meanings. Days later in July, the username shapeshifter-of-constellation posted a general lesbian flag design. The bottom three stripes use color codes sampled from the top of Mod Q's butch flag, and the top four colors were derived from those of the lipstick lesbian flag (three of them directly sampled). The stripes are visually equal in size but have slight variances upon close inspection. Alternate versions with stripes from the More Color More Pride flag were also offered. At the suggestion of Mod T from butch positivity, shapeshifter-of-constellation proposed that the white stripe could symbolize those who do not identify as butch or femme, but no meanings were assigned to other individual stripes. Responding to Mod Q, they said the intention of it was a general lesbian flag for anyone in the community, not specifically a femme/butch flag.`
		],
		colors: [
			{
				color: 'Red-orange',
				description: 'gender non-conformity'
			},
			{
				color: 'Orange',
				description: 'independence'
			},
			{
				color: 'Light orange',
				description: 'community'
			},
			{
				color: 'White',
				description: 'unique relationships to womanhood'
			},
			{
				color: 'Light pink',
				description: 'serenity and peace'
			},
			{
				color: 'Medium pink',
				description: 'love and sex'
			},
			{
				color: 'Dark pink',
				description: 'femininity'
			}
		]
	},
	linkOriginalWiki: 'https://lgbtqia.fandom.com/wiki/Lesbian',
	etymology: [
		`The term "Lesbian" originally referred to people or things from the Greek island of Lesbos. It is associated with famous poet Sappho, a community leader from the island of Lesbos who wrote multiple love poems to other women circa 600 BCE. The adjective "sapphic" is also derived from Sappho. Sappho also wrote erotic and romantic verses that included men, but in English language texts, her particular association with the erotic love between women has been dated to 1732 or before. By 1870, "lesbianism" had become a noun for a woman's erotic interest in other women or homosexual relations between them, while the phrase "lesbian love" was in use by 1883, originally circulating in U.S. medical journals that framed sexual intimacy between women as pathological. Previously used as an adjective related to the isle of Lesbos or to amatory poetry, "lesbian" has been in continuous use since 1890 to describe romantic and/or sexual behavior between women regardless of their specific sexualities, such as "lesbian couple", "lesbian sex", or "lesbian kiss". By 1904, lesbian was in use as a noun.`
	],
	references: [
		{
			name: 'The A-Z of Gender and Sexuality: From Ace to Ze. Jessica Kingsley Publishers, 2019.',
			link: '',
			source: 'Holleb, Morgan Lev Edward.'
		},
		{
			name: '"List of LGBTQ+ terms".',
			link: 'https://www.stonewall.org.uk/help-advice/faqs-and-glossary/list-lgbtq-terms',
			source: 'Stonewall'
		},
		{
			name: 'Queer Adolescence: Understanding the Lives of Lesbian, Gay, Bisexual, Transgender, Queer, Intersex, and Asexual Youth.',
			link: '',
			source: 'McNabb, Charlie. / Rowman & Littlefield.'
		},
		{
			name: `"'LGBTI' people and communities"`,
			link: 'https://www.lgbtiqhealth.org.au/lgbti_people_and_communities',
			source: 'LGBTIQ+ Health Australia'
		},
		{
			name: `"The Gender Closet: Lesbian Disappearance under the Sign 'Women'".`,
			link: 'https://www.thefreelibrary.com/The+gender+closet%3a+lesbian+disappearance+under+the+sign+%22women.%22-a017200206',
			source: 'Calhoun, Cheshire.'
		},
		{
			name: 'Queer Identities and Politics in Germany: A History, 1880–1945.',
			link: '',
			source: 'Whisnant, Clayton J.'
		},
		{
			name: ' Lesbian Health: Current Assessment and Directions for the Future.',
			link: '',
			source: `Solarz, Andrea L., National Academies Press, 1999.`
		}
	],

	brandColor: '#702282',
	alternativeName: [''],
	specifics: {
		genders: ['Women', 'Non-binary', 'Genderqueer'],
		attractedTo: ['Women', 'Non-binary ', 'Genderqueer', ''],
		attractionType: ['Romantically', 'Sexually'],
		spectrumOrUmbrella: ['']
	},
	relatedTerms: {
		differentFrom: ['Sapphic'],
		associatedRomanticism: ['']
	},

	img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/lesbian.png',
	shortDescription:
		'The term is generally used as a self-identification of sexual or romantic orientation. Although lesbians are frequently defined as women who are exclusively attracted to women, another definition is women primarily attracted to other women.',
	number: 19
};

export default element;
