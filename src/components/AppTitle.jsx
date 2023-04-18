import styled from 'styled-components';

export default function AppTitle(props) {
  const {
    title = 'Box Office',
    subtitle = 'Get Info about Latest Shows and Celebs.',
  } = props;

  return (
    <TitleWrapper>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </TitleWrapper>
  );
}

const TitleWrapper = styled.div`
  text-align: center;
  margin: 0 0 40px;
  h1 {
    color: ${({ theme }) => theme.mainColors.blue};
    font-family: ${({ theme }) => theme.fontFamily};
    letter-spacing: 10px;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 10px;
  }
  p {
    color: ${({ theme }) => theme.mainColors.dark};
    margin: 0;
  }
`;
