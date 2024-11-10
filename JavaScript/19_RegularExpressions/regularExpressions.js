// Topics Covered:
// ● What is RegEx?
// ● Brackets in RegEx.
// ● Quantifiers in RegEx.
// ● Characters in RegEx.
//      ○ Characters.
//      ○ Literal characters.
//      ○ Metacharacters.
// ● Modifiers in RegEx.
// ● RegEx properties.
// ● RegEx methods.

// Topics in Detail:
// ============================= What is RegEX?
// ● A regular expression is an object that describes a pattern of characters.
// ● The JavaScript RegExp class represents regular expressions and defines methods that
//   use regular expressions to perform powerful pattern-matching and
//   search-and-replace functions on text.
// ● A regular expression could be defined with the RegExp () constructor.
// ● Syntax:------------------------------------
//      1. Using a Object:
//          var pattern = new RegExp(pattern, attributes);
//          const re = new RegExp('ab+c')
//      or
//      2. Using a Literal
//          var pattern = /pattern/attributes;
//          const check = /ab+c/
//  ● Where
//        ○ pattern → A string that specifies the pattern of the regular expression or another
//                    regular expression.
//        ○ attributes → An optional string containing any of the "g", "i", and "m" attributes
//                       that specify global, case-insensitive, and multiline matches, respectively.

const x = new RegExp(/^a...s$/);
console.log(x.test('alias')); // true
console.log(x.test('alis')); // false
console.log(x.test('aliaw')); // false

// Decimal Numbers:
//  /^\d*\.\d+$/

//------------------ Brackets:
// Brackets ([]) have a special meaning when used in the context of regular expressions.
// They are used to find a range of characters.
//      Bracket                        Description
//      [...]                   Any one character between the bracket.
//      [^...]                  Any one character not between the bracket.
//      [0-9]                   It matches any decimal digit from 0 through 9.
//      [a-z]                   It matches any character from lowercase a through lowercase z.
//      [A-Z]                   It matches any character from uppercase A through uppercase Z.
//      [a-Z]                   It matches any character from lowercase a through uppercase Z.

// ● The ranges shown above are general.
// ● We can use the range [0-3] to match any decimal digit ranging from 0 through 3.
// ● The range [b-v] to match any lowercase character ranging from b through v.

//--------------------- Quantifiers:
// ● The frequency of position of bracketed character sequences and
//   single characters can be denoted by a special character.
// ● Each special character has a specific con notation.
//   The +, *, ?, and $ flags all follow acharacter sequence.

//      Expression                  Description
//          p+           |       It matches any string containing one or more p's.
//          p*           |       It matches any string containing zero or more p's.
//          p?           |       It matches any string containing at most one p.
//          p{N}         |       It matches any string containing a sequence of N p's
//          p{2,3}       |       It matches any string containing a sequence of two or three p's.
//          p{2,}        |       It matches any string containing a sequence of at least two p's.
//          p$           |       It matches any string with p at the end of it.
//          ^p           |       It matches any string with p at the beginning of it.
