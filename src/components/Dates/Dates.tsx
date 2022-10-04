import { Button as ButtonUiKit } from "antd";
import styled from "styled-components";
import { useAppStore } from "../../store/context";
import { Dates as DatesType } from "../../store/types";
import { dates } from "../../constants/dates";

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const getColor = (d1: DatesType, d2: DatesType): string => {
    return d1 === d2 ? "blue" : "black"
}

export default function Dates() {
    const { setDates, dates: date } = useAppStore();

    const handleClick = (value: DatesType) => () => {
        return setDates(value);
    }

    return (
        <ButtonWrapper>
            {
                dates.map( d => (
                    <ButtonUiKit
                        key={d.id}
                        type="text"
                        onClick={handleClick(d.value)}
                        style={{color: getColor(d.value,date)}}
                    >
                        {d.label}
                </ButtonUiKit>))
            }
        </ButtonWrapper>
    );
}