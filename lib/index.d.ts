import * as React from 'react';
import { TabsProps as RcTabsProps, TabPaneProps } from 'rc-tabs';
export declare type TabsType = 'line' | 'card' | 'editable-card';
export declare type TabsPosition = 'top' | 'right' | 'bottom' | 'left';
export declare type SizeType = 'small' | 'middle' | 'large' | undefined;
export { TabPaneProps };
export interface TabsProps extends Omit<RcTabsProps, 'editable'> {
    type?: TabsType;
    size?: SizeType;
    hideAdd?: boolean;
    centered?: boolean;
    addIcon?: React.ReactNode;
    removeIcon?: React.ReactNode;
    moreIcon?: React.ReactNode;
    onEdit?: (e: React.MouseEvent | React.KeyboardEvent | string, action: 'add' | 'remove') => void;
}
declare function Tabs({ type, className, size, onEdit, hideAdd, centered, addIcon, removeIcon, moreIcon, ...props }: TabsProps): JSX.Element;
declare namespace Tabs {
    var TabPane: any;
}
export default Tabs;
