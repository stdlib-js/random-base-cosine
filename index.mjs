// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.2-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.2-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.2.2-esm/index.mjs";import{factory as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-mt19937@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.2-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/array-to-json@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";import{isPrimitive as h}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import{isPrimitive as j}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nan@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-cosine-quantile@esm/index.mjs";function c(e,t,s){return u(e(),t,s)}function g(){var u,g,v,b,x,y;if(0===arguments.length)g=m();else if(1===arguments.length){if(!n(u=arguments[0]))throw new TypeError(a("0o92V",u));if(i(u,"prng")){if(!r(u.prng))throw new TypeError(a("0o96u","prng",u.prng));g=u.prng}else g=m(u)}else{if(b=function(e,t){return!h(e)||f(e)?new TypeError(a("0o96v",e)):j(t)?null:new TypeError(a("0o972",t))}(x=arguments[0],y=arguments[1]))throw b;if(arguments.length>2){if(!n(u=arguments[2]))throw new TypeError(a("0o92V",u));if(i(u,"prng")){if(!r(u.prng))throw new TypeError(a("0o96u","prng",u.prng));g=u.prng}else g=m(u)}else g=m()}return e(v=void 0===x?function(e,t){if(l(e)||l(t)||t<=0)return NaN;return c(g,e,t)}:function(){return c(g,x,y)},"NAME","cosine"),u&&u.prng?(e(v,"seed",null),e(v,"seedLength",null),s(v,"state",o(null),d),e(v,"stateLength",null),e(v,"byteLength",null),e(v,"toJSON",o(null)),e(v,"PRNG",g)):(t(v,"seed",(function(){return g.seed})),t(v,"seedLength",(function(){return g.seedLength})),s(v,"state",(function(){return g.state}),(function(e){g.state=e})),t(v,"stateLength",(function(){return g.stateLength})),t(v,"byteLength",(function(){return g.byteLength})),e(v,"toJSON",(function(){var e={type:"PRNG"};e.name=v.NAME,e.state=p(g.state),e.params=void 0===x?[]:[x,y];return e})),e(v,"PRNG",g),g=g.normalized),v}var v=g();e(v,"factory",g);export{v as default,g as factory};
//# sourceMappingURL=index.mjs.map
