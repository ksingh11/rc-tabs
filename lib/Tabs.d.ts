import * as React from 'react';
import TabPane from './TabPanelList/TabPane';
import { TabPosition, RenderTabBar, TabsLocale, EditableConfig, AnimatedConfig, OnTabScroll, TabBarExtraContent } from './interface';
export declare type SizeType = 'small' | 'middle' | 'large' | undefined;
export declare type TabsType = 'line' | 'card' | 'editable-card';
export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    prefixCls?: string;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    id?: string;
    activeKey?: string;
    defaultActiveKey?: string;
    direction?: 'ltr' | 'rtl';
    animated?: boolean | AnimatedConfig;
    renderTabBar?: RenderTabBar;
    tabBarExtraContent?: TabBarExtraContent;
    tabBarGutter?: number;
    tabBarStyle?: React.CSSProperties;
    tabPosition?: TabPosition;
    destroyInactiveTabPane?: boolean;
    onChange?: (activeKey: string) => void;
    onTabClick?: (activeKey: string, e: React.KeyboardEvent | React.MouseEvent) => void;
    onTabScroll?: OnTabScroll;
    editable?: EditableConfig;
    locale?: TabsLocale;
    moreIcon?: React.ReactNode;
    /** @private Internal usage. Not promise will rename in future */
    moreTransitionName?: string;
    type?: TabsType;
    size?: SizeType;
    hideAdd?: boolean;
    centered?: boolean;
    addIcon?: React.ReactNode;
    onEdit?: (e: React.MouseEvent | React.KeyboardEvent | string, action: 'add' | 'remove') => void;
}
declare const ForwardTabs: React.ForwardRefExoticComponent<TabsProps & React.RefAttributes<HTMLDivElement>>;
export declare type ForwardTabsType = typeof ForwardTabs & {
    TabPane: typeof TabPane;
};
declare const _default: ForwardTabsType;
export default _default;
