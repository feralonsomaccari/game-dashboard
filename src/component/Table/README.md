# Table Component

headers, children, sortHandler, extraProps

## Properties

| Property        | Type        | Default    | Description                                                            |
| :-------------- | ----------- | :--------- | :--------------------------------------------------------------------- |
| **headers**     | `{}`        | `{}`       | Object containing the headers of the table.                            |
| **sortHandler** | `function`  | `required` | Function that will be call on clicking on the headers.                 |
| **extraProps**  | `object`    | `() => {}` | Extra props that could be added to the component like e.g. aria-label. |
| **children**    | `ReactNode` | `{}`       | Will render a custom content into the component.                       |
