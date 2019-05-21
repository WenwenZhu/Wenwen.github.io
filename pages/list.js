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

var list = (_dec = (0, _wepyRedux.connect)({
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
  _inherits(list, _wepy$page);

  function list() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, list);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = list.__proto__ || Object.getPrototypeOf(list)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
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
      onlydata: {}, // 搜索城市信息
      moviedd: ''
    }, _this.computed = {
      now: function now() {}
    }, _this.methods = {
      showMovie: function showMovie(e) {
        console.log(e); // 这样就可以获取到data属性绑定的对象
        console.log(this.moviedd);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(list, [{
    key: 'request',
    value: function request() {
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
    }
  }]);

  return list;
}(_wepy2.default.page)) || _class);
exports.default = list;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QuanMiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsIm1vZHVsZUEiLCJsaXN0IiwibnVtIiwic3RhdGUiLCJjb3VudGVyIiwiYXN5bmNOdW0iLCJzdW1OdW0iLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsInBhbmVsIiwiUGFuZWwiLCJjb3VudGVyMSIsIkNvdW50ZXIiLCJjb3VudGVyMiIsIkxpc3QiLCJncm91cCIsIkdyb3VwIiwidG9hc3QiLCJUb2FzdCIsIm1peGlucyIsInRlc3RNaXhpbiIsImRhdGEiLCJkYXRhcyIsImRhdGFzQXJyIiwib25seWRhdGEiLCJtb3ZpZWRkIiwiY29tcHV0ZWQiLCJub3ciLCJtZXRob2RzIiwic2hvd01vdmllIiwiZSIsInRoYXQiLCJ3eCIsInJlcXVlc3QiLCJ1cmwiLCJoZWFkZXIiLCJzdWNjZXNzIiwicmVzIiwiZmFpbCIsInAiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O2tCQUd5QztBQUNUO0FBQ1E7QUFDUDs7O0FBTC9COzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBQSxRQUFRQyxHQUFSLENBQVksbUJBQVosRUFBaUNDLGlCQUFqQyxFLENBQTBDOztJQWNyQkMsSSxXQVpwQix3QkFBUTtBQUNQQyxLQURPLGVBQ0ZDLEtBREUsRUFDSztBQUNWLFdBQU9BLE1BQU1DLE9BQU4sQ0FBY0YsR0FBckI7QUFDRCxHQUhNO0FBSVBHLFVBSk8sb0JBSUdGLEtBSkgsRUFJVTtBQUNmLFdBQU9BLE1BQU1DLE9BQU4sQ0FBY0MsUUFBckI7QUFDRCxHQU5NO0FBT1BDLFFBUE8sa0JBT0NILEtBUEQsRUFPUTtBQUNiLFdBQU9BLE1BQU1DLE9BQU4sQ0FBY0YsR0FBZCxHQUFvQkMsTUFBTUMsT0FBTixDQUFjQyxRQUF6QztBQUNEO0FBVE0sQ0FBUixDOzs7Ozs7Ozs7Ozs7OztrTEFhQ0UsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYTtBQUNYQyxhQUFPQyxlQURJO0FBRVhDLGdCQUFVQyxpQkFGQztBQUdYQyxnQkFBVUQsaUJBSEM7QUFJWFosWUFBTWMsY0FKSztBQUtYQyxhQUFPQyxlQUxJO0FBTVhDLGFBQU9DO0FBTkksSyxRQVNiQyxNLEdBQVMsQ0FBQ0MsY0FBRCxDLFFBRVRDLEksR0FBTztBQUNMQyxhQUFPLEVBREYsRUFDTztBQUNaQyxnQkFBVSxFQUZMLEVBRVU7QUFDZkMsZ0JBQVUsRUFITCxFQUdVO0FBQ2ZDLGVBQVM7QUFKSixLLFFBT1BDLFEsR0FBVztBQUNUQyxTQURTLGlCQUNGLENBQ047QUFGUSxLLFFBS1hDLE8sR0FBVTtBQUNSQyxlQURRLHFCQUNHQyxDQURILEVBQ007QUFDWmpDLGdCQUFRQyxHQUFSLENBQVlnQyxDQUFaLEVBRFksQ0FDRztBQUNmakMsZ0JBQVFDLEdBQVIsQ0FBWSxLQUFLMkIsT0FBakI7QUFDRDtBQUpPLEs7Ozs7OzhCQU1DO0FBQ1QsVUFBTU0sT0FBTyxJQUFiO0FBQ0FDLFNBQUdDLE9BQUgsQ0FBVztBQUNUQyxhQUFLLG1EQURJO0FBRVRiLGNBQU0sRUFGRztBQUlUYyxnQkFBUTtBQUNOLDBCQUFnQixrQkFEVixDQUM2QjtBQUQ3QixTQUpDO0FBT1RDLGVBUFMsbUJBT0FDLEdBUEEsRUFPSztBQUNaeEMsa0JBQVFDLEdBQVIsQ0FBWSxnQkFBWixFQUE4QnVDLEdBQTlCOztBQUVBTixlQUFLVCxLQUFMLEdBQWFlLElBQUloQixJQUFqQjtBQUNBVSxlQUFLUixRQUFMLEdBQWdCYyxJQUFJaEIsSUFBSixDQUFTQSxJQUF6QjtBQUNBVSxlQUFLUCxRQUFMLEdBQWdCYSxJQUFJaEIsSUFBSixDQUFTQSxJQUFULENBQWMsQ0FBZCxDQUFoQjtBQUNBeEIsa0JBQVFDLEdBQVIsQ0FBWWlDLEtBQUtQLFFBQWpCO0FBQ0EzQixrQkFBUUMsR0FBUixDQUFZaUMsS0FBS1IsUUFBakI7QUFDQTtBQUNBO0FBQ0QsU0FqQlE7QUFrQlRlLFlBbEJTLGdCQWtCSEMsQ0FsQkcsRUFrQkE7QUFDUDFDLGtCQUFRQyxHQUFSLENBQVksZ0JBQVosRUFBOEJ5QyxDQUE5QjtBQUNEO0FBcEJRLE9BQVg7QUFzQkExQyxjQUFRQyxHQUFSLENBQVksS0FBS3dCLEtBQWpCO0FBQ0Q7Ozs2QkFDUTtBQUNQLFdBQUtXLE9BQUw7QUFDRDs7OztFQTdEK0JPLGVBQUtDLEk7a0JBQWxCekMsSSIsImZpbGUiOiJsaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICd3ZXB5LXJlZHV4J1xuICBpbXBvcnQgUGFuZWwgZnJvbSAnQC9jb21wb25lbnRzL3BhbmVsJyAvLyBhbGlhcyBleGFtcGxlXG4gIGltcG9ydCBDb3VudGVyIGZyb20gJ2NvdW50ZXInIC8vIGFsaWFzIGV4YW1wbGVcbiAgaW1wb3J0IExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9saXN0JyAvLyBhbGlhc0ZpZWxkcyBleGFtcGxlXG4gIGltcG9ydCBtb2R1bGVBIGZyb20gJ21vZHVsZS1hJyAvLyBhbGlhc0ZpZWxkcyBpZ25vcmUgbW9kdWxlIGV4YW1wbGVcbiAgaW1wb3J0IEdyb3VwIGZyb20gJy4uL2NvbXBvbmVudHMvZ3JvdXAnXG4gIGltcG9ydCBUb2FzdCBmcm9tICd3ZXB5LWNvbS10b2FzdCdcbiAgaW1wb3J0IHRlc3RNaXhpbiBmcm9tICcuLi9taXhpbnMvdGVzdCdcblxuICBjb25zb2xlLmxvZygnbW9kdWxlQSBpZ25vcmVkOiAnLCBtb2R1bGVBKSAvLyA9PiBtb2R1bGVBIGlnbm9yZWQ6IHt9XG5cbiAgQGNvbm5lY3Qoe1xuICAgIG51bSAoc3RhdGUpIHtcbiAgICAgIHJldHVybiBzdGF0ZS5jb3VudGVyLm51bVxuICAgIH0sXG4gICAgYXN5bmNOdW0gKHN0YXRlKSB7XG4gICAgICByZXR1cm4gc3RhdGUuY291bnRlci5hc3luY051bVxuICAgIH0sXG4gICAgc3VtTnVtIChzdGF0ZSkge1xuICAgICAgcmV0dXJuIHN0YXRlLmNvdW50ZXIubnVtICsgc3RhdGUuY291bnRlci5hc3luY051bVxuICAgIH1cbiAgfSlcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBsaXN0IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAndGVzdCdcbiAgICB9XG4gICAgY29tcG9uZW50cyA9IHtcbiAgICAgIHBhbmVsOiBQYW5lbCxcbiAgICAgIGNvdW50ZXIxOiBDb3VudGVyLFxuICAgICAgY291bnRlcjI6IENvdW50ZXIsXG4gICAgICBsaXN0OiBMaXN0LFxuICAgICAgZ3JvdXA6IEdyb3VwLFxuICAgICAgdG9hc3Q6IFRvYXN0XG4gICAgfVxuXG4gICAgbWl4aW5zID0gW3Rlc3RNaXhpbl1cblxuICAgIGRhdGEgPSB7XG4gICAgICBkYXRhczoge30sICAvLyDmiYDmnInkv6Hmga9cbiAgICAgIGRhdGFzQXJyOiBbXSwgIC8vIOacquadpeWHoOaXpeWkqeawlOaVsOe7hFxuICAgICAgb25seWRhdGE6IHt9LCAgLy8g5pCc57Si5Z+O5biC5L+h5oGvXG4gICAgICBtb3ZpZWRkOiAnJ1xuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgICAgbm93ICgpIHtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgc2hvd01vdmllIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpIC8vIOi/meagt+WwseWPr+S7peiOt+WPluWIsGRhdGHlsZ7mgKfnu5HlrprnmoTlr7nosaFcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5tb3ZpZWRkKVxuICAgICAgfVxuICAgIH1cbiAgICByZXF1ZXN0ICgpIHtcbiAgICAgIGNvbnN0IHRoYXQgPSB0aGlzXG4gICAgICB3eC5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cudGlhbnFpYXBpLmNvbS9hcGkvP3ZlcnNpb249djEmY2l0eT3mrabmsYknLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgIH0sXG4gICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgLy8g6buY6K6k5YC8XG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXF1ZXN0IGZhaWw6ICcsIHJlcylcblxuICAgICAgICAgIHRoYXQuZGF0YXMgPSByZXMuZGF0YVxuICAgICAgICAgIHRoYXQuZGF0YXNBcnIgPSByZXMuZGF0YS5kYXRhXG4gICAgICAgICAgdGhhdC5vbmx5ZGF0YSA9IHJlcy5kYXRhLmRhdGFbMF1cbiAgICAgICAgICBjb25zb2xlLmxvZyh0aGF0Lm9ubHlkYXRhKVxuICAgICAgICAgIGNvbnNvbGUubG9nKHRoYXQuZGF0YXNBcnIpXG4gICAgICAgICAgLy8gcmV0dXJuIGRhdGF3XG4gICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5kYXQpXG4gICAgICAgIH0sXG4gICAgICAgIGZhaWwgKHApIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygncmVxdWVzdCBmYWlsOiAnLCBwKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgY29uc29sZS5sb2codGhpcy5kYXRhcylcbiAgICB9XG4gICAgb25Mb2FkKCkge1xuICAgICAgdGhpcy5yZXF1ZXN0KClcbiAgICB9XG4gIH1cbiJdfQ==