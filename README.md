<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Raised Cosine Random Numbers

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Raised cosine][cosine] distributed pseudorandom numbers.



<section class="usage">

## Usage

To use in Observable,

```javascript
cosine = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-cosine@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var cosine = require( 'path/to/vendor/umd/random-base-cosine/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-cosine@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.cosine;
})();
</script>
```

#### cosine( mu, s )

Returns a pseudorandom number drawn from a [raised cosine][cosine] distribution with parameters `mu` (mean) and `s` (scale parameter).

```javascript
var r = cosine( 2.0, 5.0 );
// returns <number>
```

If `mu` or `s` is `NaN` or `s <= 0`, the function returns `NaN`.

```javascript
var r = cosine( 2.0, -2.0 );
// returns NaN

r = cosine( NaN, 5.0 );
// returns NaN

r = cosine( 2.0, NaN );
// returns NaN
```

#### cosine.factory( \[mu, s, ]\[options] )

Returns a pseudorandom number generator (PRNG) for generating pseudorandom numbers drawn from a [raised cosine][cosine] distribution.

```javascript
var rand = cosine.factory();

var r = rand( 0.1, 1.5 );
// returns <number>
```

If provided `mu` and `s`, the returned generator returns random variates from the specified distribution.

```javascript
var rand = cosine.factory( 10.0, 2.0 );

var r = rand();
// returns <number>

r = rand();
// returns <number>
```

If not provided `mu` and `s`, the returned generator requires that both parameters be provided at each invocation.

```javascript
var rand = cosine.factory();

var r = rand( 0.0, 1.0 );
// returns <number>

r = rand( -2.0, 2.0 );
// returns <number>
```

The function accepts the following `options`:

-   **prng**: pseudorandom number generator for generating uniformly distributed pseudorandom numbers on the interval `[0,1)`. If provided, the function **ignores** both the `state` and `seed` options. In order to seed the returned pseudorandom number generator, one must seed the provided `prng` (assuming the provided `prng` is seedable).
-   **seed**: pseudorandom number generator seed.
-   **state**: a [`Uint32Array`][@stdlib/array/uint32] containing pseudorandom number generator state. If provided, the function ignores the `seed` option.
-   **copy**: `boolean` indicating whether to copy a provided pseudorandom number generator state. Setting this option to `false` allows sharing state between two or more pseudorandom number generators. Setting this option to `true` ensures that a returned generator has exclusive control over its internal state. Default: `true`.

To use a custom PRNG as the underlying source of uniformly distributed pseudorandom numbers, set the `prng` option.

```javascript
var minstd = require( '@stdlib/random-base-minstd' );

var rand = cosine.factory({
    'prng': minstd.normalized
});

var r = rand( 1.0, 2.0 );
// returns <number>
```

To seed a pseudorandom number generator, set the `seed` option.

```javascript
var rand1 = cosine.factory({
    'seed': 12345
});

var r1 = rand1( 1.0, 2.0 );
// returns <number>

var rand2 = cosine.factory( 1.0, 2.0, {
    'seed': 12345
});

var r2 = rand2();
// returns <number>

var bool = ( r1 === r2 );
// returns true
```

To return a generator having a specific initial state, set the generator `state` option.

```javascript
var rand;
var bool;
var r;
var i;

// Generate pseudorandom numbers, thus progressing the generator state:
for ( i = 0; i < 1000; i++ ) {
    r = cosine( 1.0, 2.0 );
}

// Create a new PRNG initialized to the current state of `cosine`:
rand = cosine.factory({
    'state': cosine.state
});

// Test that the generated pseudorandom numbers are the same:
bool = ( rand( 1.0, 2.0 ) === cosine( 1.0, 2.0 ) );
// returns true
```

#### cosine.NAME

The generator name.

```javascript
var str = cosine.NAME;
// returns 'cosine'
```

#### cosine.PRNG

The underlying pseudorandom number generator.

```javascript
var prng = cosine.PRNG;
// returns <Function>
```

#### cosine.seed

The value used to seed `cosine()`.

```javascript
var rand;
var r;
var i;

// Generate pseudorandom values...
for ( i = 0; i < 100; i++ ) {
    r = cosine( 2.0, 2.0 );
}

// Generate the same pseudorandom values...
rand = cosine.factory( 2.0, 2.0, {
    'seed': cosine.seed
});
for ( i = 0; i < 100; i++ ) {
    r = rand();
}
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = cosine.factory({
    'prng': Math.random
});

var seed = rand.seed;
// returns null
```

#### cosine.seedLength

Length of generator seed.

