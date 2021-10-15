"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.xmsBasicUtil = e() : t.xmsBasicUtil = e();
}(undefined, function () {
  return function () {
    "use strict";
    var t = { d: function d(e, n) {
        for (var r in n) {
          t.o(n, r) && !t.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: n[r] });
        }
      }, o: function o(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }, r: function r(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
      } },
        e = {};t.r(e), t.d(e, { default: function _default() {
        return h;
      } });var n = { SDF_DATE: "yyyy-MM-dd", SDF_DATE_SECOND: "yyyy-MM-dd HH:mm:ss", SDF_DATE_MINUTE: "yyyy-MM-dd HH:mm", SDF_DATE_MONTH_MINUTE: "MM-dd HH:mm", SDF_HOUR_TIME: "HH:mm:ss", SDF_DATE_CN: "yyyy年MM月dd日" };function r(t, e) {
      return e = e || n.SDF_DATE, t || (t = new Date()), t.format(e);
    }function o(t) {
      var e = new Date();if (t) {
        if ("number" != typeof t || 13 !== t.toString().length) throw "timestamp\u683C\u5F0F\u4E0D\u5BF9,\u5FC5\u987B\u4E3A13\u4F4D\u7684\u6570\u5B57\uFF0C\u7C7B\u4F3C1614049156378,\u5F53\u524D\u53C2\u6570\u4E3A" + t;e = new Date(t);
      }return e;
    }function i(t, e) {
      return e = e || n.SDF_DATE_SECOND, r(o(t), e);
    }function u(t) {
      var e = new Date();if (t) try {
        var _n = (t = t.toString()).substring(0, 4),
            _r = t.substring(4, 6),
            _o = t.substring(6, 8),
            _i = t.substring(8, 10),
            _u = t.substring(10, 12),
            _a = t.substring(12, 14);e = new Date(_n, _r - 1, _o, _i, _u, _a);
      } catch (e) {
        throw "time\u683C\u5F0F\u4E0D\u5BF9,\u65F6\u95F4\u683C\u5F0F\u7C7B\u4F3C:20210106101605570,\u5F53\u524D\u53C2\u6570\u4E3A" + t;
      }return e;
    }function a(t, e) {
      return e = e || n.SDF_DATE_SECOND, r(u(t), e);
    }function c(t, e, n) {
      return e && t.setMonth(t.getMonth() + e), r(t, n);
    }function s(t, e, n) {
      return e && t.setDate(t.getDate() + e), r(t, n);
    }function l(t, e, n) {
      var r = 0,
          o = t.toString(),
          i = e.toString();try {
        r += o.split(".")[1].length;
      } catch (t) {}try {
        r += i.split(".")[1].length;
      } catch (t) {}return p(Number(o.replace(".", "")) * Number(i.replace(".", "")) / Math.pow(10, r), n);
    }function m(t, e, n) {
      var r = void 0,
          o = void 0,
          i = 0,
          u = 0;try {
        i = t.toString().split(".")[1].length;
      } catch (t) {}try {
        u = e.toString().split(".")[1].length;
      } catch (t) {}return r = Number(t.toString().replace(".", "")), o = Number(e.toString().replace(".", "")), p(Number(r / o * Math.pow(10, u - i)), n);
    }function p(t, e) {
      return null != e && e >= 0 && (t = Math.round(t * Math.pow(10, e)) / Math.pow(10, e)), t;
    }Date.prototype.format = function (t) {
      var e = { "M+": this.getMonth() + 1, "d+": this.getDate(), "H+": this.getHours(), "m+": this.getMinutes(), "s+": this.getSeconds(), "q+": Math.floor((this.getMonth() + 3) / 3), S: this.getMilliseconds() };/(y+)/i.test(t) && (t = t.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)));for (var _n2 in e) {
        new RegExp("(" + _n2 + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[_n2] : ("00" + e[_n2]).substr(("" + e[_n2]).length)));
      }return t;
    };var f = { debounce: function debounce(t, e) {
        var n = void 0;return function () {
          var r = this,
              o = arguments;n && clearTimeout(n), n = setTimeout(function () {
            t.apply(r, o);
          }, e);
        };
      }, throttle: function throttle(t, e) {
        var n = 0;return function () {
          var r = this,
              o = arguments,
              i = new Date();i - n > e && (t.apply(r, o), n = i);
        };
      } },
        h = { dateFormat: { DATE_FORMAT: n, dateFormat: r, dateAddMonth: c, dateAddDay: s, timestampDate: o, timestampFormat: i, timestampToDate: function timestampToDate(t) {
          return i(t, n.SDF_DATE);
        }, timestampToDateTime: function timestampToDateTime(t) {
          return i(t, n.SDF_DATE_SECOND);
        }, timestampAddMonth: function timestampAddMonth(t, e, n) {
          return c(o(t), e, n);
        }, timestampAddDay: function timestampAddDay(t, e, n) {
          return s(o(t), e, n);
        }, timeDate: u, timeFormat: a, timeToDate: function timeToDate(t) {
          return a(t, n.SDF_DATE);
        }, timeToDateTime: function timeToDateTime(t) {
          return a(t, n.SDF_DATE_SECOND);
        }, timeAddMonth: function timeAddMonth(t, e, n) {
          return c(u(t), e, n);
        }, timeAddDay: function timeAddDay(t, e, n) {
          return s(u(t), e, n);
        } }, mathUtil: { accMul: l, accDiv: m, accAdd: function accAdd(t, e) {
          var n, r, o;try {
            n = t.toString().split(".")[1].length;
          } catch (t) {
            n = 0;
          }try {
            r = e.toString().split(".")[1].length;
          } catch (t) {
            r = 0;
          }return m(l(t, o = Math.pow(10, Math.max(n, r))) + l(e, o), o, 2);
        }, accSub: function accSub(t, e) {
          var n, r, o;try {
            n = t.toString().split(".")[1].length;
          } catch (t) {
            n = 0;
          }try {
            r = e.toString().split(".")[1].length;
          } catch (t) {
            r = 0;
          }return m(t * (o = Math.pow(10, Math.max(n, r))) - e * o, o, 2);
        }, toFixed: function toFixed(t, e) {
          var n = Math.pow(10, e),
              r = l(t, n) + .5;return r = parseInt(r, 10) / n, r;
        }, binaryFloatToDecimal: function binaryFloatToDecimal(t, e) {
          if (e = e || 2, Number.isInteger(t)) return parseInt(t, e);var n = t.toString().split("."),
              r = n[0],
              o = parseInt(r, e),
              i = function (t, e) {
            return t.map(function (t, n) {
              return Number(t) * Math.pow(e, -(n + 1));
            });
          }(n[1].split(""), e);return o + i.reduce(function (t, e) {
            return t + e;
          }, 0);
        } }, funcUtil: f };return e;
  }();
});
