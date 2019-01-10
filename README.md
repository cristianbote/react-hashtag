React Hashtag
====
Enhance your strings with _live_ hashtag components.


[![npm version](https://badge.fury.io/js/react-hashtag.svg?bust)](https://badge.fury.io/js/react-hashtag)
[![codecov.io Code Coverage](https://img.shields.io/codecov/c/github/cristianbote/react-hashtag.svg?maxAge=2592000)](https://codecov.io/github/cristianbote/react-hashtag?branch=master)
[![Build Status](https://travis-ci.org/cristianbote/react-hashtag.svg?branch=master)](https://travis-ci.org/cristianbote/react-hashtag)
[![gzip size](http://img.badgesize.io/https://unpkg.com/react-hashtag/dist/react-hashtag.js?compression=gzip)](https://unpkg.com/react-hashtag)

## Features:
* Super small **~430 B**
* Available for React and Preact
* Custom renderer for each hashtag
* Custom 'click' handler for each hashtag
* Generic output
* Drop-in and use it. Your code will not have to adapt to anything.

## Demo
React: https://codesandbox.io/s/qxow0z7v49

Preact: https://codesandbox.io/s/qv8qz89ll9

## Quick example
```jsx harmony
// Your typical 'component'
const Card = () => (
    <p>
        Here goes my card contents with #static text inside
    </p>
);

// Will become
import ReactHashtag from "react-hashtag";

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

| Name | Type | Description
| ---- | ---- | -----------
| renderHashtag(value: String, onClick: Function) | function | Returns the custom element to be renderer instead of a `<span>`. You can go wild here.
| onHashtagClick(value: String, e: Event) | function | The click handler for each hashtags. This will be called with the hashtag value that got clicked.


## Examples

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

### Reusable or composition 
You could reuse the same definition, if that's something you're looking for. The following example uses the anchor and defines a component that will redirect to certain hashtag pages.
```jsx harmony
const StyledHashtag = styled.a`
    color: tomato;
`;

/**
* Custom component to render the hashtags with a custom renderer
*/
const Hashtags = (props) => (
    <ReactHashtag
        renderHashtag={(hashtagValue) => (
            <StyledHashtag
                href={`/search/${hashtagValue}`}
            >
                {hashtagValue}
            </StyledHashtag>
        )}
    >
        {props.children}
    </ReactHashtag>
);

const Card = (props) => (
    <p>
        <Hashtags>
            {props.children}
        </Hashtags>
    </p>
);
```

## Questions?
Feel free to file an issue if you have any questions.
