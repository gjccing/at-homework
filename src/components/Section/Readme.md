Basic:

```jsx
<Section title="授課時間">
  Section Content
</Section>
```

<!-- Big pink section:

```jsx
<Section size="large" color="deeppink">
  Click Me
</Section>
```

And you _can_ **use** `any` [Markdown](http://daringfireball.net/projects/markdown/) here.

Fenced code blocks with `js`, `jsx` or `javascript` languages are rendered as a interactive playgrounds:

```jsx
<Section>Push Me</Section>
```

Add padding between examples in a block by passing a `padded` modifier (` ```jsx padded `):

```jsx padded
<Section>Push Me</Section>
<Section>Click Me</Section>
<Section>Tap Me</Section>
```

You can add a custom props to an example wrapper (` ```js { "props": { "className": "checks" } } `):

```js { "props": { "className": "checks" } }
<Section>I’m transparent!</Section>
```

Or disable an editor by passing a `noeditor` modifier (` ```js noeditor `):

```jsx noeditor
<Section>Push Me</Section>
```

To render an example as highlighted source code add a `static` modifier: (` ```js static `):

```js static
import React from 'react'
```

Fenced blocks with other languages are rendered as highlighted code:

```html
<h1>Hello world</h1>
```

Current component (like `Section` in this example) is always accessible by its name in the example code. If you want to use other components, you need to explicitly import them:

```jsx
import Placeholder from '../Placeholder'
;<Section>
  <Placeholder />
</Section>
```

Or you can explicitly import everything, to make examples easier to copy into your app code:

```jsx
import React from 'react'
import Section from 'rsg-example/components/Section'
import Placeholder from 'rsg-example/components/Placeholder'
;<Section>
  <Placeholder />
</Section>
```

_Note: `rsg-example` module is an alias defined by the [moduleAliases](https://react-styleguidist.js.org/docs/configuration.html#modulealiases) config option._

Each example's state can be accessed by React hook `useState`:

```jsx
const [isOpen, setisOpen] = React.useState(false)
;<div>
  <Section
    size="small"
    onClick={() => setisOpen(true)}
    disabled={state.isOpen}
  >
    Show Me
  </Section>
  {isOpen && (
    <Section size="small" onClick={() => setisOpen(false)}>
      Hide Me
    </Section>
  )}
</div>
```

You can change the default state:

```jsx
const [count, setCount] = React.useState(42)
;<Section onClick={() => setCount(count + 1)}>{count}</Section>
``` -->
