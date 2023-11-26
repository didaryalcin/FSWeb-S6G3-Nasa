import styled from "styled-components";

const Image = (props) => {
    const { url } = props;

    const Image = styled.img`
        width: 100%;
    `;

    return <div className="img-container">
        <Image src={url} />
    </div>
}

export default Image;