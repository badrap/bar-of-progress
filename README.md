# bar-of-progress [![tests](https://github.com/badrap/result/workflows/tests/badge.svg)](https://github.com/badrap/result/actions?query=workflow%3Atests) [![npm](https://img.shields.io/npm/v/@badrap/bar-of-progress.svg)](https://www.npmjs.com/package/@badrap/bar-of-progress)

A small, easy & zero-dependency progress bar component.

![](https://user-images.githubusercontent.com/19776768/56576324-b40f1100-65d0-11e9-8332-37411ed01bd8.gif)

## Features

- **Zero dependencies**: Also not tied to any framework in particular.
- **Small size**: < 500 bytes with Brotli (< 600 bytes gzipped).
- **Easy to use**: Just a couple of lines and off you go. And TypeScript types are now available as well!

## Installation

```sh
$ npm i @badrap/bar-of-progress
```

## Usage

Import the package and create a progress bar instance:

```js
import ProgressBar from "@badrap/bar-of-progress";

const progress = new ProgressBar();
```

Show the progress bar and begin animating it by calling the `.start()` method:

```js
progress.start();
```

End the progress bar animation by calling the `.finish()` method:

```js
setTimeout(() => {
  progress.finish();
}, 1000);
```

You can reuse a `progress` instance multiple times - every time `.start()` gets called the progress bar starts animation from scratch.

## Customization

The progress bar's appearance and behavior can be (slightly) customized with constructor parameters. Here are the different options and their default values:

```js
const progress = new ProgressBar({
  // The size (height) of the progress bar.
  // Numeric values get converted to px.
  size: 2,

  // Color of the progress bar.
  // Also used for the glow around the bar.
  color: "#29e",

  // Class name used for the progress bar element.
  className: "bar-of-progress",

  // How many milliseconds to wait before the progress bar
  // animation starts after calling .start().
  delay: 80,
});
```

## License

This library is licensed under the MIT license. See [LICENSE](./LICENSE).
