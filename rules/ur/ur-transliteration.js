(function ($) {
	'use strict';

	var urTransliteration = {
		id: 'ur-transliteration',
		name: 'اردو ٹرانسلٹریشن',
		description: 'Transliteration keyboard for Urdu script',
		date: '2025-05-25',
		author: 'SarifUrdu (adapted from Junaid P V)',
		license: 'GPLv3',
		version: '1.0',
		contextLength: 1,
		maxKeyLength: 3,
		patterns: [
			// Escape sequences: allow \ to pass-through
			[ '\\\\([A-Za-z\\>_~\\.0-9])', '\\\\', '$1' ],

			// Map digits
			[ '0', '۰' ],
			[ '1', '۱' ],
			[ '2', '۲' ],
			[ '3', '۳' ],
			[ '4', '۴' ],
			[ '5', '۵' ],
			[ '6', '۶' ],
			[ '7', '۷' ],
			[ '8', '۸' ],
			[ '9', '۹' ],

			// Punctuation
			[ '\\.', '۔' ],
			[ '\\,', '،' ],
			[ '\\?', '؟' ],

			// Common Urdu letters
			[ 'a', 'ا' ],
			[ 'aa', 'آ' ],
			[ 'b', 'ب' ],
			[ 'p', 'پ' ],
			[ 't', 'ت' ],
			[ 't', 'ٹ' ],
			[ 'T', 'ٹ' ],
			[ 'th', 'ث' ],
			[ 'j', 'ج' ],
			[ 'ch', 'چ' ],
			[ 'chh', 'چھ' ],
			[ 'h', 'ہ' ],
			[ 'H', 'ح' ],
			[ 'k', 'ک' ],
			[ 'kh', 'خ' ],
			[ 'd', 'د' ],
			[ 'D', 'ڈ' ],
			[ 'z', 'ز' ],
			[ 'zh', 'ژ' ],
			[ 'r', 'ر' ],
			[ 'R', 'ڑ' ],
			[ 's', 'س' ],
			[ 'sh', 'ش' ],
			[ 'S', 'ص' ],
			[ 'Z', 'ض' ],
			[ 'T', 'ط' ],
			[ 'Z', 'ظ' ],
			[ 'gh', 'غ' ],
			[ 'f', 'ف' ],
			[ 'q', 'ق' ],
			[ 'k', 'ک' ],
			[ 'g', 'گ' ],
			[ 'l', 'ل' ],
			[ 'm', 'م' ],
			[ 'n', 'ن' ],
			[ 'N', 'ں' ],
			[ 'w', 'و' ],
			[ 'o', 'و' ],
			[ 'u', 'و' ],
			[ 'h', 'ہ' ],
			[ 'e', 'ے' ],
			[ 'i', 'ی' ],
			[ 'y', 'ی' ],
			[ 'ai', 'ع' ],
			[ 'gh', 'غ' ],
			[ 'q', 'ق' ],
			[ 'k', 'ک' ],
			[ 'g', 'گ' ],
			[ 'l', 'ل' ],
			[ 'm', 'م' ],
			[ 'n', 'ن' ],
			[ 'N', 'ں' ],
			[ 'w', 'و' ],
			[ 'h', 'ہ' ],
			[ 'e', 'ی' ],
			[ 'i', 'ی' ],
			[ 'y', 'ی' ],
			[ 'ai', 'ع' ],
			[ 'gh', 'غ' ],

			// Hamza and combinations
			[ 'a\'', 'ء' ],
			[ 'e\'', 'ئ' ],
			[ 'i\'', 'ئ' ],
			[ 'o\'', 'ؤ' ],
			[ 'u\'', 'ؤ' ],

			// Tanween and marks
			[ 'an', 'اً' ],
			[ 'un', 'ٌ' ],
			[ 'in', 'ٍ' ],

			// Remove redundant virama or nukta rules for Urdu

			// Example: handle some common clusters
			[ 'kh', 'خ' ],
			[ 'kh', 'کھ' ],
			[ 'gh', 'غ' ],
			[ 'gh', 'گھ' ],
			[ 'ch', 'چ' ],
			[ 'ch', 'چھ' ],
			[ 'sh', 'ش' ],
			[ 'zh', 'ژ' ],
			[ 'ph', 'پھ' ],
			[ 'th', 'تھ' ],
			[ 'th', 'ٹھ' ],
			[ 'dh', 'ذ' ],
			[ 'bh', 'بھ' ],
			[ 'jh', 'جھ' ],
			[ 'wh', 'وھ' ],

			// Misc ligatures
			[ 'll', 'لّ' ],

			// Final catch-all for isolated characters
			// (optional: can be fine-tuned for better results)

			// For space and other characters, let them pass-through
		]
	};

	$.ime.register(urTransliteration);
}(jQuery));
