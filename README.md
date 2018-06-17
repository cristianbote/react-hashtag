React Hashtag
====
Enhance your strings with _live_ components.


[![npm version](https://badge.fury.io/js/react-hashtag.svg?bust)](https://badge.fury.io/js/react-hashtag)
[![codecov.io Code Coverage](https://img.shields.io/codecov/c/github/cristianbote/react-hashtag.svg?maxAge=2592000)](https://codecov.io/github/cristianbote/react-hashtag?branch=master)
[![Build Status](https://travis-ci.org/cristianbote/react-hashtag.svg?branch=master)](https://travis-ci.org/cristianbote/react-hashtag)  

## Features:
* Super small **264 B**
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

### Reusable or composition 
You could reuse the same definition, if that's something you're looking for. The following example uses the `withRouter` from React Router and defines a component that will redirect to certain hashtag pages.
```jsx harmony
const StyledHashtag = styled.span`
    color: tomato;
`;

/**
* Custom component to render the hashtags with a custom renderer
*/
const Hashtags = withRouter(({history}) => (
    (props) => (
        <ReactHashtag
            renderHashtag={(hashtagValue) => (
                <StyledHashtag
                    onClick={history.go(`/search/${hashtagValue}`)}
                >
                    {hashtagValue}
                </StyledHashtag>
            )}
        >
            {props.children}
        </ReactHashtag>
    )
));

const Card = (props) => (
    <p>
        <Hashtags>
            {props.children}
        </Hashtags>
    </p>
);
```

## Questions?
Feel free to fill an issue if you have any questions.