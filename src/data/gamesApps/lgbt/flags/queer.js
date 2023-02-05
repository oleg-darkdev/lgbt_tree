import loremDescriptionText from './loremDescription';
import loremShortDescriptionText from './loremShortDescriptionText';
import сategories from './categories';

const element = {
	name: 'Queer',
	category: [сategories.sexuality, сategories.gender],
	description: [loremDescriptionText],
	flagInfo: {
		description: [
			'Sensory issues were considered when designing this flag, thus the off-white background color and the rejection of a previously proposed flag.'
		],
		colors: [
			{
				color: 'Lavender colors',
				description: 'historical association with the LGBT'
			},
			{
				color: 'Off-white color',
				description: 'combination of all colors of the rainbow'
			}
		]
	},
	linkOriginalWiki: 'https://lgbtqia.fandom.com/wiki/Queer',
	etymology: [
		'Originating in Scottish in the 1500s, queer originally meant "strange," "odd," "peculiar," or "eccentric." In 1781, it grew to meant "appearing, feeling, or behaving otherwise than is usual". It began to be associated with homosexuality in 1922 as an adjective, and a noun in 1935.'
	],
	references: [
		{
			name: 'Glossary of Terms - Lesbian / Gay / Bisexual / Queer',
			link: 'https://web.archive.org/web/20210926074140/https://www.glaad.org/reference/lgbtq',
			source: 'GLAAD Media Reference Guide - 10th Edition'
		},
		{
			name: 'National Glossary of Terms',
			link: 'https://web.archive.org/web/20220125043743/https://pflag.org/glossary',
			source: 'PFLAG'
		},
		{
			name: 'Gender Census 2021: Worldwide Report',
			link: 'https://web.archive.org/web/20211121224434/https://gendercensus.com/results/2021-worldwide',
			source: 'Gender Census'
		},
		{
			name: 'Queer". The Trans Language Primer',
			link: 'https://web.archive.org/web/20211105113926/https://translanguageprimer.com/queer',
			source: 'The Trans Language Primer'
		},
		{
			name: 'Coming to an Asexual Identity: Negotiating Identity, Negotiating Desire',
			link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2893352/',
			source: 'Scherrer, Kristin / National Center for Biotechnology Information'
		},
		{
			name: 'Etymology, origin and meaning of queer',
			link: 'https://www.etymonline.com/word/queer#etymonline_v_3174',
			source: 'Online Etymology Dictionary'
		},
		{
			name: 'Proud and Supported: Definitions and Beyond',
			link: 'https://proudandsupported.org/wp-content/uploads/2022/02/Definition-and-Beyond-Easy-Read.pdf',
			source: 'proudandsupported.org'
		}
	],
	brandColor: '#702282',
	alternativeName: [''],
	specifics: {
		genders: [''],
		attractedTo: [''],
		attractionType: [''],
		spectrumOrUmbrella: ['']
	},
	relatedTerms: {
		differentFrom: [''],
		associatedRomanticism: ['']
	},

	img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/queer.png',
	shortDescription: `Queer is an identifier for individuals and/or the community of people who are not cisgender heterosexual It can be used instead of, or in addition to, other identifiers of sexual orientation, such as lesbian, bisexual, or gay. Queer can also refer to gender identity or gender expression, whether as a standalone term or part of another like genderqueer. The "Q" in LGBTQIA+ and similar acronyms commonly means Queer. As a reclaimed word, it has been used in fights for LGBTQIA+ rights and liberation as an inclusive and sometimes defiant term. PFLAG and GLAAD are two of the organizations that recommend only using it for people who self-identify as queer because it has varying meanings and is not universally accepted. In addition, the term may be used in preference to other identifiers by members, for a variety of reasons.`,
	number: 13
};

export default element;
