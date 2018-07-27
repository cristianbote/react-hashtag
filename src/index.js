import { parse } from "../lib";

let createElement;
let canRenderArray = false;

try {
  createElement = require("react").createElement;
  canRenderArray = true;
} catch (err) {
  try {
    createElement = require("preact").h;
    canRenderArray = false;
  } catch (err) {
    console.log(
      "[react-hashtag] there's no react nor preact available to import"
    );
  }
}

const defaultHashtagRenderer = createElement => (hashtag, onClick) =>
  createElement(
    "span",
    {
      key: hashtag,
      onClick: onClick ? e => onClick(hashtag, e) : null
    },
    hashtag
  );

export default props => {
  const contents =
    typeof props.children === "object" && props.children.length
      ? !isNaN(props.children.length)
        ? props.children[0]
        : props.children
      : props.children;
  const hashtagRenderer =
    props.renderHashtag || defaultHashtagRenderer(createElement);
  const onHashtagClick = props.onHashtagClick;
  const parsed = parse(contents, hashtagRenderer, onHashtagClick);

  return canRenderArray ? parsed : createElement("span", null, parsed);
};
