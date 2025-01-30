# React Study Design System

React Study Design System.

## Installation

You can install React Study Design System via npm:

```jsx
npm install react-study-desygn-system
```

## Run locally

We are using Storybook in order to develop the components independently from any consumer.
In order to see the components and their documentation run the Storybook on your machine:

```
npm storybook
```

Storybook will be available at http://localhost:6006.

## Usage

To use components from design system in your React application, follow these steps:

Import component from design system in your component:

```jsx
import { Button } from "react-study-desygn-system";
```

Insert the component into your layout:

```jsx
<Button data-testid="button" theme="clear-inverted">
  Button
</Button>
```

## Example

Here's a basic example of how to use components from design-system:

```jsx
import React from "react";
import { Button } from "react-study-desygn-system";

const App = () => {
  return (
    <div className="button">
      <Button data-testid="button" theme="clear-inverted">
        Button
      </Button>
    </div>
  );
};

export default App;
```

## License

This is study project .
