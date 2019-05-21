'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; // alias example
// alias example
// aliasFields example
// aliasFields ignore module example


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyRedux = require('./../npm/wepy-redux/lib/index.js');

var _panel = require('./../components/panel.js');

var _panel2 = _interopRequireDefault(_panel);

var _counter = require('./../components/counter.js');

var _counter2 = _interopRequireDefault(_counter);

var _list = require('./../components/wepy-list.js');

var _list2 = _interopRequireDefault(_list);

var _moduleA = {};

var _moduleA2 = _interopRequireDefault(_moduleA);

var _group = require('./../components/group.js');

var _group2 = _interopRequireDefault(_group);

var _wepyComToast = require('./../npm/wepy-com-toast/toast.js');

var _wepyComToast2 = _interopRequireDefault(_wepyComToast);

var _test = require('./../mixins/test.js');

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log('moduleA ignored: ', _moduleA2.default); // => moduleA ignored: {}

var Index = (_dec = (0, _wepyRedux.connect)({
  num: function num(state) {
    return state.counter.num;
  },
  asyncNum: function asyncNum(state) {
    return state.counter.asyncNum;
  },
  sumNum: function sumNum(state) {
    return state.counter.num + state.counter.asyncNum;
  }
}), _dec(_class = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'test'
    }, _this.components = {
      panel: _panel2.default,
      counter1: _counter2.default,
      counter2: _counter2.default,
      list: _list2.default,
      group: _group2.default,
      toast: _wepyComToast2.default
    }, _this.mixins = [_test2.default], _this.data = {
      datas: {}, // 所有信息
      datasArr: [], // 未来几日天气数组
      onlydata: {} // 搜索城市信息
    }, _this.computed = {
      now: function now() {
        return +new Date();
      }
    }, _this.methods = {
      tap: function tap() {
        console.log('do noting from ' + this.$name);
      },
      showMovie: function showMovie(e) {
        console.log(e.currentTarget.dataset.movie); // 这样就可以获取到data属性绑定的对象
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'request',
    value: function request() {
      this.dat = 123;
      var that = this;
      wx.request({
        url: 'https://www.tianqiapi.com/api/?version=v1&city=武汉',
        data: {},
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function success(res) {
          console.log('request fail: ', res);

          that.datas = res.data;
          that.datasArr = res.data.data;
          that.onlydata = res.data.data[0];
          console.log(that.onlydata);
          console.log(that.datasArr);
          // return dataw
          // console.log(this.dat)
        },
        fail: function fail(p) {
          console.log('request fail: ', p);
        }
      });
      console.log(this.datas);
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {
      this.request();
      // this.datas = '武汉'
    }
  }]);

  return Index;
}(_wepy2.default.page)) || _class);
exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4IC0g5Ymv5pysLmpzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJtb2R1bGVBIiwiSW5kZXgiLCJudW0iLCJzdGF0ZSIsImNvdW50ZXIiLCJhc3luY051bSIsInN1bU51bSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwicGFuZWwiLCJQYW5lbCIsImNvdW50ZXIxIiwiQ291bnRlciIsImNvdW50ZXIyIiwibGlzdCIsIkxpc3QiLCJncm91cCIsIkdyb3VwIiwidG9hc3QiLCJUb2FzdCIsIm1peGlucyIsInRlc3RNaXhpbiIsImRhdGEiLCJkYXRhcyIsImRhdGFzQXJyIiwib25seWRhdGEiLCJjb21wdXRlZCIsIm5vdyIsIkRhdGUiLCJtZXRob2RzIiwidGFwIiwiJG5hbWUiLCJzaG93TW92aWUiLCJlIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJtb3ZpZSIsImRhdCIsInRoYXQiLCJ3eCIsInJlcXVlc3QiLCJ1cmwiLCJoZWFkZXIiLCJzdWNjZXNzIiwicmVzIiwiZmFpbCIsInAiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O2tCQUd5QztBQUNUO0FBQ1E7QUFDUDs7O0FBTC9COzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBQSxRQUFRQyxHQUFSLENBQVksbUJBQVosRUFBaUNDLGlCQUFqQyxFLENBQTBDOztJQWNyQkMsSyxXQVpwQix3QkFBUTtBQUNQQyxLQURPLGVBQ0ZDLEtBREUsRUFDSztBQUNWLFdBQU9BLE1BQU1DLE9BQU4sQ0FBY0YsR0FBckI7QUFDRCxHQUhNO0FBSVBHLFVBSk8sb0JBSUdGLEtBSkgsRUFJVTtBQUNmLFdBQU9BLE1BQU1DLE9BQU4sQ0FBY0MsUUFBckI7QUFDRCxHQU5NO0FBT1BDLFFBUE8sa0JBT0NILEtBUEQsRUFPUTtBQUNiLFdBQU9BLE1BQU1DLE9BQU4sQ0FBY0YsR0FBZCxHQUFvQkMsTUFBTUMsT0FBTixDQUFjQyxRQUF6QztBQUNEO0FBVE0sQ0FBUixDOzs7Ozs7Ozs7Ozs7OztvTEFhQ0UsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYTtBQUNYQyxhQUFPQyxlQURJO0FBRVhDLGdCQUFVQyxpQkFGQztBQUdYQyxnQkFBVUQsaUJBSEM7QUFJWEUsWUFBTUMsY0FKSztBQUtYQyxhQUFPQyxlQUxJO0FBTVhDLGFBQU9DO0FBTkksSyxRQVNiQyxNLEdBQVMsQ0FBQ0MsY0FBRCxDLFFBRVRDLEksR0FBTztBQUNMQyxhQUFPLEVBREYsRUFDTztBQUNaQyxnQkFBVSxFQUZMLEVBRVU7QUFDZkMsZ0JBQVUsRUFITCxDQUdTO0FBSFQsSyxRQU1QQyxRLEdBQVc7QUFDVEMsU0FEUyxpQkFDRjtBQUNMLGVBQU8sQ0FBQyxJQUFJQyxJQUFKLEVBQVI7QUFDRDtBQUhRLEssUUFNWEMsTyxHQUFVO0FBQ1JDLFNBRFEsaUJBQ0Q7QUFDTGpDLGdCQUFRQyxHQUFSLENBQVksb0JBQW9CLEtBQUtpQyxLQUFyQztBQUNELE9BSE87QUFJUkMsZUFKUSxxQkFJR0MsQ0FKSCxFQUlNO0FBQ1pwQyxnQkFBUUMsR0FBUixDQUFZbUMsRUFBRUMsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JDLEtBQXBDLEVBRFksQ0FDK0I7QUFDNUM7QUFOTyxLOzs7Ozs4QkFRQztBQUNULFdBQUtDLEdBQUwsR0FBVyxHQUFYO0FBQ0EsVUFBTUMsT0FBTyxJQUFiO0FBQ0FDLFNBQUdDLE9BQUgsQ0FBVztBQUNUQyxhQUFLLG1EQURJO0FBRVRuQixjQUFNLEVBRkc7QUFJVG9CLGdCQUFRO0FBQ04sMEJBQWdCLGtCQURWLENBQzZCO0FBRDdCLFNBSkM7QUFPVEMsZUFQUyxtQkFPQUMsR0FQQSxFQU9LO0FBQ1ovQyxrQkFBUUMsR0FBUixDQUFZLGdCQUFaLEVBQThCOEMsR0FBOUI7O0FBRUFOLGVBQUtmLEtBQUwsR0FBYXFCLElBQUl0QixJQUFqQjtBQUNBZ0IsZUFBS2QsUUFBTCxHQUFnQm9CLElBQUl0QixJQUFKLENBQVNBLElBQXpCO0FBQ0FnQixlQUFLYixRQUFMLEdBQWdCbUIsSUFBSXRCLElBQUosQ0FBU0EsSUFBVCxDQUFjLENBQWQsQ0FBaEI7QUFDQXpCLGtCQUFRQyxHQUFSLENBQVl3QyxLQUFLYixRQUFqQjtBQUNBNUIsa0JBQVFDLEdBQVIsQ0FBWXdDLEtBQUtkLFFBQWpCO0FBQ0E7QUFDQTtBQUNELFNBakJRO0FBa0JUcUIsWUFsQlMsZ0JBa0JIQyxDQWxCRyxFQWtCQTtBQUNQakQsa0JBQVFDLEdBQVIsQ0FBWSxnQkFBWixFQUE4QmdELENBQTlCO0FBQ0Q7QUFwQlEsT0FBWDtBQXNCQWpELGNBQVFDLEdBQVIsQ0FBWSxLQUFLeUIsS0FBakI7QUFDRDs7OzZCQUNRO0FBQ1AsV0FBS2lCLE9BQUw7QUFDQTtBQUNEOzs7O0VBakVnQ08sZUFBS0MsSTtrQkFBbkJoRCxLIiwiZmlsZSI6ImluZGV4IC0g5Ymv5pysLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICd3ZXB5LXJlZHV4J1xuICBpbXBvcnQgUGFuZWwgZnJvbSAnQC9jb21wb25lbnRzL3BhbmVsJyAvLyBhbGlhcyBleGFtcGxlXG4gIGltcG9ydCBDb3VudGVyIGZyb20gJ2NvdW50ZXInIC8vIGFsaWFzIGV4YW1wbGVcbiAgaW1wb3J0IExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9saXN0JyAvLyBhbGlhc0ZpZWxkcyBleGFtcGxlXG4gIGltcG9ydCBtb2R1bGVBIGZyb20gJ21vZHVsZS1hJyAvLyBhbGlhc0ZpZWxkcyBpZ25vcmUgbW9kdWxlIGV4YW1wbGVcbiAgaW1wb3J0IEdyb3VwIGZyb20gJy4uL2NvbXBvbmVudHMvZ3JvdXAnXG4gIGltcG9ydCBUb2FzdCBmcm9tICd3ZXB5LWNvbS10b2FzdCdcbiAgaW1wb3J0IHRlc3RNaXhpbiBmcm9tICcuLi9taXhpbnMvdGVzdCdcblxuICBjb25zb2xlLmxvZygnbW9kdWxlQSBpZ25vcmVkOiAnLCBtb2R1bGVBKSAvLyA9PiBtb2R1bGVBIGlnbm9yZWQ6IHt9XG5cbiAgQGNvbm5lY3Qoe1xuICAgIG51bSAoc3RhdGUpIHtcbiAgICAgIHJldHVybiBzdGF0ZS5jb3VudGVyLm51bVxuICAgIH0sXG4gICAgYXN5bmNOdW0gKHN0YXRlKSB7XG4gICAgICByZXR1cm4gc3RhdGUuY291bnRlci5hc3luY051bVxuICAgIH0sXG4gICAgc3VtTnVtIChzdGF0ZSkge1xuICAgICAgcmV0dXJuIHN0YXRlLmNvdW50ZXIubnVtICsgc3RhdGUuY291bnRlci5hc3luY051bVxuICAgIH1cbiAgfSlcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ3Rlc3QnXG4gICAgfVxuICAgIGNvbXBvbmVudHMgPSB7XG4gICAgICBwYW5lbDogUGFuZWwsXG4gICAgICBjb3VudGVyMTogQ291bnRlcixcbiAgICAgIGNvdW50ZXIyOiBDb3VudGVyLFxuICAgICAgbGlzdDogTGlzdCxcbiAgICAgIGdyb3VwOiBHcm91cCxcbiAgICAgIHRvYXN0OiBUb2FzdFxuICAgIH1cblxuICAgIG1peGlucyA9IFt0ZXN0TWl4aW5dXG5cbiAgICBkYXRhID0ge1xuICAgICAgZGF0YXM6IHt9LCAgLy8g5omA5pyJ5L+h5oGvXG4gICAgICBkYXRhc0FycjogW10sICAvLyDmnKrmnaXlh6Dml6XlpKnmsJTmlbDnu4RcbiAgICAgIG9ubHlkYXRhOiB7fSAgLy8g5pCc57Si5Z+O5biC5L+h5oGvXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgICBub3cgKCkge1xuICAgICAgICByZXR1cm4gK25ldyBEYXRlKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgdGFwICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2RvIG5vdGluZyBmcm9tICcgKyB0aGlzLiRuYW1lKVxuICAgICAgfSxcbiAgICAgIHNob3dNb3ZpZSAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5tb3ZpZSkgLy8g6L+Z5qC35bCx5Y+v5Lul6I635Y+W5YiwZGF0YeWxnuaAp+e7keWumueahOWvueixoVxuICAgICAgfVxuICAgIH1cbiAgICByZXF1ZXN0ICgpIHtcbiAgICAgIHRoaXMuZGF0ID0gMTIzXG4gICAgICBjb25zdCB0aGF0ID0gdGhpc1xuICAgICAgd3gucmVxdWVzdCh7XG4gICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LnRpYW5xaWFwaS5jb20vYXBpLz92ZXJzaW9uPXYxJmNpdHk95q2m5rGJJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICB9LFxuICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIC8vIOm7mOiupOWAvFxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygncmVxdWVzdCBmYWlsOiAnLCByZXMpXG5cbiAgICAgICAgICB0aGF0LmRhdGFzID0gcmVzLmRhdGFcbiAgICAgICAgICB0aGF0LmRhdGFzQXJyID0gcmVzLmRhdGEuZGF0YVxuICAgICAgICAgIHRoYXQub25seWRhdGEgPSByZXMuZGF0YS5kYXRhWzBdXG4gICAgICAgICAgY29uc29sZS5sb2codGhhdC5vbmx5ZGF0YSlcbiAgICAgICAgICBjb25zb2xlLmxvZyh0aGF0LmRhdGFzQXJyKVxuICAgICAgICAgIC8vIHJldHVybiBkYXRhd1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZGF0KVxuICAgICAgICB9LFxuICAgICAgICBmYWlsIChwKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3JlcXVlc3QgZmFpbDogJywgcClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0YXMpXG4gICAgfVxuICAgIG9uTG9hZCgpIHtcbiAgICAgIHRoaXMucmVxdWVzdCgpXG4gICAgICAvLyB0aGlzLmRhdGFzID0gJ+atpuaxiSdcbiAgICB9XG4gIH1cbiJdfQ==