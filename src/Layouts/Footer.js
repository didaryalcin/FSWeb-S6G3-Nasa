import styled from "styled-components";

const Footer = () => {

    const FooterStyled = styled.footer`
        background-color: gray;
        padding: 1rem;
        `;

    const Paragraph = styled.p`
        text-align: center;
        margin: auto;
    `;

    return (
        <FooterStyled>
            <Paragraph>Copyright @2023</Paragraph>
        </FooterStyled>
    )
}

export default Footer;