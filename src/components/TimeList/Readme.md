Basic:

```jsx
import moment from 'moment'

;<TimeList
  available={Array.from(Array(5).keys()).map(i => ({
    start: moment().startOf('day').add(i * 4, 'hour').toISOString(),
    end: moment().startOf('day').add(i * 4 + 1, 'hour').toISOString()
  }))}
  booked={Array.from(Array(5).keys()).map(i => ({
    start: moment().startOf('day').add(i * 4 + 2, 'hour').toISOString(),
    end: moment().startOf('day').add(i * 4 + 3, 'hour').toISOString()
  }))}
/>
```

It is formatted through moment.js, so you can change the format according to [moment.js document](https://momentjs.com/docs/#/displaying/format/).

```jsx
import moment from 'moment'

;<TimeList
  format="HH:mm:ss"
  available={Array.from(Array(5).keys()).map(i => ({
    start: moment().startOf('day').add(i * 4, 'hour').toISOString(),
    end: moment().startOf('day').add(i * 4 + 1, 'hour').toISOString()
  }))}
  booked={Array.from(Array(5).keys()).map(i => ({
    start: moment().startOf('day').add(i * 4 + 2, 'hour').toISOString(),
    end: moment().startOf('day').add(i * 4 + 3, 'hour').toISOString()
  }))}
/>
```