import { Pipelines } from "../store/types";

export type TCard = {
    id: number,
    date: Date,
    type: TCardType,
    title: string,
    value: number | string;
    background: string;
    icon: JSX.Element;
    pipeline: Pipelines;
}

export const enum TCardType {
    LEAD ="lead",
    TASK="task"
}