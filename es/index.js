import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import * as React from 'react';
import RcTabs, { TabPane, TabPaneProps } from 'rc-tabs';
import classNames from 'classnames';
export { TabPaneProps };

function getPrefixCls(suffixCls, prefixCls) {
  if (prefixCls) return prefixCls;
  return suffixCls ? "ant-".concat(suffixCls) : 'ant';
}

function Tabs(_ref) {
  var _classNames;

  var type = _ref.type,
      className = _ref.className,
      size = _ref.size,
      _onEdit = _ref.onEdit,
      hideAdd = _ref.hideAdd,
      centered = _ref.centered,
      addIcon = _ref.addIcon,
      removeIcon = _ref.removeIcon,
      moreIcon = _ref.moreIcon,
      props = _objectWithoutProperties(_ref, ["type", "className", "size", "onEdit", "hideAdd", "centered", "addIcon", "removeIcon", "moreIcon"]);

  var customizePrefixCls = props.prefixCls;
  var prefixCls = getPrefixCls('tabs', customizePrefixCls);
  var editable;

  if (type === 'editable-card') {
    editable = {
      onEdit: function onEdit(editType, _ref2) {
        var key = _ref2.key,
            event = _ref2.event;
        _onEdit === null || _onEdit === void 0 ? void 0 : _onEdit(editType === 'add' ? event : key, editType);
      },
      removeIcon: removeIcon || "X",
      addIcon: addIcon || "+",
      showAdd: hideAdd !== true
    };
  }

  console.error("Warning: ", !('onPrevClick' in props) && !('onNextClick' in props), 'Tabs', '`onPrevClick` and `onNextClick` has been removed. Please use `onTabScroll` instead.');
  return /*#__PURE__*/React.createElement(RcTabs, Object.assign({}, props, {
    moreTransitionName: "slide-up",
    className: classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-").concat(size), size), _defineProperty(_classNames, "".concat(prefixCls, "-card"), ['card', 'editable-card'].includes(type)), _defineProperty(_classNames, "".concat(prefixCls, "-editable-card"), type === 'editable-card'), _defineProperty(_classNames, "".concat(prefixCls, "-centered"), centered), _classNames), className),
    editable: editable,
    moreIcon: moreIcon ? moreIcon : "More",
    prefixCls: prefixCls
  }));
}

Tabs.TabPane = TabPane;
export default Tabs;