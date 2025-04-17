"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-util-character";
exports.ids = ["vendor-chunks/micromark-util-character"];
exports.modules = {

/***/ "(ssr)/./node_modules/micromark-util-character/dev/index.js":
/*!************************************************************!*\
  !*** ./node_modules/micromark-util-character/dev/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   asciiAlpha: () => (/* binding */ asciiAlpha),\n/* harmony export */   asciiAlphanumeric: () => (/* binding */ asciiAlphanumeric),\n/* harmony export */   asciiAtext: () => (/* binding */ asciiAtext),\n/* harmony export */   asciiControl: () => (/* binding */ asciiControl),\n/* harmony export */   asciiDigit: () => (/* binding */ asciiDigit),\n/* harmony export */   asciiHexDigit: () => (/* binding */ asciiHexDigit),\n/* harmony export */   asciiPunctuation: () => (/* binding */ asciiPunctuation),\n/* harmony export */   markdownLineEnding: () => (/* binding */ markdownLineEnding),\n/* harmony export */   markdownLineEndingOrSpace: () => (/* binding */ markdownLineEndingOrSpace),\n/* harmony export */   markdownSpace: () => (/* binding */ markdownSpace),\n/* harmony export */   unicodePunctuation: () => (/* binding */ unicodePunctuation),\n/* harmony export */   unicodeWhitespace: () => (/* binding */ unicodeWhitespace)\n/* harmony export */ });\n/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-symbol */ \"(ssr)/./node_modules/micromark-util-symbol/lib/codes.js\");\n/**\n * @import {Code} from 'micromark-util-types'\n */\n\n\n\n/**\n * Check whether the character code represents an ASCII alpha (`a` through `z`,\n * case insensitive).\n *\n * An **ASCII alpha** is an ASCII upper alpha or ASCII lower alpha.\n *\n * An **ASCII upper alpha** is a character in the inclusive range U+0041 (`A`)\n * to U+005A (`Z`).\n *\n * An **ASCII lower alpha** is a character in the inclusive range U+0061 (`a`)\n * to U+007A (`z`).\n *\n * @param code\n *   Code.\n * @returns {boolean}\n *   Whether it matches.\n */\nconst asciiAlpha = regexCheck(/[A-Za-z]/)\n\n/**\n * Check whether the character code represents an ASCII alphanumeric (`a`\n * through `z`, case insensitive, or `0` through `9`).\n *\n * An **ASCII alphanumeric** is an ASCII digit (see `asciiDigit`) or ASCII alpha\n * (see `asciiAlpha`).\n *\n * @param code\n *   Code.\n * @returns {boolean}\n *   Whether it matches.\n */\nconst asciiAlphanumeric = regexCheck(/[\\dA-Za-z]/)\n\n/**\n * Check whether the character code represents an ASCII atext.\n *\n * atext is an ASCII alphanumeric (see `asciiAlphanumeric`), or a character in\n * the inclusive ranges U+0023 NUMBER SIGN (`#`) to U+0027 APOSTROPHE (`'`),\n * U+002A ASTERISK (`*`), U+002B PLUS SIGN (`+`), U+002D DASH (`-`), U+002F\n * SLASH (`/`), U+003D EQUALS TO (`=`), U+003F QUESTION MARK (`?`), U+005E\n * CARET (`^`) to U+0060 GRAVE ACCENT (`` ` ``), or U+007B LEFT CURLY BRACE\n * (`{`) to U+007E TILDE (`~`).\n *\n * See:\n * **\\[RFC5322]**:\n * [Internet Message Format](https://tools.ietf.org/html/rfc5322).\n * P. Resnick.\n * IETF.\n *\n * @param code\n *   Code.\n * @returns {boolean}\n *   Whether it matches.\n */\nconst asciiAtext = regexCheck(/[#-'*+\\--9=?A-Z^-~]/)\n\n/**\n * Check whether a character code is an ASCII control character.\n *\n * An **ASCII control** is a character in the inclusive range U+0000 NULL (NUL)\n * to U+001F (US), or U+007F (DEL).\n *\n * @param {Code} code\n *   Code.\n * @returns {boolean}\n *   Whether it matches.\n */\nfunction asciiControl(code) {\n  return (\n    // Special whitespace codes (which have negative values), C0 and Control\n    // character DEL\n    code !== null && (code < micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.space || code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.del)\n  )\n}\n\n/**\n * Check whether the character code represents an ASCII digit (`0` through `9`).\n *\n * An **ASCII digit** is a character in the inclusive range U+0030 (`0`) to\n * U+0039 (`9`).\n *\n * @param code\n *   Code.\n * @returns {boolean}\n *   Whether it matches.\n */\nconst asciiDigit = regexCheck(/\\d/)\n\n/**\n * Check whether the character code represents an ASCII hex digit (`a` through\n * `f`, case insensitive, or `0` through `9`).\n *\n * An **ASCII hex digit** is an ASCII digit (see `asciiDigit`), ASCII upper hex\n * digit, or an ASCII lower hex digit.\n *\n * An **ASCII upper hex digit** is a character in the inclusive range U+0041\n * (`A`) to U+0046 (`F`).\n *\n * An **ASCII lower hex digit** is a character in the inclusive range U+0061\n * (`a`) to U+0066 (`f`).\n *\n * @param code\n *   Code.\n * @returns {boolean}\n *   Whether it matches.\n */\nconst asciiHexDigit = regexCheck(/[\\dA-Fa-f]/)\n\n/**\n * Check whether the character code represents ASCII punctuation.\n *\n * An **ASCII punctuation** is a character in the inclusive ranges U+0021\n * EXCLAMATION MARK (`!`) to U+002F SLASH (`/`), U+003A COLON (`:`) to U+0040 AT\n * SIGN (`@`), U+005B LEFT SQUARE BRACKET (`[`) to U+0060 GRAVE ACCENT\n * (`` ` ``), or U+007B LEFT CURLY BRACE (`{`) to U+007E TILDE (`~`).\n *\n * @param code\n *   Code.\n * @returns {boolean}\n *   Whether it matches.\n */\nconst asciiPunctuation = regexCheck(/[!-/:-@[-`{-~]/)\n\n/**\n * Check whether a character code is a markdown line ending.\n *\n * A **markdown line ending** is the virtual characters M-0003 CARRIAGE RETURN\n * LINE FEED (CRLF), M-0004 LINE FEED (LF) and M-0005 CARRIAGE RETURN (CR).\n *\n * In micromark, the actual character U+000A LINE FEED (LF) and U+000D CARRIAGE\n * RETURN (CR) are replaced by these virtual characters depending on whether\n * they occurred together.\n *\n * @param {Code} code\n *   Code.\n * @returns {boolean}\n *   Whether it matches.\n */\nfunction markdownLineEnding(code) {\n  return code !== null && code < micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.horizontalTab\n}\n\n/**\n * Check whether a character code is a markdown line ending (see\n * `markdownLineEnding`) or markdown space (see `markdownSpace`).\n *\n * @param {Code} code\n *   Code.\n * @returns {boolean}\n *   Whether it matches.\n */\nfunction markdownLineEndingOrSpace(code) {\n  return code !== null && (code < micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.nul || code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.space)\n}\n\n/**\n * Check whether a character code is a markdown space.\n *\n * A **markdown space** is the concrete character U+0020 SPACE (SP) and the\n * virtual characters M-0001 VIRTUAL SPACE (VS) and M-0002 HORIZONTAL TAB (HT).\n *\n * In micromark, the actual character U+0009 CHARACTER TABULATION (HT) is\n * replaced by one M-0002 HORIZONTAL TAB (HT) and between 0 and 3 M-0001 VIRTUAL\n * SPACE (VS) characters, depending on the column at which the tab occurred.\n *\n * @param {Code} code\n *   Code.\n * @returns {boolean}\n *   Whether it matches.\n */\nfunction markdownSpace(code) {\n  return (\n    code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.horizontalTab ||\n    code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.virtualSpace ||\n    code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.space\n  )\n}\n\n// Size note: removing ASCII from the regex and using `asciiPunctuation` here\n// In fact adds to the bundle size.\n/**\n * Check whether the character code represents Unicode punctuation.\n *\n * A **Unicode punctuation** is a character in the Unicode `Pc` (Punctuation,\n * Connector), `Pd` (Punctuation, Dash), `Pe` (Punctuation, Close), `Pf`\n * (Punctuation, Final quote), `Pi` (Punctuation, Initial quote), `Po`\n * (Punctuation, Other), or `Ps` (Punctuation, Open) categories, or an ASCII\n * punctuation (see `asciiPunctuation`).\n *\n * See:\n * **\\[UNICODE]**:\n * [The Unicode Standard](https://www.unicode.org/versions/).\n * Unicode Consortium.\n *\n * @param code\n *   Code.\n * @returns\n *   Whether it matches.\n */\nconst unicodePunctuation = regexCheck(/\\p{P}|\\p{S}/u)\n\n/**\n * Check whether the character code represents Unicode whitespace.\n *\n * Note that this does handle micromark specific markdown whitespace characters.\n * See `markdownLineEndingOrSpace` to check that.\n *\n * A **Unicode whitespace** is a character in the Unicode `Zs` (Separator,\n * Space) category, or U+0009 CHARACTER TABULATION (HT), U+000A LINE FEED (LF),\n * U+000C (FF), or U+000D CARRIAGE RETURN (CR) (**\\[UNICODE]**).\n *\n * See:\n * **\\[UNICODE]**:\n * [The Unicode Standard](https://www.unicode.org/versions/).\n * Unicode Consortium.\n *\n * @param code\n *   Code.\n * @returns\n *   Whether it matches.\n */\nconst unicodeWhitespace = regexCheck(/\\s/)\n\n/**\n * Create a code check from a regex.\n *\n * @param {RegExp} regex\n *   Expression.\n * @returns {(code: Code) => boolean}\n *   Check.\n */\nfunction regexCheck(regex) {\n  return check\n\n  /**\n   * Check whether a code matches the bound regex.\n   *\n   * @param {Code} code\n   *   Character code.\n   * @returns {boolean}\n   *   Whether the character code matches the bound regex.\n   */\n  function check(code) {\n    return code !== null && code > -1 && regex.test(String.fromCharCode(code))\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLXV0aWwtY2hhcmFjdGVyL2Rldi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxZQUFZLE1BQU07QUFDbEI7O0FBRTJDOztBQUUzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHdEQUFLLG1CQUFtQix3REFBSztBQUMxRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ08sZ0RBQWdEOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ087QUFDUCxpQ0FBaUMsd0RBQUs7QUFDdEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNPO0FBQ1Asa0NBQWtDLHdEQUFLLGlCQUFpQix3REFBSztBQUM3RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ087QUFDUDtBQUNBLGFBQWEsd0RBQUs7QUFDbEIsYUFBYSx3REFBSztBQUNsQixhQUFhLHdEQUFLO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sMENBQTBDLEVBQUUsSUFBSSxFQUFFOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsTUFBTTtBQUNuQjtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96ZXR0ZWxrYXN0ZW4tbm90ZXMvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLXV0aWwtY2hhcmFjdGVyL2Rldi9pbmRleC5qcz8xNjA2Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGltcG9ydCB7Q29kZX0gZnJvbSAnbWljcm9tYXJrLXV0aWwtdHlwZXMnXG4gKi9cblxuaW1wb3J0IHtjb2Rlc30gZnJvbSAnbWljcm9tYXJrLXV0aWwtc3ltYm9sJ1xuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgdGhlIGNoYXJhY3RlciBjb2RlIHJlcHJlc2VudHMgYW4gQVNDSUkgYWxwaGEgKGBhYCB0aHJvdWdoIGB6YCxcbiAqIGNhc2UgaW5zZW5zaXRpdmUpLlxuICpcbiAqIEFuICoqQVNDSUkgYWxwaGEqKiBpcyBhbiBBU0NJSSB1cHBlciBhbHBoYSBvciBBU0NJSSBsb3dlciBhbHBoYS5cbiAqXG4gKiBBbiAqKkFTQ0lJIHVwcGVyIGFscGhhKiogaXMgYSBjaGFyYWN0ZXIgaW4gdGhlIGluY2x1c2l2ZSByYW5nZSBVKzAwNDEgKGBBYClcbiAqIHRvIFUrMDA1QSAoYFpgKS5cbiAqXG4gKiBBbiAqKkFTQ0lJIGxvd2VyIGFscGhhKiogaXMgYSBjaGFyYWN0ZXIgaW4gdGhlIGluY2x1c2l2ZSByYW5nZSBVKzAwNjEgKGBhYClcbiAqIHRvIFUrMDA3QSAoYHpgKS5cbiAqXG4gKiBAcGFyYW0gY29kZVxuICogICBDb2RlLlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKiAgIFdoZXRoZXIgaXQgbWF0Y2hlcy5cbiAqL1xuZXhwb3J0IGNvbnN0IGFzY2lpQWxwaGEgPSByZWdleENoZWNrKC9bQS1aYS16XS8pXG5cbi8qKlxuICogQ2hlY2sgd2hldGhlciB0aGUgY2hhcmFjdGVyIGNvZGUgcmVwcmVzZW50cyBhbiBBU0NJSSBhbHBoYW51bWVyaWMgKGBhYFxuICogdGhyb3VnaCBgemAsIGNhc2UgaW5zZW5zaXRpdmUsIG9yIGAwYCB0aHJvdWdoIGA5YCkuXG4gKlxuICogQW4gKipBU0NJSSBhbHBoYW51bWVyaWMqKiBpcyBhbiBBU0NJSSBkaWdpdCAoc2VlIGBhc2NpaURpZ2l0YCkgb3IgQVNDSUkgYWxwaGFcbiAqIChzZWUgYGFzY2lpQWxwaGFgKS5cbiAqXG4gKiBAcGFyYW0gY29kZVxuICogICBDb2RlLlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKiAgIFdoZXRoZXIgaXQgbWF0Y2hlcy5cbiAqL1xuZXhwb3J0IGNvbnN0IGFzY2lpQWxwaGFudW1lcmljID0gcmVnZXhDaGVjaygvW1xcZEEtWmEtel0vKVxuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgdGhlIGNoYXJhY3RlciBjb2RlIHJlcHJlc2VudHMgYW4gQVNDSUkgYXRleHQuXG4gKlxuICogYXRleHQgaXMgYW4gQVNDSUkgYWxwaGFudW1lcmljIChzZWUgYGFzY2lpQWxwaGFudW1lcmljYCksIG9yIGEgY2hhcmFjdGVyIGluXG4gKiB0aGUgaW5jbHVzaXZlIHJhbmdlcyBVKzAwMjMgTlVNQkVSIFNJR04gKGAjYCkgdG8gVSswMDI3IEFQT1NUUk9QSEUgKGAnYCksXG4gKiBVKzAwMkEgQVNURVJJU0sgKGAqYCksIFUrMDAyQiBQTFVTIFNJR04gKGArYCksIFUrMDAyRCBEQVNIIChgLWApLCBVKzAwMkZcbiAqIFNMQVNIIChgL2ApLCBVKzAwM0QgRVFVQUxTIFRPIChgPWApLCBVKzAwM0YgUVVFU1RJT04gTUFSSyAoYD9gKSwgVSswMDVFXG4gKiBDQVJFVCAoYF5gKSB0byBVKzAwNjAgR1JBVkUgQUNDRU5UIChgYCBgIGBgKSwgb3IgVSswMDdCIExFRlQgQ1VSTFkgQlJBQ0VcbiAqIChge2ApIHRvIFUrMDA3RSBUSUxERSAoYH5gKS5cbiAqXG4gKiBTZWU6XG4gKiAqKlxcW1JGQzUzMjJdKio6XG4gKiBbSW50ZXJuZXQgTWVzc2FnZSBGb3JtYXRdKGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM1MzIyKS5cbiAqIFAuIFJlc25pY2suXG4gKiBJRVRGLlxuICpcbiAqIEBwYXJhbSBjb2RlXG4gKiAgIENvZGUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqICAgV2hldGhlciBpdCBtYXRjaGVzLlxuICovXG5leHBvcnQgY29uc3QgYXNjaWlBdGV4dCA9IHJlZ2V4Q2hlY2soL1sjLScqK1xcLS05PT9BLVpeLX5dLylcblxuLyoqXG4gKiBDaGVjayB3aGV0aGVyIGEgY2hhcmFjdGVyIGNvZGUgaXMgYW4gQVNDSUkgY29udHJvbCBjaGFyYWN0ZXIuXG4gKlxuICogQW4gKipBU0NJSSBjb250cm9sKiogaXMgYSBjaGFyYWN0ZXIgaW4gdGhlIGluY2x1c2l2ZSByYW5nZSBVKzAwMDAgTlVMTCAoTlVMKVxuICogdG8gVSswMDFGIChVUyksIG9yIFUrMDA3RiAoREVMKS5cbiAqXG4gKiBAcGFyYW0ge0NvZGV9IGNvZGVcbiAqICAgQ29kZS5cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICogICBXaGV0aGVyIGl0IG1hdGNoZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc2NpaUNvbnRyb2woY29kZSkge1xuICByZXR1cm4gKFxuICAgIC8vIFNwZWNpYWwgd2hpdGVzcGFjZSBjb2RlcyAod2hpY2ggaGF2ZSBuZWdhdGl2ZSB2YWx1ZXMpLCBDMCBhbmQgQ29udHJvbFxuICAgIC8vIGNoYXJhY3RlciBERUxcbiAgICBjb2RlICE9PSBudWxsICYmIChjb2RlIDwgY29kZXMuc3BhY2UgfHwgY29kZSA9PT0gY29kZXMuZGVsKVxuICApXG59XG5cbi8qKlxuICogQ2hlY2sgd2hldGhlciB0aGUgY2hhcmFjdGVyIGNvZGUgcmVwcmVzZW50cyBhbiBBU0NJSSBkaWdpdCAoYDBgIHRocm91Z2ggYDlgKS5cbiAqXG4gKiBBbiAqKkFTQ0lJIGRpZ2l0KiogaXMgYSBjaGFyYWN0ZXIgaW4gdGhlIGluY2x1c2l2ZSByYW5nZSBVKzAwMzAgKGAwYCkgdG9cbiAqIFUrMDAzOSAoYDlgKS5cbiAqXG4gKiBAcGFyYW0gY29kZVxuICogICBDb2RlLlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKiAgIFdoZXRoZXIgaXQgbWF0Y2hlcy5cbiAqL1xuZXhwb3J0IGNvbnN0IGFzY2lpRGlnaXQgPSByZWdleENoZWNrKC9cXGQvKVxuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgdGhlIGNoYXJhY3RlciBjb2RlIHJlcHJlc2VudHMgYW4gQVNDSUkgaGV4IGRpZ2l0IChgYWAgdGhyb3VnaFxuICogYGZgLCBjYXNlIGluc2Vuc2l0aXZlLCBvciBgMGAgdGhyb3VnaCBgOWApLlxuICpcbiAqIEFuICoqQVNDSUkgaGV4IGRpZ2l0KiogaXMgYW4gQVNDSUkgZGlnaXQgKHNlZSBgYXNjaWlEaWdpdGApLCBBU0NJSSB1cHBlciBoZXhcbiAqIGRpZ2l0LCBvciBhbiBBU0NJSSBsb3dlciBoZXggZGlnaXQuXG4gKlxuICogQW4gKipBU0NJSSB1cHBlciBoZXggZGlnaXQqKiBpcyBhIGNoYXJhY3RlciBpbiB0aGUgaW5jbHVzaXZlIHJhbmdlIFUrMDA0MVxuICogKGBBYCkgdG8gVSswMDQ2IChgRmApLlxuICpcbiAqIEFuICoqQVNDSUkgbG93ZXIgaGV4IGRpZ2l0KiogaXMgYSBjaGFyYWN0ZXIgaW4gdGhlIGluY2x1c2l2ZSByYW5nZSBVKzAwNjFcbiAqIChgYWApIHRvIFUrMDA2NiAoYGZgKS5cbiAqXG4gKiBAcGFyYW0gY29kZVxuICogICBDb2RlLlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKiAgIFdoZXRoZXIgaXQgbWF0Y2hlcy5cbiAqL1xuZXhwb3J0IGNvbnN0IGFzY2lpSGV4RGlnaXQgPSByZWdleENoZWNrKC9bXFxkQS1GYS1mXS8pXG5cbi8qKlxuICogQ2hlY2sgd2hldGhlciB0aGUgY2hhcmFjdGVyIGNvZGUgcmVwcmVzZW50cyBBU0NJSSBwdW5jdHVhdGlvbi5cbiAqXG4gKiBBbiAqKkFTQ0lJIHB1bmN0dWF0aW9uKiogaXMgYSBjaGFyYWN0ZXIgaW4gdGhlIGluY2x1c2l2ZSByYW5nZXMgVSswMDIxXG4gKiBFWENMQU1BVElPTiBNQVJLIChgIWApIHRvIFUrMDAyRiBTTEFTSCAoYC9gKSwgVSswMDNBIENPTE9OIChgOmApIHRvIFUrMDA0MCBBVFxuICogU0lHTiAoYEBgKSwgVSswMDVCIExFRlQgU1FVQVJFIEJSQUNLRVQgKGBbYCkgdG8gVSswMDYwIEdSQVZFIEFDQ0VOVFxuICogKGBgIGAgYGApLCBvciBVKzAwN0IgTEVGVCBDVVJMWSBCUkFDRSAoYHtgKSB0byBVKzAwN0UgVElMREUgKGB+YCkuXG4gKlxuICogQHBhcmFtIGNvZGVcbiAqICAgQ29kZS5cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICogICBXaGV0aGVyIGl0IG1hdGNoZXMuXG4gKi9cbmV4cG9ydCBjb25zdCBhc2NpaVB1bmN0dWF0aW9uID0gcmVnZXhDaGVjaygvWyEtLzotQFstYHstfl0vKVxuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgYSBjaGFyYWN0ZXIgY29kZSBpcyBhIG1hcmtkb3duIGxpbmUgZW5kaW5nLlxuICpcbiAqIEEgKiptYXJrZG93biBsaW5lIGVuZGluZyoqIGlzIHRoZSB2aXJ0dWFsIGNoYXJhY3RlcnMgTS0wMDAzIENBUlJJQUdFIFJFVFVSTlxuICogTElORSBGRUVEIChDUkxGKSwgTS0wMDA0IExJTkUgRkVFRCAoTEYpIGFuZCBNLTAwMDUgQ0FSUklBR0UgUkVUVVJOIChDUikuXG4gKlxuICogSW4gbWljcm9tYXJrLCB0aGUgYWN0dWFsIGNoYXJhY3RlciBVKzAwMEEgTElORSBGRUVEIChMRikgYW5kIFUrMDAwRCBDQVJSSUFHRVxuICogUkVUVVJOIChDUikgYXJlIHJlcGxhY2VkIGJ5IHRoZXNlIHZpcnR1YWwgY2hhcmFjdGVycyBkZXBlbmRpbmcgb24gd2hldGhlclxuICogdGhleSBvY2N1cnJlZCB0b2dldGhlci5cbiAqXG4gKiBAcGFyYW0ge0NvZGV9IGNvZGVcbiAqICAgQ29kZS5cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICogICBXaGV0aGVyIGl0IG1hdGNoZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkge1xuICByZXR1cm4gY29kZSAhPT0gbnVsbCAmJiBjb2RlIDwgY29kZXMuaG9yaXpvbnRhbFRhYlxufVxuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgYSBjaGFyYWN0ZXIgY29kZSBpcyBhIG1hcmtkb3duIGxpbmUgZW5kaW5nIChzZWVcbiAqIGBtYXJrZG93bkxpbmVFbmRpbmdgKSBvciBtYXJrZG93biBzcGFjZSAoc2VlIGBtYXJrZG93blNwYWNlYCkuXG4gKlxuICogQHBhcmFtIHtDb2RlfSBjb2RlXG4gKiAgIENvZGUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqICAgV2hldGhlciBpdCBtYXRjaGVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFya2Rvd25MaW5lRW5kaW5nT3JTcGFjZShjb2RlKSB7XG4gIHJldHVybiBjb2RlICE9PSBudWxsICYmIChjb2RlIDwgY29kZXMubnVsIHx8IGNvZGUgPT09IGNvZGVzLnNwYWNlKVxufVxuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgYSBjaGFyYWN0ZXIgY29kZSBpcyBhIG1hcmtkb3duIHNwYWNlLlxuICpcbiAqIEEgKiptYXJrZG93biBzcGFjZSoqIGlzIHRoZSBjb25jcmV0ZSBjaGFyYWN0ZXIgVSswMDIwIFNQQUNFIChTUCkgYW5kIHRoZVxuICogdmlydHVhbCBjaGFyYWN0ZXJzIE0tMDAwMSBWSVJUVUFMIFNQQUNFIChWUykgYW5kIE0tMDAwMiBIT1JJWk9OVEFMIFRBQiAoSFQpLlxuICpcbiAqIEluIG1pY3JvbWFyaywgdGhlIGFjdHVhbCBjaGFyYWN0ZXIgVSswMDA5IENIQVJBQ1RFUiBUQUJVTEFUSU9OIChIVCkgaXNcbiAqIHJlcGxhY2VkIGJ5IG9uZSBNLTAwMDIgSE9SSVpPTlRBTCBUQUIgKEhUKSBhbmQgYmV0d2VlbiAwIGFuZCAzIE0tMDAwMSBWSVJUVUFMXG4gKiBTUEFDRSAoVlMpIGNoYXJhY3RlcnMsIGRlcGVuZGluZyBvbiB0aGUgY29sdW1uIGF0IHdoaWNoIHRoZSB0YWIgb2NjdXJyZWQuXG4gKlxuICogQHBhcmFtIHtDb2RlfSBjb2RlXG4gKiAgIENvZGUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqICAgV2hldGhlciBpdCBtYXRjaGVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFya2Rvd25TcGFjZShjb2RlKSB7XG4gIHJldHVybiAoXG4gICAgY29kZSA9PT0gY29kZXMuaG9yaXpvbnRhbFRhYiB8fFxuICAgIGNvZGUgPT09IGNvZGVzLnZpcnR1YWxTcGFjZSB8fFxuICAgIGNvZGUgPT09IGNvZGVzLnNwYWNlXG4gIClcbn1cblxuLy8gU2l6ZSBub3RlOiByZW1vdmluZyBBU0NJSSBmcm9tIHRoZSByZWdleCBhbmQgdXNpbmcgYGFzY2lpUHVuY3R1YXRpb25gIGhlcmVcbi8vIEluIGZhY3QgYWRkcyB0byB0aGUgYnVuZGxlIHNpemUuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgdGhlIGNoYXJhY3RlciBjb2RlIHJlcHJlc2VudHMgVW5pY29kZSBwdW5jdHVhdGlvbi5cbiAqXG4gKiBBICoqVW5pY29kZSBwdW5jdHVhdGlvbioqIGlzIGEgY2hhcmFjdGVyIGluIHRoZSBVbmljb2RlIGBQY2AgKFB1bmN0dWF0aW9uLFxuICogQ29ubmVjdG9yKSwgYFBkYCAoUHVuY3R1YXRpb24sIERhc2gpLCBgUGVgIChQdW5jdHVhdGlvbiwgQ2xvc2UpLCBgUGZgXG4gKiAoUHVuY3R1YXRpb24sIEZpbmFsIHF1b3RlKSwgYFBpYCAoUHVuY3R1YXRpb24sIEluaXRpYWwgcXVvdGUpLCBgUG9gXG4gKiAoUHVuY3R1YXRpb24sIE90aGVyKSwgb3IgYFBzYCAoUHVuY3R1YXRpb24sIE9wZW4pIGNhdGVnb3JpZXMsIG9yIGFuIEFTQ0lJXG4gKiBwdW5jdHVhdGlvbiAoc2VlIGBhc2NpaVB1bmN0dWF0aW9uYCkuXG4gKlxuICogU2VlOlxuICogKipcXFtVTklDT0RFXSoqOlxuICogW1RoZSBVbmljb2RlIFN0YW5kYXJkXShodHRwczovL3d3dy51bmljb2RlLm9yZy92ZXJzaW9ucy8pLlxuICogVW5pY29kZSBDb25zb3J0aXVtLlxuICpcbiAqIEBwYXJhbSBjb2RlXG4gKiAgIENvZGUuXG4gKiBAcmV0dXJuc1xuICogICBXaGV0aGVyIGl0IG1hdGNoZXMuXG4gKi9cbmV4cG9ydCBjb25zdCB1bmljb2RlUHVuY3R1YXRpb24gPSByZWdleENoZWNrKC9cXHB7UH18XFxwe1N9L3UpXG5cbi8qKlxuICogQ2hlY2sgd2hldGhlciB0aGUgY2hhcmFjdGVyIGNvZGUgcmVwcmVzZW50cyBVbmljb2RlIHdoaXRlc3BhY2UuXG4gKlxuICogTm90ZSB0aGF0IHRoaXMgZG9lcyBoYW5kbGUgbWljcm9tYXJrIHNwZWNpZmljIG1hcmtkb3duIHdoaXRlc3BhY2UgY2hhcmFjdGVycy5cbiAqIFNlZSBgbWFya2Rvd25MaW5lRW5kaW5nT3JTcGFjZWAgdG8gY2hlY2sgdGhhdC5cbiAqXG4gKiBBICoqVW5pY29kZSB3aGl0ZXNwYWNlKiogaXMgYSBjaGFyYWN0ZXIgaW4gdGhlIFVuaWNvZGUgYFpzYCAoU2VwYXJhdG9yLFxuICogU3BhY2UpIGNhdGVnb3J5LCBvciBVKzAwMDkgQ0hBUkFDVEVSIFRBQlVMQVRJT04gKEhUKSwgVSswMDBBIExJTkUgRkVFRCAoTEYpLFxuICogVSswMDBDIChGRiksIG9yIFUrMDAwRCBDQVJSSUFHRSBSRVRVUk4gKENSKSAoKipcXFtVTklDT0RFXSoqKS5cbiAqXG4gKiBTZWU6XG4gKiAqKlxcW1VOSUNPREVdKio6XG4gKiBbVGhlIFVuaWNvZGUgU3RhbmRhcmRdKGh0dHBzOi8vd3d3LnVuaWNvZGUub3JnL3ZlcnNpb25zLykuXG4gKiBVbmljb2RlIENvbnNvcnRpdW0uXG4gKlxuICogQHBhcmFtIGNvZGVcbiAqICAgQ29kZS5cbiAqIEByZXR1cm5zXG4gKiAgIFdoZXRoZXIgaXQgbWF0Y2hlcy5cbiAqL1xuZXhwb3J0IGNvbnN0IHVuaWNvZGVXaGl0ZXNwYWNlID0gcmVnZXhDaGVjaygvXFxzLylcblxuLyoqXG4gKiBDcmVhdGUgYSBjb2RlIGNoZWNrIGZyb20gYSByZWdleC5cbiAqXG4gKiBAcGFyYW0ge1JlZ0V4cH0gcmVnZXhcbiAqICAgRXhwcmVzc2lvbi5cbiAqIEByZXR1cm5zIHsoY29kZTogQ29kZSkgPT4gYm9vbGVhbn1cbiAqICAgQ2hlY2suXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4Q2hlY2socmVnZXgpIHtcbiAgcmV0dXJuIGNoZWNrXG5cbiAgLyoqXG4gICAqIENoZWNrIHdoZXRoZXIgYSBjb2RlIG1hdGNoZXMgdGhlIGJvdW5kIHJlZ2V4LlxuICAgKlxuICAgKiBAcGFyYW0ge0NvZGV9IGNvZGVcbiAgICogICBDaGFyYWN0ZXIgY29kZS5cbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqICAgV2hldGhlciB0aGUgY2hhcmFjdGVyIGNvZGUgbWF0Y2hlcyB0aGUgYm91bmQgcmVnZXguXG4gICAqL1xuICBmdW5jdGlvbiBjaGVjayhjb2RlKSB7XG4gICAgcmV0dXJuIGNvZGUgIT09IG51bGwgJiYgY29kZSA+IC0xICYmIHJlZ2V4LnRlc3QoU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlKSlcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/micromark-util-character/dev/index.js\n");

/***/ })

};
;