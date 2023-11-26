import Image from "../components/Image";
import Video from "../components/Video";
import styled from "styled-components";

const Main = (props) => {
  const { data } = props;

  const MainDiv = styled.main`
    width: 60vw;
    margin: 2rem auto;
    border: 2px solid black;
    padding: 1rem;
    border-radius: 0.5rem;
  `;

  const DetailsDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 0.5rem;
  `;

  const Paragraph = styled.p`
    font-weight: bold;
  `;

  return (
    <MainDiv>
      <h1>{data.title}</h1>
      {data.media_type === "image" ? (
        <Image url={data.url} />
      ) : (
        <Video url={data.url} />
      )}
      <DetailsDiv>
        <Paragraph>{data.copyright}</Paragraph>
        <p>{data.date}</p>
      </DetailsDiv>
      <p>{data.explanation}</p>
    </MainDiv>
  );
};

export default Main;
