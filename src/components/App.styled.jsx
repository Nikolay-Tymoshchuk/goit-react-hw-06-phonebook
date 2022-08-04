import styled from '@emotion/styled';

export const Container = styled.div`
  min-width: 400px;
  height: max-content;
  display: inline-flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  font-size: 40;
  margin-left: 2%;
  margin-top: 5%;
  color: var(--color-text-primary);
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 0 20px 15px rgba(0, 0, 0, 0.7);
  background-color: var(--color-accent);
  background-size: 100%;
  overflow: hidden;
  background-image: linear-gradient(
    to right,
    #614519 0%,
    #866319 20%,
    #fcbf32 50%,
    #866319 80%,
    #614519 100%
  );
`;

export const Title = styled.h1`
  font-size: 40;
`;

export const InnerContainer = styled.div`
  padding: 15px;
  box-shadow: 6px 8px 15px 0px rgb(22, 22, 22);
  margin-left: auto;
  margin-right: auto;
  border-radius: inherit;
  background-color: var(--color-background-primary);
  background-image: linear-gradient(
    90deg,
    rgba(231, 231, 231, 0.1) 0%,
    rgba(0, 126, 175, 0.9) 74%,
    rgba(0, 89, 124, 1) 89%,
    #b6caff 89%,
    #e5f0fd 90%,
    rgb(102, 148, 165) 92%,
    rgb(73, 138, 163) 93%,
    rgb(6, 54, 73) 96%,
    rgba(0, 89, 124, 1) 97%,
    rgba(0, 89, 124, 1) 100%
  );
`;