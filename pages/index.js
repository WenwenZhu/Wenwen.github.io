'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;
// import Panel from '@/components/panel' // alias example
// import Counter from 'counter' // alias example
// import List from '../components/list' // aliasFields example
// aliasFields ignore module example
// import Group from '../components/group'


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyRedux = require('./../npm/wepy-redux/lib/index.js');

var _moduleA = {};

var _moduleA2 = _interopRequireDefault(_moduleA);

var _wepyComToast = require('./../npm/wepy-com-toast/toast.js');

var _wepyComToast2 = _interopRequireDefault(_wepyComToast);

var _test = require('./../mixins/test.js');

var _test2 = _interopRequireDefault(_test);

var _myWpyPop = require('./../npm/my-wpy-pop/Popup.js');

var _myWpyPop2 = _interopRequireDefault(_myWpyPop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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
      navigationBarTitleText: '今日天气',
      navigationBarBackgroundColor: '#fbc8d4'
    }, _this.components = {
      toast: _wepyComToast2.default,
      Popup: _myWpyPop2.default
    }, _this.mixins = [_test2.default], _this.data = {
      datas: {}, // 所有信息
      datasArr: [], // 未来几日天气数组
      onlydata: {}, // 搜索城市信息
      mov: 7,
      isShow: false,
      time: null,
      icon60: '',
      bg: null,
      bgstyle: 'to top, #9795f0 0%, #fbc8d4 100%',
      cboxstyle: null
    }, _this.computed = {
      now: function now() {
        return +new Date();
      }
    }, _this.methods = {
      tap: function tap() {},
      seach: function seach() {
        console.log(this.mov);
        this.requestFun(this.mov);
      },
      bindTestInput: function bindTestInput(e) {
        this.mov = e.detail.value;
      },
      cellus: function cellus() {
        wx.showToast({
          title: 'qq:3523401442',
          icon: 'success',
          duration: 3000
        });
      },
      upskin: function upskin() {
        var that = this;
        var s1 = '#' + Math.floor(Math.random() * 0xffffff).toString(16);
        var s2 = '#' + Math.floor(Math.random() * 0xffffff).toString(16);
        that.bgstyle = 'to top, ' + s1 + ' 0%, ' + s2 + ' 100%';
        that.cboxstyle = s2;
        wx.setNavigationBarColor({ frontColor: '#ffffff', backgroundColor: s2 });
      },
      openAlert: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var res;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _wepy2.default.showModal({
                    content: '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',
                    showCancel: false
                  });

                case 2:
                  res = _context.sent;


                  if (res.confirm) {
                    console.log('用户点击确定');
                  }

                case 4:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function openAlert() {
          return _ref2.apply(this, arguments);
        }

        return openAlert;
      }()
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'share',
    value: function share() {
      wx.getShareInfo({
        success: function success(res) {
          console.log(res);
        }
      });
    }
  }, {
    key: 'requestFun',
    value: function requestFun(v) {
      var that = this;
      console.log(typeof v === 'undefined' ? 'undefined' : _typeof(v));
      if (!isNaN(v)) {
        if (v === '1874') {
          that.bgstyle = 'to top, #fbed96 0%,  #abecd6 100%';
          that.cboxstyle = '#abecd6';
          wx.setNavigationBarColor({ frontColor: '#ffffff', backgroundColor: '#abecd6' });
        } else if (v === '1026') {
          that.bgstyle = 'to top, #a8edea 0%, #fed6e3 100%';
          that.cboxstyle = '#fed6e3';
          wx.setNavigationBarColor({ frontColor: '#ffffff', backgroundColor: '#fed6e3' });
        } else if (v === '0') {
          that.bgstyle = 'to top, #9795f0 0%, #fbc8d4 100%';
          that.cboxstyle = '#fbc8d4';
          wx.setNavigationBarColor({ frontColor: '#ffffff', backgroundColor: '#fbc8d4' });
        } else {
          var s1 = '#' + Math.floor(Math.random() * 0xffffff).toString(16);
          var s2 = '#' + Math.floor(Math.random() * 0xffffff).toString(16);
          that.bgstyle = 'to top, ' + s1 + ' 0%, ' + s2 + ' 100%';
          that.cboxstyle = s2;
          wx.setNavigationBarColor({ frontColor: '#ffffff', backgroundColor: s2 });
          // that.upskin()
        }
        wx.showToast({
          title: '输入数字0还原皮肤',
          icon: 'loading',
          duration: 1500
        });
        return;
      }
      wx.request({
        url: 'https://www.tianqiapi.com/api/?version=v1&city=' + v,
        data: {},
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function success(res) {
          console.log('request fail1: ', res);
          if (that.mov === '北京' || that.mov === '北京市') {
            that.datas = res.data;
            that.datasArr = res.data.data;
            that.onlydata = res.data.data[0];
            that.time = new Date().toLocaleTimeString();
          } else {
            if (res.data.city === '北京') {
              console.log('请输入正确的城市');
              wx.showToast({
                title: '暂无数据',
                icon: 'loading',
                duration: 1500
              });
            } else {
              that.datas = res.data;
              that.datasArr = res.data.data;
              that.onlydata = res.data.data[0];
              that.time = new Date().toLocaleTimeString();
            }
          }
          that.$apply();
        },
        fail: function fail(p) {
          console.log('request fail22: ', p);
        }
      });
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {
      var _this2 = this;

      var thats = this;
      wx.getLocation({
        success: function success(res) {
          console.log(res);
          wx.request({
            url: 'https://api.map.baidu.com/geocoder/v2/?ak=Ya2nSaqjT3vNrIgba1v4nfWzSxGdtgZD&location=' + res.latitude + ',' + res.longitude + '&output=json',
            data: {},
            dataType: 'jsonp',
            callback: 'BMap._rd._cbk43398',
            header: {
              'content-type': 'application/json' // 默认值
            },
            success: function success(res) {
              console.log('request: ', res);
              var obj = JSON.parse(res.data).result.addressComponent.city.replace('市', '');
              console.log(obj);
              thats.requestFun(obj);
            },
            fail: function fail(p) {
              console.log('request fail: ', p);
            }
          });
        },
        fail: function fail(res) {
          thats.mov = '北京';
          _this2.requestFun('北京');
          var reo = _wepy2.default.showModal({
            content: '暂无授权，无法获取当前位置，稍后可到设置中更改',
            showCancel: false
          });
          if (reo.confirm) {}
        }
      });
    }
  }]);

  return Index;
}(_wepy2.default.page)) || _class);

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJtb2R1bGVBIiwiSW5kZXgiLCJudW0iLCJzdGF0ZSIsImNvdW50ZXIiLCJhc3luY051bSIsInN1bU51bSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwiY29tcG9uZW50cyIsInRvYXN0IiwiVG9hc3QiLCJQb3B1cCIsIm1peGlucyIsInRlc3RNaXhpbiIsImRhdGEiLCJkYXRhcyIsImRhdGFzQXJyIiwib25seWRhdGEiLCJtb3YiLCJpc1Nob3ciLCJ0aW1lIiwiaWNvbjYwIiwiYmciLCJiZ3N0eWxlIiwiY2JveHN0eWxlIiwiY29tcHV0ZWQiLCJub3ciLCJEYXRlIiwibWV0aG9kcyIsInRhcCIsInNlYWNoIiwicmVxdWVzdEZ1biIsImJpbmRUZXN0SW5wdXQiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJjZWxsdXMiLCJ3eCIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsImR1cmF0aW9uIiwidXBza2luIiwidGhhdCIsInMxIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidG9TdHJpbmciLCJzMiIsInNldE5hdmlnYXRpb25CYXJDb2xvciIsImZyb250Q29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJvcGVuQWxlcnQiLCJ3ZXB5Iiwic2hvd01vZGFsIiwiY29udGVudCIsInNob3dDYW5jZWwiLCJyZXMiLCJjb25maXJtIiwiZ2V0U2hhcmVJbmZvIiwic3VjY2VzcyIsInYiLCJpc05hTiIsInJlcXVlc3QiLCJ1cmwiLCJoZWFkZXIiLCJ0b0xvY2FsZVRpbWVTdHJpbmciLCJjaXR5IiwiJGFwcGx5IiwiZmFpbCIsInAiLCJ0aGF0cyIsImdldExvY2F0aW9uIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJkYXRhVHlwZSIsImNhbGxiYWNrIiwib2JqIiwiSlNPTiIsInBhcnNlIiwicmVzdWx0IiwiYWRkcmVzc0NvbXBvbmVu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S0FBTCxDQUFXdEIsSUFBSTVDLElBQWYsRUFBcUJtRSxNQUFyQixDQUE0QkMsZ0JBQTVCLENBQTZDZCxJQUE3QyxDQUFrRGUsT0FBbEQsQ0FBMEQsR0FBMUQsRUFBK0QsRUFBL0QsQ0FBWjtBQUNBdkYsc0JBQVFDLEdBQVIsQ0FBWWlGLEdBQVo7QUFDQU4sb0JBQU16QyxVQUFOLENBQWlCK0MsR0FBakI7QUFDRCxhQWJRO0FBY1RSLGdCQWRTLGdCQWNIQyxDQWRHLEVBY0E7QUFDUDNFLHNCQUFRQyxHQUFSLENBQVksZ0JBQVosRUFBOEIwRSxDQUE5QjtBQUNEO0FBaEJRLFdBQVg7QUFrQkQsU0FyQlk7QUFzQmJELGNBQU0sbUJBQU87QUFDWEUsZ0JBQU10RCxHQUFOLEdBQVksSUFBWjtBQUNBLGlCQUFLYSxVQUFMLENBQWdCLElBQWhCO0FBQ0EsY0FBSXFELE1BQU05QixlQUFLQyxTQUFMLENBQWU7QUFDdkJDLHFCQUFTLHlCQURjO0FBRXZCQyx3QkFBWTtBQUZXLFdBQWYsQ0FBVjtBQUlBLGNBQUkyQixJQUFJekIsT0FBUixFQUFpQixDQUVoQjtBQUNGO0FBaENZLE9BQWY7QUFrQ0Q7Ozs7RUFqTGdDTCxlQUFLK0IsSTtrQkFBbkJ0RixLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICd3ZXB5LXJlZHV4J1xuICAvLyBpbXBvcnQgUGFuZWwgZnJvbSAnQC9jb21wb25lbnRzL3BhbmVsJyAvLyBhbGlhcyBleGFtcGxlXG4gIC8vIGltcG9ydCBDb3VudGVyIGZyb20gJ2NvdW50ZXInIC8vIGFsaWFzIGV4YW1wbGVcbiAgLy8gaW1wb3J0IExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9saXN0JyAvLyBhbGlhc0ZpZWxkcyBleGFtcGxlXG4gIGltcG9ydCBtb2R1bGVBIGZyb20gJ21vZHVsZS1hJyAvLyBhbGlhc0ZpZWxkcyBpZ25vcmUgbW9kdWxlIGV4YW1wbGVcbiAgLy8gaW1wb3J0IEdyb3VwIGZyb20gJy4uL2NvbXBvbmVudHMvZ3JvdXAnXG4gIGltcG9ydCBUb2FzdCBmcm9tICd3ZXB5LWNvbS10b2FzdCdcbiAgaW1wb3J0IHRlc3RNaXhpbiBmcm9tICcuLi9taXhpbnMvdGVzdCdcbiAgaW1wb3J0IFBvcHVwIGZyb20gJ215LXdweS1wb3AnXG5cbiAgY29uc29sZS5sb2coJ21vZHVsZUEgaWdub3JlZDogJywgbW9kdWxlQSkgLy8gPT4gbW9kdWxlQSBpZ25vcmVkOiB7fVxuXG4gIEBjb25uZWN0KHtcbiAgICBudW0gKHN0YXRlKSB7XG4gICAgICByZXR1cm4gc3RhdGUuY291bnRlci5udW1cbiAgICB9LFxuICAgIGFzeW5jTnVtIChzdGF0ZSkge1xuICAgICAgcmV0dXJuIHN0YXRlLmNvdW50ZXIuYXN5bmNOdW1cbiAgICB9LFxuICAgIHN1bU51bSAoc3RhdGUpIHtcbiAgICAgIHJldHVybiBzdGF0ZS5jb3VudGVyLm51bSArIHN0YXRlLmNvdW50ZXIuYXN5bmNOdW1cbiAgICB9XG4gIH0pXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfku4rml6XlpKnmsJQnLFxuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNmYmM4ZDQnXG4gICAgfVxuICAgIGNvbXBvbmVudHMgPSB7XG4gICAgICB0b2FzdDogVG9hc3QsXG4gICAgICBQb3B1cDogUG9wdXBcbiAgICB9XG5cbiAgICBtaXhpbnMgPSBbdGVzdE1peGluXVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIGRhdGFzOiB7fSwgIC8vIOaJgOacieS/oeaBr1xuICAgICAgZGF0YXNBcnI6IFtdLCAgLy8g5pyq5p2l5Yeg5pel5aSp5rCU5pWw57uEXG4gICAgICBvbmx5ZGF0YToge30sICAvLyDmkJzntKLln47luILkv6Hmga9cbiAgICAgIG1vdjogNyxcbiAgICAgIGlzU2hvdzogZmFsc2UsXG4gICAgICB0aW1lOiBudWxsLFxuICAgICAgaWNvbjYwOiAnJyxcbiAgICAgIGJnOiBudWxsLFxuICAgICAgYmdzdHlsZTogJ3RvIHRvcCwgIzk3OTVmMCAwJSwgI2ZiYzhkNCAxMDAlJyxcbiAgICAgIGNib3hzdHlsZTogbnVsbFxuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgICAgbm93ICgpIHtcbiAgICAgICAgcmV0dXJuICtuZXcgRGF0ZSgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHRhcCAoKSB7XG4gICAgICB9LFxuICAgICAgc2VhY2goKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubW92KVxuICAgICAgICB0aGlzLnJlcXVlc3RGdW4odGhpcy5tb3YpXG4gICAgICB9LFxuICAgICAgYmluZFRlc3RJbnB1dChlKSB7XG4gICAgICAgIHRoaXMubW92ID0gZS5kZXRhaWwudmFsdWVcbiAgICAgIH0sXG4gICAgICBjZWxsdXMoKSB7XG4gICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgdGl0bGU6ICdxcTozNTIzNDAxNDQyJyxcbiAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgZHVyYXRpb246IDMwMDBcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICB1cHNraW4oKSB7XG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzXG4gICAgICAgIGxldCBzMSA9ICcjJyArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDB4ZmZmZmZmKS50b1N0cmluZygxNilcbiAgICAgICAgbGV0IHMyID0gJyMnICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMHhmZmZmZmYpLnRvU3RyaW5nKDE2KVxuICAgICAgICB0aGF0LmJnc3R5bGUgPSAndG8gdG9wLCAnICsgczEgKyAnIDAlLCAnICsgczIgKyAnIDEwMCUnXG4gICAgICAgIHRoYXQuY2JveHN0eWxlID0gczJcbiAgICAgICAgd3guc2V0TmF2aWdhdGlvbkJhckNvbG9yKHsgZnJvbnRDb2xvcjogJyNmZmZmZmYnLCBiYWNrZ3JvdW5kQ29sb3I6IHMyIH0pXG4gICAgICB9LFxuICAgICAgYXN5bmMgb3BlbkFsZXJ0ICgpIHtcbiAgICAgICAgbGV0IHJlcyA9IGF3YWl0IHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgICBjb250ZW50OiAn5by556qX5YaF5a6577yM5ZGK55+l5b2T5YmN54q25oCB44CB5L+h5oGv5ZKM6Kej5Yaz5pa55rOV77yM5o+P6L+w5paH5a2X5bC96YeP5o6n5Yi25Zyo5LiJ6KGM5YaFJyxcbiAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZVxuICAgICAgICB9KVxuXG4gICAgICAgIGlmIChyZXMuY29uZmlybSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCfnlKjmiLfngrnlh7vnoa7lrponKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHNoYXJlKCkge1xuICAgICAgd3guZ2V0U2hhcmVJbmZvKHtcbiAgICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHJlcXVlc3RGdW4gKHYpIHtcbiAgICAgIGNvbnN0IHRoYXQgPSB0aGlzXG4gICAgICBjb25zb2xlLmxvZyh0eXBlb2YgdilcbiAgICAgIGlmICghaXNOYU4odikpIHtcbiAgICAgICAgaWYgKHYgPT09ICcxODc0Jykge1xuICAgICAgICAgIHRoYXQuYmdzdHlsZSA9ICd0byB0b3AsICNmYmVkOTYgMCUsICAjYWJlY2Q2IDEwMCUnXG4gICAgICAgICAgdGhhdC5jYm94c3R5bGUgPSAnI2FiZWNkNidcbiAgICAgICAgICB3eC5zZXROYXZpZ2F0aW9uQmFyQ29sb3IoeyBmcm9udENvbG9yOiAnI2ZmZmZmZicsIGJhY2tncm91bmRDb2xvcjogJyNhYmVjZDYnIH0pXG4gICAgICAgIH0gZWxzZSBpZiAodiA9PT0gJzEwMjYnKSB7XG4gICAgICAgICAgdGhhdC5iZ3N0eWxlID0gJ3RvIHRvcCwgI2E4ZWRlYSAwJSwgI2ZlZDZlMyAxMDAlJ1xuICAgICAgICAgIHRoYXQuY2JveHN0eWxlID0gJyNmZWQ2ZTMnXG4gICAgICAgICAgd3guc2V0TmF2aWdhdGlvbkJhckNvbG9yKHsgZnJvbnRDb2xvcjogJyNmZmZmZmYnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZmVkNmUzJyB9KVxuICAgICAgICB9IGVsc2UgaWYgKHYgPT09ICcwJykge1xuICAgICAgICAgIHRoYXQuYmdzdHlsZSA9ICd0byB0b3AsICM5Nzk1ZjAgMCUsICNmYmM4ZDQgMTAwJSdcbiAgICAgICAgICB0aGF0LmNib3hzdHlsZSA9ICcjZmJjOGQ0J1xuICAgICAgICAgIHd4LnNldE5hdmlnYXRpb25CYXJDb2xvcih7IGZyb250Q29sb3I6ICcjZmZmZmZmJywgYmFja2dyb3VuZENvbG9yOiAnI2ZiYzhkNCcgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZXQgczEgPSAnIycgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAweGZmZmZmZikudG9TdHJpbmcoMTYpXG4gICAgICAgICAgbGV0IHMyID0gJyMnICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMHhmZmZmZmYpLnRvU3RyaW5nKDE2KVxuICAgICAgICAgIHRoYXQuYmdzdHlsZSA9ICd0byB0b3AsICcgKyBzMSArICcgMCUsICcgKyBzMiArICcgMTAwJSdcbiAgICAgICAgICB0aGF0LmNib3hzdHlsZSA9IHMyXG4gICAgICAgICAgd3guc2V0TmF2aWdhdGlvbkJhckNvbG9yKHsgZnJvbnRDb2xvcjogJyNmZmZmZmYnLCBiYWNrZ3JvdW5kQ29sb3I6IHMyIH0pXG4gICAgICAgICAgLy8gdGhhdC51cHNraW4oKVxuICAgICAgICB9XG4gICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgdGl0bGU6ICfovpPlhaXmlbDlrZcw6L+Y5Y6f55qu6IKkJyxcbiAgICAgICAgICBpY29uOiAnbG9hZGluZycsXG4gICAgICAgICAgZHVyYXRpb246IDE1MDBcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB3eC5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cudGlhbnFpYXBpLmNvbS9hcGkvP3ZlcnNpb249djEmY2l0eT0nICsgdixcbiAgICAgICAgZGF0YToge1xuICAgICAgICB9LFxuICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIC8vIOm7mOiupOWAvFxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygncmVxdWVzdCBmYWlsMTogJywgcmVzKVxuICAgICAgICAgIGlmICh0aGF0Lm1vdiA9PT0gJ+WMl+S6rCcgfHwgdGhhdC5tb3YgPT09ICfljJfkuqzluIInKSB7XG4gICAgICAgICAgICB0aGF0LmRhdGFzID0gcmVzLmRhdGFcbiAgICAgICAgICAgIHRoYXQuZGF0YXNBcnIgPSByZXMuZGF0YS5kYXRhXG4gICAgICAgICAgICB0aGF0Lm9ubHlkYXRhID0gcmVzLmRhdGEuZGF0YVswXVxuICAgICAgICAgICAgdGhhdC50aW1lID0gbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAocmVzLmRhdGEuY2l0eSA9PT0gJ+WMl+S6rCcpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+ivt+i+k+WFpeato+ehrueahOWfjuW4gicpXG4gICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfmmoLml6DmlbDmja4nLFxuICAgICAgICAgICAgICAgIGljb246ICdsb2FkaW5nJyxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTUwMFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhhdC5kYXRhcyA9IHJlcy5kYXRhXG4gICAgICAgICAgICAgIHRoYXQuZGF0YXNBcnIgPSByZXMuZGF0YS5kYXRhXG4gICAgICAgICAgICAgIHRoYXQub25seWRhdGEgPSByZXMuZGF0YS5kYXRhWzBdXG4gICAgICAgICAgICAgIHRoYXQudGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhhdC4kYXBwbHkoKVxuICAgICAgICB9LFxuICAgICAgICBmYWlsIChwKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3JlcXVlc3QgZmFpbDIyOiAnLCBwKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICBvbkxvYWQoKSB7XG4gICAgICBjb25zdCB0aGF0cyA9IHRoaXNcbiAgICAgIHd4LmdldExvY2F0aW9uKHtcbiAgICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgICAgd3gucmVxdWVzdCh7XG4gICAgICAgICAgICB1cmw6ICdodHRwczovL2FwaS5tYXAuYmFpZHUuY29tL2dlb2NvZGVyL3YyLz9haz1ZYTJuU2FxalQzdk5ySWdiYTF2NG5mV3pTeEdkdGdaRCZsb2NhdGlvbj0nICsgcmVzLmxhdGl0dWRlICsgJywnICsgcmVzLmxvbmdpdHVkZSArICcmb3V0cHV0PWpzb24nLFxuICAgICAgICAgICAgZGF0YToge30sXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb25wJyxcbiAgICAgICAgICAgIGNhbGxiYWNrOiAnQk1hcC5fcmQuX2NiazQzMzk4JyxcbiAgICAgICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIC8vIOm7mOiupOWAvFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmVxdWVzdDogJywgcmVzKVxuICAgICAgICAgICAgICBjb25zdCBvYmogPSBKU09OLnBhcnNlKHJlcy5kYXRhKS5yZXN1bHQuYWRkcmVzc0NvbXBvbmVudC5jaXR5LnJlcGxhY2UoJ+W4gicsICcnKVxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhvYmopXG4gICAgICAgICAgICAgIHRoYXRzLnJlcXVlc3RGdW4ob2JqKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZhaWwgKHApIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlcXVlc3QgZmFpbDogJywgcClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBmYWlsOiByZXMgPT4ge1xuICAgICAgICAgIHRoYXRzLm1vdiA9ICfljJfkuqwnXG4gICAgICAgICAgdGhpcy5yZXF1ZXN0RnVuKCfljJfkuqwnKVxuICAgICAgICAgIGxldCByZW8gPSB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgICBjb250ZW50OiAn5pqC5peg5o6I5p2D77yM5peg5rOV6I635Y+W5b2T5YmN5L2N572u77yM56iN5ZCO5Y+v5Yiw6K6+572u5Lit5pu05pS5JyxcbiAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlXG4gICAgICAgICAgfSlcbiAgICAgICAgICBpZiAocmVvLmNvbmZpcm0pIHtcblxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiJdfQ==