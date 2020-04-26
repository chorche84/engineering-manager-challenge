import React from "react";
import {
  UlStyled,
  LiStyled,
  DlStyled,
  DtStyled,
  DdStyled
} from "./styles/Styled";

// TODO: Improve the generation dynamic tag using "as" prop added in styled-components v4
const TypeList = {
  dl: DlStyled,
  ul: UlStyled
};

const DescriptionListItem = (props) => {
  const { data, separator, display, key } = props;

  return (
    <React.Fragment key={key}>
      <DtStyled display={display}>
        {key}
        {separator}
      </DtStyled>
      <DdStyled display={display}>{data}</DdStyled>
    </React.Fragment>
  );
}

const ListItem = (props) => {
  const { data, link, display, key } = props;

  return (
    <LiStyled key={key} display={display}>
      {link ? (
        <a
          href={data.url || ""}
          role={data.role || ""}
          title={data.title || ""}
          onClick={data.onClick}
        >
          {data.text || ""}
        </a>
      ) : (
        data
      )}
    </LiStyled>
  );
}

const List = ({
  className,
  data,
  type,
  size,
  color,
  display,
  separator,
  link
}) => {
  const ListComponent = TypeList[type || "ul"];
  return (
    <ListComponent
      className={className}
      size={size}
      color={color}
      display={display}
    >
      {type === "dl" || display === "block"
        ? Object.keys(data).map(item => (
            <DescriptionListItem key={item} display={display} data={data[item]} separator={separator} />
          ))
        : Object.keys(data).map(item => (
            <ListItem key={item} display={display} data={data[item]} link={link} />
          ))}
    </ListComponent>
  );
};

export default List;
