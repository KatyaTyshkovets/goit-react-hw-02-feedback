import styled from 'styled-components';

export const Box = styled.div`
margin-left: auto;
margin-right: auto;
margin-top: 20px;
padding: 5px;
text-align: center;
`;
export const Button = styled.button`
 background-color:#FF6600;
 border-radius: 19%;
 margin: 10px;
 font-size: 20px;
    curcor:pointer;
    pading:5px;
    transition:transform 250ms linear;
    & :focus , :hover {
        background-color:#FFFF;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2), 0 16px 20px rgba(0, 0, 0, 0.2);
        transform: scale(1.2);
    }
`;