/**
 * SyntaxHighlighter - Objective-C Brush
 * http://codepirate.seaandco.com/
 *
 * @version
 * 1.0.0 (February 22 2009)
 *
 * @author
 * Geoffrey Byers
 * 
 * @copyright
 * Copyright (C) 2009 Geoffrey Byers.
 *
 * Licensed under a GNU Lesser General Public License.
 * http://creativecommons.org/licenses/LGPL/2.1/
 *
 *  Updated From:
 *  Code Syntax Highlighter for Objective-C.
 *  Version 0.0.2
 *  Copyright (C) 2006 Shin, YoungJin.
 *  http://scottdensmore.typepad.com/blog/2008/12/objective-c-cocoa-syntax-highlighter.html
 */

dp.sh.Brushes.ObjC = function()
{
	var datatypes =	'char bool BOOL double float int long short id void';
	
	var keywords = 'IBAction IBOutlet SEL YES NO readwrite readonly nonatomic nil NULL ';
	keywords += 'super self copy ';
	keywords += 'break case catch class const copy __finally __exception __try ';
	keywords += 'const_cast continue private public protected __declspec ';
	keywords += 'default delete deprecated dllexport dllimport do dynamic_cast ';
	keywords += 'else enum explicit extern if for friend goto inline ';
	keywords += 'mutable naked namespace new noinline noreturn nothrow ';
	keywords += 'register reinterpret_cast return selectany ';
	keywords += 'sizeof static static_cast struct switch template this ';
	keywords += 'thread throw true false try typedef typeid typename union ';
	keywords += 'using uuid virtual volatile whcar_t while';
	// keywords += '@property @selector @interface @end @implementation @synthesize ';
	
		
	this.regexList = [
		{ regex: dp.sh.regexLib.singleLineCComments,		css: 'comments' },		// one line comments
		{ regex: dp.sh.regexLib.multiLineCComments,		css: 'comments' },		// multiline comments
		{ regex: dp.sh.regexLib.doubleQuotedString,		css: 'string' },			// double quoted strings
		{ regex: dp.sh.regexLib.singleQuotedString,		css: 'string' },			// single quoted strings
		{ regex: new RegExp('^ *#.*', 'gm'),						css: 'preprocessor' },		// preprocessor
		{ regex: new RegExp(this.getKeywords(datatypes), 'gm'),		css: 'datatypes' },		// datatypes
		{ regex: new RegExp(this.getKeywords(keywords), 'gm'),		css: 'keyword' },			// keyword
		{ regex: new RegExp('\\bNS\\w+\\b', 'g'),					css: 'keyword' },			// keyword
		{ regex: new RegExp('@\\w+\\b', 'g'),						css: 'keyword' },			// keyword
		];
	
}

dp.sh.Brushes.ObjC.prototype = new dp.sh.Highlighter();
dp.sh.Brushes.ObjC.aliases = ['objc', 'obj-c'];
