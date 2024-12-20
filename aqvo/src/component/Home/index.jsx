import React from 'react';
import { Category, Container, List, Navbar, Wrapper } from './style';

export const Home = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Navbar>
            <Category>
              <List>
                <List.Item>
                  <List.A>Home</List.A>
                </List.Item>
                <List.Item>
                  <List.A>About Us</List.A>
                </List.Item>
              </List>

            </Category>
            <Category>

            </Category>
            <Category>

            </Category>
          </Navbar>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Home;