import React, { Context, PropsWithChildren, useContext, useState } from "react";
import { Dates, Pipelines } from "./types";

type AppContext = {
    pipeline: Pipelines;
    dates: Dates;
    setPipeline: React.Dispatch<React.SetStateAction<Pipelines>>;
    setDates: React.Dispatch<React.SetStateAction<Dates>>;
};

const AppContext: Context<AppContext> = React.createContext<AppContext>({
    pipeline: Pipelines.Sales,
    setPipeline: () => null,
    dates: Dates.Week,
    setDates: () => null,
});

export const AppProvider = ({ children }: PropsWithChildren<unknown>) => {
    const [dates, setDates] = useState(Dates.Month);
    const [pipeline, setPipeline] = useState(Pipelines.All);

    return <AppContext.Provider value={{ dates, setDates, pipeline, setPipeline }}>{children}</AppContext.Provider>;
};

export const useAppStore = () => {
    return useContext(AppContext);
};
