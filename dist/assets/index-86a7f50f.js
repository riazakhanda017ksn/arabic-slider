(function () {
  const n = document.createElement("link").relList;
  if (n && n.supports && n.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) l(r);
  new MutationObserver((r) => {
    for (const i of r)
      if (i.type === "childList")
        for (const a of i.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && l(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(r) {
    const i = {};
    return (
      r.integrity && (i.integrity = r.integrity),
      r.referrerPolicy && (i.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : r.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function l(r) {
    if (r.ep) return;
    r.ep = !0;
    const i = s(r);
    fetch(r.href, i);
  }
})();
var au =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Vo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Uo = { exports: {} },
  Rl = {},
  Qo = { exports: {} },
  D = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ys = Symbol.for("react.element"),
  ou = Symbol.for("react.portal"),
  cu = Symbol.for("react.fragment"),
  du = Symbol.for("react.strict_mode"),
  uu = Symbol.for("react.profiler"),
  hu = Symbol.for("react.provider"),
  mu = Symbol.for("react.context"),
  fu = Symbol.for("react.forward_ref"),
  pu = Symbol.for("react.suspense"),
  xu = Symbol.for("react.memo"),
  vu = Symbol.for("react.lazy"),
  ga = Symbol.iterator;
function gu(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ga && e[ga]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Wo = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ho = Object.assign,
  Ko = {};
function Rt(e, n, s) {
  (this.props = e),
    (this.context = n),
    (this.refs = Ko),
    (this.updater = s || Wo);
}
Rt.prototype.isReactComponent = {};
Rt.prototype.setState = function (e, n) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, n, "setState");
};
Rt.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function qo() {}
qo.prototype = Rt.prototype;
function yi(e, n, s) {
  (this.props = e),
    (this.context = n),
    (this.refs = Ko),
    (this.updater = s || Wo);
}
var Ni = (yi.prototype = new qo());
Ni.constructor = yi;
Ho(Ni, Rt.prototype);
Ni.isPureReactComponent = !0;
var ja = Array.isArray,
  $o = Object.prototype.hasOwnProperty,
  wi = { current: null },
  Yo = { key: !0, ref: !0, __self: !0, __source: !0 };
function Go(e, n, s) {
  var l,
    r = {},
    i = null,
    a = null;
  if (n != null)
    for (l in (n.ref !== void 0 && (a = n.ref),
    n.key !== void 0 && (i = "" + n.key),
    n))
      $o.call(n, l) && !Yo.hasOwnProperty(l) && (r[l] = n[l]);
  var o = arguments.length - 2;
  if (o === 1) r.children = s;
  else if (1 < o) {
    for (var c = Array(o), d = 0; d < o; d++) c[d] = arguments[d + 2];
    r.children = c;
  }
  if (e && e.defaultProps)
    for (l in ((o = e.defaultProps), o)) r[l] === void 0 && (r[l] = o[l]);
  return {
    $$typeof: ys,
    type: e,
    key: i,
    ref: a,
    props: r,
    _owner: wi.current,
  };
}
function ju(e, n) {
  return {
    $$typeof: ys,
    type: e.type,
    key: n,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ki(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ys;
}
function _u(e) {
  var n = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (s) {
      return n[s];
    })
  );
}
var _a = /\/+/g;
function Yl(e, n) {
  return typeof e == "object" && e !== null && e.key != null
    ? _u("" + e.key)
    : n.toString(36);
}
function $s(e, n, s, l, r) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (i) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ys:
          case ou:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (r = r(a)),
      (e = l === "" ? "." + Yl(a, 0) : l),
      ja(r)
        ? ((s = ""),
          e != null && (s = e.replace(_a, "$&/") + "/"),
          $s(r, n, s, "", function (d) {
            return d;
          }))
        : r != null &&
          (ki(r) &&
            (r = ju(
              r,
              s +
                (!r.key || (a && a.key === r.key)
                  ? ""
                  : ("" + r.key).replace(_a, "$&/") + "/") +
                e
            )),
          n.push(r)),
      1
    );
  if (((a = 0), (l = l === "" ? "." : l + ":"), ja(e)))
    for (var o = 0; o < e.length; o++) {
      i = e[o];
      var c = l + Yl(i, o);
      a += $s(i, n, s, c, r);
    }
  else if (((c = gu(e)), typeof c == "function"))
    for (e = c.call(e), o = 0; !(i = e.next()).done; )
      (i = i.value), (c = l + Yl(i, o++)), (a += $s(i, n, s, c, r));
  else if (i === "object")
    throw (
      ((n = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (n === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : n) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return a;
}
function Cs(e, n, s) {
  if (e == null) return e;
  var l = [],
    r = 0;
  return (
    $s(e, l, "", "", function (i) {
      return n.call(s, i, r++);
    }),
    l
  );
}
function yu(e) {
  if (e._status === -1) {
    var n = e._result;
    (n = n()),
      n.then(
        function (s) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = s));
        },
        function (s) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = s));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = n));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ne = { current: null },
  Ys = { transition: null },
  Nu = {
    ReactCurrentDispatcher: Ne,
    ReactCurrentBatchConfig: Ys,
    ReactCurrentOwner: wi,
  };
D.Children = {
  map: Cs,
  forEach: function (e, n, s) {
    Cs(
      e,
      function () {
        n.apply(this, arguments);
      },
      s
    );
  },
  count: function (e) {
    var n = 0;
    return (
      Cs(e, function () {
        n++;
      }),
      n
    );
  },
  toArray: function (e) {
    return (
      Cs(e, function (n) {
        return n;
      }) || []
    );
  },
  only: function (e) {
    if (!ki(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
D.Component = Rt;
D.Fragment = cu;
D.Profiler = uu;
D.PureComponent = yi;
D.StrictMode = du;
D.Suspense = pu;
D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Nu;
D.cloneElement = function (e, n, s) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var l = Ho({}, e.props),
    r = e.key,
    i = e.ref,
    a = e._owner;
  if (n != null) {
    if (
      (n.ref !== void 0 && ((i = n.ref), (a = wi.current)),
      n.key !== void 0 && (r = "" + n.key),
      e.type && e.type.defaultProps)
    )
      var o = e.type.defaultProps;
    for (c in n)
      $o.call(n, c) &&
        !Yo.hasOwnProperty(c) &&
        (l[c] = n[c] === void 0 && o !== void 0 ? o[c] : n[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) l.children = s;
  else if (1 < c) {
    o = Array(c);
    for (var d = 0; d < c; d++) o[d] = arguments[d + 2];
    l.children = o;
  }
  return { $$typeof: ys, type: e.type, key: r, ref: i, props: l, _owner: a };
};
D.createContext = function (e) {
  return (
    (e = {
      $$typeof: mu,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: hu, _context: e }),
    (e.Consumer = e)
  );
};
D.createElement = Go;
D.createFactory = function (e) {
  var n = Go.bind(null, e);
  return (n.type = e), n;
};
D.createRef = function () {
  return { current: null };
};
D.forwardRef = function (e) {
  return { $$typeof: fu, render: e };
};
D.isValidElement = ki;
D.lazy = function (e) {
  return { $$typeof: vu, _payload: { _status: -1, _result: e }, _init: yu };
};
D.memo = function (e, n) {
  return { $$typeof: xu, type: e, compare: n === void 0 ? null : n };
};
D.startTransition = function (e) {
  var n = Ys.transition;
  Ys.transition = {};
  try {
    e();
  } finally {
    Ys.transition = n;
  }
};
D.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
D.useCallback = function (e, n) {
  return Ne.current.useCallback(e, n);
};
D.useContext = function (e) {
  return Ne.current.useContext(e);
};
D.useDebugValue = function () {};
D.useDeferredValue = function (e) {
  return Ne.current.useDeferredValue(e);
};
D.useEffect = function (e, n) {
  return Ne.current.useEffect(e, n);
};
D.useId = function () {
  return Ne.current.useId();
};
D.useImperativeHandle = function (e, n, s) {
  return Ne.current.useImperativeHandle(e, n, s);
};
D.useInsertionEffect = function (e, n) {
  return Ne.current.useInsertionEffect(e, n);
};
D.useLayoutEffect = function (e, n) {
  return Ne.current.useLayoutEffect(e, n);
};
D.useMemo = function (e, n) {
  return Ne.current.useMemo(e, n);
};
D.useReducer = function (e, n, s) {
  return Ne.current.useReducer(e, n, s);
};
D.useRef = function (e) {
  return Ne.current.useRef(e);
};
D.useState = function (e) {
  return Ne.current.useState(e);
};
D.useSyncExternalStore = function (e, n, s) {
  return Ne.current.useSyncExternalStore(e, n, s);
};
D.useTransition = function () {
  return Ne.current.useTransition();
};
D.version = "18.2.0";
Qo.exports = D;
var L = Qo.exports;
const wu = Vo(L);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ku = L,
  Su = Symbol.for("react.element"),
  zu = Symbol.for("react.fragment"),
  Eu = Object.prototype.hasOwnProperty,
  Au = ku.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Cu = { key: !0, ref: !0, __self: !0, __source: !0 };
function Xo(e, n, s) {
  var l,
    r = {},
    i = null,
    a = null;
  s !== void 0 && (i = "" + s),
    n.key !== void 0 && (i = "" + n.key),
    n.ref !== void 0 && (a = n.ref);
  for (l in n) Eu.call(n, l) && !Cu.hasOwnProperty(l) && (r[l] = n[l]);
  if (e && e.defaultProps)
    for (l in ((n = e.defaultProps), n)) r[l] === void 0 && (r[l] = n[l]);
  return {
    $$typeof: Su,
    type: e,
    key: i,
    ref: a,
    props: r,
    _owner: Au.current,
  };
}
Rl.Fragment = zu;
Rl.jsx = Xo;
Rl.jsxs = Xo;
Uo.exports = Rl;
var t = Uo.exports,
  Sr = {},
  Jo = { exports: {} },
  De = {},
  Zo = { exports: {} },
  ec = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function n(A, T) {
    var F = A.length;
    A.push(T);
    e: for (; 0 < F; ) {
      var W = (F - 1) >>> 1,
        q = A[W];
      if (0 < r(q, T)) (A[W] = T), (A[F] = q), (F = W);
      else break e;
    }
  }
  function s(A) {
    return A.length === 0 ? null : A[0];
  }
  function l(A) {
    if (A.length === 0) return null;
    var T = A[0],
      F = A.pop();
    if (F !== T) {
      A[0] = F;
      e: for (var W = 0, q = A.length, je = q >>> 1; W < je; ) {
        var te = 2 * (W + 1) - 1,
          ke = A[te],
          oe = te + 1,
          Z = A[oe];
        if (0 > r(ke, F))
          oe < q && 0 > r(Z, ke)
            ? ((A[W] = Z), (A[oe] = F), (W = oe))
            : ((A[W] = ke), (A[te] = F), (W = te));
        else if (oe < q && 0 > r(Z, F)) (A[W] = Z), (A[oe] = F), (W = oe);
        else break e;
      }
    }
    return T;
  }
  function r(A, T) {
    var F = A.sortIndex - T.sortIndex;
    return F !== 0 ? F : A.id - T.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var a = Date,
      o = a.now();
    e.unstable_now = function () {
      return a.now() - o;
    };
  }
  var c = [],
    d = [],
    x = 1,
    p = null,
    h = 3,
    v = !1,
    g = !1,
    w = !1,
    M = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    u = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function f(A) {
    for (var T = s(d); T !== null; ) {
      if (T.callback === null) l(d);
      else if (T.startTime <= A)
        l(d), (T.sortIndex = T.expirationTime), n(c, T);
      else break;
      T = s(d);
    }
  }
  function _(A) {
    if (((w = !1), f(A), !g))
      if (s(c) !== null) (g = !0), ge(k);
      else {
        var T = s(d);
        T !== null && Be(_, T.startTime - A);
      }
  }
  function k(A, T) {
    (g = !1), w && ((w = !1), m(j), (j = -1)), (v = !0);
    var F = h;
    try {
      for (
        f(T), p = s(c);
        p !== null && (!(p.expirationTime > T) || (A && !E()));

      ) {
        var W = p.callback;
        if (typeof W == "function") {
          (p.callback = null), (h = p.priorityLevel);
          var q = W(p.expirationTime <= T);
          (T = e.unstable_now()),
            typeof q == "function" ? (p.callback = q) : p === s(c) && l(c),
            f(T);
        } else l(c);
        p = s(c);
      }
      if (p !== null) var je = !0;
      else {
        var te = s(d);
        te !== null && Be(_, te.startTime - T), (je = !1);
      }
      return je;
    } finally {
      (p = null), (h = F), (v = !1);
    }
  }
  var z = !1,
    y = null,
    j = -1,
    R = 5,
    b = -1;
  function E() {
    return !(e.unstable_now() - b < R);
  }
  function S() {
    if (y !== null) {
      var A = e.unstable_now();
      b = A;
      var T = !0;
      try {
        T = y(!0, A);
      } finally {
        T ? O() : ((z = !1), (y = null));
      }
    } else z = !1;
  }
  var O;
  if (typeof u == "function")
    O = function () {
      u(S);
    };
  else if (typeof MessageChannel < "u") {
    var P = new MessageChannel(),
      le = P.port2;
    (P.port1.onmessage = S),
      (O = function () {
        le.postMessage(null);
      });
  } else
    O = function () {
      M(S, 0);
    };
  function ge(A) {
    (y = A), z || ((z = !0), O());
  }
  function Be(A, T) {
    j = M(function () {
      A(e.unstable_now());
    }, T);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (A) {
      A.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      g || v || ((g = !0), ge(k));
    }),
    (e.unstable_forceFrameRate = function (A) {
      0 > A || 125 < A
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (R = 0 < A ? Math.floor(1e3 / A) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return s(c);
    }),
    (e.unstable_next = function (A) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var T = 3;
          break;
        default:
          T = h;
      }
      var F = h;
      h = T;
      try {
        return A();
      } finally {
        h = F;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (A, T) {
      switch (A) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          A = 3;
      }
      var F = h;
      h = A;
      try {
        return T();
      } finally {
        h = F;
      }
    }),
    (e.unstable_scheduleCallback = function (A, T, F) {
      var W = e.unstable_now();
      switch (
        (typeof F == "object" && F !== null
          ? ((F = F.delay), (F = typeof F == "number" && 0 < F ? W + F : W))
          : (F = W),
        A)
      ) {
        case 1:
          var q = -1;
          break;
        case 2:
          q = 250;
          break;
        case 5:
          q = 1073741823;
          break;
        case 4:
          q = 1e4;
          break;
        default:
          q = 5e3;
      }
      return (
        (q = F + q),
        (A = {
          id: x++,
          callback: T,
          priorityLevel: A,
          startTime: F,
          expirationTime: q,
          sortIndex: -1,
        }),
        F > W
          ? ((A.sortIndex = F),
            n(d, A),
            s(c) === null &&
              A === s(d) &&
              (w ? (m(j), (j = -1)) : (w = !0), Be(_, F - W)))
          : ((A.sortIndex = q), n(c, A), g || v || ((g = !0), ge(k))),
        A
      );
    }),
    (e.unstable_shouldYield = E),
    (e.unstable_wrapCallback = function (A) {
      var T = h;
      return function () {
        var F = h;
        h = T;
        try {
          return A.apply(this, arguments);
        } finally {
          h = F;
        }
      };
    });
})(ec);
Zo.exports = ec;
var bu = Zo.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nc = L,
  Oe = bu;
function N(e) {
  for (
    var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, s = 1;
    s < arguments.length;
    s++
  )
    n += "&args[]=" + encodeURIComponent(arguments[s]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    n +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var tc = new Set(),
  ss = {};
function tt(e, n) {
  St(e, n), St(e + "Capture", n);
}
function St(e, n) {
  for (ss[e] = n, e = 0; e < n.length; e++) tc.add(n[e]);
}
var fn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  zr = Object.prototype.hasOwnProperty,
  Pu =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ya = {},
  Na = {};
function Tu(e) {
  return zr.call(Na, e)
    ? !0
    : zr.call(ya, e)
    ? !1
    : Pu.test(e)
    ? (Na[e] = !0)
    : ((ya[e] = !0), !1);
}
function Ru(e, n, s, l) {
  if (s !== null && s.type === 0) return !1;
  switch (typeof n) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return l
        ? !1
        : s !== null
        ? !s.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Lu(e, n, s, l) {
  if (n === null || typeof n > "u" || Ru(e, n, s, l)) return !0;
  if (l) return !1;
  if (s !== null)
    switch (s.type) {
      case 3:
        return !n;
      case 4:
        return n === !1;
      case 5:
        return isNaN(n);
      case 6:
        return isNaN(n) || 1 > n;
    }
  return !1;
}
function we(e, n, s, l, r, i, a) {
  (this.acceptsBooleans = n === 2 || n === 3 || n === 4),
    (this.attributeName = l),
    (this.attributeNamespace = r),
    (this.mustUseProperty = s),
    (this.propertyName = e),
    (this.type = n),
    (this.sanitizeURL = i),
    (this.removeEmptyString = a);
}
var me = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    me[e] = new we(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var n = e[0];
  me[n] = new we(n, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  me[e] = new we(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  me[e] = new we(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    me[e] = new we(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  me[e] = new we(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  me[e] = new we(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  me[e] = new we(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  me[e] = new we(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Si = /[\-:]([a-z])/g;
function zi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var n = e.replace(Si, zi);
    me[n] = new we(n, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var n = e.replace(Si, zi);
    me[n] = new we(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var n = e.replace(Si, zi);
  me[n] = new we(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  me[e] = new we(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
me.xlinkHref = new we(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  me[e] = new we(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ei(e, n, s, l) {
  var r = me.hasOwnProperty(n) ? me[n] : null;
  (r !== null
    ? r.type !== 0
    : l ||
      !(2 < n.length) ||
      (n[0] !== "o" && n[0] !== "O") ||
      (n[1] !== "n" && n[1] !== "N")) &&
    (Lu(n, s, r, l) && (s = null),
    l || r === null
      ? Tu(n) && (s === null ? e.removeAttribute(n) : e.setAttribute(n, "" + s))
      : r.mustUseProperty
      ? (e[r.propertyName] = s === null ? (r.type === 3 ? !1 : "") : s)
      : ((n = r.attributeName),
        (l = r.attributeNamespace),
        s === null
          ? e.removeAttribute(n)
          : ((r = r.type),
            (s = r === 3 || (r === 4 && s === !0) ? "" : "" + s),
            l ? e.setAttributeNS(l, n, s) : e.setAttribute(n, s))));
}
var gn = nc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  bs = Symbol.for("react.element"),
  it = Symbol.for("react.portal"),
  at = Symbol.for("react.fragment"),
  Ai = Symbol.for("react.strict_mode"),
  Er = Symbol.for("react.profiler"),
  sc = Symbol.for("react.provider"),
  lc = Symbol.for("react.context"),
  Ci = Symbol.for("react.forward_ref"),
  Ar = Symbol.for("react.suspense"),
  Cr = Symbol.for("react.suspense_list"),
  bi = Symbol.for("react.memo"),
  wn = Symbol.for("react.lazy"),
  rc = Symbol.for("react.offscreen"),
  wa = Symbol.iterator;
function Mt(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (wa && e[wa]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var J = Object.assign,
  Gl;
function Wt(e) {
  if (Gl === void 0)
    try {
      throw Error();
    } catch (s) {
      var n = s.stack.trim().match(/\n( *(at )?)/);
      Gl = (n && n[1]) || "";
    }
  return (
    `
` +
    Gl +
    e
  );
}
var Xl = !1;
function Jl(e, n) {
  if (!e || Xl) return "";
  Xl = !0;
  var s = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (n)
      if (
        ((n = function () {
          throw Error();
        }),
        Object.defineProperty(n.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(n, []);
        } catch (d) {
          var l = d;
        }
        Reflect.construct(e, [], n);
      } else {
        try {
          n.call();
        } catch (d) {
          l = d;
        }
        e.call(n.prototype);
      }
    else {
      try {
        throw Error();
      } catch (d) {
        l = d;
      }
      e();
    }
  } catch (d) {
    if (d && l && typeof d.stack == "string") {
      for (
        var r = d.stack.split(`
`),
          i = l.stack.split(`
`),
          a = r.length - 1,
          o = i.length - 1;
        1 <= a && 0 <= o && r[a] !== i[o];

      )
        o--;
      for (; 1 <= a && 0 <= o; a--, o--)
        if (r[a] !== i[o]) {
          if (a !== 1 || o !== 1)
            do
              if ((a--, o--, 0 > o || r[a] !== i[o])) {
                var c =
                  `
` + r[a].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    c.includes("<anonymous>") &&
                    (c = c.replace("<anonymous>", e.displayName)),
                  c
                );
              }
            while (1 <= a && 0 <= o);
          break;
        }
    }
  } finally {
    (Xl = !1), (Error.prepareStackTrace = s);
  }
  return (e = e ? e.displayName || e.name : "") ? Wt(e) : "";
}
function Fu(e) {
  switch (e.tag) {
    case 5:
      return Wt(e.type);
    case 16:
      return Wt("Lazy");
    case 13:
      return Wt("Suspense");
    case 19:
      return Wt("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Jl(e.type, !1)), e;
    case 11:
      return (e = Jl(e.type.render, !1)), e;
    case 1:
      return (e = Jl(e.type, !0)), e;
    default:
      return "";
  }
}
function br(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case at:
      return "Fragment";
    case it:
      return "Portal";
    case Er:
      return "Profiler";
    case Ai:
      return "StrictMode";
    case Ar:
      return "Suspense";
    case Cr:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case lc:
        return (e.displayName || "Context") + ".Consumer";
      case sc:
        return (e._context.displayName || "Context") + ".Provider";
      case Ci:
        var n = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = n.displayName || n.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case bi:
        return (
          (n = e.displayName || null), n !== null ? n : br(e.type) || "Memo"
        );
      case wn:
        (n = e._payload), (e = e._init);
        try {
          return br(e(n));
        } catch {}
    }
  return null;
}
function Mu(e) {
  var n = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (n.displayName || "Context") + ".Consumer";
    case 10:
      return (n._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = n.render),
        (e = e.displayName || e.name || ""),
        n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return n;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return br(n);
    case 8:
      return n === Ai ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof n == "function") return n.displayName || n.name || null;
      if (typeof n == "string") return n;
  }
  return null;
}
function Dn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function ic(e) {
  var n = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (n === "checkbox" || n === "radio")
  );
}
function Ou(e) {
  var n = ic(e) ? "checked" : "value",
    s = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
    l = "" + e[n];
  if (
    !e.hasOwnProperty(n) &&
    typeof s < "u" &&
    typeof s.get == "function" &&
    typeof s.set == "function"
  ) {
    var r = s.get,
      i = s.set;
    return (
      Object.defineProperty(e, n, {
        configurable: !0,
        get: function () {
          return r.call(this);
        },
        set: function (a) {
          (l = "" + a), i.call(this, a);
        },
      }),
      Object.defineProperty(e, n, { enumerable: s.enumerable }),
      {
        getValue: function () {
          return l;
        },
        setValue: function (a) {
          l = "" + a;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[n];
        },
      }
    );
  }
}
function Ps(e) {
  e._valueTracker || (e._valueTracker = Ou(e));
}
function ac(e) {
  if (!e) return !1;
  var n = e._valueTracker;
  if (!n) return !0;
  var s = n.getValue(),
    l = "";
  return (
    e && (l = ic(e) ? (e.checked ? "true" : "false") : e.value),
    (e = l),
    e !== s ? (n.setValue(e), !0) : !1
  );
}
function al(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Pr(e, n) {
  var s = n.checked;
  return J({}, n, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: s ?? e._wrapperState.initialChecked,
  });
}
function ka(e, n) {
  var s = n.defaultValue == null ? "" : n.defaultValue,
    l = n.checked != null ? n.checked : n.defaultChecked;
  (s = Dn(n.value != null ? n.value : s)),
    (e._wrapperState = {
      initialChecked: l,
      initialValue: s,
      controlled:
        n.type === "checkbox" || n.type === "radio"
          ? n.checked != null
          : n.value != null,
    });
}
function oc(e, n) {
  (n = n.checked), n != null && Ei(e, "checked", n, !1);
}
function Tr(e, n) {
  oc(e, n);
  var s = Dn(n.value),
    l = n.type;
  if (s != null)
    l === "number"
      ? ((s === 0 && e.value === "") || e.value != s) && (e.value = "" + s)
      : e.value !== "" + s && (e.value = "" + s);
  else if (l === "submit" || l === "reset") {
    e.removeAttribute("value");
    return;
  }
  n.hasOwnProperty("value")
    ? Rr(e, n.type, s)
    : n.hasOwnProperty("defaultValue") && Rr(e, n.type, Dn(n.defaultValue)),
    n.checked == null &&
      n.defaultChecked != null &&
      (e.defaultChecked = !!n.defaultChecked);
}
function Sa(e, n, s) {
  if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
    var l = n.type;
    if (
      !(
        (l !== "submit" && l !== "reset") ||
        (n.value !== void 0 && n.value !== null)
      )
    )
      return;
    (n = "" + e._wrapperState.initialValue),
      s || n === e.value || (e.value = n),
      (e.defaultValue = n);
  }
  (s = e.name),
    s !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    s !== "" && (e.name = s);
}
function Rr(e, n, s) {
  (n !== "number" || al(e.ownerDocument) !== e) &&
    (s == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + s && (e.defaultValue = "" + s));
}
var Ht = Array.isArray;
function gt(e, n, s, l) {
  if (((e = e.options), n)) {
    n = {};
    for (var r = 0; r < s.length; r++) n["$" + s[r]] = !0;
    for (s = 0; s < e.length; s++)
      (r = n.hasOwnProperty("$" + e[s].value)),
        e[s].selected !== r && (e[s].selected = r),
        r && l && (e[s].defaultSelected = !0);
  } else {
    for (s = "" + Dn(s), n = null, r = 0; r < e.length; r++) {
      if (e[r].value === s) {
        (e[r].selected = !0), l && (e[r].defaultSelected = !0);
        return;
      }
      n !== null || e[r].disabled || (n = e[r]);
    }
    n !== null && (n.selected = !0);
  }
}
function Lr(e, n) {
  if (n.dangerouslySetInnerHTML != null) throw Error(N(91));
  return J({}, n, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function za(e, n) {
  var s = n.value;
  if (s == null) {
    if (((s = n.children), (n = n.defaultValue), s != null)) {
      if (n != null) throw Error(N(92));
      if (Ht(s)) {
        if (1 < s.length) throw Error(N(93));
        s = s[0];
      }
      n = s;
    }
    n == null && (n = ""), (s = n);
  }
  e._wrapperState = { initialValue: Dn(s) };
}
function cc(e, n) {
  var s = Dn(n.value),
    l = Dn(n.defaultValue);
  s != null &&
    ((s = "" + s),
    s !== e.value && (e.value = s),
    n.defaultValue == null && e.defaultValue !== s && (e.defaultValue = s)),
    l != null && (e.defaultValue = "" + l);
}
function Ea(e) {
  var n = e.textContent;
  n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
}
function dc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Fr(e, n) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? dc(n)
    : e === "http://www.w3.org/2000/svg" && n === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Ts,
  uc = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (n, s, l, r) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(n, s, l, r);
          });
        }
      : e;
  })(function (e, n) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = n;
    else {
      for (
        Ts = Ts || document.createElement("div"),
          Ts.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>",
          n = Ts.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; n.firstChild; ) e.appendChild(n.firstChild);
    }
  });
function ls(e, n) {
  if (n) {
    var s = e.firstChild;
    if (s && s === e.lastChild && s.nodeType === 3) {
      s.nodeValue = n;
      return;
    }
  }
  e.textContent = n;
}
var $t = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Du = ["Webkit", "ms", "Moz", "O"];
Object.keys($t).forEach(function (e) {
  Du.forEach(function (n) {
    (n = n + e.charAt(0).toUpperCase() + e.substring(1)), ($t[n] = $t[e]);
  });
});
function hc(e, n, s) {
  return n == null || typeof n == "boolean" || n === ""
    ? ""
    : s || typeof n != "number" || n === 0 || ($t.hasOwnProperty(e) && $t[e])
    ? ("" + n).trim()
    : n + "px";
}
function mc(e, n) {
  e = e.style;
  for (var s in n)
    if (n.hasOwnProperty(s)) {
      var l = s.indexOf("--") === 0,
        r = hc(s, n[s], l);
      s === "float" && (s = "cssFloat"), l ? e.setProperty(s, r) : (e[s] = r);
    }
}
var Iu = J(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Mr(e, n) {
  if (n) {
    if (Iu[e] && (n.children != null || n.dangerouslySetInnerHTML != null))
      throw Error(N(137, e));
    if (n.dangerouslySetInnerHTML != null) {
      if (n.children != null) throw Error(N(60));
      if (
        typeof n.dangerouslySetInnerHTML != "object" ||
        !("__html" in n.dangerouslySetInnerHTML)
      )
        throw Error(N(61));
    }
    if (n.style != null && typeof n.style != "object") throw Error(N(62));
  }
}
function Or(e, n) {
  if (e.indexOf("-") === -1) return typeof n.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Dr = null;
function Pi(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ir = null,
  jt = null,
  _t = null;
function Aa(e) {
  if ((e = ks(e))) {
    if (typeof Ir != "function") throw Error(N(280));
    var n = e.stateNode;
    n && ((n = Dl(n)), Ir(e.stateNode, e.type, n));
  }
}
function fc(e) {
  jt ? (_t ? _t.push(e) : (_t = [e])) : (jt = e);
}
function pc() {
  if (jt) {
    var e = jt,
      n = _t;
    if (((_t = jt = null), Aa(e), n)) for (e = 0; e < n.length; e++) Aa(n[e]);
  }
}
function xc(e, n) {
  return e(n);
}
function vc() {}
var Zl = !1;
function gc(e, n, s) {
  if (Zl) return e(n, s);
  Zl = !0;
  try {
    return xc(e, n, s);
  } finally {
    (Zl = !1), (jt !== null || _t !== null) && (vc(), pc());
  }
}
function rs(e, n) {
  var s = e.stateNode;
  if (s === null) return null;
  var l = Dl(s);
  if (l === null) return null;
  s = l[n];
  e: switch (n) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (l = !l.disabled) ||
        ((e = e.type),
        (l = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !l);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (s && typeof s != "function") throw Error(N(231, n, typeof s));
  return s;
}
var Br = !1;
if (fn)
  try {
    var Ot = {};
    Object.defineProperty(Ot, "passive", {
      get: function () {
        Br = !0;
      },
    }),
      window.addEventListener("test", Ot, Ot),
      window.removeEventListener("test", Ot, Ot);
  } catch {
    Br = !1;
  }
function Bu(e, n, s, l, r, i, a, o, c) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    n.apply(s, d);
  } catch (x) {
    this.onError(x);
  }
}
var Yt = !1,
  ol = null,
  cl = !1,
  Vr = null,
  Vu = {
    onError: function (e) {
      (Yt = !0), (ol = e);
    },
  };
function Uu(e, n, s, l, r, i, a, o, c) {
  (Yt = !1), (ol = null), Bu.apply(Vu, arguments);
}
function Qu(e, n, s, l, r, i, a, o, c) {
  if ((Uu.apply(this, arguments), Yt)) {
    if (Yt) {
      var d = ol;
      (Yt = !1), (ol = null);
    } else throw Error(N(198));
    cl || ((cl = !0), (Vr = d));
  }
}
function st(e) {
  var n = e,
    s = e;
  if (e.alternate) for (; n.return; ) n = n.return;
  else {
    e = n;
    do (n = e), n.flags & 4098 && (s = n.return), (e = n.return);
    while (e);
  }
  return n.tag === 3 ? s : null;
}
function jc(e) {
  if (e.tag === 13) {
    var n = e.memoizedState;
    if (
      (n === null && ((e = e.alternate), e !== null && (n = e.memoizedState)),
      n !== null)
    )
      return n.dehydrated;
  }
  return null;
}
function Ca(e) {
  if (st(e) !== e) throw Error(N(188));
}
function Wu(e) {
  var n = e.alternate;
  if (!n) {
    if (((n = st(e)), n === null)) throw Error(N(188));
    return n !== e ? null : e;
  }
  for (var s = e, l = n; ; ) {
    var r = s.return;
    if (r === null) break;
    var i = r.alternate;
    if (i === null) {
      if (((l = r.return), l !== null)) {
        s = l;
        continue;
      }
      break;
    }
    if (r.child === i.child) {
      for (i = r.child; i; ) {
        if (i === s) return Ca(r), e;
        if (i === l) return Ca(r), n;
        i = i.sibling;
      }
      throw Error(N(188));
    }
    if (s.return !== l.return) (s = r), (l = i);
    else {
      for (var a = !1, o = r.child; o; ) {
        if (o === s) {
          (a = !0), (s = r), (l = i);
          break;
        }
        if (o === l) {
          (a = !0), (l = r), (s = i);
          break;
        }
        o = o.sibling;
      }
      if (!a) {
        for (o = i.child; o; ) {
          if (o === s) {
            (a = !0), (s = i), (l = r);
            break;
          }
          if (o === l) {
            (a = !0), (l = i), (s = r);
            break;
          }
          o = o.sibling;
        }
        if (!a) throw Error(N(189));
      }
    }
    if (s.alternate !== l) throw Error(N(190));
  }
  if (s.tag !== 3) throw Error(N(188));
  return s.stateNode.current === s ? e : n;
}
function _c(e) {
  return (e = Wu(e)), e !== null ? yc(e) : null;
}
function yc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var n = yc(e);
    if (n !== null) return n;
    e = e.sibling;
  }
  return null;
}
var Nc = Oe.unstable_scheduleCallback,
  ba = Oe.unstable_cancelCallback,
  Hu = Oe.unstable_shouldYield,
  Ku = Oe.unstable_requestPaint,
  ne = Oe.unstable_now,
  qu = Oe.unstable_getCurrentPriorityLevel,
  Ti = Oe.unstable_ImmediatePriority,
  wc = Oe.unstable_UserBlockingPriority,
  dl = Oe.unstable_NormalPriority,
  $u = Oe.unstable_LowPriority,
  kc = Oe.unstable_IdlePriority,
  Ll = null,
  sn = null;
function Yu(e) {
  if (sn && typeof sn.onCommitFiberRoot == "function")
    try {
      sn.onCommitFiberRoot(Ll, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Xe = Math.clz32 ? Math.clz32 : Ju,
  Gu = Math.log,
  Xu = Math.LN2;
function Ju(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Gu(e) / Xu) | 0)) | 0;
}
var Rs = 64,
  Ls = 4194304;
function Kt(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ul(e, n) {
  var s = e.pendingLanes;
  if (s === 0) return 0;
  var l = 0,
    r = e.suspendedLanes,
    i = e.pingedLanes,
    a = s & 268435455;
  if (a !== 0) {
    var o = a & ~r;
    o !== 0 ? (l = Kt(o)) : ((i &= a), i !== 0 && (l = Kt(i)));
  } else (a = s & ~r), a !== 0 ? (l = Kt(a)) : i !== 0 && (l = Kt(i));
  if (l === 0) return 0;
  if (
    n !== 0 &&
    n !== l &&
    !(n & r) &&
    ((r = l & -l), (i = n & -n), r >= i || (r === 16 && (i & 4194240) !== 0))
  )
    return n;
  if ((l & 4 && (l |= s & 16), (n = e.entangledLanes), n !== 0))
    for (e = e.entanglements, n &= l; 0 < n; )
      (s = 31 - Xe(n)), (r = 1 << s), (l |= e[s]), (n &= ~r);
  return l;
}
function Zu(e, n) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return n + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return n + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function eh(e, n) {
  for (
    var s = e.suspendedLanes,
      l = e.pingedLanes,
      r = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var a = 31 - Xe(i),
      o = 1 << a,
      c = r[a];
    c === -1
      ? (!(o & s) || o & l) && (r[a] = Zu(o, n))
      : c <= n && (e.expiredLanes |= o),
      (i &= ~o);
  }
}
function Ur(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Sc() {
  var e = Rs;
  return (Rs <<= 1), !(Rs & 4194240) && (Rs = 64), e;
}
function er(e) {
  for (var n = [], s = 0; 31 > s; s++) n.push(e);
  return n;
}
function Ns(e, n, s) {
  (e.pendingLanes |= n),
    n !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (n = 31 - Xe(n)),
    (e[n] = s);
}
function nh(e, n) {
  var s = e.pendingLanes & ~n;
  (e.pendingLanes = n),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= n),
    (e.mutableReadLanes &= n),
    (e.entangledLanes &= n),
    (n = e.entanglements);
  var l = e.eventTimes;
  for (e = e.expirationTimes; 0 < s; ) {
    var r = 31 - Xe(s),
      i = 1 << r;
    (n[r] = 0), (l[r] = -1), (e[r] = -1), (s &= ~i);
  }
}
function Ri(e, n) {
  var s = (e.entangledLanes |= n);
  for (e = e.entanglements; s; ) {
    var l = 31 - Xe(s),
      r = 1 << l;
    (r & n) | (e[l] & n) && (e[l] |= n), (s &= ~r);
  }
}
var V = 0;
function zc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Ec,
  Li,
  Ac,
  Cc,
  bc,
  Qr = !1,
  Fs = [],
  Cn = null,
  bn = null,
  Pn = null,
  is = new Map(),
  as = new Map(),
  Sn = [],
  th =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Pa(e, n) {
  switch (e) {
    case "focusin":
    case "focusout":
      Cn = null;
      break;
    case "dragenter":
    case "dragleave":
      bn = null;
      break;
    case "mouseover":
    case "mouseout":
      Pn = null;
      break;
    case "pointerover":
    case "pointerout":
      is.delete(n.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      as.delete(n.pointerId);
  }
}
function Dt(e, n, s, l, r, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: n,
        domEventName: s,
        eventSystemFlags: l,
        nativeEvent: i,
        targetContainers: [r],
      }),
      n !== null && ((n = ks(n)), n !== null && Li(n)),
      e)
    : ((e.eventSystemFlags |= l),
      (n = e.targetContainers),
      r !== null && n.indexOf(r) === -1 && n.push(r),
      e);
}
function sh(e, n, s, l, r) {
  switch (n) {
    case "focusin":
      return (Cn = Dt(Cn, e, n, s, l, r)), !0;
    case "dragenter":
      return (bn = Dt(bn, e, n, s, l, r)), !0;
    case "mouseover":
      return (Pn = Dt(Pn, e, n, s, l, r)), !0;
    case "pointerover":
      var i = r.pointerId;
      return is.set(i, Dt(is.get(i) || null, e, n, s, l, r)), !0;
    case "gotpointercapture":
      return (
        (i = r.pointerId), as.set(i, Dt(as.get(i) || null, e, n, s, l, r)), !0
      );
  }
  return !1;
}
function Pc(e) {
  var n = Hn(e.target);
  if (n !== null) {
    var s = st(n);
    if (s !== null) {
      if (((n = s.tag), n === 13)) {
        if (((n = jc(s)), n !== null)) {
          (e.blockedOn = n),
            bc(e.priority, function () {
              Ac(s);
            });
          return;
        }
      } else if (n === 3 && s.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = s.tag === 3 ? s.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Gs(e) {
  if (e.blockedOn !== null) return !1;
  for (var n = e.targetContainers; 0 < n.length; ) {
    var s = Wr(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
    if (s === null) {
      s = e.nativeEvent;
      var l = new s.constructor(s.type, s);
      (Dr = l), s.target.dispatchEvent(l), (Dr = null);
    } else return (n = ks(s)), n !== null && Li(n), (e.blockedOn = s), !1;
    n.shift();
  }
  return !0;
}
function Ta(e, n, s) {
  Gs(e) && s.delete(n);
}
function lh() {
  (Qr = !1),
    Cn !== null && Gs(Cn) && (Cn = null),
    bn !== null && Gs(bn) && (bn = null),
    Pn !== null && Gs(Pn) && (Pn = null),
    is.forEach(Ta),
    as.forEach(Ta);
}
function It(e, n) {
  e.blockedOn === n &&
    ((e.blockedOn = null),
    Qr ||
      ((Qr = !0),
      Oe.unstable_scheduleCallback(Oe.unstable_NormalPriority, lh)));
}
function os(e) {
  function n(r) {
    return It(r, e);
  }
  if (0 < Fs.length) {
    It(Fs[0], e);
    for (var s = 1; s < Fs.length; s++) {
      var l = Fs[s];
      l.blockedOn === e && (l.blockedOn = null);
    }
  }
  for (
    Cn !== null && It(Cn, e),
      bn !== null && It(bn, e),
      Pn !== null && It(Pn, e),
      is.forEach(n),
      as.forEach(n),
      s = 0;
    s < Sn.length;
    s++
  )
    (l = Sn[s]), l.blockedOn === e && (l.blockedOn = null);
  for (; 0 < Sn.length && ((s = Sn[0]), s.blockedOn === null); )
    Pc(s), s.blockedOn === null && Sn.shift();
}
var yt = gn.ReactCurrentBatchConfig,
  hl = !0;
function rh(e, n, s, l) {
  var r = V,
    i = yt.transition;
  yt.transition = null;
  try {
    (V = 1), Fi(e, n, s, l);
  } finally {
    (V = r), (yt.transition = i);
  }
}
function ih(e, n, s, l) {
  var r = V,
    i = yt.transition;
  yt.transition = null;
  try {
    (V = 4), Fi(e, n, s, l);
  } finally {
    (V = r), (yt.transition = i);
  }
}
function Fi(e, n, s, l) {
  if (hl) {
    var r = Wr(e, n, s, l);
    if (r === null) dr(e, n, l, ml, s), Pa(e, l);
    else if (sh(r, e, n, s, l)) l.stopPropagation();
    else if ((Pa(e, l), n & 4 && -1 < th.indexOf(e))) {
      for (; r !== null; ) {
        var i = ks(r);
        if (
          (i !== null && Ec(i),
          (i = Wr(e, n, s, l)),
          i === null && dr(e, n, l, ml, s),
          i === r)
        )
          break;
        r = i;
      }
      r !== null && l.stopPropagation();
    } else dr(e, n, l, null, s);
  }
}
var ml = null;
function Wr(e, n, s, l) {
  if (((ml = null), (e = Pi(l)), (e = Hn(e)), e !== null))
    if (((n = st(e)), n === null)) e = null;
    else if (((s = n.tag), s === 13)) {
      if (((e = jc(n)), e !== null)) return e;
      e = null;
    } else if (s === 3) {
      if (n.stateNode.current.memoizedState.isDehydrated)
        return n.tag === 3 ? n.stateNode.containerInfo : null;
      e = null;
    } else n !== e && (e = null);
  return (ml = e), null;
}
function Tc(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (qu()) {
        case Ti:
          return 1;
        case wc:
          return 4;
        case dl:
        case $u:
          return 16;
        case kc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var En = null,
  Mi = null,
  Xs = null;
function Rc() {
  if (Xs) return Xs;
  var e,
    n = Mi,
    s = n.length,
    l,
    r = "value" in En ? En.value : En.textContent,
    i = r.length;
  for (e = 0; e < s && n[e] === r[e]; e++);
  var a = s - e;
  for (l = 1; l <= a && n[s - l] === r[i - l]; l++);
  return (Xs = r.slice(e, 1 < l ? 1 - l : void 0));
}
function Js(e) {
  var n = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && n === 13 && (e = 13))
      : (e = n),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ms() {
  return !0;
}
function Ra() {
  return !1;
}
function Ie(e) {
  function n(s, l, r, i, a) {
    (this._reactName = s),
      (this._targetInst = r),
      (this.type = l),
      (this.nativeEvent = i),
      (this.target = a),
      (this.currentTarget = null);
    for (var o in e)
      e.hasOwnProperty(o) && ((s = e[o]), (this[o] = s ? s(i) : i[o]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Ms
        : Ra),
      (this.isPropagationStopped = Ra),
      this
    );
  }
  return (
    J(n.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var s = this.nativeEvent;
        s &&
          (s.preventDefault
            ? s.preventDefault()
            : typeof s.returnValue != "unknown" && (s.returnValue = !1),
          (this.isDefaultPrevented = Ms));
      },
      stopPropagation: function () {
        var s = this.nativeEvent;
        s &&
          (s.stopPropagation
            ? s.stopPropagation()
            : typeof s.cancelBubble != "unknown" && (s.cancelBubble = !0),
          (this.isPropagationStopped = Ms));
      },
      persist: function () {},
      isPersistent: Ms,
    }),
    n
  );
}
var Lt = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Oi = Ie(Lt),
  ws = J({}, Lt, { view: 0, detail: 0 }),
  ah = Ie(ws),
  nr,
  tr,
  Bt,
  Fl = J({}, ws, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Di,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Bt &&
            (Bt && e.type === "mousemove"
              ? ((nr = e.screenX - Bt.screenX), (tr = e.screenY - Bt.screenY))
              : (tr = nr = 0),
            (Bt = e)),
          nr);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : tr;
    },
  }),
  La = Ie(Fl),
  oh = J({}, Fl, { dataTransfer: 0 }),
  ch = Ie(oh),
  dh = J({}, ws, { relatedTarget: 0 }),
  sr = Ie(dh),
  uh = J({}, Lt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  hh = Ie(uh),
  mh = J({}, Lt, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  fh = Ie(mh),
  ph = J({}, Lt, { data: 0 }),
  Fa = Ie(ph),
  xh = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  vh = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  gh = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function jh(e) {
  var n = this.nativeEvent;
  return n.getModifierState ? n.getModifierState(e) : (e = gh[e]) ? !!n[e] : !1;
}
function Di() {
  return jh;
}
var _h = J({}, ws, {
    key: function (e) {
      if (e.key) {
        var n = xh[e.key] || e.key;
        if (n !== "Unidentified") return n;
      }
      return e.type === "keypress"
        ? ((e = Js(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? vh[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Di,
    charCode: function (e) {
      return e.type === "keypress" ? Js(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Js(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  yh = Ie(_h),
  Nh = J({}, Fl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Ma = Ie(Nh),
  wh = J({}, ws, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Di,
  }),
  kh = Ie(wh),
  Sh = J({}, Lt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  zh = Ie(Sh),
  Eh = J({}, Fl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Ah = Ie(Eh),
  Ch = [9, 13, 27, 32],
  Ii = fn && "CompositionEvent" in window,
  Gt = null;
fn && "documentMode" in document && (Gt = document.documentMode);
var bh = fn && "TextEvent" in window && !Gt,
  Lc = fn && (!Ii || (Gt && 8 < Gt && 11 >= Gt)),
  Oa = String.fromCharCode(32),
  Da = !1;
function Fc(e, n) {
  switch (e) {
    case "keyup":
      return Ch.indexOf(n.keyCode) !== -1;
    case "keydown":
      return n.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Mc(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var ot = !1;
function Ph(e, n) {
  switch (e) {
    case "compositionend":
      return Mc(n);
    case "keypress":
      return n.which !== 32 ? null : ((Da = !0), Oa);
    case "textInput":
      return (e = n.data), e === Oa && Da ? null : e;
    default:
      return null;
  }
}
function Th(e, n) {
  if (ot)
    return e === "compositionend" || (!Ii && Fc(e, n))
      ? ((e = Rc()), (Xs = Mi = En = null), (ot = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
        if (n.char && 1 < n.char.length) return n.char;
        if (n.which) return String.fromCharCode(n.which);
      }
      return null;
    case "compositionend":
      return Lc && n.locale !== "ko" ? null : n.data;
    default:
      return null;
  }
}
var Rh = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Ia(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return n === "input" ? !!Rh[e.type] : n === "textarea";
}
function Oc(e, n, s, l) {
  fc(l),
    (n = fl(n, "onChange")),
    0 < n.length &&
      ((s = new Oi("onChange", "change", null, s, l)),
      e.push({ event: s, listeners: n }));
}
var Xt = null,
  cs = null;
function Lh(e) {
  $c(e, 0);
}
function Ml(e) {
  var n = ut(e);
  if (ac(n)) return e;
}
function Fh(e, n) {
  if (e === "change") return n;
}
var Dc = !1;
if (fn) {
  var lr;
  if (fn) {
    var rr = "oninput" in document;
    if (!rr) {
      var Ba = document.createElement("div");
      Ba.setAttribute("oninput", "return;"),
        (rr = typeof Ba.oninput == "function");
    }
    lr = rr;
  } else lr = !1;
  Dc = lr && (!document.documentMode || 9 < document.documentMode);
}
function Va() {
  Xt && (Xt.detachEvent("onpropertychange", Ic), (cs = Xt = null));
}
function Ic(e) {
  if (e.propertyName === "value" && Ml(cs)) {
    var n = [];
    Oc(n, cs, e, Pi(e)), gc(Lh, n);
  }
}
function Mh(e, n, s) {
  e === "focusin"
    ? (Va(), (Xt = n), (cs = s), Xt.attachEvent("onpropertychange", Ic))
    : e === "focusout" && Va();
}
function Oh(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ml(cs);
}
function Dh(e, n) {
  if (e === "click") return Ml(n);
}
function Ih(e, n) {
  if (e === "input" || e === "change") return Ml(n);
}
function Bh(e, n) {
  return (e === n && (e !== 0 || 1 / e === 1 / n)) || (e !== e && n !== n);
}
var Ze = typeof Object.is == "function" ? Object.is : Bh;
function ds(e, n) {
  if (Ze(e, n)) return !0;
  if (typeof e != "object" || e === null || typeof n != "object" || n === null)
    return !1;
  var s = Object.keys(e),
    l = Object.keys(n);
  if (s.length !== l.length) return !1;
  for (l = 0; l < s.length; l++) {
    var r = s[l];
    if (!zr.call(n, r) || !Ze(e[r], n[r])) return !1;
  }
  return !0;
}
function Ua(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Qa(e, n) {
  var s = Ua(e);
  e = 0;
  for (var l; s; ) {
    if (s.nodeType === 3) {
      if (((l = e + s.textContent.length), e <= n && l >= n))
        return { node: s, offset: n - e };
      e = l;
    }
    e: {
      for (; s; ) {
        if (s.nextSibling) {
          s = s.nextSibling;
          break e;
        }
        s = s.parentNode;
      }
      s = void 0;
    }
    s = Ua(s);
  }
}
function Bc(e, n) {
  return e && n
    ? e === n
      ? !0
      : e && e.nodeType === 3
      ? !1
      : n && n.nodeType === 3
      ? Bc(e, n.parentNode)
      : "contains" in e
      ? e.contains(n)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(n) & 16)
      : !1
    : !1;
}
function Vc() {
  for (var e = window, n = al(); n instanceof e.HTMLIFrameElement; ) {
    try {
      var s = typeof n.contentWindow.location.href == "string";
    } catch {
      s = !1;
    }
    if (s) e = n.contentWindow;
    else break;
    n = al(e.document);
  }
  return n;
}
function Bi(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    n &&
    ((n === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      n === "textarea" ||
      e.contentEditable === "true")
  );
}
function Vh(e) {
  var n = Vc(),
    s = e.focusedElem,
    l = e.selectionRange;
  if (
    n !== s &&
    s &&
    s.ownerDocument &&
    Bc(s.ownerDocument.documentElement, s)
  ) {
    if (l !== null && Bi(s)) {
      if (
        ((n = l.start),
        (e = l.end),
        e === void 0 && (e = n),
        "selectionStart" in s)
      )
        (s.selectionStart = n), (s.selectionEnd = Math.min(e, s.value.length));
      else if (
        ((e = ((n = s.ownerDocument || document) && n.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var r = s.textContent.length,
          i = Math.min(l.start, r);
        (l = l.end === void 0 ? i : Math.min(l.end, r)),
          !e.extend && i > l && ((r = l), (l = i), (i = r)),
          (r = Qa(s, i));
        var a = Qa(s, l);
        r &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== r.node ||
            e.anchorOffset !== r.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((n = n.createRange()),
          n.setStart(r.node, r.offset),
          e.removeAllRanges(),
          i > l
            ? (e.addRange(n), e.extend(a.node, a.offset))
            : (n.setEnd(a.node, a.offset), e.addRange(n)));
      }
    }
    for (n = [], e = s; (e = e.parentNode); )
      e.nodeType === 1 &&
        n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof s.focus == "function" && s.focus(), s = 0; s < n.length; s++)
      (e = n[s]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Uh = fn && "documentMode" in document && 11 >= document.documentMode,
  ct = null,
  Hr = null,
  Jt = null,
  Kr = !1;
function Wa(e, n, s) {
  var l = s.window === s ? s.document : s.nodeType === 9 ? s : s.ownerDocument;
  Kr ||
    ct == null ||
    ct !== al(l) ||
    ((l = ct),
    "selectionStart" in l && Bi(l)
      ? (l = { start: l.selectionStart, end: l.selectionEnd })
      : ((l = (
          (l.ownerDocument && l.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (l = {
          anchorNode: l.anchorNode,
          anchorOffset: l.anchorOffset,
          focusNode: l.focusNode,
          focusOffset: l.focusOffset,
        })),
    (Jt && ds(Jt, l)) ||
      ((Jt = l),
      (l = fl(Hr, "onSelect")),
      0 < l.length &&
        ((n = new Oi("onSelect", "select", null, n, s)),
        e.push({ event: n, listeners: l }),
        (n.target = ct))));
}
function Os(e, n) {
  var s = {};
  return (
    (s[e.toLowerCase()] = n.toLowerCase()),
    (s["Webkit" + e] = "webkit" + n),
    (s["Moz" + e] = "moz" + n),
    s
  );
}
var dt = {
    animationend: Os("Animation", "AnimationEnd"),
    animationiteration: Os("Animation", "AnimationIteration"),
    animationstart: Os("Animation", "AnimationStart"),
    transitionend: Os("Transition", "TransitionEnd"),
  },
  ir = {},
  Uc = {};
fn &&
  ((Uc = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete dt.animationend.animation,
    delete dt.animationiteration.animation,
    delete dt.animationstart.animation),
  "TransitionEvent" in window || delete dt.transitionend.transition);
function Ol(e) {
  if (ir[e]) return ir[e];
  if (!dt[e]) return e;
  var n = dt[e],
    s;
  for (s in n) if (n.hasOwnProperty(s) && s in Uc) return (ir[e] = n[s]);
  return e;
}
var Qc = Ol("animationend"),
  Wc = Ol("animationiteration"),
  Hc = Ol("animationstart"),
  Kc = Ol("transitionend"),
  qc = new Map(),
  Ha =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Bn(e, n) {
  qc.set(e, n), tt(n, [e]);
}
for (var ar = 0; ar < Ha.length; ar++) {
  var or = Ha[ar],
    Qh = or.toLowerCase(),
    Wh = or[0].toUpperCase() + or.slice(1);
  Bn(Qh, "on" + Wh);
}
Bn(Qc, "onAnimationEnd");
Bn(Wc, "onAnimationIteration");
Bn(Hc, "onAnimationStart");
Bn("dblclick", "onDoubleClick");
Bn("focusin", "onFocus");
Bn("focusout", "onBlur");
Bn(Kc, "onTransitionEnd");
St("onMouseEnter", ["mouseout", "mouseover"]);
St("onMouseLeave", ["mouseout", "mouseover"]);
St("onPointerEnter", ["pointerout", "pointerover"]);
St("onPointerLeave", ["pointerout", "pointerover"]);
tt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
tt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
tt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
tt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
tt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
tt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var qt =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Hh = new Set("cancel close invalid load scroll toggle".split(" ").concat(qt));
function Ka(e, n, s) {
  var l = e.type || "unknown-event";
  (e.currentTarget = s), Qu(l, n, void 0, e), (e.currentTarget = null);
}
function $c(e, n) {
  n = (n & 4) !== 0;
  for (var s = 0; s < e.length; s++) {
    var l = e[s],
      r = l.event;
    l = l.listeners;
    e: {
      var i = void 0;
      if (n)
        for (var a = l.length - 1; 0 <= a; a--) {
          var o = l[a],
            c = o.instance,
            d = o.currentTarget;
          if (((o = o.listener), c !== i && r.isPropagationStopped())) break e;
          Ka(r, o, d), (i = c);
        }
      else
        for (a = 0; a < l.length; a++) {
          if (
            ((o = l[a]),
            (c = o.instance),
            (d = o.currentTarget),
            (o = o.listener),
            c !== i && r.isPropagationStopped())
          )
            break e;
          Ka(r, o, d), (i = c);
        }
    }
  }
  if (cl) throw ((e = Vr), (cl = !1), (Vr = null), e);
}
function H(e, n) {
  var s = n[Xr];
  s === void 0 && (s = n[Xr] = new Set());
  var l = e + "__bubble";
  s.has(l) || (Yc(n, e, 2, !1), s.add(l));
}
function cr(e, n, s) {
  var l = 0;
  n && (l |= 4), Yc(s, e, l, n);
}
var Ds = "_reactListening" + Math.random().toString(36).slice(2);
function us(e) {
  if (!e[Ds]) {
    (e[Ds] = !0),
      tc.forEach(function (s) {
        s !== "selectionchange" && (Hh.has(s) || cr(s, !1, e), cr(s, !0, e));
      });
    var n = e.nodeType === 9 ? e : e.ownerDocument;
    n === null || n[Ds] || ((n[Ds] = !0), cr("selectionchange", !1, n));
  }
}
function Yc(e, n, s, l) {
  switch (Tc(n)) {
    case 1:
      var r = rh;
      break;
    case 4:
      r = ih;
      break;
    default:
      r = Fi;
  }
  (s = r.bind(null, n, s, e)),
    (r = void 0),
    !Br ||
      (n !== "touchstart" && n !== "touchmove" && n !== "wheel") ||
      (r = !0),
    l
      ? r !== void 0
        ? e.addEventListener(n, s, { capture: !0, passive: r })
        : e.addEventListener(n, s, !0)
      : r !== void 0
      ? e.addEventListener(n, s, { passive: r })
      : e.addEventListener(n, s, !1);
}
function dr(e, n, s, l, r) {
  var i = l;
  if (!(n & 1) && !(n & 2) && l !== null)
    e: for (;;) {
      if (l === null) return;
      var a = l.tag;
      if (a === 3 || a === 4) {
        var o = l.stateNode.containerInfo;
        if (o === r || (o.nodeType === 8 && o.parentNode === r)) break;
        if (a === 4)
          for (a = l.return; a !== null; ) {
            var c = a.tag;
            if (
              (c === 3 || c === 4) &&
              ((c = a.stateNode.containerInfo),
              c === r || (c.nodeType === 8 && c.parentNode === r))
            )
              return;
            a = a.return;
          }
        for (; o !== null; ) {
          if (((a = Hn(o)), a === null)) return;
          if (((c = a.tag), c === 5 || c === 6)) {
            l = i = a;
            continue e;
          }
          o = o.parentNode;
        }
      }
      l = l.return;
    }
  gc(function () {
    var d = i,
      x = Pi(s),
      p = [];
    e: {
      var h = qc.get(e);
      if (h !== void 0) {
        var v = Oi,
          g = e;
        switch (e) {
          case "keypress":
            if (Js(s) === 0) break e;
          case "keydown":
          case "keyup":
            v = yh;
            break;
          case "focusin":
            (g = "focus"), (v = sr);
            break;
          case "focusout":
            (g = "blur"), (v = sr);
            break;
          case "beforeblur":
          case "afterblur":
            v = sr;
            break;
          case "click":
            if (s.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = La;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = ch;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = kh;
            break;
          case Qc:
          case Wc:
          case Hc:
            v = hh;
            break;
          case Kc:
            v = zh;
            break;
          case "scroll":
            v = ah;
            break;
          case "wheel":
            v = Ah;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = fh;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Ma;
        }
        var w = (n & 4) !== 0,
          M = !w && e === "scroll",
          m = w ? (h !== null ? h + "Capture" : null) : h;
        w = [];
        for (var u = d, f; u !== null; ) {
          f = u;
          var _ = f.stateNode;
          if (
            (f.tag === 5 &&
              _ !== null &&
              ((f = _),
              m !== null && ((_ = rs(u, m)), _ != null && w.push(hs(u, _, f)))),
            M)
          )
            break;
          u = u.return;
        }
        0 < w.length &&
          ((h = new v(h, g, null, s, x)), p.push({ event: h, listeners: w }));
      }
    }
    if (!(n & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          h &&
            s !== Dr &&
            (g = s.relatedTarget || s.fromElement) &&
            (Hn(g) || g[pn]))
        )
          break e;
        if (
          (v || h) &&
          ((h =
            x.window === x
              ? x
              : (h = x.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          v
            ? ((g = s.relatedTarget || s.toElement),
              (v = d),
              (g = g ? Hn(g) : null),
              g !== null &&
                ((M = st(g)), g !== M || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((v = null), (g = d)),
          v !== g)
        ) {
          if (
            ((w = La),
            (_ = "onMouseLeave"),
            (m = "onMouseEnter"),
            (u = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = Ma),
              (_ = "onPointerLeave"),
              (m = "onPointerEnter"),
              (u = "pointer")),
            (M = v == null ? h : ut(v)),
            (f = g == null ? h : ut(g)),
            (h = new w(_, u + "leave", v, s, x)),
            (h.target = M),
            (h.relatedTarget = f),
            (_ = null),
            Hn(x) === d &&
              ((w = new w(m, u + "enter", g, s, x)),
              (w.target = f),
              (w.relatedTarget = M),
              (_ = w)),
            (M = _),
            v && g)
          )
            n: {
              for (w = v, m = g, u = 0, f = w; f; f = rt(f)) u++;
              for (f = 0, _ = m; _; _ = rt(_)) f++;
              for (; 0 < u - f; ) (w = rt(w)), u--;
              for (; 0 < f - u; ) (m = rt(m)), f--;
              for (; u--; ) {
                if (w === m || (m !== null && w === m.alternate)) break n;
                (w = rt(w)), (m = rt(m));
              }
              w = null;
            }
          else w = null;
          v !== null && qa(p, h, v, w, !1),
            g !== null && M !== null && qa(p, M, g, w, !0);
        }
      }
      e: {
        if (
          ((h = d ? ut(d) : window),
          (v = h.nodeName && h.nodeName.toLowerCase()),
          v === "select" || (v === "input" && h.type === "file"))
        )
          var k = Fh;
        else if (Ia(h))
          if (Dc) k = Ih;
          else {
            k = Oh;
            var z = Mh;
          }
        else
          (v = h.nodeName) &&
            v.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (k = Dh);
        if (k && (k = k(e, d))) {
          Oc(p, k, s, x);
          break e;
        }
        z && z(e, h, d),
          e === "focusout" &&
            (z = h._wrapperState) &&
            z.controlled &&
            h.type === "number" &&
            Rr(h, "number", h.value);
      }
      switch (((z = d ? ut(d) : window), e)) {
        case "focusin":
          (Ia(z) || z.contentEditable === "true") &&
            ((ct = z), (Hr = d), (Jt = null));
          break;
        case "focusout":
          Jt = Hr = ct = null;
          break;
        case "mousedown":
          Kr = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Kr = !1), Wa(p, s, x);
          break;
        case "selectionchange":
          if (Uh) break;
        case "keydown":
        case "keyup":
          Wa(p, s, x);
      }
      var y;
      if (Ii)
        e: {
          switch (e) {
            case "compositionstart":
              var j = "onCompositionStart";
              break e;
            case "compositionend":
              j = "onCompositionEnd";
              break e;
            case "compositionupdate":
              j = "onCompositionUpdate";
              break e;
          }
          j = void 0;
        }
      else
        ot
          ? Fc(e, s) && (j = "onCompositionEnd")
          : e === "keydown" && s.keyCode === 229 && (j = "onCompositionStart");
      j &&
        (Lc &&
          s.locale !== "ko" &&
          (ot || j !== "onCompositionStart"
            ? j === "onCompositionEnd" && ot && (y = Rc())
            : ((En = x),
              (Mi = "value" in En ? En.value : En.textContent),
              (ot = !0))),
        (z = fl(d, j)),
        0 < z.length &&
          ((j = new Fa(j, e, null, s, x)),
          p.push({ event: j, listeners: z }),
          y ? (j.data = y) : ((y = Mc(s)), y !== null && (j.data = y)))),
        (y = bh ? Ph(e, s) : Th(e, s)) &&
          ((d = fl(d, "onBeforeInput")),
          0 < d.length &&
            ((x = new Fa("onBeforeInput", "beforeinput", null, s, x)),
            p.push({ event: x, listeners: d }),
            (x.data = y)));
    }
    $c(p, n);
  });
}
function hs(e, n, s) {
  return { instance: e, listener: n, currentTarget: s };
}
function fl(e, n) {
  for (var s = n + "Capture", l = []; e !== null; ) {
    var r = e,
      i = r.stateNode;
    r.tag === 5 &&
      i !== null &&
      ((r = i),
      (i = rs(e, s)),
      i != null && l.unshift(hs(e, i, r)),
      (i = rs(e, n)),
      i != null && l.push(hs(e, i, r))),
      (e = e.return);
  }
  return l;
}
function rt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function qa(e, n, s, l, r) {
  for (var i = n._reactName, a = []; s !== null && s !== l; ) {
    var o = s,
      c = o.alternate,
      d = o.stateNode;
    if (c !== null && c === l) break;
    o.tag === 5 &&
      d !== null &&
      ((o = d),
      r
        ? ((c = rs(s, i)), c != null && a.unshift(hs(s, c, o)))
        : r || ((c = rs(s, i)), c != null && a.push(hs(s, c, o)))),
      (s = s.return);
  }
  a.length !== 0 && e.push({ event: n, listeners: a });
}
var Kh = /\r\n?/g,
  qh = /\u0000|\uFFFD/g;
function $a(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Kh,
      `
`
    )
    .replace(qh, "");
}
function Is(e, n, s) {
  if (((n = $a(n)), $a(e) !== n && s)) throw Error(N(425));
}
function pl() {}
var qr = null,
  $r = null;
function Yr(e, n) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof n.children == "string" ||
    typeof n.children == "number" ||
    (typeof n.dangerouslySetInnerHTML == "object" &&
      n.dangerouslySetInnerHTML !== null &&
      n.dangerouslySetInnerHTML.__html != null)
  );
}
var Gr = typeof setTimeout == "function" ? setTimeout : void 0,
  $h = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Ya = typeof Promise == "function" ? Promise : void 0,
  Yh =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Ya < "u"
      ? function (e) {
          return Ya.resolve(null).then(e).catch(Gh);
        }
      : Gr;
function Gh(e) {
  setTimeout(function () {
    throw e;
  });
}
function ur(e, n) {
  var s = n,
    l = 0;
  do {
    var r = s.nextSibling;
    if ((e.removeChild(s), r && r.nodeType === 8))
      if (((s = r.data), s === "/$")) {
        if (l === 0) {
          e.removeChild(r), os(n);
          return;
        }
        l--;
      } else (s !== "$" && s !== "$?" && s !== "$!") || l++;
    s = r;
  } while (s);
  os(n);
}
function Tn(e) {
  for (; e != null; e = e.nextSibling) {
    var n = e.nodeType;
    if (n === 1 || n === 3) break;
    if (n === 8) {
      if (((n = e.data), n === "$" || n === "$!" || n === "$?")) break;
      if (n === "/$") return null;
    }
  }
  return e;
}
function Ga(e) {
  e = e.previousSibling;
  for (var n = 0; e; ) {
    if (e.nodeType === 8) {
      var s = e.data;
      if (s === "$" || s === "$!" || s === "$?") {
        if (n === 0) return e;
        n--;
      } else s === "/$" && n++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Ft = Math.random().toString(36).slice(2),
  tn = "__reactFiber$" + Ft,
  ms = "__reactProps$" + Ft,
  pn = "__reactContainer$" + Ft,
  Xr = "__reactEvents$" + Ft,
  Xh = "__reactListeners$" + Ft,
  Jh = "__reactHandles$" + Ft;
function Hn(e) {
  var n = e[tn];
  if (n) return n;
  for (var s = e.parentNode; s; ) {
    if ((n = s[pn] || s[tn])) {
      if (
        ((s = n.alternate),
        n.child !== null || (s !== null && s.child !== null))
      )
        for (e = Ga(e); e !== null; ) {
          if ((s = e[tn])) return s;
          e = Ga(e);
        }
      return n;
    }
    (e = s), (s = e.parentNode);
  }
  return null;
}
function ks(e) {
  return (
    (e = e[tn] || e[pn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function ut(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(N(33));
}
function Dl(e) {
  return e[ms] || null;
}
var Jr = [],
  ht = -1;
function Vn(e) {
  return { current: e };
}
function K(e) {
  0 > ht || ((e.current = Jr[ht]), (Jr[ht] = null), ht--);
}
function Q(e, n) {
  ht++, (Jr[ht] = e.current), (e.current = n);
}
var In = {},
  ve = Vn(In),
  Ce = Vn(!1),
  Xn = In;
function zt(e, n) {
  var s = e.type.contextTypes;
  if (!s) return In;
  var l = e.stateNode;
  if (l && l.__reactInternalMemoizedUnmaskedChildContext === n)
    return l.__reactInternalMemoizedMaskedChildContext;
  var r = {},
    i;
  for (i in s) r[i] = n[i];
  return (
    l &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = n),
      (e.__reactInternalMemoizedMaskedChildContext = r)),
    r
  );
}
function be(e) {
  return (e = e.childContextTypes), e != null;
}
function xl() {
  K(Ce), K(ve);
}
function Xa(e, n, s) {
  if (ve.current !== In) throw Error(N(168));
  Q(ve, n), Q(Ce, s);
}
function Gc(e, n, s) {
  var l = e.stateNode;
  if (((n = n.childContextTypes), typeof l.getChildContext != "function"))
    return s;
  l = l.getChildContext();
  for (var r in l) if (!(r in n)) throw Error(N(108, Mu(e) || "Unknown", r));
  return J({}, s, l);
}
function vl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || In),
    (Xn = ve.current),
    Q(ve, e),
    Q(Ce, Ce.current),
    !0
  );
}
function Ja(e, n, s) {
  var l = e.stateNode;
  if (!l) throw Error(N(169));
  s
    ? ((e = Gc(e, n, Xn)),
      (l.__reactInternalMemoizedMergedChildContext = e),
      K(Ce),
      K(ve),
      Q(ve, e))
    : K(Ce),
    Q(Ce, s);
}
var dn = null,
  Il = !1,
  hr = !1;
function Xc(e) {
  dn === null ? (dn = [e]) : dn.push(e);
}
function Zh(e) {
  (Il = !0), Xc(e);
}
function Un() {
  if (!hr && dn !== null) {
    hr = !0;
    var e = 0,
      n = V;
    try {
      var s = dn;
      for (V = 1; e < s.length; e++) {
        var l = s[e];
        do l = l(!0);
        while (l !== null);
      }
      (dn = null), (Il = !1);
    } catch (r) {
      throw (dn !== null && (dn = dn.slice(e + 1)), Nc(Ti, Un), r);
    } finally {
      (V = n), (hr = !1);
    }
  }
  return null;
}
var mt = [],
  ft = 0,
  gl = null,
  jl = 0,
  Ve = [],
  Ue = 0,
  Jn = null,
  un = 1,
  hn = "";
function Qn(e, n) {
  (mt[ft++] = jl), (mt[ft++] = gl), (gl = e), (jl = n);
}
function Jc(e, n, s) {
  (Ve[Ue++] = un), (Ve[Ue++] = hn), (Ve[Ue++] = Jn), (Jn = e);
  var l = un;
  e = hn;
  var r = 32 - Xe(l) - 1;
  (l &= ~(1 << r)), (s += 1);
  var i = 32 - Xe(n) + r;
  if (30 < i) {
    var a = r - (r % 5);
    (i = (l & ((1 << a) - 1)).toString(32)),
      (l >>= a),
      (r -= a),
      (un = (1 << (32 - Xe(n) + r)) | (s << r) | l),
      (hn = i + e);
  } else (un = (1 << i) | (s << r) | l), (hn = e);
}
function Vi(e) {
  e.return !== null && (Qn(e, 1), Jc(e, 1, 0));
}
function Ui(e) {
  for (; e === gl; )
    (gl = mt[--ft]), (mt[ft] = null), (jl = mt[--ft]), (mt[ft] = null);
  for (; e === Jn; )
    (Jn = Ve[--Ue]),
      (Ve[Ue] = null),
      (hn = Ve[--Ue]),
      (Ve[Ue] = null),
      (un = Ve[--Ue]),
      (Ve[Ue] = null);
}
var Me = null,
  Fe = null,
  $ = !1,
  Ge = null;
function Zc(e, n) {
  var s = Qe(5, null, null, 0);
  (s.elementType = "DELETED"),
    (s.stateNode = n),
    (s.return = e),
    (n = e.deletions),
    n === null ? ((e.deletions = [s]), (e.flags |= 16)) : n.push(s);
}
function Za(e, n) {
  switch (e.tag) {
    case 5:
      var s = e.type;
      return (
        (n =
          n.nodeType !== 1 || s.toLowerCase() !== n.nodeName.toLowerCase()
            ? null
            : n),
        n !== null
          ? ((e.stateNode = n), (Me = e), (Fe = Tn(n.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (n = e.pendingProps === "" || n.nodeType !== 3 ? null : n),
        n !== null ? ((e.stateNode = n), (Me = e), (Fe = null), !0) : !1
      );
    case 13:
      return (
        (n = n.nodeType !== 8 ? null : n),
        n !== null
          ? ((s = Jn !== null ? { id: un, overflow: hn } : null),
            (e.memoizedState = {
              dehydrated: n,
              treeContext: s,
              retryLane: 1073741824,
            }),
            (s = Qe(18, null, null, 0)),
            (s.stateNode = n),
            (s.return = e),
            (e.child = s),
            (Me = e),
            (Fe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Zr(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ei(e) {
  if ($) {
    var n = Fe;
    if (n) {
      var s = n;
      if (!Za(e, n)) {
        if (Zr(e)) throw Error(N(418));
        n = Tn(s.nextSibling);
        var l = Me;
        n && Za(e, n)
          ? Zc(l, s)
          : ((e.flags = (e.flags & -4097) | 2), ($ = !1), (Me = e));
      }
    } else {
      if (Zr(e)) throw Error(N(418));
      (e.flags = (e.flags & -4097) | 2), ($ = !1), (Me = e);
    }
  }
}
function eo(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Me = e;
}
function Bs(e) {
  if (e !== Me) return !1;
  if (!$) return eo(e), ($ = !0), !1;
  var n;
  if (
    ((n = e.tag !== 3) &&
      !(n = e.tag !== 5) &&
      ((n = e.type),
      (n = n !== "head" && n !== "body" && !Yr(e.type, e.memoizedProps))),
    n && (n = Fe))
  ) {
    if (Zr(e)) throw (ed(), Error(N(418)));
    for (; n; ) Zc(e, n), (n = Tn(n.nextSibling));
  }
  if ((eo(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(N(317));
    e: {
      for (e = e.nextSibling, n = 0; e; ) {
        if (e.nodeType === 8) {
          var s = e.data;
          if (s === "/$") {
            if (n === 0) {
              Fe = Tn(e.nextSibling);
              break e;
            }
            n--;
          } else (s !== "$" && s !== "$!" && s !== "$?") || n++;
        }
        e = e.nextSibling;
      }
      Fe = null;
    }
  } else Fe = Me ? Tn(e.stateNode.nextSibling) : null;
  return !0;
}
function ed() {
  for (var e = Fe; e; ) e = Tn(e.nextSibling);
}
function Et() {
  (Fe = Me = null), ($ = !1);
}
function Qi(e) {
  Ge === null ? (Ge = [e]) : Ge.push(e);
}
var em = gn.ReactCurrentBatchConfig;
function $e(e, n) {
  if (e && e.defaultProps) {
    (n = J({}, n)), (e = e.defaultProps);
    for (var s in e) n[s] === void 0 && (n[s] = e[s]);
    return n;
  }
  return n;
}
var _l = Vn(null),
  yl = null,
  pt = null,
  Wi = null;
function Hi() {
  Wi = pt = yl = null;
}
function Ki(e) {
  var n = _l.current;
  K(_l), (e._currentValue = n);
}
function ni(e, n, s) {
  for (; e !== null; ) {
    var l = e.alternate;
    if (
      ((e.childLanes & n) !== n
        ? ((e.childLanes |= n), l !== null && (l.childLanes |= n))
        : l !== null && (l.childLanes & n) !== n && (l.childLanes |= n),
      e === s)
    )
      break;
    e = e.return;
  }
}
function Nt(e, n) {
  (yl = e),
    (Wi = pt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & n && (Ae = !0), (e.firstContext = null));
}
function He(e) {
  var n = e._currentValue;
  if (Wi !== e)
    if (((e = { context: e, memoizedValue: n, next: null }), pt === null)) {
      if (yl === null) throw Error(N(308));
      (pt = e), (yl.dependencies = { lanes: 0, firstContext: e });
    } else pt = pt.next = e;
  return n;
}
var Kn = null;
function qi(e) {
  Kn === null ? (Kn = [e]) : Kn.push(e);
}
function nd(e, n, s, l) {
  var r = n.interleaved;
  return (
    r === null ? ((s.next = s), qi(n)) : ((s.next = r.next), (r.next = s)),
    (n.interleaved = s),
    xn(e, l)
  );
}
function xn(e, n) {
  e.lanes |= n;
  var s = e.alternate;
  for (s !== null && (s.lanes |= n), s = e, e = e.return; e !== null; )
    (e.childLanes |= n),
      (s = e.alternate),
      s !== null && (s.childLanes |= n),
      (s = e),
      (e = e.return);
  return s.tag === 3 ? s.stateNode : null;
}
var kn = !1;
function $i(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function td(e, n) {
  (e = e.updateQueue),
    n.updateQueue === e &&
      (n.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function mn(e, n) {
  return {
    eventTime: e,
    lane: n,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Rn(e, n, s) {
  var l = e.updateQueue;
  if (l === null) return null;
  if (((l = l.shared), I & 2)) {
    var r = l.pending;
    return (
      r === null ? (n.next = n) : ((n.next = r.next), (r.next = n)),
      (l.pending = n),
      xn(e, s)
    );
  }
  return (
    (r = l.interleaved),
    r === null ? ((n.next = n), qi(l)) : ((n.next = r.next), (r.next = n)),
    (l.interleaved = n),
    xn(e, s)
  );
}
function Zs(e, n, s) {
  if (
    ((n = n.updateQueue), n !== null && ((n = n.shared), (s & 4194240) !== 0))
  ) {
    var l = n.lanes;
    (l &= e.pendingLanes), (s |= l), (n.lanes = s), Ri(e, s);
  }
}
function no(e, n) {
  var s = e.updateQueue,
    l = e.alternate;
  if (l !== null && ((l = l.updateQueue), s === l)) {
    var r = null,
      i = null;
    if (((s = s.firstBaseUpdate), s !== null)) {
      do {
        var a = {
          eventTime: s.eventTime,
          lane: s.lane,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        };
        i === null ? (r = i = a) : (i = i.next = a), (s = s.next);
      } while (s !== null);
      i === null ? (r = i = n) : (i = i.next = n);
    } else r = i = n;
    (s = {
      baseState: l.baseState,
      firstBaseUpdate: r,
      lastBaseUpdate: i,
      shared: l.shared,
      effects: l.effects,
    }),
      (e.updateQueue = s);
    return;
  }
  (e = s.lastBaseUpdate),
    e === null ? (s.firstBaseUpdate = n) : (e.next = n),
    (s.lastBaseUpdate = n);
}
function Nl(e, n, s, l) {
  var r = e.updateQueue;
  kn = !1;
  var i = r.firstBaseUpdate,
    a = r.lastBaseUpdate,
    o = r.shared.pending;
  if (o !== null) {
    r.shared.pending = null;
    var c = o,
      d = c.next;
    (c.next = null), a === null ? (i = d) : (a.next = d), (a = c);
    var x = e.alternate;
    x !== null &&
      ((x = x.updateQueue),
      (o = x.lastBaseUpdate),
      o !== a &&
        (o === null ? (x.firstBaseUpdate = d) : (o.next = d),
        (x.lastBaseUpdate = c)));
  }
  if (i !== null) {
    var p = r.baseState;
    (a = 0), (x = d = c = null), (o = i);
    do {
      var h = o.lane,
        v = o.eventTime;
      if ((l & h) === h) {
        x !== null &&
          (x = x.next =
            {
              eventTime: v,
              lane: 0,
              tag: o.tag,
              payload: o.payload,
              callback: o.callback,
              next: null,
            });
        e: {
          var g = e,
            w = o;
          switch (((h = n), (v = s), w.tag)) {
            case 1:
              if (((g = w.payload), typeof g == "function")) {
                p = g.call(v, p, h);
                break e;
              }
              p = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (
                ((g = w.payload),
                (h = typeof g == "function" ? g.call(v, p, h) : g),
                h == null)
              )
                break e;
              p = J({}, p, h);
              break e;
            case 2:
              kn = !0;
          }
        }
        o.callback !== null &&
          o.lane !== 0 &&
          ((e.flags |= 64),
          (h = r.effects),
          h === null ? (r.effects = [o]) : h.push(o));
      } else
        (v = {
          eventTime: v,
          lane: h,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null,
        }),
          x === null ? ((d = x = v), (c = p)) : (x = x.next = v),
          (a |= h);
      if (((o = o.next), o === null)) {
        if (((o = r.shared.pending), o === null)) break;
        (h = o),
          (o = h.next),
          (h.next = null),
          (r.lastBaseUpdate = h),
          (r.shared.pending = null);
      }
    } while (1);
    if (
      (x === null && (c = p),
      (r.baseState = c),
      (r.firstBaseUpdate = d),
      (r.lastBaseUpdate = x),
      (n = r.shared.interleaved),
      n !== null)
    ) {
      r = n;
      do (a |= r.lane), (r = r.next);
      while (r !== n);
    } else i === null && (r.shared.lanes = 0);
    (et |= a), (e.lanes = a), (e.memoizedState = p);
  }
}
function to(e, n, s) {
  if (((e = n.effects), (n.effects = null), e !== null))
    for (n = 0; n < e.length; n++) {
      var l = e[n],
        r = l.callback;
      if (r !== null) {
        if (((l.callback = null), (l = s), typeof r != "function"))
          throw Error(N(191, r));
        r.call(l);
      }
    }
}
var sd = new nc.Component().refs;
function ti(e, n, s, l) {
  (n = e.memoizedState),
    (s = s(l, n)),
    (s = s == null ? n : J({}, n, s)),
    (e.memoizedState = s),
    e.lanes === 0 && (e.updateQueue.baseState = s);
}
var Bl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? st(e) === e : !1;
  },
  enqueueSetState: function (e, n, s) {
    e = e._reactInternals;
    var l = ye(),
      r = Fn(e),
      i = mn(l, r);
    (i.payload = n),
      s != null && (i.callback = s),
      (n = Rn(e, i, r)),
      n !== null && (Je(n, e, r, l), Zs(n, e, r));
  },
  enqueueReplaceState: function (e, n, s) {
    e = e._reactInternals;
    var l = ye(),
      r = Fn(e),
      i = mn(l, r);
    (i.tag = 1),
      (i.payload = n),
      s != null && (i.callback = s),
      (n = Rn(e, i, r)),
      n !== null && (Je(n, e, r, l), Zs(n, e, r));
  },
  enqueueForceUpdate: function (e, n) {
    e = e._reactInternals;
    var s = ye(),
      l = Fn(e),
      r = mn(s, l);
    (r.tag = 2),
      n != null && (r.callback = n),
      (n = Rn(e, r, l)),
      n !== null && (Je(n, e, l, s), Zs(n, e, l));
  },
};
function so(e, n, s, l, r, i, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(l, i, a)
      : n.prototype && n.prototype.isPureReactComponent
      ? !ds(s, l) || !ds(r, i)
      : !0
  );
}
function ld(e, n, s) {
  var l = !1,
    r = In,
    i = n.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = He(i))
      : ((r = be(n) ? Xn : ve.current),
        (l = n.contextTypes),
        (i = (l = l != null) ? zt(e, r) : In)),
    (n = new n(s, i)),
    (e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null),
    (n.updater = Bl),
    (e.stateNode = n),
    (n._reactInternals = e),
    l &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = r),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    n
  );
}
function lo(e, n, s, l) {
  (e = n.state),
    typeof n.componentWillReceiveProps == "function" &&
      n.componentWillReceiveProps(s, l),
    typeof n.UNSAFE_componentWillReceiveProps == "function" &&
      n.UNSAFE_componentWillReceiveProps(s, l),
    n.state !== e && Bl.enqueueReplaceState(n, n.state, null);
}
function si(e, n, s, l) {
  var r = e.stateNode;
  (r.props = s), (r.state = e.memoizedState), (r.refs = sd), $i(e);
  var i = n.contextType;
  typeof i == "object" && i !== null
    ? (r.context = He(i))
    : ((i = be(n) ? Xn : ve.current), (r.context = zt(e, i))),
    (r.state = e.memoizedState),
    (i = n.getDerivedStateFromProps),
    typeof i == "function" && (ti(e, n, i, s), (r.state = e.memoizedState)),
    typeof n.getDerivedStateFromProps == "function" ||
      typeof r.getSnapshotBeforeUpdate == "function" ||
      (typeof r.UNSAFE_componentWillMount != "function" &&
        typeof r.componentWillMount != "function") ||
      ((n = r.state),
      typeof r.componentWillMount == "function" && r.componentWillMount(),
      typeof r.UNSAFE_componentWillMount == "function" &&
        r.UNSAFE_componentWillMount(),
      n !== r.state && Bl.enqueueReplaceState(r, r.state, null),
      Nl(e, s, r, l),
      (r.state = e.memoizedState)),
    typeof r.componentDidMount == "function" && (e.flags |= 4194308);
}
function Vt(e, n, s) {
  if (
    ((e = s.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (s._owner) {
      if (((s = s._owner), s)) {
        if (s.tag !== 1) throw Error(N(309));
        var l = s.stateNode;
      }
      if (!l) throw Error(N(147, e));
      var r = l,
        i = "" + e;
      return n !== null &&
        n.ref !== null &&
        typeof n.ref == "function" &&
        n.ref._stringRef === i
        ? n.ref
        : ((n = function (a) {
            var o = r.refs;
            o === sd && (o = r.refs = {}),
              a === null ? delete o[i] : (o[i] = a);
          }),
          (n._stringRef = i),
          n);
    }
    if (typeof e != "string") throw Error(N(284));
    if (!s._owner) throw Error(N(290, e));
  }
  return e;
}
function Vs(e, n) {
  throw (
    ((e = Object.prototype.toString.call(n)),
    Error(
      N(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(n).join(", ") + "}"
          : e
      )
    ))
  );
}
function ro(e) {
  var n = e._init;
  return n(e._payload);
}
function rd(e) {
  function n(m, u) {
    if (e) {
      var f = m.deletions;
      f === null ? ((m.deletions = [u]), (m.flags |= 16)) : f.push(u);
    }
  }
  function s(m, u) {
    if (!e) return null;
    for (; u !== null; ) n(m, u), (u = u.sibling);
    return null;
  }
  function l(m, u) {
    for (m = new Map(); u !== null; )
      u.key !== null ? m.set(u.key, u) : m.set(u.index, u), (u = u.sibling);
    return m;
  }
  function r(m, u) {
    return (m = Mn(m, u)), (m.index = 0), (m.sibling = null), m;
  }
  function i(m, u, f) {
    return (
      (m.index = f),
      e
        ? ((f = m.alternate),
          f !== null
            ? ((f = f.index), f < u ? ((m.flags |= 2), u) : f)
            : ((m.flags |= 2), u))
        : ((m.flags |= 1048576), u)
    );
  }
  function a(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function o(m, u, f, _) {
    return u === null || u.tag !== 6
      ? ((u = jr(f, m.mode, _)), (u.return = m), u)
      : ((u = r(u, f)), (u.return = m), u);
  }
  function c(m, u, f, _) {
    var k = f.type;
    return k === at
      ? x(m, u, f.props.children, _, f.key)
      : u !== null &&
        (u.elementType === k ||
          (typeof k == "object" &&
            k !== null &&
            k.$$typeof === wn &&
            ro(k) === u.type))
      ? ((_ = r(u, f.props)), (_.ref = Vt(m, u, f)), (_.return = m), _)
      : ((_ = rl(f.type, f.key, f.props, null, m.mode, _)),
        (_.ref = Vt(m, u, f)),
        (_.return = m),
        _);
  }
  function d(m, u, f, _) {
    return u === null ||
      u.tag !== 4 ||
      u.stateNode.containerInfo !== f.containerInfo ||
      u.stateNode.implementation !== f.implementation
      ? ((u = _r(f, m.mode, _)), (u.return = m), u)
      : ((u = r(u, f.children || [])), (u.return = m), u);
  }
  function x(m, u, f, _, k) {
    return u === null || u.tag !== 7
      ? ((u = Gn(f, m.mode, _, k)), (u.return = m), u)
      : ((u = r(u, f)), (u.return = m), u);
  }
  function p(m, u, f) {
    if ((typeof u == "string" && u !== "") || typeof u == "number")
      return (u = jr("" + u, m.mode, f)), (u.return = m), u;
    if (typeof u == "object" && u !== null) {
      switch (u.$$typeof) {
        case bs:
          return (
            (f = rl(u.type, u.key, u.props, null, m.mode, f)),
            (f.ref = Vt(m, null, u)),
            (f.return = m),
            f
          );
        case it:
          return (u = _r(u, m.mode, f)), (u.return = m), u;
        case wn:
          var _ = u._init;
          return p(m, _(u._payload), f);
      }
      if (Ht(u) || Mt(u))
        return (u = Gn(u, m.mode, f, null)), (u.return = m), u;
      Vs(m, u);
    }
    return null;
  }
  function h(m, u, f, _) {
    var k = u !== null ? u.key : null;
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return k !== null ? null : o(m, u, "" + f, _);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case bs:
          return f.key === k ? c(m, u, f, _) : null;
        case it:
          return f.key === k ? d(m, u, f, _) : null;
        case wn:
          return (k = f._init), h(m, u, k(f._payload), _);
      }
      if (Ht(f) || Mt(f)) return k !== null ? null : x(m, u, f, _, null);
      Vs(m, f);
    }
    return null;
  }
  function v(m, u, f, _, k) {
    if ((typeof _ == "string" && _ !== "") || typeof _ == "number")
      return (m = m.get(f) || null), o(u, m, "" + _, k);
    if (typeof _ == "object" && _ !== null) {
      switch (_.$$typeof) {
        case bs:
          return (m = m.get(_.key === null ? f : _.key) || null), c(u, m, _, k);
        case it:
          return (m = m.get(_.key === null ? f : _.key) || null), d(u, m, _, k);
        case wn:
          var z = _._init;
          return v(m, u, f, z(_._payload), k);
      }
      if (Ht(_) || Mt(_)) return (m = m.get(f) || null), x(u, m, _, k, null);
      Vs(u, _);
    }
    return null;
  }
  function g(m, u, f, _) {
    for (
      var k = null, z = null, y = u, j = (u = 0), R = null;
      y !== null && j < f.length;
      j++
    ) {
      y.index > j ? ((R = y), (y = null)) : (R = y.sibling);
      var b = h(m, y, f[j], _);
      if (b === null) {
        y === null && (y = R);
        break;
      }
      e && y && b.alternate === null && n(m, y),
        (u = i(b, u, j)),
        z === null ? (k = b) : (z.sibling = b),
        (z = b),
        (y = R);
    }
    if (j === f.length) return s(m, y), $ && Qn(m, j), k;
    if (y === null) {
      for (; j < f.length; j++)
        (y = p(m, f[j], _)),
          y !== null &&
            ((u = i(y, u, j)), z === null ? (k = y) : (z.sibling = y), (z = y));
      return $ && Qn(m, j), k;
    }
    for (y = l(m, y); j < f.length; j++)
      (R = v(y, m, j, f[j], _)),
        R !== null &&
          (e && R.alternate !== null && y.delete(R.key === null ? j : R.key),
          (u = i(R, u, j)),
          z === null ? (k = R) : (z.sibling = R),
          (z = R));
    return (
      e &&
        y.forEach(function (E) {
          return n(m, E);
        }),
      $ && Qn(m, j),
      k
    );
  }
  function w(m, u, f, _) {
    var k = Mt(f);
    if (typeof k != "function") throw Error(N(150));
    if (((f = k.call(f)), f == null)) throw Error(N(151));
    for (
      var z = (k = null), y = u, j = (u = 0), R = null, b = f.next();
      y !== null && !b.done;
      j++, b = f.next()
    ) {
      y.index > j ? ((R = y), (y = null)) : (R = y.sibling);
      var E = h(m, y, b.value, _);
      if (E === null) {
        y === null && (y = R);
        break;
      }
      e && y && E.alternate === null && n(m, y),
        (u = i(E, u, j)),
        z === null ? (k = E) : (z.sibling = E),
        (z = E),
        (y = R);
    }
    if (b.done) return s(m, y), $ && Qn(m, j), k;
    if (y === null) {
      for (; !b.done; j++, b = f.next())
        (b = p(m, b.value, _)),
          b !== null &&
            ((u = i(b, u, j)), z === null ? (k = b) : (z.sibling = b), (z = b));
      return $ && Qn(m, j), k;
    }
    for (y = l(m, y); !b.done; j++, b = f.next())
      (b = v(y, m, j, b.value, _)),
        b !== null &&
          (e && b.alternate !== null && y.delete(b.key === null ? j : b.key),
          (u = i(b, u, j)),
          z === null ? (k = b) : (z.sibling = b),
          (z = b));
    return (
      e &&
        y.forEach(function (S) {
          return n(m, S);
        }),
      $ && Qn(m, j),
      k
    );
  }
  function M(m, u, f, _) {
    if (
      (typeof f == "object" &&
        f !== null &&
        f.type === at &&
        f.key === null &&
        (f = f.props.children),
      typeof f == "object" && f !== null)
    ) {
      switch (f.$$typeof) {
        case bs:
          e: {
            for (var k = f.key, z = u; z !== null; ) {
              if (z.key === k) {
                if (((k = f.type), k === at)) {
                  if (z.tag === 7) {
                    s(m, z.sibling),
                      (u = r(z, f.props.children)),
                      (u.return = m),
                      (m = u);
                    break e;
                  }
                } else if (
                  z.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === wn &&
                    ro(k) === z.type)
                ) {
                  s(m, z.sibling),
                    (u = r(z, f.props)),
                    (u.ref = Vt(m, z, f)),
                    (u.return = m),
                    (m = u);
                  break e;
                }
                s(m, z);
                break;
              } else n(m, z);
              z = z.sibling;
            }
            f.type === at
              ? ((u = Gn(f.props.children, m.mode, _, f.key)),
                (u.return = m),
                (m = u))
              : ((_ = rl(f.type, f.key, f.props, null, m.mode, _)),
                (_.ref = Vt(m, u, f)),
                (_.return = m),
                (m = _));
          }
          return a(m);
        case it:
          e: {
            for (z = f.key; u !== null; ) {
              if (u.key === z)
                if (
                  u.tag === 4 &&
                  u.stateNode.containerInfo === f.containerInfo &&
                  u.stateNode.implementation === f.implementation
                ) {
                  s(m, u.sibling),
                    (u = r(u, f.children || [])),
                    (u.return = m),
                    (m = u);
                  break e;
                } else {
                  s(m, u);
                  break;
                }
              else n(m, u);
              u = u.sibling;
            }
            (u = _r(f, m.mode, _)), (u.return = m), (m = u);
          }
          return a(m);
        case wn:
          return (z = f._init), M(m, u, z(f._payload), _);
      }
      if (Ht(f)) return g(m, u, f, _);
      if (Mt(f)) return w(m, u, f, _);
      Vs(m, f);
    }
    return (typeof f == "string" && f !== "") || typeof f == "number"
      ? ((f = "" + f),
        u !== null && u.tag === 6
          ? (s(m, u.sibling), (u = r(u, f)), (u.return = m), (m = u))
          : (s(m, u), (u = jr(f, m.mode, _)), (u.return = m), (m = u)),
        a(m))
      : s(m, u);
  }
  return M;
}
var At = rd(!0),
  id = rd(!1),
  Ss = {},
  ln = Vn(Ss),
  fs = Vn(Ss),
  ps = Vn(Ss);
function qn(e) {
  if (e === Ss) throw Error(N(174));
  return e;
}
function Yi(e, n) {
  switch ((Q(ps, n), Q(fs, e), Q(ln, Ss), (e = n.nodeType), e)) {
    case 9:
    case 11:
      n = (n = n.documentElement) ? n.namespaceURI : Fr(null, "");
      break;
    default:
      (e = e === 8 ? n.parentNode : n),
        (n = e.namespaceURI || null),
        (e = e.tagName),
        (n = Fr(n, e));
  }
  K(ln), Q(ln, n);
}
function Ct() {
  K(ln), K(fs), K(ps);
}
function ad(e) {
  qn(ps.current);
  var n = qn(ln.current),
    s = Fr(n, e.type);
  n !== s && (Q(fs, e), Q(ln, s));
}
function Gi(e) {
  fs.current === e && (K(ln), K(fs));
}
var G = Vn(0);
function wl(e) {
  for (var n = e; n !== null; ) {
    if (n.tag === 13) {
      var s = n.memoizedState;
      if (
        s !== null &&
        ((s = s.dehydrated), s === null || s.data === "$?" || s.data === "$!")
      )
        return n;
    } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
      if (n.flags & 128) return n;
    } else if (n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return null;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
  return null;
}
var mr = [];
function Xi() {
  for (var e = 0; e < mr.length; e++)
    mr[e]._workInProgressVersionPrimary = null;
  mr.length = 0;
}
var el = gn.ReactCurrentDispatcher,
  fr = gn.ReactCurrentBatchConfig,
  Zn = 0,
  X = null,
  ie = null,
  ce = null,
  kl = !1,
  Zt = !1,
  xs = 0,
  nm = 0;
function fe() {
  throw Error(N(321));
}
function Ji(e, n) {
  if (n === null) return !1;
  for (var s = 0; s < n.length && s < e.length; s++)
    if (!Ze(e[s], n[s])) return !1;
  return !0;
}
function Zi(e, n, s, l, r, i) {
  if (
    ((Zn = i),
    (X = n),
    (n.memoizedState = null),
    (n.updateQueue = null),
    (n.lanes = 0),
    (el.current = e === null || e.memoizedState === null ? rm : im),
    (e = s(l, r)),
    Zt)
  ) {
    i = 0;
    do {
      if (((Zt = !1), (xs = 0), 25 <= i)) throw Error(N(301));
      (i += 1),
        (ce = ie = null),
        (n.updateQueue = null),
        (el.current = am),
        (e = s(l, r));
    } while (Zt);
  }
  if (
    ((el.current = Sl),
    (n = ie !== null && ie.next !== null),
    (Zn = 0),
    (ce = ie = X = null),
    (kl = !1),
    n)
  )
    throw Error(N(300));
  return e;
}
function ea() {
  var e = xs !== 0;
  return (xs = 0), e;
}
function nn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ce === null ? (X.memoizedState = ce = e) : (ce = ce.next = e), ce;
}
function Ke() {
  if (ie === null) {
    var e = X.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ie.next;
  var n = ce === null ? X.memoizedState : ce.next;
  if (n !== null) (ce = n), (ie = e);
  else {
    if (e === null) throw Error(N(310));
    (ie = e),
      (e = {
        memoizedState: ie.memoizedState,
        baseState: ie.baseState,
        baseQueue: ie.baseQueue,
        queue: ie.queue,
        next: null,
      }),
      ce === null ? (X.memoizedState = ce = e) : (ce = ce.next = e);
  }
  return ce;
}
function vs(e, n) {
  return typeof n == "function" ? n(e) : n;
}
function pr(e) {
  var n = Ke(),
    s = n.queue;
  if (s === null) throw Error(N(311));
  s.lastRenderedReducer = e;
  var l = ie,
    r = l.baseQueue,
    i = s.pending;
  if (i !== null) {
    if (r !== null) {
      var a = r.next;
      (r.next = i.next), (i.next = a);
    }
    (l.baseQueue = r = i), (s.pending = null);
  }
  if (r !== null) {
    (i = r.next), (l = l.baseState);
    var o = (a = null),
      c = null,
      d = i;
    do {
      var x = d.lane;
      if ((Zn & x) === x)
        c !== null &&
          (c = c.next =
            {
              lane: 0,
              action: d.action,
              hasEagerState: d.hasEagerState,
              eagerState: d.eagerState,
              next: null,
            }),
          (l = d.hasEagerState ? d.eagerState : e(l, d.action));
      else {
        var p = {
          lane: x,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null,
        };
        c === null ? ((o = c = p), (a = l)) : (c = c.next = p),
          (X.lanes |= x),
          (et |= x);
      }
      d = d.next;
    } while (d !== null && d !== i);
    c === null ? (a = l) : (c.next = o),
      Ze(l, n.memoizedState) || (Ae = !0),
      (n.memoizedState = l),
      (n.baseState = a),
      (n.baseQueue = c),
      (s.lastRenderedState = l);
  }
  if (((e = s.interleaved), e !== null)) {
    r = e;
    do (i = r.lane), (X.lanes |= i), (et |= i), (r = r.next);
    while (r !== e);
  } else r === null && (s.lanes = 0);
  return [n.memoizedState, s.dispatch];
}
function xr(e) {
  var n = Ke(),
    s = n.queue;
  if (s === null) throw Error(N(311));
  s.lastRenderedReducer = e;
  var l = s.dispatch,
    r = s.pending,
    i = n.memoizedState;
  if (r !== null) {
    s.pending = null;
    var a = (r = r.next);
    do (i = e(i, a.action)), (a = a.next);
    while (a !== r);
    Ze(i, n.memoizedState) || (Ae = !0),
      (n.memoizedState = i),
      n.baseQueue === null && (n.baseState = i),
      (s.lastRenderedState = i);
  }
  return [i, l];
}
function od() {}
function cd(e, n) {
  var s = X,
    l = Ke(),
    r = n(),
    i = !Ze(l.memoizedState, r);
  if (
    (i && ((l.memoizedState = r), (Ae = !0)),
    (l = l.queue),
    na(hd.bind(null, s, l, e), [e]),
    l.getSnapshot !== n || i || (ce !== null && ce.memoizedState.tag & 1))
  ) {
    if (
      ((s.flags |= 2048),
      gs(9, ud.bind(null, s, l, r, n), void 0, null),
      de === null)
    )
      throw Error(N(349));
    Zn & 30 || dd(s, n, r);
  }
  return r;
}
function dd(e, n, s) {
  (e.flags |= 16384),
    (e = { getSnapshot: n, value: s }),
    (n = X.updateQueue),
    n === null
      ? ((n = { lastEffect: null, stores: null }),
        (X.updateQueue = n),
        (n.stores = [e]))
      : ((s = n.stores), s === null ? (n.stores = [e]) : s.push(e));
}
function ud(e, n, s, l) {
  (n.value = s), (n.getSnapshot = l), md(n) && fd(e);
}
function hd(e, n, s) {
  return s(function () {
    md(n) && fd(e);
  });
}
function md(e) {
  var n = e.getSnapshot;
  e = e.value;
  try {
    var s = n();
    return !Ze(e, s);
  } catch {
    return !0;
  }
}
function fd(e) {
  var n = xn(e, 1);
  n !== null && Je(n, e, 1, -1);
}
function io(e) {
  var n = nn();
  return (
    typeof e == "function" && (e = e()),
    (n.memoizedState = n.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: vs,
      lastRenderedState: e,
    }),
    (n.queue = e),
    (e = e.dispatch = lm.bind(null, X, e)),
    [n.memoizedState, e]
  );
}
function gs(e, n, s, l) {
  return (
    (e = { tag: e, create: n, destroy: s, deps: l, next: null }),
    (n = X.updateQueue),
    n === null
      ? ((n = { lastEffect: null, stores: null }),
        (X.updateQueue = n),
        (n.lastEffect = e.next = e))
      : ((s = n.lastEffect),
        s === null
          ? (n.lastEffect = e.next = e)
          : ((l = s.next), (s.next = e), (e.next = l), (n.lastEffect = e))),
    e
  );
}
function pd() {
  return Ke().memoizedState;
}
function nl(e, n, s, l) {
  var r = nn();
  (X.flags |= e),
    (r.memoizedState = gs(1 | n, s, void 0, l === void 0 ? null : l));
}
function Vl(e, n, s, l) {
  var r = Ke();
  l = l === void 0 ? null : l;
  var i = void 0;
  if (ie !== null) {
    var a = ie.memoizedState;
    if (((i = a.destroy), l !== null && Ji(l, a.deps))) {
      r.memoizedState = gs(n, s, i, l);
      return;
    }
  }
  (X.flags |= e), (r.memoizedState = gs(1 | n, s, i, l));
}
function ao(e, n) {
  return nl(8390656, 8, e, n);
}
function na(e, n) {
  return Vl(2048, 8, e, n);
}
function xd(e, n) {
  return Vl(4, 2, e, n);
}
function vd(e, n) {
  return Vl(4, 4, e, n);
}
function gd(e, n) {
  if (typeof n == "function")
    return (
      (e = e()),
      n(e),
      function () {
        n(null);
      }
    );
  if (n != null)
    return (
      (e = e()),
      (n.current = e),
      function () {
        n.current = null;
      }
    );
}
function jd(e, n, s) {
  return (
    (s = s != null ? s.concat([e]) : null), Vl(4, 4, gd.bind(null, n, e), s)
  );
}
function ta() {}
function _d(e, n) {
  var s = Ke();
  n = n === void 0 ? null : n;
  var l = s.memoizedState;
  return l !== null && n !== null && Ji(n, l[1])
    ? l[0]
    : ((s.memoizedState = [e, n]), e);
}
function yd(e, n) {
  var s = Ke();
  n = n === void 0 ? null : n;
  var l = s.memoizedState;
  return l !== null && n !== null && Ji(n, l[1])
    ? l[0]
    : ((e = e()), (s.memoizedState = [e, n]), e);
}
function Nd(e, n, s) {
  return Zn & 21
    ? (Ze(s, n) || ((s = Sc()), (X.lanes |= s), (et |= s), (e.baseState = !0)),
      n)
    : (e.baseState && ((e.baseState = !1), (Ae = !0)), (e.memoizedState = s));
}
function tm(e, n) {
  var s = V;
  (V = s !== 0 && 4 > s ? s : 4), e(!0);
  var l = fr.transition;
  fr.transition = {};
  try {
    e(!1), n();
  } finally {
    (V = s), (fr.transition = l);
  }
}
function wd() {
  return Ke().memoizedState;
}
function sm(e, n, s) {
  var l = Fn(e);
  if (
    ((s = {
      lane: l,
      action: s,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    kd(e))
  )
    Sd(n, s);
  else if (((s = nd(e, n, s, l)), s !== null)) {
    var r = ye();
    Je(s, e, l, r), zd(s, n, l);
  }
}
function lm(e, n, s) {
  var l = Fn(e),
    r = { lane: l, action: s, hasEagerState: !1, eagerState: null, next: null };
  if (kd(e)) Sd(n, r);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = n.lastRenderedReducer), i !== null)
    )
      try {
        var a = n.lastRenderedState,
          o = i(a, s);
        if (((r.hasEagerState = !0), (r.eagerState = o), Ze(o, a))) {
          var c = n.interleaved;
          c === null
            ? ((r.next = r), qi(n))
            : ((r.next = c.next), (c.next = r)),
            (n.interleaved = r);
          return;
        }
      } catch {
      } finally {
      }
    (s = nd(e, n, r, l)),
      s !== null && ((r = ye()), Je(s, e, l, r), zd(s, n, l));
  }
}
function kd(e) {
  var n = e.alternate;
  return e === X || (n !== null && n === X);
}
function Sd(e, n) {
  Zt = kl = !0;
  var s = e.pending;
  s === null ? (n.next = n) : ((n.next = s.next), (s.next = n)),
    (e.pending = n);
}
function zd(e, n, s) {
  if (s & 4194240) {
    var l = n.lanes;
    (l &= e.pendingLanes), (s |= l), (n.lanes = s), Ri(e, s);
  }
}
var Sl = {
    readContext: He,
    useCallback: fe,
    useContext: fe,
    useEffect: fe,
    useImperativeHandle: fe,
    useInsertionEffect: fe,
    useLayoutEffect: fe,
    useMemo: fe,
    useReducer: fe,
    useRef: fe,
    useState: fe,
    useDebugValue: fe,
    useDeferredValue: fe,
    useTransition: fe,
    useMutableSource: fe,
    useSyncExternalStore: fe,
    useId: fe,
    unstable_isNewReconciler: !1,
  },
  rm = {
    readContext: He,
    useCallback: function (e, n) {
      return (nn().memoizedState = [e, n === void 0 ? null : n]), e;
    },
    useContext: He,
    useEffect: ao,
    useImperativeHandle: function (e, n, s) {
      return (
        (s = s != null ? s.concat([e]) : null),
        nl(4194308, 4, gd.bind(null, n, e), s)
      );
    },
    useLayoutEffect: function (e, n) {
      return nl(4194308, 4, e, n);
    },
    useInsertionEffect: function (e, n) {
      return nl(4, 2, e, n);
    },
    useMemo: function (e, n) {
      var s = nn();
      return (
        (n = n === void 0 ? null : n), (e = e()), (s.memoizedState = [e, n]), e
      );
    },
    useReducer: function (e, n, s) {
      var l = nn();
      return (
        (n = s !== void 0 ? s(n) : n),
        (l.memoizedState = l.baseState = n),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: n,
        }),
        (l.queue = e),
        (e = e.dispatch = sm.bind(null, X, e)),
        [l.memoizedState, e]
      );
    },
    useRef: function (e) {
      var n = nn();
      return (e = { current: e }), (n.memoizedState = e);
    },
    useState: io,
    useDebugValue: ta,
    useDeferredValue: function (e) {
      return (nn().memoizedState = e);
    },
    useTransition: function () {
      var e = io(!1),
        n = e[0];
      return (e = tm.bind(null, e[1])), (nn().memoizedState = e), [n, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, n, s) {
      var l = X,
        r = nn();
      if ($) {
        if (s === void 0) throw Error(N(407));
        s = s();
      } else {
        if (((s = n()), de === null)) throw Error(N(349));
        Zn & 30 || dd(l, n, s);
      }
      r.memoizedState = s;
      var i = { value: s, getSnapshot: n };
      return (
        (r.queue = i),
        ao(hd.bind(null, l, i, e), [e]),
        (l.flags |= 2048),
        gs(9, ud.bind(null, l, i, s, n), void 0, null),
        s
      );
    },
    useId: function () {
      var e = nn(),
        n = de.identifierPrefix;
      if ($) {
        var s = hn,
          l = un;
        (s = (l & ~(1 << (32 - Xe(l) - 1))).toString(32) + s),
          (n = ":" + n + "R" + s),
          (s = xs++),
          0 < s && (n += "H" + s.toString(32)),
          (n += ":");
      } else (s = nm++), (n = ":" + n + "r" + s.toString(32) + ":");
      return (e.memoizedState = n);
    },
    unstable_isNewReconciler: !1,
  },
  im = {
    readContext: He,
    useCallback: _d,
    useContext: He,
    useEffect: na,
    useImperativeHandle: jd,
    useInsertionEffect: xd,
    useLayoutEffect: vd,
    useMemo: yd,
    useReducer: pr,
    useRef: pd,
    useState: function () {
      return pr(vs);
    },
    useDebugValue: ta,
    useDeferredValue: function (e) {
      var n = Ke();
      return Nd(n, ie.memoizedState, e);
    },
    useTransition: function () {
      var e = pr(vs)[0],
        n = Ke().memoizedState;
      return [e, n];
    },
    useMutableSource: od,
    useSyncExternalStore: cd,
    useId: wd,
    unstable_isNewReconciler: !1,
  },
  am = {
    readContext: He,
    useCallback: _d,
    useContext: He,
    useEffect: na,
    useImperativeHandle: jd,
    useInsertionEffect: xd,
    useLayoutEffect: vd,
    useMemo: yd,
    useReducer: xr,
    useRef: pd,
    useState: function () {
      return xr(vs);
    },
    useDebugValue: ta,
    useDeferredValue: function (e) {
      var n = Ke();
      return ie === null ? (n.memoizedState = e) : Nd(n, ie.memoizedState, e);
    },
    useTransition: function () {
      var e = xr(vs)[0],
        n = Ke().memoizedState;
      return [e, n];
    },
    useMutableSource: od,
    useSyncExternalStore: cd,
    useId: wd,
    unstable_isNewReconciler: !1,
  };
function bt(e, n) {
  try {
    var s = "",
      l = n;
    do (s += Fu(l)), (l = l.return);
    while (l);
    var r = s;
  } catch (i) {
    r =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: n, stack: r, digest: null };
}
function vr(e, n, s) {
  return { value: e, source: null, stack: s ?? null, digest: n ?? null };
}
function li(e, n) {
  try {
    console.error(n.value);
  } catch (s) {
    setTimeout(function () {
      throw s;
    });
  }
}
var om = typeof WeakMap == "function" ? WeakMap : Map;
function Ed(e, n, s) {
  (s = mn(-1, s)), (s.tag = 3), (s.payload = { element: null });
  var l = n.value;
  return (
    (s.callback = function () {
      El || ((El = !0), (fi = l)), li(e, n);
    }),
    s
  );
}
function Ad(e, n, s) {
  (s = mn(-1, s)), (s.tag = 3);
  var l = e.type.getDerivedStateFromError;
  if (typeof l == "function") {
    var r = n.value;
    (s.payload = function () {
      return l(r);
    }),
      (s.callback = function () {
        li(e, n);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (s.callback = function () {
        li(e, n),
          typeof l != "function" &&
            (Ln === null ? (Ln = new Set([this])) : Ln.add(this));
        var a = n.stack;
        this.componentDidCatch(n.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    s
  );
}
function oo(e, n, s) {
  var l = e.pingCache;
  if (l === null) {
    l = e.pingCache = new om();
    var r = new Set();
    l.set(n, r);
  } else (r = l.get(n)), r === void 0 && ((r = new Set()), l.set(n, r));
  r.has(s) || (r.add(s), (e = Nm.bind(null, e, n, s)), n.then(e, e));
}
function co(e) {
  do {
    var n;
    if (
      ((n = e.tag === 13) &&
        ((n = e.memoizedState), (n = n !== null ? n.dehydrated !== null : !0)),
      n)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function uo(e, n, s, l, r) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = r), e)
    : (e === n
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (s.flags |= 131072),
          (s.flags &= -52805),
          s.tag === 1 &&
            (s.alternate === null
              ? (s.tag = 17)
              : ((n = mn(-1, 1)), (n.tag = 2), Rn(s, n, 1))),
          (s.lanes |= 1)),
      e);
}
var cm = gn.ReactCurrentOwner,
  Ae = !1;
function _e(e, n, s, l) {
  n.child = e === null ? id(n, null, s, l) : At(n, e.child, s, l);
}
function ho(e, n, s, l, r) {
  s = s.render;
  var i = n.ref;
  return (
    Nt(n, r),
    (l = Zi(e, n, s, l, i, r)),
    (s = ea()),
    e !== null && !Ae
      ? ((n.updateQueue = e.updateQueue),
        (n.flags &= -2053),
        (e.lanes &= ~r),
        vn(e, n, r))
      : ($ && s && Vi(n), (n.flags |= 1), _e(e, n, l, r), n.child)
  );
}
function mo(e, n, s, l, r) {
  if (e === null) {
    var i = s.type;
    return typeof i == "function" &&
      !da(i) &&
      i.defaultProps === void 0 &&
      s.compare === null &&
      s.defaultProps === void 0
      ? ((n.tag = 15), (n.type = i), Cd(e, n, i, l, r))
      : ((e = rl(s.type, null, l, n, n.mode, r)),
        (e.ref = n.ref),
        (e.return = n),
        (n.child = e));
  }
  if (((i = e.child), !(e.lanes & r))) {
    var a = i.memoizedProps;
    if (
      ((s = s.compare), (s = s !== null ? s : ds), s(a, l) && e.ref === n.ref)
    )
      return vn(e, n, r);
  }
  return (
    (n.flags |= 1),
    (e = Mn(i, l)),
    (e.ref = n.ref),
    (e.return = n),
    (n.child = e)
  );
}
function Cd(e, n, s, l, r) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (ds(i, l) && e.ref === n.ref)
      if (((Ae = !1), (n.pendingProps = l = i), (e.lanes & r) !== 0))
        e.flags & 131072 && (Ae = !0);
      else return (n.lanes = e.lanes), vn(e, n, r);
  }
  return ri(e, n, s, l, r);
}
function bd(e, n, s) {
  var l = n.pendingProps,
    r = l.children,
    i = e !== null ? e.memoizedState : null;
  if (l.mode === "hidden")
    if (!(n.mode & 1))
      (n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Q(vt, Le),
        (Le |= s);
    else {
      if (!(s & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | s : s),
          (n.lanes = n.childLanes = 1073741824),
          (n.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (n.updateQueue = null),
          Q(vt, Le),
          (Le |= e),
          null
        );
      (n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (l = i !== null ? i.baseLanes : s),
        Q(vt, Le),
        (Le |= l);
    }
  else
    i !== null ? ((l = i.baseLanes | s), (n.memoizedState = null)) : (l = s),
      Q(vt, Le),
      (Le |= l);
  return _e(e, n, r, s), n.child;
}
function Pd(e, n) {
  var s = n.ref;
  ((e === null && s !== null) || (e !== null && e.ref !== s)) &&
    ((n.flags |= 512), (n.flags |= 2097152));
}
function ri(e, n, s, l, r) {
  var i = be(s) ? Xn : ve.current;
  return (
    (i = zt(n, i)),
    Nt(n, r),
    (s = Zi(e, n, s, l, i, r)),
    (l = ea()),
    e !== null && !Ae
      ? ((n.updateQueue = e.updateQueue),
        (n.flags &= -2053),
        (e.lanes &= ~r),
        vn(e, n, r))
      : ($ && l && Vi(n), (n.flags |= 1), _e(e, n, s, r), n.child)
  );
}
function fo(e, n, s, l, r) {
  if (be(s)) {
    var i = !0;
    vl(n);
  } else i = !1;
  if ((Nt(n, r), n.stateNode === null))
    tl(e, n), ld(n, s, l), si(n, s, l, r), (l = !0);
  else if (e === null) {
    var a = n.stateNode,
      o = n.memoizedProps;
    a.props = o;
    var c = a.context,
      d = s.contextType;
    typeof d == "object" && d !== null
      ? (d = He(d))
      : ((d = be(s) ? Xn : ve.current), (d = zt(n, d)));
    var x = s.getDerivedStateFromProps,
      p =
        typeof x == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((o !== l || c !== d) && lo(n, a, l, d)),
      (kn = !1);
    var h = n.memoizedState;
    (a.state = h),
      Nl(n, l, a, r),
      (c = n.memoizedState),
      o !== l || h !== c || Ce.current || kn
        ? (typeof x == "function" && (ti(n, s, x, l), (c = n.memoizedState)),
          (o = kn || so(n, s, o, l, h, c, d))
            ? (p ||
                (typeof a.UNSAFE_componentWillMount != "function" &&
                  typeof a.componentWillMount != "function") ||
                (typeof a.componentWillMount == "function" &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == "function" &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == "function" && (n.flags |= 4194308))
            : (typeof a.componentDidMount == "function" && (n.flags |= 4194308),
              (n.memoizedProps = l),
              (n.memoizedState = c)),
          (a.props = l),
          (a.state = c),
          (a.context = d),
          (l = o))
        : (typeof a.componentDidMount == "function" && (n.flags |= 4194308),
          (l = !1));
  } else {
    (a = n.stateNode),
      td(e, n),
      (o = n.memoizedProps),
      (d = n.type === n.elementType ? o : $e(n.type, o)),
      (a.props = d),
      (p = n.pendingProps),
      (h = a.context),
      (c = s.contextType),
      typeof c == "object" && c !== null
        ? (c = He(c))
        : ((c = be(s) ? Xn : ve.current), (c = zt(n, c)));
    var v = s.getDerivedStateFromProps;
    (x =
      typeof v == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((o !== p || h !== c) && lo(n, a, l, c)),
      (kn = !1),
      (h = n.memoizedState),
      (a.state = h),
      Nl(n, l, a, r);
    var g = n.memoizedState;
    o !== p || h !== g || Ce.current || kn
      ? (typeof v == "function" && (ti(n, s, v, l), (g = n.memoizedState)),
        (d = kn || so(n, s, d, l, h, g, c) || !1)
          ? (x ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(l, g, c),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(l, g, c)),
            typeof a.componentDidUpdate == "function" && (n.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (o === e.memoizedProps && h === e.memoizedState) ||
              (n.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (o === e.memoizedProps && h === e.memoizedState) ||
              (n.flags |= 1024),
            (n.memoizedProps = l),
            (n.memoizedState = g)),
        (a.props = l),
        (a.state = g),
        (a.context = c),
        (l = d))
      : (typeof a.componentDidUpdate != "function" ||
          (o === e.memoizedProps && h === e.memoizedState) ||
          (n.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (o === e.memoizedProps && h === e.memoizedState) ||
          (n.flags |= 1024),
        (l = !1));
  }
  return ii(e, n, s, l, i, r);
}
function ii(e, n, s, l, r, i) {
  Pd(e, n);
  var a = (n.flags & 128) !== 0;
  if (!l && !a) return r && Ja(n, s, !1), vn(e, n, i);
  (l = n.stateNode), (cm.current = n);
  var o =
    a && typeof s.getDerivedStateFromError != "function" ? null : l.render();
  return (
    (n.flags |= 1),
    e !== null && a
      ? ((n.child = At(n, e.child, null, i)), (n.child = At(n, null, o, i)))
      : _e(e, n, o, i),
    (n.memoizedState = l.state),
    r && Ja(n, s, !0),
    n.child
  );
}
function Td(e) {
  var n = e.stateNode;
  n.pendingContext
    ? Xa(e, n.pendingContext, n.pendingContext !== n.context)
    : n.context && Xa(e, n.context, !1),
    Yi(e, n.containerInfo);
}
function po(e, n, s, l, r) {
  return Et(), Qi(r), (n.flags |= 256), _e(e, n, s, l), n.child;
}
var ai = { dehydrated: null, treeContext: null, retryLane: 0 };
function oi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Rd(e, n, s) {
  var l = n.pendingProps,
    r = G.current,
    i = !1,
    a = (n.flags & 128) !== 0,
    o;
  if (
    ((o = a) ||
      (o = e !== null && e.memoizedState === null ? !1 : (r & 2) !== 0),
    o
      ? ((i = !0), (n.flags &= -129))
      : (e === null || e.memoizedState !== null) && (r |= 1),
    Q(G, r & 1),
    e === null)
  )
    return (
      ei(n),
      (e = n.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (n.mode & 1
            ? e.data === "$!"
              ? (n.lanes = 8)
              : (n.lanes = 1073741824)
            : (n.lanes = 1),
          null)
        : ((a = l.children),
          (e = l.fallback),
          i
            ? ((l = n.mode),
              (i = n.child),
              (a = { mode: "hidden", children: a }),
              !(l & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = a))
                : (i = Wl(a, l, 0, null)),
              (e = Gn(e, l, s, null)),
              (i.return = n),
              (e.return = n),
              (i.sibling = e),
              (n.child = i),
              (n.child.memoizedState = oi(s)),
              (n.memoizedState = ai),
              e)
            : sa(n, a))
    );
  if (((r = e.memoizedState), r !== null && ((o = r.dehydrated), o !== null)))
    return dm(e, n, a, l, o, r, s);
  if (i) {
    (i = l.fallback), (a = n.mode), (r = e.child), (o = r.sibling);
    var c = { mode: "hidden", children: l.children };
    return (
      !(a & 1) && n.child !== r
        ? ((l = n.child),
          (l.childLanes = 0),
          (l.pendingProps = c),
          (n.deletions = null))
        : ((l = Mn(r, c)), (l.subtreeFlags = r.subtreeFlags & 14680064)),
      o !== null ? (i = Mn(o, i)) : ((i = Gn(i, a, s, null)), (i.flags |= 2)),
      (i.return = n),
      (l.return = n),
      (l.sibling = i),
      (n.child = l),
      (l = i),
      (i = n.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? oi(s)
          : {
              baseLanes: a.baseLanes | s,
              cachePool: null,
              transitions: a.transitions,
            }),
      (i.memoizedState = a),
      (i.childLanes = e.childLanes & ~s),
      (n.memoizedState = ai),
      l
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (l = Mn(i, { mode: "visible", children: l.children })),
    !(n.mode & 1) && (l.lanes = s),
    (l.return = n),
    (l.sibling = null),
    e !== null &&
      ((s = n.deletions),
      s === null ? ((n.deletions = [e]), (n.flags |= 16)) : s.push(e)),
    (n.child = l),
    (n.memoizedState = null),
    l
  );
}
function sa(e, n) {
  return (
    (n = Wl({ mode: "visible", children: n }, e.mode, 0, null)),
    (n.return = e),
    (e.child = n)
  );
}
function Us(e, n, s, l) {
  return (
    l !== null && Qi(l),
    At(n, e.child, null, s),
    (e = sa(n, n.pendingProps.children)),
    (e.flags |= 2),
    (n.memoizedState = null),
    e
  );
}
function dm(e, n, s, l, r, i, a) {
  if (s)
    return n.flags & 256
      ? ((n.flags &= -257), (l = vr(Error(N(422)))), Us(e, n, a, l))
      : n.memoizedState !== null
      ? ((n.child = e.child), (n.flags |= 128), null)
      : ((i = l.fallback),
        (r = n.mode),
        (l = Wl({ mode: "visible", children: l.children }, r, 0, null)),
        (i = Gn(i, r, a, null)),
        (i.flags |= 2),
        (l.return = n),
        (i.return = n),
        (l.sibling = i),
        (n.child = l),
        n.mode & 1 && At(n, e.child, null, a),
        (n.child.memoizedState = oi(a)),
        (n.memoizedState = ai),
        i);
  if (!(n.mode & 1)) return Us(e, n, a, null);
  if (r.data === "$!") {
    if (((l = r.nextSibling && r.nextSibling.dataset), l)) var o = l.dgst;
    return (l = o), (i = Error(N(419))), (l = vr(i, l, void 0)), Us(e, n, a, l);
  }
  if (((o = (a & e.childLanes) !== 0), Ae || o)) {
    if (((l = de), l !== null)) {
      switch (a & -a) {
        case 4:
          r = 2;
          break;
        case 16:
          r = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          r = 32;
          break;
        case 536870912:
          r = 268435456;
          break;
        default:
          r = 0;
      }
      (r = r & (l.suspendedLanes | a) ? 0 : r),
        r !== 0 &&
          r !== i.retryLane &&
          ((i.retryLane = r), xn(e, r), Je(l, e, r, -1));
    }
    return ca(), (l = vr(Error(N(421)))), Us(e, n, a, l);
  }
  return r.data === "$?"
    ? ((n.flags |= 128),
      (n.child = e.child),
      (n = wm.bind(null, e)),
      (r._reactRetry = n),
      null)
    : ((e = i.treeContext),
      (Fe = Tn(r.nextSibling)),
      (Me = n),
      ($ = !0),
      (Ge = null),
      e !== null &&
        ((Ve[Ue++] = un),
        (Ve[Ue++] = hn),
        (Ve[Ue++] = Jn),
        (un = e.id),
        (hn = e.overflow),
        (Jn = n)),
      (n = sa(n, l.children)),
      (n.flags |= 4096),
      n);
}
function xo(e, n, s) {
  e.lanes |= n;
  var l = e.alternate;
  l !== null && (l.lanes |= n), ni(e.return, n, s);
}
function gr(e, n, s, l, r) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: n,
        rendering: null,
        renderingStartTime: 0,
        last: l,
        tail: s,
        tailMode: r,
      })
    : ((i.isBackwards = n),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = l),
      (i.tail = s),
      (i.tailMode = r));
}
function Ld(e, n, s) {
  var l = n.pendingProps,
    r = l.revealOrder,
    i = l.tail;
  if ((_e(e, n, l.children, s), (l = G.current), l & 2))
    (l = (l & 1) | 2), (n.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = n.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && xo(e, s, n);
        else if (e.tag === 19) xo(e, s, n);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === n) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === n) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    l &= 1;
  }
  if ((Q(G, l), !(n.mode & 1))) n.memoizedState = null;
  else
    switch (r) {
      case "forwards":
        for (s = n.child, r = null; s !== null; )
          (e = s.alternate),
            e !== null && wl(e) === null && (r = s),
            (s = s.sibling);
        (s = r),
          s === null
            ? ((r = n.child), (n.child = null))
            : ((r = s.sibling), (s.sibling = null)),
          gr(n, !1, r, s, i);
        break;
      case "backwards":
        for (s = null, r = n.child, n.child = null; r !== null; ) {
          if (((e = r.alternate), e !== null && wl(e) === null)) {
            n.child = r;
            break;
          }
          (e = r.sibling), (r.sibling = s), (s = r), (r = e);
        }
        gr(n, !0, s, null, i);
        break;
      case "together":
        gr(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
  return n.child;
}
function tl(e, n) {
  !(n.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (n.alternate = null), (n.flags |= 2));
}
function vn(e, n, s) {
  if (
    (e !== null && (n.dependencies = e.dependencies),
    (et |= n.lanes),
    !(s & n.childLanes))
  )
    return null;
  if (e !== null && n.child !== e.child) throw Error(N(153));
  if (n.child !== null) {
    for (
      e = n.child, s = Mn(e, e.pendingProps), n.child = s, s.return = n;
      e.sibling !== null;

    )
      (e = e.sibling), (s = s.sibling = Mn(e, e.pendingProps)), (s.return = n);
    s.sibling = null;
  }
  return n.child;
}
function um(e, n, s) {
  switch (n.tag) {
    case 3:
      Td(n), Et();
      break;
    case 5:
      ad(n);
      break;
    case 1:
      be(n.type) && vl(n);
      break;
    case 4:
      Yi(n, n.stateNode.containerInfo);
      break;
    case 10:
      var l = n.type._context,
        r = n.memoizedProps.value;
      Q(_l, l._currentValue), (l._currentValue = r);
      break;
    case 13:
      if (((l = n.memoizedState), l !== null))
        return l.dehydrated !== null
          ? (Q(G, G.current & 1), (n.flags |= 128), null)
          : s & n.child.childLanes
          ? Rd(e, n, s)
          : (Q(G, G.current & 1),
            (e = vn(e, n, s)),
            e !== null ? e.sibling : null);
      Q(G, G.current & 1);
      break;
    case 19:
      if (((l = (s & n.childLanes) !== 0), e.flags & 128)) {
        if (l) return Ld(e, n, s);
        n.flags |= 128;
      }
      if (
        ((r = n.memoizedState),
        r !== null &&
          ((r.rendering = null), (r.tail = null), (r.lastEffect = null)),
        Q(G, G.current),
        l)
      )
        break;
      return null;
    case 22:
    case 23:
      return (n.lanes = 0), bd(e, n, s);
  }
  return vn(e, n, s);
}
var Fd, ci, Md, Od;
Fd = function (e, n) {
  for (var s = n.child; s !== null; ) {
    if (s.tag === 5 || s.tag === 6) e.appendChild(s.stateNode);
    else if (s.tag !== 4 && s.child !== null) {
      (s.child.return = s), (s = s.child);
      continue;
    }
    if (s === n) break;
    for (; s.sibling === null; ) {
      if (s.return === null || s.return === n) return;
      s = s.return;
    }
    (s.sibling.return = s.return), (s = s.sibling);
  }
};
ci = function () {};
Md = function (e, n, s, l) {
  var r = e.memoizedProps;
  if (r !== l) {
    (e = n.stateNode), qn(ln.current);
    var i = null;
    switch (s) {
      case "input":
        (r = Pr(e, r)), (l = Pr(e, l)), (i = []);
        break;
      case "select":
        (r = J({}, r, { value: void 0 })),
          (l = J({}, l, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (r = Lr(e, r)), (l = Lr(e, l)), (i = []);
        break;
      default:
        typeof r.onClick != "function" &&
          typeof l.onClick == "function" &&
          (e.onclick = pl);
    }
    Mr(s, l);
    var a;
    s = null;
    for (d in r)
      if (!l.hasOwnProperty(d) && r.hasOwnProperty(d) && r[d] != null)
        if (d === "style") {
          var o = r[d];
          for (a in o) o.hasOwnProperty(a) && (s || (s = {}), (s[a] = ""));
        } else
          d !== "dangerouslySetInnerHTML" &&
            d !== "children" &&
            d !== "suppressContentEditableWarning" &&
            d !== "suppressHydrationWarning" &&
            d !== "autoFocus" &&
            (ss.hasOwnProperty(d)
              ? i || (i = [])
              : (i = i || []).push(d, null));
    for (d in l) {
      var c = l[d];
      if (
        ((o = r != null ? r[d] : void 0),
        l.hasOwnProperty(d) && c !== o && (c != null || o != null))
      )
        if (d === "style")
          if (o) {
            for (a in o)
              !o.hasOwnProperty(a) ||
                (c && c.hasOwnProperty(a)) ||
                (s || (s = {}), (s[a] = ""));
            for (a in c)
              c.hasOwnProperty(a) &&
                o[a] !== c[a] &&
                (s || (s = {}), (s[a] = c[a]));
          } else s || (i || (i = []), i.push(d, s)), (s = c);
        else
          d === "dangerouslySetInnerHTML"
            ? ((c = c ? c.__html : void 0),
              (o = o ? o.__html : void 0),
              c != null && o !== c && (i = i || []).push(d, c))
            : d === "children"
            ? (typeof c != "string" && typeof c != "number") ||
              (i = i || []).push(d, "" + c)
            : d !== "suppressContentEditableWarning" &&
              d !== "suppressHydrationWarning" &&
              (ss.hasOwnProperty(d)
                ? (c != null && d === "onScroll" && H("scroll", e),
                  i || o === c || (i = []))
                : (i = i || []).push(d, c));
    }
    s && (i = i || []).push("style", s);
    var d = i;
    (n.updateQueue = d) && (n.flags |= 4);
  }
};
Od = function (e, n, s, l) {
  s !== l && (n.flags |= 4);
};
function Ut(e, n) {
  if (!$)
    switch (e.tailMode) {
      case "hidden":
        n = e.tail;
        for (var s = null; n !== null; )
          n.alternate !== null && (s = n), (n = n.sibling);
        s === null ? (e.tail = null) : (s.sibling = null);
        break;
      case "collapsed":
        s = e.tail;
        for (var l = null; s !== null; )
          s.alternate !== null && (l = s), (s = s.sibling);
        l === null
          ? n || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (l.sibling = null);
    }
}
function pe(e) {
  var n = e.alternate !== null && e.alternate.child === e.child,
    s = 0,
    l = 0;
  if (n)
    for (var r = e.child; r !== null; )
      (s |= r.lanes | r.childLanes),
        (l |= r.subtreeFlags & 14680064),
        (l |= r.flags & 14680064),
        (r.return = e),
        (r = r.sibling);
  else
    for (r = e.child; r !== null; )
      (s |= r.lanes | r.childLanes),
        (l |= r.subtreeFlags),
        (l |= r.flags),
        (r.return = e),
        (r = r.sibling);
  return (e.subtreeFlags |= l), (e.childLanes = s), n;
}
function hm(e, n, s) {
  var l = n.pendingProps;
  switch ((Ui(n), n.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return pe(n), null;
    case 1:
      return be(n.type) && xl(), pe(n), null;
    case 3:
      return (
        (l = n.stateNode),
        Ct(),
        K(Ce),
        K(ve),
        Xi(),
        l.pendingContext &&
          ((l.context = l.pendingContext), (l.pendingContext = null)),
        (e === null || e.child === null) &&
          (Bs(n)
            ? (n.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(n.flags & 256)) ||
              ((n.flags |= 1024), Ge !== null && (vi(Ge), (Ge = null)))),
        ci(e, n),
        pe(n),
        null
      );
    case 5:
      Gi(n);
      var r = qn(ps.current);
      if (((s = n.type), e !== null && n.stateNode != null))
        Md(e, n, s, l, r),
          e.ref !== n.ref && ((n.flags |= 512), (n.flags |= 2097152));
      else {
        if (!l) {
          if (n.stateNode === null) throw Error(N(166));
          return pe(n), null;
        }
        if (((e = qn(ln.current)), Bs(n))) {
          (l = n.stateNode), (s = n.type);
          var i = n.memoizedProps;
          switch (((l[tn] = n), (l[ms] = i), (e = (n.mode & 1) !== 0), s)) {
            case "dialog":
              H("cancel", l), H("close", l);
              break;
            case "iframe":
            case "object":
            case "embed":
              H("load", l);
              break;
            case "video":
            case "audio":
              for (r = 0; r < qt.length; r++) H(qt[r], l);
              break;
            case "source":
              H("error", l);
              break;
            case "img":
            case "image":
            case "link":
              H("error", l), H("load", l);
              break;
            case "details":
              H("toggle", l);
              break;
            case "input":
              ka(l, i), H("invalid", l);
              break;
            case "select":
              (l._wrapperState = { wasMultiple: !!i.multiple }),
                H("invalid", l);
              break;
            case "textarea":
              za(l, i), H("invalid", l);
          }
          Mr(s, i), (r = null);
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              var o = i[a];
              a === "children"
                ? typeof o == "string"
                  ? l.textContent !== o &&
                    (i.suppressHydrationWarning !== !0 &&
                      Is(l.textContent, o, e),
                    (r = ["children", o]))
                  : typeof o == "number" &&
                    l.textContent !== "" + o &&
                    (i.suppressHydrationWarning !== !0 &&
                      Is(l.textContent, o, e),
                    (r = ["children", "" + o]))
                : ss.hasOwnProperty(a) &&
                  o != null &&
                  a === "onScroll" &&
                  H("scroll", l);
            }
          switch (s) {
            case "input":
              Ps(l), Sa(l, i, !0);
              break;
            case "textarea":
              Ps(l), Ea(l);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (l.onclick = pl);
          }
          (l = r), (n.updateQueue = l), l !== null && (n.flags |= 4);
        } else {
          (a = r.nodeType === 9 ? r : r.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = dc(s)),
            e === "http://www.w3.org/1999/xhtml"
              ? s === "script"
                ? ((e = a.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof l.is == "string"
                ? (e = a.createElement(s, { is: l.is }))
                : ((e = a.createElement(s)),
                  s === "select" &&
                    ((a = e),
                    l.multiple
                      ? (a.multiple = !0)
                      : l.size && (a.size = l.size)))
              : (e = a.createElementNS(e, s)),
            (e[tn] = n),
            (e[ms] = l),
            Fd(e, n, !1, !1),
            (n.stateNode = e);
          e: {
            switch (((a = Or(s, l)), s)) {
              case "dialog":
                H("cancel", e), H("close", e), (r = l);
                break;
              case "iframe":
              case "object":
              case "embed":
                H("load", e), (r = l);
                break;
              case "video":
              case "audio":
                for (r = 0; r < qt.length; r++) H(qt[r], e);
                r = l;
                break;
              case "source":
                H("error", e), (r = l);
                break;
              case "img":
              case "image":
              case "link":
                H("error", e), H("load", e), (r = l);
                break;
              case "details":
                H("toggle", e), (r = l);
                break;
              case "input":
                ka(e, l), (r = Pr(e, l)), H("invalid", e);
                break;
              case "option":
                r = l;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!l.multiple }),
                  (r = J({}, l, { value: void 0 })),
                  H("invalid", e);
                break;
              case "textarea":
                za(e, l), (r = Lr(e, l)), H("invalid", e);
                break;
              default:
                r = l;
            }
            Mr(s, r), (o = r);
            for (i in o)
              if (o.hasOwnProperty(i)) {
                var c = o[i];
                i === "style"
                  ? mc(e, c)
                  : i === "dangerouslySetInnerHTML"
                  ? ((c = c ? c.__html : void 0), c != null && uc(e, c))
                  : i === "children"
                  ? typeof c == "string"
                    ? (s !== "textarea" || c !== "") && ls(e, c)
                    : typeof c == "number" && ls(e, "" + c)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (ss.hasOwnProperty(i)
                      ? c != null && i === "onScroll" && H("scroll", e)
                      : c != null && Ei(e, i, c, a));
              }
            switch (s) {
              case "input":
                Ps(e), Sa(e, l, !1);
                break;
              case "textarea":
                Ps(e), Ea(e);
                break;
              case "option":
                l.value != null && e.setAttribute("value", "" + Dn(l.value));
                break;
              case "select":
                (e.multiple = !!l.multiple),
                  (i = l.value),
                  i != null
                    ? gt(e, !!l.multiple, i, !1)
                    : l.defaultValue != null &&
                      gt(e, !!l.multiple, l.defaultValue, !0);
                break;
              default:
                typeof r.onClick == "function" && (e.onclick = pl);
            }
            switch (s) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!l.autoFocus;
                break e;
              case "img":
                l = !0;
                break e;
              default:
                l = !1;
            }
          }
          l && (n.flags |= 4);
        }
        n.ref !== null && ((n.flags |= 512), (n.flags |= 2097152));
      }
      return pe(n), null;
    case 6:
      if (e && n.stateNode != null) Od(e, n, e.memoizedProps, l);
      else {
        if (typeof l != "string" && n.stateNode === null) throw Error(N(166));
        if (((s = qn(ps.current)), qn(ln.current), Bs(n))) {
          if (
            ((l = n.stateNode),
            (s = n.memoizedProps),
            (l[tn] = n),
            (i = l.nodeValue !== s) && ((e = Me), e !== null))
          )
            switch (e.tag) {
              case 3:
                Is(l.nodeValue, s, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Is(l.nodeValue, s, (e.mode & 1) !== 0);
            }
          i && (n.flags |= 4);
        } else
          (l = (s.nodeType === 9 ? s : s.ownerDocument).createTextNode(l)),
            (l[tn] = n),
            (n.stateNode = l);
      }
      return pe(n), null;
    case 13:
      if (
        (K(G),
        (l = n.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if ($ && Fe !== null && n.mode & 1 && !(n.flags & 128))
          ed(), Et(), (n.flags |= 98560), (i = !1);
        else if (((i = Bs(n)), l !== null && l.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(N(318));
            if (
              ((i = n.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(N(317));
            i[tn] = n;
          } else
            Et(), !(n.flags & 128) && (n.memoizedState = null), (n.flags |= 4);
          pe(n), (i = !1);
        } else Ge !== null && (vi(Ge), (Ge = null)), (i = !0);
        if (!i) return n.flags & 65536 ? n : null;
      }
      return n.flags & 128
        ? ((n.lanes = s), n)
        : ((l = l !== null),
          l !== (e !== null && e.memoizedState !== null) &&
            l &&
            ((n.child.flags |= 8192),
            n.mode & 1 &&
              (e === null || G.current & 1 ? ae === 0 && (ae = 3) : ca())),
          n.updateQueue !== null && (n.flags |= 4),
          pe(n),
          null);
    case 4:
      return (
        Ct(), ci(e, n), e === null && us(n.stateNode.containerInfo), pe(n), null
      );
    case 10:
      return Ki(n.type._context), pe(n), null;
    case 17:
      return be(n.type) && xl(), pe(n), null;
    case 19:
      if ((K(G), (i = n.memoizedState), i === null)) return pe(n), null;
      if (((l = (n.flags & 128) !== 0), (a = i.rendering), a === null))
        if (l) Ut(i, !1);
        else {
          if (ae !== 0 || (e !== null && e.flags & 128))
            for (e = n.child; e !== null; ) {
              if (((a = wl(e)), a !== null)) {
                for (
                  n.flags |= 128,
                    Ut(i, !1),
                    l = a.updateQueue,
                    l !== null && ((n.updateQueue = l), (n.flags |= 4)),
                    n.subtreeFlags = 0,
                    l = s,
                    s = n.child;
                  s !== null;

                )
                  (i = s),
                    (e = l),
                    (i.flags &= 14680066),
                    (a = i.alternate),
                    a === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = a.childLanes),
                        (i.lanes = a.lanes),
                        (i.child = a.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = a.memoizedProps),
                        (i.memoizedState = a.memoizedState),
                        (i.updateQueue = a.updateQueue),
                        (i.type = a.type),
                        (e = a.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (s = s.sibling);
                return Q(G, (G.current & 1) | 2), n.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            ne() > Pt &&
            ((n.flags |= 128), (l = !0), Ut(i, !1), (n.lanes = 4194304));
        }
      else {
        if (!l)
          if (((e = wl(a)), e !== null)) {
            if (
              ((n.flags |= 128),
              (l = !0),
              (s = e.updateQueue),
              s !== null && ((n.updateQueue = s), (n.flags |= 4)),
              Ut(i, !0),
              i.tail === null && i.tailMode === "hidden" && !a.alternate && !$)
            )
              return pe(n), null;
          } else
            2 * ne() - i.renderingStartTime > Pt &&
              s !== 1073741824 &&
              ((n.flags |= 128), (l = !0), Ut(i, !1), (n.lanes = 4194304));
        i.isBackwards
          ? ((a.sibling = n.child), (n.child = a))
          : ((s = i.last),
            s !== null ? (s.sibling = a) : (n.child = a),
            (i.last = a));
      }
      return i.tail !== null
        ? ((n = i.tail),
          (i.rendering = n),
          (i.tail = n.sibling),
          (i.renderingStartTime = ne()),
          (n.sibling = null),
          (s = G.current),
          Q(G, l ? (s & 1) | 2 : s & 1),
          n)
        : (pe(n), null);
    case 22:
    case 23:
      return (
        oa(),
        (l = n.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== l && (n.flags |= 8192),
        l && n.mode & 1
          ? Le & 1073741824 && (pe(n), n.subtreeFlags & 6 && (n.flags |= 8192))
          : pe(n),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(N(156, n.tag));
}
function mm(e, n) {
  switch ((Ui(n), n.tag)) {
    case 1:
      return (
        be(n.type) && xl(),
        (e = n.flags),
        e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
      );
    case 3:
      return (
        Ct(),
        K(Ce),
        K(ve),
        Xi(),
        (e = n.flags),
        e & 65536 && !(e & 128) ? ((n.flags = (e & -65537) | 128), n) : null
      );
    case 5:
      return Gi(n), null;
    case 13:
      if ((K(G), (e = n.memoizedState), e !== null && e.dehydrated !== null)) {
        if (n.alternate === null) throw Error(N(340));
        Et();
      }
      return (
        (e = n.flags), e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
      );
    case 19:
      return K(G), null;
    case 4:
      return Ct(), null;
    case 10:
      return Ki(n.type._context), null;
    case 22:
    case 23:
      return oa(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Qs = !1,
  xe = !1,
  fm = typeof WeakSet == "function" ? WeakSet : Set,
  C = null;
function xt(e, n) {
  var s = e.ref;
  if (s !== null)
    if (typeof s == "function")
      try {
        s(null);
      } catch (l) {
        ee(e, n, l);
      }
    else s.current = null;
}
function di(e, n, s) {
  try {
    s();
  } catch (l) {
    ee(e, n, l);
  }
}
var vo = !1;
function pm(e, n) {
  if (((qr = hl), (e = Vc()), Bi(e))) {
    if ("selectionStart" in e)
      var s = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        s = ((s = e.ownerDocument) && s.defaultView) || window;
        var l = s.getSelection && s.getSelection();
        if (l && l.rangeCount !== 0) {
          s = l.anchorNode;
          var r = l.anchorOffset,
            i = l.focusNode;
          l = l.focusOffset;
          try {
            s.nodeType, i.nodeType;
          } catch {
            s = null;
            break e;
          }
          var a = 0,
            o = -1,
            c = -1,
            d = 0,
            x = 0,
            p = e,
            h = null;
          n: for (;;) {
            for (
              var v;
              p !== s || (r !== 0 && p.nodeType !== 3) || (o = a + r),
                p !== i || (l !== 0 && p.nodeType !== 3) || (c = a + l),
                p.nodeType === 3 && (a += p.nodeValue.length),
                (v = p.firstChild) !== null;

            )
              (h = p), (p = v);
            for (;;) {
              if (p === e) break n;
              if (
                (h === s && ++d === r && (o = a),
                h === i && ++x === l && (c = a),
                (v = p.nextSibling) !== null)
              )
                break;
              (p = h), (h = p.parentNode);
            }
            p = v;
          }
          s = o === -1 || c === -1 ? null : { start: o, end: c };
        } else s = null;
      }
    s = s || { start: 0, end: 0 };
  } else s = null;
  for ($r = { focusedElem: e, selectionRange: s }, hl = !1, C = n; C !== null; )
    if (((n = C), (e = n.child), (n.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = n), (C = e);
    else
      for (; C !== null; ) {
        n = C;
        try {
          var g = n.alternate;
          if (n.flags & 1024)
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var w = g.memoizedProps,
                    M = g.memoizedState,
                    m = n.stateNode,
                    u = m.getSnapshotBeforeUpdate(
                      n.elementType === n.type ? w : $e(n.type, w),
                      M
                    );
                  m.__reactInternalSnapshotBeforeUpdate = u;
                }
                break;
              case 3:
                var f = n.stateNode.containerInfo;
                f.nodeType === 1
                  ? (f.textContent = "")
                  : f.nodeType === 9 &&
                    f.documentElement &&
                    f.removeChild(f.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(N(163));
            }
        } catch (_) {
          ee(n, n.return, _);
        }
        if (((e = n.sibling), e !== null)) {
          (e.return = n.return), (C = e);
          break;
        }
        C = n.return;
      }
  return (g = vo), (vo = !1), g;
}
function es(e, n, s) {
  var l = n.updateQueue;
  if (((l = l !== null ? l.lastEffect : null), l !== null)) {
    var r = (l = l.next);
    do {
      if ((r.tag & e) === e) {
        var i = r.destroy;
        (r.destroy = void 0), i !== void 0 && di(n, s, i);
      }
      r = r.next;
    } while (r !== l);
  }
}
function Ul(e, n) {
  if (
    ((n = n.updateQueue), (n = n !== null ? n.lastEffect : null), n !== null)
  ) {
    var s = (n = n.next);
    do {
      if ((s.tag & e) === e) {
        var l = s.create;
        s.destroy = l();
      }
      s = s.next;
    } while (s !== n);
  }
}
function ui(e) {
  var n = e.ref;
  if (n !== null) {
    var s = e.stateNode;
    switch (e.tag) {
      case 5:
        e = s;
        break;
      default:
        e = s;
    }
    typeof n == "function" ? n(e) : (n.current = e);
  }
}
function Dd(e) {
  var n = e.alternate;
  n !== null && ((e.alternate = null), Dd(n)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((n = e.stateNode),
      n !== null &&
        (delete n[tn], delete n[ms], delete n[Xr], delete n[Xh], delete n[Jh])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Id(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function go(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Id(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function hi(e, n, s) {
  var l = e.tag;
  if (l === 5 || l === 6)
    (e = e.stateNode),
      n
        ? s.nodeType === 8
          ? s.parentNode.insertBefore(e, n)
          : s.insertBefore(e, n)
        : (s.nodeType === 8
            ? ((n = s.parentNode), n.insertBefore(e, s))
            : ((n = s), n.appendChild(e)),
          (s = s._reactRootContainer),
          s != null || n.onclick !== null || (n.onclick = pl));
  else if (l !== 4 && ((e = e.child), e !== null))
    for (hi(e, n, s), e = e.sibling; e !== null; ) hi(e, n, s), (e = e.sibling);
}
function mi(e, n, s) {
  var l = e.tag;
  if (l === 5 || l === 6)
    (e = e.stateNode), n ? s.insertBefore(e, n) : s.appendChild(e);
  else if (l !== 4 && ((e = e.child), e !== null))
    for (mi(e, n, s), e = e.sibling; e !== null; ) mi(e, n, s), (e = e.sibling);
}
var ue = null,
  Ye = !1;
function Nn(e, n, s) {
  for (s = s.child; s !== null; ) Bd(e, n, s), (s = s.sibling);
}
function Bd(e, n, s) {
  if (sn && typeof sn.onCommitFiberUnmount == "function")
    try {
      sn.onCommitFiberUnmount(Ll, s);
    } catch {}
  switch (s.tag) {
    case 5:
      xe || xt(s, n);
    case 6:
      var l = ue,
        r = Ye;
      (ue = null),
        Nn(e, n, s),
        (ue = l),
        (Ye = r),
        ue !== null &&
          (Ye
            ? ((e = ue),
              (s = s.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(s) : e.removeChild(s))
            : ue.removeChild(s.stateNode));
      break;
    case 18:
      ue !== null &&
        (Ye
          ? ((e = ue),
            (s = s.stateNode),
            e.nodeType === 8
              ? ur(e.parentNode, s)
              : e.nodeType === 1 && ur(e, s),
            os(e))
          : ur(ue, s.stateNode));
      break;
    case 4:
      (l = ue),
        (r = Ye),
        (ue = s.stateNode.containerInfo),
        (Ye = !0),
        Nn(e, n, s),
        (ue = l),
        (Ye = r);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !xe &&
        ((l = s.updateQueue), l !== null && ((l = l.lastEffect), l !== null))
      ) {
        r = l = l.next;
        do {
          var i = r,
            a = i.destroy;
          (i = i.tag),
            a !== void 0 && (i & 2 || i & 4) && di(s, n, a),
            (r = r.next);
        } while (r !== l);
      }
      Nn(e, n, s);
      break;
    case 1:
      if (
        !xe &&
        (xt(s, n),
        (l = s.stateNode),
        typeof l.componentWillUnmount == "function")
      )
        try {
          (l.props = s.memoizedProps),
            (l.state = s.memoizedState),
            l.componentWillUnmount();
        } catch (o) {
          ee(s, n, o);
        }
      Nn(e, n, s);
      break;
    case 21:
      Nn(e, n, s);
      break;
    case 22:
      s.mode & 1
        ? ((xe = (l = xe) || s.memoizedState !== null), Nn(e, n, s), (xe = l))
        : Nn(e, n, s);
      break;
    default:
      Nn(e, n, s);
  }
}
function jo(e) {
  var n = e.updateQueue;
  if (n !== null) {
    e.updateQueue = null;
    var s = e.stateNode;
    s === null && (s = e.stateNode = new fm()),
      n.forEach(function (l) {
        var r = km.bind(null, e, l);
        s.has(l) || (s.add(l), l.then(r, r));
      });
  }
}
function qe(e, n) {
  var s = n.deletions;
  if (s !== null)
    for (var l = 0; l < s.length; l++) {
      var r = s[l];
      try {
        var i = e,
          a = n,
          o = a;
        e: for (; o !== null; ) {
          switch (o.tag) {
            case 5:
              (ue = o.stateNode), (Ye = !1);
              break e;
            case 3:
              (ue = o.stateNode.containerInfo), (Ye = !0);
              break e;
            case 4:
              (ue = o.stateNode.containerInfo), (Ye = !0);
              break e;
          }
          o = o.return;
        }
        if (ue === null) throw Error(N(160));
        Bd(i, a, r), (ue = null), (Ye = !1);
        var c = r.alternate;
        c !== null && (c.return = null), (r.return = null);
      } catch (d) {
        ee(r, n, d);
      }
    }
  if (n.subtreeFlags & 12854)
    for (n = n.child; n !== null; ) Vd(n, e), (n = n.sibling);
}
function Vd(e, n) {
  var s = e.alternate,
    l = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((qe(n, e), en(e), l & 4)) {
        try {
          es(3, e, e.return), Ul(3, e);
        } catch (w) {
          ee(e, e.return, w);
        }
        try {
          es(5, e, e.return);
        } catch (w) {
          ee(e, e.return, w);
        }
      }
      break;
    case 1:
      qe(n, e), en(e), l & 512 && s !== null && xt(s, s.return);
      break;
    case 5:
      if (
        (qe(n, e),
        en(e),
        l & 512 && s !== null && xt(s, s.return),
        e.flags & 32)
      ) {
        var r = e.stateNode;
        try {
          ls(r, "");
        } catch (w) {
          ee(e, e.return, w);
        }
      }
      if (l & 4 && ((r = e.stateNode), r != null)) {
        var i = e.memoizedProps,
          a = s !== null ? s.memoizedProps : i,
          o = e.type,
          c = e.updateQueue;
        if (((e.updateQueue = null), c !== null))
          try {
            o === "input" && i.type === "radio" && i.name != null && oc(r, i),
              Or(o, a);
            var d = Or(o, i);
            for (a = 0; a < c.length; a += 2) {
              var x = c[a],
                p = c[a + 1];
              x === "style"
                ? mc(r, p)
                : x === "dangerouslySetInnerHTML"
                ? uc(r, p)
                : x === "children"
                ? ls(r, p)
                : Ei(r, x, p, d);
            }
            switch (o) {
              case "input":
                Tr(r, i);
                break;
              case "textarea":
                cc(r, i);
                break;
              case "select":
                var h = r._wrapperState.wasMultiple;
                r._wrapperState.wasMultiple = !!i.multiple;
                var v = i.value;
                v != null
                  ? gt(r, !!i.multiple, v, !1)
                  : h !== !!i.multiple &&
                    (i.defaultValue != null
                      ? gt(r, !!i.multiple, i.defaultValue, !0)
                      : gt(r, !!i.multiple, i.multiple ? [] : "", !1));
            }
            r[ms] = i;
          } catch (w) {
            ee(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((qe(n, e), en(e), l & 4)) {
        if (e.stateNode === null) throw Error(N(162));
        (r = e.stateNode), (i = e.memoizedProps);
        try {
          r.nodeValue = i;
        } catch (w) {
          ee(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (qe(n, e), en(e), l & 4 && s !== null && s.memoizedState.isDehydrated)
      )
        try {
          os(n.containerInfo);
        } catch (w) {
          ee(e, e.return, w);
        }
      break;
    case 4:
      qe(n, e), en(e);
      break;
    case 13:
      qe(n, e),
        en(e),
        (r = e.child),
        r.flags & 8192 &&
          ((i = r.memoizedState !== null),
          (r.stateNode.isHidden = i),
          !i ||
            (r.alternate !== null && r.alternate.memoizedState !== null) ||
            (ia = ne())),
        l & 4 && jo(e);
      break;
    case 22:
      if (
        ((x = s !== null && s.memoizedState !== null),
        e.mode & 1 ? ((xe = (d = xe) || x), qe(n, e), (xe = d)) : qe(n, e),
        en(e),
        l & 8192)
      ) {
        if (
          ((d = e.memoizedState !== null),
          (e.stateNode.isHidden = d) && !x && e.mode & 1)
        )
          for (C = e, x = e.child; x !== null; ) {
            for (p = C = x; C !== null; ) {
              switch (((h = C), (v = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  es(4, h, h.return);
                  break;
                case 1:
                  xt(h, h.return);
                  var g = h.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    (l = h), (s = h.return);
                    try {
                      (n = l),
                        (g.props = n.memoizedProps),
                        (g.state = n.memoizedState),
                        g.componentWillUnmount();
                    } catch (w) {
                      ee(l, s, w);
                    }
                  }
                  break;
                case 5:
                  xt(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    yo(p);
                    continue;
                  }
              }
              v !== null ? ((v.return = h), (C = v)) : yo(p);
            }
            x = x.sibling;
          }
        e: for (x = null, p = e; ; ) {
          if (p.tag === 5) {
            if (x === null) {
              x = p;
              try {
                (r = p.stateNode),
                  d
                    ? ((i = r.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((o = p.stateNode),
                      (c = p.memoizedProps.style),
                      (a =
                        c != null && c.hasOwnProperty("display")
                          ? c.display
                          : null),
                      (o.style.display = hc("display", a)));
              } catch (w) {
                ee(e, e.return, w);
              }
            }
          } else if (p.tag === 6) {
            if (x === null)
              try {
                p.stateNode.nodeValue = d ? "" : p.memoizedProps;
              } catch (w) {
                ee(e, e.return, w);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            x === p && (x = null), (p = p.return);
          }
          x === p && (x = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      qe(n, e), en(e), l & 4 && jo(e);
      break;
    case 21:
      break;
    default:
      qe(n, e), en(e);
  }
}
function en(e) {
  var n = e.flags;
  if (n & 2) {
    try {
      e: {
        for (var s = e.return; s !== null; ) {
          if (Id(s)) {
            var l = s;
            break e;
          }
          s = s.return;
        }
        throw Error(N(160));
      }
      switch (l.tag) {
        case 5:
          var r = l.stateNode;
          l.flags & 32 && (ls(r, ""), (l.flags &= -33));
          var i = go(e);
          mi(e, i, r);
          break;
        case 3:
        case 4:
          var a = l.stateNode.containerInfo,
            o = go(e);
          hi(e, o, a);
          break;
        default:
          throw Error(N(161));
      }
    } catch (c) {
      ee(e, e.return, c);
    }
    e.flags &= -3;
  }
  n & 4096 && (e.flags &= -4097);
}
function xm(e, n, s) {
  (C = e), Ud(e);
}
function Ud(e, n, s) {
  for (var l = (e.mode & 1) !== 0; C !== null; ) {
    var r = C,
      i = r.child;
    if (r.tag === 22 && l) {
      var a = r.memoizedState !== null || Qs;
      if (!a) {
        var o = r.alternate,
          c = (o !== null && o.memoizedState !== null) || xe;
        o = Qs;
        var d = xe;
        if (((Qs = a), (xe = c) && !d))
          for (C = r; C !== null; )
            (a = C),
              (c = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? No(r)
                : c !== null
                ? ((c.return = a), (C = c))
                : No(r);
        for (; i !== null; ) (C = i), Ud(i), (i = i.sibling);
        (C = r), (Qs = o), (xe = d);
      }
      _o(e);
    } else
      r.subtreeFlags & 8772 && i !== null ? ((i.return = r), (C = i)) : _o(e);
  }
}
function _o(e) {
  for (; C !== null; ) {
    var n = C;
    if (n.flags & 8772) {
      var s = n.alternate;
      try {
        if (n.flags & 8772)
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
              xe || Ul(5, n);
              break;
            case 1:
              var l = n.stateNode;
              if (n.flags & 4 && !xe)
                if (s === null) l.componentDidMount();
                else {
                  var r =
                    n.elementType === n.type
                      ? s.memoizedProps
                      : $e(n.type, s.memoizedProps);
                  l.componentDidUpdate(
                    r,
                    s.memoizedState,
                    l.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = n.updateQueue;
              i !== null && to(n, i, l);
              break;
            case 3:
              var a = n.updateQueue;
              if (a !== null) {
                if (((s = null), n.child !== null))
                  switch (n.child.tag) {
                    case 5:
                      s = n.child.stateNode;
                      break;
                    case 1:
                      s = n.child.stateNode;
                  }
                to(n, a, s);
              }
              break;
            case 5:
              var o = n.stateNode;
              if (s === null && n.flags & 4) {
                s = o;
                var c = n.memoizedProps;
                switch (n.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    c.autoFocus && s.focus();
                    break;
                  case "img":
                    c.src && (s.src = c.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (n.memoizedState === null) {
                var d = n.alternate;
                if (d !== null) {
                  var x = d.memoizedState;
                  if (x !== null) {
                    var p = x.dehydrated;
                    p !== null && os(p);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(N(163));
          }
        xe || (n.flags & 512 && ui(n));
      } catch (h) {
        ee(n, n.return, h);
      }
    }
    if (n === e) {
      C = null;
      break;
    }
    if (((s = n.sibling), s !== null)) {
      (s.return = n.return), (C = s);
      break;
    }
    C = n.return;
  }
}
function yo(e) {
  for (; C !== null; ) {
    var n = C;
    if (n === e) {
      C = null;
      break;
    }
    var s = n.sibling;
    if (s !== null) {
      (s.return = n.return), (C = s);
      break;
    }
    C = n.return;
  }
}
function No(e) {
  for (; C !== null; ) {
    var n = C;
    try {
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          var s = n.return;
          try {
            Ul(4, n);
          } catch (c) {
            ee(n, s, c);
          }
          break;
        case 1:
          var l = n.stateNode;
          if (typeof l.componentDidMount == "function") {
            var r = n.return;
            try {
              l.componentDidMount();
            } catch (c) {
              ee(n, r, c);
            }
          }
          var i = n.return;
          try {
            ui(n);
          } catch (c) {
            ee(n, i, c);
          }
          break;
        case 5:
          var a = n.return;
          try {
            ui(n);
          } catch (c) {
            ee(n, a, c);
          }
      }
    } catch (c) {
      ee(n, n.return, c);
    }
    if (n === e) {
      C = null;
      break;
    }
    var o = n.sibling;
    if (o !== null) {
      (o.return = n.return), (C = o);
      break;
    }
    C = n.return;
  }
}
var vm = Math.ceil,
  zl = gn.ReactCurrentDispatcher,
  la = gn.ReactCurrentOwner,
  We = gn.ReactCurrentBatchConfig,
  I = 0,
  de = null,
  se = null,
  he = 0,
  Le = 0,
  vt = Vn(0),
  ae = 0,
  js = null,
  et = 0,
  Ql = 0,
  ra = 0,
  ns = null,
  Ee = null,
  ia = 0,
  Pt = 1 / 0,
  cn = null,
  El = !1,
  fi = null,
  Ln = null,
  Ws = !1,
  An = null,
  Al = 0,
  ts = 0,
  pi = null,
  sl = -1,
  ll = 0;
function ye() {
  return I & 6 ? ne() : sl !== -1 ? sl : (sl = ne());
}
function Fn(e) {
  return e.mode & 1
    ? I & 2 && he !== 0
      ? he & -he
      : em.transition !== null
      ? (ll === 0 && (ll = Sc()), ll)
      : ((e = V),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Tc(e.type))),
        e)
    : 1;
}
function Je(e, n, s, l) {
  if (50 < ts) throw ((ts = 0), (pi = null), Error(N(185)));
  Ns(e, s, l),
    (!(I & 2) || e !== de) &&
      (e === de && (!(I & 2) && (Ql |= s), ae === 4 && zn(e, he)),
      Pe(e, l),
      s === 1 && I === 0 && !(n.mode & 1) && ((Pt = ne() + 500), Il && Un()));
}
function Pe(e, n) {
  var s = e.callbackNode;
  eh(e, n);
  var l = ul(e, e === de ? he : 0);
  if (l === 0)
    s !== null && ba(s), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((n = l & -l), e.callbackPriority !== n)) {
    if ((s != null && ba(s), n === 1))
      e.tag === 0 ? Zh(wo.bind(null, e)) : Xc(wo.bind(null, e)),
        Yh(function () {
          !(I & 6) && Un();
        }),
        (s = null);
    else {
      switch (zc(l)) {
        case 1:
          s = Ti;
          break;
        case 4:
          s = wc;
          break;
        case 16:
          s = dl;
          break;
        case 536870912:
          s = kc;
          break;
        default:
          s = dl;
      }
      s = Gd(s, Qd.bind(null, e));
    }
    (e.callbackPriority = n), (e.callbackNode = s);
  }
}
function Qd(e, n) {
  if (((sl = -1), (ll = 0), I & 6)) throw Error(N(327));
  var s = e.callbackNode;
  if (wt() && e.callbackNode !== s) return null;
  var l = ul(e, e === de ? he : 0);
  if (l === 0) return null;
  if (l & 30 || l & e.expiredLanes || n) n = Cl(e, l);
  else {
    n = l;
    var r = I;
    I |= 2;
    var i = Hd();
    (de !== e || he !== n) && ((cn = null), (Pt = ne() + 500), Yn(e, n));
    do
      try {
        _m();
        break;
      } catch (o) {
        Wd(e, o);
      }
    while (1);
    Hi(),
      (zl.current = i),
      (I = r),
      se !== null ? (n = 0) : ((de = null), (he = 0), (n = ae));
  }
  if (n !== 0) {
    if (
      (n === 2 && ((r = Ur(e)), r !== 0 && ((l = r), (n = xi(e, r)))), n === 1)
    )
      throw ((s = js), Yn(e, 0), zn(e, l), Pe(e, ne()), s);
    if (n === 6) zn(e, l);
    else {
      if (
        ((r = e.current.alternate),
        !(l & 30) &&
          !gm(r) &&
          ((n = Cl(e, l)),
          n === 2 && ((i = Ur(e)), i !== 0 && ((l = i), (n = xi(e, i)))),
          n === 1))
      )
        throw ((s = js), Yn(e, 0), zn(e, l), Pe(e, ne()), s);
      switch (((e.finishedWork = r), (e.finishedLanes = l), n)) {
        case 0:
        case 1:
          throw Error(N(345));
        case 2:
          Wn(e, Ee, cn);
          break;
        case 3:
          if (
            (zn(e, l), (l & 130023424) === l && ((n = ia + 500 - ne()), 10 < n))
          ) {
            if (ul(e, 0) !== 0) break;
            if (((r = e.suspendedLanes), (r & l) !== l)) {
              ye(), (e.pingedLanes |= e.suspendedLanes & r);
              break;
            }
            e.timeoutHandle = Gr(Wn.bind(null, e, Ee, cn), n);
            break;
          }
          Wn(e, Ee, cn);
          break;
        case 4:
          if ((zn(e, l), (l & 4194240) === l)) break;
          for (n = e.eventTimes, r = -1; 0 < l; ) {
            var a = 31 - Xe(l);
            (i = 1 << a), (a = n[a]), a > r && (r = a), (l &= ~i);
          }
          if (
            ((l = r),
            (l = ne() - l),
            (l =
              (120 > l
                ? 120
                : 480 > l
                ? 480
                : 1080 > l
                ? 1080
                : 1920 > l
                ? 1920
                : 3e3 > l
                ? 3e3
                : 4320 > l
                ? 4320
                : 1960 * vm(l / 1960)) - l),
            10 < l)
          ) {
            e.timeoutHandle = Gr(Wn.bind(null, e, Ee, cn), l);
            break;
          }
          Wn(e, Ee, cn);
          break;
        case 5:
          Wn(e, Ee, cn);
          break;
        default:
          throw Error(N(329));
      }
    }
  }
  return Pe(e, ne()), e.callbackNode === s ? Qd.bind(null, e) : null;
}
function xi(e, n) {
  var s = ns;
  return (
    e.current.memoizedState.isDehydrated && (Yn(e, n).flags |= 256),
    (e = Cl(e, n)),
    e !== 2 && ((n = Ee), (Ee = s), n !== null && vi(n)),
    e
  );
}
function vi(e) {
  Ee === null ? (Ee = e) : Ee.push.apply(Ee, e);
}
function gm(e) {
  for (var n = e; ; ) {
    if (n.flags & 16384) {
      var s = n.updateQueue;
      if (s !== null && ((s = s.stores), s !== null))
        for (var l = 0; l < s.length; l++) {
          var r = s[l],
            i = r.getSnapshot;
          r = r.value;
          try {
            if (!Ze(i(), r)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((s = n.child), n.subtreeFlags & 16384 && s !== null))
      (s.return = n), (n = s);
    else {
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return !0;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }
  return !0;
}
function zn(e, n) {
  for (
    n &= ~ra,
      n &= ~Ql,
      e.suspendedLanes |= n,
      e.pingedLanes &= ~n,
      e = e.expirationTimes;
    0 < n;

  ) {
    var s = 31 - Xe(n),
      l = 1 << s;
    (e[s] = -1), (n &= ~l);
  }
}
function wo(e) {
  if (I & 6) throw Error(N(327));
  wt();
  var n = ul(e, 0);
  if (!(n & 1)) return Pe(e, ne()), null;
  var s = Cl(e, n);
  if (e.tag !== 0 && s === 2) {
    var l = Ur(e);
    l !== 0 && ((n = l), (s = xi(e, l)));
  }
  if (s === 1) throw ((s = js), Yn(e, 0), zn(e, n), Pe(e, ne()), s);
  if (s === 6) throw Error(N(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = n),
    Wn(e, Ee, cn),
    Pe(e, ne()),
    null
  );
}
function aa(e, n) {
  var s = I;
  I |= 1;
  try {
    return e(n);
  } finally {
    (I = s), I === 0 && ((Pt = ne() + 500), Il && Un());
  }
}
function nt(e) {
  An !== null && An.tag === 0 && !(I & 6) && wt();
  var n = I;
  I |= 1;
  var s = We.transition,
    l = V;
  try {
    if (((We.transition = null), (V = 1), e)) return e();
  } finally {
    (V = l), (We.transition = s), (I = n), !(I & 6) && Un();
  }
}
function oa() {
  (Le = vt.current), K(vt);
}
function Yn(e, n) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var s = e.timeoutHandle;
  if ((s !== -1 && ((e.timeoutHandle = -1), $h(s)), se !== null))
    for (s = se.return; s !== null; ) {
      var l = s;
      switch ((Ui(l), l.tag)) {
        case 1:
          (l = l.type.childContextTypes), l != null && xl();
          break;
        case 3:
          Ct(), K(Ce), K(ve), Xi();
          break;
        case 5:
          Gi(l);
          break;
        case 4:
          Ct();
          break;
        case 13:
          K(G);
          break;
        case 19:
          K(G);
          break;
        case 10:
          Ki(l.type._context);
          break;
        case 22:
        case 23:
          oa();
      }
      s = s.return;
    }
  if (
    ((de = e),
    (se = e = Mn(e.current, null)),
    (he = Le = n),
    (ae = 0),
    (js = null),
    (ra = Ql = et = 0),
    (Ee = ns = null),
    Kn !== null)
  ) {
    for (n = 0; n < Kn.length; n++)
      if (((s = Kn[n]), (l = s.interleaved), l !== null)) {
        s.interleaved = null;
        var r = l.next,
          i = s.pending;
        if (i !== null) {
          var a = i.next;
          (i.next = r), (l.next = a);
        }
        s.pending = l;
      }
    Kn = null;
  }
  return e;
}
function Wd(e, n) {
  do {
    var s = se;
    try {
      if ((Hi(), (el.current = Sl), kl)) {
        for (var l = X.memoizedState; l !== null; ) {
          var r = l.queue;
          r !== null && (r.pending = null), (l = l.next);
        }
        kl = !1;
      }
      if (
        ((Zn = 0),
        (ce = ie = X = null),
        (Zt = !1),
        (xs = 0),
        (la.current = null),
        s === null || s.return === null)
      ) {
        (ae = 1), (js = n), (se = null);
        break;
      }
      e: {
        var i = e,
          a = s.return,
          o = s,
          c = n;
        if (
          ((n = he),
          (o.flags |= 32768),
          c !== null && typeof c == "object" && typeof c.then == "function")
        ) {
          var d = c,
            x = o,
            p = x.tag;
          if (!(x.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var h = x.alternate;
            h
              ? ((x.updateQueue = h.updateQueue),
                (x.memoizedState = h.memoizedState),
                (x.lanes = h.lanes))
              : ((x.updateQueue = null), (x.memoizedState = null));
          }
          var v = co(a);
          if (v !== null) {
            (v.flags &= -257),
              uo(v, a, o, i, n),
              v.mode & 1 && oo(i, d, n),
              (n = v),
              (c = d);
            var g = n.updateQueue;
            if (g === null) {
              var w = new Set();
              w.add(c), (n.updateQueue = w);
            } else g.add(c);
            break e;
          } else {
            if (!(n & 1)) {
              oo(i, d, n), ca();
              break e;
            }
            c = Error(N(426));
          }
        } else if ($ && o.mode & 1) {
          var M = co(a);
          if (M !== null) {
            !(M.flags & 65536) && (M.flags |= 256),
              uo(M, a, o, i, n),
              Qi(bt(c, o));
            break e;
          }
        }
        (i = c = bt(c, o)),
          ae !== 4 && (ae = 2),
          ns === null ? (ns = [i]) : ns.push(i),
          (i = a);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (n &= -n), (i.lanes |= n);
              var m = Ed(i, c, n);
              no(i, m);
              break e;
            case 1:
              o = c;
              var u = i.type,
                f = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof u.getDerivedStateFromError == "function" ||
                  (f !== null &&
                    typeof f.componentDidCatch == "function" &&
                    (Ln === null || !Ln.has(f))))
              ) {
                (i.flags |= 65536), (n &= -n), (i.lanes |= n);
                var _ = Ad(i, o, n);
                no(i, _);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      qd(s);
    } catch (k) {
      (n = k), se === s && s !== null && (se = s = s.return);
      continue;
    }
    break;
  } while (1);
}
function Hd() {
  var e = zl.current;
  return (zl.current = Sl), e === null ? Sl : e;
}
function ca() {
  (ae === 0 || ae === 3 || ae === 2) && (ae = 4),
    de === null || (!(et & 268435455) && !(Ql & 268435455)) || zn(de, he);
}
function Cl(e, n) {
  var s = I;
  I |= 2;
  var l = Hd();
  (de !== e || he !== n) && ((cn = null), Yn(e, n));
  do
    try {
      jm();
      break;
    } catch (r) {
      Wd(e, r);
    }
  while (1);
  if ((Hi(), (I = s), (zl.current = l), se !== null)) throw Error(N(261));
  return (de = null), (he = 0), ae;
}
function jm() {
  for (; se !== null; ) Kd(se);
}
function _m() {
  for (; se !== null && !Hu(); ) Kd(se);
}
function Kd(e) {
  var n = Yd(e.alternate, e, Le);
  (e.memoizedProps = e.pendingProps),
    n === null ? qd(e) : (se = n),
    (la.current = null);
}
function qd(e) {
  var n = e;
  do {
    var s = n.alternate;
    if (((e = n.return), n.flags & 32768)) {
      if (((s = mm(s, n)), s !== null)) {
        (s.flags &= 32767), (se = s);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ae = 6), (se = null);
        return;
      }
    } else if (((s = hm(s, n, Le)), s !== null)) {
      se = s;
      return;
    }
    if (((n = n.sibling), n !== null)) {
      se = n;
      return;
    }
    se = n = e;
  } while (n !== null);
  ae === 0 && (ae = 5);
}
function Wn(e, n, s) {
  var l = V,
    r = We.transition;
  try {
    (We.transition = null), (V = 1), ym(e, n, s, l);
  } finally {
    (We.transition = r), (V = l);
  }
  return null;
}
function ym(e, n, s, l) {
  do wt();
  while (An !== null);
  if (I & 6) throw Error(N(327));
  s = e.finishedWork;
  var r = e.finishedLanes;
  if (s === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), s === e.current))
    throw Error(N(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = s.lanes | s.childLanes;
  if (
    (nh(e, i),
    e === de && ((se = de = null), (he = 0)),
    (!(s.subtreeFlags & 2064) && !(s.flags & 2064)) ||
      Ws ||
      ((Ws = !0),
      Gd(dl, function () {
        return wt(), null;
      })),
    (i = (s.flags & 15990) !== 0),
    s.subtreeFlags & 15990 || i)
  ) {
    (i = We.transition), (We.transition = null);
    var a = V;
    V = 1;
    var o = I;
    (I |= 4),
      (la.current = null),
      pm(e, s),
      Vd(s, e),
      Vh($r),
      (hl = !!qr),
      ($r = qr = null),
      (e.current = s),
      xm(s),
      Ku(),
      (I = o),
      (V = a),
      (We.transition = i);
  } else e.current = s;
  if (
    (Ws && ((Ws = !1), (An = e), (Al = r)),
    (i = e.pendingLanes),
    i === 0 && (Ln = null),
    Yu(s.stateNode),
    Pe(e, ne()),
    n !== null)
  )
    for (l = e.onRecoverableError, s = 0; s < n.length; s++)
      (r = n[s]), l(r.value, { componentStack: r.stack, digest: r.digest });
  if (El) throw ((El = !1), (e = fi), (fi = null), e);
  return (
    Al & 1 && e.tag !== 0 && wt(),
    (i = e.pendingLanes),
    i & 1 ? (e === pi ? ts++ : ((ts = 0), (pi = e))) : (ts = 0),
    Un(),
    null
  );
}
function wt() {
  if (An !== null) {
    var e = zc(Al),
      n = We.transition,
      s = V;
    try {
      if (((We.transition = null), (V = 16 > e ? 16 : e), An === null))
        var l = !1;
      else {
        if (((e = An), (An = null), (Al = 0), I & 6)) throw Error(N(331));
        var r = I;
        for (I |= 4, C = e.current; C !== null; ) {
          var i = C,
            a = i.child;
          if (C.flags & 16) {
            var o = i.deletions;
            if (o !== null) {
              for (var c = 0; c < o.length; c++) {
                var d = o[c];
                for (C = d; C !== null; ) {
                  var x = C;
                  switch (x.tag) {
                    case 0:
                    case 11:
                    case 15:
                      es(8, x, i);
                  }
                  var p = x.child;
                  if (p !== null) (p.return = x), (C = p);
                  else
                    for (; C !== null; ) {
                      x = C;
                      var h = x.sibling,
                        v = x.return;
                      if ((Dd(x), x === d)) {
                        C = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = v), (C = h);
                        break;
                      }
                      C = v;
                    }
                }
              }
              var g = i.alternate;
              if (g !== null) {
                var w = g.child;
                if (w !== null) {
                  g.child = null;
                  do {
                    var M = w.sibling;
                    (w.sibling = null), (w = M);
                  } while (w !== null);
                }
              }
              C = i;
            }
          }
          if (i.subtreeFlags & 2064 && a !== null) (a.return = i), (C = a);
          else
            e: for (; C !== null; ) {
              if (((i = C), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    es(9, i, i.return);
                }
              var m = i.sibling;
              if (m !== null) {
                (m.return = i.return), (C = m);
                break e;
              }
              C = i.return;
            }
        }
        var u = e.current;
        for (C = u; C !== null; ) {
          a = C;
          var f = a.child;
          if (a.subtreeFlags & 2064 && f !== null) (f.return = a), (C = f);
          else
            e: for (a = u; C !== null; ) {
              if (((o = C), o.flags & 2048))
                try {
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ul(9, o);
                  }
                } catch (k) {
                  ee(o, o.return, k);
                }
              if (o === a) {
                C = null;
                break e;
              }
              var _ = o.sibling;
              if (_ !== null) {
                (_.return = o.return), (C = _);
                break e;
              }
              C = o.return;
            }
        }
        if (
          ((I = r), Un(), sn && typeof sn.onPostCommitFiberRoot == "function")
        )
          try {
            sn.onPostCommitFiberRoot(Ll, e);
          } catch {}
        l = !0;
      }
      return l;
    } finally {
      (V = s), (We.transition = n);
    }
  }
  return !1;
}
function ko(e, n, s) {
  (n = bt(s, n)),
    (n = Ed(e, n, 1)),
    (e = Rn(e, n, 1)),
    (n = ye()),
    e !== null && (Ns(e, 1, n), Pe(e, n));
}
function ee(e, n, s) {
  if (e.tag === 3) ko(e, e, s);
  else
    for (; n !== null; ) {
      if (n.tag === 3) {
        ko(n, e, s);
        break;
      } else if (n.tag === 1) {
        var l = n.stateNode;
        if (
          typeof n.type.getDerivedStateFromError == "function" ||
          (typeof l.componentDidCatch == "function" &&
            (Ln === null || !Ln.has(l)))
        ) {
          (e = bt(s, e)),
            (e = Ad(n, e, 1)),
            (n = Rn(n, e, 1)),
            (e = ye()),
            n !== null && (Ns(n, 1, e), Pe(n, e));
          break;
        }
      }
      n = n.return;
    }
}
function Nm(e, n, s) {
  var l = e.pingCache;
  l !== null && l.delete(n),
    (n = ye()),
    (e.pingedLanes |= e.suspendedLanes & s),
    de === e &&
      (he & s) === s &&
      (ae === 4 || (ae === 3 && (he & 130023424) === he && 500 > ne() - ia)
        ? Yn(e, 0)
        : (ra |= s)),
    Pe(e, n);
}
function $d(e, n) {
  n === 0 &&
    (e.mode & 1
      ? ((n = Ls), (Ls <<= 1), !(Ls & 130023424) && (Ls = 4194304))
      : (n = 1));
  var s = ye();
  (e = xn(e, n)), e !== null && (Ns(e, n, s), Pe(e, s));
}
function wm(e) {
  var n = e.memoizedState,
    s = 0;
  n !== null && (s = n.retryLane), $d(e, s);
}
function km(e, n) {
  var s = 0;
  switch (e.tag) {
    case 13:
      var l = e.stateNode,
        r = e.memoizedState;
      r !== null && (s = r.retryLane);
      break;
    case 19:
      l = e.stateNode;
      break;
    default:
      throw Error(N(314));
  }
  l !== null && l.delete(n), $d(e, s);
}
var Yd;
Yd = function (e, n, s) {
  if (e !== null)
    if (e.memoizedProps !== n.pendingProps || Ce.current) Ae = !0;
    else {
      if (!(e.lanes & s) && !(n.flags & 128)) return (Ae = !1), um(e, n, s);
      Ae = !!(e.flags & 131072);
    }
  else (Ae = !1), $ && n.flags & 1048576 && Jc(n, jl, n.index);
  switch (((n.lanes = 0), n.tag)) {
    case 2:
      var l = n.type;
      tl(e, n), (e = n.pendingProps);
      var r = zt(n, ve.current);
      Nt(n, s), (r = Zi(null, n, l, e, r, s));
      var i = ea();
      return (
        (n.flags |= 1),
        typeof r == "object" &&
        r !== null &&
        typeof r.render == "function" &&
        r.$$typeof === void 0
          ? ((n.tag = 1),
            (n.memoizedState = null),
            (n.updateQueue = null),
            be(l) ? ((i = !0), vl(n)) : (i = !1),
            (n.memoizedState =
              r.state !== null && r.state !== void 0 ? r.state : null),
            $i(n),
            (r.updater = Bl),
            (n.stateNode = r),
            (r._reactInternals = n),
            si(n, l, e, s),
            (n = ii(null, n, l, !0, i, s)))
          : ((n.tag = 0), $ && i && Vi(n), _e(null, n, r, s), (n = n.child)),
        n
      );
    case 16:
      l = n.elementType;
      e: {
        switch (
          (tl(e, n),
          (e = n.pendingProps),
          (r = l._init),
          (l = r(l._payload)),
          (n.type = l),
          (r = n.tag = zm(l)),
          (e = $e(l, e)),
          r)
        ) {
          case 0:
            n = ri(null, n, l, e, s);
            break e;
          case 1:
            n = fo(null, n, l, e, s);
            break e;
          case 11:
            n = ho(null, n, l, e, s);
            break e;
          case 14:
            n = mo(null, n, l, $e(l.type, e), s);
            break e;
        }
        throw Error(N(306, l, ""));
      }
      return n;
    case 0:
      return (
        (l = n.type),
        (r = n.pendingProps),
        (r = n.elementType === l ? r : $e(l, r)),
        ri(e, n, l, r, s)
      );
    case 1:
      return (
        (l = n.type),
        (r = n.pendingProps),
        (r = n.elementType === l ? r : $e(l, r)),
        fo(e, n, l, r, s)
      );
    case 3:
      e: {
        if ((Td(n), e === null)) throw Error(N(387));
        (l = n.pendingProps),
          (i = n.memoizedState),
          (r = i.element),
          td(e, n),
          Nl(n, l, null, s);
        var a = n.memoizedState;
        if (((l = a.element), i.isDehydrated))
          if (
            ((i = {
              element: l,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (n.updateQueue.baseState = i),
            (n.memoizedState = i),
            n.flags & 256)
          ) {
            (r = bt(Error(N(423)), n)), (n = po(e, n, l, s, r));
            break e;
          } else if (l !== r) {
            (r = bt(Error(N(424)), n)), (n = po(e, n, l, s, r));
            break e;
          } else
            for (
              Fe = Tn(n.stateNode.containerInfo.firstChild),
                Me = n,
                $ = !0,
                Ge = null,
                s = id(n, null, l, s),
                n.child = s;
              s;

            )
              (s.flags = (s.flags & -3) | 4096), (s = s.sibling);
        else {
          if ((Et(), l === r)) {
            n = vn(e, n, s);
            break e;
          }
          _e(e, n, l, s);
        }
        n = n.child;
      }
      return n;
    case 5:
      return (
        ad(n),
        e === null && ei(n),
        (l = n.type),
        (r = n.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (a = r.children),
        Yr(l, r) ? (a = null) : i !== null && Yr(l, i) && (n.flags |= 32),
        Pd(e, n),
        _e(e, n, a, s),
        n.child
      );
    case 6:
      return e === null && ei(n), null;
    case 13:
      return Rd(e, n, s);
    case 4:
      return (
        Yi(n, n.stateNode.containerInfo),
        (l = n.pendingProps),
        e === null ? (n.child = At(n, null, l, s)) : _e(e, n, l, s),
        n.child
      );
    case 11:
      return (
        (l = n.type),
        (r = n.pendingProps),
        (r = n.elementType === l ? r : $e(l, r)),
        ho(e, n, l, r, s)
      );
    case 7:
      return _e(e, n, n.pendingProps, s), n.child;
    case 8:
      return _e(e, n, n.pendingProps.children, s), n.child;
    case 12:
      return _e(e, n, n.pendingProps.children, s), n.child;
    case 10:
      e: {
        if (
          ((l = n.type._context),
          (r = n.pendingProps),
          (i = n.memoizedProps),
          (a = r.value),
          Q(_l, l._currentValue),
          (l._currentValue = a),
          i !== null)
        )
          if (Ze(i.value, a)) {
            if (i.children === r.children && !Ce.current) {
              n = vn(e, n, s);
              break e;
            }
          } else
            for (i = n.child, i !== null && (i.return = n); i !== null; ) {
              var o = i.dependencies;
              if (o !== null) {
                a = i.child;
                for (var c = o.firstContext; c !== null; ) {
                  if (c.context === l) {
                    if (i.tag === 1) {
                      (c = mn(-1, s & -s)), (c.tag = 2);
                      var d = i.updateQueue;
                      if (d !== null) {
                        d = d.shared;
                        var x = d.pending;
                        x === null
                          ? (c.next = c)
                          : ((c.next = x.next), (x.next = c)),
                          (d.pending = c);
                      }
                    }
                    (i.lanes |= s),
                      (c = i.alternate),
                      c !== null && (c.lanes |= s),
                      ni(i.return, s, n),
                      (o.lanes |= s);
                    break;
                  }
                  c = c.next;
                }
              } else if (i.tag === 10) a = i.type === n.type ? null : i.child;
              else if (i.tag === 18) {
                if (((a = i.return), a === null)) throw Error(N(341));
                (a.lanes |= s),
                  (o = a.alternate),
                  o !== null && (o.lanes |= s),
                  ni(a, s, n),
                  (a = i.sibling);
              } else a = i.child;
              if (a !== null) a.return = i;
              else
                for (a = i; a !== null; ) {
                  if (a === n) {
                    a = null;
                    break;
                  }
                  if (((i = a.sibling), i !== null)) {
                    (i.return = a.return), (a = i);
                    break;
                  }
                  a = a.return;
                }
              i = a;
            }
        _e(e, n, r.children, s), (n = n.child);
      }
      return n;
    case 9:
      return (
        (r = n.type),
        (l = n.pendingProps.children),
        Nt(n, s),
        (r = He(r)),
        (l = l(r)),
        (n.flags |= 1),
        _e(e, n, l, s),
        n.child
      );
    case 14:
      return (
        (l = n.type),
        (r = $e(l, n.pendingProps)),
        (r = $e(l.type, r)),
        mo(e, n, l, r, s)
      );
    case 15:
      return Cd(e, n, n.type, n.pendingProps, s);
    case 17:
      return (
        (l = n.type),
        (r = n.pendingProps),
        (r = n.elementType === l ? r : $e(l, r)),
        tl(e, n),
        (n.tag = 1),
        be(l) ? ((e = !0), vl(n)) : (e = !1),
        Nt(n, s),
        ld(n, l, r),
        si(n, l, r, s),
        ii(null, n, l, !0, e, s)
      );
    case 19:
      return Ld(e, n, s);
    case 22:
      return bd(e, n, s);
  }
  throw Error(N(156, n.tag));
};
function Gd(e, n) {
  return Nc(e, n);
}
function Sm(e, n, s, l) {
  (this.tag = e),
    (this.key = s),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = n),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = l),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Qe(e, n, s, l) {
  return new Sm(e, n, s, l);
}
function da(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function zm(e) {
  if (typeof e == "function") return da(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ci)) return 11;
    if (e === bi) return 14;
  }
  return 2;
}
function Mn(e, n) {
  var s = e.alternate;
  return (
    s === null
      ? ((s = Qe(e.tag, n, e.key, e.mode)),
        (s.elementType = e.elementType),
        (s.type = e.type),
        (s.stateNode = e.stateNode),
        (s.alternate = e),
        (e.alternate = s))
      : ((s.pendingProps = n),
        (s.type = e.type),
        (s.flags = 0),
        (s.subtreeFlags = 0),
        (s.deletions = null)),
    (s.flags = e.flags & 14680064),
    (s.childLanes = e.childLanes),
    (s.lanes = e.lanes),
    (s.child = e.child),
    (s.memoizedProps = e.memoizedProps),
    (s.memoizedState = e.memoizedState),
    (s.updateQueue = e.updateQueue),
    (n = e.dependencies),
    (s.dependencies =
      n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
    (s.sibling = e.sibling),
    (s.index = e.index),
    (s.ref = e.ref),
    s
  );
}
function rl(e, n, s, l, r, i) {
  var a = 2;
  if (((l = e), typeof e == "function")) da(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case at:
        return Gn(s.children, r, i, n);
      case Ai:
        (a = 8), (r |= 8);
        break;
      case Er:
        return (
          (e = Qe(12, s, n, r | 2)), (e.elementType = Er), (e.lanes = i), e
        );
      case Ar:
        return (e = Qe(13, s, n, r)), (e.elementType = Ar), (e.lanes = i), e;
      case Cr:
        return (e = Qe(19, s, n, r)), (e.elementType = Cr), (e.lanes = i), e;
      case rc:
        return Wl(s, r, i, n);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case sc:
              a = 10;
              break e;
            case lc:
              a = 9;
              break e;
            case Ci:
              a = 11;
              break e;
            case bi:
              a = 14;
              break e;
            case wn:
              (a = 16), (l = null);
              break e;
          }
        throw Error(N(130, e == null ? e : typeof e, ""));
    }
  return (
    (n = Qe(a, s, n, r)), (n.elementType = e), (n.type = l), (n.lanes = i), n
  );
}
function Gn(e, n, s, l) {
  return (e = Qe(7, e, l, n)), (e.lanes = s), e;
}
function Wl(e, n, s, l) {
  return (
    (e = Qe(22, e, l, n)),
    (e.elementType = rc),
    (e.lanes = s),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function jr(e, n, s) {
  return (e = Qe(6, e, null, n)), (e.lanes = s), e;
}
function _r(e, n, s) {
  return (
    (n = Qe(4, e.children !== null ? e.children : [], e.key, n)),
    (n.lanes = s),
    (n.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    n
  );
}
function Em(e, n, s, l, r) {
  (this.tag = n),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = er(0)),
    (this.expirationTimes = er(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = er(0)),
    (this.identifierPrefix = l),
    (this.onRecoverableError = r),
    (this.mutableSourceEagerHydrationData = null);
}
function ua(e, n, s, l, r, i, a, o, c) {
  return (
    (e = new Em(e, n, s, o, c)),
    n === 1 ? ((n = 1), i === !0 && (n |= 8)) : (n = 0),
    (i = Qe(3, null, null, n)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: l,
      isDehydrated: s,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    $i(i),
    e
  );
}
function Am(e, n, s) {
  var l = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: it,
    key: l == null ? null : "" + l,
    children: e,
    containerInfo: n,
    implementation: s,
  };
}
function Xd(e) {
  if (!e) return In;
  e = e._reactInternals;
  e: {
    if (st(e) !== e || e.tag !== 1) throw Error(N(170));
    var n = e;
    do {
      switch (n.tag) {
        case 3:
          n = n.stateNode.context;
          break e;
        case 1:
          if (be(n.type)) {
            n = n.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      n = n.return;
    } while (n !== null);
    throw Error(N(171));
  }
  if (e.tag === 1) {
    var s = e.type;
    if (be(s)) return Gc(e, s, n);
  }
  return n;
}
function Jd(e, n, s, l, r, i, a, o, c) {
  return (
    (e = ua(s, l, !0, e, r, i, a, o, c)),
    (e.context = Xd(null)),
    (s = e.current),
    (l = ye()),
    (r = Fn(s)),
    (i = mn(l, r)),
    (i.callback = n ?? null),
    Rn(s, i, r),
    (e.current.lanes = r),
    Ns(e, r, l),
    Pe(e, l),
    e
  );
}
function Hl(e, n, s, l) {
  var r = n.current,
    i = ye(),
    a = Fn(r);
  return (
    (s = Xd(s)),
    n.context === null ? (n.context = s) : (n.pendingContext = s),
    (n = mn(i, a)),
    (n.payload = { element: e }),
    (l = l === void 0 ? null : l),
    l !== null && (n.callback = l),
    (e = Rn(r, n, a)),
    e !== null && (Je(e, r, a, i), Zs(e, r, a)),
    a
  );
}
function bl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function So(e, n) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var s = e.retryLane;
    e.retryLane = s !== 0 && s < n ? s : n;
  }
}
function ha(e, n) {
  So(e, n), (e = e.alternate) && So(e, n);
}
function Cm() {
  return null;
}
var Zd =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ma(e) {
  this._internalRoot = e;
}
Kl.prototype.render = ma.prototype.render = function (e) {
  var n = this._internalRoot;
  if (n === null) throw Error(N(409));
  Hl(e, n, null, null);
};
Kl.prototype.unmount = ma.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var n = e.containerInfo;
    nt(function () {
      Hl(null, e, null, null);
    }),
      (n[pn] = null);
  }
};
function Kl(e) {
  this._internalRoot = e;
}
Kl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var n = Cc();
    e = { blockedOn: null, target: e, priority: n };
    for (var s = 0; s < Sn.length && n !== 0 && n < Sn[s].priority; s++);
    Sn.splice(s, 0, e), s === 0 && Pc(e);
  }
};
function fa(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ql(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function zo() {}
function bm(e, n, s, l, r) {
  if (r) {
    if (typeof l == "function") {
      var i = l;
      l = function () {
        var d = bl(a);
        i.call(d);
      };
    }
    var a = Jd(n, l, e, 0, null, !1, !1, "", zo);
    return (
      (e._reactRootContainer = a),
      (e[pn] = a.current),
      us(e.nodeType === 8 ? e.parentNode : e),
      nt(),
      a
    );
  }
  for (; (r = e.lastChild); ) e.removeChild(r);
  if (typeof l == "function") {
    var o = l;
    l = function () {
      var d = bl(c);
      o.call(d);
    };
  }
  var c = ua(e, 0, !1, null, null, !1, !1, "", zo);
  return (
    (e._reactRootContainer = c),
    (e[pn] = c.current),
    us(e.nodeType === 8 ? e.parentNode : e),
    nt(function () {
      Hl(n, c, s, l);
    }),
    c
  );
}
function $l(e, n, s, l, r) {
  var i = s._reactRootContainer;
  if (i) {
    var a = i;
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var c = bl(a);
        o.call(c);
      };
    }
    Hl(n, a, e, r);
  } else a = bm(s, n, e, r, l);
  return bl(a);
}
Ec = function (e) {
  switch (e.tag) {
    case 3:
      var n = e.stateNode;
      if (n.current.memoizedState.isDehydrated) {
        var s = Kt(n.pendingLanes);
        s !== 0 &&
          (Ri(n, s | 1), Pe(n, ne()), !(I & 6) && ((Pt = ne() + 500), Un()));
      }
      break;
    case 13:
      nt(function () {
        var l = xn(e, 1);
        if (l !== null) {
          var r = ye();
          Je(l, e, 1, r);
        }
      }),
        ha(e, 1);
  }
};
Li = function (e) {
  if (e.tag === 13) {
    var n = xn(e, 134217728);
    if (n !== null) {
      var s = ye();
      Je(n, e, 134217728, s);
    }
    ha(e, 134217728);
  }
};
Ac = function (e) {
  if (e.tag === 13) {
    var n = Fn(e),
      s = xn(e, n);
    if (s !== null) {
      var l = ye();
      Je(s, e, n, l);
    }
    ha(e, n);
  }
};
Cc = function () {
  return V;
};
bc = function (e, n) {
  var s = V;
  try {
    return (V = e), n();
  } finally {
    V = s;
  }
};
Ir = function (e, n, s) {
  switch (n) {
    case "input":
      if ((Tr(e, s), (n = s.name), s.type === "radio" && n != null)) {
        for (s = e; s.parentNode; ) s = s.parentNode;
        for (
          s = s.querySelectorAll(
            "input[name=" + JSON.stringify("" + n) + '][type="radio"]'
          ),
            n = 0;
          n < s.length;
          n++
        ) {
          var l = s[n];
          if (l !== e && l.form === e.form) {
            var r = Dl(l);
            if (!r) throw Error(N(90));
            ac(l), Tr(l, r);
          }
        }
      }
      break;
    case "textarea":
      cc(e, s);
      break;
    case "select":
      (n = s.value), n != null && gt(e, !!s.multiple, n, !1);
  }
};
xc = aa;
vc = nt;
var Pm = { usingClientEntryPoint: !1, Events: [ks, ut, Dl, fc, pc, aa] },
  Qt = {
    findFiberByHostInstance: Hn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Tm = {
    bundleType: Qt.bundleType,
    version: Qt.version,
    rendererPackageName: Qt.rendererPackageName,
    rendererConfig: Qt.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: gn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = _c(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Qt.findFiberByHostInstance || Cm,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Hs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Hs.isDisabled && Hs.supportsFiber)
    try {
      (Ll = Hs.inject(Tm)), (sn = Hs);
    } catch {}
}
De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Pm;
De.createPortal = function (e, n) {
  var s = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!fa(n)) throw Error(N(200));
  return Am(e, n, null, s);
};
De.createRoot = function (e, n) {
  if (!fa(e)) throw Error(N(299));
  var s = !1,
    l = "",
    r = Zd;
  return (
    n != null &&
      (n.unstable_strictMode === !0 && (s = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (r = n.onRecoverableError)),
    (n = ua(e, 1, !1, null, null, s, !1, l, r)),
    (e[pn] = n.current),
    us(e.nodeType === 8 ? e.parentNode : e),
    new ma(n)
  );
};
De.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var n = e._reactInternals;
  if (n === void 0)
    throw typeof e.render == "function"
      ? Error(N(188))
      : ((e = Object.keys(e).join(",")), Error(N(268, e)));
  return (e = _c(n)), (e = e === null ? null : e.stateNode), e;
};
De.flushSync = function (e) {
  return nt(e);
};
De.hydrate = function (e, n, s) {
  if (!ql(n)) throw Error(N(200));
  return $l(null, e, n, !0, s);
};
De.hydrateRoot = function (e, n, s) {
  if (!fa(e)) throw Error(N(405));
  var l = (s != null && s.hydratedSources) || null,
    r = !1,
    i = "",
    a = Zd;
  if (
    (s != null &&
      (s.unstable_strictMode === !0 && (r = !0),
      s.identifierPrefix !== void 0 && (i = s.identifierPrefix),
      s.onRecoverableError !== void 0 && (a = s.onRecoverableError)),
    (n = Jd(n, null, e, 1, s ?? null, r, !1, i, a)),
    (e[pn] = n.current),
    us(e),
    l)
  )
    for (e = 0; e < l.length; e++)
      (s = l[e]),
        (r = s._getVersion),
        (r = r(s._source)),
        n.mutableSourceEagerHydrationData == null
          ? (n.mutableSourceEagerHydrationData = [s, r])
          : n.mutableSourceEagerHydrationData.push(s, r);
  return new Kl(n);
};
De.render = function (e, n, s) {
  if (!ql(n)) throw Error(N(200));
  return $l(null, e, n, !1, s);
};
De.unmountComponentAtNode = function (e) {
  if (!ql(e)) throw Error(N(40));
  return e._reactRootContainer
    ? (nt(function () {
        $l(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[pn] = null);
        });
      }),
      !0)
    : !1;
};
De.unstable_batchedUpdates = aa;
De.unstable_renderSubtreeIntoContainer = function (e, n, s, l) {
  if (!ql(s)) throw Error(N(200));
  if (e == null || e._reactInternals === void 0) throw Error(N(38));
  return $l(e, n, s, !1, l);
};
De.version = "18.2.0-next-9e3b772b8-20220608";
function eu() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(eu);
    } catch (e) {
      console.error(e);
    }
}
eu(), (Jo.exports = De);
var Rm = Jo.exports,
  Eo = Rm;
(Sr.createRoot = Eo.createRoot), (Sr.hydrateRoot = Eo.hydrateRoot);
var nu = { exports: {} };
(function (e, n) {
  (function (s, l) {
    e.exports = l();
  })(au, function () {
    return (function (s) {
      function l(i) {
        if (r[i]) return r[i].exports;
        var a = (r[i] = { exports: {}, id: i, loaded: !1 });
        return (
          s[i].call(a.exports, a, a.exports, l), (a.loaded = !0), a.exports
        );
      }
      var r = {};
      return (l.m = s), (l.c = r), (l.p = "dist/"), l(0);
    })([
      function (s, l, r) {
        function i(P) {
          return P && P.__esModule ? P : { default: P };
        }
        var a =
            Object.assign ||
            function (P) {
              for (var le = 1; le < arguments.length; le++) {
                var ge = arguments[le];
                for (var Be in ge)
                  Object.prototype.hasOwnProperty.call(ge, Be) &&
                    (P[Be] = ge[Be]);
              }
              return P;
            },
          o = r(1),
          c = (i(o), r(6)),
          d = i(c),
          x = r(7),
          p = i(x),
          h = r(8),
          v = i(h),
          g = r(9),
          w = i(g),
          M = r(10),
          m = i(M),
          u = r(11),
          f = i(u),
          _ = r(14),
          k = i(_),
          z = [],
          y = !1,
          j = {
            offset: 120,
            delay: 0,
            easing: "ease",
            duration: 400,
            disable: !1,
            once: !1,
            startEvent: "DOMContentLoaded",
            throttleDelay: 99,
            debounceDelay: 50,
            disableMutationObserver: !1,
          },
          R = function () {
            var P =
              arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
            if ((P && (y = !0), y))
              return (z = (0, f.default)(z, j)), (0, m.default)(z, j.once), z;
          },
          b = function () {
            (z = (0, k.default)()), R();
          },
          E = function () {
            z.forEach(function (P, le) {
              P.node.removeAttribute("data-aos"),
                P.node.removeAttribute("data-aos-easing"),
                P.node.removeAttribute("data-aos-duration"),
                P.node.removeAttribute("data-aos-delay");
            });
          },
          S = function (P) {
            return (
              P === !0 ||
              (P === "mobile" && w.default.mobile()) ||
              (P === "phone" && w.default.phone()) ||
              (P === "tablet" && w.default.tablet()) ||
              (typeof P == "function" && P() === !0)
            );
          },
          O = function (P) {
            (j = a(j, P)), (z = (0, k.default)());
            var le = document.all && !window.atob;
            return S(j.disable) || le
              ? E()
              : (j.disableMutationObserver ||
                  v.default.isSupported() ||
                  (console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),
                  (j.disableMutationObserver = !0)),
                document
                  .querySelector("body")
                  .setAttribute("data-aos-easing", j.easing),
                document
                  .querySelector("body")
                  .setAttribute("data-aos-duration", j.duration),
                document
                  .querySelector("body")
                  .setAttribute("data-aos-delay", j.delay),
                j.startEvent === "DOMContentLoaded" &&
                ["complete", "interactive"].indexOf(document.readyState) > -1
                  ? R(!0)
                  : j.startEvent === "load"
                  ? window.addEventListener(j.startEvent, function () {
                      R(!0);
                    })
                  : document.addEventListener(j.startEvent, function () {
                      R(!0);
                    }),
                window.addEventListener(
                  "resize",
                  (0, p.default)(R, j.debounceDelay, !0)
                ),
                window.addEventListener(
                  "orientationchange",
                  (0, p.default)(R, j.debounceDelay, !0)
                ),
                window.addEventListener(
                  "scroll",
                  (0, d.default)(function () {
                    (0, m.default)(z, j.once);
                  }, j.throttleDelay)
                ),
                j.disableMutationObserver || v.default.ready("[data-aos]", b),
                z);
          };
        s.exports = { init: O, refresh: R, refreshHard: b };
      },
      function (s, l) {},
      ,
      ,
      ,
      ,
      function (s, l) {
        (function (r) {
          function i(S, O, P) {
            function le(U) {
              var Se = te,
                yn = ke;
              return (te = ke = void 0), (jn = U), (Z = S.apply(yn, Se));
            }
            function ge(U) {
              return (jn = U), (re = setTimeout(T, O)), _n ? le(U) : Z;
            }
            function Be(U) {
              var Se = U - Te,
                yn = U - jn,
                va = O - Se;
              return on ? b(va, oe - yn) : va;
            }
            function A(U) {
              var Se = U - Te,
                yn = U - jn;
              return Te === void 0 || Se >= O || Se < 0 || (on && yn >= oe);
            }
            function T() {
              var U = E();
              return A(U) ? F(U) : void (re = setTimeout(T, Be(U)));
            }
            function F(U) {
              return (re = void 0), Y && te ? le(U) : ((te = ke = void 0), Z);
            }
            function W() {
              re !== void 0 && clearTimeout(re),
                (jn = 0),
                (te = Te = ke = re = void 0);
            }
            function q() {
              return re === void 0 ? Z : F(E());
            }
            function je() {
              var U = E(),
                Se = A(U);
              if (((te = arguments), (ke = this), (Te = U), Se)) {
                if (re === void 0) return ge(Te);
                if (on) return (re = setTimeout(T, O)), le(Te);
              }
              return re === void 0 && (re = setTimeout(T, O)), Z;
            }
            var te,
              ke,
              oe,
              Z,
              re,
              Te,
              jn = 0,
              _n = !1,
              on = !1,
              Y = !0;
            if (typeof S != "function") throw new TypeError(h);
            return (
              (O = x(O) || 0),
              o(P) &&
                ((_n = !!P.leading),
                (on = "maxWait" in P),
                (oe = on ? R(x(P.maxWait) || 0, O) : oe),
                (Y = "trailing" in P ? !!P.trailing : Y)),
              (je.cancel = W),
              (je.flush = q),
              je
            );
          }
          function a(S, O, P) {
            var le = !0,
              ge = !0;
            if (typeof S != "function") throw new TypeError(h);
            return (
              o(P) &&
                ((le = "leading" in P ? !!P.leading : le),
                (ge = "trailing" in P ? !!P.trailing : ge)),
              i(S, O, { leading: le, maxWait: O, trailing: ge })
            );
          }
          function o(S) {
            var O = typeof S > "u" ? "undefined" : p(S);
            return !!S && (O == "object" || O == "function");
          }
          function c(S) {
            return !!S && (typeof S > "u" ? "undefined" : p(S)) == "object";
          }
          function d(S) {
            return (
              (typeof S > "u" ? "undefined" : p(S)) == "symbol" ||
              (c(S) && j.call(S) == g)
            );
          }
          function x(S) {
            if (typeof S == "number") return S;
            if (d(S)) return v;
            if (o(S)) {
              var O = typeof S.valueOf == "function" ? S.valueOf() : S;
              S = o(O) ? O + "" : O;
            }
            if (typeof S != "string") return S === 0 ? S : +S;
            S = S.replace(w, "");
            var P = m.test(S);
            return P || u.test(S)
              ? f(S.slice(2), P ? 2 : 8)
              : M.test(S)
              ? v
              : +S;
          }
          var p =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (S) {
                    return typeof S;
                  }
                : function (S) {
                    return S &&
                      typeof Symbol == "function" &&
                      S.constructor === Symbol &&
                      S !== Symbol.prototype
                      ? "symbol"
                      : typeof S;
                  },
            h = "Expected a function",
            v = NaN,
            g = "[object Symbol]",
            w = /^\s+|\s+$/g,
            M = /^[-+]0x[0-9a-f]+$/i,
            m = /^0b[01]+$/i,
            u = /^0o[0-7]+$/i,
            f = parseInt,
            _ =
              (typeof r > "u" ? "undefined" : p(r)) == "object" &&
              r &&
              r.Object === Object &&
              r,
            k =
              (typeof self > "u" ? "undefined" : p(self)) == "object" &&
              self &&
              self.Object === Object &&
              self,
            z = _ || k || Function("return this")(),
            y = Object.prototype,
            j = y.toString,
            R = Math.max,
            b = Math.min,
            E = function () {
              return z.Date.now();
            };
          s.exports = a;
        }).call(
          l,
          (function () {
            return this;
          })()
        );
      },
      function (s, l) {
        (function (r) {
          function i(E, S, O) {
            function P(Y) {
              var U = je,
                Se = te;
              return (je = te = void 0), (Te = Y), (oe = E.apply(Se, U));
            }
            function le(Y) {
              return (Te = Y), (Z = setTimeout(A, S)), jn ? P(Y) : oe;
            }
            function ge(Y) {
              var U = Y - re,
                Se = Y - Te,
                yn = S - U;
              return _n ? R(yn, ke - Se) : yn;
            }
            function Be(Y) {
              var U = Y - re,
                Se = Y - Te;
              return re === void 0 || U >= S || U < 0 || (_n && Se >= ke);
            }
            function A() {
              var Y = b();
              return Be(Y) ? T(Y) : void (Z = setTimeout(A, ge(Y)));
            }
            function T(Y) {
              return (Z = void 0), on && je ? P(Y) : ((je = te = void 0), oe);
            }
            function F() {
              Z !== void 0 && clearTimeout(Z),
                (Te = 0),
                (je = re = te = Z = void 0);
            }
            function W() {
              return Z === void 0 ? oe : T(b());
            }
            function q() {
              var Y = b(),
                U = Be(Y);
              if (((je = arguments), (te = this), (re = Y), U)) {
                if (Z === void 0) return le(re);
                if (_n) return (Z = setTimeout(A, S)), P(re);
              }
              return Z === void 0 && (Z = setTimeout(A, S)), oe;
            }
            var je,
              te,
              ke,
              oe,
              Z,
              re,
              Te = 0,
              jn = !1,
              _n = !1,
              on = !0;
            if (typeof E != "function") throw new TypeError(p);
            return (
              (S = d(S) || 0),
              a(O) &&
                ((jn = !!O.leading),
                (_n = "maxWait" in O),
                (ke = _n ? j(d(O.maxWait) || 0, S) : ke),
                (on = "trailing" in O ? !!O.trailing : on)),
              (q.cancel = F),
              (q.flush = W),
              q
            );
          }
          function a(E) {
            var S = typeof E > "u" ? "undefined" : x(E);
            return !!E && (S == "object" || S == "function");
          }
          function o(E) {
            return !!E && (typeof E > "u" ? "undefined" : x(E)) == "object";
          }
          function c(E) {
            return (
              (typeof E > "u" ? "undefined" : x(E)) == "symbol" ||
              (o(E) && y.call(E) == v)
            );
          }
          function d(E) {
            if (typeof E == "number") return E;
            if (c(E)) return h;
            if (a(E)) {
              var S = typeof E.valueOf == "function" ? E.valueOf() : E;
              E = a(S) ? S + "" : S;
            }
            if (typeof E != "string") return E === 0 ? E : +E;
            E = E.replace(g, "");
            var O = M.test(E);
            return O || m.test(E)
              ? u(E.slice(2), O ? 2 : 8)
              : w.test(E)
              ? h
              : +E;
          }
          var x =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (E) {
                    return typeof E;
                  }
                : function (E) {
                    return E &&
                      typeof Symbol == "function" &&
                      E.constructor === Symbol &&
                      E !== Symbol.prototype
                      ? "symbol"
                      : typeof E;
                  },
            p = "Expected a function",
            h = NaN,
            v = "[object Symbol]",
            g = /^\s+|\s+$/g,
            w = /^[-+]0x[0-9a-f]+$/i,
            M = /^0b[01]+$/i,
            m = /^0o[0-7]+$/i,
            u = parseInt,
            f =
              (typeof r > "u" ? "undefined" : x(r)) == "object" &&
              r &&
              r.Object === Object &&
              r,
            _ =
              (typeof self > "u" ? "undefined" : x(self)) == "object" &&
              self &&
              self.Object === Object &&
              self,
            k = f || _ || Function("return this")(),
            z = Object.prototype,
            y = z.toString,
            j = Math.max,
            R = Math.min,
            b = function () {
              return k.Date.now();
            };
          s.exports = i;
        }).call(
          l,
          (function () {
            return this;
          })()
        );
      },
      function (s, l) {
        function r(x) {
          var p = void 0,
            h = void 0;
          for (p = 0; p < x.length; p += 1)
            if (
              ((h = x[p]),
              (h.dataset && h.dataset.aos) || (h.children && r(h.children)))
            )
              return !0;
          return !1;
        }
        function i() {
          return (
            window.MutationObserver ||
            window.WebKitMutationObserver ||
            window.MozMutationObserver
          );
        }
        function a() {
          return !!i();
        }
        function o(x, p) {
          var h = window.document,
            v = i(),
            g = new v(c);
          (d = p),
            g.observe(h.documentElement, {
              childList: !0,
              subtree: !0,
              removedNodes: !0,
            });
        }
        function c(x) {
          x &&
            x.forEach(function (p) {
              var h = Array.prototype.slice.call(p.addedNodes),
                v = Array.prototype.slice.call(p.removedNodes),
                g = h.concat(v);
              if (r(g)) return d();
            });
        }
        Object.defineProperty(l, "__esModule", { value: !0 });
        var d = function () {};
        l.default = { isSupported: a, ready: o };
      },
      function (s, l) {
        function r(h, v) {
          if (!(h instanceof v))
            throw new TypeError("Cannot call a class as a function");
        }
        function i() {
          return navigator.userAgent || navigator.vendor || window.opera || "";
        }
        Object.defineProperty(l, "__esModule", { value: !0 });
        var a = (function () {
            function h(v, g) {
              for (var w = 0; w < g.length; w++) {
                var M = g[w];
                (M.enumerable = M.enumerable || !1),
                  (M.configurable = !0),
                  "value" in M && (M.writable = !0),
                  Object.defineProperty(v, M.key, M);
              }
            }
            return function (v, g, w) {
              return g && h(v.prototype, g), w && h(v, w), v;
            };
          })(),
          o =
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
          c =
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
          d =
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
          x =
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
          p = (function () {
            function h() {
              r(this, h);
            }
            return (
              a(h, [
                {
                  key: "phone",
                  value: function () {
                    var v = i();
                    return !(!o.test(v) && !c.test(v.substr(0, 4)));
                  },
                },
                {
                  key: "mobile",
                  value: function () {
                    var v = i();
                    return !(!d.test(v) && !x.test(v.substr(0, 4)));
                  },
                },
                {
                  key: "tablet",
                  value: function () {
                    return this.mobile() && !this.phone();
                  },
                },
              ]),
              h
            );
          })();
        l.default = new p();
      },
      function (s, l) {
        Object.defineProperty(l, "__esModule", { value: !0 });
        var r = function (a, o, c) {
            var d = a.node.getAttribute("data-aos-once");
            o > a.position
              ? a.node.classList.add("aos-animate")
              : typeof d < "u" &&
                (d === "false" || (!c && d !== "true")) &&
                a.node.classList.remove("aos-animate");
          },
          i = function (a, o) {
            var c = window.pageYOffset,
              d = window.innerHeight;
            a.forEach(function (x, p) {
              r(x, d + c, o);
            });
          };
        l.default = i;
      },
      function (s, l, r) {
        function i(d) {
          return d && d.__esModule ? d : { default: d };
        }
        Object.defineProperty(l, "__esModule", { value: !0 });
        var a = r(12),
          o = i(a),
          c = function (d, x) {
            return (
              d.forEach(function (p, h) {
                p.node.classList.add("aos-init"),
                  (p.position = (0, o.default)(p.node, x.offset));
              }),
              d
            );
          };
        l.default = c;
      },
      function (s, l, r) {
        function i(d) {
          return d && d.__esModule ? d : { default: d };
        }
        Object.defineProperty(l, "__esModule", { value: !0 });
        var a = r(13),
          o = i(a),
          c = function (d, x) {
            var p = 0,
              h = 0,
              v = window.innerHeight,
              g = {
                offset: d.getAttribute("data-aos-offset"),
                anchor: d.getAttribute("data-aos-anchor"),
                anchorPlacement: d.getAttribute("data-aos-anchor-placement"),
              };
            switch (
              (g.offset && !isNaN(g.offset) && (h = parseInt(g.offset)),
              g.anchor &&
                document.querySelectorAll(g.anchor) &&
                (d = document.querySelectorAll(g.anchor)[0]),
              (p = (0, o.default)(d).top),
              g.anchorPlacement)
            ) {
              case "top-bottom":
                break;
              case "center-bottom":
                p += d.offsetHeight / 2;
                break;
              case "bottom-bottom":
                p += d.offsetHeight;
                break;
              case "top-center":
                p += v / 2;
                break;
              case "bottom-center":
                p += v / 2 + d.offsetHeight;
                break;
              case "center-center":
                p += v / 2 + d.offsetHeight / 2;
                break;
              case "top-top":
                p += v;
                break;
              case "bottom-top":
                p += d.offsetHeight + v;
                break;
              case "center-top":
                p += d.offsetHeight / 2 + v;
            }
            return g.anchorPlacement || g.offset || isNaN(x) || (h = x), p + h;
          };
        l.default = c;
      },
      function (s, l) {
        Object.defineProperty(l, "__esModule", { value: !0 });
        var r = function (i) {
          for (
            var a = 0, o = 0;
            i && !isNaN(i.offsetLeft) && !isNaN(i.offsetTop);

          )
            (a += i.offsetLeft - (i.tagName != "BODY" ? i.scrollLeft : 0)),
              (o += i.offsetTop - (i.tagName != "BODY" ? i.scrollTop : 0)),
              (i = i.offsetParent);
          return { top: o, left: a };
        };
        l.default = r;
      },
      function (s, l) {
        Object.defineProperty(l, "__esModule", { value: !0 });
        var r = function (i) {
          return (
            (i = i || document.querySelectorAll("[data-aos]")),
            Array.prototype.map.call(i, function (a) {
              return { node: a };
            })
          );
        };
        l.default = r;
      },
    ]);
  });
})(nu);
var Lm = nu.exports;
const Fm = Vo(Lm);
function Pl() {
  return (
    (Pl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var n = 1; n < arguments.length; n++) {
            var s = arguments[n];
            for (var l in s)
              Object.prototype.hasOwnProperty.call(s, l) && (e[l] = s[l]);
          }
          return e;
        }),
    Pl.apply(this, arguments)
  );
}
var $n;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})($n || ($n = {}));
var Ao = function (e) {
    return e;
  },
  Co = "beforeunload",
  Mm = "popstate";
function Om(e) {
  e === void 0 && (e = {});
  var n = e,
    s = n.window,
    l = s === void 0 ? document.defaultView : s,
    r = l.history;
  function i() {
    var y = l.location,
      j = y.pathname,
      R = y.search,
      b = y.hash,
      E = r.state || {};
    return [
      E.idx,
      Ao({
        pathname: j,
        search: R,
        hash: b,
        state: E.usr || null,
        key: E.key || "default",
      }),
    ];
  }
  var a = null;
  function o() {
    if (a) v.call(a), (a = null);
    else {
      var y = $n.Pop,
        j = i(),
        R = j[0],
        b = j[1];
      if (v.length) {
        if (R != null) {
          var E = x - R;
          E &&
            ((a = {
              action: y,
              location: b,
              retry: function () {
                k(E * -1);
              },
            }),
            k(E));
        }
      } else u(y);
    }
  }
  l.addEventListener(Mm, o);
  var c = $n.Pop,
    d = i(),
    x = d[0],
    p = d[1],
    h = Po(),
    v = Po();
  x == null && ((x = 0), r.replaceState(Pl({}, r.state, { idx: x }), ""));
  function g(y) {
    return typeof y == "string" ? y : gi(y);
  }
  function w(y, j) {
    return (
      j === void 0 && (j = null),
      Ao(
        Pl(
          { pathname: p.pathname, hash: "", search: "" },
          typeof y == "string" ? lt(y) : y,
          { state: j, key: Dm() }
        )
      )
    );
  }
  function M(y, j) {
    return [{ usr: y.state, key: y.key, idx: j }, g(y)];
  }
  function m(y, j, R) {
    return !v.length || (v.call({ action: y, location: j, retry: R }), !1);
  }
  function u(y) {
    c = y;
    var j = i();
    (x = j[0]), (p = j[1]), h.call({ action: c, location: p });
  }
  function f(y, j) {
    var R = $n.Push,
      b = w(y, j);
    function E() {
      f(y, j);
    }
    if (m(R, b, E)) {
      var S = M(b, x + 1),
        O = S[0],
        P = S[1];
      try {
        r.pushState(O, "", P);
      } catch {
        l.location.assign(P);
      }
      u(R);
    }
  }
  function _(y, j) {
    var R = $n.Replace,
      b = w(y, j);
    function E() {
      _(y, j);
    }
    if (m(R, b, E)) {
      var S = M(b, x),
        O = S[0],
        P = S[1];
      r.replaceState(O, "", P), u(R);
    }
  }
  function k(y) {
    r.go(y);
  }
  var z = {
    get action() {
      return c;
    },
    get location() {
      return p;
    },
    createHref: g,
    push: f,
    replace: _,
    go: k,
    back: function () {
      k(-1);
    },
    forward: function () {
      k(1);
    },
    listen: function (j) {
      return h.push(j);
    },
    block: function (j) {
      var R = v.push(j);
      return (
        v.length === 1 && l.addEventListener(Co, bo),
        function () {
          R(), v.length || l.removeEventListener(Co, bo);
        }
      );
    },
  };
  return z;
}
function bo(e) {
  e.preventDefault(), (e.returnValue = "");
}
function Po() {
  var e = [];
  return {
    get length() {
      return e.length;
    },
    push: function (s) {
      return (
        e.push(s),
        function () {
          e = e.filter(function (l) {
            return l !== s;
          });
        }
      );
    },
    call: function (s) {
      e.forEach(function (l) {
        return l && l(s);
      });
    },
  };
}
function Dm() {
  return Math.random().toString(36).substr(2, 8);
}
function gi(e) {
  var n = e.pathname,
    s = n === void 0 ? "/" : n,
    l = e.search,
    r = l === void 0 ? "" : l,
    i = e.hash,
    a = i === void 0 ? "" : i;
  return (
    r && r !== "?" && (s += r.charAt(0) === "?" ? r : "?" + r),
    a && a !== "#" && (s += a.charAt(0) === "#" ? a : "#" + a),
    s
  );
}
function lt(e) {
  var n = {};
  if (e) {
    var s = e.indexOf("#");
    s >= 0 && ((n.hash = e.substr(s)), (e = e.substr(0, s)));
    var l = e.indexOf("?");
    l >= 0 && ((n.search = e.substr(l)), (e = e.substr(0, l))),
      e && (n.pathname = e);
  }
  return n;
}
/**
 * React Router v6.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function rn(e, n) {
  if (!e) throw new Error(n);
}
const pa = L.createContext(null),
  xa = L.createContext(null),
  zs = L.createContext({ outlet: null, matches: [] });
function Im(e) {
  return Wm();
}
function ze(e) {
  rn(!1);
}
function Bm(e) {
  let {
    basename: n = "/",
    children: s = null,
    location: l,
    navigationType: r = $n.Pop,
    navigator: i,
    static: a = !1,
  } = e;
  Es() && rn(!1);
  let o = uf(n),
    c = L.useMemo(() => ({ basename: o, navigator: i, static: a }), [o, i, a]);
  typeof l == "string" && (l = lt(l));
  let {
      pathname: d = "/",
      search: x = "",
      hash: p = "",
      state: h = null,
      key: v = "default",
    } = l,
    g = L.useMemo(() => {
      let w = ru(d, o);
      return w == null
        ? null
        : { pathname: w, search: x, hash: p, state: h, key: v };
    }, [o, d, x, p, h, v]);
  return g == null
    ? null
    : L.createElement(
        pa.Provider,
        { value: c },
        L.createElement(xa.Provider, {
          children: s,
          value: { location: g, navigationType: r },
        })
      );
}
function Vm(e) {
  let { children: n, location: s } = e;
  return Hm(ji(n), s);
}
function Um(e) {
  Es() || rn(!1);
  let { basename: n, navigator: s } = L.useContext(pa),
    { hash: l, pathname: r, search: i } = tu(e),
    a = r;
  if (n !== "/") {
    let o = df(e),
      c = o != null && o.endsWith("/");
    a = r === "/" ? n + (c ? "/" : "") : On([n, r]);
  }
  return s.createHref({ pathname: a, search: i, hash: l });
}
function Es() {
  return L.useContext(xa) != null;
}
function As() {
  return Es() || rn(!1), L.useContext(xa).location;
}
function Qm() {
  Es() || rn(!1);
  let { basename: e, navigator: n } = L.useContext(pa),
    { matches: s } = L.useContext(zs),
    { pathname: l } = As(),
    r = JSON.stringify(s.map((o) => o.pathnameBase)),
    i = L.useRef(!1);
  return (
    L.useEffect(() => {
      i.current = !0;
    }),
    L.useCallback(
      function (o, c) {
        if ((c === void 0 && (c = {}), !i.current)) return;
        if (typeof o == "number") {
          n.go(o);
          return;
        }
        let d = lu(o, JSON.parse(r), l);
        e !== "/" && (d.pathname = On([e, d.pathname])),
          (c.replace ? n.replace : n.push)(d, c.state);
      },
      [e, n, r, l]
    )
  );
}
function Wm() {
  return L.useContext(zs).outlet;
}
function tu(e) {
  let { matches: n } = L.useContext(zs),
    { pathname: s } = As(),
    l = JSON.stringify(n.map((r) => r.pathnameBase));
  return L.useMemo(() => lu(e, JSON.parse(l), s), [e, l, s]);
}
function Hm(e, n) {
  Es() || rn(!1);
  let { matches: s } = L.useContext(zs),
    l = s[s.length - 1],
    r = l ? l.params : {};
  l && l.pathname;
  let i = l ? l.pathnameBase : "/";
  l && l.route;
  let a = As(),
    o;
  if (n) {
    var c;
    let h = typeof n == "string" ? lt(n) : n;
    i === "/" || ((c = h.pathname) != null && c.startsWith(i)) || rn(!1),
      (o = h);
  } else o = a;
  let d = o.pathname || "/",
    x = i === "/" ? d : d.slice(i.length) || "/",
    p = Km(e, { pathname: x });
  return sf(
    p &&
      p.map((h) =>
        Object.assign({}, h, {
          params: Object.assign({}, r, h.params),
          pathname: On([i, h.pathname]),
          pathnameBase: h.pathnameBase === "/" ? i : On([i, h.pathnameBase]),
        })
      ),
    s
  );
}
function ji(e) {
  let n = [];
  return (
    L.Children.forEach(e, (s) => {
      if (!L.isValidElement(s)) return;
      if (s.type === L.Fragment) {
        n.push.apply(n, ji(s.props.children));
        return;
      }
      s.type !== ze && rn(!1);
      let l = {
        caseSensitive: s.props.caseSensitive,
        element: s.props.element,
        index: s.props.index,
        path: s.props.path,
      };
      s.props.children && (l.children = ji(s.props.children)), n.push(l);
    }),
    n
  );
}
function Km(e, n, s) {
  s === void 0 && (s = "/");
  let l = typeof n == "string" ? lt(n) : n,
    r = ru(l.pathname || "/", s);
  if (r == null) return null;
  let i = su(e);
  qm(i);
  let a = null;
  for (let o = 0; a == null && o < i.length; ++o) a = tf(i[o], e, r);
  return a;
}
function su(e, n, s, l) {
  return (
    n === void 0 && (n = []),
    s === void 0 && (s = []),
    l === void 0 && (l = ""),
    e.forEach((r, i) => {
      let a = {
        relativePath: r.path || "",
        caseSensitive: r.caseSensitive === !0,
        childrenIndex: i,
      };
      a.relativePath.startsWith("/") &&
        (a.relativePath.startsWith(l) || rn(!1),
        (a.relativePath = a.relativePath.slice(l.length)));
      let o = On([l, a.relativePath]),
        c = s.concat(a);
      r.children &&
        r.children.length > 0 &&
        (r.index === !0 && rn(!1), su(r.children, n, c, o)),
        !(r.path == null && !r.index) &&
          n.push({ path: o, score: ef(o, r.index), routesMeta: c });
    }),
    n
  );
}
function qm(e) {
  e.sort((n, s) =>
    n.score !== s.score
      ? s.score - n.score
      : nf(
          n.routesMeta.map((l) => l.childrenIndex),
          s.routesMeta.map((l) => l.childrenIndex)
        )
  );
}
const $m = /^:\w+$/,
  Ym = 3,
  Gm = 2,
  Xm = 1,
  Jm = 10,
  Zm = -2,
  To = (e) => e === "*";
function ef(e, n) {
  let s = e.split("/"),
    l = s.length;
  return (
    s.some(To) && (l += Zm),
    n && (l += Gm),
    s
      .filter((r) => !To(r))
      .reduce((r, i) => r + ($m.test(i) ? Ym : i === "" ? Xm : Jm), l)
  );
}
function nf(e, n) {
  return e.length === n.length && e.slice(0, -1).every((l, r) => l === n[r])
    ? e[e.length - 1] - n[n.length - 1]
    : 0;
}
function tf(e, n, s) {
  let l = n,
    { routesMeta: r } = e,
    i = {},
    a = "/",
    o = [];
  for (let c = 0; c < r.length; ++c) {
    let d = r[c],
      x = c === r.length - 1,
      p = a === "/" ? s : s.slice(a.length) || "/",
      h = lf(
        { path: d.relativePath, caseSensitive: d.caseSensitive, end: x },
        p
      );
    if (!h) return null;
    Object.assign(i, h.params);
    let v = l[d.childrenIndex];
    o.push({
      params: i,
      pathname: On([a, h.pathname]),
      pathnameBase: On([a, h.pathnameBase]),
      route: v,
    }),
      h.pathnameBase !== "/" && (a = On([a, h.pathnameBase])),
      (l = v.children);
  }
  return o;
}
function sf(e, n) {
  return (
    n === void 0 && (n = []),
    e == null
      ? null
      : e.reduceRight(
          (s, l, r) =>
            L.createElement(zs.Provider, {
              children:
                l.route.element !== void 0
                  ? l.route.element
                  : L.createElement(Im, null),
              value: { outlet: s, matches: n.concat(e.slice(0, r + 1)) },
            }),
          null
        )
  );
}
function lf(e, n) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [s, l] = rf(e.path, e.caseSensitive, e.end),
    r = n.match(s);
  if (!r) return null;
  let i = r[0],
    a = i.replace(/(.)\/+$/, "$1"),
    o = r.slice(1);
  return {
    params: l.reduce((d, x, p) => {
      if (x === "*") {
        let h = o[p] || "";
        a = i.slice(0, i.length - h.length).replace(/(.)\/+$/, "$1");
      }
      return (d[x] = af(o[p] || "")), d;
    }, {}),
    pathname: i,
    pathnameBase: a,
    pattern: e,
  };
}
function rf(e, n, s) {
  n === void 0 && (n = !1), s === void 0 && (s = !0);
  let l = [],
    r =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/:(\w+)/g, (a, o) => (l.push(o), "([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (l.push("*"),
        (r += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : (r += s ? "\\/*$" : "(?:\\b|$)"),
    [new RegExp(r, n ? void 0 : "i"), l]
  );
}
function af(e, n) {
  try {
    return decodeURIComponent(e);
  } catch {
    return e;
  }
}
function of(e, n) {
  n === void 0 && (n = "/");
  let {
    pathname: s,
    search: l = "",
    hash: r = "",
  } = typeof e == "string" ? lt(e) : e;
  return {
    pathname: s ? (s.startsWith("/") ? s : cf(s, n)) : n,
    search: hf(l),
    hash: mf(r),
  };
}
function cf(e, n) {
  let s = n.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((r) => {
      r === ".." ? s.length > 1 && s.pop() : r !== "." && s.push(r);
    }),
    s.length > 1 ? s.join("/") : "/"
  );
}
function lu(e, n, s) {
  let l = typeof e == "string" ? lt(e) : e,
    r = e === "" || l.pathname === "" ? "/" : l.pathname,
    i;
  if (r == null) i = s;
  else {
    let o = n.length - 1;
    if (r.startsWith("..")) {
      let c = r.split("/");
      for (; c[0] === ".."; ) c.shift(), (o -= 1);
      l.pathname = c.join("/");
    }
    i = o >= 0 ? n[o] : "/";
  }
  let a = of(l, i);
  return (
    r &&
      r !== "/" &&
      r.endsWith("/") &&
      !a.pathname.endsWith("/") &&
      (a.pathname += "/"),
    a
  );
}
function df(e) {
  return e === "" || e.pathname === ""
    ? "/"
    : typeof e == "string"
    ? lt(e).pathname
    : e.pathname;
}
function ru(e, n) {
  if (n === "/") return e;
  if (!e.toLowerCase().startsWith(n.toLowerCase())) return null;
  let s = e.charAt(n.length);
  return s && s !== "/" ? null : e.slice(n.length) || "/";
}
const On = (e) => e.join("/").replace(/\/\/+/g, "/"),
  uf = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  hf = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  mf = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
/**
 * React Router DOM v6.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function _i() {
  return (
    (_i =
      Object.assign ||
      function (e) {
        for (var n = 1; n < arguments.length; n++) {
          var s = arguments[n];
          for (var l in s)
            Object.prototype.hasOwnProperty.call(s, l) && (e[l] = s[l]);
        }
        return e;
      }),
    _i.apply(this, arguments)
  );
}
function ff(e, n) {
  if (e == null) return {};
  var s = {},
    l = Object.keys(e),
    r,
    i;
  for (i = 0; i < l.length; i++)
    (r = l[i]), !(n.indexOf(r) >= 0) && (s[r] = e[r]);
  return s;
}
const pf = ["onClick", "reloadDocument", "replace", "state", "target", "to"];
function xf(e) {
  let { basename: n, children: s, window: l } = e,
    r = L.useRef();
  r.current == null && (r.current = Om({ window: l }));
  let i = r.current,
    [a, o] = L.useState({ action: i.action, location: i.location });
  return (
    L.useLayoutEffect(() => i.listen(o), [i]),
    L.createElement(Bm, {
      basename: n,
      children: s,
      location: a.location,
      navigationType: a.action,
      navigator: i,
    })
  );
}
function vf(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
const Re = L.forwardRef(function (n, s) {
  let {
      onClick: l,
      reloadDocument: r,
      replace: i = !1,
      state: a,
      target: o,
      to: c,
    } = n,
    d = ff(n, pf),
    x = Um(c),
    p = gf(c, { replace: i, state: a, target: o });
  function h(v) {
    l && l(v), !v.defaultPrevented && !r && p(v);
  }
  return L.createElement(
    "a",
    _i({}, d, { href: x, onClick: h, ref: s, target: o })
  );
});
function gf(e, n) {
  let { target: s, replace: l, state: r } = n === void 0 ? {} : n,
    i = Qm(),
    a = As(),
    o = tu(e);
  return L.useCallback(
    (c) => {
      if (c.button === 0 && (!s || s === "_self") && !vf(c)) {
        c.preventDefault();
        let d = !!l || gi(a) === gi(o);
        i(e, { replace: d, state: r });
      }
    },
    [a, i, o, l, r, s, e]
  );
}
const jf = "/assets/left-4149fc94.png",
  _f = "/assets/right-dc332c47.png",
  iu = () =>
    t.jsx("div", {
      className: "navbar_",
      children: t.jsx("div", {
        className: "container",
        children: t.jsxs("div", {
          className: "flex-item",
          children: [
            t.jsx("div", {
              className: "left-logo",
              children: t.jsx("img", { src: jf, alt: "" }),
            }),
            t.jsx("div", {
              className: "right-logo",
              children: t.jsx("img", { src: _f, alt: "" }),
            }),
          ],
        }),
      }),
    }),
  yf = () =>
    t.jsx("div", {
      className: "banner___item___",
      children: t.jsxs("div", {
        "data-aos": "zoom-in",
        "data-aos-duration": "1200",
        children: [
          t.jsx(iu, {}),
          t.jsx("div", {
            className: "slider",
            children: t.jsx("div", {
              className: "container",
              children: t.jsx("div", {
                className:
                  "position_____________relative text-change-position-change",
                children: t.jsxs("div", {
                  className: "text_position_change",
                  children: [
                    t.jsx("h1", {
                      className: "text-end",
                      "data-aos": "zoom-in-left",
                      "data-aos-duration": "1400",
                      children: "تقرير إدارة تجربة العميل",
                    }),
                    t.jsx("h5", {
                      className: "text-end",
                      "data-aos": "zoom-in-left",
                      "data-aos-duration": "1600",
                      children: " إدارة تجربة العميل",
                    }),
                  ],
                }),
              }),
            }),
          }),
        ],
      }),
    });
const Nf = [
    {
      id: "1",
      name: "مؤشرات الأداء (لتجربة العميل)",
      list: [
        {
          id: "1",
          name: " الحاجة الى استحداث وتطوير المزيد من المؤشرات لمواكبة  التطور وممارسات البنك في تجربة العميل (NPS) (CES)",
        },
        { id: "2", name: " تحديات تقنية في إدارة وقياس مؤشرات الأداء" },
        {
          id: "3",
          name: "الحاجة الى توفير وضمان جودة البيانات لتغذية مؤشرات الاداء",
        },
      ],
      otherList: [
        {
          id: "1",
          name: ` تطوير مؤشرات جديدة لقياس 
                تجربة العميل تلبي التطورات    
                الحديثة وممارسات البنك.`,
        },
        { id: "2", name: "عمل بطاقات الأداء المتوازن للإدارة تجربة العميل" },
      ],
      parcentageTagline: "%نسبة التقدم 50",
      parent: 50,
      dataAos: "zoom-in",
      time: "1200",
    },
    {
      id: "2",
      name: "صوت العميل",
      list: [
        {
          id: "1",
          name: ` الحاجة الى تخصيص أدوات جمع وتحليل البيانات لرفع كفاءة 
                القياس (CES)`,
        },
        {
          id: "2",
          name: `تحدي التأثير السلبي على رضا العملاء نظير غياب 
                إدارة الحالات (case management)`,
        },
        { id: "3", name: " بعض من أدوات صوت العميل غير متوافقة من ال ASCI" },
        {
          id: "4",
          name: `تفتقر ادوات صوت العميل الى بعض من العناصر
                المهمة كـ  Loss Tree & CLF`,
        },
        {
          id: "5",
          name: "يتم جمع بيانات صوت العميل بطريقة مختلفة وغير متناسقة ",
        },
      ],
      otherList: [
        {
          id: "1",
          name: `الاستثمار في تطوير أدوات 
                جمع وتحليل صوت العميل 
                لملء أي فجوات وتوحيد 
                عناصرها`,
        },
        {
          id: "2",
          name: ` إنشاء نظام إدارة الحالات     
                (case management)    
                    يتضمن آليات لمتابعة 
                    الحالات وتحديد أولوياتها 
                    وحلّها بكفاءة.`,
        },
      ],
      parcentageTagline: "%نسبة التقدم30 ",
      parent: 30,
      dataAos: "zoom-in-up",
      time: "1400",
    },
    {
      id: "3",
      name: "إدارة المنتجات",
      list: [
        {
          id: "1",
          name: ` ارتفاع عدد البلاغات والشكاوى بسبب التغييرات الغير مخططة 
                والتي تتضمن إطلاق او تغيير او اغلاق منتجات دون تخطيط او 
                تبرير مسبق`,
        },
        {
          id: "2",
          name: "الحاجة الى استيعاب رحلة العميل واستكشاف مواطن الضعف",
        },
        {
          id: "3",
          name: " التباين بين رحلات العملاء وفق المنتجات من حيث الفجوات",
        },
      ],
      otherList: [
        {
          id: "1",
          name: ` وضع آلية لتخطيط التغييرات 
                وتنفيذها بشكل منظم`,
        },
        {
          id: "2",
          name: `إجراء أبحاث ودراسات لمعرفة 
                احتياجات وتوقعات العملاء في 
                مختلف مراحل رحلة العميل`,
        },
        {
          id: "3",
          name: ` انشاء سياسية سد الفجوات 
                لضمان تناسق رحلات العملاء`,
        },
      ],
      parcentageTagline: "%نسبة التقدم 60",
      parent: 60,
      dataAos: "fade-right",
      time: "1000",
    },
    {
      id: "4",
      name: "المهام التشغيلية",
      list: [
        {
          id: "1",
          name: ` تعدد الإدارات ذات العلاقة والحاجة الى استحداث نموذج لحكومة 
                التقاطعات`,
        },
        {
          id: "2",
          name: `الحاجة الى تخصيص التذاكر من ناحية (اين، كيف، متى) وربطها 
                بالرحلة`,
        },
        {
          id: "3",
          name: "توافر البيانات من قبل الجهات ذات التقاطعات التشغيلية",
        },
      ],
      otherList: [
        {
          id: "1",
          name: `  إنشاء سياسة نظام التذاكر 
                تشمل أصحاب المصلحة 
                المختلفين من أجل حوكمة 
                أفضل`,
        },
        {
          id: "2",
          name: `إنشاء سياسة نظام التذاكر 
                تشمل الية رفع التذاكر`,
        },
      ],
      parcentageTagline: "%نسبة التقدم 50",
      parent: 50,
      dataAos: "zoom-in-down",
      time: "1100",
    },
    {
      id: "5",
      name: "إدارة المنتجات",
      list: [
        {
          id: "1",
          name: `الحاجة إلى تحسين تجربة المستخدم للموقع الإلكتروني وذلك 
                لرفع كفاءة وجودة الخدمات`,
        },
        {
          id: "2",
          name: `تحديات تحديث وتحسين المحتوى للموقع الجديد للبنك لمواكبة 
                التجربة المحسنة`,
        },
        {
          id: "3",
          name: ` توافر البيانات لمختلف المنصات واستجابة الإدارة المعنية 
                لتوفير البيانات`,
        },
        {
          id: "4",
          name: `موائمة الجوانب التقنية والبرمجية للمعايير المعتمدة للأمم 
                المتحدة والحكومة الرقمية`,
        },
        {
          id: "5",
          name: `التغلب على التحديات التقنية المتعلقة بتحميل الصفحات 
                والوصول إلى منصات التحسين`,
        },
      ],
      otherList: [
        {
          id: "1",
          name: ` تطوير محتويات نصية ومرئية 
                موائمة لتجربة العميل المحدثة`,
        },
        {
          id: "2",
          name: `تطوير محتويات نصية ومرئية 
                موائمة لتجربة العميل المحدثة`,
        },
        {
          id: "3",
          name: `تنفيذ المتطلبات التنظيمية 
                لمطابقة المعايير التنظيمية`,
        },
      ],
      parcentageTagline: "%نسبة التقدم 90",
      parent: 100,
      dataAos: "zoom-in-left",
      time: "1400",
    },
  ],
  wf = [
    {
      id: "6",
      name: "المتسوق الخفي",
      list: [
        {
          id: "1",
          name: ` تصميم خطة شاملة قادرة على تغطية مختلف القنوات التي يتم 
                تقديم الخدمة من خلالها`,
        },
        {
          id: "2",
          name: ` جمع البيانات وفق الإطار الزمني لتغطية كافة المناطق التي يتم 
                تقدم الخدمات من خلالها`,
        },
        { id: "3", name: "فحص وتقييم الخدمات والأنشطة عبر مختلف القنوات" },
      ],
      otherList: [
        {
          id: "1",
          name: ` تطوير خطة شاملة لجمع 
                وتحليل بيانات المتسوق الخفي`,
        },
        {
          id: "2",
          name: "إجراء متسوق خفي لتقييم المنتجات والخدمات من مختلف القنوات",
        },
      ],
      parcentageTagline: "%70 نسبة التقدم ",
      parent: 70,
      dataAos: "zoom-out-up",
      time: "1000",
    },
    {
      id: "7",
      name: "الفروع",
      list: [
        {
          id: "1",
          name: " الحاجة إلى تطوير وتحسين أدوات جمع بيانات قياس الرضا",
        },
        { id: "2", name: "اختلاف رحلات العملاء عبر الفروع" },
        { id: "3", name: " تحسين الخدمات الذاتية وتوفير المزيد من حلولها" },
      ],
      otherList: [
        {
          id: "1",
          name: ` تصميم تجربة معيارية موحدة 
                متضمنة لإرشادات تفصيلية`,
        },
      ],
      parcentageTagline: "%نسبة التقدم100",
      parent: 100,
      dataAos: "zoom-out-down",
      time: "1400",
    },
    {
      id: "8",
      name: "التواصل",
      list: [
        { id: "1", name: "تباين اليات الاستجابة لمتطلبات العملاء" },
        { id: "2", name: "تحسين منهجية عملية التواصل مع العملاء" },
        { id: "3", name: "غياب منهجية للتعامل مع الأسئلة الشائعة" },
      ],
      otherList: [
        {
          id: "1",
          name: ` تصميم دليل تواصل لتقديم 
                الخدمات للعملاء بهوية موحدة 
                عبر جميع قنوات التواصل`,
        },
        {
          id: "2",
          name: ` تصميم دليل الأسئلة الشائعة 
                لرفع مستوى إيجابية الرحلة`,
        },
      ],
      parcentageTagline: "%نسبة التقدم 100",
      parent: 100,
      dataAos: "zoom-out-right",
      time: "1100",
    },
    {
      id: "9",
      name: "المشاركة المجتمعية",
      list: [
        {
          id: "1",
          name: " تطوير وحماية الصورة الذهنية من خلال المشاركة المجتمعية",
        },
        {
          id: "2",
          name: "الحاجة الى استيفاء المتطلبات التنظيمية للجهات التشريعية",
        },
      ],
      otherList: [
        {
          id: "1",
          name: ` عمل أدوات المشاركة 
                الالكترونية لتطوير الأداء وتحقيق 
                الأهداف المرجوة`,
        },
      ],
      parcentageTagline: "%نسبة التقدم 100",
      parent: 100,
      dataAos: "fade-up",
      time: "1400",
    },
    {
      id: "10",
      name: "برنامج الولاء",
      list: [
        {
          id: "1",
          name: `  الاستجابة لمتطلبات العملاء لتعزيز الرضا والاكتساب والاحتفاظ 
                بهم`,
        },
        {
          id: "2",
          name: `تصميم برنامج ولاء مخصص قادر على تحفيز السلوكيات 
                الإيجابيات`,
        },
        {
          id: "3",
          name: " اختيار الشريك التنفيذي والموائمة مع إدارة تقنية المعلومات",
        },
      ],
      otherList: [
        {
          id: "1",
          name: ` إنشاء برنامج ولاء لتعزيز 
                الاحتفاظ بالعملاء وملء 
                الفجوات`,
        },
        {
          id: "2",
          name: ` تنفيذ التحليلات اللازمة لاختيار 
                الشريك التقني والموائمة مع 
                المتطلبات`,
        },
      ],
      parcentageTagline: "%نسبة التقدم 100",
      parent: 100,
      dataAos: "fade-right",
      time: "1400",
    },
  ],
  kf = () =>
    t.jsx(t.Fragment, {
      children: t.jsxs("div", {
        className: "container my-5 py-5",
        children: [
          t.jsxs("div", {
            className: "content",
            children: [
              t.jsx("div", {
                className: "text-end semi-bold",
                "data-aos": "zoom-in-left",
                "data-aos-duration": "1200",
                children: t.jsx("h3", {
                  className: "semi-bold",
                  children: "ملخص أبرز التحديات والحلول لمحطات تجربة العميل",
                }),
              }),
              t.jsxs("div", {
                className: "flex_content_container",
                "data-aos": "zoom-in-left",
                "data-aos-duration": "1300",
                children: [
                  t.jsxs("div", {
                    className: "flex__content",
                    children: [
                      t.jsx("h4", {
                        className: "semi-bold_",
                        children: "مستوى تقدم",
                      }),
                      t.jsx("h4", {
                        className: "semi-bold_",
                        children: "الحلول",
                      }),
                    ],
                  }),
                  t.jsxs("div", {
                    className: "flex__content",
                    children: [
                      t.jsx("h4", {
                        className: "semi-bold_",
                        children: "المحطات",
                      }),
                      t.jsx("h4", {
                        className: "semi-bold_",
                        children: "أبرز التحديات",
                      }),
                    ],
                  }),
                ],
              }),
              t.jsxs("div", {
                className: "flex_content_container",
                "data-aos": "zoom-in-left",
                "data-aos-duration": "1300",
                children: [
                  t.jsxs("div", {
                    className: "flex__content",
                    children: [
                      t.jsx("h4", {
                        className: "semi-bold",
                        children: "مستوى تقدم",
                      }),
                      t.jsx("h4", {
                        className: "semi-bold",
                        children: "الحلول",
                      }),
                    ],
                  }),
                  t.jsxs("div", {
                    className: "flex__content",
                    children: [
                      t.jsx("h4", {
                        className: "semi-bold",
                        children: "المحطات",
                      }),
                      t.jsx("h4", {
                        className: "semi-bold",
                        children: "أبرز التحديات",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          t.jsx("div", {
            className: "row",
            children: Nf.map((e) =>
              t.jsx(
                "div",
                {
                  className: "col-lg-12",
                  children: t.jsxs("div", {
                    className: "contents__description",
                    "data-aos": "zoom-in-left",
                    "data-aos-duration": e.time,
                    children: [
                      t.jsxs("div", {
                        className: "parcantaze",
                        children: [
                          t.jsx("p", {
                            className: "text-end",
                            children: e.parcentageTagline,
                          }),
                          t.jsx("div", {
                            className: "border-shap",
                            children: t.jsx("div", {
                              className: "border-shap-absolute",
                              style: { width: `${e.parent}%` },
                            }),
                          }),
                        ],
                      }),
                      t.jsx("div", {
                        children: e.otherList.map((n) =>
                          t.jsxs(
                            "div",
                            {
                              className: "lines",
                              children: [
                                t.jsx("p", { children: n.name }),
                                t.jsxs("p", { children: [" .", n.id] }),
                              ],
                            },
                            n.id
                          )
                        ),
                      }),
                      t.jsx("div", {
                        children: e.list.map((n) =>
                          t.jsxs(
                            "div",
                            {
                              className: "lines",
                              children: [
                                t.jsx("p", { children: n.name }),
                                t.jsxs("p", { children: [" .", n.id] }),
                              ],
                            },
                            n.id
                          )
                        ),
                      }),
                      t.jsx("div", {
                        className: "tag-line-flex",
                        children: t.jsxs("div", {
                          className: "tag-line",
                          children: [
                            t.jsx("div", {
                              className: "tag-line-caption",
                              children: t.jsx("h3", {
                                className: "semi-bold",
                                style: { color: "#5BAB22" },
                                children: e.name,
                              }),
                            }),
                            t.jsx("div", {
                              className: "number",
                              children: t.jsx("span", { children: e.id }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                },
                e.id
              )
            ),
          }),
        ],
      }),
    });
const Sf = () =>
    t.jsx(t.Fragment, {
      children: t.jsxs("div", {
        className: "container pb-5 ",
        style: { marginBottom: "100px" },
        children: [
          t.jsxs("div", {
            className: "content",
            children: [
              t.jsx("div", {
                className: "text-end",
                "data-aos": "zoom-in-left",
                "data-aos-duration": "1200",
                children: t.jsx("h3", {
                  className: "semi-bold",
                  children: "ملخص أبرز التحديات والحلول لمحطات تجربة العميل",
                }),
              }),
              t.jsxs("div", {
                className: "flex_content_container",
                "data-aos": "zoom-in-left",
                "data-aos-duration": "1400",
                children: [
                  t.jsxs("div", {
                    className: "flex__content",
                    children: [
                      t.jsx("h4", {
                        className: "semi-bold_",
                        children: "مستوى تقدم",
                      }),
                      t.jsx("h4", {
                        className: "semi-bold_",
                        children: "الحلول",
                      }),
                    ],
                  }),
                  t.jsxs("div", {
                    className: "flex__content",
                    children: [
                      t.jsx("h4", {
                        className: "semi-bold_",
                        children: "المحطات",
                      }),
                      t.jsx("h4", {
                        className: "semi-bold_",
                        children: "أبرز التحديات",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          t.jsx("div", {
            className: "row",
            children: wf.map((e) =>
              t.jsx(
                "div",
                {
                  className: "col-lg-12",
                  children: t.jsxs("div", {
                    className: "contents__description",
                    "data-aos": "zoom-in-left",
                    "data-aos-duration": e.time,
                    children: [
                      t.jsxs("div", {
                        className: "parcantaze",
                        children: [
                          t.jsx("p", {
                            className: "text-end",
                            children: e.parcentageTagline,
                          }),
                          t.jsx("div", {
                            className: "border-shap",
                            children: t.jsx("div", {
                              className: "border-shap-absolute",
                              style: { width: `${e.parent}%` },
                            }),
                          }),
                        ],
                      }),
                      t.jsx("div", {
                        children: e.otherList.map((n) =>
                          t.jsxs(
                            "div",
                            {
                              className: "lines",
                              children: [
                                t.jsx("p", { children: n.name }),
                                t.jsxs("p", { children: [" .", n.id] }),
                              ],
                            },
                            n.id
                          )
                        ),
                      }),
                      t.jsx("div", {
                        children: e.list.map((n) =>
                          t.jsxs(
                            "div",
                            {
                              className: "lines",
                              children: [
                                t.jsx("p", { children: n.name }),
                                t.jsxs("p", { children: [" .", n.id] }),
                              ],
                            },
                            n.id
                          )
                        ),
                      }),
                      t.jsx("div", {
                        className: "tag-line-flex",
                        children: t.jsxs("div", {
                          className: "tag-line",
                          children: [
                            t.jsx("div", {
                              className: "tag-line-caption",
                              children: t.jsx("h3", {
                                className: "semi-bold",
                                style: { color: "#5bab22" },
                                children: e.name,
                              }),
                            }),
                            t.jsx("div", {
                              className: "number",
                              children: t.jsx("span", { children: e.id }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                },
                e.id
              )
            ),
          }),
        ],
      }),
    }),
  zf = () =>
    t.jsxs("div", {
      className: "",
      children: [t.jsx(yf, {}), t.jsx(kf, {}), t.jsx(Sf, {})],
    });
const Ef = (e) => {
  const n = [
    {
      id: 1,
      to: "/slide-1",
      text: "تقرير إدارة تجربة العميل",
      src: " /banner/1.jpg",
    },
    {
      id: 2,
      to: "/slide-2",
      text: "`مؤشرات الاداء`",
      src: " /banner/2nd.jpg",
    },
    { id: 3, to: "/slide-3", text: "صوت العميل", src: " /frame/3.jpg" },
    {
      id: 4,
      to: "/slide-4",
      text: "إدارة المنتجات`",
      src: " /banner/online-marketing.jpg",
    },
    {
      id: 5,
      to: "/slide-5",
      text: "`المهام التشغيلية`",
      src: " /banner/slide5.jpg",
    },
    {
      id: 6,
      to: "/slide-6",
      text: "موقع البنك",
      src: " /banner/slide6.jpg",
    },
    {
      id: 7,
      to: "/slide-7",
      text: "المتسوق الخفي",
      src: " /banner/slide7.jpg",
    },
    { id: 8, to: "/slide-8", text: "الفروع", src: " /banner/slide8.jpg" },
    {
      id: 9,
      to: "/slide-9",
      text: "التواصل",
      src: " /banner/banner9.jpg",
    },
    {
      id: 10,
      to: "/slide-10",
      text: " المشاركة المجتمعية",
      src: " /banner/10.jpg",
    },
    {
      id: 11,
      to: "/slide-11",
      text: "`برنامج ولاء العميل`",
      src: " /banner/last.jpg",
    },
  ];
  return t.jsx("div", {
    className: "transform-navbar",
    children: t.jsxs("div", {
      className: "scroll-container",
      children: [
        n.map((s) =>
          t.jsxs(
            Re,
            {
              to: s.to,
              className: "slide-box",
              onClick: e,
              children: [
                t.jsx("img", { src: s.src, alt: s.label }),
                t.jsx("div", {
                  style: {
                    backgroundColor: "rgba(0,0,0,.3)",
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                  },
                }),
                t.jsx("p", { children: s.text }),
              ],
            },
            s.id
          )
        ),
        t.jsxs(
          Re,
          {
            to: "/slide-12",
            className: "slide-box",
            onClick: e,
            children: [
              t.jsx("img", {
                src: " /banner/last-bg.jpg",
                alt: "Slide11",
              }),
              t.jsx("p", { children: "شكراً لكم" }),
            ],
          },
          12
        ),
      ],
    }),
  });
};
const yr = "/assets/frame-b0400328.png",
  Ks = "/assets/grid-img-4ea7ae46.svg",
  Af = "/assets/svg-7674dc9f.svg";
const an = ({ h1: e, h3: n, img: s, bg: l }) =>
    t.jsx(t.Fragment, {
      children: t.jsxs("div", {
        className: "slider",
        children: [
          t.jsx("img", { src: s, alt: "" }),
          t.jsxs("div", {
            className: "black-overlay",
            style: { background: "#0000003a" },
            children: [
              t.jsx(iu, {}),
              t.jsx("div", {
                className: "center-flex-item",
                children: t.jsx("div", {
                  className: "container",
                  children: t.jsx("div", {
                    className: "row",
                    children: t.jsxs("div", {
                      className: "content-slide-for-slider",
                      children: [
                        t.jsx("h1", {
                          "data-aos": "zoom-in-left",
                          "data-aos-duration": "1200",
                          children: t.jsx("span", {
                            style: { background: `${l}` },
                            children: e,
                          }),
                        }),
                        t.jsx("h3", {
                          "data-aos": "zoom-in-left",
                          "data-aos-duration": "1200",
                          children: n,
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            ],
          }),
        ],
      }),
    }),
  Cf = "/assets/2nd-80eaff5a.jpg",
  bf = "/assets/11-b3c593ba.png",
  Pf = "/assets/22-9233ab48.png",
  Tf = "/assets/33-d0cf8267.png",
  Rf = "/assets/44-16e17102.png",
  Lf = "/assets/55-e39bfb6a.png",
  Ff = "/assets/66-94861705.png",
  Mf = () => {
    const e = "مؤشرات الاداء",
      n = "",
      s = "#314fedbd";
    return t.jsxs("div", {
      children: [
        t.jsx(an, { h1: e, h3: n, bg: s, img: Cf }),
        t.jsx("div", {
          className: "py-3",
          style: { margin: "100px 0" },
          children: t.jsxs("div", {
            className: "container",
            children: [
              t.jsxs("div", {
                className: "third-navbar",
                children: [
                  t.jsxs("div", {
                    className: "navlink___",
                    "data-aos": "zoom-in-left",
                    "data-aos-duration": "1100",
                    children: [
                      t.jsx("a", { href: "", children: "إدارة العمليات" }),
                      t.jsx("a", {
                        href: "",
                        children: "بيئة تحليلية – مكعب طلبات",
                      }),
                      t.jsx("a", { href: "", children: "نظام رضى العميل" }),
                      t.jsx("a", {
                        href: "",
                        className: "active",
                        children: "المصادر:",
                      }),
                    ],
                  }),
                  t.jsx("div", {
                    className: "nav___logo",
                    "data-aos": "zoom-in-left",
                    "data-aos-duration": "1400",
                    children: t.jsxs("h2", {
                      children: [
                        " ",
                        "ملخص مؤشرات تجربة العملاء –",
                        " ",
                        t.jsx("span", {
                          style: { color: "#314FED" },
                          children: "(التحديات)",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              t.jsxs("div", {
                className: "row mt-5 pt-4",
                children: [
                  t.jsx("div", {
                    className: "col-lg-4",
                    children: t.jsx("div", {
                      className: "grid-item-img",
                      "data-aos": "zoom-in-left",
                      "data-aos-duration": "1100",
                      children: t.jsx("img", { src: bf, alt: "" }),
                    }),
                  }),
                  t.jsx("div", {
                    className: "col-lg-4",
                    children: t.jsx("div", {
                      className: "grid-item-img",
                      "data-aos": "zoom-in-left",
                      "data-aos-duration": "1100",
                      children: t.jsx("img", { src: Pf, alt: "" }),
                    }),
                  }),
                  t.jsx("div", {
                    className: "col-lg-4",
                    children: t.jsx("div", {
                      className: "grid-item-img",
                      "data-aos": "zoom-in-left",
                      "data-aos-duration": "1100",
                      children: t.jsx("img", { src: Tf, alt: "" }),
                    }),
                  }),
                  t.jsx("div", {
                    className: "col-lg-4 mt-5 pt-3",
                    children: t.jsx("div", {
                      className: "grid-item-img",
                      "data-aos": "zoom-in-left",
                      "data-aos-duration": "1100",
                      children: t.jsx("img", { src: Rf, alt: "" }),
                    }),
                  }),
                  t.jsx("div", {
                    className: "col-lg-4 mt-5 pt-3",
                    children: t.jsx("div", {
                      className: "grid-item-img",
                      "data-aos": "zoom-in-left",
                      "data-aos-duration": "1100",
                      children: t.jsx("img", { src: Lf, alt: "" }),
                    }),
                  }),
                  t.jsx("div", {
                    className: "col-lg-4 mt-5 pt-3",
                    children: t.jsx("div", {
                      className: "grid-item-img",
                      "data-aos": "zoom-in-left",
                      "data-aos-duration": "1100",
                      children: t.jsx("img", { src: Ff, alt: "" }),
                    }),
                  }),
                  t.jsx("div", {
                    className: "col-lg-4",
                    children: t.jsxs("div", {
                      className: "box spacing need-more-height",
                      "data-aos": "zoom-in-left",
                      "data-aos-duration": "1100",
                      children: [
                        t.jsx("div", {
                          className: "box-caption",
                          children: t.jsx("h6", {
                            children: "برنامج صوت العميل",
                          }),
                        }),
                        t.jsx("div", {
                          className: "box___border___",
                          children: t.jsxs("div", {
                            className: "box__content__flex",
                            children: [
                              t.jsx("div", {
                                className: "text___",
                                children: t.jsx("p", {
                                  children:
                                    ". التكامل مع الإدارات لتسهيل العقبات للوصول لتجربة العملاء التي نرجوها هو أولويتنا، نسعى لوضع الجميع على نفس الصفحة لفهم العميل ومراقبة تصرفاته والتمركز حوله",
                                }),
                              }),
                              t.jsx("div", {
                                className: "icons___",
                                children: t.jsx("img", { src: yr, alt: "" }),
                              }),
                            ],
                          }),
                        }),
                        t.jsxs("div", {
                          className: "grid-container",
                          children: [
                            t.jsxs("div", {
                              className: "grid_box position-changing",
                              children: [
                                t.jsx("div", {
                                  className: "grid___img text-end",
                                  children: t.jsx("img", { src: Ks, alt: "" }),
                                }),
                                t.jsx("p", {
                                  children:
                                    "تزويدنا بنصوص نتائج الإجراءات على طلبات العملاء في مرحلة المعالجة ليتم تحسينها",
                                }),
                              ],
                            }),
                            t.jsxs("div", {
                              className: "grid_box position-changing",
                              children: [
                                t.jsx("div", {
                                  className: "grid___img text-end",
                                  children: t.jsx("img", { src: Ks, alt: "" }),
                                }),
                                t.jsx("p", {
                                  children:
                                    "اعتماد سياسة تصنيف البلاغات وعكسها على CRM مشروع تطوير تصنيفات البلاغات",
                                }),
                              ],
                            }),
                            t.jsxs("div", {
                              className: "grid_box",
                              children: [
                                t.jsx("div", {
                                  className: "grid___img text-end",
                                  children: t.jsx("img", { src: Ks, alt: "" }),
                                }),
                                t.jsx("p", {
                                  children:
                                    "TATالتكامل مع إدارة العمليات في تطوير لوحة البيانات وتوضيح نسبة صحة اعتراض العميل على الرفض",
                                }),
                              ],
                            }),
                            t.jsxs("div", {
                              className: "grid_box",
                              children: [
                                t.jsx("div", {
                                  className: "grid___img text-end",
                                  children: t.jsx("img", { src: Ks, alt: "" }),
                                }),
                                t.jsx("p", {
                                  children:
                                    "توضيح حجم الزيارات بشكل تفصيلي للمنتجات بالموقع الإلكتروني",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  t.jsx("div", {
                    className: "col-lg-4",
                    children: t.jsxs("div", {
                      className: "box spacing need-more-height",
                      "data-aos": "zoom-in-left",
                      "data-aos-duration": "1300",
                      children: [
                        t.jsx("div", {
                          className: "box-caption",
                          children: t.jsx("h6", {
                            children: "أبرز الصعوبات وتصنيفها",
                          }),
                        }),
                        t.jsx("div", {
                          className: "box___border___",
                          children: t.jsxs("div", {
                            className: "box__content__flex",
                            children: [
                              t.jsxs("div", {
                                className: "text___",
                                children: [
                                  t.jsx("p", {
                                    children:
                                      "التعمق في تصنيف الصعوبات لمعرفة مشاكل العميل وحلها بالشكل المطلوب",
                                  }),
                                  t.jsx("p", {
                                    children:
                                      " المشاكل التشغيلية والتقنية المتكررة تجعل ضرورة إعطاء الأولوية لتحسين عمل الأنظمة واستجابتها لأعلى معايير تجربة المستخدم وهو ما يسهل على العملاء رحلتهم",
                                  }),
                                ],
                              }),
                              t.jsx("div", {
                                className: "icons___",
                                children: t.jsx("img", { src: yr, alt: "" }),
                              }),
                            ],
                          }),
                        }),
                        t.jsxs("div", {
                          className: "grid___parent",
                          children: [
                            t.jsxs("div", {
                              className: "grid-tag-line",
                              children: [
                                t.jsx("h5", { children: "إجرائية - تشغيلية" }),
                                t.jsxs("div", {
                                  className: "grid-tag-line-paragraph",
                                  children: [
                                    t.jsx("p", {
                                      children:
                                        "التأخر بمعالجة طلبات الأسر المنتجة",
                                    }),
                                    t.jsx("p", {
                                      children:
                                        "التأخر بالرد على اتصالات العملاء",
                                    }),
                                    t.jsx("p", {
                                      children: "التأخر في صرف التمويل",
                                    }),
                                    t.jsx("p", {
                                      children: "توثيق منتج زود الادخاري",
                                    }),
                                    t.jsx("p", {
                                      children: "عدم وضوح أسباب الرفض",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            t.jsxs("div", {
                              className: "grid-tag-line",
                              children: [
                                t.jsx("h5", { children: "تقنية" }),
                                t.jsxs("div", {
                                  className: "grid-tag-line-paragraph",
                                  children: [
                                    t.jsx("p", {
                                      children: "وجود مشاكل تقنية",
                                    }),
                                    t.jsx("p", {
                                      children: "عطل فني في تعبئة العمل الحر",
                                    }),
                                    t.jsx("p", {
                                      children:
                                        "حدوث مشكلة أثناء رفع الملفات خطأ",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            t.jsxs("div", {
                              className: "grid-tag-line border-delete",
                              children: [
                                t.jsx("h5", { children: "تشريعية" }),
                                t.jsx("div", {
                                  className: "grid-tag-line-paragraph",
                                  children: t.jsx("p", {
                                    children:
                                      "شرط الالتزامات وحد الراتب والكفيل",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  t.jsx("div", {
                    className: "col-lg-4",
                    children: t.jsxs("div", {
                      className: "box spacing need-more-height",
                      "data-aos": "zoom-in-left",
                      "data-aos-duration": "1400",
                      children: [
                        t.jsx("div", {
                          className: "box-caption",
                          children: t.jsx("h6", {
                            children: "إحصائيات مراكز الدعم",
                          }),
                        }),
                        t.jsx("div", {
                          className: "box___border___",
                          children: t.jsxs("div", {
                            className: "box__content__flex",
                            children: [
                              t.jsxs("div", {
                                className: "text___",
                                children: [
                                  t.jsx("p", {
                                    children:
                                      ". الاستفسارات الأعلى هي عن مرحلة طلب تمويل والسياسات الائتمانية واللوائح وأسباب الرفض مشكلة تجربة مستخدم في نظام (LEN)",
                                  }),
                                  t.jsx("p", {
                                    children:
                                      "أهم أحد أسباب البلاغات هي الصعوبات والمشاكل التقنية.",
                                  }),
                                ],
                              }),
                              t.jsx("div", {
                                className: "icons___",
                                children: t.jsx("img", { src: yr, alt: "" }),
                              }),
                            ],
                          }),
                        }),
                        t.jsxs("div", {
                          className: "row-grid",
                          children: [
                            t.jsxs("div", {
                              className: "col-lg-grid",
                              children: [
                                t.jsx("span", { children: "حجم البلاغات" }),
                                t.jsxs("div", {
                                  className: "cols-flex",
                                  children: [
                                    t.jsxs("div", {
                                      className: "col-one",
                                      children: [
                                        t.jsx("h6", { children: "الشكاوى" }),
                                        t.jsx("h3", { children: "5,733" }),
                                      ],
                                    }),
                                    t.jsxs("div", {
                                      className: "col-two",
                                      children: [
                                        t.jsx("h6", { children: "طلب خدمة" }),
                                        t.jsx("h3", { children: "30,604" }),
                                      ],
                                    }),
                                  ],
                                }),
                                t.jsxs("div", {
                                  className: "center-align-div",
                                  children: [
                                    t.jsx("h5", { children: "استفسارات" }),
                                    t.jsx("h3", { children: "40,688" }),
                                  ],
                                }),
                              ],
                            }),
                            t.jsxs("div", {
                              className: "col-lg-end-side text-end",
                              children: [
                                t.jsx("span", { children: "حجم البلاغات" }),
                                t.jsx("h6", { children: "إجمالي البلاغات" }),
                                t.jsxs("h4", {
                                  children: [
                                    t.jsx("span", { children: "بلاغ" }),
                                    "77,031",
                                  ],
                                }),
                                t.jsx("h6", {
                                  style: { color: "red", marginBottom: "12px" },
                                  children: "إجمالي البلاغات",
                                }),
                                t.jsx("img", { src: Af, alt: "" }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              t.jsx("div", {
                className: "other-headline-text",
                "data-aos": "zoom-in-left",
                "data-aos-duration": "1100",
                style: { marginTop: "100px" },
                children: t.jsxs("h1", {
                  className: "text-end mt-5 semi-bold",
                  children: [
                    "ملخص المشاريع – ",
                    t.jsx("span", { children: "(الحلول)" }),
                  ],
                }),
              }),
              t.jsxs("div", {
                className: "row mt-5",
                children: [
                  t.jsx("div", {
                    className: "col-lg-4",
                    children: t.jsxs("div", {
                      className: "more-grid height-cusstomization",
                      "data-aos": "zoom-in-left",
                      "data-aos-duration": "1200",
                      children: [
                        t.jsx("h6", { children: "الحلول" }),
                        t.jsx("p", {
                          children:
                            ". إضافة أدوات تتبع العميل داخل الموقع لمعرفة الخرائط الحرارية وطبيعة سلوكه داخل الموقع.",
                        }),
                        t.jsx("p", {
                          children:
                            ". يجري العمل على وضع سياسة تحسين رحلة العميل وسد الفجوات.",
                        }),
                        t.jsx("p", {
                          children: ". تجري مراقبة الصعوبات بشكل يومي.",
                        }),
                        t.jsx("p", {
                          children:
                            ". إعادة النظر والحساب لنظام قياس تجربة العملاء باستبانات تقييم تغطي جميع مراحل المنتجات والخدمات.",
                        }),
                        t.jsx("p", {
                          children:
                            ". توحيد طريقة الرد على العملاء في منصة تويتر بحيث يتم إعطاء معلومات وافية لهم إن أمكن",
                        }),
                        t.jsx("p", {
                          children:
                            ". معالجة التأخر التشغيلية وتسهيلها على العملاء.",
                        }),
                        t.jsx("div", { className: "padding-bottom____" }),
                      ],
                    }),
                  }),
                  t.jsxs("div", {
                    className: "col-lg-4",
                    children: [
                      t.jsxs("div", {
                        className: "more-grid",
                        "data-aos": "zoom-in-left",
                        "data-aos-duration": "1200",
                        children: [
                          t.jsx("h6", {
                            style: { background: "blue" },
                            children: "نقاط الألم",
                          }),
                          t.jsx("p", {
                            children:
                              ". صعوبات تقنية في النظام تعيق تجربة العملاء.",
                          }),
                          t.jsx("p", {
                            children:
                              ". تحديات في التعامل مع استفسارات العملاء.",
                          }),
                          t.jsx("p", { children: ". التأخر في الإجراءات." }),
                        ],
                      }),
                      t.jsxs("div", {
                        className: "more-grid mt-3",
                        "data-aos": "zoom-in-left",
                        "data-aos-duration": "1400",
                        children: [
                          t.jsx("h6", { children: "الانجازات" }),
                          t.jsx("p", {
                            children:
                              ". إطلاق موقع البنك بحلته الجديدة وبتجربة مستخدمين مازالت تحت الرصد.",
                          }),
                          t.jsx("p", {
                            children:
                              ". وضوح المحتوى، مع الترجمة الكاملة للموقع.",
                          }),
                          t.jsx("p", {
                            children:
                              ". زيادة سرعة تحميل الصفحة عن الربع السابق.",
                          }),
                          t.jsx("p", {
                            children: ". ارتفاع مؤشر الرضى في خدمتين.",
                          }),
                          t.jsx("p", {
                            children:
                              ". إطلاق صفحة FAQ في الموقع الجديد لتكون مرجعاً للعملاء يغذي نقاط التواصل للخدمات والمنتجات.",
                          }),
                          t.jsx("p", { children: ". رسائل إتمام الخدمة." }),
                        ],
                      }),
                    ],
                  }),
                  t.jsxs("div", {
                    className: "col-lg-4",
                    "data-aos": "fade-left",
                    "data-aos-duration": "1400",
                    children: [
                      t.jsx("div", {
                        className: "side__bar",
                        children: t.jsx("div", {
                          className: "sidebar____text___bg",
                          children: t.jsx("h6", {
                            children: "المشاريع والبرامج",
                          }),
                        }),
                      }),
                      t.jsxs("div", {
                        className: "border-text__",
                        children: [
                          t.jsx("p", {
                            children: "التجهيز لمنصة الأسر المنتجة",
                          }),
                          t.jsx("span", {}),
                        ],
                      }),
                      t.jsxs("div", {
                        className: "border-text__",
                        children: [
                          t.jsx("p", { children: "برنامج ولاء العملاء" }),
                          t.jsx("span", {}),
                        ],
                      }),
                      t.jsxs("div", {
                        className: "border-text__",
                        children: [
                          t.jsx("p", {
                            children: "تحسين رحلة العملاء بالفروع",
                          }),
                          t.jsx("span", {}),
                        ],
                      }),
                      t.jsxs("div", {
                        className: "border-text__",
                        children: [
                          t.jsx("p", {
                            children: "برنامج المشاركة الالكترونية",
                          }),
                          t.jsx("span", {}),
                        ],
                      }),
                      t.jsxs("div", {
                        className: "border-text__",
                        children: [
                          t.jsx("p", { children: "تحسين تطبيق البنك" }),
                          t.jsx("span", {}),
                        ],
                      }),
                      t.jsxs("div", {
                        className: "border-text__",
                        children: [
                          t.jsx("p", { children: "برنامج مجموعات التركيز" }),
                          t.jsx("span", {}),
                        ],
                      }),
                      t.jsxs("div", {
                        className: "border-text__",
                        children: [
                          t.jsx("p", { children: "مشروع رحلات العميل" }),
                          t.jsx("span", {}),
                        ],
                      }),
                      t.jsxs("div", {
                        className: "border-text__",
                        children: [
                          t.jsx("p", {
                            children:
                              "NPS خطة تنفيذية لدراسة نسبة العملاء المروجين",
                          }),
                          t.jsx("span", {}),
                        ],
                      }),
                      t.jsxs("div", {
                        className: "border-text__",
                        children: [
                          t.jsx("p", {
                            children: "الانضمام لجائزة تجربة العميل السعودية",
                          }),
                          t.jsx("span", {}),
                        ],
                      }),
                      t.jsxs("div", {
                        className: "border-text__",
                        children: [
                          t.jsx("p", {
                            children: "الاستعداد لليوم العالمي لتجربة العميل",
                          }),
                          t.jsx("span", {}),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  },
  Of = () => t.jsx("div", { children: t.jsx(Mf, {}) });
const Df = "/assets/vs-23bad865.png",
  If = "/assets/cal1-9f71b31d.png",
  Bf = "/assets/v2-ef3ca327.png",
  Vf = "/assets/v3-550dcd01.png",
  Uf = "/assets/v4-2cdc38fc.png",
  Qf = "/assets/v5-575782c1.png",
  Wf = "/assets/v6-36c051d7.png",
  Hf = "/assets/card-banner-e2c6cd7e.svg",
  Kf = "/assets/1212-8f0995f3.png",
  qs = "/assets/emoji-4a862229.svg",
  qf = "/assets/3-cc6b2f44.jpg",
  $f = () => {
    const e = "صوت العميل",
      n = "",
      s = "#0a9ba5c7";
    return t.jsxs(t.Fragment, {
      children: [
        t.jsx(an, { h1: e, h3: n, img: qf, bg: s }),
        t.jsx("div", { className: "other___slide___image text-center" }),
        t.jsx("div", {
          style: { marginTop: "100px", marginBottom: "40px" },
          children: t.jsxs("div", {
            className: "container",
            children: [
              t.jsx("div", {
                className: "headline-of-other-slide text-end mb-2",
                "data-aos": "zoom-in-left",
                "data-aos-duration": "1100",
                children: t.jsxs("h2", {
                  className: "semi-bold",
                  children: [
                    "الممارسة الحالية ",
                    t.jsx("span", {
                      style: { color: "#0a9ba5" },
                      children: "(التحديات)",
                    }),
                  ],
                }),
              }),
              t.jsx("div", {
                children: t.jsxs("div", {
                  className: "row",
                  children: [
                    t.jsx("div", {
                      className: "col-lg-8",
                      children: t.jsx("div", {
                        className: "bottom-side-spacing-adding ",
                        "data-aos": "zoom-in-left",
                        "data-aos-duration": "1300",
                        children: t.jsxs("div", {
                          className: "custom-min-height",
                          children: [
                            t.jsxs("div", {
                              className:
                                "right-slide-background bottom-side-spacing ",
                              children: [
                                t.jsx("h3", {
                                  children: t.jsx("span", {
                                    children: " عناصر صوت العميل ",
                                  }),
                                }),
                                t.jsxs("div", {
                                  className: "parent___",
                                  children: [
                                    t.jsx("div", {
                                      className: "left__side___column______",
                                      children: t.jsx("h3", {
                                        children: "الوضع المستقبلي",
                                      }),
                                    }),
                                    t.jsx("div", {
                                      className: "col-center-division",
                                      children: t.jsx("img", {
                                        src: Df,
                                        alt: "",
                                      }),
                                    }),
                                    t.jsx("div", {
                                      className: "left__side___column______",
                                      children: t.jsx("h3", {
                                        children: "الوضع الحالي",
                                      }),
                                    }),
                                  ],
                                }),
                                t.jsxs("div", {
                                  className: "parent___",
                                  children: [
                                    t.jsxs("div", {
                                      className:
                                        "left-side-column-content text-end",
                                      children: [
                                        t.jsx("h3", {
                                          children: "نوع الاستبيان",
                                        }),
                                        t.jsx("p", {
                                          children:
                                            "استبيان موحد على كافة المنصات لمراقبة نقاط التواصل مع العميل",
                                        }),
                                      ],
                                    }),
                                    t.jsx("div", {
                                      className: "column-image-center",
                                      children: t.jsx("img", {
                                        src: If,
                                        alt: "",
                                      }),
                                    }),
                                    t.jsxs("div", {
                                      className:
                                        "left-side-column-content text-left",
                                      children: [
                                        t.jsx("h3", {
                                          className: "text___left",
                                          children: "نوع الاستبيان",
                                        }),
                                        t.jsx("p", {
                                          children:
                                            "استبيان غير موحد حول نقاط الاتصال",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                t.jsxs("div", {
                                  className: "parent___",
                                  children: [
                                    t.jsx("div", {
                                      className:
                                        "left-side-column-content text-end",
                                      children: t.jsxs("h3", {
                                        className: "Line___height",
                                        children: [
                                          "مؤشر رضا العملاء ",
                                          t.jsx("br", {}),
                                          "(Top-two Boxes)",
                                        ],
                                      }),
                                    }),
                                    t.jsx("div", {
                                      className: "column-image-center",
                                      children: t.jsx("img", {
                                        src: Bf,
                                        alt: "",
                                      }),
                                    }),
                                    t.jsxs("div", {
                                      className:
                                        "left-side-column-content text-left",
                                      children: [
                                        t.jsx("h3", {
                                          className: "text___left",
                                          children: "طريقة الحساب",
                                        }),
                                        t.jsx("p", {
                                          children:
                                            "مختلفة وغير موحدة للأنواع المختلفة من الاستبيانات",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                t.jsxs("div", {
                                  className: "parent___",
                                  children: [
                                    t.jsxs("div", {
                                      className:
                                        "left-side-column-content text-end",
                                      children: [
                                        t.jsx("h3", { children: "الدقة" }),
                                        t.jsx("p", {
                                          children:
                                            "توحيد صوت العميل وتسييره رقمياً",
                                        }),
                                      ],
                                    }),
                                    t.jsx("div", {
                                      className: "column-image-center",
                                      children: t.jsx("img", {
                                        src: Vf,
                                        alt: "",
                                      }),
                                    }),
                                    t.jsxs("div", {
                                      className:
                                        "left-side-column-content text-left",
                                      children: [
                                        t.jsx("h3", {
                                          className: "text___left",
                                          children: "الدقة",
                                        }),
                                        t.jsx("p", {
                                          children:
                                            "نتيجة تحليل الاستبيان الهاتفي من خلال مراكز الاتصال",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                t.jsxs("div", {
                                  className: "parent___",
                                  children: [
                                    t.jsxs("div", {
                                      className:
                                        "left-side-column-content text-end",
                                      children: [
                                        t.jsx("h3", {
                                          children:
                                            "اغلاق حلقة التغذية الراجعة",
                                        }),
                                        t.jsx("p", {
                                          children:
                                            "تحليل السبب الجذري من خلال بناءLoss tree ضمن استبيان الرضا",
                                        }),
                                      ],
                                    }),
                                    t.jsx("div", {
                                      className: "column-image-center",
                                      children: t.jsx("img", {
                                        src: Uf,
                                        alt: "",
                                      }),
                                    }),
                                    t.jsxs("div", {
                                      className:
                                        "left-side-column-content text-left",
                                      children: [
                                        t.jsx("h3", {
                                          className: "text___left",
                                          children:
                                            "اغلاق حلقة التغذية الراجعة",
                                        }),
                                        t.jsx("p", { children: "لا يوجد" }),
                                      ],
                                    }),
                                  ],
                                }),
                                t.jsxs("div", {
                                  className: "parent___",
                                  children: [
                                    t.jsxs("div", {
                                      className:
                                        "left-side-column-content text-end",
                                      children: [
                                        t.jsx("h3", {
                                          children: "معدل الاستجابة",
                                        }),
                                        t.jsx("p", {
                                          children:
                                            "مراقبة عدد الاستبيانات المرسلة مقابل الاستبيانات التي تم تقييمها",
                                        }),
                                      ],
                                    }),
                                    t.jsx("div", {
                                      className: "column-image-center",
                                      children: t.jsx("img", {
                                        src: Qf,
                                        alt: "",
                                      }),
                                    }),
                                    t.jsxs("div", {
                                      className:
                                        "left-side-column-content text-left",
                                      children: [
                                        t.jsx("h3", {
                                          className: "text___left",
                                          children: "معدل الاستجابة",
                                        }),
                                        t.jsx("p", { children: "غير مراقب" }),
                                      ],
                                    }),
                                  ],
                                }),
                                t.jsxs("div", {
                                  className: "parent___",
                                  children: [
                                    t.jsxs("div", {
                                      className:
                                        "left-side-column-content text-end",
                                      children: [
                                        t.jsx("h3", {
                                          children: "التدقيق والجودة",
                                        }),
                                        t.jsx("p", {
                                          children:
                                            "إنشاء مصفوفة التدقيق والجودة",
                                        }),
                                      ],
                                    }),
                                    t.jsx("div", {
                                      className: "column-image-center",
                                      children: t.jsx("img", {
                                        src: Wf,
                                        alt: "",
                                      }),
                                    }),
                                    t.jsxs("div", {
                                      className:
                                        "left-side-column-content text-left",
                                      children: [
                                        t.jsx("h3", {
                                          className: "text___left",
                                          children: "التدقيق والجودة",
                                        }),
                                        t.jsx("p", { children: "غير مراقب" }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            t.jsxs("div", {
                              className: "right-slide-background",
                              style: { marginTop: "15px " },
                              children: [
                                " ",
                                t.jsx("div", {
                                  className: "tag___line___of__column",
                                  children: t.jsx("h2", {
                                    children: t.jsx("span", {
                                      children: " عناصر صوت العميل ",
                                    }),
                                  }),
                                }),
                                t.jsx("div", {
                                  className: "close__icon mt-3",
                                  children: t.jsx("h6", {
                                    children: "تم إنشاء الحساب بنجاح",
                                  }),
                                }),
                                t.jsx("div", {
                                  className: "right_____side____contents",
                                  children: t.jsx("h2", {
                                    className: "text-end",
                                    children: "تقيم الخدمة",
                                  }),
                                }),
                                t.jsxs("div", {
                                  className:
                                    "____column__container ___span__custom",
                                  children: [
                                    t.jsx("div", {
                                      children: t.jsxs("div", {
                                        children: [
                                          t.jsxs("div", {
                                            className:
                                              "left-side-box-design mt-5 pt-4",
                                            children: [
                                              t.jsx("h4", {
                                                style: {
                                                  border:
                                                    "1px solid rgb(211 211 211)",
                                                },
                                                children: "المنصات",
                                              }),
                                              t.jsx("div", {
                                                className: "box-sizing-design",
                                                children: t.jsx("p", {
                                                  children:
                                                    "على الموقع الإلكتروني (CSAT) تُجرى استطلاعات رضا العملاء(IVR) بعد تقديم الطلب ومن خلال الرد الآلي التفاعلي",
                                                }),
                                              }),
                                            ],
                                          }),
                                          t.jsxs("div", {
                                            className: "left-side-box-design",
                                            style: {
                                              background: "#fff8f4",
                                              border: "1px solid #e71f12",
                                            },
                                            children: [
                                              t.jsx("h4", {
                                                style: {
                                                  border: "1px solid #e71f12",
                                                },
                                                children: "المنصات",
                                              }),
                                              t.jsx("div", {
                                                className: "box-sizing-design",
                                                children: t.jsx("p", {
                                                  children:
                                                    "على الموقع الإلكتروني (CSAT) تُجرى استطلاعات رضا العملاء(IVR) بعد تقديم الطلب ومن خلال الرد الآلي التفاعلي",
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                    t.jsxs("div", {
                                      children: [
                                        t.jsxs("div", {
                                          className: "white___box__text",
                                          style: { marginTop: "35px" },
                                          children: [
                                            t.jsx("p", {
                                              className: "text-end",
                                              children:
                                                "ما مدى رضائك عن توفر المعلومات علىالمنصه؟",
                                            }),
                                            t.jsx("div", {
                                              className: "text-start",
                                              children: t.jsx("img", {
                                                src: qs,
                                                alt: "",
                                              }),
                                            }),
                                          ],
                                        }),
                                        t.jsxs("div", {
                                          className: "white___box__text ",
                                          children: [
                                            t.jsx("p", {
                                              className: "text-end",
                                              children:
                                                "ما مدى رضائك عن سهولة الوصول إلى الخدمة؟",
                                            }),
                                            t.jsx("div", {
                                              className: "text-start",
                                              children: t.jsx("img", {
                                                src: qs,
                                                alt: "",
                                              }),
                                            }),
                                          ],
                                        }),
                                        t.jsxs("div", {
                                          className: "white___box__text ",
                                          children: [
                                            t.jsx("p", {
                                              className: "text-end",
                                              children:
                                                "ما مدى رضائك عن سهولة استخدام المنصة؟",
                                            }),
                                            t.jsx("div", {
                                              className: "text-start",
                                              children: t.jsx("img", {
                                                src: qs,
                                                alt: "",
                                              }),
                                            }),
                                          ],
                                        }),
                                        t.jsxs("div", {
                                          className: "white___box__text ",
                                          children: [
                                            t.jsx("p", {
                                              className: "text-end",
                                              children:
                                                "ما مدى رضائك عن فعالية و استجابة الخدمة المقدمة؟",
                                            }),
                                            t.jsx("div", {
                                              className: "text-start",
                                              children: t.jsx("img", {
                                                src: qs,
                                                alt: "",
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            t.jsx("div", { className: "bg-border-last" }),
                          ],
                        }),
                      }),
                    }),
                    t.jsx("div", {
                      className: "col-lg-4",
                      children: t.jsxs("div", {
                        className:
                          "right-slide-background bottom-side-spacing-adding",
                        style: { padding: "20px" },
                        "data-aos": "zoom-in-left",
                        "data-aos-duration": "1500",
                        children: [
                          t.jsx("h3", {
                            children: t.jsx("span", {
                              children: " عناصر صوت العميل ",
                            }),
                          }),
                          t.jsxs("div", {
                            className: "right__side__navlink",
                            children: [
                              t.jsx("div", {
                                className:
                                  "left__side___column______ font-size-small",
                                children: t.jsx("h3", {
                                  children: "الوضع المستقبلي",
                                }),
                              }),
                              t.jsx("div", {
                                className:
                                  "left__side___column______ font-size-small",
                                children: t.jsx("h3", {
                                  children: "التقارير الحالية",
                                }),
                              }),
                            ],
                          }),
                          t.jsxs("div", {
                            className:
                              "right__side__navlink border___bottom___side",
                            children: [
                              t.jsxs("div", {
                                className:
                                  "left-side-column-content text-end mt-3",
                                children: [
                                  t.jsx("p", {
                                    children: " المعاملات في الربع الثالث (Q3)",
                                  }),
                                  t.jsx("p", { children: " سداد القرض" }),
                                  t.jsx("p", {
                                    children: " الموافقة على القرض",
                                  }),
                                  t.jsx("p", { children: " إيداع القرض" }),
                                  t.jsx("p", {
                                    children: " الفعاليات التي نظمها البنك",
                                  }),
                                ],
                              }),
                              t.jsxs("div", {
                                className:
                                  "left-side-column-content text-end mt-3",
                                children: [
                                  t.jsx("p", {
                                    children: " عدد الردود: قيد التحديد",
                                  }),
                                  t.jsx("p", { children: " النتيجة: 48%" }),
                                  t.jsx("p", {
                                    children:
                                      " أسباب النتيجة: غير متعلقة بالمعاملات",
                                  }),
                                  t.jsx("p", {
                                    children: " المقياس السوقي: 34",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          t.jsx("div", {
                            className: "position-changing____",
                            children: t.jsxs("div", {
                              className: "svg-bannner text-center",
                              children: [
                                t.jsx("img", { src: Hf, alt: "" }),
                                " ",
                                t.jsx("br", {}),
                                t.jsx("img", {
                                  className: "image__changing",
                                  src: Kf,
                                  alt: "",
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
      ],
    });
  };
const Yf = "/assets/1-0e0dc5f6.png",
  Gf = "/assets/2-4591300a.png",
  Xf = "/assets/3-c6d47874.png",
  Jf = "/assets/4-34599533.png",
  Zf = "/assets/circle-f710b1e3.svg",
  ep = "/assets/111-7d8aaf2b.png",
  np = "/assets/222-eaab6048.png",
  tp = "/assets/333-9a5f1040.png",
  sp = "/assets/444-37c1fc68.png",
  lp = () => {
    const e = [
      { id: 1, img: ep, time: "1200" },
      { id: 2, img: np, time: "1300" },
      { id: 3, img: tp, time: "1400" },
      { id: 1, img: sp, time: "1500" },
    ];
    return t.jsxs("div", {
      className: "container py-5",
      children: [
        t.jsx("div", {
          className: "fourth-header",
          "data-aos": "zoom-in-left",
          "data-aos-duration": "1200",
          children: t.jsxs("h2", {
            className: "text-end semi-bold",
            children: [
              " أفضل الممارسات ",
              t.jsx("span", {
                style: { color: "#0a9ba5" },
                children: "(الحلول)",
              }),
            ],
          }),
        }),
        t.jsxs("div", {
          className: "row mt-4",
          children: [
            t.jsx("div", {
              className: "col-lg-4 mt-4",
              "data-aos": "zoom-in-left",
              "data-aos-duration": "1300",
              children: t.jsx("div", {
                className: "fourth-image-slide",
                children: t.jsx("img", { src: Yf, alt: "" }),
              }),
            }),
            t.jsx("div", {
              className: "col-lg-8 mt-4",
              "data-aos": "zoom-in-left",
              "data-aos-duration": "1500",
              children: t.jsx("div", {
                className: "fourth-image-slide",
                children: t.jsx("img", { src: Gf, alt: "" }),
              }),
            }),
            t.jsx("div", {
              className: "col-lg-6 mt-5",
              "data-aos": "zoom-in-left",
              "data-aos-duration": "1600",
              children: t.jsx("div", {
                className: "fourth-image-slide",
                children: t.jsx("img", { src: Xf, alt: "" }),
              }),
            }),
            t.jsx("div", {
              className: "col-lg-6 mt-5",
              "data-aos": "zoom-in-left",
              "data-aos-duration": "1600",
              children: t.jsx("div", {
                className: "fourth-image-slide",
                children: t.jsx("img", { src: Jf, alt: "" }),
              }),
            }),
          ],
        }),
        t.jsx("div", {
          className: "fourth-header mt-5 pt-5",
          "data-aos": "zoom-in-left",
          "data-aos-duration": "1000",
          children: t.jsxs("h2", {
            className: "text-end mt-5 semi-bold",
            children: [
              " أفضل الممارسات ",
              t.jsx("span", {
                style: { color: "#0a9ba5" },
                children: "(الحلول)",
              }),
            ],
          }),
        }),
        t.jsxs("div", {
          className: "relative___part___image",
          children: [
            t.jsx("div", {
              className: "row mt-5",
              children: e.map((n) =>
                t.jsx(
                  "div",
                  {
                    className: "col-lg-6 mt-3",
                    "data-aos": "zoom-in-left",
                    "data-aos-duration": n.time,
                    children: t.jsx("div", {
                      className: "fourth-slide-image",
                      children: t.jsx("img", { src: n.img, alt: "" }),
                    }),
                  },
                  n.id
                )
              ),
            }),
            t.jsx("div", {
              className: "position-absolute-image-resize",
              "data-aos": "zoom-in",
              "data-aos-duration": "1700",
              children: t.jsx("img", { src: Zf, alt: "" }),
            }),
          ],
        }),
      ],
    });
  };
const rp = "/assets/logo-e7631247.svg",
  Ro = "/assets/logo1-e4a00568.svg",
  Lo = "/assets/arrow-down-fb65090c.svg",
  ip = "/assets/search-f6fbafb4.svg",
  ap = "/assets/img-697c514b.png",
  op = "/assets/clock-ab44f884.png",
  cp = "/assets/clock2-bf2281e6.png",
  dp = "/assets/clock3-733f3410.png",
  up = "/assets/chart-698df16e.svg",
  hp = "/assets/table-fe22f91a.svg",
  mp = "/assets/text-c6d8310a.svg",
  fp = "/assets/chart-f80b0379.png",
  pp = "/assets/chart2-64d07dd7.png",
  xp = "/assets/chart22-5423d4ef.png",
  vp = () =>
    t.jsx(t.Fragment, {
      children: t.jsxs("div", {
        className: "fiveSlide",
        style: { padding: "100px 0" },
        children: [
          t.jsxs("div", {
            className: "navbar-container",
            "data-aos": "zoom-in-left",
            "data-aos-duration": "1100",
            children: [
              t.jsx("div", {
                className: "logo text-end",
                children: t.jsx("img", { src: rp, alt: "" }),
              }),
              t.jsxs("div", {
                className: "nav-item",
                children: [
                  t.jsx("a", { href: "", children: "NPS" }),
                  t.jsx("a", { href: "", children: "CSAT" }),
                  t.jsx("a", { href: "", children: "CES" }),
                  t.jsx("a", { href: "", children: "Focus Groups" }),
                  t.jsx("a", { href: "", children: "Complaint" }),
                  t.jsx("a", { href: "", children: "Sentiment" }),
                  t.jsx("a", { href: "", children: "Loss Tree" }),
                  t.jsx("a", {
                    href: "",
                    style: { background: "#0a9ba5", color: "white" },
                    children: "Executive",
                  }),
                ],
              }),
            ],
          }),
          t.jsxs("div", {
            className: "sidebar-and-dashboard ",
            children: [
              t.jsxs("div", {
                className: "______sidebar",
                "data-aos": "zoom-in-left",
                "data-aos-duration": "1500",
                children: [
                  t.jsxs("div", {
                    className: "position-changing-those-item",
                    children: [
                      t.jsx("h5", { children: "التاريخ" }),
                      t.jsxs("div", {
                        className: "side-bar-text-containers-flex",
                        children: [
                          t.jsx("p", { children: "تاريخ البدء" }),
                          t.jsx("img", { src: Ro, alt: "" }),
                        ],
                      }),
                      t.jsxs("div", {
                        className: "side-bar-text-containers-flex",
                        children: [
                          t.jsx("p", { children: "تاريخ الانتهاء" }),
                          t.jsx("img", { src: Ro, alt: "" }),
                        ],
                      }),
                    ],
                  }),
                  t.jsxs("div", {
                    className: "position-changing-those-item mt-4",
                    children: [
                      t.jsx("h5", { children: "تصنيف العملاء" }),
                      t.jsxs("div", {
                        className:
                          "side-bar-text-containers-flex flex-those-line",
                        children: [
                          t.jsx("img", { src: Lo, alt: "" }),
                          t.jsx("p", { children: "تاريخ البدء" }),
                        ],
                      }),
                    ],
                  }),
                  t.jsxs("div", {
                    className: "position-changing-those-item mt-4",
                    children: [
                      t.jsx("h5", { children: "الجنس" }),
                      t.jsxs("div", {
                        className: " flex-those-lines",
                        children: [
                          t.jsx("span", {
                            className: "box-1",
                            children: "أنثى",
                          }),
                          t.jsx("span", {
                            className: "box-2",
                            style: { background: "#0a9ba5", color: "white" },
                            children: "ذكر",
                          }),
                        ],
                      }),
                    ],
                  }),
                  t.jsxs("div", {
                    className: "position-changing-those-item mt-4",
                    children: [
                      t.jsx("h5", { children: "المنطقة" }),
                      t.jsxs("div", {
                        className:
                          "side-bar-text-containers-flex flex-those-line",
                        children: [
                          t.jsx("img", { src: Lo, alt: "" }),
                          t.jsx("p", { children: "الرياض" }),
                        ],
                      }),
                    ],
                  }),
                  t.jsxs("div", {
                    className: "position-changing-those-item mt-4",
                    children: [
                      t.jsx("h5", { children: "نقاط الإتصال" }),
                      t.jsxs("div", {
                        className:
                          "side-bar-text-containers-flex flex-those-line",
                        children: [
                          t.jsx("img", { src: ip, alt: "" }),
                          t.jsx("p", { children: "الرياض" }),
                        ],
                      }),
                    ],
                  }),
                  t.jsxs("div", {
                    className: "position-changing-those-item mt-4",
                    children: [
                      t.jsx("h5", { children: "العم" }),
                      t.jsx("div", {
                        className: "full-widthimages",
                        children: t.jsx("img", { src: ap, alt: "" }),
                      }),
                    ],
                  }),
                ],
              }),
              t.jsxs("div", {
                className: "dashboard___ px-3",
                children: [
                  t.jsxs("div", {
                    className: "dashboard-headline text-end mt-5 pt-4",
                    "data-aos": "zoom-in-left",
                    "data-aos-duration": "1000",
                    children: [
                      t.jsx("h5", { children: "توضيحي" }),
                      t.jsx("p", {
                        children:
                          "*سيتم استيراد جميع البيانات التاريخية وإضافتها إلى هذه لوحة المعلومات.",
                      }),
                    ],
                  }),
                  t.jsxs("div", {
                    className: "row",
                    children: [
                      t.jsx("div", {
                        className: "col-lg-4 mt-3",
                        "data-aos": "zoom-in-left",
                        "data-aos-duration": "1100",
                        children: t.jsxs("div", {
                          className: "dashboard_card",
                          children: [
                            t.jsx("div", {
                              className: "dashboard__headline",
                              children: t.jsx("h6", {
                                children: "صافي نقاط الترويج",
                              }),
                            }),
                            t.jsxs("p", {
                              className: "text-end",
                              children: [
                                "معاودة الاتصال = ",
                                t.jsx("span", { children: "100" }),
                                "% - 24 ساعة",
                              ],
                            }),
                            t.jsx("div", {
                              className: "text-center",
                              children: t.jsx("img", {
                                src: op,
                                alt: "",
                                style: { height: "150px" },
                              }),
                            }),
                            t.jsx("div", {
                              className: "table-image_____",
                              children: t.jsx("img", {
                                style: {
                                  width: "90%",
                                  height: "100px",
                                  objectFit: "contain",
                                },
                                src: hp,
                                alt: "",
                              }),
                            }),
                          ],
                        }),
                      }),
                      t.jsx("div", {
                        className: "col-lg-4 mt-3",
                        "data-aos": "zoom-in-left",
                        "data-aos-duration": "1300",
                        children: t.jsxs("div", {
                          className: "dashboard_card",
                          children: [
                            t.jsx("div", {
                              className: "dashboard__headline",
                              children: t.jsx("h6", {
                                children: "مؤشر رضا العملاء",
                              }),
                            }),
                            t.jsxs("p", {
                              className: "text-end",
                              children: [
                                "معاودة الاتصال = 90% ",
                                t.jsx("span", { children: " - 24" }),
                                " ساعة",
                              ],
                            }),
                            t.jsx("div", {
                              className: "text-center mt-3",
                              children: t.jsx("img", {
                                src: cp,
                                style: { height: "150px" },
                                alt: "",
                              }),
                            }),
                            t.jsx("div", { className: "table-image_____" }),
                          ],
                        }),
                      }),
                      t.jsx("div", {
                        className: "col-lg-4 mt-3",
                        "data-aos": "zoom-in-left",
                        "data-aos-duration": "1400",
                        children: t.jsxs("div", {
                          className: "dashboard_card",
                          children: [
                            t.jsx("div", {
                              className: "dashboard__headline",
                              children: t.jsx("h6", {
                                children: "مؤشر جهد العميل",
                              }),
                            }),
                            t.jsxs("p", {
                              className: "text-end",
                              children: [
                                "معاودة الاتصال = 60% ",
                                t.jsx("span", {
                                  style: { color: "#ed9718" },
                                  children: " 24",
                                }),
                                " ساعة",
                              ],
                            }),
                            t.jsx("div", {
                              className: "text-center mt-3",
                              children: t.jsx("img", {
                                src: dp,
                                style: { height: "160px" },
                                alt: "",
                              }),
                            }),
                            t.jsx("div", { className: "table-image_____" }),
                          ],
                        }),
                      }),
                      t.jsx("div", {
                        className: "col-lg-4 mt-3",
                        "data-aos": "zoom-in-left",
                        "data-aos-duration": "1300",
                        children: t.jsxs("div", {
                          className: "dashboard_card need-custom-height-for-vh",
                          children: [
                            t.jsx("div", {
                              className: "dashboard__headline",
                              children: t.jsx("h6", {
                                children: "مجموعات التركيز",
                              }),
                            }),
                            t.jsx("div", {
                              className: "table-image_____ mt-3",
                              children: t.jsx("img", {
                                style: { width: "100%" },
                                src: up,
                                alt: "",
                              }),
                            }),
                            t.jsx("div", {
                              className:
                                "table-image_____ mt-5 pt-5 end-sid-flex",
                              children: t.jsx("img", {
                                style: { width: "100%" },
                                src: mp,
                                alt: "",
                              }),
                            }),
                          ],
                        }),
                      }),
                      t.jsxs("div", {
                        className: "col-lg-4 mt-3",
                        "data-aos": "zoom-in-left",
                        "data-aos-duration": "1400",
                        children: [
                          t.jsx("div", {
                            className: "dashboard_cards __card_height",
                            children: t.jsx("img", {
                              src: fp,
                              style: { height: "120px", objectFit: "fill" },
                              alt: "",
                            }),
                          }),
                          t.jsxs("div", {
                            className: "dashboard_cards _card-height mt-3",
                            children: [
                              t.jsx("div", {
                                className: "dashboard__headline",
                                children: t.jsx("h6", {
                                  children: "مجموعات التركيز",
                                }),
                              }),
                              t.jsx("div", {
                                className: "table-image_____",
                                children: t.jsx("img", { src: pp, alt: "" }),
                              }),
                              t.jsx("div", {
                                className: "last-headline_____ px-2 mt-3",
                                children: t.jsx("h6", {
                                  className: "text-end",
                                  children: "أهم الشكاوى",
                                }),
                              }),
                              t.jsxs("div", {
                                className: "grid-and-flex-box",
                                children: [
                                  t.jsxs("div", {
                                    className: "cards___flex___div",
                                    children: [
                                      t.jsxs("p", {
                                        children: [
                                          "إلغاء طلب القرض ",
                                          t.jsx("br", {}),
                                          "دون ذكر السبب",
                                        ],
                                      }),
                                      t.jsx("span", { children: ".2" }),
                                    ],
                                  }),
                                  t.jsxs("div", {
                                    className: "cards___flex___div",
                                    children: [
                                      t.jsxs("p", {
                                        children: [
                                          "تأخير في معالجة",
                                          t.jsx("br", {}),
                                          " طلب القرض",
                                        ],
                                      }),
                                      t.jsx("span", { children: ".1" }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      t.jsxs("div", {
                        className: "col-lg-4 mt-3",
                        "data-aos": "zoom-in-left",
                        "data-aos-duration": "1500",
                        children: [
                          t.jsx("div", {
                            className: "dashboard_cards __card_height",
                            children: t.jsx("img", {
                              style: { height: "120px", objectFit: "fill" },
                              src: xp,
                              alt: "",
                            }),
                          }),
                          t.jsx("div", {
                            className: "dashboard_cards _card-height mt-3",
                            children: t.jsx("div", {
                              className: "dashboard__headline",
                              children: t.jsx("h6", {
                                children: "تحليل المشاعر",
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  gp = () =>
    t.jsxs("div", { children: [t.jsx($f, {}), t.jsx(lp, {}), t.jsx(vp, {})] });
const jp = "/assets/logo-8138f7f7.svg",
  _p = "/assets/slide5-c4b03a8a.jpg",
  yp = () => {
    const e = [
        { id: "1", name: "عدم إمكانية ادخال طلب قرض", width: "86px" },
        { id: "2", name: "تحديث الفحص الائتماني للعميل", width: "80px" },
        { id: "3", name: "طلب تحديث بيانات السداد للعميل", width: "75px" },
        { id: "4", name: "إعتراض العميل على أسباب الرفض", width: "70px" },
        {
          id: "5",
          name: "استفسار عن مرحلة طلب تمويل منتج سيولة",
          width: "65px",
        },
        { id: "6", name: "التأخر في معالجة الطلب", width: "60px" },
        { id: "7", name: "تأخر تحويل الأمانات على الحساب", width: "60px" },
        { id: "8", name: "طلب إضافة او تعديل بيانات العميل", width: "55px" },
        {
          id: "9",
          name: "التأخر في إيداع قيمة القرض بحساب العميل",
          width: "55px",
        },
        { id: "10", name: "الغاء طلب تمويل عمل حر", width: "50px" },
        { id: "11", name: "إضافة جهة حسم", width: "45px" },
        { id: "12", name: "التأخر في معالجة طلب التمويل", width: "40px" },
        {
          id: "13",
          name: " عدم إمكانية استكمال الملاحظات من خلال الموقع",
          width: "35px",
        },
        {
          id: "14",
          name: "قسط محسوم من جهة العمل لم يتم تحديثه على",
          width: "30px",
        },
        {
          id: "15",
          name: "قسط محسوم من جهة العمل لم يتم تحديثه على ",
          width: "25px",
        },
        { id: "16", name: " طلب الغاء الشهادة الأسر المنتجة", width: "20px" },
        { id: "10", name: "تحديث الفاتورة على حساب المستفيد", width: "15px" },
      ],
      n = "المهام التشغيلية",
      s = "",
      l = "#9735c7ad";
    return t.jsxs(t.Fragment, {
      children: [
        t.jsx(an, { h1: n, h3: s, bg: l, img: _p }),
        t.jsx("div", { className: "sevenSlide" }),
        t.jsxs("div", {
          className: "container",
          style: { paddingTop: "100px", paddingBottom: "70px" },
          children: [
            t.jsx("div", {
              className: "fourth-header mb-5",
              "data-aos": "zoom-in-left",
              "data-aos-duration": "1300",
              children: t.jsxs("h2", {
                className: "text-end semi-bold",
                children: [
                  " تحليل نظام التذاكر ",
                  t.jsx("span", {
                    style: { color: "#9735c7" },
                    children: "(التحديات)",
                  }),
                ],
              }),
            }),
            t.jsx("div", {
              className: "pest-banner-title",
              "data-aos": "zoom-in-left",
              "data-aos-duration": "1200",
              children: t.jsx("p", {
                children:
                  "أثناء تحليلنا المبدئي، لاحظنا أن نظام تصنيف البلاغات الحالي يتضمن قائمة واحدة من العناصر أحادية البعد (one-dimensional) التي تحاول وصف الـبلاغات الأكثر شيوعًا وفي بعض الأحيان تشمل اسم المنتج المعني",
              }),
            }),
            t.jsxs("div", {
              className: "row",
              children: [
                t.jsx("div", {
                  className: "col-lg-6",
                  children: t.jsxs("div", {
                    className: "pest-bg-card-container",
                    "data-aos": "zoom-in-left",
                    "data-aos-duration": "1200",
                    children: [
                      t.jsxs("div", {
                        className: "big-blog-headline",
                        children: [
                          t.jsx("h6", {
                            children:
                              "حاليًا قسم خدمة العملاء في بنك التنمية الاجتماعية يستخدم لائحة تضم 154 فئة لتصنيف تفاعلات العملاء",
                          }),
                          t.jsx("img", { src: jp, alt: "" }),
                        ],
                      }),
                      e.map((r) =>
                        t.jsxs(
                          "div",
                          {
                            className: "blogs",
                            children: [
                              t.jsx("span", { style: { width: `${r.width}` } }),
                              t.jsxs("div", {
                                className: "blog______text",
                                children: [
                                  t.jsx("p", { children: r.name }),
                                  t.jsxs("p", { children: [".", r.id] }),
                                ],
                              }),
                            ],
                          },
                          r.id
                        )
                      ),
                      t.jsxs("div", {
                        className: "flex_____box___",
                        children: [
                          t.jsxs("div", {
                            className: "parcentaze-content",
                            children: [
                              t.jsx("p", { children: "استفسارات (7,233)" }),
                              t.jsx("span", {
                                style: { background: "#314fed" },
                                children: "10%",
                              }),
                            ],
                          }),
                          t.jsxs("div", {
                            className: "parcentaze-content",
                            children: [
                              t.jsx("p", { children: "شكاوى (49,406)" }),
                              t.jsx("span", {
                                style: { background: "#f7752c" },
                                children: "45%",
                              }),
                            ],
                          }),
                          t.jsxs("div", {
                            className: "parcentaze-content",
                            children: [
                              t.jsx("p", { children: "طلبات (39,721)" }),
                              t.jsx("span", {
                                style: { background: "black" },
                                children: "45%",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                t.jsx("div", {
                  className: "col-lg-3",
                  children: t.jsxs("div", {
                    className: "pest-bg-card-container",
                    "data-aos": "zoom-in-left",
                    "data-aos-duration": "1200",
                    children: [
                      t.jsx("div", {
                        className: "big-blog-headline",
                        children: t.jsx("h6", {
                          children:
                            " تتطور مع مرور الوقت للتعامل مع تفاعلات العملاء الجديدة",
                        }),
                      }),
                      t.jsxs("div", {
                        className: "paragraph__content",
                        children: [
                          t.jsx("p", {
                            children:
                              " تتطور هذه القوائم عادةً من قائمة مبدئية إلى قائمة طويلة مفصلة",
                          }),
                          t.jsx("p", {
                            children:
                              " حيث يبدأ المستخدمون في طلب تنصنيفات جديدة لإضافتها إلى النظام للتعامل مع أنواع جديدة من الاستفسارات أو الشكاوى أو الطلبات التي يتم التعامل معها مع العملاء",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                t.jsx("div", {
                  className: "col-lg-3",
                  children: t.jsxs("div", {
                    className: "pest-bg-card-container",
                    "data-aos": "zoom-in-left",
                    "data-aos-duration": "1200",
                    children: [
                      t.jsx("div", {
                        className: "big-blog-headline",
                        children: t.jsx("h6", {
                          children:
                            "لائحات تصنيف تفاعلات خدمة العملاء الأولية ...",
                        }),
                      }),
                      t.jsxs("div", {
                        className: "paragraph__content",
                        children: [
                          t.jsx("p", {
                            children:
                              ". عند تسجيل تفاعلات خدمة العملاء، تبدأ العديد من المؤسسات باستخدام قائمة واحدة تضم فئات أحادية البعد (one-dimensional)",
                          }),
                          t.jsx("p", {
                            children:
                              ". يستخدم موظفين خدمة العملاء هذه الائحة لتسجيل استفسارات العملاء والشكاوى والطلبات المستلمة",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    });
  };
const Np = "/assets/logo-65929d09.png",
  Fo =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAjgAAAB4CAYAAAD/soizAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAbBSURBVHgB7d3LcRzXFQbgO2PLVd4pBDkDbiR6qclACgFrGxAQgiIgWJLWYgZ2BvBjQcBeCCEgBO28YLnbc6d8wcGwH7dn+nGn6vs2BEgGcOr8/z29Cmfsp9f//K4O1W0AAHhWv1uFM/Xmy7tXn63XvwQAgI+ePqyqzW/DGXrzx7svPqvXfwkAAHuqVfX9zf3maR3O0P+Hmy8CAMCz+t3V/eZd/OnsBpwfX//jzfaPVwEA4KNtNFV/n345qwEnloq309l1AADYk6Kp9PvZlIyVigGAZvW7Pz98fbH/N2dRMlYqBgBavIimkrOIqJSKAYAmh9FUUvyAo1QMADT7+GrqUNEDjlIxANCiMZpKii0ZKxUDAG220dRF2/YmKrJkrFQMALRrj6aSIiMqpWIAoEVnNJUUN+AoFQMAbdpeTR0qqoMTS8V1qG4DAMAnPj3o16aYDU4sFRtuAIAWWdFUUkTJWKkYAOiSG00lRWxwlIoBgHb9r6YOLT7gKBUDAB0GRVPJogOOS8UAQJeh0VSy2Csql4oBgG75r6YOLVIyVioGAHocFU0li0RUSsUAQJdjo6lk9gFHqRgA6Db81dShWQccpWIAoMdJ0VQyW8lYqRgA6LONpi5O3d5Es5SMlYoBgH6nR1PJLBGVUjEA0GOUaCqZfMBRKgYA+pz6aurQpB2cWCr2hXAAoNvxB/3aTLbBiaViww0A0GPUaCqZpGSsVAwA5Bg7mkom2eAoFQMA/cZ7NXVo9AFHqRgAyDBJNJWMOuC4VAwA5JgqmkpGe0XlUjEAkGf8V1OHRikZKxUDAJkmjaaSUSIqpWIAIMfU0VRy8oCjVAwA5Jnu1dShkwYcpWIAINMs0VRydMlYqRgAyLWNpi7m2t5ER5WMlYoBgHzzRVPJURGVUjEAkGnWaCoZPOAoFQMAueZ6NXVoUAcnlop9IRwAyDP9Qb822RucWCo23AAAmRaJppKskrFSMQAwxFLRVJK1wVEqBgDyzf9q6lDvgKNUDAAMsGg0lXQOOC4VAwBDLB1NJa2vqFwqBgCGWe7V1KHGkrFSMQAwUBHRVNIYUSkVAwBDlBJNJZ8MOErFAMAwy7+aOvRiwFEqBgAGKiqaSp5LxkrFAMBQ22jqorTtTbQrGSsVAwDDlRdNJbuISqkYABioyGgqWSsVAwBDlfZq6tC6Dv9dBQCAAVZV+DUUbDfc/PjV33/Z/mSLAwDk+vXD76s/3PxtU+Sgs+vgfFhX327/eAoAAHk+/91/fvNzKNRzPPXTl3evas/EAYAB6rr69vJfm7+Gwjwf+vvTvzeP1bq6CQAAmVar9c9vvr77PBTmxSXjq/eb2zpUbwMAQJ4io6rGF1RKxwDAEKVFVY1fE1c6BgCGKC2qahxw4uGeVbUbcgAAchQVVa3b/kHpGAAYog71Nz98dfdNKEDvFeMfXt/drsL6uwAA0K+IA4Drvv9w+bC53o5kjwEAoF8RUVXvgBMpHQMAuUqIqrI/tOnSMQAwwKJRVdYGJ1I6BgAGWDSqyt7gJErHAECupQ4ADh5wIpeOAYBMi0RV2RHVPqVjACDTIlHVURucSOkYAMg1d1R11AYnUjoGAHLN/a2qowec6Or95rYO1dsAANBt1qjq6Ihqn9IxAJBjrqjqpA1OonQMAOSYK6oaZcC5ud88rardkAMA0GWWqGqUASdSOgYAcszxrapROjj7XDoGADJMegBwtA1Ocvmwud6OZo8BAKDdpFHV6ANOpHQMAPSZMqoaPaJKXDoGADJMElVNssGJlI4BgAyTRFWTbXASpWMAoM/YBwAnH3Ail44BgB6jRlWTRVT7lI4BgB6jRlWzbHAipWMAoM9YUdUsG5xI6RgA6DPWt6pmG3Ciq/eb2zpUbwMAQLNRoqrZIqp9SscAQJdTo6pZNziJ0jEA0OXUqGqRAefmfvO0qnZDDgBAk5OiqkUGnEjpGADocsq3qhbp4Oxz6RgA6HDUAcDFNjjJ5cPmejuiPQYAgE8dFVUtPuBESscAQJtjoqrFI6rEpWMAoMOgqKqIDU6kdAwAdBgUVRWzwUmUjgGANrkHAIsbcCKXjgGAFllRVTER1T6lYwCgRVZUVeQGJ1I6BgDa9EVVRW5wIqVjAKBN37eqih1woqv3m9s6VG8DAMBLnVFVsRHVPqVjAKBJW1RV9AYnUToGAJq0RVVnMeDc3G+eVtVuyAEA2NcYVZ3FgBMpHQMATZq+VXUWHZx9Lh0DAA1eHAA8mw1Ocvmwud6Oao8BAOCjF1HV2Q04kdIxAHBoP6o6u4gqcekYAGiwi6rOcoMTKR0DAA12UdX/ACtjPYSaImypAAAAAElFTkSuQmCC",
  wp = () =>
    t.jsx("div", {
      className: "eighth-slide",
      children: t.jsxs("div", {
        className: "container",
        children: [
          t.jsxs("div", {
            className: "fourth-header mb-5",
            "data-aos": "zoom-in-left",
            "data-aos-duration": "1300",
            children: [
              t.jsxs("h2", {
                className: "text-end semi-bold",
                children: [
                  " تحليل نظام التذاكر ",
                  t.jsx("span", {
                    style: { color: "#9735C7" },
                    children: "(الحلول)",
                  }),
                ],
              }),
              t.jsx("div", {
                className: "headline-of-eighthSlide",
                children: t.jsx("p", {
                  children:
                    "الا أنه بناءً على بحثنا حول المتطلبات التنظيمية الدولية لأدلة تصنيف البلاغات وتصنيف الشكاوى، يوصى بتصنيف بلاغات خدمة العملاء على أنها متعددة الأبعاد (multi-dimensional) ...",
                }),
              }),
            ],
          }),
          t.jsxs("div", {
            className: "eighth-grid-container",
            children: [
              t.jsx("div", {
                className: "main____height",
                "data-aos": "zoom-in-left",
                "data-aos-duration": "1000",
                children: t.jsxs("div", {
                  className: "eighth-item",
                  children: [
                    t.jsx("h6", { children: "التصنيف الرابع" }),
                    t.jsx("div", {
                      className: "eighth-headline",
                      children: t.jsx("h5", {
                        children: "السبب الأولي/ الهدف من رفع البلاغ",
                      }),
                    }),
                    t.jsxs("div", {
                      className: "eighth-content height-adjust",
                      children: [
                        t.jsxs("div", {
                          className: "list-style-container",
                          children: [
                            t.jsx("span", { children: "تأخير" }),
                            t.jsx("span", { children: "عطل تقني" }),
                            t.jsx("span", {
                              children: "عدم مطابقة المنتج / الخدمة",
                            }),
                          ],
                        }),
                        t.jsxs("div", {
                          className: "parent mt-2",
                          children: [
                            t.jsx("span", { children: "معلومات غير واضحة" }),
                            t.jsx("span", { children: "خدمة العملاء" }),
                            t.jsx("span", {
                              children: "ملاءمة المنتج / الخدمة",
                            }),
                          ],
                        }),
                        t.jsx("div", {
                          className: "text-end-side__",
                          children: t.jsx("span", {
                            children: "حماية بيانات العميل",
                          }),
                        }),
                      ],
                    }),
                    t.jsx("div", {
                      className: "eighth-content height-adjust ",
                      "data-aos": "zoom-in-left",
                      "data-aos-duration": "1200",
                      children: t.jsxs("div", {
                        className: "more-class",
                        children: [
                          t.jsx("span", {
                            children: "طلب مستندات متعلقة بـ (منتج/خدمة)",
                          }),
                          t.jsx("span", { children: "طلب تمديد (منتج/خدمة)" }),
                          t.jsx("span", {
                            children:
                              "تحديث بيانات العميل (الاسم / العنوان / رقم الجوال)",
                          }),
                          t.jsx("span", { children: "طلب تعديل (منتج/خدمة)" }),
                          t.jsx("span", { children: "طلب إلغاء (منتج/خدمة)" }),
                          t.jsx("span", {
                            children: "طلب إضافات على (منتج/خدمة)",
                          }),
                        ],
                      }),
                    }),
                    t.jsxs("div", {
                      className: "eighth-content height-adjust",
                      "data-aos": "zoom-in-left",
                      "data-aos-duration": "1500",
                      children: [
                        t.jsx("div", {
                          className: "text-end-side__",
                          children: t.jsxs("span", {
                            children: [
                              "استفسار عن آلية طلب ",
                              t.jsx("br", {}),
                              "(منتج / خدمة)",
                            ],
                          }),
                        }),
                        t.jsx("div", {
                          className: "text-end-side__",
                          children: t.jsxs("span", {
                            children: [
                              "استفسار عن (منتج / خدمة) ",
                              t.jsx("br", {}),
                              " متعلق بالعميل",
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              t.jsxs("div", {
                className: "eighth-item",
                "data-aos": "zoom-in-left",
                "data-aos-duration": "1500",
                children: [
                  t.jsx("h6", { children: "التصنيف الثالث" }),
                  t.jsx("div", {
                    className: "eighth-headline",
                    children: t.jsx("h5", {
                      children:
                        "أين في رحلة العميل¹ / نقطة التواصل مع العميل (Touchpoint)",
                    }),
                  }),
                  t.jsxs("div", {
                    className: "eighth-content",
                    children: [
                      t.jsxs("div", {
                        className: "img-section-for-content",
                        children: [
                          t.jsx("img", { src: Np, alt: "" }),
                          t.jsx("h6", { children: "نقاط التواصل" }),
                          t.jsx("h4", { children: "قبل المنتج/الخدمة" }),
                        ],
                      }),
                      t.jsxs("div", {
                        className:
                          "img-section-for-content content-positon-changing",
                        children: [
                          t.jsx("img", { src: Fo, alt: "" }),
                          t.jsx("h4", {
                            className: "mt-3",
                            children: "خلال المنتج/الخدمة",
                          }),
                        ],
                      }),
                      t.jsxs("div", {
                        className:
                          "img-section-for-content content-positon-changing",
                        style: { top: "170px" },
                        children: [
                          t.jsx("img", { src: Fo, alt: "" }),
                          t.jsx("h4", {
                            className: "mt-3",
                            children: "بعد المنتج/الخدمة",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              t.jsxs("div", {
                className: "eighth-item",
                "data-aos": "zoom-in-left",
                "data-aos-duration": "1100",
                children: [
                  t.jsx("h6", { children: "التصنيف الثاني" }),
                  t.jsx("div", {
                    className: "eighth-headline",
                    children: t.jsx("h5", {
                      children:
                        "ما هي مجموعة (المنتج / الخدمة) و(المنتج / الخدمة)",
                    }),
                  }),
                  t.jsx("div", {
                    className: "eighth-content",
                    children: t.jsxs("div", {
                      className: "eighth-slide-third-section",
                      children: [
                        t.jsxs("div", {
                          className: "flex-eight-content-item",
                          children: [
                            t.jsx("h3", {
                              children: "مجموعة (المنتج / الخدمة)",
                            }),
                            t.jsx("h3", { children: ".1" }),
                          ],
                        }),
                        t.jsxs("div", {
                          className: "white-border-design",
                          children: [
                            t.jsx("h4", { children: "المنتج/الخدمة" }),
                            t.jsx("h4", { children: ".1" }),
                          ],
                        }),
                        t.jsxs("div", {
                          className: "white-border-design",
                          children: [
                            t.jsx("h4", { children: "المنتج/الخدمة" }),
                            t.jsx("h4", { children: ".2" }),
                          ],
                        }),
                        t.jsxs("div", {
                          className: "white-border-design",
                          children: [
                            t.jsx("h4", { children: "...." }),
                            t.jsx("h4", { children: "." }),
                          ],
                        }),
                        t.jsxs("div", {
                          className: "flex-eight-content-item mt-4",
                          children: [
                            t.jsx("h3", {
                              children: "مجموعة (المنتج / الخدمة) ",
                            }),
                            t.jsx("h3", { children: ".2" }),
                          ],
                        }),
                        t.jsxs("div", {
                          className: "white-border-design",
                          children: [
                            t.jsx("h4", { children: "المنتج/الخدمة" }),
                            t.jsx("h4", { children: ".1" }),
                          ],
                        }),
                        t.jsxs("div", {
                          className: "white-border-design",
                          children: [
                            t.jsx("h4", { children: "المنتج/الخدمة" }),
                            t.jsx("h4", { children: ".2" }),
                          ],
                        }),
                        t.jsxs("div", {
                          className: "white-border-design",
                          children: [
                            t.jsx("h4", { children: "...." }),
                            t.jsx("h4", { children: "." }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              t.jsxs("div", {
                className: "eighth-item",
                children: [
                  t.jsx("h6", {
                    "data-aos": "zoom-in-down",
                    "data-aos-duration": "1300",
                    children: "التصنيف الأول",
                  }),
                  t.jsx("div", {
                    className: "eighth-headline",
                    "data-aos": "zoom-out",
                    children: t.jsx("h5", { children: "نوع البلاغ" }),
                  }),
                  t.jsx("div", {
                    className: "box-for-some-content",
                    "data-aos": "zoom-in-left",
                    "data-aos-duration": "1300",
                    children: t.jsx("h4", { children: "شكوى" }),
                  }),
                  t.jsx("div", {
                    className: "box-for-some-content",
                    "data-aos": "zoom-in-left",
                    "data-aos-duration": "1400",
                    children: t.jsx("h4", { children: "طلب" }),
                  }),
                  t.jsx("div", {
                    className: "box-for-some-content",
                    "data-aos": "zoom-in-down",
                    "data-aos-duration": "1400",
                    children: t.jsx("h4", { children: "استفسار" }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  kp = () => t.jsxs("div", { children: [t.jsx(yp, {}), t.jsx(wp, {})] });
const Tt = "/assets/logo-63ee92b4.svg",
  _s = "/assets/logo2-3aaedc51.svg",
  Mo = "/assets/1-7eac9713.svg",
  Oo = "/assets/2-a3bf631e.svg",
  Nr = "/assets/3-204e7c2a.svg",
  Do = "/assets/4-baa71b36.svg",
  Sp = "/assets/5-bf7100ea.svg",
  wr = "/assets/logo1-6372f7c3.svg",
  Io = "/assets/logo2-e8ee223d.svg",
  zp = "/assets/1-5b889882.svg",
  Ep = "/assets/2-f986fb68.svg",
  Ap = "/assets/3-40427013.svg",
  Cp = "/assets/4-f76e405a.svg",
  bp = "/assets/5-13ee9967.svg",
  Pp = "/assets/6-243b5cb5.svg",
  Tp = "/assets/7-b8328ff0.svg",
  Rp = "/assets/8-1123c4d3.svg",
  Lp = "/assets/9-04fe3578.svg",
  Fp = "/assets/10-6869941e.svg",
  Mp = "/assets/11-24937596.svg",
  Op = "/assets/12-bfc01847.svg",
  Dp = "/assets/13-f3a93855.svg",
  Ip = "/assets/14-ea7b943d.svg",
  Bp = "/assets/15-49253470.svg",
  Vp = () => {
    const e = [
      {
        id: "#74c23d",
        name: "المرحلة الخامسة",
        smallTitle: "إطلاق المنتج",
        post: "إعداد مناهج مختلفة حول كيفية إطلاق المنتج، وضع خطة تواصل واضحة لإبلاغ العملاء بالمنتج الجديد ثم يتم إعداد خطة عالية المستوى لبدء الإطلاق",
        img: zp,
        smallColor: "#f7752c",
      },
      {
        id: "#24bec8",
        name: "المرحلة الرابعة",
        smallTitle: "تقييم مخاطر المنتج",
        post: "يتم تقييم المخاطر المرتبطة بإطلاق منتج/منتجات وتقييم المخاطر المادية المرتبطة بالمنتج بالإضافة الى احتواء ومراقبة المخاطر المحتملة المرتبطة",
        img: Ep,
        smallColor: "black",
      },
      {
        id: "#2e23a7",
        name: "المرحلة الثالثة",
        smallTitle: "تطوير المنتج",
        post: "إنشاء تصميم عالي المستوى وإعداد المتطلبات الفنية عالية المستوى ثم يتم تحديد عينة من العملاء لإجراء الاختبار النهائي ثم إطلاقها عليهم",
        img: Ap,
        smallColor: "#f7752c",
      },
      {
        id: "#314fed",
        name: "تصميم المنتج",
        smallTitle: "تصميم المنتج",
        post: "رسم خارطة رحلة العميل وتطوير نهج مستهدف للوصول إلى العملاء وإنشاء ومشاركة متطلبات العمل المعتمدة النهائية (بما في ذلك العمليات الداخلية).",
        img: Cp,
        smallColor: "#314fed",
      },
      {
        id: "#df40b6",
        name: "المرحلة الاولى",
        smallTitle: "دراسة المنتج",
        post: "تحديد الهدف الذي يسعى الى تحقيقه المنتج، وتحليل وإجراء البحث اللازم لتحديد شريحة وفئة العملاء المستهدفة",
        img: bp,
        smallColor: "black",
      },
    ];
    return t.jsx("div", {
      style: { margin: "100px 0" },
      children: t.jsxs("div", {
        className: "container ",
        children: [
          t.jsx("div", {
            className: "SixthSlide",
            children: t.jsx("div", {
              className: "fourth-header",
              "data-aos": "zoom-in-left",
              "data-aos-duration": "1200",
              children: t.jsxs("h2", {
                className: "text-end semi-bold",
                children: [
                  " أفضل الممارسات ",
                  t.jsx("span", {
                    style: { color: "#f7752c" },
                    children: "(الحلول)",
                  }),
                ],
              }),
            }),
          }),
          t.jsxs("div", {
            className: "sixth-row",
            children: [
              t.jsxs("div", {
                className: "sixth-right-side-column",
                children: [
                  t.jsxs("div", {
                    className: "headline-sixth-column",
                    "data-aos": "zoom-in-left",
                    "data-aos-duration": "1200",
                    children: [
                      t.jsx("h5", { children: "نطاق التحدي" }),
                      t.jsx("img", { src: Tt, alt: "" }),
                    ],
                  }),
                  t.jsxs("div", {
                    className: "sixth-card-content",
                    "data-aos": "zoom-in-left",
                    "data-aos-duration": "1200",
                    children: [
                      t.jsx("h5", {
                        children:
                          "يتم تطبيق اشتراطات كافة منتجات البنك لكافة فئات العملاء المستهدفين، وتشمل ذلك",
                      }),
                      t.jsxs("div", {
                        className: "card___container",
                        children: [
                          t.jsxs("div", {
                            className: "card___content___left_side",
                            children: [
                              t.jsx("h6", {
                                children: "منتجات البنك لقطاع الاعمال",
                              }),
                              t.jsx("img", { src: Mo, alt: "" }),
                            ],
                          }),
                          t.jsxs("div", {
                            className: "card___content___left_side",
                            children: [
                              t.jsx("h6", {
                                children: "منتجات البنك الموجه للأفراد",
                              }),
                              t.jsx("img", { src: Oo, alt: "" }),
                            ],
                          }),
                        ],
                      }),
                      t.jsxs("div", {
                        className: "card___container mt-2",
                        children: [
                          t.jsxs("div", {
                            className: "card___content___left_side",
                            children: [
                              t.jsx("h6", { children: "المبادرات التمويلية" }),
                              t.jsx("img", { src: Nr, alt: "" }),
                            ],
                          }),
                          t.jsxs("div", {
                            className: "card___content___left_side",
                            children: [
                              t.jsx("h6", {
                                children: "منتجات القطاع غير الربحي",
                              }),
                              t.jsx("img", { src: Do, alt: "" }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  t.jsxs("div", {
                    className: "headline-sixth-column",
                    "data-aos": "zoom-in-left",
                    "data-aos-duration": "1400",
                    children: [
                      t.jsx("h5", { children: "نطاق التحدي" }),
                      t.jsx("img", { src: Tt, alt: "" }),
                    ],
                  }),
                  t.jsxs("div", {
                    className: "sixth-card-content",
                    "data-aos": "zoom-in-left",
                    "data-aos-duration": "1200",
                    children: [
                      t.jsx("h5", {
                        children:
                          "يتم تطبيق اشتراطات كافة منتجات البنك لكافة فئات العملاء المستهدفين، وتشمل ذلك",
                      }),
                      t.jsxs("div", {
                        className: "card___container",
                        children: [
                          t.jsxs("div", {
                            className: "card___content___left_side",
                            children: [
                              t.jsx("h6", {
                                children: "منتجات البنك لقطاع الاعمال",
                              }),
                              t.jsx("img", { src: Mo, alt: "" }),
                            ],
                          }),
                          t.jsxs("div", {
                            className: "card___content___left_side",
                            children: [
                              t.jsx("h6", {
                                children: "منتجات البنك الموجه للأفراد",
                              }),
                              t.jsx("img", { src: Oo, alt: "" }),
                            ],
                          }),
                        ],
                      }),
                      t.jsxs("div", {
                        className: "card___container mt-2",
                        children: [
                          t.jsxs("div", {
                            className: "card___content___left_side",
                            children: [
                              t.jsx("h6", { children: "المبادرات التمويلية" }),
                              t.jsx("img", { src: Nr, alt: "" }),
                            ],
                          }),
                          t.jsxs("div", {
                            className: "card___content___left_side",
                            children: [
                              t.jsx("h6", {
                                children: "منتجات القطاع غير الربحي",
                              }),
                              t.jsx("img", { src: Do, alt: "" }),
                            ],
                          }),
                        ],
                      }),
                      t.jsxs("div", {
                        className: "card___container mt-2",
                        children: [
                          t.jsxs("div", {
                            className: "card___content___left_side",
                            style: { opacity: "0" },
                            children: [
                              t.jsx("h6", { children: "المبادرات التمويلية" }),
                              t.jsx("img", { src: Nr, alt: "" }),
                            ],
                          }),
                          t.jsxs("div", {
                            className: "card___content___left_side",
                            children: [
                              t.jsx("h6", { children: "العناية بالعملاء" }),
                              t.jsx("img", { src: Sp, alt: "" }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              t.jsxs("div", {
                className: "sixth-right-side-column",
                children: [
                  t.jsxs("div", {
                    className: "headline-sixth-column",
                    "data-aos": "zoom-in-left",
                    "data-aos-duration": "1200",
                    children: [
                      t.jsxs("h5", {
                        children: [
                          t.jsx("span", { children: " تحديات" }),
                          " إطلاق منتج جديد",
                        ],
                      }),
                      t.jsx("img", { src: _s, alt: "" }),
                    ],
                  }),
                  t.jsxs("div", {
                    className: "sixth-card-content",
                    "data-aos": "zoom-in-left",
                    "data-aos-duration": "1400",
                    children: [
                      t.jsxs("div", {
                        className: "flex-column-title",
                        children: [
                          t.jsx("p", {
                            children:
                              "عملية إطلاق المنتج الجديد غير واضحة وغير منظمة، مما يؤدي إلى تأخيرات ومشاكل",
                          }),
                          t.jsx("span", { children: ".1" }),
                        ],
                      }),
                      t.jsxs("div", {
                        className: "flex-column-title",
                        children: [
                          t.jsx("p", {
                            children:
                              "عدم وضوح في الأدوار والمسؤوليات لإطلاق المنتجات الجديدة",
                          }),
                          t.jsx("span", { children: ".2" }),
                        ],
                      }),
                      t.jsxs("div", {
                        className: "flex-column-title",
                        children: [
                          t.jsx("p", {
                            children:
                              "قد يتعارض إطلاق منتج جديد مع المهام القائمة، مما قد يؤدي إلى مشاكل في العمليات أو الخدمات",
                          }),
                          t.jsx("span", { children: ".3" }),
                        ],
                      }),
                      t.jsxs("div", {
                        className: "flex-column-title",
                        children: [
                          t.jsx("p", {
                            children:
                              "ارتفاع عدد البلاغات والشكاوى بسبب التغييرات الغير مجدولة والتي تتضمن إطلاق او تغيير او اغلاق منتجات دون تخطيط او تبرير مسبق",
                          }),
                          t.jsx("span", { children: ".4" }),
                        ],
                      }),
                    ],
                  }),
                  t.jsxs("div", {
                    className: "headline-sixth-column",
                    "data-aos": "zoom-in-left",
                    "data-aos-duration": "1200",
                    children: [
                      t.jsxs("h5", {
                        children: [
                          t.jsx("span", { children: " تحديات" }),
                          " سد فجوات رحلة العميل",
                        ],
                      }),
                      t.jsx("img", { src: _s, alt: "" }),
                    ],
                  }),
                  t.jsxs("div", {
                    className: "sixth-card-content",
                    "data-aos": "zoom-in-left",
                    "data-aos-duration": "1200",
                    children: [
                      t.jsxs("div", {
                        className: "flex-column-title",
                        children: [
                          t.jsx("p", {
                            children:
                              "رحلة العميل مع البنك غير سلسة أو فعالة، مما قد يؤدي إلى عدم رضا العملاء أو فقدانهم",
                          }),
                          t.jsx("span", { children: ".1" }),
                        ],
                      }),
                      t.jsxs("div", {
                        className: "flex-column-title",
                        children: [
                          t.jsx("p", {
                            children:
                              "هناك فجوات في رحلة العميل مع البنك، مما قد يؤدي إلى تجربة غير مرضية للعملاء",
                          }),
                          t.jsx("span", { children: ".2" }),
                        ],
                      }),
                      t.jsxs("div", {
                        className: "flex-column-title",
                        children: [
                          t.jsx("p", {
                            children:
                              "هناك عدم وضوح في المسؤوليات والإجراءات المتعلقة بحوكمة البنك",
                          }),
                          t.jsx("span", { children: ".3" }),
                        ],
                      }),
                      t.jsxs("div", {
                        className: "flex-column-title",
                        children: [
                          t.jsx("p", {
                            children:
                              "هناك عدم وضوح في الأدوار والمسؤوليات المتعلقة بتحسين الخدمات والمنتجات",
                          }),
                          t.jsx("span", { children: ".4" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          t.jsx("div", {
            className: "fourth-header",
            "data-aos": "zoom-in-left",
            "data-aos-duration": "1000",
            style: { marginTop: "120px" },
            children: t.jsxs("h2", {
              className: "text-end semi-bold",
              children: [
                "سياسات إدارة المنتجات ",
                t.jsx("span", {
                  style: { color: "#F7752C" },
                  children: "(الحلول)",
                }),
              ],
            }),
          }),
          t.jsxs("div", {
            className: "second-section-row",
            children: [
              t.jsxs("div", {
                className: "green-headline-column",
                children: [
                  t.jsxs("div", {
                    className: "green-headline-flex",
                    "data-aos": "zoom-in-left",
                    "data-aos-duration": "1200",
                    children: [
                      t.jsx("h2", { children: "مراحل إطلاق منتج جديد" }),
                      t.jsx("img", { src: wr, alt: "" }),
                    ],
                  }),
                  t.jsx("div", {
                    className: "green-grids-rows max-height",
                    "data-aos": "zoom-in-left",
                    "data-aos-duration": "1300",
                    children: e.map((n) =>
                      t.jsxs(
                        "div",
                        {
                          className: "blog-item text-center",
                          "data-aos": "zoom-in-left",
                          "data-aos-duration": "1400",
                          children: [
                            t.jsx("img", { src: n.img, alt: "" }),
                            t.jsx("h3", {
                              style: { background: `${n.id}` },
                              children: n.name,
                            }),
                            t.jsx("small", {
                              style: { color: `${n.smallColor}` },
                              children: n.smallTitle,
                            }),
                            " ",
                            t.jsx("br", {}),
                            t.jsx("p", { children: n.post }),
                          ],
                        },
                        n.id
                      )
                    ),
                  }),
                ],
              }),
              t.jsxs("div", {
                className: "green-headline-column ",
                children: [
                  t.jsxs("div", {
                    className: "green-headline-flex",
                    "data-aos": "zoom-in-left",
                    "data-aos-duration": "1200",
                    children: [
                      t.jsx("h2", {
                        children:
                          "دور إدارة تجربة العميل في سياسة إطلاق منتج جديد",
                      }),
                      t.jsx("img", { src: Io, alt: "" }),
                    ],
                  }),
                  t.jsxs("div", {
                    className: "left-side-green-rows-grids max-height",
                    "data-aos": "zoom-in-left",
                    "data-aos-duration": "1400",
                    children: [
                      t.jsxs("div", {
                        className: "left-side-blog-content",
                        children: [
                          t.jsx("p", {
                            children:
                              "التأكد من إتمام تصميم رحلة العميل مع القطاع/ الإدارة التنفيذية المعنية.",
                          }),
                          t.jsx("img", { src: Pp, alt: "" }),
                        ],
                      }),
                      t.jsxs("div", {
                        className: "left-side-blog-content",
                        children: [
                          t.jsx("p", {
                            children:
                              "التأكد من اتباع ما ورد في السياسة ومطابقة كافة المتطلبات لاعتماد إطلاق المنتجات الجديدة أو إيقافها من خلال استخدام واستيفاء نموذج قائمة المستندات المطلوبة لإطلاق-إيقاف منتج.",
                          }),
                          t.jsx("img", { src: Tp, alt: "" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          t.jsxs("div", {
            className: "row",
            style: { marginBottom: "150px" },
            children: [
              t.jsxs("div", {
                className: "col-lg-4",
                children: [
                  t.jsxs("div", {
                    className: "blog-headline___",
                    "data-aos": "zoom-in-left",
                    "data-aos-duration": "1000",
                    children: [
                      t.jsx("h6", { children: "متطلبات إغلاق الفجوات" }),
                      t.jsx("img", { src: wr, alt: "" }),
                    ],
                  }),
                  t.jsxs("div", {
                    className: "single__blog___card___item___ content-align",
                    "data-aos": "zoom-in-left",
                    "data-aos-duration": "1200",
                    children: [
                      t.jsxs("div", {
                        className: "single-card-contents",
                        children: [
                          t.jsx("img", { src: Rp, alt: "" }),
                          t.jsx("h6", {
                            children: "التكامل والدقة واختيار الوقت المناسب",
                          }),
                        ],
                      }),
                      t.jsxs("div", {
                        className: "single-card-contents",
                        children: [
                          t.jsx("img", { src: Lp, alt: "" }),
                          t.jsx("h6", {
                            children: "تفعيل نظام التذاكر في الCRM",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              t.jsxs("div", {
                className: "col-lg-4",
                "data-aos": "zoom-in-left",
                "data-aos-duration": "1200",
                children: [
                  t.jsxs("div", {
                    className: "blog-headline___",
                    children: [
                      t.jsx("h6", { children: "خطوات إغلاق الفجوات" }),
                      t.jsx("img", { src: wr, alt: "" }),
                    ],
                  }),
                  t.jsxs("div", {
                    className: "single__blog___card___item___ three-grid-box",
                    children: [
                      t.jsxs("div", {
                        className: "first-grid-box-",
                        children: [
                          t.jsx("h6", { children: "الخطوة الثالثة" }),
                          t.jsx("img", { src: Fp, alt: "" }),
                          t.jsx("h5", { children: "التواصل" }),
                          t.jsx("p", {
                            children:
                              "يتم التواصل مع العميل من الإدارة المختصة خلال 24 ساعة عمل",
                          }),
                        ],
                      }),
                      t.jsxs("div", {
                        className: "first-grid-box-",
                        children: [
                          t.jsx("h6", { children: "الخطوة الثانية" }),
                          t.jsx("img", { src: Mp, alt: "" }),
                          t.jsx("h5", { children: "القرار" }),
                          t.jsx("p", {
                            children:
                              "عند اكمال الاستبيان يقرر العميل في حال رغبته بتواصل البنك معه ام لا وفي حال رغبته بالتواصل يتم انشاء تذكرة معاودة اتصال",
                          }),
                        ],
                      }),
                      t.jsxs("div", {
                        className: "first-grid-box-",
                        children: [
                          t.jsx("h6", { children: "الخطوة الأولى" }),
                          t.jsx("img", { src: Op, alt: "" }),
                          t.jsx("h5", { children: "التصويت" }),
                          t.jsx("p", {
                            children:
                              "عند اختيار العميل تقييم منخفض يتم انسدال قائمة بالأسباب",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              t.jsxs("div", {
                className: "col-lg-4",
                "data-aos": "zoom-in-left",
                "data-aos-duration": "1200",
                children: [
                  t.jsxs("div", {
                    className: "blog-headline___",
                    children: [
                      t.jsx("h6", {
                        children: "الأدوار والمسؤوليات في سياسة سد ",
                      }),
                      t.jsx("img", { src: Io, alt: "" }),
                    ],
                  }),
                  t.jsxs("div", {
                    className: "single__blog___card___item___ ",
                    children: [
                      t.jsxs("div", {
                        className: "flex-blog-container___",
                        children: [
                          t.jsxs("div", {
                            className: "post-content",
                            children: [
                              t.jsx("h6", { children: "إدارة تجربة العميل" }),
                              t.jsx("p", {
                                children:
                                  "تتبع رأي العملاء وتحليليها ومشاركتها مع القطاعات المسؤولة بعد وضع المقترحات التحسينية والالتزام بمتابعة التحسينات وقياس اثرها على رضا العملاء",
                              }),
                            ],
                          }),
                          t.jsx("div", {
                            className: "post-image",
                            children: t.jsx("img", { src: Dp, alt: "" }),
                          }),
                        ],
                      }),
                      t.jsxs("div", {
                        className: "flex-blog-container___",
                        children: [
                          t.jsxs("div", {
                            className: "post-content",
                            children: [
                              t.jsx("h6", { children: "قطاع الأعمال" }),
                              t.jsx("p", {
                                children:
                                  "التفاعل الإيجابي مع نتائج الاستبيانات والالتزام بخطة العمل والتحسينات واخطار تجربة العملاء بأي تحديث",
                              }),
                            ],
                          }),
                          t.jsx("div", {
                            className: "post-image",
                            children: t.jsx("img", { src: Ip, alt: "" }),
                          }),
                        ],
                      }),
                      t.jsxs("div", {
                        className: "flex-blog-container___",
                        children: [
                          t.jsxs("div", {
                            className: "post-content",
                            children: [
                              t.jsx("h6", { children: "تقنية المعلومات" }),
                              t.jsx("p", {
                                children:
                                  "توفير قاعدة بيانات ومعلومات العملاء لضمان وصول النتائج من العملاء المعنين (المدة الزمنية) وكذلك التعاون في تطوير آلية قياس الرضا",
                              }),
                            ],
                          }),
                          t.jsx("div", {
                            className: "post-image",
                            children: t.jsx("img", { src: Bp, alt: "" }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  Up = "/assets/online-marketing-763d76c9.jpg",
  Qp = () => {
    const e = "إدارة المنتجات",
      n = "",
      s = "#f7752cc2";
    return t.jsxs("div", {
      children: [t.jsx(an, { h1: e, h3: n, bg: s, img: Up }), t.jsx(Vp, {})],
    });
  };
const Wp = "/assets/logo-329b2912.svg",
  Hp = "/assets/logo2-dc7faff6.svg",
  Kp = "/assets/logo3-8811ae2c.svg",
  qp = "/assets/logo4-f516cd35.svg",
  $p = "/assets/logo5-8bbb8bf4.svg",
  Yp = "/assets/logo6-b41a1aa8.svg",
  Gp = "/assets/logo7-cb544de2.svg",
  Xp = "/assets/logo8-06e495a4.svg",
  Jp = "/assets/logo9-f1b5c988.svg",
  Zp = "/assets/logo10-d995eec5.svg",
  ex = "/assets/logo11-d4afba38.svg",
  nx = () =>
    t.jsx("div", {
      style: { margin: "100px 0" },
      children: t.jsxs("div", {
        className: "container",
        children: [
          t.jsx("div", {
            className: "fourth-header mb-5",
            "data-aos": "zoom-in-left",
            "data-aos-duration": "1300",
            children: t.jsxs("h2", {
              className: "text-end semi-bold",
              children: [
                " الموقع الإلكتروني  ",
                t.jsx("span", {
                  style: { color: "#feaea9" },
                  children: "(التحديات)",
                }),
              ],
            }),
          }),
          t.jsxs("div", {
            className: "row",
            children: [
              t.jsx("div", { className: "col-lg-2" }),
              t.jsx("div", {
                className: "col-lg-4",
                "data-aos": "zoom-in-left",
                "data-aos-duration": "1200",
                children: t.jsxs("div", {
                  className: "ninth-number-box",
                  children: [
                    t.jsxs("div", {
                      className: "headline",
                      children: [
                        t.jsx("h4", { children: "تصميم الموقع الجديد" }),
                        t.jsx("img", { src: Wp, alt: "" }),
                      ],
                    }),
                    t.jsx("p", {
                      children:
                        "تعارض بعض الملاحظات مع هوية وتصميم الموقع الجديد المعتمد في المراحل الأولى من تصميم الموقع",
                    }),
                  ],
                }),
              }),
              t.jsx("div", {
                className: "col-lg-4",
                "data-aos": "zoom-in-left",
                "data-aos-duration": "1400",
                children: t.jsxs("div", {
                  className: "ninth-number-box",
                  children: [
                    t.jsxs("div", {
                      className: "headline",
                      children: [
                        t.jsx("h4", { children: "معايير الأمم المتحدة- UN" }),
                        t.jsx("img", { src: Hp, alt: "" }),
                      ],
                    }),
                    t.jsx("p", {
                      children:
                        "بعض الملاحظات الواردة تتعارض مع ما تم تصميمه وبناءه وفقا لمعايير الأمم المتحدة",
                    }),
                  ],
                }),
              }),
              t.jsx("div", { className: "col-lg-2" }),
              t.jsx("div", {
                className: "col-lg-4",
                "data-aos": "zoom-in-left",
                "data-aos-duration": "1100",
                children: t.jsxs("div", {
                  className: "ninth-number-box",
                  children: [
                    t.jsxs("div", {
                      className: "headline",
                      children: [
                        t.jsx("h4", {
                          children: "Live-Beta-Staging تعدد بيئات العمل",
                        }),
                        t.jsx("img", {
                          src: Kp,
                          alt: "",
                          style: { position: "relative", top: "7px" },
                        }),
                      ],
                    }),
                    t.jsx("p", {
                      children:
                        "تم معالجة وعكس الملاحظات في جميع البيئات مما أثر سلبا على الجهد والوقت في انجاز خطة المشروع",
                    }),
                  ],
                }),
              }),
              t.jsx("div", {
                className: "col-lg-4",
                "data-aos": "zoom-in-left",
                "data-aos-duration": "1300",
                children: t.jsxs("div", {
                  className: "ninth-number-box",
                  children: [
                    t.jsxs("div", {
                      className: "headline",
                      children: [
                        t.jsx("h4", { children: "عدم وضوح الملاحظات" }),
                        t.jsx("img", {
                          src: qp,
                          alt: "",
                          style: { position: "relative", top: "7px" },
                        }),
                      ],
                    }),
                    t.jsx("p", {
                      children:
                        "بعض الملاحظات لم تكن محددة وواضحة وتطلب ذلك جهدا إضافيا لتنسيق عدة اجتماعات مع الإدارات المعنية لتحديد المطلوب مما أثر سلبا على خطة انجاز المشروع",
                    }),
                  ],
                }),
              }),
              t.jsx("div", {
                className: "col-lg-4",
                "data-aos": "zoom-in-left",
                "data-aos-duration": "1500",
                children: t.jsxs("div", {
                  className: "ninth-number-box",
                  children: [
                    t.jsxs("div", {
                      className: "headline",
                      children: [
                        t.jsx("h4", { children: "محدودية الصلاحيات" }),
                        t.jsx("img", {
                          src: $p,
                          alt: "",
                          style: { position: "relative", top: "7px" },
                        }),
                      ],
                    }),
                    t.jsx("p", {
                      children:
                        "عدم وجود الصلاحيات الكاملة في نظام إدارة المحتوى ( Kentico ) لدى فريق تجربة العميل مما أثر سلبا على عدم القدرة لمعالجة بعض الملاحظات (التقنية-والتصميم)",
                    }),
                  ],
                }),
              }),
            ],
          }),
          t.jsx("div", {
            className: "fourth-header",
            "data-aos": "zoom-in-left",
            "data-aos-duration": "1200",
            style: { paddingTop: "100px" },
            children: t.jsxs("h2", {
              className: "text-end semi-bold",
              children: [
                "الملاحظات الواردة من الإدارات ",
                t.jsx("span", {
                  style: { color: "#FEAEA9" },
                  children: " (الحلول)",
                }),
              ],
            }),
          }),
          t.jsx("div", {
            className: "border-at-the-bottom-side",
            "data-aos": "zoom-in-left",
            "data-aos-duration": "1300",
            children: t.jsxs("div", {
              className: "row mb-4",
              style: { position: "relative", top: "6px" },
              children: [
                t.jsx("div", { className: "col-lg-3" }),
                t.jsx("div", {
                  className: "col-lg-3",
                  children: t.jsxs("div", {
                    className: "numbers",
                    children: [
                      t.jsx("span", {
                        style: { color: "#df40b6" },
                        children: "225",
                      }),
                      t.jsx("h6", { children: "الملاحظات المعالجة" }),
                      t.jsx("img", { src: Yp, alt: "" }),
                    ],
                  }),
                }),
                t.jsx("div", {
                  className: "col-lg-3",
                  children: t.jsxs("div", {
                    className: "numbers",
                    children: [
                      t.jsx("span", {
                        style: { color: "#24bec8" },
                        children: "45",
                      }),
                      t.jsx("h6", { children: "الملاحظات قيد التطوير" }),
                      t.jsx("img", { src: Gp, alt: "" }),
                    ],
                  }),
                }),
                t.jsx("div", {
                  className: "col-lg-3",
                  children: t.jsxs("div", {
                    className: "numbers",
                    children: [
                      t.jsx("span", {
                        style: { color: "#74c23d" },
                        children: "270",
                      }),
                      t.jsx("h6", { children: "عدد الملاحظات" }),
                      t.jsx("img", { src: Xp, alt: "" }),
                    ],
                  }),
                }),
              ],
            }),
          }),
          t.jsxs("div", {
            className: "row ",
            style: { marginTop: "100px", paddingBottom: "50px" },
            children: [
              t.jsx("div", {
                className: "col-lg-5",
                "data-aos": "zoom-in-left",
                "data-aos-duration": "1200",
                children: t.jsxs("div", {
                  className: "text-box__",
                  children: [
                    t.jsx("div", {
                      className: "text__box__caption",
                      children: t.jsxs("h6", {
                        className: "text-end",
                        children: [
                          "  الإدارات التنفيذية/الإدارات التي وثقت وشاركت",
                          t.jsx("br", {}),
                          "ملاحظاتهم",
                        ],
                      }),
                    }),
                    t.jsxs("div", {
                      className: "ninth",
                      children: [
                        t.jsx("div", {
                          className: "ninth_col_6",
                          children: t.jsx("p", {
                            children: "الإدارة التنفيذية لتمويل المنشآت",
                          }),
                        }),
                        t.jsx("div", {
                          className: "ninth_col_6",
                          children: t.jsx("p", {
                            children: "الإدارة التنفيذية لتمويل الافراد",
                          }),
                        }),
                      ],
                    }),
                    t.jsxs("div", {
                      className: "ninth",
                      children: [
                        t.jsx("div", {
                          className: "ninth_col_6",
                          children: t.jsx("p", {
                            children: "الإدارة التنفيذية لتمويل العمل الحر",
                          }),
                        }),
                        t.jsx("div", {
                          className: "ninth_col_6",
                          children: t.jsx("p", {
                            children: "الإدارة التنفيذية لتمويل الاسر المنتجة",
                          }),
                        }),
                      ],
                    }),
                    t.jsxs("div", {
                      className: "ninth",
                      children: [
                        t.jsx("div", {
                          className: "ninth_col_6",
                          children: t.jsx("p", {
                            children: "الإدارة التنفيذية للفروع والقنوات",
                          }),
                        }),
                        t.jsx("div", {
                          className: "ninth_col_6",
                          children: t.jsx("p", {
                            children: "الإدارة التنفيذية للادخار",
                          }),
                        }),
                      ],
                    }),
                    t.jsxs("div", {
                      className: "ninth",
                      children: [
                        t.jsx("div", {
                          className: "ninth_col_6",
                          children: t.jsx("p", {
                            children: "الإدارة التنفيذية للتسويق",
                          }),
                        }),
                        t.jsx("div", {
                          className: "ninth_col_6",
                          children: t.jsx("p", {
                            children: "الإدارة التنفيذية للتمكين والتنمية",
                          }),
                        }),
                      ],
                    }),
                    t.jsxs("div", {
                      className: "ninth",
                      children: [
                        t.jsx("div", {
                          className: "ninth_col_6",
                          children: t.jsx("p", {
                            children: "إدارة العناية بالعملاء",
                          }),
                        }),
                        t.jsx("div", {
                          className: "ninth_col_6",
                          children: t.jsx("p", {
                            children: "الإدارة التنفيذية للفروع",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              t.jsx("div", {
                className: "col-lg-7",
                "data-aos": "zoom-in-left",
                "data-aos-duration": "1500",
                children: t.jsxs("div", {
                  className: "col-7-container",
                  children: [
                    t.jsxs("div", {
                      className: "children-div-of-container",
                      children: [
                        t.jsx("div", {
                          className: "container-headline__________",
                          children: t.jsx("h6", {
                            children: "الملاحظات قيد التطوير",
                          }),
                        }),
                        t.jsx("div", {
                          className: "white______box",
                          children: t.jsx("p", { children: "7" }),
                        }),
                        t.jsx("div", {
                          className: "white______box",
                          children: t.jsx("p", { children: "26" }),
                        }),
                        t.jsx("div", {
                          className: "white______box",
                          children: t.jsx("p", { children: "12" }),
                        }),
                      ],
                    }),
                    t.jsxs("div", {
                      className: "children-div-of-container",
                      children: [
                        t.jsx("div", {
                          className: "container-headline__________",
                          style: { background: "#24bec8" },
                          children: t.jsx("h6", {
                            children: "الملاحظات قيد التطوير",
                          }),
                        }),
                        t.jsx("div", {
                          className: "white______box",
                          style: { border: "1px solid #24bec8" },
                          children: t.jsx("p", { children: "180" }),
                        }),
                        t.jsx("div", {
                          className: "white______box",
                          style: { border: "1px solid #24bec8" },
                          children: t.jsx("p", { children: "17" }),
                        }),
                        t.jsx("div", {
                          className: "white______box",
                          style: { border: "1px solid #24bec8" },
                          children: t.jsx("p", { children: "28" }),
                        }),
                      ],
                    }),
                    t.jsxs("div", {
                      className: "children-div-of-container",
                      children: [
                        t.jsx("div", {
                          className: "container-headline__________",
                          style: { background: "#74c23d" },
                          children: t.jsx("h6", { children: "عدد الملاحظات" }),
                        }),
                        t.jsx("div", {
                          className: "white______box",
                          style: { border: "1px solid #74c23d" },
                          children: t.jsx("p", { children: "187" }),
                        }),
                        t.jsx("div", {
                          className: "white______box",
                          style: { border: "1px solid #74c23d" },
                          children: t.jsx("p", { children: "43" }),
                        }),
                        t.jsx("div", {
                          className: "white______box",
                          style: { border: "1px solid #74c23d" },
                          children: t.jsx("p", { children: "40" }),
                        }),
                      ],
                    }),
                    t.jsxs("div", {
                      className: "children-div-of-container",
                      children: [
                        t.jsx("div", {
                          className: "container-headline__________",
                          style: { background: "#74c23d", opacity: "0" },
                          children: t.jsx("h6", { children: "عدد الملاحظات" }),
                        }),
                        t.jsx("div", {
                          className: "white______box",
                          style: { background: "#FEAEA9", border: "none" },
                          children: t.jsxs("div", {
                            className: "new-element-with-img",
                            children: [
                              t.jsx("h6", { children: "محتوى" }),
                              t.jsx("img", { src: Jp, alt: "" }),
                            ],
                          }),
                        }),
                        t.jsx("div", {
                          className: "white______box",
                          style: { background: "#FEAEA9", border: "none" },
                          children: t.jsxs("div", {
                            className: "new-element-with-img",
                            children: [
                              t.jsx("h6", { children: "تقني" }),
                              t.jsx("img", { src: Zp, alt: "" }),
                            ],
                          }),
                        }),
                        t.jsx("div", {
                          className: "white______box",
                          style: { background: "#FEAEA9", border: "none" },
                          children: t.jsxs("div", {
                            className: "new-element-with-img",
                            children: [
                              t.jsx("h6", { children: "تصميم" }),
                              t.jsx("img", { src: ex, alt: "" }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
    }),
  tx = "/assets/slide6-7ec9d5bb.jpg",
  sx = () => {
    const e = "موقع البنك",
      n = "",
      s = "#feaea9d9";
    return t.jsxs("div", {
      children: [
        t.jsx("div", { children: t.jsx(an, { h1: e, h3: n, bg: s, img: tx }) }),
        t.jsx(nx, {}),
      ],
    });
  };
const lx = "/assets/slide7-62b4eaab.jpg",
  rx = () => {
    const e = "المتسوق الخفي",
      n = "",
      s = "#13baebab",
      l = [
        {
          id: "04",
          post: "عدم وجود مسار واضح عند التواصل مع الرقم الموحد لتقديم الاستفسارات، حيث يتم الاستفسار من مسار الشكاوى.",
        },
        {
          id: "03",
          post: "لا يتم توضيح وجود خطأ من قبل الرد الآلي عند إدخال (رقم الهوية) بشكل خاطئ. حيث يتم إعادة الصوت التفاعلي ولا يتضح للعميل هل تمت الإعادة بسبب وجود مشكلة في (خط الاتصال) أو أن هناك خطأ في (رقم الهوية المدخل).",
        },
        {
          id: "02",
          post: "تكرار طول وقت الانتظار حتى الوصول إلى ممثل الخدمة. إضافة إلى أن رقم الاتصال الخاص بالبنك غير مجاني ويتم احتساب تكلفة الاتصال على العميل.",
        },
        {
          id: "01",
          post: "وجود مشكلة متكررة في الرقم الموحد للبنك. حيث تم مواجهة انقطاع في خط الاتصال بشكل تلقائي في بداية المكالمة.",
        },
        {
          id: "08",
          post: "تكرار عدم التبليغ بالشكر والاعتذار بعد تنشيط وضع الانتظار أثناء المكالمة من قبل ممثلي الخدمة.",
        },
        {
          id: "07",
          post: "تكرار ضعف التعاون واللباقة من قبل ممثلي خدمة العملاء في عملية تقديم الإجابات على استفسارات العملاء. إذ يتم التوجيه المستمر بالاطلاع على تفاصيل الخدمات التي يتم الاستفسار عنها من خلال الموقع الإلكتروني.",
        },
        {
          id: "06",
          post: "ضعف الاحترافية في تقديم الخدمة من قبل ممثلي الخدمة, إضافة إلى ضعف مهارة الإنصات لاستفسارات العملاء. حيث تم السؤال عن اسم العميل أكثر من مرة , وعند التزويد برقم الهويه كان هناك رقم ناقص, لكن لم يتم ملاحظة ذلك.",
        },
        {
          id: "05",
          post: "تكرار الانتقال المباشر أو بعد عدة ثواني لممثل الخدمة عند التواصل مع الرقم الموحد بعد الساعة (3:00 م).",
        },
      ];
    return t.jsxs("div", {
      children: [
        t.jsx(an, { h1: e, h3: n, bg: s, img: lx }),
        t.jsxs("div", {
          className: "container",
          style: { padding: "100px 0" },
          children: [
            t.jsx("div", {
              className: "fourth-header my-5",
              "data-aos": "zoom-in-left",
              "data-aos-duration": "1200",
              children: t.jsxs("h2", {
                className: "text-end semi-bold",
                children: [
                  " أبرز المشاكل في الفروع  ",
                  t.jsx("span", {
                    style: { color: "#13baeb" },
                    children: "(التحديات)",
                  }),
                ],
              }),
            }),
            t.jsx("div", {
              className: "row",
              children: l.map((r) =>
                t.jsx(
                  "div",
                  {
                    className: "col-lg-3",
                    "data-aos": "zoom-in-left",
                    "data-aos-duration": "1400",
                    children: t.jsxs("div", {
                      className: "single____item",
                      children: [
                        t.jsx("h3", { children: r.id }),
                        t.jsx("p", { children: r.post }),
                      ],
                    }),
                  },
                  r.id
                )
              ),
            }),
          ],
        }),
      ],
    });
  };
const ix = () =>
    t.jsx(t.Fragment, {
      children: t.jsxs("div", {
        className: "container",
        style: { paddingBottom: "100px" },
        children: [
          t.jsx("div", {
            className: "fourth-header my-5",
            "data-aos": "zoom-in-left",
            "data-aos-duration": "1200",
            children: t.jsxs("h2", {
              className: "text-end semi-bold",
              children: [
                " أبرز الحلول المتعلقة بالفروع ",
                t.jsx("span", {
                  style: { color: "#7AD8F4" },
                  children: "(الحلول)",
                }),
              ],
            }),
          }),
          t.jsxs("div", {
            className: "some-of-text-flex",
            "data-aos": "zoom-in-left",
            "data-aos-duration": "1300",
            children: [
              t.jsxs("div", {
                className: "div1",
                children: [
                  t.jsx("p", { children: "تواصل البنك مع الجهات" }),
                  t.jsx("span", { style: { background: "black" } }),
                ],
              }),
              t.jsxs("div", {
                className: "div1",
                children: [
                  t.jsx("p", { children: "تواصل البنك مع الجهات" }),
                  t.jsx("span", { style: { background: "#f7752c" } }),
                ],
              }),
              t.jsxs("div", {
                className: "div1",
                children: [
                  t.jsx("p", { children: "العمليات البنكية  " }),
                  t.jsx("span", { style: { background: "blue" } }),
                ],
              }),
              t.jsx("div", {
                className: "div1",
                children: t.jsx("h3", { children: "المصدر" }),
              }),
            ],
          }),
          t.jsxs("div", {
            className: "row",
            children: [
              t.jsxs("div", {
                className: "col-lg-6",
                "data-aos": "zoom-in-left",
                "data-aos-duration": "1400",
                children: [
                  t.jsxs("div", {
                    className: "flex-box-column_______",
                    children: [
                      t.jsx("p", {
                        children:
                          "العمل على جدولة دفعات السداد حال التأخر بالسداد وعدم المطالبة بها دفعة واحدة.",
                      }),
                      t.jsx("span", { style: { background: "blue" } }),
                    ],
                  }),
                  t.jsxs("div", {
                    className: "flex-box-column_______",
                    children: [
                      t.jsx("p", {
                        children:
                          "العمل على إيضاح المدة المتوقعة لاستلام السيارة.",
                      }),
                      t.jsx("span", { style: { background: "black" } }),
                    ],
                  }),
                  t.jsxs("div", {
                    className: "flex-box-column_______",
                    children: [
                      t.jsx("p", {
                        children:
                          "العمل على إضافة خيارات لشركات التأمين وعدم إلزام العميل على التأمين الشامل، أو إلزامه بتحديد شركة تأمين معينة.",
                      }),
                      t.jsx("span", { style: { background: "black" } }),
                    ],
                  }),
                  t.jsxs("div", {
                    className: "flex-box-column_______",
                    children: [
                      t.jsx("p", { children: "توضيح شروط ضمانات الوكالات." }),
                      t.jsx("span", { style: { background: "black" } }),
                    ],
                  }),
                  t.jsxs("div", {
                    className: "flex-box-column_______",
                    children: [
                      t.jsx("p", {
                        children:
                          "العمل على إضافة خيارات لشركات التأمين وعدم إلزام العميل على التأمين الشامل، أو إلزامه بتحديد شركة تأمين معينة.",
                      }),
                      t.jsx("span", { style: { background: "black" } }),
                    ],
                  }),
                ],
              }),
              t.jsxs("div", {
                className: "col-lg-6",
                "data-aos": "zoom-in-left",
                "data-aos-duration": "1600",
                children: [
                  t.jsxs("div", {
                    className: "flex-box-column_______",
                    children: [
                      t.jsx("p", { children: "توضيح الأسباب لرفض الكفيل." }),
                      t.jsx("span", { style: { background: "blue" } }),
                    ],
                  }),
                  t.jsxs("div", {
                    className: "flex-box-column_______",
                    children: [
                      t.jsx("p", {
                        children:
                          "تسهيل الشروط الخاصة بالكفيل أو العمل على إلغاء الشرط.",
                      }),
                      t.jsx("span", { style: { background: "blue" } }),
                    ],
                  }),
                  t.jsxs("div", {
                    className: "flex-box-column_______",
                    children: [
                      t.jsx("p", {
                        children: "إعفاء العميل المؤهل من شرط الكفيل.",
                      }),
                      t.jsx("span", { style: { background: "blue" } }),
                    ],
                  }),
                  t.jsxs("div", {
                    className: "flex-box-column_______",
                    children: [
                      t.jsx("p", {
                        children:
                          "توحيد مبلغ القسط لجميع الأشهر وعدم اختلاف المبلغ من شهر لآخر.",
                      }),
                      t.jsx("span", { style: { background: "orange" } }),
                    ],
                  }),
                  t.jsxs("div", {
                    className: "flex-box-column_______",
                    children: [
                      t.jsx("p", {
                        children:
                          "تزويد العملاء برسائل نصية للتذكير بموعد السداد للتمويل.",
                      }),
                      t.jsx("span", { style: { background: "orange" } }),
                    ],
                  }),
                  t.jsxs("div", {
                    className: "flex-box-column_______",
                    children: [
                      t.jsx("p", {
                        children:
                          "توضيح طريقة ورقم وتاريخ السداد من خلال رسالة نصية أو بريد بعد التقديم على التمويل،",
                      }),
                      t.jsx("span", { style: { background: "orange" } }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  ax = () => t.jsxs("div", { children: [t.jsx(rx, {}), t.jsx(ix, {})] });
const kt = "/assets/logo-9d20ad6e.svg",
  Tl = "/assets/logo2-4bd5bd5a.svg",
  il = "/assets/logo3-c55125c6.svg",
  B =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABDklEQVR4nO3YsUoEQQwG4KggaHVgZSVY2lnYWvtWYucLWFwlsskVW1sLnnioHAgme4WdoI2Fuxm0sBrxbhvFWsjwfzAP8JPJTGaIAAAAAADgF5+dbSTja1e5pKja+9NBMpkmk5yUbymil+lw3VXGfYjH91m1SdHkSb3mJheLEPL01vAWRZOtXk3G598h3OS5e5BtiibX9Yqr1IsQ/Jqs2qFocj5cTioy304mbduMdimanPOSqwz7nvBOqz0KGcL4pK/ER2p4nyJyleN5Tyh/djY6oIhc+aivRLjlyleFBJFxeVurqGYv5vgt6kIsakQpamgsaowv6mH151PX5I7Cfz4o3/wYCQAAAAAAgP7fF/tUWzGtJ9HyAAAAAElFTkSuQmCC";
const ox = "/assets/logo5-85a1d4ba.svg",
  cx = () =>
    t.jsx("div", {
      className: "TopSlide ",
      style: { padding: "50px 0" },
      children: t.jsxs("div", {
        className: "container",
        children: [
          t.jsx("div", {
            className: "fourth-header my-5",
            "data-aos": "zoom-in-left",
            "data-aos-duration": "1200",
            children: t.jsxs("h2", {
              "data-aos": "zoom-in-left",
              "data-aos-duration": "1600",
              className: "text-end semi-bold",
              children: [
                " المتطلبات الأساسية ",
                t.jsx("span", {
                  style: { color: "#F09713" },
                  children: "(التحديات)",
                }),
              ],
            }),
          }),
          t.jsx("div", {
            className: "orange-headline__",
            "data-aos": "zoom-in-left",
            "data-aos-duration": "1400",
            children: t.jsxs("h6", {
              children: [
                "تم اقتراح هذه المبادرات بعد إجراء بحث وتحليل البيانات بناءً على المتطلبات التي يمكن تعديلها في المرحلة  ",
                t.jsx("br", {}),
                " الحالية والفجوات في رحلة العميل",
              ],
            }),
          }),
          t.jsxs("div", {
            className: "row",
            "data-aos": "zoom-in-left",
            "data-aos-duration": "1400",
            children: [
              t.jsxs("div", {
                className: "col-lg-3",
                "data-aos": "zoom-in-left",
                "data-aos-duration": "1100",
                children: [
                  t.jsx("div", {
                    className: "custome-headline-for-rules",
                    children: t.jsx("h6", { children: "الحالة" }),
                  }),
                  t.jsx("div", {
                    className: "orange-bg-tagline",
                    children: t.jsxs("div", {
                      className: "flex-container-of-parcent-test",
                      children: [
                        t.jsx("div", {
                          className: "parcentaze-point-div",
                          children: t.jsx("div", {
                            className: "child-div-for-parcentaze",
                            style: { width: "70%" },
                          }),
                        }),
                        t.jsx("h6", {
                          style: { color: "#F09713" },
                          children: "جاري العمل",
                        }),
                      ],
                    }),
                  }),
                  t.jsx("div", {
                    className: "orange-bg-tagline",
                    children: t.jsxs("div", {
                      className: "flex-container-of-parcent-test",
                      children: [
                        t.jsx("div", {
                          className: "parcentaze-point-div",
                          children: t.jsx("div", {
                            className: "child-div-for-parcentaze",
                            style: { width: "100%", borderRadius: "10px" },
                          }),
                        }),
                        t.jsx("h6", {
                          style: { color: "#f09713" },
                          children: "متوفر",
                        }),
                      ],
                    }),
                  }),
                  t.jsx("div", {
                    className: "orange-bg-tagline",
                    children: t.jsxs("div", {
                      className: "flex-container-of-parcent-test",
                      children: [
                        t.jsx("div", {
                          className: "parcentaze-point-div",
                          children: t.jsx("div", {
                            className: "child-div-for-parcentaze",
                            style: { width: "30%" },
                          }),
                        }),
                        t.jsx("h6", {
                          style: { color: "red" },
                          children: "غير متوفر",
                        }),
                      ],
                    }),
                  }),
                  t.jsx("div", {
                    className: "orange-bg-tagline",
                    children: t.jsxs("div", {
                      className: "flex-container-of-parcent-test",
                      children: [
                        t.jsx("div", {
                          className: "parcentaze-point-div",
                          children: t.jsx("div", {
                            className: "child-div-for-parcentaze",
                            style: { width: "30%" },
                          }),
                        }),
                        t.jsx("h6", {
                          style: { color: "red" },
                          children: "غير منتظم",
                        }),
                      ],
                    }),
                  }),
                  t.jsx("div", {
                    className: "orange-bg-tagline",
                    children: t.jsxs("div", {
                      className: "flex-container-of-parcent-test",
                      children: [
                        t.jsx("div", {
                          className: "parcentaze-point-div",
                          children: t.jsx("div", {
                            className: "child-div-for-parcentaze",
                            style: { width: "30%" },
                          }),
                        }),
                        t.jsx("h6", {
                          style: { color: "red" },
                          children: "غير متوفر",
                        }),
                      ],
                    }),
                  }),
                  t.jsx("div", {
                    className: "orange-bg-tagline",
                    children: t.jsxs("div", {
                      className: "flex-container-of-parcent-test",
                      children: [
                        t.jsx("div", {
                          className: "parcentaze-point-div",
                          children: t.jsx("div", {
                            className: "child-div-for-parcentaze",
                            style: { width: "30%" },
                          }),
                        }),
                        t.jsx("h6", {
                          style: { color: "red" },
                          children: "غير متوفر",
                        }),
                      ],
                    }),
                  }),
                  t.jsx("div", {
                    className: "orange-bg-tagline",
                    children: t.jsxs("div", {
                      className: "flex-container-of-parcent-test",
                      children: [
                        t.jsx("div", {
                          className: "parcentaze-point-div",
                          children: t.jsx("div", {
                            className: "child-div-for-parcentaze",
                            style: { width: "30%" },
                          }),
                        }),
                        t.jsx("h6", {
                          style: { color: "red" },
                          children: "غير متوفر",
                        }),
                      ],
                    }),
                  }),
                  t.jsx("div", {
                    className: "orange-bg-tagline",
                    children: t.jsxs("div", {
                      className: "flex-container-of-parcent-test",
                      children: [
                        t.jsx("div", {
                          className: "parcentaze-point-div",
                          children: t.jsx("div", {
                            className: "child-div-for-parcentaze",
                            style: { width: "30%" },
                          }),
                        }),
                        t.jsx("h6", {
                          style: { color: "red" },
                          children: "غير متوفر",
                        }),
                      ],
                    }),
                  }),
                  t.jsx("div", {
                    className: "orange-bg-tagline",
                    children: t.jsxs("div", {
                      className: "flex-container-of-parcent-test",
                      children: [
                        t.jsx("div", {
                          className: "parcentaze-point-div",
                          children: t.jsx("div", {
                            className: "child-div-for-parcentaze",
                            style: { width: "70%" },
                          }),
                        }),
                        t.jsx("h6", {
                          style: { color: "#f09713" },
                          children: "جاري العمل",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              t.jsxs("div", {
                className: "col-lg-4",
                "data-aos": "zoom-in-left",
                "data-aos-duration": "1200",
                children: [
                  t.jsx("div", {
                    className: "custome-headline-for-rules",
                    children: t.jsx("h6", { children: "نوع المتطلب" }),
                  }),
                  t.jsxs("div", {
                    className: "image___and____text___grid",
                    children: [
                      t.jsx("div", {
                        className: "arrow____icon",
                        children: t.jsx("img", { src: B, alt: "" }),
                      }),
                      t.jsxs("div", {
                        className: "arrow-text-flex",
                        children: [
                          t.jsx("h6", { children: "منظمة" }),
                          t.jsx("img", { src: Tl, alt: "" }),
                        ],
                      }),
                    ],
                  }),
                  t.jsxs("div", {
                    className: "image___and____text___grid",
                    children: [
                      t.jsx("div", {
                        className: "arrow____icon",
                        children: t.jsx("img", { src: B, alt: "" }),
                      }),
                      t.jsxs("div", {
                        className: "arrow-text-flex",
                        children: [
                          t.jsx("h6", { children: "منظمة" }),
                          t.jsx("img", { src: Tl, alt: "" }),
                        ],
                      }),
                    ],
                  }),
                  t.jsxs("div", {
                    className: "image___and____text___grid",
                    children: [
                      t.jsx("div", {
                        className: "arrow____icon",
                        children: t.jsx("img", { src: B, alt: "" }),
                      }),
                      t.jsxs("div", {
                        className: "arrow-text-flex",
                        children: [
                          t.jsx("h6", { children: "عمليات" }),
                          t.jsx("img", { src: kt, alt: "" }),
                        ],
                      }),
                    ],
                  }),
                  t.jsxs("div", {
                    className: "image___and____text___grid",
                    children: [
                      t.jsx("div", {
                        className: "arrow____icon",
                        children: t.jsx("img", { src: B, alt: "" }),
                      }),
                      t.jsxs("div", {
                        className: "arrow-text-flex",
                        children: [
                          t.jsx("h6", { children: "عمليات" }),
                          t.jsx("img", { src: kt, alt: "" }),
                        ],
                      }),
                    ],
                  }),
                  t.jsxs("div", {
                    className: "image___and____text___grid",
                    children: [
                      t.jsx("div", {
                        className: "arrow____icon",
                        children: t.jsx("img", { src: B, alt: "" }),
                      }),
                      t.jsxs("div", {
                        className: "arrow-text-flex",
                        children: [
                          t.jsx("h6", { children: "منظمة" }),
                          t.jsx("img", { src: il, alt: "" }),
                        ],
                      }),
                    ],
                  }),
                  t.jsxs("div", {
                    className: "image___and____text___grid",
                    children: [
                      t.jsx("div", {
                        className: "arrow____icon",
                        children: t.jsx("img", { src: B, alt: "" }),
                      }),
                      t.jsxs("div", {
                        className: "arrow-text-flex",
                        children: [
                          t.jsx("h6", { children: "عميل داخلي" }),
                          t.jsx("img", { src: il, alt: "" }),
                        ],
                      }),
                    ],
                  }),
                  t.jsxs("div", {
                    className: "image___and____text___grid",
                    children: [
                      t.jsx("div", {
                        className: "arrow____icon",
                        children: t.jsx("img", { src: B, alt: "" }),
                      }),
                      t.jsxs("div", {
                        className: "arrow-text-flex",
                        children: [
                          t.jsx("h6", { children: "نظام" }),
                          t.jsx("img", { src: ox, alt: "" }),
                        ],
                      }),
                    ],
                  }),
                  t.jsxs("div", {
                    className: "image___and____text___grid",
                    children: [
                      t.jsx("div", {
                        className: "arrow____icon",
                        children: t.jsx("img", { src: B, alt: "" }),
                      }),
                      t.jsxs("div", {
                        className: "arrow-text-flex",
                        children: [
                          t.jsx("h6", { children: "عمليات" }),
                          t.jsx("img", { src: kt, alt: "" }),
                        ],
                      }),
                    ],
                  }),
                  t.jsxs("div", {
                    className: "image___and____text___grid",
                    children: [
                      t.jsx("div", {
                        className: "arrow____icon",
                        children: t.jsx("img", { src: B, alt: "" }),
                      }),
                      t.jsxs("div", {
                        className: "arrow-text-flex",
                        children: [
                          t.jsx("h6", { children: "عميل داخلي" }),
                          t.jsx("img", { src: il, alt: "" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              t.jsxs("div", {
                className: "col-lg-5",
                "data-aos": "zoom-in-left",
                "data-aos-duration": "1400",
                children: [
                  t.jsxs("div", {
                    className: "image___and____text___grid",
                    children: [
                      t.jsx("div", {
                        className: "arrow____icon top-side",
                        children: t.jsx("img", { src: B, alt: "" }),
                      }),
                      t.jsxs("div", {
                        children: [
                          t.jsx("div", {
                            className: "custome-headline-for-rules",
                            children: t.jsx("h6", { children: "نوع المتطلب" }),
                          }),
                          t.jsx("div", {
                            className: "arrow-text-flex",
                            children: t.jsx("p", {
                              style: { fontSize: "16px" },
                              children: "المواقع المحدثة في خرائط قوقل",
                            }),
                          }),
                        ],
                      }),
                      t.jsx("div", {
                        className: "span-number",
                        children: t.jsx("span", { children: "1" }),
                      }),
                    ],
                  }),
                  t.jsxs("div", {
                    className: "image___and____text___grid",
                    children: [
                      t.jsx("div", {
                        className: "arrow____icon",
                        children: t.jsx("img", { src: B, alt: "" }),
                      }),
                      t.jsx("div", {
                        children: t.jsx("div", {
                          className: "arrow-text-flex",
                          children: t.jsx("p", {
                            style: { fontSize: "16px" },
                            children: "إدارة مركزية لتوحيد التواصل مع الفروع",
                          }),
                        }),
                      }),
                      t.jsx("div", {
                        className: "span-number",
                        children: t.jsx("span", {
                          style: { top: "-6px" },
                          children: "2",
                        }),
                      }),
                    ],
                  }),
                  t.jsxs("div", {
                    className: "image___and____text___grid",
                    children: [
                      t.jsx("div", {
                        className: "arrow____icon",
                        children: t.jsx("img", { src: B, alt: "" }),
                      }),
                      t.jsx("div", {
                        children: t.jsx("div", {
                          className: "arrow-text-flex",
                          children: t.jsx("p", {
                            style: { fontSize: "16px" },
                            children: "مؤشرات الأداء الرئيسية",
                          }),
                        }),
                      }),
                      t.jsx("div", {
                        className: "span-number",
                        children: t.jsx("span", {
                          style: { top: "-6px" },
                          children: "3",
                        }),
                      }),
                    ],
                  }),
                  t.jsxs("div", {
                    className: "image___and____text___grid",
                    children: [
                      t.jsx("div", {
                        className: "arrow____icon",
                        children: t.jsx("img", { src: B, alt: "" }),
                      }),
                      t.jsx("div", {
                        children: t.jsx("div", {
                          className: "arrow-text-flex",
                          children: t.jsx("p", {
                            style: { fontSize: "16px" },
                            children: "قياس مستويات الرضا",
                          }),
                        }),
                      }),
                      t.jsx("div", {
                        className: "span-number",
                        children: t.jsx("span", {
                          style: { top: "-6px" },
                          children: "4",
                        }),
                      }),
                    ],
                  }),
                  t.jsxs("div", {
                    className: "image___and____text___grid",
                    children: [
                      t.jsx("div", {
                        className: "arrow____icon",
                        children: t.jsx("img", { src: B, alt: "" }),
                      }),
                      t.jsx("div", {
                        children: t.jsx("div", {
                          className: "arrow-text-flex",
                          children: t.jsx("p", {
                            style: { fontSize: "16px" },
                            children: "برامج لتطوير المعرفة والوعي",
                          }),
                        }),
                      }),
                      t.jsx("div", {
                        className: "span-number",
                        children: t.jsx("span", {
                          style: { top: "-6px" },
                          children: "5",
                        }),
                      }),
                    ],
                  }),
                  t.jsxs("div", {
                    className: "image___and____text___grid",
                    children: [
                      t.jsx("div", {
                        className: "arrow____icon",
                        children: t.jsx("img", { src: B, alt: "" }),
                      }),
                      t.jsx("div", {
                        children: t.jsx("div", {
                          className: "arrow-text-flex",
                          children: t.jsx("p", {
                            style: { fontSize: "16px" },
                            children: "ألية تصعيد و تواصل مع الإدارات المعنية",
                          }),
                        }),
                      }),
                      t.jsx("div", {
                        className: "span-number",
                        children: t.jsx("span", {
                          style: { top: "-6px" },
                          children: "6",
                        }),
                      }),
                    ],
                  }),
                  t.jsxs("div", {
                    className: "image___and____text___grid",
                    children: [
                      t.jsx("div", {
                        className: "arrow____icon",
                        children: t.jsx("img", { src: B, alt: "" }),
                      }),
                      t.jsx("div", {
                        children: t.jsx("div", {
                          className: "arrow-text-flex",
                          children: t.jsx("p", {
                            style: { fontSize: "16px" },
                            children: "الخدمة الذاتية من خلال Kiosk",
                          }),
                        }),
                      }),
                      t.jsx("div", {
                        className: "span-number",
                        children: t.jsx("span", {
                          style: { top: "-6px" },
                          children: "7",
                        }),
                      }),
                    ],
                  }),
                  t.jsxs("div", {
                    className: "image___and____text___grid",
                    children: [
                      t.jsx("div", {
                        className: "arrow____icon",
                        children: t.jsx("img", { src: B, alt: "" }),
                      }),
                      t.jsx("div", {
                        children: t.jsx("div", {
                          className: "arrow-text-flex",
                          children: t.jsx("p", {
                            style: { fontSize: "16px" },
                            children: "رحلات العملاء الموحدة",
                          }),
                        }),
                      }),
                      t.jsx("div", {
                        className: "span-number",
                        children: t.jsx("span", {
                          style: { top: "-6px" },
                          children: "8",
                        }),
                      }),
                    ],
                  }),
                  t.jsxs("div", {
                    className: "image___and____text___grid",
                    children: [
                      t.jsx("div", {
                        className: "arrow____icon",
                        children: t.jsx("img", { src: B, alt: "" }),
                      }),
                      t.jsx("div", {
                        children: t.jsx("div", {
                          className: "arrow-text-flex",
                          children: t.jsx("p", {
                            style: { fontSize: "16px" },
                            children: "دليل تواصل بأنواع سيناريوهات",
                          }),
                        }),
                      }),
                      t.jsx("div", {
                        className: "span-number",
                        children: t.jsx("span", {
                          style: { top: "-6px" },
                          children: "9",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  dx = () =>
    t.jsxs(t.Fragment, {
      children: [
        t.jsx(cx, {}),
        t.jsx("div", {
          style: { paddingBottom: "80px" },
          children: t.jsxs("div", {
            className: "container",
            children: [
              t.jsx("div", {
                className: "fourth-header my-5",
                "data-aos": "zoom-in-left",
                "data-aos-duration": "1000",
                children: t.jsxs("h2", {
                  className: "text-end semi-bold",
                  children: [
                    " المتطلبات الأساسية ",
                    t.jsx("span", {
                      style: { color: "#F09713" },
                      children: "(التحديات)",
                    }),
                  ],
                }),
              }),
              t.jsx("div", {
                className: "orange-headline__",
                "data-aos": "zoom-in-left",
                "data-aos-duration": "1400",
                children: t.jsxs("h6", {
                  "data-aos": "zoom-in-left",
                  "data-aos-duration": "1500",
                  children: [
                    "تم اقتراح هذه المبادرات بعد إجراء بحث وتحليل البيانات بناءً على المتطلبات التي يمكن تعديلها في المرحلة ",
                    t.jsx("br", {}),
                    "الحالية  والفجوات في رحلة العميل",
                  ],
                }),
              }),
              t.jsxs("div", {
                className: "row",
                "data-aos": "zoom-in-left",
                "data-aos-duration": "1400",
                children: [
                  t.jsxs("div", {
                    className: "col-lg-3",
                    children: [
                      t.jsx("div", {
                        className: "custome-headline-for-rules",
                        children: t.jsx("h6", { children: "المبادرة" }),
                      }),
                      t.jsx("div", {
                        className: "orange-bg-tagline",
                        children: t.jsx("p", {
                          children:
                            "إنشاء مؤشرات الأداء الرئيسية لحساب TAT وFCR",
                        }),
                      }),
                      t.jsx("div", {
                        className: "orange-bg-tagline",
                        children: t.jsx("p", {
                          children: "إنشاء قياسات لحساب NPS وCSAT و CES",
                        }),
                      }),
                      t.jsx("div", {
                        className: "orange-bg-tagline",
                        children: t.jsx("p", {
                          children:
                            "بناء آلية تصعيد لتقديم الدعم من قبل الأقسام الأخرى",
                        }),
                      }),
                      t.jsx("div", {
                        className: "orange-bg-tagline",
                        children: t.jsx("p", {
                          children:
                            "انشاء دليل ارشادي للتواصل مع العملاء عبر الفروع",
                        }),
                      }),
                      t.jsx("div", {
                        className: "orange-bg-tagline",
                        children: t.jsx("p", {
                          children:
                            "رفع مستوى الاستثمار في بناء شخصيات العملاء لتوجيه الحملات بالشكل الصحيح",
                        }),
                      }),
                      t.jsx("div", {
                        className: "orange-bg-tagline",
                        children: t.jsx("p", {
                          children:
                            "انشاء سياسة لاتفاقيات مستوى الخدمة في جميع مراحل رحلة العميل",
                        }),
                      }),
                    ],
                  }),
                  t.jsxs("div", {
                    className: "col-lg-4",
                    children: [
                      t.jsx("div", {
                        className: "custome-headline-for-rules",
                        children: t.jsx("h6", { children: "نوع المتطلب" }),
                      }),
                      t.jsxs("div", {
                        className: "image___and____text___grid",
                        children: [
                          t.jsx("div", {
                            className: "arrow____icon",
                            children: t.jsx("img", { src: B, alt: "" }),
                          }),
                          t.jsxs("div", {
                            className: "arrow-text-flex",
                            children: [
                              t.jsx("h6", { children: "عمليات" }),
                              t.jsx("img", { src: kt, alt: "" }),
                            ],
                          }),
                        ],
                      }),
                      t.jsxs("div", {
                        className: "image___and____text___grid",
                        children: [
                          t.jsx("div", {
                            className: "arrow____icon",
                            children: t.jsx("img", { src: B, alt: "" }),
                          }),
                          t.jsxs("div", {
                            className: "arrow-text-flex",
                            children: [
                              t.jsx("h6", { children: "عمليات" }),
                              t.jsx("img", { src: kt, alt: "" }),
                            ],
                          }),
                        ],
                      }),
                      t.jsxs("div", {
                        className: "image___and____text___grid",
                        children: [
                          t.jsx("div", {
                            className: "arrow____icon",
                            children: t.jsx("img", { src: B, alt: "" }),
                          }),
                          t.jsxs("div", {
                            className: "arrow-text-flex",
                            children: [
                              t.jsx("h6", { children: "عميل داخلي" }),
                              t.jsx("img", { src: Tl, alt: "" }),
                            ],
                          }),
                        ],
                      }),
                      t.jsxs("div", {
                        className: "image___and____text___grid",
                        children: [
                          t.jsx("div", {
                            className: "arrow____icon",
                            children: t.jsx("img", { src: B, alt: "" }),
                          }),
                          t.jsxs("div", {
                            className: "arrow-text-flex",
                            children: [
                              t.jsx("h6", { children: "عميل داخلي" }),
                              t.jsx("img", { src: Tl, alt: "" }),
                            ],
                          }),
                        ],
                      }),
                      t.jsxs("div", {
                        className: "image___and____text___grid",
                        children: [
                          t.jsx("div", {
                            className: "arrow____icon",
                            children: t.jsx("img", { src: B, alt: "" }),
                          }),
                          t.jsxs("div", {
                            className: "arrow-text-flex",
                            children: [
                              t.jsx("h6", { children: "منظمة" }),
                              t.jsx("img", { src: il, alt: "" }),
                            ],
                          }),
                        ],
                      }),
                      t.jsxs("div", {
                        className: "image___and____text___grid",
                        children: [
                          t.jsx("div", {
                            className: "arrow____icon",
                            children: t.jsx("img", { src: B, alt: "" }),
                          }),
                          t.jsxs("div", {
                            className: "arrow-text-flex",
                            children: [
                              t.jsx("h6", { children: "عمليات" }),
                              t.jsx("img", { src: kt, alt: "" }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  t.jsxs("div", {
                    className: "col-lg-5",
                    children: [
                      t.jsxs("div", {
                        className: "image___and____text___grid",
                        children: [
                          t.jsx("div", {
                            className: "arrow____icon top-side",
                            children: t.jsx("img", { src: B, alt: "" }),
                          }),
                          t.jsxs("div", {
                            children: [
                              t.jsx("div", {
                                className: "custome-headline-for-rules",
                                children: t.jsx("h6", {
                                  children: "نوع المتطلب",
                                }),
                              }),
                              t.jsx("div", {
                                className: "arrow-text-flex",
                                children: t.jsx("p", {
                                  style: { fontSize: "16px" },
                                  children: "عدم وجود مؤشرات الأداء الرئيسية",
                                }),
                              }),
                            ],
                          }),
                          t.jsx("div", {
                            className: "span-number",
                            children: t.jsx("span", { children: "1" }),
                          }),
                        ],
                      }),
                      t.jsxs("div", {
                        className: "image___and____text___grid",
                        children: [
                          t.jsx("div", {
                            className: "arrow____icon",
                            children: t.jsx("img", { src: B, alt: "" }),
                          }),
                          t.jsx("div", {
                            children: t.jsx("div", {
                              className: "arrow-text-flex",
                              children: t.jsx("p", {
                                style: { fontSize: "16px" },
                                children: "عدم وجود مستويات الرضا",
                              }),
                            }),
                          }),
                          t.jsx("div", {
                            className: "span-number",
                            children: t.jsx("span", {
                              style: { top: "-6px" },
                              children: "2",
                            }),
                          }),
                        ],
                      }),
                      t.jsxs("div", {
                        className: "image___and____text___grid",
                        children: [
                          t.jsx("div", {
                            className: "arrow____icon",
                            children: t.jsx("img", { src: B, alt: "" }),
                          }),
                          t.jsx("div", {
                            children: t.jsx("div", {
                              className: "arrow-text-flex",
                              children: t.jsx("p", {
                                style: { fontSize: "16px" },
                                children: "لا يوجد آلية تصعيد",
                              }),
                            }),
                          }),
                          t.jsx("div", {
                            className: "span-number",
                            children: t.jsx("span", {
                              style: { top: "-6px" },
                              children: "3",
                            }),
                          }),
                        ],
                      }),
                      t.jsxs("div", {
                        className: "image___and____text___grid",
                        children: [
                          t.jsx("div", {
                            className: "arrow____icon",
                            children: t.jsx("img", { src: B, alt: "" }),
                          }),
                          t.jsx("div", {
                            children: t.jsx("div", {
                              className: "arrow-text-flex",
                              children: t.jsx("p", {
                                style: { fontSize: "16px" },
                                children: "لا يوجد سيناريو موحد",
                              }),
                            }),
                          }),
                          t.jsx("div", {
                            className: "span-number",
                            children: t.jsx("span", {
                              style: { top: "-6px" },
                              children: "4",
                            }),
                          }),
                        ],
                      }),
                      t.jsxs("div", {
                        className: "image___and____text___grid",
                        children: [
                          t.jsx("div", {
                            className: "arrow____icon",
                            children: t.jsx("img", { src: B, alt: "" }),
                          }),
                          t.jsx("div", {
                            children: t.jsx("div", {
                              className: "arrow-text-flex",
                              children: t.jsx("p", {
                                style: { fontSize: "16px" },
                                children:
                                  "الحملات التسويقية لا تصل للفئة المستهدفة",
                              }),
                            }),
                          }),
                          t.jsx("div", {
                            className: "span-number",
                            children: t.jsx("span", {
                              style: { top: "-6px" },
                              children: "5",
                            }),
                          }),
                        ],
                      }),
                      t.jsxs("div", {
                        className: "image___and____text___grid",
                        children: [
                          t.jsx("div", {
                            className: "arrow____icon",
                            children: t.jsx("img", { src: B, alt: "" }),
                          }),
                          t.jsx("div", {
                            children: t.jsx("div", {
                              className: "arrow-text-flex",
                              children: t.jsx("p", {
                                style: { fontSize: "16px" },
                                children:
                                  "لا يوجد اتفاقية مستوى الخدمة واضحة للموظف وإن كانت موجودة فلا يعلم بها العميل",
                              }),
                            }),
                          }),
                          t.jsx("div", {
                            className: "span-number",
                            children: t.jsx("span", {
                              style: { top: "-6px" },
                              children: "6",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    }),
  ux = "/assets/slide8-bd42de03.jpg",
  hx = () => {
    const e = "الفروع",
      n = "",
      s = "#f09713cf";
    return t.jsxs("div", {
      children: [t.jsx(an, { h1: e, h3: n, img: ux, bg: s }), t.jsx(dx, {})],
    });
  };
const mx = "/assets/banner9-84962f41.jpg",
  fx = () => {
    const e = "التواصل",
      n = "",
      s = "#fc74b5c9";
    return t.jsx("div", {
      children: t.jsx(an, { h1: e, h3: n, bg: s, img: mx }),
    });
  };
const px = () =>
    t.jsxs("div", {
      className: "container mb-5",
      style: { padding: "100px 0" },
      children: [
        t.jsx("div", {
          className: "SixthSlide",
          "data-aos": "zoom-in-left",
          "data-aos-duration": "1100",
          children: t.jsx("div", {
            className: "fourth-header",
            "data-aos": "fade-up",
            "data-aos-duration": "1200",
            children: t.jsx("h2", {
              className: "text-end semi-bold",
              children: " أفضل الممارسات (الحلول)",
            }),
          }),
        }),
        t.jsxs("div", {
          className: "sixth-row mb-3",
          children: [
            t.jsxs("div", {
              className: "sixth-right-side-column",
              "data-aos": "zoom-in-left",
              "data-aos-duration": "1200",
              children: [
                t.jsxs("div", {
                  className: "headline-sixth-column main-class",
                  "data-aos": "zoom-in-left",
                  "data-aos-duration": "1200",
                  children: [
                    t.jsx("h5", { children: "نطاق التحدي" }),
                    t.jsx("img", { src: Tt, alt: "" }),
                  ],
                }),
                t.jsxs("div", {
                  className: "sixth-card-content main-bg-class",
                  "data-aos": "zoom-in-left",
                  "data-aos-duration": "1400",
                  children: [
                    t.jsxs("div", {
                      className: "flex-column-title",
                      children: [
                        t.jsx("p", {
                          children:
                            "تصميم دليل تواصل مبني على دراسات تمكن و تساعد المعنيين به على إتمام عمليات تواصل فعالة و مهنية.",
                        }),
                        t.jsx("span", { children: ".1" }),
                      ],
                    }),
                    t.jsxs("div", {
                      className: "flex-column-title",
                      children: [
                        t.jsx("p", {
                          children:
                            "تحليل الفجوات في جودة التواصل الكتابية و دمجها في دليل التواصل مع مراعات مراعاة أن ليس كل التواصل المكتوب عبارة عن كلمات، و يحتوي على رموز تعبيرية.",
                        }),
                        t.jsx("span", { children: ".2" }),
                      ],
                    }),
                    t.jsxs("div", {
                      className: "flex-column-title",
                      children: [
                        t.jsx("p", {
                          children:
                            "تصنيف أنماط العملاء بشكل واسع مع توصيات بكيفية التعامل مع كل نمط في اطار معين.",
                        }),
                        t.jsx("span", { children: ".3" }),
                      ],
                    }),
                  ],
                }),
                t.jsxs("div", {
                  className: "headline-sixth-column main-class",
                  "data-aos": "zoom-in-left",
                  "data-aos-duration": "1400",
                  children: [
                    t.jsx("h5", { children: "نطاق التحدي" }),
                    t.jsx("img", { src: Tt, alt: "" }),
                  ],
                }),
                t.jsxs("div", {
                  className: "sixth-card-content main-bg-class",
                  "data-aos": "zoom-in-left",
                  "data-aos-duration": "1400",
                  children: [
                    t.jsxs("div", {
                      className: "flex-column-title",
                      children: [
                        t.jsx("p", {
                          children:
                            "حصر رحلات عملاء البنك و بناء رسائل فاعلية تناسب كل مرحلة و ضمان إيصالها للعميل.",
                        }),
                        t.jsx("span", { children: ".1" }),
                      ],
                    }),
                    t.jsxs("div", {
                      className: "flex-column-title",
                      children: [
                        t.jsx("p", {
                          children:
                            "تحليل الفجوات في جودة التواصل الكتابية و دمجها في دليل التواصل مع مراعات مراعاة أن ليس كل التواصل المكتوب عبارة عن كلمات، و يحتوي على رموز تعبيرية.",
                        }),
                        t.jsx("span", { children: ".2" }),
                      ],
                    }),
                    t.jsxs("div", {
                      className: "flex-column-title",
                      children: [
                        t.jsx("p", {
                          children:
                            "تصنيف أنماط العملاء بشكل واسع مع توصيات بكيفية التعامل مع كل نمط في اطار معين.",
                        }),
                        t.jsx("span", { children: ".3" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            t.jsxs("div", {
              className: "sixth-right-side-column",
              "data-aos": "zoom-in-left",
              "data-aos-duration": "1400",
              children: [
                t.jsxs("div", {
                  className: "headline-sixth-column red-border___",
                  children: [
                    t.jsxs("h5", {
                      children: [
                        t.jsx("span", { children: " تحديات " }),
                        "إطلاق منتج جديد",
                      ],
                    }),
                    t.jsx("img", { src: _s, alt: "" }),
                  ],
                }),
                t.jsxs("div", {
                  className: "sixth-card-content need-min-height",
                  "data-aos": "zoom-in-left",
                  "data-aos-duration": "1400",
                  children: [
                    t.jsxs("div", {
                      className: "flex-column-title",
                      children: [
                        t.jsx("p", {
                          children:
                            "لا يوجد اليات استجابة موحده عبر دليل تواصل شامل مما يؤدي الى تباين في الاستجابة من موظف لاخر.",
                        }),
                        t.jsx("span", { children: ".1" }),
                      ],
                    }),
                    t.jsxs("div", {
                      className: "flex-column-title",
                      children: [
                        t.jsx("p", {
                          children:
                            "كتابيا لا يوجد الية موحده للرد على الشكاوي او الاستفسارات على منصات التواصل الاجتماعي.",
                        }),
                        t.jsx("span", { children: ".2" }),
                      ],
                    }),
                    t.jsxs("div", {
                      className: "flex-column-title",
                      children: [
                        t.jsx("p", {
                          children:
                            "لا يوجد دراسة لانماط العملاء و كيفية التعامل معهم.",
                        }),
                        t.jsx("span", { children: ".3" }),
                      ],
                    }),
                  ],
                }),
                t.jsxs("div", {
                  className: "headline-sixth-column red-border___",
                  "data-aos": "zoom-in-left",
                  "data-aos-duration": "1200",
                  children: [
                    t.jsxs("h5", {
                      children: [
                        t.jsx("span", { children: "تحديات" }),
                        " سد فجوات رحلة العميل",
                      ],
                    }),
                    t.jsx("img", { src: _s, alt: "" }),
                  ],
                }),
                t.jsxs("div", {
                  className: "sixth-card-content need-min-height",
                  "data-aos": "zoom-in-left",
                  "data-aos-duration": "1400",
                  children: [
                    t.jsxs("div", {
                      className: "flex-column-title",
                      children: [
                        t.jsx("p", {
                          children:
                            "عدم وجود أولوية لتخصيص الموارد و ممكنات التواصل او تخصيص مخزون لسيناريوهات بعينها.",
                        }),
                        t.jsx("span", { children: ".1" }),
                      ],
                    }),
                    t.jsxs("div", {
                      className: "flex-column-title",
                      children: [
                        t.jsx("p", {
                          children:
                            "وجود فجوات في عملية التواصل مع العملاء في عدة نقاط في الرحلة",
                        }),
                        t.jsx("span", { children: ".2" }),
                      ],
                    }),
                    t.jsxs("div", {
                      className: "flex-column-title",
                      children: [
                        t.jsx("p", {
                          children:
                            "غياب منهجية للتعامل مع الأسئلة الشائعة و غياب ألية متابعة أثر الأسئلة الشائعه و مدى فعاليتها.",
                        }),
                        t.jsx("span", { children: ".3" }),
                      ],
                    }),
                    t.jsxs("div", {
                      className: "flex-column-title",
                      children: [
                        t.jsx("p", {
                          children:
                            "عدم وجود تدريب مستمر وبناء المعرفة للموظفين الذين يتعاملون مع العملاء",
                        }),
                        t.jsx("span", { children: ".4" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  xx = () => t.jsxs("div", { children: [t.jsx(fx, {}), t.jsx(px, {})] });
const vx = "/assets/10-6c0270d0.jpg",
  gx = () => {
    const e = "المشاركة المجتمعية",
      n = "",
      s = "#19e3bcc7";
    return t.jsxs(t.Fragment, {
      children: [
        t.jsx(an, { h1: e, h3: n, bg: s, img: vx }),
        t.jsxs("div", {
          className: "container mb-4",
          style: { padding: "70px 0" },
          children: [
            t.jsx("div", {
              className: "SixthSlide mt-5 mb-3",
              "data-aos": "zoom-in-left",
              "data-aos-duration": "1200",
              children: t.jsx("div", {
                className: "fourth-header",
                children: t.jsx("h2", {
                  className: "text-end semi-bold",
                  children: "تحليل تحديات التواصل",
                }),
              }),
            }),
            t.jsx("div", {
              className: "fifteen-slide-headline items___",
              "data-aos": "zoom-in-left",
              "data-aos-duration": "1300",
              children: t.jsx("h6", {
                children:
                  "يحرص البنك على وصول المعلومات إلى الجمهور، والتفاعل مع آرائهم، وتعزيز مشاركتهم في اتخاذ القرار حيث تجاوزت اجمالي عدد المشاركين في منصات المشاركة الالكترونية للبنك 7000 مشارك حيث ان لها اثر بالغ في الارتقاء بجودة الخدمة المقدمة للجمهور والحرص على وصول أصواتهم وآرائهم ومقترحاتهم للبتك من أجل النظر فيها ودر​استها وتحليلها والتجاوب معها وفقاً للأنظمة واللوائح المعمول بها، من أجل تطوير الأداء وتحقيق الأهداف المرجوة",
              }),
            }),
            t.jsx("div", {
              className: "border-bottom-left-side",
              "data-aos": "zoom-in-left",
              "data-aos-duration": "1500",
              children: t.jsx("p", {
                children:
                  "من الأمثلة للآراء والمقترحات التي لها أثر وتم اتخاذ قرار فيها من قبل البنك",
              }),
            }),
            t.jsxs("div", {
              className: "row",
              children: [
                t.jsxs("div", {
                  className: "col-lg-6",
                  "data-aos": "zoom-in-left",
                  "data-aos-duration": "1200",
                  children: [
                    t.jsxs("div", {
                      className: "headline-sixth-column item________",
                      children: [
                        t.jsx("h5", {
                          children: "نتائج الرأي او الاقتراح - الحل",
                        }),
                        t.jsx("img", { src: Tt, alt: "" }),
                      ],
                    }),
                    t.jsx("div", {
                      className:
                        "sixth-card-content main-bg-class classes fifteen-card",
                      style: {
                        border: "1px solid #30cccb",
                        background: "#e6fcf8",
                      },
                      children: t.jsx("strong", {
                        children:
                          "تم العمل على تحسينات في واجهات وصفحات الخدمة وتوزيع المحتوى بشكل يسهل من تجربة العملاء وتلبية احتياجاتهم بشكل مباشر وإطلاق موقع جديد",
                      }),
                    }),
                    t.jsx("div", {
                      className:
                        "sixth-card-content main-bg-class classes fifteen-card",
                      style: {
                        border: "1px solid #30cccb",
                        background: "#e6fcf8",
                      },
                      children: t.jsx("strong", {
                        children:
                          "تم اتاحة منتج تمويل السيارات لمنتجات العمل الحر للأفراد لتمكين الفئات",
                      }),
                    }),
                    t.jsx("div", {
                      className:
                        "sixth-card-content main-bg-class classes fifteen-card",
                      style: {
                        border: "1px solid #30cccb",
                        background: "#e6fcf8",
                      },
                      children: t.jsx("strong", {
                        children:
                          "تم العمل على تحسينات في واجهات وصفحات الخدمة وتوزيع المحتوى بشكل يسهل من تجربة العملاء وتلبية احتياجاتهم بشكل مباشر وإطلاق موقع جديد",
                      }),
                    }),
                    t.jsx("div", {
                      className:
                        "sixth-card-content main-bg-class classes mb-5 fifteen-card",
                      style: {
                        border: "1px solid #30cccb",
                        background: "#e6fcf8",
                      },
                      children: t.jsx("strong", {
                        children:
                          "تم اتاحة منتج تمويل السيارات لمنتجات العمل الحر للأفراد لتمكين الفئات",
                      }),
                    }),
                  ],
                }),
                t.jsxs("div", {
                  className: "col-lg-5",
                  "data-aos": "zoom-in-left",
                  "data-aos-duration": "1300",
                  children: [
                    t.jsxs("div", {
                      className: "headline-sixth-column items___",
                      "data-aos": "zoom-in-left",
                      "data-aos-duration": "1200",
                      children: [
                        t.jsxs("h5", {
                          children: [
                            " ",
                            t.jsx("span", {
                              style: { color: "red" },
                              children: "الرأي او الاقتراح - التحدي",
                            }),
                          ],
                        }),
                        t.jsx("img", { src: _s, alt: "" }),
                      ],
                    }),
                    t.jsx("div", {
                      className:
                        "sixth-card-content need-min-height classes fifteen-card",
                      children: t.jsx("strong", {
                        children:
                          "تم طرح استشارة عامة بغرض استشارة العموم ومعرفة مرئياتهم لقياس مراحل تجربتهم في الموقع الالكتروني لتحليلها والخروج بنتائج وقرارات تخلق تجربة عميل ومستخدم مرضية وتحسين مستوى الظهور لخدمات ومنتجات البنك على الموقع الإلكتروني",
                      }),
                    }),
                    t.jsx("div", {
                      className:
                        "sixth-card-content need-min-height classes fifteen-card",
                      children: t.jsx("strong", {
                        children:
                          "تم استقبال مقترح من شاب يعمل بالقطاع الخاص ويرغب بأخذ تمويل يمكنه من شراء سيارة تمكنه من العمل في تطبيقات التوصيل",
                      }),
                    }),
                    t.jsx("div", {
                      className:
                        "sixth-card-content need-min-height classes fifteen-card",
                      children: t.jsx("strong", {
                        children:
                          "تم استقبال مقترح من امرأه موظفه ومتزوجه وزوجها ذو دخل بسيط وتريد ان تستطيع ان تقترض من قرض الأسرة",
                      }),
                    }),
                    t.jsx("div", {
                      className:
                        "sixth-card-content need-min-height classes fifteen-card",
                      children: t.jsx("strong", {
                        children:
                          "تم استقبال مقترح خدمه و دعم و تمويل للأفكار و المشاريع السعودية لتحصل على الامتياز التجاري والفرانشايز",
                      }),
                    }),
                  ],
                }),
                t.jsxs("div", {
                  className: "col-lg-1",
                  "data-aos": "zoom-in-left",
                  "data-aos-duration": "1500",
                  children: [
                    t.jsxs("div", {
                      className: "headline-sixth-column main-class",
                      style: { opacity: "0" },
                      children: [
                        t.jsx("h5", {
                          style: { color: "#3bdbbc" },
                          children: "الحل",
                        }),
                        t.jsx("img", { src: Tt, alt: "" }),
                      ],
                    }),
                    t.jsx("div", {
                      className: "number-boxes",
                      children: t.jsx("span", { children: "1" }),
                    }),
                    t.jsx("div", {
                      className: "number-boxes",
                      children: t.jsx("span", { children: "2" }),
                    }),
                    t.jsx("div", {
                      className: "number-boxes",
                      children: t.jsx("span", { children: "3" }),
                    }),
                    t.jsx("div", {
                      className: "number-boxes",
                      children: t.jsx("span", { children: "4" }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  jx = () => t.jsx("div", { children: t.jsx(gx, {}) });
const _x = "/assets/chart-105ec466.png",
  Bo = "/assets/logo-2aaad725.svg",
  yx = "/assets/logo1-30cb8491.svg",
  Nx =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIUAAACGCAYAAADzTkmSAAAAAXNSR0IArs4c6QAADm9JREFUeF7tnVtsVMcZxz9DMY2xMYUECLAmCgoFDIraqAFkSluJNsFFJVCV4jz0IqWBB3goUUGq8hCkclErBSnGUiOVh0KqWEJRIUg4XG1jHGNzWYPv+G4vYHzZtdf2ruNde6tvydL1es+emTkzcy57RrL8sHP95rcz3/efOWdTfBOhENjJtkCUBVJsKGweYi1gQ2EzMc0CNhQ2FDYUNgPqFrBXCnUbJV0OG4qkm3L1AdtQqNso6XLYUCTdlKsP2IZC3UZJlyMpofD5fOAb9cPoqB/8Pl/cSX/xpQWQNucFSEtLs6GwigVw4js7XNDV5YK+3n7o73dDV0c3+Px+8I3GB0Fp7FnLl4XhwP8vLXwRlmctg1VrVlrFVNbVKRCChvqH4b/GhofQ1ekSPmmrVq8Mg7J6zcrwn1VWFVNvH6Pjg3C9+T9Q1fYVdH6+VDgEag2EUlIgd9vPISdnPWRl6d8ftf4qfW46KCIgVHZ9CbU9Zc/HlXbnF/Adz2JWO2gu5/OPQUlpxfN6cnLehN3v7oC8vJ2a65ZdgWmg6B3phOvNn8GF+gJAMGLT7NbXYXbb67Lt97w916Mn8KCmcVr7jqylgIAcPLTfNKuH4aHA1aDQ+bcpq0K8mZ8xPB/Sb23TDYq792rgaW9/wvZ35+0wBRyGhQJXhk/K3leFIXoW0st2woyxdF3AuHK1DALBIFHbRoYjFAqB4aDAraHQeRQu1J8kMnB0pu82/QhSu1ZTl9NaYMA9CJVVTupqDh7aB3v2/gEyMzOoy4oqYDgoLtQVQGH1kbg+A4kRZnoWwZw7b5Fk5ZrnQU0DuB71MNWJPgfCYQSHFIEwDBQsW0W8GUgJpkL6zZ2QEkhlmiDWQsWlFeD3j7EWD5czwpZiGCi0rg6xMyE7NPUOj8DN8tuagIgU1nvVQCgmJyf18ynQdzhVeQiut5zhYtBIJehToG8hKzW3tENzSwfX5nA7wRBWdtIVCtwuPix6G/A/74RbSEbxbt7VKtaHqwSuFrzT2rWr4fRnBVK1Dd2gQN3h2LXfMjuTJMaXtYXEqpgkfaPJg9vJ+S/PSANDFyjQfzhV9RcauzDllaVuKqmYTJ1WKJSZORfyTx6D3F9u4Vlt3LqkQ1HoPBION2UkWaEpiYrJa7wnTx4Pn6WITFKhkAlExGgZJbuFh6YXvyoWOUfT6hbtgEqDQg8g0Jqi1c2ep31wz1krFQps7MjRv8Kevb8X0q4UKPQCAi0megvRomJqnVFRW4lwKPCY+5Ob72sdP3N50eomDxWTeXAA4agkZ9ObWqqYVlYoFO3uB/Dn8xu4dpilMlGhKesBGMsYlMpgVFJceo5ruCoMCpHCFK1RRamb9Q3N0CHhDqjaeFHHKCk9z+2UVRgUv/q6BgItv4bZE+IvzqoZbYY/PXxAxjuJUjFZ+pmbuyWsfPJIQqA40eaDj9ufXZ93eA7DwuFTPPqqqY45ldtgpne+pjqiC4tWMVk6yisi4Q7Fpb5xeO+Bd8qYFnpPgWPwMMs4uZXhrW7KUDFZBo/byNp1q1iKPi/DFQrX2CT85u4g4P/YlDZeB6/2/Um37YR3aHqryglu9/SLw5pmg0NhHv4FVygO1I/A2SfKl0xSgy54ZeAAZHxzi8Pw6avgpW4GAkG4cu3/jxXQ90RsCa2KJzcoKjwB2HVviGi0S4ZOwMtDJ4jy8sz0Ql0OzHq8QnOVeqmYNB2/V32dOUzlBsXGcnfcbUNpIAtGzob9jJmTU/0PmoHT5kUgEAytSU8Vk7Tv+IzJ+QtsF5e4QIFbBm4dtAm3k5VPd0nzM3hdvNFbxSS1M6vaqRmKRM4lSedxpcCwdcHoWZLsmvNoVTeNoGKSGgGdTmf1ddLs/KKPaE2CuvWoArL8DK3qplFUTFJb5xcco35sQNNKoXWViB1YxjcVsLz/A6HbiVZ100gqJgkYLKuFJihYfYlEg5HhZ7A+VmhEFZMEDNrVQhMUtBEHyQAieUTK46wXb4yqYqrZlTYSYYZCxCoROzhR8jirumlUFVMNCvycJhJhhgKFKhSsRCdR2wmtuml0FVNtHmhWCyYo0MHErUNWQjAcno9gnv8ytyZp1U0zqJiJjIOXcVDlJHmynQmKjx6OwqluP7cJIq2IZ9hKq26aQcVUsyPp0ToTFCIdTLWBzfNdglfcH2iWx2nVTZqXkaiNQa/PSbcQaijqRibg7UqPXuMKt8vLzyBVN82kYqpNTGv7HdUthBqKj9t8cOLbW1VqHRD5OQ95nPTijdlUzER2J9lCqKGQFXWQAqXFzyB9aZpZDsBIbEZyl5MKCm8wBNmlAyRtS82j5VaXWmhqVhVTaQIwCmltT/xyFSoo4t2/lDr7CRpDP2NF33uQFqin6pKautne4YKGxmaqOo2eWe0eJxUUeoWiNEam3U7U1E0zq5hKdlPzK6igMJo/oTRolMeXeE8Qha2JHiu02tYRsVde3g7ILziu+F2jgiL7hhu8gek3tWm+ybLy0oStSqGpWQ/A1GysdpxODIVRncxEBiCVx5Uu3sh8GYnaRPL+vN/dpH2loLmtzXsAWutT8zOU1E0rqJhKtsNrerhixEvEK8W/usfg8EP6y7laJ5RXeZTHl3kOK97qit1CrKRixrPh6TMFiu/PIobCKEqmFkgS+Rmx6qYVDsBYlU1iKNSe/tIyWTLLojyO20nsQ8+xoamVVMx49sVXI2Foqmn7MEs4SgpYvFtdEXWT5yuVSfsjO1+isJR4pbAaFDgJsfJ4RN20oooZC12iMxBiKPS8QyHyWxQtj0e2ECuqmLE2THS3IumhiBgL/YwlAwUw43IulF67K5JDQ9RtQ0E4DfjQ85x//xeaSvi/QJ6wC9Ky2VAQmnrC1wuB1koIFRXB3KZ28HrlPRFP2EVu2WwoVEwZCvphfKAOJseibqi7ByGzuQ2GrpYBeIz3xhqtdNhQJLBg0NsFwaEWCE0m+IXAO9UAl0otBQcXKN6qGoT6YbKfVtRKsYzyE2MeCA61Tl0d1Bq+Uw2Ohhbovl+nltPwn3OBwio6Ba4ICEPQq8GZbO0AR2MLdBeXG37ylTrIRbyygsyNq0NgoBbQh+CS8O14V0oAbt/nUp3MSrjI3Ga4iqdk1LiOJM8Z+BYOR08/dHc/4lmzsLoSXckjFq/MenRO5EjyMr17EBy9fdD9xUXDO6Vcjs6NfJM73pyGxodh3NNE50jyggPrMXjEkuhGN/FK4RqbgI3l+j4uSDJnXBxJkoZI8xg0Ykn0+CAxFGgDo1/c5e5Ikk48ST4DRSz4W6clN84p9poKCqOGpbg6YFSBMrXhkwEiFrVHB6mgMGIEItWR5EmcjhEL14eBzj4egwMNxri8q7sjyQsQHSIWfD0zKpqKIXwoBJOTk5DimwiF1MZphGc/wo7kcCcEB1vVumu+zyVFLIme+UCjUW0fWEDPMxBDO5IcEZz7sBUyK51CzlhI3mZDDYUefkXYkfQ0wsTIY46mN35Vmf1umFt5j+sZS/7J45Cn8rPY1FDIflLMtI4kT+Y4RiwkvwNCDYUsvUL4eQXPSZNVFzqljS0At6uZzljU9InIMJigELmFWNqR5ASPI31OWEanPWNRC0U1QSFqC0kWR5ITG8+qoYhYSLYOpugjMiCe6qbhziu4zpqcyhxP+wEulyhGLCRRh6aVAgvzOkq3HUm+0DgCAYDLpdMiFpKoQzMUKGRt/NrD/GYb25HkC8O02qIiFodjKTjvk/9sFJOjGekAy+sJIo7khLcz8Q1qwTZLmurdg3A+dwvkrFlJPGRNUNCuFrYjSTwv3DJipFLyzlbITE0lrlMTFNgKyWphO5LE88E948EfrAP8o0maoVBbLVCaRok64cM2ND228xJb4NkqkQuZqbOIy2gKSaNbibda2I4k1TwIyZz/4w2Q99qr1HVrXimwRVwt8PTU5Z8IdyAw1Aq2I0k9F1wL4Crh3LWdqU4uUGDLeNv7j1Wdz7aK8WGmztiF+FkAncu187/HVCE3KLD17RevQnmPCe5JMpnKPIVwy8CtgzVxhaJrZBR+du4iDI2L/xVC1gFbvRxuG6hLZOGhGWPiCgX24Z91TfBhpfVfD8Rob+HFWJ3L6I5xhwIr/93VG3CxyyXcAHYDUy3AoknEs6EQKIbGx+Gn54qge2TUnjdJFtASbcR2UQgU2EjtgAe2F121/QsJUPDwI2K3DwSD6Io/7fg+b26D/WW3aIvZ+SktUPzOVljHGH4qbR/CoMAG/+6sCf/ZSYwFjqx/A/Zkf5975UKhsMHgPl/PK+TlWCqtFkK2j+jG9t2ogMKWdnEWSrKaRQIRMaVwKLAhGww+5MoAAnsqBQp7K9EOhSwgpEJhg8EOhkwgpENhg0EHxtzUWXB0/Ruwm+FuBF1LU3NL2z6imy1/0gv7yips5TPBzKEwdXrLZq46BCkoukCBncOTVTxytyXx6VOVs3ghnN7yE+rrdKSTrpZPNygiHbNFrqlTJEqUUgMh+nPdocDO2NsJhG9L5W/eoMt2EQuMIaDATuEJ66d1TUknjaMzuTd7FfV1fJpvPm1ew0AR6Tj6GvtvVCTF9T70HfI3b9R0W4p2wknyGw6KSKfxpBX9DSs6ogjDwR+ug5zFi0jmSHoew0JhRTiMDkPE5oaHItJRvOb3aW2jKbcVs8BgOiiifY5/OGvg5pOnht5aIg7knuxVuukNrPuOaVaKeAPEZ00Km9sMAwiC8O5rK2Dr8qWG9RdIQDE1FFOk855eqBlwQ1GnC2rcHvBKeAYFIcDrcFuXL4NNLy9ifjKLZKJk5rEMFLFGq3V7oGbAA3XuwTAsGOpqiWTwLAIByMpIh+wF82DT4kUQfludBZNloVCaKwQDAcHUNaL8Enp82Qc+bYX/rTr5SjZKOigs+MXmPiQbCu4mNX+FNhTmn0PuI7Ch4G5S81doQ2H+OeQ+AhsK7iY1f4X/AzVVxTrJIiWCAAAAAElFTkSuQmCC",
  wx = "/assets/chart2-b528d9a0.png",
  kx = "/assets/last-f2cb5465.jpg",
  Sx = () => {
    const e = "برنامج ولاء العميل",
      n = "",
      s = "#469c09cc";
    return t.jsxs("div", {
      style: { marginBottom: "100px" },
      children: [
        t.jsx(an, { h1: e, h3: n, img: kx, bg: s }),
        t.jsxs("div", {
          className: "container",
          style: { marginTop: "100px" },
          children: [
            t.jsx("div", {
              className: "SixthSlide",
              "data-aos": "zoom-in-left",
              "data-aos-duration": "1000",
              children: t.jsx("div", {
                className: "fourth-header",
                children: t.jsxs("h2", {
                  className: "text-end semi-bold",
                  children: [
                    "تحليل الوضع الراهن ",
                    t.jsx("span", {
                      style: { color: "#469c09" },
                      children: "(التحديات)",
                    }),
                  ],
                }),
              }),
            }),
            t.jsxs("div", {
              className: "row",
              children: [
                t.jsxs("div", {
                  className: "col-lg-7",
                  "data-aos": "zoom-in-left",
                  "data-aos-duration": "1300",
                  children: [
                    t.jsxs("div", {
                      className: "sixteen-headline",
                      children: [
                        t.jsx("div", {
                          className: "headline_______",
                          children: t.jsx("p", { children: "مجموعات التركيز" }),
                        }),
                        t.jsxs("div", {
                          className: "row",
                          children: [
                            t.jsx("div", {
                              className: "col-lg-4",
                              children: t.jsxs("div", {
                                className: "charts",
                                children: [
                                  t.jsx("div", {
                                    className: "inside-headline",
                                    children: t.jsx("h6", {
                                      children: "صافي نقاط الترويج NPS",
                                    }),
                                  }),
                                  t.jsxs("div", {
                                    className: "three-dote-flex",
                                    children: [
                                      t.jsxs("div", {
                                        className: "dote1",
                                        children: [
                                          t.jsx("p", { children: "المعترضون" }),
                                          t.jsx("span", {
                                            style: { background: "#e71f12" },
                                          }),
                                        ],
                                      }),
                                      t.jsxs("div", {
                                        className: "dote1",
                                        children: [
                                          t.jsx("p", { children: "السلبيون" }),
                                          t.jsx("span", {
                                            style: { background: "#ed9718" },
                                          }),
                                        ],
                                      }),
                                      t.jsxs("div", {
                                        className: "dote1",
                                        children: [
                                          t.jsx("p", { children: "المروجون" }),
                                          t.jsx("span", {
                                            style: { background: "#19e3bc" },
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  t.jsx("div", {
                                    className: "chart__image",
                                    children: t.jsx("img", {
                                      src: _x,
                                      alt: "",
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            t.jsx("div", {
                              className: "col-lg-4",
                              children: t.jsxs("div", {
                                className: "box__texts",
                                children: [
                                  t.jsxs("div", {
                                    className: "little-small-headline",
                                    children: [
                                      t.jsx("h5", {
                                        children: "المبادرات المقترحة",
                                      }),
                                      t.jsx("img", { src: Bo, alt: "" }),
                                    ],
                                  }),
                                  t.jsxs("div", {
                                    className: "number-and-text-item",
                                    children: [
                                      t.jsx("p", {
                                        children:
                                          "إبلاغ العميل بسبب الرفض عبر الرسائل النصية",
                                      }),
                                      t.jsx("span", { children: ".1" }),
                                    ],
                                  }),
                                  t.jsxs("div", {
                                    className: "number-and-text-item",
                                    children: [
                                      t.jsx("p", {
                                        children:
                                          "منح حوافز للعملاء المتضررين من تأخير الصرف",
                                      }),
                                      t.jsx("span", { children: ".2" }),
                                    ],
                                  }),
                                  t.jsxs("div", {
                                    className: "number-and-text-item",
                                    children: [
                                      t.jsx("p", {
                                        children:
                                          "توفير خدمة الدفع المبكر وتوضيح آلية الدفع",
                                      }),
                                      t.jsx("span", { children: ".3" }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            t.jsx("div", {
                              className: "col-lg-4",
                              children: t.jsxs("div", {
                                className: "box__texts",
                                children: [
                                  t.jsxs("div", {
                                    className: "little-small-headline",
                                    children: [
                                      t.jsx("h5", {
                                        style: { color: "red" },
                                        children: "أبرز التحديات",
                                      }),
                                      t.jsx("img", { src: yx, alt: "" }),
                                    ],
                                  }),
                                  t.jsxs("div", {
                                    className: "number-and-text-item",
                                    children: [
                                      t.jsx("p", {
                                        children:
                                          "رفض طلبات التمويل دون إعلام العميل بأسباب الرفض",
                                      }),
                                      t.jsx("span", { children: ".1" }),
                                    ],
                                  }),
                                  t.jsxs("div", {
                                    className: "number-and-text-item",
                                    children: [
                                      t.jsx("p", {
                                        children: " تأخير صرف مبالغ التمويل",
                                      }),
                                      t.jsx("span", { children: ".2" }),
                                    ],
                                  }),
                                  t.jsxs("div", {
                                    className: "number-and-text-item",
                                    children: [
                                      t.jsx("p", {
                                        children:
                                          "صعوبة فهم آلية السداد المبكر",
                                      }),
                                      t.jsx("span", { children: ".3" }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    t.jsxs("div", {
                      className: "row",
                      children: [
                        t.jsx("div", {
                          className: "col-lg-5",
                          children: t.jsxs("div", {
                            className: "sixteen-headline min-hight-calcuate",
                            children: [
                              t.jsx("div", {
                                className: "headline_______",
                                children: t.jsx("p", {
                                  children: "تحليل المشاعر",
                                }),
                              }),
                              t.jsx("div", {
                                className: "charts ",
                                style: { border: "2px solid white" },
                                children: t.jsx("div", {
                                  className: "inside-headline",
                                  children: t.jsx("h5", {
                                    style: { color: "black" },
                                    children: "معدل الرضا (تويتر)",
                                  }),
                                }),
                              }),
                            ],
                          }),
                        }),
                        t.jsx("div", {
                          className: "col-lg-7",
                          children: t.jsxs("div", {
                            className: "sixteen-headline min-hight-calcuate",
                            children: [
                              t.jsx("div", {
                                className: "headline_______",
                                children: t.jsx("p", {
                                  children: "المسح الداخلي",
                                }),
                              }),
                              t.jsx("div", {
                                className: "charts ",
                                style: { border: "2px solid white" },
                                children: t.jsxs("div", {
                                  className: "row",
                                  children: [
                                    t.jsx("div", {
                                      className: "col-lg-8",
                                      children: t.jsxs("div", {
                                        className:
                                          "some-of-important-content-border",
                                        children: [
                                          t.jsxs("div", {
                                            className:
                                              "some-of-important-content",
                                            children: [
                                              t.jsx("p", {
                                                children:
                                                  "إرسال رسالة للعميل لإخباره بحصوله على حوافز حال تسجيله في برامج الادخار",
                                              }),
                                              t.jsx("span", { children: ".1" }),
                                            ],
                                          }),
                                          t.jsxs("div", {
                                            className:
                                              "some-of-important-content",
                                            children: [
                                              t.jsx("p", {
                                                children:
                                                  "تصميم بوابة لوسطاء التمويل في كافة تطبيقات البنك",
                                              }),
                                              t.jsx("span", { children: ".2" }),
                                            ],
                                          }),
                                          t.jsxs("div", {
                                            className:
                                              "some-of-important-content",
                                            children: [
                                              t.jsx("p", {
                                                children:
                                                  "توفير خصومات خاصة في المناسبات والمهرجانات الموسمية الخاصة بالبنك وشركائه",
                                              }),
                                              t.jsx("span", { children: ".3" }),
                                            ],
                                          }),
                                          t.jsxs("div", {
                                            className:
                                              "some-of-important-content",
                                            children: [
                                              t.jsx("p", {
                                                children:
                                                  "منصة للشركات التي من شأنها أن تساعد المنتجات التجارية في التسويق",
                                              }),
                                              t.jsx("span", { children: ".4" }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                    t.jsxs("div", {
                                      className: "col-lg-4",
                                      style: { padding: "0" },
                                      children: [
                                        t.jsx("div", {
                                          className: "inside-headline",
                                          children: t.jsx("h6", {
                                            style: {
                                              color: "black",
                                              fontSize: "17px",
                                            },
                                            children: "الحوافز حسب النوع",
                                          }),
                                        }),
                                        t.jsx("div", {
                                          className:
                                            "chart________image text-center",
                                          children: t.jsx("img", {
                                            src: Nx,
                                            alt: "",
                                          }),
                                        }),
                                        t.jsxs("div", {
                                          className:
                                            "black-shape-radius-text mt-1",
                                          children: [
                                            t.jsxs("div", {
                                              className: "black____shape",
                                              children: [
                                                t.jsx("p", {
                                                  children: "خدمات",
                                                }),
                                                t.jsx("span", {
                                                  style: {
                                                    background: "#0a9ba5",
                                                  },
                                                }),
                                              ],
                                            }),
                                            t.jsxs("div", {
                                              className: "black____shape",
                                              style: {
                                                position: "relative",
                                                left: "7px",
                                              },
                                              children: [
                                                t.jsx("p", {
                                                  children: "كسب النقاط",
                                                }),
                                                t.jsx("span", {
                                                  style: {
                                                    background: "black",
                                                  },
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        t.jsxs("div", {
                                          className:
                                            "black-shape-radius-text mt-1",
                                          children: [
                                            t.jsxs("div", {
                                              className: "black____shape",
                                              children: [
                                                t.jsx("p", {
                                                  children: "هدايا",
                                                }),
                                                t.jsx("span", {
                                                  style: {
                                                    background: "#469c09",
                                                  },
                                                }),
                                              ],
                                            }),
                                            t.jsxs("div", {
                                              className: "black____shape",
                                              style: {
                                                position: "relative",
                                                left: "7px",
                                              },
                                              children: [
                                                t.jsx("p", {
                                                  children: "خصومات",
                                                }),
                                                t.jsx("span", {
                                                  style: {
                                                    background: "#13baeb",
                                                  },
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        t.jsxs("div", {
                                          className:
                                            "black-shape-radius-text mt-1",
                                          children: [
                                            t.jsx("div", {
                                              className: "black____shape",
                                            }),
                                            t.jsxs("div", {
                                              className: "black____shape",
                                              style: {
                                                position: "relative",
                                                left: "7px",
                                              },
                                              children: [
                                                t.jsx("p", {
                                                  children: "جميع ما سبق",
                                                }),
                                                t.jsx("span", {
                                                  style: {
                                                    background: "#545767",
                                                  },
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                t.jsx("div", {
                  className: "col-lg-5",
                  "data-aos": "zoom-in-left",
                  "data-aos-duration": "1500",
                  children: t.jsxs("div", {
                    className: "sixteen-headline min-hight-calcuates",
                    children: [
                      t.jsx("div", {
                        className: "headline_______",
                        children: t.jsx("p", {
                          children: "إجمالي عدد الشكاوى(يناير-مايو 2023)",
                        }),
                      }),
                      t.jsxs("div", {
                        className: "charts ",
                        style: { border: "2px solid white" },
                        children: [
                          t.jsx("div", {
                            className: "inside-headline",
                            children: t.jsxs("h5", {
                              style: { color: "black" },
                              children: [
                                "تحليل الوضع الراهن ",
                                t.jsx("span", { children: "(التحديات)  " }),
                              ],
                            }),
                          }),
                          t.jsx("div", {
                            className: "text-center mt-2 image-resiing",
                            children: t.jsx("img", { src: wx, alt: "" }),
                          }),
                          t.jsxs("div", {
                            className: "inside-headline ",
                            style: {
                              display: "flex",
                              alignItems: "center",
                              gap: "10px",
                              justifyContent: "end",
                            },
                            children: [
                              t.jsx("h6", {
                                style: { color: "black" },
                                children: t.jsx("span", {
                                  style: { color: "black" },
                                  children: "أهم أسباب الشكاوى",
                                }),
                              }),
                              t.jsx("img", {
                                style: { position: "relative", bottom: "6px" },
                                src: Bo,
                                alt: "",
                              }),
                            ],
                          }),
                          t.jsxs("div", {
                            className: "row",
                            children: [
                              t.jsx("div", {
                                className: "col-lg-6",
                                children: t.jsxs("div", {
                                  className: "col-lg-side-content__",
                                  children: [
                                    t.jsx("p", {
                                      children:
                                        "تعثر عملية إكمال الطلبات إلكترونيا",
                                    }),
                                    t.jsx("span", { children: ".1" }),
                                  ],
                                }),
                              }),
                              t.jsx("div", {
                                className: "col-lg-6",
                                children: t.jsxs("div", {
                                  className: "col-lg-side-content__",
                                  style: { height: "70px" },
                                  children: [
                                    t.jsx("p", {
                                      children: "التأخر في معالجة طلب القرض",
                                    }),
                                    t.jsx("span", { children: ".2" }),
                                  ],
                                }),
                              }),
                              t.jsx("div", {
                                className: "col-lg-6",
                                style: { opacity: "0" },
                                children: t.jsxs("div", {
                                  className: "col-lg-side-content__",
                                  style: { height: "70px" },
                                  children: [
                                    t.jsx("p", {
                                      children: "التأخر في معالجة طلب القرض",
                                    }),
                                    t.jsx("span", { children: ".2" }),
                                  ],
                                }),
                              }),
                              t.jsx("div", {
                                className: "col-lg-6",
                                children: t.jsxs("div", {
                                  className: "col-lg-side-content__",
                                  style: { height: "70px" },
                                  children: [
                                    t.jsx("p", {
                                      children:
                                        "رفض طلبات التمويل دون إعلام العميل بأسباب الرفض",
                                    }),
                                    t.jsx("span", { children: ".3" }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    });
  };
const zx = "/assets/1-d51fc8b3.svg",
  Ex = "/assets/2-1113a506.svg",
  Ax = "/assets/3-2e7e11d8.svg",
  Cx = "/assets/4-b2c55168.svg",
  bx = "/assets/5-f481ae5b.svg",
  Px = "/assets/6-8182d0c4.svg",
  Tx = "/assets/1-a7322159.svg",
  Rx = "/assets/2-90cff347.svg",
  Lx = "/assets/3-bcb6acf5.svg",
  kr =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAADoCAYAAAD8DoSbAAAAAXNSR0IArs4c6QAAC/ZJREFUeF7tnHtwVNUdx7/n7t1HXoR3sluwvPYuYrLhoSAqKiLUbABpLTLUmVazQZSp9VHb+pzpdBytRc2NoIx1Rlun1eyWAtYWRAQR6gMqj9woOLkBBPYmQQFzQx6bfdzTuclms5FHFoZz6KTJTCZ/5M5+9vu75/x+v3PO73cIOP8Qzjz0A89q8T9ueGrZyOHuA8VTFm08n9dyQSaVNzy4jAjW4RMum/LJ7MsZA1fvfnHxMf3QtCg1Box1Fa2fN750NVOFf9293H+85ejNBqUjRud7X1sgLXmdKbCy6oX76xoPLjaI4ZJc3uXzx92zginwrb0VT9bp6uOUGHa3a+JTt467+0mmwMo9K1/WmmrupcSAx1m4ap576TKmwOCeles0Xb3VIHG4XYWvz3cvLWUL3LVyS11TzUwQA2NdhX+eJy29kylwdRcQMYxxeV+d67nnbqbANbte3KjpNXNAYhjrKlrp89x7HzMgpZSs3rNiXb1eM5/ANGnR8z7P0odZAoVgVXmwTq+9jVABkmvisz6p7BGmwIAiv6np6iLBEOF2Fj4917PkcZZAS2W1/GZdo3q7YIjUk+992je+7AmmwIAiv6Xp6kLBEONuZ+GzzBUGFbkypKs/EgzRkJze5SWesscYKywPaHrtraZCyVlUXuLxP8oDOF8wxJjkLKpgDRQDSnmlptfOFQwx6nF5Xyp2+x8lhNB0VZ5XikEpTQVGJJd3la8TaLADVsl/05rUEsEQw5587yvFHv9vmAKDivz3kK6aJm11O4teKZFKf80UGFDK15rv0GKIYbfTu8on+X9FCImzM6lS8bam1/jMaeFxFa4odpc9zBZYLf9La1TnmL5Uyi960ecpfYgtUKl4T9NrZppAj7NwRbFU9iBjoLxV09VrO6OFd2WJ5L+f6aCpVOSP6nR1aodJnUUv+aTSXzAFBhR5h6arkzuB3pd9kv8+tsAq+TOtSS3iB1Tk3ZquFvIE7tF0teASAfkMmhST8gHu0nTVy20eBlJGacLTPMB2WijyfzRdnZjiS03XxjAA/w8ATZOyzGlOMyk/YGLQmNGCj0LuwEQ8NMMTQ4U9okWHpzHDU58FdgTgn3NUyCPip3oaLilGP7CXRcYFrA9TfOkleoemp2G5ejpNIWPg6YkwY6AidydRLu+qEndHqs/UpNyBybzUzUlhMtXnBdyr6eoVHYkwF4XV5VVaY+0EfkBFVjRdvZwjsKJa02vG92Wg/Lmmq54UhWaKwXRt8YWmqxJP4D5NV919GFgl79ea1HE8FX6p6erYfuDZcqkLSaL6TXrOzLTfpD3M03Eyw33icwcq8iV33swT4e/Gwz4MTBwjMF/MJE3KC5hMovqBZ/LiF+K8+7xJu9cWnAZNP/Dce18XMEovqUn5nK4ll9y8Dp37gRc9Ee7eNuFRqRBI3RjqB57hbZ6/p0kxKa9D5+RuYj/wYuU0SZMmaqKYn+NzB3aXt3RWfTFX2A+86NHi/8+kzIs/vjsP+4E9Ru35x0NF7vsmTc5DXgU8/UB2vrTPvsPksTqvNJE7MFmpwEshZ2BqtQmnrI17QWt3JTsnhZ9qujqlo2TX5a3wuf2/ZF1P84mmq1dyA6Z2I3hchTL7jhJF/remq9M6Gjx4ACsVeVudrk5P1OqXs2/SqSr/UGuqvYYbsFKRP6jT1esSwBd8kt/se2Ja9bVZ09XruQErFfn9Ol29obM5oOj5EqnUbCVjqTClDSnf+1yxx/8IY2D5u5peO6uzOaBwuc9TZnbnsVMYrJLXh5rU2dyAgdRWMpf3Dz63/zG2CpWKd0J6zS2dnsb7bLHb/zhTYECR/6HpajE3YLBaXhdq7OiwNFvJfu+TSp9grLCz4ZEjUF6j6eq8hKd5xif5n2SskDMw0bRqNh6b3XnsFXIHBhR5tXlrBDeF/IGdnc4L+CnkDQxWVwRDjTU/5DnxA1rnjQO8XJucBPKKFt0KecTDgNKtUOIO5JHT9FDY54EeHnlp6sTnAgykuDYuqf534iGP1VNqEuXlsCDtvjWCzy5GMCXzTvSQmueHMXb3YqSsLRI9M2ZtIkOgIm/QdPXmRLf6qyWSfxlTYFCRN4Z09aZEivEnn+RfwhSYuuSWnN6/+CT/XUyBAUXeounqjETEf8snlf6ULbDHPk1h0CeV3cEWqFRs1/Saqzv7LYpWl7hLFzMBmvd8AbD0vGrEu8Yn+RcxBQYUObl96XEWri2Wym5nDUxu0PICJregmQJNX9l5bVOP21vYvcMzAS+Fwrd9kv/HTAbNGU2a733H5/HfRgiJsgtPSsVOTa+ZlIgW60sk/wLGwO5OZ4+raGOxu3Qea2Dq7S2bSyR/MWtgd12by7u12O2fwxrYXdCaX/ihz1M2mzWwu3SeCzClK0jiAlTKazS9dnQip9nmk/w3szbpQU1XRyaAH/kk/0wmwEQAFoPV8uFQo+pMAHf6JP8MQkjkonsaSqlgRvygIodCujq8Yws6v3B3sadsOlNgQJHrNF0dmlBY5ZP8U1kBLQCEoPLcsbrGQ4NAreZR0Bcl0l2TAUTTvVAl7RIlSqkF2CWsUzadOPzNwRwxYxC+P3RC7VzpZwUA4umGqPMBisAusmb3pm8Pf6NmCY7BGJ1XGJo//no3MMpI16znCYSwpqr8ZH3jgSzDkoFRwwsa5kmzxgAjTGB7OiO1V2DXdABAQghZPq0KNtQ3qgOixIaxzoLQ1e754/OQR+sBOAHz0KsrGDsAmF8knPpFksCuRNf84MQDBNiHWtjIOIxDCBAyUWvdWBU4Uv9tbS61iBjzvSsOzByz4EoDAzra4wkIMX9FiDYrrNnxaHygSDPbbTZ82XXUkArsGIUNbQ2TDh7d90CYfjvQnilYYojZBMEuRqlNAGmNHmrYcUNz+GsYBBg4wNk+cnDBVpFmZ1mFTNJ6qrk1NzOn1YhACDdFB1018cbXSNSxN9OKGkJIS+eXSvx0TexvWr4asvmz947UN1VbsweLiMZjiMQJYgYgWAkgtIAIMcSMKAhE0FgGLNQGu+AAYoCN2BA9BQzJvqzlllmLvHbkGg6grmtQ9XiHlFKr6U0+Pvzu818e/WCZ3h4CsYowLAREEBGnBgRBADWiHX/jNIY4FeCw2hBuDiPbmgWj1YKB9nxcM6V48ZDsce8KGCjkEnKyS9h3gaZZLV/hK2F39br9oRP7RsWEMAyLAVgtMOJANGJgQNYAtLW1QbCZIyQKq4XCiLTDFrfDHs2Fe8Sk7ROlGSUUg+kwDDOdQnIEnzZKE6YVq09t/8nWnetep44WGGIYERoHiAXEsIAQK+KRKASrAGozcOrUcQzNyYHQbgVpzsbCOUumA3nVecgzYT0c+xmnhQmtBxyfKG8cPnz8s6HU1gpDMBCnFIJoQTQahSjYAYEgBgrzHixrPI4MIxsTRly1fsKY2bfnIc/c2TCBPS54OOs8pJRmHIocmrtpxxvBxvYjcOQ4EI63waAxGKCwiw5E4wCFDSKxQYwKGCAMxtzryrLzkGeqMufgaYfR5wJamtE8eK/2/pZd+zcXWDIB832G42EQgcJisSAWIaA0A3aSC7RacG3RrHXT8m66A0D4bFdXnNPTUEptx1FbsOHTwK6vW45AcBgwhBjiMGBer01ghRFzgESy4coei1lTF2Q54Ww/13lib0DSiMZc9djWtTv3b7kxIrQAorVzDloNc/kGK3Eg3pyBedffOU2yFu3uLWqk40ttzTgwcMPeNcfqm44iLhiIGGFYMygibe2wRnNQMGrq8R+MnTGCEHevDjwdoHgcxzOaood/+87m1Q9ZcqJoozrajZPItQ9HTvNlKJm+cPKwzHGfp5NMpQM0n7E3oCHniwMfH9mrfuRwDI4jbJwEWu2YMXLh+qnuOQsAxNKJ+r0CE+tC+0mctLfh+OgN29bubYudQMzShEEZ+bhx6p0ZozDKHP5m1O/1UpV0gWbGZm9CU8b+uh3btu94/4qMXAuumXTdM5MGTfgdMMpUl9YWZlrAVJUUEc+mrf/cOWhoVmRyQdGQYZhgBlwTmFbFyfkAzWfFRjRmnfi6oSwnx/rx8Az7HmCECWOz5E4nZ+ntmbQV9vZB6f7/v0JyQp25t65SAAAAAElFTkSuQmCC",
  Fx = () => {
    const e = [
      {
        id: "1",
        name: "متطلبات الاستضافة",
        post: "يجب استضافة الأنظمة إما مباشرة على خوادم البنك أو محليًا في المملكة",
        img: zx,
      },
      {
        id: "2",
        name: "نظام تطبيق الهاتف",
        post: "(ionic 6+, API: .net core 5+, Databased: Microsoft SQL…)",
        img: Ex,
      },
      {
        id: "3",
        name: "متطلبات الوصول",
        post: "لا يمكن الوصول الى صلاحيات التحرير والتطوير الا في مقر البنك",
        img: Ax,
      },
      {
        id: "4",
        name: "الخدمات السحابية",
        post: "تحتاج جميع التطبيقات إلى استخدام خادم البنك الموجود في الموقع",
        img: Cx,
      },
      {
        id: "5",
        name: "نظام علاقات العملاء",
        post: "النظام المستخدم في البنك حالياMicrosoft Dynamics",
        img: bx,
      },
      {
        id: "6",
        name: "API Availability",
        post: "توفير واجهات برمجة قابلة للتخصيص بناءً على متطلبات البائع",
        img: Px,
      },
    ];
    return t.jsx(t.Fragment, {
      children: t.jsxs("div", {
        className: "container",
        style: { marginBottom: "160px" },
        children: [
          t.jsx("div", {
            className: "SixthSlide",
            "data-aos": "zoom-in-left",
            "data-aos-duration": "1000",
            children: t.jsx("div", {
              className: "fourth-header",
              children: t.jsxs("h2", {
                className: "text-end semi-bold",
                children: [
                  "المتطلبات الأساسية",
                  " ",
                  t.jsx("span", {
                    style: { color: "#469C09" },
                    children: "(الحلول)",
                  }),
                ],
              }),
            }),
          }),
          t.jsxs("div", {
            className: "row mb-5",
            children: [
              t.jsx("div", {
                className: "col-lg-6",
                "data-aos": "zoom-in-left",
                "data-aos-duration": "1300",
                children: t.jsxs("div", {
                  className: "last-slide",
                  children: [
                    t.jsx("div", {
                      className: "headline_______",
                      children: t.jsx("p", {
                        children: "مراعاة متطلبات تقنية المعلومات",
                      }),
                    }),
                    t.jsx("div", {
                      className: "row",
                      children: e.map((n) =>
                        t.jsx(
                          "div",
                          {
                            className: "col-lg-4",
                            children: t.jsxs("div", {
                              className: "column-item____",
                              children: [
                                t.jsx("img", { src: n.img, alt: "" }),
                                t.jsx("h3", { children: n.name }),
                                t.jsx("p", { children: n.post }),
                              ],
                            }),
                          },
                          n.id
                        )
                      ),
                    }),
                  ],
                }),
              }),
              t.jsx("div", {
                className: "col-lg-6",
                "data-aos": "zoom-in-left",
                "data-aos-duration": "1500",
                children: t.jsxs("div", {
                  className: "last-slide",
                  children: [
                    t.jsx("div", {
                      className: "headline_______",
                      children: t.jsx("p", {
                        children: "مراعاة متطلبات الأعمال",
                      }),
                    }),
                    t.jsxs("div", {
                      className: "row",
                      children: [
                        t.jsx("div", {
                          className: "col-lg-4",
                          children: t.jsxs("div", {
                            className: "last-box",
                            children: [
                              t.jsx("img", { src: Tx, alt: "" }),
                              t.jsx("h3", { children: "التقنية" }),
                              t.jsx("p", { children: "إضافته في تطبيق البنك" }),
                              t.jsx("p", {
                                children:
                                  "تصميم واجهة برمجة متوافقة مع التطبيقات",
                              }),
                            ],
                          }),
                        }),
                        t.jsx("div", {
                          className: "col-lg-4",
                          children: t.jsxs("div", {
                            className: "last-box",
                            children: [
                              t.jsx("img", { src: Rx, alt: "" }),
                              t.jsx("h3", { children: "تحليل البيانات" }),
                              t.jsx("p", {
                                children: "اتاحة الوصول إلى التقارير",
                              }),
                              t.jsx("p", { children: "تقارير السوق" }),
                              t.jsx("p", {
                                children: "مؤشرات الأداء الرئيسية",
                              }),
                            ],
                          }),
                        }),
                        t.jsx("div", {
                          className: "col-lg-4",
                          children: t.jsxs("div", {
                            className: "last-box",
                            children: [
                              t.jsx("img", { src: Lx, alt: "" }),
                              t.jsx("h3", { children: "البرنامج" }),
                              t.jsx("p", { children: "كسب وصرف النقاط" }),
                              t.jsx("p", { children: "القسائم الشرائية" }),
                              t.jsx("p", { children: "الألعاب" }),
                              t.jsx("p", { children: "سوق المتاجر" }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
          t.jsx("div", {
            className: "row-refactor-again mb-5",
            "data-aos": "zoom-in-left",
            "data-aos-duration": "2000",
            children: t.jsxs("div", {
              className: "row",
              children: [
                t.jsx("div", {
                  className: "col-lg-12",
                  children: t.jsx("div", {
                    className: "col-lg-12-headline",
                    children: t.jsx("p", { children: "تحديد أهم المعايير" }),
                  }),
                }),
                t.jsxs("div", {
                  className: "row",
                  children: [
                    t.jsxs("div", {
                      className: "col-lg-2",
                      children: [
                        t.jsx("div", {
                          className: "col-lg-2-headline___",
                          children: t.jsx("h6", { children: "تخصيص البرنامج" }),
                        }),
                        t.jsx("div", {
                          className: "bottom__side__arrow",
                          children: t.jsx("img", { src: kr, alt: "" }),
                        }),
                        t.jsx("div", {
                          className: "col-lg-2-box",
                          children: t.jsx("p", {
                            children:
                              "تقدیم متاجر خاصة من البنك إلى قاعدة التجار",
                          }),
                        }),
                      ],
                    }),
                    t.jsxs("div", {
                      className: "col-lg-2",
                      children: [
                        t.jsx("div", {
                          className: "col-lg-2-headline___",
                          children: t.jsx("h6", { children: "الدعم الفني" }),
                        }),
                        t.jsx("div", {
                          className: "col-lg-2-box",
                          children: t.jsx("p", {
                            children:
                              "توفير الدعم الفني المطلوب وتنفيذ التحسينات خلال عام واحد",
                          }),
                        }),
                      ],
                    }),
                    t.jsxs("div", {
                      className: "col-lg-2",
                      children: [
                        t.jsx("div", {
                          className: "col-lg-2-headline___",
                          children: t.jsx("h6", { children: "خدمة العملاء" }),
                        }),
                        t.jsx("div", {
                          className: "bottom__side__arrow",
                          children: t.jsx("img", { src: kr, alt: "" }),
                        }),
                        t.jsx("div", {
                          className: "col-lg-2-box",
                          children: t.jsx("p", {
                            children: "التعامل مع الشكاوى ذات الأهمية الأعلى",
                          }),
                        }),
                      ],
                    }),
                    t.jsxs("div", {
                      className: "col-lg-2",
                      children: [
                        t.jsx("div", {
                          className: "col-lg-2-headline___",
                          children: t.jsx("h6", { children: "إدارة المتاجر" }),
                        }),
                        t.jsx("div", {
                          className: "col-lg-2-box",
                          children: t.jsx("p", {
                            children: "التعاقد والإشراف على أصحاب المتاجر",
                          }),
                        }),
                      ],
                    }),
                    t.jsxs("div", {
                      className: "col-lg-2",
                      children: [
                        t.jsx("div", {
                          className: "col-lg-2-headline___",
                          children: t.jsx("h6", { children: "تنوع الشراكات" }),
                        }),
                        t.jsx("div", {
                          className: "bottom__side__arrow",
                          children: t.jsx("img", { src: kr, alt: "" }),
                        }),
                        t.jsx("div", {
                          className: "col-lg-2-box",
                          children: t.jsx("p", {
                            children: "مقدمي الخدمة المحليين والعالميين",
                          }),
                        }),
                      ],
                    }),
                    t.jsxs("div", {
                      className: "col-lg-2",
                      children: [
                        t.jsx("div", {
                          className: "col-lg-2-headline___",
                          children: t.jsx("h6", { children: "التوافق الفني" }),
                        }),
                        t.jsx("div", {
                          className: "col-lg-2-box",
                          children: t.jsx("p", {
                            children:
                              "قادر من الناحية الفنية على التكامل مع برامج البنك",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
    });
  },
  Mx = () => t.jsxs("div", { children: [t.jsx(Sx, {}), t.jsx(Fx, {})] });
function Ox() {
  const { pathname: e } = As();
  return (
    L.useEffect(() => {
      window.scrollTo(0, 0);
    }, [e]),
    null
  );
}
const Dx = () => {
  const [e, n] = L.useState(null),
    s = (l) => {
      n(l);
    };
  return t.jsx(t.Fragment, {
    children: t.jsxs("div", {
      className: "container-map",
      children: [
        t.jsx("img", {
          src: "/src/assets/images/logo/right.png",
          style: {
            position: "fixed",
            left: "20px",
            bottom: "20px",
            height: "60px",
            width: "auto",
          },
        }),
        t.jsx("img", {
          src: "/src/assets/images/logo/left.png",
          alt: "",
          style: {
            position: "fixed",
            top: "20px",
            left: "20px",
            height: "60px",
            width: "auto",
          },
        }),
        t.jsx("div", {
          className: ` ${e === 1 ? "hovered" : ""} area`,
          style: {
            position: "absolute",
            top: "42%",
            left: "38%",
            cursor: "pointer",
          },
          onMouseEnter: () => s(1),
          onMouseLeave: () => s(null),
          children: t.jsxs(Re, {
            to: "/slide-1",
            children: [
              t.jsx("img", {
                src: "/map-icon.png",
                alt: "map-icon",
                style: { height: "30px", width: "auto" },
                className: "map-icon  ",
              }),
              t.jsxs("div", {
                className: `location-info-box ${e === 1 ? "open" : ""}`,
                style: {
                  top: "100%",
                  left: 0,
                  transform: "translateX(-40%)",
                  height: "140px",
                  width: "200px",
                  borderRadius: "5px",
                  overflow: "hidden",
                  border: "2px solid #3F8BC5",
                  background: "white",
                  visibility: e === 1 ? "visible" : "hidden",
                  position: "absolute",
                  zIndex: 999,
                },
                children: [
                  t.jsx("img", {
                    src: " /banner/1.jpg",
                    alt: "Location 1",
                    style: {
                      objectFit: "cover",
                      height: "100%",
                      width: "100%",
                    },
                  }),
                  t.jsx("p", {
                    className: "location-text",
                    style: { position: "absolute", color: "black" },
                    children: "تقرير إدارة تجربة العميل",
                  }),
                ],
              }),
            ],
          }),
        }),
        t.jsx("div", {
          className: ` ${e === 2 ? "hovered" : ""} area`,
          style: {
            position: "absolute",
            top: "21%",
            left: "40%",
            cursor: "pointer",
          },
          onMouseEnter: () => s(2),
          onMouseLeave: () => s(null),
          children: t.jsxs(Re, {
            to: "/slide-2",
            children: [
              t.jsx("img", {
                src: "/map-icon.png",
                alt: "map-icon",
                style: { height: "30px", width: "auto" },
                className: "map-icon  ",
              }),
              t.jsxs("div", {
                className: `location-info-box ${e === 2 ? "open" : ""}`,
                style: {
                  top: "100%",
                  left: 0,
                  transform: "translateX(-40%)",
                  height: "140px",
                  width: "200px",
                  borderRadius: "5px",
                  overflow: "hidden",
                  border: "2px solid #3F8BC5",
                  background: "white",
                  visibility: e === 2 ? "visible" : "hidden",
                  position: "absolute",
                  zIndex: 999,
                },
                children: [
                  t.jsx("img", {
                    src: " /banner/2nd.jpg",
                    alt: "Location 2",
                    style: {
                      objectFit: "cover",
                      height: "100%",
                      width: "100%",
                    },
                  }),
                  t.jsx("p", {
                    className: "location-text",
                    style: { position: "absolute", color: "black" },
                    children: "مؤشرات الاداء",
                  }),
                ],
              }),
            ],
          }),
        }),
        t.jsx("div", {
          className: ` ${e === 3 ? "hovered" : ""} area`,
          style: {
            position: "absolute",
            left: "46.5%",
            top: "22.5%",
            cursor: "pointer",
          },
          onMouseEnter: () => s(3),
          onMouseLeave: () => s(null),
          children: t.jsxs(Re, {
            to: "/slide-3",
            children: [
              t.jsx("img", {
                src: "/map-icon.png",
                alt: "map-icon",
                style: { height: "30px", width: "auto" },
                className: "map-icon  ",
              }),
              t.jsxs("div", {
                className: `location-info-box ${e === 3 ? "open" : ""}`,
                style: {
                  top: "100%",
                  left: 0,
                  transform: "translateX(-40%)",
                  height: "140px",
                  width: "200px",
                  borderRadius: "5px",
                  overflow: "hidden",
                  border: "2px solid #3F8BC5",
                  background: "white",
                  visibility: e === 3 ? "visible" : "hidden",
                  position: "absolute",
                  zIndex: 999,
                },
                children: [
                  t.jsx("img", {
                    src: " /frame/3.jpg",
                    alt: "Location 3",
                    style: {
                      objectFit: "cover",
                      height: "100%",
                      width: "100%",
                    },
                  }),
                  t.jsx("p", {
                    className: "location-text",
                    style: { position: "absolute", color: "black" },
                    children: "صوت العميل",
                  }),
                ],
              }),
            ],
          }),
        }),
        t.jsx("div", {
          className: ` ${e === 4 ? "hovered" : ""} area`,
          style: {
            position: "absolute",
            top: "62%",
            left: "45%",
            cursor: "pointer",
          },
          onMouseEnter: () => s(4),
          onMouseLeave: () => s(null),
          children: t.jsxs(Re, {
            to: "/slide-4",
            children: [
              t.jsx("img", {
                src: "/map-icon.png",
                alt: "map-icon",
                style: { height: "30px", width: "auto" },
                className: "map-icon  ",
              }),
              t.jsxs("div", {
                className: `location-info-box ${e === 4 ? "open" : ""}`,
                style: {
                  top: "100%",
                  left: 0,
                  transform: "translateX(-40%)",
                  height: "140px",
                  width: "200px",
                  borderRadius: "5px",
                  overflow: "hidden",
                  border: "2px solid #3F8BC5",
                  background: "white",
                  visibility: e === 4 ? "visible" : "hidden",
                  position: "absolute",
                  zIndex: 999,
                },
                children: [
                  t.jsx("img", {
                    src: " /banner/online-marketing.jpg",
                    alt: "Location 4",
                    style: {
                      objectFit: "cover",
                      height: "100%",
                      width: "100%",
                    },
                  }),
                  t.jsx("p", {
                    className: "location-text",
                    style: { position: "absolute", color: "black" },
                    children: "إدارة المنتجات",
                  }),
                ],
              }),
            ],
          }),
        }),
        t.jsx("div", {
          className: ` ${e === 5 ? "hovered" : ""} area`,
          style: {
            position: "absolute",
            top: "37%",
            left: "53%",
            cursor: "pointer",
          },
          onMouseEnter: () => s(5),
          onMouseLeave: () => s(null),
          children: t.jsxs(Re, {
            to: "/slide-5",
            children: [
              t.jsx("img", {
                src: "/map-icon.png",
                alt: "map-icon",
                style: { height: "30px", width: "auto" },
                className: "map-icon  ",
              }),
              t.jsxs("div", {
                className: `location-info-box ${e === 5 ? "open" : ""}`,
                style: {
                  top: "100%",
                  left: 0,
                  transform: "translateX(-40%)",
                  height: "140px",
                  width: "200px",
                  borderRadius: "5px",
                  overflow: "hidden",
                  border: "2px solid #3F8BC5",
                  background: "white",
                  visibility: e === 5 ? "visible" : "hidden",
                  position: "absolute",
                  zIndex: 999,
                },
                children: [
                  t.jsx("img", {
                    src: " /banner/slide5.jpg",
                    alt: "Location 5",
                    style: {
                      objectFit: "cover",
                      height: "100%",
                      width: "100%",
                    },
                  }),
                  t.jsx("p", {
                    className: "location-text",
                    style: { position: "absolute", color: "black" },
                    children: "المهام التشغيلية",
                  }),
                ],
              }),
            ],
          }),
        }),
        t.jsx("div", {
          className: ` ${e === 6 ? "hovered" : ""} area`,
          style: {
            position: "absolute",
            left: "76%",
            top: "24.5%",
            cursor: "pointer",
          },
          onMouseEnter: () => s(6),
          onMouseLeave: () => s(null),
          children: t.jsxs(Re, {
            to: "/slide-6",
            children: [
              t.jsx("img", {
                src: "/map-icon.png",
                alt: "map-icon",
                style: { height: "30px", width: "auto" },
                className: "map-icon  ",
              }),
              t.jsxs("div", {
                className: `location-info-box ${e === 6 ? "open" : ""}`,
                style: {
                  top: "100%",
                  left: 0,
                  transform: "translateX(-40%)",
                  height: "140px",
                  width: "200px",
                  borderRadius: "5px",
                  overflow: "hidden",
                  border: "2px solid #3F8BC5",
                  background: "white",
                  visibility: e === 6 ? "visible" : "hidden",
                  position: "absolute",
                  zIndex: 999,
                },
                children: [
                  t.jsx("img", {
                    src: " /banner/slide6.jpg",
                    alt: "Location 6",
                    style: {
                      objectFit: "cover",
                      height: "100%",
                      width: "100%",
                    },
                  }),
                  t.jsx("p", {
                    className: "location-text",
                    style: { position: "absolute", color: "black" },
                    children: "موقع البنك",
                  }),
                ],
              }),
            ],
          }),
        }),
        t.jsx("div", {
          className: ` ${e === 7 ? "hovered" : ""} area`,
          style: {
            position: "absolute",
            top: "55%",
            left: "53%",
            cursor: "pointer",
          },
          onMouseEnter: () => s(7),
          onMouseLeave: () => s(null),
          children: t.jsxs(Re, {
            to: "/slide-7",
            children: [
              t.jsx("img", {
                src: "/map-icon.png",
                alt: "map-icon",
                style: { height: "30px", width: "auto" },
                className: "map-icon  ",
              }),
              t.jsxs("div", {
                className: `location-info-box ${e === 7 ? "open" : ""}`,
                style: {
                  top: "100%",
                  left: 0,
                  transform: "translateX(-40%)",
                  height: "140px",
                  width: "200px",
                  borderRadius: "5px",
                  overflow: "hidden",
                  border: "2px solid #3F8BC5",
                  background: "white",
                  visibility: e === 7 ? "visible" : "hidden",
                  position: "absolute",
                  zIndex: 999,
                },
                children: [
                  t.jsx("img", {
                    src: " /banner/slide7.jpg",
                    alt: "Location 7",
                    style: {
                      objectFit: "cover",
                      height: "100%",
                      width: "100%",
                    },
                  }),
                  t.jsx("p", {
                    className: "location-text",
                    style: { position: "absolute", color: "black" },
                    children: "المتسوق الخفي",
                  }),
                ],
              }),
            ],
          }),
        }),
        t.jsx("div", {
          className: ` ${e === 8 ? "hovered" : ""} area`,
          style: {
            position: "absolute",
            top: "54%",
            left: "67%",
            cursor: "pointer",
          },
          onMouseEnter: () => s(8),
          onMouseLeave: () => s(null),
          children: t.jsxs(Re, {
            to: "/slide-8",
            children: [
              t.jsx("img", {
                src: "/map-icon.png",
                alt: "map-icon",
                style: { height: "30px", width: "auto" },
                className: "map-icon  ",
              }),
              t.jsxs("div", {
                className: `location-info-box ${e === 8 ? "open" : ""}`,
                style: {
                  top: "100%",
                  left: 0,
                  transform: "translateX(-40%)",
                  height: "140px",
                  width: "200px",
                  borderRadius: "5px",
                  overflow: "hidden",
                  border: "2px solid #3F8BC5",
                  background: "white",
                  visibility: e === 8 ? "visible" : "hidden",
                  position: "absolute",
                  zIndex: 999,
                },
                children: [
                  t.jsx("img", {
                    src: " /banner/slide8.jpg",
                    alt: "Location 8",
                    style: {
                      objectFit: "cover",
                      height: "100%",
                      width: "100%",
                    },
                  }),
                  t.jsx("p", {
                    className: "location-text",
                    style: { position: "absolute", color: "black" },
                    children: "الفروع",
                  }),
                ],
              }),
            ],
          }),
        }),
        t.jsx("div", {
          className: ` ${e === 9 ? "hovered" : ""} area`,
          style: {
            position: "absolute",
            top: "14%",
            left: "62%",
            cursor: "pointer",
          },
          onMouseEnter: () => s(9),
          onMouseLeave: () => s(null),
          children: t.jsxs(Re, {
            to: "/slide-9",
            children: [
              t.jsx("img", {
                src: "/map-icon.png",
                alt: "map-icon",
                style: { height: "30px", width: "auto" },
                className: "map-icon  ",
              }),
              t.jsxs("div", {
                className: `location-info-box ${e === 9 ? "open" : ""}`,
                style: {
                  top: "100%",
                  left: 0,
                  transform: "translateX(-40%)",
                  height: "140px",
                  width: "200px",
                  borderRadius: "5px",
                  overflow: "hidden",
                  border: "2px solid #3F8BC5",
                  background: "white",
                  visibility: e === 9 ? "visible" : "hidden",
                  position: "absolute",
                  zIndex: 999,
                },
                children: [
                  t.jsx("img", {
                    src: " /banner/banner9.jpg",
                    alt: "Location 9",
                    style: {
                      objectFit: "cover",
                      height: "100%",
                      width: "100%",
                    },
                  }),
                  t.jsx("p", {
                    className: "location-text",
                    style: { position: "absolute", color: "black" },
                    children: "التواصل",
                  }),
                ],
              }),
            ],
          }),
        }),
        t.jsx("div", {
          className: ` ${e === 10 ? "hovered" : ""} area`,
          style: {
            position: "absolute",
            left: "78.3%",
            bottom: "87%",
            cursor: "pointer",
          },
          onMouseEnter: () => s(10),
          onMouseLeave: () => s(null),
          children: t.jsxs(Re, {
            to: "/slide-10",
            children: [
              t.jsx("img", {
                src: "/map-icon.png",
                alt: "map-icon",
                style: { height: "30px", width: "auto" },
                className: "map-icon  ",
              }),
              t.jsxs("div", {
                className: `location-info-box ${e === 10 ? "open" : ""}`,
                style: {
                  top: "100%",
                  left: 0,
                  transform: "translateX(-40%)",
                  height: "140px",
                  width: "200px",
                  borderRadius: "5px",
                  overflow: "hidden",
                  border: "2px solid #3F8BC5",
                  background: "white",
                  visibility: e === 10 ? "visible" : "hidden",
                  position: "absolute",
                  zIndex: 999,
                },
                children: [
                  t.jsx("img", {
                    src: " /banner/10.jpg",
                    alt: "Location 10",
                    style: {
                      objectFit: "cover",
                      height: "100%",
                      width: "100%",
                    },
                  }),
                  t.jsx("p", {
                    className: "location-text",
                    style: { position: "absolute", color: "black" },
                    children: "المشاركة المجتمعية",
                  }),
                ],
              }),
            ],
          }),
        }),
        t.jsx("div", {
          className: ` ${e === 11 ? "hovered" : ""} area`,
          style: {
            position: "absolute",
            bottom: "36%",
            left: "80%",
            cursor: "pointer",
          },
          onMouseEnter: () => s(11),
          onMouseLeave: () => s(null),
          children: t.jsxs(Re, {
            to: "/slide-11",
            children: [
              t.jsx("img", {
                src: "/map-icon.png",
                alt: "map-icon",
                style: { height: "30px", width: "auto" },
                className: "map-icon  ",
              }),
              t.jsxs("div", {
                className: `location-info-box ${e === 11 ? "open" : ""}`,
                style: {
                  top: "100%",
                  left: 0,
                  transform: "translateX(-40%)",
                  height: "140px",
                  width: "200px",
                  borderRadius: "5px",
                  overflow: "hidden",
                  border: "2px solid #3F8BC5",
                  background: "white",
                  visibility: e === 11 ? "visible" : "hidden",
                  position: "absolute",
                  zIndex: 999,
                },
                children: [
                  t.jsx("img", {
                    src: " /banner/last.jpg",
                    alt: "Location 11",
                    style: {
                      objectFit: "cover",
                      height: "100%",
                      width: "100%",
                    },
                  }),
                  t.jsx("p", {
                    className: "location-text",
                    style: { position: "absolute", color: "black" },
                    children: "برنامج ولاء العميل",
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    }),
  });
};
function Ix({ title: e, titleId: n, ...s }, l) {
  return L.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: l,
        "aria-labelledby": n,
      },
      s
    ),
    e ? L.createElement("title", { id: n }, e) : null,
    L.createElement("path", {
      fillRule: "evenodd",
      d: "M10.72 11.47a.75.75 0 0 0 0 1.06l7.5 7.5a.75.75 0 1 0 1.06-1.06L12.31 12l6.97-6.97a.75.75 0 0 0-1.06-1.06l-7.5 7.5Z",
      clipRule: "evenodd",
    }),
    L.createElement("path", {
      fillRule: "evenodd",
      d: "M4.72 11.47a.75.75 0 0 0 0 1.06l7.5 7.5a.75.75 0 1 0 1.06-1.06L6.31 12l6.97-6.97a.75.75 0 0 0-1.06-1.06l-7.5 7.5Z",
      clipRule: "evenodd",
    })
  );
}
const Bx = L.forwardRef(Ix),
  Vx = Bx;
function Ux({ title: e, titleId: n, ...s }, l) {
  return L.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: l,
        "aria-labelledby": n,
      },
      s
    ),
    e ? L.createElement("title", { id: n }, e) : null,
    L.createElement("path", {
      fillRule: "evenodd",
      d: "M13.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z",
      clipRule: "evenodd",
    }),
    L.createElement("path", {
      fillRule: "evenodd",
      d: "M19.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 0 1 1.06-1.06l7.5 7.5Z",
      clipRule: "evenodd",
    })
  );
}
const Qx = L.forwardRef(Ux),
  Wx = Qx,
  Hx = "/assets/logo-29c3332e.svg",
  Kx = () =>
    t.jsxs("div", {
      className: "last_footer",
      style: { height: "100vh" },
      children: [
        t.jsx("div", {
          className: "text-end pt-5 container",
          "data-aos": "zoom-in-left",
          "data-aos-duration": "1200 ",
          children: t.jsx("img", {
            src: Hx,
            alt: "",
            style: { zIndex: "10000" },
          }),
        }),
        t.jsx("div", {
          className: "last-slie-text-heading",
          children: t.jsx("div", {
            className: "container text-end",
            children: t.jsx("h2", {
              "data-aos": "zoom-in-left",
              "data-aos-duration": "1700",
              style: { color: "white" },
              children: "شكراً لكم",
            }),
          }),
        }),
        t.jsx("div", {
          className: "slide-contain-bg",
          "data-aos": "zoom-in-left",
          "data-aos-duration": "1800",
        }),
        t.jsx("img", {
          src: "/banner/last-bg.jpg",
          className: "last-bg-image",
          style: {
            objectFit: "conver",
            width: "100vw",
            height: "100vh",
            position: "absolute",
            left: "0",
            top: "0",
            zIndex: "-10",
          },
        }),
        t.jsx("div", {
          style: {
            backgroundColor: "rgba(0,0,0,.5)",
            width: "100vw",
            height: "100vh",
            position: "absolute",
            left: "0",
            top: "0",
            zIndex: "-10",
          },
        }),
      ],
    }),
  qx = () => {
    const [e, n] = L.useState(!0),
      s = () => {
        n(!e);
      };
    L.useEffect(() => {
      Fm.init();
    }, []);
    const l = location.pathname === "/";
    return t.jsxs("div", {
      className: "root",
      children: [
        t.jsxs(xf, {
          children: [
            t.jsx(Ox, {}),
            t.jsxs("div", {
              className: `app ${e ? "minimized" : ""}`,
              children: [
                l !== "/" &&
                  t.jsxs("div", {
                    className: "header",
                    children: [" ", t.jsx(Ef, { toggle: s }), " "],
                  }),
                t.jsx("div", {
                  className: "remaining-content",
                  children: t.jsxs(Vm, {
                    children: [
                      t.jsx(ze, {
                        exact: !0,
                        path: "/slide-1",
                        element: t.jsx(zf, {}),
                      }),
                      t.jsx(ze, { path: "/slide-2", element: t.jsx(Of, {}) }),
                      t.jsx(ze, { path: "/slide-3", element: t.jsx(gp, {}) }),
                      t.jsx(ze, { path: "/slide-4", element: t.jsx(Qp, {}) }),
                      t.jsx(ze, { path: "/slide-5", element: t.jsx(kp, {}) }),
                      t.jsx(ze, { path: "/slide-6", element: t.jsx(sx, {}) }),
                      t.jsx(ze, { path: "/slide-7", element: t.jsx(ax, {}) }),
                      t.jsx(ze, { path: "/slide-8", element: t.jsx(hx, {}) }),
                      t.jsx(ze, { path: "/slide-9", element: t.jsx(xx, {}) }),
                      t.jsx(ze, { path: "/slide-10", element: t.jsx(jx, {}) }),
                      t.jsx(ze, { path: "/slide-11", element: t.jsx(Mx, {}) }),
                      t.jsx(ze, {
                        path: "/slide-12",
                        exact: !0,
                        element: t.jsx(Kx, {}),
                      }),
                      t.jsx(ze, {
                        path: "/",
                        exact: !0,
                        element: t.jsx(Dx, {}),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
        l !== "/" &&
          t.jsx("div", {
            className: "header-toggle",
            children: t.jsx("div", {
              className: "toggle-button",
              onClick: s,
              children: e
                ? t.jsx(Wx, { className: "icons" })
                : t.jsx(Vx, { className: "icons" }),
            }),
          }),
      ],
    });
  };
Sr.createRoot(document.getElementById("root")).render(
  t.jsx(wu.StrictMode, { children: t.jsx(qx, {}) })
);
