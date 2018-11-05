#React Native Scrollview Indicator

Extends the native ScrollView from React Native with a custom scrollindicator. That indicator stays visible als long it is activated.

## Intention

The native ScrollView does not indicate that there is more content accessable by scrolling the element. Reason is the disapearing indicator by the native element after scrollig. And it is not even visible after rednering the page. So for those who want to show an indicator permanant they can use this package.

## Installation

```bash
npm install react-native-scrollview-indicator --save
```

## Usage

```jsx
import { ScrollViewIndicator } from "react-native-scrollview-indicator";

<ScrollViewIndicator
    contentData={this.dataArray}
    customIndicator={true}
    customIndicatorWidth={5}
    customIndicatorColor={'red'}
/>
```

## Properties

Any [`ScrollView` property](http://facebook.github.io/react-native/docs/scrollview.html) and the following:

| Prop | Description | Default |
|---|---|---|
|**`contentData`**|The content for the ScrollView. Same like before, Array of Views.. |*None*|
|**`customIndicator`**|If true, the custom indicator is visible |false|
|**`customIndicatorWidth`**|The width of the indicator. |3|
|**`customIndicatorColor`**|The color of the indicator |'grey|

## Hints

- At this moment the custom indicator is just for vertical scrolling. In coming updates it will be available for horizontal scrolling as well.

- The height is determinant automatically by the size of the content and the size of the ScrollView. So no need to think about that.


## License

MIT.
