'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Popup = function (_wepy$component) {
  _inherits(Popup, _wepy$component);

  function Popup() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Popup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Popup.__proto__ || Object.getPrototypeOf(Popup)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      isShow: {
        type: Boolean,
        value: true
      },
      width: {
        type: Number,
        value: 0
      },
      height: {
        type: Number,
        value: 0
      }
    }, _this.methods = {
      hide: function hide() {
        this.$emit('hide');
      },
      catchForNotHide: function catchForNotHide() {
        console.log("do nothing");
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Popup;
}(_wepy2.default.component);

exports.default = Popup;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBvcHVwLmpzIl0sIm5hbWVzIjpbIlBvcHVwIiwicHJvcHMiLCJpc1Nob3ciLCJ0eXBlIiwiQm9vbGVhbiIsInZhbHVlIiwid2lkdGgiLCJOdW1iZXIiLCJoZWlnaHQiLCJtZXRob2RzIiwiaGlkZSIsIiRlbWl0IiwiY2F0Y2hGb3JOb3RIaWRlIiwiY29uc29sZSIsImxvZyIsIndlcHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLEssR0FBUTtBQUNOQyxjQUFRO0FBQ05DLGNBQU1DLE9BREE7QUFFTkMsZUFBTztBQUZELE9BREY7QUFLTkMsYUFBTztBQUNMSCxjQUFNSSxNQUREO0FBRUxGLGVBQU87QUFGRixPQUxEO0FBU05HLGNBQVE7QUFDTkwsY0FBTUksTUFEQTtBQUVORixlQUFPO0FBRkQ7QUFURixLLFFBZVJJLE8sR0FBVTtBQUNSQyxVQURRLGtCQUNEO0FBQ0wsYUFBS0MsS0FBTCxDQUFXLE1BQVg7QUFDRCxPQUhPO0FBS1JDLHFCQUxRLDZCQUtVO0FBQ2hCQyxnQkFBUUMsR0FBUixDQUFZLFlBQVo7QUFDRDtBQVBPLEs7Ozs7RUFoQnVCQyxlQUFLQyxTOztrQkFBbkJoQixLIiwiZmlsZSI6IlBvcHVwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICBwcm9wcyA9IHtcbiAgICBpc1Nob3c6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB2YWx1ZTogdHJ1ZVxuICAgIH0sXG4gICAgd2lkdGg6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIHZhbHVlOiAwXG4gICAgfSxcbiAgICBoZWlnaHQ6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIHZhbHVlOiAwXG4gICAgfVxuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICBoaWRlKCkge1xuICAgICAgdGhpcy4kZW1pdCgnaGlkZScpXG4gICAgfSxcblxuICAgIGNhdGNoRm9yTm90SGlkZSgpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiZG8gbm90aGluZ1wiKVxuICAgIH1cbiAgfVxufSJdfQ==