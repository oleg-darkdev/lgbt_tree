import loremDescriptionText from './loremDescription';
import loremShortDescriptionText from './loremShortDescriptionText';
import сategories from './categories';

const element = {
	name: 'Gender non-conforming',
	category: [сategories.genderExpression],
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
	linkOriginalWiki: 'https://lgbtqia.fandom.com/wiki/Gender_non-conforming',
	etymology: [''],
	references: [
		{
			name: 'National Glossary of Terms',
			link: 'https://pflag.org/glossary',
			source: 'PFLAG'
		},
		{
			name: 'The Trans Language Primer: "Gender Non-Conforming (GNC)',
			link: 'https://translanguageprimer.com/gender-non-conforming/',
			source: 'The Trans Language Primer'
		},
		{
			name: 'Glossary of Terms - Transgender',
			link: 'https://www.glaad.org/reference',
			source: 'GLAAD Media Reference Guide - 10th Edition'
		},
		{
			name: 'The Social Costs of Gender Nonconformity for Transgender Adults: Implications for Discrimination and Health',
			link: 'The Social Costs of Gender Nonconformity for Transgender Adults: Implications for Discrimination and Health',
			source: 'ncbi.nlm.nih.gov'
		}
	],

	brandColor: '#702282',
	alternativeName: ['GNC, Gender diverse, gender expansive, gender variant'],
	specifics: {
		genders: ['Any'],
		attractedTo: [''],
		attractionType: [''],
		spectrumOrUmbrella: ['']
	},
	relatedTerms: {
		differentFrom: ['Non-binary', 'Transgender', 'Genderfuck', 'Genderqueer'],
		associatedRomanticism: ['']
	},

	img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/nonconforming.png',
	shortDescription: `Gender non-conforming (GNC) people do not follow gender stereotypes; they differ from their society's conventional binary expectations of masculine or feminine presentation. Gender non-conformity can encompass many things, such as gender expression or gender roles. It is typically apparent in people whose gender identity is a binary gender such as male or female, whether they are cisgender or transgender; for instance, a feminine trans man and a feminine cis man are both non-conforming with expectations of masculinity. The term is not equivalent to non-binary or trans, but some trans or non-binary people also identify as gender non-conforming. It is sometimes seen as an umbrella term for non-binary genders, such as in the initialism "TGNC" (trans and gender non-conforming)`,
	number: 53
};

export default element;
