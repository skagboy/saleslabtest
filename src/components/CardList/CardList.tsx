import React from "react";
import styled from "styled-components";
import { Card } from "../Card";
import { useFetchCards } from "../../hooks/useFetchCards";

const CardListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(min-content, max-content);
  grid-gap: 16px;
`;

export default function CardList() {
    const { getCards } = useFetchCards();

    return (
        <CardListWrapper>
            { getCards().map((card) => <Card key={card.id} {...card} />)}
        </CardListWrapper>
    );
}