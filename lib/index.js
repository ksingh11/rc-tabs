"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "TabPaneProps", {
  enumerable: true,
  get: function get() {
    return _rcTabs.TabPaneProps;
  }
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _rcTabs = _interopRequireWildcard(require("rc-tabs"));

var _classnames = _interopRequireDefault(require("classnames"));

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
      props = (0, _objectWithoutProperties2.default)(_ref, ["type", "className", "size", "onEdit", "hideAdd", "centered", "addIcon", "removeIcon", "moreIcon"]);
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
  return /*#__PURE__*/React.createElement(_rcTabs.default, Object.assign({}, props, {
    moreTransitionName: "slide-up",
    className: (0, _classnames.default)((_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-").concat(size), size), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-card"), ['card', 'editable-card'].includes(type)), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-editable-card"), type === 'editable-card'), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-centered"), centered), _classNames), className),
    editable: editable,
    moreIcon: moreIcon ? moreIcon : "More",
    prefixCls: prefixCls
  }));
}

Tabs.TabPane = _rcTabs.TabPane;
var _default = Tabs;
exports.default = _default;