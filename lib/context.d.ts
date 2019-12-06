import React, { ReactChildren } from 'react';
interface Props {
    children: ReactChildren;
}
export declare const ListContext: React.Context<{
    editable?: boolean | undefined;
    setEditable?: ((state: boolean) => void) | undefined;
}>;
export declare const ColorCardsProvider: ({ children, }: Props) => JSX.Element;
export {};
