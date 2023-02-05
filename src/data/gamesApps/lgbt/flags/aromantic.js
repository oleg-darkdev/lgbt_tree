import loremDescriptionText from './loremDescription';
import loremShortDescriptionText from './loremShortDescriptionText';
import сategories from './categories';

const element = {
	name: 'Aromantic',
	category: [сategories.romanticOrientation],
	description: [
		`The aromantic spectrum, also known as "aro-spec", ranges from aromantic to alloromantic, referring to people who regularly and consistently experience romantic attraction. People within the aromantic spectrum are part of a community that has much in common. They may use the label aromantic as a close fit for their experiences or use other labels that further describe them.`,
		``
	],
	flagInfo: {
		description: [
			' The first proposed aromantic flag had four stripes. This flag was later changed because it closely resembled the Rastafarian flag, and because it had a stripe representing alloromantics.',
			'Cameron Whimsy designed second aromantic flag and its modified version. Both are five-striped flags with shared top and bottom stripes, but the center stripe was changed from yellow to white. The meanings changed slightly with the center stripe change.'
		],
		colors: [
			{
				color: 'Green',
				description:
					'because it is the opposite of red, the most commonly associated romance color.'
			},
			{
				color: 'Yellow',
				description: 'representing platonic love'
			},
			{
				color: 'Orange',
				description: 'grayromantics, because it is in between red and yellow.'
			},
			{
				color: 'Black',
				description: 'alloromantics that "reject traditional ideas of romance"'
			}
		]
	},
	linkOriginalWiki: 'https://lgbtqia.fandom.com/wiki/Aromantic',
	etymology: [
		`The term aromantic uses the Latin prefix a- which means 'without' or 'not'. In a literal sense, it means 'a lack of romance'`
	],
	references: [
		{
			name: `Hardell, Ash. The ABC's of LGBT+`,
			link: '',
			source: 'Mango Media Inc., 2016'
		},
		{
			name: 'Asexual Visibility and Education Network: "Romantic Orientations".',
			link: 'https://www.asexuality.org/?q=romanticorientation',
			source: 'The Asexual Visibility and Education Network.'
		},
		{
			name: '"About Aromanticism".',
			link: 'https://web.archive.org/web/20220220224321/http://www.arospecweek.org/about-aromanticism/',
			source: 'Aromantic Spectrum Awareness Week.'
		},
		{
			name: 'CRWflags.com lists the meaning of Aro flags',
			link: 'https://www.crwflags.com/fotw/flags/qq-arom.html',
			source: 'CRWflags.com'
		},
		{
			name: `"i've been reading up on a lot of the discussion about the aro flag"`,
			link: 'https://web.archive.org/web/20220124152825/https://cameronwhimsy.tumblr.com/post/75868343112/ive-been-reading-up-on-a-lot-of-the-discussion',
			source: 'Whimsy, Cameron'
		},
		{
			name: '"Newer and more improved aro flag"',
			link: 'https://web.archive.org/web/20220120152925/https://cameronwhimsy.tumblr.com/post/102698477928/whoops-yeah-i-just-realised-i-never-actually-made',
			source: 'Whimsy, Cameron'
		}
	],

	brandColor: '#702282',
	alternativeName: ['Aro'],
	specifics: {
		genders: ['Any'],
		attractedTo: ['None or limited'],
		attractionType: [''],
		spectrumOrUmbrella: ['Aromantic spectrum']
	},
	relatedTerms: {
		differentFrom: ['Asexual', 'Non-amory'],
		associatedRomanticism: ['Asexual']
	},

	img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/aromantic.png',
	shortDescription: `Aromantic, often shortened to aro, describes people who do not experience romantic attraction, or if not strictly aromantic, little to no romantic attraction. One of the meanings of the A in LGBTQIA+ is Aromantic. Aromanticism is a romantic orientation and may involve forms of attraction that are not necessarily romantic, or interests in relationships that are intimate in other ways. There is no singular experience of aromanticism.`,
	number: 58
};

export default element;
