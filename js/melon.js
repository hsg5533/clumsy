/**
 * melonJS Game Engine v4.0.0
 * http://www.melonjs.org
 * @license {@link http://www.opensource.org/licenses/mit-license.php|MIT}
 * @copyright (C) 2011 - 2016, Olivier Biot, Jason Oster, Aaron McLeod
 */ if (
  ((function () {
    function t() {
      if (!i) {
        if (!document.body) return setTimeout(t, 13);
        for (
          document.removeEventListener &&
            document.removeEventListener("DOMContentLoaded", t, !1),
            window.removeEventListener("load", t, !1);
          n.length;

        )
          n.shift().call(window, []);
        (i = !0),
          "function" == typeof define &&
            define.amd &&
            define("me", [], function () {
              return me;
            });
      }
    }
    window.me = window.me || {};
    var e = !1,
      i = !1,
      n = [];
    (window.onReady = function (r) {
      i
        ? r.call(window, [])
        : (n.push(r),
          e ||
            ("complete" === document.readyState
              ? window.setTimeout(t, 0)
              : (document.addEventListener &&
                  document.addEventListener("DOMContentLoaded", t, !1),
                window.addEventListener("load", t, !1)),
            (e = !0)));
    }),
      !0 !== me.skipAutoInit
        ? window.onReady(function () {
            me.boot();
          })
        : (me.init = function () {
            me.boot(), t();
          }),
      window.throttle ||
        (window.throttle = function (t, e, i) {
          var n,
            r = window.performance.now();
          return (
            "boolean" != typeof e && (e = !1),
            function () {
              var o = window.performance.now(),
                s = o - r,
                a = arguments;
              return t > s
                ? void (
                    !1 === e &&
                    (clearTimeout(n),
                    (n = setTimeout(function () {
                      return (r = o), i.apply(null, a);
                    }, s)))
                  )
                : ((r = o), i.apply(null, a));
            }
          );
        }),
      "undefined" == typeof console &&
        (console = {
          log: function () {},
          info: function () {},
          error: function () {
            alert(Array.prototype.slice.call(arguments).join(", "));
          },
        });
  })(),
  !Function.prototype.bind)
) {
  var Empty = function () {};
  Function.prototype.bind = function (t) {
    var e = this;
    if ("function" != typeof e)
      throw TypeError("Function.prototype.bind called on incompatible " + e);
    var i = Array.prototype.slice.call(arguments, 1),
      n = function () {
        if (this instanceof n) {
          var r = e.apply(
            this,
            i.concat(Array.prototype.slice.call(arguments))
          );
          return Object(r) === r ? r : this;
        }
        return e.apply(t, i.concat(Array.prototype.slice.call(arguments)));
      };
    return (
      e.prototype &&
        ((Empty.prototype = e.prototype),
        (n.prototype = new Empty()),
        (Empty.prototype = null)),
      n
    );
  };
}
if (
  ((Function.prototype.defer = function () {
    return setTimeout(this.bind.apply(this, arguments), 0.01);
  }),
  Object.defineProperty ||
    (Object.defineProperty = function (t, e, i) {
      if (!t.__defineGetter__)
        throw TypeError("Object.defineProperty not supported");
      i.get && t.__defineGetter__(e, i.get),
        i.set && t.__defineSetter__(e, i.set);
    }),
  Object.create ||
    (Object.create = function (t) {
      var e = function () {};
      return (e.prototype = t), new e();
    }),
  Object.is ||
    (Object.is = function (t, e) {
      return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e;
    }),
  Object.assign ||
    (Object.assign = function (t) {
      "use strict";
      if (null == t)
        throw TypeError("Cannot convert undefined or null to object");
      for (var e = Object(t), i = 1; i < arguments.length; i++) {
        var n = arguments[i];
        if (null != n) for (var r in n) n.hasOwnProperty(r) && (e[r] = n[r]);
      }
      return e;
    }),
  (function () {
    function t() {
      function n() {
        return this.init.apply(this, arguments), this;
      }
      for (
        var r = {}, o = Array(arguments.length), s = 0;
        s < arguments.length;
        s++
      )
        o.push(arguments[s]);
      if (
        ((n.prototype = Object.create(this.prototype)),
        o.forEach(function (t) {
          e(n, r, t.__methods__ || t);
        }),
        !("init" in n.prototype))
      )
        throw TypeError("extend: Class is missing a constructor named `init`");
      return (
        Object.defineProperty(n.prototype, "_super", { value: i }),
        Object.defineProperty(n, "__methods__", { value: r }),
        (n.extend = t),
        n
      );
    }
    function e(t, e, i) {
      Object.keys(i).forEach(function (n) {
        if (((e[n] = i[n]), "function" != typeof i[n]))
          throw TypeError("extend: Method `" + n + "` is not a function");
        Object.defineProperty(t.prototype, n, {
          configurable: !0,
          value: i[n],
        });
      });
    }
    function i(t, e, i) {
      return t.prototype[e].apply(this, i);
    }
    var n = function () {
      Object.apply(this, arguments);
    };
    (n.prototype = Object.create(Object.prototype)),
      (n.prototype.constructor = n),
      Object.defineProperty(n, "extend", { value: t }),
      (me.Object = n);
  })(),
  (me.Error = me.Object.extend.bind(Error)({
    init: function (t) {
      (this.name = "me.Error"), (this.message = t);
    },
  })),
  Math.sign ||
    (Math.sign = function (t) {
      return 0 == (t = +t) || isNaN(t) ? t : t > 0 ? 1 : -1;
    }),
  (Number.prototype.clamp = function (t, e) {
    return t > this ? t : this > e ? e : +this;
  }),
  (Number.prototype.random = function (t, e) {
    return e || ((e = t), (t = this)), ~~(Math.random() * (e - t)) + t;
  }),
  (Number.prototype.randomFloat = function (t, e) {
    return e || ((e = t), (t = this)), Math.random() * (e - t) + t;
  }),
  (Number.prototype.weightedRandom = function (t, e) {
    return (
      e || ((e = t), (t = this)), ~~(Math.pow(Math.random(), 2) * (e - t)) + t
    );
  }),
  (Number.prototype.round = function (t, e) {
    t = arguments.length < 2 ? this : t;
    var i = Math.pow(10, e || t || 0);
    return ~~(0.5 + t * i) / i;
  }),
  (Number.prototype.toHex = function () {
    return (
      "0123456789ABCDEF".charAt((this - (this % 16)) >> 4) +
      "0123456789ABCDEF".charAt(this % 16)
    );
  }),
  (Number.prototype.degToRad = function (t) {
    return ((t || this) / 180) * Math.PI;
  }),
  (Number.prototype.radToDeg = function (t) {
    return (t || this) * (180 / Math.PI);
  }),
  String.prototype.trim ||
    String.prototype.trim ||
    (function () {
      var t = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      String.prototype.trim = function () {
        return this.replace(t, "");
      };
    })(),
  String.prototype.trimLeft ||
    (String.prototype.trimLeft = function () {
      return this.replace(/^\s+/, "");
    }),
  String.prototype.trimRight ||
    (String.prototype.trimRight = function () {
      return this.replace(/\s+$/, "");
    }),
  (String.prototype.isNumeric = function () {
    return !isNaN(this) && "" !== this.trim();
  }),
  (String.prototype.isBoolean = function () {
    var t = this.trim();
    return "true" === t || "false" === t;
  }),
  String.prototype.includes ||
    (String.prototype.includes = function () {
      return -1 !== String.prototype.indexOf.apply(this, arguments);
    }),
  (String.prototype.toHex = function () {
    for (var t = "", e = 0; e < this.length; )
      t += this.charCodeAt(e++).toString(16);
    return t;
  }),
  (Array.prototype.remove = function (t) {
    var e = Array.prototype.indexOf.call(this, t);
    return -1 !== e && Array.prototype.splice.call(this, e, 1), this;
  }),
  Array.prototype.forEach ||
    (Array.prototype.forEach = function (t, e) {
      for (var i = 0, n = this.length; n--; i++)
        t.call(e || this, this[i], i, this);
    }),
  Array.isArray ||
    (Array.isArray = function (t) {
      return t instanceof Array;
    }),
  (Array.prototype.random = function (t) {
    return t[(0).random(t.length)];
  }),
  (Array.prototype.weightedRandom = function (t) {
    return t[(0).weightedRandom(t.length)];
  }),
  (me.TypedArray = function (t) {
    var e = 0;
    if (Array.isArray(t)) this.concat(t.slice());
    else {
      if (1 !== arguments.length || "number" != typeof t)
        throw new me.Error(
          "TypedArray polyfill: Unsupported constructor arguments",
          arguments
        );
      for (e = 0; t > e; e++) this.push(0);
    }
  }),
  (me.TypedArray.prototype = Array.prototype),
  (me.TypedArray.prototype.set = function (t, e) {
    if (((e = e || 0), t.length + e > this.length))
      throw new me.Error("TypedArray pollyfill: Buffer overflow in set");
    for (var i = 0; i < t.length; i++, e++) this[e] = t[i];
  }),
  (window.Float32Array = window.Float32Array || me.TypedArray),
  (window.Uint8Array = window.Uint8Array || me.TypedArray),
  (window.Uint16Array = window.Uint16Array || me.TypedArray),
  (window.Uint32Array = window.Uint32Array || me.TypedArray),
  void 0 === window.performance && (window.performance = {}),
  void 0 === Date.now &&
    (Date.now = function () {
      return new Date().getTime();
    }),
  !window.performance.now)
) {
  var timeOffset = Date.now();
  window.performance.timing &&
    window.performance.timing.navigationStart &&
    (timeOffset = window.performance.timing.navigationStart),
    (window.performance.now = function () {
      return Date.now() - timeOffset;
    });
}
!(function (t) {
  "use strict";
  function e(t, e) {
    function n(t) {
      return this && this.constructor === n
        ? ((this._keys = []),
          (this._values = []),
          (this._itp = []),
          (this.objectOnly = e),
          void (t && i.call(this, t)))
        : new n(t);
    }
    return (
      e || y(t, "size", { get: v }), (t.constructor = n), (n.prototype = t), n
    );
  }
  function i(t) {
    this.add
      ? t.forEach(this.add, this)
      : t.forEach(function (t) {
          this.set(t[0], t[1]);
        }, this);
  }
  function n(t) {
    return (
      this.has(t) &&
        (this._keys.splice($, 1),
        this._values.splice($, 1),
        this._itp.forEach(function (t) {
          $ < t[0] && t[0]--;
        })),
      $ > -1
    );
  }
  function r(t) {
    return this.has(t) ? this._values[$] : void 0;
  }
  function o(t, e) {
    if (this.objectOnly && e !== Object(e))
      throw TypeError("Invalid value used as weak collection key");
    if (e != e || 0 === e) for ($ = t.length; $-- && !_(t[$], e); );
    else $ = t.indexOf(e);
    return $ > -1;
  }
  function s(t) {
    return o.call(this, this._values, t);
  }
  function a(t) {
    return o.call(this, this._keys, t);
  }
  function h(t, e) {
    return (
      this.has(t)
        ? (this._values[$] = e)
        : (this._values[this._keys.push(t) - 1] = e),
      this
    );
  }
  function l(t) {
    return this.has(t) || this._values.push(t), this;
  }
  function u() {
    (this._keys || 0).length = this._values.length = 0;
  }
  function c() {
    return g(this._itp, this._keys);
  }
  function d() {
    return g(this._itp, this._values);
  }
  function f() {
    return g(this._itp, this._keys, this._values);
  }
  function p() {
    return g(this._itp, this._values, this._values);
  }
  function g(t, e, i) {
    var n = [0],
      r = !1;
    return (
      t.push(n),
      {
        next: function () {
          var o,
            s = n[0];
          return (
            !r && s < e.length
              ? ((o = i ? [e[s], i[s]] : e[s]), n[0]++)
              : ((r = !0), t.splice(t.indexOf(n), 1)),
            { done: r, value: o }
          );
        },
      }
    );
  }
  function v() {
    return this._values.length;
  }
  function m(t, e) {
    for (var i = this.entries(); ; ) {
      var n = i.next();
      if (n.done) break;
      t.call(e, n.value[1], n.value[0], this);
    }
  }
  var $,
    y = Object.defineProperty,
    _ = Object.is;
  "undefined" == typeof WeakMap &&
    (t.WeakMap = e({ delete: n, clear: u, get: r, has: a, set: h }, !0)),
    ("undefined" != typeof Map &&
      "function" == typeof new Map().values &&
      new Map().values().next) ||
      (t.Map = e({
        delete: n,
        has: a,
        get: r,
        set: h,
        keys: c,
        values: d,
        entries: f,
        forEach: m,
        clear: u,
      })),
    ("undefined" != typeof Set &&
      "function" == typeof new Set().values &&
      new Set().values().next) ||
      (t.Set = e({
        has: s,
        add: l,
        delete: n,
        clear: u,
        keys: d,
        values: d,
        entries: p,
        forEach: m,
      })),
    "undefined" == typeof WeakSet &&
      (t.WeakSet = e({ delete: n, add: l, clear: u, has: s }, !0));
})(
  "undefined" != typeof exports && "undefined" != typeof global
    ? global
    : window
),
  function () {
    "use strict";
    function t(t) {
      return "function" == typeof t || ("object" == typeof t && null !== t);
    }
    function e(t) {
      return "function" == typeof t;
    }
    function i(t) {
      X = t;
    }
    function n(t) {
      Y = t;
    }
    function r() {
      return function () {
        process.nextTick(l);
      };
    }
    function o() {
      return function () {
        U(l);
      };
    }
    function s() {
      var t = 0,
        e = new J(l),
        i = document.createTextNode("");
      return (
        e.observe(i, { characterData: !0 }),
        function () {
          i.data = t = ++t % 2;
        }
      );
    }
    function a() {
      var t = new MessageChannel();
      return (
        (t.port1.onmessage = l),
        function () {
          t.port2.postMessage(0);
        }
      );
    }
    function h() {
      return function () {
        setTimeout(l, 1);
      };
    }
    function l() {
      for (var t, e = 0; W > e; e += 2) {
        (0, tt[e])(tt[e + 1]), (tt[e] = void 0), (tt[e + 1] = void 0);
      }
      W = 0;
    }
    function u() {
      try {
        var t = require("vertx");
        return (U = t.runOnLoop || t.runOnContext), o();
      } catch (e) {
        return h();
      }
    }
    function c(t, e) {
      var i = this,
        n = new this.constructor(f);
      void 0 === n[tn] && O(n);
      var r = i._state;
      if (r) {
        var o = arguments[r - 1];
        Y(function () {
          P(r, n, o, i._result);
        });
      } else E(i, n, t, e);
      return n;
    }
    function d(t) {
      var e = this;
      if (t && "object" == typeof t && t.constructor === e) return t;
      var i = new e(f);
      return x(i, t), i;
    }
    function f() {}
    function p() {
      return TypeError("You cannot resolve a promise with itself");
    }
    function g() {
      return TypeError("A promises callback cannot return that same promise.");
    }
    function v(t) {
      try {
        return t.then;
      } catch (e) {
        return (ta.error = e), ta;
      }
    }
    function m(t, e, i, n) {
      try {
        t.call(e, i, n);
      } catch (r) {
        return r;
      }
    }
    function $(t, e, i) {
      Y(function (t) {
        var n = !1,
          r = m(
            i,
            e,
            function (i) {
              n || ((n = !0), e !== i ? x(t, i) : w(t, i));
            },
            function (e) {
              n || ((n = !0), T(t, e));
            },
            "Settle: " + (t._label || " unknown promise")
          );
        !n && r && ((n = !0), T(t, r));
      }, t);
    }
    function y(t, e) {
      e._state === to
        ? w(t, e._result)
        : e._state === ts
        ? T(t, e._result)
        : E(
            e,
            void 0,
            function (e) {
              x(t, e);
            },
            function (e) {
              T(t, e);
            }
          );
    }
    function _(t, i, n) {
      i.constructor === t.constructor && n === te && constructor.resolve === ti
        ? y(t, i)
        : n === ta
        ? T(t, ta.error)
        : void 0 === n
        ? w(t, i)
        : e(n)
        ? $(t, i, n)
        : w(t, i);
    }
    function x(e, i) {
      e === i ? T(e, p()) : t(i) ? _(e, i, v(i)) : w(e, i);
    }
    function b(t) {
      t._onerror && t._onerror(t._result), A(t);
    }
    function w(t, e) {
      t._state === tr &&
        ((t._result = e),
        (t._state = to),
        0 !== t._subscribers.length && Y(A, t));
    }
    function T(t, e) {
      t._state === tr && ((t._state = ts), (t._result = e), Y(b, t));
    }
    function E(t, e, i, n) {
      var r = t._subscribers,
        o = r.length;
      (t._onerror = null),
        (r[o] = e),
        (r[o + to] = i),
        (r[o + ts] = n),
        0 === o && t._state && Y(A, t);
    }
    function A(t) {
      var e = t._subscribers,
        i = t._state;
      if (0 !== e.length) {
        for (var n, r, o = t._result, s = 0; s < e.length; s += 3)
          (n = e[s]), (r = e[s + i]), n ? P(i, n, r, o) : r(o);
        t._subscribers.length = 0;
      }
    }
    function S() {
      this.error = null;
    }
    function C(t, e) {
      try {
        return t(e);
      } catch (i) {
        return (th.error = i), th;
      }
    }
    function P(t, i, n, r) {
      var o,
        s,
        a,
        h,
        l = e(n);
      if (l) {
        if (
          ((o = C(n, r)) === th
            ? ((h = !0), (s = o.error), (o = null))
            : (a = !0),
          i === o)
        )
          return void T(i, g());
      } else (o = r), (a = !0);
      i._state !== tr ||
        (l && a
          ? x(i, o)
          : h
          ? T(i, s)
          : t === to
          ? w(i, o)
          : t === ts && T(i, o));
    }
    function R(t, e) {
      try {
        e(
          function (e) {
            x(t, e);
          },
          function (e) {
            T(t, e);
          }
        );
      } catch (i) {
        T(t, i);
      }
    }
    function k() {
      return tl++;
    }
    function O(t) {
      (t[tn] = tl++),
        (t._state = void 0),
        (t._result = void 0),
        (t._subscribers = []);
    }
    function B(t) {
      return new tp(this, t).promise;
    }
    function I(t) {
      var e = this;
      return new e(
        H(t)
          ? function (i, n) {
              for (var r = t.length, o = 0; r > o; o++)
                e.resolve(t[o]).then(i, n);
            }
          : function (t, e) {
              e(TypeError("You must pass an array to race."));
            }
      );
    }
    function L(t) {
      var e = this,
        i = new e(f);
      return T(i, t), i;
    }
    function D() {
      throw TypeError(
        "You must pass a resolver function as the first argument to the promise constructor"
      );
    }
    function V() {
      throw TypeError(
        "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
      );
    }
    function z(t) {
      (this[tn] = k()),
        (this._result = this._state = void 0),
        (this._subscribers = []),
        f !== t &&
          ("function" != typeof t && D(), this instanceof z ? R(this, t) : V());
    }
    function M(t, e) {
      (this._instanceConstructor = t),
        (this.promise = new t(f)),
        this.promise[tn] || O(this.promise),
        Array.isArray(e)
          ? ((this._input = e),
            (this.length = e.length),
            (this._remaining = e.length),
            (this._result = Array(this.length)),
            0 === this.length
              ? w(this.promise, this._result)
              : ((this.length = this.length || 0),
                this._enumerate(),
                0 === this._remaining && w(this.promise, this._result)))
          : T(this.promise, F());
    }
    function F() {
      return Error("Array Methods must be provided an Array");
    }
    function N() {
      if ("undefined" != typeof global) e = global;
      else if ("undefined" != typeof self) e = self;
      else
        try {
          e = Function("return this")();
        } catch (t) {
          throw Error(
            "polyfill failed because global object is unavailable in this environment"
          );
        }
      var e,
        i = e.Promise;
      (i &&
        "[object Promise]" === Object.prototype.toString.call(i.resolve()) &&
        !i.cast) ||
        (e.Promise = tf);
    }
    var G,
      U,
      X,
      j,
      H = (G = Array.isArray
        ? Array.isArray
        : function (t) {
            return "[object Array]" === Object.prototype.toString.call(t);
          }),
      W = 0,
      Y = function (t, e) {
        (tt[W] = t), (tt[W + 1] = e), 2 === (W += 2) && (X ? X(l) : j());
      },
      q = "undefined" != typeof window ? window : void 0,
      K = q || {},
      J = K.MutationObserver || K.WebKitMutationObserver,
      Z =
        "undefined" == typeof self &&
        "undefined" != typeof process &&
        "[object process]" === {}.toString.call(process),
      Q =
        "undefined" != typeof Uint8ClampedArray &&
        "undefined" != typeof importScripts &&
        "undefined" != typeof MessageChannel,
      tt = Array(1e3);
    j = Z
      ? r()
      : J
      ? s()
      : Q
      ? a()
      : void 0 === q && "function" == typeof require
      ? u()
      : h();
    var te = c,
      ti = d,
      tn = Math.random().toString(36).substring(16),
      tr = void 0,
      to = 1,
      ts = 2,
      ta = new S(),
      th = new S(),
      tl = 0,
      tu = B,
      tc = I,
      td = L,
      tf = z;
    (z.all = tu),
      (z.race = tc),
      (z.resolve = ti),
      (z.reject = td),
      (z._setScheduler = i),
      (z._setAsap = n),
      (z._asap = Y),
      (z.prototype = {
        constructor: z,
        then: te,
        catch: function (t) {
          return this.then(null, t);
        },
      });
    var tp = M;
    (M.prototype._enumerate = function () {
      for (
        var t = this.length, e = this._input, i = 0;
        this._state === tr && t > i;
        i++
      )
        this._eachEntry(e[i], i);
    }),
      (M.prototype._eachEntry = function (t, e) {
        var i = this._instanceConstructor,
          n = i.resolve;
        if (n === ti) {
          var r = v(t);
          if (r === te && t._state !== tr)
            this._settledAt(t._state, e, t._result);
          else if ("function" != typeof r)
            this._remaining--, (this._result[e] = t);
          else if (i === tf) {
            var o = new i(f);
            _(o, t, r), this._willSettleAt(o, e);
          } else
            this._willSettleAt(
              new i(function (e) {
                e(t);
              }),
              e
            );
        } else this._willSettleAt(n(t), e);
      }),
      (M.prototype._settledAt = function (t, e, i) {
        var n = this.promise;
        n._state === tr &&
          (this._remaining--, t === ts ? T(n, i) : (this._result[e] = i)),
          0 === this._remaining && w(n, this._result);
      }),
      (M.prototype._willSettleAt = function (t, e) {
        var i = this;
        E(
          t,
          void 0,
          function (t) {
            i._settledAt(to, e, t);
          },
          function (t) {
            i._settledAt(ts, e, t);
          }
        );
      });
    var tg = N,
      tv = { Promise: tf, polyfill: tg };
    "function" == typeof define && define.amd
      ? define(function () {
          return tv;
        })
      : "undefined" != typeof module && module.exports
      ? (module.exports = tv)
      : void 0 !== this && (this.ES6Promise = tv),
      tg();
  }.call(this),
  (function () {
    function t() {
      var t = {};
      return (
        document.location.hash &&
          document.location.hash
            .substr(1)
            .split("&")
            .filter(function (t) {
              return "" !== t;
            })
            .forEach(function (e) {
              var i = e.split("="),
                n = i.shift(),
                r = i.join("=");
              t[n] = r || !0;
            }),
        t
      );
    }
    (me.mod = "melonJS"),
      (me.version = "4.0.0"),
      (me.sys = {
        fps: 60,
        updatesPerSecond: 60,
        interpolation: !1,
        scale: null,
        gravity: void 0,
        stopOnAudioError: !0,
        pauseOnBlur: !0,
        resumeOnFocus: !0,
        stopOnBlur: !1,
        preRender: !1,
        checkVersion: function (t, e) {
          e = e || me.version;
          for (
            var i = t.split("."),
              n = e.split("."),
              r = Math.min(i.length, n.length),
              o = 0,
              s = 0;
            r > s && !(o = +i[s] - +n[s]);
            s++
          );
          return o || i.length - n.length;
        },
      });
    var e = !1;
    Object.defineProperty(me, "initialized", {
      get: function () {
        return e;
      },
    }),
      (me.boot = function () {
        e ||
          (me.device._check(),
          me.save._init(),
          (me.game.HASH = t()),
          me.loader.setNocache(me.game.HASH.nocache || !1),
          me.timer.init(),
          me.state.init(),
          me.pool.init(),
          !1 === me.device.isMobile && me.input._enableKeyboardEvent(),
          me.levelDirector.reset(),
          (e = !0));
      });
  })(),
  (function () {
    var t, e, i, n, r, o, s, a, h, l, u, c, d, f;
    me.game =
      ((e = !1),
      (i = !0),
      (n = !1),
      (r = 0),
      (o = 1),
      (s = 0),
      (a = 0),
      (h = 0),
      (l = 1e3 / 60),
      (u = 0),
      (c = null),
      (d = 0),
      (f = null),
      ((t = {}).viewport = null),
      (t.world = null),
      (t.mergeGroup = !0),
      (t.sortOn = "z"),
      (t.tmxRenderer = null),
      (t.onLevelLoaded = function () {}),
      (t.HASH = null),
      (t.init = function (n, r) {
        e ||
          ((n = n || me.video.renderer.getWidth()),
          (r = r || me.video.renderer.getHeight()),
          (t.viewport = new me.Viewport(0, 0, n, r)),
          (t.world = new me.Container(0, 0, n, r)),
          (t.world.name = "rootContainer"),
          (t.world._root = !0),
          me.collision.init(),
          (f = me.video.renderer),
          me.event.publish(me.event.GAME_INIT),
          me.input._translatePointerEvents(),
          (i = !0),
          (e = !0));
      }),
      (t.reset = function () {
        me.collision.quadTree.clear(),
          t.world.destroy(),
          t.viewport && t.viewport.reset(),
          f.reset(),
          me.event.publish(me.event.GAME_RESET),
          t.updateFrameRate();
      }),
      (t.updateFrameRate = function () {
        (r = 0),
          (o = ~~(0.5 + 60 / me.sys.fps)),
          (l = 1e3 / me.sys.updatesPerSecond),
          (s = 0),
          (a = 10 * l),
          (n = me.sys.fps > me.sys.updatesPerSecond);
      }),
      (t.getParentContainer = function (t) {
        return t.ancestor;
      }),
      (t.repaint = function () {
        i = !0;
      }),
      (t.update = function (e) {
        if (++r % o == 0) {
          for (
            r = 0,
              me.timer.update(e),
              me.input._updateGamepads(),
              s += me.timer.getDelta(),
              s = Math.min(s, a),
              u = me.sys.interpolation ? me.timer.getDelta() : l,
              h = me.sys.interpolation ? u : Math.max(u, d);
            s >= h || me.sys.interpolation;

          )
            if (
              ((c = window.performance.now()),
              me.collision.quadTree.clear(),
              me.collision.quadTree.insertContainer(t.world),
              (i = t.world.update(u) || i),
              (i = t.viewport.update(u) || i),
              (me.timer.lastUpdate = window.performance.now()),
              (d = me.timer.lastUpdate - c),
              (s -= h),
              me.sys.interpolation)
            ) {
              s = 0;
              break;
            }
        }
      }),
      (t.draw = function () {
        if (i || n) {
          var e = t.viewport.pos.x + t.viewport.offset.x,
            r = t.viewport.pos.y + t.viewport.offset.y;
          t.world.currentTransform.translate(-e, -r),
            me.video.renderer.clear(),
            t.world.draw(f, t.viewport),
            t.world.currentTransform.translate(e, r),
            t.viewport.draw(f);
        }
        (i = !1), me.video.renderer.flush();
      }),
      t);
  })(),
  (function () {
    var t,
      e,
      i = function (t) {
        return t.substring(0, 1).toUpperCase() + t.substring(1, t.length);
      };
    me.agent =
      ((e = ["ms", "MS", "moz", "webkit", "o"]),
      ((t = {}).prefixed = function (t, n) {
        if (t in (n = n || window)) return n[t];
        var r,
          o = i(t);
        return (
          e.some(function (t) {
            var e = t + o;
            return (r = e in n ? n[e] : void 0);
          }),
          r
        );
      }),
      (t.setPrefixed = function (t, n, r) {
        if (t in (r = r || window)) return void (r[t] = n);
        var o = i(t);
        e.some(function (t) {
          var e = t + o;
          return e in r && ((r[e] = n), !0);
        });
      }),
      t);
  })(),
  (me.device = (function () {
    function t(t) {
      t.reading
        ? ((i.accelerationX = t.reading.accelerationX),
          (i.accelerationY = t.reading.accelerationY),
          (i.accelerationZ = t.reading.accelerationZ))
        : ((i.accelerationX = t.accelerationIncludingGravity.x),
          (i.accelerationY = t.accelerationIncludingGravity.y),
          (i.accelerationZ = t.accelerationIncludingGravity.z));
    }
    function e(t) {
      (i.gamma = t.gamma), (i.beta = t.beta), (i.alpha = t.alpha);
    }
    var i = {},
      n = !1,
      r = !1,
      o = null;
    return (
      (i._check = function () {
        var t, e;
        me.device._detectDevice(),
          me.device.isMobile &&
            !me.device.cocoon &&
            window.document.addEventListener(
              "touchmove",
              function (t) {
                return t.preventDefault(), window.scroll(0, 0), !1;
              },
              !1
            ),
          (me.device.pointerEvent = me.agent.prefixed("PointerEvent", window)),
          (me.device.maxTouchPoints =
            me.agent.prefixed("maxTouchPoints", navigator) || 0),
          (window.gesture = me.agent.prefixed("gesture")),
          (me.device.touch =
            "createTouch" in document ||
            "ontouchstart" in window ||
            me.device.cocoon ||
            (me.device.pointerEvent && me.device.maxTouchPoints > 0)),
          (me.device.hasAccelerometer =
            void 0 !== window.DeviceMotionEvent ||
            (void 0 !== window.Windows &&
              "function" == typeof Windows.Devices.Sensors.Accelerometer)),
          (this.hasPointerLockSupport = me.agent.prefixed(
            "pointerLockElement",
            document
          )),
          this.hasPointerLockSupport &&
            (document.exitPointerLock = me.agent.prefixed(
              "exitPointerLock",
              document
            )),
          window.DeviceOrientationEvent &&
            (me.device.hasDeviceOrientation = !0),
          (this.hasFullscreenSupport =
            me.agent.prefixed("fullscreenEnabled", document) ||
            document.mozFullScreenEnabled),
          (document.exitFullscreen =
            me.agent.prefixed("cancelFullScreen", document) ||
            me.agent.prefixed("exitFullscreen", document)),
          (navigator.vibrate = me.agent.prefixed("vibrate", navigator));
        try {
          i.localStorage = !!window.localStorage;
        } catch (n) {
          i.localStorage = !1;
        }
        window.addEventListener(
          "blur",
          function () {
            me.sys.stopOnBlur && me.state.stop(!0),
              me.sys.pauseOnBlur && me.state.pause(!0);
          },
          !1
        ),
          window.addEventListener(
            "focus",
            function () {
              me.sys.stopOnBlur && me.state.restart(!0),
                me.sys.resumeOnFocus && me.state.resume(!0);
            },
            !1
          ),
          void 0 !== document.hidden
            ? ((t = "hidden"), (e = "visibilitychange"))
            : void 0 !== document.mozHidden
            ? ((t = "mozHidden"), (e = "mozvisibilitychange"))
            : void 0 !== document.msHidden
            ? ((t = "msHidden"), (e = "msvisibilitychange"))
            : void 0 !== document.webkitHidden &&
              ((t = "webkitHidden"), (e = "webkitvisibilitychange")),
          "string" == typeof e &&
            document.addEventListener(
              e,
              function () {
                document[t]
                  ? (me.sys.stopOnBlur && me.state.stop(!0),
                    me.sys.pauseOnBlur && me.state.pause(!0))
                  : (me.sys.stopOnBlur && me.state.restart(!0),
                    me.sys.resumeOnFocus && me.state.resume(!0));
              },
              !1
            );
      }),
      (i._detectDevice = function () {
        (me.device.iOS = me.device.ua.match(/iPhone|iPad|iPod/i) || !1),
          (me.device.android = me.device.ua.match(/Android/i) || !1),
          (me.device.android2 = me.device.ua.match(/Android 2/i) || !1),
          (me.device.wp = me.device.ua.match(/Windows Phone/i) || !1),
          (me.device.BlackBerry = me.device.ua.match(/BlackBerry/i) || !1),
          (me.device.Kindle =
            me.device.ua.match(/Kindle|Silk.*Mobile Safari/i) || !1),
          (me.device.isMobile =
            me.device.ua.match(/Mobi/i) ||
            me.device.iOS ||
            me.device.android ||
            me.device.wp ||
            me.device.BlackBerry ||
            me.device.Kindle ||
            me.device.iOS ||
            !1),
          (me.device.ejecta = void 0 !== window.ejecta),
          (me.device.cocoon = navigator.isCocoonJS || void 0 !== window.Cocoon);
      }),
      (i.ua = navigator.userAgent),
      (i.localStorage = !1),
      (i.hasAccelerometer = !1),
      (i.hasDeviceOrientation = !1),
      (i.hasFullscreenSupport = !1),
      (i.hasPointerLockSupport = !1),
      (i.nativeBase64 = "function" == typeof window.atob),
      (i.maxTouchPoints = 0),
      (i.touch = !1),
      (i.isMobile = !1),
      (i.iOS = !1),
      (i.android = !1),
      (i.android2 = !1),
      (i.ejecta = !1),
      (i.cocoon = !1),
      (i.wp = !1),
      (i.BlackBerry = !1),
      (i.Kindle = !1),
      (i.orientation = 0),
      (i.accelerationX = 0),
      (i.accelerationY = 0),
      (i.accelerationZ = 0),
      (i.gamma = 0),
      (i.beta = 0),
      (i.alpha = 0),
      (i.language =
        navigator.language ||
        navigator.browserLanguage ||
        navigator.userLanguage ||
        "en"),
      (i.requestFullscreen = function (t) {
        this.hasFullscreenSupport &&
          (((t = t || me.video.getWrapper()).requestFullscreen =
            me.agent.prefixed("requestFullscreen", t) ||
            t.mozRequestFullScreen),
          t.requestFullscreen());
      }),
      (i.exitFullscreen = function () {
        this.hasFullscreenSupport && document.exitFullscreen();
      }),
      (i.getPixelRatio = function () {
        if (null === o) {
          var t, e;
          (t =
            void 0 !== me.video.renderer
              ? me.video.renderer.getScreenContext()
              : me.Renderer.prototype.getContext2d(
                  document.createElement("canvas")
                )),
            (o =
              (window.devicePixelRatio || 1) /
              (me.agent.prefixed("backingStorePixelRatio", t) || 1));
        }
        return o;
      }),
      (i.getStorage = function (t) {
        if ("local" === (t = t || "local")) return me.save;
        throw new me.Error("storage type " + t + " not supported");
      }),
      (i.turnOnPointerLock = function () {
        if (this.hasPointerLockSupport) {
          var t = me.video.getWrapper();
          if (me.device.ua.match(/Firefox/i)) {
            var e = function () {
              (me.agent.prefixed("fullscreenElement", document) ||
                document.mozFullScreenElement) === t &&
                (document.removeEventListener("fullscreenchange", e),
                document.removeEventListener("mozfullscreenchange", e),
                (t.requestPointerLock = me.agent.prefixed(
                  "requestPointerLock",
                  t
                )),
                t.requestPointerLock());
            };
            document.addEventListener("fullscreenchange", e, !1),
              document.addEventListener("mozfullscreenchange", e, !1),
              me.device.requestFullscreen();
          } else t.requestPointerLock();
        }
      }),
      (i.turnOffPointerLock = function () {
        this.hasPointerLockSupport && document.exitPointerLock();
      }),
      (i.watchAccelerometer = function () {
        if (me.device.hasAccelerometer) {
          if (!n) {
            if ("undefined" == typeof Windows)
              window.addEventListener("devicemotion", t, !1);
            else {
              var e = Windows.Devices.Sensors.Accelerometer.getDefault();
              if (e) {
                var i = e.minimumReportInterval,
                  r = i >= 16 ? i : 25;
                (e.reportInterval = r),
                  e.addEventListener("readingchanged", t, !1);
              }
            }
            n = !0;
          }
          return !0;
        }
        return !1;
      }),
      (i.unwatchAccelerometer = function () {
        n &&
          ("undefined" == typeof Windows
            ? window.removeEventListener("devicemotion", t, !1)
            : Windows.Device.Sensors.Accelerometer.getDefault().removeEventListener(
                "readingchanged",
                t,
                !1
              ),
          (n = !1));
      }),
      (i.watchDeviceOrientation = function () {
        return (
          me.device.hasDeviceOrientation &&
            !r &&
            (window.addEventListener("deviceorientation", e, !1), (r = !0)),
          !1
        );
      }),
      (i.unwatchDeviceOrientation = function () {
        r && (window.removeEventListener("deviceorientation", e, !1), (r = !1));
      }),
      (i.vibrate = function (t) {
        navigator.vibrate && navigator.vibrate(t);
      }),
      i
    );
  })()),
  Object.defineProperty(me.device, "isFullscreen", {
    get: function () {
      return (
        !!me.device.hasFullscreenSupport &&
        (me.agent.prefixed("fullscreenElement", document) ||
          document.mozFullScreenElement) === me.video.getWrapper()
      );
    },
  }),
  Object.defineProperty(me.device, "sound", {
    get: function () {
      return !Howler.noAudio;
    },
  }),
  (function () {
    var t, e, i, n, r, o, s, a, h, l, u, c;
    me.timer =
      ((t = {}),
      (e = 0),
      (i = 0),
      (n = 0),
      (r = 0),
      (o = 0),
      (s = Math.ceil(1e3 / me.sys.fps)),
      (a = (1e3 / me.sys.fps) * 1.25),
      (h = []),
      (l = 0),
      (u = function (t) {
        for (var e = 0, i = h.length; i > e; e++)
          if (h[e].timerId === t) {
            h.splice(e, 1);
            break;
          }
      }),
      (c = function (t) {
        for (var e = 0, i = h.length; i > e; e++) {
          var n = h[e];
          (n.pauseable && me.state.isPaused()) || (n.elapsed += t),
            n.elapsed >= n.delay &&
              (n.fn.apply(this),
              !0 === n.repeat
                ? (n.elapsed -= n.delay)
                : me.timer.clearTimeout(n.timerId));
        }
      }),
      (t.tick = 1),
      (t.fps = 0),
      (t.lastUpdate = window.performance.now()),
      (t.init = function () {
        t.reset(), (r = n = 0);
      }),
      (t.reset = function () {
        (n = r = window.performance.now()), (o = 0), (i = 0), (e = 0);
      }),
      (t.setTimeout = function (t, e, i) {
        return (
          h.push({
            fn: t,
            delay: e,
            elapsed: 0,
            repeat: !1,
            timerId: ++l,
            pauseable: !0,
          }),
          l
        );
      }),
      (t.setInterval = function (t, e, i) {
        return (
          h.push({
            fn: t,
            delay: e,
            elapsed: 0,
            repeat: !0,
            timerId: ++l,
            pauseable: !0,
          }),
          l
        );
      }),
      (t.clearTimeout = function (t) {
        u.defer(this, t);
      }),
      (t.clearInterval = function (t) {
        u.defer(this, t);
      }),
      (t.getTime = function () {
        return r;
      }),
      (t.getDelta = function () {
        return o;
      }),
      (t.countFPS = function () {
        e++,
          (i += o),
          e % 10 == 0 &&
            ((this.fps = (~~((1e3 * e) / i)).clamp(0, me.sys.fps)),
            (i = 0),
            (e = 0));
      }),
      (t.update = function (e) {
        return (
          (n = r),
          (o = (r = e) - n),
          (t.tick = o > a && me.sys.interpolation ? o / s : 1),
          c(o),
          o
        );
      }),
      t);
  })(),
  (function () {
    var t, e;
    me.pool =
      ((e = {}),
      ((t = {}).init = function () {
        t.register("me.Entity", me.Entity),
          t.register("me.CollectableEntity", me.CollectableEntity),
          t.register("me.LevelEntity", me.LevelEntity),
          t.register("me.Tween", me.Tween, !0),
          t.register("me.Color", me.Color, !0),
          t.register("me.Particle", me.Particle, !0),
          t.register("me.Sprite", me.Sprite),
          t.register("me.Vector2d", me.Vector2d, !0),
          t.register("me.Glyph", me.Glyph, !0),
          t.register("me.Matrix2d", me.Matrix2d, !0);
      }),
      (t.register = function (t, i, n) {
        e[t] = { class: i, pool: n ? [] : void 0 };
      }),
      (t.pull = function (t) {
        for (var i = Array(arguments.length), n = 0; n < arguments.length; n++)
          i[n] = arguments[n];
        var r = e[t];
        if (r) {
          var o,
            s = r.class,
            a = r.pool;
          return (
            a && (o = a.pop())
              ? (i.shift(),
                "function" == typeof o.onResetEvent
                  ? o.onResetEvent.apply(o, i)
                  : o.init.apply(o, i))
              : ((i[0] = s),
                (o = new (s.bind.apply(s, i))()),
                a && (o.className = t)),
            o
          );
        }
        throw new me.Error("Cannot instantiate entity of type '" + t + "'");
      }),
      (t.purge = function () {
        for (var t in e) e[t] && (e[t].pool = []);
      }),
      (t.push = function (t) {
        var i = t.className;
        void 0 !== i && e[i] && e[i].pool.push(t);
      }),
      (t.exists = function (t) {
        return t in e;
      }),
      t);
  })(),
  (me.Vector2d = me.Object.extend({
    init: function (t, e) {
      return this.set(t || 0, e || 0);
    },
    _set: function (t, e) {
      return (this.x = t), (this.y = e), this;
    },
    set: function (t, e) {
      if (t !== +t || e !== +e)
        throw new me.Vector2d.Error("invalid x,y parameters (not a number)");
      return this._set(t, e);
    },
    setZero: function () {
      return this.set(0, 0);
    },
    setV: function (t) {
      return this._set(t.x, t.y);
    },
    add: function (t) {
      return this._set(this.x + t.x, this.y + t.y);
    },
    sub: function (t) {
      return this._set(this.x - t.x, this.y - t.y);
    },
    scale: function (t, e) {
      return this._set(this.x * t, this.y * (void 0 !== e ? e : t));
    },
    scaleV: function (t) {
      return this._set(this.x * t.x, this.y * t.y);
    },
    div: function (t) {
      return this._set(this.x / t, this.y / t);
    },
    abs: function () {
      return this._set(
        this.x < 0 ? -this.x : this.x,
        this.y < 0 ? -this.y : this.y
      );
    },
    clamp: function (t, e) {
      return new me.Vector2d(this.x.clamp(t, e), this.y.clamp(t, e));
    },
    clampSelf: function (t, e) {
      return this._set(this.x.clamp(t, e), this.y.clamp(t, e));
    },
    minV: function (t) {
      return this._set(
        this.x < t.x ? this.x : t.x,
        this.y < t.y ? this.y : t.y
      );
    },
    maxV: function (t) {
      return this._set(
        this.x > t.x ? this.x : t.x,
        this.y > t.y ? this.y : t.y
      );
    },
    floor: function () {
      return new me.Vector2d(Math.floor(this.x), Math.floor(this.y));
    },
    floorSelf: function () {
      return this._set(Math.floor(this.x), Math.floor(this.y));
    },
    ceil: function () {
      return new me.Vector2d(Math.ceil(this.x), Math.ceil(this.y));
    },
    ceilSelf: function () {
      return this._set(Math.ceil(this.x), Math.ceil(this.y));
    },
    negate: function () {
      return new me.Vector2d(-this.x, -this.y);
    },
    negateSelf: function () {
      return this._set(-this.x, -this.y);
    },
    copy: function (t) {
      return this._set(t.x, t.y);
    },
    equals: function (t) {
      return this.x === t.x && this.y === t.y;
    },
    normalize: function () {
      var t = this.length();
      return t > 0 ? this._set(this.x / t, this.y / t) : this;
    },
    perp: function () {
      return this._set(this.y, -this.x);
    },
    rotate: function (t) {
      var e = this.x,
        i = this.y;
      return this._set(
        e * Math.cos(t) - i * Math.sin(t),
        e * Math.sin(t) + i * Math.cos(t)
      );
    },
    dotProduct: function (t) {
      return this.x * t.x + this.y * t.y;
    },
    length2: function () {
      return this.dotProduct(this);
    },
    length: function () {
      return Math.sqrt(this.length2());
    },
    distance: function (t) {
      var e = this.x - t.x,
        i = this.y - t.y;
      return Math.sqrt(e * e + i * i);
    },
    angle: function (t) {
      return Math.acos(
        (this.dotProduct(t) / (this.length() * t.length())).clamp(-1, 1)
      );
    },
    project: function (t) {
      return this.scale(this.dotProduct(t) / t.length2());
    },
    projectN: function (t) {
      return this.scale(this.dotProduct(t));
    },
    clone: function () {
      return new me.Vector2d(this.x, this.y);
    },
    toString: function () {
      return "x:" + this.x + ",y:" + this.y;
    },
  })),
  (me.Vector2d.Error = me.Error.extend({
    init: function (t) {
      me.Error.prototype.init.apply(this, [t]),
        (this.name = "me.Vector2d.Error");
    },
  })),
  (me.Vector3d = me.Object.extend({
    init: function (t, e, i) {
      return this.set(t || 0, e || 0, i || 0);
    },
    _set: function (t, e, i) {
      return (this.x = t), (this.y = e), (this.z = i), this;
    },
    set: function (t, e, i) {
      if (t !== +t || e !== +e || i !== +i)
        throw new me.Vector3d.Error(
          "invalid x, y, z parameters (not a number)"
        );
      return this._set(t, e, i);
    },
    setZero: function () {
      return this.set(0, 0, 0);
    },
    setV: function (t) {
      return this._set(t.x, t.y, void 0 !== t.z ? t.z : this.z);
    },
    add: function (t) {
      return this._set(this.x + t.x, this.y + t.y, this.z + (t.z || 0));
    },
    sub: function (t) {
      return this._set(this.x - t.x, this.y - t.y, this.z - (t.z || 0));
    },
    scale: function (t, e, i) {
      return (
        (e = void 0 !== e ? e : t),
        (i = void 0 !== i ? i : t),
        this._set(this.x * t, this.y * e, this.z * i)
      );
    },
    scaleV: function (t) {
      return this._set(this.x * t.x, this.y * t.y, this.z * (t.z || 1));
    },
    div: function (t) {
      return this._set(this.x / t, this.y / t, this.z / t);
    },
    abs: function () {
      return this._set(
        this.x < 0 ? -this.x : this.x,
        this.y < 0 ? -this.y : this.y,
        this.z < 0 ? -this.Z : this.z
      );
    },
    clamp: function (t, e) {
      return new me.Vector3d(
        this.x.clamp(t, e),
        this.y.clamp(t, e),
        this.z.clamp(t, e)
      );
    },
    clampSelf: function (t, e) {
      return this._set(
        this.x.clamp(t, e),
        this.y.clamp(t, e),
        this.z.clamp(t, e)
      );
    },
    minV: function (t) {
      var e = t.z || 0;
      return this._set(
        this.x < t.x ? this.x : t.x,
        this.y < t.y ? this.y : t.y,
        this.z < e ? this.z : e
      );
    },
    maxV: function (t) {
      var e = t.z || 0;
      return this._set(
        this.x > t.x ? this.x : t.x,
        this.y > t.y ? this.y : t.y,
        this.z > e ? this.z : e
      );
    },
    floor: function () {
      return new me.Vector3d(
        Math.floor(this.x),
        Math.floor(this.y),
        Math.floor(this.z)
      );
    },
    floorSelf: function () {
      return this._set(
        Math.floor(this.x),
        Math.floor(this.y),
        Math.floor(this.z)
      );
    },
    ceil: function () {
      return new me.Vector3d(
        Math.ceil(this.x),
        Math.ceil(this.y),
        Math.ceil(this.z)
      );
    },
    ceilSelf: function () {
      return this._set(Math.ceil(this.x), Math.ceil(this.y), Math.ceil(this.z));
    },
    negate: function () {
      return new me.Vector3d(-this.x, -this.y, -this.z);
    },
    negateSelf: function () {
      return this._set(-this.x, -this.y, -this.z);
    },
    copy: function (t) {
      return this._set(t.x, t.y, void 0 !== t.z ? t.z : this.z);
    },
    equals: function (t) {
      return this.x === t.x && this.y === t.y && this.z === (t.z || this.z);
    },
    normalize: function () {
      var t = this.length();
      return t > 0 ? this._set(this.x / t, this.y / t, this.z / t) : this;
    },
    perp: function () {
      return this._set(this.y, -this.x, this.z);
    },
    rotate: function (t) {
      var e = this.x,
        i = this.y;
      return this._set(
        e * Math.cos(t) - i * Math.sin(t),
        e * Math.sin(t) + i * Math.cos(t),
        this.z
      );
    },
    dotProduct: function (t) {
      return this.x * t.x + this.y * t.y + this.z * (t.z || 1);
    },
    length2: function () {
      return this.dotProduct(this);
    },
    length: function () {
      return Math.sqrt(this.length2());
    },
    distance: function (t) {
      var e = this.x - t.x,
        i = this.y - t.y,
        n = this.z - (t.z || 0);
      return Math.sqrt(e * e + i * i + n * n);
    },
    angle: function (t) {
      return Math.acos(
        (this.dotProduct(t) / (this.length() * t.length())).clamp(-1, 1)
      );
    },
    project: function (t) {
      return this.scale(this.dotProduct(t) / t.length2());
    },
    projectN: function (t) {
      return this.scale(this.dotProduct(t));
    },
    clone: function () {
      return new me.Vector3d(this.x, this.y, this.z);
    },
    toString: function () {
      return "x:" + this.x + ",y:" + this.y + ",z:" + this.z;
    },
  })),
  (me.Vector3d.Error = me.Error.extend({
    init: function (t) {
      me.Error.prototype.init.apply(this, [t]),
        (this.name = "me.Vector3d.Error");
    },
  })),
  (me.ObservableVector2d = me.Vector2d.extend({
    init: function (t, e, i) {
      if (
        (Object.defineProperty(this, "x", {
          get: function () {
            return this._x;
          },
          set: function (t) {
            this.onUpdate(t, this._y, this._x, this._y), (this._x = t);
          },
        }),
        Object.defineProperty(this, "y", {
          get: function () {
            return this._y;
          },
          set: function (t) {
            this.onUpdate(this._x, t, this._x, this._y), (this._y = t);
          },
        }),
        void 0 === i)
      )
        throw new me.ObservableVector2d.Error("undefined `onUpdate` callback");
      this.setCallback(i.onUpdate), (this._x = t || 0), (this._y = e || 0);
    },
    _set: function (t, e) {
      return (
        this.onUpdate(t, e, this._x, this._y),
        (this._x = t),
        (this._y = e),
        this
      );
    },
    setMuted: function (t, e) {
      return (this._x = t), (this._y = e), this;
    },
    setCallback: function (t) {
      if ("function" != typeof t)
        throw new me.ObservableVector2d.Error("invalid `onUpdate` callback");
      return (this.onUpdate = t), this;
    },
    add: function (t) {
      return this._set(this._x + t.x, this._y + t.y);
    },
    sub: function (t) {
      return this._set(this._x - t.x, this._y - t.y);
    },
    scale: function (t, e) {
      return this._set(this._x * t, this._y * (void 0 !== e ? e : t));
    },
    scaleV: function (t) {
      return this._set(this._x * t.x, this._y * t.y);
    },
    div: function (t) {
      return this._set(this._x / t, this._y / t);
    },
    abs: function () {
      return this._set(
        this._x < 0 ? -this._x : this._x,
        this._y < 0 ? -this._y : this._y
      );
    },
    clamp: function (t, e) {
      return new me.ObservableVector2d(this.x.clamp(t, e), this.y.clamp(t, e), {
        onUpdate: this.onUpdate,
      });
    },
    clampSelf: function (t, e) {
      return this._set(this._x.clamp(t, e), this._y.clamp(t, e));
    },
    minV: function (t) {
      return this._set(
        this._x < t.x ? this._x : t.x,
        this._y < t.y ? this._y : t.y
      );
    },
    maxV: function (t) {
      return this._set(
        this._x > t.x ? this._x : t.x,
        this._y > t.y ? this._y : t.y
      );
    },
    floor: function () {
      return new me.ObservableVector2d(
        Math.floor(this._x),
        Math.floor(this._y),
        { onUpdate: this.onUpdate }
      );
    },
    floorSelf: function () {
      return this._set(Math.floor(this._x), Math.floor(this._y));
    },
    ceil: function () {
      return new me.ObservableVector2d(Math.ceil(this._x), Math.ceil(this._y), {
        onUpdate: this.onUpdate,
      });
    },
    ceilSelf: function () {
      return this._set(Math.ceil(this._x), Math.ceil(this._y));
    },
    negate: function () {
      return new me.ObservableVector2d(-this._x, -this._y, {
        onUpdate: this.onUpdate,
      });
    },
    negateSelf: function () {
      return this._set(-this._x, -this._y);
    },
    copy: function (t) {
      return this._set(t.x, t.y);
    },
    equals: function (t) {
      return this._x === t.x && this._y === t.y;
    },
    normalize: function () {
      var t = this.length();
      return t > 0 ? this._set(this._x / t, this._y / t) : this;
    },
    perp: function () {
      return this._set(this._y, -this._x);
    },
    rotate: function (t) {
      var e = this._x,
        i = this._y;
      return this._set(
        e * Math.cos(t) - i * Math.sin(t),
        e * Math.sin(t) + i * Math.cos(t)
      );
    },
    dotProduct: function (t) {
      return this._x * t.x + this._y * t.y;
    },
    distance: function (t) {
      return Math.sqrt(
        (this._x - t.x) * (this._x - t.x) + (this._y - t.y) * (this._y - t.y)
      );
    },
    clone: function () {
      return new me.ObservableVector2d(this._x, this._y, {
        onUpdate: this.onUpdate,
      });
    },
    toVector2d: function () {
      return new me.Vector2d(this._x, this._y);
    },
    toString: function () {
      return "x:" + this._x + ",y:" + this._y;
    },
  })),
  (me.ObservableVector2d.Error = me.Error.extend({
    init: function (t) {
      me.Error.prototype.init.apply(this, [t]),
        (this.name = "me.ObservableVector2d.Error");
    },
  })),
  (me.ObservableVector3d = me.Vector3d.extend({
    init: function (t, e, i, n) {
      if (
        (Object.defineProperty(this, "x", {
          get: function () {
            return this._x;
          },
          set: function (t) {
            this.onUpdate(t, this._y, this._z, this._x, this._y, this._z),
              (this._x = t);
          },
        }),
        Object.defineProperty(this, "y", {
          get: function () {
            return this._y;
          },
          set: function (t) {
            this.onUpdate(this._x, t, this._z, this._x, this._y, this._z),
              (this._y = t);
          },
        }),
        Object.defineProperty(this, "z", {
          get: function () {
            return this._z;
          },
          set: function (t) {
            this.onUpdate(this._x, this._y, t, this._x, this._y, this._z),
              (this._z = t);
          },
        }),
        void 0 === n)
      )
        throw new me.ObservableVector3d.Error("undefined `onUpdate` callback");
      this.setCallback(n.onUpdate),
        (this._x = t || 0),
        (this._y = e || 0),
        (this._z = i || 0);
    },
    _set: function (t, e, i) {
      return (
        this.onUpdate(t, e, i, this._x, this._y, this._z),
        (this._x = t),
        (this._y = e),
        (this._z = i),
        this
      );
    },
    setMuted: function (t, e, i) {
      return (this._x = t), (this._y = e), (this._z = i), this;
    },
    setCallback: function (t) {
      if ("function" != typeof t)
        throw new me.ObservableVector2d.Error("invalid `onUpdate` callback");
      return (this.onUpdate = t), this;
    },
    add: function (t) {
      return this._set(this._x + t.x, this._y + t.y, this._z + (t.z || 0));
    },
    sub: function (t) {
      return this._set(this._x - t.x, this._y - t.y, this._z - (t.z || 0));
    },
    scale: function (t, e, i) {
      return (
        (e = void 0 !== e ? e : t),
        (i = void 0 !== i ? i : t),
        this._set(this._x * t, this._y * e, this._z * i)
      );
    },
    scaleV: function (t) {
      return this._set(this._x * t.x, this._y * t.y, this._z * (t.z || 1));
    },
    div: function (t) {
      return this._set(this._x / t, this._y / t, this._z / t);
    },
    abs: function () {
      return this._set(
        this._x < 0 ? -this._x : this._x,
        this._y < 0 ? -this._y : this._y,
        this._Z < 0 ? -this._z : this._z
      );
    },
    clamp: function (t, e) {
      return new me.ObservableVector3d(
        this._x.clamp(t, e),
        this._y.clamp(t, e),
        this._z.clamp(t, e),
        { onUpdate: this.onUpdate }
      );
    },
    clampSelf: function (t, e) {
      return this._set(
        this._x.clamp(t, e),
        this._y.clamp(t, e),
        this._z.clamp(t, e)
      );
    },
    minV: function (t) {
      var e = t.z || 0;
      return this._set(
        this._x < t.x ? this._x : t.x,
        this._y < t.y ? this._y : t.y,
        this._z < e ? this._z : e
      );
    },
    maxV: function (t) {
      var e = t.z || 0;
      return this._set(
        this._x > t.x ? this._x : t.x,
        this._y > t.y ? this._y : t.y,
        this._z > e ? this._z : e
      );
    },
    floor: function () {
      return new me.ObservableVector3d(
        Math.floor(this._x),
        Math.floor(this._y),
        Math.floor(this._z),
        { onUpdate: this.onUpdate }
      );
    },
    floorSelf: function () {
      return this._set(
        Math.floor(this._x),
        Math.floor(this._y),
        Math.floor(this._z)
      );
    },
    ceil: function () {
      return new me.ObservableVector3d(
        Math.ceil(this._x),
        Math.ceil(this._y),
        Math.ceil(this._z),
        { onUpdate: this.onUpdate }
      );
    },
    ceilSelf: function () {
      return this._set(
        Math.ceil(this._x),
        Math.ceil(this._y),
        Math.ceil(this._z)
      );
    },
    negate: function () {
      return new me.ObservableVector3d(-this._x, -this._y, -this._z, {
        onUpdate: this.onUpdate,
      });
    },
    negateSelf: function () {
      return this._set(-this._x, -this._y, -this._z);
    },
    copy: function (t) {
      return this._set(t.x, t.y, void 0 !== t.z ? t.z : this._z);
    },
    equals: function (t) {
      return this._x === t.x && this._y === t.y && this._z === (t.z || this._z);
    },
    normalize: function () {
      var t = this.length();
      return t > 0 ? this._set(this._x / t, this._y / t, this._z / t) : this;
    },
    perp: function () {
      return this._set(this._y, -this._x, this._z);
    },
    rotate: function (t) {
      var e = this._x,
        i = this._y;
      return this._set(
        e * Math.cos(t) - i * Math.sin(t),
        e * Math.sin(t) + i * Math.cos(t),
        this._z
      );
    },
    dotProduct: function (t) {
      return this._x * t.x + this._y * t.y + this._z * (t.z || 1);
    },
    distance: function (t) {
      var e = this._x - t.x,
        i = this._y - t.y,
        n = this._z - (t.z || 0);
      return Math.sqrt(e * e + i * i + n * n);
    },
    clone: function () {
      return new me.ObservableVector3d(this._x, this._y, this._z, {
        onUpdate: this.onUpdate,
      });
    },
    toVector3d: function () {
      return new me.Vector3d(this._x, this._y, this._z);
    },
    toString: function () {
      return "x:" + this._x + ",y:" + this._y + ",z:" + this._z;
    },
  })),
  (me.ObservableVector3d.Error = me.Error.extend({
    init: function (t) {
      me.Error.prototype.init.apply(this, [t]),
        (this.name = "me.ObservableVector3d.Error");
    },
  })),
  (me.Matrix2d = me.Object.extend({
    init: function () {
      void 0 === this.val && (this.val = new Float32Array(9)),
        arguments.length && arguments[0] instanceof me.Matrix2d
          ? this.copy(arguments[0])
          : arguments.length >= 6
          ? this.setTransform.apply(this, arguments)
          : this.onResetEvent();
    },
    onResetEvent: function () {
      this.identity();
    },
    identity: function () {
      return this.setTransform(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
    },
    setTransform: function () {
      var t = this.val;
      return (
        9 === arguments.length
          ? ((t[0] = arguments[0]),
            (t[1] = arguments[1]),
            (t[2] = arguments[2]),
            (t[3] = arguments[3]),
            (t[4] = arguments[4]),
            (t[5] = arguments[5]),
            (t[6] = arguments[6]),
            (t[7] = arguments[7]),
            (t[8] = arguments[8]))
          : 6 === arguments.length &&
            ((t[0] = arguments[0]),
            (t[1] = arguments[2]),
            (t[2] = arguments[4]),
            (t[3] = arguments[1]),
            (t[4] = arguments[3]),
            (t[5] = arguments[5]),
            (t[6] = 0),
            (t[7] = 0),
            (t[8] = 1)),
        this
      );
    },
    copy: function (t) {
      return this.val.set(t.val), this;
    },
    multiply: function (t) {
      t = t.val;
      var e = this.val,
        i = e[0],
        n = e[1],
        r = e[3],
        o = e[4],
        s = t[0],
        a = t[1],
        h = t[3],
        l = t[4],
        u = t[6],
        c = t[7];
      return (
        (e[0] = i * s + r * a),
        (e[1] = n * s + o * a),
        (e[3] = i * h + r * l),
        (e[4] = n * h + o * l),
        (e[6] += i * u + r * c),
        (e[7] += n * u + o * c),
        this
      );
    },
    transpose: function () {
      var t,
        e = this.val;
      return (
        (t = e[1]),
        (e[1] = e[3]),
        (e[3] = t),
        (t = e[2]),
        (e[2] = e[6]),
        (e[6] = t),
        (t = e[5]),
        (e[5] = e[7]),
        (e[7] = t),
        this
      );
    },
    invert: function () {
      var t = this.val,
        e = t[0],
        i = t[1],
        n = t[2],
        r = t[3],
        o = t[4],
        s = t[5],
        a = t[6],
        h = t[7],
        l = t[8],
        u = l * o - s * h,
        c = s * a - l * r,
        d = h * r - o * a,
        f = e * u + i * c + n * d;
      return (
        (t[0] = u / f),
        (t[1] = (n * h - l * i) / f),
        (t[2] = (s * i - n * o) / f),
        (t[3] = c / f),
        (t[4] = (l * e - n * a) / f),
        (t[5] = (n * r - s * e) / f),
        (t[6] = d / f),
        (t[7] = (i * a - h * e) / f),
        (t[8] = (o * e - i * r) / f),
        this
      );
    },
    multiplyVector: function (t) {
      var e = this.val,
        i = t.x,
        n = t.y;
      return (
        (t.x = i * e[0] + n * e[3] + e[6]),
        (t.y = i * e[1] + n * e[4] + e[7]),
        t
      );
    },
    scale: function (t, e) {
      var i = this.val,
        n = t,
        r = void 0 === e ? n : e;
      return (i[0] *= n), (i[1] *= n), (i[3] *= r), (i[4] *= r), this;
    },
    scaleV: function (t) {
      return this.scale(t.x, t.y);
    },
    scaleX: function (t) {
      return this.scale(t, 1);
    },
    scaleY: function (t) {
      return this.scale(1, t);
    },
    rotate: function (t) {
      if (0 !== t) {
        var e = this.val,
          i = e[0],
          n = e[1],
          r = e[3],
          o = e[4],
          s = Math.sin(t),
          a = Math.cos(t);
        (e[0] = i * a + r * s),
          (e[1] = n * a + o * s),
          (e[3] = -(i * s) + r * a),
          (e[4] = -(n * s) + o * a);
      }
      return this;
    },
    translate: function (t, e) {
      var i = this.val;
      return (i[6] += i[0] * t + i[3] * e), (i[7] += i[1] * t + i[4] * e), this;
    },
    translateV: function (t) {
      return this.translate(t.x, t.y);
    },
    isIdentity: function () {
      var t = this.val;
      return (
        1 === t[0] &&
        0 === t[1] &&
        0 === t[2] &&
        0 === t[3] &&
        1 === t[4] &&
        0 === t[5] &&
        0 === t[6] &&
        0 === t[7] &&
        1 === t[8]
      );
    },
    clone: function () {
      return me.pool.pull("me.Matrix2d").copy(this);
    },
    toString: function () {
      var t = this.val;
      return (
        "me.Matrix2d(" +
        t[0] +
        ", " +
        t[1] +
        ", " +
        t[2] +
        ", " +
        t[3] +
        ", " +
        t[4] +
        ", " +
        t[5] +
        ", " +
        t[6] +
        ", " +
        t[7] +
        ", " +
        t[8] +
        ")"
      );
    },
  })),
  (me.Ellipse = me.Object.extend({
    init: function (t, e, i, n) {
      (this.pos = new me.Vector2d()),
        (this._bounds = void 0),
        (this.radius = NaN),
        (this.radiusV = new me.Vector2d()),
        (this.radiusSq = new me.Vector2d()),
        (this.ratio = new me.Vector2d()),
        (this.shapeType = "Ellipse"),
        this.setShape(t, e, i, n);
    },
    setShape: function (t, e, i, n) {
      var r = i / 2,
        o = n / 2;
      this.pos.set(t, e),
        (this.radius = Math.max(r, o)),
        this.ratio.set(r / this.radius, o / this.radius),
        this.radiusV.set(this.radius, this.radius).scaleV(this.ratio);
      var s = this.radius * this.radius;
      return (
        this.radiusSq.set(s, s).scaleV(this.ratio), this.updateBounds(), this
      );
    },
    rotate: function () {
      return this;
    },
    scale: function (t, e) {
      return (
        (e = void 0 !== e ? e : t),
        this.setShape(
          this.pos.x,
          this.pos.y,
          2 * this.radiusV.x * t,
          2 * this.radiusV.y * e
        )
      );
    },
    scaleV: function (t) {
      return this.scale(t.x, t.y);
    },
    transform: function () {
      return this;
    },
    translate: function (t, e) {
      return (
        (this.pos.x += t), (this.pos.y += e), this._bounds.translate(t, e), this
      );
    },
    translateV: function (t) {
      return this.pos.add(t), this._bounds.translateV(t), this;
    },
    containsPointV: function (t) {
      return this.containsPoint(t.x, t.y);
    },
    containsPoint: function (t, e) {
      return (
        (t -= this.pos.x),
        (e -= this.pos.y),
        (t * t) / this.radiusSq.x + (e * e) / this.radiusSq.y <= 1
      );
    },
    getBounds: function () {
      return this._bounds;
    },
    updateBounds: function () {
      var t = this.radiusV.x,
        e = this.radiusV.y,
        i = this.pos.x - t,
        n = this.pos.y - e,
        r = 2 * t,
        o = 2 * e;
      return (
        this._bounds
          ? this._bounds.setShape(i, n, r, o)
          : (this._bounds = new me.Rect(i, n, r, o)),
        this._bounds
      );
    },
    clone: function () {
      return new me.Ellipse(
        this.pos.x,
        this.pos.y,
        2 * this.radiusV.x,
        2 * this.radiusV.y
      );
    },
  })),
  (me.Polygon = me.Object.extend({
    init: function (t, e, i) {
      (this.pos = new me.Vector2d()),
        (this._bounds = void 0),
        (this.points = null),
        (this.shapeType = "Polygon"),
        this.setShape(t, e, i);
    },
    setShape: function (t, e, i) {
      return (
        this.pos.set(t, e),
        (this.points = i),
        this.recalc(),
        this.updateBounds(),
        this
      );
    },
    transform: function (t) {
      for (var e = this.points, i = e.length, n = 0; i > n; n++)
        t.multiplyVector(e[n]);
      return this.recalc(), this.updateBounds(), this;
    },
    rotate: function (t) {
      if (0 !== t) {
        for (var e = this.points, i = e.length, n = 0; i > n; n++)
          e[n].rotate(t);
        this.recalc(), this.updateBounds();
      }
      return this;
    },
    scale: function (t, e) {
      e = void 0 !== e ? e : t;
      for (var i = this.points, n = i.length, r = 0; n > r; r++)
        i[r].scale(t, e);
      return this.recalc(), this.updateBounds(), this;
    },
    scaleV: function (t) {
      return this.scale(t.x, t.y);
    },
    recalc: function () {
      var t,
        e = (this.edges = []),
        i = (this.normals = []),
        n = this.points,
        r = n.length;
      if (3 > r) throw new me.Polygon.Error("Requires at least 3 points");
      for (t = 0; r > t; t++) {
        var o = new me.Vector2d().copy(n[(t + 1) % r]).sub(n[t]);
        e.push(o), i.push(new me.Vector2d().copy(o).perp().normalize());
      }
      return this;
    },
    translate: function (t, e) {
      return (
        (this.pos.x += t), (this.pos.y += e), this._bounds.translate(t, e), this
      );
    },
    translateV: function (t) {
      return this.pos.add(t), this._bounds.translateV(t), this;
    },
    containsPointV: function (t) {
      return this.containsPoint(t.x, t.y);
    },
    containsPoint: function (t, e) {
      for (
        var i = !1,
          n = this.pos.x,
          r = this.pos.y,
          o = this.points,
          s = o.length,
          a = 0,
          h = s - 1;
        s > a;
        h = a++
      ) {
        var l = o[a].y + r,
          u = o[a].x + n,
          c = o[h].y + r,
          d = o[h].x + n;
        l > e != c > e && ((d - u) * (e - l)) / (c - l) + u > t && (i = !i);
      }
      return i;
    },
    getBounds: function () {
      return this._bounds;
    },
    updateBounds: function () {
      return (
        this._bounds || (this._bounds = new me.Rect(0, 0, 0, 0)),
        this._bounds.setPoints(this.points),
        this._bounds.translateV(this.pos),
        this._bounds
      );
    },
    clone: function () {
      var t = [];
      return (
        this.points.forEach(function (e) {
          t.push(new me.Vector2d(e.x, e.y));
        }),
        new me.Polygon(this.pos.x, this.pos.y, t)
      );
    },
  })),
  (me.Polygon.Error = me.Error.extend({
    init: function (t) {
      me.Error.prototype.init.apply(this, [t]),
        (this.name = "me.Polygon.Error");
    },
  })),
  (me.Rect = me.Polygon.extend({
    init: function (t, e, i, n) {
      (this.pos = new me.Vector2d()),
        (this.points = [
          new me.Vector2d(),
          new me.Vector2d(),
          new me.Vector2d(),
          new me.Vector2d(),
        ]),
        (this.shapeType = "Rectangle"),
        this.setShape(t, e, i, n);
    },
    setShape: function (t, e, i, n) {
      return (
        this.points[0].set(0, 0),
        this.points[1].set(i, 0),
        this.points[2].set(i, n),
        this.points[3].set(0, n),
        me.Polygon.prototype.setShape.apply(this, [t, e, this.points]),
        (this._width = i),
        (this._height = n),
        this
      );
    },
    resize: function (t, e) {
      return (this.width = t), (this.height = e), this;
    },
    getBounds: function () {
      return this;
    },
    setPoints: function (t) {
      var e = 1 / 0,
        i = 1 / 0,
        n = -1 / 0,
        r = -1 / 0;
      return (
        t.forEach(function (t) {
          (e = Math.min(e, t.x)),
            (i = Math.min(i, t.y)),
            (n = Math.max(n, t.x)),
            (r = Math.max(r, t.y));
        }),
        this.setShape(e, i, n - e, r - i),
        this
      );
    },
    recalc: function () {
      return (
        me.Polygon.prototype.recalc.apply(this),
        (this._width = this.points[2].x),
        (this._height = this.points[2].y),
        this
      );
    },
    updateBounds: function () {
      return this;
    },
    clone: function () {
      return new me.Rect(this.pos.x, this.pos.y, this._width, this._height);
    },
    copy: function (t) {
      return this.setShape(t.pos.x, t.pos.y, t._width, t._height);
    },
    translate: function (t, e) {
      return (this.pos.x += t), (this.pos.y += e), this;
    },
    translateV: function (t) {
      return this.translate(t.x, t.y);
    },
    union: function (t) {
      var e = Math.min(this.left, t.left),
        i = Math.min(this.top, t.top);
      return (
        this.resize(
          Math.max(this.right, t.right) - e,
          Math.max(this.bottom, t.bottom) - i
        ),
        this.pos.set(e, i),
        this
      );
    },
    overlaps: function (t) {
      return (
        this.left < t.right &&
        t.left < this.right &&
        this.top < t.bottom &&
        t.top < this.bottom
      );
    },
    contains: function (t) {
      return (
        t.left >= this.left &&
        t.right <= this.right &&
        t.top >= this.top &&
        t.bottom <= this.bottom
      );
    },
    containsPoint: function (t, e) {
      return (
        t >= this.left && t <= this.right && e >= this.top && e <= this.bottom
      );
    },
    toPolygon: function () {
      return new me.Polygon(this.pos.x, this.pos.y, this.points);
    },
  })),
  Object.defineProperty(me.Rect.prototype, "left", {
    get: function () {
      return this.pos.x;
    },
    configurable: !0,
  }),
  Object.defineProperty(me.Rect.prototype, "right", {
    get: function () {
      var t = this._width;
      return this.pos.x + t || t;
    },
    configurable: !0,
  }),
  Object.defineProperty(me.Rect.prototype, "top", {
    get: function () {
      return this.pos.y;
    },
    configurable: !0,
  }),
  Object.defineProperty(me.Rect.prototype, "bottom", {
    get: function () {
      var t = this._height;
      return this.pos.y + t || t;
    },
    configurable: !0,
  }),
  Object.defineProperty(me.Rect.prototype, "width", {
    get: function () {
      return this._width;
    },
    set: function (t) {
      (this.points[1].x = this.points[2].x = t), this.recalc();
    },
    configurable: !0,
  }),
  Object.defineProperty(me.Rect.prototype, "height", {
    get: function () {
      return this._height;
    },
    set: function (t) {
      (this.points[2].y = this.points[3].y = t), this.recalc();
    },
    configurable: !0,
  }),
  (me.Line = me.Polygon.extend({
    containsPointV: function (t) {
      return this.containsPoint(t.x, t.y);
    },
    containsPoint: function (t, e) {
      (t -= this.pos.x), (e -= this.pos.y);
      var i = this.points[0],
        n = this.points[1];
      return (e - i.y) * (n.x - i.x) == (n.y - i.y) * (t - i.x);
    },
    recalc: function () {
      var t = (this.edges = []),
        e = (this.normals = []),
        i = this.points;
      if (2 !== i.length) throw new me.Line.Error("Requires exactly 2 points");
      var n = new me.Vector2d().copy(i[1]).sub(i[0]);
      return (
        t.push(n), e.push(new me.Vector2d().copy(n).perp().normalize()), this
      );
    },
    clone: function () {
      var t = [];
      return (
        this.points.forEach(function (e) {
          t.push(new me.Vector2d(e.x, e.y));
        }),
        new me.Line(this.pos.x, this.pos.y, t)
      );
    },
  })),
  (me.Line.Error = me.Error.extend({
    init: function (t) {
      me.Error.prototype.init.apply(this, [t]), (this.name = "me.Line.Error");
    },
  })),
  (me.Body = me.Rect.extend({
    init: function (t, e) {
      (this.entity = t),
        (this.shapes = []),
        (this.collisionMask = me.collision.types.ALL_OBJECT),
        (this.collisionType = me.collision.types.ENEMY_OBJECT),
        void 0 === this.vel && (this.vel = new me.Vector2d()),
        this.vel.set(0, 0),
        void 0 === this.accel && (this.accel = new me.Vector2d()),
        this.accel.set(0, 0),
        void 0 === this.friction && (this.friction = new me.Vector2d()),
        this.friction.set(0, 0),
        void 0 === this.maxVel && (this.maxVel = new me.Vector2d()),
        this.maxVel.set(1e3, 1e3),
        (this.gravity = void 0 !== me.sys.gravity ? me.sys.gravity : 0.98),
        (this.falling = !1),
        (this.jumping = !1),
        me.Rect.prototype.init.apply(this, [0, 0, t.width, t.height]);
      for (var i = 0; i < e.length; i++) this.addShape(e[i].clone(), !0);
    },
    addShape: function (t, e) {
      return (
        t instanceof me.Rect
          ? this.shapes.push(t.toPolygon())
          : this.shapes.push(t),
        !0 !== e && this.updateBounds(),
        this.shapes.length
      );
    },
    addShapesFromJSON: function (t, e, i) {
      var n;
      if (((i = i || 1), void 0 === t.rigidBodies)) {
        if (void 0 === (n = t[e]))
          throw new me.Body.Error(
            "Identifier (" +
              e +
              ") undefined for the given PhysicsEditor JSON object)"
          );
        for (var r = 0; r < n.length; r++) {
          for (var o = [], s = 0; s < n[r].shape.length; s += 2)
            o.push(new me.Vector2d(n[r].shape[s], n[r].shape[s + 1]));
          this.addShape(new me.Polygon(0, 0, o), !0);
        }
      } else {
        if (
          (t.rigidBodies.forEach(function (t) {
            t.name === e && (n = t);
          }),
          void 0 === n)
        )
          throw new me.Body.Error(
            "Identifier (" +
              e +
              ") undefined for the given PhysicsEditor JSON object)"
          );
        this.pos.set(n.origin.x, 1 - n.origin.y).scale(i);
        var a = this;
        n.polygons.forEach(function (t) {
          var e = [];
          t.forEach(function (t) {
            e.push(new me.Vector2d(t.x, 1 - t.y).scale(i));
          }),
            a.addShape(new me.Polygon(0, 0, e), !0);
        }),
          n.circles.forEach(function (t) {
            a.addShape(
              new me.Ellipse(
                t.cx * i,
                (1 - t.cy) * i,
                2 * t.r * i,
                2 * t.r * i
              ),
              !0
            );
          });
      }
      return this.updateBounds(), this.shapes.length;
    },
    getShape: function (t) {
      return this.shapes[t || 0];
    },
    removeShape: function (t) {
      return this.shapes.remove(t), this.updateBounds(), this.shapes.length;
    },
    removeShapeAt: function (t) {
      return this.removeShape(this.getShape(t));
    },
    setCollisionMask: function (t) {
      this.collisionMask = t;
    },
    respondToCollision: function (t) {
      var e = t.overlapV;
      this.entity.pos.sub(e),
        0 !== e.x && (this.vel.x = ~~(0.5 + this.vel.x - e.x) || 0),
        0 !== e.y &&
          ((this.vel.y = ~~(0.5 + this.vel.y - e.y) || 0),
          (this.falling = e.y >= 1),
          (this.jumping = e.y <= -1));
    },
    updateBounds: function () {
      if (this.shapes.length > 0) {
        var t = this.shapes[0].getBounds();
        this.pos.setV(t.pos), this.resize(t.width, t.height);
        for (var e = 1; e < this.shapes.length; e++)
          this.union(this.shapes[e].getBounds());
      }
      return this.entity.onBodyUpdate(this.pos, this.width, this.height), this;
    },
    setVelocity: function (t, e) {
      (this.accel.x = 0 !== t ? t : this.accel.x),
        (this.accel.y = 0 !== e ? e : this.accel.y),
        this.setMaxVelocity(t, e);
    },
    setMaxVelocity: function (t, e) {
      (this.maxVel.x = t), (this.maxVel.y = e);
    },
    setFriction: function (t, e) {
      (this.friction.x = t || 0), (this.friction.y = e || 0);
    },
    applyFriction: function (t) {
      var e = this.friction.x * me.timer.tick,
        i = t.x + e,
        n = t.x - e,
        r = this.friction.y * me.timer.tick,
        o = t.y + r,
        s = t.y - r;
      (t.x = 0 > i ? i : n > 0 ? n : 0), (t.y = 0 > o ? o : s > 0 ? s : 0);
    },
    computeVelocity: function (t) {
      this.gravity &&
        ((t.y += this.gravity * me.timer.tick),
        (this.falling = t.y > 0),
        (this.jumping = !this.falling && this.jumping)),
        (this.friction.x || this.friction.y) && this.applyFriction(t),
        0 !== t.y && (t.y = t.y.clamp(-this.maxVel.y, this.maxVel.y)),
        0 !== t.x && (t.x = t.x.clamp(-this.maxVel.x, this.maxVel.x));
    },
    update: function () {
      return (
        this.computeVelocity(this.vel),
        this.entity.pos.add(this.vel),
        0 !== this.vel.x || 0 !== this.vel.y
      );
    },
    destroy: function () {
      (this.entity = null), (this.shapes = []);
    },
  })),
  (me.Body.Error = me.Error.extend({
    init: function (t) {
      me.Error.prototype.init.apply(this, [t]), (this.name = "me.Body.Error");
    },
  })),
  (function () {
    function t(t, e, i, n) {
      (this.max_objects = e || 4),
        (this.max_levels = i || 4),
        (this.level = n || 0),
        (this.bounds = t),
        (this.objects = []),
        (this.nodes = []);
    }
    var e = [],
      i = function (t, i, n, r) {
        if (e.length > 0) {
          var o = e.pop();
          return (
            (o.bounds = t),
            (o.max_objects = i || 4),
            (o.max_levels = n || 4),
            (o.level = r || 0),
            o
          );
        }
        return new me.QuadTree(t, i, n, r);
      },
      n = function (t) {
        e.push(t);
      },
      r = new me.Vector2d();
    (t.prototype.split = function () {
      var t = this.level + 1,
        e = ~~(0.5 + this.bounds.width / 2),
        n = ~~(0.5 + this.bounds.height / 2),
        r = ~~(0.5 + this.bounds.pos.x),
        o = ~~(0.5 + this.bounds.pos.y);
      (this.nodes[0] = i(
        { pos: { x: r + e, y: o }, width: e, height: n },
        this.max_objects,
        this.max_levels,
        t
      )),
        (this.nodes[1] = i(
          { pos: { x: r, y: o }, width: e, height: n },
          this.max_objects,
          this.max_levels,
          t
        )),
        (this.nodes[2] = i(
          { pos: { x: r, y: o + n }, width: e, height: n },
          this.max_objects,
          this.max_levels,
          t
        )),
        (this.nodes[3] = i(
          { pos: { x: r + e, y: o + n }, width: e, height: n },
          this.max_objects,
          this.max_levels,
          t
        ));
    }),
      (t.prototype.getIndex = function (t) {
        var e = t.getBounds(),
          i = e.pos;
        (t.floating || (t.ancestor && t.ancestor.floating)) &&
          (i = me.game.viewport.localToWorld(i.x, i.y, r));
        var n = -1,
          o = i.x,
          s = i.y,
          a = e.width,
          h = e.height,
          l = this.bounds.pos.x + this.bounds.width / 2,
          u = this.bounds.pos.y + this.bounds.height / 2,
          c = u > s && u > s + h,
          d = s > u;
        return (
          l > o && l > o + a
            ? c
              ? (n = 1)
              : d && (n = 2)
            : o > l && (c ? (n = 0) : d && (n = 3)),
          n
        );
      }),
      (t.prototype.insertContainer = function (t) {
        for (var e, i = t.children.length; i--, (e = t.children[i]); )
          e instanceof me.Container
            ? ("rootContainer" !== e.name && this.insert(e),
              this.insertContainer(e))
            : "function" == typeof e.getBounds && this.insert(e);
      }),
      (t.prototype.insert = function (t) {
        var e = -1;
        if (this.nodes.length > 0 && -1 !== (e = this.getIndex(t)))
          return void this.nodes[e].insert(t);
        if (
          (this.objects.push(t),
          this.objects.length > this.max_objects &&
            this.level < this.max_levels)
        ) {
          0 === this.nodes.length && this.split();
          for (var i = 0; i < this.objects.length; )
            -1 !== (e = this.getIndex(this.objects[i]))
              ? this.nodes[e].insert(this.objects.splice(i, 1)[0])
              : (i += 1);
        }
      }),
      (t.prototype.retrieve = function (t, e) {
        var i = this.objects;
        if (this.nodes.length > 0) {
          var n = this.getIndex(t);
          if (-1 !== n) i = i.concat(this.nodes[n].retrieve(t));
          else
            for (var r = 0; r < this.nodes.length; r += 1)
              i = i.concat(this.nodes[r].retrieve(t));
        }
        return "function" == typeof e && i.sort(e), i;
      }),
      (t.prototype.remove = function (t) {
        var e = !1;
        if (void 0 === t.getBounds) return !1;
        if (this.nodes.length > 0) {
          var i = this.getIndex(t);
          -1 !== i &&
            (e = this.nodes[i].remove(t)) &&
            this.nodes[i].isPrunable() &&
            this.nodes.splice(i, 1);
        }
        return (
          !1 === e &&
            -1 !== this.objects.indexOf(t) &&
            (this.objects.remove(t), (e = !0)),
          e
        );
      }),
      (t.prototype.isPrunable = function () {
        return !(this.hasChildren() || this.objects.length > 0);
      }),
      (t.prototype.hasChildren = function () {
        for (var t = 0; t < this.nodes.length; t += 1) {
          var e = this.nodes[t];
          if (e.length > 0 || e.objects.length > 0) return !0;
        }
        return !1;
      }),
      (t.prototype.clear = function (t) {
        this.objects.length = 0;
        for (var e = 0; e < this.nodes.length; e += 1)
          this.nodes[e].clear(), n(this.nodes[e]);
        (this.nodes = []),
          void 0 !== t &&
            this.bounds.setShape(t.pos.x, t.pos.y, t.width, t.height);
      }),
      (me.QuadTree = t);
  })(),
  (function () {
    function t(t, e, i) {
      for (
        var n = Number.MAX_VALUE, r = -Number.MAX_VALUE, o = t.length, s = 0;
        o > s;
        s++
      ) {
        var a = t[s].dotProduct(e);
        n > a && (n = a), a > r && (r = a);
      }
      (i[0] = n), (i[1] = r);
    }
    function e(e, i, n, r, o, s) {
      var h = l.pop(),
        u = l.pop(),
        c = a.pop().copy(i).sub(e),
        d = c.dotProduct(o);
      if (
        (t(n, o, h),
        t(r, o, u),
        (u[0] += d),
        (u[1] += d),
        h[0] > u[1] || u[0] > h[1])
      )
        return a.push(c), l.push(h), l.push(u), !0;
      if (s) {
        var f = 0;
        if (h[0] < u[0]) {
          if (((s.aInB = !1), h[1] < u[1])) (f = h[1] - u[0]), (s.bInA = !1);
          else {
            var p = h[1] - u[0],
              g = u[1] - h[0];
            f = g > p ? p : -g;
          }
        } else if (((s.bInA = !1), h[1] > u[1]))
          (f = h[0] - u[1]), (s.aInB = !1);
        else {
          var v = h[1] - u[0],
            m = u[1] - h[0];
          f = m > v ? v : -m;
        }
        var $ = Math.abs(f);
        $ < s.overlap &&
          ((s.overlap = $),
          s.overlapN.copy(o),
          0 > f && s.overlapN.negateSelf());
      }
      return a.push(c), l.push(h), l.push(u), !1;
    }
    function i(t, e) {
      var i = t.length2(),
        n = e.dotProduct(t);
      return 0 > n ? r : n > i ? s : o;
    }
    for (var n, r = -1, o = 0, s = 1, a = [], h = 0; 10 > h; h++)
      a.push(new me.Vector2d());
    for (var l = [], u = 0; 5 > u; u++) l.push([]);
    me.collision =
      (((n = {}).quadTree = null),
      (n.maxDepth = 4),
      (n.maxChildren = 8),
      (n.bounds = null),
      (n.types = {
        NO_OBJECT: 0,
        PLAYER_OBJECT: 1,
        NPC_OBJECT: 2,
        ENEMY_OBJECT: 4,
        COLLECTABLE_OBJECT: 8,
        ACTION_OBJECT: 16,
        PROJECTILE_OBJECT: 32,
        WORLD_SHAPE: 64,
        USER: 128,
        ALL_OBJECT: 4294967295,
      }),
      (n.init = function () {
        (n.bounds = me.game.viewport.clone()),
          (n.quadTree = new me.QuadTree(n.bounds, n.maxChildren, n.maxDepth)),
          me.event.subscribe(me.event.LEVEL_LOADED, function () {
            (n.bounds = me.game.world.clone()), n.quadTree.clear(n.bounds);
          });
      }),
      (n.ResponseObject = function () {
        (this.a = null),
          (this.b = null),
          (this.overlapN = new me.Vector2d()),
          (this.overlapV = new me.Vector2d()),
          (this.aInB = !0),
          (this.bInA = !0),
          (this.indexShapeA = -1),
          (this.indexShapeB = -1),
          (this.overlap = Number.MAX_VALUE);
      }),
      (n.ResponseObject.prototype.clear = function () {
        return (
          (this.aInB = !0),
          (this.bInA = !0),
          (this.overlap = Number.MAX_VALUE),
          (this.indexShapeA = -1),
          (this.indexShapeB = -1),
          this
        );
      }),
      (n.response = new n.ResponseObject()),
      (n.shouldCollide = function (t, e) {
        return (
          t.body &&
          e.body &&
          0 != (t.body.collisionMask & e.body.collisionType) &&
          0 != (t.body.collisionType & e.body.collisionMask)
        );
      }),
      (n.check = function (t, e) {
        for (
          var i,
            r = 0,
            o = e || n.response,
            s = n.quadTree.retrieve(t),
            a = s.length;
          (i = s[--a]);

        )
          if (
            i !== t &&
            n.shouldCollide(t, i) &&
            t.getBounds().overlaps(i.getBounds())
          ) {
            var h = t.body.shapes.length,
              l = i.body.shapes.length;
            if (0 === h || 0 === l) continue;
            var u = 0;
            do {
              var c = t.body.getShape(u),
                d = 0;
              do {
                var f = i.body.getShape(d);
                !0 ===
                  n["test" + c.shapeType + f.shapeType].call(
                    this,
                    t,
                    c,
                    i,
                    f,
                    o.clear()
                  ) &&
                  (r++,
                  (o.indexShapeA = u),
                  (o.indexShapeB = d),
                  !1 !== t.onCollision(o, i) &&
                    t.body.respondToCollision.call(t.body, o),
                  !1 !== i.onCollision(o, t) &&
                    i.body.respondToCollision.call(i.body, o)),
                  d++;
              } while (l > d);
              u++;
            } while (h > u);
          }
        return r > 0;
      }),
      (n.testPolygonPolygon = function (t, i, n, r, o) {
        var s,
          h = i.points,
          l = i.normals,
          u = l.length,
          c = r.points,
          d = r.normals,
          f = d.length,
          p = a.pop().copy(t.pos).add(t.ancestor._absPos).add(i.pos),
          g = a.pop().copy(n.pos).add(n.ancestor._absPos).add(r.pos);
        for (s = 0; u > s; s++)
          if (e(p, g, h, c, l[s], o)) return a.push(p), a.push(g), !1;
        for (s = 0; f > s; s++)
          if (e(p, g, h, c, d[s], o)) return a.push(p), a.push(g), !1;
        return (
          o &&
            ((o.a = t),
            (o.b = n),
            o.overlapV.copy(o.overlapN).scale(o.overlap)),
          a.push(p),
          a.push(g),
          !0
        );
      }),
      (n.testEllipseEllipse = function (t, e, i, n, r) {
        var o = a
            .pop()
            .copy(i.pos)
            .add(i.ancestor._absPos)
            .add(n.pos)
            .sub(t.pos)
            .add(t.ancestor._absPos)
            .sub(e.pos),
          s = e.radius,
          h = n.radius,
          l = s + h,
          u = l * l,
          c = o.length2();
        if (c > u) return a.push(o), !1;
        if (r) {
          var d = Math.sqrt(c);
          (r.a = t),
            (r.b = i),
            (r.overlap = l - d),
            r.overlapN.copy(o.normalize()),
            r.overlapV.copy(o).scale(r.overlap),
            (r.aInB = h >= s && h - s >= d),
            (r.bInA = s >= h && s - h >= d);
        }
        return a.push(o), !0;
      }),
      (n.testPolygonEllipse = function (t, e, n, o, h) {
        for (
          var l = a
              .pop()
              .copy(n.pos)
              .add(n.ancestor._absPos)
              .add(o.pos)
              .sub(t.pos)
              .add(t.ancestor._absPos)
              .sub(e.pos),
            u = o.radius,
            c = u * u,
            d = e.points,
            f = e.edges,
            p = f.length,
            g = a.pop(),
            v = a.pop(),
            m = a.pop(),
            $ = 0,
            y = 0;
          p > y;
          y++
        ) {
          var _ = y === p - 1 ? 0 : y + 1,
            x = 0 === y ? p - 1 : y - 1,
            b = 0,
            w = null;
          g.copy(f[y]),
            m.copy(l).sub(d[y]),
            h && m.length2() > c && (h.aInB = !1);
          var T = i(g, m),
            E = !0;
          if (T === r) {
            var A = null;
            if (
              (p > 1 &&
                (g.copy(f[x]),
                (T = i(g, (A = a.pop().copy(l).sub(d[x])))) !== s && (E = !1)),
              E)
            ) {
              if (($ = m.length()) > u)
                return (
                  a.push(l), a.push(g), a.push(v), a.push(m), A && a.push(A), !1
                );
              h && ((h.bInA = !1), (w = m.normalize()), (b = u - $));
            }
            A && a.push(A);
          } else if (T === s) {
            if (
              (p > 1 &&
                (g.copy(f[_]),
                m.copy(l).sub(d[_]),
                (T = i(g, m)) !== r && (E = !1)),
              E)
            ) {
              if (($ = m.length()) > u)
                return a.push(l), a.push(g), a.push(v), a.push(m), !1;
              h && ((h.bInA = !1), (w = m.normalize()), (b = u - $));
            }
          } else {
            v.copy(e.normals[y]);
            var S = Math.abs(($ = m.dotProduct(v)));
            if ((1 === p || $ > 0) && S > u)
              return a.push(l), a.push(g), a.push(v), a.push(m), !1;
            h && ((w = v), (b = u - $), ($ >= 0 || 2 * u > b) && (h.bInA = !1));
          }
          w &&
            h &&
            Math.abs(b) < Math.abs(h.overlap) &&
            ((h.overlap = b), h.overlapN.copy(w));
        }
        return (
          h &&
            ((h.a = t),
            (h.b = n),
            h.overlapV.copy(h.overlapN).scale(h.overlap)),
          a.push(l),
          a.push(g),
          a.push(v),
          a.push(m),
          !0
        );
      }),
      (n.testEllipsePolygon = function (t, e, i, r, o) {
        var s = n.testPolygonEllipse(i, r, t, e, o);
        if (s && o) {
          var a = o.a,
            h = o.aInB;
          o.overlapN.negateSelf(),
            o.overlapV.negateSelf(),
            (o.a = o.b),
            (o.b = a),
            (o.aInB = o.bInA),
            (o.bInA = h);
        }
        return s;
      }),
      n);
  })(),
  (me.Renderable = me.Rect.extend({
    init: function (t, e, i, n) {
      (this.isRenderable = !0),
        void 0 !== this.currentTransform
          ? this.currentTransform.identity()
          : (this.currentTransform = me.pool.pull("me.Matrix2d")),
        (this.GUID = void 0),
        (this.inViewport = !1),
        (this.alwaysUpdate = !1),
        (this.updateWhenPaused = !1),
        (this.isPersistent = !1),
        (this.floating = !1),
        (this.anchorPoint = new me.Vector2d(0.5, 0.5)),
        (this.autoTransform = !1),
        (this.alpha = 1),
        (this.ancestor = void 0),
        this._bounds
          ? this._bounds.setShape(t, e, i, n)
          : (this._bounds = new me.Rect(t, e, i, n)),
        this._absPos
          ? this._absPos.set(t, e)
          : (this._absPos = new me.Vector2d(t, e)),
        this.pos instanceof me.ObservableVector3d
          ? this.pos
              .setMuted(t, e, 0)
              .setCallback(this.updateBoundsPos.bind(this))
          : (this.pos = new me.ObservableVector3d(t, e, 0, {
              onUpdate: this.updateBoundsPos.bind(this),
            })),
        (this._width = i),
        (this._height = n),
        (this.shapeType = "Rectangle"),
        this.setOpacity(1);
    },
    getBounds: function () {
      return this._bounds;
    },
    getOpacity: function () {
      return this.alpha;
    },
    setOpacity: function (t) {
      "number" == typeof t &&
        ((this.alpha = t.clamp(0, 1)),
        this.alpha != this.alpha && (this.alpha = 1));
    },
    transform: function (t) {
      var e = this.getBounds();
      return (
        this.currentTransform.multiply(t),
        e.setPoints(e.transform(t).points),
        e.pos.setV(this.pos),
        this
      );
    },
    scale: function (t, e) {
      var i = t,
        n = void 0 === e ? i : e;
      return (
        this.currentTransform.scale(i, n),
        this.getBounds().resize(this.width * i, this.height * n),
        this
      );
    },
    scaleV: function (t) {
      return this.scale(t.x, t.y), this;
    },
    update: function () {
      return !1;
    },
    updateBoundsPos: function (t, e) {
      var i = this.getBounds();
      return (
        i.pos.set(t, e, i.pos.z),
        this.ancestor && i.pos.add(this.ancestor._absPos),
        i
      );
    },
    updateBounds: function () {
      return (
        console.warn("Deprecated: me.Renderable.updateBounds"),
        me.Rect.prototype.updateBounds.apply(this)
      );
    },
    draw: function () {},
    destroy: function () {
      me.pool.push(this.currentTransform),
        (this.currentTransform = void 0),
        this.onDestroyEvent.apply(this, arguments);
    },
    onDestroyEvent: function () {},
  })),
  Object.defineProperty(me.Renderable.prototype, "width", {
    get: function () {
      return this._width;
    },
    set: function (t) {
      (this.getBounds().width = t), (this._width = t);
    },
    configurable: !0,
  }),
  Object.defineProperty(me.Renderable.prototype, "height", {
    get: function () {
      return this._height;
    },
    set: function (t) {
      (this.getBounds().height = t), (this._height = t);
    },
    configurable: !0,
  }),
  (me.Renderable.Error = me.Error.extend({
    init: function (t) {
      me.Error.prototype.init.apply(this, [t]),
        (this.name = "me.Renderable.Error");
    },
  })),
  (me.Sprite = me.Renderable.extend({
    init: function (t, e, i) {
      if (
        ((this.animationpause = !1),
        (this.animationspeed = 100),
        (this.anim = {}),
        (this.resetAnim = null),
        (this.current = {
          offset: new me.Vector2d(),
          width: 0,
          height: 0,
          angle: 0,
        }),
        (this.dt = 0),
        (this._flip = { lastX: !1, lastY: !1 }),
        void 0 !== i.flipX && this._flip.lastX(!!i.flipX),
        void 0 !== i.flipY && this._flip.lastY(!!i.flipY),
        (this._flicker = {
          isFlickering: !1,
          duration: 0,
          callback: null,
          state: !1,
        }),
        (this.isSprite = !0),
        i.image instanceof me.CanvasRenderer.prototype.Texture)
      ) {
        if (
          ((this.image = i.image.getTexture()),
          (this.textureAtlas = i.image),
          void 0 !== i.region)
        ) {
          var n = i.image.getRegion(i.region);
          if (!n)
            throw new me.Renderable.Error(
              "Texture - region for " + i.region + " not found"
            );
          this.current.offset.setV(n.offset),
            (this.current.angle = n.angle),
            (i.framewidth = i.framewidth || n.width),
            (i.frameheight = i.frameheight || n.height);
        }
      } else
        (this.image = me.utils.getImage(i.image)),
          (i.framewidth = i.framewidth || this.image.width),
          (i.frameheight = i.frameheight || this.image.height),
          (this.textureAtlas = me.video.renderer.cache
            .get(this.image, i)
            .getAtlas());
      (this.current.width = i.framewidth),
        (this.current.height = i.frameheight),
        void 0 !== i.atlas
          ? ((this.textureAtlas = i.atlas),
            (this.atlasIndices = i.atlasIndices))
          : (this.atlasIndices = null),
        me.Renderable.prototype.init.apply(this, [
          t,
          e,
          this.current.width,
          this.current.height,
        ]),
        void 0 !== i.rotation && this.currentTransform.rotate(i.rotation),
        i.anchorPoint && this.anchorPoint.set(i.anchorPoint.x, i.anchorPoint.y),
        0 !== this.addAnimation("default", null) &&
          this.setCurrentAnimation("default");
    },
    isFlickering: function () {
      return this._flicker.isFlickering;
    },
    flicker: function (t, e) {
      (this._flicker.duration = t),
        this._flicker.duration <= 0
          ? ((this._flicker.isFlickering = !1), (this._flicker.callback = null))
          : this._flicker.isFlickering ||
            ((this._flicker.callback = e), (this._flicker.isFlickering = !0));
    },
    flipX: function (t) {
      t !== this._flip.lastX &&
        (console.warn("Deprecated: me.Sprite.flipX"),
        (this._flip.lastX = t),
        this.currentTransform.scaleX(-1));
    },
    flipY: function (t) {
      t !== this._flip.lastY &&
        (console.warn("Deprecated: me.Sprite.flipY"),
        (this._flip.lastY = t),
        this.currentTransform.scaleY(-1));
    },
    addAnimation: function (t, e, i) {
      this.anim[t] = { name: t, frames: [], idx: 0, length: 0 };
      var n = 0;
      if ("object" != typeof this.textureAtlas) return 0;
      null == e &&
        ((e = []),
        Object.keys(this.textureAtlas).forEach(function (t, i) {
          e[i] = i;
        }));
      for (var r = 0, o = e.length; o > r; r++) {
        var s,
          a = e[r],
          h = (s =
            "number" == typeof a || "string" == typeof a
              ? { name: a, delay: i || this.animationspeed }
              : a).name;
        if ("number" == typeof h)
          void 0 !== this.textureAtlas[h] &&
            ((this.anim[t].frames[r] = Object.assign(
              {},
              this.textureAtlas[h],
              s
            )),
            n++);
        else {
          if (null === this.atlasIndices)
            throw new me.Renderable.Error(
              "string parameters for addAnimation are not allowed for standard spritesheet based Texture"
            );
          (this.anim[t].frames[r] = Object.assign(
            {},
            this.textureAtlas[this.atlasIndices[h]],
            s
          )),
            n++;
        }
      }
      return (this.anim[t].length = n), n;
    },
    setCurrentAnimation: function (t, e, i) {
      if (!this.anim[t])
        throw new me.Renderable.Error("animation id '" + t + "' not defined");
      (this.current = this.anim[t]),
        (this.resetAnim = e || null),
        this.setAnimationFrame(this.current.idx),
        (this.current.name = t),
        i || (this.dt = 0);
    },
    isCurrentAnimation: function (t) {
      return this.current.name === t;
    },
    setAnimationFrame: function (t) {
      this.current.idx = (t || 0) % this.current.length;
      var e = this.getAnimationFrameObjectByIndex(this.current.idx);
      Object.assign(this.current, e),
        e.anchorPoint && this.anchorPoint.setV(e.anchorPoint);
    },
    getCurrentAnimationFrame: function () {
      return this.current.idx;
    },
    getAnimationFrameObjectByIndex: function (t) {
      return this.current.frames[t];
    },
    update: function (t) {
      var e = !1;
      if (!this.animationpause && this.current && this.current.length > 1) {
        var i = this.getAnimationFrameObjectByIndex(this.current.idx).delay;
        for (this.dt += t; this.dt >= i; ) {
          if (
            ((e = !0),
            (this.dt -= i),
            this.setAnimationFrame(this.current.idx + 1),
            0 === this.current.idx && this.resetAnim)
          ) {
            if ("string" == typeof this.resetAnim)
              this.setCurrentAnimation(this.resetAnim, null, !0);
            else if (!1 === this.resetAnim()) {
              this.setAnimationFrame(this.current.length - 1), (this.dt %= i);
              break;
            }
          }
          i = this.getAnimationFrameObjectByIndex(this.current.idx).delay;
        }
      }
      return (
        this._flicker.isFlickering &&
          ((this._flicker.duration -= t),
          this._flicker.duration < 0 &&
            ("function" == typeof this._flicker.callback &&
              this._flicker.callback(),
            this.flicker(-1)),
          (e = !0)),
        e
      );
    },
    draw: function (t) {
      if (
        !this._flicker.isFlickering ||
        ((this._flicker.state = !this._flicker.state), this._flicker.state)
      ) {
        var e = this.current,
          i = this.pos.x,
          n = this.pos.y,
          r = e.width,
          o = e.height,
          s = e.offset;
        t.save(),
          t.setGlobalAlpha(t.globalAlpha() * this.getOpacity()),
          this.currentTransform.isIdentity() ||
            t.transform(this.currentTransform),
          t.translate(-(r * this.anchorPoint.x), -(o * this.anchorPoint.y)),
          0 !== e.angle &&
            (t.translate(-i, -n),
            t.rotate(e.angle),
            (i -= o),
            (r = e.height),
            (o = e.width)),
          t.drawImage(this.image, s.x, s.y, r, o, i, n, r, o),
          t.restore();
      }
    },
  })),
  Object.defineProperty(me.Sprite.prototype, "offset", {
    get: function () {
      return this.current.offset;
    },
    set: function (t) {
      this.current.offset.setV(t);
    },
    configurable: !0,
  }),
  (me.AnimationSheet = me.Sprite),
  (function () {
    var t = Math.min,
      e = Math.max;
    me.Viewport = me.Renderable.extend({
      init: function (t, e, i, n) {
        me.Renderable.prototype.init.apply(this, [t, e, i - t, n - e]),
          (this.AXIS = { NONE: 0, HORIZONTAL: 1, VERTICAL: 2, BOTH: 3 }),
          (this.bounds = new me.Rect(-1 / 0, -1 / 0, 1 / 0, 1 / 0)),
          (this.offset = new me.Vector2d()),
          (this.target = null),
          (this.follow_axis = this.AXIS.NONE),
          (this._shake = {
            intensity: 0,
            duration: 0,
            axis: this.AXIS.BOTH,
            onComplete: null,
          }),
          (this._fadeOut = { color: null, tween: null }),
          (this._fadeIn = { color: null, tween: null }),
          this.setDeadzone(this.width / 6, this.height / 6);
      },
      _followH: function (i) {
        var n = this.pos.x;
        return (
          i.x - this.pos.x > this.deadzone.right
            ? (this.pos.x = t(
                i.x - this.deadzone.right,
                this.bounds.width - this.width
              ))
            : i.x - this.pos.x < this.deadzone.pos.x &&
              (this.pos.x = e(i.x - this.deadzone.pos.x, this.bounds.pos.x)),
          n !== this.pos.x
        );
      },
      _followV: function (i) {
        var n = this.pos.y;
        return (
          i.y - this.pos.y > this.deadzone.bottom
            ? (this.pos.y = t(
                i.y - this.deadzone.bottom,
                this.bounds.height - this.height
              ))
            : i.y - this.pos.y < this.deadzone.pos.y &&
              (this.pos.y = e(i.y - this.deadzone.pos.y, this.bounds.pos.y)),
          n !== this.pos.y
        );
      },
      reset: function (t, e) {
        (this.pos.x = t || 0),
          (this.pos.y = e || 0),
          (this.target = null),
          (this.follow_axis = null);
      },
      setDeadzone: function (t, e) {
        void 0 === this.deadzone && (this.deadzone = new me.Rect(0, 0, 0, 0)),
          this.deadzone.pos.set(
            ~~((this.width - t) / 2),
            ~~((this.height - e) / 2 - 0.25 * e)
          ),
          this.deadzone.resize(t, e),
          this.updateTarget();
      },
      resize: function (t, e) {
        me.Renderable.prototype.resize.apply(this, [t, e]);
        var i = me.levelDirector.getCurrentLevel();
        return (
          this.setBounds(
            0,
            0,
            Math.max(t, i ? i.width : 0),
            Math.max(e, i ? i.height : 0)
          ),
          this.setDeadzone(t / 6, e / 6),
          this.moveTo(0, 0),
          this.update(),
          me.event.publish(me.event.VIEWPORT_ONRESIZE, [
            this.width,
            this.height,
          ]),
          this
        );
      },
      setBounds: function (t, e, i, n) {
        this.bounds.pos.set(t, e),
          this.bounds.resize(i, n),
          this.moveTo(this.pos.x, this.pos.y);
      },
      follow: function (t, e) {
        if (t instanceof me.Renderable) this.target = t.pos;
        else {
          if (!(t instanceof me.Vector2d || t instanceof me.Vector3d))
            throw new me.Renderable.Error("invalid target for viewport.follow");
          this.target = t;
        }
        (this.follow_axis = void 0 === e ? this.AXIS.BOTH : e),
          this.updateTarget();
      },
      move: function (t, e) {
        this.moveTo(this.pos.x + t, this.pos.y + e);
      },
      moveTo: function (t, e) {
        (this.pos.x = t.clamp(
          this.bounds.pos.x,
          this.bounds.width - this.width
        )),
          (this.pos.y = e.clamp(
            this.bounds.pos.y,
            this.bounds.height - this.height
          )),
          me.event.publish(me.event.VIEWPORT_ONCHANGE, [this.pos]);
      },
      updateTarget: function () {
        var t = !1;
        if (this.target)
          switch (this.follow_axis) {
            case this.AXIS.NONE:
              break;
            case this.AXIS.HORIZONTAL:
              t = this._followH(this.target);
              break;
            case this.AXIS.VERTICAL:
              t = this._followV(this.target);
              break;
            case this.AXIS.BOTH:
              (t = this._followH(this.target)),
                (t = this._followV(this.target) || t);
          }
        return t;
      },
      update: function (t) {
        var e = this.updateTarget();
        return (
          this._shake.duration > 0 &&
            ((this._shake.duration -= t),
            this._shake.duration <= 0
              ? ((this._shake.duration = 0),
                this.offset.setZero(),
                "function" == typeof this._shake.onComplete &&
                  this._shake.onComplete())
              : ((this._shake.axis !== this.AXIS.BOTH &&
                  this._shake.axis !== this.AXIS.HORIZONTAL) ||
                  (this.offset.x =
                    (Math.random() - 0.5) * this._shake.intensity),
                (this._shake.axis !== this.AXIS.BOTH &&
                  this._shake.axis !== this.AXIS.VERTICAL) ||
                  (this.offset.y =
                    (Math.random() - 0.5) * this._shake.intensity)),
            (e = !0)),
          !0 === e && me.event.publish(me.event.VIEWPORT_ONCHANGE, [this.pos]),
          (null == this._fadeIn.tween && null == this._fadeOut.tween) ||
            (e = !0),
          e
        );
      },
      shake: function (t, e, i, n, r) {
        (0 !== this._shake.duration && !0 !== r) ||
          ((this._shake.intensity = t),
          (this._shake.duration = e),
          (this._shake.axis = i || this.AXIS.BOTH),
          (this._shake.onComplete = "function" == typeof n ? n : void 0));
      },
      fadeOut: function (t, e, i) {
        (this._fadeOut.color = me.pool.pull("me.Color").copy(t)),
          (this._fadeOut.tween = me.pool
            .pull("me.Tween", this._fadeOut.color)
            .to({ alpha: 0 }, e || 1e3)
            .onComplete(i || null)),
          (this._fadeOut.tween.isPersistent = !0),
          this._fadeOut.tween.start();
      },
      fadeIn: function (t, e, i) {
        this._fadeIn.color = me.pool.pull("me.Color").copy(t);
        var n = this._fadeIn.color.alpha;
        (this._fadeIn.color.alpha = 0),
          (this._fadeIn.tween = me.pool
            .pull("me.Tween", this._fadeIn.color)
            .to({ alpha: n }, e || 1e3)
            .onComplete(i || null)),
          (this._fadeIn.tween.isPersistent = !0),
          this._fadeIn.tween.start();
      },
      getWidth: function () {
        return this.width;
      },
      getHeight: function () {
        return this.height;
      },
      focusOn: function (t) {
        var e = t.getBounds();
        this.moveTo(
          t.pos.x + e.pos.x + e.width / 2,
          t.pos.y + e.pos.y + e.height / 2
        );
      },
      isVisible: function (t) {
        return t.overlaps(this);
      },
      localToWorld: function (t, e, i) {
        return (i = i || new me.Vector2d())
          .set(t, e)
          .add(this.pos)
          .sub(me.game.world.pos);
      },
      worldToLocal: function (t, e, i) {
        return (i = i || new me.Vector2d())
          .set(t, e)
          .sub(this.pos)
          .add(me.game.world.pos);
      },
      draw: function () {
        this._fadeIn.tween &&
          (me.video.renderer.clearColor(this._fadeIn.color),
          1 === this._fadeIn.color.alpha &&
            ((this._fadeIn.tween = null),
            me.pool.push(this._fadeIn.color),
            (this._fadeIn.color = null))),
          this._fadeOut.tween &&
            (me.video.renderer.clearColor(this._fadeOut.color),
            0 === this._fadeOut.color.alpha &&
              ((this._fadeOut.tween = null),
              me.pool.push(this._fadeOut.color),
              (this._fadeOut.color = null)));
      },
    });
  })(),
  (me.GUI_Object = me.Sprite.extend({
    init: function (t, e, i) {
      (this.isClickable = !0),
        (this.holdThreshold = 250),
        (this.isHoldable = !1),
        (this.hover = !1),
        (this.holdTimeout = null),
        (this.updated = !1),
        (this.released = !0),
        me.Sprite.prototype.init.apply(this, [t, e, i]),
        (this.floating = !0);
    },
    update: function () {
      return !!this.updated && (this.released || (this.updated = !1), !0);
    },
    clicked: function (t) {
      return (1 === t.which || me.device.touch) && this.isClickable
        ? ((this.updated = !0),
          (this.released = !1),
          this.isHoldable &&
            (null !== this.holdTimeout &&
              me.timer.clearTimeout(this.holdTimeout),
            (this.holdTimeout = me.timer.setTimeout(
              this.hold.bind(this),
              this.holdThreshold,
              !1
            )),
            (this.released = !1)),
          this.onClick(t))
        : void 0;
    },
    onClick: function () {
      return !1;
    },
    enter: function (t) {
      return (this.hover = !0), this.onOver(t);
    },
    onOver: function () {},
    leave: function (t) {
      return (this.hover = !1), this.release.call(this, t), this.onOut(t);
    },
    onOut: function () {},
    release: function (t) {
      return !1 === this.released
        ? ((this.released = !0),
          me.timer.clearTimeout(this.holdTimeout),
          this.onRelease(t))
        : void 0;
    },
    onRelease: function () {
      return !1;
    },
    hold: function () {
      me.timer.clearTimeout(this.holdTimeout), this.released || this.onHold();
    },
    onHold: function () {},
    onActivateEvent: function () {
      me.input.registerPointerEvent(
        "pointerdown",
        this,
        this.clicked.bind(this)
      ),
        me.input.registerPointerEvent(
          "pointerup",
          this,
          this.release.bind(this)
        ),
        me.input.registerPointerEvent(
          "pointercancel",
          this,
          this.release.bind(this)
        ),
        me.input.registerPointerEvent(
          "pointerenter",
          this,
          this.enter.bind(this)
        ),
        me.input.registerPointerEvent(
          "pointerleave",
          this,
          this.leave.bind(this)
        );
    },
    onDeactivateEvent: function () {
      me.input.releasePointerEvent("pointerdown", this),
        me.input.releasePointerEvent("pointerup", this),
        me.input.releasePointerEvent("pointercancel", this),
        me.input.releasePointerEvent("pointerenter", this),
        me.input.releasePointerEvent("pointerleave", this),
        me.timer.clearTimeout(this.holdTimeout);
    },
  })),
  (function () {
    var t = function (t, e) {
        this.removeChildNow(t, e);
      },
      e = 0;
    (me.Container = me.Renderable.extend({
      init: function (t, e, i, n) {
        (this.pendingSort = null),
          (this._root = !1),
          me.Renderable.prototype.init.apply(this, [
            t || 0,
            e || 0,
            i || 1 / 0,
            n || 1 / 0,
          ]),
          (this.children = []),
          (this.sortOn = me.game.sortOn),
          (this.autoSort = !0),
          (this.autoDepth = !0),
          (this.drawCount = 0),
          (this.childBounds = this.getBounds().clone()),
          (this.autoTransform = !1);
      },
      addChild: function (t, e) {
        return (
          t.ancestor instanceof me.Container
            ? t.ancestor.removeChildNow(t)
            : t.isRenderable && (t.GUID = me.utils.createGUID(t.id)),
          (t.ancestor = this),
          this.children.push(t),
          void 0 !== t.pos &&
            ("number" == typeof e
              ? (t.pos.z = e)
              : !0 === this.autoDepth && (t.pos.z = this.children.length)),
          !0 === this.autoSort && this.sort(),
          "function" == typeof t.onActivateEvent &&
            this.isAttachedToRoot() &&
            t.onActivateEvent(),
          t
        );
      },
      addChildAt: function (t, e) {
        if (e >= 0 && e < this.children.length)
          return (
            t.ancestor instanceof me.Container
              ? t.ancestor.removeChildNow(t)
              : t.isRenderable && (t.GUID = me.utils.createGUID()),
            (t.ancestor = this),
            this.children.splice(e, 0, t),
            "function" == typeof t.onActivateEvent &&
              this.isAttachedToRoot() &&
              t.onActivateEvent(),
            t
          );
        throw new me.Container.Error(
          "Index (" + e + ") Out Of Bounds for addChildAt()"
        );
      },
      forEach: function (t, e) {
        var i = this,
          n = 0,
          r = this.children.length;
        if ("function" != typeof t)
          throw new me.Container.Error(t + " is not a function");
        for (arguments.length > 1 && (i = e); r > n; )
          t.call(i, this.children[n], n, this.children), n++;
      },
      swapChildren: function (t, e) {
        var i = this.getChildIndex(t),
          n = this.getChildIndex(e);
        if (-1 === i || -1 === n)
          throw new me.Container.Error(
            t +
              " Both the supplied childs must be a child of the caller " +
              this
          );
        var r = t.pos.z;
        (t.pos.z = e.pos.z),
          (e.pos.z = r),
          (this.children[i] = e),
          (this.children[n] = t);
      },
      getChildAt: function (t) {
        if (t >= 0 && t < this.children.length) return this.children[t];
        throw new me.Container.Error(
          "Index (" + t + ") Out Of Bounds for getChildAt()"
        );
      },
      getChildIndex: function (t) {
        return this.children.indexOf(t);
      },
      hasChild: function (t) {
        return this === t.ancestor;
      },
      getChildByProp: function (t, e) {
        function i(t, i) {
          var r = t[i];
          e instanceof RegExp && "string" == typeof r
            ? e.test(r) && n.push(t)
            : r === e && n.push(t);
        }
        for (var n = [], r = this.children.length - 1; r >= 0; r--) {
          var o = this.children[r];
          i(o, t),
            o instanceof me.Container && (n = n.concat(o.getChildByProp(t, e)));
        }
        return n;
      },
      getChildByType: function (t) {
        for (var e = [], i = this.children.length - 1; i >= 0; i--) {
          var n = this.children[i];
          n instanceof t && e.push(n),
            n instanceof me.Container && (e = e.concat(n.getChildByType(t)));
        }
        return e;
      },
      getChildByName: function (t) {
        return this.getChildByProp("name", t);
      },
      getChildByGUID: function (t) {
        var e = this.getChildByProp("GUID", t);
        return e.length > 0 ? e[0] : null;
      },
      updateChildBounds: function () {
        this.childBounds.pos.set(1 / 0, 1 / 0),
          this.childBounds.resize(-1 / 0, -1 / 0);
        for (var t, e, i = this.children.length; i--, (e = this.children[i]); )
          e.isRenderable &&
            null !==
              (t = e instanceof me.Container ? e.childBounds : e.getBounds()) &&
            this.childBounds.union(t);
        return this.childBounds;
      },
      isAttachedToRoot: function () {
        if (this._root) return !0;
        for (var t = this.ancestor; t; ) {
          if (!0 === t._root) return !0;
          t = t.ancestor;
        }
        return !1;
      },
      updateBoundsPos: function (t, e) {
        me.Renderable.prototype.updateBoundsPos.apply(this, [t, e]),
          this._absPos.set(t, e),
          this.ancestor && this._absPos.add(this.ancestor._absPos);
        for (var i, n = this.children.length; n--, (i = this.children[n]); )
          i.isRenderable && i.updateBoundsPos(i.pos.x, i.pos.y);
        return this.getBounds();
      },
      onActivateEvent: function () {
        for (var t, e = this.children.length; e--, (t = this.children[e]); )
          "function" == typeof t.onActivateEvent && t.onActivateEvent();
      },
      removeChild: function (e, i) {
        if (!this.hasChild(e))
          throw new me.Container.Error("Child is not mine.");
        t.defer(this, e, i);
      },
      removeChildNow: function (t, e) {
        if (this.hasChild(t) && this.getChildIndex(t) >= 0) {
          "function" == typeof t.onDeactivateEvent && t.onDeactivateEvent(),
            e ||
              ("function" == typeof t.destroy && t.destroy(), me.pool.push(t));
          var i = this.getChildIndex(t);
          i >= 0 && (this.children.splice(i, 1), (t.ancestor = void 0));
        }
      },
      setChildsProperty: function (t, e, i) {
        for (var n = this.children.length; n >= 0; n--) {
          var r = this.children[n];
          !0 === i && r instanceof me.Container && r.setChildsProperty(t, e, i),
            (r[t] = e);
        }
      },
      moveUp: function (t) {
        var e = this.getChildIndex(t);
        e - 1 >= 0 && this.swapChildren(t, this.getChildAt(e - 1));
      },
      moveDown: function (t) {
        var e = this.getChildIndex(t);
        e >= 0 &&
          e + 1 < this.children.length &&
          this.swapChildren(t, this.getChildAt(e + 1));
      },
      moveToTop: function (t) {
        var e = this.getChildIndex(t);
        e > 0 &&
          (this.children.splice(0, 0, this.children.splice(e, 1)[0]),
          (t.pos.z = this.children[1].pos.z + 1));
      },
      moveToBottom: function (t) {
        var e = this.getChildIndex(t);
        e >= 0 &&
          e < this.children.length - 1 &&
          (this.children.splice(
            this.children.length - 1,
            0,
            this.children.splice(e, 1)[0]
          ),
          (t.pos.z = this.children[this.children.length - 2].pos.z - 1));
      },
      sort: function (t) {
        if (!this.pendingSort) {
          if (!0 === t)
            for (var e, i = this.children.length; i--, (e = this.children[i]); )
              e instanceof me.Container && e.sort(t);
          this.pendingSort = function (t) {
            t.children.sort(t["_sort" + t.sortOn.toUpperCase()]),
              (t.pendingSort = null),
              me.game.repaint();
          }.defer(this, this);
        }
      },
      onDeactivateEvent: function () {
        for (var t, e = this.children.length; e--, (t = this.children[e]); )
          "function" == typeof t.onDeactivateEvent && t.onDeactivateEvent();
      },
      _sortZ: function (t, e) {
        return e.pos && t.pos ? e.pos.z - t.pos.z : t.pos ? -1 / 0 : 1 / 0;
      },
      _sortReverseZ: function (t, e) {
        return t.pos && e.pos ? t.pos.z - e.pos.z : t.pos ? 1 / 0 : -1 / 0;
      },
      _sortX: function (t, e) {
        var i;
        if (!e.pos || !t.pos) return t.pos ? -1 / 0 : 1 / 0;
        return e.pos.z - t.pos.z || e.pos.x - t.pos.x;
      },
      _sortY: function (t, e) {
        var i;
        if (!e.pos || !t.pos) return t.pos ? -1 / 0 : 1 / 0;
        return e.pos.z - t.pos.z || e.pos.y - t.pos.y;
      },
      destroy: function () {
        this.pendingSort &&
          (clearTimeout(this.pendingSort), (this.pendingSort = null));
        for (var t, e = this.children.length; e >= 0; t = this.children[--e])
          t && !t.isPersistent && this.removeChildNow(t);
        this.currentTransform.identity();
      },
      update: function (t) {
        me.Renderable.prototype.update.apply(this, [t]);
        var i = !1,
          n = !1,
          r = me.state.isPaused(),
          o = me.game.viewport;
        this._absPos.setV(this.pos),
          this.ancestor && this._absPos.add(this.ancestor._absPos);
        for (var s, a = this.children.length; a--, (s = this.children[a]); )
          (r && !s.updateWhenPaused) ||
            (s.isRenderable
              ? ((n = e > 0 || s.floating) && e++,
                (s.inViewport = n || o.isVisible(s.getBounds())),
                (i = ((s.inViewport || s.alwaysUpdate) && s.update(t)) || i),
                s._absPos.setV(this._absPos).add(s.pos),
                e > 0 && e--)
              : (i = s.update(t) || i));
        return i;
      },
      draw: function (t, e) {
        var i = !1,
          n = !1,
          r = 0,
          o = 0;
        (this.drawCount = 0),
          t.save(),
          t.translate(this.pos.x, this.pos.y),
          this.currentTransform.isIdentity() ||
            t.transform(this.currentTransform),
          t.setGlobalAlpha(t.globalAlpha() * this.getOpacity());
        for (var s, a = this.children.length; a--, (s = this.children[a]); )
          if (
            ((i = !0 === s.floating), (s.inViewport || i) && s.isRenderable)
          ) {
            if (((n = !s.currentTransform.isIdentity()), i))
              t.save(), t.resetTransform();
            else if (!0 === s.autoTransform) {
              var h = s.getBounds(),
                l = s.anchorPoint;
              (r = h.width * l.x),
                (o = h.height * l.y),
                n
                  ? (t.save(),
                    s.currentTransform.translate(r, o),
                    t.transform(s.currentTransform))
                  : t.translate(r, o);
            }
            s.draw(t, e),
              i
                ? t.restore()
                : !0 === s.autoTransform &&
                  (n
                    ? (s.currentTransform.translate(-r, -o), t.restore())
                    : t.translate(-r, -o)),
              this.drawCount++;
          }
        t.restore();
      },
    })),
      (me.Container.Error = me.Renderable.Error.extend({
        init: function (t) {
          me.Renderable.Error.prototype.init.apply(this, [t]),
            (this.name = "me.Container.Error");
        },
      }));
  })(),
  (me.Entity = me.Renderable.extend({
    init: function (t, e, i) {
      if (
        ((this.renderable = null),
        "number" != typeof i.width || "number" != typeof i.height)
      )
        throw new me.Entity.Error(
          "height and width properties are mandatory when passing settings parameters to an object entity"
        );
      me.Renderable.prototype.init.apply(this, [t, e, i.width, i.height]),
        i.image &&
          (this.renderable = new me.Sprite(0, 0, {
            image: i.image,
            framewidth: ~~(i.framewidth || i.width),
            frameheight: ~~(i.frameheight || i.height),
            spacing: ~~i.spacing,
            margin: ~~i.margin,
            anchorPoint: i.anchorPoint,
          })),
        i.anchorPoint && this.anchorPoint.set(i.anchorPoint.x, i.anchorPoint.y),
        (this.name = i.name || ""),
        (this.type = i.type || ""),
        (this.id = i.id || ""),
        (this.alive = !0);
      var n = Array.isArray(i.shapes)
        ? i.shapes
        : [new me.Rect(0, 0, this.width, this.height)];
      this.body ? this.body.init(this, n) : (this.body = new me.Body(this, n));
      var r = this.body.updateBounds();
      if (
        (0 === this.width &&
          0 === this.height &&
          this.resize(r.width, r.height),
        void 0 !== i.collisionMask &&
          this.body.setCollisionMask(i.collisionMask),
        void 0 !== i.collisionType)
      ) {
        if (void 0 === me.collision.types[i.collisionType])
          throw new me.Entity.Error(
            "Invalid value for the collisionType property"
          );
        this.body.collisionType = me.collision.types[i.collisionType];
      }
      this.autoTransform = !1;
    },
    distanceTo: function (t) {
      var e = this.getBounds(),
        i = t.getBounds(),
        n = e.pos.x + e.width / 2 - (i.pos.x + i.width / 2),
        r = e.pos.y + e.height / 2 - (i.pos.y + i.height / 2);
      return Math.sqrt(n * n + r * r);
    },
    distanceToPoint: function (t) {
      var e = this.getBounds(),
        i = e.pos.x + e.width / 2 - t.x,
        n = e.pos.y + e.height / 2 - t.y;
      return Math.sqrt(i * i + n * n);
    },
    angleTo: function (t) {
      var e = this.getBounds(),
        i = t.getBounds(),
        n = i.pos.x + i.width / 2 - (e.pos.x + e.width / 2);
      return Math.atan2(i.pos.y + i.height / 2 - (e.pos.y + e.height / 2), n);
    },
    angleToPoint: function (t) {
      var e = this.getBounds(),
        i = t.x - (e.pos.x + e.width / 2);
      return Math.atan2(t.y - (e.pos.y + e.height / 2), i);
    },
    update: function (t) {
      return this.renderable
        ? this.renderable.update(t)
        : me.Renderable.prototype.update.apply(this, [t]);
    },
    updateBoundsPos: function (t, e) {
      var i = this.body.pos;
      return (
        me.Renderable.prototype.updateBoundsPos.apply(this, [t + i.x, e + i.y]),
        this.getBounds()
      );
    },
    onBodyUpdate: function (t, e, i) {
      var n = this.getBounds();
      n.pos.setV(this.pos).add(t),
        this.ancestor && n.pos.add(this.ancestor._absPos),
        n.resize(e, i);
    },
    draw: function (t) {
      var e = this.renderable;
      if (e instanceof me.Renderable) {
        var i = this.anchorPoint.x * this.body.width,
          n = this.anchorPoint.y * this.body.height,
          r = this.pos.x + this.body.pos.x + i,
          o = this.pos.y + this.body.pos.y + n;
        if (
          (t.translate(r, o),
          !0 !== e.autoTransform || e.currentTransform.isIdentity())
        )
          e.draw(t);
        else {
          var s = e.getBounds(),
            a = s.width * e.anchorPoint.x,
            h = s.height * e.anchorPoint.y;
          t.save(),
            t.translate(a, h),
            t.transform(e.currentTransform),
            t.translate(-a, -h),
            e.draw(t),
            t.restore();
        }
        t.translate(-r, -o);
      }
    },
    destroy: function () {
      this.renderable &&
        (this.renderable.destroy.apply(this.renderable, arguments),
        (this.renderable = null)),
        this.body.destroy.apply(this.body, arguments),
        (this.body = null),
        me.Renderable.prototype.destroy.apply(this, arguments);
    },
    onDeactivateEvent: function () {
      this.renderable &&
        this.renderable.onDeactivateEvent &&
        this.renderable.onDeactivateEvent();
    },
    onCollision: function () {
      return !1;
    },
  })),
  (me.Entity.Error = me.Renderable.Error.extend({
    init: function (t) {
      me.Renderable.Error.prototype.init.apply(this, [t]),
        (this.name = "me.Entity.Error");
    },
  })),
  (function () {
    var t, e, i, n;
    (me.ScreenObject = me.Object.extend({
      init: function () {},
      reset: function () {
        me.game.reset(), this.onResetEvent.apply(this, arguments);
      },
      destroy: function () {
        this.onDestroyEvent.apply(this, arguments);
      },
      onResetEvent: function () {},
      onDestroyEvent: function () {},
    })),
      (t = 0),
      (e = 1e3 / 60),
      (i = me.agent.prefixed("requestAnimationFrame")),
      (n =
        me.agent.prefixed("cancelAnimationFrame") ||
        me.agent.prefixed("cancelRequestAnimationFrame")),
      (i && n) ||
        ((i = function (i) {
          var n = window.performance.now(),
            r = Math.max(0, e - (n - t)),
            o = window.setTimeout(function () {
              i(n + r);
            }, r);
          return (t = n + r), o;
        }),
        (n = function (t) {
          window.clearTimeout(t);
        })),
      (window.requestAnimationFrame = i),
      (window.cancelAnimationFrame = n),
      (me.state = (function () {
        function t() {
          -1 === h &&
            -1 !== a &&
            (me.timer.reset(), (h = window.requestAnimationFrame(n)));
        }
        function e() {
          l && -1 !== a && (me.timer.reset(), (l = !1));
        }
        function i() {
          l = !0;
        }
        function n(t) {
          me.game.update(t),
            me.game.draw(),
            -1 !== h && (h = window.requestAnimationFrame(n));
        }
        function r() {
          window.cancelAnimationFrame(h), (h = -1);
        }
        function o(e) {
          r(),
            u[a] && u[a].screen.destroy(),
            u[e] &&
              (u[(a = e)].screen.reset.apply(u[a].screen, f),
              t(),
              d && d(),
              me.game.repaint());
        }
        var s = {},
          a = -1,
          h = -1,
          l = !1,
          u = {},
          c = { color: "", duration: 0 },
          d = null,
          f = null,
          p = 0;
        return (
          (s.LOADING = 0),
          (s.MENU = 1),
          (s.READY = 2),
          (s.PLAY = 3),
          (s.GAMEOVER = 4),
          (s.GAME_END = 5),
          (s.SCORE = 6),
          (s.CREDITS = 7),
          (s.SETTINGS = 8),
          (s.USER = 100),
          (s.onPause = null),
          (s.onResume = null),
          (s.onStop = null),
          (s.onRestart = null),
          (s.init = function () {
            s.set(s.LOADING, new me.DefaultLoadingScreen());
          }),
          (s.stop = function (t) {
            a !== s.LOADING &&
              s.isRunning() &&
              (r(),
              !0 === t && me.audio.pauseTrack(),
              (p = window.performance.now()),
              me.event.publish(me.event.STATE_STOP),
              "function" == typeof s.onStop && s.onStop());
          }),
          (s.pause = function (t) {
            a === s.LOADING ||
              s.isPaused() ||
              (i(),
              !0 === t && me.audio.pauseTrack(),
              (p = window.performance.now()),
              me.event.publish(me.event.STATE_PAUSE),
              "function" == typeof s.onPause && s.onPause());
          }),
          (s.restart = function (e) {
            s.isRunning() ||
              (t(),
              !0 === e && me.audio.resumeTrack(),
              (p = window.performance.now() - p),
              me.game.repaint(),
              me.event.publish(me.event.STATE_RESTART, [p]),
              "function" == typeof s.onRestart && s.onRestart());
          }),
          (s.resume = function (t) {
            s.isPaused() &&
              (e(),
              !0 === t && me.audio.resumeTrack(),
              (p = window.performance.now() - p),
              me.event.publish(me.event.STATE_RESUME, [p]),
              "function" == typeof s.onResume && s.onResume());
          }),
          (s.isRunning = function () {
            return -1 !== h;
          }),
          (s.isPaused = function () {
            return l;
          }),
          (s.set = function (t, e) {
            (u[t] = {}), (u[t].screen = e), (u[t].transition = !0);
          }),
          (s.current = function () {
            return u[a].screen;
          }),
          (s.transition = function (t, e, i) {
            "fade" === t && ((c.color = e), (c.duration = i));
          }),
          (s.setTransition = function (t, e) {
            u[t].transition = e;
          }),
          (s.change = function (t) {
            if (void 0 === u[t])
              throw new me.Error(
                "Undefined ScreenObject for state '" + t + "'"
              );
            s.isCurrent(t) ||
              ((f = null),
              arguments.length > 1 &&
                (f = Array.prototype.slice.call(arguments, 1)),
              c.duration && u[t].transition
                ? ((d = function () {
                    me.game.viewport.fadeOut(c.color, c.duration);
                  }),
                  me.game.viewport.fadeIn(c.color, c.duration, function () {
                    o.defer(this, t);
                  }))
                : o.defer(this, t));
          }),
          (s.isCurrent = function (t) {
            return a === t;
          }),
          s
        );
      })());
  })(),
  (function () {
    var t = me.Renderable.extend({
        init: function (t, e, i) {
          me.Renderable.prototype.init.apply(this, [t.x, t.y, e, i]),
            (this.invalidate = !1),
            (this.barHeight = 4),
            (this.progress = 0);
        },
        onProgressUpdate: function (t) {
          (this.progress = ~~(t * this.width)), (this.invalidate = !0);
        },
        update: function () {
          return !0 === this.invalidate && ((this.invalidate = !1), !0);
        },
        draw: function (t) {
          t.setColor("black"),
            t.fillRect(
              0,
              this.height / 2 - this.barHeight / 2,
              this.width,
              this.barHeight
            ),
            t.setColor("#55aa00"),
            t.fillRect(
              2,
              this.height / 2 - this.barHeight / 2,
              this.progress,
              this.barHeight
            ),
            t.setColor("white");
        },
      }),
      e = me.Renderable.extend({
        init: function (t, e, i) {
          me.Renderable.prototype.init.apply(this, [e, i, 100, 85]),
            (this.iconCanvas = t);
          var n = me.video.renderer.getContext2d(this.iconCanvas);
          n.translate(this.pos.x, this.pos.y),
            n.beginPath(),
            n.moveTo(0.7, 48.9),
            n.bezierCurveTo(10.8, 68.9, 38.4, 75.8, 62.2, 64.5),
            n.bezierCurveTo(86.1, 53.1, 97.2, 27.7, 87, 7.7),
            n.lineTo(87, 7.7),
            n.bezierCurveTo(89.9, 15.4, 73.9, 30.2, 50.5, 41.4),
            n.bezierCurveTo(27.1, 52.5, 5.2, 55.8, 0.7, 48.9),
            n.lineTo(0.7, 48.9),
            n.lineTo(0.7, 48.9),
            n.closePath(),
            (n.fillStyle = "rgb(255, 255, 255)"),
            n.fill(),
            n.beginPath(),
            n.moveTo(84, 7),
            n.bezierCurveTo(87.6, 14.7, 72.5, 30.2, 50.2, 41.6),
            n.bezierCurveTo(27.9, 53, 6.9, 55.9, 3.2, 48.2),
            n.bezierCurveTo(-0.5, 40.4, 14.6, 24.9, 36.9, 13.5),
            n.bezierCurveTo(59.2, 2.2, 80.3, -0.8, 84, 7),
            n.lineTo(84, 7),
            n.closePath(),
            (n.lineWidth = 5.3),
            (n.strokeStyle = "rgb(255, 255, 255)"),
            (n.lineJoin = "miter"),
            (n.miterLimit = 4),
            n.stroke();
        },
        draw: function (t) {
          t.drawImage(this.iconCanvas, 0, 0);
        },
      }),
      i = me.Renderable.extend({
        init: function (t, e) {
          me.Renderable.prototype.init.apply(this, [0, 0, t, e]),
            (this.logo1 = new me.Font("century gothic", 32, "white", "middle")),
            (this.logo2 = new me.Font(
              "century gothic",
              32,
              "#55aa00",
              "middle"
            )),
            this.logo2.bold(),
            (this.logo1.textBaseline = this.logo2.textBaseline = "alphabetic");
        },
        draw: function (t) {
          var e = this.logo1.measureText(t, "melon").width,
            i = (this.width - e - this.logo2.measureText(t, "JS").width) / 2,
            n = this.height / 2 + this.logo2.measureText(t, "melon").height;
          this.logo1.draw(t, "melon", i, n),
            (i += e),
            this.logo2.draw(t, "JS", i, n);
        },
      });
    me.DefaultLoadingScreen = me.ScreenObject.extend({
      onResetEvent: function () {
        me.game.world.addChild(
          new me.ColorLayer("background", "#202020", 0),
          0
        );
        var n = new t(
          new me.Vector2d(),
          me.video.renderer.getWidth(),
          me.video.renderer.getHeight()
        );
        (this.loaderHdlr = me.event.subscribe(
          me.event.LOADER_PROGRESS,
          n.onProgressUpdate.bind(n)
        )),
          (this.resizeHdlr = me.event.subscribe(
            me.event.VIEWPORT_ONRESIZE,
            n.resize.bind(n)
          )),
          me.game.world.addChild(n, 1),
          (this.iconCanvas = me.video.createCanvas(
            me.game.viewport.width,
            me.game.viewport.height,
            !1
          ));
        var r = new e(
          this.iconCanvas,
          (me.video.renderer.getWidth() - 100) / 2,
          me.video.renderer.getHeight() / 2 - n.barHeight / 2 - 90
        );
        me.game.world.addChild(r, 1),
          me.game.world.addChild(
            new i(me.video.renderer.getWidth(), me.video.renderer.getHeight()),
            1
          );
      },
      onDestroyEvent: function () {
        me.event.unsubscribe(this.loaderHdlr),
          me.event.unsubscribe(this.resizeHdlr),
          (this.loaderHdlr = this.resizeHdlr = null);
      },
    });
  })(),
  (me.loader = (function () {
    function t() {
      c === u
        ? o.onload
          ? (clearTimeout(d),
            setTimeout(function () {
              o.onload(), me.event.publish(me.event.LOADER_COMPLETE);
            }, 300))
          : console.error("no load callback defined")
        : (d = setTimeout(t, 100));
    }
    function e(t, e, i) {
      (s[t.name] = new Image()),
        (s[t.name].onload = e),
        (s[t.name].onerror = i),
        (s[t.name].src = t.src + o.nocache);
    }
    function i(t, e, i) {
      function n(e) {
        (a[t.name] = e),
          "tmx" === t.type && me.levelDirector.addTMXLevel(t.name);
      }
      if (t.data) return n(t.data), void e();
      var r = new XMLHttpRequest(),
        s = me.utils.getFileExtension(t.src);
      r.overrideMimeType &&
        ("json" === s
          ? r.overrideMimeType("application/json")
          : r.overrideMimeType("text/xml")),
        r.open("GET", t.src + o.nocache, !0),
        (r.ontimeout = i),
        (r.onreadystatechange = function () {
          if (4 === r.readyState) {
            if (200 === r.status || (0 === r.status && r.responseText)) {
              var t = null;
              switch (s) {
                case "xml":
                case "tmx":
                case "tsx":
                  if (me.device.ua.match(/msie/i) || !r.responseXML) {
                    if (!window.DOMParser)
                      throw new o.Error(
                        "XML file format loading not supported, use the JSON file format instead"
                      );
                    t = new DOMParser().parseFromString(
                      r.responseText,
                      "text/xml"
                    );
                  } else t = r.responseXML;
                  var a = me.TMXUtils.parse(t);
                  switch (s) {
                    case "tmx":
                      t = a.map;
                      break;
                    case "tsx":
                      t = a.tilesets[0];
                  }
                  break;
                case "json":
                  t = JSON.parse(r.responseText);
                  break;
                default:
                  throw new o.Error("TMX file format " + s + "not supported !");
              }
              n(t), e();
            } else i();
          }
        }),
        r.send(null);
    }
    function n(t, e, i) {
      var n = new XMLHttpRequest();
      n.overrideMimeType && n.overrideMimeType("application/json"),
        n.open("GET", t.src + o.nocache, !0),
        (n.ontimeout = i),
        (n.onreadystatechange = function () {
          4 === n.readyState &&
            (200 === n.status || (0 === n.status && n.responseText)
              ? ((l[t.name] = JSON.parse(n.responseText)), e())
              : i());
        }),
        n.send(null);
    }
    function r(t, e, i) {
      var n = new XMLHttpRequest();
      n.open("GET", t.src + o.nocache, !0),
        (n.responseType = "arraybuffer"),
        (n.onerror = i),
        (n.onload = function () {
          var i = n.response;
          if (i) {
            for (
              var r = new Uint8Array(i), o = [], s = 0;
              s < r.byteLength;
              s++
            )
              o[s] = String.fromCharCode(r[s]);
            (h[t.name] = o.join("")), e();
          }
        }),
        n.send();
    }
    var o = {},
      s = {},
      a = {},
      h = {},
      l = {},
      u = 0,
      c = 0,
      d = 0;
    return (
      (o.nocache = ""),
      (o.onload = void 0),
      (o.onProgress = void 0),
      (o.Error = me.Error.extend({
        init: function (t) {
          me.Error.prototype.init.apply(this, [t]),
            (this.name = "me.loader.Error");
        },
      })),
      (o.onResourceLoaded = function (t) {
        c++;
        var e = o.getLoadProgress();
        o.onProgress && o.onProgress(e, t),
          me.event.publish(me.event.LOADER_PROGRESS, [e, t]);
      }),
      (o.onLoadingError = function (t) {
        throw new o.Error("Failed loading resource " + t.src);
      }),
      (o.setNocache = function (t) {
        o.nocache = t ? "?" + ~~(1e7 * Math.random()) : "";
      }),
      (o.preload = function (e, i, n) {
        for (var r = 0; r < e.length; r++)
          u += o.load(
            e[r],
            o.onResourceLoaded.bind(o, e[r]),
            o.onLoadingError.bind(o, e[r])
          );
        void 0 !== i && (o.onload = i),
          !1 !== n && me.state.change(me.state.LOADING),
          t();
      }),
      (o.load = function (t, s, a) {
        switch (t.type) {
          case "binary":
            return r.call(this, t, s, a), 1;
          case "image":
            return e.call(this, t, s, a), 1;
          case "json":
            return n.call(this, t, s, a), 1;
          case "tmx":
          case "tsx":
            return i.call(this, t, s, a), 1;
          case "audio":
            return me.audio.load(t, !!t.stream, s, a), 1;
          default:
            throw new o.Error(
              "load : unknown or invalid resource type : " + t.type
            );
        }
      }),
      (o.unload = function (t) {
        switch (t.type) {
          case "binary":
            return t.name in h && (delete h[t.name], !0);
          case "image":
            return (
              t.name in s &&
              ("function" == typeof s[t.name].dispose && s[t.name].dispose(),
              delete s[t.name],
              !0)
            );
          case "json":
            return t.name in l && (delete l[t.name], !0);
          case "tmx":
          case "tsx":
            return t.name in a && (delete a[t.name], !0);
          case "audio":
            return me.audio.unload(t.name);
          default:
            throw new o.Error(
              "unload : unknown or invalid resource type : " + t.type
            );
        }
      }),
      (o.unloadAll = function () {
        var t;
        for (t in h)
          h.hasOwnProperty(t) && o.unload({ name: t, type: "binary" });
        for (t in s)
          s.hasOwnProperty(t) && o.unload({ name: t, type: "image" });
        for (t in a) a.hasOwnProperty(t) && o.unload({ name: t, type: "tmx" });
        for (t in l) l.hasOwnProperty(t) && o.unload({ name: t, type: "json" });
        me.audio.unloadAll();
      }),
      (o.getTMX = function (t) {
        return (t = "" + t) in a ? a[t] : null;
      }),
      (o.getBinary = function (t) {
        return (t = "" + t) in h ? h[t] : null;
      }),
      (o.getImage = function (t) {
        return (t = "" + t) in s ? s[t] : null;
      }),
      (o.getJSON = function (t) {
        return (t = "" + t) in l ? l[t] : null;
      }),
      (o.getLoadProgress = function () {
        return c / u;
      }),
      o
    );
  })()),
  (function () {
    var t = ["ex", "em", "pt", "px"],
      e = [12, 24, 0.75, 1];
    me.Font = me.Renderable.extend({
      init: function (t, e, i, n) {
        (this.fontSize = new me.Vector2d()),
          (this.fillStyle = new me.Color().copy(i)),
          (this.strokeStyle = new me.Color(0, 0, 0)),
          (this.lineWidth = 1),
          (this.textAlign = n || "left"),
          (this.textBaseline = "top"),
          (this.lineHeight = 1),
          me.Renderable.prototype.init.apply(this, [0, 0, 0, 0]),
          this.setFont(t, e, i, n),
          this.gid || (this.gid = me.utils.createGUID());
      },
      bold: function () {
        this.font = "bold " + this.font;
      },
      italic: function () {
        this.font = "italic " + this.font;
      },
      setFont: function (i, n, r, o) {
        var s = i.split(",").map(function (t) {
          return (
            (t = t.trim()), /(^".*"$)|(^'.*'$)/.test(t) ? t : '"' + t + '"'
          );
        });
        if ("number" == typeof n) (this.fontSize.y = n), (n += "px");
        else {
          var a = n.match(/([-+]?[\d.]*)(.*)/);
          (this.fontSize.y = parseFloat(a[1])),
            a[2] ? (this.fontSize.y *= e[t.indexOf(a[2])]) : (n += "px");
        }
        (this.height = this.fontSize.y),
          (this.font = n + " " + s.join(",")),
          void 0 !== r && this.fillStyle.copy(r),
          o && (this.textAlign = o);
      },
      measureText: function (t, e) {
        var i = t.fontContext2D;
        (i.font = this.font),
          (i.fillStyle = this.fillStyle.toRGBA()),
          (i.textAlign = this.textAlign),
          (i.textBaseline = this.textBaseline),
          (this.height = this.width = 0);
        for (var n = ("" + e).split("\n"), r = 0; r < n.length; r++)
          (this.width = Math.max(
            i.measureText(n[r].trimRight()).width,
            this.width
          )),
            (this.height += this.fontSize.y * this.lineHeight);
        return { width: this.width, height: this.height };
      },
      draw: function (t, e, i, n) {
        var r = t.globalAlpha();
        t.setGlobalAlpha(r * this.getOpacity()),
          t.drawFont(this._drawFont(t.fontContext2D, e, ~~i, ~~n, !1)),
          t.setGlobalAlpha(r);
      },
      drawStroke: function (t, e, i, n) {
        var r = t.globalAlpha();
        t.setGlobalAlpha(r * this.getOpacity()),
          t.drawFont(this._drawFont(t.fontContext2D, e, ~~i, ~~n, !0)),
          t.setGlobalAlpha(r);
      },
      _drawFont: function (t, e, i, n, r) {
        (t.font = this.font),
          (t.fillStyle = this.fillStyle.toRGBA()),
          r &&
            ((t.strokeStyle = this.strokeStyle.toRGBA()),
            (t.lineWidth = this.lineWidth)),
          (t.textAlign = this.textAlign),
          (t.textBaseline = this.textBaseline);
        for (
          var o = ("" + e).split("\n"),
            s = "",
            a = 0,
            h = n,
            l = this.fontSize.y * this.lineHeight,
            u = 0;
          u < o.length;
          u++
        )
          (s = o[u].trimRight()),
            (a = Math.max(a, t.measureText(s).width)),
            t[r ? "strokeText" : "fillText"](s, i, n),
            (n += l);
        var c =
          "right" === this.textAlign
            ? i - a
            : "center" === this.textAlign
            ? i - ~~(a / 2)
            : i;
        return (
          (h =
            0 === this.textBaseline.search(/^(top|hanging)$/)
              ? h
              : "middle" === this.textBaseline
              ? h - ~~(l / 2)
              : h - l),
          this.getBounds().setShape(
            ~~c,
            ~~h,
            ~~(a + 0.5),
            ~~(o.length * l + 0.5)
          )
        );
      },
    });
  })(),
  (function () {
    var t = function (t, e) {
      for (var i = e.split(""), n = 0, r = null, o = 0; o < i.length; o++) {
        var s = i[o].charCodeAt(0),
          a = t.bitmapFontData.glyphs[s],
          h = r && r.kerning ? r.getKerning(s) : 0;
        (n += (a.xadvance + h) * t.fontScale.x), (r = a);
      }
      return n;
    };
    me.BitmapFont = me.Renderable.extend({
      init: function (t, e, i, n, r) {
        (this.sSize = me.pool.pull("me.Vector2d", 0, 0)),
          (this.fontImage = e),
          (this.bitmapFontData = new me.BitmapFontData(t)),
          (this.fontScale = me.pool.pull("me.Vector2d", 1, 1)),
          (this.charCount = 0),
          me.Renderable.prototype.init.apply(this, [0, 0, 0, 0, 0, 0]),
          (this.textAlign = n || "left"),
          (this.textBaseline = r || "top"),
          (this.lineHeight = 1),
          i && this.resize(i);
      },
      set: function (t, e) {
        (this.textAlign = t), e && this.resize(e);
      },
      resize: function (t) {
        this.fontScale.set(t, t);
      },
      measureText: function (e) {
        for (
          var i = ("" + e).split("\n"),
            n = 0,
            r = 0,
            o = this.bitmapFontData.capHeight * this.lineHeight,
            s = 0;
          s < i.length;
          s++
        )
          (n = Math.max(t(this, i[s]), n)), (r += o);
        return { width: n, height: r * this.fontScale.y };
      },
      draw: function (e, i, n, r) {
        var o = ("" + i).split("\n"),
          s = n,
          a =
            this.bitmapFontData.capHeight * this.lineHeight * this.fontScale.y,
          h = e.globalAlpha();
        e.setGlobalAlpha(h * this.getOpacity()), this.pos.set(n, r, this.pos.z);
        for (var l = 0; l < o.length; l++) {
          n = s;
          var u = o[l].trimRight(),
            c = t(this, u);
          switch (this.textAlign) {
            case "right":
              n -= c;
              break;
            case "center":
              n -= 0.5 * c;
          }
          switch (this.textBaseline) {
            case "middle":
              r -= 0.5 * a;
              break;
            case "ideographic":
            case "alphabetic":
            case "bottom":
              r -= a;
          }
          for (var d = null, f = 0, p = u.length; p > f; f++) {
            var g = u.charCodeAt(f),
              v = this.bitmapFontData.glyphs[g],
              m = d && d.kerning ? d.getKerning(g) : 0;
            0 !== v.width &&
              0 !== v.height &&
              e.drawImage(
                this.fontImage,
                v.src.x,
                v.src.y,
                v.width,
                v.height,
                n + v.offset.x,
                r + v.offset.y * this.fontScale.y,
                v.width * this.fontScale.x,
                v.height * this.fontScale.y
              ),
              (n += (v.xadvance + m) * this.fontScale.x),
              (d = v);
          }
          r += a;
        }
        e.setGlobalAlpha(h);
      },
    });
  })(),
  (me.BitmapFontData = me.Object.extend({
    init: function (t) {
      (this.padTop = 0),
        (this.padRight = 0),
        (this.padBottom = 0),
        (this.padLeft = 0),
        (this.lineHeight = 0),
        (this.capHeight = 1),
        (this.descent = 0),
        (this.scale = new me.Vector2d()),
        (this.glyphs = {}),
        (this.xChars = [
          "x",
          "e",
          "a",
          "o",
          "n",
          "s",
          "r",
          "c",
          "u",
          "m",
          "v",
          "w",
          "z",
        ]),
        (this.capChars = [
          "M",
          "N",
          "B",
          "D",
          "C",
          "E",
          "F",
          "K",
          "A",
          "G",
          "H",
          "I",
          "J",
          "L",
          "O",
          "P",
          "Q",
          "R",
          "S",
          "T",
          "U",
          "V",
          "W",
          "X",
          "Y",
          "Z",
        ]),
        this.parse(t);
    },
    _createSpaceGlyph: function () {
      var t = 32,
        e = this.glyphs[t];
      e ||
        (((e = me.pool.pull("me.Glyph")).id = t),
        (e.xadvance = this._getFirstGlyph().xadvance),
        (this.glyphs[t] = e));
    },
    _getFirstGlyph: function () {
      for (var t = Object.keys(this.glyphs), e = 0; e < t.length; e++)
        if (t[e] > 32) return this.glyphs[t[e]];
      return null;
    },
    _getValueFromPair: function (t, e) {
      var i = t.match(e);
      if (!i) throw "Could not find pattern " + e + " in string: " + t;
      return i[0].split("=")[1];
    },
    parse: function (t) {
      if (!t)
        throw "File containing font data was empty, cannot load the bitmap font.";
      var e = t.split(/\r\n|\n/),
        i = t.match(/padding\=\d+,\d+,\d+,\d+/g);
      if (!i) throw "Padding not found in first line";
      var n = i[0].split("=")[1].split(",");
      (this.padTop = parseFloat(n[0])),
        (this.padLeft = parseFloat(n[1])),
        (this.padBottom = parseFloat(n[2])),
        (this.padRight = parseFloat(n[3])),
        (this.lineHeight = parseFloat(
          this._getValueFromPair(e[1], /lineHeight\=\d+/g)
        ));
      for (
        var r = parseFloat(this._getValueFromPair(e[1], /base\=\d+/g)),
          o = this.padTop + this.padBottom,
          s = null,
          a = 4;
        a < e.length;
        a++
      ) {
        var h = e[a],
          l = h.split(/=|\s+/);
        if (h && !/^kernings/.test(h)) {
          if (/^kerning\s/.test(h)) {
            var u = parseFloat(l[2]),
              c = parseFloat(l[4]),
              d = parseFloat(l[6]);
            null != (s = this.glyphs[u]) && s.setKerning(c, d);
          } else {
            s = me.pool.pull("me.Glyph");
            var f = parseFloat(l[2]);
            (s.id = f),
              s.src.set(parseFloat(l[4]), parseFloat(l[6])),
              (s.width = parseFloat(l[8])),
              (s.height = parseFloat(l[10]));
            var p = parseFloat(l[14]);
            s.offset.set(parseFloat(l[12]), p),
              (s.xadvance = parseFloat(l[16])),
              s.width > 0 &&
                s.height > 0 &&
                (this.descent = Math.min(r + s.yoffset, this.descent)),
              (this.glyphs[f] = s);
          }
        }
      }
      (this.descent += this.padBottom), this._createSpaceGlyph();
      var g = null;
      for (a = 0; a < this.xChars.length; a++) {
        var v = this.xChars[a];
        if ((g = this.glyphs[v.charCodeAt(0)])) break;
      }
      g || (g = this._getFirstGlyph());
      var m = null;
      for (a = 0; a < this.capChars.length; a++) {
        var $ = this.capChars[a];
        if ((m = this.glyphs[$.charCodeAt(0)])) break;
      }
      if (m) this.capHeight = m.height;
      else
        for (var y in this.glyphs)
          if (this.glyphs.hasOwnProperty(y)) {
            if (0 === (s = this.glyphs[y]).height || 0 === s.width) continue;
            this.capHeight = Math.max(this.capHeight, s.height);
          }
      this.capHeight -= o;
    },
  })),
  (function () {
    var t = 9,
      e = 1 << t;
    me.Glyph = me.Object.extend({
      init: function () {
        (this.src = new me.Vector2d()),
          (this.offset = new me.Vector2d()),
          this.onResetEvent();
      },
      onResetEvent: function () {
        (this.id = 0),
          this.src.set(0, 0),
          (this.width = 0),
          (this.height = 0),
          (this.u = 0),
          (this.v = 0),
          (this.u2 = 0),
          (this.v2 = 0),
          this.offset.set(0, 0),
          (this.xadvance = 0),
          (this.fixedWidth = !1);
      },
      getKerning: function (i) {
        if (this.kerning) {
          var n = this.kerning[i >>> t];
          if (n) return n[i & (e - 1)] || 0;
        }
        return 0;
      },
      setKerning: function (i, n) {
        this.kerning || (this.kerning = {});
        var r = this.kerning[i >>> t];
        void 0 === r &&
          ((this.kerning[i >>> t] = {}), (r = this.kerning[i >>> t])),
          (r[i & (e - 1)] = n);
      },
    });
  })(),
  (me.audio = (function () {
    function t(t, n) {
      if (r++ > 3) {
        var o = "melonJS: failed loading " + t;
        if (!1 !== me.sys.stopOnAudioError) throw new e.Error(o);
        me.audio.disable(), n && n(), console.log(o + ", disabling audio");
      } else i[t].load();
    }
    var e = {},
      i = {},
      n = null,
      r = 0;
    return (
      (e.Error = me.Error.extend({
        init: function (t) {
          me.Error.prototype.init.apply(this, [t]),
            (this.name = "me.audio.Error");
        },
      })),
      (e.init = function (t) {
        if (!me.initialized)
          throw new e.Error(
            "me.audio.init() called before engine initialization."
          );
        return (
          (t = "string" == typeof t ? t : "mp3"),
          (this.audioFormats = t.split(",")),
          !Howler.noAudio
        );
      }),
      (e.enable = function () {
        this.unmuteAll();
      }),
      (e.disable = function () {
        this.muteAll();
      }),
      (e.load = function (n, o, s, a) {
        var h = [];
        if (void 0 === this.audioFormats || 0 === this.audioFormats.length)
          throw new e.Error(
            "target audio extension(s) should be set through me.audio.init() before calling the preloader."
          );
        for (var l = 0; l < this.audioFormats.length; l++)
          h.push(
            n.src + n.name + "." + this.audioFormats[l] + me.loader.nocache
          );
        return (
          (i[n.name] = new Howl({
            src: h,
            volume: Howler.volume(),
            html5: !0 === o,
            onloaderror: function () {
              t.call(me.audio, n.name, a);
            },
            onload: function () {
              (r = 0), s && s();
            },
          })),
          1
        );
      }),
      (e.play = function (t, e, n, r) {
        var o = i[t];
        if (o && void 0 !== o) {
          var s = o.play();
          return (
            "boolean" == typeof e && o.loop(e, s),
            o.volume("number" == typeof r ? r.clamp(0, 1) : Howler.volume(), s),
            "function" == typeof n &&
              (!0 === e ? o.on("end", n, s) : o.once("end", n, s)),
            s
          );
        }
      }),
      (e.fade = function (t, e, n, r, o) {
        var s = i[t];
        s && void 0 !== s && s.fade(e, n, r, o);
      }),
      (e.rate = function (t, e, n) {
        var r = i[t];
        if (r && void 0 !== r) {
          var o = [];
          return (
            void 0 !== e && (o[o.length] = e),
            void 0 !== n && (o[o.length] = n),
            r.rate.apply(r, o)
          );
        }
      }),
      (e.stop = function (t, e) {
        var n = i[t];
        n && void 0 !== n && (n.stop(e), n.off("end", e));
      }),
      (e.pause = function (t, e) {
        var n = i[t];
        n && void 0 !== n && n.pause(e);
      }),
      (e.resume = function (t, e) {
        var n = i[t];
        n && void 0 !== n && n.play(e);
      }),
      (e.playTrack = function (t, e) {
        return (n = t), me.audio.play(n, !0, null, e);
      }),
      (e.stopTrack = function () {
        null !== n && (i[n].stop(), (n = null));
      }),
      (e.pauseTrack = function () {
        null !== n && i[n].pause();
      }),
      (e.resumeTrack = function () {
        null !== n && i[n].play();
      }),
      (e.getCurrentTrack = function () {
        return n;
      }),
      (e.setVolume = function (t) {
        Howler.volume(t);
      }),
      (e.getVolume = function () {
        return Howler.volume();
      }),
      (e.mute = function (t, e, n) {
        n = void 0 === n || !!n;
        var r = i[t];
        r && void 0 !== r && r.mute(n, e);
      }),
      (e.unmute = function (t, i) {
        e.mute(t, i, !1);
      }),
      (e.muteAll = function () {
        Howler.mute(!0);
      }),
      (e.unmuteAll = function () {
        Howler.mute(!1);
      }),
      (e.unload = function (t) {
        return (
          t in i &&
          (i[t].unload(),
          "function" == typeof i[t].dispose && i[t].dispose(),
          delete i[t],
          !0)
        );
      }),
      (e.unloadAll = function () {
        for (var t in i) i.hasOwnProperty(t) && e.unload(t);
      }),
      e
    );
  })()),
  (me.video = (function () {
    function t(t, e, i, n) {
      try {
        return new me.WebGLRenderer(t, e, i, n);
      } catch (r) {
        return new me.CanvasRenderer(t, e, i, n);
      }
    }
    var e = {},
      i = null,
      n = 0,
      r = 1,
      o = 0,
      s = 0,
      a = 1 / 0,
      h = 1 / 0,
      l = {
        wrapper: void 0,
        renderer: 0,
        doubleBuffering: !1,
        autoScale: !1,
        scale: 1,
        scaleMethod: "fit",
        transparent: !1,
        antiAlias: !1,
        subPixel: !1,
        verbose: !1,
      };
    return (
      (e.Error = me.Error.extend({
        init: function (t) {
          me.Error.prototype.init.apply(this, [t]),
            (this.name = "me.video.Error");
        },
      })),
      (e.CANVAS = 0),
      (e.WEBGL = 1),
      (e.AUTO = 2),
      (e.init = function (n, a, h) {
        if (!me.initialized)
          throw new e.Error(
            "me.video.init() called before engine initialization."
          );
        ((l = Object.assign(l, h || {})).doubleBuffering = !!l.doubleBuffering),
          (l.autoScale = "auto" === l.scale),
          0 !==
            l.scaleMethod.search(
              /^(fill-(min|max)|fit|flex(-(width|height))?|stretch)$/
            ) && (l.scaleMethod = "fit"),
          (l.transparent = !!l.transparent),
          !0 === me.game.HASH.webgl && (l.renderer = e.WEBGL),
          (l.scale = l.autoScale ? 1 : +l.scale || 1),
          (me.sys.scale = new me.Vector2d(l.scale, l.scale)),
          (l.autoScale || 1 !== l.scale) && (l.doubleBuffering = !0),
          (r = n / a),
          (o = n),
          (s = a);
        var u = n * me.sys.scale.x,
          c = a * me.sys.scale.y;
        if (
          ((l.zoomX = u),
          (l.zoomY = c),
          window.addEventListener(
            "resize",
            throttle(100, !1, function (t) {
              me.event.publish(me.event.WINDOW_ONRESIZE, [t]);
            }),
            !1
          ),
          window.addEventListener(
            "orientationchange",
            function (t) {
              me.event.publish(me.event.WINDOW_ONORIENTATION_CHANGE, [t]);
            },
            !1
          ),
          me.event.subscribe(
            me.event.WINDOW_ONRESIZE,
            me.video.onresize.bind(me.video)
          ),
          me.event.subscribe(
            me.event.WINDOW_ONORIENTATION_CHANGE,
            me.video.onresize.bind(me.video)
          ),
          (i =
            !0 === me.device.ejecta
              ? document.getElementById("canvas")
              : e.createCanvas(u, c, !0)),
          h.wrapper && (l.wrapper = document.getElementById(h.wrapper)),
          l.wrapper || (l.wrapper = document.body),
          l.wrapper.appendChild(i),
          !i.getContext)
        )
          return !1;
        switch (l.renderer) {
          case e.WEBGL:
            this.renderer = new me.WebGLRenderer(i, n, a, l);
            break;
          case e.AUTO:
            this.renderer = t(i, n, a, l);
            break;
          default:
            this.renderer = new me.CanvasRenderer(i, n, a, l);
        }
        var d = me.device.getPixelRatio();
        if (
          (d > 1 &&
            ((i.style.width = i.width / d + "px"),
            (i.style.height = i.height / d + "px")),
          window.getComputedStyle)
        ) {
          var f = window.getComputedStyle(i, null);
          me.video.setMaxSize(
            parseInt(f.maxWidth, 10),
            parseInt(f.maxHeight, 10)
          );
        }
        return me.game.init(), me.video.onresize(), !0;
      }),
      (e.getPos = function (t) {
        return (t = t || this.renderer.getScreenCanvas()).getBoundingClientRect
          ? t.getBoundingClientRect()
          : { left: 0, top: 0 };
      }),
      (e.setMaxSize = function (t, e) {
        (a = t || 1 / 0), (h = e || 1 / 0), this.onresize.defer(this);
      }),
      (e.createCanvas = function (t, n, r) {
        if (0 === t || 0 === n)
          throw new e.Error(
            "width or height was zero, Canvas could not be initialized !"
          );
        var o = document.createElement("canvas");
        return (
          !0 === r &&
            me.device.cocoon &&
            !0 !== me.device.android2 &&
            (o.screencanvas = !0),
          (o.width = t || i.width),
          (o.height = n || i.height),
          o
        );
      }),
      (e.getWrapper = function () {
        return l.wrapper;
      }),
      (e.onresize = function () {
        var t = 1,
          e = 1;
        if (
          (void 0 !== window.orientation
            ? (me.device.orientation = window.orientation)
            : (me.device.orientation =
                window.outerWidth > window.outerHeight ? 90 : 0),
          l.autoScale)
        ) {
          var i,
            u,
            c = me.video.renderer.getScreenCanvas().parentNode;
          void 0 !== c && ((i = c.width), (u = c.height));
          var d = Math.min(a, i || window.innerWidth),
            f = Math.min(h, u || window.innerHeight),
            p = d / f,
            g = 1 / 0,
            v = 1 / 0;
          ("fill-min" === l.scaleMethod && p > r) ||
          ("fill-max" === l.scaleMethod && r > p) ||
          "flex-width" === l.scaleMethod
            ? ((g = Math.min(a, s * p)),
              (t = e = d / g),
              (g = ~~(g + 0.5)),
              this.renderer.resize(g, s),
              me.game.viewport.resize(g, s),
              me.game.world.updateChildBounds())
            : ("fill-min" === l.scaleMethod && r > p) ||
              ("fill-max" === l.scaleMethod && p > r) ||
              "flex-height" === l.scaleMethod
            ? ((v = Math.min(h, o * (f / d))),
              (t = e = f / v),
              (v = ~~(v + 0.5)),
              this.renderer.resize(o, v),
              me.game.viewport.resize(o, v),
              me.game.world.updateChildBounds())
            : "flex" === l.scaleMethod
            ? (this.renderer.resize(d, f),
              me.game.viewport.resize(d, f),
              me.game.world.updateChildBounds())
            : "stretch" === l.scaleMethod
            ? ((t = d / o), (e = f / s))
            : (t = e = r > p ? d / o : f / s),
            (t *= me.device.getPixelRatio()),
            (e *= me.device.getPixelRatio()),
            n && clearTimeout(n),
            (n = me.video.updateDisplaySize.defer(this, t, e));
        }
      }),
      (e.updateDisplaySize = function (t, e) {
        me.sys.scale.set(t, e),
          this.renderer.scaleCanvas(t, e),
          me.game.repaint(),
          (me.input._offset = me.video.getPos()),
          (n = 0);
      }),
      e
    );
  })()),
  (me.Renderer = me.Object.extend({
    init: function (t, e, i, n) {
      return (
        (n = n || {}),
        (this.transparent = !!n.transparent),
        (this.doubleBuffering = !!n.doubleBuffering),
        (this.antiAlias = !!n.antiAlias),
        (this.subPixel = !!n.subPixel),
        (this.verbose = !!n.verbose),
        (this.gameWidthZoom = n.zoomX || e),
        (this.gameHeightZoom = n.zoomY || i),
        (this.canvas = this.backBufferCanvas = t),
        (this.context = null),
        (this.currentColor = new me.Color(255, 255, 255, 1)),
        (this.uvOffset = 0),
        this
      );
    },
    applyRGBFilter: function (t, e, i) {
      var n,
        r,
        o = this.getContext2d(me.video.createCanvas(t.width, t.height, !1)),
        s = me.utils.getPixels(t),
        a = s.data;
      switch (e) {
        case "b&w":
          for (n = 0, r = a.length; r > n; n += 4) {
            var h = (3 * a[n] + 4 * a[n + 1] + a[n + 2]) >>> 3;
            (a[n] = h), (a[n + 1] = h), (a[n + 2] = h);
          }
          break;
        case "brightness":
          var l = Math.abs(i).clamp(0, 1);
          for (n = 0, r = a.length; r > n; n += 4)
            (a[n] *= l), (a[n + 1] *= l), (a[n + 2] *= l);
          break;
        case "transparent":
          var u = me.pool.pull("me.Color").parseCSS(i),
            c = me.pool.pull("me.Color");
          for (n = 0, r = a.length; r > n; n += 4)
            c.setColor(a[n], a[n + 1], a[n + 2]), c.equals(u) && (a[n + 3] = 0);
          me.pool.push(u), me.pool.push(c);
          break;
        default:
          return null;
      }
      return o.putImageData(s, 0, 0), o;
    },
    clear: function () {},
    reset: function () {
      this.resetTransform(), this.cache.reset();
    },
    getCanvas: function () {
      return this.backBufferCanvas;
    },
    getScreenCanvas: function () {
      return this.canvas;
    },
    getScreenContext: function () {
      return this.context;
    },
    getContext2d: function (t, e) {
      var i;
      if (null == t)
        throw new me.video.Error(
          "You must pass a canvas element in order to create a 2d context"
        );
      if (void 0 === t.getContext)
        throw new me.video.Error("Your browser does not support HTML5 canvas.");
      return (
        (i = me.device.cocoon
          ? t.getContext("2d", { antialias: this.antiAlias, alpha: !e })
          : t.getContext("2d", { alpha: !e })).canvas || (i.canvas = t),
        this.setAntiAlias(i, this.antiAlias),
        i
      );
    },
    getWidth: function () {
      return this.backBufferCanvas.width;
    },
    getHeight: function () {
      return this.backBufferCanvas.height;
    },
    getColor: function () {
      return this.currentColor;
    },
    globalAlpha: function () {
      return this.currentColor.glArray[3];
    },
    resize: function (t, e) {
      (this.backBufferCanvas.width = t), (this.backBufferCanvas.height = e);
    },
    setAntiAlias: function (t, e) {
      void 0 !== t &&
        me.agent.setPrefixed("imageSmoothingEnabled", !0 === e, t);
      var i = t.canvas.style["image-rendering"];
      !1 !== e || ("" !== i && "auto" !== i)
        ? !0 === e &&
          "pixelated" === i &&
          (t.canvas.style["image-rendering"] = "auto")
        : (t.canvas.style["image-rendering"] = "pixelated");
    },
    drawFont: function () {},
  })),
  (me.Renderer.TextureCache = me.Object.extend({
    init: function (t) {
      (this.max_size = t || 1 / 0), this.reset();
    },
    reset: function () {
      (this.cache = new Map()), (this.units = new Map()), (this.length = 0);
    },
    validate: function () {
      if (this.length >= this.max_size)
        throw new me.video.Error(
          "Texture cache overflow: " +
            this.max_size +
            " texture units available."
        );
    },
    get: function (t, e) {
      return (
        this.cache.has(t) ||
          (e ||
            (e = me.video.renderer.Texture.prototype.createAtlas.apply(
              me.video.renderer.Texture.prototype,
              [t.width, t.height, t.src ? me.utils.getBasename(t.src) : void 0]
            )),
          this.put(t, new me.video.renderer.Texture(e, t, !1))),
        this.cache.get(t)
      );
    },
    put: function (t, e) {
      this.validate(), this.cache.set(t, e), this.units.set(e, this.length++);
    },
    getUnit: function (t) {
      return this.units.get(t);
    },
  })),
  (me.CanvasRenderer = me.Renderer.extend({
    init: function (t, e, i, n) {
      return (
        me.Renderer.prototype.init.apply(this, [t, e, i, n]),
        (this.context = this.getContext2d(this.canvas, !this.transparent)),
        this.doubleBuffering
          ? ((this.backBufferCanvas = me.video.createCanvas(e, i, !1)),
            (this.backBufferContext2D = this.getContext2d(
              this.backBufferCanvas
            )),
            this.transparent &&
              (this.context.globalCompositeOperation = "copy"))
          : ((this.backBufferCanvas = this.canvas),
            (this.backBufferContext2D = this.context)),
        (this.fontContext2D = this.backBufferContext2D),
        this.setColor(this.currentColor),
        (this.cache = new me.Renderer.TextureCache()),
        !1 === n.textureSeamFix || this.antiAlias || (this.uvOffset = 1),
        this
      );
    },
    clear: function () {
      this.transparent && this.clearColor("rgba(0,0,0,0)", !0);
    },
    flush: function () {
      this.doubleBuffering &&
        this.context.drawImage(
          this.backBufferCanvas,
          0,
          0,
          this.backBufferCanvas.width,
          this.backBufferCanvas.height,
          0,
          0,
          this.gameWidthZoom,
          this.gameHeightZoom
        );
    },
    clearColor: function (t, e) {
      var i = this.backBufferContext2D,
        n = i.canvas;
      i.save(),
        i.setTransform(1, 0, 0, 1, 0, 0),
        (i.globalCompositeOperation = e ? "copy" : "source-over"),
        (i.fillStyle = t instanceof me.Color ? t.toRGBA() : t),
        i.fillRect(0, 0, n.width, n.height),
        i.restore();
    },
    clearRect: function (t, e, i, n) {
      this.backBufferContext2D.clearRect(t, e, i, n);
    },
    createPattern: function (t, e) {
      return this.backBufferContext2D.createPattern(t, e);
    },
    drawImage: function (t, e, i, n, r, o, s, a, h) {
      this.backBufferContext2D.globalAlpha < 1 / 255 ||
        (!1 === this.subPixel
          ? (void 0 === n
              ? ((n = a = t.width),
                (r = h = t.height),
                (o = e),
                (s = i),
                (e = 0),
                (i = 0))
              : void 0 === o &&
                ((o = e),
                (s = i),
                (a = n),
                (h = r),
                (n = t.width),
                (r = t.height),
                (e = 0),
                (i = 0)),
            this.backBufferContext2D.drawImage(t, e, i, n, r, ~~o, ~~s, a, h))
          : this.backBufferContext2D.drawImage.apply(
              this.backBufferContext2D,
              arguments
            ));
    },
    drawPattern: function (t, e, i, n, r) {
      if (!(this.backBufferContext2D.globalAlpha < 1 / 255)) {
        var o = this.backBufferContext2D.fillStyle;
        (this.backBufferContext2D.fillStyle = t),
          this.backBufferContext2D.fillRect(e, i, n, r),
          (this.backBufferContext2D.fillStyle = o);
      }
    },
    fillArc: function (t, e, i, n, r, o) {
      this.backBufferContext2D.globalAlpha < 1 / 255 ||
        (this.translate(t + i, e + i),
        this.backBufferContext2D.beginPath(),
        this.backBufferContext2D.arc(0, 0, i, n, r, o || !1),
        this.backBufferContext2D.fill(),
        this.backBufferContext2D.closePath(),
        this.translate(-(t + i), -(e + i)));
    },
    fillRect: function (t, e, i, n) {
      this.backBufferContext2D.globalAlpha < 1 / 255 ||
        this.backBufferContext2D.fillRect(t, e, i, n);
    },
    getContext: function () {
      return this.backBufferContext2D;
    },
    resetTransform: function () {
      this.backBufferContext2D.setTransform(1, 0, 0, 1, 0, 0);
    },
    scaleCanvas: function (t, e) {
      (this.canvas.width = this.gameWidthZoom =
        this.backBufferCanvas.width * t),
        (this.canvas.height = this.gameHeightZoom =
          this.backBufferCanvas.height * e),
        me.device.getPixelRatio() > 1 &&
          ((this.canvas.style.width =
            this.canvas.width / me.device.getPixelRatio() + "px"),
          (this.canvas.style.height =
            this.canvas.height / me.device.getPixelRatio() + "px")),
        this.doubleBuffering &&
          this.transparent &&
          (this.context.globalCompositeOperation = "copy"),
        this.setAntiAlias(this.context, this.antiAlias),
        this.flush();
    },
    save: function () {
      this.backBufferContext2D.save();
    },
    restore: function () {
      this.backBufferContext2D.restore(),
        (this.currentColor.glArray[3] = this.backBufferContext2D.globalAlpha);
    },
    rotate: function (t) {
      this.backBufferContext2D.rotate(t);
    },
    scale: function (t, e) {
      this.backBufferContext2D.scale(t, e);
    },
    setColor: function (t) {
      this.backBufferContext2D.strokeStyle =
        this.backBufferContext2D.fillStyle =
          t instanceof me.Color ? t.toRGBA() : t;
    },
    setGlobalAlpha: function (t) {
      this.backBufferContext2D.globalAlpha = this.currentColor.glArray[3] = t;
    },
    setLineWidth: function (t) {
      this.backBufferContext2D.lineWidth = t;
    },
    strokeArc: function (t, e, i, n, r, o) {
      this.backBufferContext2D.globalAlpha < 1 / 255 ||
        (this.translate(t + i, e + i),
        this.backBufferContext2D.beginPath(),
        this.backBufferContext2D.arc(0, 0, i, n, r, o || !1),
        this.backBufferContext2D.stroke(),
        this.backBufferContext2D.closePath(),
        this.translate(-(t + i), -(e + i)));
    },
    strokeEllipse: function (t, e, i, n) {
      if (!(this.backBufferContext2D.globalAlpha < 1 / 255)) {
        var r = i,
          o = n,
          s = t - r,
          a = t + r,
          h = e - o,
          l = e + o,
          u = 0.551784 * r,
          c = 0.551784 * o,
          d = t - u,
          f = t + u,
          p = e - c,
          g = e + c;
        this.backBufferContext2D.beginPath(),
          this.backBufferContext2D.moveTo(t, h),
          this.backBufferContext2D.bezierCurveTo(f, h, a, p, a, e),
          this.backBufferContext2D.bezierCurveTo(a, g, f, l, t, l),
          this.backBufferContext2D.bezierCurveTo(d, l, s, g, s, e),
          this.backBufferContext2D.bezierCurveTo(s, p, d, h, t, h),
          this.backBufferContext2D.stroke();
      }
    },
    strokeLine: function (t, e, i, n) {
      this.backBufferContext2D.globalAlpha < 1 / 255 ||
        (this.backBufferContext2D.beginPath(),
        this.backBufferContext2D.moveTo(t, e),
        this.backBufferContext2D.lineTo(i, n),
        this.backBufferContext2D.stroke());
    },
    strokePolygon: function (t) {
      if (!(this.backBufferContext2D.globalAlpha < 1 / 255)) {
        this.translate(t.pos.x, t.pos.y),
          this.backBufferContext2D.beginPath(),
          this.backBufferContext2D.moveTo(t.points[0].x, t.points[0].y);
        for (var e, i = 1; i < t.points.length; i++)
          (e = t.points[i]), this.backBufferContext2D.lineTo(e.x, e.y);
        this.backBufferContext2D.lineTo(t.points[0].x, t.points[0].y),
          this.backBufferContext2D.stroke(),
          this.backBufferContext2D.closePath(),
          this.translate(-t.pos.x, -t.pos.y);
      }
    },
    strokeRect: function (t, e, i, n) {
      this.backBufferContext2D.globalAlpha < 1 / 255 ||
        this.backBufferContext2D.strokeRect(t, e, i, n);
    },
    drawShape: function (t) {
      "Rectangle" === t.shapeType
        ? this.strokeRect(t.left, t.top, t.width, t.height)
        : t instanceof me.Line || t instanceof me.Polygon
        ? this.strokePolygon(t)
        : t instanceof me.Ellipse &&
          (t.radiusV.x === t.radiusV.y
            ? this.strokeArc(
                t.pos.x - t.radius,
                t.pos.y - t.radius,
                t.radius,
                0,
                2 * Math.PI
              )
            : this.strokeEllipse(t.pos.x, t.pos.y, t.radiusV.x, t.radiusV.y));
    },
    setTransform: function (t) {
      this.resetTransform(), this.transform(t);
    },
    transform: function (t) {
      var e = t.val,
        i = e[6],
        n = e[7];
      !1 === this.subPixel && ((i = ~~i), (n = ~~n)),
        this.backBufferContext2D.transform(e[0], e[1], e[3], e[4], i, n);
    },
    translate: function (t, e) {
      !1 === this.subPixel
        ? this.backBufferContext2D.translate(~~t, ~~e)
        : this.backBufferContext2D.translate(t, e);
    },
  })),
  (function () {
    var t = -(Math.PI / 2);
    (me.CanvasRenderer.prototype.Texture = me.Object.extend({
      init: function (t, e, i) {
        if (
          ((this.format = null),
          (this.texture = e || null),
          (this.atlas = null),
          void 0 !== t)
        ) {
          if (void 0 !== t.meta) {
            if (t.meta.app.includes("texturepacker")) {
              if (((this.format = "texturepacker"), void 0 === e)) {
                var n = t.meta.image;
                if (((this.texture = me.utils.getImage(n)), !this.texture))
                  throw new me.video.renderer.Texture.Error(
                    "Atlas texture '" + n + "' not found"
                  );
              }
              this.repeat = "no-repeat";
            } else if (t.meta.app.includes("ShoeBox")) {
              if (!t.meta.exporter || !t.meta.exporter.includes("melonJS"))
                throw new me.video.renderer.Texture.Error(
                  "ShoeBox requires the JSON exporter : https://github.com/melonjs/melonJS/tree/master/media/shoebox_JSON_export.sbx"
                );
              (this.format = "ShoeBox"), (this.repeat = "no-repeat");
            } else
              t.meta.app.includes("melonJS") &&
                ((this.format = "melonJS"),
                (this.repeat = t.meta.repeat || "no-repeat"));
            this.atlas = this.parse(t);
          } else
            void 0 !== t.framewidth &&
              void 0 !== t.frameheight &&
              ((this.format = "Spritesheet (fixed cell size)"),
              (t.image = e),
              (this.atlas = this.parseFromSpriteSheet(t)),
              (this.repeat = "no-repeat"));
        }
        if (!this.atlas)
          throw new me.video.renderer.Texture.Error(
            "texture atlas format not supported"
          );
        !1 !== i &&
          (i instanceof me.Renderer.TextureCache
            ? i.put(this.texture, this)
            : me.video.renderer.cache.put(this.texture, this));
      },
      createAtlas: function (t, e, i, n) {
        return {
          meta: {
            app: "melonJS",
            size: { w: t, h: e },
            repeat: n || "no-repeat",
          },
          frames: [
            { filename: i || "default", frame: { x: 0, y: 0, w: t, h: e } },
          ],
        };
      },
      parse: function (e) {
        var i = {};
        return (
          e.frames.forEach(function (e) {
            if (e.hasOwnProperty("filename")) {
              var n,
                r,
                o = e.frame,
                s = e.spriteSourceSize && e.sourceSize && e.pivot;
              s &&
                ((n =
                  e.sourceSize.w * e.pivot.x -
                  (e.trimmed ? e.spriteSourceSize.x : 0)),
                (r =
                  e.sourceSize.h * e.pivot.y -
                  (e.trimmed ? e.spriteSourceSize.y : 0))),
                (i[e.filename] = {
                  name: e.filename,
                  offset: new me.Vector2d(o.x, o.y),
                  anchorPoint: s ? new me.Vector2d(n / o.w, r / o.h) : null,
                  width: o.w,
                  height: o.h,
                  angle: !0 === e.rotated ? t : 0,
                });
            }
          }),
          i
        );
      },
      parseFromSpriteSheet: function (t) {
        var e = {},
          i = t.image,
          n = t.spacing || 0,
          r = t.margin || 0,
          o = i.width,
          s = i.height,
          a = new me.Vector2d(
            ~~((o - r + n) / (t.framewidth + n)),
            ~~((s - r + n) / (t.frameheight + n))
          );
        (o % (t.framewidth + n) == 0 && s % (t.frameheight + n) == 0) ||
          ((o = a.x * (t.framewidth + n)),
          (s = a.y * (t.frameheight + n)),
          console.warn(
            "Spritesheet Texture for image: " +
              i.src +
              " is not divisible by " +
              (t.framewidth + n) +
              "x" +
              (t.frameheight + n) +
              ", truncating effective size to " +
              o +
              "x" +
              s
          ));
        for (var h = 0, l = a.x * a.y; l > h; h++)
          e["" + h] = {
            name: "" + h,
            offset: new me.Vector2d(
              r + (n + t.framewidth) * (h % a.x),
              r + (n + t.frameheight) * ~~(h / a.x)
            ),
            anchorPoint: t.anchorPoint || null,
            width: t.framewidth,
            height: t.frameheight,
            angle: 0,
          };
        return e;
      },
      getAtlas: function () {
        return this.atlas;
      },
      getTexture: function () {
        return this.texture;
      },
      getRegion: function (t) {
        return this.atlas[t];
      },
      createSpriteFromName: function (t, e) {
        return me.pool.pull(
          "me.Sprite",
          0,
          0,
          Object.assign({ image: this, region: t }, e || {})
        );
      },
      createAnimationFromName: function (t, e) {
        for (var i, n = [], r = {}, o = 0, s = 0, a = 0; a < t.length; ++a) {
          if (null == (i = this.getRegion(t[a])))
            throw new me.video.renderer.Texture.Error(
              "Texture - region for " + t[a] + " not found"
            );
          (n[a] = i),
            (r[t[a]] = a),
            (o = Math.max(i.width, o)),
            (s = Math.max(i.height, s));
        }
        return new me.Sprite(
          0,
          0,
          Object.assign(
            {
              image: this,
              framewidth: o,
              frameheight: s,
              margin: 0,
              spacing: 0,
              atlas: n,
              atlasIndices: r,
            },
            e || {}
          )
        );
      },
    })),
      (me.CanvasRenderer.prototype.Texture.Error = me.Error.extend({
        init: function (t) {
          me.Error.prototype.init.apply(this, [t]),
            (this.name = "me.CanvasRenderer.Texture.Error");
        },
      }));
  })(),
  (me.video.shader = (function () {
    function t(t, e, i) {
      var n = t.createShader(e);
      if (
        (t.shaderSource(n, i),
        t.compileShader(n),
        !t.getShaderParameter(n, t.COMPILE_STATUS))
      )
        throw new me.video.Error(t.getShaderInfoLog(n));
      return n;
    }
    var e = {},
      i = {
        bool: "1i",
        int: "1i",
        float: "1f",
        vec2: "2fv",
        vec3: "3fv",
        vec4: "4fv",
        bvec2: "2iv",
        bvec3: "3iv",
        bvec4: "4iv",
        ivec2: "2iv",
        ivec3: "3iv",
        ivec4: "4iv",
        mat2: "Matrix2fv",
        mat3: "Matrix3fv",
        mat4: "Matrix4fv",
        sampler2D: "1i",
      };
    return (
      (e.createShader = function (e, n, r) {
        var o,
          s = { attributes: {}, uniforms: {}, handle: null },
          a = (s.handle = e.createProgram()),
          h = /attribute\s+\w+\s+(\w+)/g,
          l = /uniform\s+(\w+)\s+(\w+)/g,
          u = [],
          c = {},
          d = {},
          f = {};
        if (
          (e.attachShader(a, t(e, e.VERTEX_SHADER, n)),
          e.attachShader(a, t(e, e.FRAGMENT_SHADER, r)),
          e.linkProgram(a),
          !e.getProgramParameter(a, e.LINK_STATUS))
        )
          throw new me.video.Error(e.getProgramInfoLog(a));
        for (e.useProgram(a); (o = h.exec(n)); ) u.push(o[1]);
        return (
          [n, r].forEach(function (t) {
            for (; (o = l.exec(t)); ) c[o[2]] = o[1];
          }),
          u.forEach(function (t) {
            (s.attributes[t] = e.getAttribLocation(a, t)),
              e.enableVertexAttribArray(s.attributes[t]);
          }),
          Object.keys(c).forEach(function (t) {
            var n,
              r,
              o,
              s,
              h = c[t];
            (f[t] = e.getUniformLocation(a, t)),
              (d[t] = {
                get:
                  ((n = t),
                  function () {
                    return f[n];
                  }),
                set:
                  ((r = t),
                  (o = h),
                  (s = "uniform" + i[h]),
                  0 === o.indexOf("mat")
                    ? function (t) {
                        e[s](f[r], !1, t);
                      }
                    : function (t) {
                        var i = s;
                        t.length && "v" !== s.substr(-1) && (i += "v"),
                          e[i](f[r], t);
                      }),
              });
          }),
          Object.defineProperties(s.uniforms, d),
          s
        );
      }),
      (e.createTexture = function (t, e, i, n, r, o, s, a) {
        r = r || "no-repeat";
        var h = t.createTexture(),
          l = 0 === r.search(/^repeat(-x)?$/) ? t.REPEAT : t.CLAMP_TO_EDGE,
          u = 0 === r.search(/^repeat(-y)?$/) ? t.REPEAT : t.CLAMP_TO_EDGE;
        return (
          t.activeTexture(t.TEXTURE0 + e),
          t.bindTexture(t.TEXTURE_2D, h),
          t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, l),
          t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, u),
          t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, n),
          t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, n),
          o || s || a
            ? t.texImage2D(
                t.TEXTURE_2D,
                0,
                t.RGBA,
                o,
                s,
                a,
                t.RGBA,
                t.UNSIGNED_BYTE,
                i
              )
            : t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, i),
          h
        );
      }),
      e
    );
  })()),
  (me.WebGLRenderer = me.Renderer.extend({
    init: function (t, e, i, n) {
      me.Renderer.prototype.init.apply(this, [t, e, i, n]),
        (this.gl = this.getContextGL(t, !this.transparent)),
        (this.colorStack = []),
        (this._matrixStack = []),
        (this._linePoints = [
          new me.Vector2d(),
          new me.Vector2d(),
          new me.Vector2d(),
          new me.Vector2d(),
        ]),
        (this.currentTransform = new me.Matrix2d());
      var r = n.compositor || me.WebGLRenderer.Compositor;
      return (
        (this.compositor = new r(this)),
        (this.cache = new me.Renderer.TextureCache(
          this.compositor.maxTextures
        )),
        this.createFillTexture(this.cache),
        this.createFontTexture(this.cache),
        this.scaleCanvas(1, 1),
        this
      );
    },
    createFillTexture: function (t) {
      var e = new Uint8Array([255, 255, 255, 255]);
      (this.fillTexture = new this.Texture(
        this.Texture.prototype.createAtlas.apply(this.Texture.prototype, [
          1,
          1,
          "fillTexture",
        ]),
        e,
        t
      )),
        this.compositor.uploadTexture(this.fillTexture, 1, 1, 0);
    },
    createFontTexture: function (t) {
      var e = me.video.createCanvas(
        this.backBufferCanvas.width,
        this.backBufferCanvas.height
      );
      (this.fontContext2D = this.getContext2d(e)),
        (this.fontTexture = new this.Texture(
          this.Texture.prototype.createAtlas.apply(this.Texture.prototype, [
            this.backBufferCanvas.width,
            this.backBufferCanvas.height,
            "fontTexture",
          ]),
          e,
          t
        )),
        this.compositor.uploadTexture(this.fontTexture);
    },
    createPattern: function (t, e) {
      var i = new this.Texture(
        this.Texture.prototype.createAtlas.apply(this.Texture.prototype, [
          t.width,
          t.height,
          "pattern",
          e,
        ]),
        t
      );
      return this.compositor.uploadTexture(i), i;
    },
    flush: function () {
      this.compositor.flush();
    },
    clearColor: function (t, e) {
      var i = this.currentColor.clone(),
        n = this.currentTransform.clone();
      this.currentColor.copy(t),
        this.currentTransform.identity(),
        e
          ? this.compositor.clear()
          : this.fillRect(0, 0, this.canvas.width, this.canvas.height),
        this.currentTransform.copy(n),
        this.currentColor.copy(i),
        me.pool.push(i);
    },
    clearRect: function (t, e, i, n) {
      var r = this.currentColor.clone();
      this.currentColor.copy("#0000"),
        this.fillRect(t, e, i, n),
        this.currentColor.copy(r),
        me.pool.push(r);
    },
    drawFont: function (t) {
      this.compositor.flush(),
        this.compositor.uploadTexture(this.fontTexture, 0, 0, 0, !0);
      var e = t.pos.x + "," + t.pos.y + "," + t.width + "," + t.height;
      this.compositor.addQuad(
        this.fontTexture,
        e,
        t.pos.x,
        t.pos.y,
        t.width,
        t.height
      ),
        this.fontContext2D.clearRect(
          0,
          0,
          this.backBufferCanvas.width,
          this.backBufferCanvas.height
        );
    },
    drawImage: function (t, e, i, n, r, o, s, a, h) {
      void 0 === n
        ? ((n = a = t.width),
          (r = h = t.height),
          (o = e),
          (s = i),
          (e = 0),
          (i = 0))
        : void 0 === o &&
          ((o = e),
          (s = i),
          (a = n),
          (h = r),
          (n = t.width),
          (r = t.height),
          (e = 0),
          (i = 0)),
        !1 === this.subPixel && ((o = ~~o), (s = ~~s));
      var l = e + "," + i + "," + n + "," + r;
      this.compositor.addQuad(this.cache.get(t), l, o, s, a, h);
    },
    drawPattern: function (t, e, i, n, r) {
      var o = "0,0," + n + "," + r;
      this.compositor.addQuad(t, o, e, i, n, r);
    },
    fillRect: function (t, e, i, n) {
      this.compositor.addQuad(this.fillTexture, "default", t, e, i, n);
    },
    getScreenContext: function () {
      return this.gl;
    },
    getContextGL: function (t, e) {
      if (null == t)
        throw new me.video.Error(
          "You must pass a canvas element in order to create a GL context"
        );
      if (void 0 === t.getContext)
        throw new me.video.Error("Your browser does not support WebGL.");
      var i = { antialias: this.antiAlias, alpha: !e };
      return t.getContext("webgl", i) || t.getContext("experimental-webgl", i);
    },
    getContext: function () {
      return this.gl;
    },
    resetTransform: function () {
      this.currentTransform.identity();
    },
    reset: function () {
      this.resetTransform(),
        this.cache.reset(),
        this.compositor.reset(),
        this.createFillTexture(),
        this.createFontTexture();
    },
    scaleCanvas: function (t, e) {
      var i = this.canvas.width * t,
        n = this.canvas.height * e;
      me.device.getPixelRatio() > 1
        ? ((this.canvas.style.width = i / me.device.getPixelRatio() + "px"),
          (this.canvas.style.height = n / me.device.getPixelRatio() + "px"))
        : ((this.canvas.style.width = i + "px"),
          (this.canvas.style.height = n + "px")),
        this.compositor.setProjection(this.canvas.width, this.canvas.height);
    },
    restore: function () {
      var t = this.colorStack.pop();
      me.pool.push(t),
        this.currentColor.copy(t),
        this.currentTransform.copy(this._matrixStack.pop());
    },
    rotate: function (t) {
      this.currentTransform.rotate(t);
    },
    save: function () {
      this.colorStack.push(this.currentColor.clone()),
        this._matrixStack.push(this.currentTransform.clone());
    },
    scale: function (t, e) {
      this.currentTransform.scale(t, e);
    },
    setAntiAlias: function (t, e) {
      me.Renderer.prototype.setAntiAlias.apply(this, [t, e]);
    },
    setGlobalAlpha: function (t) {
      this.currentColor.glArray[3] = t;
    },
    setColor: function (t) {
      var e = this.currentColor.glArray[3];
      this.currentColor.copy(t), (this.currentColor.glArray[3] *= e);
    },
    setLineWidth: function (t) {
      this.compositor.lineWidth(t);
    },
    strokeArc: function () {},
    strokeEllipse: function () {},
    strokeLine: function (t, e, i, n) {
      var r = this._linePoints.slice(0, 2);
      (r[0].x = t),
        (r[0].y = e),
        (r[1].x = i),
        (r[1].y = n),
        this.compositor.drawLine(r, !0);
    },
    strokePolygon: function (t) {
      var e,
        i,
        n = t.points.length;
      for (i = this._linePoints.length; n > i; i++)
        this._linePoints.push(new me.Vector2d());
      for (e = this._linePoints.slice(0, n), i = 0; n > i; i++)
        (e[i].x = t.pos.x + t.points[i].x), (e[i].y = t.pos.y + t.points[i].y);
      this.compositor.drawLine(e);
    },
    strokeRect: function (t, e, i, n) {
      var r = this._linePoints.slice(0, 4);
      (r[0].x = t),
        (r[0].y = e),
        (r[1].x = t + i),
        (r[1].y = e),
        (r[2].x = t + i),
        (r[2].y = e + n),
        (r[3].x = t),
        (r[3].y = e + n),
        this.compositor.drawLine(r);
    },
    drawShape: function (t) {
      "Rectangle" === t.shapeType
        ? this.strokeRect(t.left, t.top, t.width, t.height)
        : t instanceof me.Line || t instanceof me.Polygon
        ? this.strokePolygon(t)
        : t instanceof me.Ellipse &&
          (t.radiusV.x === t.radiusV.y
            ? this.strokeArc(
                t.pos.x - t.radius,
                t.pos.y - t.radius,
                t.radius,
                0,
                2 * Math.PI
              )
            : this.strokeEllipse(t.pos.x, t.pos.y, t.radiusV.x, t.radiusV.y));
    },
    setTransform: function (t) {
      this.resetTransform(), this.transform(t);
    },
    transform: function (t) {
      if ((this.currentTransform.multiply(t), !1 === this.subPixel)) {
        var e = this.currentTransform.val;
        (e[6] = ~~e[6]), (e[7] = ~~e[7]);
      }
    },
    translate: function (t, e) {
      !1 === this.subPixel
        ? this.currentTransform.translate(~~t, ~~e)
        : this.currentTransform.translate(t, e);
    },
  })),
  (me.WebGLRenderer.prototype.Texture =
    me.CanvasRenderer.prototype.Texture.extend({
      parse: function (t) {
        var e = t.meta.size.w,
          i = t.meta.size.h,
          n = me.CanvasRenderer.prototype.Texture.prototype.parse.apply(this, [
            t,
          ]);
        return this._addStMap(n, e, i);
      },
      parseFromSpriteSheet: function (t) {
        var e = t.image.width,
          i = t.image.height,
          n =
            me.CanvasRenderer.prototype.Texture.prototype.parseFromSpriteSheet.apply(
              this,
              [t]
            );
        return this._addStMap(n, e, i);
      },
      _addStMap: function (t, e, i) {
        return (
          Object.keys(t).forEach(function (n) {
            var r = t[n].offset,
              o = t[n].width,
              s = t[n].height;
            (t[n].stMap = new Float32Array([
              r.x / e,
              r.y / i,
              (r.x + o) / e,
              (r.y + s) / i,
            ])),
              (t[r.x + "," + r.y + "," + e + "," + i] = t[n]);
          }),
          t
        );
      },
      _insertRegion: function (t, e, i, n, r) {
        var o = this.texture.width,
          s = this.texture.height;
        return (
          (this.atlas[t] = {
            name: t,
            offset: new me.Vector2d(e, i),
            width: n,
            height: r,
            angle: 0,
            stMap: new Float32Array([e / o, i / s, (e + n) / o, (i + r) / s]),
          }),
          this.atlas[t]
        );
      },
    })),
  (me.WebGLRenderer.prototype.Texture.Error = me.Error.extend({
    init: function (t) {
      me.Error.prototype.init.apply(this, [t]),
        (this.name = "me.WebGLRenderer.Texture.Error");
    },
  })),
  (function () {
    var t = 2,
      e = 4,
      i = 1,
      n = 2,
      r = t + e + i + n,
      o = r * Float32Array.BYTES_PER_ELEMENT,
      s = 0,
      a = s + t,
      h = a + e,
      l = h + i,
      u = s * Float32Array.BYTES_PER_ELEMENT,
      c = a * Float32Array.BYTES_PER_ELEMENT,
      d = h * Float32Array.BYTES_PER_ELEMENT,
      f = l * Float32Array.BYTES_PER_ELEMENT,
      p = 4,
      g = 6,
      v = 16e3;
    me.WebGLRenderer.Compositor = me.Object.extend({
      init: function (s) {
        var a = s.gl;
        (this.length = 0),
          (this.units = []),
          (this.maxTextures = Math.min(
            24,
            a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS)
          )),
          (this.v = [
            new me.Vector2d(),
            new me.Vector2d(),
            new me.Vector2d(),
            new me.Vector2d(),
          ]),
          (this.renderer = s),
          (this.gl = s.gl),
          (this.matrix = s.currentTransform),
          (this.color = s.currentColor),
          (this.uMatrix = new me.Matrix2d());
        var h,
          l =
            a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT)
              .precision < 16
              ? "mediump"
              : "highp";
        (this.lineShader = me.video.shader.createShader(
          this.gl,
          "precision highp float;attribute vec2 aVertex;uniform mat3 uMatrix;void main(void){gl_Position=vec4((uMatrix*vec3(aVertex,1)).xy,0,1);}",
          "precision " +
            (h = { precision: l }).precision +
            " float;uniform vec4 uColor;void main(void){gl_FragColor=uColor;}"
        )),
          (this.quadShader = me.video.shader.createShader(
            this.gl,
            "precision highp float;attribute vec2 aVertex;attribute vec4 aColor;attribute float aTexture;attribute vec2 aRegion;uniform mat3 uMatrix;varying vec4 vColor;varying float vTexture;varying vec2 vRegion;void main(void){gl_Position=vec4((uMatrix*vec3(aVertex,1)).xy,0,1);vColor=vec4(aColor.rgb*aColor.a,aColor.a);vTexture=aTexture;vRegion=aRegion;}",
            (function (t) {
              for (
                var e =
                    "precision " +
                    t.precision +
                    " float;uniform sampler2D uSampler[" +
                    t.maxTextures +
                    "];varying vec4 vColor;varying float vTexture;varying vec2 vRegion;void main(void){int texture=int(vTexture);if(texture==0){gl_FragColor=texture2D(uSampler[0],vRegion)*vColor;}",
                  i = 1;
                i < t.maxTextures - 1;
                i++
              )
                e +=
                  "else if(texture==" +
                  i +
                  "){gl_FragColor=texture2D(uSampler[" +
                  i +
                  "],vRegion)*vColor;}";
              return (
                e +
                ("else{gl_FragColor=texture2D(uSampler[" +
                  (t.maxTextures - 1)) +
                "],vRegion)*vColor;}}"
              );
            })({ precision: l, maxTextures: this.maxTextures })
          )),
          (this.shader = this.quadShader.handle),
          (this.sb = a.createBuffer()),
          a.bindBuffer(a.ARRAY_BUFFER, this.sb),
          a.bufferData(a.ARRAY_BUFFER, v * o * p, a.STREAM_DRAW),
          (this.sbSize = 256),
          (this.sbIndex = 0),
          (this.stream = new Float32Array(this.sbSize * r * p)),
          (this.ib = a.createBuffer()),
          a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.ib),
          a.bufferData(a.ELEMENT_ARRAY_BUFFER, this.createIB(), a.STATIC_DRAW),
          a.vertexAttribPointer(
            this.quadShader.attributes.aVertex,
            t,
            a.FLOAT,
            !1,
            o,
            u
          ),
          a.vertexAttribPointer(
            this.quadShader.attributes.aColor,
            e,
            a.FLOAT,
            !1,
            o,
            c
          ),
          a.vertexAttribPointer(
            this.quadShader.attributes.aTexture,
            i,
            a.FLOAT,
            !1,
            o,
            d
          ),
          a.vertexAttribPointer(
            this.quadShader.attributes.aRegion,
            n,
            a.FLOAT,
            !1,
            o,
            f
          ),
          this.reset(),
          this.setProjection(a.canvas.width, a.canvas.height),
          a.clearColor(0, 0, 0, 1),
          a.enable(a.BLEND),
          a.blendFunc(a.ONE, a.ONE_MINUS_SRC_ALPHA),
          a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
      },
      setProjection: function (t, e) {
        this.flush(),
          this.gl.viewport(0, 0, t, e),
          this.uMatrix.setTransform(2 / t, 0, 0, 0, -2 / e, 0, -1, 1, 1),
          (this.quadShader.uniforms.uMatrix = this.uMatrix.val);
      },
      uploadTexture: function (t, e, i, n, r) {
        var o = this.renderer.cache.getUnit(t);
        return (
          (this.units[o] && !r) ||
            ((this.units[o] = !0),
            me.video.shader.createTexture(
              this.gl,
              o,
              t.texture,
              this.renderer.antiAlias ? this.gl.LINEAR : this.gl.NEAREST,
              t.repeat,
              e,
              i,
              n
            )),
          o
        );
      },
      reset: function () {
        (this.sbIndex = 0), (this.length = 0);
        for (var t = [], e = 0; e < this.maxTextures; e++)
          (this.units[e] = !1), (t[e] = e);
        this.quadShader.uniforms.uSampler = t;
      },
      createIB: function () {
        for (
          var t = [0, 1, 2, 2, 1, 3], e = Array(v * g), i = 0;
          i < e.length;
          i++
        )
          e[i] = t[i % g] + ~~(i / g) * p;
        return new Uint16Array(e);
      },
      resizeSB: function () {
        this.sbSize <<= 1;
        var t = new Float32Array(this.sbSize * r * p);
        t.set(this.stream), (this.stream = t);
      },
      useShader: function (t) {
        this.shader !== t &&
          (this.flush(), (this.shader = t), this.gl.useProgram(this.shader));
      },
      addQuad: function (t, e, i, n, o, u) {
        var c = this.color.toGL();
        if (!(c[3] < 1 / 255)) {
          this.useShader(this.quadShader.handle),
            this.length >= v && this.flush(),
            this.length >= this.sbSize && this.resizeSB();
          var d = this.matrix,
            f = this.v[0].set(i, n),
            g = this.v[1].set(i + o, n),
            m = this.v[2].set(i, n + u),
            $ = this.v[3].set(i + o, n + u);
          d.isIdentity() ||
            (d.multiplyVector(f),
            d.multiplyVector(g),
            d.multiplyVector(m),
            d.multiplyVector($));
          var y = this.sbIndex,
            _ = y + r,
            x = _ + r,
            b = x + r;
          (this.stream[y + s + 0] = f.x),
            (this.stream[y + s + 1] = f.y),
            (this.stream[_ + s + 0] = g.x),
            (this.stream[_ + s + 1] = g.y),
            (this.stream[x + s + 0] = m.x),
            (this.stream[x + s + 1] = m.y),
            (this.stream[b + s + 0] = $.x),
            (this.stream[b + s + 1] = $.y),
            this.stream.set(c, y + a),
            this.stream.set(c, _ + a),
            this.stream.set(c, x + a),
            this.stream.set(c, b + a);
          var w = this.uploadTexture(t);
          this.stream[y + h] =
            this.stream[_ + h] =
            this.stream[x + h] =
            this.stream[b + h] =
              w;
          var T = t.getRegion(e);
          if (void 0 === T) {
            !0 === me.video.renderer.verbose &&
              console.warn("Adding texture region", e, "for texture", t);
            var E = e.split(","),
              A = +E[0],
              S = +E[1],
              C = +E[2],
              P = +E[3];
            T = t._insertRegion(e, A, S, C, P);
          }
          var R = T.stMap;
          (this.stream[y + l + 0] = R[0]),
            (this.stream[y + l + 1] = R[1]),
            (this.stream[_ + l + 0] = R[2]),
            (this.stream[_ + l + 1] = R[1]),
            (this.stream[x + l + 0] = R[0]),
            (this.stream[x + l + 1] = R[3]),
            (this.stream[b + l + 0] = R[2]),
            (this.stream[b + l + 1] = R[3]),
            (this.sbIndex += r * p),
            this.length++;
        }
      },
      flush: function () {
        if (this.length) {
          var t = this.gl,
            e = this.length * r * p;
          t.bufferData(
            t.ARRAY_BUFFER,
            this.stream.subarray(0, e),
            t.STREAM_DRAW
          ),
            t.drawElements(t.TRIANGLES, this.length * g, t.UNSIGNED_SHORT, 0),
            (this.sbIndex = 0),
            (this.length = 0);
        }
      },
      drawLine: function (r, s) {
        this.useShader(this.lineShader.handle);
        for (var a = 0, h = 0; h < r.length; h++)
          this.matrix.isIdentity() || this.matrix.multiplyVector(r[h]),
            (this.stream[a++] = r[h].x),
            (this.stream[a++] = r[h].y);
        var l = this.gl;
        (this.lineShader.uniforms.uMatrix = this.uMatrix.val),
          (this.lineShader.uniforms.uColor = this.color.glArray),
          l.bufferData(
            l.ARRAY_BUFFER,
            this.stream.subarray(0, 2 * r.length),
            l.STREAM_DRAW
          ),
          l.vertexAttribPointer(
            this.lineShader.attributes.aVertex,
            t,
            l.FLOAT,
            !1,
            0,
            0
          ),
          l.drawArrays(s ? l.LINE_STRIP : l.LINE_LOOP, 0, r.length),
          l.vertexAttribPointer(
            this.quadShader.attributes.aVertex,
            t,
            l.FLOAT,
            !1,
            o,
            u
          ),
          l.vertexAttribPointer(
            this.quadShader.attributes.aColor,
            e,
            l.FLOAT,
            !1,
            o,
            c
          ),
          l.vertexAttribPointer(
            this.quadShader.attributes.aTexture,
            i,
            l.FLOAT,
            !1,
            o,
            d
          ),
          l.vertexAttribPointer(
            this.quadShader.attributes.aRegion,
            n,
            l.FLOAT,
            !1,
            o,
            f
          );
      },
      lineWidth: function (t) {
        this.gl.lineWidth(t);
      },
      clear: function () {
        this.flush(), this.gl.clear(this.gl.COLOR_BUFFER_BIT);
      },
    });
  })(),
  (function () {
    var t;
    me.input =
      (((t = {})._preventDefault = function (t) {
        return (
          t.stopPropagation ? t.stopPropagation() : (t.cancelBubble = !0),
          t.preventDefault ? t.preventDefault() : (t.returnValue = !1),
          !1
        );
      }),
      (t.preventDefault = !0),
      t);
  })(),
  (function (t) {
    t._KeyBinding = {};
    var e = {},
      i = {},
      n = {},
      r = {},
      o = {},
      s = !1;
    (t._enableKeyboardEvent = function () {
      s ||
        (window.addEventListener("keydown", t._keydown, !1),
        window.addEventListener("keyup", t._keyup, !1),
        (s = !0));
    }),
      (t._keydown = function (i, s, a) {
        s = s || i.keyCode || i.which;
        var h = t._KeyBinding[s];
        if ((me.event.publish(me.event.KEYDOWN, [h, s, !h || !n[h]]), h)) {
          if (!n[h]) {
            var l = a || s;
            r[h][l] || (e[h]++, (r[h][l] = !0));
          }
          return !o[s] || t._preventDefault(i);
        }
        return !0;
      }),
      (t._keyup = function (i, s, a) {
        s = s || i.keyCode || i.which;
        var h = t._KeyBinding[s];
        if ((me.event.publish(me.event.KEYUP, [h, s]), h)) {
          var l = a || s;
          return (
            (r[h][l] = void 0),
            e[h] > 0 && e[h]--,
            (n[h] = !1),
            !o[s] || t._preventDefault(i)
          );
        }
        return !0;
      }),
      (t.KEY = {
        BACKSPACE: 8,
        TAB: 9,
        ENTER: 13,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        PAUSE: 19,
        CAPS_LOCK: 20,
        ESC: 27,
        SPACE: 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        PRINT_SCREEN: 42,
        INSERT: 45,
        DELETE: 46,
        NUM0: 48,
        NUM1: 49,
        NUM2: 50,
        NUM3: 51,
        NUM4: 52,
        NUM5: 53,
        NUM6: 54,
        NUM7: 55,
        NUM8: 56,
        NUM9: 57,
        A: 65,
        B: 66,
        C: 67,
        D: 68,
        E: 69,
        F: 70,
        G: 71,
        H: 72,
        I: 73,
        J: 74,
        K: 75,
        L: 76,
        M: 77,
        N: 78,
        O: 79,
        P: 80,
        Q: 81,
        R: 82,
        S: 83,
        T: 84,
        U: 85,
        V: 86,
        W: 87,
        X: 88,
        Y: 89,
        Z: 90,
        WINDOW_KEY: 91,
        NUMPAD0: 96,
        NUMPAD1: 97,
        NUMPAD2: 98,
        NUMPAD3: 99,
        NUMPAD4: 100,
        NUMPAD5: 101,
        NUMPAD6: 102,
        NUMPAD7: 103,
        NUMPAD8: 104,
        NUMPAD9: 105,
        MULTIPLY: 106,
        ADD: 107,
        SUBSTRACT: 109,
        DECIMAL: 110,
        DIVIDE: 111,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        NUM_LOCK: 144,
        SCROLL_LOCK: 145,
        SEMICOLON: 186,
        PLUS: 187,
        COMMA: 188,
        MINUS: 189,
        PERIOD: 190,
        FORWAND_SLASH: 191,
        GRAVE_ACCENT: 192,
        OPEN_BRACKET: 219,
        BACK_SLASH: 220,
        CLOSE_BRACKET: 221,
        SINGLE_QUOTE: 222,
      }),
      (t.isKeyPressed = function (t) {
        return !!e[t] && !n[t] && (i[t] && (n[t] = !0), !0);
      }),
      (t.keyStatus = function (t) {
        return e[t] > 0;
      }),
      (t.triggerKeyEvent = function (e, i) {
        i ? t._keydown({}, e) : t._keyup({}, e);
      }),
      (t.bindKey = function (s, a, h, l) {
        t._enableKeyboardEvent(),
          "boolean" != typeof l && (l = t.preventDefault),
          (t._KeyBinding[s] = a),
          (o[s] = l),
          (e[a] = 0),
          (i[a] = !!h && h),
          (n[a] = !1),
          (r[a] = {});
      }),
      (t.unlockKey = function (t) {
        n[t] = !1;
      }),
      (t.unbindKey = function (n) {
        var s = t._KeyBinding[n];
        (e[s] = 0),
          (i[s] = !1),
          (r[s] = {}),
          (t._KeyBinding[n] = null),
          (o[n] = null);
      });
  })(me.input),
  (function (t) {
    function e(t, e) {
      for (var i = 2; i < t.length; ++i)
        void 0 !== t[i] &&
          me.video.renderer.getScreenCanvas().addEventListener(t[i], e, !1);
    }
    function i() {
      f ||
        ((t._offset = me.video.getPos()),
        window.addEventListener(
          "scroll",
          throttle(100, !1, function (e) {
            (t._offset = me.video.getPos()),
              me.event.publish(me.event.WINDOW_ONSCROLL, [e]);
          }),
          !1
        ),
        e(
          (v = window.PointerEvent
            ? m
            : window.MSPointerEvent
            ? $
            : me.device.touch && me.device.isMobile
            ? _
            : y),
          h
        ),
        (p =
          "onwheel" in document.createElement("div") ? "wheel" : "mousewheel"),
        window.addEventListener(p, s, !1),
        void 0 === t.throttlingInterval &&
          (t.throttlingInterval = ~~(1e3 / me.sys.fps)),
        t.throttlingInterval < 17
          ? me.video.renderer.getScreenCanvas().addEventListener(v[x], a, !1)
          : me.video.renderer.getScreenCanvas().addEventListener(
              v[x],
              throttle(t.throttlingInterval, !1, function (t) {
                a(t);
              }),
              !1
            ),
        (f = !0));
    }
    function n(t, e, i, n) {
      var r;
      if (t.callbacks[e]) {
        t.pointerId = n;
        for (var o = t.callbacks[e].length - 1; (r = t.callbacks[e][o]); o--)
          if (!1 === r(i)) return !0;
      }
      return !1;
    }
    function r(t) {
      var e = !1;
      for (me.game.viewport.localToWorld(0, 0, S); C.length > 0; ) {
        var i = C.pop();
        if ((l.push(i), void 0 !== t.timeStamp)) {
          if (t.timeStamp < g) continue;
          g = t.timeStamp;
        }
        me.device.pointerEvent || (t.pointerId = i.id),
          (t.gameScreenX = i.x),
          (t.gameScreenY = i.y),
          (t.gameWorldX = t.gameScreenX + S.x),
          (t.gameWorldY = t.gameScreenY + S.y),
          d.setShape(t.gameWorldX, t.gameWorldY, t.width || 1, t.height || 1);
        var r = me.collision.quadTree.retrieve(
          d,
          me.Container.prototype._sortReverseZ
        );
        r.push(me.game.viewport);
        for (var o, s = r.length; (o = r[--s]); ) {
          if (c.has(o)) {
            var a = c.get(o),
              h = a.region,
              u = h.ancestor,
              f = h.getBounds();
            if (
              (!0 === h.floating
                ? ((t.gameX = t.gameLocalX = t.gameScreenX),
                  (t.gameY = t.gameLocalY = t.gameScreenY))
                : ((t.gameX = t.gameLocalX = t.gameWorldX),
                  (t.gameY = t.gameLocalY = t.gameWorldY)),
              void 0 !== u)
            ) {
              var p = u.getBounds().pos;
              (t.gameLocalX = t.gameX - p.x), (t.gameLocalY = t.gameY - p.y);
            }
            var m =
              f.containsPoint(t.gameX, t.gameY) &&
              (f === h || h.containsPoint(t.gameLocalX, t.gameLocalY));
            switch (v.indexOf(t.type)) {
              case x:
                if (a.pointerId !== t.pointerId || m) {
                  if (null === a.pointerId && m && n(a, v[E], t, t.pointerId)) {
                    e = !0;
                    break;
                  }
                } else if (n(a, v[A], t, null)) {
                  e = !0;
                  break;
                }
                m && n(a, t.type, t, t.pointerId) && (e = !0);
                break;
              case w:
                a.pointerId === t.pointerId &&
                  m &&
                  n(a, t.type, t, null) &&
                  (e = !0);
                break;
              case T:
                a.pointerId === t.pointerId &&
                  n(a, t.type, t, null) &&
                  (e = !0);
                break;
              default:
                if (m) {
                  var $ = t.type;
                  "wheel" === $ && ($ = "mousewheel"),
                    n(a, $, t, t.pointerId) && (e = !0);
                }
            }
          }
          if (!0 === e) break;
        }
      }
      return e;
    }
    function o(e) {
      var i = l.pop();
      if (e.touches)
        for (var n = 0, r = e.changedTouches.length; r > n; n++) {
          var o = e.changedTouches[n];
          t.globalToLocal(o.clientX, o.clientY, i),
            (i.id = o.identifier),
            C.push(i);
        }
      else
        t.globalToLocal(e.clientX, e.clientY, i),
          (i.id = e.pointerId || 1),
          C.push(i);
      !1 !== e.isPrimary &&
        (t.pointer.pos.set(C[0].x, C[0].y),
        "number" == typeof e.width &&
          ((e.width === t.pointer.width && e.height === t.pointer.height) ||
            t.pointer.resize(e.width || 1, e.height || 1)));
    }
    function s(e) {
      return (
        !(
          e.target === me.video.renderer.getScreenCanvas() &&
          (o(e),
          (e.deltaMode = 1),
          "mousewheel" === p &&
            ((e.deltaY = (-1 / 40) * e.wheelDelta),
            e.wheelDeltaX && (e.deltaX = (-1 / 40) * e.wheelDeltaX)),
          r(e))
        ) || t._preventDefault(e)
      );
    }
    function a(e) {
      return o(e), !r(e) || t._preventDefault(e);
    }
    function h(e) {
      if ((o(e), r(e))) return t._preventDefault(e);
      var i = e.button || 0,
        n = t.pointer.bind[i];
      return (
        !n ||
        (e.type === v[b] ? t._keydown(e, n, i + 1) : t._keyup(e, n, i + 1))
      );
    }
    for (var l = [], u = 0; 10 > u; u++) l.push(new me.Vector2d());
    var c = new Map(),
      d = new me.Rect(0, 0, 1, 1),
      f = !1,
      p = "mousewheel",
      g = 0,
      v = null,
      m = [
        "mousewheel",
        "pointermove",
        "pointerdown",
        "pointerup",
        "pointercancel",
        "pointerenter",
        "pointerleave",
      ],
      $ = [
        "mousewheel",
        "MSPointerMove",
        "MSPointerDown",
        "MSPointerUp",
        "MSPointerCancel",
        "MSPointerEnter",
        "MSPointerLeave",
      ],
      y = [
        "mousewheel",
        "mousemove",
        "mousedown",
        "mouseup",
        "mousecancel",
        "mouseenter",
        "mouseleave",
      ],
      _ = [
        void 0,
        "touchmove",
        "touchstart",
        "touchend",
        "touchcancel",
        "touchenter",
        "touchleave",
      ],
      x = 1,
      b = 2,
      w = 3,
      T = 4,
      E = 5,
      A = 6,
      S = new me.Vector2d(),
      C = [];
    (t._offset = null),
      (t.pointer = new me.Rect(0, 0, 1, 1)),
      (t.pointer.bind = [0, 0, 0]),
      (t.pointer.LEFT = 0),
      (t.pointer.MIDDLE = 1),
      (t.pointer.RIGHT = 2),
      (t.throttlingInterval = void 0),
      (t.globalToLocal = function (e, i, n) {
        n = n || new me.Vector2d();
        var r = t._offset,
          o = me.device.getPixelRatio();
        (e -= r.left), (i -= r.top);
        var s = me.sys.scale;
        return (
          (1 === s.x && 1 === s.y) || ((e /= s.x), (i /= s.y)),
          n.set(e * o, i * o)
        );
      }),
      (t.bindPointer = function () {
        var e = arguments.length < 2 ? t.pointer.LEFT : arguments[0],
          n = arguments.length < 2 ? arguments[0] : arguments[1];
        if ((i(), !t._KeyBinding[n]))
          throw new me.Error("no action defined for keycode " + n);
        t.pointer.bind[e] = n;
      }),
      (t.unbindPointer = function (e) {
        t.pointer.bind[void 0 === e ? t.pointer.LEFT : e] = null;
      }),
      (t.registerPointerEvent = function (t, e, n) {
        if ((i(), -1 === m.indexOf(t)))
          throw new me.Error("invalid event type : " + t);
        m !== v && (t = v[m.indexOf(t)]),
          c.has(e) || c.set(e, { region: e, callbacks: {}, pointerId: null });
        var r = c.get(e);
        r.callbacks[t] || (r.callbacks[t] = []), r.callbacks[t].push(n);
      }),
      (t.releasePointerEvent = function (t, e, i) {
        if (-1 === m.indexOf(t))
          throw new me.Error("invalid event type : " + t);
        m !== v && (t = v[m.indexOf(t)]);
        var n = c.get(e);
        if (void 0 === i)
          for (; n.callbacks[t].length > 0; ) n.callbacks[t].pop();
        else n.callbacks[t].remove(i);
        0 === Object.keys(n.callbacks).length && c.delete(e);
      }),
      (t._translatePointerEvents = function () {
        t.registerPointerEvent("pointermove", me.game.viewport, function (t) {
          me.event.publish(me.event.POINTERMOVE, [t]);
        });
      });
  })(me.input),
  (function (t) {
    function e(t) {
      return t;
    }
    function i(e, i, n) {
      return n === t.GAMEPAD.BUTTONS.L2 || n === t.GAMEPAD.BUTTONS.R2
        ? (e + 1) / 2
        : e;
    }
    function n(e, i, n) {
      return (e =
        e > 0
          ? n === t.GAMEPAD.BUTTONS.L2
            ? Math.max(0, e - 2e4) / 111070
            : (e - 1) / 131070
          : (65536 + e) / 131070 + 0.5);
    }
    function r(t, i) {
      var n = t.replace(s, function (t, e, i) {
          return (
            "000".substr(e.length - 1) +
            e +
            "-" +
            "000".substr(i.length - 1) +
            i +
            "-"
          );
        }),
        r = t.replace(s, function (t, e, i) {
          return e.replace(a, "") + "-" + i.replace(a, "") + "-";
        });
      (i.analog =
        i.analog ||
        i.buttons.map(function () {
          return -1;
        })),
        (i.normalize_fn = i.normalize_fn || e),
        l.set(n, i),
        l.set(r, i);
    }
    var o = 0.1,
      s = /^([0-9a-f]{1,4})-([0-9a-f]{1,4})-/i,
      a = /^0+/,
      h = {},
      l = new Map();
    [
      [
        "45e-28e-Xbox 360 Wired Controller",
        {
          axes: [0, 1, 3, 4],
          buttons: [11, 12, 13, 14, 8, 9, -1, -1, 5, 4, 6, 7, 0, 1, 2, 3, 10],
          analog: [
            -1, -1, -1, -1, -1, -1, 2, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1,
          ],
          normalize_fn: i,
        },
      ],
      [
        "54c-268-PLAYSTATION(R)3 Controller",
        {
          axes: [0, 1, 2, 3],
          buttons: [14, 13, 15, 12, 10, 11, 8, 9, 0, 3, 1, 2, 4, 6, 7, 5, 16],
        },
      ],
      [
        "54c-5c4-Wireless Controller",
        {
          axes: [0, 1, 2, 3],
          buttons: [
            1, 0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 14, 15, 16, 17, 12, 13,
          ],
        },
      ],
      [
        "2836-1-OUYA Game Controller",
        {
          axes: [0, 3, 7, 9],
          buttons: [
            3, 6, 4, 5, 7, 8, 15, 16, -1, -1, 9, 10, 11, 12, 13, 14, -1,
          ],
          analog: [
            -1, -1, -1, -1, -1, -1, 5, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1,
          ],
          normalize_fn: n,
        },
      ],
      [
        "OUYA Game Controller (Vendor: 2836 Product: 0001)",
        {
          axes: [0, 1, 3, 4],
          buttons: [0, 3, 1, 2, 4, 5, 12, 13, -1, -1, 6, 7, 8, 9, 10, 11, -1],
          analog: [
            -1, -1, -1, -1, -1, -1, 2, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1,
          ],
          normalize_fn: n,
        },
      ],
    ].forEach(function (t) {
      r(t[0], t[1]);
    }),
      window.addEventListener(
        "gamepadconnected",
        function (t) {
          me.event.publish(me.event.GAMEPAD_CONNECTED, [t.gamepad]);
        },
        !1
      ),
      window.addEventListener(
        "gamepaddisconnected",
        function (t) {
          me.event.publish(me.event.GAMEPAD_DISCONNECTED, [t.gamepad]);
        },
        !1
      ),
      (t._updateGamepads = navigator.getGamepads
        ? function () {
            var e = navigator.getGamepads(),
              i = {};
            Object.keys(h).forEach(function (n) {
              var r = e[n];
              if (r) {
                var s = null;
                "standard" !== r.mapping && (s = l.get(r.id));
                var a = h[n];
                Object.keys(a.buttons).forEach(function (e) {
                  var h = a.buttons[e],
                    l = e,
                    u = -1;
                  if (
                    !(
                      s &&
                      ((l = s.buttons[e]), (u = s.analog[e]), 0 > l && 0 > u)
                    )
                  ) {
                    var c = r.buttons[l] || {};
                    if (s && u >= 0) {
                      var d = s.normalize_fn(r.axes[u], -1, +e);
                      c = { value: d, pressed: c.pressed || Math.abs(d) >= o };
                    }
                    me.event.publish(me.event.GAMEPAD_UPDATE, [
                      n,
                      "buttons",
                      +e,
                      c,
                    ]),
                      !h.pressed && c.pressed
                        ? t._keydown(i, h.keyCode, l + 256)
                        : h.pressed &&
                          !c.pressed &&
                          t._keyup(i, h.keyCode, l + 256),
                      (h.value = c.value),
                      (h.pressed = c.pressed);
                  }
                }),
                  Object.keys(a.axes).forEach(function (e) {
                    var h = a.axes[e],
                      l = e;
                    if (!(s && 0 > (l = s.axes[e]))) {
                      var u = r.axes[l];
                      if (void 0 !== u) {
                        s && (u = s.normalize_fn(u, +e, -1));
                        var c = Math.sign(u) || 1;
                        if (h[c]) {
                          var d = Math.abs(u) >= o + Math.abs(h[c].threshold);
                          me.event.publish(me.event.GAMEPAD_UPDATE, [
                            n,
                            "axes",
                            +e,
                            u,
                          ]),
                            !h[c].pressed && d
                              ? t._keydown(i, h[c].keyCode, l + 256)
                              : (h[c].pressed || (h[-c] && h[-c].pressed)) &&
                                !d &&
                                ((c = h[c].pressed ? c : -c),
                                t._keyup(i, h[c].keyCode, l + 256)),
                            (h[c].value = u),
                            (h[c].pressed = d);
                        }
                      }
                    }
                  });
              }
            });
          }
        : function () {}),
      (t.GAMEPAD = {
        AXES: {
          LX: 0,
          LY: 1,
          RX: 2,
          RY: 3,
          EXTRA_1: 4,
          EXTRA_2: 5,
          EXTRA_3: 6,
          EXTRA_4: 7,
        },
        BUTTONS: {
          FACE_1: 0,
          FACE_2: 1,
          FACE_3: 2,
          FACE_4: 3,
          L1: 4,
          R1: 5,
          L2: 6,
          R2: 7,
          SELECT: 8,
          BACK: 8,
          START: 9,
          FORWARD: 9,
          L3: 10,
          R3: 11,
          UP: 12,
          DOWN: 13,
          LEFT: 14,
          RIGHT: 15,
          HOME: 16,
          EXTRA_1: 17,
          EXTRA_2: 18,
          EXTRA_3: 19,
          EXTRA_4: 20,
        },
      }),
      (t.bindGamepad = function (e, i, n) {
        if (!t._KeyBinding[n])
          throw new me.Error("no action defined for keycode " + n);
        "object" != typeof i &&
          ((i = { type: "buttons", code: i }),
          console.warn(
            "Deprecated: me.input.bindGamepad parameteres have changed"
          )),
          h[e] || (h[e] = { axes: {}, buttons: {} });
        var r = { keyCode: n, value: 0, pressed: !1, threshold: i.threshold },
          o = h[e][i.type];
        if ("buttons" === i.type) o[i.code] = r;
        else if ("axes" === i.type) {
          var s = Math.sign(i.threshold) || 1;
          o[i.code] || (o[i.code] = {}), (o[i.code][s] = r);
        }
      }),
      (t.unbindGamepad = function (t, e) {
        if (!h[t]) throw new me.Error("no bindings for gamepad " + t);
        h[t].buttons[e] = {};
      }),
      (t.setGamepadDeadzone = function (t) {
        o = t;
      }),
      (t.setGamepadMapping = r);
  })(me.input),
  (function () {
    var t,
      e,
      i,
      n,
      r,
      o,
      s,
      a =
        ((e =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="),
        ((t = {}).decode = function (t) {
          if (
            ((t = t.replace(/[^A-Za-z0-9\+\/\=]/g, "")), me.device.nativeBase64)
          )
            return window.atob(t);
          for (var i, n, r, o, s, a, h, l = [], u = 0; u < t.length; )
            (o = e.indexOf(t.charAt(u++))),
              (s = e.indexOf(t.charAt(u++))),
              (a = e.indexOf(t.charAt(u++))),
              (h = e.indexOf(t.charAt(u++))),
              (i = (o << 2) | (s >> 4)),
              (n = ((15 & s) << 4) | (a >> 2)),
              (r = ((3 & a) << 6) | h),
              l.push(String.fromCharCode(i)),
              64 !== a && l.push(String.fromCharCode(n)),
              64 !== h && l.push(String.fromCharCode(r));
          return l.join("");
        }),
        (t.encode = function (t) {
          if (((t = t.replace(/\r\n/g, "\n")), me.device.nativeBase64))
            return window.btoa(t);
          for (var i, n, r, o, s, a, h, l = [], u = 0; u < t.length; )
            (i = t.charCodeAt(u++)),
              (n = t.charCodeAt(u++)),
              (r = t.charCodeAt(u++)),
              (o = i >> 2),
              (s = ((3 & i) << 4) | (n >> 4)),
              (a = ((15 & n) << 2) | (r >> 6)),
              (h = 63 & r),
              isNaN(n) ? (a = h = 64) : isNaN(r) && (h = 64),
              l.push(e.charAt(o)),
              l.push(e.charAt(s)),
              l.push(e.charAt(a)),
              l.push(e.charAt(h));
          return l.join("");
        }),
        t);
    me.utils =
      ((n = ""),
      (r = 0),
      (o = /^.*(\\|\/|\:)/),
      (s = /\.[^\.]*$/),
      ((i = {}).decodeBase64 = function (t) {
        return a.decode(t);
      }),
      (i.encodeBase64 = function (t) {
        return a.encode(t);
      }),
      (i.decodeBase64AsArray = function (t, e) {
        e = e || 1;
        var i,
          n,
          r,
          o = a.decode(t),
          s = new Uint32Array(o.length / e);
        for (i = 0, r = o.length / e; r > i; i++)
          for (s[i] = 0, n = e - 1; n >= 0; --n)
            s[i] += o.charCodeAt(i * e + n) << (n << 3);
        return s;
      }),
      (i.decompress = function () {
        throw new me.Error("GZIP/ZLIB compressed TMX Tile Map not supported!");
      }),
      (i.decodeCSV = function (t) {
        for (
          var e = t.replace("\n", "").trim().split(","), i = [], n = 0;
          n < e.length;
          n++
        )
          i.push(+e[n]);
        return i;
      }),
      (i.getBasename = function (t) {
        return t.replace(o, "").replace(s, "");
      }),
      (i.getFileExtension = function (t) {
        return t.substring(t.lastIndexOf(".") + 1, t.length);
      }),
      (i.getPixels = function (t) {
        if (t instanceof HTMLImageElement) {
          var e = me.CanvasRenderer.getContext2d(
            me.video.createCanvas(t.width, t.height)
          );
          return e.drawImage(t, 0, 0), e.getImageData(0, 0, t.width, t.height);
        }
        return t.getContext("2d").getImageData(0, 0, t.width, t.height);
      }),
      (i.getImage = function (t) {
        return "string" == typeof t
          ? me.loader.getImage(me.utils.getBasename(t))
          : t;
      }),
      (i.resetGUID = function (t, e) {
        (n = t.toString().toUpperCase().toHex()), (r = e || 0);
      }),
      (i.createGUID = function (t) {
        return (r += t || 1), n + "-" + (t || r);
      }),
      i);
  })(),
  (function () {
    var t = /^rgba?\((\d+), ?(\d+), ?(\d+)(, ?([\d\.]+))?\)$/,
      e = /^#([\da-fA-F])([\da-fA-F])([\da-fA-F])$/,
      i = /^#([\da-fA-F])([\da-fA-F])([\da-fA-F])([\da-fA-F])$/,
      n = /^#([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})$/,
      r = /^#([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})$/,
      o = new Map();
    [
      ["black", [0, 0, 0]],
      ["silver", [192, 192, 129]],
      ["gray", [128, 128, 128]],
      ["white", [255, 255, 255]],
      ["maroon", [128, 0, 0]],
      ["red", [255, 0, 0]],
      ["purple", [128, 0, 128]],
      ["fuchsia", [255, 0, 255]],
      ["green", [0, 128, 0]],
      ["lime", [0, 255, 0]],
      ["olive", [128, 128, 0]],
      ["yellow", [255, 255, 0]],
      ["navy", [0, 0, 128]],
      ["blue", [0, 0, 255]],
      ["teal", [0, 128, 128]],
      ["aqua", [0, 255, 255]],
      ["orange", [255, 165, 0]],
      ["aliceblue", [240, 248, 245]],
      ["antiquewhite", [250, 235, 215]],
      ["aquamarine", [127, 255, 212]],
      ["azure", [240, 255, 255]],
      ["beige", [245, 245, 220]],
      ["bisque", [255, 228, 196]],
      ["blanchedalmond", [255, 235, 205]],
      ["blueviolet", [138, 43, 226]],
      ["brown", [165, 42, 42]],
      ["burlywood", [222, 184, 35]],
      ["cadetblue", [95, 158, 160]],
      ["chartreuse", [127, 255, 0]],
      ["chocolate", [210, 105, 30]],
      ["coral", [255, 127, 80]],
      ["cornflowerblue", [100, 149, 237]],
      ["cornsilk", [255, 248, 220]],
      ["crimson", [220, 20, 60]],
      ["darkblue", [0, 0, 139]],
      ["darkcyan", [0, 139, 139]],
      ["darkgoldenrod", [184, 134, 11]],
      ["darkgray[*]", [169, 169, 169]],
      ["darkgreen", [0, 100, 0]],
      ["darkgrey[*]", [169, 169, 169]],
      ["darkkhaki", [189, 183, 107]],
      ["darkmagenta", [139, 0, 139]],
      ["darkolivegreen", [85, 107, 47]],
      ["darkorange", [255, 140, 0]],
      ["darkorchid", [153, 50, 204]],
      ["darkred", [139, 0, 0]],
      ["darksalmon", [233, 150, 122]],
      ["darkseagreen", [143, 188, 143]],
      ["darkslateblue", [72, 61, 139]],
      ["darkslategray", [47, 79, 79]],
      ["darkslategrey", [47, 79, 79]],
      ["darkturquoise", [0, 206, 209]],
      ["darkviolet", [148, 0, 211]],
      ["deeppink", [255, 20, 147]],
      ["deepskyblue", [0, 191, 255]],
      ["dimgray", [105, 105, 105]],
      ["dimgrey", [105, 105, 105]],
      ["dodgerblue", [30, 144, 255]],
      ["firebrick", [178, 34, 34]],
      ["floralwhite", [255, 250, 240]],
      ["forestgreen", [34, 139, 34]],
      ["gainsboro", [220, 220, 220]],
      ["ghostwhite", [248, 248, 255]],
      ["gold", [255, 215, 0]],
      ["goldenrod", [218, 165, 32]],
      ["greenyellow", [173, 255, 47]],
      ["grey", [128, 128, 128]],
      ["honeydew", [240, 255, 240]],
      ["hotpink", [255, 105, 180]],
      ["indianred", [205, 92, 92]],
      ["indigo", [75, 0, 130]],
      ["ivory", [255, 255, 240]],
      ["khaki", [240, 230, 140]],
      ["lavender", [230, 230, 250]],
      ["lavenderblush", [255, 240, 245]],
      ["lawngreen", [124, 252, 0]],
      ["lemonchiffon", [255, 250, 205]],
      ["lightblue", [173, 216, 230]],
      ["lightcoral", [240, 128, 128]],
      ["lightcyan", [224, 255, 255]],
      ["lightgoldenrodyellow", [250, 250, 210]],
      ["lightgray", [211, 211, 211]],
      ["lightgreen", [144, 238, 144]],
      ["lightgrey", [211, 211, 211]],
      ["lightpink", [255, 182, 193]],
      ["lightsalmon", [255, 160, 122]],
      ["lightseagreen", [32, 178, 170]],
      ["lightskyblue", [135, 206, 250]],
      ["lightslategray", [119, 136, 153]],
      ["lightslategrey", [119, 136, 153]],
      ["lightsteelblue", [176, 196, 222]],
      ["lightyellow", [255, 255, 224]],
      ["limegreen", [50, 205, 50]],
      ["linen", [250, 240, 230]],
      ["mediumaquamarine", [102, 205, 170]],
      ["mediumblue", [0, 0, 205]],
      ["mediumorchid", [186, 85, 211]],
      ["mediumpurple", [147, 112, 219]],
      ["mediumseagreen", [60, 179, 113]],
      ["mediumslateblue", [123, 104, 238]],
      ["mediumspringgreen", [0, 250, 154]],
      ["mediumturquoise", [72, 209, 204]],
      ["mediumvioletred", [199, 21, 133]],
      ["midnightblue", [25, 25, 112]],
      ["mintcream", [245, 255, 250]],
      ["mistyrose", [255, 228, 225]],
      ["moccasin", [255, 228, 181]],
      ["navajowhite", [255, 222, 173]],
      ["oldlace", [253, 245, 230]],
      ["olivedrab", [107, 142, 35]],
      ["orangered", [255, 69, 0]],
      ["orchid", [218, 112, 214]],
      ["palegoldenrod", [238, 232, 170]],
      ["palegreen", [152, 251, 152]],
      ["paleturquoise", [175, 238, 238]],
      ["palevioletred", [219, 112, 147]],
      ["papayawhip", [255, 239, 213]],
      ["peachpuff", [255, 218, 185]],
      ["peru", [205, 133, 63]],
      ["pink", [255, 192, 203]],
      ["plum", [221, 160, 221]],
      ["powderblue", [176, 224, 230]],
      ["rosybrown", [188, 143, 143]],
      ["royalblue", [65, 105, 225]],
      ["saddlebrown", [139, 69, 19]],
      ["salmon", [250, 128, 114]],
      ["sandybrown", [244, 164, 96]],
      ["seagreen", [46, 139, 87]],
      ["seashell", [255, 245, 238]],
      ["sienna", [160, 82, 45]],
      ["skyblue", [135, 206, 235]],
      ["slateblue", [106, 90, 205]],
      ["slategray", [112, 128, 144]],
      ["slategrey", [112, 128, 144]],
      ["snow", [255, 250, 250]],
      ["springgreen", [0, 255, 127]],
      ["steelblue", [70, 130, 180]],
      ["tan", [210, 180, 140]],
      ["thistle", [216, 191, 216]],
      ["tomato", [255, 99, 71]],
      ["turquoise", [64, 224, 208]],
      ["violet", [238, 130, 238]],
      ["wheat", [245, 222, 179]],
      ["whitesmoke", [245, 245, 245]],
      ["yellowgreen", [154, 205, 50]],
    ].forEach(function (t) {
      o.set(t[0], t[1]);
    }),
      (me.Color = me.Object.extend({
        init: function (t, e, i, n) {
          return (
            void 0 === this.glArray &&
              (this.glArray = new Float32Array([0, 0, 0, 1])),
            this.setColor(t, e, i, n)
          );
        },
        setColor: function (t, e, i, n) {
          return t instanceof me.Color
            ? (this.glArray.set(t.glArray), t)
            : ((this.r = t),
              (this.g = e),
              (this.b = i),
              (this.alpha = n),
              this);
        },
        clone: function () {
          return me.pool.pull("me.Color", this);
        },
        copy: function (t) {
          return t instanceof me.Color
            ? (this.glArray.set(t.glArray), this)
            : this.parseCSS(t);
        },
        add: function (t) {
          return (
            (this.glArray[0] = (this.glArray[0] + t.glArray[0]).clamp(0, 1)),
            (this.glArray[1] = (this.glArray[1] + t.glArray[1]).clamp(0, 1)),
            (this.glArray[2] = (this.glArray[2] + t.glArray[2]).clamp(0, 1)),
            (this.glArray[3] = (this.glArray[3] + t.glArray[3]) / 2),
            this
          );
        },
        darken: function (t) {
          return (
            (t = t.clamp(0, 1)),
            (this.glArray[0] *= t),
            (this.glArray[1] *= t),
            (this.glArray[2] *= t),
            this
          );
        },
        lighten: function (t) {
          return (
            (t = t.clamp(0, 1)),
            (this.glArray[0] = (
              this.glArray[0] +
              (1 - this.glArray[0]) * t
            ).clamp(0, 1)),
            (this.glArray[1] = (
              this.glArray[1] +
              (1 - this.glArray[1]) * t
            ).clamp(0, 1)),
            (this.glArray[2] = (
              this.glArray[2] +
              (1 - this.glArray[2]) * t
            ).clamp(0, 1)),
            this
          );
        },
        random: function () {
          return this.setColor(
            256 * Math.random(),
            256 * Math.random(),
            256 * Math.random(),
            this.alpha
          );
        },
        equals: function (t) {
          return (
            this.glArray[0] === t.glArray[0] &&
            this.glArray[1] === t.glArray[1] &&
            this.glArray[2] === t.glArray[2] &&
            this.glArray[3] === t.glArray[3]
          );
        },
        parseCSS: function (t) {
          return o.has(t)
            ? this.setColor.apply(this, o.get(t))
            : this.parseRGB(t);
        },
        parseRGB: function (e) {
          var i = t.exec(e);
          return i
            ? this.setColor(+i[1], +i[2], +i[3], +i[5])
            : this.parseHex(e);
        },
        parseHex: function (t) {
          var o;
          if ((o = r.exec(t)))
            return this.setColor(
              parseInt(o[1], 16),
              parseInt(o[2], 16),
              parseInt(o[3], 16),
              (parseInt(o[4], 16).clamp(0, 255) / 255).toFixed(1)
            );
          if ((o = n.exec(t)))
            return this.setColor(
              parseInt(o[1], 16),
              parseInt(o[2], 16),
              parseInt(o[3], 16)
            );
          if ((o = i.exec(t)))
            return this.setColor(
              parseInt(o[1] + o[1], 16),
              parseInt(o[2] + o[2], 16),
              parseInt(o[3] + o[3], 16),
              (parseInt(o[4] + o[4], 16).clamp(0, 255) / 255).toFixed(1)
            );
          if ((o = e.exec(t)))
            return this.setColor(
              parseInt(o[1] + o[1], 16),
              parseInt(o[2] + o[2], 16),
              parseInt(o[3] + o[3], 16)
            );
          throw new me.Color.Error("invalid parameter: " + t);
        },
        toGL: function () {
          return this.glArray;
        },
        toHex: function () {
          return "#" + this.r.toHex() + this.g.toHex() + this.b.toHex();
        },
        toHex8: function () {
          return (
            "#" +
            this.r.toHex() +
            this.g.toHex() +
            this.b.toHex() +
            this.alpha.toHex()
          );
        },
        toRGB: function () {
          return "rgb(" + this.r + "," + this.g + "," + this.b + ")";
        },
        toRGBA: function () {
          return (
            "rgba(" +
            this.r +
            "," +
            this.g +
            "," +
            this.b +
            "," +
            this.alpha +
            ")"
          );
        },
      })),
      Object.defineProperty(me.Color.prototype, "r", {
        get: function () {
          return ~~(255 * this.glArray[0]);
        },
        set: function (t) {
          this.glArray[0] = (~~t || 0).clamp(0, 255) / 255;
        },
        enumerable: !0,
        configurable: !0,
      }),
      Object.defineProperty(me.Color.prototype, "g", {
        get: function () {
          return ~~(255 * this.glArray[1]);
        },
        set: function (t) {
          this.glArray[1] = (~~t || 0).clamp(0, 255) / 255;
        },
        enumerable: !0,
        configurable: !0,
      }),
      Object.defineProperty(me.Color.prototype, "b", {
        get: function () {
          return ~~(255 * this.glArray[2]);
        },
        set: function (t) {
          this.glArray[2] = (~~t || 0).clamp(0, 255) / 255;
        },
        enumerable: !0,
        configurable: !0,
      }),
      Object.defineProperty(me.Color.prototype, "alpha", {
        get: function () {
          return this.glArray[3];
        },
        set: function (t) {
          this.glArray[3] = void 0 === t ? 1 : (+t).clamp(0, 1);
        },
        enumerable: !0,
        configurable: !0,
      }),
      (me.Color.Error = me.Error.extend({
        init: function (t) {
          me.Error.prototype.init.apply(this, [t]),
            (this.name = "me.Color.Error");
        },
      }));
  })(),
  (me.save = (function () {
    function t(t) {
      return "add" === t || "remove" === t;
    }
    var e = {},
      i = {
        _init: function () {
          !0 === me.device.localStorage &&
            (JSON.parse(localStorage.getItem("me.save")) || []).forEach(
              function (t) {
                e[t] = JSON.parse(localStorage.getItem("me.save." + t));
              }
            );
        },
        add: function (n) {
          Object.keys(n).forEach(function (r) {
            var o;
            t(r) ||
              (Object.defineProperty(i, (o = r), {
                configurable: !0,
                enumerable: !0,
                get: function () {
                  return e[o];
                },
                set: function (t) {
                  (e[o] = t),
                    !0 === me.device.localStorage &&
                      localStorage.setItem("me.save." + o, JSON.stringify(t));
                },
              }),
              r in e || (i[r] = n[r]));
          }),
            !0 === me.device.localStorage &&
              localStorage.setItem("me.save", JSON.stringify(Object.keys(e)));
        },
        remove: function (i) {
          t(i) ||
            (void 0 !== e[i] &&
              (delete e[i],
              !0 === me.device.localStorage &&
                (localStorage.removeItem("me.save." + i),
                localStorage.setItem(
                  "me.save",
                  JSON.stringify(Object.keys(e))
                ))));
        },
      };
    return i;
  })()),
  (me.TMXUtils = (function () {
    function a(a, b, c) {
      var d;
      if ("string" != typeof c) return c;
      switch (b) {
        case "int":
        case "float":
          c = Number(c);
          break;
        case "bool":
          c = "true" === c;
          break;
        default:
          if (!c || c.isBoolean()) c = !c || "true" === c;
          else if (c.isNumeric()) c = Number(c);
          else if (0 === c.search(/^json:/i)) {
            d = c.split(/^json:/i)[1];
            try {
              c = JSON.parse(d);
            } catch (a) {
              throw new me.Error("Unable to parse JSON: " + d);
            }
          } else if (0 === c.search(/^eval:/i)) {
            d = c.split(/^eval:/i)[1];
            try {
              c = eval(d);
            } catch (a) {
              throw new me.Error("Unable to evaluate: " + d);
            }
          } else
            ((d = c.match(/^#([\da-fA-F])([\da-fA-F]{3})$/)) ||
              (d = c.match(/^#([\da-fA-F]{2})([\da-fA-F]{6})$/))) &&
              (c = "#" + d[2] + d[1]);
          0 === a.search(/^(ratio|anchorPoint)$/) &&
            "number" == typeof c &&
            (c = { x: c, y: c });
      }
      return c;
    }
    function b(t, e) {
      if (e.attributes && e.attributes.length > 0)
        for (var i = 0; i < e.attributes.length; i++) {
          var n = e.attributes.item(i);
          void 0 !== n.name
            ? (t[n.name] = n.value)
            : (t[n.nodeName] = n.nodeValue);
        }
    }
    var c = {};
    return (
      (c.decode = function (t, e, i) {
        switch (((i = i || "none"), (e = e || "none"))) {
          case "csv":
            return me.utils.decodeCSV(t);
          case "base64":
            var n = me.utils.decodeBase64AsArray(t, 4);
            return "none" === i ? n : me.utils.decompress(n, i);
          case "none":
            return t;
          case "xml":
            throw new me.Error(
              "XML encoding is deprecated, use base64 instead"
            );
          default:
            throw new me.Error("Unknown layer encoding: " + e);
        }
      }),
      (c.normalize = function (t, e) {
        var i = e.nodeName;
        switch (i) {
          case "data":
            var n = c.parse(e);
            (n.encoding = n.encoding || "xml"),
              (t.data = c.decode(n.text, n.encoding, n.compression)),
              (t.encoding = "none");
            break;
          case "imagelayer":
          case "layer":
          case "objectgroup":
            var r = c.parse(e);
            (r.type = "layer" === i ? "tilelayer" : i),
              r.image && (r.image = r.image.source),
              (t.layers = t.layers || []),
              t.layers.push(r);
            break;
          case "animation":
            t.animation = c.parse(e).frames;
            break;
          case "frame":
          case "object":
            var o = i + "s";
            (t[o] = t[o] || []), t[o].push(c.parse(e));
            break;
          case "tile":
            var s = c.parse(e);
            (t.tiles = t.tiles || {}), (t.tiles[s.id] = s);
            break;
          case "tileset":
            var h = c.parse(e);
            h.image &&
              ((h.imagewidth = h.image.width),
              (h.imageheight = h.image.height),
              (h.image = h.image.source)),
              (t.tilesets = t.tilesets || []),
              t.tilesets.push(h);
            break;
          case "polygon":
          case "polyline":
            t[i] = [];
            for (
              var l, u = c.parse(e).points.split(" "), d = 0;
              d < u.length;
              d++
            )
              (l = u[d].split(",")), t[i].push({ x: +l[0], y: +l[1] });
            break;
          case "properties":
            t.properties = c.parse(e);
            break;
          case "property":
            var f = c.parse(e);
            t[f.name] = a(f.name, f.type || "string", f.value);
            break;
          default:
            t[i] = c.parse(e);
        }
      }),
      (c.parse = function (t) {
        var e = {},
          i = "";
        if ((1 === t.nodeType && b(e, t), t.hasChildNodes()))
          for (var n = 0; n < t.childNodes.length; n++) {
            var r = t.childNodes.item(n);
            switch (r.nodeType) {
              case 1:
                c.normalize(e, r);
                break;
              case 3:
                i += r.nodeValue.trim();
            }
          }
        return i && (e.text = i), e;
      }),
      (c.applyTMXProperties = function (t, e) {
        var i = e.properties,
          n = e.propertytypes;
        if (void 0 !== i) {
          for (var r in i)
            if (i.hasOwnProperty(r)) {
              var o = "string";
              void 0 !== n && (o = n[r]), (t[r] = a(r, o, i[r]));
            }
        }
      }),
      c
    );
  })()),
  (me.TMXObjectGroup = me.Object.extend({
    init: function (t, e, i, n, r) {
      (this.name = t),
        (this.width = e.width),
        (this.height = e.height),
        (this.z = r),
        (this.objects = []);
      var o = void 0 === e.visible || e.visible;
      (this.opacity = !0 === o ? (+e.opacity || 1).clamp(0, 1) : 0),
        me.TMXUtils.applyTMXProperties(this, e);
      var s = e.objects;
      if (s) {
        var a = this;
        s.forEach(function (t) {
          a.objects.push(new me.TMXObject(t, i, n, r));
        });
      }
    },
    destroy: function () {
      this.objects = null;
    },
    getObjectCount: function () {
      return this.objects.length;
    },
    getObjectByIndex: function (t) {
      return this.objects[t];
    },
  })),
  (me.TMXObject = me.Object.extend({
    init: function (t, e, i, n) {
      if (
        ((this.points = void 0),
        (this.name = t.name),
        (this.x = +t.x),
        (this.y = +t.y),
        (this.z = +n),
        (this.width = +t.width || 0),
        (this.height = +t.height || 0),
        (this.gid = +t.gid || null),
        (this.type = t.type),
        (this.rotation = Number.prototype.degToRad(+t.rotation || 0)),
        (this.id = +t.id || void 0),
        (this.orientation = e),
        (this.shapes = void 0),
        (this.isEllipse = !1),
        (this.isPolygon = !1),
        (this.isPolyLine = !1),
        "number" == typeof this.gid)
      )
        this.setTile(i);
      else if (void 0 !== t.ellipse) this.isEllipse = !0;
      else {
        var r = t.polygon;
        if (
          (void 0 !== r
            ? (this.isPolygon = !0)
            : void 0 !== (r = t.polyline) && (this.isPolyLine = !0),
          void 0 !== r)
        ) {
          this.points = [];
          var o = this;
          r.forEach(function (t) {
            o.points.push(new me.Vector2d(t.x, t.y));
          });
        }
      }
      me.game.tmxRenderer.adjustPosition(this),
        me.TMXUtils.applyTMXProperties(this, t),
        this.shapes || (this.shapes = this.parseTMXShapes());
    },
    setTile: function (t) {
      var e = t.getTilesetByGid(this.gid);
      (this.width = this.framewidth = e.tilewidth),
        (this.height = this.frameheight = e.tileheight),
        (this.tile = new me.Tile(this.x, this.y, this.gid, e));
    },
    parseTMXShapes: function () {
      var t = 0,
        e = [];
      if (!0 === this.isEllipse)
        e.push(
          new me.Ellipse(
            this.width / 2,
            this.height / 2,
            this.width,
            this.height
          ).rotate(this.rotation)
        );
      else if (!0 === this.isPolygon)
        e.push(new me.Polygon(0, 0, this.points).rotate(this.rotation));
      else if (!0 === this.isPolyLine) {
        var i,
          n,
          r = this.points,
          o = r.length - 1;
        for (t = 0; o > t; t++)
          (i = r[t]),
            (n = r[t + 1].clone()),
            0 !== this.rotation &&
              ((i = i.rotate(this.rotation)), (n = n.rotate(this.rotation))),
            e.push(new me.Line(0, 0, [i, n]));
      } else
        e.push(
          new me.Polygon(0, 0, [
            new me.Vector2d(),
            new me.Vector2d(this.width, 0),
            new me.Vector2d(this.width, this.height),
            new me.Vector2d(0, this.height),
          ]).rotate(this.rotation)
        );
      if ("isometric" === this.orientation)
        for (t = 0; t < e.length; t++)
          e[t].rotate(Math.PI / 4).scale(Math.SQRT2, Math.SQRT1_2);
      return e;
    },
    getObjectPropertyByName: function (t) {
      return this[t];
    },
  })),
  (function () {
    var t = 2147483648,
      e = 1073741824,
      i = 536870912,
      n = 536870911;
    me.Tile = me.Rect.extend({
      init: function (r, o, s, a) {
        (this.tileset = a),
          (this.currentTransform = null),
          me.Rect.prototype.init.apply(this, [
            r * a.tilewidth,
            o * a.tileheight,
            a.tilewidth,
            a.tileheight,
          ]),
          (this.col = r),
          (this.row = o),
          (this.tileId = s),
          (this.flippedX = 0 != (this.tileId & t)),
          (this.flippedY = 0 != (this.tileId & e)),
          (this.flippedAD = 0 != (this.tileId & i)),
          (this.flipped = this.flippedX || this.flippedY || this.flippedAD),
          !0 === this.flipped && this.createTransform(),
          (this.tileId &= n);
      },
      createTransform: function () {
        null === this.currentTransform
          ? (this.currentTransform = new me.Matrix2d())
          : this.currentTransform.identity(),
          this.flippedAD &&
            (this.currentTransform.setTransform(0, 1, 0, 1, 0, 0, 0, 0, 1),
            this.currentTransform.translate(0, this.height - this.width)),
          this.flippedX &&
            (this.currentTransform.translate(
              this.flippedAD ? 0 : this.width,
              this.flippedAD ? this.height : 0
            ),
            this.currentTransform.scaleX(-1)),
          this.flippedY &&
            (this.currentTransform.translate(
              this.flippedAD ? this.width : 0,
              this.flippedAD ? 0 : this.height
            ),
            this.currentTransform.scaleY(-1));
      },
      getRenderable: function (t) {
        var e,
          i = this.tileset;
        if (i.animations.has(this.tileId)) {
          var n = [],
            r = [];
          i.animations.get(this.tileId).frames.forEach(function (t) {
            r.push(t.tileid),
              n.push({ name: "" + t.tileid, delay: t.duration });
          }),
            (e = i.texture.createAnimationFromName(r, t)).addAnimation(
              this.tileId - i.firstgid,
              n
            ),
            e.setCurrentAnimation(this.tileId - i.firstgid);
        } else e = i.texture.createSpriteFromName(this.tileId - i.firstgid, t);
        return (
          this.flippedX && e.currentTransform.scaleX(-1),
          this.flippedY && e.currentTransform.scaleY(-1),
          e
        );
      },
    });
  })(),
  (function () {
    var t = 536870911;
    (me.TMXTileset = me.Object.extend({
      init: function (t) {
        var e = 0;
        if (
          ((this.TileProperties = []),
          (this.firstgid = this.lastgid = +t.firstgid),
          void 0 !== t.source)
        ) {
          var i = t.source,
            n = me.utils.getFileExtension(i);
          if (
            ("tsx" === n || "json" === n) &&
            !(t = me.loader.getTMX(me.utils.getBasename(i)))
          )
            throw new me.Error(i + " external TSX/JSON tileset not found");
        }
        (this.name = t.name),
          (this.tilewidth = +t.tilewidth),
          (this.tileheight = +t.tileheight),
          (this.spacing = +t.spacing || 0),
          (this.margin = +t.margin || 0),
          (this.tileoffset = new me.Vector2d()),
          (this.isAnimated = !1),
          (this.animations = new Map()),
          (this._lastUpdate = 0);
        var r = t.tiles;
        for (e in r)
          r.hasOwnProperty(e) &&
            ("animation" in r[e] &&
              ((this.isAnimated = !0),
              this.animations.set(+e + this.firstgid, {
                dt: 0,
                idx: 0,
                frames: r[e].animation,
                cur: r[e].animation[0],
              })),
            "properties" in r[e] &&
              this.setTileProperty(+e + this.firstgid, r[e].properties));
        var o = t.tileoffset;
        o && ((this.tileoffset.x = +o.x), (this.tileoffset.y = +o.y));
        var s = t.tileproperties;
        if (s)
          for (e in s)
            s.hasOwnProperty(e) &&
              this.setTileProperty(+e + this.firstgid, s[e]);
        if (((this.image = me.utils.getImage(t.image)), !this.image))
          throw new me.TMXTileset.Error(
            "melonJS: '" +
              t.image +
              "' file for tileset '" +
              this.name +
              "' not found!"
          );
        (this.texture = me.video.renderer.cache.get(this.image, {
          framewidth: this.tilewidth,
          frameheight: this.tileheight,
          margin: this.margin,
          spacing: this.spacing,
        })),
          (this.atlas = this.texture.getAtlas());
        var a =
            +t.columns ||
            ~~(this.image.width / (this.tilewidth + this.spacing)),
          h = ~~(this.image.height / (this.tileheight + this.spacing));
        (this.lastgid = this.firstgid + (a * h - 1 || 0)),
          t.tilecount &&
            this.lastgid - this.firstgid + 1 != +t.tilecount &&
            console.warn(
              "Computed tilecount (" +
                (this.lastgid - this.firstgid + 1) +
                ") does not match expected tilecount (" +
                t.tilecount +
                ")"
            );
      },
      setTileProperty: function (t, e) {
        this.TileProperties[t] = e;
      },
      contains: function (t) {
        return t >= this.firstgid && t <= this.lastgid;
      },
      getViewTileId: function (t) {
        return (
          this.animations.has(t)
            ? (t = this.animations.get(t).cur.tileid)
            : (t -= this.firstgid),
          t
        );
      },
      getTileProperties: function (t) {
        return this.TileProperties[t];
      },
      update: function (t) {
        var e = 0,
          i = me.timer.getTime(),
          n = !1;
        return (
          this._lastUpdate !== i &&
            ((this._lastUpdate = i),
            this.animations.forEach(function (i) {
              for (i.dt += t, e = i.cur.duration; i.dt >= e; )
                (i.dt -= e),
                  (i.idx = (i.idx + 1) % i.frames.length),
                  (i.cur = i.frames[i.idx]),
                  (e = i.cur.duration),
                  (n = !0);
            })),
          n
        );
      },
      drawTile: function (t, e, i, n) {
        n.flipped &&
          (t.save(),
          t.translate(e, i),
          t.transform(n.currentTransform),
          (e = i = 0));
        var r = this.atlas[this.getViewTileId(n.tileId)].offset;
        t.drawImage(
          this.image,
          r.x,
          r.y,
          this.tilewidth,
          this.tileheight,
          e,
          i,
          this.tilewidth + t.uvOffset,
          this.tileheight + t.uvOffset
        ),
          n.flipped && t.restore();
      },
    })),
      (me.TMXTilesetGroup = me.Object.extend({
        init: function () {
          (this.tilesets = []), (this.length = 0);
        },
        add: function (t) {
          this.tilesets.push(t), this.length++;
        },
        getTilesetByIndex: function (t) {
          return this.tilesets[t];
        },
        getTilesetByGid: function (e) {
          var i = -1;
          e &= t;
          for (var n = 0, r = this.tilesets.length; r > n; n++) {
            if (this.tilesets[n].contains(e)) return this.tilesets[n];
            this.tilesets[n].firstgid === this.tilesets[n].lastgid &&
              e >= this.tilesets[n].firstgid &&
              (i = n);
          }
          if (-1 !== i) return this.tilesets[i];
          throw new me.Error("no matching tileset found for gid " + e);
        },
      })),
      (me.TMXTileset.Error = me.Error.extend({
        init: function (t) {
          me.Error.prototype.init.apply(this, [t]),
            (this.name = "me.TMXTileset.Error");
        },
      }));
  })(),
  (function () {
    var t = [
        { x: 0, y: 0 },
        { x: 1, y: -1 },
        { x: 1, y: 0 },
        { x: 2, y: 0 },
      ],
      e = [
        { x: 0, y: 0 },
        { x: -1, y: 1 },
        { x: 0, y: 1 },
        { x: 0, y: 2 },
      ];
    (me.TMXRenderer = me.Object.extend({
      init: function (t, e, i, n) {
        (this.cols = t),
          (this.rows = e),
          (this.tilewidth = i),
          (this.tileheight = n);
      },
      canRender: function (t) {
        return (
          this.cols === t.cols &&
          this.rows === t.rows &&
          this.tilewidth === t.tilewidth &&
          this.tileheight === t.tileheight
        );
      },
    })),
      (me.TMXOrthogonalRenderer = me.TMXRenderer.extend({
        canRender: function (t) {
          return (
            "orthogonal" === t.orientation &&
            me.TMXRenderer.prototype.canRender.apply(this, [t])
          );
        },
        pixelToTileCoords: function (t, e, i) {
          return (i || new me.Vector2d()).set(
            this.pixelToTileX(t),
            this.pixelToTileY(e)
          );
        },
        pixelToTileX: function (t) {
          return t / this.tilewidth;
        },
        pixelToTileY: function (t) {
          return t / this.tileheight;
        },
        tileToPixelCoords: function (t, e, i) {
          return (i || new me.Vector2d()).set(
            t * this.tilewidth,
            e * this.tileheight
          );
        },
        adjustPosition: function (t) {
          "number" == typeof t.gid && (t.y -= t.height);
        },
        drawTile: function (t, e, i, n, r) {
          r.drawTile(
            t,
            r.tileoffset.x + e * this.tilewidth,
            r.tileoffset.y + (i + 1) * this.tileheight - r.tileheight,
            n
          );
        },
        drawTileLayer: function (t, e, i) {
          var n = this.pixelToTileCoords(
              Math.max(i.pos.x - (e.maxTileSize.width - e.tilewidth), 0),
              Math.max(i.pos.y - (e.maxTileSize.height - e.tileheight), 0),
              me.pool.pull("me.Vector2d")
            ).floorSelf(),
            r = this.pixelToTileCoords(
              i.pos.x + i.width + this.tilewidth,
              i.pos.y + i.height + this.tileheight,
              me.pool.pull("me.Vector2d")
            ).ceilSelf();
          (r.x = r.x > this.cols ? this.cols : r.x),
            (r.y = r.y > this.rows ? this.rows : r.y);
          for (var o = n.y; o < r.y; o++)
            for (var s = n.x; s < r.x; s++) {
              var a = e.layerData[s][o];
              a && this.drawTile(t, s, o, a, a.tileset);
            }
          me.pool.push(n), me.pool.push(r);
        },
      })),
      (me.TMXIsometricRenderer = me.TMXRenderer.extend({
        init: function (t, e, i, n) {
          me.TMXRenderer.prototype.init.apply(this, [t, e, i, n]),
            (this.hTilewidth = i / 2),
            (this.hTileheight = n / 2),
            (this.originX = this.rows * this.hTilewidth);
        },
        canRender: function (t) {
          return (
            "isometric" === t.orientation &&
            me.TMXRenderer.prototype.canRender.apply(this, [t])
          );
        },
        pixelToTileCoords: function (t, e, i) {
          return (i || new me.Vector2d()).set(
            this.pixelToTileX(t, e),
            this.pixelToTileY(e, t)
          );
        },
        pixelToTileX: function (t, e) {
          return e / this.tileheight + (t - this.originX) / this.tilewidth;
        },
        pixelToTileY: function (t, e) {
          return t / this.tileheight - (e - this.originX) / this.tilewidth;
        },
        tileToPixelCoords: function (t, e, i) {
          return (i || new me.Vector2d()).set(
            (t - e) * this.hTilewidth + this.originX,
            (t + e) * this.hTileheight
          );
        },
        adjustPosition: function (t) {
          var e = t.x / this.hTilewidth,
            i = t.y / this.tileheight,
            n = this.tileToPixelCoords(e, i);
          (t.x = n.x), (t.y = n.y);
        },
        drawTile: function (t, e, i, n, r) {
          r.drawTile(
            t,
            ((this.cols - 1) * r.tilewidth + (e - i) * r.tilewidth) >> 1,
            (-r.tilewidth + (e + i) * r.tileheight) >> 2,
            n
          );
        },
        drawTileLayer: function (t, e, i) {
          var n = e.tileset,
            r = n.tileoffset,
            o = this.pixelToTileCoords(
              i.pos.x - n.tilewidth,
              i.pos.y - n.tileheight,
              me.pool.pull("me.Vector2d")
            ).floorSelf(),
            s = this.pixelToTileCoords(
              i.pos.x + i.width + n.tilewidth,
              i.pos.y + i.height + n.tileheight,
              me.pool.pull("me.Vector2d")
            ).ceilSelf(),
            a = this.tileToPixelCoords(s.x, s.y, me.pool.pull("me.Vector2d")),
            h = this.tileToPixelCoords(o.x, o.y, me.pool.pull("me.Vector2d"));
          (h.x -= this.hTilewidth), (h.y += this.tileheight);
          var l = h.y - i.pos.y > this.hTileheight,
            u = i.pos.x - h.x < this.hTilewidth;
          l &&
            (u
              ? (o.x--, (h.x -= this.hTilewidth))
              : (o.y--, (h.x += this.hTilewidth)),
            (h.y -= this.hTileheight));
          for (
            var c = l ^ u, d = o.clone(), f = 2 * h.y;
            f - 2 * this.tileheight < 2 * a.y;
            f += this.tileheight
          ) {
            d.setV(o);
            for (var p = h.x; p < a.x; p += this.tilewidth) {
              if (d.x >= 0 && d.y >= 0 && d.x < this.cols && d.y < this.rows) {
                var g = e.layerData[d.x][d.y];
                g &&
                  ((r = (n = g.tileset).tileoffset),
                  n.drawTile(t, r.x + p, r.y + f / 2 - n.tileheight, g));
              }
              d.x++, d.y--;
            }
            c
              ? (o.y++, (h.x -= this.hTilewidth), (c = !1))
              : (o.x++, (h.x += this.hTilewidth), (c = !0));
          }
          me.pool.push(o), me.pool.push(s), me.pool.push(a), me.pool.push(h);
        },
      })),
      (me.TMXHexagonalRenderer = me.TMXRenderer.extend({
        init: function (t, e, i, n, r, o, s) {
          me.TMXRenderer.prototype.init.apply(this, [t, e, i, n]),
            (this.hexsidelength = r),
            (this.staggeraxis = o),
            (this.staggerindex = s),
            (this.sidelengthx = 0),
            (this.sidelengthy = 0),
            "x" === o ? (this.sidelengthx = r) : (this.sidelengthy = r),
            (this.sideoffsetx = (this.tilewidth - this.sidelengthx) / 2),
            (this.sideoffsety = (this.tileheight - this.sidelengthy) / 2),
            (this.columnwidth = this.sideoffsetx + this.sidelengthx),
            (this.rowheight = this.sideoffsety + this.sidelengthy),
            (this.centers = [
              new me.Vector2d(),
              new me.Vector2d(),
              new me.Vector2d(),
              new me.Vector2d(),
            ]);
        },
        canRender: function (t) {
          return (
            "hexagonal" === t.orientation &&
            me.TMXRenderer.prototype.canRender.apply(this, [t])
          );
        },
        pixelToTileCoords: function (i, n, r) {
          var o,
            s,
            a = r || new me.Vector2d();
          "x" === this.staggeraxis
            ? (i -=
                "odd" === this.staggerindex ? this.sideoffsetx : this.tilewidth)
            : (n -=
                "odd" === this.staggerindex
                  ? this.sideoffsety
                  : this.tileheight);
          var h = me.pool.pull(
              "me.Vector2d",
              Math.floor(i / (2 * this.columnwidth)),
              Math.floor(n / (2 * this.rowheight))
            ),
            l = me.pool.pull(
              "me.Vector2d",
              i - h.x * (2 * this.columnwidth),
              n - h.y * (2 * this.rowheight)
            );
          "x" === this.staggeraxis
            ? ((h.x = 2 * h.x), "even" === this.staggerindex && ++h.x)
            : ((h.y = 2 * h.y), "even" === this.staggerindex && ++h.y),
            "x" === this.staggeraxis
              ? ((d = (u = this.sidelengthx / 2) + this.columnwidth),
                (f = this.tileheight / 2),
                this.centers[0].set(u, f),
                this.centers[1].set(d, f - this.rowheight),
                this.centers[2].set(d, f + this.rowheight),
                this.centers[3].set(d + this.columnwidth, f))
              : ((c = this.sidelengthy / 2),
                (d = this.tilewidth / 2),
                (f = c + this.rowheight),
                this.centers[0].set(d, c),
                this.centers[1].set(d - this.columnwidth, f),
                this.centers[2].set(d + this.columnwidth, f),
                this.centers[3].set(d, f + this.rowheight));
          for (
            var u, c, d, f, p, g = 0, v = Number.MAX_VALUE, m = 0;
            4 > m;
            ++m
          )
            v >
              (p =
                Math.pow(this.centers[m].x - l.x, 2) +
                Math.pow(this.centers[m].y - l.y, 2)) && ((v = p), (g = m));
          var $ = "x" === this.staggeraxis ? t : e;
          return (
            (o = h.x + $[g].x),
            (s = h.y + $[g].y),
            me.pool.push(h),
            me.pool.push(l),
            a.set(o, s)
          );
        },
        pixelToTileX: function (t, e) {
          var i = me.pool.pull("me.Vector2d");
          return this.pixelToTileCoords(t, e, i), me.pool.push(i), i.x;
        },
        pixelToTileY: function (t, e) {
          var i = me.pool.pull("me.Vector2d");
          return this.pixelToTileCoords(e, t, i), me.pool.push(i), i.y;
        },
        tileToPixelCoords: function (t, e, i) {
          var n,
            r,
            o = i || new me.Vector2d();
          return (
            "x" === this.staggeraxis
              ? ((n = t * this.columnwidth),
                "odd" === this.staggerindex
                  ? ((r = e * (this.tileheight + this.sidelengthy)),
                    (r += this.rowheight * (1 & t)))
                  : ((r = e * (this.tileheight + this.sidelengthy)),
                    (r += this.rowheight * (1 - (1 & t)))))
              : ((r = e * this.rowheight),
                "odd" === this.staggerindex
                  ? ((n = t * (this.tilewidth + this.sidelengthx)),
                    (n += this.columnwidth * (1 & e)))
                  : ((n = t * (this.tilewidth + this.sidelengthx)),
                    (n += this.columnwidth * (1 - (1 & e))))),
            o.set(n, r)
          );
        },
        adjustPosition: function (t) {
          "number" == typeof t.gid && (t.y -= t.height);
        },
        drawTile: function (t, e, i, n, r) {
          var o = this.tileToPixelCoords(e, i, me.pool.pull("me.Vector2d"));
          r.drawTile(
            t,
            r.tileoffset.x + o.x,
            r.tileoffset.y + o.y + (this.tileheight - r.tileheight),
            n
          ),
            me.pool.push(o);
        },
        drawTileLayer: function (t, e, i) {
          var n = this.pixelToTileCoords(i.pos.x, i.pos.y).floorSelf(),
            r = this.pixelToTileCoords(
              i.pos.x + i.width + this.tilewidth,
              i.pos.y + i.height + this.tileheight
            ).ceilSelf();
          (n.x = n.x < 0 ? 0 : n.x),
            (n.y = n.y < 0 ? 0 : n.y),
            (r.x = r.x > this.cols ? this.cols : r.x),
            (r.y = r.y > this.rows ? this.rows : r.y);
          for (var o = n.y; o < r.y; o++)
            for (var s = n.x; s < r.x; s++) {
              var a = e.layerData[s][o];
              a && this.drawTile(t, s, o, a, a.tileset);
            }
        },
      }));
  })(),
  (me.ColorLayer = me.Renderable.extend({
    init: function (t, e, i) {
      if (
        (me.Renderable.prototype.init.apply(this, [0, 0, 1 / 0, 1 / 0]),
        (this.name = t),
        (this.pos.z = i),
        (this.floating = !0),
        e instanceof me.Color)
      )
        this.color = e.toRGBA();
      else {
        var n = me.pool.pull("me.Color");
        (this.color = n.parseCSS(e).toRGBA()), me.pool.push(n);
      }
    },
    draw: function (t, e) {
      var i = t.globalAlpha();
      t.setGlobalAlpha(i * this.getOpacity());
      var n = me.game.viewport.pos;
      t.setColor(this.color),
        t.fillRect(e.left - n.x, e.top - n.y, e.width, e.height),
        t.setGlobalAlpha(i),
        t.setColor("#fff");
    },
  })),
  (me.ImageLayer = me.Renderable.extend({
    init: function (t, e, i) {
      if (
        ((this.name = i.name || "me.ImageLayer"),
        (this.image = me.utils.getImage(i.image)),
        !this.image)
      )
        throw new me.Error(
          ("string" == typeof i.image ? "'" + i.image + "'" : "Image") +
            " file for Image Layer '" +
            this.name +
            "' not found!"
        );
      (this.imagewidth = this.image.width),
        (this.imageheight = this.image.height),
        me.Renderable.prototype.init.apply(this, [t, e, 1 / 0, 1 / 0]),
        (this.floating = !0),
        (this.pos.z = i.z || 0),
        (this.offset = new me.Vector2d(t, e)),
        (this.ratio = new me.Vector2d(1, 1)),
        void 0 !== i.ratio &&
          ("number" == typeof i.ratio
            ? this.ratio.set(i.ratio, i.ratio)
            : this.ratio.setV(i.ratio)),
        void 0 === i.anchorPoint
          ? this.anchorPoint.set(0, 0)
          : "number" == typeof i.anchorPoint
          ? this.anchorPoint.set(i.anchorPoint, i.anchorPoint)
          : this.anchorPoint.setV(i.anchorPoint),
        Object.defineProperty(this, "repeat", {
          get: function () {
            return this._repeat;
          },
          set: function (t) {
            switch (((this._repeat = t), this._repeat)) {
              case "no-repeat":
                (this.repeatX = !1), (this.repeatY = !1);
                break;
              case "repeat-x":
                (this.repeatX = !0), (this.repeatY = !1);
                break;
              case "repeat-y":
                (this.repeatX = !1), (this.repeatY = !0);
                break;
              default:
                (this.repeatX = !0), (this.repeatY = !0);
            }
            this.resize(me.game.viewport.width, me.game.viewport.height),
              this.createPattern();
          },
        }),
        (this.repeat = i.repeat || "repeat");
    },
    onActivateEvent: function () {
      var t = this.updateLayer.bind(this);
      (this.vpChangeHdlr = me.event.subscribe(me.event.VIEWPORT_ONCHANGE, t)),
        (this.vpResizeHdlr = me.event.subscribe(
          me.event.VIEWPORT_ONRESIZE,
          this.resize.bind(this)
        )),
        (this.vpLoadedHdlr = me.event.subscribe(
          me.event.LEVEL_LOADED,
          function () {
            t(me.game.viewport.pos);
          }
        )),
        !0 !== this.ancestor._root && this.updateLayer(me.game.viewport.pos);
    },
    resize: function (t, e) {
      me.Renderable.prototype.resize.apply(this, [
        this.repeatX ? 1 / 0 : t,
        this.repeatY ? 1 / 0 : e,
      ]);
    },
    createPattern: function () {
      this._pattern = me.video.renderer.createPattern(this.image, this._repeat);
    },
    updateLayer: function (t) {
      var e = this.ratio.x,
        i = this.ratio.y,
        n = me.game.viewport,
        r = this.imagewidth,
        o = this.imageheight,
        s = n.bounds.width,
        a = n.bounds.height,
        h = this.anchorPoint.x,
        l = this.anchorPoint.y,
        u = h * (e - 1) * (s - n.width) + this.offset.x - e * t.x,
        c = l * (i - 1) * (a - n.height) + this.offset.y - i * t.y;
      this.repeatX ? (this.pos.x = u % r) : (this.pos.x = u),
        this.repeatY ? (this.pos.y = c % o) : (this.pos.y = c);
    },
    draw: function (t) {
      var e = me.game.viewport,
        i =
          (this.imagewidth,
          this.imageheight,
          e.bounds.width,
          e.bounds.height,
          this.anchorPoint.x,
          this.anchorPoint.y,
          this.pos.x),
        n = this.pos.y,
        r = t.globalAlpha();
      this.ratio.x,
        this.ratio.y,
        t.setGlobalAlpha(r * this.getOpacity()),
        t.translate(i, n),
        t.drawPattern(this._pattern, 0, 0, 2 * e.width, 2 * e.height),
        t.translate(-i, -n),
        t.setGlobalAlpha(r);
    },
    onDeactivateEvent: function () {
      me.event.unsubscribe(this.vpChangeHdlr),
        me.event.unsubscribe(this.vpResizeHdlr),
        me.event.unsubscribe(this.vpLoadedHdlr);
    },
  })),
  (me.TMXLayer = me.Renderable.extend({
    init: function (t, e, i, n, r) {
      me.Renderable.prototype.init.apply(this, [0, 0, 0, 0]),
        (this.tilewidth = t),
        (this.tileheight = e),
        (this.orientation = i),
        (this.tilesets = n),
        (this.tileset = this.tilesets
          ? this.tilesets.getTilesetByIndex(0)
          : null),
        (this.maxTileSize = { width: 0, height: 0 });
      for (var o = 0; o < this.tilesets.length; o++) {
        var s = this.tilesets.getTilesetByIndex(o);
        (this.maxTileSize.width = Math.max(
          this.maxTileSize.width,
          s.tilewidth
        )),
          (this.maxTileSize.height = Math.max(
            this.maxTileSize.height,
            s.tileheight
          ));
      }
      (this.animatedTilesets = []),
        (this.isAnimated = !1),
        (this.pos.z = r),
        this.anchorPoint.set(0, 0);
    },
    initFromJSON: function (t) {
      (this.name = t.name),
        (this.cols = +t.width),
        (this.rows = +t.height),
        (this.hexsidelength = +t.hexsidelength || void 0),
        (this.staggeraxis = t.staggeraxis),
        (this.staggerindex = t.staggerindex);
      var e = void 0 !== t.visible ? +t.visible : 1;
      this.setOpacity(e ? +t.opacity : 0),
        "isometric" === this.orientation
          ? ((this.width = (this.cols + this.rows) * (this.tilewidth / 2)),
            (this.height = (this.cols + this.rows) * (this.tileheight / 2)))
          : ((this.width = this.cols * this.tilewidth),
            (this.height = this.rows * this.tileheight)),
        me.TMXUtils.applyTMXProperties(this, t),
        void 0 === this.preRender && (this.preRender = me.sys.preRender),
        !0 === this.preRender &&
          (this.canvasRenderer = new me.CanvasRenderer(
            me.video.createCanvas(this.width, this.height),
            this.width,
            this.height,
            { transparent: !0 }
          )),
        this.initArray(this.cols, this.rows);
    },
    onActivateEvent: function () {
      if (
        (void 0 === this.animatedTilesets && (this.animatedTilesets = []),
        this.tilesets)
      )
        for (var t = this.tilesets.tilesets, e = 0; e < t.length; e++)
          t[e].isAnimated && this.animatedTilesets.push(t[e]);
      (this.isAnimated = this.animatedTilesets.length > 0),
        this.isAnimated && (this.preRender = !1),
        this.getBounds().resize(this.width, this.height);
    },
    onDeactivateEvent: function () {
      this.animatedTilesets = void 0;
    },
    setRenderer: function (t) {
      this.renderer = t;
    },
    initArray: function (t, e) {
      this.layerData = [];
      for (var i = 0; t > i; i++) {
        this.layerData[i] = [];
        for (var n = 0; e > n; n++) this.layerData[i][n] = null;
      }
    },
    getTileId: function (t, e) {
      var i = this.getTile(t, e);
      return i ? i.tileId : null;
    },
    getTile: function (t, e) {
      return this.layerData[~~this.renderer.pixelToTileX(t, e)][
        ~~this.renderer.pixelToTileY(e, t)
      ];
    },
    setTile: function (t, e, i) {
      this.tileset.contains(i) ||
        (this.tileset = this.tilesets.getTilesetByGid(i));
      var n = (this.layerData[t][e] = new me.Tile(t, e, i, this.tileset));
      return (
        this.preRender &&
          this.renderer.drawTile(this.canvasRenderer, t, e, n, n.tileset),
        n
      );
    },
    clearTile: function (t, e) {
      (this.layerData[t][e] = null),
        this.preRender &&
          this.canvasRenderer.clearRect(
            t * this.tilewidth,
            e * this.tileheight,
            this.tilewidth,
            this.tileheight
          );
    },
    update: function (t) {
      if (this.isAnimated) {
        for (var e = !1, i = 0; i < this.animatedTilesets.length; i++)
          e = this.animatedTilesets[i].update(t) || e;
        return e;
      }
      return !1;
    },
    draw: function (t, e) {
      var i = t.globalAlpha();
      if ((t.setGlobalAlpha(i * this.getOpacity()), this.preRender)) {
        var n = Math.min(e.width, this.width),
          r = Math.min(e.height, this.height);
        t.drawImage(
          this.canvasRenderer.getCanvas(),
          e.pos.x,
          e.pos.y,
          n,
          r,
          e.pos.x,
          e.pos.y,
          n,
          r
        );
      } else this.renderer.drawTileLayer(t, this, e);
      t.setGlobalAlpha(i);
    },
  })),
  (function () {
    function t(t) {
      switch (t.orientation) {
        case "orthogonal":
          return new me.TMXOrthogonalRenderer(
            t.cols,
            t.rows,
            t.tilewidth,
            t.tileheight
          );
        case "isometric":
          return new me.TMXIsometricRenderer(
            t.cols,
            t.rows,
            t.tilewidth,
            t.tileheight
          );
        case "hexagonal":
          return new me.TMXHexagonalRenderer(
            t.cols,
            t.rows,
            t.tilewidth,
            t.tileheight,
            t.hexsidelength,
            t.staggeraxis,
            t.staggerindex
          );
        default:
          throw new me.Error(
            t.orientation + " type TMX Tile Map not supported!"
          );
      }
    }
    function e(t, e) {
      for (var i = 0, n = 0; n < t.rows; n++)
        for (var r = 0; r < t.cols; r++) {
          var o = e[i++];
          0 !== o && t.setTile(r, n, o);
        }
    }
    function i(i, n, r) {
      var o = new me.TMXLayer(
        i.tilewidth,
        i.tileheight,
        i.orientation,
        i.tilesets,
        r
      );
      return (
        o.initFromJSON(n),
        me.game.tmxRenderer.canRender(o)
          ? o.setRenderer(me.game.tmxRenderer)
          : o.setRenderer(t(o)),
        e(o, me.TMXUtils.decode(n.data, n.encoding, n.compression)),
        o
      );
    }
    function n(t, e, i) {
      me.TMXUtils.applyTMXProperties(e.properties, e);
      var n = new me.ImageLayer(
          +e.x || 0,
          +e.y || 0,
          Object.assign({ name: e.name, image: e.image, z: i }, e.properties)
        ),
        r = void 0 === e.visible || e.visible;
      return n.setOpacity(r ? +e.opacity : 0), n;
    }
    function r(t) {
      return new me.TMXTileset(t);
    }
    function o(t, e, i) {
      return new me.TMXObjectGroup(e.name, e, t.orientation, t.tilesets, i);
    }
    var s = "collision";
    me.TMXTileMap = me.Object.extend({
      init: function (e, i) {
        (this.name = e),
          (this.data = i),
          (this.cols = +i.width),
          (this.rows = +i.height),
          (this.tilewidth = +i.tilewidth),
          (this.tileheight = +i.tileheight),
          (this.tilesets = null),
          (this.layers = []),
          (this.objectGroups = []),
          (this.version = i.version),
          (this.orientation = i.orientation),
          "isometric" === this.orientation
            ? ((this.width = (this.cols + this.rows) * (this.tilewidth / 2)),
              (this.height = (this.cols + this.rows) * (this.tileheight / 2)))
            : ((this.width = this.cols * this.tilewidth),
              (this.height = this.rows * this.tileheight)),
          (this.z = 0),
          (this.nextobjectid = +i.nextobjectid || void 0),
          (this.hexsidelength = +i.hexsidelength || void 0),
          (this.staggeraxis = i.staggeraxis),
          (this.staggerindex = i.staggerindex),
          (this.backgroundcolor = i.backgroundcolor),
          me.TMXUtils.applyTMXProperties(this, i),
          (null !== me.game.tmxRenderer &&
            me.game.tmxRenderer.canRender(this)) ||
            (me.game.tmxRenderer = t(this)),
          (this.initialized = !1);
      },
      readMapObjects: function (t) {
        if (!0 !== this.initialized) {
          var e = this.z,
            s = this;
          this.tilesets || (this.tilesets = new me.TMXTilesetGroup()),
            void 0 !== t.tilesets &&
              t.tilesets.forEach(function (t) {
                s.tilesets.add(r(t));
              }),
            this.backgroundcolor &&
              this.layers.push(
                new me.ColorLayer("background_color", this.backgroundcolor, e++)
              ),
            this.background_image &&
              this.layers.push(
                new me.ImageLayer(0, 0, {
                  name: "background_image",
                  image: this.background_image,
                  z: e++,
                })
              ),
            t.layers.forEach(function (t) {
              switch (t.type) {
                case "imagelayer":
                  s.layers.push(n(s, t, e++));
                  break;
                case "tilelayer":
                  s.layers.push(i(s, t, e++));
                  break;
                case "objectgroup":
                  s.objectGroups.push(o(s, t, e++));
              }
            }),
            (this.initialized = !0);
        }
      },
      addTo: function (t, e) {
        var i = t.autoSort,
          n = t.autoDepth;
        (t.autoSort = !1),
          (t.autoDepth = !1),
          this.getLayers().forEach(function (e) {
            t.addChild(e);
          }),
          this.getObjects(e).forEach(function (e) {
            t.addChild(e);
          }),
          (t.autoSort = i),
          (t.autoDepth = n),
          t.sort(!0);
      },
      getObjects: function (t) {
        var e,
          i = [],
          n = !1;
        this.readMapObjects(this.data);
        for (var r = 0; r < this.objectGroups.length; r++) {
          var o = this.objectGroups[r];
          (n = o.name.toLowerCase().includes(s)),
            !1 === t &&
              (((e = new me.Container(0, 0, this.width, this.height)).name =
                o.name),
              (e.pos.z = o.z),
              e.setOpacity(o.opacity),
              (e.autoSort = !1),
              (e.autoDepth = !1));
          for (var a = 0; a < o.objects.length; a++) {
            var h = o.objects[a],
              l = me.pool.pull(h.name || "me.Entity", h.x, h.y, h);
            if ("object" == typeof l) {
              if ("object" == typeof h.tile && !l.renderable)
                switch (
                  ((l.renderable = h.tile.getRenderable(h)), h.rotation)
                ) {
                  case Math.PI:
                    l.translate(-l.renderable.width, l.renderable.height);
                    break;
                  case Math.PI / 2:
                    l.translate(0, l.renderable.height);
                    break;
                  case -(Math.PI / 2):
                    l.translate(-l.renderable.width, 0);
                }
              n &&
                !h.name &&
                (l.body.collisionType = me.collision.types.WORLD_SHAPE),
                (l.pos.z = o.z),
                !0 === t
                  ? (!0 === l.isRenderable &&
                      (l.setOpacity(l.getOpacity() * o.opacity),
                      l.renderable instanceof me.Renderable &&
                        l.renderable.setOpacity(
                          l.renderable.getOpacity() * o.opacity
                        )),
                    i.push(l))
                  : e.addChild(l);
            }
          }
          !1 === t &&
            e.children.length > 0 &&
            ((e.autoSort = !0), (e.autoDepth = !0), i.push(e));
        }
        return i;
      },
      getLayers: function () {
        return this.readMapObjects(this.data), this.layers;
      },
      destroy: function () {
        (this.tilesets = void 0),
          (this.layers = []),
          (this.objectGroups = []),
          (this.initialized = !1);
      },
    });
  })(),
  (me.levelDirector = (function () {
    function t(t, s, a) {
      s.container.destroy(),
        me.video.renderer.reset(),
        n[i.getCurrentLevelId()] && n[i.getCurrentLevelId()].destroy(),
        (o = r.indexOf(t)),
        e(t, s.container, s.flatten, s.setViewportBounds),
        me.event.publish(me.event.LEVEL_LOADED, [t]),
        s.onLoaded(t),
        a && me.state.restart();
    }
    function e(t, e, i, r) {
      function o() {
        e.pos.set(
          Math.max(0, ~~((me.game.viewport.width - a.width) / 2)),
          Math.max(0, ~~((me.game.viewport.height - a.height) / 2)),
          0
        );
      }
      var a = n[t],
        h = e.autoSort;
      (e.autoSort = !1),
        r &&
          me.game.viewport.setBounds(
            0,
            0,
            Math.max(a.width, me.game.viewport.width),
            Math.max(a.height, me.game.viewport.height)
          ),
        me.utils.resetGUID(t, a.nextobjectid),
        a.addTo(e, i),
        e.sort(!0),
        (e.autoSort = h),
        e.resize(a.width, a.height),
        r &&
          (o(),
          s && me.event.unsubscribe(s),
          (s = me.event.subscribe(me.event.VIEWPORT_ONRESIZE, o)));
    }
    var i = {},
      n = {},
      r = [],
      o = 0,
      s = null;
    return (
      (i.reset = function () {}),
      (i.addLevel = function () {
        throw new me.Error("no level loader defined");
      }),
      (i.addTMXLevel = function (t, e) {
        return (
          null == n[t] &&
          ((n[t] = new me.TMXTileMap(t, me.loader.getTMX(t))),
          r.push(t),
          e && e(),
          !0)
        );
      }),
      (i.loadLevel = function (e, i) {
        if (
          ((i = Object.assign(
            {
              container: me.game.world,
              onLoaded: me.game.onLevelLoaded,
              flatten: me.game.mergeGroup,
              setViewportBounds: !0,
            },
            i || {}
          )),
          void 0 === n[e])
        )
          throw new me.Error("level " + e + " not found");
        if (!(n[e] instanceof me.TMXTileMap))
          throw new me.Error("no level loader defined");
        return (
          me.state.isRunning()
            ? (me.state.stop(), t.defer(this, e, i, !0))
            : t(e, i),
          !0
        );
      }),
      (i.getCurrentLevelId = function () {
        return r[o];
      }),
      (i.getCurrentLevel = function () {
        return n[i.getCurrentLevelId()];
      }),
      (i.reloadLevel = function (t) {
        return i.loadLevel(i.getCurrentLevelId(), t);
      }),
      (i.nextLevel = function (t) {
        return o + 1 < r.length && i.loadLevel(r[o + 1], t);
      }),
      (i.previousLevel = function (t) {
        return o - 1 >= 0 && i.loadLevel(r[o - 1], t);
      }),
      (i.levelCount = function () {
        return r.length;
      }),
      i
    );
  })()),
  (function () {
    var t;
    (me.Tween = function (t) {
      var e = null,
        i = null,
        n = null,
        r = null,
        o = null,
        s = null,
        a = null,
        h = null,
        l = null,
        u = null,
        c = null,
        d = null,
        f = null,
        p = null,
        g = null,
        v = null,
        m = null,
        $ = null;
      (this._resumeCallback = function (t) {
        u && (u += t);
      }),
        (this.setProperties = function (t) {
          for (var y in ((e = t),
          (i = {}),
          (n = {}),
          (r = {}),
          (o = 1e3),
          (s = 0),
          (a = !1),
          (h = !1),
          (l = 0),
          (u = null),
          (c = me.Tween.Easing.Linear.None),
          (d = me.Tween.Interpolation.Linear),
          (f = []),
          (p = null),
          (g = !1),
          (v = null),
          (m = null),
          ($ = me.timer.lastUpdate),
          (this.isPersistent = !1),
          t))
            "object" != typeof t && (i[y] = parseFloat(t[y], 10));
        }),
        this.setProperties(t),
        (this.onResetEvent = function (t) {
          this.setProperties(t);
        }),
        (this.onActivateEvent = function () {
          me.event.subscribe(me.event.STATE_RESUME, this._resumeCallback);
        }),
        (this.onDeactivateEvent = function () {
          me.event.unsubscribe(me.event.STATE_RESUME, this._resumeCallback);
        }),
        (this.to = function (t, e) {
          return void 0 !== e && (o = e), (n = t), this;
        }),
        (this.start = function (t) {
          for (var o in ((g = !1),
          me.game.world.addChild(this),
          (u = (void 0 === t ? me.timer.getTime() : t) + l),
          n)) {
            if (n[o] instanceof Array) {
              if (0 === n[o].length) continue;
              n[o] = [e[o]].concat(n[o]);
            }
            (i[o] = e[o]),
              i[o] instanceof Array == !1 && (i[o] *= 1),
              (r[o] = i[o] || 0);
          }
          return this;
        }),
        (this.stop = function () {
          return me.game.world.removeChildNow(this), this;
        }),
        (this.delay = function (t) {
          return (l = t), this;
        }),
        (this.repeat = function (t) {
          return (s = t), this;
        }),
        (this.yoyo = function (t) {
          return (a = t), this;
        }),
        (this.easing = function (t) {
          if ("function" != typeof t)
            throw new me.Tween.Error(
              "invalid easing function for me.Tween.easing()"
            );
          return (c = t), this;
        }),
        (this.interpolation = function (t) {
          return (d = t), this;
        }),
        (this.chain = function () {
          return (f = arguments), this;
        }),
        (this.onStart = function (t) {
          return (p = t), this;
        }),
        (this.onUpdate = function (t) {
          return (v = t), this;
        }),
        (this.onComplete = function (t) {
          return (m = t), this;
        }),
        (this.update = function (t) {
          var y,
            _ = ($ = me.timer.lastUpdate > $ ? me.timer.lastUpdate : $ + t);
          if (u > _) return !0;
          !1 === g && (null !== p && p.call(e), (g = !0));
          var x = (_ - u) / o;
          x = x > 1 ? 1 : x;
          var b = c(x);
          for (y in n) {
            var w = i[y] || 0,
              T = n[y];
            T instanceof Array
              ? (e[y] = d(T, b))
              : ("string" == typeof T && (T = w + parseFloat(T, 10)),
                "number" == typeof T && (e[y] = w + (T - w) * b));
          }
          if ((null !== v && v.call(e, b), 1 === x)) {
            if (s > 0) {
              for (y in (isFinite(s) && s--, r)) {
                if (
                  ("string" == typeof n[y] &&
                    (r[y] = r[y] + parseFloat(n[y], 10)),
                  a)
                ) {
                  var E = r[y];
                  (r[y] = n[y]), (n[y] = E);
                }
                i[y] = r[y];
              }
              return a && (h = !h), (u = _ + l), !0;
            }
            me.game.world.removeChildNow(this), null !== m && m.call(e);
            for (var A = 0, S = f.length; S > A; A++) f[A].start(_);
            return !1;
          }
          return !0;
        });
    }),
      (me.Tween.Easing = {
        Linear: {
          None: function (t) {
            return t;
          },
        },
        Quadratic: {
          In: function (t) {
            return t * t;
          },
          Out: function (t) {
            return t * (2 - t);
          },
          InOut: function (t) {
            return (t *= 2) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1);
          },
        },
        Cubic: {
          In: function (t) {
            return t * t * t;
          },
          Out: function (t) {
            return --t * t * t + 1;
          },
          InOut: function (t) {
            return (t *= 2) < 1
              ? 0.5 * t * t * t
              : 0.5 * ((t -= 2) * t * t + 2);
          },
        },
        Quartic: {
          In: function (t) {
            return t * t * t * t;
          },
          Out: function (t) {
            return 1 - --t * t * t * t;
          },
          InOut: function (t) {
            return (t *= 2) < 1
              ? 0.5 * t * t * t * t
              : -0.5 * ((t -= 2) * t * t * t - 2);
          },
        },
        Quintic: {
          In: function (t) {
            return t * t * t * t * t;
          },
          Out: function (t) {
            return --t * t * t * t * t + 1;
          },
          InOut: function (t) {
            return (t *= 2) < 1
              ? 0.5 * t * t * t * t * t
              : 0.5 * ((t -= 2) * t * t * t * t + 2);
          },
        },
        Sinusoidal: {
          In: function (t) {
            return 1 - Math.cos((t * Math.PI) / 2);
          },
          Out: function (t) {
            return Math.sin((t * Math.PI) / 2);
          },
          InOut: function (t) {
            return 0.5 * (1 - Math.cos(Math.PI * t));
          },
        },
        Exponential: {
          In: function (t) {
            return 0 === t ? 0 : Math.pow(1024, t - 1);
          },
          Out: function (t) {
            return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
          },
          InOut: function (t) {
            return 0 === t
              ? 0
              : 1 === t
              ? 1
              : (t *= 2) < 1
              ? 0.5 * Math.pow(1024, t - 1)
              : 0.5 * (-Math.pow(2, -10 * (t - 1)) + 2);
          },
        },
        Circular: {
          In: function (t) {
            return 1 - Math.sqrt(1 - t * t);
          },
          Out: function (t) {
            return Math.sqrt(1 - --t * t);
          },
          InOut: function (t) {
            return (t *= 2) < 1
              ? -0.5 * (Math.sqrt(1 - t * t) - 1)
              : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
          },
        },
        Elastic: {
          In: function (t) {
            var e,
              i = 0.1,
              n = 0.4;
            return 0 === t
              ? 0
              : 1 === t
              ? 1
              : (!i || 1 > i
                  ? ((i = 1), (e = n / 4))
                  : (e = (n * Math.asin(1 / i)) / (2 * Math.PI)),
                -(
                  i *
                  Math.pow(2, 10 * (t -= 1)) *
                  Math.sin(((t - e) * (2 * Math.PI)) / n)
                ));
          },
          Out: function (t) {
            var e,
              i = 0.1,
              n = 0.4;
            return 0 === t
              ? 0
              : 1 === t
              ? 1
              : (!i || 1 > i
                  ? ((i = 1), (e = n / 4))
                  : (e = (n * Math.asin(1 / i)) / (2 * Math.PI)),
                i *
                  Math.pow(2, -10 * t) *
                  Math.sin(((t - e) * (2 * Math.PI)) / n) +
                  1);
          },
          InOut: function (t) {
            var e,
              i = 0.1,
              n = 0.4;
            return 0 === t
              ? 0
              : 1 === t
              ? 1
              : (!i || 1 > i
                  ? ((i = 1), (e = n / 4))
                  : (e = (n * Math.asin(1 / i)) / (2 * Math.PI)),
                (t *= 2) < 1
                  ? -0.5 *
                    (i *
                      Math.pow(2, 10 * (t -= 1)) *
                      Math.sin(((t - e) * (2 * Math.PI)) / n))
                  : i *
                      Math.pow(2, -10 * (t -= 1)) *
                      Math.sin(((t - e) * (2 * Math.PI)) / n) *
                      0.5 +
                    1);
          },
        },
        Back: {
          In: function (t) {
            var e = 1.70158;
            return t * t * ((e + 1) * t - e);
          },
          Out: function (t) {
            var e = 1.70158;
            return --t * t * ((e + 1) * t + e) + 1;
          },
          InOut: function (t) {
            var e = 2.5949095;
            return (t *= 2) < 1
              ? 0.5 * (t * t * ((e + 1) * t - e))
              : 0.5 * ((t -= 2) * t * ((e + 1) * t + e) + 2);
          },
        },
        Bounce: {
          In: function (t) {
            return 1 - me.Tween.Easing.Bounce.Out(1 - t);
          },
          Out: function (t) {
            return 1 / 2.75 > t
              ? 7.5625 * t * t
              : 2 / 2.75 > t
              ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
              : 2.5 / 2.75 > t
              ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
              : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
          },
          InOut: function (t) {
            return 0.5 > t
              ? 0.5 * me.Tween.Easing.Bounce.In(2 * t)
              : 0.5 * me.Tween.Easing.Bounce.Out(2 * t - 1) + 0.5;
          },
        },
      }),
      (me.Tween.Interpolation = {
        Linear: function (t, e) {
          var i = t.length - 1,
            n = i * e,
            r = Math.floor(n),
            o = me.Tween.Interpolation.Utils.Linear;
          return 0 > e
            ? o(t[0], t[1], n)
            : e > 1
            ? o(t[i], t[i - 1], i - n)
            : o(t[r], t[r + 1 > i ? i : r + 1], n - r);
        },
        Bezier: function (t, e) {
          var i,
            n = 0,
            r = t.length - 1,
            o = Math.pow,
            s = me.Tween.Interpolation.Utils.Bernstein;
          for (i = 0; r >= i; i++)
            n += o(1 - e, r - i) * o(e, i) * t[i] * s(r, i);
          return n;
        },
        CatmullRom: function (t, e) {
          var i = t.length - 1,
            n = i * e,
            r = Math.floor(n),
            o = me.Tween.Interpolation.Utils.CatmullRom;
          return t[0] === t[i]
            ? (0 > e && (r = Math.floor((n = i * (1 + e)))),
              o(
                t[(r - 1 + i) % i],
                t[r],
                t[(r + 1) % i],
                t[(r + 2) % i],
                n - r
              ))
            : 0 > e
            ? t[0] - (o(t[0], t[0], t[1], t[1], -n) - t[0])
            : e > 1
            ? t[i] - (o(t[i], t[i], t[i - 1], t[i - 1], n - i) - t[i])
            : o(
                t[r ? r - 1 : 0],
                t[r],
                t[r + 1 > i ? i : r + 1],
                t[r + 2 > i ? i : r + 2],
                n - r
              );
        },
        Utils: {
          Linear: function (t, e, i) {
            return (e - t) * i + t;
          },
          Bernstein: function (t, e) {
            var i = me.Tween.Interpolation.Utils.Factorial;
            return i(t) / i(e) / i(t - e);
          },
          Factorial:
            ((t = [1]),
            function (e) {
              var i,
                n = 1;
              if (t[e]) return t[e];
              for (i = e; i > 1; i--) n *= i;
              return (t[e] = n);
            }),
          CatmullRom: function (t, e, i, n, r) {
            var o = 0.5 * (i - t),
              s = 0.5 * (n - e),
              a = r * r;
            return (
              (2 * e - 2 * i + o + s) * (r * a) +
              (-3 * e + 3 * i - 2 * o - s) * a +
              o * r +
              e
            );
          },
        },
      }),
      (me.Tween.Error = me.Error.extend({
        init: function (t) {
          me.Error.prototype.init.apply(this, [t]),
            (this.name = "me.Tween.Error");
        },
      }));
  })(),
  (function () {
    var t, e;
    me.event =
      ((e = {}),
      ((t = {}).STATE_PAUSE = "me.state.onPause"),
      (t.STATE_RESUME = "me.state.onResume"),
      (t.STATE_STOP = "me.state.onStop"),
      (t.STATE_RESTART = "me.state.onRestart"),
      (t.GAME_INIT = "me.game.onInit"),
      (t.GAME_RESET = "me.game.onReset"),
      (t.LEVEL_LOADED = "me.game.onLevelLoaded"),
      (t.LOADER_COMPLETE = "me.loader.onload"),
      (t.LOADER_PROGRESS = "me.loader.onProgress"),
      (t.KEYDOWN = "me.input.keydown"),
      (t.KEYUP = "me.input.keyup"),
      (t.GAMEPAD_CONNECTED = "gamepad.connected"),
      (t.GAMEPAD_DISCONNECTED = "gamepad.disconnected"),
      (t.GAMEPAD_UPDATE = "gamepad.update"),
      (t.POINTERMOVE = "me.event.pointermove"),
      (t.DRAGSTART = "me.game.dragstart"),
      (t.DRAGEND = "me.game.dragend"),
      (t.WINDOW_ONRESIZE = "window.onresize"),
      (t.VIEWPORT_ONRESIZE = "viewport.onresize"),
      (t.WINDOW_ONORIENTATION_CHANGE = "window.orientationchange"),
      (t.WINDOW_ONSCROLL = "window.onscroll"),
      (t.VIEWPORT_ONCHANGE = "viewport.onchange"),
      (t.publish = function (t, i) {
        for (var n = e[t], r = n ? n.length : 0; r--; )
          n[r].apply(window, i || []);
      }),
      (t.subscribe = function (t, i) {
        return e[t] || (e[t] = []), e[t].push(i), [t, i];
      }),
      (t.unsubscribe = function (t, i) {
        var n = e[i ? t : t[0]],
          r = n ? n.length : 0;
        for (i = i || t[1]; r--; ) n[r] === i && n.splice(r, 1);
      }),
      t);
  })(),
  (function () {
    "use strict";
    var t = function () {
      this.init();
    };
    t.prototype = {
      init: function () {
        var t = this || e;
        return (
          (t._codecs = {}),
          (t._howls = []),
          (t._muted = !1),
          (t._volume = 1),
          (t._canPlayEvent = "canplaythrough"),
          (t._navigator =
            "undefined" != typeof window && window.navigator
              ? window.navigator
              : null),
          (t.masterGain = null),
          (t.noAudio = !1),
          (t.usingWebAudio = !0),
          (t.autoSuspend = !0),
          (t.ctx = null),
          (t.mobileAutoEnable = !0),
          t._setup(),
          t
        );
      },
      volume: function (t) {
        var i = this || e;
        if (
          ((t = parseFloat(t)), i.ctx || l(), void 0 !== t && t >= 0 && 1 >= t)
        ) {
          if (((i._volume = t), i._muted)) return i;
          i.usingWebAudio && (i.masterGain.gain.value = t);
          for (var n = 0; n < i._howls.length; n++)
            if (!i._howls[n]._webAudio)
              for (
                var r = i._howls[n]._getSoundIds(), o = 0;
                o < r.length;
                o++
              ) {
                var s = i._howls[n]._soundById(r[o]);
                s && s._node && (s._node.volume = s._volume * t);
              }
          return i;
        }
        return i._volume;
      },
      mute: function (t) {
        var i = this || e;
        i.ctx || l(),
          (i._muted = t),
          i.usingWebAudio && (i.masterGain.gain.value = t ? 0 : i._volume);
        for (var n = 0; n < i._howls.length; n++)
          if (!i._howls[n]._webAudio)
            for (var r = i._howls[n]._getSoundIds(), o = 0; o < r.length; o++) {
              var s = i._howls[n]._soundById(r[o]);
              s && s._node && (s._node.muted = !!t || s._muted);
            }
        return i;
      },
      unload: function () {
        for (var t = this || e, i = t._howls.length - 1; i >= 0; i--)
          t._howls[i].unload();
        return (
          t.usingWebAudio &&
            void 0 !== t.ctx.close &&
            (t.ctx.close(), (t.ctx = null), l()),
          t
        );
      },
      codecs: function (t) {
        return (this || e)._codecs[t.replace(/^x-/, "")];
      },
      _setup: function () {
        var t = this || e;
        return (
          (t.state = (t.ctx && t.ctx.state) || "running"),
          t._autoSuspend(),
          t.noAudio || t._setupCodecs(),
          t
        );
      },
      _setupCodecs: function () {
        var t = this || e,
          i = "undefined" != typeof Audio ? new Audio() : null;
        if (!i || "function" != typeof i.canPlayType) return t;
        var n = i.canPlayType("audio/mpeg;").replace(/^no$/, ""),
          r = t._navigator && t._navigator.userAgent.match(/OPR\/([0-6].)/g),
          o = r && 33 > parseInt(r[0].split("/")[1], 10);
        return (
          (t._codecs = {
            mp3: !(
              o ||
              (!n && !i.canPlayType("audio/mp3;").replace(/^no$/, ""))
            ),
            mpeg: !!n,
            opus: !!i
              .canPlayType('audio/ogg; codecs="opus"')
              .replace(/^no$/, ""),
            ogg: !!i
              .canPlayType('audio/ogg; codecs="vorbis"')
              .replace(/^no$/, ""),
            oga: !!i
              .canPlayType('audio/ogg; codecs="vorbis"')
              .replace(/^no$/, ""),
            wav: !!i.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
            aac: !!i.canPlayType("audio/aac;").replace(/^no$/, ""),
            caf: !!i.canPlayType("audio/x-caf;").replace(/^no$/, ""),
            m4a: !!(
              i.canPlayType("audio/x-m4a;") ||
              i.canPlayType("audio/m4a;") ||
              i.canPlayType("audio/aac;")
            ).replace(/^no$/, ""),
            mp4: !!(
              i.canPlayType("audio/x-mp4;") ||
              i.canPlayType("audio/mp4;") ||
              i.canPlayType("audio/aac;")
            ).replace(/^no$/, ""),
            weba: !!i
              .canPlayType('audio/webm; codecs="vorbis"')
              .replace(/^no$/, ""),
            webm: !!i
              .canPlayType('audio/webm; codecs="vorbis"')
              .replace(/^no$/, ""),
            dolby: !!i
              .canPlayType('audio/mp4; codecs="ec-3"')
              .replace(/^no$/, ""),
            flac: !!(
              i.canPlayType("audio/x-flac;") || i.canPlayType("audio/flac;")
            ).replace(/^no$/, ""),
          }),
          t
        );
      },
      _enableMobileAudio: function () {
        var t = this || e,
          i = /iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi/i.test(
            t._navigator && t._navigator.userAgent
          ),
          n = !!(
            "ontouchend" in window ||
            (t._navigator && t._navigator.maxTouchPoints > 0) ||
            (t._navigator && t._navigator.msMaxTouchPoints > 0)
          );
        if (!t._mobileEnabled && t.ctx && (i || n)) {
          (t._mobileEnabled = !1),
            t._mobileUnloaded ||
              44100 === t.ctx.sampleRate ||
              ((t._mobileUnloaded = !0), t.unload()),
            (t._scratchBuffer = t.ctx.createBuffer(1, 1, 22050));
          var r = function () {
            var e = t.ctx.createBufferSource();
            (e.buffer = t._scratchBuffer),
              e.connect(t.ctx.destination),
              void 0 === e.start ? e.noteOn(0) : e.start(0),
              (e.onended = function () {
                e.disconnect(0),
                  (t._mobileEnabled = !0),
                  (t.mobileAutoEnable = !1),
                  document.removeEventListener("touchend", r, !0);
              });
          };
          return document.addEventListener("touchend", r, !0), t;
        }
      },
      _autoSuspend: function () {
        var t = this;
        if (
          t.autoSuspend &&
          t.ctx &&
          void 0 !== t.ctx.suspend &&
          e.usingWebAudio
        ) {
          for (var i = 0; i < t._howls.length; i++)
            if (t._howls[i]._webAudio) {
              for (var n = 0; n < t._howls[i]._sounds.length; n++)
                if (!t._howls[i]._sounds[n]._paused) return t;
            }
          return (
            t._suspendTimer && clearTimeout(t._suspendTimer),
            (t._suspendTimer = setTimeout(function () {
              t.autoSuspend &&
                ((t._suspendTimer = null),
                (t.state = "suspending"),
                t.ctx.suspend().then(function () {
                  (t.state = "suspended"),
                    t._resumeAfterSuspend &&
                      (delete t._resumeAfterSuspend, t._autoResume());
                }));
            }, 3e4)),
            t
          );
        }
      },
      _autoResume: function () {
        var t = this;
        if (t.ctx && void 0 !== t.ctx.resume && e.usingWebAudio)
          return (
            "running" === t.state && t._suspendTimer
              ? (clearTimeout(t._suspendTimer), (t._suspendTimer = null))
              : "suspended" === t.state
              ? ((t.state = "resuming"),
                t.ctx.resume().then(function () {
                  t.state = "running";
                }),
                t._suspendTimer &&
                  (clearTimeout(t._suspendTimer), (t._suspendTimer = null)))
              : "suspending" === t.state && (t._resumeAfterSuspend = !0),
            t
          );
      },
    };
    var e = new t(),
      i = function (t) {
        var e = this;
        return t.src && 0 !== t.src.length
          ? void e.init(t)
          : void console.error(
              "An array of source files must be passed with any new Howl."
            );
      };
    i.prototype = {
      init: function (t) {
        var i = this;
        return (
          e.ctx || l(),
          (i._autoplay = t.autoplay || !1),
          (i._format = "string" != typeof t.format ? t.format : [t.format]),
          (i._html5 = t.html5 || !1),
          (i._muted = t.mute || !1),
          (i._loop = t.loop || !1),
          (i._pool = t.pool || 5),
          (i._preload = "boolean" != typeof t.preload || t.preload),
          (i._rate = t.rate || 1),
          (i._sprite = t.sprite || {}),
          (i._src = "string" != typeof t.src ? t.src : [t.src]),
          (i._volume = void 0 !== t.volume ? t.volume : 1),
          (i._duration = 0),
          (i._state = "unloaded"),
          (i._sounds = []),
          (i._endTimers = {}),
          (i._queue = []),
          (i._onend = t.onend ? [{ fn: t.onend }] : []),
          (i._onfade = t.onfade ? [{ fn: t.onfade }] : []),
          (i._onload = t.onload ? [{ fn: t.onload }] : []),
          (i._onloaderror = t.onloaderror ? [{ fn: t.onloaderror }] : []),
          (i._onpause = t.onpause ? [{ fn: t.onpause }] : []),
          (i._onplay = t.onplay ? [{ fn: t.onplay }] : []),
          (i._onstop = t.onstop ? [{ fn: t.onstop }] : []),
          (i._onmute = t.onmute ? [{ fn: t.onmute }] : []),
          (i._onvolume = t.onvolume ? [{ fn: t.onvolume }] : []),
          (i._onrate = t.onrate ? [{ fn: t.onrate }] : []),
          (i._onseek = t.onseek ? [{ fn: t.onseek }] : []),
          (i._webAudio = e.usingWebAudio && !i._html5),
          void 0 !== e.ctx &&
            e.ctx &&
            e.mobileAutoEnable &&
            e._enableMobileAudio(),
          e._howls.push(i),
          i._preload && i.load(),
          i
        );
      },
      load: function () {
        var t,
          i,
          r = this,
          s = null;
        if (e.noAudio)
          return void r._emit("loaderror", null, "No audio support.");
        "string" == typeof r._src && (r._src = [r._src]);
        for (var a = 0; a < r._src.length; a++) {
          if (r._format && r._format[a]) t = r._format[a];
          else {
            if ("string" != typeof (i = r._src[a])) {
              r._emit(
                "loaderror",
                null,
                "Non-string found in selected audio sources - ignoring."
              );
              continue;
            }
            (t = /^data:audio\/([^;,]+);/i.exec(i)) ||
              (t = /\.([^.]+)$/.exec(i.split("?", 1)[0])),
              t && (t = t[1].toLowerCase());
          }
          if (e.codecs(t)) {
            s = r._src[a];
            break;
          }
        }
        return s
          ? ((r._src = s),
            (r._state = "loading"),
            "https:" === window.location.protocol &&
              "http:" === s.slice(0, 5) &&
              ((r._html5 = !0), (r._webAudio = !1)),
            new n(r),
            r._webAudio && o(r),
            r)
          : void r._emit(
              "loaderror",
              null,
              "No codec support for selected audio sources."
            );
      },
      play: function (t, i) {
        var n = this,
          r = null;
        if ("number" == typeof t) (r = t), (t = null);
        else {
          if ("string" == typeof t && "loaded" === n._state && !n._sprite[t])
            return null;
          if (void 0 === t) {
            t = "__default";
            for (var o = 0, s = 0; s < n._sounds.length; s++)
              n._sounds[s]._paused &&
                !n._sounds[s]._ended &&
                (o++, (r = n._sounds[s]._id));
            1 === o ? (t = null) : (r = null);
          }
        }
        var a = r ? n._soundById(r) : n._inactiveSound();
        if (!a) return null;
        if (
          (r && !t && (t = a._sprite || "__default"),
          "loaded" !== n._state && !n._sprite[t])
        )
          return (
            n._queue.push({
              event: "play",
              action: function () {
                n.play(n._soundById(a._id) ? a._id : void 0);
              },
            }),
            a._id
          );
        if (r && !a._paused)
          return (
            i ||
              setTimeout(function () {
                n._emit("play", a._id);
              }, 0),
            a._id
          );
        n._webAudio && e._autoResume();
        var h = a._seek > 0 ? a._seek : n._sprite[t][0] / 1e3,
          l = (n._sprite[t][0] + n._sprite[t][1]) / 1e3 - h,
          u = (1e3 * l) / Math.abs(a._rate);
        (a._paused = !1),
          (a._ended = !1),
          (a._sprite = t),
          (a._seek = h),
          (a._start = n._sprite[t][0] / 1e3),
          (a._stop = (n._sprite[t][0] + n._sprite[t][1]) / 1e3),
          (a._loop = !(!a._loop && !n._sprite[t][2]));
        var c = a._node;
        if (n._webAudio) {
          var d = function () {
            n._refreshBuffer(a);
            var t = a._muted || n._muted ? 0 : a._volume;
            c.gain.setValueAtTime(t, e.ctx.currentTime),
              (a._playStart = e.ctx.currentTime),
              void 0 === c.bufferSource.start
                ? a._loop
                  ? c.bufferSource.noteGrainOn(0, h, 86400)
                  : c.bufferSource.noteGrainOn(0, h, l)
                : a._loop
                ? c.bufferSource.start(0, h, 86400)
                : c.bufferSource.start(0, h, l),
              u !== 1 / 0 &&
                (n._endTimers[a._id] = setTimeout(n._ended.bind(n, a), u)),
              i ||
                setTimeout(function () {
                  n._emit("play", a._id);
                }, 0);
          };
          "loaded" === n._state
            ? d()
            : (n.once("load", d, a._id), n._clearTimer(a._id));
        } else {
          var f = function () {
              (c.currentTime = h),
                (c.muted = a._muted || n._muted || e._muted || c.muted),
                (c.volume = a._volume * e.volume()),
                (c.playbackRate = a._rate),
                setTimeout(function () {
                  c.play(),
                    u !== 1 / 0 &&
                      (n._endTimers[a._id] = setTimeout(
                        n._ended.bind(n, a),
                        u
                      )),
                    i || n._emit("play", a._id);
                }, 0);
            },
            p =
              "loaded" === n._state &&
              ((window && window.ejecta) ||
                (!c.readyState && e._navigator.isCocoonJS));
          if (4 === c.readyState || p) f();
          else {
            var g = function () {
              f(), c.removeEventListener(e._canPlayEvent, g, !1);
            };
            c.addEventListener(e._canPlayEvent, g, !1), n._clearTimer(a._id);
          }
        }
        return a._id;
      },
      pause: function (t) {
        var e = this;
        if ("loaded" !== e._state)
          return (
            e._queue.push({
              event: "pause",
              action: function () {
                e.pause(t);
              },
            }),
            e
          );
        for (var i = e._getSoundIds(t), n = 0; n < i.length; n++) {
          e._clearTimer(i[n]);
          var r = e._soundById(i[n]);
          if (r && !r._paused) {
            if (
              ((r._seek = e.seek(i[n])),
              (r._rateSeek = 0),
              (r._paused = !0),
              e._stopFade(i[n]),
              r._node)
            ) {
              if (e._webAudio) {
                if (!r._node.bufferSource) return e;
                void 0 === r._node.bufferSource.stop
                  ? r._node.bufferSource.noteOff(0)
                  : r._node.bufferSource.stop(0),
                  e._cleanBuffer(r._node);
              } else
                (isNaN(r._node.duration) && r._node.duration !== 1 / 0) ||
                  r._node.pause();
            }
            arguments[1] || e._emit("pause", r._id);
          }
        }
        return e;
      },
      stop: function (t, e) {
        var i = this;
        if ("loaded" !== i._state)
          return (
            i._queue.push({
              event: "stop",
              action: function () {
                i.stop(t);
              },
            }),
            i
          );
        for (var n = i._getSoundIds(t), r = 0; r < n.length; r++) {
          i._clearTimer(n[r]);
          var o = i._soundById(n[r]);
          if (
            o &&
            ((o._seek = o._start || 0),
            (o._rateSeek = 0),
            (o._paused = !0),
            (o._ended = !0),
            i._stopFade(n[r]),
            o._node)
          ) {
            if (i._webAudio) {
              if (!o._node.bufferSource) return e || i._emit("stop", o._id), i;
              void 0 === o._node.bufferSource.stop
                ? o._node.bufferSource.noteOff(0)
                : o._node.bufferSource.stop(0),
                i._cleanBuffer(o._node);
            } else
              (isNaN(o._node.duration) && o._node.duration !== 1 / 0) ||
                ((o._node.currentTime = o._start || 0), o._node.pause());
          }
          o && !e && i._emit("stop", o._id);
        }
        return i;
      },
      mute: function (t, i) {
        var n = this;
        if ("loaded" !== n._state)
          return (
            n._queue.push({
              event: "mute",
              action: function () {
                n.mute(t, i);
              },
            }),
            n
          );
        if (void 0 === i) {
          if ("boolean" != typeof t) return n._muted;
          n._muted = t;
        }
        for (var r = n._getSoundIds(i), o = 0; o < r.length; o++) {
          var s = n._soundById(r[o]);
          s &&
            ((s._muted = t),
            n._webAudio && s._node
              ? s._node.gain.setValueAtTime(
                  t ? 0 : s._volume,
                  e.ctx.currentTime
                )
              : s._node && (s._node.muted = !!e._muted || t),
            n._emit("mute", s._id));
        }
        return n;
      },
      volume: function () {
        var t,
          i,
          n,
          r = this,
          o = arguments;
        if (0 === o.length) return r._volume;
        if (
          (1 === o.length || (2 === o.length && void 0 === o[1])
            ? r._getSoundIds().indexOf(o[0]) >= 0
              ? (n = parseInt(o[0], 10))
              : (i = parseFloat(o[0]))
            : o.length >= 2 &&
              ((i = parseFloat(o[0])), (n = parseInt(o[1], 10))),
          !(void 0 !== i && i >= 0 && 1 >= i))
        )
          return (t = n ? r._soundById(n) : r._sounds[0]) ? t._volume : 0;
        if ("loaded" !== r._state)
          return (
            r._queue.push({
              event: "volume",
              action: function () {
                r.volume.apply(r, o);
              },
            }),
            r
          );
        void 0 === n && (r._volume = i), (n = r._getSoundIds(n));
        for (var s = 0; s < n.length; s++)
          (t = r._soundById(n[s])) &&
            ((t._volume = i),
            o[2] || r._stopFade(n[s]),
            r._webAudio && t._node && !t._muted
              ? t._node.gain.setValueAtTime(i, e.ctx.currentTime)
              : t._node && !t._muted && (t._node.volume = i * e.volume()),
            r._emit("volume", t._id));
        return r;
      },
      fade: function (t, i, n, r) {
        var o = this,
          s = Math.abs(t - i),
          a = t > i ? "out" : "in",
          h = s / 0.01,
          l = h > 0 ? n / h : n;
        if (
          (4 > l && ((h = Math.ceil(h / (4 / l))), (l = 4)),
          "loaded" !== o._state)
        )
          return (
            o._queue.push({
              event: "fade",
              action: function () {
                o.fade(t, i, n, r);
              },
            }),
            o
          );
        o.volume(t, r);
        for (var u = o._getSoundIds(r), c = 0; c < u.length; c++) {
          var d = o._soundById(u[c]);
          if (d) {
            if ((r || o._stopFade(u[c]), o._webAudio && !d._muted)) {
              var f = e.ctx.currentTime,
                p = f + n / 1e3;
              (d._volume = t),
                d._node.gain.setValueAtTime(t, f),
                d._node.gain.linearRampToValueAtTime(i, p);
            }
            var g = t;
            d._interval = setInterval(
              function (t, e) {
                h > 0 && (g += "in" === a ? 0.01 : -0.01),
                  (g =
                    Math.round(100 * (g = Math.min(1, (g = Math.max(0, g))))) /
                    100),
                  o._webAudio
                    ? (void 0 === r && (o._volume = g), (e._volume = g))
                    : o.volume(g, t, !0),
                  g === i &&
                    (clearInterval(e._interval),
                    (e._interval = null),
                    o.volume(g, t),
                    o._emit("fade", t));
              }.bind(o, u[c], d),
              l
            );
          }
        }
        return o;
      },
      _stopFade: function (t) {
        var i = this,
          n = i._soundById(t);
        return (
          n &&
            n._interval &&
            (i._webAudio &&
              n._node.gain.cancelScheduledValues(e.ctx.currentTime),
            clearInterval(n._interval),
            (n._interval = null),
            i._emit("fade", t)),
          i
        );
      },
      loop: function () {
        var t,
          e,
          i,
          n = this,
          r = arguments;
        if (0 === r.length) return n._loop;
        if (1 === r.length) {
          if ("boolean" != typeof r[0])
            return !!(i = n._soundById(parseInt(r[0], 10))) && i._loop;
          (t = r[0]), (n._loop = t);
        } else 2 === r.length && ((t = r[0]), (e = parseInt(r[1], 10)));
        for (var o = n._getSoundIds(e), s = 0; s < o.length; s++)
          (i = n._soundById(o[s])) &&
            ((i._loop = t),
            n._webAudio &&
              i._node &&
              i._node.bufferSource &&
              ((i._node.bufferSource.loop = t),
              t &&
                ((i._node.bufferSource.loopStart = i._start || 0),
                (i._node.bufferSource.loopEnd = i._stop))));
        return n;
      },
      rate: function () {
        var t,
          i,
          n,
          r = this,
          o = arguments;
        if (
          (0 === o.length
            ? (n = r._sounds[0]._id)
            : 1 === o.length
            ? r._getSoundIds().indexOf(o[0]) >= 0
              ? (n = parseInt(o[0], 10))
              : (i = parseFloat(o[0]))
            : 2 === o.length &&
              ((i = parseFloat(o[0])), (n = parseInt(o[1], 10))),
          "number" != typeof i)
        )
          return (t = r._soundById(n)) ? t._rate : r._rate;
        if ("loaded" !== r._state)
          return (
            r._queue.push({
              event: "rate",
              action: function () {
                r.rate.apply(r, o);
              },
            }),
            r
          );
        void 0 === n && (r._rate = i), (n = r._getSoundIds(n));
        for (var s = 0; s < n.length; s++)
          if ((t = r._soundById(n[s]))) {
            (t._rateSeek = r.seek(n[s])),
              (t._playStart = r._webAudio ? e.ctx.currentTime : t._playStart),
              (t._rate = i),
              r._webAudio && t._node && t._node.bufferSource
                ? (t._node.bufferSource.playbackRate.value = i)
                : t._node && (t._node.playbackRate = i);
            var a = r.seek(n[s]),
              h =
                (1e3 *
                  ((r._sprite[t._sprite][0] + r._sprite[t._sprite][1]) / 1e3 -
                    a)) /
                Math.abs(t._rate);
            (!r._endTimers[n[s]] && t._paused) ||
              (r._clearTimer(n[s]),
              (r._endTimers[n[s]] = setTimeout(r._ended.bind(r, t), h))),
              r._emit("rate", t._id);
          }
        return r;
      },
      seek: function () {
        var t,
          i,
          n = this,
          r = arguments;
        if (
          (0 === r.length
            ? (i = n._sounds[0]._id)
            : 1 === r.length
            ? n._getSoundIds().indexOf(r[0]) >= 0
              ? (i = parseInt(r[0], 10))
              : ((i = n._sounds[0]._id), (t = parseFloat(r[0])))
            : 2 === r.length &&
              ((t = parseFloat(r[0])), (i = parseInt(r[1], 10))),
          void 0 === i)
        )
          return n;
        if ("loaded" !== n._state)
          return (
            n._queue.push({
              event: "seek",
              action: function () {
                n.seek.apply(n, r);
              },
            }),
            n
          );
        var o = n._soundById(i);
        if (o) {
          if (!("number" == typeof t && t >= 0)) {
            if (n._webAudio) {
              var s = n.playing(i) ? e.ctx.currentTime - o._playStart : 0,
                a = o._rateSeek ? o._rateSeek - o._seek : 0;
              return o._seek + (a + s * Math.abs(o._rate));
            }
            return o._node.currentTime;
          }
          var h = n.playing(i);
          h && n.pause(i, !0),
            (o._seek = t),
            (o._ended = !1),
            n._clearTimer(i),
            h && n.play(i, !0),
            !n._webAudio && o._node && (o._node.currentTime = t),
            n._emit("seek", i);
        }
        return n;
      },
      playing: function (t) {
        var e = this;
        if ("number" == typeof t) {
          var i = e._soundById(t);
          return !!i && !i._paused;
        }
        for (var n = 0; n < e._sounds.length; n++)
          if (!e._sounds[n]._paused) return !0;
        return !1;
      },
      duration: function (t) {
        var e = this,
          i = e._duration,
          n = e._soundById(t);
        return n && (i = e._sprite[n._sprite][1] / 1e3), i;
      },
      state: function () {
        return this._state;
      },
      unload: function () {
        for (var t = this, i = t._sounds, n = 0; n < i.length; n++) {
          i[n]._paused || (t.stop(i[n]._id), t._emit("end", i[n]._id)),
            t._webAudio ||
              ((i[n]._node.src =
                "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA="),
              i[n]._node.removeEventListener("error", i[n]._errorFn, !1),
              i[n]._node.removeEventListener(
                e._canPlayEvent,
                i[n]._loadFn,
                !1
              )),
            delete i[n]._node,
            t._clearTimer(i[n]._id);
          var o = e._howls.indexOf(t);
          o >= 0 && e._howls.splice(o, 1);
        }
        var s = !0;
        for (n = 0; n < e._howls.length; n++)
          if (e._howls[n]._src === t._src) {
            s = !1;
            break;
          }
        return (
          r && s && delete r[t._src],
          (e.noAudio = !1),
          (t._state = "unloaded"),
          (t._sounds = []),
          (t = null),
          null
        );
      },
      on: function (t, e, i, n) {
        var r = this,
          o = r["_on" + t];
        return (
          "function" == typeof e &&
            o.push(n ? { id: i, fn: e, once: n } : { id: i, fn: e }),
          r
        );
      },
      off: function (t, e, i) {
        var n = this,
          r = n["_on" + t],
          o = 0;
        if (e) {
          for (o = 0; o < r.length; o++)
            if (e === r[o].fn && i === r[o].id) {
              r.splice(o, 1);
              break;
            }
        } else if (t) n["_on" + t] = [];
        else {
          var s = Object.keys(n);
          for (o = 0; o < s.length; o++)
            0 === s[o].indexOf("_on") &&
              Array.isArray(n[s[o]]) &&
              (n[s[o]] = []);
        }
        return n;
      },
      once: function (t, e, i) {
        var n = this;
        return n.on(t, e, i, 1), n;
      },
      _emit: function (t, e, i) {
        for (var n = this, r = n["_on" + t], o = r.length - 1; o >= 0; o--)
          (r[o].id && r[o].id !== e && "load" !== t) ||
            (setTimeout(
              function (t) {
                t.call(this, e, i);
              }.bind(n, r[o].fn),
              0
            ),
            r[o].once && n.off(t, r[o].fn, r[o].id));
        return n;
      },
      _loadQueue: function () {
        var t = this;
        if (t._queue.length > 0) {
          var e = t._queue[0];
          t.once(e.event, function () {
            t._queue.shift(), t._loadQueue();
          }),
            e.action();
        }
        return t;
      },
      _ended: function (t) {
        var i = this,
          n = t._sprite,
          r = !(!t._loop && !i._sprite[n][2]);
        if (
          (i._emit("end", t._id),
          !i._webAudio && r && i.stop(t._id, !0).play(t._id),
          i._webAudio && r)
        ) {
          i._emit("play", t._id),
            (t._seek = t._start || 0),
            (t._rateSeek = 0),
            (t._playStart = e.ctx.currentTime);
          var o = (1e3 * (t._stop - t._start)) / Math.abs(t._rate);
          i._endTimers[t._id] = setTimeout(i._ended.bind(i, t), o);
        }
        return (
          i._webAudio &&
            !r &&
            ((t._paused = !0),
            (t._ended = !0),
            (t._seek = t._start || 0),
            (t._rateSeek = 0),
            i._clearTimer(t._id),
            i._cleanBuffer(t._node),
            e._autoSuspend()),
          i._webAudio || r || i.stop(t._id),
          i
        );
      },
      _clearTimer: function (t) {
        var e = this;
        return (
          e._endTimers[t] &&
            (clearTimeout(e._endTimers[t]), delete e._endTimers[t]),
          e
        );
      },
      _soundById: function (t) {
        for (var e = this, i = 0; i < e._sounds.length; i++)
          if (t === e._sounds[i]._id) return e._sounds[i];
        return null;
      },
      _inactiveSound: function () {
        var t = this;
        t._drain();
        for (var e = 0; e < t._sounds.length; e++)
          if (t._sounds[e]._ended) return t._sounds[e].reset();
        return new n(t);
      },
      _drain: function () {
        var t = this,
          e = t._pool,
          i = 0,
          n = 0;
        if (!(t._sounds.length < e)) {
          for (n = 0; n < t._sounds.length; n++) t._sounds[n]._ended && i++;
          for (n = t._sounds.length - 1; n >= 0; n--) {
            if (e >= i) return;
            t._sounds[n]._ended &&
              (t._webAudio &&
                t._sounds[n]._node &&
                t._sounds[n]._node.disconnect(0),
              t._sounds.splice(n, 1),
              i--);
          }
        }
      },
      _getSoundIds: function (t) {
        var e = this;
        if (void 0 === t) {
          for (var i = [], n = 0; n < e._sounds.length; n++)
            i.push(e._sounds[n]._id);
          return i;
        }
        return [t];
      },
      _refreshBuffer: function (t) {
        var i = this;
        return (
          (t._node.bufferSource = e.ctx.createBufferSource()),
          (t._node.bufferSource.buffer = r[i._src]),
          t._panner
            ? t._node.bufferSource.connect(t._panner)
            : t._node.bufferSource.connect(t._node),
          (t._node.bufferSource.loop = t._loop),
          t._loop &&
            ((t._node.bufferSource.loopStart = t._start || 0),
            (t._node.bufferSource.loopEnd = t._stop)),
          (t._node.bufferSource.playbackRate.value = t._rate),
          i
        );
      },
      _cleanBuffer: function (t) {
        var e = this;
        if (e._scratchBuffer) {
          (t.bufferSource.onended = null), t.bufferSource.disconnect(0);
          try {
            t.bufferSource.buffer = e._scratchBuffer;
          } catch (i) {}
        }
        return (t.bufferSource = null), e;
      },
    };
    var n = function (t) {
      (this._parent = t), this.init();
    };
    n.prototype = {
      init: function () {
        var t = this,
          e = t._parent;
        return (
          (t._muted = e._muted),
          (t._loop = e._loop),
          (t._volume = e._volume),
          (t._muted = e._muted),
          (t._rate = e._rate),
          (t._seek = 0),
          (t._paused = !0),
          (t._ended = !0),
          (t._sprite = "__default"),
          (t._id = Math.round(Date.now() * Math.random())),
          e._sounds.push(t),
          t.create(),
          t
        );
      },
      create: function () {
        var t = this,
          i = t._parent,
          n = e._muted || t._muted || t._parent._muted ? 0 : t._volume;
        return (
          i._webAudio
            ? ((t._node =
                void 0 === e.ctx.createGain
                  ? e.ctx.createGainNode()
                  : e.ctx.createGain()),
              t._node.gain.setValueAtTime(n, e.ctx.currentTime),
              (t._node.paused = !0),
              t._node.connect(e.masterGain))
            : ((t._node = new Audio()),
              (t._errorFn = t._errorListener.bind(t)),
              t._node.addEventListener("error", t._errorFn, !1),
              (t._loadFn = t._loadListener.bind(t)),
              t._node.addEventListener(e._canPlayEvent, t._loadFn, !1),
              (t._node.src = i._src),
              (t._node.preload = "auto"),
              (t._node.volume = n * e.volume()),
              t._node.load()),
          t
        );
      },
      reset: function () {
        var t = this,
          e = t._parent;
        return (
          (t._muted = e._muted),
          (t._loop = e._loop),
          (t._volume = e._volume),
          (t._muted = e._muted),
          (t._rate = e._rate),
          (t._seek = 0),
          (t._rateSeek = 0),
          (t._paused = !0),
          (t._ended = !0),
          (t._sprite = "__default"),
          (t._id = Math.round(Date.now() * Math.random())),
          t
        );
      },
      _errorListener: function () {
        var t = this;
        t._parent._emit(
          "loaderror",
          t._id,
          t._node.error ? t._node.error.code : 0
        ),
          t._node.removeEventListener("error", t._errorListener, !1);
      },
      _loadListener: function () {
        var t = this,
          i = t._parent;
        (i._duration = Math.ceil(10 * t._node.duration) / 10),
          0 === Object.keys(i._sprite).length &&
            (i._sprite = { __default: [0, 1e3 * i._duration] }),
          "loaded" !== i._state &&
            ((i._state = "loaded"), i._emit("load"), i._loadQueue()),
          i._autoplay && i.play(),
          t._node.removeEventListener(e._canPlayEvent, t._loadFn, !1);
      },
    };
    var r = {},
      o = function (t) {
        var e = t._src;
        if (r[e]) return (t._duration = r[e].duration), void h(t);
        if (/^data:[^;]+;base64,/.test(e)) {
          for (
            var i = atob(e.split(",")[1]), n = new Uint8Array(i.length), o = 0;
            o < i.length;
            ++o
          )
            n[o] = i.charCodeAt(o);
          a(n.buffer, t);
        } else {
          var l = new XMLHttpRequest();
          l.open("GET", e, !0),
            (l.responseType = "arraybuffer"),
            (l.onload = function () {
              var e = (l.status + "")[0];
              return "0" !== e && "2" !== e && "3" !== e
                ? void t._emit(
                    "loaderror",
                    null,
                    "Failed loading audio file with status: " + l.status + "."
                  )
                : void a(l.response, t);
            }),
            (l.onerror = function () {
              t._webAudio &&
                ((t._html5 = !0),
                (t._webAudio = !1),
                (t._sounds = []),
                delete r[e],
                t.load());
            }),
            s(l);
        }
      },
      s = function (t) {
        try {
          t.send();
        } catch (e) {
          t.onerror();
        }
      },
      a = function (t, i) {
        e.ctx.decodeAudioData(
          t,
          function (t) {
            t && i._sounds.length > 0 && ((r[i._src] = t), h(i, t));
          },
          function () {
            i._emit("loaderror", null, "Decoding audio data failed.");
          }
        );
      },
      h = function (t, e) {
        e && !t._duration && (t._duration = e.duration),
          0 === Object.keys(t._sprite).length &&
            (t._sprite = { __default: [0, 1e3 * t._duration] }),
          "loaded" !== t._state &&
            ((t._state = "loaded"), t._emit("load"), t._loadQueue()),
          t._autoplay && t.play();
      },
      l = function () {
        e.noAudio = !1;
        try {
          "undefined" != typeof AudioContext
            ? (e.ctx = new AudioContext())
            : "undefined" != typeof webkitAudioContext
            ? (e.ctx = new webkitAudioContext())
            : (e.usingWebAudio = !1);
        } catch (t) {
          e.usingWebAudio = !1;
        }
        if (!e.usingWebAudio) {
          if ("undefined" != typeof Audio)
            try {
              var i = new Audio();
              void 0 === i.oncanplaythrough && (e._canPlayEvent = "canplay");
            } catch (n) {
              e.noAudio = !0;
            }
          else e.noAudio = !0;
        }
        try {
          new Audio().muted && (e.noAudio = !0);
        } catch (r) {}
        var o = /iP(hone|od|ad)/.test(e._navigator && e._navigator.platform),
          s =
            e._navigator &&
            e._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
          a = s ? parseInt(s[1], 10) : null;
        if (o && a && 9 > a) {
          var h = /safari/.test(
            e._navigator && e._navigator.userAgent.toLowerCase()
          );
          ((e._navigator && e._navigator.standalone && !h) ||
            (e._navigator && !e._navigator.standalone && !h)) &&
            (e.usingWebAudio = !1);
        }
        e.usingWebAudio &&
          ((e.masterGain =
            void 0 === e.ctx.createGain
              ? e.ctx.createGainNode()
              : e.ctx.createGain()),
          (e.masterGain.gain.value = 1),
          e.masterGain.connect(e.ctx.destination)),
          e._setup();
      };
    "function" == typeof define &&
      define.amd &&
      define([], function () {
        return { Howler: e, Howl: i };
      }),
      "undefined" != typeof exports &&
        ((exports.Howler = e), (exports.Howl = i)),
      "undefined" != typeof window
        ? ((window.HowlerGlobal = t),
          (window.Howler = e),
          (window.Howl = i),
          (window.Sound = n))
        : "undefined" != typeof global &&
          ((global.HowlerGlobal = t),
          (global.Howler = e),
          (global.Howl = i),
          (global.Sound = n));
  })(),
  (function () {
    var t;
    (me.plugins = {}),
      (me.plugin =
        (((t = {}).Base = me.Object.extend({
          init: function () {
            this.version = "4.0.0";
          },
        })),
        (t.patch = function (t, e, i) {
          if (
            (void 0 !== t.prototype && (t = t.prototype),
            "function" == typeof t[e])
          ) {
            var n,
              r,
              o = t[e];
            Object.defineProperty(t, e, {
              configurable: !0,
              value:
                ((n = e),
                (r = i),
                function () {
                  this._patched = o;
                  var t = r.apply(this, arguments);
                  return (this._patched = null), t;
                }),
            });
          } else console.error(e + " is not an existing function");
        }),
        (t.register = function (t, e) {
          me.plugin[e] && console.error("plugin " + e + " already registered");
          var i = [];
          arguments.length > 2 &&
            (i = Array.prototype.slice.call(arguments, 1)),
            (i[0] = t);
          var n = new (t.bind.apply(t, i))();
          if (!(n && n instanceof me.plugin.Base))
            throw new me.Error(
              "Plugin should extend the me.plugin.Base Class !"
            );
          if (me.sys.checkVersion(n.version) > 0)
            throw new me.Error(
              "Plugin version mismatch, expected: " +
                n.version +
                ", got: " +
                me.version
            );
          me.plugins[e] = n;
        }),
        t));
  })(),
  (me.DraggableEntity = (function (t, e, i, n) {
    return t.extend({
      init: function (i, r, o) {
        t.prototype.init.apply(this, [i, r, o]),
          (this.dragging = !1),
          (this.dragId = null),
          (this.grabOffset = new n(0, 0)),
          (this.onPointerEvent = e.registerPointerEvent),
          (this.removePointerEvent = e.releasePointerEvent),
          this.initEvents();
      },
      initEvents: function () {
        var t = this;
        (this.mouseDown = function (t) {
          this.translatePointerEvent(t, i.DRAGSTART);
        }),
          (this.mouseUp = function (t) {
            this.translatePointerEvent(t, i.DRAGEND);
          }),
          this.onPointerEvent("pointerdown", this, this.mouseDown.bind(this)),
          this.onPointerEvent("pointerup", this, this.mouseUp.bind(this)),
          i.subscribe(i.POINTERMOVE, this.dragMove.bind(this)),
          i.subscribe(i.DRAGSTART, function (e, i) {
            i === t && t.dragStart(e);
          }),
          i.subscribe(i.DRAGEND, function (e, i) {
            i === t && t.dragEnd(e);
          });
      },
      translatePointerEvent: function (t, e) {
        i.publish(e, [t, this]);
      },
      dragStart: function (t) {
        return !1 === this.dragging
          ? ((this.dragging = !0),
            (this.dragId = t.pointerId),
            this.grabOffset.set(t.gameX, t.gameY),
            this.grabOffset.sub(this.pos),
            !1)
          : void 0;
      },
      dragMove: function (t) {
        !0 === this.dragging &&
          this.dragId === t.pointerId &&
          (this.pos.set(t.gameX, t.gameY, this.pos.z),
          this.pos.sub(this.grabOffset));
      },
      dragEnd: function () {
        return !0 === this.dragging
          ? ((this.pointerId = void 0), (this.dragging = !1), !1)
          : void 0;
      },
      destroy: function () {
        i.unsubscribe(i.POINTERMOVE, this.dragMove),
          i.unsubscribe(i.DRAGSTART, this.dragStart),
          i.unsubscribe(i.DRAGEND, this.dragEnd),
          this.removePointerEvent("pointerdown", this),
          this.removePointerEvent("pointerup", this);
      },
    });
  })(me.Entity, me.input, me.event, me.Vector2d)),
  (me.DroptargetEntity = (function (t, e) {
    return t.extend({
      init: function (i, n, r) {
        (this.CHECKMETHOD_OVERLAP = "overlaps"),
          (this.CHECKMETHOD_CONTAINS = "contains"),
          (this.checkMethod = null),
          t.prototype.init.apply(this, [i, n, r]),
          e.subscribe(e.DRAGEND, this.checkOnMe.bind(this)),
          (this.checkMethod = this[this.CHECKMETHOD_OVERLAP]);
      },
      setCheckMethod: function (t) {
        void 0 !== this[t] && (this.checkMethod = this[t]);
      },
      checkOnMe: function (t, e) {
        e && this.checkMethod(e.getBounds()) && this.drop(e);
      },
      drop: function () {},
      destroy: function () {
        e.unsubscribe(e.DRAGEND, this.checkOnMe);
      },
    });
  })(me.Entity, me.event)),
  (me.CollectableEntity = me.Entity.extend({
    init: function (t, e, i) {
      me.Entity.prototype.init.apply(this, [t, e, i]),
        (this.body.collisionType = me.collision.types.COLLECTABLE_OBJECT);
    },
  })),
  (me.LevelEntity = me.Entity.extend({
    init: function (t, e, i) {
      me.Entity.prototype.init.apply(this, [t, e, i]),
        (this.nextlevel = i.to),
        (this.fade = i.fade),
        (this.duration = i.duration),
        (this.fading = !1),
        (this.name = "levelEntity"),
        (this.gotolevel = i.to),
        (this.loadLevelSettings = {}),
        ["container", "onLoaded", "flatten", "setViewportBounds"].forEach(
          function (t) {
            void 0 !== i[t] && (this.loadLevelSettings[t] = i[t]);
          }.bind(this)
        ),
        (this.body.collisionType = me.collision.types.ACTION_OBJECT);
    },
    getlevelSettings: function () {
      return (
        "string" == typeof this.loadLevelSettings.container &&
          (this.loadLevelSettings.container = me.game.world.getChildByName(
            this.loadLevelSettings.container
          )[0]),
        this.loadLevelSettings
      );
    },
    onFadeComplete: function () {
      me.levelDirector.loadLevel(this.gotolevel, this.getlevelSettings()),
        me.game.viewport.fadeOut(this.fade, this.duration);
    },
    goTo: function (t) {
      (this.gotolevel = t || this.nextlevel),
        this.fade && this.duration
          ? this.fading ||
            ((this.fading = !0),
            me.game.viewport.fadeIn(
              this.fade,
              this.duration,
              this.onFadeComplete.bind(this)
            ))
          : me.levelDirector.loadLevel(this.gotolevel, this.getlevelSettings());
    },
    onCollision: function () {
      return "levelEntity" === this.name && this.goTo.apply(this), !1;
    },
  })),
  (function () {
    var t,
      e,
      i =
        (((e = (t = me.video.createCanvas(1, 1)).getContext("2d")).fillStyle =
          "#fff"),
        e.fillRect(0, 0, 1, 1),
        t);
    (me.ParticleEmitterSettings = {
      width: 0,
      height: 0,
      image: i,
      totalParticles: 50,
      angle: Math.PI / 2,
      angleVariation: 0,
      minLife: 1e3,
      maxLife: 3e3,
      speed: 2,
      speedVariation: 1,
      minRotation: 0,
      maxRotation: 0,
      minStartScale: 1,
      maxStartScale: 1,
      minEndScale: 0,
      maxEndScale: 0,
      gravity: 0,
      wind: 0,
      followTrajectory: !1,
      textureAdditive: !1,
      onlyInViewport: !0,
      floating: !1,
      maxParticles: 10,
      frequency: 100,
      duration: 1 / 0,
      framesToSkip: 0,
    }),
      (me.ParticleEmitter = me.Rect.extend({
        init: function (t, e, i) {
          (this._stream = !1),
            (this._frequencyTimer = 0),
            (this._durationTimer = 0),
            (this._enabled = !1),
            (this.isRenderable = !1),
            me.Rect.prototype.init.apply(this, [t, e, 1 / 0, 1 / 0]),
            (this.autoSort = !1),
            (this.container = new me.ParticleContainer(this)),
            Object.defineProperty(this.pos, "z", {
              get: function () {
                return this.container.pos.z;
              }.bind(this),
              set: function (t) {
                this.container.pos.z = t;
              }.bind(this),
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(this, "floating", {
              get: function () {
                return this.container.floating;
              },
              set: function (t) {
                this.container.floating = t;
              },
              enumerable: !0,
              configurable: !0,
            }),
            this.reset(i);
        },
        onActivateEvent: function () {
          this.ancestor.addChild(this.container),
            (this.container.pos.z = this.pos.z),
            this.ancestor.autoSort || this.ancestor.sort();
        },
        onDeactivateEvent: function () {
          this.ancestor.hasChild(this.container) &&
            this.ancestor.removeChildNow(this.container);
        },
        destroy: function () {
          this.reset();
        },
        getRandomPointX: function () {
          return this.pos.x + (0).randomFloat(this.width);
        },
        getRandomPointY: function () {
          return this.pos.y + (0).randomFloat(this.height);
        },
        reset: function (t) {
          t = t || {};
          var e = me.ParticleEmitterSettings,
            i = "number" == typeof t.width ? t.width : e.width,
            n = "number" == typeof t.height ? t.height : e.height;
          this.resize(i, n),
            Object.assign(this, e, t),
            this.container.destroy();
        },
        addParticles: function (t) {
          for (var e = 0; ~~t > e; e++) {
            var i = me.pool.pull("me.Particle", this);
            this.container.addChild(i);
          }
        },
        isRunning: function () {
          return this._enabled && this._stream;
        },
        streamParticles: function (t) {
          (this._enabled = !0),
            (this._stream = !0),
            (this.frequency = Math.max(this.frequency, 1)),
            (this._durationTimer = "number" == typeof t ? t : this.duration);
        },
        stopStream: function () {
          this._enabled = !1;
        },
        burstParticles: function (t) {
          (this._enabled = !0),
            (this._stream = !1),
            this.addParticles("number" == typeof t ? t : this.totalParticles),
            (this._enabled = !1);
        },
        update: function (t) {
          if (this._enabled && this._stream) {
            if (
              this._durationTimer !== 1 / 0 &&
              ((this._durationTimer -= t), this._durationTimer <= 0)
            )
              return this.stopStream(), !1;
            this._frequencyTimer += t;
            var e = this.container.children.length;
            e < this.totalParticles &&
              this._frequencyTimer >= this.frequency &&
              (e + this.maxParticles <= this.totalParticles
                ? this.addParticles(this.maxParticles)
                : this.addParticles(this.totalParticles - e),
              (this._frequencyTimer = 0));
          }
          return !0;
        },
      }));
  })(),
  (me.ParticleContainer = me.Container.extend({
    init: function (t) {
      (this._viewport = me.game.viewport),
        me.Container.prototype.init.apply(this),
        (this.autoSort = !1),
        (this._updateCount = 0),
        (this._dt = 0),
        (this._emitter = t);
    },
    getBounds: function () {
      return this._viewport;
    },
    update: function (t) {
      if (
        (++this._updateCount > this._emitter.framesToSkip &&
          (this._updateCount = 0),
        this._updateCount > 0)
      )
        return (this._dt += t), !1;
      (t += this._dt), (this._dt = 0);
      for (
        var e = me.game.viewport, i = this.children.length - 1;
        i >= 0;
        --i
      ) {
        var n = this.children[i];
        (n.isRenderable = !0),
          (n.inViewport =
            this.floating ||
            (n.pos.x < e.pos.x + e.width &&
              e.pos.x < n.pos.x + n.width &&
              n.pos.y < e.pos.y + e.height &&
              e.pos.y < n.pos.y + n.height)),
          n.update(t) || this.removeChildNow(n);
      }
      return !0;
    },
    draw: function (t, e) {
      if (this.children.length > 0) {
        var i,
          n = t.getContext();
        this._emitter.textureAdditive &&
          ((i = n.globalCompositeOperation),
          (n.globalCompositeOperation = "lighter")),
          me.Container.prototype.draw.apply(this, [t, e]),
          this._emitter.textureAdditive && (n.globalCompositeOperation = i);
      }
    },
  })),
  window,
  (me.Particle = me.Renderable.extend({
    init: function (t) {
      me.Renderable.prototype.init.apply(this, [
        t.getRandomPointX(),
        t.getRandomPointY(),
        t.image.width,
        t.image.height,
      ]),
        (this.alwaysUpdate = !0),
        (this.isRenderable = !1),
        (this.image = t.image);
      var e =
          t.angle +
          (t.angleVariation > 0
            ? ((0).randomFloat(2) - 1) * t.angleVariation
            : 0),
        i =
          t.speed +
          (t.speedVariation > 0
            ? ((0).randomFloat(2) - 1) * t.speedVariation
            : 0);
      (this.vel = new me.Vector2d(i * Math.cos(e), -i * Math.sin(e))),
        (this.life = t.minLife.randomFloat(t.maxLife)),
        (this.startLife = this.life),
        (this.startScale = t.minStartScale
          .randomFloat(t.maxStartScale)
          .clamp(t.minStartScale, t.maxStartScale)),
        (this.endScale = t.minEndScale
          .randomFloat(t.maxEndScale)
          .clamp(t.minEndScale, t.maxEndScale)),
        (this.gravity = t.gravity),
        (this.wind = t.wind),
        (this.followTrajectory = t.followTrajectory),
        (this.onlyInViewport = t.onlyInViewport),
        (this.pos.z = t.z),
        (this._deltaInv = me.sys.fps / 1e3),
        t.followTrajectory ||
          (this.angle = t.minRotation.randomFloat(t.maxRotation));
    },
    update: function (t) {
      var e = t * this._deltaInv;
      this.life = this.life > t ? this.life - t : 0;
      var i = this.life / this.startLife,
        n = this.startScale;
      this.startScale > this.endScale
        ? ((n *= i), (n = n < this.endScale ? this.endScale : n))
        : this.startScale < this.endScale &&
          ((n /= i), (n = n > this.endScale ? this.endScale : n)),
        (this.alpha = i),
        (this.vel.x += this.wind * e),
        (this.vel.y += this.gravity * e);
      var r = this.followTrajectory
        ? Math.atan2(this.vel.y, this.vel.x)
        : this.angle;
      return (
        (this.pos.x += this.vel.x * e),
        (this.pos.y += this.vel.y * e),
        this.currentTransform
          .setTransform(n, 0, 0, 0, n, 0, this.pos.x, this.pos.y, 1)
          .rotate(r),
        (this.inViewport || !this.onlyInViewport) && this.life > 0
      );
    },
    draw: function (t) {
      t.save(),
        t.setGlobalAlpha(t.globalAlpha() * this.alpha),
        t.transform(this.currentTransform);
      var e = this.width,
        i = this.height;
      t.drawImage(this.image, 0, 0, e, i, -e / 2, -i / 2, e, i), t.restore();
    },
  }));
