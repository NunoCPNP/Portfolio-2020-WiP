import React from 'react';
import styled from '@emotion/styled';

import { white } from '../../styles/colors';

type Props = {
  title: string;
  body: [];
};

const Post: React.FC<Props> = ({ title, body }) => {
  return (
    <Wrapper>
      <StyledTitle>
        <h2>{title}</h2>
      </StyledTitle>

      {body.map((item: { children: [] }) => (
        <p>
          {item.children.map(
            (item: { _key: string; text: string; marks: [string] }) => {
              if (item.marks[0] === 'strong') {
                return (
                  <span style={{ fontWeight: 800 }} key={item._key}>
                    {item.text}
                  </span>
                );
              } else {
                return <span key={item._key}>{item.text}</span>;
              }
            }
          )}
        </p>
      ))}
    </Wrapper>
  );
};

export default Post;

const Wrapper = styled('div')`
  color: ${white};

  & p {
    font-size: 1.3rem;
  }
`;

const StyledTitle = styled('div')`
  margin: 1rem 0;
  background: rgb(249, 204, 65);
  background: linear-gradient(
    0deg,
    rgba(249, 204, 65, 1) 45%,
    rgba(249, 204, 65, 0) 45%
  );
  display: inline-block;
  padding: 0.1rem 0.5rem;

  & h2 {
    font-size: 2rem;
    text-shadow: 0px 1px 3px black;
    line-height: 1;
  }
`;
