# Thai Messages for React-Admin

Thai messages for [react-admin](https://github.com/marmelab/react-admin), the frontend framework for building admin applications on top of REST/GraphQL services.

![react-admin demo](http://static.marmelab.com/react-admin.gif)

## Installation

```sh
npm install --save ra-language-thai
```

## Usage

```js
import thaiMessages from "ra-language-thai";

const messages = {
  th: thaiMessages
};

<Admin locale="th" messages={messages}>
  ...
</Admin>;
```
