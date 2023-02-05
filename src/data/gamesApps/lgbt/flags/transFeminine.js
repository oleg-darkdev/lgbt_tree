import loremDescriptionText from './loremDescription';
import loremShortDescriptionText from './loremShortDescriptionText';
import сategories from './categories';

const element = {
	name: 'Trans feminine',
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
	linkOriginalWiki: 'https://lgbtqia.fandom.com/wiki/Transfeminine',
	etymology: [
		`The term "transfeminine" may or may not have been coined by Jane Nance in 1985 in the article "TRANSFEMININE!!!", which was published in the journal The TV-TS Tapestry. Nance described being assigned male at birth and having a feminine identity, not a "basic male self-identity". However, the existing "transvestite" and "transsexual" terminology of the time was inadequate and did not account for not feeling like "a male dressing in women's clothes" when presenting as a woman, having a self-image as a woman, but lacking an interest in surgical transition. Nance wondered, "Do we need another term or category to cover my particular reality? Maybe! Could it be 'transfeminine' (a male who feels like a female, strictly undefined in relation to any issue of an operation) - perhaps!"`
	],
	references: [
		{
			name: `The ABC's of LGBT+`,
			link: '',
			source: 'Hardell, Ash / Mango Media Inc'
		},
		{
			name: 'TRANSFEMININE!!!". The TV-TS Tapestry: The Journal for Persons Interested in Crossdressing & Transsexualism.',
			link: 'https://archive.org/details/tvtstapestry47unse/page/30/mode/2up?q=transfeminine',
			source: 'Nance, Jane / Tiffany Club, 1985'
		}
	],
	brandColor: '#702282',
	alternativeName: ['Transfem'],
	specifics: {
		genders: ['Transgender Woman', 'AMAB Feminine-Aligned Nonbinary People'],
		attractedTo: [''],
		attractionType: [''],
		spectrumOrUmbrella: ['']
	},
	relatedTerms: {
		differentFrom: ['Transgender'],
		associatedRomanticism: ['']
	},

	img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/transfeminine.png',
	shortDescription: `Transfeminine, often abbreviated to transfem, refers to people who were assigned male at birth and have a gender identity, gender expression, or both that is predominantly feminine. Transfeminine people may or may not identify as female. It can be a standalone identity term or an umbrella term for certain identities, such as:

 * Transgender women
 * Non-binary people who feel their gender is feminine, whether entirely or partially
 * Genderfluid or multigender people who feel predominantly feminine
 * Demigirls`,
	number: 70
};
export default element;
