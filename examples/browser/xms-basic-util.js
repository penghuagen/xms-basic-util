"use strict";

var xmsBasicUtil;(function () {
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
      return p;
    } });var n = { SDF_DATE: "yyyy-MM-dd", SDF_DATE_SECOND: "yyyy-MM-dd HH:mm:ss", SDF_DATE_MINUTE: "yyyy-MM-dd HH:mm", SDF_DATE_MONTH_MINUTE: "MM-dd HH:mm", SDF_HOUR_TIME: "HH:mm:ss", SDF_DATE_CN: "yyyy年MM月dd日" };function r(t, e) {
    return e = e || n.SDF_DATE, t || (t = new Date()), t.format(e);
  }function i(t) {
    var e = new Date();if (t) {
      if ("number" != typeof t || 13 !== t.toString().length) throw "timestamp\u683C\u5F0F\u4E0D\u5BF9,\u5FC5\u987B\u4E3A13\u4F4D\u7684\u6570\u5B57\uFF0C\u7C7B\u4F3C1614049156378,\u5F53\u524D\u53C2\u6570\u4E3A" + t;e = new Date(t);
    }return e;
  }function o(t, e) {
    return e = e || n.SDF_DATE_SECOND, r(i(t), e);
  }function a(t) {
    var e = new Date();if (t) try {
      var _n = (t = t.toString()).substring(0, 4),
          _r = t.substring(4, 6),
          _i = t.substring(6, 8),
          _o = t.substring(8, 10),
          _a = t.substring(10, 12),
          _u = t.substring(12, 14);e = new Date(_n, _r - 1, _i, _o, _a, _u);
    } catch (e) {
      throw "time\u683C\u5F0F\u4E0D\u5BF9,\u65F6\u95F4\u683C\u5F0F\u7C7B\u4F3C:20210106101605570,\u5F53\u524D\u53C2\u6570\u4E3A" + t;
    }return e;
  }function u(t, e) {
    return e = e || n.SDF_DATE_SECOND, r(a(t), e);
  }function c(t, e, n) {
    return e && t.setMonth(t.getMonth() + e), r(t, n);
  }function s(t, e, n) {
    return e && t.setDate(t.getDate() + e), r(t, n);
  }function l(t, e, n) {
    var r = 0,
        i = t.toString(),
        o = e.toString();try {
      r += i.split(".")[1].length;
    } catch (t) {}try {
      r += o.split(".")[1].length;
    } catch (t) {}return h(Number(i.replace(".", "")) * Number(o.replace(".", "")) / Math.pow(10, r), n);
  }function m(t, e, n) {
    var r = void 0,
        i = void 0,
        o = 0,
        a = 0;try {
      o = t.toString().split(".")[1].length;
    } catch (t) {}try {
      a = e.toString().split(".")[1].length;
    } catch (t) {}return r = Number(t.toString().replace(".", "")), i = Number(e.toString().replace(".", "")), h(Number(r / i * Math.pow(10, a - o)), n);
  }function h(t, e) {
    return null != e && e >= 0 && (t = Math.round(t * Math.pow(10, e)) / Math.pow(10, e)), t;
  }Date.prototype.format = function (t) {
    var e = { "M+": this.getMonth() + 1, "d+": this.getDate(), "H+": this.getHours(), "m+": this.getMinutes(), "s+": this.getSeconds(), "q+": Math.floor((this.getMonth() + 3) / 3), S: this.getMilliseconds() };/(y+)/i.test(t) && (t = t.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)));for (var _n2 in e) {
      new RegExp("(" + _n2 + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[_n2] : ("00" + e[_n2]).substr(("" + e[_n2]).length)));
    }return t;
  };var p = { dateFormat: { DATE_FORMAT: n, dateFormat: r, dateAddMonth: c, dateAddDay: s, timestampDate: i, timestampFormat: o, timestampToDate: function timestampToDate(t) {
        return o(t, n.SDF_DATE);
      }, timestampToDateTime: function timestampToDateTime(t) {
        return o(t, n.SDF_DATE_SECOND);
      }, timestampAddMonth: function timestampAddMonth(t, e, n) {
        return c(i(t), e, n);
      }, timestampAddDay: function timestampAddDay(t, e, n) {
        return s(i(t), e, n);
      }, timeDate: a, timeFormat: u, timeToDate: function timeToDate(t) {
        return u(t, n.SDF_DATE);
      }, timeToDateTime: function timeToDateTime(t) {
        return u(t, n.SDF_DATE_SECOND);
      }, timeAddMonth: function timeAddMonth(t, e, n) {
        return c(a(t), e, n);
      }, timeAddDay: function timeAddDay(t, e, n) {
        return s(a(t), e, n);
      } }, mathUtil: { accMul: l, accDiv: m, accAdd: function accAdd(t, e) {
        var n, r, i;try {
          n = t.toString().split(".")[1].length;
        } catch (t) {
          n = 0;
        }try {
          r = e.toString().split(".")[1].length;
        } catch (t) {
          r = 0;
        }return m(l(t, i = Math.pow(10, Math.max(n, r))) + l(e, i), i, 2);
      }, accSub: function accSub(t, e) {
        var n, r, i;try {
          n = t.toString().split(".")[1].length;
        } catch (t) {
          n = 0;
        }try {
          r = e.toString().split(".")[1].length;
        } catch (t) {
          r = 0;
        }return m(t * (i = Math.pow(10, Math.max(n, r))) - e * i, i, 2);
      }, toFixed: function toFixed(t, e) {
        var n = Math.pow(10, e),
            r = l(t, n) + .5;return r = parseInt(r, 10) / n, r;
      }, binaryFloatToDecimal: function binaryFloatToDecimal(t, e) {
        if (e = e || 2, Number.isInteger(t)) return parseInt(t, e);var n = t.toString().split("."),
            r = n[0],
            i = parseInt(r, e),
            o = function (t, e) {
          return t.map(function (t, n) {
            return Number(t) * Math.pow(e, -(n + 1));
          });
        }(n[1].split(""), e);return i + o.reduce(function (t, e) {
          return t + e;
        }, 0);
      } }, funcUtil: { debounce: function debounce(t, e) {
        var n = void 0;return function () {
          var r = this,
              i = arguments;n && clearTimeout(n), n = setTimeout(function () {
            t.apply(r, i);
          }, e);
        };
      }, throttle: function throttle(t, e) {
        var n = 0;return function () {
          var r = this,
              i = arguments,
              o = new Date();o - n > e && (t.apply(r, i), n = o);
        };
      } } };xmsBasicUtil = e;
})();
