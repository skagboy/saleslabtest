import { cards } from "../mocks/cards";
import { useCallback } from "react";
import { useAppStore } from "../store/context";
import { TCard } from "../types/card";
import { Dates } from "../store/types";

export function useFetchCards() {

    const { pipeline, dates } = useAppStore();

    const filterDates = useCallback(( cards: TCard[], dates: Dates) => {
        const today = new Date();

        switch (dates) {
            case Dates.Month:
                return cards.filter( card => card.date.getMonth() === today.getMonth())
            case Dates.Today:
                return cards.filter( card => card.date.getDay() === today.getDay())
            // TODO add other logic
            default:
                return cards;
        }
    }, []);

    const getCards = useCallback(() => {
        return filterDates(cards, dates).filter(card => {
            if (+pipeline === 0) return cards;
            return card.pipeline === +pipeline;
        })
    }, [pipeline, dates])

    return { getCards };
}