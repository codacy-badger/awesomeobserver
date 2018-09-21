import * as React from 'react';
import styled from 'styled-components';

const Hero = styled.section`
  min-height: 100vh;
  padding: 20px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.p`
  user-select: none;
  font-size: 35px;
  font-weight: 100;
`;

export default class Index extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <Hero>
        <Container>
          <Title>Awesome Observer ⚡</Title>
        </Container>
      </Hero>
    );
  }
}
