(function (Prism) {
	Prism.languages.gfm = Prism.languages.extend('markdown', {});

	Prism.languages.gfm['bold'].pattern = /(^|[^\\])(?:\*\*(?:\n(?!\n)|.)+?\*\*|\b__(?:\n(?!\n)|.)+?__\b)/;
	Prism.languages.gfm['italic'].pattern = /(^|[^\\])(?:\*(?:\n(?!\n)|.)+?\*|\b_(?:\n(?!\n)|.)+?_\b)/;

	Prism.languages.insertBefore('gfm', 'bold', {
		'strikethrough': {
			// ~~strikethrough~~

			// Allow only one line break
			pattern: /(^|[^\\])~~(?:\n(?!\n)|.)+?~~/,
			lookbehind: true,
			inside: {
				'punctuation': /^~~|~~$/,
				'bold': Prism.languages.gfm['bold'],
				'italic': Prism.languages.gfm['italic'],
				'url': Prism.languages.gfm['url']
			},
			alias: 'deleted'
		}
	});

	Prism.languages.gfm['bold'].inside['strikethrough'] = Prism.util.clone(Prism.languages.gfm['strikethrough']);
	Prism.languages.gfm['italic'].inside['strikethrough'] = Prism.util.clone(Prism.languages.gfm['strikethrough']);

	Prism.languages.insertBefore('gfm', 'title', {
		'table': {
			pattern: /\|?[^|\n]+(?:\|[^|\n]+)+\|?\n\|?-{3,}(?:\|-{3,})+\|?(?:\n\|?[^|\n]+(?:\|[^|\n]+)+\|?)*/,
			inside: {
				'punctuation': /\||-{3,}/,
				'bold': Prism.languages.gfm['bold'],
				'italic': Prism.languages.gfm['italic'],
				'url': Prism.languages.gfm['url']
			}
		}
	});

	Prism.languages.insertBefore('gfm', 'code', {
		'fenced-code': {
			pattern: /(^|\n)```[\w-]*\n[\s\S]+?\n```/,
			inside: {
				'language': {
					pattern: /(```)[\w-]+/,
					lookbehind: true,
					alias: 'variable'
				},
				'punctuation': {
					pattern: /^```|```$/
				}
			},
			lookbehind: true,
			alias: 'keyword'
		}
	});

}(Prism));