```javascript
var len = cosine.seedLength;
// returns <number>
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = cosine.factory({
    'prng': Math.random
});

var len = rand.seedLength;
// returns null
```

#### cosine.state

Writable property for getting and setting the generator state.

```javascript
var r = cosine( 2.0, 5.0 );
// returns <number>

r = cosine( 2.0, 5.0 );
// returns <number>

// ...

// Get a copy of the current state:
var state = cosine.state;
// returns <Uint32Array>

r = cosine( 2.0, 5.0 );
// returns <number>

r = cosine( 2.0, 5.0 );
// returns <number>

// Reset the state:
cosine.state = state;

// Replay the last two pseudorandom numbers:
r = cosine( 2.0, 5.0 );
// returns <number>

r = cosine( 2.0, 5.0 );
// returns <number>

// ...
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = cosine.factory({
    'prng': Math.random
});

var state = rand.state;
// returns null
```

#### cosine.stateLength

Length of generator state.

```javascript
var len = cosine.stateLength;
// returns <number>
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = cosine.factory({
    'prng': Math.random
});

var len = rand.stateLength;
// returns null
```

#### cosine.byteLength

Size (in bytes) of generator state.

```javascript
var sz = cosine.byteLength;
// returns <number>
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = cosine.factory({
    'prng': Math.random
});

var sz = rand.byteLength;
// returns null
```

#### cosine.toJSON()

Serializes the pseudorandom number generator as a JSON object.

```javascript
var o = cosine.toJSON();
// returns { 'type': 'PRNG', 'name': '...', 'state': {...}, 'params': [] }
```

If provided a PRNG for uniformly distributed numbers, this method returns `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = cosine.factory({
    'prng': Math.random
});

var o = rand.toJSON();
// returns null
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If PRNG state is "shared" (meaning a state array was provided during PRNG creation and **not** copied) and one sets the generator state to a state array having a different length, the PRNG does **not** update the existing shared state and, instead, points to the newly provided state array. In order to synchronize PRNG output according to the new shared state array, the state array for **each** relevant PRNG must be **explicitly** set.
-   If PRNG state is "shared" and one sets the generator state to a state array of the same length, the PRNG state is updated (along with the state of all other PRNGs sharing the PRNG's state array).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-cosine@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var seed;
var rand;
var i;

// Generate pseudorandom numbers...
for ( i = 0; i < 100; i++ ) {
    console.log( cosine( 0.0, 1.0 ) );
}

// Create a new pseudorandom number generator...
seed = 1234;
rand = cosine.factory( 5.0, 2.0, {
    'seed': seed
});
for ( i = 0; i < 100; i++ ) {
    console.log( rand() );
}

// Create another pseudorandom number generator using a previous seed...
rand = cosine.factory( 0.0, 1.0, {
    'seed': cosine.seed
});
for ( i = 0; i < 100; i++ ) {
    console.log( rand() );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/random-array/cosine`][@stdlib/random/array/cosine]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a raised cosine distribution.</span>
-   <span class="package-name">[`@stdlib/random-iter/cosine`][@stdlib/random/iter/cosine]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a raised cosine distribution.</span>
-   <span class="package-name">[`@stdlib/random-streams/cosine`][@stdlib/random/streams/cosine]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a raised cosine distribution.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/random-base-cosine.svg
[npm-url]: https://npmjs.org/package/@stdlib/random-base-cosine

[test-image]: https://github.com/stdlib-js/random-base-cosine/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/random-base-cosine/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/random-base-cosine/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/random-base-cosine?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/random-base-cosine.svg
[dependencies-url]: https://david-dm.org/stdlib-js/random-base-cosine/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/random-base-cosine/tree/deno
[deno-readme]: https://github.com/stdlib-js/random-base-cosine/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/random-base-cosine/tree/umd
[umd-readme]: https://github.com/stdlib-js/random-base-cosine/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/random-base-cosine/tree/esm
[esm-readme]: https://github.com/stdlib-js/random-base-cosine/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/random-base-cosine/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/random-base-cosine/main/LICENSE

[cosine]: https://en.wikipedia.org/wiki/Raised_cosine_distribution

[@stdlib/array/uint32]: https://github.com/stdlib-js/array-uint32/tree/umd

<!-- <related-links> -->

[@stdlib/random/array/cosine]: https://github.com/stdlib-js/random-array-cosine/tree/umd

[@stdlib/random/iter/cosine]: https://github.com/stdlib-js/random-iter-cosine/tree/umd

[@stdlib/random/streams/cosine]: https://github.com/stdlib-js/random-streams-cosine/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
