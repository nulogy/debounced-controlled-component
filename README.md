# Debounced Controlled Component

A state container to debounce a controlled component.

```javascript
<DebounceControlledComponent
  time={300}
  value={initialValue}
  onChange={e => e.target.value}
>{ (value, debouncedOnChange) =>
  <TextField
    value={value}
    onChange={debouncedOnChange}
  />
}</DebounceControlledComponent>
```

Thanks to  https://medium.com/@justintulk/debouncing-reacts-controlled-textareas-w-redux-lodash-4383084ca090

_May the 4th be with you!_
