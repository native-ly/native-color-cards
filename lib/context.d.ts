import React, { ReactChildren } from 'react';
interface Props {
    readonly children: ReactChildren;
    readonly data?: unknown[] | null;
    readonly onDataChange: (state: any[]) => void;
}
export declare const ListContext: React.Context<any>;
export declare const ColorCardsProvider: ({ children, data, onDataChange }: Props) => JSX.Element;
export {};
