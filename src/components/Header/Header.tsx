import { Pipeline } from "../Pipeline";
import { Dates } from "../Dates";
import styled from "styled-components";

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 13px;
`;

export default function Header() {
    return (
        <HeaderWrapper>
            <Pipeline />
            <Dates />
        </HeaderWrapper>
    )
};