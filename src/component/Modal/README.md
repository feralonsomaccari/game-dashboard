# Modal Component

This is the Modal component. Will render a Modal with a dark overlay

## Properties

| Property     | Type        | Default    | Description                                       |
| :----------- | ----------- | :--------- | :------------------------------------------------ |
| **title**    | `text`      | `""`       | Title text of the Modal.                          |
| **isOpen**   | `boolean`   | `required` | Flag that indicates if the Modal should be shown. |
| **onClose**  | `function`  | `() => {}` | Handler for onClose action.                       |
| **children** | `ReactNode` | `{}`       | Will render a custom content into the Modal.      |
