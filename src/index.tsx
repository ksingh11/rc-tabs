import * as React from 'react';
// import RcTabs, { TabPane, TabsProps as RcTabsProps, TabPaneProps } from 'rc-tabs';
// import Tabs as RcTabs, { TabsProps as RcTabsProps } from './Tabs';
import RcTabs, {TabsProps as RcTabsProps} from "./Tabs";
import TabPane, { TabPaneProps } from './TabPanelList/TabPane';

import { EditableConfig } from './interface';
import classNames from 'classnames';

export type TabsType = 'line' | 'card' | 'editable-card';
export type TabsPosition = 'top' | 'right' | 'bottom' | 'left';
export type SizeType = 'small' | 'middle' | 'large' | undefined;

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

function getPrefixCls(suffixCls, prefixCls) {
    if (prefixCls) return prefixCls;
    return suffixCls ? `ant-${suffixCls}` : 'ant';
}

function Tabs({ type, className, size, onEdit, hideAdd, centered, addIcon, removeIcon, moreIcon, ...props }: TabsProps) {
  const { prefixCls: customizePrefixCls } = props;
  
  const prefixCls = getPrefixCls('tabs', customizePrefixCls);

  let editable: EditableConfig | undefined;
  if (type === 'editable-card') {
    editable = {
      onEdit: (editType, { key, event }) => {
        onEdit?.(editType === 'add' ? event : key!, editType);
      },
      removeIcon: removeIcon || "X",
      addIcon: addIcon || "+",
      showAdd: hideAdd !== true,
    };
  }

  console.error(
    "Warning: ",
    !('onPrevClick' in props) && !('onNextClick' in props),
    'Tabs',
    '`onPrevClick` and `onNextClick` has been removed. Please use `onTabScroll` instead.',
  );

  return (
    <RcTabs
      {...props}
      moreTransitionName="slide-up"
      className={classNames(
        {
          [`${prefixCls}-${size}`]: size,
          [`${prefixCls}-card`]: ['card', 'editable-card'].includes(type as string),
          [`${prefixCls}-editable-card`]: type === 'editable-card',
          [`${prefixCls}-centered`]: centered,
        },
        className,
      )}
      editable={editable}
      moreIcon={moreIcon? moreIcon: "More"}
      prefixCls={prefixCls}
    />
  );
}

Tabs.TabPane = TabPane;

export default Tabs;
