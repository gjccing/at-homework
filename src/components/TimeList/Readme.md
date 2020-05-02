Basic:

```jsx
<TimeList
  availableTimes={Array.from(Array(10).keys()).map(i => i * 3600000)}
  bookedTimes={Array.from(Array(5).keys()).map(i => i * 2 * 3600000)}
/>
```

It is formatted through moment.js, so you can change the format according to [moment.js document](https://momentjs.com/docs/#/displaying/format/).

```jsx
<TimeList
  format="HH:mm:ss"
  availableTimes={Array.from(Array(10).keys()).map(i => i * 1805000)}
  bookedTimes={Array.from(Array(5).keys()).map(i => i * 2 * 1805000)}
/>
```