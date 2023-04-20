# Table Container Component

This component contains a table and provides utils functions like Filtering and the Pagination

title, data, headers = {}, addElementHandler, tableHeight, setTableHeight, deleteHandler, updateHandler, loading, type

## Properties

| Property              | Type       | Default    | Description                                                                                               |
| :-------------------- | ---------- | :--------- | :-------------------------------------------------------------------------------------------------------- |
| **title**             | `text`     | `""`       | Title of the Table.                                                                                       |
| **data**              | `array`    | `[]`       | Data that will be displayed on the Table.                                                                 |
| **headers**           | `object`   | `{}`       | Headers of the Table.                                                                                     |
| **tableHeight**       | `number`   | `0`        | fixed height of the Table, This value is used to proved a fixed and stable height when using pagination . |
| **setTableHeight**    | `function` | `() => {}` | Sets the tableHeight state.                                                                               |
| **addElementHandler** | `function` | `() => {}` | Function that will be call when pressing on Add Item button.                                              |
| **deleteHandler**     | `function` | `() => {}` | Function that will be call when pressing on Delete Item button.                                           |
| **updateHandler**     | `function` | `() => {}` | Function that will be call when pressing on Update Item button.                                           |
| **loading**           | `boolean`  | `false`    | Boolean that indicates if the data is still loading. Will render a spinner if its false                   |
