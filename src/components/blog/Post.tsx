import React from "react";
import styled from "@emotion/styled";

type Props = {
  title: string;
  body: any;
};

const Post: React.FC<Props> = ({ title, body }) => {
  return (
    <Wrapper>
      <h2>{title}</h2>
      {body.map((item: any) =>
        item.children.map((item: any) => <p key={item._key}>{item.text}</p>)
      )}
    </Wrapper>
  );
};

export default Post;

const Wrapper = styled.div`
  color: white;
`;
