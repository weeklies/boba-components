import ActionLink from "buttons/ActionLink";
import HighlightedText from "common/HighlightedText";
import { LinkWithAction } from "types";
import React from "react";
import Theme from "theme/default";
import classnames from "classnames";
import css from "styled-jsx/css";

const { className: titleClassName, styles: titleStyles } = css.resolve`
  .title {
    margin: 0px 35px;
    margin-left: 25px;
    color: white;
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;
    min-width: 0;
  }
  .title.desktop-hidden {
    display: none;
  }
  @media only screen and (max-width: ${Theme.MOBILE_WIDTH_TRIGGER_PX}px) {
    .title.desktop-hidden {
      display: block;
    }
  }

  @media only screen and (max-width: 450px) {
    .title {
      text-align: center;
      flex-grow: 1;
    }
  }
`;

interface BoardTitleProps {
  accentColor?: string;
  title?: string;
  link?: LinkWithAction;
  hideOnDesktop?: boolean;
}

export default function BoardTitle(props: BoardTitleProps) {
  return (
    <ActionLink
      link={props.link}
      className={classnames([titleClassName, "title"], {
        "desktop-hidden": props.hideOnDesktop,
      })}
    >
      <HighlightedText highlightColor={props.accentColor || "#fffff"}>
        <div className="title-text">{props.title}</div>
      </HighlightedText>
      {titleStyles}
      <style jsx>{`
        .title-text {
          overflow: hidden;
          text-overflow: ellipsis;
        }
      `}</style>
    </ActionLink>
  );
}
