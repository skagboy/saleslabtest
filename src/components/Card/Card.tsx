import React from 'react';
import styled from "styled-components";
import { icon, cardWrapper, info, title, value } from "./Card.styles";
import { TCard } from "../../types/card";

const CardWrapper = styled.div`
    ${cardWrapper};
`;

const Title = styled.p<{ background: string }>`
    ${title};
`;

const Info = styled.div`
    ${info};
`;

const Value = styled.div`
    ${value};
`;

const Icon = styled.div<{ background: string }>`
    ${icon};
`;

export default function Card({title, background, value, icon}: TCard) {
    return (
        <CardWrapper>
            <Icon background={background}>{icon}</Icon>
            <Info>
                <Title background={background}>{title}</Title>
                <Value>{value}</Value>
            </Info>
        </CardWrapper>
);
}