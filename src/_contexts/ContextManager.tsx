import {ReactNode} from "react";
import {TeamContextProvider} from "./TeamContext";

interface Props {
    children: ReactNode
}

/*
 * @Author: Moritz Schöninger 
 * @Email: soemod20@htl-kaindorf.at
 * @Date: 2024-04-10 10:01:06 
 * @Last Modified by: Moritz Schöninger
 * @Last Modified time: 2024-04-10 11:23:38
 * @Description: Component to have all ContextProviders in one Component,
 *               so that App.tsx is not full of Providers
 */


export const ContextManager = ({children}: Props) => {
    return (
        <TeamContextProvider>
            {children}
        </TeamContextProvider>
    );
}