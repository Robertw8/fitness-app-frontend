import styled from '@emotion/styled';

const BackBtn = styled.button`
    padding: 32px 0 16px;
    display: flex;
    gap: 8px;
    align-items: center;
    background-color: transparent;
    border: none;
    color:rgba(239, 237, 232, 0.4);
    transition-duration: 300ms;
    & {
        svg {
            transform: rotate(180deg);
        }
    }
    :hover {
        color:#E6533C;
        & svg {
            stroke:#E6533C;
        }
    }
`
export {BackBtn}