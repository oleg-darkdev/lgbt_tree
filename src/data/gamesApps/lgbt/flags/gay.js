import loremDescriptionText from './loremDescription';
import loremShortDescriptionText from './loremShortDescriptionText';
import сategories from './categories';

const element = {
	name: 'Gay',
	category: [сategories.sexuality],
	description: [
		'Gay is an adjective referring to those with an enduring physical, romantic, and/or emotional attraction to people of the same gender. This is most commonly associated with men, as a gay woman may prefer to use the term "lesbian" instead.'
	],
	linkOriginalWiki: 'https://lgbtqia.fandom.com/wiki/Gay',
	etymology: [
		'The word "homosexuality" comes from the Greek homos, which means "the same".',
		'The word "gay" has had many meanings over the years. Dating back to the 12th century, it came from the Old French word "gai", meaning "joyful, happy; pleasant, agreeably charming; forward, pert; light-colored" and was a commonly used term within literature.',
		`It was not until the 1600s that the term took on a sexual meaning. By then, the "carefree" nature of the word became used to refer to people with unrestrained morals and prone to decadence and promiscuity; as such, a prostitute became known as a "gay woman", a womanizer as a "gay man", and a brothel as a "gay house". This trend continued, as in the 1890s, the term "gey cat", which is a Scottish variant of gay, was used to refer to a "vagrant who offered sexual services to women or a young traveler who was new to the road and in the company of an older man." This marked one of the first times that "gay" was used to imply a homosexual relationship.`,
		`By the 1960s, gay men had taken to the term to refer to their own sexual identity, and by today's standards, it is the acceptable way to refer to homosexual people`
	],
	references: [
		{
			name: '"What is LGBTQ?".',
			link: 'https://gaycenter.org/about/lgbtq/#gay',
			source: ' The Center - The Lesbian, Gay, Bisexual & Transgender Community Center.'
		},
		{
			name: '"LGBTQ+ Glossary of Terms". ',
			link: 'https://www.bnl.gov/diversity/files/pdf/resources/transgender/Glossaryof-terms.pdf',
			source: 'Out Alliance.'
		},
		{
			name: 'Etymology of "gay"',
			link: 'https://www.etymonline.com/word/gay',
			source: ''
		},
		{
			name: 'Redman, Jordan: "The history of the word "gay"". ',
			link: 'https://www.gayly.com/history-word-%E2%80%9Cgay%E2%80%9D',
			source: 'The Gayly.'
		},
		{
			name: '"Meaning of gay in English". ',
			link: 'https://www.lexico.com/definition/gay',
			source: 'Lexico.'
		},
		{
			name: '"Gay Man Flag" (2019-07-10). ',
			link: 'https://gayflagblog.tumblr.com/post/186181118619/gay-man-flag-russian-%D1%80%D0%BE%D1%81%D1%81%D0%B8-%D1%8F-portuguese',
			source: 'gayflagblog.tumblr.com. (Archived on February 16, 2022)'
		}
	],
	flagInfo: {
		description: [
			`Much lesser known than its rainbow companion, the modern gay men's pride flag was posted in 2019 on the Tumblr blog gayflagblog as an update of a prior flag. It features an array of green, blue, and purple shades to be representative of a wide range of gay men, regardless of their gender, thus also including, but not being limited to, gay men who are transgender, non-binary, gender non-conforming, aromantic, or asexual. This version replaced the original one that only used blue tones, as it was regarded as a stereotypical representation of the gender binary and lacked meaning for the colors used. Inspired by Gilbert Baker and the responses to the blue flag, the individual stripes used by gayflagblog mean`
		],
		colors: [
			{
				color: 'Green',
				description: 'Community'
			},
			{
				color: 'Teal',
				description: 'Healing'
			},
			{
				color: 'Light teal/green',
				description: 'Joy'
			},
			{
				color: 'White',
				description: 'Non-binary & trans men'
			},
			{
				color: 'Light blue',
				description: 'Pure love'
			},
			{
				color: 'Purple',
				description: 'Fortitude'
			},
			{
				color: 'Indigo',
				description: 'Diversity'
			}
		]
	},
	brandColor: '#702282',
	alternativeName: ['Homosexuality'],
	specifics: {
		genders: [''],
		attractedTo: ['Same gender individuals'],
		attractionType: ['Sexual', 'Romantic', 'Platonic'],
		spectrumOrUmbrella: ['']
	},
	relatedTerms: {
		differentFrom: ['Queer'],
		associatedRomanticism: ['Homoromantic']
	},
	img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/gay.png',
	shortDescription: loremShortDescriptionText,
	number: 12
};

export default element;
