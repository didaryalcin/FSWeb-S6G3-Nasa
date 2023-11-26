import styled from "styled-components";


const Header = (props) => {
    const { date, setDate } = props;
    function changeHandler(e) {
        setDate(e.target.value)
    }

    const HeaderStyled = styled.header`
        background-color: gray;
        min-height: 12vh;
        `;

    const HeaderItems = styled.div`
        display: flex;
        justify-content: space-between;
        padding: 1rem 0;
        align-items: center;
        width: 60vw;
        margin: 0 auto;
    `;

    const Image = styled.img`
        width: 5rem;
        &:hover{
            width: 6rem;
        }
        `;

    const Input = styled.input`
        font-size: 1.5rem;
        border: 2px solid black;
        border-radius: .5rem;
        `;

    return (
        <HeaderStyled>
            <HeaderItems>
                <Image src="https://api.nasa.gov/assets/img/favicons/favicon-192.png" />
                <Input type="date" onChange={changeHandler} value={date} />
            </HeaderItems>
        </HeaderStyled>
    )
}

export default Header;