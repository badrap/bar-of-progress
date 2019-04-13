# bar-of-progress [![CircleCI](https://circleci.com/gh/badrap/bar-of-progress.svg?style=shield)](https://circleci.com/gh/badrap/bar-of-progress) [![npm](https://img.shields.io/npm/v/@badrap/bar-of-progress.svg)](https://www.npmjs.com/package/@badrap/bar-of-progress)

## Installation

```sh
$ yarn add @badrap/bar-of-progress
```

## Usage

```js
import ProgressBar from "@badrap/bar-of-progress";

const progress = new ProgressBar();

progress.start();

setTimeout(() => progress.finish(), 1000);
```

## License

This library is licensed under the MIT license. See [LICENSE](./LICENSE).
