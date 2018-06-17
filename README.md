React Hashtag
====
Enhance your strings with _live_ components.

## Features:
* Super small **258 B**
* Custom renderer for each hashtag
* Custom 'click' handler for each hashtag
* Generic output
* Drop-in and use it. Your code will not have to adapt to anything.

## Quick example
```jsx harmony
// Your typical 'component'
const Card = () => (
    <p>
        Here goes my card contents with #static text inside
    </p>
);

// Will become
const Card = () => (
    <p>
        <ReactHashtag>
            Here goes my card contents with #static text inside
        </ReactHashtag>
    </p>
);
```


## Install
The usual flow

```bash
npm install react-hashtag --save
```

## Api
The component `ReactHashtag` is actually pretty generic. Is not something that someone can't do in half an hour. But, this one has some generic API that could make you turn.

### renderHashtag(hashtagValue, onClickHandler): Function
Returns the custom element to be renderer instead of a `<span>`. You can go wild here.

### onHashtagClick(hashtagValue, event): Function
The _click_ handler for each hashtag.


## Example

### Custom renderer
```jsx harmony
const Card = (props) => (
    <p>
        <ReactHashtag
            renderHashtag={(hashtagValue) => (
                <div className="hashtag">{hashtagValue}</div>
            )}
        >
            {props.children}
        </ReactHashtag>
    </p>
);
```

### With styled components
```jsx harmony

const Hashtag = styled.span`
    color: tomato;
`;

const Card = (props) => (
    <p>
        <ReactHashtag
            renderHashtag={(hashtagValue) => (
                <Hashtag>{hashtagValue}</Hashtag>
            )}
        >
            {props.children}
        </ReactHashtag>
    </p>
);
```

## 