// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@esm/index.mjs";import{factory as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-mt19937@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/array-to-json@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";import{isPrimitive as h}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import{isPrimitive as j}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nan@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-cosine-quantile@esm/index.mjs";function g(e,t){return!h(e)||u(e)?new TypeError(a("invalid argument. First argument must be a number and not NaN. Value: `%s`.",e)):j(t)?null:new TypeError(a("0Oy7T",t))}function c(e,t,s){return f(e(),t,s)}function b(){var h,j,u,f,b,v;if(0===arguments.length)j=m();else if(1===arguments.length){if(!n(h=arguments[0]))throw new TypeError(a("0Oy2h",h));if(i(h,"prng")){if(!r(h.prng))throw new TypeError(a("0Oy7M","prng",h.prng));j=h.prng}else j=m(h)}else{if(f=g(b=arguments[0],v=arguments[1]))throw f;if(arguments.length>2){if(!n(h=arguments[2]))throw new TypeError(a("0Oy2h",h));if(i(h,"prng")){if(!r(h.prng))throw new TypeError(a("0Oy7M","prng",h.prng));j=h.prng}else j=m(h)}else j=m()}return e(u=void 0===b?M:T,"NAME","cosine"),h&&h.prng?(e(u,"seed",null),e(u,"seedLength",null),s(u,"state",o(null),d),e(u,"stateLength",null),e(u,"byteLength",null),e(u,"toJSON",o(null)),e(u,"PRNG",j)):(t(u,"seed",y),t(u,"seedLength",x),s(u,"state",L,E),t(u,"stateLength",w),t(u,"byteLength",N),e(u,"toJSON",O),e(u,"PRNG",j),j=j.normalized),u;function y(){return j.seed}function x(){return j.seedLength}function w(){return j.stateLength}function N(){return j.byteLength}function L(){return j.state}function E(e){j.state=e}function O(){var e={type:"PRNG"};return e.name=u.NAME,e.state=p(j.state),e.params=void 0===b?[]:[b,v],e}function T(){return c(j,b,v)}function M(e,t){return l(e)||l(t)||t<=0?NaN:c(j,e,t)}}var v=b();e(v,"factory",b);export{v as default,b as factory};
//# sourceMappingURL=index.mjs.map
