import styled from "styled-components";

const Video = (props) => {

    const Iframe = styled.iframe`
        width: 100%;
        `;

    const { url } = props;
    return <Iframe width="560" height="315" src={url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></Iframe>
}

export default Video;