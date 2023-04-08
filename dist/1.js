(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [1],
  {
    '+i6M': function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      const r =
        '\n    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <path d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100Z" fill="white"/>\n        <path d="M50.512 94C74.2907 94 93.5673 74.5244 93.5673 50.5C93.5673 26.4756 74.2907 7 50.512 7C26.7332 7 7.45667 26.4756 7.45667 50.5C7.45667 74.5244 26.7332 94 50.512 94Z" fill="#0052FF"/>\n        <path d="M50.6248 65.4335C42.3697 65.4335 35.8996 58.7469 35.8996 50.5C35.8996 42.2531 42.5928 35.5664 50.6248 35.5664C57.9873 35.5664 64.0111 40.9157 65.1267 48.0481H80.0749C78.7363 32.6688 66.0191 20.6328 50.6248 20.6328C34.3379 20.6328 20.9514 34.0062 20.9514 50.5C20.9514 66.9936 34.1148 80.3671 50.6248 80.3671C66.2422 80.3671 78.7363 68.331 80.0749 52.9516H65.1267C64.0111 60.0841 57.9873 65.4335 50.6248 65.4335Z" fill="white"/>\n    </svg>\n';
      e.default = r;
    },
    '+tJ4': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return r;
      });
      var r = function (t) {
        return function (e) {
          for (var n = 0, r = t.length; n < r && !e.closed; n++) e.next(t[n]);
          e.complete();
        };
      };
    },
    '+umK': function (t, e, n) {
      'use strict';
      function r() {}
      n.d(e, 'a', function () {
        return r;
      });
    },
    '/21U': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return i;
      });
      var r = n('isby');
      function i(t) {
        return !Object(r['a'])(t) && t - parseFloat(t) + 1 >= 0;
      }
    },
    '/WYv': function (t, e, n) {
      'use strict';
      function r(t) {
        return (
          !!t &&
          'function' !== typeof t.subscribe &&
          'function' === typeof t.then
        );
      }
      n.d(e, 'a', function () {
        return r;
      });
    },
    '/u+i': function (t, e, n) {
      n('QXrW'), n('Nk1h');
      const r = n('y2lW'),
        i = 1e3,
        s = (t, e) => t + e,
        o = ['sync', 'latest'];
      class a extends r {
        constructor(t = {}) {
          super(),
            (this._blockResetDuration = t.blockResetDuration || 20 * i),
            this._blockResetTimeout,
            (this._currentBlock = null),
            (this._isRunning = !1),
            (this._onNewListener = this._onNewListener.bind(this)),
            (this._onRemoveListener = this._onRemoveListener.bind(this)),
            (this._resetCurrentBlock = this._resetCurrentBlock.bind(this)),
            this._setupInternalEvents();
        }
        isRunning() {
          return this._isRunning;
        }
        getCurrentBlock() {
          return this._currentBlock;
        }
        async getLatestBlock() {
          if (this._currentBlock) return this._currentBlock;
          const t = await new Promise((t) => this.once('latest', t));
          return t;
        }
        removeAllListeners(t) {
          t ? super.removeAllListeners(t) : super.removeAllListeners(),
            this._setupInternalEvents(),
            this._onRemoveListener();
        }
        _start() {}
        _end() {}
        _setupInternalEvents() {
          this.removeListener('newListener', this._onNewListener),
            this.removeListener('removeListener', this._onRemoveListener),
            this.on('newListener', this._onNewListener),
            this.on('removeListener', this._onRemoveListener);
        }
        _onNewListener(t, e) {
          o.includes(t) && this._maybeStart();
        }
        _onRemoveListener(t, e) {
          this._getBlockTrackerEventCount() > 0 || this._maybeEnd();
        }
        _maybeStart() {
          this._isRunning ||
            ((this._isRunning = !0),
            this._cancelBlockResetTimeout(),
            this._start());
        }
        _maybeEnd() {
          this._isRunning &&
            ((this._isRunning = !1),
            this._setupBlockResetTimeout(),
            this._end());
        }
        _getBlockTrackerEventCount() {
          return o.map((t) => this.listenerCount(t)).reduce(s);
        }
        _newPotentialLatest(t) {
          const e = this._currentBlock;
          (e && u(t) <= u(e)) || this._setCurrentBlock(t);
        }
        _setCurrentBlock(t) {
          const e = this._currentBlock;
          (this._currentBlock = t),
            this.emit('latest', t),
            this.emit('sync', { oldBlock: e, newBlock: t });
        }
        _setupBlockResetTimeout() {
          this._cancelBlockResetTimeout(),
            (this._blockResetTimeout = setTimeout(
              this._resetCurrentBlock,
              this._blockResetDuration,
            )),
            this._blockResetTimeout.unref && this._blockResetTimeout.unref();
        }
        _cancelBlockResetTimeout() {
          clearTimeout(this._blockResetTimeout);
        }
        _resetCurrentBlock() {
          this._currentBlock = null;
        }
      }
      function u(t) {
        return Number.parseInt(t, 16);
      }
      t.exports = a;
    },
    '0/uQ': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return o;
      });
      var r = n('6blF'),
        i = n('Fxb1'),
        s = n('i4X3');
      function o(t, e) {
        return e
          ? Object(s['a'])(t, e)
          : t instanceof r['a']
          ? t
          : new r['a'](Object(i['a'])(t));
      }
    },
    '0QlC': function (t, e) {
      async function n({ provider: t, fromBlock: e, toBlock: n }) {
        e || (e = n);
        const s = r(e),
          a = r(n),
          u = a - s + 1,
          c = Array(u)
            .fill()
            .map((t, e) => s + e)
            .map(i),
          l = await Promise.all(
            c.map((e) => o(t, 'eth_getBlockByNumber', [e, !1])),
          );
        return l;
      }
      function r(t) {
        return void 0 === t || null === t ? t : Number.parseInt(t, 16);
      }
      function i(t) {
        if (void 0 === t || null === t) return t;
        const e = t.toString(16);
        return '0x' + e;
      }
      function s(t, e) {
        return new Promise((n, r) => {
          t.sendAsync(e, (t, e) => {
            t
              ? r(t)
              : e.error
              ? r(e.error)
              : e.result
              ? n(e.result)
              : r(new Error('Result was empty'));
          });
        });
      }
      async function o(t, e, n) {
        for (let i = 0; i < 3; i++)
          try {
            return await s(t, { id: 1, jsonrpc: '2.0', method: e, params: n });
          } catch (r) {
            console.error(
              `provider.sendAsync failed: ${r.stack || r.message || r}`,
            );
          }
        throw new Error(`Block not found for params: ${JSON.stringify(n)}`);
      }
      t.exports = n;
    },
    '0rKm': function (t, e) {
      t.exports = function () {
        throw new Error('Readable.from is not available in the browser');
      };
    },
    '0wy+': function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default =
          '.-cbwsdk-css-reset .-cbwsdk-connect-dialog{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop.light{background-color:rgba(0,0,0,.5)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop.dark{background-color:rgba(50,53,61,.4)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-box{display:flex;position:relative;flex-direction:column;transform:scale(1);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-box-hidden{opacity:0;transform:scale(0.85)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-container{display:block}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-container-hidden{display:none}');
    },
    '0y9o': function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.WalletSDKRelayEventManager = void 0);
      const r = n('Qann');
      class i {
        constructor() {
          (this._nextRequestId = 0), (this.callbacks = new Map());
        }
        makeRequestId() {
          this._nextRequestId = (this._nextRequestId + 1) % 2147483647;
          const t = this._nextRequestId,
            e = (0, r.prepend0x)(t.toString(16)),
            n = this.callbacks.get(e);
          return n && this.callbacks.delete(e), t;
        }
      }
      e.WalletSDKRelayEventManager = i;
    },
    '1LlY': function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.StatusDotIcon = void 0);
      const r = n('2mXy');
      function i(t) {
        return (0, r.h)(
          'svg',
          Object.assign(
            {
              width: '10',
              height: '10',
              viewBox: '0 0 10 10',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            t,
          ),
          (0, r.h)('path', {
            'fill-rule': 'evenodd',
            'clip-rule': 'evenodd',
            d: 'M2.29995 4.99995C2.29995 5.57985 1.82985 6.04995 1.24995 6.04995C0.670052 6.04995 0.199951 5.57985 0.199951 4.99995C0.199951 4.42005 0.670052 3.94995 1.24995 3.94995C1.82985 3.94995 2.29995 4.42005 2.29995 4.99995ZM4.99995 6.04995C5.57985 6.04995 6.04995 5.57985 6.04995 4.99995C6.04995 4.42005 5.57985 3.94995 4.99995 3.94995C4.42005 3.94995 3.94995 4.42005 3.94995 4.99995C3.94995 5.57985 4.42005 6.04995 4.99995 6.04995ZM8.74995 6.04995C9.32985 6.04995 9.79995 5.57985 9.79995 4.99995C9.79995 4.42005 9.32985 3.94995 8.74995 3.94995C8.17005 3.94995 7.69995 4.42005 7.69995 4.99995C7.69995 5.57985 8.17005 6.04995 8.74995 6.04995Z',
          }),
        );
      }
      e.StatusDotIcon = i;
    },
    '1Ti9': function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.mergeMiddleware = void 0);
      const r = n('X+co');
      function i(t) {
        const e = new r.JsonRpcEngine();
        return t.forEach((t) => e.push(t)), e.asMiddleware();
      }
      e.mergeMiddleware = i;
    },
    '1fDf': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return i;
      });
      var r = n('FFOo');
      function i(t) {
        while (t) {
          var e = t,
            n = e.closed,
            i = e.destination,
            s = e.isStopped;
          if (n || s) return !1;
          t = i && i instanceof r['a'] ? i : null;
        }
        return !0;
      }
    },
    '26FU': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return o;
      });
      var r = n('mrSG'),
        i = n('K9Ia'),
        s = n('8g8A'),
        o = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return (n._value = e), n;
          }
          return (
            r['__extends'](e, t),
            Object.defineProperty(e.prototype, 'value', {
              get: function () {
                return this.getValue();
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype._subscribe = function (e) {
              var n = t.prototype._subscribe.call(this, e);
              return n && !n.closed && e.next(this._value), n;
            }),
            (e.prototype.getValue = function () {
              if (this.hasError) throw this.thrownError;
              if (this.closed) throw new s['a']();
              return this._value;
            }),
            (e.prototype.next = function (e) {
              t.prototype.next.call(this, (this._value = e));
            }),
            e
          );
        })(i['a']);
    },
    '2Bdj': function (t, e, n) {
      'use strict';
      function r(t) {
        return 'function' === typeof t;
      }
      n.d(e, 'a', function () {
        return r;
      });
    },
    '2J3U': function (t, e) {
      function n(t) {
        t = t || {};
        var e = t.max || Number.MAX_SAFE_INTEGER,
          n =
            'undefined' !== typeof t.start
              ? t.start
              : Math.floor(Math.random() * e);
        return function () {
          return (n %= e), n++;
        };
      }
      t.exports = n;
    },
    '2ePl': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return r;
      });
      var r = function (t) {
        return t && 'number' === typeof t.length && 'function' !== typeof t;
      };
    },
    '2mXy': function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, 'Component', function () {
          return w;
        }),
        n.d(e, 'Fragment', function () {
          return _;
        }),
        n.d(e, 'cloneElement', function () {
          return V;
        }),
        n.d(e, 'createContext', function () {
          return q;
        }),
        n.d(e, 'createElement', function () {
          return m;
        }),
        n.d(e, 'createRef', function () {
          return v;
        }),
        n.d(e, 'h', function () {
          return m;
        }),
        n.d(e, 'hydrate', function () {
          return z;
        }),
        n.d(e, 'isValidElement', function () {
          return o;
        }),
        n.d(e, 'options', function () {
          return i;
        }),
        n.d(e, 'render', function () {
          return W;
        }),
        n.d(e, 'toChildArray', function () {
          return I;
        });
      var r,
        i,
        s,
        o,
        a,
        u,
        c,
        l,
        h,
        d = {},
        f = [],
        p = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
      function b(t, e) {
        for (var n in e) t[n] = e[n];
        return t;
      }
      function g(t) {
        var e = t.parentNode;
        e && e.removeChild(t);
      }
      function m(t, e, n) {
        var i,
          s,
          o,
          a = {};
        for (o in e)
          'key' == o ? (i = e[o]) : 'ref' == o ? (s = e[o]) : (a[o] = e[o]);
        if (
          (arguments.length > 2 &&
            (a.children = arguments.length > 3 ? r.call(arguments, 2) : n),
          'function' == typeof t && null != t.defaultProps)
        )
          for (o in t.defaultProps)
            void 0 === a[o] && (a[o] = t.defaultProps[o]);
        return y(t, a, i, s, null);
      }
      function y(t, e, n, r, o) {
        var a = {
          type: t,
          props: e,
          key: n,
          ref: r,
          __k: null,
          __: null,
          __b: 0,
          __e: null,
          __d: void 0,
          __c: null,
          __h: null,
          constructor: void 0,
          __v: null == o ? ++s : o,
        };
        return null == o && null != i.vnode && i.vnode(a), a;
      }
      function v() {
        return { current: null };
      }
      function _(t) {
        return t.children;
      }
      function w(t, e) {
        (this.props = t), (this.context = e);
      }
      function S(t, e) {
        if (null == e) return t.__ ? S(t.__, t.__.__k.indexOf(t) + 1) : null;
        for (var n; e < t.__k.length; e++)
          if (null != (n = t.__k[e]) && null != n.__e) return n.__e;
        return 'function' == typeof t.type ? S(t) : null;
      }
      function M(t) {
        var e, n;
        if (null != (t = t.__) && null != t.__c) {
          for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
            if (null != (n = t.__k[e]) && null != n.__e) {
              t.__e = t.__c.base = n.__e;
              break;
            }
          return M(t);
        }
      }
      function E(t) {
        ((!t.__d && (t.__d = !0) && a.push(t) && !x.__r++) ||
          u !== i.debounceRendering) &&
          ((u = i.debounceRendering) || c)(x);
      }
      function x() {
        var t, e, n, r, i, s, o, u;
        for (a.sort(l); (t = a.shift()); )
          t.__d &&
            ((e = a.length),
            (r = void 0),
            (i = void 0),
            (o = (s = (n = t).__v).__e),
            (u = n.__P) &&
              ((r = []),
              ((i = b({}, s)).__v = s.__v + 1),
              P(
                u,
                s,
                i,
                n.__n,
                void 0 !== u.ownerSVGElement,
                null != s.__h ? [o] : null,
                r,
                null == o ? S(s) : o,
                s.__h,
              ),
              D(r, s),
              s.__e != o && M(s)),
            a.length > e && a.sort(l));
        x.__r = 0;
      }
      function k(t, e, n, r, i, s, o, a, u, c) {
        var l,
          h,
          p,
          b,
          g,
          m,
          v,
          w = (r && r.__k) || f,
          M = w.length;
        for (n.__k = [], l = 0; l < e.length; l++)
          if (
            null !=
            (b = n.__k[l] =
              null == (b = e[l]) ||
              'boolean' == typeof b ||
              'function' == typeof b
                ? null
                : 'string' == typeof b ||
                  'number' == typeof b ||
                  'bigint' == typeof b
                ? y(null, b, null, null, b)
                : Array.isArray(b)
                ? y(_, { children: b }, null, null, null)
                : b.__b > 0
                ? y(b.type, b.props, b.key, b.ref ? b.ref : null, b.__v)
                : b)
          ) {
            if (
              ((b.__ = n),
              (b.__b = n.__b + 1),
              null === (p = w[l]) || (p && b.key == p.key && b.type === p.type))
            )
              w[l] = void 0;
            else
              for (h = 0; h < M; h++) {
                if ((p = w[h]) && b.key == p.key && b.type === p.type) {
                  w[h] = void 0;
                  break;
                }
                p = null;
              }
            P(t, b, (p = p || d), i, s, o, a, u, c),
              (g = b.__e),
              (h = b.ref) &&
                p.ref != h &&
                (v || (v = []),
                p.ref && v.push(p.ref, null, b),
                v.push(h, b.__c || g, b)),
              null != g
                ? (null == m && (m = g),
                  'function' == typeof b.type && b.__k === p.__k
                    ? (b.__d = u = C(b, u, t))
                    : (u = O(t, b, p, w, g, u)),
                  'function' == typeof n.type && (n.__d = u))
                : u && p.__e == u && u.parentNode != t && (u = S(p));
          }
        for (n.__e = m, l = M; l--; )
          null != w[l] &&
            ('function' == typeof n.type &&
              null != w[l].__e &&
              w[l].__e == n.__d &&
              (n.__d = j(r).nextSibling),
            U(w[l], w[l]));
        if (v) for (l = 0; l < v.length; l++) F(v[l], v[++l], v[++l]);
      }
      function C(t, e, n) {
        for (var r, i = t.__k, s = 0; i && s < i.length; s++)
          (r = i[s]) &&
            ((r.__ = t),
            (e =
              'function' == typeof r.type
                ? C(r, e, n)
                : O(n, r, r, i, r.__e, e)));
        return e;
      }
      function I(t, e) {
        return (
          (e = e || []),
          null == t ||
            'boolean' == typeof t ||
            (Array.isArray(t)
              ? t.some(function (t) {
                  I(t, e);
                })
              : e.push(t)),
          e
        );
      }
      function O(t, e, n, r, i, s) {
        var o, a, u;
        if (void 0 !== e.__d) (o = e.__d), (e.__d = void 0);
        else if (null == n || i != s || null == i.parentNode)
          t: if (null == s || s.parentNode !== t) t.appendChild(i), (o = null);
          else {
            for (a = s, u = 0; (a = a.nextSibling) && u < r.length; u += 1)
              if (a == i) break t;
            t.insertBefore(i, s), (o = s);
          }
        return void 0 !== o ? o : i.nextSibling;
      }
      function j(t) {
        var e, n, r;
        if (null == t.type || 'string' == typeof t.type) return t.__e;
        if (t.__k)
          for (e = t.__k.length - 1; e >= 0; e--)
            if ((n = t.__k[e]) && (r = j(n))) return r;
        return null;
      }
      function A(t, e, n, r, i) {
        var s;
        for (s in n)
          'children' === s || 'key' === s || s in e || N(t, s, null, n[s], r);
        for (s in e)
          (i && 'function' != typeof e[s]) ||
            'children' === s ||
            'key' === s ||
            'value' === s ||
            'checked' === s ||
            n[s] === e[s] ||
            N(t, s, e[s], n[s], r);
      }
      function R(t, e, n) {
        '-' === e[0]
          ? t.setProperty(e, null == n ? '' : n)
          : (t[e] =
              null == n
                ? ''
                : 'number' != typeof n || p.test(e)
                ? n
                : n + 'px');
      }
      function N(t, e, n, r, i) {
        var s;
        t: if ('style' === e)
          if ('string' == typeof n) t.style.cssText = n;
          else {
            if (('string' == typeof r && (t.style.cssText = r = ''), r))
              for (e in r) (n && e in n) || R(t.style, e, '');
            if (n) for (e in n) (r && n[e] === r[e]) || R(t.style, e, n[e]);
          }
        else if ('o' === e[0] && 'n' === e[1])
          (s = e !== (e = e.replace(/Capture$/, ''))),
            (e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2)),
            t.l || (t.l = {}),
            (t.l[e + s] = n),
            n
              ? r || t.addEventListener(e, s ? L : T, s)
              : t.removeEventListener(e, s ? L : T, s);
        else if ('dangerouslySetInnerHTML' !== e) {
          if (i) e = e.replace(/xlink(H|:h)/, 'h').replace(/sName$/, 's');
          else if (
            'width' !== e &&
            'height' !== e &&
            'href' !== e &&
            'list' !== e &&
            'form' !== e &&
            'tabIndex' !== e &&
            'download' !== e &&
            e in t
          )
            try {
              t[e] = null == n ? '' : n;
              break t;
            } catch (t) {}
          'function' == typeof n ||
            (null == n || (!1 === n && '-' !== e[4])
              ? t.removeAttribute(e)
              : t.setAttribute(e, n));
        }
      }
      function T(t) {
        return this.l[t.type + !1](i.event ? i.event(t) : t);
      }
      function L(t) {
        return this.l[t.type + !0](i.event ? i.event(t) : t);
      }
      function P(t, e, n, r, s, o, a, u, c) {
        var l,
          h,
          d,
          f,
          p,
          g,
          m,
          y,
          v,
          S,
          M,
          E,
          x,
          C,
          I,
          O = e.type;
        if (void 0 !== e.constructor) return null;
        null != n.__h &&
          ((c = n.__h), (u = e.__e = n.__e), (e.__h = null), (o = [u])),
          (l = i.__b) && l(e);
        try {
          t: if ('function' == typeof O) {
            if (
              ((y = e.props),
              (v = (l = O.contextType) && r[l.__c]),
              (S = l ? (v ? v.props.value : l.__) : r),
              n.__c
                ? (m = (h = e.__c = n.__c).__ = h.__E)
                : ('prototype' in O && O.prototype.render
                    ? (e.__c = h = new O(y, S))
                    : ((e.__c = h = new w(y, S)),
                      (h.constructor = O),
                      (h.render = H)),
                  v && v.sub(h),
                  (h.props = y),
                  h.state || (h.state = {}),
                  (h.context = S),
                  (h.__n = r),
                  (d = h.__d = !0),
                  (h.__h = []),
                  (h._sb = [])),
              null == h.__s && (h.__s = h.state),
              null != O.getDerivedStateFromProps &&
                (h.__s == h.state && (h.__s = b({}, h.__s)),
                b(h.__s, O.getDerivedStateFromProps(y, h.__s))),
              (f = h.props),
              (p = h.state),
              (h.__v = e),
              d)
            )
              null == O.getDerivedStateFromProps &&
                null != h.componentWillMount &&
                h.componentWillMount(),
                null != h.componentDidMount && h.__h.push(h.componentDidMount);
            else {
              if (
                (null == O.getDerivedStateFromProps &&
                  y !== f &&
                  null != h.componentWillReceiveProps &&
                  h.componentWillReceiveProps(y, S),
                (!h.__e &&
                  null != h.shouldComponentUpdate &&
                  !1 === h.shouldComponentUpdate(y, h.__s, S)) ||
                  e.__v === n.__v)
              ) {
                for (
                  e.__v !== n.__v &&
                    ((h.props = y), (h.state = h.__s), (h.__d = !1)),
                    h.__e = !1,
                    e.__e = n.__e,
                    e.__k = n.__k,
                    e.__k.forEach(function (t) {
                      t && (t.__ = e);
                    }),
                    M = 0;
                  M < h._sb.length;
                  M++
                )
                  h.__h.push(h._sb[M]);
                (h._sb = []), h.__h.length && a.push(h);
                break t;
              }
              null != h.componentWillUpdate &&
                h.componentWillUpdate(y, h.__s, S),
                null != h.componentDidUpdate &&
                  h.__h.push(function () {
                    h.componentDidUpdate(f, p, g);
                  });
            }
            if (
              ((h.context = S),
              (h.props = y),
              (h.__P = t),
              (E = i.__r),
              (x = 0),
              'prototype' in O && O.prototype.render)
            ) {
              for (
                h.state = h.__s,
                  h.__d = !1,
                  E && E(e),
                  l = h.render(h.props, h.state, h.context),
                  C = 0;
                C < h._sb.length;
                C++
              )
                h.__h.push(h._sb[C]);
              h._sb = [];
            } else
              do {
                (h.__d = !1),
                  E && E(e),
                  (l = h.render(h.props, h.state, h.context)),
                  (h.state = h.__s);
              } while (h.__d && ++x < 25);
            (h.state = h.__s),
              null != h.getChildContext &&
                (r = b(b({}, r), h.getChildContext())),
              d ||
                null == h.getSnapshotBeforeUpdate ||
                (g = h.getSnapshotBeforeUpdate(f, p)),
              (I =
                null != l && l.type === _ && null == l.key
                  ? l.props.children
                  : l),
              k(t, Array.isArray(I) ? I : [I], e, n, r, s, o, a, u, c),
              (h.base = e.__e),
              (e.__h = null),
              h.__h.length && a.push(h),
              m && (h.__E = h.__ = null),
              (h.__e = !1);
          } else
            null == o && e.__v === n.__v
              ? ((e.__k = n.__k), (e.__e = n.__e))
              : (e.__e = B(n.__e, e, n, r, s, o, a, c));
          (l = i.diffed) && l(e);
        } catch (t) {
          (e.__v = null),
            (c || null != o) &&
              ((e.__e = u), (e.__h = !!c), (o[o.indexOf(u)] = null)),
            i.__e(t, e, n);
        }
      }
      function D(t, e) {
        i.__c && i.__c(e, t),
          t.some(function (e) {
            try {
              (t = e.__h),
                (e.__h = []),
                t.some(function (t) {
                  t.call(e);
                });
            } catch (t) {
              i.__e(t, e.__v);
            }
          });
      }
      function B(t, e, n, i, s, o, a, u) {
        var c,
          l,
          h,
          f = n.props,
          p = e.props,
          b = e.type,
          m = 0;
        if (('svg' === b && (s = !0), null != o))
          for (; m < o.length; m++)
            if (
              (c = o[m]) &&
              'setAttribute' in c == !!b &&
              (b ? c.localName === b : 3 === c.nodeType)
            ) {
              (t = c), (o[m] = null);
              break;
            }
        if (null == t) {
          if (null === b) return document.createTextNode(p);
          (t = s
            ? document.createElementNS('http://www.w3.org/2000/svg', b)
            : document.createElement(b, p.is && p)),
            (o = null),
            (u = !1);
        }
        if (null === b) f === p || (u && t.data === p) || (t.data = p);
        else {
          if (
            ((o = o && r.call(t.childNodes)),
            (l = (f = n.props || d).dangerouslySetInnerHTML),
            (h = p.dangerouslySetInnerHTML),
            !u)
          ) {
            if (null != o)
              for (f = {}, m = 0; m < t.attributes.length; m++)
                f[t.attributes[m].name] = t.attributes[m].value;
            (h || l) &&
              ((h &&
                ((l && h.__html == l.__html) || h.__html === t.innerHTML)) ||
                (t.innerHTML = (h && h.__html) || ''));
          }
          if ((A(t, p, f, s, u), h)) e.__k = [];
          else if (
            ((m = e.props.children),
            k(
              t,
              Array.isArray(m) ? m : [m],
              e,
              n,
              i,
              s && 'foreignObject' !== b,
              o,
              a,
              o ? o[0] : n.__k && S(n, 0),
              u,
            ),
            null != o)
          )
            for (m = o.length; m--; ) null != o[m] && g(o[m]);
          u ||
            ('value' in p &&
              void 0 !== (m = p.value) &&
              (m !== t.value ||
                ('progress' === b && !m) ||
                ('option' === b && m !== f.value)) &&
              N(t, 'value', m, f.value, !1),
            'checked' in p &&
              void 0 !== (m = p.checked) &&
              m !== t.checked &&
              N(t, 'checked', m, f.checked, !1));
        }
        return t;
      }
      function F(t, e, n) {
        try {
          'function' == typeof t ? t(e) : (t.current = e);
        } catch (t) {
          i.__e(t, n);
        }
      }
      function U(t, e, n) {
        var r, s;
        if (
          (i.unmount && i.unmount(t),
          (r = t.ref) && ((r.current && r.current !== t.__e) || F(r, null, e)),
          null != (r = t.__c))
        ) {
          if (r.componentWillUnmount)
            try {
              r.componentWillUnmount();
            } catch (t) {
              i.__e(t, e);
            }
          (r.base = r.__P = null), (t.__c = void 0);
        }
        if ((r = t.__k))
          for (s = 0; s < r.length; s++)
            r[s] && U(r[s], e, n || 'function' != typeof t.type);
        n || null == t.__e || g(t.__e), (t.__ = t.__e = t.__d = void 0);
      }
      function H(t, e, n) {
        return this.constructor(t, n);
      }
      function W(t, e, n) {
        var s, o, a;
        i.__ && i.__(t, e),
          (o = (s = 'function' == typeof n) ? null : (n && n.__k) || e.__k),
          (a = []),
          P(
            e,
            (t = ((!s && n) || e).__k = m(_, null, [t])),
            o || d,
            d,
            void 0 !== e.ownerSVGElement,
            !s && n
              ? [n]
              : o
              ? null
              : e.firstChild
              ? r.call(e.childNodes)
              : null,
            a,
            !s && n ? n : o ? o.__e : e.firstChild,
            s,
          ),
          D(a, t);
      }
      function z(t, e) {
        W(t, e, z);
      }
      function V(t, e, n) {
        var i,
          s,
          o,
          a = b({}, t.props);
        for (o in e)
          'key' == o ? (i = e[o]) : 'ref' == o ? (s = e[o]) : (a[o] = e[o]);
        return (
          arguments.length > 2 &&
            (a.children = arguments.length > 3 ? r.call(arguments, 2) : n),
          y(t.type, a, i || t.key, s || t.ref, null)
        );
      }
      function q(t, e) {
        var n = {
          __c: (e = '__cC' + h++),
          __: t,
          Consumer: function (t, e) {
            return t.children(e);
          },
          Provider: function (t) {
            var n, r;
            return (
              this.getChildContext ||
                ((n = []),
                ((r = {})[e] = this),
                (this.getChildContext = function () {
                  return r;
                }),
                (this.shouldComponentUpdate = function (t) {
                  this.props.value !== t.value &&
                    n.some(function (t) {
                      (t.__e = !0), E(t);
                    });
                }),
                (this.sub = function (t) {
                  n.push(t);
                  var e = t.componentWillUnmount;
                  t.componentWillUnmount = function () {
                    n.splice(n.indexOf(t), 1), e && e.call(t);
                  };
                })),
              t.children
            );
          },
        };
        return (n.Provider.__ = n.Consumer.contextType = n);
      }
      (r = f.slice),
        (i = {
          __e: function (t, e, n, r) {
            for (var i, s, o; (e = e.__); )
              if ((i = e.__c) && !i.__)
                try {
                  if (
                    ((s = i.constructor) &&
                      null != s.getDerivedStateFromError &&
                      (i.setState(s.getDerivedStateFromError(t)), (o = i.__d)),
                    null != i.componentDidCatch &&
                      (i.componentDidCatch(t, r || {}), (o = i.__d)),
                    o)
                  )
                    return (i.__E = i);
                } catch (e) {
                  t = e;
                }
            throw t;
          },
        }),
        (s = 0),
        (o = function (t) {
          return null != t && void 0 === t.constructor;
        }),
        (w.prototype.setState = function (t, e) {
          var n;
          (n =
            null != this.__s && this.__s !== this.state
              ? this.__s
              : (this.__s = b({}, this.state))),
            'function' == typeof t && (t = t(b({}, n), this.props)),
            t && b(n, t),
            null != t && this.__v && (e && this._sb.push(e), E(this));
        }),
        (w.prototype.forceUpdate = function (t) {
          this.__v && ((this.__e = !0), t && this.__h.push(t), E(this));
        }),
        (w.prototype.render = _),
        (a = []),
        (c =
          'function' == typeof Promise
            ? Promise.prototype.then.bind(Promise.resolve())
            : setTimeout),
        (l = function (t, e) {
          return t.__v.__b - e.__v.__b;
        }),
        (x.__r = 0),
        (h = 0);
    },
    '2nhq': function (t, e, n) {
      const r = n('q6/2').Mutex,
        { createAsyncMiddleware: i, createScaffoldMiddleware: s } = n('llSS'),
        o = n('FqFB'),
        a = n('rW7p'),
        u = n('hyCD'),
        { intToHex: c, hexToInt: l } = n('UJ2e');
      function h({ blockTracker: t, provider: e }) {
        let n = 0,
          i = {};
        const h = new r(),
          g = p({ mutex: h }),
          m = s({
            eth_newFilter: g(d(v)),
            eth_newBlockFilter: g(d(_)),
            eth_newPendingTransactionFilter: g(d(w)),
            eth_uninstallFilter: g(f(E)),
            eth_getFilterChanges: g(f(S)),
            eth_getFilterLogs: g(f(M)),
          }),
          y = async ({ oldBlock: t, newBlock: e }) => {
            if (0 === i.length) return;
            const n = await h.acquire();
            try {
              await Promise.all(
                b(i).map(async (n) => {
                  try {
                    await n.update({ oldBlock: t, newBlock: e });
                  } catch (r) {
                    console.error(r);
                  }
                }),
              );
            } catch (r) {
              console.error(r);
            }
            n();
          };
        return (
          (m.newLogFilter = v),
          (m.newBlockFilter = _),
          (m.newPendingTransactionFilter = w),
          (m.uninstallFilter = E),
          (m.getFilterChanges = S),
          (m.getFilterLogs = M),
          (m.destroy = () => {
            C();
          }),
          m
        );
        async function v(t) {
          const n = new o({ provider: e, params: t });
          await x(n);
          return n;
        }
        async function _() {
          const t = new a({ provider: e });
          await x(t);
          return t;
        }
        async function w() {
          const t = new u({ provider: e });
          await x(t);
          return t;
        }
        async function S(t) {
          const e = l(t),
            n = i[e];
          if (!n) throw new Error(`No filter for index "${e}"`);
          const r = n.getChangesAndClear();
          return r;
        }
        async function M(t) {
          const e = l(t),
            n = i[e];
          if (!n) throw new Error(`No filter for index "${e}"`);
          let r = [];
          return 'log' === n.type && (r = n.getAllResults()), r;
        }
        async function E(t) {
          const e = l(t),
            n = i[e],
            r = Boolean(n);
          return r && (await k(e)), r;
        }
        async function x(e) {
          const r = b(i).length,
            s = await t.getLatestBlock();
          await e.initialize({ currentBlock: s }),
            n++,
            (i[n] = e),
            (e.id = n),
            (e.idHex = c(n));
          const o = b(i).length;
          return I({ prevFilterCount: r, newFilterCount: o }), n;
        }
        async function k(t) {
          const e = b(i).length;
          delete i[t];
          const n = b(i).length;
          I({ prevFilterCount: e, newFilterCount: n });
        }
        async function C() {
          const t = b(i).length;
          (i = {}), I({ prevFilterCount: t, newFilterCount: 0 });
        }
        function I({ prevFilterCount: e, newFilterCount: n }) {
          0 === e && n > 0
            ? t.on('sync', y)
            : e > 0 && 0 === n && t.removeListener('sync', y);
        }
      }
      function d(t) {
        return f(async (...e) => {
          const n = await t(...e),
            r = c(n.id);
          return r;
        });
      }
      function f(t) {
        return i(async (e, n) => {
          const r = await t.apply(null, e.params);
          n.result = r;
        });
      }
      function p({ mutex: t }) {
        return (e) => async (n, r, i, s) => {
          const o = await t.acquire();
          o(), e(n, r, i, s);
        };
      }
      function b(t, e) {
        const n = [];
        for (let r in t) n.push(t[r]);
        return n;
      }
      t.exports = h;
    },
    '2wVo': function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.Web3RequestMessage = void 0);
      const r = n('e9aO');
      function i(t) {
        return Object.assign({ type: r.RelayMessageType.WEB3_REQUEST }, t);
      }
      e.Web3RequestMessage = i;
    },
    '3U0i': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return i;
      });
      var r = (function () {
          function t() {
            return (
              Error.call(this),
              (this.message = 'Timeout has occurred'),
              (this.name = 'TimeoutError'),
              this
            );
          }
          return (t.prototype = Object.create(Error.prototype)), t;
        })(),
        i = r;
    },
    '3fWJ': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return i;
      });
      var r = (function () {
          function t() {
            return (
              Error.call(this),
              (this.message = 'no elements in sequence'),
              (this.name = 'EmptyError'),
              this
            );
          }
          return (t.prototype = Object.create(Error.prototype)), t;
        })(),
        i = r;
    },
    '3fps': function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default =
          '.-cbwsdk-css-reset .-cbwsdk-spinner{display:inline-block}.-cbwsdk-css-reset .-cbwsdk-spinner svg{display:inline-block;animation:2s linear infinite -cbwsdk-spinner-svg}.-cbwsdk-css-reset .-cbwsdk-spinner svg circle{animation:1.9s ease-in-out infinite both -cbwsdk-spinner-circle;display:block;fill:rgba(0,0,0,0);stroke-dasharray:283;stroke-dashoffset:280;stroke-linecap:round;stroke-width:10px;transform-origin:50% 50%}@keyframes -cbwsdk-spinner-svg{0%{transform:rotateZ(0deg)}100%{transform:rotateZ(360deg)}}@keyframes -cbwsdk-spinner-circle{0%,25%{stroke-dashoffset:280;transform:rotate(0)}50%,75%{stroke-dashoffset:75;transform:rotate(45deg)}100%{stroke-dashoffset:280;transform:rotate(360deg)}}');
    },
    '45ke': function (t, e, n) {
      (e = t.exports = n('aKBX')),
        (e.Stream = e),
        (e.Readable = e),
        (e.Writable = n('m9xF')),
        (e.Duplex = n('iKJY')),
        (e.Transform = n('U+KF')),
        (e.PassThrough = n('uNvZ')),
        (e.finished = n('ZatM')),
        (e.pipeline = n('AYr7'));
    },
    '4HPa': function (t, e, n) {
      (function (e) {
        const { Transform: r } = n('45ke');
        t.exports = (t) =>
          class n extends r {
            constructor(e, n, r, i, s) {
              super(s),
                (this._rate = e),
                (this._capacity = n),
                (this._delimitedSuffix = r),
                (this._hashBitLength = i),
                (this._options = s),
                (this._state = new t()),
                this._state.initialize(e, n),
                (this._finalized = !1);
            }
            _transform(t, e, n) {
              let r = null;
              try {
                this.update(t, e);
              } catch (i) {
                r = i;
              }
              n(r);
            }
            _flush(t) {
              let e = null;
              try {
                this.push(this.digest());
              } catch (n) {
                e = n;
              }
              t(e);
            }
            update(t, n) {
              if (!e.isBuffer(t) && 'string' !== typeof t)
                throw new TypeError('Data must be a string or a buffer');
              if (this._finalized) throw new Error('Digest already called');
              return (
                e.isBuffer(t) || (t = e.from(t, n)), this._state.absorb(t), this
              );
            }
            digest(t) {
              if (this._finalized) throw new Error('Digest already called');
              (this._finalized = !0),
                this._delimitedSuffix &&
                  this._state.absorbLastFewBits(this._delimitedSuffix);
              let e = this._state.squeeze(this._hashBitLength / 8);
              return void 0 !== t && (e = e.toString(t)), this._resetState(), e;
            }
            _resetState() {
              return this._state.initialize(this._rate, this._capacity), this;
            }
            _clone() {
              const t = new n(
                this._rate,
                this._capacity,
                this._delimitedSuffix,
                this._hashBitLength,
                this._options,
              );
              return (
                this._state.copy(t._state), (t._finalized = this._finalized), t
              );
            }
          };
      }).call(this, n('HDXh').Buffer);
    },
    '4e0E': function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default =
          '\n    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <circle cx="50" cy="50" r="50" fill="white"/>\n        <circle cx="49.9996" cy="49.9996" r="43.6363" fill="#1B53E4"/>\n        <circle cx="49.9996" cy="49.9996" r="43.6363" stroke="white"/>\n        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.3379 49.9484C19.3379 66.8508 33.04 80.553 49.9425 80.553C66.8449 80.553 80.5471 66.8508 80.5471 49.9484C80.5471 33.0459 66.8449 19.3438 49.9425 19.3438C33.04 19.3438 19.3379 33.0459 19.3379 49.9484ZM44.0817 40.0799C41.8725 40.0799 40.0817 41.8708 40.0817 44.0799V55.8029C40.0817 58.012 41.8725 59.8029 44.0817 59.8029H55.8046C58.0138 59.8029 59.8046 58.012 59.8046 55.8029V44.0799C59.8046 41.8708 58.0138 40.0799 55.8046 40.0799H44.0817Z" fill="white"/>\n    </svg>\n');
    },
    '4xR1': function (t, e, n) {
      'use strict';
      var r =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.Spinner = void 0);
      const i = n('2mXy'),
        s = r(n('3fps')),
        o = (t) => {
          var e;
          const n = null !== (e = t.size) && void 0 !== e ? e : 64,
            r = t.color || '#000';
          return (0, i.h)(
            'div',
            { class: '-cbwsdk-spinner' },
            (0, i.h)('style', null, s.default),
            (0, i.h)(
              'svg',
              {
                viewBox: '0 0 100 100',
                xmlns: 'http://www.w3.org/2000/svg',
                style: { width: n, height: n },
              },
              (0, i.h)('circle', {
                style: { cx: 50, cy: 50, r: 45, stroke: r },
              }),
            ),
          );
        };
      e.Spinner = o;
    },
    '5eDx': function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.serializeError =
          e.isValidCode =
          e.getMessageFromCode =
          e.JSON_RPC_SERVER_ERROR_MESSAGE =
            void 0);
      const r = n('Ev0B'),
        i = n('yIX8'),
        s = r.errorCodes.rpc.internal,
        o = 'Unspecified error message. This is a bug, please report it.',
        a = { code: s, message: u(s) };
      function u(t, n = o) {
        if (Number.isInteger(t)) {
          const n = t.toString();
          if (f(r.errorValues, n)) return r.errorValues[n].message;
          if (h(t)) return e.JSON_RPC_SERVER_ERROR_MESSAGE;
        }
        return n;
      }
      function c(t) {
        if (!Number.isInteger(t)) return !1;
        const e = t.toString();
        return !!r.errorValues[e] || !!h(t);
      }
      function l(t, { fallbackError: e = a, shouldIncludeStack: n = !1 } = {}) {
        var r, s;
        if (!e || !Number.isInteger(e.code) || 'string' !== typeof e.message)
          throw new Error(
            'Must provide fallback error with integer number code and string message.',
          );
        if (t instanceof i.EthereumRpcError) return t.serialize();
        const o = {};
        if (
          t &&
          'object' === typeof t &&
          !Array.isArray(t) &&
          f(t, 'code') &&
          c(t.code)
        ) {
          const e = t;
          (o.code = e.code),
            e.message && 'string' === typeof e.message
              ? ((o.message = e.message), f(e, 'data') && (o.data = e.data))
              : ((o.message = u(o.code)), (o.data = { originalError: d(t) }));
        } else {
          o.code = e.code;
          const n = null === (r = t) || void 0 === r ? void 0 : r.message;
          (o.message = n && 'string' === typeof n ? n : e.message),
            (o.data = { originalError: d(t) });
        }
        const l = null === (s = t) || void 0 === s ? void 0 : s.stack;
        return n && t && l && 'string' === typeof l && (o.stack = l), o;
      }
      function h(t) {
        return t >= -32099 && t <= -32e3;
      }
      function d(t) {
        return t && 'object' === typeof t && !Array.isArray(t)
          ? Object.assign({}, t)
          : t;
      }
      function f(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }
      (e.JSON_RPC_SERVER_ERROR_MESSAGE = 'Unspecified server error.'),
        (e.getMessageFromCode = u),
        (e.isValidCode = c),
        (e.serializeError = l);
    },
    '60iU': function (t, e, n) {
      'use strict';
      n.d(e, 'b', function () {
        return r;
      }),
        n.d(e, 'a', function () {
          return a;
        });
      var r,
        i = n('G5J1'),
        s = n('F/XL'),
        o = n('XlPw');
      r || (r = {});
      var a = (function () {
        function t(t, e, n) {
          (this.kind = t),
            (this.value = e),
            (this.error = n),
            (this.hasValue = 'N' === t);
        }
        return (
          (t.prototype.observe = function (t) {
            switch (this.kind) {
              case 'N':
                return t.next && t.next(this.value);
              case 'E':
                return t.error && t.error(this.error);
              case 'C':
                return t.complete && t.complete();
            }
          }),
          (t.prototype.do = function (t, e, n) {
            var r = this.kind;
            switch (r) {
              case 'N':
                return t && t(this.value);
              case 'E':
                return e && e(this.error);
              case 'C':
                return n && n();
            }
          }),
          (t.prototype.accept = function (t, e, n) {
            return t && 'function' === typeof t.next
              ? this.observe(t)
              : this.do(t, e, n);
          }),
          (t.prototype.toObservable = function () {
            var t = this.kind;
            switch (t) {
              case 'N':
                return Object(s['a'])(this.value);
              case 'E':
                return Object(o['a'])(this.error);
              case 'C':
                return Object(i['b'])();
            }
            throw new Error('unexpected notification kind value');
          }),
          (t.createNext = function (e) {
            return 'undefined' !== typeof e
              ? new t('N', e)
              : t.undefinedValueNotification;
          }),
          (t.createError = function (e) {
            return new t('E', void 0, e);
          }),
          (t.createComplete = function () {
            return t.completeNotification;
          }),
          (t.completeNotification = new t('C')),
          (t.undefinedValueNotification = new t('N', void 0)),
          t
        );
      })();
    },
    '619v': function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default =
          '.-cbwsdk-css-reset .-gear-container{margin-left:16px !important;margin-right:9px !important;display:flex;align-items:center;justify-content:center;width:24px;height:24px;transition:opacity .25s}.-cbwsdk-css-reset .-gear-container *{user-select:none}.-cbwsdk-css-reset .-gear-container svg{opacity:0;position:absolute}.-cbwsdk-css-reset .-gear-icon{height:12px;width:12px;z-index:10000}.-cbwsdk-css-reset .-cbwsdk-snackbar{align-items:flex-end;display:flex;flex-direction:column;position:fixed;right:0;top:0;z-index:2147483647}.-cbwsdk-css-reset .-cbwsdk-snackbar *{user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance{display:flex;flex-direction:column;margin:8px 16px 0 16px;overflow:visible;text-align:left;transform:translateX(0);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header:hover .-gear-container svg{opacity:1}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header{display:flex;align-items:center;background:#fff;overflow:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-cblogo{margin:8px 8px 8px 8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-message{color:#000;font-size:13px;line-height:1.5;user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu{background:#fff;transition:opacity .25s ease-in-out,transform .25s linear,visibility 0s;visibility:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;opacity:0;flex-direction:column;padding-left:8px;padding-right:8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:last-child{margin-bottom:8px !important}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover{background:#f5f7f8;border-radius:6px;transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover span{color:#050f19;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover svg path{fill:#000;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item{visibility:inherit;height:35px;margin-top:8px;margin-bottom:0;display:flex;flex-direction:row;align-items:center;padding:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item *{visibility:inherit;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover{background:rgba(223,95,103,.2);transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover svg path{fill:#df5f67;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover span{color:#df5f67;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-info{color:#aaa;font-size:13px;margin:0 8px 0 32px;position:absolute}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-hidden{opacity:0;text-align:left;transform:translateX(25%);transition:opacity .5s linear}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-expanded .-cbwsdk-snackbar-instance-menu{opacity:1;display:flex;transform:translateY(8px);visibility:visible}');
    },
    '67Y/': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return s;
      });
      var r = n('mrSG'),
        i = n('FFOo');
      function s(t, e) {
        return function (n) {
          if ('function' !== typeof t)
            throw new TypeError(
              'argument is not a function. Are you looking for `mapTo()`?',
            );
          return n.lift(new o(t, e));
        };
      }
      var o = (function () {
          function t(t, e) {
            (this.project = t), (this.thisArg = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new a(t, this.project, this.thisArg));
            }),
            t
          );
        })(),
        a = (function (t) {
          function e(e, n, r) {
            var i = t.call(this, e) || this;
            return (i.project = n), (i.count = 0), (i.thisArg = r || i), i;
          }
          return (
            r['__extends'](e, t),
            (e.prototype._next = function (t) {
              var e;
              try {
                e = this.project.call(this.thisArg, t, this.count++);
              } catch (n) {
                return void this.destination.error(n);
              }
              this.destination.next(e);
            }),
            e
          );
        })(i['a']);
    },
    '6ahw': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return s;
      });
      var r = n('iLxQ'),
        i = n('DKTb'),
        s = {
          closed: !0,
          next: function (t) {},
          error: function (t) {
            if (r['a'].useDeprecatedSynchronousErrorHandling) throw t;
            Object(i['a'])(t);
          },
          complete: function () {},
        };
    },
    '6blF': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return h;
      });
      var r = n('1fDf'),
        i = n('FFOo'),
        s = n('L/V9'),
        o = n('6ahw');
      function a(t, e, n) {
        if (t) {
          if (t instanceof i['a']) return t;
          if (t[s['a']]) return t[s['a']]();
        }
        return t || e || n ? new i['a'](t, e, n) : new i['a'](o['a']);
      }
      var u = n('xTla'),
        c = n('y3By'),
        l = n('iLxQ'),
        h = (function () {
          function t(t) {
            (this._isScalar = !1), t && (this._subscribe = t);
          }
          return (
            (t.prototype.lift = function (e) {
              var n = new t();
              return (n.source = this), (n.operator = e), n;
            }),
            (t.prototype.subscribe = function (t, e, n) {
              var r = this.operator,
                i = a(t, e, n);
              if (
                (r
                  ? i.add(r.call(i, this.source))
                  : i.add(
                      this.source ||
                        (l['a'].useDeprecatedSynchronousErrorHandling &&
                          !i.syncErrorThrowable)
                        ? this._subscribe(i)
                        : this._trySubscribe(i),
                    ),
                l['a'].useDeprecatedSynchronousErrorHandling &&
                  i.syncErrorThrowable &&
                  ((i.syncErrorThrowable = !1), i.syncErrorThrown))
              )
                throw i.syncErrorValue;
              return i;
            }),
            (t.prototype._trySubscribe = function (t) {
              try {
                return this._subscribe(t);
              } catch (e) {
                l['a'].useDeprecatedSynchronousErrorHandling &&
                  ((t.syncErrorThrown = !0), (t.syncErrorValue = e)),
                  Object(r['a'])(t) ? t.error(e) : console.warn(e);
              }
            }),
            (t.prototype.forEach = function (t, e) {
              var n = this;
              return (
                (e = d(e)),
                new e(function (e, r) {
                  var i;
                  i = n.subscribe(
                    function (e) {
                      try {
                        t(e);
                      } catch (n) {
                        r(n), i && i.unsubscribe();
                      }
                    },
                    r,
                    e,
                  );
                })
              );
            }),
            (t.prototype._subscribe = function (t) {
              var e = this.source;
              return e && e.subscribe(t);
            }),
            (t.prototype[u['a']] = function () {
              return this;
            }),
            (t.prototype.pipe = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              return 0 === t.length ? this : Object(c['b'])(t)(this);
            }),
            (t.prototype.toPromise = function (t) {
              var e = this;
              return (
                (t = d(t)),
                new t(function (t, n) {
                  var r;
                  e.subscribe(
                    function (t) {
                      return (r = t);
                    },
                    function (t) {
                      return n(t);
                    },
                    function () {
                      return t(r);
                    },
                  );
                })
              );
            }),
            (t.create = function (e) {
              return new t(e);
            }),
            t
          );
        })();
      function d(t) {
        if ((t || (t = l['a'].Promise || Promise), !t))
          throw new Error('no Promise impl found');
        return t;
      }
    },
    '7tlc': function (t, e, n) {
      (function (t) {
        var r =
            Object.getOwnPropertyDescriptors ||
            function (t) {
              for (var e = Object.keys(t), n = {}, r = 0; r < e.length; r++)
                n[e[r]] = Object.getOwnPropertyDescriptor(t, e[r]);
              return n;
            },
          i = /%[sdj%]/g;
        (e.format = function (t) {
          if (!S(t)) {
            for (var e = [], n = 0; n < arguments.length; n++)
              e.push(a(arguments[n]));
            return e.join(' ');
          }
          n = 1;
          for (
            var r = arguments,
              s = r.length,
              o = String(t).replace(i, function (t) {
                if ('%%' === t) return '%';
                if (n >= s) return t;
                switch (t) {
                  case '%s':
                    return String(r[n++]);
                  case '%d':
                    return Number(r[n++]);
                  case '%j':
                    try {
                      return JSON.stringify(r[n++]);
                    } catch (e) {
                      return '[Circular]';
                    }
                  default:
                    return t;
                }
              }),
              u = r[n];
            n < s;
            u = r[++n]
          )
            v(u) || !k(u) ? (o += ' ' + u) : (o += ' ' + a(u));
          return o;
        }),
          (e.deprecate = function (n, r) {
            if ('undefined' !== typeof t && !0 === t.noDeprecation) return n;
            if ('undefined' === typeof t)
              return function () {
                return e.deprecate(n, r).apply(this, arguments);
              };
            var i = !1;
            function s() {
              if (!i) {
                if (t.throwDeprecation) throw new Error(r);
                t.traceDeprecation ? console.trace(r) : console.error(r),
                  (i = !0);
              }
              return n.apply(this, arguments);
            }
            return s;
          });
        var s,
          o = {};
        function a(t, n) {
          var r = { seen: [], stylize: c };
          return (
            arguments.length >= 3 && (r.depth = arguments[2]),
            arguments.length >= 4 && (r.colors = arguments[3]),
            y(n) ? (r.showHidden = n) : n && e._extend(r, n),
            E(r.showHidden) && (r.showHidden = !1),
            E(r.depth) && (r.depth = 2),
            E(r.colors) && (r.colors = !1),
            E(r.customInspect) && (r.customInspect = !0),
            r.colors && (r.stylize = u),
            h(r, t, r.depth)
          );
        }
        function u(t, e) {
          var n = a.styles[e];
          return n
            ? '\x1b[' +
                a.colors[n][0] +
                'm' +
                t +
                '\x1b[' +
                a.colors[n][1] +
                'm'
            : t;
        }
        function c(t, e) {
          return t;
        }
        function l(t) {
          var e = {};
          return (
            t.forEach(function (t, n) {
              e[t] = !0;
            }),
            e
          );
        }
        function h(t, n, r) {
          if (
            t.customInspect &&
            n &&
            O(n.inspect) &&
            n.inspect !== e.inspect &&
            (!n.constructor || n.constructor.prototype !== n)
          ) {
            var i = n.inspect(r, t);
            return S(i) || (i = h(t, i, r)), i;
          }
          var s = d(t, n);
          if (s) return s;
          var o = Object.keys(n),
            a = l(o);
          if (
            (t.showHidden && (o = Object.getOwnPropertyNames(n)),
            I(n) &&
              (o.indexOf('message') >= 0 || o.indexOf('description') >= 0))
          )
            return f(n);
          if (0 === o.length) {
            if (O(n)) {
              var u = n.name ? ': ' + n.name : '';
              return t.stylize('[Function' + u + ']', 'special');
            }
            if (x(n))
              return t.stylize(RegExp.prototype.toString.call(n), 'regexp');
            if (C(n)) return t.stylize(Date.prototype.toString.call(n), 'date');
            if (I(n)) return f(n);
          }
          var c,
            y = '',
            v = !1,
            _ = ['{', '}'];
          if ((m(n) && ((v = !0), (_ = ['[', ']'])), O(n))) {
            var w = n.name ? ': ' + n.name : '';
            y = ' [Function' + w + ']';
          }
          return (
            x(n) && (y = ' ' + RegExp.prototype.toString.call(n)),
            C(n) && (y = ' ' + Date.prototype.toUTCString.call(n)),
            I(n) && (y = ' ' + f(n)),
            0 !== o.length || (v && 0 != n.length)
              ? r < 0
                ? x(n)
                  ? t.stylize(RegExp.prototype.toString.call(n), 'regexp')
                  : t.stylize('[Object]', 'special')
                : (t.seen.push(n),
                  (c = v
                    ? p(t, n, r, a, o)
                    : o.map(function (e) {
                        return b(t, n, r, a, e, v);
                      })),
                  t.seen.pop(),
                  g(c, y, _))
              : _[0] + y + _[1]
          );
        }
        function d(t, e) {
          if (E(e)) return t.stylize('undefined', 'undefined');
          if (S(e)) {
            var n =
              "'" +
              JSON.stringify(e)
                .replace(/^"|"$/g, '')
                .replace(/'/g, "\\'")
                .replace(/\\"/g, '"') +
              "'";
            return t.stylize(n, 'string');
          }
          return w(e)
            ? t.stylize('' + e, 'number')
            : y(e)
            ? t.stylize('' + e, 'boolean')
            : v(e)
            ? t.stylize('null', 'null')
            : void 0;
        }
        function f(t) {
          return '[' + Error.prototype.toString.call(t) + ']';
        }
        function p(t, e, n, r, i) {
          for (var s = [], o = 0, a = e.length; o < a; ++o)
            L(e, String(o)) ? s.push(b(t, e, n, r, String(o), !0)) : s.push('');
          return (
            i.forEach(function (i) {
              i.match(/^\d+$/) || s.push(b(t, e, n, r, i, !0));
            }),
            s
          );
        }
        function b(t, e, n, r, i, s) {
          var o, a, u;
          if (
            ((u = Object.getOwnPropertyDescriptor(e, i) || { value: e[i] }),
            u.get
              ? (a = u.set
                  ? t.stylize('[Getter/Setter]', 'special')
                  : t.stylize('[Getter]', 'special'))
              : u.set && (a = t.stylize('[Setter]', 'special')),
            L(r, i) || (o = '[' + i + ']'),
            a ||
              (t.seen.indexOf(u.value) < 0
                ? ((a = v(n) ? h(t, u.value, null) : h(t, u.value, n - 1)),
                  a.indexOf('\n') > -1 &&
                    (a = s
                      ? a
                          .split('\n')
                          .map(function (t) {
                            return '  ' + t;
                          })
                          .join('\n')
                          .substr(2)
                      : '\n' +
                        a
                          .split('\n')
                          .map(function (t) {
                            return '   ' + t;
                          })
                          .join('\n')))
                : (a = t.stylize('[Circular]', 'special'))),
            E(o))
          ) {
            if (s && i.match(/^\d+$/)) return a;
            (o = JSON.stringify('' + i)),
              o.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
                ? ((o = o.substr(1, o.length - 2)), (o = t.stylize(o, 'name')))
                : ((o = o
                    .replace(/'/g, "\\'")
                    .replace(/\\"/g, '"')
                    .replace(/(^"|"$)/g, "'")),
                  (o = t.stylize(o, 'string')));
          }
          return o + ': ' + a;
        }
        function g(t, e, n) {
          var r = t.reduce(function (t, e) {
            return (
              e.indexOf('\n') >= 0 && 0,
              t + e.replace(/\u001b\[\d\d?m/g, '').length + 1
            );
          }, 0);
          return r > 60
            ? n[0] +
                ('' === e ? '' : e + '\n ') +
                ' ' +
                t.join(',\n  ') +
                ' ' +
                n[1]
            : n[0] + e + ' ' + t.join(', ') + ' ' + n[1];
        }
        function m(t) {
          return Array.isArray(t);
        }
        function y(t) {
          return 'boolean' === typeof t;
        }
        function v(t) {
          return null === t;
        }
        function _(t) {
          return null == t;
        }
        function w(t) {
          return 'number' === typeof t;
        }
        function S(t) {
          return 'string' === typeof t;
        }
        function M(t) {
          return 'symbol' === typeof t;
        }
        function E(t) {
          return void 0 === t;
        }
        function x(t) {
          return k(t) && '[object RegExp]' === A(t);
        }
        function k(t) {
          return 'object' === typeof t && null !== t;
        }
        function C(t) {
          return k(t) && '[object Date]' === A(t);
        }
        function I(t) {
          return k(t) && ('[object Error]' === A(t) || t instanceof Error);
        }
        function O(t) {
          return 'function' === typeof t;
        }
        function j(t) {
          return (
            null === t ||
            'boolean' === typeof t ||
            'number' === typeof t ||
            'string' === typeof t ||
            'symbol' === typeof t ||
            'undefined' === typeof t
          );
        }
        function A(t) {
          return Object.prototype.toString.call(t);
        }
        function R(t) {
          return t < 10 ? '0' + t.toString(10) : t.toString(10);
        }
        (e.debuglog = function (n) {
          if (
            (E(s) && (s = Object({ NODE_ENV: 'production' }).NODE_DEBUG || ''),
            (n = n.toUpperCase()),
            !o[n])
          )
            if (new RegExp('\\b' + n + '\\b', 'i').test(s)) {
              var r = t.pid;
              o[n] = function () {
                var t = e.format.apply(e, arguments);
                console.error('%s %d: %s', n, r, t);
              };
            } else o[n] = function () {};
          return o[n];
        }),
          (e.inspect = a),
          (a.colors = {
            bold: [1, 22],
            italic: [3, 23],
            underline: [4, 24],
            inverse: [7, 27],
            white: [37, 39],
            grey: [90, 39],
            black: [30, 39],
            blue: [34, 39],
            cyan: [36, 39],
            green: [32, 39],
            magenta: [35, 39],
            red: [31, 39],
            yellow: [33, 39],
          }),
          (a.styles = {
            special: 'cyan',
            number: 'yellow',
            boolean: 'yellow',
            undefined: 'grey',
            null: 'bold',
            string: 'green',
            date: 'magenta',
            regexp: 'red',
          }),
          (e.isArray = m),
          (e.isBoolean = y),
          (e.isNull = v),
          (e.isNullOrUndefined = _),
          (e.isNumber = w),
          (e.isString = S),
          (e.isSymbol = M),
          (e.isUndefined = E),
          (e.isRegExp = x),
          (e.isObject = k),
          (e.isDate = C),
          (e.isError = I),
          (e.isFunction = O),
          (e.isPrimitive = j),
          (e.isBuffer = n('j/1Z'));
        var N = [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ];
        function T() {
          var t = new Date(),
            e = [R(t.getHours()), R(t.getMinutes()), R(t.getSeconds())].join(
              ':',
            );
          return [t.getDate(), N[t.getMonth()], e].join(' ');
        }
        function L(t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        }
        (e.log = function () {
          console.log('%s - %s', T(), e.format.apply(e, arguments));
        }),
          (e.inherits = n('FfBw')),
          (e._extend = function (t, e) {
            if (!e || !k(e)) return t;
            var n = Object.keys(e),
              r = n.length;
            while (r--) t[n[r]] = e[n[r]];
            return t;
          });
        var P =
          'undefined' !== typeof Symbol
            ? Symbol('util.promisify.custom')
            : void 0;
        function D(t, e) {
          if (!t) {
            var n = new Error('Promise was rejected with a falsy value');
            (n.reason = t), (t = n);
          }
          return e(t);
        }
        function B(e) {
          if ('function' !== typeof e)
            throw new TypeError(
              'The "original" argument must be of type Function',
            );
          function n() {
            for (var n = [], r = 0; r < arguments.length; r++)
              n.push(arguments[r]);
            var i = n.pop();
            if ('function' !== typeof i)
              throw new TypeError('The last argument must be of type Function');
            var s = this,
              o = function () {
                return i.apply(s, arguments);
              };
            e.apply(this, n).then(
              function (e) {
                t.nextTick(o, null, e);
              },
              function (e) {
                t.nextTick(D, e, o);
              },
            );
          }
          return (
            Object.setPrototypeOf(n, Object.getPrototypeOf(e)),
            Object.defineProperties(n, r(e)),
            n
          );
        }
        (e.promisify = function (t) {
          if ('function' !== typeof t)
            throw new TypeError(
              'The "original" argument must be of type Function',
            );
          if (P && t[P]) {
            var e = t[P];
            if ('function' !== typeof e)
              throw new TypeError(
                'The "util.promisify.custom" argument must be of type Function',
              );
            return (
              Object.defineProperty(e, P, {
                value: e,
                enumerable: !1,
                writable: !1,
                configurable: !0,
              }),
              e
            );
          }
          function e() {
            for (
              var e,
                n,
                r = new Promise(function (t, r) {
                  (e = t), (n = r);
                }),
                i = [],
                s = 0;
              s < arguments.length;
              s++
            )
              i.push(arguments[s]);
            i.push(function (t, r) {
              t ? n(t) : e(r);
            });
            try {
              t.apply(this, i);
            } catch (o) {
              n(o);
            }
            return r;
          }
          return (
            Object.setPrototypeOf(e, Object.getPrototypeOf(t)),
            P &&
              Object.defineProperty(e, P, {
                value: e,
                enumerable: !1,
                writable: !1,
                configurable: !0,
              }),
            Object.defineProperties(e, r(t))
          );
        }),
          (e.promisify.custom = P),
          (e.callbackify = B);
      }).call(this, n('Q2Ig'));
    },
    '7wIv': function (t, e, n) {
      'use strict';
      var r;
      function i(t, e, n) {
        if (!n || typeof n.value !== r.typeOfFunction)
          throw new TypeError(
            'Only methods can be decorated with @bind. <' +
              e +
              '> is not a method!',
          );
        return {
          configurable: r.boolTrue,
          get: function () {
            var t = n.value.bind(this);
            return (
              Object.defineProperty(this, e, {
                value: t,
                configurable: r.boolTrue,
                writable: r.boolTrue,
              }),
              t
            );
          },
        };
      }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (function (t) {
          (t.typeOfFunction = 'function'), (t.boolTrue = !0);
        })(r || (r = {})),
        (e.bind = i),
        (e.default = i);
    },
    '8Pg7': function (t, e, n) {
      const r = n('zvTS');
      class i extends r {
        constructor() {
          super(), (this.allResults = []);
        }
        async update() {
          throw new Error('BaseFilterWithHistory - no update method specified');
        }
        addResults(t) {
          (this.allResults = this.allResults.concat(t)), super.addResults(t);
        }
        addInitialResults(t) {
          (this.allResults = this.allResults.concat(t)),
            super.addInitialResults(t);
        }
        getAllResults() {
          return this.allResults;
        }
      }
      t.exports = i;
    },
    '8g8A': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return i;
      });
      var r = (function () {
          function t() {
            return (
              Error.call(this),
              (this.message = 'object unsubscribed'),
              (this.name = 'ObjectUnsubscribedError'),
              this
            );
          }
          return (t.prototype = Object.create(Error.prototype)), t;
        })(),
        i = r;
    },
    '909l': function (t, e, n) {
      'use strict';
      n.d(e, 'b', function () {
        return c;
      }),
        n.d(e, 'a', function () {
          return l;
        });
      var r = n('mrSG'),
        i = n('IUTb'),
        s = n('isby'),
        o = n('FFOo'),
        a = n('En8+'),
        u = n('z4bA');
      function c() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var n = t[t.length - 1];
        return (
          'function' === typeof n && t.pop(),
          Object(i['a'])(t, void 0).lift(new l(n))
        );
      }
      var l = (function () {
          function t(t) {
            this.resultSelector = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new h(t, this.resultSelector));
            }),
            t
          );
        })(),
        h = (function (t) {
          function e(e, n, r) {
            void 0 === r && (r = Object.create(null));
            var i = t.call(this, e) || this;
            return (
              (i.resultSelector = n),
              (i.iterators = []),
              (i.active = 0),
              (i.resultSelector = 'function' === typeof n ? n : void 0),
              i
            );
          }
          return (
            r['__extends'](e, t),
            (e.prototype._next = function (t) {
              var e = this.iterators;
              Object(s['a'])(t)
                ? e.push(new f(t))
                : 'function' === typeof t[a['a']]
                ? e.push(new d(t[a['a']]()))
                : e.push(new p(this.destination, this, t));
            }),
            (e.prototype._complete = function () {
              var t = this.iterators,
                e = t.length;
              if ((this.unsubscribe(), 0 !== e)) {
                this.active = e;
                for (var n = 0; n < e; n++) {
                  var r = t[n];
                  if (r.stillUnsubscribed) {
                    var i = this.destination;
                    i.add(r.subscribe());
                  } else this.active--;
                }
              } else this.destination.complete();
            }),
            (e.prototype.notifyInactive = function () {
              this.active--, 0 === this.active && this.destination.complete();
            }),
            (e.prototype.checkIterators = function () {
              for (
                var t = this.iterators,
                  e = t.length,
                  n = this.destination,
                  r = 0;
                r < e;
                r++
              ) {
                var i = t[r];
                if ('function' === typeof i.hasValue && !i.hasValue()) return;
              }
              var s = !1,
                o = [];
              for (r = 0; r < e; r++) {
                i = t[r];
                var a = i.next();
                if ((i.hasCompleted() && (s = !0), a.done))
                  return void n.complete();
                o.push(a.value);
              }
              this.resultSelector ? this._tryresultSelector(o) : n.next(o),
                s && n.complete();
            }),
            (e.prototype._tryresultSelector = function (t) {
              var e;
              try {
                e = this.resultSelector.apply(this, t);
              } catch (n) {
                return void this.destination.error(n);
              }
              this.destination.next(e);
            }),
            e
          );
        })(o['a']),
        d = (function () {
          function t(t) {
            (this.iterator = t), (this.nextResult = t.next());
          }
          return (
            (t.prototype.hasValue = function () {
              return !0;
            }),
            (t.prototype.next = function () {
              var t = this.nextResult;
              return (this.nextResult = this.iterator.next()), t;
            }),
            (t.prototype.hasCompleted = function () {
              var t = this.nextResult;
              return Boolean(t && t.done);
            }),
            t
          );
        })(),
        f = (function () {
          function t(t) {
            (this.array = t),
              (this.index = 0),
              (this.length = 0),
              (this.length = t.length);
          }
          return (
            (t.prototype[a['a']] = function () {
              return this;
            }),
            (t.prototype.next = function (t) {
              var e = this.index++,
                n = this.array;
              return e < this.length
                ? { value: n[e], done: !1 }
                : { value: null, done: !0 };
            }),
            (t.prototype.hasValue = function () {
              return this.array.length > this.index;
            }),
            (t.prototype.hasCompleted = function () {
              return this.array.length === this.index;
            }),
            t
          );
        })(),
        p = (function (t) {
          function e(e, n, r) {
            var i = t.call(this, e) || this;
            return (
              (i.parent = n),
              (i.observable = r),
              (i.stillUnsubscribed = !0),
              (i.buffer = []),
              (i.isComplete = !1),
              i
            );
          }
          return (
            r['__extends'](e, t),
            (e.prototype[a['a']] = function () {
              return this;
            }),
            (e.prototype.next = function () {
              var t = this.buffer;
              return 0 === t.length && this.isComplete
                ? { value: null, done: !0 }
                : { value: t.shift(), done: !1 };
            }),
            (e.prototype.hasValue = function () {
              return this.buffer.length > 0;
            }),
            (e.prototype.hasCompleted = function () {
              return 0 === this.buffer.length && this.isComplete;
            }),
            (e.prototype.notifyComplete = function () {
              this.buffer.length > 0
                ? ((this.isComplete = !0), this.parent.notifyInactive())
                : this.destination.complete();
            }),
            (e.prototype.notifyNext = function (t) {
              this.buffer.push(t), this.parent.checkIterators();
            }),
            (e.prototype.subscribe = function () {
              return Object(u['c'])(this.observable, new u['a'](this));
            }),
            e
          );
        })(u['b']);
    },
    '9vAn': function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.Session = void 0);
      const r = n('afKu'),
        i = n('Qann'),
        s = 'session:id',
        o = 'session:secret',
        a = 'session:linked';
      class u {
        constructor(t, e, n, s) {
          (this._storage = t),
            (this._id = e || (0, i.randomBytesHex)(16)),
            (this._secret = n || (0, i.randomBytesHex)(32)),
            (this._key = new r.sha256()
              .update(`${this._id}, ${this._secret} WalletLink`)
              .digest('hex')),
            (this._linked = !!s);
        }
        static load(t) {
          const e = t.getItem(s),
            n = t.getItem(a),
            r = t.getItem(o);
          return e && r ? new u(t, e, r, '1' === n) : null;
        }
        static hash(t) {
          return new r.sha256().update(t).digest('hex');
        }
        get id() {
          return this._id;
        }
        get secret() {
          return this._secret;
        }
        get key() {
          return this._key;
        }
        get linked() {
          return this._linked;
        }
        set linked(t) {
          (this._linked = t), this.persistLinked();
        }
        save() {
          return (
            this._storage.setItem(s, this._id),
            this._storage.setItem(o, this._secret),
            this.persistLinked(),
            this
          );
        }
        persistLinked() {
          this._storage.setItem(a, this._linked ? '1' : '0');
        }
      }
      e.Session = u;
    },
    AYr7: function (t, e, n) {
      'use strict';
      var r;
      function i(t) {
        var e = !1;
        return function () {
          e || ((e = !0), t.apply(void 0, arguments));
        };
      }
      var s = n('kFRM').codes,
        o = s.ERR_MISSING_ARGS,
        a = s.ERR_STREAM_DESTROYED;
      function u(t) {
        if (t) throw t;
      }
      function c(t) {
        return t.setHeader && 'function' === typeof t.abort;
      }
      function l(t, e, s, o) {
        o = i(o);
        var u = !1;
        t.on('close', function () {
          u = !0;
        }),
          void 0 === r && (r = n('ZatM')),
          r(t, { readable: e, writable: s }, function (t) {
            if (t) return o(t);
            (u = !0), o();
          });
        var l = !1;
        return function (e) {
          if (!u && !l)
            return (
              (l = !0),
              c(t)
                ? t.abort()
                : 'function' === typeof t.destroy
                ? t.destroy()
                : void o(e || new a('pipe'))
            );
        };
      }
      function h(t) {
        t();
      }
      function d(t, e) {
        return t.pipe(e);
      }
      function f(t) {
        return t.length
          ? 'function' !== typeof t[t.length - 1]
            ? u
            : t.pop()
          : u;
      }
      function p() {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
          e[n] = arguments[n];
        var r,
          i = f(e);
        if ((Array.isArray(e[0]) && (e = e[0]), e.length < 2))
          throw new o('streams');
        var s = e.map(function (t, n) {
          var o = n < e.length - 1,
            a = n > 0;
          return l(t, o, a, function (t) {
            r || (r = t), t && s.forEach(h), o || (s.forEach(h), i(r));
          });
        });
        return e.reduce(d);
      }
      t.exports = p;
    },
    AjSF: function (t, e, n) {
      'use strict';
      (function (t) {
        var r =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.CoinbaseWalletProvider = void 0);
        const i = r(n('Fj00')),
          s = r(n('pUf3')),
          o = n('oktN'),
          a = n('Y5IT'),
          u = n('9vAn'),
          c = n('K6Iq'),
          l = n('Qann'),
          h = r(n('KFPw')),
          d = n('arZh'),
          f = n('DcGE'),
          p = n('z2lR'),
          b = 'DefaultChainId',
          g = 'DefaultJsonRpcUrl';
        class m extends i.default {
          constructor(t) {
            var e, n;
            super(),
              (this._filterPolyfill = new d.FilterPolyfill(this)),
              (this._subscriptionManager = new p.SubscriptionManager(this)),
              (this._relay = null),
              (this._addresses = []),
              (this.hasMadeFirstChainChangedEmission = !1),
              (this._send = this.send.bind(this)),
              (this._sendAsync = this.sendAsync.bind(this)),
              (this.setProviderInfo = this.setProviderInfo.bind(this)),
              (this.updateProviderInfo = this.updateProviderInfo.bind(this)),
              (this.getChainId = this.getChainId.bind(this)),
              (this.setAppInfo = this.setAppInfo.bind(this)),
              (this.enable = this.enable.bind(this)),
              (this.close = this.close.bind(this)),
              (this.send = this.send.bind(this)),
              (this.sendAsync = this.sendAsync.bind(this)),
              (this.request = this.request.bind(this)),
              (this._setAddresses = this._setAddresses.bind(this)),
              (this.scanQRCode = this.scanQRCode.bind(this)),
              (this.genericRequest = this.genericRequest.bind(this)),
              (this._chainIdFromOpts = t.chainId),
              (this._jsonRpcUrlFromOpts = t.jsonRpcUrl),
              (this._overrideIsMetaMask = t.overrideIsMetaMask),
              (this._relayProvider = t.relayProvider),
              (this._storage = t.storage),
              (this._relayEventManager = t.relayEventManager),
              (this.diagnostic = t.diagnosticLogger),
              (this.reloadOnDisconnect = !0),
              (this.isCoinbaseWallet =
                null === (e = t.overrideIsCoinbaseWallet) || void 0 === e || e),
              (this.isCoinbaseBrowser =
                null !== (n = t.overrideIsCoinbaseBrowser) &&
                void 0 !== n &&
                n),
              (this.qrUrl = t.qrUrl),
              (this.supportsAddressSwitching = t.supportsAddressSwitching),
              (this.isLedger = t.isLedger);
            const r = this.getChainId(),
              i = (0, l.prepend0x)(r.toString(16));
            this.emit('connect', { chainIdStr: i });
            const s = this._storage.getItem(c.LOCAL_STORAGE_ADDRESSES_KEY);
            if (s) {
              const t = s.split(' ');
              '' !== t[0] &&
                ((this._addresses = t.map((t) =>
                  (0, l.ensureAddressString)(t),
                )),
                this.emit('accountsChanged', t));
            }
            this._subscriptionManager.events.on('notification', (t) => {
              this.emit('message', { type: t.method, data: t.params });
            }),
              this._addresses.length > 0 && this.initializeRelay(),
              window.addEventListener('message', (t) => {
                var e;
                if (
                  t.origin === location.origin &&
                  t.source === window &&
                  'walletLinkMessage' === t.data.type
                ) {
                  if (
                    'defaultChainChanged' === t.data.data.action ||
                    'dappChainSwitched' === t.data.data.action
                  ) {
                    const n = t.data.data.chainId,
                      r =
                        null !== (e = t.data.data.jsonRpcUrl) && void 0 !== e
                          ? e
                          : this.jsonRpcUrl;
                    this.updateProviderInfo(r, Number(n));
                  }
                  'addressChanged' === t.data.data.action &&
                    this._setAddresses([t.data.data.address]);
                }
              });
          }
          get selectedAddress() {
            return this._addresses[0] || void 0;
          }
          get networkVersion() {
            return this.getChainId().toString(10);
          }
          get chainId() {
            return (0, l.prepend0x)(this.getChainId().toString(16));
          }
          get isWalletLink() {
            return !0;
          }
          get isMetaMask() {
            return this._overrideIsMetaMask;
          }
          get host() {
            return this.jsonRpcUrl;
          }
          get connected() {
            return !0;
          }
          isConnected() {
            return !0;
          }
          get jsonRpcUrl() {
            var t;
            return null !== (t = this._storage.getItem(g)) && void 0 !== t
              ? t
              : this._jsonRpcUrlFromOpts;
          }
          set jsonRpcUrl(t) {
            this._storage.setItem(g, t);
          }
          disableReloadOnDisconnect() {
            this.reloadOnDisconnect = !1;
          }
          setProviderInfo(t, e) {
            this.isLedger ||
              this.isCoinbaseBrowser ||
              ((this._chainIdFromOpts = e), (this._jsonRpcUrlFromOpts = t)),
              this.updateProviderInfo(this.jsonRpcUrl, this.getChainId());
          }
          updateProviderInfo(t, e) {
            this.jsonRpcUrl = t;
            const n = this.getChainId();
            this._storage.setItem(b, e.toString(10));
            const r = (0, l.ensureIntNumber)(e) !== n;
            (!r && this.hasMadeFirstChainChangedEmission) ||
              (this.emit('chainChanged', this.getChainId()),
              (this.hasMadeFirstChainChangedEmission = !0));
          }
          async watchAsset(t, e, n, r, i, s) {
            const o = await this.initializeRelay(),
              a = await o.watchAsset(
                t,
                e,
                n,
                r,
                i,
                null === s || void 0 === s ? void 0 : s.toString(),
              ).promise;
            return !!a.result;
          }
          async addEthereumChain(t, e, n, r, i, s) {
            var o, a;
            if ((0, l.ensureIntNumber)(t) === this.getChainId()) return !1;
            const u = await this.initializeRelay(),
              c = u.inlineAddEthereumChain(t.toString());
            this._isAuthorized() ||
              c ||
              (await u.requestEthereumAccounts().promise);
            const h = await u.addEthereumChain(t.toString(), e, i, n, r, s)
              .promise;
            return (
              !0 ===
                (null === (o = h.result) || void 0 === o
                  ? void 0
                  : o.isApproved) && this.updateProviderInfo(e[0], t),
              !0 ===
                (null === (a = h.result) || void 0 === a
                  ? void 0
                  : a.isApproved)
            );
          }
          async switchEthereumChain(t) {
            const e = await this.initializeRelay(),
              n = await e.switchEthereumChain(
                t.toString(10),
                this.selectedAddress || void 0,
              ).promise;
            if (n.errorCode)
              throw o.ethErrors.provider.custom({ code: n.errorCode });
            const r = n.result;
            r.isApproved &&
              r.rpcUrl.length > 0 &&
              this.updateProviderInfo(r.rpcUrl, t);
          }
          setAppInfo(t, e) {
            this.initializeRelay().then((n) => n.setAppInfo(t, e));
          }
          async enable() {
            var t;
            return (
              null === (t = this.diagnostic) ||
                void 0 === t ||
                t.log(a.EVENTS.ETH_ACCOUNTS_STATE, {
                  method: 'provider::enable',
                  addresses_length: this._addresses.length,
                  sessionIdHash: this._relay
                    ? u.Session.hash(this._relay.session.id)
                    : void 0,
                }),
              this._addresses.length > 0
                ? [...this._addresses]
                : await this._send(f.JSONRPCMethod.eth_requestAccounts)
            );
          }
          async close() {
            const t = await this.initializeRelay();
            t.resetAndReload();
          }
          send(t, e) {
            if ('string' === typeof t) {
              const n = t,
                r = Array.isArray(e) ? e : void 0 !== e ? [e] : [],
                i = { jsonrpc: '2.0', id: 0, method: n, params: r };
              return this._sendRequestAsync(i).then((t) => t.result);
            }
            if ('function' === typeof e) {
              const n = t,
                r = e;
              return this._sendAsync(n, r);
            }
            if (Array.isArray(t)) {
              const e = t;
              return e.map((t) => this._sendRequest(t));
            }
            const n = t;
            return this._sendRequest(n);
          }
          async sendAsync(t, e) {
            if ('function' !== typeof e)
              throw new Error('callback is required');
            if (Array.isArray(t)) {
              const n = e;
              return void this._sendMultipleRequestsAsync(t)
                .then((t) => n(null, t))
                .catch((t) => n(t, null));
            }
            const n = e;
            return this._sendRequestAsync(t)
              .then((t) => n(null, t))
              .catch((t) => n(t, null));
          }
          async request(t) {
            if (!t || 'object' !== typeof t || Array.isArray(t))
              throw o.ethErrors.rpc.invalidRequest({
                message: 'Expected a single, non-array, object argument.',
                data: t,
              });
            const { method: e, params: n } = t;
            if ('string' !== typeof e || 0 === e.length)
              throw o.ethErrors.rpc.invalidRequest({
                message: "'args.method' must be a non-empty string.",
                data: t,
              });
            if (
              void 0 !== n &&
              !Array.isArray(n) &&
              ('object' !== typeof n || null === n)
            )
              throw o.ethErrors.rpc.invalidRequest({
                message:
                  "'args.params' must be an object or array if provided.",
                data: t,
              });
            const r = void 0 === n ? [] : n,
              i = this._relayEventManager.makeRequestId(),
              s = await this._sendRequestAsync({
                method: e,
                params: r,
                jsonrpc: '2.0',
                id: i,
              });
            return s.result;
          }
          async scanQRCode(t) {
            const e = await this.initializeRelay(),
              n = await e.scanQRCode((0, l.ensureRegExpString)(t)).promise;
            if ('string' !== typeof n.result)
              throw new Error('result was not a string');
            return n.result;
          }
          async genericRequest(t, e) {
            const n = await this.initializeRelay(),
              r = await n.genericRequest(t, e).promise;
            if ('string' !== typeof r.result)
              throw new Error('result was not a string');
            return r.result;
          }
          async selectProvider(t) {
            const e = await this.initializeRelay(),
              n = await e.selectProvider(t).promise;
            if ('string' !== typeof n.result)
              throw new Error('result was not a string');
            return n.result;
          }
          supportsSubscriptions() {
            return !1;
          }
          subscribe() {
            throw new Error('Subscriptions are not supported');
          }
          unsubscribe() {
            throw new Error('Subscriptions are not supported');
          }
          disconnect() {
            return !0;
          }
          _sendRequest(t) {
            const e = { jsonrpc: '2.0', id: t.id },
              { method: n } = t;
            if (
              ((e.result = this._handleSynchronousMethods(t)),
              void 0 === e.result)
            )
              throw new Error(
                `Coinbase Wallet does not support calling ${n} synchronously without a callback. Please provide a callback parameter to call ${n} asynchronously.`,
              );
            return e;
          }
          _setAddresses(t, e) {
            if (!Array.isArray(t)) throw new Error('addresses is not an array');
            const n = t.map((t) => (0, l.ensureAddressString)(t));
            JSON.stringify(n) !== JSON.stringify(this._addresses) &&
              ((this._addresses.length > 0 &&
                !1 === this.supportsAddressSwitching &&
                !e) ||
                ((this._addresses = n),
                this.emit('accountsChanged', this._addresses),
                this._storage.setItem(
                  c.LOCAL_STORAGE_ADDRESSES_KEY,
                  n.join(' '),
                )));
          }
          _sendRequestAsync(t) {
            return new Promise((e, n) => {
              try {
                const r = this._handleSynchronousMethods(t);
                if (void 0 !== r)
                  return e({ jsonrpc: '2.0', id: t.id, result: r });
                const i = this._handleAsynchronousFilterMethods(t);
                if (void 0 !== i)
                  return void i
                    .then((n) =>
                      e(Object.assign(Object.assign({}, n), { id: t.id })),
                    )
                    .catch((t) => n(t));
                const s = this._handleSubscriptionMethods(t);
                if (void 0 !== s)
                  return void s
                    .then((n) =>
                      e({ jsonrpc: '2.0', id: t.id, result: n.result }),
                    )
                    .catch((t) => n(t));
              } catch (r) {
                return n(r);
              }
              this._handleAsynchronousMethods(t)
                .then(
                  (n) =>
                    n && e(Object.assign(Object.assign({}, n), { id: t.id })),
                )
                .catch((t) => n(t));
            });
          }
          _sendMultipleRequestsAsync(t) {
            return Promise.all(t.map((t) => this._sendRequestAsync(t)));
          }
          _handleSynchronousMethods(t) {
            const { method: e } = t,
              n = t.params || [];
            switch (e) {
              case f.JSONRPCMethod.eth_accounts:
                return this._eth_accounts();
              case f.JSONRPCMethod.eth_coinbase:
                return this._eth_coinbase();
              case f.JSONRPCMethod.eth_uninstallFilter:
                return this._eth_uninstallFilter(n);
              case f.JSONRPCMethod.net_version:
                return this._net_version();
              case f.JSONRPCMethod.eth_chainId:
                return this._eth_chainId();
              default:
                return;
            }
          }
          async _handleAsynchronousMethods(t) {
            const { method: e } = t,
              n = t.params || [];
            switch (e) {
              case f.JSONRPCMethod.eth_requestAccounts:
                return this._eth_requestAccounts();
              case f.JSONRPCMethod.eth_sign:
                return this._eth_sign(n);
              case f.JSONRPCMethod.eth_ecRecover:
                return this._eth_ecRecover(n);
              case f.JSONRPCMethod.personal_sign:
                return this._personal_sign(n);
              case f.JSONRPCMethod.personal_ecRecover:
                return this._personal_ecRecover(n);
              case f.JSONRPCMethod.eth_signTransaction:
                return this._eth_signTransaction(n);
              case f.JSONRPCMethod.eth_sendRawTransaction:
                return this._eth_sendRawTransaction(n);
              case f.JSONRPCMethod.eth_sendTransaction:
                return this._eth_sendTransaction(n);
              case f.JSONRPCMethod.eth_signTypedData_v1:
                return this._eth_signTypedData_v1(n);
              case f.JSONRPCMethod.eth_signTypedData_v2:
                return this._throwUnsupportedMethodError();
              case f.JSONRPCMethod.eth_signTypedData_v3:
                return this._eth_signTypedData_v3(n);
              case f.JSONRPCMethod.eth_signTypedData_v4:
              case f.JSONRPCMethod.eth_signTypedData:
                return this._eth_signTypedData_v4(n);
              case f.JSONRPCMethod.cbWallet_arbitrary:
                return this._cbwallet_arbitrary(n);
              case f.JSONRPCMethod.wallet_addEthereumChain:
                return this._wallet_addEthereumChain(n);
              case f.JSONRPCMethod.wallet_switchEthereumChain:
                return this._wallet_switchEthereumChain(n);
              case f.JSONRPCMethod.wallet_watchAsset:
                return this._wallet_watchAsset(n);
            }
            const r = await this.initializeRelay();
            return r.makeEthereumJSONRPCRequest(t, this.jsonRpcUrl);
          }
          _handleAsynchronousFilterMethods(t) {
            const { method: e } = t,
              n = t.params || [];
            switch (e) {
              case f.JSONRPCMethod.eth_newFilter:
                return this._eth_newFilter(n);
              case f.JSONRPCMethod.eth_newBlockFilter:
                return this._eth_newBlockFilter();
              case f.JSONRPCMethod.eth_newPendingTransactionFilter:
                return this._eth_newPendingTransactionFilter();
              case f.JSONRPCMethod.eth_getFilterChanges:
                return this._eth_getFilterChanges(n);
              case f.JSONRPCMethod.eth_getFilterLogs:
                return this._eth_getFilterLogs(n);
            }
          }
          _handleSubscriptionMethods(t) {
            switch (t.method) {
              case f.JSONRPCMethod.eth_subscribe:
              case f.JSONRPCMethod.eth_unsubscribe:
                return this._subscriptionManager.handleRequest(t);
            }
          }
          _isKnownAddress(t) {
            try {
              const e = (0, l.ensureAddressString)(t),
                n = this._addresses.map((t) => (0, l.ensureAddressString)(t));
              return n.includes(e);
            } catch (e) {}
            return !1;
          }
          _ensureKnownAddress(t) {
            var e;
            if (!this._isKnownAddress(t))
              throw (
                (null === (e = this.diagnostic) ||
                  void 0 === e ||
                  e.log(a.EVENTS.UNKNOWN_ADDRESS_ENCOUNTERED),
                new Error('Unknown Ethereum address'))
              );
          }
          _prepareTransactionParams(e) {
            const n = e.from
              ? (0, l.ensureAddressString)(e.from)
              : this.selectedAddress;
            if (!n) throw new Error('Ethereum address is unavailable');
            this._ensureKnownAddress(n);
            const r = e.to ? (0, l.ensureAddressString)(e.to) : null,
              i = null != e.value ? (0, l.ensureBN)(e.value) : new s.default(0),
              o = e.data ? (0, l.ensureBuffer)(e.data) : t.alloc(0),
              a = null != e.nonce ? (0, l.ensureIntNumber)(e.nonce) : null,
              u = null != e.gasPrice ? (0, l.ensureBN)(e.gasPrice) : null,
              c =
                null != e.maxFeePerGas ? (0, l.ensureBN)(e.maxFeePerGas) : null,
              h =
                null != e.maxPriorityFeePerGas
                  ? (0, l.ensureBN)(e.maxPriorityFeePerGas)
                  : null,
              d = null != e.gas ? (0, l.ensureBN)(e.gas) : null,
              f = this.getChainId();
            return {
              fromAddress: n,
              toAddress: r,
              weiValue: i,
              data: o,
              nonce: a,
              gasPriceInWei: u,
              maxFeePerGas: c,
              maxPriorityFeePerGas: h,
              gasLimit: d,
              chainId: f,
            };
          }
          _isAuthorized() {
            return this._addresses.length > 0;
          }
          _requireAuthorization() {
            if (!this._isAuthorized())
              throw o.ethErrors.provider.unauthorized({});
          }
          _throwUnsupportedMethodError() {
            throw o.ethErrors.provider.unsupportedMethod({});
          }
          async _signEthereumMessage(t, e, n, r) {
            this._ensureKnownAddress(e);
            try {
              const i = await this.initializeRelay(),
                s = await i.signEthereumMessage(t, e, n, r).promise;
              return { jsonrpc: '2.0', id: 0, result: s.result };
            } catch (i) {
              if (
                'string' === typeof i.message &&
                i.message.match(/(denied|rejected)/i)
              )
                throw o.ethErrors.provider.userRejectedRequest(
                  'User denied message signature',
                );
              throw i;
            }
          }
          async _ethereumAddressFromSignedMessage(t, e, n) {
            const r = await this.initializeRelay(),
              i = await r.ethereumAddressFromSignedMessage(t, e, n).promise;
            return { jsonrpc: '2.0', id: 0, result: i.result };
          }
          _eth_accounts() {
            return [...this._addresses];
          }
          _eth_coinbase() {
            return this.selectedAddress || null;
          }
          _net_version() {
            return this.getChainId().toString(10);
          }
          _eth_chainId() {
            return (0, l.hexStringFromIntNumber)(this.getChainId());
          }
          getChainId() {
            const t = this._storage.getItem(b);
            if (!t) return (0, l.ensureIntNumber)(this._chainIdFromOpts);
            const e = parseInt(t, 10);
            return (0, l.ensureIntNumber)(e);
          }
          async _eth_requestAccounts() {
            var t;
            if (
              (null === (t = this.diagnostic) ||
                void 0 === t ||
                t.log(a.EVENTS.ETH_ACCOUNTS_STATE, {
                  method: 'provider::_eth_requestAccounts',
                  addresses_length: this._addresses.length,
                  sessionIdHash: this._relay
                    ? u.Session.hash(this._relay.session.id)
                    : void 0,
                }),
              this._addresses.length > 0)
            )
              return Promise.resolve({
                jsonrpc: '2.0',
                id: 0,
                result: this._addresses,
              });
            let e;
            try {
              const t = await this.initializeRelay();
              e = await t.requestEthereumAccounts().promise;
            } catch (n) {
              if (
                'string' === typeof n.message &&
                n.message.match(/(denied|rejected)/i)
              )
                throw o.ethErrors.provider.userRejectedRequest(
                  'User denied account authorization',
                );
              throw n;
            }
            if (!e.result) throw new Error('accounts received is empty');
            return (
              this._setAddresses(e.result),
              this.isLedger ||
                this.isCoinbaseBrowser ||
                (await this.switchEthereumChain(this.getChainId())),
              { jsonrpc: '2.0', id: 0, result: this._addresses }
            );
          }
          _eth_sign(t) {
            this._requireAuthorization();
            const e = (0, l.ensureAddressString)(t[0]),
              n = (0, l.ensureBuffer)(t[1]);
            return this._signEthereumMessage(n, e, !1);
          }
          _eth_ecRecover(t) {
            const e = (0, l.ensureBuffer)(t[0]),
              n = (0, l.ensureBuffer)(t[1]);
            return this._ethereumAddressFromSignedMessage(e, n, !1);
          }
          _personal_sign(t) {
            this._requireAuthorization();
            const e = (0, l.ensureBuffer)(t[0]),
              n = (0, l.ensureAddressString)(t[1]);
            return this._signEthereumMessage(e, n, !0);
          }
          _personal_ecRecover(t) {
            const e = (0, l.ensureBuffer)(t[0]),
              n = (0, l.ensureBuffer)(t[1]);
            return this._ethereumAddressFromSignedMessage(e, n, !0);
          }
          async _eth_signTransaction(t) {
            this._requireAuthorization();
            const e = this._prepareTransactionParams(t[0] || {});
            try {
              const t = await this.initializeRelay(),
                n = await t.signEthereumTransaction(e).promise;
              return { jsonrpc: '2.0', id: 0, result: n.result };
            } catch (n) {
              if (
                'string' === typeof n.message &&
                n.message.match(/(denied|rejected)/i)
              )
                throw o.ethErrors.provider.userRejectedRequest(
                  'User denied transaction signature',
                );
              throw n;
            }
          }
          async _eth_sendRawTransaction(t) {
            const e = (0, l.ensureBuffer)(t[0]),
              n = await this.initializeRelay(),
              r = await n.submitEthereumTransaction(e, this.getChainId())
                .promise;
            return { jsonrpc: '2.0', id: 0, result: r.result };
          }
          async _eth_sendTransaction(t) {
            this._requireAuthorization();
            const e = this._prepareTransactionParams(t[0] || {});
            try {
              const t = await this.initializeRelay(),
                n = await t.signAndSubmitEthereumTransaction(e).promise;
              return { jsonrpc: '2.0', id: 0, result: n.result };
            } catch (n) {
              if (
                'string' === typeof n.message &&
                n.message.match(/(denied|rejected)/i)
              )
                throw o.ethErrors.provider.userRejectedRequest(
                  'User denied transaction signature',
                );
              throw n;
            }
          }
          async _eth_signTypedData_v1(t) {
            this._requireAuthorization();
            const e = (0, l.ensureParsedJSONObject)(t[0]),
              n = (0, l.ensureAddressString)(t[1]);
            this._ensureKnownAddress(n);
            const r = h.default.hashForSignTypedDataLegacy({ data: e }),
              i = JSON.stringify(e, null, 2);
            return this._signEthereumMessage(r, n, !1, i);
          }
          async _eth_signTypedData_v3(t) {
            this._requireAuthorization();
            const e = (0, l.ensureAddressString)(t[0]),
              n = (0, l.ensureParsedJSONObject)(t[1]);
            this._ensureKnownAddress(e);
            const r = h.default.hashForSignTypedData_v3({ data: n }),
              i = JSON.stringify(n, null, 2);
            return this._signEthereumMessage(r, e, !1, i);
          }
          async _eth_signTypedData_v4(t) {
            this._requireAuthorization();
            const e = (0, l.ensureAddressString)(t[0]),
              n = (0, l.ensureParsedJSONObject)(t[1]);
            this._ensureKnownAddress(e);
            const r = h.default.hashForSignTypedData_v4({ data: n }),
              i = JSON.stringify(n, null, 2);
            return this._signEthereumMessage(r, e, !1, i);
          }
          async _cbwallet_arbitrary(t) {
            const e = t[0],
              n = t[1];
            if ('string' !== typeof n)
              throw new Error('parameter must be a string');
            if ('object' !== typeof e || null === e)
              throw new Error('parameter must be an object');
            const r = await this.genericRequest(e, n);
            return { jsonrpc: '2.0', id: 0, result: r };
          }
          async _wallet_addEthereumChain(t) {
            var e, n, r, i;
            const s = t[0];
            if (
              0 ===
              (null === (e = s.rpcUrls) || void 0 === e ? void 0 : e.length)
            )
              return {
                jsonrpc: '2.0',
                id: 0,
                error: { code: 2, message: 'please pass in at least 1 rpcUrl' },
              };
            if (!s.chainName || '' === s.chainName.trim())
              throw o.ethErrors.provider.custom({
                code: 0,
                message: 'chainName is a required field',
              });
            if (!s.nativeCurrency)
              throw o.ethErrors.provider.custom({
                code: 0,
                message: 'nativeCurrency is a required field',
              });
            const a = parseInt(s.chainId, 16),
              u = await this.addEthereumChain(
                a,
                null !== (n = s.rpcUrls) && void 0 !== n ? n : [],
                null !== (r = s.blockExplorerUrls) && void 0 !== r ? r : [],
                s.chainName,
                null !== (i = s.iconUrls) && void 0 !== i ? i : [],
                s.nativeCurrency,
              );
            return u
              ? { jsonrpc: '2.0', id: 0, result: null }
              : {
                  jsonrpc: '2.0',
                  id: 0,
                  error: { code: 2, message: 'unable to add ethereum chain' },
                };
          }
          async _wallet_switchEthereumChain(t) {
            const e = t[0];
            return (
              await this.switchEthereumChain(parseInt(e.chainId, 16)),
              { jsonrpc: '2.0', id: 0, result: null }
            );
          }
          async _wallet_watchAsset(t) {
            const e = Array.isArray(t) ? t[0] : t;
            if (!e.type)
              throw o.ethErrors.rpc.invalidParams({
                message: 'Type is required',
              });
            if ('ERC20' !== (null === e || void 0 === e ? void 0 : e.type))
              throw o.ethErrors.rpc.invalidParams({
                message: `Asset of type '${e.type}' is not supported`,
              });
            if (!(null === e || void 0 === e ? void 0 : e.options))
              throw o.ethErrors.rpc.invalidParams({
                message: 'Options are required',
              });
            if (!(null === e || void 0 === e ? void 0 : e.options.address))
              throw o.ethErrors.rpc.invalidParams({
                message: 'Address is required',
              });
            const n = this.getChainId(),
              { address: r, symbol: i, image: s, decimals: a } = e.options,
              u = await this.watchAsset(e.type, r, i, a, s, n);
            return { jsonrpc: '2.0', id: 0, result: u };
          }
          _eth_uninstallFilter(t) {
            const e = (0, l.ensureHexString)(t[0]);
            return this._filterPolyfill.uninstallFilter(e);
          }
          async _eth_newFilter(t) {
            const e = t[0],
              n = await this._filterPolyfill.newFilter(e);
            return { jsonrpc: '2.0', id: 0, result: n };
          }
          async _eth_newBlockFilter() {
            const t = await this._filterPolyfill.newBlockFilter();
            return { jsonrpc: '2.0', id: 0, result: t };
          }
          async _eth_newPendingTransactionFilter() {
            const t = await this._filterPolyfill.newPendingTransactionFilter();
            return { jsonrpc: '2.0', id: 0, result: t };
          }
          _eth_getFilterChanges(t) {
            const e = (0, l.ensureHexString)(t[0]);
            return this._filterPolyfill.getFilterChanges(e);
          }
          _eth_getFilterLogs(t) {
            const e = (0, l.ensureHexString)(t[0]);
            return this._filterPolyfill.getFilterLogs(e);
          }
          initializeRelay() {
            return this._relay
              ? Promise.resolve(this._relay)
              : this._relayProvider().then(
                  (t) => (
                    t.setAccountsCallback((t, e) => this._setAddresses(t, e)),
                    t.setChainCallback((t, e) => {
                      this.updateProviderInfo(e, parseInt(t, 10));
                    }),
                    t.setDappDefaultChainCallback(this._chainIdFromOpts),
                    (this._relay = t),
                    t
                  ),
                );
          }
        }
        e.CoinbaseWalletProvider = m;
      }).call(this, n('HDXh').Buffer);
    },
    An3H: function (t, e, n) {
      t.exports = n('+qE3').EventEmitter;
    },
    Bnji: function (t, e, n) {
      'use strict';
      (function (t) {
        var r =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.QRCode = void 0);
        const i = n('2mXy'),
          s = n('MOxe'),
          o = r(n('ROmd')),
          a = (e) => {
            const [n, r] = (0, s.useState)('');
            return (
              (0, s.useEffect)(() => {
                var n, i;
                const s = new o.default({
                    content: e.content,
                    background: e.bgColor || '#ffffff',
                    color: e.fgColor || '#000000',
                    container: 'svg',
                    ecl: 'M',
                    width: null !== (n = e.width) && void 0 !== n ? n : 256,
                    height: null !== (i = e.height) && void 0 !== i ? i : 256,
                    padding: 0,
                    image: e.image,
                  }),
                  a = t.from(s.svg(), 'utf8').toString('base64');
                r(`data:image/svg+xml;base64,${a}`);
              }),
              n ? (0, i.h)('img', { src: n, alt: 'QR Code' }) : null
            );
          };
        e.QRCode = a;
      }).call(this, n('HDXh').Buffer);
    },
    CH9F: function (t, e, n) {
      var r = n('P7XM'),
        i = n('tnIz'),
        s = n('hwdV').Buffer,
        o = [1518500249, 1859775393, -1894007588, -899497514],
        a = new Array(80);
      function u() {
        this.init(), (this._w = a), i.call(this, 64, 56);
      }
      function c(t) {
        return (t << 5) | (t >>> 27);
      }
      function l(t) {
        return (t << 30) | (t >>> 2);
      }
      function h(t, e, n, r) {
        return 0 === t
          ? (e & n) | (~e & r)
          : 2 === t
          ? (e & n) | (e & r) | (n & r)
          : e ^ n ^ r;
      }
      r(u, i),
        (u.prototype.init = function () {
          return (
            (this._a = 1732584193),
            (this._b = 4023233417),
            (this._c = 2562383102),
            (this._d = 271733878),
            (this._e = 3285377520),
            this
          );
        }),
        (u.prototype._update = function (t) {
          for (
            var e = this._w,
              n = 0 | this._a,
              r = 0 | this._b,
              i = 0 | this._c,
              s = 0 | this._d,
              a = 0 | this._e,
              u = 0;
            u < 16;
            ++u
          )
            e[u] = t.readInt32BE(4 * u);
          for (; u < 80; ++u)
            e[u] = e[u - 3] ^ e[u - 8] ^ e[u - 14] ^ e[u - 16];
          for (var d = 0; d < 80; ++d) {
            var f = ~~(d / 20),
              p = (c(n) + h(f, r, i, s) + a + e[d] + o[f]) | 0;
            (a = s), (s = i), (i = l(r)), (r = n), (n = p);
          }
          (this._a = (n + this._a) | 0),
            (this._b = (r + this._b) | 0),
            (this._c = (i + this._c) | 0),
            (this._d = (s + this._d) | 0),
            (this._e = (a + this._e) | 0);
        }),
        (u.prototype._hash = function () {
          var t = s.allocUnsafe(20);
          return (
            t.writeInt32BE(0 | this._a, 0),
            t.writeInt32BE(0 | this._b, 4),
            t.writeInt32BE(0 | this._c, 8),
            t.writeInt32BE(0 | this._d, 12),
            t.writeInt32BE(0 | this._e, 16),
            t
          );
        }),
        (t.exports = u);
    },
    CS9Q: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return s;
      });
      var r = n('mrSG'),
        i = n('siIJ'),
        s = (function (t) {
          function e(n, r) {
            void 0 === r && (r = i['a'].now);
            var s =
              t.call(this, n, function () {
                return e.delegate && e.delegate !== s ? e.delegate.now() : r();
              }) || this;
            return (s.actions = []), (s.active = !1), (s.scheduled = void 0), s;
          }
          return (
            r['__extends'](e, t),
            (e.prototype.schedule = function (n, r, i) {
              return (
                void 0 === r && (r = 0),
                e.delegate && e.delegate !== this
                  ? e.delegate.schedule(n, r, i)
                  : t.prototype.schedule.call(this, n, r, i)
              );
            }),
            (e.prototype.flush = function (t) {
              var e = this.actions;
              if (this.active) e.push(t);
              else {
                var n;
                this.active = !0;
                do {
                  if ((n = t.execute(t.state, t.delay))) break;
                } while ((t = e.shift()));
                if (((this.active = !1), n)) {
                  while ((t = e.shift())) t.unsubscribe();
                  throw n;
                }
              }
            }),
            e
          );
        })(i['a']);
    },
    D0ju: function (t, e, n) {
      'use strict';
      var r =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.ConnectDialog = void 0);
      const i = r(n('iuhU')),
        s = n('2mXy'),
        o = n('MOxe'),
        a = n('eoIc'),
        u = n('zjHv'),
        c = r(n('0wy+')),
        l = (t) => {
          const { isOpen: e, darkMode: n } = t,
            [r, l] = (0, o.useState)(!e),
            [h, d] = (0, o.useState)(!e);
          (0, o.useEffect)(() => {
            const t = [
              window.setTimeout(() => {
                d(!e);
              }, 10),
            ];
            return (
              e
                ? l(!1)
                : t.push(
                    window.setTimeout(() => {
                      l(!0);
                    }, 360),
                  ),
              () => {
                t.forEach(window.clearTimeout);
              }
            );
          }, [t.isOpen]);
          const f = n ? 'dark' : 'light';
          return (0, s.h)(
            'div',
            {
              class: (0, i.default)(
                '-cbwsdk-connect-dialog-container',
                r && '-cbwsdk-connect-dialog-container-hidden',
              ),
            },
            (0, s.h)('style', null, c.default),
            (0, s.h)('div', {
              class: (0, i.default)(
                '-cbwsdk-connect-dialog-backdrop',
                f,
                h && '-cbwsdk-connect-dialog-backdrop-hidden',
              ),
            }),
            (0, s.h)(
              'div',
              { class: '-cbwsdk-connect-dialog' },
              (0, s.h)(
                'div',
                {
                  class: (0, i.default)(
                    '-cbwsdk-connect-dialog-box',
                    h && '-cbwsdk-connect-dialog-box-hidden',
                  ),
                },
                t.connectDisabled
                  ? null
                  : (0, s.h)(a.ConnectContent, {
                      theme: f,
                      version: t.version,
                      sessionId: t.sessionId,
                      sessionSecret: t.sessionSecret,
                      linkAPIUrl: t.linkAPIUrl,
                      isConnected: t.isConnected,
                      isParentConnection: t.isParentConnection,
                      chainId: t.chainId,
                      onCancel: t.onCancel,
                    }),
                (0, s.h)(u.TryExtensionContent, { theme: f }),
              ),
            ),
          );
        };
      e.ConnectDialog = l;
    },
    DKTb: function (t, e, n) {
      'use strict';
      function r(t) {
        setTimeout(function () {
          throw t;
        }, 0);
      }
      n.d(e, 'a', function () {
        return r;
      });
    },
    DcGE: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.JSONRPCMethod = void 0),
        (function (t) {
          (t['eth_accounts'] = 'eth_accounts'),
            (t['eth_coinbase'] = 'eth_coinbase'),
            (t['net_version'] = 'net_version'),
            (t['eth_chainId'] = 'eth_chainId'),
            (t['eth_uninstallFilter'] = 'eth_uninstallFilter'),
            (t['eth_requestAccounts'] = 'eth_requestAccounts'),
            (t['eth_sign'] = 'eth_sign'),
            (t['eth_ecRecover'] = 'eth_ecRecover'),
            (t['personal_sign'] = 'personal_sign'),
            (t['personal_ecRecover'] = 'personal_ecRecover'),
            (t['eth_signTransaction'] = 'eth_signTransaction'),
            (t['eth_sendRawTransaction'] = 'eth_sendRawTransaction'),
            (t['eth_sendTransaction'] = 'eth_sendTransaction'),
            (t['eth_signTypedData_v1'] = 'eth_signTypedData_v1'),
            (t['eth_signTypedData_v2'] = 'eth_signTypedData_v2'),
            (t['eth_signTypedData_v3'] = 'eth_signTypedData_v3'),
            (t['eth_signTypedData_v4'] = 'eth_signTypedData_v4'),
            (t['eth_signTypedData'] = 'eth_signTypedData'),
            (t['cbWallet_arbitrary'] = 'walletlink_arbitrary'),
            (t['wallet_addEthereumChain'] = 'wallet_addEthereumChain'),
            (t['wallet_switchEthereumChain'] = 'wallet_switchEthereumChain'),
            (t['wallet_watchAsset'] = 'wallet_watchAsset'),
            (t['eth_subscribe'] = 'eth_subscribe'),
            (t['eth_unsubscribe'] = 'eth_unsubscribe'),
            (t['eth_newFilter'] = 'eth_newFilter'),
            (t['eth_newBlockFilter'] = 'eth_newBlockFilter'),
            (t['eth_newPendingTransactionFilter'] =
              'eth_newPendingTransactionFilter'),
            (t['eth_getFilterChanges'] = 'eth_getFilterChanges'),
            (t['eth_getFilterLogs'] = 'eth_getFilterLogs');
        })(e.JSONRPCMethod || (e.JSONRPCMethod = {}));
    },
    Dp9r: function (t, e, n) {
      'use strict';
      function r(t) {
        return (
          t &&
          'Fail' === t.type &&
          'number' === typeof t.id &&
          'string' === typeof t.sessionId &&
          'string' === typeof t.error
        );
      }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.isServerMessageFail = void 0),
        (e.isServerMessageFail = r);
    },
    DtyJ: function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, 'Observable', function () {
          return r['a'];
        }),
        n.d(e, 'ConnectableObservable', function () {
          return i['a'];
        }),
        n.d(e, 'GroupedObservable', function () {
          return s['a'];
        }),
        n.d(e, 'observable', function () {
          return o['a'];
        }),
        n.d(e, 'Subject', function () {
          return a['a'];
        }),
        n.d(e, 'BehaviorSubject', function () {
          return u['a'];
        }),
        n.d(e, 'ReplaySubject', function () {
          return c['a'];
        }),
        n.d(e, 'AsyncSubject', function () {
          return l['a'];
        }),
        n.d(e, 'asap', function () {
          return h['a'];
        }),
        n.d(e, 'asapScheduler', function () {
          return h['b'];
        }),
        n.d(e, 'async', function () {
          return d['a'];
        }),
        n.d(e, 'asyncScheduler', function () {
          return d['b'];
        }),
        n.d(e, 'queue', function () {
          return f['a'];
        }),
        n.d(e, 'queueScheduler', function () {
          return f['b'];
        }),
        n.d(e, 'animationFrame', function () {
          return _;
        }),
        n.d(e, 'animationFrameScheduler', function () {
          return v;
        }),
        n.d(e, 'VirtualTimeScheduler', function () {
          return w;
        }),
        n.d(e, 'VirtualAction', function () {
          return S;
        }),
        n.d(e, 'Scheduler', function () {
          return M['a'];
        }),
        n.d(e, 'Subscription', function () {
          return E['a'];
        }),
        n.d(e, 'Subscriber', function () {
          return x['a'];
        }),
        n.d(e, 'Notification', function () {
          return k['a'];
        }),
        n.d(e, 'NotificationKind', function () {
          return k['b'];
        }),
        n.d(e, 'pipe', function () {
          return C['a'];
        }),
        n.d(e, 'noop', function () {
          return I['a'];
        }),
        n.d(e, 'identity', function () {
          return O['a'];
        }),
        n.d(e, 'isObservable', function () {
          return j;
        }),
        n.d(e, 'ArgumentOutOfRangeError', function () {
          return A['a'];
        }),
        n.d(e, 'EmptyError', function () {
          return R['a'];
        }),
        n.d(e, 'ObjectUnsubscribedError', function () {
          return N['a'];
        }),
        n.d(e, 'UnsubscriptionError', function () {
          return T['a'];
        }),
        n.d(e, 'TimeoutError', function () {
          return L['a'];
        }),
        n.d(e, 'bindCallback', function () {
          return U;
        }),
        n.d(e, 'bindNodeCallback', function () {
          return z;
        }),
        n.d(e, 'combineLatest', function () {
          return Z['b'];
        }),
        n.d(e, 'concat', function () {
          return J['a'];
        }),
        n.d(e, 'defer', function () {
          return Y['a'];
        }),
        n.d(e, 'empty', function () {
          return Q['b'];
        }),
        n.d(e, 'forkJoin', function () {
          return X;
        }),
        n.d(e, 'from', function () {
          return $['a'];
        }),
        n.d(e, 'fromEvent', function () {
          return nt;
        }),
        n.d(e, 'fromEventPattern', function () {
          return at;
        }),
        n.d(e, 'generate', function () {
          return ut;
        }),
        n.d(e, 'iif', function () {
          return lt;
        }),
        n.d(e, 'interval', function () {
          return dt;
        }),
        n.d(e, 'merge', function () {
          return pt['a'];
        }),
        n.d(e, 'never', function () {
          return gt;
        }),
        n.d(e, 'of', function () {
          return mt['a'];
        }),
        n.d(e, 'onErrorResumeNext', function () {
          return yt;
        }),
        n.d(e, 'pairs', function () {
          return vt;
        }),
        n.d(e, 'partition', function () {
          return Et;
        }),
        n.d(e, 'race', function () {
          return xt['a'];
        }),
        n.d(e, 'range', function () {
          return kt;
        }),
        n.d(e, 'throwError', function () {
          return It['a'];
        }),
        n.d(e, 'timer', function () {
          return Ot['a'];
        }),
        n.d(e, 'using', function () {
          return jt;
        }),
        n.d(e, 'zip', function () {
          return At['b'];
        }),
        n.d(e, 'scheduled', function () {
          return Rt['a'];
        }),
        n.d(e, 'EMPTY', function () {
          return Q['a'];
        }),
        n.d(e, 'NEVER', function () {
          return bt;
        }),
        n.d(e, 'config', function () {
          return Nt['a'];
        });
      var r = n('6blF'),
        i = n('KhEm'),
        s = n('IxPp'),
        o = n('xTla'),
        a = n('K9Ia'),
        u = n('26FU'),
        c = n('S5bw'),
        l = n('svcd'),
        h = n('KQya'),
        d = n('T1DM'),
        f = n('zo3G'),
        p = n('mrSG'),
        b = n('h9Dq'),
        g = (function (t) {
          function e(e, n) {
            var r = t.call(this, e, n) || this;
            return (r.scheduler = e), (r.work = n), r;
          }
          return (
            p['__extends'](e, t),
            (e.prototype.requestAsyncId = function (e, n, r) {
              return (
                void 0 === r && (r = 0),
                null !== r && r > 0
                  ? t.prototype.requestAsyncId.call(this, e, n, r)
                  : (e.actions.push(this),
                    e.scheduled ||
                      (e.scheduled = requestAnimationFrame(function () {
                        return e.flush(null);
                      })))
              );
            }),
            (e.prototype.recycleAsyncId = function (e, n, r) {
              if (
                (void 0 === r && (r = 0),
                (null !== r && r > 0) || (null === r && this.delay > 0))
              )
                return t.prototype.recycleAsyncId.call(this, e, n, r);
              0 === e.actions.length &&
                (cancelAnimationFrame(n), (e.scheduled = void 0));
            }),
            e
          );
        })(b['a']),
        m = n('CS9Q'),
        y = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            p['__extends'](e, t),
            (e.prototype.flush = function (t) {
              (this.active = !0), (this.scheduled = void 0);
              var e,
                n = this.actions,
                r = -1,
                i = n.length;
              t = t || n.shift();
              do {
                if ((e = t.execute(t.state, t.delay))) break;
              } while (++r < i && (t = n.shift()));
              if (((this.active = !1), e)) {
                while (++r < i && (t = n.shift())) t.unsubscribe();
                throw e;
              }
            }),
            e
          );
        })(m['a']),
        v = new y(g),
        _ = v,
        w = (function (t) {
          function e(e, n) {
            void 0 === e && (e = S),
              void 0 === n && (n = Number.POSITIVE_INFINITY);
            var r =
              t.call(this, e, function () {
                return r.frame;
              }) || this;
            return (r.maxFrames = n), (r.frame = 0), (r.index = -1), r;
          }
          return (
            p['__extends'](e, t),
            (e.prototype.flush = function () {
              var t,
                e,
                n = this,
                r = n.actions,
                i = n.maxFrames;
              while ((e = r[0]) && e.delay <= i)
                if (
                  (r.shift(),
                  (this.frame = e.delay),
                  (t = e.execute(e.state, e.delay)))
                )
                  break;
              if (t) {
                while ((e = r.shift())) e.unsubscribe();
                throw t;
              }
            }),
            (e.frameTimeFactor = 10),
            e
          );
        })(m['a']),
        S = (function (t) {
          function e(e, n, r) {
            void 0 === r && (r = e.index += 1);
            var i = t.call(this, e, n) || this;
            return (
              (i.scheduler = e),
              (i.work = n),
              (i.index = r),
              (i.active = !0),
              (i.index = e.index = r),
              i
            );
          }
          return (
            p['__extends'](e, t),
            (e.prototype.schedule = function (n, r) {
              if ((void 0 === r && (r = 0), !this.id))
                return t.prototype.schedule.call(this, n, r);
              this.active = !1;
              var i = new e(this.scheduler, this.work);
              return this.add(i), i.schedule(n, r);
            }),
            (e.prototype.requestAsyncId = function (t, n, r) {
              void 0 === r && (r = 0), (this.delay = t.frame + r);
              var i = t.actions;
              return i.push(this), i.sort(e.sortActions), !0;
            }),
            (e.prototype.recycleAsyncId = function (t, e, n) {
              void 0 === n && (n = 0);
            }),
            (e.prototype._execute = function (e, n) {
              if (!0 === this.active)
                return t.prototype._execute.call(this, e, n);
            }),
            (e.sortActions = function (t, e) {
              return t.delay === e.delay
                ? t.index === e.index
                  ? 0
                  : t.index > e.index
                  ? 1
                  : -1
                : t.delay > e.delay
                ? 1
                : -1;
            }),
            e
          );
        })(b['a']),
        M = n('siIJ'),
        E = n('pugT'),
        x = n('FFOo'),
        k = n('60iU'),
        C = n('y3By'),
        I = n('+umK'),
        O = n('mChF');
      function j(t) {
        return (
          !!t &&
          (t instanceof r['a'] ||
            ('function' === typeof t.lift && 'function' === typeof t.subscribe))
        );
      }
      var A = n('b7mW'),
        R = n('3fWJ'),
        N = n('8g8A'),
        T = n('awvh'),
        L = n('3U0i'),
        P = n('67Y/'),
        D = n('1fDf'),
        B = n('isby'),
        F = n('nkY7');
      function U(t, e, n) {
        if (e) {
          if (!Object(F['a'])(e))
            return function () {
              for (var r = [], i = 0; i < arguments.length; i++)
                r[i] = arguments[i];
              return U(t, n)
                .apply(void 0, r)
                .pipe(
                  Object(P['a'])(function (t) {
                    return Object(B['a'])(t) ? e.apply(void 0, t) : e(t);
                  }),
                );
            };
          n = e;
        }
        return function () {
          for (var e = [], i = 0; i < arguments.length; i++)
            e[i] = arguments[i];
          var s,
            o = this,
            a = { context: o, subject: s, callbackFunc: t, scheduler: n };
          return new r['a'](function (r) {
            if (n) {
              var i = { args: e, subscriber: r, params: a };
              return n.schedule(H, 0, i);
            }
            if (!s) {
              s = new l['a']();
              var u = function () {
                for (var t = [], e = 0; e < arguments.length; e++)
                  t[e] = arguments[e];
                s.next(t.length <= 1 ? t[0] : t), s.complete();
              };
              try {
                t.apply(o, e.concat([u]));
              } catch (c) {
                Object(D['a'])(s) ? s.error(c) : console.warn(c);
              }
            }
            return s.subscribe(r);
          });
        };
      }
      function H(t) {
        var e = this,
          n = t.args,
          r = t.subscriber,
          i = t.params,
          s = i.callbackFunc,
          o = i.context,
          a = i.scheduler,
          u = i.subject;
        if (!u) {
          u = i.subject = new l['a']();
          var c = function () {
            for (var t = [], n = 0; n < arguments.length; n++)
              t[n] = arguments[n];
            var r = t.length <= 1 ? t[0] : t;
            e.add(a.schedule(W, 0, { value: r, subject: u }));
          };
          try {
            s.apply(o, n.concat([c]));
          } catch (h) {
            u.error(h);
          }
        }
        this.add(u.subscribe(r));
      }
      function W(t) {
        var e = t.value,
          n = t.subject;
        n.next(e), n.complete();
      }
      function z(t, e, n) {
        if (e) {
          if (!Object(F['a'])(e))
            return function () {
              for (var r = [], i = 0; i < arguments.length; i++)
                r[i] = arguments[i];
              return z(t, n)
                .apply(void 0, r)
                .pipe(
                  Object(P['a'])(function (t) {
                    return Object(B['a'])(t) ? e.apply(void 0, t) : e(t);
                  }),
                );
            };
          n = e;
        }
        return function () {
          for (var e = [], i = 0; i < arguments.length; i++)
            e[i] = arguments[i];
          var s = {
            subject: void 0,
            args: e,
            callbackFunc: t,
            scheduler: n,
            context: this,
          };
          return new r['a'](function (r) {
            var i = s.context,
              o = s.subject;
            if (n)
              return n.schedule(V, 0, { params: s, subscriber: r, context: i });
            if (!o) {
              o = s.subject = new l['a']();
              var a = function () {
                for (var t = [], e = 0; e < arguments.length; e++)
                  t[e] = arguments[e];
                var n = t.shift();
                n
                  ? o.error(n)
                  : (o.next(t.length <= 1 ? t[0] : t), o.complete());
              };
              try {
                t.apply(i, e.concat([a]));
              } catch (u) {
                Object(D['a'])(o) ? o.error(u) : console.warn(u);
              }
            }
            return o.subscribe(r);
          });
        };
      }
      function V(t) {
        var e = this,
          n = t.params,
          r = t.subscriber,
          i = t.context,
          s = n.callbackFunc,
          o = n.args,
          a = n.scheduler,
          u = n.subject;
        if (!u) {
          u = n.subject = new l['a']();
          var c = function () {
            for (var t = [], n = 0; n < arguments.length; n++)
              t[n] = arguments[n];
            var r = t.shift();
            if (r) e.add(a.schedule(G, 0, { err: r, subject: u }));
            else {
              var i = t.length <= 1 ? t[0] : t;
              e.add(a.schedule(q, 0, { value: i, subject: u }));
            }
          };
          try {
            s.apply(i, o.concat([c]));
          } catch (h) {
            this.add(a.schedule(G, 0, { err: h, subject: u }));
          }
        }
        this.add(u.subscribe(r));
      }
      function q(t) {
        var e = t.value,
          n = t.subject;
        n.next(e), n.complete();
      }
      function G(t) {
        var e = t.err,
          n = t.subject;
        n.error(e);
      }
      var Z = n('dzgT'),
        J = n('dEwP'),
        Y = n('lYZG'),
        Q = n('G5J1'),
        K = n('McSo'),
        $ = n('0/uQ');
      function X() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        if (1 === t.length) {
          var n = t[0];
          if (Object(B['a'])(n)) return tt(n, null);
          if (
            Object(K['a'])(n) &&
            Object.getPrototypeOf(n) === Object.prototype
          ) {
            var r = Object.keys(n);
            return tt(
              r.map(function (t) {
                return n[t];
              }),
              r,
            );
          }
        }
        if ('function' === typeof t[t.length - 1]) {
          var i = t.pop();
          return (
            (t = 1 === t.length && Object(B['a'])(t[0]) ? t[0] : t),
            tt(t, null).pipe(
              Object(P['a'])(function (t) {
                return i.apply(void 0, t);
              }),
            )
          );
        }
        return tt(t, null);
      }
      function tt(t, e) {
        return new r['a'](function (n) {
          var r = t.length;
          if (0 !== r)
            for (
              var i = new Array(r),
                s = 0,
                o = 0,
                a = function (a) {
                  var u = Object($['a'])(t[a]),
                    c = !1;
                  n.add(
                    u.subscribe({
                      next: function (t) {
                        c || ((c = !0), o++), (i[a] = t);
                      },
                      error: function (t) {
                        return n.error(t);
                      },
                      complete: function () {
                        s++,
                          (s !== r && c) ||
                            (o === r &&
                              n.next(
                                e
                                  ? e.reduce(function (t, e, n) {
                                      return (t[e] = i[n]), t;
                                    }, {})
                                  : i,
                              ),
                            n.complete());
                      },
                    }),
                  );
                },
                u = 0;
              u < r;
              u++
            )
              a(u);
          else n.complete();
        });
      }
      var et = n('2Bdj');
      function nt(t, e, n, i) {
        return (
          Object(et['a'])(n) && ((i = n), (n = void 0)),
          i
            ? nt(t, e, n).pipe(
                Object(P['a'])(function (t) {
                  return Object(B['a'])(t) ? i.apply(void 0, t) : i(t);
                }),
              )
            : new r['a'](function (r) {
                function i(t) {
                  arguments.length > 1
                    ? r.next(Array.prototype.slice.call(arguments))
                    : r.next(t);
                }
                rt(t, e, i, r, n);
              })
        );
      }
      function rt(t, e, n, r, i) {
        var s;
        if (ot(t)) {
          var o = t;
          t.addEventListener(e, n, i),
            (s = function () {
              return o.removeEventListener(e, n, i);
            });
        } else if (st(t)) {
          var a = t;
          t.on(e, n),
            (s = function () {
              return a.off(e, n);
            });
        } else if (it(t)) {
          var u = t;
          t.addListener(e, n),
            (s = function () {
              return u.removeListener(e, n);
            });
        } else {
          if (!t || !t.length) throw new TypeError('Invalid event target');
          for (var c = 0, l = t.length; c < l; c++) rt(t[c], e, n, r, i);
        }
        r.add(s);
      }
      function it(t) {
        return (
          t &&
          'function' === typeof t.addListener &&
          'function' === typeof t.removeListener
        );
      }
      function st(t) {
        return t && 'function' === typeof t.on && 'function' === typeof t.off;
      }
      function ot(t) {
        return (
          t &&
          'function' === typeof t.addEventListener &&
          'function' === typeof t.removeEventListener
        );
      }
      function at(t, e, n) {
        return n
          ? at(t, e).pipe(
              Object(P['a'])(function (t) {
                return Object(B['a'])(t) ? n.apply(void 0, t) : n(t);
              }),
            )
          : new r['a'](function (n) {
              var r,
                i = function () {
                  for (var t = [], e = 0; e < arguments.length; e++)
                    t[e] = arguments[e];
                  return n.next(1 === t.length ? t[0] : t);
                };
              try {
                r = t(i);
              } catch (s) {
                return void n.error(s);
              }
              if (Object(et['a'])(e))
                return function () {
                  return e(i, r);
                };
            });
      }
      function ut(t, e, n, i, s) {
        var o, a;
        if (1 == arguments.length) {
          var u = t;
          (a = u.initialState),
            (e = u.condition),
            (n = u.iterate),
            (o = u.resultSelector || O['a']),
            (s = u.scheduler);
        } else
          void 0 === i || Object(F['a'])(i)
            ? ((a = t), (o = O['a']), (s = i))
            : ((a = t), (o = i));
        return new r['a'](function (t) {
          var r = a;
          if (s)
            return s.schedule(ct, 0, {
              subscriber: t,
              iterate: n,
              condition: e,
              resultSelector: o,
              state: r,
            });
          do {
            if (e) {
              var i = void 0;
              try {
                i = e(r);
              } catch (c) {
                return void t.error(c);
              }
              if (!i) {
                t.complete();
                break;
              }
            }
            var u = void 0;
            try {
              u = o(r);
            } catch (c) {
              return void t.error(c);
            }
            if ((t.next(u), t.closed)) break;
            try {
              r = n(r);
            } catch (c) {
              return void t.error(c);
            }
          } while (1);
        });
      }
      function ct(t) {
        var e = t.subscriber,
          n = t.condition;
        if (!e.closed) {
          if (t.needIterate)
            try {
              t.state = t.iterate(t.state);
            } catch (s) {
              return void e.error(s);
            }
          else t.needIterate = !0;
          if (n) {
            var r = void 0;
            try {
              r = n(t.state);
            } catch (s) {
              return void e.error(s);
            }
            if (!r) return void e.complete();
            if (e.closed) return;
          }
          var i;
          try {
            i = t.resultSelector(t.state);
          } catch (s) {
            return void e.error(s);
          }
          if (!e.closed && (e.next(i), !e.closed)) return this.schedule(t);
        }
      }
      function lt(t, e, n) {
        return (
          void 0 === e && (e = Q['a']),
          void 0 === n && (n = Q['a']),
          Object(Y['a'])(function () {
            return t() ? e : n;
          })
        );
      }
      var ht = n('/21U');
      function dt(t, e) {
        return (
          void 0 === t && (t = 0),
          void 0 === e && (e = d['a']),
          (!Object(ht['a'])(t) || t < 0) && (t = 0),
          (e && 'function' === typeof e.schedule) || (e = d['a']),
          new r['a'](function (n) {
            return (
              n.add(
                e.schedule(ft, t, { subscriber: n, counter: 0, period: t }),
              ),
              n
            );
          })
        );
      }
      function ft(t) {
        var e = t.subscriber,
          n = t.counter,
          r = t.period;
        e.next(n),
          this.schedule({ subscriber: e, counter: n + 1, period: r }, r);
      }
      var pt = n('p0ib'),
        bt = new r['a'](I['a']);
      function gt() {
        return bt;
      }
      var mt = n('F/XL');
      function yt() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        if (0 === t.length) return Q['a'];
        var n = t[0],
          i = t.slice(1);
        return 1 === t.length && Object(B['a'])(n)
          ? yt.apply(void 0, n)
          : new r['a'](function (t) {
              var e = function () {
                return t.add(yt.apply(void 0, i).subscribe(t));
              };
              return Object($['a'])(n).subscribe({
                next: function (e) {
                  t.next(e);
                },
                error: e,
                complete: e,
              });
            });
      }
      function vt(t, e) {
        return e
          ? new r['a'](function (n) {
              var r = Object.keys(t),
                i = new E['a']();
              return (
                i.add(
                  e.schedule(_t, 0, {
                    keys: r,
                    index: 0,
                    subscriber: n,
                    subscription: i,
                    obj: t,
                  }),
                ),
                i
              );
            })
          : new r['a'](function (e) {
              for (
                var n = Object.keys(t), r = 0;
                r < n.length && !e.closed;
                r++
              ) {
                var i = n[r];
                t.hasOwnProperty(i) && e.next([i, t[i]]);
              }
              e.complete();
            });
      }
      function _t(t) {
        var e = t.keys,
          n = t.index,
          r = t.subscriber,
          i = t.subscription,
          s = t.obj;
        if (!r.closed)
          if (n < e.length) {
            var o = e[n];
            r.next([o, s[o]]),
              i.add(
                this.schedule({
                  keys: e,
                  index: n + 1,
                  subscriber: r,
                  subscription: i,
                  obj: s,
                }),
              );
          } else r.complete();
      }
      var wt = n('jFaF'),
        St = n('Fxb1'),
        Mt = n('VnD/');
      function Et(t, e, n) {
        return [
          Object(Mt['a'])(e, n)(new r['a'](Object(St['a'])(t))),
          Object(Mt['a'])(Object(wt['a'])(e, n))(
            new r['a'](Object(St['a'])(t)),
          ),
        ];
      }
      var xt = n('W0Ae');
      function kt(t, e, n) {
        return (
          void 0 === t && (t = 0),
          new r['a'](function (r) {
            void 0 === e && ((e = t), (t = 0));
            var i = 0,
              s = t;
            if (n)
              return n.schedule(Ct, 0, {
                index: i,
                count: e,
                start: t,
                subscriber: r,
              });
            do {
              if (i++ >= e) {
                r.complete();
                break;
              }
              if ((r.next(s++), r.closed)) break;
            } while (1);
          })
        );
      }
      function Ct(t) {
        var e = t.start,
          n = t.index,
          r = t.count,
          i = t.subscriber;
        n >= r
          ? i.complete()
          : (i.next(e),
            i.closed ||
              ((t.index = n + 1), (t.start = e + 1), this.schedule(t)));
      }
      var It = n('XlPw'),
        Ot = n('gI3B');
      function jt(t, e) {
        return new r['a'](function (n) {
          var r, i;
          try {
            r = t();
          } catch (a) {
            return void n.error(a);
          }
          try {
            i = e(r);
          } catch (a) {
            return void n.error(a);
          }
          var s = i ? Object($['a'])(i) : Q['a'],
            o = s.subscribe(n);
          return function () {
            o.unsubscribe(), r && r.unsubscribe();
          };
        });
      }
      var At = n('909l'),
        Rt = n('i4X3'),
        Nt = n('iLxQ');
    },
    'Dy/5': function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.LaptopIcon = void 0);
      const r = n('2mXy');
      function i(t) {
        return (0, r.h)(
          'svg',
          Object.assign(
            {
              width: '14',
              height: '14',
              viewBox: '0 0 14 14',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            t,
          ),
          (0, r.h)('path', {
            d: 'M1.8001 2.2002H12.2001V9.40019H1.8001V2.2002ZM3.4001 3.8002V7.80019H10.6001V3.8002H3.4001Z',
          }),
          (0, r.h)('path', {
            d: 'M13.4001 10.2002H0.600098C0.600098 11.0838 1.31644 11.8002 2.2001 11.8002H11.8001C12.6838 11.8002 13.4001 11.0838 13.4001 10.2002Z',
          }),
        );
      }
      e.LaptopIcon = i;
    },
    EbQO: function (t) {
      t.exports = JSON.parse(
        '{"name":"@coinbase/wallet-sdk","version":"3.6.5","description":"Coinbase Wallet JavaScript SDK","keywords":["cipher","cipherbrowser","coinbase","coinbasewallet","eth","ether","ethereum","etherium","injection","toshi","wallet","walletlink","web3"],"main":"dist/index.js","types":"dist/index.d.ts","repository":"https://github.com/coinbase/coinbase-wallet-sdk.git","author":"Coinbase, Inc.","license":"Apache-2.0","scripts":{"pretest:unit":"node compile-assets.js","test:unit":"jest","test:unit:coverage":"yarn test:unit && open coverage/lcov-report/index.html","test:karma":"yarn build-npm && karma start","prebuild":"rm -rf ./build && node -p \\"\'export const LIB_VERSION = \' + JSON.stringify(require(\'./package.json\').version) + \';\'\\" > src/version.ts","build":"node compile-assets.js && webpack --config webpack.config.js","build-npm":"tsc -p ./tsconfig.build.json","build:dev":"export LINK_API_URL=\'http://localhost:3000\'; yarn build","build:dev:watch":"nodemon -e \'ts,tsx,js,json,css,scss,svg\' --ignore \'src/**/*-css.ts\' --ignore \'src/**/*-svg.ts\' --watch src/ --exec \'yarn build:dev\'","build:prod":"yarn prebuild && yarn build && yarn build-npm && cp ./package.json ../../README.md ./LICENSE build/npm && cp -a src/vendor-js build/npm/dist && sed -i.bak \'s|  \\"private\\": true,||g\' build/npm/package.json && rm -f build/npm/package.json.bak","lint:types":"tsc --noEmit","lint:prettier":"prettier --check \\"{src,__tests__}/**/*.(js|ts|tsx)\\"","lint:eslint":"eslint ./src --ext .ts,.tsx","lint":"yarn lint:eslint && yarn lint:types && yarn lint:prettier","fix:eslint":"yarn lint:eslint --fix","fix:prettier":"prettier . --write","release":"./scripts/release.sh"},"dependencies":{"@metamask/safe-event-emitter":"2.0.0","@solana/web3.js":"^1.70.1","bind-decorator":"^1.0.11","bn.js":"^5.1.1","buffer":"^6.0.3","clsx":"^1.1.0","eth-block-tracker":"4.4.3","eth-json-rpc-filters":"5.1.0","eth-rpc-errors":"4.0.2","json-rpc-engine":"6.1.0","keccak":"^3.0.1","preact":"^10.5.9","qs":"^6.10.3","rxjs":"^6.6.3","sha.js":"^2.4.11","stream-browserify":"^3.0.0","util":"^0.12.4"},"devDependencies":{"@babel/core":"^7.17.9","@babel/plugin-proposal-decorators":"^7.17.9","@babel/plugin-transform-react-jsx":"^7.17.3","@babel/preset-env":"^7.16.11","@babel/preset-typescript":"^7.16.7","@peculiar/webcrypto":"^1.3.3","@testing-library/jest-dom":"^5.16.4","@testing-library/preact":"^2.0.1","@types/bn.js":"^4.11.6","@types/jest":"^27.4.1","@types/node":"^14.14.20","@types/qs":"^6.9.7","@types/sha.js":"^2.4.0","@typescript-eslint/eslint-plugin":"^5.7.0","@typescript-eslint/eslint-plugin-tslint":"^5.7.0","@typescript-eslint/parser":"^5.7.0","babel-jest":"^27.5.1","browserify":"17.0.0","copy-webpack-plugin":"^6.4.1","core-js":"^3.8.2","eslint":"^8.4.1","eslint-config-prettier":"^8.3.0","eslint-plugin-import":"^2.25.3","eslint-plugin-preact":"^0.1.0","eslint-plugin-prettier":"^4.0.0","eslint-plugin-simple-import-sort":"^7.0.0","jasmine":"3.8.0","jest":"^27.5.1","jest-chrome":"^0.7.2","jest-websocket-mock":"^2.3.0","karma":"^6.4.0","karma-browserify":"8.1.0","karma-chrome-launcher":"^3.1.0","karma-jasmine":"^4.0.1","nodemon":"^2.0.6","prettier":"^2.5.1","raw-loader":"^4.0.2","regenerator-runtime":"^0.13.7","sass":"^1.50.0","svgo":"^2.8.0","ts-jest":"^27.1.4","ts-loader":"^8.0.13","ts-node":"^10.7.0","tslib":"^2.0.3","typescript":"^4.1.3","watchify":"4.0.0","webpack":"^5.76.0","webpack-cli":"^4.9.2","whatwg-fetch":"^3.5.0"},"engines":{"node":">= 10.0.0"}}',
      );
    },
    Ed4r: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.CoinbaseWalletSDK = void 0);
      const r = n('SFow'),
        i = n('wWR5'),
        s = n('AjSF'),
        o = n('IOr8'),
        a = n('bnw0'),
        u = n('0y9o'),
        c = n('Qann'),
        l =
          Object({ NODE_ENV: 'production' }).LINK_API_URL ||
          'https://www.walletlink.org',
        h =
          Object({ NODE_ENV: 'production' }).SDK_VERSION ||
          n('EbQO').version ||
          'unknown';
      class d {
        constructor(t) {
          var e, n, r;
          (this._appName = ''),
            (this._appLogoUrl = null),
            (this._relay = null),
            (this._relayEventManager = null);
          const s = t.linkAPIUrl || l;
          let c;
          if (
            ((c = t.uiConstructor
              ? t.uiConstructor
              : (t) => new o.WalletSDKUI(t)),
            'undefined' === typeof t.overrideIsMetaMask
              ? (this._overrideIsMetaMask = !1)
              : (this._overrideIsMetaMask = t.overrideIsMetaMask),
            (this._overrideIsCoinbaseWallet =
              null === (e = t.overrideIsCoinbaseWallet) || void 0 === e || e),
            (this._overrideIsCoinbaseBrowser =
              null !== (n = t.overrideIsCoinbaseBrowser) && void 0 !== n && n),
            t.diagnosticLogger && t.eventListener)
          )
            throw new Error(
              "Can't have both eventListener and diagnosticLogger options, use only diagnosticLogger",
            );
          t.eventListener
            ? (this._diagnosticLogger = { log: t.eventListener.onEvent })
            : (this._diagnosticLogger = t.diagnosticLogger),
            (this._reloadOnDisconnect =
              null === (r = t.reloadOnDisconnect) || void 0 === r || r);
          const f = new URL(s),
            p = `${f.protocol}//${f.host}`;
          (this._storage = new i.ScopedLocalStorage(`-walletlink:${p}`)),
            this._storage.setItem('version', d.VERSION),
            this.walletExtension ||
              this.coinbaseBrowser ||
              ((this._relayEventManager = new u.WalletSDKRelayEventManager()),
              (this._relay = new a.WalletSDKRelay({
                linkAPIUrl: s,
                version: h,
                darkMode: !!t.darkMode,
                uiConstructor: c,
                storage: this._storage,
                relayEventManager: this._relayEventManager,
                diagnosticLogger: this._diagnosticLogger,
                reloadOnDisconnect: this._reloadOnDisconnect,
              })),
              this.setAppInfo(t.appName, t.appLogoUrl),
              t.headlessMode || this._relay.attachUI());
        }
        makeWeb3Provider(t = '', e = 1) {
          const n = this.walletExtension;
          if (n)
            return (
              this.isCipherProvider(n) || n.setProviderInfo(t, e),
              !1 === this._reloadOnDisconnect &&
                'function' === typeof n.disableReloadOnDisconnect &&
                n.disableReloadOnDisconnect(),
              n
            );
          const r = this.coinbaseBrowser;
          if (r) return r;
          const i = this._relay;
          if (!i || !this._relayEventManager || !this._storage)
            throw new Error('Relay not initialized, should never happen');
          return (
            t || i.setConnectDisabled(!0),
            new s.CoinbaseWalletProvider({
              relayProvider: () => Promise.resolve(i),
              relayEventManager: this._relayEventManager,
              storage: this._storage,
              jsonRpcUrl: t,
              chainId: e,
              qrUrl: this.getQrUrl(),
              diagnosticLogger: this._diagnosticLogger,
              overrideIsMetaMask: this._overrideIsMetaMask,
              overrideIsCoinbaseWallet: this._overrideIsCoinbaseWallet,
              overrideIsCoinbaseBrowser: this._overrideIsCoinbaseBrowser,
            })
          );
        }
        setAppInfo(t, e) {
          var n;
          (this._appName = t || 'DApp'),
            (this._appLogoUrl = e || (0, c.getFavicon)());
          const r = this.walletExtension;
          r
            ? this.isCipherProvider(r) ||
              r.setAppInfo(this._appName, this._appLogoUrl)
            : null === (n = this._relay) ||
              void 0 === n ||
              n.setAppInfo(this._appName, this._appLogoUrl);
        }
        disconnect() {
          var t;
          const e = this.walletExtension;
          e
            ? e.close()
            : null === (t = this._relay) || void 0 === t || t.resetAndReload();
        }
        getQrUrl() {
          var t, e;
          return null !==
            (e =
              null === (t = this._relay) || void 0 === t
                ? void 0
                : t.getQRCodeUrl()) && void 0 !== e
            ? e
            : null;
        }
        getCoinbaseWalletLogo(t, e = 240) {
          return (0, r.walletLogo)(t, e);
        }
        get walletExtension() {
          var t;
          return null !== (t = window.coinbaseWalletExtension) && void 0 !== t
            ? t
            : window.walletLinkExtension;
        }
        get coinbaseBrowser() {
          var t, e;
          try {
            const n =
              null !== (t = window.ethereum) && void 0 !== t
                ? t
                : null === (e = window.top) || void 0 === e
                ? void 0
                : e.ethereum;
            if (!n) return;
            return 'isCoinbaseBrowser' in n && n.isCoinbaseBrowser ? n : void 0;
          } catch (n) {
            return;
          }
        }
        isCipherProvider(t) {
          return 'boolean' === typeof t.isCipher && t.isCipher;
        }
      }
      (e.CoinbaseWalletSDK = d), (d.VERSION = h);
    },
    'En8+': function (t, e, n) {
      'use strict';
      function r() {
        return 'function' === typeof Symbol && Symbol.iterator
          ? Symbol.iterator
          : '@@iterator';
      }
      n.d(e, 'a', function () {
        return i;
      });
      var i = r();
    },
    Ev0B: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.errorValues = e.errorCodes = void 0),
        (e.errorCodes = {
          rpc: {
            invalidInput: -32e3,
            resourceNotFound: -32001,
            resourceUnavailable: -32002,
            transactionRejected: -32003,
            methodNotSupported: -32004,
            limitExceeded: -32005,
            parse: -32700,
            invalidRequest: -32600,
            methodNotFound: -32601,
            invalidParams: -32602,
            internal: -32603,
          },
          provider: {
            userRejectedRequest: 4001,
            unauthorized: 4100,
            unsupportedMethod: 4200,
            disconnected: 4900,
            chainDisconnected: 4901,
          },
        }),
        (e.errorValues = {
          '-32700': {
            standard: 'JSON RPC 2.0',
            message:
              'Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.',
          },
          '-32600': {
            standard: 'JSON RPC 2.0',
            message: 'The JSON sent is not a valid Request object.',
          },
          '-32601': {
            standard: 'JSON RPC 2.0',
            message: 'The method does not exist / is not available.',
          },
          '-32602': {
            standard: 'JSON RPC 2.0',
            message: 'Invalid method parameter(s).',
          },
          '-32603': {
            standard: 'JSON RPC 2.0',
            message: 'Internal JSON-RPC error.',
          },
          '-32000': { standard: 'EIP-1474', message: 'Invalid input.' },
          '-32001': { standard: 'EIP-1474', message: 'Resource not found.' },
          '-32002': { standard: 'EIP-1474', message: 'Resource unavailable.' },
          '-32003': { standard: 'EIP-1474', message: 'Transaction rejected.' },
          '-32004': { standard: 'EIP-1474', message: 'Method not supported.' },
          '-32005': {
            standard: 'EIP-1474',
            message: 'Request limit exceeded.',
          },
          4001: { standard: 'EIP-1193', message: 'User rejected the request.' },
          4100: {
            standard: 'EIP-1193',
            message:
              'The requested account and/or method has not been authorized by the user.',
          },
          4200: {
            standard: 'EIP-1193',
            message:
              'The requested method is not supported by this Ethereum provider.',
          },
          4900: {
            standard: 'EIP-1193',
            message: 'The provider is disconnected from all chains.',
          },
          4901: {
            standard: 'EIP-1193',
            message: 'The provider is disconnected from the specified chain.',
          },
        });
    },
    'F/XL': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return o;
      });
      var r = n('nkY7'),
        i = n('IUTb'),
        s = n('JF+6');
      function o() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var n = t[t.length - 1];
        return Object(r['a'])(n)
          ? (t.pop(), Object(s['a'])(t, n))
          : Object(i['a'])(t);
      }
    },
    FFOo: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return l;
      });
      var r = n('mrSG'),
        i = n('2Bdj'),
        s = n('6ahw'),
        o = n('pugT'),
        a = n('L/V9'),
        u = n('iLxQ'),
        c = n('DKTb'),
        l = (function (t) {
          function e(n, r, i) {
            var o = t.call(this) || this;
            switch (
              ((o.syncErrorValue = null),
              (o.syncErrorThrown = !1),
              (o.syncErrorThrowable = !1),
              (o.isStopped = !1),
              arguments.length)
            ) {
              case 0:
                o.destination = s['a'];
                break;
              case 1:
                if (!n) {
                  o.destination = s['a'];
                  break;
                }
                if ('object' === typeof n) {
                  n instanceof e
                    ? ((o.syncErrorThrowable = n.syncErrorThrowable),
                      (o.destination = n),
                      n.add(o))
                    : ((o.syncErrorThrowable = !0),
                      (o.destination = new h(o, n)));
                  break;
                }
              default:
                (o.syncErrorThrowable = !0),
                  (o.destination = new h(o, n, r, i));
                break;
            }
            return o;
          }
          return (
            r['__extends'](e, t),
            (e.prototype[a['a']] = function () {
              return this;
            }),
            (e.create = function (t, n, r) {
              var i = new e(t, n, r);
              return (i.syncErrorThrowable = !1), i;
            }),
            (e.prototype.next = function (t) {
              this.isStopped || this._next(t);
            }),
            (e.prototype.error = function (t) {
              this.isStopped || ((this.isStopped = !0), this._error(t));
            }),
            (e.prototype.complete = function () {
              this.isStopped || ((this.isStopped = !0), this._complete());
            }),
            (e.prototype.unsubscribe = function () {
              this.closed ||
                ((this.isStopped = !0), t.prototype.unsubscribe.call(this));
            }),
            (e.prototype._next = function (t) {
              this.destination.next(t);
            }),
            (e.prototype._error = function (t) {
              this.destination.error(t), this.unsubscribe();
            }),
            (e.prototype._complete = function () {
              this.destination.complete(), this.unsubscribe();
            }),
            (e.prototype._unsubscribeAndRecycle = function () {
              var t = this._parentOrParents;
              return (
                (this._parentOrParents = null),
                this.unsubscribe(),
                (this.closed = !1),
                (this.isStopped = !1),
                (this._parentOrParents = t),
                this
              );
            }),
            e
          );
        })(o['a']),
        h = (function (t) {
          function e(e, n, r, o) {
            var a,
              u = t.call(this) || this;
            u._parentSubscriber = e;
            var c = u;
            return (
              Object(i['a'])(n)
                ? (a = n)
                : n &&
                  ((a = n.next),
                  (r = n.error),
                  (o = n.complete),
                  n !== s['a'] &&
                    ((c = Object.create(n)),
                    Object(i['a'])(c.unsubscribe) &&
                      u.add(c.unsubscribe.bind(c)),
                    (c.unsubscribe = u.unsubscribe.bind(u)))),
              (u._context = c),
              (u._next = a),
              (u._error = r),
              (u._complete = o),
              u
            );
          }
          return (
            r['__extends'](e, t),
            (e.prototype.next = function (t) {
              if (!this.isStopped && this._next) {
                var e = this._parentSubscriber;
                u['a'].useDeprecatedSynchronousErrorHandling &&
                e.syncErrorThrowable
                  ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe()
                  : this.__tryOrUnsub(this._next, t);
              }
            }),
            (e.prototype.error = function (t) {
              if (!this.isStopped) {
                var e = this._parentSubscriber,
                  n = u['a'].useDeprecatedSynchronousErrorHandling;
                if (this._error)
                  n && e.syncErrorThrowable
                    ? (this.__tryOrSetError(e, this._error, t),
                      this.unsubscribe())
                    : (this.__tryOrUnsub(this._error, t), this.unsubscribe());
                else if (e.syncErrorThrowable)
                  n
                    ? ((e.syncErrorValue = t), (e.syncErrorThrown = !0))
                    : Object(c['a'])(t),
                    this.unsubscribe();
                else {
                  if ((this.unsubscribe(), n)) throw t;
                  Object(c['a'])(t);
                }
              }
            }),
            (e.prototype.complete = function () {
              var t = this;
              if (!this.isStopped) {
                var e = this._parentSubscriber;
                if (this._complete) {
                  var n = function () {
                    return t._complete.call(t._context);
                  };
                  u['a'].useDeprecatedSynchronousErrorHandling &&
                  e.syncErrorThrowable
                    ? (this.__tryOrSetError(e, n), this.unsubscribe())
                    : (this.__tryOrUnsub(n), this.unsubscribe());
                } else this.unsubscribe();
              }
            }),
            (e.prototype.__tryOrUnsub = function (t, e) {
              try {
                t.call(this._context, e);
              } catch (n) {
                if (
                  (this.unsubscribe(),
                  u['a'].useDeprecatedSynchronousErrorHandling)
                )
                  throw n;
                Object(c['a'])(n);
              }
            }),
            (e.prototype.__tryOrSetError = function (t, e, n) {
              if (!u['a'].useDeprecatedSynchronousErrorHandling)
                throw new Error('bad call');
              try {
                e.call(this._context, n);
              } catch (r) {
                return u['a'].useDeprecatedSynchronousErrorHandling
                  ? ((t.syncErrorValue = r), (t.syncErrorThrown = !0), !0)
                  : (Object(c['a'])(r), !0);
              }
              return !1;
            }),
            (e.prototype._unsubscribe = function () {
              var t = this._parentSubscriber;
              (this._context = null),
                (this._parentSubscriber = null),
                t.unsubscribe();
            }),
            e
          );
        })(l);
    },
    FVkC: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default =
          '@namespace svg "http://www.w3.org/2000/svg";.-cbwsdk-css-reset,.-cbwsdk-css-reset *{animation:none;animation-delay:0;animation-direction:normal;animation-duration:0;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;backface-visibility:visible;background:0;background-attachment:scroll;background-clip:border-box;background-color:rgba(0,0,0,0);background-image:none;background-origin:padding-box;background-position:0 0;background-position-x:0;background-position-y:0;background-repeat:repeat;background-size:auto auto;border:0;border-style:none;border-width:medium;border-color:inherit;border-bottom:0;border-bottom-color:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-style:none;border-bottom-width:medium;border-collapse:separate;border-image:none;border-left:0;border-left-color:inherit;border-left-style:none;border-left-width:medium;border-radius:0;border-right:0;border-right-color:inherit;border-right-style:none;border-right-width:medium;border-spacing:0;border-top:0;border-top-color:inherit;border-top-left-radius:0;border-top-right-radius:0;border-top-style:none;border-top-width:medium;box-shadow:none;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:inherit;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-rule-color:currentColor;column-rule-style:none;column-rule-width:none;column-span:1;column-width:auto;counter-increment:none;counter-reset:none;direction:ltr;empty-cells:show;float:none;font:normal;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;height:auto;hyphens:none;letter-spacing:normal;line-height:normal;list-style:none;list-style-image:none;list-style-position:outside;list-style-type:disc;margin:0;margin-bottom:0;margin-left:0;margin-right:0;margin-top:0;opacity:1;orphans:0;outline:0;outline-color:invert;outline-style:none;outline-width:medium;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;pointer-events:auto;position:static;quotes:"\\201C" "\\201D" "\\2018" "\\2019";tab-size:8;table-layout:auto;text-align:inherit;text-align-last:auto;text-decoration:none;text-decoration-color:inherit;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-shadow:none;text-transform:none;transform:none;transform-style:flat;transition:none;transition-delay:0s;transition-duration:0s;transition-property:none;transition-timing-function:ease;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:0;word-spacing:normal;z-index:auto}.-cbwsdk-css-reset strong{font-weight:bold}.-cbwsdk-css-reset *{box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;line-height:1}.-cbwsdk-css-reset [class*=container]{margin:0;padding:0}.-cbwsdk-css-reset style{display:none}');
    },
    FfBw: function (t, e) {
      'function' === typeof Object.create
        ? (t.exports = function (t, e) {
            (t.super_ = e),
              (t.prototype = Object.create(e.prototype, {
                constructor: {
                  value: t,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              }));
          })
        : (t.exports = function (t, e) {
            t.super_ = e;
            var n = function () {};
            (n.prototype = e.prototype),
              (t.prototype = new n()),
              (t.prototype.constructor = t);
          });
    },
    Fj00: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      const r = n('+qE3');
      function i(t, e, n) {
        try {
          Reflect.apply(t, e, n);
        } catch (r) {
          setTimeout(() => {
            throw r;
          });
        }
      }
      function s(t) {
        const e = t.length,
          n = new Array(e);
        for (let r = 0; r < e; r += 1) n[r] = t[r];
        return n;
      }
      class o extends r.EventEmitter {
        emit(t, ...e) {
          let n = 'error' === t;
          const r = this._events;
          if (void 0 !== r) n = n && void 0 === r.error;
          else if (!n) return !1;
          if (n) {
            let t;
            if ((e.length > 0 && ([t] = e), t instanceof Error)) throw t;
            const n = new Error(
              'Unhandled error.' + (t ? ` (${t.message})` : ''),
            );
            throw ((n.context = t), n);
          }
          const o = r[t];
          if (void 0 === o) return !1;
          if ('function' === typeof o) i(o, this, e);
          else {
            const t = o.length,
              n = s(o);
            for (let r = 0; r < t; r += 1) i(n[r], this, e);
          }
          return !0;
        }
      }
      e.default = o;
    },
    FqFB: function (t, e, n) {
      const r = n('QXrW'),
        i = n('h9tj'),
        s = n('8Pg7'),
        {
          bnToHex: o,
          hexToInt: a,
          incrementHexInt: u,
          minBlockRef: c,
          blockRefIsNumber: l,
        } = n('UJ2e');
      class h extends s {
        constructor({ provider: t, params: e }) {
          super(),
            (this.type = 'log'),
            (this.ethQuery = new r(t)),
            (this.params = Object.assign(
              {
                fromBlock: 'latest',
                toBlock: 'latest',
                address: void 0,
                topics: [],
              },
              e,
            )),
            this.params.address &&
              (Array.isArray(this.params.address) ||
                (this.params.address = [this.params.address]),
              (this.params.address = this.params.address.map((t) =>
                t.toLowerCase(),
              )));
        }
        async initialize({ currentBlock: t }) {
          let e = this.params.fromBlock;
          ['latest', 'pending'].includes(e) && (e = t),
            'earliest' === e && (e = '0x0'),
            (this.params.fromBlock = e);
          const n = c(this.params.toBlock, t),
            r = Object.assign({}, this.params, { toBlock: n }),
            i = await this._fetchLogs(r);
          this.addInitialResults(i);
        }
        async update({ oldBlock: t, newBlock: e }) {
          const n = e;
          let r;
          r = t ? u(t) : e;
          const i = Object.assign({}, this.params, {
              fromBlock: r,
              toBlock: n,
            }),
            s = await this._fetchLogs(i),
            o = s.filter((t) => this.matchLog(t));
          this.addResults(o);
        }
        async _fetchLogs(t) {
          const e = await i((e) => this.ethQuery.getLogs(t, e))();
          return e;
        }
        matchLog(t) {
          if (a(this.params.fromBlock) >= a(t.blockNumber)) return !1;
          if (
            l(this.params.toBlock) &&
            a(this.params.toBlock) <= a(t.blockNumber)
          )
            return !1;
          const e = t.address && t.address.toLowerCase();
          if (this.params.address && e && !this.params.address.includes(e))
            return !1;
          const n = this.params.topics.every((e, n) => {
            let r = t.topics[n];
            if (!r) return !1;
            r = r.toLowerCase();
            let i = Array.isArray(e) ? e : [e];
            const s = i.includes(null);
            if (s) return !0;
            i = i.map((t) => t.toLowerCase());
            const o = i.includes(r);
            return o;
          });
          return n;
        }
      }
      t.exports = h;
    },
    Fxb1: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return f;
      });
      var r = n('+tJ4'),
        i = n('DKTb'),
        s = function (t) {
          return function (e) {
            return (
              t
                .then(
                  function (t) {
                    e.closed || (e.next(t), e.complete());
                  },
                  function (t) {
                    return e.error(t);
                  },
                )
                .then(null, i['a']),
              e
            );
          };
        },
        o = n('En8+'),
        a = function (t) {
          return function (e) {
            var n = t[o['a']]();
            do {
              var r = void 0;
              try {
                r = n.next();
              } catch (i) {
                return e.error(i), e;
              }
              if (r.done) {
                e.complete();
                break;
              }
              if ((e.next(r.value), e.closed)) break;
            } while (1);
            return (
              'function' === typeof n.return &&
                e.add(function () {
                  n.return && n.return();
                }),
              e
            );
          };
        },
        u = n('xTla'),
        c = function (t) {
          return function (e) {
            var n = t[u['a']]();
            if ('function' !== typeof n.subscribe)
              throw new TypeError(
                'Provided object does not correctly implement Symbol.observable',
              );
            return n.subscribe(e);
          };
        },
        l = n('2ePl'),
        h = n('/WYv'),
        d = n('McSo'),
        f = function (t) {
          if (t && 'function' === typeof t[u['a']]) return c(t);
          if (Object(l['a'])(t)) return Object(r['a'])(t);
          if (Object(h['a'])(t)) return s(t);
          if (t && 'function' === typeof t[o['a']]) return a(t);
          var e = Object(d['a'])(t) ? 'an invalid object' : "'" + t + "'",
            n =
              'You provided ' +
              e +
              ' where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.';
          throw new TypeError(n);
        };
    },
    G5J1: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return i;
      }),
        n.d(e, 'b', function () {
          return s;
        });
      var r = n('6blF'),
        i = new r['a'](function (t) {
          return t.complete();
        });
      function s(t) {
        return t ? o(t) : i;
      }
      function o(t) {
        return new r['a'](function (e) {
          return t.schedule(function () {
            return e.complete();
          });
        });
      }
    },
    I2MC: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.WalletSDKConnection = void 0);
      const r = n('DtyJ'),
        i = n('ahDk'),
        s = n('9vAn'),
        o = n('Iwol'),
        a = n('MOW9'),
        u = n('Y5IT'),
        c = n('eXAK'),
        l = n('Dp9r'),
        h = 1e4,
        d = 6e4;
      class f {
        constructor(t, e, n, a, l = WebSocket) {
          (this.sessionId = t),
            (this.sessionKey = e),
            (this.diagnostic = a),
            (this.subscriptions = new r.Subscription()),
            (this.destroyed = !1),
            (this.lastHeartbeatResponse = 0),
            (this.nextReqId = (0, o.IntNumber)(1)),
            (this.connectedSubject = new r.BehaviorSubject(!1)),
            (this.linkedSubject = new r.BehaviorSubject(!1)),
            (this.sessionConfigSubject = new r.ReplaySubject(1));
          const d = new c.RxWebSocket(n + '/rpc', l);
          (this.ws = d),
            this.subscriptions.add(
              d.connectionState$
                .pipe(
                  (0, i.tap)((e) => {
                    var n;
                    return null === (n = this.diagnostic) || void 0 === n
                      ? void 0
                      : n.log(u.EVENTS.CONNECTED_STATE_CHANGE, {
                          state: e,
                          sessionIdHash: s.Session.hash(t),
                        });
                  }),
                  (0, i.skip)(1),
                  (0, i.filter)(
                    (t) =>
                      t === c.ConnectionState.DISCONNECTED && !this.destroyed,
                  ),
                  (0, i.delay)(5e3),
                  (0, i.filter)((t) => !this.destroyed),
                  (0, i.flatMap)((t) => d.connect()),
                  (0, i.retry)(),
                )
                .subscribe(),
            ),
            this.subscriptions.add(
              d.connectionState$
                .pipe(
                  (0, i.skip)(2),
                  (0, i.switchMap)((t) =>
                    (0, r.iif)(
                      () => t === c.ConnectionState.CONNECTED,
                      this.authenticate().pipe(
                        (0, i.tap)((t) => this.sendIsLinked()),
                        (0, i.tap)((t) => this.sendGetSessionConfig()),
                        (0, i.map)((t) => !0),
                      ),
                      (0, r.of)(!1),
                    ),
                  ),
                  (0, i.distinctUntilChanged)(),
                  (0, i.catchError)((t) => (0, r.of)(!1)),
                )
                .subscribe((t) => this.connectedSubject.next(t)),
            ),
            this.subscriptions.add(
              d.connectionState$
                .pipe(
                  (0, i.skip)(1),
                  (0, i.switchMap)((t) =>
                    (0, r.iif)(
                      () => t === c.ConnectionState.CONNECTED,
                      (0, r.timer)(0, h),
                    ),
                  ),
                )
                .subscribe((t) =>
                  0 === t ? this.updateLastHeartbeat() : this.heartbeat(),
                ),
            ),
            this.subscriptions.add(
              d.incomingData$
                .pipe((0, i.filter)((t) => 'h' === t))
                .subscribe((t) => this.updateLastHeartbeat()),
            ),
            this.subscriptions.add(
              d.incomingJSONData$
                .pipe(
                  (0, i.filter)((t) =>
                    ['IsLinkedOK', 'Linked'].includes(t.type),
                  ),
                )
                .subscribe((e) => {
                  var n;
                  const r = e;
                  null === (n = this.diagnostic) ||
                    void 0 === n ||
                    n.log(u.EVENTS.LINKED, {
                      sessionIdHash: s.Session.hash(t),
                      linked: r.linked,
                      type: e.type,
                      onlineGuests: r.onlineGuests,
                    }),
                    this.linkedSubject.next(r.linked || r.onlineGuests > 0);
                }),
            ),
            this.subscriptions.add(
              d.incomingJSONData$
                .pipe(
                  (0, i.filter)((t) =>
                    ['GetSessionConfigOK', 'SessionConfigUpdated'].includes(
                      t.type,
                    ),
                  ),
                )
                .subscribe((e) => {
                  var n;
                  const r = e;
                  null === (n = this.diagnostic) ||
                    void 0 === n ||
                    n.log(u.EVENTS.SESSION_CONFIG_RECEIVED, {
                      sessionIdHash: s.Session.hash(t),
                      metadata_keys:
                        r && r.metadata ? Object.keys(r.metadata) : void 0,
                    }),
                    this.sessionConfigSubject.next({
                      webhookId: r.webhookId,
                      webhookUrl: r.webhookUrl,
                      metadata: r.metadata,
                    });
                }),
            );
        }
        connect() {
          var t;
          if (this.destroyed) throw new Error('instance is destroyed');
          null === (t = this.diagnostic) ||
            void 0 === t ||
            t.log(u.EVENTS.STARTED_CONNECTING, {
              sessionIdHash: s.Session.hash(this.sessionId),
            }),
            this.ws.connect().subscribe();
        }
        destroy() {
          var t;
          this.subscriptions.unsubscribe(),
            this.ws.disconnect(),
            null === (t = this.diagnostic) ||
              void 0 === t ||
              t.log(u.EVENTS.DISCONNECTED, {
                sessionIdHash: s.Session.hash(this.sessionId),
              }),
            (this.destroyed = !0);
        }
        get isDestroyed() {
          return this.destroyed;
        }
        get connected$() {
          return this.connectedSubject.asObservable();
        }
        get onceConnected$() {
          return this.connected$.pipe(
            (0, i.filter)((t) => t),
            (0, i.take)(1),
            (0, i.map)(() => {}),
          );
        }
        get linked$() {
          return this.linkedSubject.asObservable();
        }
        get onceLinked$() {
          return this.linked$.pipe(
            (0, i.filter)((t) => t),
            (0, i.take)(1),
            (0, i.map)(() => {}),
          );
        }
        get sessionConfig$() {
          return this.sessionConfigSubject.asObservable();
        }
        get incomingEvent$() {
          return this.ws.incomingJSONData$.pipe(
            (0, i.filter)((t) => {
              if ('Event' !== t.type) return !1;
              const e = t;
              return (
                'string' === typeof e.sessionId &&
                'string' === typeof e.eventId &&
                'string' === typeof e.event &&
                'string' === typeof e.data
              );
            }),
            (0, i.map)((t) => t),
          );
        }
        setSessionMetadata(t, e) {
          const n = (0, a.ClientMessageSetSessionConfig)({
            id: (0, o.IntNumber)(this.nextReqId++),
            sessionId: this.sessionId,
            metadata: { [t]: e },
          });
          return this.onceConnected$.pipe(
            (0, i.flatMap)((t) => this.makeRequest(n)),
            (0, i.map)((t) => {
              if ((0, l.isServerMessageFail)(t))
                throw new Error(t.error || 'failed to set session metadata');
            }),
          );
        }
        publishEvent(t, e, n = !1) {
          const r = (0, a.ClientMessagePublishEvent)({
            id: (0, o.IntNumber)(this.nextReqId++),
            sessionId: this.sessionId,
            event: t,
            data: e,
            callWebhook: n,
          });
          return this.onceLinked$.pipe(
            (0, i.flatMap)((t) => this.makeRequest(r)),
            (0, i.map)((t) => {
              if ((0, l.isServerMessageFail)(t))
                throw new Error(t.error || 'failed to publish event');
              return t.eventId;
            }),
          );
        }
        sendData(t) {
          this.ws.sendData(JSON.stringify(t));
        }
        updateLastHeartbeat() {
          this.lastHeartbeatResponse = Date.now();
        }
        heartbeat() {
          if (Date.now() - this.lastHeartbeatResponse > 2 * h)
            this.ws.disconnect();
          else
            try {
              this.ws.sendData('h');
            } catch (t) {}
        }
        makeRequest(t, e = d) {
          const n = t.id;
          try {
            this.sendData(t);
          } catch (s) {
            return (0, r.throwError)(s);
          }
          return this.ws.incomingJSONData$.pipe(
            (0, i.timeoutWith)(
              e,
              (0, r.throwError)(new Error(`request ${n} timed out`)),
            ),
            (0, i.filter)((t) => t.id === n),
            (0, i.take)(1),
          );
        }
        authenticate() {
          const t = (0, a.ClientMessageHostSession)({
            id: (0, o.IntNumber)(this.nextReqId++),
            sessionId: this.sessionId,
            sessionKey: this.sessionKey,
          });
          return this.makeRequest(t).pipe(
            (0, i.map)((t) => {
              if ((0, l.isServerMessageFail)(t))
                throw new Error(t.error || 'failed to authentcate');
            }),
          );
        }
        sendIsLinked() {
          const t = (0, a.ClientMessageIsLinked)({
            id: (0, o.IntNumber)(this.nextReqId++),
            sessionId: this.sessionId,
          });
          this.sendData(t);
        }
        sendGetSessionConfig() {
          const t = (0, a.ClientMessageGetSessionConfig)({
            id: (0, o.IntNumber)(this.nextReqId++),
            sessionId: this.sessionId,
          });
          this.sendData(t);
        }
      }
      e.WalletSDKConnection = f;
    },
    IOr8: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.WalletSDKUI = void 0);
      const r = n('XtHt'),
        i = n('PEv4'),
        s = n('yz7a');
      class o {
        constructor(t) {
          (this.standalone = null),
            (this.attached = !1),
            (this.appSrc = null),
            (this.snackbar = new i.Snackbar({ darkMode: t.darkMode })),
            (this.linkFlow = new r.LinkFlow({
              darkMode: t.darkMode,
              version: t.version,
              sessionId: t.session.id,
              sessionSecret: t.session.secret,
              linkAPIUrl: t.linkAPIUrl,
              connected$: t.connected$,
              chainId$: t.chainId$,
              isParentConnection: !1,
            }));
        }
        attach() {
          if (this.attached)
            throw new Error('Coinbase Wallet SDK UI is already attached');
          const t = document.documentElement,
            e = document.createElement('div');
          (e.className = '-cbwsdk-css-reset'),
            t.appendChild(e),
            this.linkFlow.attach(e),
            this.snackbar.attach(e),
            (this.attached = !0),
            (0, s.injectCssReset)();
        }
        setConnectDisabled(t) {
          this.linkFlow.setConnectDisabled(t);
        }
        addEthereumChain(t) {}
        watchAsset(t) {}
        switchEthereumChain(t) {}
        requestEthereumAccounts(t) {
          this.linkFlow.open({ onCancel: t.onCancel });
        }
        hideRequestEthereumAccounts() {
          this.linkFlow.close();
        }
        signEthereumMessage(t) {}
        signEthereumTransaction(t) {}
        submitEthereumTransaction(t) {}
        ethereumAddressFromSignedMessage(t) {}
        showConnecting(t) {
          let e;
          return (
            (e = t.isUnlinkedErrorState
              ? {
                  autoExpand: !0,
                  message: 'Connection lost',
                  appSrc: this.appSrc,
                  menuItems: [
                    {
                      isRed: !1,
                      info: 'Reset connection',
                      svgWidth: '10',
                      svgHeight: '11',
                      path: 'M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z',
                      defaultFillRule: 'evenodd',
                      defaultClipRule: 'evenodd',
                      onClick: t.onResetConnection,
                    },
                  ],
                }
              : {
                  message: 'Confirm on phone',
                  appSrc: this.appSrc,
                  menuItems: [
                    {
                      isRed: !0,
                      info: 'Cancel transaction',
                      svgWidth: '11',
                      svgHeight: '11',
                      path: 'M10.3711 1.52346L9.21775 0.370117L5.37109 4.21022L1.52444 0.370117L0.371094 1.52346L4.2112 5.37012L0.371094 9.21677L1.52444 10.3701L5.37109 6.53001L9.21775 10.3701L10.3711 9.21677L6.53099 5.37012L10.3711 1.52346Z',
                      defaultFillRule: 'inherit',
                      defaultClipRule: 'inherit',
                      onClick: t.onCancel,
                    },
                    {
                      isRed: !1,
                      info: 'Reset connection',
                      svgWidth: '10',
                      svgHeight: '11',
                      path: 'M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z',
                      defaultFillRule: 'evenodd',
                      defaultClipRule: 'evenodd',
                      onClick: t.onResetConnection,
                    },
                  ],
                }),
            this.snackbar.presentItem(e)
          );
        }
        setAppSrc(t) {
          this.appSrc = t;
        }
        reloadUI() {
          document.location.reload();
        }
        inlineAccountsResponse() {
          return !1;
        }
        inlineAddEthereumChain(t) {
          return !1;
        }
        inlineWatchAsset() {
          return !1;
        }
        inlineSwitchEthereumChain() {
          return !1;
        }
        setStandalone(t) {
          this.standalone = t;
        }
        isStandalone() {
          var t;
          return null !== (t = this.standalone) && void 0 !== t && t;
        }
      }
      e.WalletSDKUI = o;
    },
    IUTb: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return o;
      });
      var r = n('6blF'),
        i = n('+tJ4'),
        s = n('JF+6');
      function o(t, e) {
        return e ? Object(s['a'])(t, e) : new r['a'](Object(i['a'])(t));
      }
    },
    Iwol: function (t, e, n) {
      'use strict';
      function r() {
        return (t) => t;
      }
      function i(t) {
        return Math.floor(t);
      }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.ProviderType =
          e.RegExpString =
          e.IntNumber =
          e.BigIntString =
          e.AddressString =
          e.HexString =
          e.OpaqueType =
            void 0),
        (e.OpaqueType = r),
        (e.HexString = r()),
        (e.AddressString = r()),
        (e.BigIntString = r()),
        (e.IntNumber = i),
        (e.RegExpString = r()),
        (function (t) {
          (t['CoinbaseWallet'] = 'CoinbaseWallet'),
            (t['MetaMask'] = 'MetaMask'),
            (t['Unselected'] = '');
        })(e.ProviderType || (e.ProviderType = {}));
    },
    IxPp: function (t, e, n) {
      'use strict';
      n.d(e, 'b', function () {
        return u;
      }),
        n.d(e, 'a', function () {
          return d;
        });
      var r = n('mrSG'),
        i = n('FFOo'),
        s = n('pugT'),
        o = n('6blF'),
        a = n('K9Ia');
      function u(t, e, n, r) {
        return function (i) {
          return i.lift(new c(t, e, n, r));
        };
      }
      var c = (function () {
          function t(t, e, n, r) {
            (this.keySelector = t),
              (this.elementSelector = e),
              (this.durationSelector = n),
              (this.subjectSelector = r);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                new l(
                  t,
                  this.keySelector,
                  this.elementSelector,
                  this.durationSelector,
                  this.subjectSelector,
                ),
              );
            }),
            t
          );
        })(),
        l = (function (t) {
          function e(e, n, r, i, s) {
            var o = t.call(this, e) || this;
            return (
              (o.keySelector = n),
              (o.elementSelector = r),
              (o.durationSelector = i),
              (o.subjectSelector = s),
              (o.groups = null),
              (o.attemptedToUnsubscribe = !1),
              (o.count = 0),
              o
            );
          }
          return (
            r['__extends'](e, t),
            (e.prototype._next = function (t) {
              var e;
              try {
                e = this.keySelector(t);
              } catch (n) {
                return void this.error(n);
              }
              this._group(t, e);
            }),
            (e.prototype._group = function (t, e) {
              var n = this.groups;
              n || (n = this.groups = new Map());
              var r,
                i = n.get(e);
              if (this.elementSelector)
                try {
                  r = this.elementSelector(t);
                } catch (u) {
                  this.error(u);
                }
              else r = t;
              if (!i) {
                (i = this.subjectSelector
                  ? this.subjectSelector()
                  : new a['a']()),
                  n.set(e, i);
                var s = new d(e, i, this);
                if ((this.destination.next(s), this.durationSelector)) {
                  var o = void 0;
                  try {
                    o = this.durationSelector(new d(e, i));
                  } catch (u) {
                    return void this.error(u);
                  }
                  this.add(o.subscribe(new h(e, i, this)));
                }
              }
              i.closed || i.next(r);
            }),
            (e.prototype._error = function (t) {
              var e = this.groups;
              e &&
                (e.forEach(function (e, n) {
                  e.error(t);
                }),
                e.clear()),
                this.destination.error(t);
            }),
            (e.prototype._complete = function () {
              var t = this.groups;
              t &&
                (t.forEach(function (t, e) {
                  t.complete();
                }),
                t.clear()),
                this.destination.complete();
            }),
            (e.prototype.removeGroup = function (t) {
              this.groups.delete(t);
            }),
            (e.prototype.unsubscribe = function () {
              this.closed ||
                ((this.attemptedToUnsubscribe = !0),
                0 === this.count && t.prototype.unsubscribe.call(this));
            }),
            e
          );
        })(i['a']),
        h = (function (t) {
          function e(e, n, r) {
            var i = t.call(this, n) || this;
            return (i.key = e), (i.group = n), (i.parent = r), i;
          }
          return (
            r['__extends'](e, t),
            (e.prototype._next = function (t) {
              this.complete();
            }),
            (e.prototype._unsubscribe = function () {
              var t = this,
                e = t.parent,
                n = t.key;
              (this.key = this.parent = null), e && e.removeGroup(n);
            }),
            e
          );
        })(i['a']),
        d = (function (t) {
          function e(e, n, r) {
            var i = t.call(this) || this;
            return (
              (i.key = e), (i.groupSubject = n), (i.refCountSubscription = r), i
            );
          }
          return (
            r['__extends'](e, t),
            (e.prototype._subscribe = function (t) {
              var e = new s['a'](),
                n = this,
                r = n.refCountSubscription,
                i = n.groupSubject;
              return (
                r && !r.closed && e.add(new f(r)), e.add(i.subscribe(t)), e
              );
            }),
            e
          );
        })(o['a']),
        f = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return (n.parent = e), e.count++, n;
          }
          return (
            r['__extends'](e, t),
            (e.prototype.unsubscribe = function () {
              var e = this.parent;
              e.closed ||
                this.closed ||
                (t.prototype.unsubscribe.call(this),
                (e.count -= 1),
                0 === e.count && e.attemptedToUnsubscribe && e.unsubscribe());
            }),
            e
          );
        })(s['a']);
    },
    J7gi: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default =
          'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTQiIGN5PSIxNCIgcj0iMTQiIGZpbGw9IiMwMDUyRkYiLz48cGF0aCBkPSJNMjMuODUyIDE0QTkuODM0IDkuODM0IDAgMCAxIDE0IDIzLjg1MiA5LjgzNCA5LjgzNCAwIDAgMSA0LjE0OCAxNCA5LjgzNCA5LjgzNCAwIDAgMSAxNCA0LjE0OCA5LjgzNCA5LjgzNCAwIDAgMSAyMy44NTIgMTRaIiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTExLjE4NSAxMi41MDRjMC0uNDU2IDAtLjcxLjA5OC0uODYyLjA5OC0uMTUyLjE5Ni0uMzA0LjM0My0uMzU1LjE5Ni0uMTAyLjM5Mi0uMTAyLjg4MS0uMTAyaDIuOTg2Yy40OSAwIC42ODYgMCAuODgyLjEwMi4xNDYuMTAxLjI5My4yMDMuMzQyLjM1NS4wOTguMjAzLjA5OC40MDYuMDk4Ljg2MnYyLjk5MmMwIC40NTcgMCAuNzEtLjA5OC44NjMtLjA5OC4xNTItLjE5NS4zMDQtLjM0Mi4zNTUtLjE5Ni4xMDEtLjM5Mi4xMDEtLjg4Mi4xMDFoLTIuOTg2Yy0uNDkgMC0uNjg1IDAtLjg4LS4xMDEtLjE0OC0uMTAyLS4yOTUtLjIwMy0uMzQ0LS4zNTUtLjA5OC0uMjAzLS4wOTgtLjQwNi0uMDk4LS44NjN2LTIuOTkyWiIgZmlsbD0iIzAwNTJGRiIvPjwvc3ZnPg==');
    },
    JBbW: function (t, e, n) {
      (function (e) {
        const r = n('b94t');
        function i() {
          (this.state = [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0,
          ]),
            (this.blockSize = null),
            (this.count = 0),
            (this.squeezing = !1);
        }
        (i.prototype.initialize = function (t, e) {
          for (let n = 0; n < 50; ++n) this.state[n] = 0;
          (this.blockSize = t / 8), (this.count = 0), (this.squeezing = !1);
        }),
          (i.prototype.absorb = function (t) {
            for (let e = 0; e < t.length; ++e)
              (this.state[~~(this.count / 4)] ^=
                t[e] << ((this.count % 4) * 8)),
                (this.count += 1),
                this.count === this.blockSize &&
                  (r.p1600(this.state), (this.count = 0));
          }),
          (i.prototype.absorbLastFewBits = function (t) {
            (this.state[~~(this.count / 4)] ^= t << ((this.count % 4) * 8)),
              0 !== (128 & t) &&
                this.count === this.blockSize - 1 &&
                r.p1600(this.state),
              (this.state[~~((this.blockSize - 1) / 4)] ^=
                128 << (((this.blockSize - 1) % 4) * 8)),
              r.p1600(this.state),
              (this.count = 0),
              (this.squeezing = !0);
          }),
          (i.prototype.squeeze = function (t) {
            this.squeezing || this.absorbLastFewBits(1);
            const n = e.alloc(t);
            for (let e = 0; e < t; ++e)
              (n[e] =
                (this.state[~~(this.count / 4)] >>> ((this.count % 4) * 8)) &
                255),
                (this.count += 1),
                this.count === this.blockSize &&
                  (r.p1600(this.state), (this.count = 0));
            return n;
          }),
          (i.prototype.copy = function (t) {
            for (let e = 0; e < 50; ++e) t.state[e] = this.state[e];
            (t.blockSize = this.blockSize),
              (t.count = this.count),
              (t.squeezing = this.squeezing);
          }),
          (t.exports = i);
      }).call(this, n('HDXh').Buffer);
    },
    'JF+6': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return s;
      });
      var r = n('6blF'),
        i = n('pugT');
      function s(t, e) {
        return new r['a'](function (n) {
          var r = new i['a'](),
            s = 0;
          return (
            r.add(
              e.schedule(function () {
                s !== t.length
                  ? (n.next(t[s++]), n.closed || r.add(this.schedule()))
                  : n.complete();
              }),
            ),
            r
          );
        });
      }
    },
    K6Iq: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.WalletSDKRelayAbstract =
          e.APP_VERSION_KEY =
          e.LOCAL_STORAGE_ADDRESSES_KEY =
          e.WALLET_USER_NAME_KEY =
            void 0);
      const r = n('oktN');
      (e.WALLET_USER_NAME_KEY = 'walletUsername'),
        (e.LOCAL_STORAGE_ADDRESSES_KEY = 'Addresses'),
        (e.APP_VERSION_KEY = 'AppVersion');
      class i {
        async makeEthereumJSONRPCRequest(t, e) {
          if (!e) throw new Error('Error: No jsonRpcUrl provided');
          return window
            .fetch(e, {
              method: 'POST',
              body: JSON.stringify(t),
              mode: 'cors',
              headers: { 'Content-Type': 'application/json' },
            })
            .then((t) => t.json())
            .then((t) => {
              if (!t) throw r.ethErrors.rpc.parse({});
              const e = t,
                { error: n } = e;
              if (n) throw (0, r.serializeError)(n);
              return e;
            });
        }
      }
      e.WalletSDKRelayAbstract = i;
    },
    K9Ia: function (t, e, n) {
      'use strict';
      n.d(e, 'b', function () {
        return l;
      }),
        n.d(e, 'a', function () {
          return h;
        });
      var r = n('mrSG'),
        i = n('6blF'),
        s = n('FFOo'),
        o = n('pugT'),
        a = n('8g8A'),
        u = n('uMaO'),
        c = n('L/V9'),
        l = (function (t) {
          function e(e) {
            var n = t.call(this, e) || this;
            return (n.destination = e), n;
          }
          return r['__extends'](e, t), e;
        })(s['a']),
        h = (function (t) {
          function e() {
            var e = t.call(this) || this;
            return (
              (e.observers = []),
              (e.closed = !1),
              (e.isStopped = !1),
              (e.hasError = !1),
              (e.thrownError = null),
              e
            );
          }
          return (
            r['__extends'](e, t),
            (e.prototype[c['a']] = function () {
              return new l(this);
            }),
            (e.prototype.lift = function (t) {
              var e = new d(this, this);
              return (e.operator = t), e;
            }),
            (e.prototype.next = function (t) {
              if (this.closed) throw new a['a']();
              if (!this.isStopped)
                for (
                  var e = this.observers, n = e.length, r = e.slice(), i = 0;
                  i < n;
                  i++
                )
                  r[i].next(t);
            }),
            (e.prototype.error = function (t) {
              if (this.closed) throw new a['a']();
              (this.hasError = !0),
                (this.thrownError = t),
                (this.isStopped = !0);
              for (
                var e = this.observers, n = e.length, r = e.slice(), i = 0;
                i < n;
                i++
              )
                r[i].error(t);
              this.observers.length = 0;
            }),
            (e.prototype.complete = function () {
              if (this.closed) throw new a['a']();
              this.isStopped = !0;
              for (
                var t = this.observers, e = t.length, n = t.slice(), r = 0;
                r < e;
                r++
              )
                n[r].complete();
              this.observers.length = 0;
            }),
            (e.prototype.unsubscribe = function () {
              (this.isStopped = !0),
                (this.closed = !0),
                (this.observers = null);
            }),
            (e.prototype._trySubscribe = function (e) {
              if (this.closed) throw new a['a']();
              return t.prototype._trySubscribe.call(this, e);
            }),
            (e.prototype._subscribe = function (t) {
              if (this.closed) throw new a['a']();
              return this.hasError
                ? (t.error(this.thrownError), o['a'].EMPTY)
                : this.isStopped
                ? (t.complete(), o['a'].EMPTY)
                : (this.observers.push(t), new u['a'](this, t));
            }),
            (e.prototype.asObservable = function () {
              var t = new i['a']();
              return (t.source = this), t;
            }),
            (e.create = function (t, e) {
              return new d(t, e);
            }),
            e
          );
        })(i['a']),
        d = (function (t) {
          function e(e, n) {
            var r = t.call(this) || this;
            return (r.destination = e), (r.source = n), r;
          }
          return (
            r['__extends'](e, t),
            (e.prototype.next = function (t) {
              var e = this.destination;
              e && e.next && e.next(t);
            }),
            (e.prototype.error = function (t) {
              var e = this.destination;
              e && e.error && this.destination.error(t);
            }),
            (e.prototype.complete = function () {
              var t = this.destination;
              t && t.complete && this.destination.complete();
            }),
            (e.prototype._subscribe = function (t) {
              var e = this.source;
              return e ? this.source.subscribe(t) : o['a'].EMPTY;
            }),
            e
          );
        })(h);
    },
    KFPw: function (t, e, n) {
      (function (e) {
        const r = n('lFtt'),
          i = n('W0gz'),
          s = {
            type: 'object',
            properties: {
              types: {
                type: 'object',
                additionalProperties: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      name: { type: 'string' },
                      type: { type: 'string' },
                    },
                    required: ['name', 'type'],
                  },
                },
              },
              primaryType: { type: 'string' },
              domain: { type: 'object' },
              message: { type: 'object' },
            },
            required: ['types', 'primaryType', 'domain', 'message'],
          },
          o = {
            encodeData(t, n, s, o = !0) {
              const a = ['bytes32'],
                u = [this.hashType(t, s)];
              if (o) {
                const c = (t, n, a) => {
                  if (void 0 !== s[n])
                    return [
                      'bytes32',
                      null == a
                        ? '0x0000000000000000000000000000000000000000000000000000000000000000'
                        : r.keccak(this.encodeData(n, a, s, o)),
                    ];
                  if (void 0 === a)
                    throw new Error(
                      `missing value for field ${t} of type ${n}`,
                    );
                  if ('bytes' === n) return ['bytes32', r.keccak(a)];
                  if ('string' === n)
                    return (
                      'string' === typeof a && (a = e.from(a, 'utf8')),
                      ['bytes32', r.keccak(a)]
                    );
                  if (n.lastIndexOf(']') === n.length - 1) {
                    const e = n.slice(0, n.lastIndexOf('[')),
                      s = a.map((n) => c(t, e, n));
                    return [
                      'bytes32',
                      r.keccak(
                        i.rawEncode(
                          s.map(([t]) => t),
                          s.map(([, t]) => t),
                        ),
                      ),
                    ];
                  }
                  return [n, a];
                };
                for (const e of s[t]) {
                  const [t, r] = c(e.name, e.type, n[e.name]);
                  a.push(t), u.push(r);
                }
              } else
                for (const i of s[t]) {
                  let t = n[i.name];
                  if (void 0 !== t)
                    if ('bytes' === i.type)
                      a.push('bytes32'), (t = r.keccak(t)), u.push(t);
                    else if ('string' === i.type)
                      a.push('bytes32'),
                        'string' === typeof t && (t = e.from(t, 'utf8')),
                        (t = r.keccak(t)),
                        u.push(t);
                    else if (void 0 !== s[i.type])
                      a.push('bytes32'),
                        (t = r.keccak(this.encodeData(i.type, t, s, o))),
                        u.push(t);
                    else {
                      if (i.type.lastIndexOf(']') === i.type.length - 1)
                        throw new Error(
                          'Arrays currently unimplemented in encodeData',
                        );
                      a.push(i.type), u.push(t);
                    }
                }
              return i.rawEncode(a, u);
            },
            encodeType(t, e) {
              let n = '',
                r = this.findTypeDependencies(t, e).filter((e) => e !== t);
              r = [t].concat(r.sort());
              for (const i of r) {
                const t = e[i];
                if (!t) throw new Error('No type definition specified: ' + i);
                n +=
                  i +
                  '(' +
                  e[i].map(({ name: t, type: e }) => e + ' ' + t).join(',') +
                  ')';
              }
              return n;
            },
            findTypeDependencies(t, e, n = []) {
              if (((t = t.match(/^\w*/)[0]), n.includes(t) || void 0 === e[t]))
                return n;
              n.push(t);
              for (const r of e[t])
                for (const t of this.findTypeDependencies(r.type, e, n))
                  !n.includes(t) && n.push(t);
              return n;
            },
            hashStruct(t, e, n, i = !0) {
              return r.keccak(this.encodeData(t, e, n, i));
            },
            hashType(t, e) {
              return r.keccak(this.encodeType(t, e));
            },
            sanitizeData(t) {
              const e = {};
              for (const n in s.properties) t[n] && (e[n] = t[n]);
              return (
                e.types &&
                  (e.types = Object.assign({ EIP712Domain: [] }, e.types)),
                e
              );
            },
            hash(t, n = !0) {
              const i = this.sanitizeData(t),
                s = [e.from('1901', 'hex')];
              return (
                s.push(this.hashStruct('EIP712Domain', i.domain, i.types, n)),
                'EIP712Domain' !== i.primaryType &&
                  s.push(this.hashStruct(i.primaryType, i.message, i.types, n)),
                r.keccak(e.concat(s))
              );
            },
          };
        function a(t) {
          const e = new Error('Expect argument to be non-empty array');
          if ('object' !== typeof t || !t.length) throw e;
          const n = t.map(function (t) {
              return 'bytes' === t.type ? r.toBuffer(t.value) : t.value;
            }),
            s = t.map(function (t) {
              return t.type;
            }),
            o = t.map(function (t) {
              if (!t.name) throw e;
              return t.type + ' ' + t.name;
            });
          return i.soliditySHA3(
            ['bytes32', 'bytes32'],
            [
              i.soliditySHA3(new Array(t.length).fill('string'), o),
              i.soliditySHA3(s, n),
            ],
          );
        }
        t.exports = {
          TYPED_MESSAGE_SCHEMA: s,
          TypedDataUtils: o,
          hashForSignTypedDataLegacy: function (t) {
            return a(t.data);
          },
          hashForSignTypedData_v3: function (t) {
            return o.hash(t.data, !1);
          },
          hashForSignTypedData_v4: function (t) {
            return o.hash(t.data);
          },
        };
      }).call(this, n('HDXh').Buffer);
    },
    KQya: function (t, e, n) {
      'use strict';
      n.d(e, 'b', function () {
        return f;
      }),
        n.d(e, 'a', function () {
          return p;
        });
      var r = n('mrSG'),
        i = 1,
        s = (function () {
          return Promise.resolve();
        })(),
        o = {};
      function a(t) {
        return t in o && (delete o[t], !0);
      }
      var u = {
          setImmediate: function (t) {
            var e = i++;
            return (
              (o[e] = !0),
              s.then(function () {
                return a(e) && t();
              }),
              e
            );
          },
          clearImmediate: function (t) {
            a(t);
          },
        },
        c = n('h9Dq'),
        l = (function (t) {
          function e(e, n) {
            var r = t.call(this, e, n) || this;
            return (r.scheduler = e), (r.work = n), r;
          }
          return (
            r['__extends'](e, t),
            (e.prototype.requestAsyncId = function (e, n, r) {
              return (
                void 0 === r && (r = 0),
                null !== r && r > 0
                  ? t.prototype.requestAsyncId.call(this, e, n, r)
                  : (e.actions.push(this),
                    e.scheduled ||
                      (e.scheduled = u.setImmediate(e.flush.bind(e, null))))
              );
            }),
            (e.prototype.recycleAsyncId = function (e, n, r) {
              if (
                (void 0 === r && (r = 0),
                (null !== r && r > 0) || (null === r && this.delay > 0))
              )
                return t.prototype.recycleAsyncId.call(this, e, n, r);
              0 === e.actions.length &&
                (u.clearImmediate(n), (e.scheduled = void 0));
            }),
            e
          );
        })(c['a']),
        h = n('CS9Q'),
        d = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            r['__extends'](e, t),
            (e.prototype.flush = function (t) {
              (this.active = !0), (this.scheduled = void 0);
              var e,
                n = this.actions,
                r = -1,
                i = n.length;
              t = t || n.shift();
              do {
                if ((e = t.execute(t.state, t.delay))) break;
              } while (++r < i && (t = n.shift()));
              if (((this.active = !1), e)) {
                while (++r < i && (t = n.shift())) t.unsubscribe();
                throw e;
              }
            }),
            e
          );
        })(h['a']),
        f = new d(l),
        p = f;
    },
    KhEm: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return c;
      }),
        n.d(e, 'b', function () {
          return l;
        });
      var r = n('mrSG'),
        i = n('K9Ia'),
        s = n('6blF'),
        o = n('FFOo'),
        a = n('pugT'),
        u = n('yGWI'),
        c = (function (t) {
          function e(e, n) {
            var r = t.call(this) || this;
            return (
              (r.source = e),
              (r.subjectFactory = n),
              (r._refCount = 0),
              (r._isComplete = !1),
              r
            );
          }
          return (
            r['__extends'](e, t),
            (e.prototype._subscribe = function (t) {
              return this.getSubject().subscribe(t);
            }),
            (e.prototype.getSubject = function () {
              var t = this._subject;
              return (
                (t && !t.isStopped) || (this._subject = this.subjectFactory()),
                this._subject
              );
            }),
            (e.prototype.connect = function () {
              var t = this._connection;
              return (
                t ||
                  ((this._isComplete = !1),
                  (t = this._connection = new a['a']()),
                  t.add(this.source.subscribe(new h(this.getSubject(), this))),
                  t.closed && ((this._connection = null), (t = a['a'].EMPTY))),
                t
              );
            }),
            (e.prototype.refCount = function () {
              return Object(u['a'])()(this);
            }),
            e
          );
        })(s['a']),
        l = (function () {
          var t = c.prototype;
          return {
            operator: { value: null },
            _refCount: { value: 0, writable: !0 },
            _subject: { value: null, writable: !0 },
            _connection: { value: null, writable: !0 },
            _subscribe: { value: t._subscribe },
            _isComplete: { value: t._isComplete, writable: !0 },
            getSubject: { value: t.getSubject },
            connect: { value: t.connect },
            refCount: { value: t.refCount },
          };
        })(),
        h = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return (r.connectable = n), r;
          }
          return (
            r['__extends'](e, t),
            (e.prototype._error = function (e) {
              this._unsubscribe(), t.prototype._error.call(this, e);
            }),
            (e.prototype._complete = function () {
              (this.connectable._isComplete = !0),
                this._unsubscribe(),
                t.prototype._complete.call(this);
            }),
            (e.prototype._unsubscribe = function () {
              var t = this.connectable;
              if (t) {
                this.connectable = null;
                var e = t._connection;
                (t._refCount = 0),
                  (t._subject = null),
                  (t._connection = null),
                  e && e.unsubscribe();
              }
            }),
            e
          );
        })(i['b']);
      o['a'];
    },
    'L/V9': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return r;
      });
      var r = (function () {
        return 'function' === typeof Symbol
          ? Symbol('rxSubscriber')
          : '@@rxSubscriber_' + Math.random();
      })();
    },
    LDUz: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default =
          '.-cbwsdk-css-reset .-cbwsdk-connect-content{height:430px;width:700px;border-radius:12px;padding:30px}.-cbwsdk-css-reset .-cbwsdk-connect-content.light{background:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content.dark{background:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-header{display:flex;align-items:center;justify-content:space-between;margin:0 0 30px}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading{font-style:normal;font-weight:500;font-size:28px;line-height:36px;margin:0}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-layout{display:flex;flex-direction:row}.-cbwsdk-css-reset .-cbwsdk-connect-content-column-left{margin-right:30px;display:flex;flex-direction:column;justify-content:space-between}.-cbwsdk-css-reset .-cbwsdk-connect-content-column-right{flex:25%;margin-right:34px}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-wrapper{width:220px;height:220px;border-radius:12px;display:flex;justify-content:center;align-items:center;background:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting{position:absolute;top:0;bottom:0;left:0;right:0;display:flex;flex-direction:column;align-items:center;justify-content:center}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.light{background-color:rgba(255,255,255,.95)}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.light>p{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.dark{background-color:rgba(10,11,13,.9)}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.dark>p{color:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting>p{font-size:12px;font-weight:bold;margin-top:16px}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app{border-radius:8px;font-size:14px;line-height:20px;padding:12px;width:339px}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app.light{background:#eef0f3;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app.dark{background:#1e2025;color:#8a919e}.-cbwsdk-css-reset .-cbwsdk-cancel-button{-webkit-appearance:none;border:none;background:none;cursor:pointer;padding:0;margin:0}.-cbwsdk-css-reset .-cbwsdk-cancel-button-x{position:relative;display:block;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-wallet-steps{padding:0 0 0 16px;margin:0;width:100%;list-style:decimal}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item{list-style-type:decimal;display:list-item;font-style:normal;font-weight:400;font-size:16px;line-height:24px;margin-top:20px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item-wrapper{display:flex;align-items:center}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-pad-left{margin-left:6px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon{display:flex;border-radius:50%;height:24px;width:24px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon svg{margin:auto;display:block}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon.light{background:#0052ff}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon.dark{background:#588af5}.-cbwsdk-css-reset .-cbwsdk-connect-item{align-items:center;display:flex;flex-direction:row;padding:16px 24px;gap:12px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-connect-item.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-item.light.selected{background:#f5f8ff;color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-connect-item.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-item.dark.selected{background:#001033;color:#588af5}.-cbwsdk-css-reset .-cbwsdk-connect-item.selected{border-radius:100px;font-weight:600}.-cbwsdk-css-reset .-cbwsdk-connect-item-copy-wrapper{margin:0 4px 0 8px}.-cbwsdk-css-reset .-cbwsdk-connect-item-title{margin:0 0 0;font-size:16px;line-height:24px;font-weight:500}.-cbwsdk-css-reset .-cbwsdk-connect-item-description{font-weight:400;font-size:14px;line-height:20px;margin:0}');
    },
    LPKZ: function (t, e, n) {
      'use strict';
      function r(t) {
        return async (e, n, r, i) => {
          let s;
          const o = new Promise((t) => {
            s = t;
          });
          let a = null,
            u = !1;
          const c = async () => {
            (u = !0),
              r((t) => {
                (a = t), s();
              }),
              await o;
          };
          try {
            await t(e, n, c), u ? (await o, a(null)) : i(null);
          } catch (l) {
            a ? a(l) : i(l);
          }
        };
      }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.createAsyncMiddleware = void 0),
        (e.createAsyncMiddleware = r);
    },
    M2W7: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.CoinbaseWalletProvider = e.CoinbaseWalletSDK = void 0);
      const r = n('Ed4r'),
        i = n('AjSF');
      var s = n('Ed4r');
      Object.defineProperty(e, 'CoinbaseWalletSDK', {
        enumerable: !0,
        get: function () {
          return s.CoinbaseWalletSDK;
        },
      });
      var o = n('AjSF');
      Object.defineProperty(e, 'CoinbaseWalletProvider', {
        enumerable: !0,
        get: function () {
          return o.CoinbaseWalletProvider;
        },
      }),
        (e.default = r.CoinbaseWalletSDK),
        'undefined' !== typeof window &&
          ((window.CoinbaseWalletSDK = r.CoinbaseWalletSDK),
          (window.CoinbaseWalletProvider = i.CoinbaseWalletProvider),
          (window.WalletLink = r.CoinbaseWalletSDK),
          (window.WalletLinkProvider = i.CoinbaseWalletProvider));
    },
    MGBS: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return s;
      });
      var r = n('mrSG'),
        i = n('FFOo'),
        s = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            r['__extends'](e, t),
            (e.prototype.notifyNext = function (t, e, n, r, i) {
              this.destination.next(e);
            }),
            (e.prototype.notifyError = function (t, e) {
              this.destination.error(t);
            }),
            (e.prototype.notifyComplete = function (t) {
              this.destination.complete();
            }),
            e
          );
        })(i['a']);
    },
    MOW9: function (t, e, n) {
      'use strict';
      function r(t) {
        return Object.assign({ type: 'HostSession' }, t);
      }
      function i(t) {
        return Object.assign({ type: 'IsLinked' }, t);
      }
      function s(t) {
        return Object.assign({ type: 'GetSessionConfig' }, t);
      }
      function o(t) {
        return Object.assign({ type: 'SetSessionConfig' }, t);
      }
      function a(t) {
        return Object.assign({ type: 'PublishEvent' }, t);
      }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.ClientMessagePublishEvent =
          e.ClientMessageSetSessionConfig =
          e.ClientMessageGetSessionConfig =
          e.ClientMessageIsLinked =
          e.ClientMessageHostSession =
            void 0),
        (e.ClientMessageHostSession = r),
        (e.ClientMessageIsLinked = i),
        (e.ClientMessageGetSessionConfig = s),
        (e.ClientMessageSetSessionConfig = o),
        (e.ClientMessagePublishEvent = a);
    },
    MOxe: function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, 'useCallback', function () {
          return E;
        }),
        n.d(e, 'useContext', function () {
          return x;
        }),
        n.d(e, 'useDebugValue', function () {
          return k;
        }),
        n.d(e, 'useEffect', function () {
          return v;
        }),
        n.d(e, 'useErrorBoundary', function () {
          return C;
        }),
        n.d(e, 'useId', function () {
          return I;
        }),
        n.d(e, 'useImperativeHandle', function () {
          return S;
        }),
        n.d(e, 'useLayoutEffect', function () {
          return _;
        }),
        n.d(e, 'useMemo', function () {
          return M;
        }),
        n.d(e, 'useReducer', function () {
          return y;
        }),
        n.d(e, 'useRef', function () {
          return w;
        }),
        n.d(e, 'useState', function () {
          return m;
        });
      var r,
        i,
        s,
        o,
        a = n('2mXy'),
        u = 0,
        c = [],
        l = [],
        h = a['options'].__b,
        d = a['options'].__r,
        f = a['options'].diffed,
        p = a['options'].__c,
        b = a['options'].unmount;
      function g(t, e) {
        a['options'].__h && a['options'].__h(i, t, u || e), (u = 0);
        var n = i.__H || (i.__H = { __: [], __h: [] });
        return t >= n.__.length && n.__.push({ __V: l }), n.__[t];
      }
      function m(t) {
        return (u = 1), y(L, t);
      }
      function y(t, e, n) {
        var s = g(r++, 2);
        if (
          ((s.t = t),
          !s.__c &&
            ((s.__ = [
              n ? n(e) : L(void 0, e),
              function (t) {
                var e = s.__N ? s.__N[0] : s.__[0],
                  n = s.t(e, t);
                e !== n && ((s.__N = [n, s.__[1]]), s.__c.setState({}));
              },
            ]),
            (s.__c = i),
            !i.u))
        ) {
          var o = function (t, e, n) {
            if (!s.__c.__H) return !0;
            var r = s.__c.__H.__.filter(function (t) {
              return t.__c;
            });
            if (
              r.every(function (t) {
                return !t.__N;
              })
            )
              return !a || a.call(this, t, e, n);
            var i = !1;
            return (
              r.forEach(function (t) {
                if (t.__N) {
                  var e = t.__[0];
                  (t.__ = t.__N), (t.__N = void 0), e !== t.__[0] && (i = !0);
                }
              }),
              !(!i && s.__c.props === t) && (!a || a.call(this, t, e, n))
            );
          };
          i.u = !0;
          var a = i.shouldComponentUpdate,
            u = i.componentWillUpdate;
          (i.componentWillUpdate = function (t, e, n) {
            if (this.__e) {
              var r = a;
              (a = void 0), o(t, e, n), (a = r);
            }
            u && u.call(this, t, e, n);
          }),
            (i.shouldComponentUpdate = o);
        }
        return s.__N || s.__;
      }
      function v(t, e) {
        var n = g(r++, 3);
        !a['options'].__s &&
          T(n.__H, e) &&
          ((n.__ = t), (n.i = e), i.__H.__h.push(n));
      }
      function _(t, e) {
        var n = g(r++, 4);
        !a['options'].__s &&
          T(n.__H, e) &&
          ((n.__ = t), (n.i = e), i.__h.push(n));
      }
      function w(t) {
        return (
          (u = 5),
          M(function () {
            return { current: t };
          }, [])
        );
      }
      function S(t, e, n) {
        (u = 6),
          _(
            function () {
              return 'function' == typeof t
                ? (t(e()),
                  function () {
                    return t(null);
                  })
                : t
                ? ((t.current = e()),
                  function () {
                    return (t.current = null);
                  })
                : void 0;
            },
            null == n ? n : n.concat(t),
          );
      }
      function M(t, e) {
        var n = g(r++, 7);
        return T(n.__H, e)
          ? ((n.__V = t()), (n.i = e), (n.__h = t), n.__V)
          : n.__;
      }
      function E(t, e) {
        return (
          (u = 8),
          M(function () {
            return t;
          }, e)
        );
      }
      function x(t) {
        var e = i.context[t.__c],
          n = g(r++, 9);
        return (
          (n.c = t),
          e ? (null == n.__ && ((n.__ = !0), e.sub(i)), e.props.value) : t.__
        );
      }
      function k(t, e) {
        a['options'].useDebugValue && a['options'].useDebugValue(e ? e(t) : t);
      }
      function C(t) {
        var e = g(r++, 10),
          n = m();
        return (
          (e.__ = t),
          i.componentDidCatch ||
            (i.componentDidCatch = function (t, r) {
              e.__ && e.__(t, r), n[1](t);
            }),
          [
            n[0],
            function () {
              n[1](void 0);
            },
          ]
        );
      }
      function I() {
        var t = g(r++, 11);
        if (!t.__) {
          for (var e = i.__v; null !== e && !e.__m && null !== e.__; ) e = e.__;
          var n = e.__m || (e.__m = [0, 0]);
          t.__ = 'P' + n[0] + '-' + n[1]++;
        }
        return t.__;
      }
      function O() {
        for (var t; (t = c.shift()); )
          if (t.__P && t.__H)
            try {
              t.__H.__h.forEach(R), t.__H.__h.forEach(N), (t.__H.__h = []);
            } catch (i) {
              (t.__H.__h = []), a['options'].__e(i, t.__v);
            }
      }
      (a['options'].__b = function (t) {
        (i = null), h && h(t);
      }),
        (a['options'].__r = function (t) {
          d && d(t), (r = 0);
          var e = (i = t.__c).__H;
          e &&
            (s === i
              ? ((e.__h = []),
                (i.__h = []),
                e.__.forEach(function (t) {
                  t.__N && (t.__ = t.__N), (t.__V = l), (t.__N = t.i = void 0);
                }))
              : (e.__h.forEach(R), e.__h.forEach(N), (e.__h = []))),
            (s = i);
        }),
        (a['options'].diffed = function (t) {
          f && f(t);
          var e = t.__c;
          e &&
            e.__H &&
            (e.__H.__h.length &&
              ((1 !== c.push(e) && o === a['options'].requestAnimationFrame) ||
                ((o = a['options'].requestAnimationFrame) || A)(O)),
            e.__H.__.forEach(function (t) {
              t.i && (t.__H = t.i),
                t.__V !== l && (t.__ = t.__V),
                (t.i = void 0),
                (t.__V = l);
            })),
            (s = i = null);
        }),
        (a['options'].__c = function (t, e) {
          e.some(function (t) {
            try {
              t.__h.forEach(R),
                (t.__h = t.__h.filter(function (t) {
                  return !t.__ || N(t);
                }));
            } catch (s) {
              e.some(function (t) {
                t.__h && (t.__h = []);
              }),
                (e = []),
                a['options'].__e(s, t.__v);
            }
          }),
            p && p(t, e);
        }),
        (a['options'].unmount = function (t) {
          b && b(t);
          var e,
            n = t.__c;
          n &&
            n.__H &&
            (n.__H.__.forEach(function (t) {
              try {
                R(t);
              } catch (t) {
                e = t;
              }
            }),
            (n.__H = void 0),
            e && a['options'].__e(e, n.__v));
        });
      var j = 'function' == typeof requestAnimationFrame;
      function A(t) {
        var e,
          n = function () {
            clearTimeout(r), j && cancelAnimationFrame(e), setTimeout(t);
          },
          r = setTimeout(n, 100);
        j && (e = requestAnimationFrame(n));
      }
      function R(t) {
        var e = i,
          n = t.__c;
        'function' == typeof n && ((t.__c = void 0), n()), (i = e);
      }
      function N(t) {
        var e = i;
        (t.__c = t.__()), (i = e);
      }
      function T(t, e) {
        return (
          !t ||
          t.length !== e.length ||
          e.some(function (e, n) {
            return e !== t[n];
          })
        );
      }
      function L(t, e) {
        return 'function' == typeof e ? e(t) : e;
      }
    },
    McSo: function (t, e, n) {
      'use strict';
      function r(t) {
        return null !== t && 'object' === typeof t;
      }
      n.d(e, 'a', function () {
        return r;
      });
    },
    MmAt: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.EthereumAddressFromSignedMessageResponse =
          e.SubmitEthereumTransactionResponse =
          e.SignEthereumTransactionResponse =
          e.SignEthereumMessageResponse =
          e.isRequestEthereumAccountsResponse =
          e.SelectProviderResponse =
          e.WatchAssetReponse =
          e.RequestEthereumAccountsResponse =
          e.SwitchEthereumChainResponse =
          e.AddEthereumChainResponse =
          e.ErrorResponse =
            void 0);
      const r = n('nAhp');
      function i(t, e, n) {
        return { method: t, errorMessage: e, errorCode: n };
      }
      function s(t) {
        return { method: r.Web3Method.addEthereumChain, result: t };
      }
      function o(t) {
        return { method: r.Web3Method.switchEthereumChain, result: t };
      }
      function a(t) {
        return { method: r.Web3Method.requestEthereumAccounts, result: t };
      }
      function u(t) {
        return { method: r.Web3Method.watchAsset, result: t };
      }
      function c(t) {
        return { method: r.Web3Method.selectProvider, result: t };
      }
      function l(t) {
        return t && t.method === r.Web3Method.requestEthereumAccounts;
      }
      function h(t) {
        return { method: r.Web3Method.signEthereumMessage, result: t };
      }
      function d(t) {
        return { method: r.Web3Method.signEthereumTransaction, result: t };
      }
      function f(t) {
        return { method: r.Web3Method.submitEthereumTransaction, result: t };
      }
      function p(t) {
        return {
          method: r.Web3Method.ethereumAddressFromSignedMessage,
          result: t,
        };
      }
      (e.ErrorResponse = i),
        (e.AddEthereumChainResponse = s),
        (e.SwitchEthereumChainResponse = o),
        (e.RequestEthereumAccountsResponse = a),
        (e.WatchAssetReponse = u),
        (e.SelectProviderResponse = c),
        (e.isRequestEthereumAccountsResponse = l),
        (e.SignEthereumMessageResponse = h),
        (e.SignEthereumTransactionResponse = d),
        (e.SubmitEthereumTransactionResponse = f),
        (e.EthereumAddressFromSignedMessageResponse = p);
    },
    N1pS: function (t, e) {
      (t.exports = a), (a.default = a), (a.stable = h), (a.stableStringify = h);
      var n = '[...]',
        r = '[Circular]',
        i = [],
        s = [];
      function o() {
        return {
          depthLimit: Number.MAX_SAFE_INTEGER,
          edgesLimit: Number.MAX_SAFE_INTEGER,
        };
      }
      function a(t, e, n, r) {
        var a;
        'undefined' === typeof r && (r = o()), c(t, '', 0, [], void 0, 0, r);
        try {
          a =
            0 === s.length
              ? JSON.stringify(t, e, n)
              : JSON.stringify(t, f(e), n);
        } catch (l) {
          return JSON.stringify(
            '[unable to serialize, circular reference is too complex to analyze]',
          );
        } finally {
          while (0 !== i.length) {
            var u = i.pop();
            4 === u.length
              ? Object.defineProperty(u[0], u[1], u[3])
              : (u[0][u[1]] = u[2]);
          }
        }
        return a;
      }
      function u(t, e, n, r) {
        var o = Object.getOwnPropertyDescriptor(r, n);
        void 0 !== o.get
          ? o.configurable
            ? (Object.defineProperty(r, n, { value: t }), i.push([r, n, e, o]))
            : s.push([e, n, t])
          : ((r[n] = t), i.push([r, n, e]));
      }
      function c(t, e, i, s, o, a, l) {
        var h;
        if (((a += 1), 'object' === typeof t && null !== t)) {
          for (h = 0; h < s.length; h++)
            if (s[h] === t) return void u(r, t, e, o);
          if ('undefined' !== typeof l.depthLimit && a > l.depthLimit)
            return void u(n, t, e, o);
          if ('undefined' !== typeof l.edgesLimit && i + 1 > l.edgesLimit)
            return void u(n, t, e, o);
          if ((s.push(t), Array.isArray(t)))
            for (h = 0; h < t.length; h++) c(t[h], h, h, s, t, a, l);
          else {
            var d = Object.keys(t);
            for (h = 0; h < d.length; h++) {
              var f = d[h];
              c(t[f], f, h, s, t, a, l);
            }
          }
          s.pop();
        }
      }
      function l(t, e) {
        return t < e ? -1 : t > e ? 1 : 0;
      }
      function h(t, e, n, r) {
        'undefined' === typeof r && (r = o());
        var a,
          u = d(t, '', 0, [], void 0, 0, r) || t;
        try {
          a =
            0 === s.length
              ? JSON.stringify(u, e, n)
              : JSON.stringify(u, f(e), n);
        } catch (l) {
          return JSON.stringify(
            '[unable to serialize, circular reference is too complex to analyze]',
          );
        } finally {
          while (0 !== i.length) {
            var c = i.pop();
            4 === c.length
              ? Object.defineProperty(c[0], c[1], c[3])
              : (c[0][c[1]] = c[2]);
          }
        }
        return a;
      }
      function d(t, e, s, o, a, c, h) {
        var f;
        if (((c += 1), 'object' === typeof t && null !== t)) {
          for (f = 0; f < o.length; f++)
            if (o[f] === t) return void u(r, t, e, a);
          try {
            if ('function' === typeof t.toJSON) return;
          } catch (m) {
            return;
          }
          if ('undefined' !== typeof h.depthLimit && c > h.depthLimit)
            return void u(n, t, e, a);
          if ('undefined' !== typeof h.edgesLimit && s + 1 > h.edgesLimit)
            return void u(n, t, e, a);
          if ((o.push(t), Array.isArray(t)))
            for (f = 0; f < t.length; f++) d(t[f], f, f, o, t, c, h);
          else {
            var p = {},
              b = Object.keys(t).sort(l);
            for (f = 0; f < b.length; f++) {
              var g = b[f];
              d(t[g], g, f, o, t, c, h), (p[g] = t[g]);
            }
            if ('undefined' === typeof a) return p;
            i.push([a, e, t]), (a[e] = p);
          }
          o.pop();
        }
      }
      function f(t) {
        return (
          (t =
            'undefined' !== typeof t
              ? t
              : function (t, e) {
                  return e;
                }),
          function (e, n) {
            if (s.length > 0)
              for (var r = 0; r < s.length; r++) {
                var i = s[r];
                if (i[1] === e && i[0] === n) {
                  (n = i[2]), s.splice(r, 1);
                  break;
                }
              }
            return t.call(this, e, n);
          }
        );
      }
    },
    Nk1h: function (t, e, n) {
      'use strict';
      const r = (t, e) =>
        function () {
          const n = e.promiseModule,
            r = new Array(arguments.length);
          for (let t = 0; t < arguments.length; t++) r[t] = arguments[t];
          return new n((n, i) => {
            e.errorFirst
              ? r.push(function (t, r) {
                  if (e.multiArgs) {
                    const e = new Array(arguments.length - 1);
                    for (let t = 1; t < arguments.length; t++)
                      e[t - 1] = arguments[t];
                    t ? (e.unshift(t), i(e)) : n(e);
                  } else t ? i(t) : n(r);
                })
              : r.push(function (t) {
                  if (e.multiArgs) {
                    const t = new Array(arguments.length - 1);
                    for (let e = 0; e < arguments.length; e++)
                      t[e] = arguments[e];
                    n(t);
                  } else n(t);
                }),
              t.apply(this, r);
          });
        };
      t.exports = (t, e) => {
        e = Object.assign(
          {
            exclude: [/.+(Sync|Stream)$/],
            errorFirst: !0,
            promiseModule: Promise,
          },
          e,
        );
        const n = (t) => {
          const n = (e) => ('string' === typeof e ? t === e : e.test(t));
          return e.include ? e.include.some(n) : !e.exclude.some(n);
        };
        let i;
        i =
          'function' === typeof t
            ? function () {
                return e.excludeMain
                  ? t.apply(this, arguments)
                  : r(t, e).apply(this, arguments);
              }
            : Object.create(Object.getPrototypeOf(t));
        for (const s in t) {
          const o = t[s];
          i[s] = 'function' === typeof o && n(s) ? r(o, e) : o;
        }
        return i;
      };
    },
    PEv4: function (t, e, n) {
      'use strict';
      var r =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.SnackbarInstance = e.SnackbarContainer = e.Snackbar = void 0);
      const i = r(n('iuhU')),
        s = n('2mXy'),
        o = n('MOxe'),
        a = r(n('619v')),
        u =
          'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDYuNzV2LTEuNWwtMS43Mi0uNTdjLS4wOC0uMjctLjE5LS41Mi0uMzItLjc3bC44MS0xLjYyLTEuMDYtMS4wNi0xLjYyLjgxYy0uMjQtLjEzLS41LS4yNC0uNzctLjMyTDYuNzUgMGgtMS41bC0uNTcgMS43MmMtLjI3LjA4LS41My4xOS0uNzcuMzJsLTEuNjItLjgxLTEuMDYgMS4wNi44MSAxLjYyYy0uMTMuMjQtLjI0LjUtLjMyLjc3TDAgNS4yNXYxLjVsMS43Mi41N2MuMDguMjcuMTkuNTMuMzIuNzdsLS44MSAxLjYyIDEuMDYgMS4wNiAxLjYyLS44MWMuMjQuMTMuNS4yMy43Ny4zMkw1LjI1IDEyaDEuNWwuNTctMS43MmMuMjctLjA4LjUyLS4xOS43Ny0uMzJsMS42Mi44MSAxLjA2LTEuMDYtLjgxLTEuNjJjLjEzLS4yNC4yMy0uNS4zMi0uNzdMMTIgNi43NXpNNiA4LjVhMi41IDIuNSAwIDAxMC01IDIuNSAyLjUgMCAwMTAgNXoiIGZpbGw9IiMwNTBGMTkiLz48L3N2Zz4=';
      function c(t) {
        switch (t) {
          case 'coinbase-app':
            return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE0LjY3NCAxOC44NThjLTIuMDQ1IDAtMy42NDgtMS43MjItMy42NDgtMy44NDVzMS42NTktMy44NDUgMy42NDgtMy44NDVjMS44MjQgMCAzLjMxNyAxLjM3NyAzLjU5MyAzLjIxNGgzLjcwM2MtLjMzMS0zLjk2LTMuNDgyLTcuMDU5LTcuMjk2LTcuMDU5LTQuMDM0IDAtNy4zNSAzLjQ0My03LjM1IDcuNjkgMCA0LjI0NiAzLjI2IDcuNjkgNy4zNSA3LjY5IDMuODcgMCA2Ljk2NS0zLjEgNy4yOTYtNy4wNTloLTMuNzAzYy0uMjc2IDEuODM2LTEuNzY5IDMuMjE0LTMuNTkzIDMuMjE0WiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0wIDEwLjY3OGMwLTMuNzExIDAtNS41OTYuNzQyLTcuMDIzQTYuNTMyIDYuNTMyIDAgMCAxIDMuNjU1Ljc0MkM1LjA4MiAwIDYuOTY3IDAgMTAuNjc4IDBoNy45MzhjMy43MTEgMCA1LjU5NiAwIDcuMDIzLjc0MmE2LjUzMSA2LjUzMSAwIDAgMSAyLjkxMyAyLjkxM2MuNzQyIDEuNDI3Ljc0MiAzLjMxMi43NDIgNy4wMjN2Ny45MzhjMCAzLjcxMSAwIDUuNTk2LS43NDIgNy4wMjNhNi41MzEgNi41MzEgMCAwIDEtMi45MTMgMi45MTNjLTEuNDI3Ljc0Mi0zLjMxMi43NDItNy4wMjMuNzQyaC03LjkzOGMtMy43MTEgMC01LjU5NiAwLTcuMDIzLS43NDJhNi41MzEgNi41MzEgMCAwIDEtMi45MTMtMi45MTNDMCAyNC4yMTIgMCAyMi4zODQgMCAxOC42MTZ2LTcuOTM4WiIgZmlsbD0iIzAwNTJGRiIvPjxwYXRoIGQ9Ik0xNC42ODQgMTkuNzczYy0yLjcyNyAwLTQuODY0LTIuMjk1LTQuODY0LTUuMTI2IDAtMi44MzEgMi4yMS01LjEyNyA0Ljg2NC01LjEyNyAyLjQzMiAwIDQuNDIyIDEuODM3IDQuNzkgNC4yODVoNC45MzhjLS40NDItNS4yOC00LjY0My05LjQxMS05LjcyOC05LjQxMS01LjM4IDAtOS44MDIgNC41OS05LjgwMiAxMC4yNTMgMCA1LjY2MiA0LjM0OCAxMC4yNTMgOS44MDIgMTAuMjUzIDUuMTU5IDAgOS4yODYtNC4xMzIgOS43MjgtOS40MTFoLTQuOTM4Yy0uMzY4IDIuNDQ4LTIuMzU4IDQuMjg0LTQuNzkgNC4yODRaIiBmaWxsPSIjZmZmIi8+PC9zdmc+';
          case 'coinbase-wallet-app':
          default:
            return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNDkyIDEwLjQxOWE4LjkzIDguOTMgMCAwMTguOTMtOC45M2gxMS4xNjNhOC45MyA4LjkzIDAgMDE4LjkzIDguOTN2MTEuMTYzYTguOTMgOC45MyAwIDAxLTguOTMgOC45M0gxMC40MjJhOC45MyA4LjkzIDAgMDEtOC45My04LjkzVjEwLjQxOXoiIGZpbGw9IiMxNjUyRjAiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjQxOSAwSDIxLjU4QzI3LjMzNSAwIDMyIDQuNjY1IDMyIDEwLjQxOVYyMS41OEMzMiAyNy4zMzUgMjcuMzM1IDMyIDIxLjU4MSAzMkgxMC40MkM0LjY2NSAzMiAwIDI3LjMzNSAwIDIxLjU4MVYxMC40MkMwIDQuNjY1IDQuNjY1IDAgMTAuNDE5IDB6bTAgMS40ODhhOC45MyA4LjkzIDAgMDAtOC45MyA4LjkzdjExLjE2M2E4LjkzIDguOTMgMCAwMDguOTMgOC45M0gyMS41OGE4LjkzIDguOTMgMCAwMDguOTMtOC45M1YxMC40MmE4LjkzIDguOTMgMCAwMC04LjkzLTguOTNIMTAuNDJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS45OTggMjYuMDQ5Yy01LjU0OSAwLTEwLjA0Ny00LjQ5OC0xMC4wNDctMTAuMDQ3IDAtNS41NDggNC40OTgtMTAuMDQ2IDEwLjA0Ny0xMC4wNDYgNS41NDggMCAxMC4wNDYgNC40OTggMTAuMDQ2IDEwLjA0NiAwIDUuNTQ5LTQuNDk4IDEwLjA0Ny0xMC4wNDYgMTAuMDQ3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMi43NjIgMTQuMjU0YzAtLjgyMi42NjctMS40ODkgMS40ODktMS40ODloMy40OTdjLjgyMiAwIDEuNDg4LjY2NiAxLjQ4OCAxLjQ4OXYzLjQ5N2MwIC44MjItLjY2NiAxLjQ4OC0xLjQ4OCAxLjQ4OGgtMy40OTdhMS40ODggMS40ODggMCAwMS0xLjQ4OS0xLjQ4OHYtMy40OTh6IiBmaWxsPSIjMTY1MkYwIi8+PC9zdmc+';
        }
      }
      class l {
        constructor(t) {
          (this.items = new Map()),
            (this.nextItemKey = 0),
            (this.root = null),
            (this.darkMode = t.darkMode);
        }
        attach(t) {
          (this.root = document.createElement('div')),
            (this.root.className = '-cbwsdk-snackbar-root'),
            t.appendChild(this.root),
            this.render();
        }
        presentItem(t) {
          const e = this.nextItemKey++;
          return (
            this.items.set(e, t),
            this.render(),
            () => {
              this.items.delete(e), this.render();
            }
          );
        }
        clear() {
          this.items.clear(), this.render();
        }
        render() {
          this.root &&
            (0, s.render)(
              (0, s.h)(
                'div',
                null,
                (0, s.h)(
                  e.SnackbarContainer,
                  { darkMode: this.darkMode },
                  Array.from(this.items.entries()).map(([t, n]) =>
                    (0, s.h)(
                      e.SnackbarInstance,
                      Object.assign({}, n, { key: t }),
                    ),
                  ),
                ),
              ),
              this.root,
            );
        }
      }
      e.Snackbar = l;
      const h = (t) =>
        (0, s.h)(
          'div',
          { class: (0, i.default)('-cbwsdk-snackbar-container') },
          (0, s.h)('style', null, a.default),
          (0, s.h)('div', { class: '-cbwsdk-snackbar' }, t.children),
        );
      e.SnackbarContainer = h;
      const d = ({ autoExpand: t, message: e, menuItems: n, appSrc: r }) => {
        const [a, l] = (0, o.useState)(!0),
          [h, d] = (0, o.useState)(null !== t && void 0 !== t && t);
        (0, o.useEffect)(() => {
          const t = [
            window.setTimeout(() => {
              l(!1);
            }, 1),
            window.setTimeout(() => {
              d(!0);
            }, 1e4),
          ];
          return () => {
            t.forEach(window.clearTimeout);
          };
        });
        const f = () => {
          d(!h);
        };
        return (0, s.h)(
          'div',
          {
            class: (0, i.default)(
              '-cbwsdk-snackbar-instance',
              a && '-cbwsdk-snackbar-instance-hidden',
              h && '-cbwsdk-snackbar-instance-expanded',
            ),
          },
          (0, s.h)(
            'div',
            { class: '-cbwsdk-snackbar-instance-header', onClick: f },
            (0, s.h)('img', {
              src: c(r),
              class: '-cbwsdk-snackbar-instance-header-cblogo',
            }),
            (0, s.h)(
              'div',
              { class: '-cbwsdk-snackbar-instance-header-message' },
              e,
            ),
            (0, s.h)(
              'div',
              { class: '-gear-container' },
              !h &&
                (0, s.h)(
                  'svg',
                  {
                    width: '24',
                    height: '24',
                    viewBox: '0 0 24 24',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                  },
                  (0, s.h)('circle', {
                    cx: '12',
                    cy: '12',
                    r: '12',
                    fill: '#F5F7F8',
                  }),
                ),
              (0, s.h)('img', { src: u, class: '-gear-icon', title: 'Expand' }),
            ),
          ),
          n &&
            n.length > 0 &&
            (0, s.h)(
              'div',
              { class: '-cbwsdk-snackbar-instance-menu' },
              n.map((t, e) =>
                (0, s.h)(
                  'div',
                  {
                    class: (0, i.default)(
                      '-cbwsdk-snackbar-instance-menu-item',
                      t.isRed && '-cbwsdk-snackbar-instance-menu-item-is-red',
                    ),
                    onClick: t.onClick,
                    key: e,
                  },
                  (0, s.h)(
                    'svg',
                    {
                      width: t.svgWidth,
                      height: t.svgHeight,
                      viewBox: '0 0 10 11',
                      fill: 'none',
                      xmlns: 'http://www.w3.org/2000/svg',
                    },
                    (0, s.h)('path', {
                      'fill-rule': t.defaultFillRule,
                      'clip-rule': t.defaultClipRule,
                      d: t.path,
                      fill: '#AAAAAA',
                    }),
                  ),
                  (0, s.h)(
                    'span',
                    {
                      class: (0, i.default)(
                        '-cbwsdk-snackbar-instance-menu-item-info',
                        t.isRed &&
                          '-cbwsdk-snackbar-instance-menu-item-info-is-red',
                      ),
                    },
                    t.info,
                  ),
                ),
              ),
            ),
        );
      };
      e.SnackbarInstance = d;
    },
    QXrW: function (t, e, n) {
      const r = n('U6jy'),
        i = n('2J3U')();
      function s(t) {
        const e = this;
        e.currentProvider = t;
      }
      function o(t) {
        return function () {
          const e = this;
          var n = [].slice.call(arguments),
            r = n.pop();
          e.sendAsync({ method: t, params: n }, r);
        };
      }
      function a(t, e) {
        return function () {
          const n = this;
          var r = [].slice.call(arguments),
            i = r.pop();
          r.length < t && r.push('latest'),
            n.sendAsync({ method: e, params: r }, i);
        };
      }
      function u(t) {
        return r({ id: i(), jsonrpc: '2.0', params: [] }, t);
      }
      (t.exports = s),
        (s.prototype.getBalance = a(2, 'eth_getBalance')),
        (s.prototype.getCode = a(2, 'eth_getCode')),
        (s.prototype.getTransactionCount = a(2, 'eth_getTransactionCount')),
        (s.prototype.getStorageAt = a(3, 'eth_getStorageAt')),
        (s.prototype.call = a(2, 'eth_call')),
        (s.prototype.protocolVersion = o('eth_protocolVersion')),
        (s.prototype.syncing = o('eth_syncing')),
        (s.prototype.coinbase = o('eth_coinbase')),
        (s.prototype.mining = o('eth_mining')),
        (s.prototype.hashrate = o('eth_hashrate')),
        (s.prototype.gasPrice = o('eth_gasPrice')),
        (s.prototype.accounts = o('eth_accounts')),
        (s.prototype.blockNumber = o('eth_blockNumber')),
        (s.prototype.getBlockTransactionCountByHash = o(
          'eth_getBlockTransactionCountByHash',
        )),
        (s.prototype.getBlockTransactionCountByNumber = o(
          'eth_getBlockTransactionCountByNumber',
        )),
        (s.prototype.getUncleCountByBlockHash = o(
          'eth_getUncleCountByBlockHash',
        )),
        (s.prototype.getUncleCountByBlockNumber = o(
          'eth_getUncleCountByBlockNumber',
        )),
        (s.prototype.sign = o('eth_sign')),
        (s.prototype.sendTransaction = o('eth_sendTransaction')),
        (s.prototype.sendRawTransaction = o('eth_sendRawTransaction')),
        (s.prototype.estimateGas = o('eth_estimateGas')),
        (s.prototype.getBlockByHash = o('eth_getBlockByHash')),
        (s.prototype.getBlockByNumber = o('eth_getBlockByNumber')),
        (s.prototype.getTransactionByHash = o('eth_getTransactionByHash')),
        (s.prototype.getTransactionByBlockHashAndIndex = o(
          'eth_getTransactionByBlockHashAndIndex',
        )),
        (s.prototype.getTransactionByBlockNumberAndIndex = o(
          'eth_getTransactionByBlockNumberAndIndex',
        )),
        (s.prototype.getTransactionReceipt = o('eth_getTransactionReceipt')),
        (s.prototype.getUncleByBlockHashAndIndex = o(
          'eth_getUncleByBlockHashAndIndex',
        )),
        (s.prototype.getUncleByBlockNumberAndIndex = o(
          'eth_getUncleByBlockNumberAndIndex',
        )),
        (s.prototype.getCompilers = o('eth_getCompilers')),
        (s.prototype.compileLLL = o('eth_compileLLL')),
        (s.prototype.compileSolidity = o('eth_compileSolidity')),
        (s.prototype.compileSerpent = o('eth_compileSerpent')),
        (s.prototype.newFilter = o('eth_newFilter')),
        (s.prototype.newBlockFilter = o('eth_newBlockFilter')),
        (s.prototype.newPendingTransactionFilter = o(
          'eth_newPendingTransactionFilter',
        )),
        (s.prototype.uninstallFilter = o('eth_uninstallFilter')),
        (s.prototype.getFilterChanges = o('eth_getFilterChanges')),
        (s.prototype.getFilterLogs = o('eth_getFilterLogs')),
        (s.prototype.getLogs = o('eth_getLogs')),
        (s.prototype.getWork = o('eth_getWork')),
        (s.prototype.submitWork = o('eth_submitWork')),
        (s.prototype.submitHashrate = o('eth_submitHashrate')),
        (s.prototype.sendAsync = function (t, e) {
          const n = this;
          n.currentProvider.sendAsync(u(t), function (t, n) {
            if (
              (!t &&
                n.error &&
                (t = new Error('EthQuery - RPC Error - ' + n.error.message)),
              t)
            )
              return e(t);
            e(null, n.result);
          });
        });
    },
    Qann: function (t, e, n) {
      'use strict';
      (function (t) {
        var r =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.isInIFrame =
            e.createQrUrl =
            e.getFavicon =
            e.range =
            e.isBigNumber =
            e.ensureParsedJSONObject =
            e.ensureBN =
            e.ensureRegExpString =
            e.ensureIntNumber =
            e.ensureBuffer =
            e.ensureAddressString =
            e.ensureEvenLengthHexString =
            e.ensureHexString =
            e.isHexString =
            e.prepend0x =
            e.strip0x =
            e.has0xPrefix =
            e.hexStringFromIntNumber =
            e.intNumberFromHexString =
            e.bigIntStringFromBN =
            e.hexStringFromBuffer =
            e.hexStringToUint8Array =
            e.uint8ArrayToHex =
            e.randomBytesHex =
              void 0);
        const i = r(n('pUf3')),
          s = n('Qyje'),
          o = n('Iwol'),
          a = /^[0-9]*$/,
          u = /^[a-f0-9]*$/;
        function c(t) {
          return l(crypto.getRandomValues(new Uint8Array(t)));
        }
        function l(t) {
          return [...t].map((t) => t.toString(16).padStart(2, '0')).join('');
        }
        function h(t) {
          return new Uint8Array(t.match(/.{1,2}/g).map((t) => parseInt(t, 16)));
        }
        function d(t, e = !1) {
          const n = t.toString('hex');
          return (0, o.HexString)(e ? '0x' + n : n);
        }
        function f(t) {
          return (0, o.BigIntString)(t.toString(10));
        }
        function p(t) {
          return (0, o.IntNumber)(new i.default(w(t, !1), 16).toNumber());
        }
        function b(t) {
          return (0, o.HexString)('0x' + new i.default(t).toString(16));
        }
        function g(t) {
          return t.startsWith('0x') || t.startsWith('0X');
        }
        function m(t) {
          return g(t) ? t.slice(2) : t;
        }
        function y(t) {
          return g(t) ? '0x' + t.slice(2) : '0x' + t;
        }
        function v(t) {
          if ('string' !== typeof t) return !1;
          const e = m(t).toLowerCase();
          return u.test(e);
        }
        function _(t, e = !1) {
          if ('string' === typeof t) {
            const n = m(t).toLowerCase();
            if (u.test(n)) return (0, o.HexString)(e ? '0x' + n : n);
          }
          throw new Error(`"${String(t)}" is not a hexadecimal string`);
        }
        function w(t, e = !1) {
          let n = _(t, !1);
          return (
            n.length % 2 === 1 && (n = (0, o.HexString)('0' + n)),
            e ? (0, o.HexString)('0x' + n) : n
          );
        }
        function S(t) {
          if ('string' === typeof t) {
            const e = m(t).toLowerCase();
            if (v(e) && 40 === e.length) return (0, o.AddressString)(y(e));
          }
          throw new Error(`Invalid Ethereum address: ${String(t)}`);
        }
        function M(e) {
          if (t.isBuffer(e)) return e;
          if ('string' === typeof e) {
            if (v(e)) {
              const n = w(e, !1);
              return t.from(n, 'hex');
            }
            return t.from(e, 'utf8');
          }
          throw new Error(`Not binary data: ${String(e)}`);
        }
        function E(t) {
          if ('number' === typeof t && Number.isInteger(t))
            return (0, o.IntNumber)(t);
          if ('string' === typeof t) {
            if (a.test(t)) return (0, o.IntNumber)(Number(t));
            if (v(t))
              return (0, o.IntNumber)(new i.default(w(t, !1), 16).toNumber());
          }
          throw new Error(`Not an integer: ${String(t)}`);
        }
        function x(t) {
          if (t instanceof RegExp) return (0, o.RegExpString)(t.toString());
          throw new Error(`Not a RegExp: ${String(t)}`);
        }
        function k(t) {
          if (null !== t && (i.default.isBN(t) || I(t)))
            return new i.default(t.toString(10), 10);
          if ('number' === typeof t) return new i.default(E(t));
          if ('string' === typeof t) {
            if (a.test(t)) return new i.default(t, 10);
            if (v(t)) return new i.default(w(t, !1), 16);
          }
          throw new Error(`Not an integer: ${String(t)}`);
        }
        function C(t) {
          if ('string' === typeof t) return JSON.parse(t);
          if ('object' === typeof t) return t;
          throw new Error(`Not a JSON string or an object: ${String(t)}`);
        }
        function I(t) {
          if (null == t || 'function' !== typeof t.constructor) return !1;
          const { constructor: e } = t;
          return 'function' === typeof e.config && 'number' === typeof e.EUCLID;
        }
        function O(t, e) {
          return Array.from({ length: e - t }, (e, n) => t + n);
        }
        function j() {
          const t =
              document.querySelector('link[sizes="192x192"]') ||
              document.querySelector('link[sizes="180x180"]') ||
              document.querySelector('link[rel="icon"]') ||
              document.querySelector('link[rel="shortcut icon"]'),
            { protocol: e, host: n } = document.location,
            r = t ? t.getAttribute('href') : null;
          return !r || r.startsWith('javascript:')
            ? null
            : r.startsWith('http://') ||
              r.startsWith('https://') ||
              r.startsWith('data:')
            ? r
            : r.startsWith('//')
            ? e + r
            : `${e}//${n}${r}`;
        }
        function A(t, e, n, r, i, o) {
          const a = r ? 'parent-id' : 'id',
            u = (0, s.stringify)({
              [a]: t,
              secret: e,
              server: n,
              v: i,
              chainId: o,
            }),
            c = `${n}/#/link?${u}`;
          return c;
        }
        function R() {
          try {
            return null !== window.frameElement;
          } catch (t) {
            return !1;
          }
        }
        (e.randomBytesHex = c),
          (e.uint8ArrayToHex = l),
          (e.hexStringToUint8Array = h),
          (e.hexStringFromBuffer = d),
          (e.bigIntStringFromBN = f),
          (e.intNumberFromHexString = p),
          (e.hexStringFromIntNumber = b),
          (e.has0xPrefix = g),
          (e.strip0x = m),
          (e.prepend0x = y),
          (e.isHexString = v),
          (e.ensureHexString = _),
          (e.ensureEvenLengthHexString = w),
          (e.ensureAddressString = S),
          (e.ensureBuffer = M),
          (e.ensureIntNumber = E),
          (e.ensureRegExpString = x),
          (e.ensureBN = k),
          (e.ensureParsedJSONObject = C),
          (e.isBigNumber = I),
          (e.range = O),
          (e.getFavicon = j),
          (e.createQrUrl = A),
          (e.isInIFrame = R);
      }).call(this, n('HDXh').Buffer);
    },
    ROmd: function (t, e) {
      function n(t) {
        (this.mode = i.MODE_8BIT_BYTE), (this.data = t), (this.parsedData = []);
        for (var e = 0, n = this.data.length; e < n; e++) {
          var r = [],
            s = this.data.charCodeAt(e);
          s > 65536
            ? ((r[0] = 240 | ((1835008 & s) >>> 18)),
              (r[1] = 128 | ((258048 & s) >>> 12)),
              (r[2] = 128 | ((4032 & s) >>> 6)),
              (r[3] = 128 | (63 & s)))
            : s > 2048
            ? ((r[0] = 224 | ((61440 & s) >>> 12)),
              (r[1] = 128 | ((4032 & s) >>> 6)),
              (r[2] = 128 | (63 & s)))
            : s > 128
            ? ((r[0] = 192 | ((1984 & s) >>> 6)), (r[1] = 128 | (63 & s)))
            : (r[0] = s),
            this.parsedData.push(r);
        }
        (this.parsedData = Array.prototype.concat.apply([], this.parsedData)),
          this.parsedData.length != this.data.length &&
            (this.parsedData.unshift(191),
            this.parsedData.unshift(187),
            this.parsedData.unshift(239));
      }
      function r(t, e) {
        (this.typeNumber = t),
          (this.errorCorrectLevel = e),
          (this.modules = null),
          (this.moduleCount = 0),
          (this.dataCache = null),
          (this.dataList = []);
      }
      (n.prototype = {
        getLength: function (t) {
          return this.parsedData.length;
        },
        write: function (t) {
          for (var e = 0, n = this.parsedData.length; e < n; e++)
            t.put(this.parsedData[e], 8);
        },
      }),
        (r.prototype = {
          addData: function (t) {
            var e = new n(t);
            this.dataList.push(e), (this.dataCache = null);
          },
          isDark: function (t, e) {
            if (
              t < 0 ||
              this.moduleCount <= t ||
              e < 0 ||
              this.moduleCount <= e
            )
              throw new Error(t + ',' + e);
            return this.modules[t][e];
          },
          getModuleCount: function () {
            return this.moduleCount;
          },
          make: function () {
            this.makeImpl(!1, this.getBestMaskPattern());
          },
          makeImpl: function (t, e) {
            (this.moduleCount = 4 * this.typeNumber + 17),
              (this.modules = new Array(this.moduleCount));
            for (var n = 0; n < this.moduleCount; n++) {
              this.modules[n] = new Array(this.moduleCount);
              for (var i = 0; i < this.moduleCount; i++)
                this.modules[n][i] = null;
            }
            this.setupPositionProbePattern(0, 0),
              this.setupPositionProbePattern(this.moduleCount - 7, 0),
              this.setupPositionProbePattern(0, this.moduleCount - 7),
              this.setupPositionAdjustPattern(),
              this.setupTimingPattern(),
              this.setupTypeInfo(t, e),
              this.typeNumber >= 7 && this.setupTypeNumber(t),
              null == this.dataCache &&
                (this.dataCache = r.createData(
                  this.typeNumber,
                  this.errorCorrectLevel,
                  this.dataList,
                )),
              this.mapData(this.dataCache, e);
          },
          setupPositionProbePattern: function (t, e) {
            for (var n = -1; n <= 7; n++)
              if (!(t + n <= -1 || this.moduleCount <= t + n))
                for (var r = -1; r <= 7; r++)
                  e + r <= -1 ||
                    this.moduleCount <= e + r ||
                    (this.modules[t + n][e + r] =
                      (0 <= n && n <= 6 && (0 == r || 6 == r)) ||
                      (0 <= r && r <= 6 && (0 == n || 6 == n)) ||
                      (2 <= n && n <= 4 && 2 <= r && r <= 4));
          },
          getBestMaskPattern: function () {
            for (var t = 0, e = 0, n = 0; n < 8; n++) {
              this.makeImpl(!0, n);
              var r = a.getLostPoint(this);
              (0 == n || t > r) && ((t = r), (e = n));
            }
            return e;
          },
          createMovieClip: function (t, e, n) {
            var r = t.createEmptyMovieClip(e, n),
              i = 1;
            this.make();
            for (var s = 0; s < this.modules.length; s++)
              for (var o = s * i, a = 0; a < this.modules[s].length; a++) {
                var u = a * i,
                  c = this.modules[s][a];
                c &&
                  (r.beginFill(0, 100),
                  r.moveTo(u, o),
                  r.lineTo(u + i, o),
                  r.lineTo(u + i, o + i),
                  r.lineTo(u, o + i),
                  r.endFill());
              }
            return r;
          },
          setupTimingPattern: function () {
            for (var t = 8; t < this.moduleCount - 8; t++)
              null == this.modules[t][6] && (this.modules[t][6] = t % 2 == 0);
            for (var e = 8; e < this.moduleCount - 8; e++)
              null == this.modules[6][e] && (this.modules[6][e] = e % 2 == 0);
          },
          setupPositionAdjustPattern: function () {
            for (
              var t = a.getPatternPosition(this.typeNumber), e = 0;
              e < t.length;
              e++
            )
              for (var n = 0; n < t.length; n++) {
                var r = t[e],
                  i = t[n];
                if (null == this.modules[r][i])
                  for (var s = -2; s <= 2; s++)
                    for (var o = -2; o <= 2; o++)
                      this.modules[r + s][i + o] =
                        -2 == s ||
                        2 == s ||
                        -2 == o ||
                        2 == o ||
                        (0 == s && 0 == o);
              }
          },
          setupTypeNumber: function (t) {
            for (
              var e = a.getBCHTypeNumber(this.typeNumber), n = 0;
              n < 18;
              n++
            ) {
              var r = !t && 1 == ((e >> n) & 1);
              this.modules[Math.floor(n / 3)][
                (n % 3) + this.moduleCount - 8 - 3
              ] = r;
            }
            for (n = 0; n < 18; n++) {
              r = !t && 1 == ((e >> n) & 1);
              this.modules[(n % 3) + this.moduleCount - 8 - 3][
                Math.floor(n / 3)
              ] = r;
            }
          },
          setupTypeInfo: function (t, e) {
            for (
              var n = (this.errorCorrectLevel << 3) | e,
                r = a.getBCHTypeInfo(n),
                i = 0;
              i < 15;
              i++
            ) {
              var s = !t && 1 == ((r >> i) & 1);
              i < 6
                ? (this.modules[i][8] = s)
                : i < 8
                ? (this.modules[i + 1][8] = s)
                : (this.modules[this.moduleCount - 15 + i][8] = s);
            }
            for (i = 0; i < 15; i++) {
              s = !t && 1 == ((r >> i) & 1);
              i < 8
                ? (this.modules[8][this.moduleCount - i - 1] = s)
                : i < 9
                ? (this.modules[8][15 - i - 1 + 1] = s)
                : (this.modules[8][15 - i - 1] = s);
            }
            this.modules[this.moduleCount - 8][8] = !t;
          },
          mapData: function (t, e) {
            for (
              var n = -1,
                r = this.moduleCount - 1,
                i = 7,
                s = 0,
                o = this.moduleCount - 1;
              o > 0;
              o -= 2
            ) {
              6 == o && o--;
              while (1) {
                for (var u = 0; u < 2; u++)
                  if (null == this.modules[r][o - u]) {
                    var c = !1;
                    s < t.length && (c = 1 == ((t[s] >>> i) & 1));
                    var l = a.getMask(e, r, o - u);
                    l && (c = !c),
                      (this.modules[r][o - u] = c),
                      i--,
                      -1 == i && (s++, (i = 7));
                  }
                if (((r += n), r < 0 || this.moduleCount <= r)) {
                  (r -= n), (n = -n);
                  break;
                }
              }
            }
          },
        }),
        (r.PAD0 = 236),
        (r.PAD1 = 17),
        (r.createData = function (t, e, n) {
          for (
            var i = h.getRSBlocks(t, e), s = new d(), o = 0;
            o < n.length;
            o++
          ) {
            var u = n[o];
            s.put(u.mode, 4),
              s.put(u.getLength(), a.getLengthInBits(u.mode, t)),
              u.write(s);
          }
          var c = 0;
          for (o = 0; o < i.length; o++) c += i[o].dataCount;
          if (s.getLengthInBits() > 8 * c)
            throw new Error(
              'code length overflow. (' +
                s.getLengthInBits() +
                '>' +
                8 * c +
                ')',
            );
          s.getLengthInBits() + 4 <= 8 * c && s.put(0, 4);
          while (s.getLengthInBits() % 8 != 0) s.putBit(!1);
          while (1) {
            if (s.getLengthInBits() >= 8 * c) break;
            if ((s.put(r.PAD0, 8), s.getLengthInBits() >= 8 * c)) break;
            s.put(r.PAD1, 8);
          }
          return r.createBytes(s, i);
        }),
        (r.createBytes = function (t, e) {
          for (
            var n = 0,
              r = 0,
              i = 0,
              s = new Array(e.length),
              o = new Array(e.length),
              u = 0;
            u < e.length;
            u++
          ) {
            var c = e[u].dataCount,
              h = e[u].totalCount - c;
            (r = Math.max(r, c)), (i = Math.max(i, h)), (s[u] = new Array(c));
            for (var d = 0; d < s[u].length; d++)
              s[u][d] = 255 & t.buffer[d + n];
            n += c;
            var f = a.getErrorCorrectPolynomial(h),
              p = new l(s[u], f.getLength() - 1),
              b = p.mod(f);
            o[u] = new Array(f.getLength() - 1);
            for (d = 0; d < o[u].length; d++) {
              var g = d + b.getLength() - o[u].length;
              o[u][d] = g >= 0 ? b.get(g) : 0;
            }
          }
          var m = 0;
          for (d = 0; d < e.length; d++) m += e[d].totalCount;
          var y = new Array(m),
            v = 0;
          for (d = 0; d < r; d++)
            for (u = 0; u < e.length; u++)
              d < s[u].length && (y[v++] = s[u][d]);
          for (d = 0; d < i; d++)
            for (u = 0; u < e.length; u++)
              d < o[u].length && (y[v++] = o[u][d]);
          return y;
        });
      for (
        var i = {
            MODE_NUMBER: 1,
            MODE_ALPHA_NUM: 2,
            MODE_8BIT_BYTE: 4,
            MODE_KANJI: 8,
          },
          s = { L: 1, M: 0, Q: 3, H: 2 },
          o = {
            PATTERN000: 0,
            PATTERN001: 1,
            PATTERN010: 2,
            PATTERN011: 3,
            PATTERN100: 4,
            PATTERN101: 5,
            PATTERN110: 6,
            PATTERN111: 7,
          },
          a = {
            PATTERN_POSITION_TABLE: [
              [],
              [6, 18],
              [6, 22],
              [6, 26],
              [6, 30],
              [6, 34],
              [6, 22, 38],
              [6, 24, 42],
              [6, 26, 46],
              [6, 28, 50],
              [6, 30, 54],
              [6, 32, 58],
              [6, 34, 62],
              [6, 26, 46, 66],
              [6, 26, 48, 70],
              [6, 26, 50, 74],
              [6, 30, 54, 78],
              [6, 30, 56, 82],
              [6, 30, 58, 86],
              [6, 34, 62, 90],
              [6, 28, 50, 72, 94],
              [6, 26, 50, 74, 98],
              [6, 30, 54, 78, 102],
              [6, 28, 54, 80, 106],
              [6, 32, 58, 84, 110],
              [6, 30, 58, 86, 114],
              [6, 34, 62, 90, 118],
              [6, 26, 50, 74, 98, 122],
              [6, 30, 54, 78, 102, 126],
              [6, 26, 52, 78, 104, 130],
              [6, 30, 56, 82, 108, 134],
              [6, 34, 60, 86, 112, 138],
              [6, 30, 58, 86, 114, 142],
              [6, 34, 62, 90, 118, 146],
              [6, 30, 54, 78, 102, 126, 150],
              [6, 24, 50, 76, 102, 128, 154],
              [6, 28, 54, 80, 106, 132, 158],
              [6, 32, 58, 84, 110, 136, 162],
              [6, 26, 54, 82, 110, 138, 166],
              [6, 30, 58, 86, 114, 142, 170],
            ],
            G15: 1335,
            G18: 7973,
            G15_MASK: 21522,
            getBCHTypeInfo: function (t) {
              var e = t << 10;
              while (a.getBCHDigit(e) - a.getBCHDigit(a.G15) >= 0)
                e ^= a.G15 << (a.getBCHDigit(e) - a.getBCHDigit(a.G15));
              return ((t << 10) | e) ^ a.G15_MASK;
            },
            getBCHTypeNumber: function (t) {
              var e = t << 12;
              while (a.getBCHDigit(e) - a.getBCHDigit(a.G18) >= 0)
                e ^= a.G18 << (a.getBCHDigit(e) - a.getBCHDigit(a.G18));
              return (t << 12) | e;
            },
            getBCHDigit: function (t) {
              var e = 0;
              while (0 != t) e++, (t >>>= 1);
              return e;
            },
            getPatternPosition: function (t) {
              return a.PATTERN_POSITION_TABLE[t - 1];
            },
            getMask: function (t, e, n) {
              switch (t) {
                case o.PATTERN000:
                  return (e + n) % 2 == 0;
                case o.PATTERN001:
                  return e % 2 == 0;
                case o.PATTERN010:
                  return n % 3 == 0;
                case o.PATTERN011:
                  return (e + n) % 3 == 0;
                case o.PATTERN100:
                  return (Math.floor(e / 2) + Math.floor(n / 3)) % 2 == 0;
                case o.PATTERN101:
                  return ((e * n) % 2) + ((e * n) % 3) == 0;
                case o.PATTERN110:
                  return (((e * n) % 2) + ((e * n) % 3)) % 2 == 0;
                case o.PATTERN111:
                  return (((e * n) % 3) + ((e + n) % 2)) % 2 == 0;
                default:
                  throw new Error('bad maskPattern:' + t);
              }
            },
            getErrorCorrectPolynomial: function (t) {
              for (var e = new l([1], 0), n = 0; n < t; n++)
                e = e.multiply(new l([1, u.gexp(n)], 0));
              return e;
            },
            getLengthInBits: function (t, e) {
              if (1 <= e && e < 10)
                switch (t) {
                  case i.MODE_NUMBER:
                    return 10;
                  case i.MODE_ALPHA_NUM:
                    return 9;
                  case i.MODE_8BIT_BYTE:
                    return 8;
                  case i.MODE_KANJI:
                    return 8;
                  default:
                    throw new Error('mode:' + t);
                }
              else if (e < 27)
                switch (t) {
                  case i.MODE_NUMBER:
                    return 12;
                  case i.MODE_ALPHA_NUM:
                    return 11;
                  case i.MODE_8BIT_BYTE:
                    return 16;
                  case i.MODE_KANJI:
                    return 10;
                  default:
                    throw new Error('mode:' + t);
                }
              else {
                if (!(e < 41)) throw new Error('type:' + e);
                switch (t) {
                  case i.MODE_NUMBER:
                    return 14;
                  case i.MODE_ALPHA_NUM:
                    return 13;
                  case i.MODE_8BIT_BYTE:
                    return 16;
                  case i.MODE_KANJI:
                    return 12;
                  default:
                    throw new Error('mode:' + t);
                }
              }
            },
            getLostPoint: function (t) {
              for (var e = t.getModuleCount(), n = 0, r = 0; r < e; r++)
                for (var i = 0; i < e; i++) {
                  for (var s = 0, o = t.isDark(r, i), a = -1; a <= 1; a++)
                    if (!(r + a < 0 || e <= r + a))
                      for (var u = -1; u <= 1; u++)
                        i + u < 0 ||
                          e <= i + u ||
                          (0 == a && 0 == u) ||
                          (o == t.isDark(r + a, i + u) && s++);
                  s > 5 && (n += 3 + s - 5);
                }
              for (r = 0; r < e - 1; r++)
                for (i = 0; i < e - 1; i++) {
                  var c = 0;
                  t.isDark(r, i) && c++,
                    t.isDark(r + 1, i) && c++,
                    t.isDark(r, i + 1) && c++,
                    t.isDark(r + 1, i + 1) && c++,
                    (0 != c && 4 != c) || (n += 3);
                }
              for (r = 0; r < e; r++)
                for (i = 0; i < e - 6; i++)
                  t.isDark(r, i) &&
                    !t.isDark(r, i + 1) &&
                    t.isDark(r, i + 2) &&
                    t.isDark(r, i + 3) &&
                    t.isDark(r, i + 4) &&
                    !t.isDark(r, i + 5) &&
                    t.isDark(r, i + 6) &&
                    (n += 40);
              for (i = 0; i < e; i++)
                for (r = 0; r < e - 6; r++)
                  t.isDark(r, i) &&
                    !t.isDark(r + 1, i) &&
                    t.isDark(r + 2, i) &&
                    t.isDark(r + 3, i) &&
                    t.isDark(r + 4, i) &&
                    !t.isDark(r + 5, i) &&
                    t.isDark(r + 6, i) &&
                    (n += 40);
              var l = 0;
              for (i = 0; i < e; i++)
                for (r = 0; r < e; r++) t.isDark(r, i) && l++;
              var h = Math.abs((100 * l) / e / e - 50) / 5;
              return (n += 10 * h), n;
            },
          },
          u = {
            glog: function (t) {
              if (t < 1) throw new Error('glog(' + t + ')');
              return u.LOG_TABLE[t];
            },
            gexp: function (t) {
              while (t < 0) t += 255;
              while (t >= 256) t -= 255;
              return u.EXP_TABLE[t];
            },
            EXP_TABLE: new Array(256),
            LOG_TABLE: new Array(256),
          },
          c = 0;
        c < 8;
        c++
      )
        u.EXP_TABLE[c] = 1 << c;
      for (c = 8; c < 256; c++)
        u.EXP_TABLE[c] =
          u.EXP_TABLE[c - 4] ^
          u.EXP_TABLE[c - 5] ^
          u.EXP_TABLE[c - 6] ^
          u.EXP_TABLE[c - 8];
      for (c = 0; c < 255; c++) u.LOG_TABLE[u.EXP_TABLE[c]] = c;
      function l(t, e) {
        if (void 0 == t.length) throw new Error(t.length + '/' + e);
        var n = 0;
        while (n < t.length && 0 == t[n]) n++;
        this.num = new Array(t.length - n + e);
        for (var r = 0; r < t.length - n; r++) this.num[r] = t[r + n];
      }
      function h(t, e) {
        (this.totalCount = t), (this.dataCount = e);
      }
      function d() {
        (this.buffer = []), (this.length = 0);
      }
      (l.prototype = {
        get: function (t) {
          return this.num[t];
        },
        getLength: function () {
          return this.num.length;
        },
        multiply: function (t) {
          for (
            var e = new Array(this.getLength() + t.getLength() - 1), n = 0;
            n < this.getLength();
            n++
          )
            for (var r = 0; r < t.getLength(); r++)
              e[n + r] ^= u.gexp(u.glog(this.get(n)) + u.glog(t.get(r)));
          return new l(e, 0);
        },
        mod: function (t) {
          if (this.getLength() - t.getLength() < 0) return this;
          for (
            var e = u.glog(this.get(0)) - u.glog(t.get(0)),
              n = new Array(this.getLength()),
              r = 0;
            r < this.getLength();
            r++
          )
            n[r] = this.get(r);
          for (r = 0; r < t.getLength(); r++)
            n[r] ^= u.gexp(u.glog(t.get(r)) + e);
          return new l(n, 0).mod(t);
        },
      }),
        (h.RS_BLOCK_TABLE = [
          [1, 26, 19],
          [1, 26, 16],
          [1, 26, 13],
          [1, 26, 9],
          [1, 44, 34],
          [1, 44, 28],
          [1, 44, 22],
          [1, 44, 16],
          [1, 70, 55],
          [1, 70, 44],
          [2, 35, 17],
          [2, 35, 13],
          [1, 100, 80],
          [2, 50, 32],
          [2, 50, 24],
          [4, 25, 9],
          [1, 134, 108],
          [2, 67, 43],
          [2, 33, 15, 2, 34, 16],
          [2, 33, 11, 2, 34, 12],
          [2, 86, 68],
          [4, 43, 27],
          [4, 43, 19],
          [4, 43, 15],
          [2, 98, 78],
          [4, 49, 31],
          [2, 32, 14, 4, 33, 15],
          [4, 39, 13, 1, 40, 14],
          [2, 121, 97],
          [2, 60, 38, 2, 61, 39],
          [4, 40, 18, 2, 41, 19],
          [4, 40, 14, 2, 41, 15],
          [2, 146, 116],
          [3, 58, 36, 2, 59, 37],
          [4, 36, 16, 4, 37, 17],
          [4, 36, 12, 4, 37, 13],
          [2, 86, 68, 2, 87, 69],
          [4, 69, 43, 1, 70, 44],
          [6, 43, 19, 2, 44, 20],
          [6, 43, 15, 2, 44, 16],
          [4, 101, 81],
          [1, 80, 50, 4, 81, 51],
          [4, 50, 22, 4, 51, 23],
          [3, 36, 12, 8, 37, 13],
          [2, 116, 92, 2, 117, 93],
          [6, 58, 36, 2, 59, 37],
          [4, 46, 20, 6, 47, 21],
          [7, 42, 14, 4, 43, 15],
          [4, 133, 107],
          [8, 59, 37, 1, 60, 38],
          [8, 44, 20, 4, 45, 21],
          [12, 33, 11, 4, 34, 12],
          [3, 145, 115, 1, 146, 116],
          [4, 64, 40, 5, 65, 41],
          [11, 36, 16, 5, 37, 17],
          [11, 36, 12, 5, 37, 13],
          [5, 109, 87, 1, 110, 88],
          [5, 65, 41, 5, 66, 42],
          [5, 54, 24, 7, 55, 25],
          [11, 36, 12],
          [5, 122, 98, 1, 123, 99],
          [7, 73, 45, 3, 74, 46],
          [15, 43, 19, 2, 44, 20],
          [3, 45, 15, 13, 46, 16],
          [1, 135, 107, 5, 136, 108],
          [10, 74, 46, 1, 75, 47],
          [1, 50, 22, 15, 51, 23],
          [2, 42, 14, 17, 43, 15],
          [5, 150, 120, 1, 151, 121],
          [9, 69, 43, 4, 70, 44],
          [17, 50, 22, 1, 51, 23],
          [2, 42, 14, 19, 43, 15],
          [3, 141, 113, 4, 142, 114],
          [3, 70, 44, 11, 71, 45],
          [17, 47, 21, 4, 48, 22],
          [9, 39, 13, 16, 40, 14],
          [3, 135, 107, 5, 136, 108],
          [3, 67, 41, 13, 68, 42],
          [15, 54, 24, 5, 55, 25],
          [15, 43, 15, 10, 44, 16],
          [4, 144, 116, 4, 145, 117],
          [17, 68, 42],
          [17, 50, 22, 6, 51, 23],
          [19, 46, 16, 6, 47, 17],
          [2, 139, 111, 7, 140, 112],
          [17, 74, 46],
          [7, 54, 24, 16, 55, 25],
          [34, 37, 13],
          [4, 151, 121, 5, 152, 122],
          [4, 75, 47, 14, 76, 48],
          [11, 54, 24, 14, 55, 25],
          [16, 45, 15, 14, 46, 16],
          [6, 147, 117, 4, 148, 118],
          [6, 73, 45, 14, 74, 46],
          [11, 54, 24, 16, 55, 25],
          [30, 46, 16, 2, 47, 17],
          [8, 132, 106, 4, 133, 107],
          [8, 75, 47, 13, 76, 48],
          [7, 54, 24, 22, 55, 25],
          [22, 45, 15, 13, 46, 16],
          [10, 142, 114, 2, 143, 115],
          [19, 74, 46, 4, 75, 47],
          [28, 50, 22, 6, 51, 23],
          [33, 46, 16, 4, 47, 17],
          [8, 152, 122, 4, 153, 123],
          [22, 73, 45, 3, 74, 46],
          [8, 53, 23, 26, 54, 24],
          [12, 45, 15, 28, 46, 16],
          [3, 147, 117, 10, 148, 118],
          [3, 73, 45, 23, 74, 46],
          [4, 54, 24, 31, 55, 25],
          [11, 45, 15, 31, 46, 16],
          [7, 146, 116, 7, 147, 117],
          [21, 73, 45, 7, 74, 46],
          [1, 53, 23, 37, 54, 24],
          [19, 45, 15, 26, 46, 16],
          [5, 145, 115, 10, 146, 116],
          [19, 75, 47, 10, 76, 48],
          [15, 54, 24, 25, 55, 25],
          [23, 45, 15, 25, 46, 16],
          [13, 145, 115, 3, 146, 116],
          [2, 74, 46, 29, 75, 47],
          [42, 54, 24, 1, 55, 25],
          [23, 45, 15, 28, 46, 16],
          [17, 145, 115],
          [10, 74, 46, 23, 75, 47],
          [10, 54, 24, 35, 55, 25],
          [19, 45, 15, 35, 46, 16],
          [17, 145, 115, 1, 146, 116],
          [14, 74, 46, 21, 75, 47],
          [29, 54, 24, 19, 55, 25],
          [11, 45, 15, 46, 46, 16],
          [13, 145, 115, 6, 146, 116],
          [14, 74, 46, 23, 75, 47],
          [44, 54, 24, 7, 55, 25],
          [59, 46, 16, 1, 47, 17],
          [12, 151, 121, 7, 152, 122],
          [12, 75, 47, 26, 76, 48],
          [39, 54, 24, 14, 55, 25],
          [22, 45, 15, 41, 46, 16],
          [6, 151, 121, 14, 152, 122],
          [6, 75, 47, 34, 76, 48],
          [46, 54, 24, 10, 55, 25],
          [2, 45, 15, 64, 46, 16],
          [17, 152, 122, 4, 153, 123],
          [29, 74, 46, 14, 75, 47],
          [49, 54, 24, 10, 55, 25],
          [24, 45, 15, 46, 46, 16],
          [4, 152, 122, 18, 153, 123],
          [13, 74, 46, 32, 75, 47],
          [48, 54, 24, 14, 55, 25],
          [42, 45, 15, 32, 46, 16],
          [20, 147, 117, 4, 148, 118],
          [40, 75, 47, 7, 76, 48],
          [43, 54, 24, 22, 55, 25],
          [10, 45, 15, 67, 46, 16],
          [19, 148, 118, 6, 149, 119],
          [18, 75, 47, 31, 76, 48],
          [34, 54, 24, 34, 55, 25],
          [20, 45, 15, 61, 46, 16],
        ]),
        (h.getRSBlocks = function (t, e) {
          var n = h.getRsBlockTable(t, e);
          if (void 0 == n)
            throw new Error(
              'bad rs block @ typeNumber:' + t + '/errorCorrectLevel:' + e,
            );
          for (var r = n.length / 3, i = [], s = 0; s < r; s++)
            for (
              var o = n[3 * s + 0], a = n[3 * s + 1], u = n[3 * s + 2], c = 0;
              c < o;
              c++
            )
              i.push(new h(a, u));
          return i;
        }),
        (h.getRsBlockTable = function (t, e) {
          switch (e) {
            case s.L:
              return h.RS_BLOCK_TABLE[4 * (t - 1) + 0];
            case s.M:
              return h.RS_BLOCK_TABLE[4 * (t - 1) + 1];
            case s.Q:
              return h.RS_BLOCK_TABLE[4 * (t - 1) + 2];
            case s.H:
              return h.RS_BLOCK_TABLE[4 * (t - 1) + 3];
            default:
              return;
          }
        }),
        (d.prototype = {
          get: function (t) {
            var e = Math.floor(t / 8);
            return 1 == ((this.buffer[e] >>> (7 - (t % 8))) & 1);
          },
          put: function (t, e) {
            for (var n = 0; n < e; n++)
              this.putBit(1 == ((t >>> (e - n - 1)) & 1));
          },
          getLengthInBits: function () {
            return this.length;
          },
          putBit: function (t) {
            var e = Math.floor(this.length / 8);
            this.buffer.length <= e && this.buffer.push(0),
              t && (this.buffer[e] |= 128 >>> this.length % 8),
              this.length++;
          },
        });
      var f = [
        [17, 14, 11, 7],
        [32, 26, 20, 14],
        [53, 42, 32, 24],
        [78, 62, 46, 34],
        [106, 84, 60, 44],
        [134, 106, 74, 58],
        [154, 122, 86, 64],
        [192, 152, 108, 84],
        [230, 180, 130, 98],
        [271, 213, 151, 119],
        [321, 251, 177, 137],
        [367, 287, 203, 155],
        [425, 331, 241, 177],
        [458, 362, 258, 194],
        [520, 412, 292, 220],
        [586, 450, 322, 250],
        [644, 504, 364, 280],
        [718, 560, 394, 310],
        [792, 624, 442, 338],
        [858, 666, 482, 382],
        [929, 711, 509, 403],
        [1003, 779, 565, 439],
        [1091, 857, 611, 461],
        [1171, 911, 661, 511],
        [1273, 997, 715, 535],
        [1367, 1059, 751, 593],
        [1465, 1125, 805, 625],
        [1528, 1190, 868, 658],
        [1628, 1264, 908, 698],
        [1732, 1370, 982, 742],
        [1840, 1452, 1030, 790],
        [1952, 1538, 1112, 842],
        [2068, 1628, 1168, 898],
        [2188, 1722, 1228, 958],
        [2303, 1809, 1283, 983],
        [2431, 1911, 1351, 1051],
        [2563, 1989, 1423, 1093],
        [2699, 2099, 1499, 1139],
        [2809, 2213, 1579, 1219],
        [2953, 2331, 1663, 1273],
      ];
      function p(t) {
        if (
          ((this.options = {
            padding: 4,
            width: 256,
            height: 256,
            typeNumber: 4,
            color: '#000000',
            background: '#ffffff',
            ecl: 'M',
            image: { svg: '', width: 0, height: 0 },
          }),
          'string' === typeof t && (t = { content: t }),
          t)
        )
          for (var e in t) this.options[e] = t[e];
        if ('string' !== typeof this.options.content)
          throw new Error("Expected 'content' as string!");
        if (0 === this.options.content.length)
          throw new Error("Expected 'content' to be non-empty!");
        if (!(this.options.padding >= 0))
          throw new Error("Expected 'padding' value to be non-negative!");
        if (!(this.options.width > 0) || !(this.options.height > 0))
          throw new Error(
            "Expected 'width' or 'height' value to be higher than zero!",
          );
        function n(t) {
          switch (t) {
            case 'L':
              return s.L;
            case 'M':
              return s.M;
            case 'Q':
              return s.Q;
            case 'H':
              return s.H;
            default:
              throw new Error('Unknwon error correction level: ' + t);
          }
        }
        function i(t, e) {
          for (var n = o(t), r = 1, i = 0, s = 0, a = f.length; s <= a; s++) {
            var u = f[s];
            if (!u)
              throw new Error(
                'Content too long: expected ' + i + ' but got ' + n,
              );
            switch (e) {
              case 'L':
                i = u[0];
                break;
              case 'M':
                i = u[1];
                break;
              case 'Q':
                i = u[2];
                break;
              case 'H':
                i = u[3];
                break;
              default:
                throw new Error('Unknwon error correction level: ' + e);
            }
            if (n <= i) break;
            r++;
          }
          if (r > f.length) throw new Error('Content too long');
          return r;
        }
        function o(t) {
          var e = encodeURI(t)
            .toString()
            .replace(/\%[0-9a-fA-F]{2}/g, 'a');
          return e.length + (e.length != t ? 3 : 0);
        }
        var a = this.options.content,
          u = i(a, this.options.ecl),
          c = n(this.options.ecl);
        (this.qrcode = new r(u, c)), this.qrcode.addData(a), this.qrcode.make();
      }
      (p.prototype.svg = function (t) {
        var e = this.options || {},
          n = this.qrcode.modules;
        'undefined' == typeof t && (t = { container: e.container || 'svg' });
        for (
          var r = 'undefined' == typeof e.pretty || !!e.pretty,
            i = r ? '  ' : '',
            s = r ? '\r\n' : '',
            o = e.width,
            a = e.height,
            u = n.length,
            c = o / (u + 2 * e.padding),
            l = a / (u + 2 * e.padding),
            h = 'undefined' != typeof e.join && !!e.join,
            d = 'undefined' != typeof e.swap && !!e.swap,
            f = 'undefined' == typeof e.xmlDeclaration || !!e.xmlDeclaration,
            p = 'undefined' != typeof e.predefined && !!e.predefined,
            b = p
              ? i +
                '<defs><path id="qrmodule" d="M0 0 h' +
                l +
                ' v' +
                c +
                ' H0 z" style="fill:' +
                e.color +
                ';shape-rendering:crispEdges;" /></defs>' +
                s
              : '',
            g =
              i +
              '<rect x="0" y="0" width="' +
              o +
              '" height="' +
              a +
              '" style="fill:' +
              e.background +
              ';shape-rendering:crispEdges;"/>' +
              s,
            m = '',
            y = '',
            v = 0;
          v < u;
          v++
        )
          for (var _ = 0; _ < u; _++) {
            var w = n[_][v];
            if (w) {
              var S = _ * c + e.padding * c,
                M = v * l + e.padding * l;
              if (d) {
                var E = S;
                (S = M), (M = E);
              }
              if (h) {
                var x = c + S,
                  k = l + M;
                (S = Number.isInteger(S) ? Number(S) : S.toFixed(2)),
                  (M = Number.isInteger(M) ? Number(M) : M.toFixed(2)),
                  (x = Number.isInteger(x) ? Number(x) : x.toFixed(2)),
                  (k = Number.isInteger(k) ? Number(k) : k.toFixed(2)),
                  (y +=
                    'M' +
                    S +
                    ',' +
                    M +
                    ' V' +
                    k +
                    ' H' +
                    x +
                    ' V' +
                    M +
                    ' H' +
                    S +
                    ' Z ');
              } else
                m += p
                  ? i +
                    '<use x="' +
                    S.toString() +
                    '" y="' +
                    M.toString() +
                    '" href="#qrmodule" />' +
                    s
                  : i +
                    '<rect x="' +
                    S.toString() +
                    '" y="' +
                    M.toString() +
                    '" width="' +
                    c +
                    '" height="' +
                    l +
                    '" style="fill:' +
                    e.color +
                    ';shape-rendering:crispEdges;"/>' +
                    s;
            }
          }
        h &&
          (m =
            i +
            '<path x="0" y="0" style="fill:' +
            e.color +
            ';shape-rendering:crispEdges;" d="' +
            y +
            '" />');
        let C = '';
        if (void 0 !== this.options.image && this.options.image.svg) {
          const t = (o * this.options.image.width) / 100,
            e = (a * this.options.image.height) / 100,
            n = o / 2 - t / 2,
            r = a / 2 - e / 2;
          (C += `<svg x="${n}" y="${r}" width="${t}" height="${e}" viewBox="0 0 100 100" preserveAspectRatio="xMinYMin meet">`),
            (C += this.options.image.svg + s),
            (C += '</svg>');
        }
        var I = '';
        switch (t.container) {
          case 'svg':
            f && (I += '<?xml version="1.0" standalone="yes"?>' + s),
              (I +=
                '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="' +
                o +
                '" height="' +
                a +
                '">' +
                s),
              (I += b + g + m),
              (I += C),
              (I += '</svg>');
            break;
          case 'svg-viewbox':
            f && (I += '<?xml version="1.0" standalone="yes"?>' + s),
              (I +=
                '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 ' +
                o +
                ' ' +
                a +
                '">' +
                s),
              (I += b + g + m),
              (I += C),
              (I += '</svg>');
            break;
          case 'g':
            (I += '<g width="' + o + '" height="' + a + '">' + s),
              (I += b + g + m),
              (I += C),
              (I += '</g>');
            break;
          default:
            I += (b + g + m + C).replace(/^\s+/, '');
            break;
        }
        return I;
      }),
        (t.exports = p);
    },
    RhWC: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.getUniqueId = void 0);
      const r = 4294967295;
      let i = Math.floor(Math.random() * r);
      function s() {
        return (i = (i + 1) % r), i;
      }
      e.getUniqueId = s;
    },
    RlVT: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.errorValues = e.errorCodes = void 0),
        (e.errorCodes = {
          rpc: {
            invalidInput: -32e3,
            resourceNotFound: -32001,
            resourceUnavailable: -32002,
            transactionRejected: -32003,
            methodNotSupported: -32004,
            limitExceeded: -32005,
            parse: -32700,
            invalidRequest: -32600,
            methodNotFound: -32601,
            invalidParams: -32602,
            internal: -32603,
          },
          provider: {
            userRejectedRequest: 4001,
            unauthorized: 4100,
            unsupportedMethod: 4200,
            disconnected: 4900,
            chainDisconnected: 4901,
          },
        }),
        (e.errorValues = {
          '-32700': {
            standard: 'JSON RPC 2.0',
            message:
              'Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.',
          },
          '-32600': {
            standard: 'JSON RPC 2.0',
            message: 'The JSON sent is not a valid Request object.',
          },
          '-32601': {
            standard: 'JSON RPC 2.0',
            message: 'The method does not exist / is not available.',
          },
          '-32602': {
            standard: 'JSON RPC 2.0',
            message: 'Invalid method parameter(s).',
          },
          '-32603': {
            standard: 'JSON RPC 2.0',
            message: 'Internal JSON-RPC error.',
          },
          '-32000': { standard: 'EIP-1474', message: 'Invalid input.' },
          '-32001': { standard: 'EIP-1474', message: 'Resource not found.' },
          '-32002': { standard: 'EIP-1474', message: 'Resource unavailable.' },
          '-32003': { standard: 'EIP-1474', message: 'Transaction rejected.' },
          '-32004': { standard: 'EIP-1474', message: 'Method not supported.' },
          '-32005': {
            standard: 'EIP-1474',
            message: 'Request limit exceeded.',
          },
          4001: { standard: 'EIP-1193', message: 'User rejected the request.' },
          4100: {
            standard: 'EIP-1193',
            message:
              'The requested account and/or method has not been authorized by the user.',
          },
          4200: {
            standard: 'EIP-1193',
            message:
              'The requested method is not supported by this Ethereum provider.',
          },
          4900: {
            standard: 'EIP-1193',
            message: 'The provider is disconnected from all chains.',
          },
          4901: {
            standard: 'EIP-1193',
            message: 'The provider is disconnected from the specified chain.',
          },
        });
    },
    S5bw: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return l;
      });
      var r = n('mrSG'),
        i = n('K9Ia'),
        s = n('zo3G'),
        o = n('pugT'),
        a = n('mZXl'),
        u = n('8g8A'),
        c = n('uMaO'),
        l = (function (t) {
          function e(e, n, r) {
            void 0 === e && (e = Number.POSITIVE_INFINITY),
              void 0 === n && (n = Number.POSITIVE_INFINITY);
            var i = t.call(this) || this;
            return (
              (i.scheduler = r),
              (i._events = []),
              (i._infiniteTimeWindow = !1),
              (i._bufferSize = e < 1 ? 1 : e),
              (i._windowTime = n < 1 ? 1 : n),
              n === Number.POSITIVE_INFINITY
                ? ((i._infiniteTimeWindow = !0),
                  (i.next = i.nextInfiniteTimeWindow))
                : (i.next = i.nextTimeWindow),
              i
            );
          }
          return (
            r['__extends'](e, t),
            (e.prototype.nextInfiniteTimeWindow = function (e) {
              if (!this.isStopped) {
                var n = this._events;
                n.push(e), n.length > this._bufferSize && n.shift();
              }
              t.prototype.next.call(this, e);
            }),
            (e.prototype.nextTimeWindow = function (e) {
              this.isStopped ||
                (this._events.push(new h(this._getNow(), e)),
                this._trimBufferThenGetEvents()),
                t.prototype.next.call(this, e);
            }),
            (e.prototype._subscribe = function (t) {
              var e,
                n = this._infiniteTimeWindow,
                r = n ? this._events : this._trimBufferThenGetEvents(),
                i = this.scheduler,
                s = r.length;
              if (this.closed) throw new u['a']();
              if (
                (this.isStopped || this.hasError
                  ? (e = o['a'].EMPTY)
                  : (this.observers.push(t), (e = new c['a'](this, t))),
                i && t.add((t = new a['a'](t, i))),
                n)
              )
                for (var l = 0; l < s && !t.closed; l++) t.next(r[l]);
              else for (l = 0; l < s && !t.closed; l++) t.next(r[l].value);
              return (
                this.hasError
                  ? t.error(this.thrownError)
                  : this.isStopped && t.complete(),
                e
              );
            }),
            (e.prototype._getNow = function () {
              return (this.scheduler || s['a']).now();
            }),
            (e.prototype._trimBufferThenGetEvents = function () {
              var t = this._getNow(),
                e = this._bufferSize,
                n = this._windowTime,
                r = this._events,
                i = r.length,
                s = 0;
              while (s < i) {
                if (t - r[s].time < n) break;
                s++;
              }
              return (
                i > e && (s = Math.max(s, i - e)), s > 0 && r.splice(0, s), r
              );
            }),
            e
          );
        })(i['a']),
        h = (function () {
          function t(t, e) {
            (this.time = t), (this.value = e);
          }
          return t;
        })();
    },
    SFow: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.walletLogo = void 0);
      const r = (t, e) => {
        let n;
        switch (t) {
          case 'standard':
            return (
              (n = e),
              `data:image/svg+xml,%3Csvg width='${e}' height='${n}' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E `
            );
          case 'circle':
            return (
              (n = e),
              `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${e}' height='${n}' viewBox='0 0 999.81 999.81'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052fe;%7D.cls-2%7Bfill:%23fefefe;%7D.cls-3%7Bfill:%230152fe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M655-115.9h56c.83,1.59,2.36.88,3.56,1a478,478,0,0,1,75.06,10.42C891.4-81.76,978.33-32.58,1049.19,44q116.7,126,131.94,297.61c.38,4.14-.34,8.53,1.78,12.45v59c-1.58.84-.91,2.35-1,3.56a482.05,482.05,0,0,1-10.38,74.05c-24,106.72-76.64,196.76-158.83,268.93s-178.18,112.82-287.2,122.6c-4.83.43-9.86-.25-14.51,1.77H654c-1-1.68-2.69-.91-4.06-1a496.89,496.89,0,0,1-105.9-18.59c-93.54-27.42-172.78-77.59-236.91-150.94Q199.34,590.1,184.87,426.58c-.47-5.19.25-10.56-1.77-15.59V355c1.68-1,.91-2.7,1-4.06a498.12,498.12,0,0,1,18.58-105.9c26-88.75,72.64-164.9,140.6-227.57q126-116.27,297.21-131.61C645.32-114.57,650.35-113.88,655-115.9Zm377.92,500c0-192.44-156.31-349.49-347.56-350.15-194.13-.68-350.94,155.13-352.29,347.42-1.37,194.55,155.51,352.1,348.56,352.47C876.15,734.23,1032.93,577.84,1032.93,384.11Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-2' d='M1032.93,384.11c0,193.73-156.78,350.12-351.29,349.74-193-.37-349.93-157.92-348.56-352.47C334.43,189.09,491.24,33.28,685.37,34,876.62,34.62,1032.94,191.67,1032.93,384.11ZM683,496.81q43.74,0,87.48,0c15.55,0,25.32-9.72,25.33-25.21q0-87.48,0-175c0-15.83-9.68-25.46-25.59-25.46H595.77c-15.88,0-25.57,9.64-25.58,25.46q0,87.23,0,174.45c0,16.18,9.59,25.7,25.84,25.71Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-3' d='M683,496.81H596c-16.25,0-25.84-9.53-25.84-25.71q0-87.23,0-174.45c0-15.82,9.7-25.46,25.58-25.46H770.22c15.91,0,25.59,9.63,25.59,25.46q0,87.47,0,175c0,15.49-9.78,25.2-25.33,25.21Q726.74,496.84,683,496.81Z' transform='translate(-183.1 115.9)'/%3E%3C/svg%3E`
            );
          case 'text':
            return (
              (n = (0.1 * e).toFixed(2)),
              `data:image/svg+xml,%3Csvg width='${e}' height='${n}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`
            );
          case 'textWithLogo':
            return (
              (n = (0.25 * e).toFixed(2)),
              `data:image/svg+xml,%3Csvg width='${e}' height='${n}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`
            );
          case 'textLight':
            return (
              (n = (0.1 * e).toFixed(2)),
              `data:image/svg+xml,%3Csvg width='${e}' height='${n}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`
            );
          case 'textWithLogoLight':
            return (
              (n = (0.25 * e).toFixed(2)),
              `data:image/svg+xml,%3Csvg width='${e}' height='${n}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`
            );
          default:
            return (
              (n = e),
              `data:image/svg+xml,%3Csvg width='${e}' height='${n}' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E `
            );
        }
      };
      e.walletLogo = r;
    },
    T1DM: function (t, e, n) {
      'use strict';
      n.d(e, 'b', function () {
        return s;
      }),
        n.d(e, 'a', function () {
          return o;
        });
      var r = n('h9Dq'),
        i = n('CS9Q'),
        s = new i['a'](r['a']),
        o = s;
    },
    T2gh: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.getMessageFromCode =
          e.serializeError =
          e.EthereumProviderError =
          e.EthereumRpcError =
          e.ethErrors =
          e.errorCodes =
            void 0);
      const r = n('yIX8');
      Object.defineProperty(e, 'EthereumRpcError', {
        enumerable: !0,
        get: function () {
          return r.EthereumRpcError;
        },
      }),
        Object.defineProperty(e, 'EthereumProviderError', {
          enumerable: !0,
          get: function () {
            return r.EthereumProviderError;
          },
        });
      const i = n('5eDx');
      Object.defineProperty(e, 'serializeError', {
        enumerable: !0,
        get: function () {
          return i.serializeError;
        },
      }),
        Object.defineProperty(e, 'getMessageFromCode', {
          enumerable: !0,
          get: function () {
            return i.getMessageFromCode;
          },
        });
      const s = n('zHmn');
      Object.defineProperty(e, 'ethErrors', {
        enumerable: !0,
        get: function () {
          return s.ethErrors;
        },
      });
      const o = n('Ev0B');
      Object.defineProperty(e, 'errorCodes', {
        enumerable: !0,
        get: function () {
          return o.errorCodes;
        },
      });
    },
    T9HO: function (t, e, n) {
      var r = n('P7XM'),
        i = n('tnIz'),
        s = n('hwdV').Buffer,
        o = [
          1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399,
          3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265,
          2453635748, 2937671579, 2870763221, 3664609560, 3624381080,
          2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987,
          3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103,
          633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774,
          944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983,
          1495990901, 1249150122, 1856431235, 1555081692, 3175218132,
          1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016,
          2952996808, 2566594879, 3210313671, 3203337956, 3336571891,
          1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895,
          168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372,
          1522805485, 1396182291, 2643833823, 1695183700, 2343527390,
          1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627,
          2730485921, 1290863460, 2820302411, 3158454273, 3259730800,
          3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804,
          1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734,
          3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877,
          3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063,
          2003034995, 1747873779, 3602036899, 1955562222, 1575990012,
          2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044,
          2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573,
          3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711,
          3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554,
          174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315,
          685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100,
          1126000580, 2618297676, 1288033470, 3409855158, 1501505948,
          4234509866, 1607167915, 987167468, 1816402316, 1246189591,
        ],
        a = new Array(160);
      function u() {
        this.init(), (this._w = a), i.call(this, 128, 112);
      }
      function c(t, e, n) {
        return n ^ (t & (e ^ n));
      }
      function l(t, e, n) {
        return (t & e) | (n & (t | e));
      }
      function h(t, e) {
        return (
          ((t >>> 28) | (e << 4)) ^
          ((e >>> 2) | (t << 30)) ^
          ((e >>> 7) | (t << 25))
        );
      }
      function d(t, e) {
        return (
          ((t >>> 14) | (e << 18)) ^
          ((t >>> 18) | (e << 14)) ^
          ((e >>> 9) | (t << 23))
        );
      }
      function f(t, e) {
        return ((t >>> 1) | (e << 31)) ^ ((t >>> 8) | (e << 24)) ^ (t >>> 7);
      }
      function p(t, e) {
        return (
          ((t >>> 1) | (e << 31)) ^
          ((t >>> 8) | (e << 24)) ^
          ((t >>> 7) | (e << 25))
        );
      }
      function b(t, e) {
        return ((t >>> 19) | (e << 13)) ^ ((e >>> 29) | (t << 3)) ^ (t >>> 6);
      }
      function g(t, e) {
        return (
          ((t >>> 19) | (e << 13)) ^
          ((e >>> 29) | (t << 3)) ^
          ((t >>> 6) | (e << 26))
        );
      }
      function m(t, e) {
        return t >>> 0 < e >>> 0 ? 1 : 0;
      }
      r(u, i),
        (u.prototype.init = function () {
          return (
            (this._ah = 1779033703),
            (this._bh = 3144134277),
            (this._ch = 1013904242),
            (this._dh = 2773480762),
            (this._eh = 1359893119),
            (this._fh = 2600822924),
            (this._gh = 528734635),
            (this._hh = 1541459225),
            (this._al = 4089235720),
            (this._bl = 2227873595),
            (this._cl = 4271175723),
            (this._dl = 1595750129),
            (this._el = 2917565137),
            (this._fl = 725511199),
            (this._gl = 4215389547),
            (this._hl = 327033209),
            this
          );
        }),
        (u.prototype._update = function (t) {
          for (
            var e = this._w,
              n = 0 | this._ah,
              r = 0 | this._bh,
              i = 0 | this._ch,
              s = 0 | this._dh,
              a = 0 | this._eh,
              u = 0 | this._fh,
              y = 0 | this._gh,
              v = 0 | this._hh,
              _ = 0 | this._al,
              w = 0 | this._bl,
              S = 0 | this._cl,
              M = 0 | this._dl,
              E = 0 | this._el,
              x = 0 | this._fl,
              k = 0 | this._gl,
              C = 0 | this._hl,
              I = 0;
            I < 32;
            I += 2
          )
            (e[I] = t.readInt32BE(4 * I)),
              (e[I + 1] = t.readInt32BE(4 * I + 4));
          for (; I < 160; I += 2) {
            var O = e[I - 30],
              j = e[I - 30 + 1],
              A = f(O, j),
              R = p(j, O);
            (O = e[I - 4]), (j = e[I - 4 + 1]);
            var N = b(O, j),
              T = g(j, O),
              L = e[I - 14],
              P = e[I - 14 + 1],
              D = e[I - 32],
              B = e[I - 32 + 1],
              F = (R + P) | 0,
              U = (A + L + m(F, R)) | 0;
            (F = (F + T) | 0),
              (U = (U + N + m(F, T)) | 0),
              (F = (F + B) | 0),
              (U = (U + D + m(F, B)) | 0),
              (e[I] = U),
              (e[I + 1] = F);
          }
          for (var H = 0; H < 160; H += 2) {
            (U = e[H]), (F = e[H + 1]);
            var W = l(n, r, i),
              z = l(_, w, S),
              V = h(n, _),
              q = h(_, n),
              G = d(a, E),
              Z = d(E, a),
              J = o[H],
              Y = o[H + 1],
              Q = c(a, u, y),
              K = c(E, x, k),
              $ = (C + Z) | 0,
              X = (v + G + m($, C)) | 0;
            ($ = ($ + K) | 0),
              (X = (X + Q + m($, K)) | 0),
              ($ = ($ + Y) | 0),
              (X = (X + J + m($, Y)) | 0),
              ($ = ($ + F) | 0),
              (X = (X + U + m($, F)) | 0);
            var tt = (q + z) | 0,
              et = (V + W + m(tt, q)) | 0;
            (v = y),
              (C = k),
              (y = u),
              (k = x),
              (u = a),
              (x = E),
              (E = (M + $) | 0),
              (a = (s + X + m(E, M)) | 0),
              (s = i),
              (M = S),
              (i = r),
              (S = w),
              (r = n),
              (w = _),
              (_ = ($ + tt) | 0),
              (n = (X + et + m(_, $)) | 0);
          }
          (this._al = (this._al + _) | 0),
            (this._bl = (this._bl + w) | 0),
            (this._cl = (this._cl + S) | 0),
            (this._dl = (this._dl + M) | 0),
            (this._el = (this._el + E) | 0),
            (this._fl = (this._fl + x) | 0),
            (this._gl = (this._gl + k) | 0),
            (this._hl = (this._hl + C) | 0),
            (this._ah = (this._ah + n + m(this._al, _)) | 0),
            (this._bh = (this._bh + r + m(this._bl, w)) | 0),
            (this._ch = (this._ch + i + m(this._cl, S)) | 0),
            (this._dh = (this._dh + s + m(this._dl, M)) | 0),
            (this._eh = (this._eh + a + m(this._el, E)) | 0),
            (this._fh = (this._fh + u + m(this._fl, x)) | 0),
            (this._gh = (this._gh + y + m(this._gl, k)) | 0),
            (this._hh = (this._hh + v + m(this._hl, C)) | 0);
        }),
        (u.prototype._hash = function () {
          var t = s.allocUnsafe(64);
          function e(e, n, r) {
            t.writeInt32BE(e, r), t.writeInt32BE(n, r + 4);
          }
          return (
            e(this._ah, this._al, 0),
            e(this._bh, this._bl, 8),
            e(this._ch, this._cl, 16),
            e(this._dh, this._dl, 24),
            e(this._eh, this._el, 32),
            e(this._fh, this._fl, 40),
            e(this._gh, this._gl, 48),
            e(this._hh, this._hl, 56),
            t
          );
        }),
        (t.exports = u);
    },
    TSgA: function (t, e, n) {
      'use strict';
      var r = n('kFRM').codes.ERR_INVALID_OPT_VALUE;
      function i(t, e, n) {
        return null != t.highWaterMark ? t.highWaterMark : e ? t[n] : null;
      }
      function s(t, e, n, s) {
        var o = i(e, s, n);
        if (null != o) {
          if (!isFinite(o) || Math.floor(o) !== o || o < 0) {
            var a = s ? n : 'highWaterMark';
            throw new r(a, o);
          }
          return Math.floor(o);
        }
        return t.objectMode ? 16 : 16384;
      }
      t.exports = { getHighWaterMark: s };
    },
    TagH: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.CloseIcon = void 0);
      const r = n('2mXy');
      function i(t) {
        return (0, r.h)(
          'svg',
          Object.assign(
            {
              width: '40',
              height: '40',
              viewBox: '0 0 40 40',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            t,
          ),
          (0, r.h)('path', {
            d: 'M13.7677 13L12.3535 14.4142L18.3535 20.4142L12.3535 26.4142L13.7677 27.8284L19.7677 21.8284L25.7677 27.8284L27.1819 26.4142L21.1819 20.4142L27.1819 14.4142L25.7677 13L19.7677 19L13.7677 13Z',
          }),
        );
      }
      e.CloseIcon = i;
    },
    Txjg: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return i;
      });
      var r = n('Zn8D');
      function i() {
        return Object(r['a'])(1);
      }
    },
    'U+KF': function (t, e, n) {
      'use strict';
      t.exports = l;
      var r = n('kFRM').codes,
        i = r.ERR_METHOD_NOT_IMPLEMENTED,
        s = r.ERR_MULTIPLE_CALLBACK,
        o = r.ERR_TRANSFORM_ALREADY_TRANSFORMING,
        a = r.ERR_TRANSFORM_WITH_LENGTH_0,
        u = n('iKJY');
      function c(t, e) {
        var n = this._transformState;
        n.transforming = !1;
        var r = n.writecb;
        if (null === r) return this.emit('error', new s());
        (n.writechunk = null),
          (n.writecb = null),
          null != e && this.push(e),
          r(t);
        var i = this._readableState;
        (i.reading = !1),
          (i.needReadable || i.length < i.highWaterMark) &&
            this._read(i.highWaterMark);
      }
      function l(t) {
        if (!(this instanceof l)) return new l(t);
        u.call(this, t),
          (this._transformState = {
            afterTransform: c.bind(this),
            needTransform: !1,
            transforming: !1,
            writecb: null,
            writechunk: null,
            writeencoding: null,
          }),
          (this._readableState.needReadable = !0),
          (this._readableState.sync = !1),
          t &&
            ('function' === typeof t.transform &&
              (this._transform = t.transform),
            'function' === typeof t.flush && (this._flush = t.flush)),
          this.on('prefinish', h);
      }
      function h() {
        var t = this;
        'function' !== typeof this._flush || this._readableState.destroyed
          ? d(this, null, null)
          : this._flush(function (e, n) {
              d(t, e, n);
            });
      }
      function d(t, e, n) {
        if (e) return t.emit('error', e);
        if ((null != n && t.push(n), t._writableState.length)) throw new a();
        if (t._transformState.transforming) throw new o();
        return t.push(null);
      }
      n('P7XM')(l, u),
        (l.prototype.push = function (t, e) {
          return (
            (this._transformState.needTransform = !1),
            u.prototype.push.call(this, t, e)
          );
        }),
        (l.prototype._transform = function (t, e, n) {
          n(new i('_transform()'));
        }),
        (l.prototype._write = function (t, e, n) {
          var r = this._transformState;
          if (
            ((r.writecb = n),
            (r.writechunk = t),
            (r.writeencoding = e),
            !r.transforming)
          ) {
            var i = this._readableState;
            (r.needTransform || i.needReadable || i.length < i.highWaterMark) &&
              this._read(i.highWaterMark);
          }
        }),
        (l.prototype._read = function (t) {
          var e = this._transformState;
          null === e.writechunk || e.transforming
            ? (e.needTransform = !0)
            : ((e.transforming = !0),
              this._transform(e.writechunk, e.writeencoding, e.afterTransform));
        }),
        (l.prototype._destroy = function (t, e) {
          u.prototype._destroy.call(this, t, function (t) {
            e(t);
          });
        });
    },
    U6jy: function (t, e) {
      t.exports = r;
      var n = Object.prototype.hasOwnProperty;
      function r() {
        for (var t = {}, e = 0; e < arguments.length; e++) {
          var r = arguments[e];
          for (var i in r) n.call(r, i) && (t[i] = r[i]);
        }
        return t;
      }
    },
    UJ2e: function (t, e) {
      function n(...t) {
        const e = i(t);
        return e[0];
      }
      function r(...t) {
        const e = i(t);
        return e[e.length - 1];
      }
      function i(t) {
        return t.sort((t, e) =>
          'latest' === t || 'earliest' === e
            ? 1
            : 'latest' === e || 'earliest' === t
            ? -1
            : a(t) - a(e),
        );
      }
      function s(t) {
        return '0x' + t.toString(16);
      }
      function o(t) {
        return t && !['earliest', 'latest', 'pending'].includes(t);
      }
      function a(t) {
        return void 0 === t || null === t ? t : Number.parseInt(t, 16);
      }
      function u(t) {
        if (void 0 === t || null === t) return t;
        const e = a(t);
        return c(e + 1);
      }
      function c(t) {
        if (void 0 === t || null === t) return t;
        let e = t.toString(16);
        const n = e.length % 2;
        return n && (e = '0' + e), '0x' + e;
      }
      function l(t) {
        let e = '0x';
        for (let n = 0; n < t; n++) (e += h()), (e += h());
        return e;
      }
      function h() {
        return Math.floor(16 * Math.random()).toString(16);
      }
      t.exports = {
        minBlockRef: n,
        maxBlockRef: r,
        sortBlockRefs: i,
        bnToHex: s,
        blockRefIsNumber: o,
        hexToInt: a,
        incrementHexInt: u,
        intToHex: c,
        unsafeRandomBytes: l,
      };
    },
    V5x4: function (t, e, n) {
      const r = n('Nk1h'),
        i = n('/u+i'),
        s = 1e3;
      class o extends i {
        constructor(t = {}) {
          if (!t.provider)
            throw new Error('PollingBlockTracker - no provider specified.');
          const e = t.pollingInterval || 20 * s,
            n = t.retryTimeout || e / 10,
            r = void 0 === t.keepEventLoopActive || t.keepEventLoopActive,
            i = t.setSkipCacheFlag || !1;
          super(Object.assign({ blockResetDuration: e }, t)),
            (this._provider = t.provider),
            (this._pollingInterval = e),
            (this._retryTimeout = n),
            (this._keepEventLoopActive = r),
            (this._setSkipCacheFlag = i);
        }
        async checkForLatestBlock() {
          return await this._updateLatestBlock(), await this.getLatestBlock();
        }
        _start() {
          this._performSync().catch((t) => this.emit('error', t));
        }
        async _performSync() {
          while (this._isRunning)
            try {
              await this._updateLatestBlock(),
                await a(this._pollingInterval, !this._keepEventLoopActive);
            } catch (t) {
              const n = new Error(
                `PollingBlockTracker - encountered an error while attempting to update latest block:\n${t.stack}`,
              );
              try {
                this.emit('error', n);
              } catch (e) {
                console.error(n);
              }
              await a(this._retryTimeout, !this._keepEventLoopActive);
            }
        }
        async _updateLatestBlock() {
          const t = await this._fetchLatestBlock();
          this._newPotentialLatest(t);
        }
        async _fetchLatestBlock() {
          const t = {
            jsonrpc: '2.0',
            id: 1,
            method: 'eth_blockNumber',
            params: [],
          };
          this._setSkipCacheFlag && (t.skipCache = !0);
          const e = await r((e) => this._provider.sendAsync(t, e))();
          if (e.error)
            throw new Error(
              `PollingBlockTracker - encountered error fetching block:\n${e.error}`,
            );
          return e.result;
        }
      }
      function a(t, e) {
        return new Promise((n) => {
          const r = setTimeout(n, t);
          r.unref && e && r.unref();
        });
      }
      t.exports = o;
    },
    'VnD/': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return s;
      });
      var r = n('mrSG'),
        i = n('FFOo');
      function s(t, e) {
        return function (n) {
          return n.lift(new o(t, e));
        };
      }
      var o = (function () {
          function t(t, e) {
            (this.predicate = t), (this.thisArg = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new a(t, this.predicate, this.thisArg));
            }),
            t
          );
        })(),
        a = (function (t) {
          function e(e, n, r) {
            var i = t.call(this, e) || this;
            return (i.predicate = n), (i.thisArg = r), (i.count = 0), i;
          }
          return (
            r['__extends'](e, t),
            (e.prototype._next = function (t) {
              var e;
              try {
                e = this.predicate.call(this.thisArg, t, this.count++);
              } catch (n) {
                return void this.destination.error(n);
              }
              e && this.destination.next(t);
            }),
            e
          );
        })(i['a']);
    },
    W0Ae: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return u;
      });
      var r = n('mrSG'),
        i = n('isby'),
        s = n('IUTb'),
        o = n('MGBS'),
        a = n('zotm');
      function u() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        if (1 === t.length) {
          if (!Object(i['a'])(t[0])) return t[0];
          t = t[0];
        }
        return Object(s['a'])(t, void 0).lift(new c());
      }
      var c = (function () {
          function t() {}
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new l(t));
            }),
            t
          );
        })(),
        l = (function (t) {
          function e(e) {
            var n = t.call(this, e) || this;
            return (
              (n.hasFirst = !1), (n.observables = []), (n.subscriptions = []), n
            );
          }
          return (
            r['__extends'](e, t),
            (e.prototype._next = function (t) {
              this.observables.push(t);
            }),
            (e.prototype._complete = function () {
              var t = this.observables,
                e = t.length;
              if (0 === e) this.destination.complete();
              else {
                for (var n = 0; n < e && !this.hasFirst; n++) {
                  var r = t[n],
                    i = Object(a['a'])(this, r, void 0, n);
                  this.subscriptions && this.subscriptions.push(i), this.add(i);
                }
                this.observables = null;
              }
            }),
            (e.prototype.notifyNext = function (t, e, n) {
              if (!this.hasFirst) {
                this.hasFirst = !0;
                for (var r = 0; r < this.subscriptions.length; r++)
                  if (r !== n) {
                    var i = this.subscriptions[r];
                    i.unsubscribe(), this.remove(i);
                  }
                this.subscriptions = null;
              }
              this.destination.next(e);
            }),
            e
          );
        })(o['a']);
    },
    W0gz: function (t, e, n) {
      (function (e) {
        const r = n('lFtt'),
          i = n('pUf3');
        function s(t) {
          return t.startsWith('int[')
            ? 'int256' + t.slice(3)
            : 'int' === t
            ? 'int256'
            : t.startsWith('uint[')
            ? 'uint256' + t.slice(4)
            : 'uint' === t
            ? 'uint256'
            : t.startsWith('fixed[')
            ? 'fixed128x128' + t.slice(5)
            : 'fixed' === t
            ? 'fixed128x128'
            : t.startsWith('ufixed[')
            ? 'ufixed128x128' + t.slice(6)
            : 'ufixed' === t
            ? 'ufixed128x128'
            : t;
        }
        function o(t) {
          return parseInt(/^\D+(\d+)$/.exec(t)[1], 10);
        }
        function a(t) {
          var e = /^\D+(\d+)x(\d+)$/.exec(t);
          return [parseInt(e[1], 10), parseInt(e[2], 10)];
        }
        function u(t) {
          var e = t.match(/(.*)\[(.*?)\]$/);
          return e ? ('' === e[2] ? 'dynamic' : parseInt(e[2], 10)) : null;
        }
        function c(t) {
          var e = typeof t;
          if ('string' === e)
            return r.isHexString(t)
              ? new i(r.stripHexPrefix(t), 16)
              : new i(t, 10);
          if ('number' === e) return new i(t);
          if (t.toArray) return t;
          throw new Error('Argument is not a number');
        }
        function l(t, n) {
          var s, h, f, p;
          if ('address' === t) return l('uint160', c(n));
          if ('bool' === t) return l('uint8', n ? 1 : 0);
          if ('string' === t) return l('bytes', new e(n, 'utf8'));
          if (d(t)) {
            if ('undefined' === typeof n.length)
              throw new Error('Not an array?');
            if (((s = u(t)), 'dynamic' !== s && 0 !== s && n.length > s))
              throw new Error('Elements exceed array size: ' + s);
            for (p in ((f = []),
            (t = t.slice(0, t.lastIndexOf('['))),
            'string' === typeof n && (n = JSON.parse(n)),
            n))
              f.push(l(t, n[p]));
            if ('dynamic' === s) {
              var b = l('uint256', n.length);
              f.unshift(b);
            }
            return e.concat(f);
          }
          if ('bytes' === t)
            return (
              (n = new e(n)),
              (f = e.concat([l('uint256', n.length), n])),
              n.length % 32 !== 0 &&
                (f = e.concat([f, r.zeros(32 - (n.length % 32))])),
              f
            );
          if (t.startsWith('bytes')) {
            if (((s = o(t)), s < 1 || s > 32))
              throw new Error('Invalid bytes<N> width: ' + s);
            return r.setLengthRight(n, 32);
          }
          if (t.startsWith('uint')) {
            if (((s = o(t)), s % 8 || s < 8 || s > 256))
              throw new Error('Invalid uint<N> width: ' + s);
            if (((h = c(n)), h.bitLength() > s))
              throw new Error(
                'Supplied uint exceeds width: ' + s + ' vs ' + h.bitLength(),
              );
            if (h < 0) throw new Error('Supplied uint is negative');
            return h.toArrayLike(e, 'be', 32);
          }
          if (t.startsWith('int')) {
            if (((s = o(t)), s % 8 || s < 8 || s > 256))
              throw new Error('Invalid int<N> width: ' + s);
            if (((h = c(n)), h.bitLength() > s))
              throw new Error(
                'Supplied int exceeds width: ' + s + ' vs ' + h.bitLength(),
              );
            return h.toTwos(256).toArrayLike(e, 'be', 32);
          }
          if (t.startsWith('ufixed')) {
            if (((s = a(t)), (h = c(n)), h < 0))
              throw new Error('Supplied ufixed is negative');
            return l('uint256', h.mul(new i(2).pow(new i(s[1]))));
          }
          if (t.startsWith('fixed'))
            return (s = a(t)), l('int256', c(n).mul(new i(2).pow(new i(s[1]))));
          throw new Error('Unsupported or invalid type: ' + t);
        }
        function h(t) {
          return 'string' === t || 'bytes' === t || 'dynamic' === u(t);
        }
        function d(t) {
          return t.lastIndexOf(']') === t.length - 1;
        }
        function f(t, n) {
          var r = [],
            i = [],
            o = 32 * t.length;
          for (var a in t) {
            var u = s(t[a]),
              c = n[a],
              d = l(u, c);
            h(u)
              ? (r.push(l('uint256', o)), i.push(d), (o += d.length))
              : r.push(d);
          }
          return e.concat(r.concat(i));
        }
        function p(t, n) {
          if (t.length !== n.length)
            throw new Error('Number of types are not matching the values');
          for (var i, a, u = [], l = 0; l < t.length; l++) {
            var h = s(t[l]),
              d = n[l];
            if ('bytes' === h) u.push(d);
            else if ('string' === h) u.push(new e(d, 'utf8'));
            else if ('bool' === h) u.push(new e(d ? '01' : '00', 'hex'));
            else if ('address' === h) u.push(r.setLength(d, 20));
            else if (h.startsWith('bytes')) {
              if (((i = o(h)), i < 1 || i > 32))
                throw new Error('Invalid bytes<N> width: ' + i);
              u.push(r.setLengthRight(d, i));
            } else if (h.startsWith('uint')) {
              if (((i = o(h)), i % 8 || i < 8 || i > 256))
                throw new Error('Invalid uint<N> width: ' + i);
              if (((a = c(d)), a.bitLength() > i))
                throw new Error(
                  'Supplied uint exceeds width: ' + i + ' vs ' + a.bitLength(),
                );
              u.push(a.toArrayLike(e, 'be', i / 8));
            } else {
              if (!h.startsWith('int'))
                throw new Error('Unsupported or invalid type: ' + h);
              if (((i = o(h)), i % 8 || i < 8 || i > 256))
                throw new Error('Invalid int<N> width: ' + i);
              if (((a = c(d)), a.bitLength() > i))
                throw new Error(
                  'Supplied int exceeds width: ' + i + ' vs ' + a.bitLength(),
                );
              u.push(a.toTwos(i).toArrayLike(e, 'be', i / 8));
            }
          }
          return e.concat(u);
        }
        function b(t, e) {
          return r.keccak(p(t, e));
        }
        t.exports = { rawEncode: f, solidityPack: p, soliditySHA3: b };
      }).call(this, n('HDXh').Buffer);
    },
    'X+co': function (t, e, n) {
      'use strict';
      var r =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.JsonRpcEngine = void 0);
      const i = r(n('Fj00')),
        s = n('T2gh');
      class o extends i.default {
        constructor() {
          super(), (this._middleware = []);
        }
        push(t) {
          this._middleware.push(t);
        }
        handle(t, e) {
          if (e && 'function' !== typeof e)
            throw new Error('"callback" must be a function if provided.');
          return Array.isArray(t)
            ? e
              ? this._handleBatch(t, e)
              : this._handleBatch(t)
            : e
            ? this._handle(t, e)
            : this._promiseHandle(t);
        }
        asMiddleware() {
          return async (t, e, n, r) => {
            try {
              const [i, s, a] = await o._runAllMiddleware(
                t,
                e,
                this._middleware,
              );
              return s
                ? (await o._runReturnHandlers(a), r(i))
                : n(async (t) => {
                    try {
                      await o._runReturnHandlers(a);
                    } catch (e) {
                      return t(e);
                    }
                    return t();
                  });
            } catch (i) {
              return r(i);
            }
          };
        }
        async _handleBatch(t, e) {
          try {
            const n = await Promise.all(t.map(this._promiseHandle.bind(this)));
            return e ? e(null, n) : n;
          } catch (n) {
            if (e) return e(n);
            throw n;
          }
        }
        _promiseHandle(t) {
          return new Promise((e) => {
            this._handle(t, (t, n) => {
              e(n);
            });
          });
        }
        async _handle(t, e) {
          if (!t || Array.isArray(t) || 'object' !== typeof t) {
            const n = new s.EthereumRpcError(
              s.errorCodes.rpc.invalidRequest,
              'Requests must be plain objects. Received: ' + typeof t,
              { request: t },
            );
            return e(n, { id: void 0, jsonrpc: '2.0', error: n });
          }
          if ('string' !== typeof t.method) {
            const n = new s.EthereumRpcError(
              s.errorCodes.rpc.invalidRequest,
              'Must specify a string method. Received: ' + typeof t.method,
              { request: t },
            );
            return e(n, { id: t.id, jsonrpc: '2.0', error: n });
          }
          const n = Object.assign({}, t),
            r = { id: n.id, jsonrpc: n.jsonrpc };
          let i = null;
          try {
            await this._processRequest(n, r);
          } catch (o) {
            i = o;
          }
          return (
            i && (delete r.result, r.error || (r.error = s.serializeError(i))),
            e(i, r)
          );
        }
        async _processRequest(t, e) {
          const [n, r, i] = await o._runAllMiddleware(t, e, this._middleware);
          if (
            (o._checkForCompletion(t, e, r), await o._runReturnHandlers(i), n)
          )
            throw n;
        }
        static async _runAllMiddleware(t, e, n) {
          const r = [];
          let i = null,
            s = !1;
          for (const a of n)
            if ((([i, s] = await o._runMiddleware(t, e, a, r)), s)) break;
          return [i, s, r.reverse()];
        }
        static _runMiddleware(t, e, n, r) {
          return new Promise((i) => {
            const o = (t) => {
                const n = t || e.error;
                n && (e.error = s.serializeError(n)), i([n, !0]);
              },
              u = (n) => {
                e.error
                  ? o(e.error)
                  : (n &&
                      ('function' !== typeof n &&
                        o(
                          new s.EthereumRpcError(
                            s.errorCodes.rpc.internal,
                            `JsonRpcEngine: "next" return handlers must be functions. Received "${typeof n}" for request:\n${a(
                              t,
                            )}`,
                            { request: t },
                          ),
                        ),
                      r.push(n)),
                    i([null, !1]));
              };
            try {
              n(t, e, u, o);
            } catch (c) {
              o(c);
            }
          });
        }
        static async _runReturnHandlers(t) {
          for (const e of t)
            await new Promise((t, n) => {
              e((e) => (e ? n(e) : t()));
            });
        }
        static _checkForCompletion(t, e, n) {
          if (!('result' in e) && !('error' in e))
            throw new s.EthereumRpcError(
              s.errorCodes.rpc.internal,
              `JsonRpcEngine: Response has no error or result for request:\n${a(
                t,
              )}`,
              { request: t },
            );
          if (!n)
            throw new s.EthereumRpcError(
              s.errorCodes.rpc.internal,
              `JsonRpcEngine: Nothing ended request:\n${a(t)}`,
              { request: t },
            );
        }
      }
      function a(t) {
        return JSON.stringify(t, null, 2);
      }
      e.JsonRpcEngine = o;
    },
    XVFd: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.QRCodeIcon = void 0);
      const r = n('2mXy');
      function i(t) {
        return (0, r.h)(
          'svg',
          Object.assign(
            {
              width: '10',
              height: '10',
              viewBox: '0 0 10 10',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            t,
          ),
          (0, r.h)('path', {
            d: 'M8.2271 1.77124L7.0271 1.77124V2.97124H8.2271V1.77124Z',
          }),
          (0, r.h)('path', {
            d: 'M5.44922 0.199219L5.44922 4.54922L9.79922 4.54922V0.199219L5.44922 0.199219ZM8.89922 3.64922L6.34922 3.64922L6.34922 1.09922L8.89922 1.09922V3.64922Z',
          }),
          (0, r.h)('path', {
            d: 'M2.97124 1.77124L1.77124 1.77124L1.77124 2.97124H2.97124V1.77124Z',
          }),
          (0, r.h)('path', {
            d: 'M0.199219 4.54922L4.54922 4.54922L4.54922 0.199219L0.199219 0.199219L0.199219 4.54922ZM1.09922 1.09922L3.64922 1.09922L3.64922 3.64922L1.09922 3.64922L1.09922 1.09922Z',
          }),
          (0, r.h)('path', {
            d: 'M2.97124 7.0271H1.77124L1.77124 8.2271H2.97124V7.0271Z',
          }),
          (0, r.h)('path', {
            d: 'M0.199219 9.79922H4.54922L4.54922 5.44922L0.199219 5.44922L0.199219 9.79922ZM1.09922 6.34922L3.64922 6.34922L3.64922 8.89922H1.09922L1.09922 6.34922Z',
          }),
          (0, r.h)('path', {
            d: 'M8.89922 7.39912H7.99922V5.40112H5.44922L5.44922 9.79912H6.34922L6.34922 6.30112H7.09922V8.29912H9.79922V5.40112H8.89922V7.39912Z',
          }),
          (0, r.h)('path', {
            d: 'M7.99912 8.89917H7.09912V9.79917H7.99912V8.89917Z',
          }),
          (0, r.h)('path', {
            d: 'M9.79917 8.89917H8.89917V9.79917H9.79917V8.89917Z',
          }),
        );
      }
      e.QRCodeIcon = i;
    },
    XW5J: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.createIdRemapMiddleware = void 0);
      const r = n('RhWC');
      function i() {
        return (t, e, n, i) => {
          const s = t.id,
            o = r.getUniqueId();
          (t.id = o),
            (e.id = o),
            n((n) => {
              (t.id = s), (e.id = s), n();
            });
        };
      }
      e.createIdRemapMiddleware = i;
    },
    XlPw: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return i;
      });
      var r = n('6blF');
      function i(t, e) {
        return e
          ? new r['a'](function (n) {
              return e.schedule(s, 0, { error: t, subscriber: n });
            })
          : new r['a'](function (e) {
              return e.error(t);
            });
      }
      function s(t) {
        var e = t.error,
          n = t.subscriber;
        n.error(e);
      }
    },
    XtHt: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.LinkFlow = void 0);
      const r = n('2mXy'),
        i = n('DtyJ'),
        s = n('D0ju');
      class o {
        constructor(t) {
          (this.extensionUI$ = new i.BehaviorSubject({})),
            (this.subscriptions = new i.Subscription()),
            (this.isConnected = !1),
            (this.chainId = 1),
            (this.isOpen = !1),
            (this.onCancel = null),
            (this.root = null),
            (this.connectDisabled = !1),
            (this.darkMode = t.darkMode),
            (this.version = t.version),
            (this.sessionId = t.sessionId),
            (this.sessionSecret = t.sessionSecret),
            (this.linkAPIUrl = t.linkAPIUrl),
            (this.isParentConnection = t.isParentConnection),
            (this.connected$ = t.connected$),
            (this.chainId$ = t.chainId$);
        }
        attach(t) {
          (this.root = document.createElement('div')),
            (this.root.className = '-cbwsdk-link-flow-root'),
            t.appendChild(this.root),
            this.render(),
            this.subscriptions.add(
              this.connected$.subscribe((t) => {
                this.isConnected !== t &&
                  ((this.isConnected = t), this.render());
              }),
            ),
            this.subscriptions.add(
              this.chainId$.subscribe((t) => {
                this.chainId !== t && ((this.chainId = t), this.render());
              }),
            );
        }
        detach() {
          var t;
          this.root &&
            (this.subscriptions.unsubscribe(),
            (0, r.render)(null, this.root),
            null === (t = this.root.parentElement) ||
              void 0 === t ||
              t.removeChild(this.root));
        }
        setConnectDisabled(t) {
          this.connectDisabled = t;
        }
        open(t) {
          (this.isOpen = !0), (this.onCancel = t.onCancel), this.render();
        }
        close() {
          (this.isOpen = !1), (this.onCancel = null), this.render();
        }
        render() {
          if (!this.root) return;
          const t = this.extensionUI$.subscribe(() => {
            this.root &&
              (0, r.render)(
                (0, r.h)(s.ConnectDialog, {
                  darkMode: this.darkMode,
                  version: this.version,
                  sessionId: this.sessionId,
                  sessionSecret: this.sessionSecret,
                  linkAPIUrl: this.linkAPIUrl,
                  isOpen: this.isOpen,
                  isConnected: this.isConnected,
                  isParentConnection: this.isParentConnection,
                  chainId: this.chainId,
                  onCancel: this.onCancel,
                  connectDisabled: this.connectDisabled,
                }),
                this.root,
              );
          });
          this.subscriptions.add(t);
        }
      }
      e.LinkFlow = o;
    },
    Y5IT: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.EVENTS = void 0),
        (e.EVENTS = {
          STARTED_CONNECTING: 'walletlink_sdk.started.connecting',
          CONNECTED_STATE_CHANGE: 'walletlink_sdk.connected',
          DISCONNECTED: 'walletlink_sdk.disconnected',
          METADATA_DESTROYED: 'walletlink_sdk_metadata_destroyed',
          LINKED: 'walletlink_sdk.linked',
          FAILURE: 'walletlink_sdk.generic_failure',
          SESSION_CONFIG_RECEIVED:
            'walletlink_sdk.session_config_event_received',
          ETH_ACCOUNTS_STATE: 'walletlink_sdk.eth_accounts_state',
          SESSION_STATE_CHANGE: 'walletlink_sdk.session_state_change',
          UNLINKED_ERROR_STATE: 'walletlink_sdk.unlinked_error_state',
          SKIPPED_CLEARING_SESSION: 'walletlink_sdk.skipped_clearing_session',
          GENERAL_ERROR: 'walletlink_sdk.general_error',
          WEB3_REQUEST: 'walletlink_sdk.web3.request',
          WEB3_REQUEST_PUBLISHED: 'walletlink_sdk.web3.request_published',
          WEB3_RESPONSE: 'walletlink_sdk.web3.response',
          UNKNOWN_ADDRESS_ENCOUNTERED:
            'walletlink_sdk.unknown_address_encountered',
        });
    },
    YCz1: function (t, e, n) {
      'use strict';
      (function (e) {
        var r;
        function i(t, e, n) {
          return (
            (e = s(e)),
            e in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function s(t) {
          var e = o(t, 'string');
          return 'symbol' === typeof e ? e : String(e);
        }
        function o(t, e) {
          if ('object' !== typeof t || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || 'default');
            if ('object' !== typeof r) return r;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return ('string' === e ? String : Number)(t);
        }
        var a = n('ZatM'),
          u = Symbol('lastResolve'),
          c = Symbol('lastReject'),
          l = Symbol('error'),
          h = Symbol('ended'),
          d = Symbol('lastPromise'),
          f = Symbol('handlePromise'),
          p = Symbol('stream');
        function b(t, e) {
          return { value: t, done: e };
        }
        function g(t) {
          var e = t[u];
          if (null !== e) {
            var n = t[p].read();
            null !== n &&
              ((t[d] = null), (t[u] = null), (t[c] = null), e(b(n, !1)));
          }
        }
        function m(t) {
          e.nextTick(g, t);
        }
        function y(t, e) {
          return function (n, r) {
            t.then(function () {
              e[h] ? n(b(void 0, !0)) : e[f](n, r);
            }, r);
          };
        }
        var v = Object.getPrototypeOf(function () {}),
          _ = Object.setPrototypeOf(
            ((r = {
              get stream() {
                return this[p];
              },
              next: function () {
                var t = this,
                  n = this[l];
                if (null !== n) return Promise.reject(n);
                if (this[h]) return Promise.resolve(b(void 0, !0));
                if (this[p].destroyed)
                  return new Promise(function (n, r) {
                    e.nextTick(function () {
                      t[l] ? r(t[l]) : n(b(void 0, !0));
                    });
                  });
                var r,
                  i = this[d];
                if (i) r = new Promise(y(i, this));
                else {
                  var s = this[p].read();
                  if (null !== s) return Promise.resolve(b(s, !1));
                  r = new Promise(this[f]);
                }
                return (this[d] = r), r;
              },
            }),
            i(r, Symbol.asyncIterator, function () {
              return this;
            }),
            i(r, 'return', function () {
              var t = this;
              return new Promise(function (e, n) {
                t[p].destroy(null, function (t) {
                  t ? n(t) : e(b(void 0, !0));
                });
              });
            }),
            r),
            v,
          ),
          w = function (t) {
            var e,
              n = Object.create(
                _,
                ((e = {}),
                i(e, p, { value: t, writable: !0 }),
                i(e, u, { value: null, writable: !0 }),
                i(e, c, { value: null, writable: !0 }),
                i(e, l, { value: null, writable: !0 }),
                i(e, h, { value: t._readableState.endEmitted, writable: !0 }),
                i(e, f, {
                  value: function (t, e) {
                    var r = n[p].read();
                    r
                      ? ((n[d] = null),
                        (n[u] = null),
                        (n[c] = null),
                        t(b(r, !1)))
                      : ((n[u] = t), (n[c] = e));
                  },
                  writable: !0,
                }),
                e),
              );
            return (
              (n[d] = null),
              a(t, function (t) {
                if (t && 'ERR_STREAM_PREMATURE_CLOSE' !== t.code) {
                  var e = n[c];
                  return (
                    null !== e &&
                      ((n[d] = null), (n[u] = null), (n[c] = null), e(t)),
                    void (n[l] = t)
                  );
                }
                var r = n[u];
                null !== r &&
                  ((n[d] = null),
                  (n[u] = null),
                  (n[c] = null),
                  r(b(void 0, !0))),
                  (n[h] = !0);
              }),
              t.on('readable', m.bind(null, n)),
              n
            );
          };
        t.exports = w;
      }).call(this, n('Q2Ig'));
    },
    ZatM: function (t, e, n) {
      'use strict';
      var r = n('kFRM').codes.ERR_STREAM_PREMATURE_CLOSE;
      function i(t) {
        var e = !1;
        return function () {
          if (!e) {
            e = !0;
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
              r[i] = arguments[i];
            t.apply(this, r);
          }
        };
      }
      function s() {}
      function o(t) {
        return t.setHeader && 'function' === typeof t.abort;
      }
      function a(t, e, n) {
        if ('function' === typeof e) return a(t, null, e);
        e || (e = {}), (n = i(n || s));
        var u = e.readable || (!1 !== e.readable && t.readable),
          c = e.writable || (!1 !== e.writable && t.writable),
          l = function () {
            t.writable || d();
          },
          h = t._writableState && t._writableState.finished,
          d = function () {
            (c = !1), (h = !0), u || n.call(t);
          },
          f = t._readableState && t._readableState.endEmitted,
          p = function () {
            (u = !1), (f = !0), c || n.call(t);
          },
          b = function (e) {
            n.call(t, e);
          },
          g = function () {
            var e;
            return u && !f
              ? ((t._readableState && t._readableState.ended) || (e = new r()),
                n.call(t, e))
              : c && !h
              ? ((t._writableState && t._writableState.ended) || (e = new r()),
                n.call(t, e))
              : void 0;
          },
          m = function () {
            t.req.on('finish', d);
          };
        return (
          o(t)
            ? (t.on('complete', d),
              t.on('abort', g),
              t.req ? m() : t.on('request', m))
            : c && !t._writableState && (t.on('end', l), t.on('close', l)),
          t.on('end', p),
          t.on('finish', d),
          !1 !== e.error && t.on('error', b),
          t.on('close', g),
          function () {
            t.removeListener('complete', d),
              t.removeListener('abort', g),
              t.removeListener('request', m),
              t.req && t.req.removeListener('finish', d),
              t.removeListener('end', l),
              t.removeListener('close', l),
              t.removeListener('finish', d),
              t.removeListener('end', p),
              t.removeListener('error', b),
              t.removeListener('close', g);
          }
        );
      }
      t.exports = a;
    },
    Zn8D: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return s;
      });
      var r = n('psW0'),
        i = n('mChF');
      function s(t) {
        return (
          void 0 === t && (t = Number.POSITIVE_INFINITY),
          Object(r['b'])(i['a'], t)
        );
      }
    },
    ZtDX: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.decrypt = e.encrypt = void 0);
      const r = n('Qann');
      async function i(t, e) {
        if (64 !== e.length) throw Error('secret must be 256 bits');
        const n = crypto.getRandomValues(new Uint8Array(12)),
          i = await crypto.subtle.importKey(
            'raw',
            (0, r.hexStringToUint8Array)(e),
            { name: 'aes-gcm' },
            !1,
            ['encrypt', 'decrypt'],
          ),
          s = new TextEncoder(),
          o = await window.crypto.subtle.encrypt(
            { name: 'AES-GCM', iv: n },
            i,
            s.encode(t),
          ),
          a = 16,
          u = o.slice(o.byteLength - a),
          c = o.slice(0, o.byteLength - a),
          l = new Uint8Array(u),
          h = new Uint8Array(c),
          d = new Uint8Array([...n, ...l, ...h]);
        return (0, r.uint8ArrayToHex)(d);
      }
      function s(t, e) {
        if (64 !== e.length) throw Error('secret must be 256 bits');
        return new Promise((n, i) => {
          !(async function () {
            const s = await crypto.subtle.importKey(
                'raw',
                (0, r.hexStringToUint8Array)(e),
                { name: 'aes-gcm' },
                !1,
                ['encrypt', 'decrypt'],
              ),
              o = (0, r.hexStringToUint8Array)(t),
              a = o.slice(0, 12),
              u = o.slice(12, 28),
              c = o.slice(28),
              l = new Uint8Array([...c, ...u]),
              h = { name: 'AES-GCM', iv: new Uint8Array(a) };
            try {
              const t = await window.crypto.subtle.decrypt(h, s, l),
                e = new TextDecoder();
              n(e.decode(t));
            } catch (d) {
              i(d);
            }
          })();
        });
      }
      (e.encrypt = i), (e.decrypt = s);
    },
    aAza: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.EthereumProviderError = e.EthereumRpcError = void 0);
      const r = n('N1pS');
      class i extends Error {
        constructor(t, e, n) {
          if (!Number.isInteger(t))
            throw new Error('"code" must be an integer.');
          if (!e || 'string' !== typeof e)
            throw new Error('"message" must be a nonempty string.');
          super(e), (this.code = t), void 0 !== n && (this.data = n);
        }
        serialize() {
          const t = { code: this.code, message: this.message };
          return (
            void 0 !== this.data && (t.data = this.data),
            this.stack && (t.stack = this.stack),
            t
          );
        }
        toString() {
          return r.default(this.serialize(), a, 2);
        }
      }
      e.EthereumRpcError = i;
      class s extends i {
        constructor(t, e, n) {
          if (!o(t))
            throw new Error(
              '"code" must be an integer such that: 1000 <= code <= 4999',
            );
          super(t, e, n);
        }
      }
      function o(t) {
        return Number.isInteger(t) && t >= 1e3 && t <= 4999;
      }
      function a(t, e) {
        if ('[Circular]' !== e) return e;
      }
      e.EthereumProviderError = s;
    },
    aKBX: function (t, e, n) {
      'use strict';
      (function (e, r) {
        var i;
        (t.exports = O), (O.ReadableState = I);
        n('+qE3').EventEmitter;
        var s = function (t, e) {
            return t.listeners(e).length;
          },
          o = n('An3H'),
          a = n('HDXh').Buffer,
          u =
            ('undefined' !== typeof e
              ? e
              : 'undefined' !== typeof window
              ? window
              : 'undefined' !== typeof self
              ? self
              : {}
            ).Uint8Array || function () {};
        function c(t) {
          return a.from(t);
        }
        function l(t) {
          return a.isBuffer(t) || t instanceof u;
        }
        var h,
          d = n(6);
        h = d && d.debuglog ? d.debuglog('stream') : function () {};
        var f,
          p,
          b,
          g = n('txxU'),
          m = n('rAwC'),
          y = n('TSgA'),
          v = y.getHighWaterMark,
          _ = n('kFRM').codes,
          w = _.ERR_INVALID_ARG_TYPE,
          S = _.ERR_STREAM_PUSH_AFTER_EOF,
          M = _.ERR_METHOD_NOT_IMPLEMENTED,
          E = _.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
        n('P7XM')(O, o);
        var x = m.errorOrDestroy,
          k = ['error', 'close', 'destroy', 'pause', 'resume'];
        function C(t, e, n) {
          if ('function' === typeof t.prependListener)
            return t.prependListener(e, n);
          t._events && t._events[e]
            ? Array.isArray(t._events[e])
              ? t._events[e].unshift(n)
              : (t._events[e] = [n, t._events[e]])
            : t.on(e, n);
        }
        function I(t, e, r) {
          (i = i || n('iKJY')),
            (t = t || {}),
            'boolean' !== typeof r && (r = e instanceof i),
            (this.objectMode = !!t.objectMode),
            r && (this.objectMode = this.objectMode || !!t.readableObjectMode),
            (this.highWaterMark = v(this, t, 'readableHighWaterMark', r)),
            (this.buffer = new g()),
            (this.length = 0),
            (this.pipes = null),
            (this.pipesCount = 0),
            (this.flowing = null),
            (this.ended = !1),
            (this.endEmitted = !1),
            (this.reading = !1),
            (this.sync = !0),
            (this.needReadable = !1),
            (this.emittedReadable = !1),
            (this.readableListening = !1),
            (this.resumeScheduled = !1),
            (this.paused = !0),
            (this.emitClose = !1 !== t.emitClose),
            (this.autoDestroy = !!t.autoDestroy),
            (this.destroyed = !1),
            (this.defaultEncoding = t.defaultEncoding || 'utf8'),
            (this.awaitDrain = 0),
            (this.readingMore = !1),
            (this.decoder = null),
            (this.encoding = null),
            t.encoding &&
              (f || (f = n('qiJe').StringDecoder),
              (this.decoder = new f(t.encoding)),
              (this.encoding = t.encoding));
        }
        function O(t) {
          if (((i = i || n('iKJY')), !(this instanceof O))) return new O(t);
          var e = this instanceof i;
          (this._readableState = new I(t, this, e)),
            (this.readable = !0),
            t &&
              ('function' === typeof t.read && (this._read = t.read),
              'function' === typeof t.destroy && (this._destroy = t.destroy)),
            o.call(this);
        }
        function j(t, e, n, r, i) {
          h('readableAddChunk', e);
          var s,
            o = t._readableState;
          if (null === e) (o.reading = !1), P(t, o);
          else if ((i || (s = R(o, e)), s)) x(t, s);
          else if (o.objectMode || (e && e.length > 0))
            if (
              ('string' === typeof e ||
                o.objectMode ||
                Object.getPrototypeOf(e) === a.prototype ||
                (e = c(e)),
              r)
            )
              o.endEmitted ? x(t, new E()) : A(t, o, e, !0);
            else if (o.ended) x(t, new S());
            else {
              if (o.destroyed) return !1;
              (o.reading = !1),
                o.decoder && !n
                  ? ((e = o.decoder.write(e)),
                    o.objectMode || 0 !== e.length ? A(t, o, e, !1) : F(t, o))
                  : A(t, o, e, !1);
            }
          else r || ((o.reading = !1), F(t, o));
          return !o.ended && (o.length < o.highWaterMark || 0 === o.length);
        }
        function A(t, e, n, r) {
          e.flowing && 0 === e.length && !e.sync
            ? ((e.awaitDrain = 0), t.emit('data', n))
            : ((e.length += e.objectMode ? 1 : n.length),
              r ? e.buffer.unshift(n) : e.buffer.push(n),
              e.needReadable && D(t)),
            F(t, e);
        }
        function R(t, e) {
          var n;
          return (
            l(e) ||
              'string' === typeof e ||
              void 0 === e ||
              t.objectMode ||
              (n = new w('chunk', ['string', 'Buffer', 'Uint8Array'], e)),
            n
          );
        }
        Object.defineProperty(O.prototype, 'destroyed', {
          enumerable: !1,
          get: function () {
            return (
              void 0 !== this._readableState && this._readableState.destroyed
            );
          },
          set: function (t) {
            this._readableState && (this._readableState.destroyed = t);
          },
        }),
          (O.prototype.destroy = m.destroy),
          (O.prototype._undestroy = m.undestroy),
          (O.prototype._destroy = function (t, e) {
            e(t);
          }),
          (O.prototype.push = function (t, e) {
            var n,
              r = this._readableState;
            return (
              r.objectMode
                ? (n = !0)
                : 'string' === typeof t &&
                  ((e = e || r.defaultEncoding),
                  e !== r.encoding && ((t = a.from(t, e)), (e = '')),
                  (n = !0)),
              j(this, t, e, !1, n)
            );
          }),
          (O.prototype.unshift = function (t) {
            return j(this, t, null, !0, !1);
          }),
          (O.prototype.isPaused = function () {
            return !1 === this._readableState.flowing;
          }),
          (O.prototype.setEncoding = function (t) {
            f || (f = n('qiJe').StringDecoder);
            var e = new f(t);
            (this._readableState.decoder = e),
              (this._readableState.encoding =
                this._readableState.decoder.encoding);
            var r = this._readableState.buffer.head,
              i = '';
            while (null !== r) (i += e.write(r.data)), (r = r.next);
            return (
              this._readableState.buffer.clear(),
              '' !== i && this._readableState.buffer.push(i),
              (this._readableState.length = i.length),
              this
            );
          });
        var N = 1073741824;
        function T(t) {
          return (
            t >= N
              ? (t = N)
              : (t--,
                (t |= t >>> 1),
                (t |= t >>> 2),
                (t |= t >>> 4),
                (t |= t >>> 8),
                (t |= t >>> 16),
                t++),
            t
          );
        }
        function L(t, e) {
          return t <= 0 || (0 === e.length && e.ended)
            ? 0
            : e.objectMode
            ? 1
            : t !== t
            ? e.flowing && e.length
              ? e.buffer.head.data.length
              : e.length
            : (t > e.highWaterMark && (e.highWaterMark = T(t)),
              t <= e.length
                ? t
                : e.ended
                ? e.length
                : ((e.needReadable = !0), 0));
        }
        function P(t, e) {
          if ((h('onEofChunk'), !e.ended)) {
            if (e.decoder) {
              var n = e.decoder.end();
              n &&
                n.length &&
                (e.buffer.push(n), (e.length += e.objectMode ? 1 : n.length));
            }
            (e.ended = !0),
              e.sync
                ? D(t)
                : ((e.needReadable = !1),
                  e.emittedReadable || ((e.emittedReadable = !0), B(t)));
          }
        }
        function D(t) {
          var e = t._readableState;
          h('emitReadable', e.needReadable, e.emittedReadable),
            (e.needReadable = !1),
            e.emittedReadable ||
              (h('emitReadable', e.flowing),
              (e.emittedReadable = !0),
              r.nextTick(B, t));
        }
        function B(t) {
          var e = t._readableState;
          h('emitReadable_', e.destroyed, e.length, e.ended),
            e.destroyed ||
              (!e.length && !e.ended) ||
              (t.emit('readable'), (e.emittedReadable = !1)),
            (e.needReadable =
              !e.flowing && !e.ended && e.length <= e.highWaterMark),
            G(t);
        }
        function F(t, e) {
          e.readingMore || ((e.readingMore = !0), r.nextTick(U, t, e));
        }
        function U(t, e) {
          while (
            !e.reading &&
            !e.ended &&
            (e.length < e.highWaterMark || (e.flowing && 0 === e.length))
          ) {
            var n = e.length;
            if ((h('maybeReadMore read 0'), t.read(0), n === e.length)) break;
          }
          e.readingMore = !1;
        }
        function H(t) {
          return function () {
            var e = t._readableState;
            h('pipeOnDrain', e.awaitDrain),
              e.awaitDrain && e.awaitDrain--,
              0 === e.awaitDrain && s(t, 'data') && ((e.flowing = !0), G(t));
          };
        }
        function W(t) {
          var e = t._readableState;
          (e.readableListening = t.listenerCount('readable') > 0),
            e.resumeScheduled && !e.paused
              ? (e.flowing = !0)
              : t.listenerCount('data') > 0 && t.resume();
        }
        function z(t) {
          h('readable nexttick read 0'), t.read(0);
        }
        function V(t, e) {
          e.resumeScheduled || ((e.resumeScheduled = !0), r.nextTick(q, t, e));
        }
        function q(t, e) {
          h('resume', e.reading),
            e.reading || t.read(0),
            (e.resumeScheduled = !1),
            t.emit('resume'),
            G(t),
            e.flowing && !e.reading && t.read(0);
        }
        function G(t) {
          var e = t._readableState;
          h('flow', e.flowing);
          while (e.flowing && null !== t.read());
        }
        function Z(t, e) {
          return 0 === e.length
            ? null
            : (e.objectMode
                ? (n = e.buffer.shift())
                : !t || t >= e.length
                ? ((n = e.decoder
                    ? e.buffer.join('')
                    : 1 === e.buffer.length
                    ? e.buffer.first()
                    : e.buffer.concat(e.length)),
                  e.buffer.clear())
                : (n = e.buffer.consume(t, e.decoder)),
              n);
          var n;
        }
        function J(t) {
          var e = t._readableState;
          h('endReadable', e.endEmitted),
            e.endEmitted || ((e.ended = !0), r.nextTick(Y, e, t));
        }
        function Y(t, e) {
          if (
            (h('endReadableNT', t.endEmitted, t.length),
            !t.endEmitted &&
              0 === t.length &&
              ((t.endEmitted = !0),
              (e.readable = !1),
              e.emit('end'),
              t.autoDestroy))
          ) {
            var n = e._writableState;
            (!n || (n.autoDestroy && n.finished)) && e.destroy();
          }
        }
        function Q(t, e) {
          for (var n = 0, r = t.length; n < r; n++) if (t[n] === e) return n;
          return -1;
        }
        (O.prototype.read = function (t) {
          h('read', t), (t = parseInt(t, 10));
          var e = this._readableState,
            n = t;
          if (
            (0 !== t && (e.emittedReadable = !1),
            0 === t &&
              e.needReadable &&
              ((0 !== e.highWaterMark
                ? e.length >= e.highWaterMark
                : e.length > 0) ||
                e.ended))
          )
            return (
              h('read: emitReadable', e.length, e.ended),
              0 === e.length && e.ended ? J(this) : D(this),
              null
            );
          if (((t = L(t, e)), 0 === t && e.ended))
            return 0 === e.length && J(this), null;
          var r,
            i = e.needReadable;
          return (
            h('need readable', i),
            (0 === e.length || e.length - t < e.highWaterMark) &&
              ((i = !0), h('length less than watermark', i)),
            e.ended || e.reading
              ? ((i = !1), h('reading or ended', i))
              : i &&
                (h('do read'),
                (e.reading = !0),
                (e.sync = !0),
                0 === e.length && (e.needReadable = !0),
                this._read(e.highWaterMark),
                (e.sync = !1),
                e.reading || (t = L(n, e))),
            (r = t > 0 ? Z(t, e) : null),
            null === r
              ? ((e.needReadable = e.length <= e.highWaterMark), (t = 0))
              : ((e.length -= t), (e.awaitDrain = 0)),
            0 === e.length &&
              (e.ended || (e.needReadable = !0), n !== t && e.ended && J(this)),
            null !== r && this.emit('data', r),
            r
          );
        }),
          (O.prototype._read = function (t) {
            x(this, new M('_read()'));
          }),
          (O.prototype.pipe = function (t, e) {
            var n = this,
              i = this._readableState;
            switch (i.pipesCount) {
              case 0:
                i.pipes = t;
                break;
              case 1:
                i.pipes = [i.pipes, t];
                break;
              default:
                i.pipes.push(t);
                break;
            }
            (i.pipesCount += 1), h('pipe count=%d opts=%j', i.pipesCount, e);
            var o = (!e || !1 !== e.end) && t !== r.stdout && t !== r.stderr,
              a = o ? c : y;
            function u(t, e) {
              h('onunpipe'),
                t === n &&
                  e &&
                  !1 === e.hasUnpiped &&
                  ((e.hasUnpiped = !0), f());
            }
            function c() {
              h('onend'), t.end();
            }
            i.endEmitted ? r.nextTick(a) : n.once('end', a), t.on('unpipe', u);
            var l = H(n);
            t.on('drain', l);
            var d = !1;
            function f() {
              h('cleanup'),
                t.removeListener('close', g),
                t.removeListener('finish', m),
                t.removeListener('drain', l),
                t.removeListener('error', b),
                t.removeListener('unpipe', u),
                n.removeListener('end', c),
                n.removeListener('end', y),
                n.removeListener('data', p),
                (d = !0),
                !i.awaitDrain ||
                  (t._writableState && !t._writableState.needDrain) ||
                  l();
            }
            function p(e) {
              h('ondata');
              var r = t.write(e);
              h('dest.write', r),
                !1 === r &&
                  (((1 === i.pipesCount && i.pipes === t) ||
                    (i.pipesCount > 1 && -1 !== Q(i.pipes, t))) &&
                    !d &&
                    (h('false write response, pause', i.awaitDrain),
                    i.awaitDrain++),
                  n.pause());
            }
            function b(e) {
              h('onerror', e),
                y(),
                t.removeListener('error', b),
                0 === s(t, 'error') && x(t, e);
            }
            function g() {
              t.removeListener('finish', m), y();
            }
            function m() {
              h('onfinish'), t.removeListener('close', g), y();
            }
            function y() {
              h('unpipe'), n.unpipe(t);
            }
            return (
              n.on('data', p),
              C(t, 'error', b),
              t.once('close', g),
              t.once('finish', m),
              t.emit('pipe', n),
              i.flowing || (h('pipe resume'), n.resume()),
              t
            );
          }),
          (O.prototype.unpipe = function (t) {
            var e = this._readableState,
              n = { hasUnpiped: !1 };
            if (0 === e.pipesCount) return this;
            if (1 === e.pipesCount)
              return (
                (t && t !== e.pipes) ||
                  (t || (t = e.pipes),
                  (e.pipes = null),
                  (e.pipesCount = 0),
                  (e.flowing = !1),
                  t && t.emit('unpipe', this, n)),
                this
              );
            if (!t) {
              var r = e.pipes,
                i = e.pipesCount;
              (e.pipes = null), (e.pipesCount = 0), (e.flowing = !1);
              for (var s = 0; s < i; s++)
                r[s].emit('unpipe', this, { hasUnpiped: !1 });
              return this;
            }
            var o = Q(e.pipes, t);
            return (
              -1 === o ||
                (e.pipes.splice(o, 1),
                (e.pipesCount -= 1),
                1 === e.pipesCount && (e.pipes = e.pipes[0]),
                t.emit('unpipe', this, n)),
              this
            );
          }),
          (O.prototype.on = function (t, e) {
            var n = o.prototype.on.call(this, t, e),
              i = this._readableState;
            return (
              'data' === t
                ? ((i.readableListening = this.listenerCount('readable') > 0),
                  !1 !== i.flowing && this.resume())
                : 'readable' === t &&
                  (i.endEmitted ||
                    i.readableListening ||
                    ((i.readableListening = i.needReadable = !0),
                    (i.flowing = !1),
                    (i.emittedReadable = !1),
                    h('on readable', i.length, i.reading),
                    i.length ? D(this) : i.reading || r.nextTick(z, this))),
              n
            );
          }),
          (O.prototype.addListener = O.prototype.on),
          (O.prototype.removeListener = function (t, e) {
            var n = o.prototype.removeListener.call(this, t, e);
            return 'readable' === t && r.nextTick(W, this), n;
          }),
          (O.prototype.removeAllListeners = function (t) {
            var e = o.prototype.removeAllListeners.apply(this, arguments);
            return ('readable' !== t && void 0 !== t) || r.nextTick(W, this), e;
          }),
          (O.prototype.resume = function () {
            var t = this._readableState;
            return (
              t.flowing ||
                (h('resume'), (t.flowing = !t.readableListening), V(this, t)),
              (t.paused = !1),
              this
            );
          }),
          (O.prototype.pause = function () {
            return (
              h('call pause flowing=%j', this._readableState.flowing),
              !1 !== this._readableState.flowing &&
                (h('pause'),
                (this._readableState.flowing = !1),
                this.emit('pause')),
              (this._readableState.paused = !0),
              this
            );
          }),
          (O.prototype.wrap = function (t) {
            var e = this,
              n = this._readableState,
              r = !1;
            for (var i in (t.on('end', function () {
              if ((h('wrapped end'), n.decoder && !n.ended)) {
                var t = n.decoder.end();
                t && t.length && e.push(t);
              }
              e.push(null);
            }),
            t.on('data', function (i) {
              if (
                (h('wrapped data'),
                n.decoder && (i = n.decoder.write(i)),
                (!n.objectMode || (null !== i && void 0 !== i)) &&
                  (n.objectMode || (i && i.length)))
              ) {
                var s = e.push(i);
                s || ((r = !0), t.pause());
              }
            }),
            t))
              void 0 === this[i] &&
                'function' === typeof t[i] &&
                (this[i] = (function (e) {
                  return function () {
                    return t[e].apply(t, arguments);
                  };
                })(i));
            for (var s = 0; s < k.length; s++)
              t.on(k[s], this.emit.bind(this, k[s]));
            return (
              (this._read = function (e) {
                h('wrapped _read', e), r && ((r = !1), t.resume());
              }),
              this
            );
          }),
          'function' === typeof Symbol &&
            (O.prototype[Symbol.asyncIterator] = function () {
              return void 0 === p && (p = n('YCz1')), p(this);
            }),
          Object.defineProperty(O.prototype, 'readableHighWaterMark', {
            enumerable: !1,
            get: function () {
              return this._readableState.highWaterMark;
            },
          }),
          Object.defineProperty(O.prototype, 'readableBuffer', {
            enumerable: !1,
            get: function () {
              return this._readableState && this._readableState.buffer;
            },
          }),
          Object.defineProperty(O.prototype, 'readableFlowing', {
            enumerable: !1,
            get: function () {
              return this._readableState.flowing;
            },
            set: function (t) {
              this._readableState && (this._readableState.flowing = t);
            },
          }),
          (O._fromList = Z),
          Object.defineProperty(O.prototype, 'readableLength', {
            enumerable: !1,
            get: function () {
              return this._readableState.length;
            },
          }),
          'function' === typeof Symbol &&
            (O.from = function (t, e) {
              return void 0 === b && (b = n('0rKm')), b(O, t, e);
            });
      }).call(this, n('IyRk'), n('Q2Ig'));
    },
    aYMp: function (t, e, n) {
      t.exports = n('yYxu')(n('JBbW'));
    },
    afKu: function (t, e, n) {
      e = t.exports = function (t) {
        t = t.toLowerCase();
        var n = e[t];
        if (!n)
          throw new Error(t + ' is not supported (we accept pull requests)');
        return new n();
      };
      (e.sha = n('CH9F')),
        (e.sha1 = n('fnjI')),
        (e.sha224 = n('cqoG')),
        (e.sha256 = n('olUY')),
        (e.sha384 = n('uDfV')),
        (e.sha512 = n('T9HO'));
    },
    ahDk: function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, 'audit', function () {
          return s;
        }),
        n.d(e, 'auditTime', function () {
          return l;
        }),
        n.d(e, 'buffer', function () {
          return h;
        }),
        n.d(e, 'bufferCount', function () {
          return b;
        }),
        n.d(e, 'bufferTime', function () {
          return _;
        }),
        n.d(e, 'bufferToggle', function () {
          return j;
        }),
        n.d(e, 'bufferWhen', function () {
          return N;
        }),
        n.d(e, 'catchError', function () {
          return P;
        }),
        n.d(e, 'combineAll', function () {
          return U;
        }),
        n.d(e, 'combineLatest', function () {
          return z;
        }),
        n.d(e, 'concat', function () {
          return q;
        }),
        n.d(e, 'concatAll', function () {
          return G['a'];
        }),
        n.d(e, 'concatMap', function () {
          return J;
        }),
        n.d(e, 'concatMapTo', function () {
          return Y;
        }),
        n.d(e, 'count', function () {
          return Q;
        }),
        n.d(e, 'debounce', function () {
          return X;
        }),
        n.d(e, 'debounceTime', function () {
          return nt;
        }),
        n.d(e, 'defaultIfEmpty', function () {
          return ot;
        }),
        n.d(e, 'delay', function () {
          return ht;
        }),
        n.d(e, 'delayWhen', function () {
          return gt;
        }),
        n.d(e, 'dematerialize', function () {
          return wt;
        }),
        n.d(e, 'distinct', function () {
          return Et;
        }),
        n.d(e, 'distinctUntilChanged', function () {
          return Ct;
        }),
        n.d(e, 'distinctUntilKeyChanged', function () {
          return jt;
        }),
        n.d(e, 'elementAt', function () {
          return Wt;
        }),
        n.d(e, 'endWith', function () {
          return Vt;
        }),
        n.d(e, 'every', function () {
          return qt;
        }),
        n.d(e, 'exhaust', function () {
          return Jt;
        }),
        n.d(e, 'exhaustMap', function () {
          return $t;
        }),
        n.d(e, 'expand', function () {
          return ee;
        }),
        n.d(e, 'filter', function () {
          return Rt['a'];
        }),
        n.d(e, 'finalize', function () {
          return ie;
        }),
        n.d(e, 'find', function () {
          return ae;
        }),
        n.d(e, 'findIndex', function () {
          return le;
        }),
        n.d(e, 'first', function () {
          return de;
        }),
        n.d(e, 'groupBy', function () {
          return fe['b'];
        }),
        n.d(e, 'ignoreElements', function () {
          return pe;
        }),
        n.d(e, 'isEmpty', function () {
          return me;
        }),
        n.d(e, 'last', function () {
          return Me;
        }),
        n.d(e, 'map', function () {
          return Kt['a'];
        }),
        n.d(e, 'mapTo', function () {
          return Ee;
        }),
        n.d(e, 'materialize', function () {
          return Ce;
        }),
        n.d(e, 'max', function () {
          return Le;
        }),
        n.d(e, 'merge', function () {
          return De;
        }),
        n.d(e, 'mergeAll', function () {
          return Be['a'];
        }),
        n.d(e, 'mergeMap', function () {
          return Z['b'];
        }),
        n.d(e, 'flatMap', function () {
          return Z['a'];
        }),
        n.d(e, 'mergeMapTo', function () {
          return Fe;
        }),
        n.d(e, 'mergeScan', function () {
          return Ue;
        }),
        n.d(e, 'min', function () {
          return ze;
        }),
        n.d(e, 'multicast', function () {
          return qe;
        }),
        n.d(e, 'observeOn', function () {
          return Ze['b'];
        }),
        n.d(e, 'onErrorResumeNext', function () {
          return Je;
        }),
        n.d(e, 'pairwise', function () {
          return Ke;
        }),
        n.d(e, 'partition', function () {
          return en;
        }),
        n.d(e, 'pluck', function () {
          return nn;
        }),
        n.d(e, 'publish', function () {
          return on;
        }),
        n.d(e, 'publishBehavior', function () {
          return un;
        }),
        n.d(e, 'publishLast', function () {
          return ln;
        }),
        n.d(e, 'publishReplay', function () {
          return dn;
        }),
        n.d(e, 'race', function () {
          return pn;
        }),
        n.d(e, 'reduce', function () {
          return Te;
        }),
        n.d(e, 'repeat', function () {
          return bn;
        }),
        n.d(e, 'repeatWhen', function () {
          return yn;
        }),
        n.d(e, 'retry', function () {
          return wn;
        }),
        n.d(e, 'retryWhen', function () {
          return En;
        }),
        n.d(e, 'refCount', function () {
          return Cn['a'];
        }),
        n.d(e, 'sample', function () {
          return In;
        }),
        n.d(e, 'sampleTime', function () {
          return An;
        }),
        n.d(e, 'scan', function () {
          return je;
        }),
        n.d(e, 'sequenceEqual', function () {
          return Ln;
        }),
        n.d(e, 'share', function () {
          return Un;
        }),
        n.d(e, 'shareReplay', function () {
          return Hn;
        }),
        n.d(e, 'single', function () {
          return zn;
        }),
        n.d(e, 'skip', function () {
          return Gn;
        }),
        n.d(e, 'skipLast', function () {
          return Yn;
        }),
        n.d(e, 'skipUntil', function () {
          return $n;
        }),
        n.d(e, 'skipWhile', function () {
          return er;
        }),
        n.d(e, 'startWith', function () {
          return ir;
        }),
        n.d(e, 'subscribeOn', function () {
          return ur;
        }),
        n.d(e, 'switchAll', function () {
          return fr;
        }),
        n.d(e, 'switchMap', function () {
          return lr;
        }),
        n.d(e, 'switchMapTo', function () {
          return pr;
        }),
        n.d(e, 'take', function () {
          return Ft;
        }),
        n.d(e, 'takeLast', function () {
          return _e;
        }),
        n.d(e, 'takeUntil', function () {
          return br;
        }),
        n.d(e, 'takeWhile', function () {
          return yr;
        }),
        n.d(e, 'tap', function () {
          return Mr;
        }),
        n.d(e, 'throttle', function () {
          return Cr;
        }),
        n.d(e, 'throttleTime', function () {
          return jr;
        }),
        n.d(e, 'throwIfEmpty', function () {
          return Tt;
        }),
        n.d(e, 'timeInterval', function () {
          return Lr;
        }),
        n.d(e, 'timeout', function () {
          return Wr;
        }),
        n.d(e, 'timeoutWith', function () {
          return Br;
        }),
        n.d(e, 'timestamp', function () {
          return zr;
        }),
        n.d(e, 'toArray', function () {
          return Gr;
        }),
        n.d(e, 'window', function () {
          return Zr;
        }),
        n.d(e, 'windowCount', function () {
          return Qr;
        }),
        n.d(e, 'windowTime', function () {
          return Xr;
        }),
        n.d(e, 'windowToggle', function () {
          return oi;
        }),
        n.d(e, 'windowWhen', function () {
          return ci;
        }),
        n.d(e, 'withLatestFrom', function () {
          return di;
        }),
        n.d(e, 'zip', function () {
          return gi;
        }),
        n.d(e, 'zipAll', function () {
          return mi;
        });
      var r = n('mrSG'),
        i = n('z4bA');
      function s(t) {
        return function (e) {
          return e.lift(new o(t));
        };
      }
      var o = (function () {
          function t(t) {
            this.durationSelector = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new a(t, this.durationSelector));
            }),
            t
          );
        })(),
        a = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return (r.durationSelector = n), (r.hasValue = !1), r;
          }
          return (
            r['__extends'](e, t),
            (e.prototype._next = function (t) {
              if (((this.value = t), (this.hasValue = !0), !this.throttled)) {
                var e = void 0;
                try {
                  var n = this.durationSelector;
                  e = n(t);
                } catch (s) {
                  return this.destination.error(s);
                }
                var r = Object(i['c'])(e, new i['a'](this));
                !r || r.closed
                  ? this.clearThrottle()
                  : this.add((this.throttled = r));
              }
            }),
            (e.prototype.clearThrottle = function () {
              var t = this,
                e = t.value,
                n = t.hasValue,
                r = t.throttled;
              r && (this.remove(r), (this.throttled = void 0), r.unsubscribe()),
                n &&
                  ((this.value = void 0),
                  (this.hasValue = !1),
                  this.destination.next(e));
            }),
            (e.prototype.notifyNext = function () {
              this.clearThrottle();
            }),
            (e.prototype.notifyComplete = function () {
              this.clearThrottle();
            }),
            e
          );
        })(i['b']),
        u = n('T1DM'),
        c = n('gI3B');
      function l(t, e) {
        return (
          void 0 === e && (e = u['a']),
          s(function () {
            return Object(c['a'])(t, e);
          })
        );
      }
      function h(t) {
        return function (e) {
          return e.lift(new d(t));
        };
      }
      var d = (function () {
          function t(t) {
            this.closingNotifier = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new f(t, this.closingNotifier));
            }),
            t
          );
        })(),
        f = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return (r.buffer = []), r.add(Object(i['c'])(n, new i['a'](r))), r;
          }
          return (
            r['__extends'](e, t),
            (e.prototype._next = function (t) {
              this.buffer.push(t);
            }),
            (e.prototype.notifyNext = function () {
              var t = this.buffer;
              (this.buffer = []), this.destination.next(t);
            }),
            e
          );
        })(i['b']),
        p = n('FFOo');
      function b(t, e) {
        return (
          void 0 === e && (e = null),
          function (n) {
            return n.lift(new g(t, e));
          }
        );
      }
      var g = (function () {
          function t(t, e) {
            (this.bufferSize = t),
              (this.startBufferEvery = e),
              (this.subscriberClass = e && t !== e ? y : m);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                new this.subscriberClass(
                  t,
                  this.bufferSize,
                  this.startBufferEvery,
                ),
              );
            }),
            t
          );
        })(),
        m = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return (r.bufferSize = n), (r.buffer = []), r;
          }
          return (
            r['__extends'](e, t),
            (e.prototype._next = function (t) {
              var e = this.buffer;
              e.push(t),
                e.length == this.bufferSize &&
                  (this.destination.next(e), (this.buffer = []));
            }),
            (e.prototype._complete = function () {
              var e = this.buffer;
              e.length > 0 && this.destination.next(e),
                t.prototype._complete.call(this);
            }),
            e
          );
        })(p['a']),
        y = (function (t) {
          function e(e, n, r) {
            var i = t.call(this, e) || this;
            return (
              (i.bufferSize = n),
              (i.startBufferEvery = r),
              (i.buffers = []),
              (i.count = 0),
              i
            );
          }
          return (
            r['__extends'](e, t),
            (e.prototype._next = function (t) {
              var e = this,
                n = e.bufferSize,
                r = e.startBufferEvery,
                i = e.buffers,
                s = e.count;
              this.count++, s % r === 0 && i.push([]);
              for (var o = i.length; o--; ) {
                var a = i[o];
                a.push(t),
                  a.length === n && (i.splice(o, 1), this.destination.next(a));
              }
            }),
            (e.prototype._complete = function () {
              var e = this,
                n = e.buffers,
                r = e.destination;
              while (n.length > 0) {
                var i = n.shift();
                i.length > 0 && r.next(i);
              }
              t.prototype._complete.call(this);
            }),
            e
          );
        })(p['a']),
        v = n('nkY7');
      function _(t) {
        var e = arguments.length,
          n = u['a'];
        Object(v['a'])(arguments[arguments.length - 1]) &&
          ((n = arguments[arguments.length - 1]), e--);
        var r = null;
        e >= 2 && (r = arguments[1]);
        var i = Number.POSITIVE_INFINITY;
        return (
          e >= 3 && (i = arguments[2]),
          function (e) {
            return e.lift(new w(t, r, i, n));
          }
        );
      }
      var w = (function () {
          function t(t, e, n, r) {
            (this.bufferTimeSpan = t),
              (this.bufferCreationInterval = e),
              (this.maxBufferSize = n),
              (this.scheduler = r);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                new M(
                  t,
                  this.bufferTimeSpan,
                  this.bufferCreationInterval,
                  this.maxBufferSize,
                  this.scheduler,
                ),
              );
            }),
            t
          );
        })(),
        S = (function () {
          function t() {
            this.buffer = [];
          }
          return t;
        })(),
        M = (function (t) {
          function e(e, n, r, i, s) {
            var o = t.call(this, e) || this;
            (o.bufferTimeSpan = n),
              (o.bufferCreationInterval = r),
              (o.maxBufferSize = i),
              (o.scheduler = s),
              (o.contexts = []);
            var a = o.openContext();
            if (((o.timespanOnly = null == r || r < 0), o.timespanOnly)) {
              var u = { subscriber: o, context: a, bufferTimeSpan: n };
              o.add((a.closeAction = s.schedule(E, n, u)));
            } else {
              var c = { subscriber: o, context: a },
                l = {
                  bufferTimeSpan: n,
                  bufferCreationInterval: r,
                  subscriber: o,
                  scheduler: s,
                };
              o.add((a.closeAction = s.schedule(k, n, c))),
                o.add(s.schedule(x, r, l));
            }
            return o;
          }
          return (
            r['__extends'](e, t),
            (e.prototype._next = function (t) {
              for (var e, n = this.contexts, r = n.length, i = 0; i < r; i++) {
                var s = n[i],
                  o = s.buffer;
                o.push(t), o.length == this.maxBufferSize && (e = s);
              }
              e && this.onBufferFull(e);
            }),
            (e.prototype._error = function (e) {
              (this.contexts.length = 0), t.prototype._error.call(this, e);
            }),
            (e.prototype._complete = function () {
              var e = this,
                n = e.contexts,
                r = e.destination;
              while (n.length > 0) {
                var i = n.shift();
                r.next(i.buffer);
              }
              t.prototype._complete.call(this);
            }),
            (e.prototype._unsubscribe = function () {
              this.contexts = null;
            }),
            (e.prototype.onBufferFull = function (t) {
              this.closeContext(t);
              var e = t.closeAction;
              if (
                (e.unsubscribe(),
                this.remove(e),
                !this.closed && this.timespanOnly)
              ) {
                t = this.openContext();
                var n = this.bufferTimeSpan,
                  r = { subscriber: this, context: t, bufferTimeSpan: n };
                this.add((t.closeAction = this.scheduler.schedule(E, n, r)));
              }
            }),
            (e.prototype.openContext = function () {
              var t = new S();
              return this.contexts.push(t), t;
            }),
            (e.prototype.closeContext = function (t) {
              this.destination.next(t.buffer);
              var e = this.contexts,
                n = e ? e.indexOf(t) : -1;
              n >= 0 && e.splice(e.indexOf(t), 1);
            }),
            e
          );
        })(p['a']);
      function E(t) {
        var e = t.subscriber,
          n = t.context;
        n && e.closeContext(n),
          e.closed ||
            ((t.context = e.openContext()),
            (t.context.closeAction = this.schedule(t, t.bufferTimeSpan)));
      }
      function x(t) {
        var e = t.bufferCreationInterval,
          n = t.bufferTimeSpan,
          r = t.subscriber,
          i = t.scheduler,
          s = r.openContext(),
          o = this;
        r.closed ||
          (r.add(
            (s.closeAction = i.schedule(k, n, { subscriber: r, context: s })),
          ),
          o.schedule(t, e));
      }
      function k(t) {
        var e = t.subscriber,
          n = t.context;
        e.closeContext(n);
      }
      var C = n('pugT'),
        I = n('zotm'),
        O = n('MGBS');
      function j(t, e) {
        return function (n) {
          return n.lift(new A(t, e));
        };
      }
      var A = (function () {
          function t(t, e) {
            (this.openings = t), (this.closingSelector = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new R(t, this.openings, this.closingSelector));
            }),
            t
          );
        })(),
        R = (function (t) {
          function e(e, n, r) {
            var i = t.call(this, e) || this;
            return (
              (i.closingSelector = r),
              (i.contexts = []),
              i.add(Object(I['a'])(i, n)),
              i
            );
          }
          return (
            r['__extends'](e, t),
            (e.prototype._next = function (t) {
              for (var e = this.contexts, n = e.length, r = 0; r < n; r++)
                e[r].buffer.push(t);
            }),
            (e.prototype._error = function (e) {
              var n = this.contexts;
              while (n.length > 0) {
                var r = n.shift();
                r.subscription.unsubscribe(),
                  (r.buffer = null),
                  (r.subscription = null);
              }
              (this.contexts = null), t.prototype._error.call(this, e);
            }),
            (e.prototype._complete = function () {
              var e = this.contexts;
              while (e.length > 0) {
                var n = e.shift();
                this.destination.next(n.buffer),
                  n.subscription.unsubscribe(),
                  (n.buffer = null),
                  (n.subscription = null);
              }
              (this.contexts = null), t.prototype._complete.call(this);
            }),
            (e.prototype.notifyNext = function (t, e) {
              t ? this.closeBuffer(t) : this.openBuffer(e);
            }),
            (e.prototype.notifyComplete = function (t) {
              this.closeBuffer(t.context);
            }),
            (e.prototype.openBuffer = function (t) {
              try {
                var e = this.closingSelector,
                  n = e.call(this, t);
                n && this.trySubscribe(n);
              } catch (r) {
                this._error(r);
              }
            }),
            (e.prototype.closeBuffer = function (t) {
              var e = this.contexts;
              if (e && t) {
                var n = t.buffer,
                  r = t.subscription;
                this.destination.next(n),
                  e.splice(e.indexOf(t), 1),
                  this.remove(r),
                  r.unsubscribe();
              }
            }),
            (e.prototype.trySubscribe = function (t) {
              var e = this.contexts,
                n = [],
                r = new C['a'](),
                i = { buffer: n, subscription: r };
              e.push(i);
              var s = Object(I['a'])(this, t, i);
              !s || s.closed
                ? this.closeBuffer(i)
                : ((s.context = i), this.add(s), r.add(s));
            }),
            e
          );
        })(O['a']);
      function N(t) {
        return function (e) {
          return e.lift(new T(t));
        };
      }
      var T = (function () {
          function t(t) {
            this.closingSelector = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new L(t, this.closingSelector));
            }),
            t
          );
        })(),
        L = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return (
              (r.closingSelector = n), (r.subscribing = !1), r.openBuffer(), r
            );
          }
          return (
            r['__extends'](e, t),
            (e.prototype._next = function (t) {
              this.buffer.push(t);
            }),
            (e.prototype._complete = function () {
              var e = this.buffer;
              e && this.destination.next(e), t.prototype._complete.call(this);
            }),
            (e.prototype._unsubscribe = function () {
              (this.buffer = void 0), (this.subscribing = !1);
            }),
            (e.prototype.notifyNext = function () {
              this.openBuffer();
            }),
            (e.prototype.notifyComplete = function () {
              this.subscribing ? this.complete() : this.openBuffer();
            }),
            (e.prototype.openBuffer = function () {
              var t = this.closingSubscription;
              t && (this.remove(t), t.unsubscribe());
              var e,
                n = this.buffer;
              this.buffer && this.destination.next(n), (this.buffer = []);
              try {
                var r = this.closingSelector;
                e = r();
              } catch (s) {
                return this.error(s);
              }
              (t = new C['a']()),
                (this.closingSubscription = t),
                this.add(t),
                (this.subscribing = !0),
                t.add(Object(i['c'])(e, new i['a'](this))),
                (this.subscribing = !1);
            }),
            e
          );
        })(i['b']);
      function P(t) {
        return function (e) {
          var n = new D(t),
            r = e.lift(n);
          return (n.caught = r);
        };
      }
      var D = (function () {
          function t(t) {
            this.selector = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new B(t, this.selector, this.caught));
            }),
            t
          );
        })(),
        B = (function (t) {
          function e(e, n, r) {
            var i = t.call(this, e) || this;
            return (i.selector = n), (i.caught = r), i;
          }
          return (
            r['__extends'](e, t),
            (e.prototype.error = function (e) {
              if (!this.isStopped) {
                var n = void 0;
                try {
                  n = this.selector(e, this.caught);
                } catch (o) {
                  return void t.prototype.error.call(this, o);
                }
                this._unsubscribeAndRecycle();
                var r = new i['a'](this);
                this.add(r);
                var s = Object(i['c'])(n, r);
                s !== r && this.add(s);
              }
            }),
            e
          );
        })(i['b']),
        F = n('dzgT');
      function U(t) {
        return function (e) {
          return e.lift(new F['a'](t));
        };
      }
      var H = n('isby'),
        W = n('0/uQ');
      function z() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var n = null;
        return (
          'function' === typeof t[t.length - 1] && (n = t.pop()),
          1 === t.length && Object(H['a'])(t[0]) && (t = t[0].slice()),
          function (e) {
            return e.lift.call(Object(W['a'])([e].concat(t)), new F['a'](n));
          }
        );
      }
      var V = n('dEwP');
      function q() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return function (e) {
          return e.lift.call(V['a'].apply(void 0, [e].concat(t)));
        };
      }
      var G = n('Txjg'),
        Z = n('psW0');
      function J(t, e) {
        return Object(Z['b'])(t, e, 1);
      }
      function Y(t, e) {
        return J(function () {
          return t;
        }, e);
      }
      function Q(t) {
        return function (e) {
          return e.lift(new K(t, e));
        };
      }
      var K = (function () {
          function t(t, e) {
            (this.predicate = t), (this.source = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new $(t, this.predicate, this.source));
            }),
            t
          );
        })(),
        $ = (function (t) {
          function e(e, n, r) {
            var i = t.call(this, e) || this;
            return (
              (i.predicate = n), (i.source = r), (i.count = 0), (i.index = 0), i
            );
          }
          return (
            r['__extends'](e, t),
            (e.prototype._next = function (t) {
              this.predicate ? this._tryPredicate(t) : this.count++;
            }),
            (e.prototype._tryPredicate = function (t) {
              var e;
              try {
                e = this.predicate(t, this.index++, this.source);
              } catch (n) {
                return void this.destination.error(n);
              }
              e && this.count++;
            }),
            (e.prototype._complete = function () {
              this.destination.next(this.count), this.destination.complete();
            }),
            e
          );
        })(p['a']);
      function X(t) {
        return function (e) {
          return e.lift(new tt(t));
        };
      }
      var tt = (function () {
          function t(t) {
            this.durationSelector = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new et(t, this.durationSelector));
            }),
            t
          );
        })(),
        et = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return (r.durationSelector = n), (r.hasValue = !1), r;
          }
          return (
            r['__extends'](e, t),
            (e.prototype._next = function (t) {
              try {
                var e = this.durationSelector.call(this, t);
                e && this._tryNext(t, e);
              } catch (n) {
                this.destination.error(n);
              }
            }),
            (e.prototype._complete = function () {
              this.emitValue(), this.destination.complete();
            }),
            (e.prototype._tryNext = function (t, e) {
              var n = this.durationSubscription;
              (this.value = t),
                (this.hasValue = !0),
                n && (n.unsubscribe(), this.remove(n)),
                (n = Object(i['c'])(e, new i['a'](this))),
                n && !n.closed && this.add((this.durationSubscription = n));
            }),
            (e.prototype.notifyNext = function () {
              this.emitValue();
            }),
            (e.prototype.notifyComplete = function () {
              this.emitValue();
            }),
            (e.prototype.emitValue = function () {
              if (this.hasValue) {
                var e = this.value,
                  n = this.durationSubscription;
                n &&
                  ((this.durationSubscription = void 0),
                  n.unsubscribe(),
                  this.remove(n)),
                  (this.value = void 0),
                  (this.hasValue = !1),
                  t.prototype._next.call(this, e);
              }
            }),
            e
          );
        })(i['b']);
      function nt(t, e) {
        return (
          void 0 === e && (e = u['a']),
          function (n) {
            return n.lift(new rt(t, e));
          }
        );
      }
      var rt = (function () {
          function t(t, e) {
            (this.dueTime = t), (this.scheduler = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new it(t, this.dueTime, this.scheduler));
            }),
            t
          );
        })(),
        it = (function (t) {
          function e(e, n, r) {
            var i = t.call(this, e) || this;
            return (
              (i.dueTime = n),
              (i.scheduler = r),
              (i.debouncedSubscription = null),
              (i.lastValue = null),
              (i.hasValue = !1),
              i
            );
          }
          return (
            r['__extends'](e, t),
            (e.prototype._next = function (t) {
              this.clearDebounce(),
                (this.lastValue = t),
                (this.hasValue = !0),
                this.add(
                  (this.debouncedSubscription = this.scheduler.schedule(
                    st,
                    this.dueTime,
                    this,
                  )),
                );
            }),
            (e.prototype._complete = function () {
              this.debouncedNext(), this.destination.complete();
            }),
            (e.prototype.debouncedNext = function () {
              if ((this.clearDebounce(), this.hasValue)) {
                var t = this.lastValue;
                (this.lastValue = null),
                  (this.hasValue = !1),
                  this.destination.next(t);
              }
            }),
            (e.prototype.clearDebounce = function () {
              var t = this.debouncedSubscription;
              null !== t &&
                (this.remove(t),
                t.unsubscribe(),
                (this.debouncedSubscription = null));
            }),
            e
          );
        })(p['a']);
      function st(t) {
        t.debouncedNext();
      }
      function ot(t) {
        return (
          void 0 === t && (t = null),
          function (e) {
            return e.lift(new at(t));
          }
        );
      }
      var at = (function () {
          function t(t) {
            this.defaultValue = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new ut(t, this.defaultValue));
            }),
            t
          );
        })(),
        ut = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return (r.defaultValue = n), (r.isEmpty = !0), r;
          }
          return (
            r['__extends'](e, t),
            (e.prototype._next = function (t) {
              (this.isEmpty = !1), this.destination.next(t);
            }),
            (e.prototype._complete = function () {
              this.isEmpty && this.destination.next(this.defaultValue),
                this.destination.complete();
            }),
            e
          );
        })(p['a']);
      function ct(t) {
        return t instanceof Date && !isNaN(+t);
      }
      var lt = n('60iU');
      function ht(t, e) {
        void 0 === e && (e = u['a']);
        var n = ct(t),
          r = n ? +t - e.now() : Math.abs(t);
        return function (t) {
          return t.lift(new dt(r, e));
        };
      }
      var dt = (function () {
          function t(t, e) {
            (this.delay = t), (this.scheduler = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new ft(t, this.delay, this.scheduler));
            }),
            t
          );
        })(),
        ft = (function (t) {
          function e(e, n, r) {
            var i = t.call(this, e) || this;
            return (
              (i.delay = n),
              (i.scheduler = r),
              (i.queue = []),
              (i.active = !1),
              (i.errored = !1),
              i
            );
          }
          return (
            r['__extends'](e, t),
            (e.dispatch = function (t) {
              var e = t.source,
                n = e.queue,
                r = t.scheduler,
                i = t.destination;
              while (n.length > 0 && n[0].time - r.now() <= 0)
                n.shift().notification.observe(i);
              if (n.length > 0) {
                var s = Math.max(0, n[0].time - r.now());
                this.schedule(t, s);
              } else this.unsubscribe(), (e.active = !1);
            }),
            (e.prototype._schedule = function (t) {
              this.active = !0;
              var n = this.destination;
              n.add(
                t.schedule(e.dispatch, this.delay, {
                  source: this,
                  destination: this.destination,
                  scheduler: t,
                }),
              );
            }),
            (e.prototype.scheduleNotification = function (t) {
              if (!0 !== this.errored) {
                var e = this.scheduler,
                  n = new pt(e.now() + this.delay, t);
                this.queue.push(n), !1 === this.active && this._schedule(e);
              }
            }),
            (e.prototype._next = function (t) {
              this.scheduleNotification(lt['a'].createNext(t));
            }),
            (e.prototype._error = function (t) {
              (this.errored = !0),
                (this.queue = []),
                this.destination.error(t),
                this.unsubscribe();
            }),
            (e.prototype._complete = function () {
              this.scheduleNotification(lt['a'].createComplete()),
                this.unsubscribe();
            }),
            e
          );
        })(p['a']),
        pt = (function () {
          function t(t, e) {
            (this.time = t), (this.notification = e);
          }
          return t;
        })(),
        bt = n('6blF');
      function gt(t, e) {
        return e
          ? function (n) {
              return new vt(n, e).lift(new mt(t));
            }
          : function (e) {
              return e.lift(new mt(t));
            };
      }
      var mt = (function () {
          function t(t) {
            this.delayDurationSelector = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new yt(t, this.delayDurationSelector));
            }),
            t
          );
        })(),
        yt = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return (
              (r.delayDurationSelector = n),
              (r.completed = !1),
              (r.delayNotifierSubscriptions = []),
              (r.index = 0),
              r
            );
          }
          return (
            r['__extends'](e, t),
            (e.prototype.notifyNext = function (t, e, n, r, i) {
              this.destination.next(t),
                this.removeSubscription(i),
                this.tryComplete();
            }),
            (e.prototype.notifyError = function (t, e) {
              this._error(t);
            }),
            (e.prototype.notifyComplete = function (t) {
              var e = this.removeSubscription(t);
              e && this.destination.next(e), this.tryComplete();
            }),
            (e.prototype._next = function (t) {
              var e = this.index++;
              try {
                var n = this.delayDurationSelector(t, e);
                n && this.tryDelay(n, t);
              } catch (r) {
                this.destination.error(r);
              }
            }),
            (e.prototype._complete = function () {
              (this.completed = !0), this.tryComplete(), this.unsubscribe();
            }),
            (e.prototype.removeSubscription = function (t) {
              t.unsubscribe();
              var e = this.delayNotifierSubscriptions.indexOf(t);
              return (
                -1 !== e && this.delayNotifierSubscriptions.splice(e, 1),
                t.outerValue
              );
            }),
            (e.prototype.tryDelay = function (t, e) {
              var n = Object(I['a'])(this, t, e);
              if (n && !n.closed) {
                var r = this.destination;
                r.add(n), this.delayNotifierSubscriptions.push(n);
              }
            }),
            (e.prototype.tryComplete = function () {
              this.completed &&
                0 === this.delayNotifierSubscriptions.length &&
                this.destination.complete();
            }),
            e
          );
        })(O['a']),
        vt = (function (t) {
          function e(e, n) {
            var r = t.call(this) || this;
            return (r.source = e), (r.subscriptionDelay = n), r;
          }
          return (
            r['__extends'](e, t),
            (e.prototype._subscribe = function (t) {
              this.subscriptionDelay.subscribe(new _t(t, this.source));
            }),
            e
          );
        })(bt['a']),
        _t = (function (t) {
          function e(e, n) {
            var r = t.call(this) || this;
            return (r.parent = e), (r.source = n), (r.sourceSubscribed = !1), r;
          }
          return (
            r['__extends'](e, t),
            (e.prototype._next = function (t) {
              this.subscribeToSource();
            }),
            (e.prototype._error = function (t) {
              this.unsubscribe(), this.parent.error(t);
            }),
            (e.prototype._complete = function () {
              this.unsubscribe(), this.subscribeToSource();
            }),
            (e.prototype.subscribeToSource = function () {
              this.sourceSubscribed ||
                ((this.sourceSubscribed = !0),
                this.unsubscribe(),
                this.source.subscribe(this.parent));
            }),
            e
          );
        })(p['a']);
      function wt() {
        return function (t) {
          return t.lift(new St());
        };
      }
      var St = (function () {
          function t() {}
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new Mt(t));
            }),
            t
          );
        })(),
        Mt = (function (t) {
          function e(e) {
            return t.call(this, e) || this;
          }
          return (
            r['__extends'](e, t),
            (e.prototype._next = function (t) {
              t.observe(this.destination);
            }),
            e
          );
        })(p['a']);
      function Et(t, e) {
        return function (n) {
          return n.lift(new xt(t, e));
        };
      }
      var xt = (function () {
          function t(t, e) {
            (this.keySelector = t), (this.flushes = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new kt(t, this.keySelector, this.flushes));
            }),
            t
          );
        })(),
        kt = (function (t) {
          function e(e, n, r) {
            var s = t.call(this, e) || this;
            return (
              (s.keySelector = n),
              (s.values = new Set()),
              r && s.add(Object(i['c'])(r, new i['a'](s))),
              s
            );
          }
          return (
            r['__extends'](e, t),
            (e.prototype.notifyNext = function () {
              this.values.clear();
            }),
            (e.prototype.notifyError = function (t) {
              this._error(t);
            }),
            (e.prototype._next = function (t) {
              this.keySelector
                ? this._useKeySelector(t)
                : this._finalizeNext(t, t);
            }),
            (e.prototype._useKeySelector = function (t) {
              var e,
                n = this.destination;
              try {
                e = this.keySelector(t);
              } catch (r) {
                return void n.error(r);
              }
              this._finalizeNext(e, t);
            }),
            (e.prototype._finalizeNext = function (t, e) {
              var n = this.values;
              n.has(t) || (n.add(t), this.destination.next(e));
            }),
            e
          );
        })(i['b']);
      function Ct(t, e) {
        return function (n) {
          return n.lift(new It(t, e));
        };
      }
      var It = (function () {
          function t(t, e) {
            (this.compare = t), (this.keySelector = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new Ot(t, this.compare, this.keySelector));
            }),
            t
          );
        })(),
        Ot = (function (t) {
          function e(e, n, r) {
            var i = t.call(this, e) || this;
            return (
              (i.keySelector = r),
              (i.hasKey = !1),
              'function' === typeof n && (i.compare = n),
              i
            );
          }
          return (
            r['__extends'](e, t),
            (e.prototype.compare = function (t, e) {
              return t === e;
            }),
            (e.prototype._next = function (t) {
              var e;
              try {
                var n = this.keySelector;
                e = n ? n(t) : t;
              } catch (s) {
                return this.destination.error(s);
              }
              var r = !1;
              if (this.hasKey)
                try {
                  var i = this.compare;
                  r = i(this.key, e);
                } catch (s) {
                  return this.destination.error(s);
                }
              else this.hasKey = !0;
              r || ((this.key = e), this.destination.next(t));
            }),
            e
          );
        })(p['a']);
      function jt(t, e) {
        return Ct(function (n, r) {
          return e ? e(n[t], r[t]) : n[t] === r[t];
        });
      }
      var At = n('b7mW'),
        Rt = n('VnD/'),
        Nt = n('3fWJ');
      function Tt(t) {
        return (
          void 0 === t && (t = Dt),
          function (e) {
            return e.lift(new Lt(t));
          }
        );
      }
      var Lt = (function () {
          function t(t) {
            this.errorFactory = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new Pt(t, this.errorFactory));
            }),
            t
          );
        })(),
        Pt = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return (r.errorFactory = n), (r.hasValue = !1), r;
          }
          return (
            r['__extends'](e, t),
            (e.prototype._next = function (t) {
              (this.hasValue = !0), this.destination.next(t);
            }),
            (e.prototype._complete = function () {
              if (this.hasValue) return this.destination.complete();
              var t = void 0;
              try {
                t = this.errorFactory();
              } catch (e) {
                t = e;
              }
              this.destination.error(t);
            }),
            e
          );
        })(p['a']);
      function Dt() {
        return new Nt['a']();
      }
      var Bt = n('G5J1');
      function Ft(t) {
        return function (e) {
          return 0 === t ? Object(Bt['b'])() : e.lift(new Ut(t));
        };
      }
      var Ut = (function () {
          function t(t) {
            if (((this.total = t), this.total < 0)) throw new At['a']();
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new Ht(t, this.total));
            }),
            t
          );
        })(),
        Ht = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return (r.total = n), (r.count = 0), r;
          }
          return (
            r['__extends'](e, t),
            (e.prototype._next = function (t) {
              var e = this.total,
                n = ++this.count;
              n <= e &&
                (this.destination.next(t),
                n === e && (this.destination.complete(), this.unsubscribe()));
            }),
            e
          );
        })(p['a']);
      function Wt(t, e) {
        if (t < 0) throw new At['a']();
        var n = arguments.length >= 2;
        return function (r) {
          return r.pipe(
            Object(Rt['a'])(function (e, n) {
              return n === t;
            }),
            Ft(1),
            n
              ? ot(e)
              : Tt(function () {
                  return new At['a']();
                }),
          );
        };
      }
      var zt = n('F/XL');
      function Vt() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return function (e) {
          return Object(V['a'])(e, zt['a'].apply(void 0, t));
        };
      }
      function qt(t, e) {
        return function (n) {
          return n.lift(new Gt(t, e, n));
        };
      }
      var Gt = (function () {
          function t(t, e, n) {
            (this.predicate = t), (this.thisArg = e), (this.source = n);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                new Zt(t, this.predicate, this.thisArg, this.source),
              );
            }),
            t
          );
        })(),
        Zt = (function (t) {
          function e(e, n, r, i) {
            var s = t.call(this, e) || this;
            return (
              (s.predicate = n),
              (s.thisArg = r),
              (s.source = i),
              (s.index = 0),
              (s.thisArg = r || s),
              s
            );
          }
          return (
            r['__extends'](e, t),
            (e.prototype.notifyComplete = function (t) {
              this.destination.next(t), this.destination.complete();
            }),
            (e.prototype._next = function (t) {
              var e = !1;
              try {
                e = this.predicate.call(
                  this.thisArg,
                  t,
                  this.index++,
                  this.source,
                );
              } catch (n) {
                return void this.destination.error(n);
              }
              e || this.notifyComplete(!1);
            }),
            (e.prototype._complete = function () {
              this.notifyComplete(!0);
            }),
            e
          );
        })(p['a']);
      function Jt() {
        return function (t) {
          return t.lift(new Yt());
        };
      }
      var Yt = (function () {
          function t() {}
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new Qt(t));
            }),
            t
          );
        })(),
        Qt = (function (t) {
          function e(e) {
            var n = t.call(this, e) || this;
            return (n.hasCompleted = !1), (n.hasSubscription = !1), n;
          }
          return (
            r['__extends'](e, t),
            (e.prototype._next = function (t) {
              this.hasSubscription ||
                ((this.hasSubscription = !0),
                this.add(Object(i['c'])(t, new i['a'](this))));
            }),
            (e.prototype._complete = function () {
              (this.hasCompleted = !0),
                this.hasSubscription || this.destination.complete();
            }),
            (e.prototype.notifyComplete = function () {
              (this.hasSubscription = !1),
                this.hasCompleted && this.destination.complete();
            }),
            e
          );
        })(i['b']),
        Kt = n('67Y/');
      function $t(t, e) {
        return e
          ? function (n) {
              return n.pipe(
                $t(function (n, r) {
                  return Object(W['a'])(t(n, r)).pipe(
                    Object(Kt['a'])(function (t, i) {
                      return e(n, t, r, i);
                    }),
                  );
                }),
              );
            }
          : function (e) {
              return e.lift(new Xt(t));
            };
      }
      var Xt = (function () {
          function t(t) {
            this.project = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new te(t, this.project));
            }),
            t
          );
        })(),
        te = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return (
              (r.project = n),
              (r.hasSubscription = !1),
              (r.hasCompleted = !1),
              (r.index = 0),
              r
            );
          }
          return (
            r['__extends'](e, t),
            (e.prototype._next = function (t) {
              this.hasSubscription || this.tryNext(t);
            }),
            (e.prototype.tryNext = function (t) {
              var e,
                n = this.index++;
              try {
                e = this.project(t, n);
              } catch (r) {
                return void this.destination.error(r);
              }
              (this.hasSubscription = !0), this._innerSub(e);
            }),
            (e.prototype._innerSub = function (t) {
              var e = new i['a'](this),
                n = this.destination;
              n.add(e);
              var r = Object(i['c'])(t, e);
              r !== e && n.add(r);
            }),
            (e.prototype._complete = function () {
              (this.hasCompleted = !0),
                this.hasSubscription || this.destination.complete(),
                this.unsubscribe();
            }),
            (e.prototype.notifyNext = function (t) {
              this.destination.next(t);
            }),
            (e.prototype.notifyError = function (t) {
              this.destination.error(t);
            }),
            (e.prototype.notifyComplete = function () {
              (this.hasSubscription = !1),
                this.hasCompleted && this.destination.complete();
            }),
            e
          );
        })(i['b']);
      function ee(t, e, n) {
        return (
          void 0 === e && (e = Number.POSITIVE_INFINITY),
          (e = (e || 0) < 1 ? Number.POSITIVE_INFINITY : e),
          function (r) {
            return r.lift(new ne(t, e, n));
          }
        );
      }
      var ne = (function () {
          function t(t, e, n) {
            (this.project = t), (this.concurrent = e), (this.scheduler = n);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                new re(t, this.project, this.concurrent, this.scheduler),
              );
            }),
            t
          );
        })(),
        re = (function (t) {
          function e(e, n, r, i) {
            var s = t.call(this, e) || this;
            return (
              (s.project = n),
              (s.concurrent = r),
              (s.scheduler = i),
              (s.index = 0),
              (s.active = 0),
              (s.hasCompleted = !1),
              r < Number.POSITIVE_INFINITY && (s.buffer = []),
              s
            );
          }
          return (
            r['__extends'](e, t),
            (e.dispatch = function (t) {
              var e = t.subscriber,
                n = t.result,
                r = t.value,
                i = t.index;
              e.subscribeToProjection(n, r, i);
            }),
            (e.prototype._next = function (t) {
              var n = this.destination;
              if (n.closed) this._complete();
              else {
                var r = this.index++;
                if (this.active < this.concurrent) {
                  n.next(t);
                  try {
                    var i = this.project,
                      s = i(t, r);
                    if (this.scheduler) {
                      var o = {
                          subscriber: this,
                          result: s,
                          value: t,
                          index: r,
                        },
                        a = this.destination;
                      a.add(this.scheduler.schedule(e.dispatch, 0, o));
                    } else this.subscribeToProjection(s, t, r);
                  } catch (u) {
                    n.error(u);
                  }
                } else this.buffer.push(t);
              }
            }),
            (e.prototype.subscribeToProjection = function (t, e, n) {
              this.active++;
              var r = this.destination;
              r.add(Object(i['c'])(t, new i['a'](this)));
            }),
            (e.prototype._complete = function () {
              (this.hasCompleted = !0),
                this.hasCompleted &&
                  0 === this.active &&
                  this.destination.complete(),
                this.unsubscribe();
            }),
            (e.prototype.notifyNext = function (t) {
              this._next(t);
            }),
            (e.prototype.notifyComplete = function () {
              var t = this.buffer;
              this.active--,
                t && t.length > 0 && this._next(t.shift()),
                this.hasCompleted &&
                  0 === this.active &&
                  this.destination.complete();
            }),
            e
          );
        })(i['b']);
      function ie(t) {
        return function (e) {
          return e.lift(new se(t));
        };
      }
      var se = (function () {
          function t(t) {
            this.callback = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new oe(t, this.callback));
            }),
            t
          );
        })(),
        oe = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return r.add(new C['a'](n)), r;
          }
          return r['__extends'](e, t), e;
        })(p['a']);
      function ae(t, e) {
        if ('function' !== typeof t)
          throw new TypeError('predicate is not a function');
        return function (n) {
          return n.lift(new ue(t, n, !1, e));
        };
      }
      var ue = (function () {
          function t(t, e, n, r) {
            (this.predicate = t),
              (this.source = e),
              (this.yieldIndex = n),
              (this.thisArg = r);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                new ce(
                  t,
                  this.predicate,
                  this.source,
                  this.yieldIndex,
                  this.thisArg,
                ),
              );
            }),
            t
          );
        })(),
        ce = (function (t) {
          function e(e, n, r, i, s) {
            var o = t.call(this, e) || this;
            return (
              (o.predicate = n),
              (o.source = r),
              (o.yieldIndex = i),
              (o.thisArg = s),
              (o.index = 0),
              o
            );
          }
          return (
            r['__extends'](e, t),
            (e.prototype.notifyComplete = function (t) {
              var e = this.destination;
              e.next(t), e.complete(), this.unsubscribe();
            }),
            (e.prototype._next = function (t) {
              var e = this,
                n = e.predicate,
                r = e.thisArg,
                i = this.index++;
              try {
                var s = n.call(r || this, t, i, this.source);
                s && this.notifyComplete(this.yieldIndex ? i : t);
              } catch (o) {
                this.destination.error(o);
              }
            }),
            (e.prototype._complete = function () {
              this.notifyComplete(this.yieldIndex ? -1 : void 0);
            }),
            e
          );
        })(p['a']);
      function le(t, e) {
        return function (n) {
          return n.lift(new ue(t, n, !0, e));
        };
      }
      var he = n('mChF');
      function de(t, e) {
        var n = arguments.length >= 2;
        return function (r) {
          return r.pipe(
            t
              ? Object(Rt['a'])(function (e, n) {
                  return t(e, n, r);
                })
              : he['a'],
            Ft(1),
            n
              ? ot(e)
              : Tt(function () {
                  return new Nt['a']();
                }),
          );
        };
      }
      var fe = n('IxPp');
      function pe() {
        return function (t) {
          return t.lift(new be());
        };
      }
      var be = (function () {
          function t() {}
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new ge(t));
            }),
            t
          );
        })(),
        ge = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return r['__extends'](e, t), (e.prototype._next = function (t) {}), e;
        })(p['a']);
      function me() {
        return function (t) {
          return t.lift(new ye());
        };
      }
      var ye = (function () {
          function t() {}
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new ve(t));
            }),
            t
          );
        })(),
        ve = (function (t) {
          function e(e) {
            return t.call(this, e) || this;
          }
          return (
            r['__extends'](e, t),
            (e.prototype.notifyComplete = function (t) {
              var e = this.destination;
              e.next(t), e.complete();
            }),
            (e.prototype._next = function (t) {
              this.notifyComplete(!1);
            }),
            (e.prototype._complete = function () {
              this.notifyComplete(!0);
            }),
            e
          );
        })(p['a']);
      function _e(t) {
        return function (e) {
          return 0 === t ? Object(Bt['b'])() : e.lift(new we(t));
        };
      }
      var we = (function () {
          function t(t) {
            if (((this.total = t), this.total < 0)) throw new At['a']();
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new Se(t, this.total));
            }),
            t
          );
        })(),
        Se = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return (r.total = n), (r.ring = new Array()), (r.count = 0), r;
          }
          return (
            r['__extends'](e, t),
            (e.prototype._next = function (t) {
              var e = this.ring,
                n = this.total,
                r = this.count++;
              if (e.length < n) e.push(t);
              else {
                var i = r % n;
                e[i] = t;
              }
            }),
            (e.prototype._complete = function () {
              var t = this.destination,
                e = this.count;
              if (e > 0)
                for (
                  var n = this.count >= this.total ? this.total : this.count,
                    r = this.ring,
                    i = 0;
                  i < n;
                  i++
                ) {
                  var s = e++ % n;
                  t.next(r[s]);
                }
              t.complete();
            }),
            e
          );
        })(p['a']);
      function Me(t, e) {
        var n = arguments.length >= 2;
        return function (r) {
          return r.pipe(
            t
              ? Object(Rt['a'])(function (e, n) {
                  return t(e, n, r);
                })
              : he['a'],
            _e(1),
            n
              ? ot(e)
              : Tt(function () {
                  return new Nt['a']();
                }),
          );
        };
      }
      function Ee(t) {
        return function (e) {
          return e.lift(new xe(t));
        };
      }
      var xe = (function () {
          function t(t) {
            this.value = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new ke(t, this.value));
            }),
            t
          );
        })(),
        ke = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return (r.value = n), r;
          }
          return (
            r['__extends'](e, t),
            (e.prototype._next = function (t) {
              this.destination.next(this.value);
            }),
            e
          );
        })(p['a']);
      function Ce() {
        return function (t) {
          return t.lift(new Ie());
        };
      }
      var Ie = (function () {
          function t() {}
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new Oe(t));
            }),
            t
          );
        })(),
        Oe = (function (t) {
          function e(e) {
            return t.call(this, e) || this;
          }
          return (
            r['__extends'](e, t),
            (e.prototype._next = function (t) {
              this.destination.next(lt['a'].createNext(t));
            }),
            (e.prototype._error = function (t) {
              var e = this.destination;
              e.next(lt['a'].createError(t)), e.complete();
            }),
            (e.prototype._complete = function () {
              var t = this.destination;
              t.next(lt['a'].createComplete()), t.complete();
            }),
            e
          );
        })(p['a']);
      function je(t, e) {
        var n = !1;
        return (
          arguments.length >= 2 && (n = !0),
          function (r) {
            return r.lift(new Ae(t, e, n));
          }
        );
      }
      var Ae = (function () {
          function t(t, e, n) {
            void 0 === n && (n = !1),
              (this.accumulator = t),
              (this.seed = e),
              (this.hasSeed = n);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                new Re(t, this.accumulator, this.seed, this.hasSeed),
              );
            }),
            t
          );
        })(),
        Re = (function (t) {
          function e(e, n, r, i) {
            var s = t.call(this, e) || this;
            return (
              (s.accumulator = n),
              (s._seed = r),
              (s.hasSeed = i),
              (s.index = 0),
              s
            );
          }
          return (
            r['__extends'](e, t),
            Object.defineProperty(e.prototype, 'seed', {
              get: function () {
                return this._seed;
              },
              set: function (t) {
                (this.hasSeed = !0), (this._seed = t);
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype._next = function (t) {
              if (this.hasSeed) return this._tryNext(t);
              (this.seed = t), this.destination.next(t);
            }),
            (e.prototype._tryNext = function (t) {
              var e,
                n = this.index++;
              try {
                e = this.accumulator(this.seed, t, n);
              } catch (r) {
                this.destination.error(r);
              }
              (this.seed = e), this.destination.next(e);
            }),
            e
          );
        })(p['a']),
        Ne = n('y3By');
      function Te(t, e) {
        return arguments.length >= 2
          ? function (n) {
              return Object(Ne['a'])(je(t, e), _e(1), ot(e))(n);
            }
          : function (e) {
              return Object(Ne['a'])(
                je(function (e, n, r) {
                  return t(e, n, r + 1);
                }),
                _e(1),
              )(e);
            };
      }
      function Le(t) {
        var e =
          'function' === typeof t
            ? function (e, n) {
                return t(e, n) > 0 ? e : n;
              }
            : function (t, e) {
                return t > e ? t : e;
              };
        return Te(e);
      }
      var Pe = n('p0ib');
      function De() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return function (e) {
          return e.lift.call(Pe['a'].apply(void 0, [e].concat(t)));
        };
      }
      var Be = n('Zn8D');
      function Fe(t, e, n) {
        return (
          void 0 === n && (n = Number.POSITIVE_INFINITY),
          'function' === typeof e
            ? Object(Z['b'])(
                function () {
                  return t;
                },
                e,
                n,
              )
            : ('number' === typeof e && (n = e),
              Object(Z['b'])(function () {
                return t;
              }, n))
        );
      }
      function Ue(t, e, n) {
        return (
          void 0 === n && (n = Number.POSITIVE_INFINITY),
          function (r) {
            return r.lift(new He(t, e, n));
          }
        );
      }
      var He = (function () {
          function t(t, e, n) {
            (this.accumulator = t), (this.seed = e), (this.concurrent = n);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                new We(t, this.accumulator, this.seed, this.concurrent),
              );
            }),
            t
          );
        })(),
        We = (function (t) {
          function e(e, n, r, i) {
            var s = t.call(this, e) || this;
            return (
              (s.accumulator = n),
              (s.acc = r),
              (s.concurrent = i),
              (s.hasValue = !1),
              (s.hasCompleted = !1),
              (s.buffer = []),
              (s.active = 0),
              (s.index = 0),
              s
            );
          }
          return (
            r['__extends'](e, t),
            (e.prototype._next = function (t) {
              if (this.active < this.concurrent) {
                var e = this.index++,
                  n = this.destination,
                  r = void 0;
                try {
                  var i = this.accumulator;
                  r = i(this.acc, t, e);
                } catch (s) {
                  return n.error(s);
                }
                this.active++, this._innerSub(r);
              } else this.buffer.push(t);
            }),
            (e.prototype._innerSub = function (t) {
              var e = new i['a'](this),
                n = this.destination;
              n.add(e);
              var r = Object(i['c'])(t, e);
              r !== e && n.add(r);
            }),
            (e.prototype._complete = function () {
              (this.hasCompleted = !0),
                0 === this.active &&
                  0 === this.buffer.length &&
                  (!1 === this.hasValue && this.destination.next(this.acc),
                  this.destination.complete()),
                this.unsubscribe();
            }),
            (e.prototype.notifyNext = function (t) {
              var e = this.destination;
              (this.acc = t), (this.hasValue = !0), e.next(t);
            }),
            (e.prototype.notifyComplete = function () {
              var t = this.buffer;
              this.active--,
                t.length > 0
                  ? this._next(t.shift())
                  : 0 === this.active &&
                    this.hasCompleted &&
                    (!1 === this.hasValue && this.destination.next(this.acc),
                    this.destination.complete());
            }),
            e
          );
        })(i['b']);
      function ze(t) {
        var e =
          'function' === typeof t
            ? function (e, n) {
                return t(e, n) < 0 ? e : n;
              }
            : function (t, e) {
                return t < e ? t : e;
              };
        return Te(e);
      }
      var Ve = n('KhEm');
      function qe(t, e) {
        return function (n) {
          var r;
          if (
            ((r =
              'function' === typeof t
                ? t
                : function () {
                    return t;
                  }),
            'function' === typeof e)
          )
            return n.lift(new Ge(r, e));
          var i = Object.create(n, Ve['b']);
          return (i.source = n), (i.subjectFactory = r), i;
        };
      }
      var Ge = (function () {
          function t(t, e) {
            (this.subjectFactory = t), (this.selector = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              var n = this.selector,
                r = this.subjectFactory(),
                i = n(r).subscribe(t);
              return i.add(e.subscribe(r)), i;
            }),
            t
          );
        })(),
        Ze = n('mZXl');
      function Je() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return (
          1 === t.length && Object(H['a'])(t[0]) && (t = t[0]),
          function (e) {
            return e.lift(new Ye(t));
          }
        );
      }
      var Ye = (function () {
          function t(t) {
            this.nextSources = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new Qe(t, this.nextSources));
            }),
            t
          );
        })(),
        Qe = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return (r.destination = e), (r.nextSources = n), r;
          }
          return (
            r['__extends'](e, t),
            (e.prototype.notifyError = function () {
              this.subscribeToNextSource();
            }),
            (e.prototype.notifyComplete = function () {
              this.subscribeToNextSource();
            }),
            (e.prototype._error = function (t) {
              this.subscribeToNextSource(), this.unsubscribe();
            }),
            (e.prototype._complete = function () {
              this.subscribeToNextSource(), this.unsubscribe();
            }),
            (e.prototype.subscribeToNextSource = function () {
              var t = this.nextSources.shift();
              if (t) {
                var e = new i['a'](this),
                  n = this.destination;
                n.add(e);
                var r = Object(i['c'])(t, e);
                r !== e && n.add(r);
              } else this.destination.complete();
            }),
            e
          );
        })(i['b']);
      function Ke() {
        return function (t) {
          return t.lift(new $e());
        };
      }
      var $e = (function () {
          function t() {}
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new Xe(t));
            }),
            t
          );
        })(),
        Xe = (function (t) {
          function e(e) {
            var n = t.call(this, e) || this;
            return (n.hasPrev = !1), n;
          }
          return (
            r['__extends'](e, t),
            (e.prototype._next = function (t) {
              var e;
              this.hasPrev ? (e = [this.prev, t]) : (this.hasPrev = !0),
                (this.prev = t),
                e && this.destination.next(e);
            }),
            e
          );
        })(p['a']),
        tn = n('jFaF');
      function en(t, e) {
        return function (n) {
          return [
            Object(Rt['a'])(t, e)(n),
            Object(Rt['a'])(Object(tn['a'])(t, e))(n),
          ];
        };
      }
      function nn() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var n = t.length;
        if (0 === n) throw new Error('list of properties cannot be empty.');
        return function (e) {
          return Object(Kt['a'])(rn(t, n))(e);
        };
      }
      function rn(t, e) {
        var n = function (n) {
          for (var r = n, i = 0; i < e; i++) {
            var s = null != r ? r[t[i]] : void 0;
            if (void 0 === s) return;
            r = s;
          }
          return r;
        };
        return n;
      }
      var sn = n('K9Ia');
      function on(t) {
        return t
          ? qe(function () {
              return new sn['a']();
            }, t)
          : qe(new sn['a']());
      }
      var an = n('26FU');
      function un(t) {
        return function (e) {
          return qe(new an['a'](t))(e);
        };
      }
      var cn = n('svcd');
      function ln() {
        return function (t) {
          return qe(new cn['a']())(t);
        };
      }
      var hn = n('S5bw');
      function dn(t, e, n, r) {
        n && 'function' !== typeof n && (r = n);
        var i = 'function' === typeof n ? n : void 0,
          s = new hn['a'](t, e, r);
        return function (t) {
          return qe(function () {
            return s;
          }, i)(t);
        };
      }
      var fn = n('W0Ae');
      function pn() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return function (e) {
          return (
            1 === t.length && Object(H['a'])(t[0]) && (t = t[0]),
            e.lift.call(fn['a'].apply(void 0, [e].concat(t)))
          );
        };
      }
      function bn(t) {
        return (
          void 0 === t && (t = -1),
          function (e) {
            return 0 === t
              ? Object(Bt['b'])()
              : t < 0
              ? e.lift(new gn(-1, e))
              : e.lift(new gn(t - 1, e));
          }
        );
      }
      var gn = (function () {
          function t(t, e) {
            (this.count = t), (this.source = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new mn(t, this.count, this.source));
            }),
            t
          );
        })(),
        mn = (function (t) {
          function e(e, n, r) {
            var i = t.call(this, e) || this;
            return (i.count = n), (i.source = r), i;
          }
          return (
            r['__extends'](e, t),
            (e.prototype.complete = function () {
              if (!this.isStopped) {
                var e = this,
                  n = e.source,
                  r = e.count;
                if (0 === r) return t.prototype.complete.call(this);
                r > -1 && (this.count = r - 1),
                  n.subscribe(this._unsubscribeAndRecycle());
              }
            }),
            e
          );
        })(p['a']);
      function yn(t) {
        return function (e) {
          return e.lift(new vn(t));
        };
      }
      var vn = (function () {
          function t(t) {
            this.notifier = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new _n(t, this.notifier, e));
            }),
            t
          );
        })(),
        _n = (function (t) {
          function e(e, n, r) {
            var i = t.call(this, e) || this;
            return (
              (i.notifier = n),
              (i.source = r),
              (i.sourceIsBeingSubscribedTo = !0),
              i
            );
          }
          return (
            r['__extends'](e, t),
            (e.prototype.notifyNext = function () {
              (this.sourceIsBeingSubscribedTo = !0),
                this.source.subscribe(this);
            }),
            (e.prototype.notifyComplete = function () {
              if (!1 === this.sourceIsBeingSubscribedTo)
                return t.prototype.complete.call(this);
            }),
            (e.prototype.complete = function () {
              if (((this.sourceIsBeingSubscribedTo = !1), !this.isStopped)) {
                if (
                  (this.retries || this.subscribeToRetries(),
                  !this.retriesSubscription || this.retriesSubscription.closed)
                )
                  return t.prototype.complete.call(this);
                this._unsubscribeAndRecycle(), this.notifications.next(void 0);
              }
            }),
            (e.prototype._unsubscribe = function () {
              var t = this,
                e = t.notifications,
                n = t.retriesSubscription;
              e && (e.unsubscribe(), (this.notifications = void 0)),
                n && (n.unsubscribe(), (this.retriesSubscription = void 0)),
                (this.retries = void 0);
            }),
            (e.prototype._unsubscribeAndRecycle = function () {
              var e = this._unsubscribe;
              return (
                (this._unsubscribe = null),
                t.prototype._unsubscribeAndRecycle.call(this),
                (this._unsubscribe = e),
                this
              );
            }),
            (e.prototype.subscribeToRetries = function () {
              var e;
              this.notifications = new sn['a']();
              try {
                var n = this.notifier;
                e = n(this.notifications);
              } catch (r) {
                return t.prototype.complete.call(this);
              }
              (this.retries = e),
                (this.retriesSubscription = Object(i['c'])(
                  e,
                  new i['a'](this),
                ));
            }),
            e
          );
        })(i['b']);
      function wn(t) {
        return (
          void 0 === t && (t = -1),
          function (e) {
            return e.lift(new Sn(t, e));
          }
        );
      }
      var Sn = (function () {
          function t(t, e) {
            (this.count = t), (this.source = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new Mn(t, this.count, this.source));
            }),
            t
          );
        })(),
        Mn = (function (t) {
          function e(e, n, r) {
            var i = t.call(this, e) || this;
            return (i.count = n), (i.source = r), i;
          }
          return (
            r['__extends'](e, t),
            (e.prototype.error = function (e) {
              if (!this.isStopped) {
                var n = this,
                  r = n.source,
                  i = n.count;
                if (0 === i) return t.prototype.error.call(this, e);
                i > -1 && (this.count = i - 1),
                  r.subscribe(this._unsubscribeAndRecycle());
              }
            }),
            e
          );
        })(p['a']);
      function En(t) {
        return function (e) {
          return e.lift(new xn(t, e));
        };
      }
      var xn = (function () {
          function t(t, e) {
            (this.notifier = t), (this.source = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new kn(t, this.notifier, this.source));
            }),
            t
          );
        })(),
        kn = (function (t) {
          function e(e, n, r) {
            var i = t.call(this, e) || this;
            return (i.notifier = n), (i.source = r), i;
          }
          return (
            r['__extends'](e, t),
            (e.prototype.error = function (e) {
              if (!this.isStopped) {
                var n = this.errors,
                  r = this.retries,
                  s = this.retriesSubscription;
                if (r)
                  (this.errors = void 0), (this.retriesSubscription = void 0);
                else {
                  n = new sn['a']();
                  try {
                    var o = this.notifier;
                    r = o(n);
                  } catch (a) {
                    return t.prototype.error.call(this, a);
                  }
                  s = Object(i['c'])(r, new i['a'](this));
                }
                this._unsubscribeAndRecycle(),
                  (this.errors = n),
                  (this.retries = r),
                  (this.retriesSubscription = s),
                  n.next(e);
              }
            }),
            (e.prototype._unsubscribe = function () {
              var t = this,
                e = t.errors,
                n = t.retriesSubscription;
              e && (e.unsubscribe(), (this.errors = void 0)),
                n && (n.unsubscribe(), (this.retriesSubscription = void 0)),
                (this.retries = void 0);
            }),
            (e.prototype.notifyNext = function () {
              var t = this._unsubscribe;
              (this._unsubscribe = null),
                this._unsubscribeAndRecycle(),
                (this._unsubscribe = t),
                this.source.subscribe(this);
            }),
            e
          );
        })(i['b']),
        Cn = n('yGWI');
      function In(t) {
        return function (e) {
          return e.lift(new On(t));
        };
      }
      var On = (function () {
          function t(t) {
            this.notifier = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              var n = new jn(t),
                r = e.subscribe(n);
              return r.add(Object(i['c'])(this.notifier, new i['a'](n))), r;
            }),
            t
          );
        })(),
        jn = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.hasValue = !1), e;
          }
          return (
            r['__extends'](e, t),
            (e.prototype._next = function (t) {
              (this.value = t), (this.hasValue = !0);
            }),
            (e.prototype.notifyNext = function () {
              this.emitValue();
            }),
            (e.prototype.notifyComplete = function () {
              this.emitValue();
            }),
            (e.prototype.emitValue = function () {
              this.hasValue &&
                ((this.hasValue = !1), this.destination.next(this.value));
            }),
            e
          );
        })(i['b']);
      function An(t, e) {
        return (
          void 0 === e && (e = u['a']),
          function (n) {
            return n.lift(new Rn(t, e));
          }
        );
      }
      var Rn = (function () {
          function t(t, e) {
            (this.period = t), (this.scheduler = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new Nn(t, this.period, this.scheduler));
            }),
            t
          );
        })(),
        Nn = (function (t) {
          function e(e, n, r) {
            var i = t.call(this, e) || this;
            return (
              (i.period = n),
              (i.scheduler = r),
              (i.hasValue = !1),
              i.add(r.schedule(Tn, n, { subscriber: i, period: n })),
              i
            );
          }
          return (
            r['__extends'](e, t),
            (e.prototype._next = function (t) {
              (this.lastValue = t), (this.hasValue = !0);
            }),
            (e.prototype.notifyNext = function () {
              this.hasValue &&
                ((this.hasValue = !1), this.destination.next(this.lastValue));
            }),
            e
          );
        })(p['a']);
      function Tn(t) {
        var e = t.subscriber,
          n = t.period;
        e.notifyNext(), this.schedule(t, n);
      }
      function Ln(t, e) {
        return function (n) {
          return n.lift(new Pn(t, e));
        };
      }
      var Pn = (function () {
          function t(t, e) {
            (this.compareTo = t), (this.comparator = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new Dn(t, this.compareTo, this.comparator));
            }),
            t
          );
        })(),
        Dn = (function (t) {
          function e(e, n, r) {
            var i = t.call(this, e) || this;
            return (
              (i.compareTo = n),
              (i.comparator = r),
              (i._a = []),
              (i._b = []),
              (i._oneComplete = !1),
              i.destination.add(n.subscribe(new Bn(e, i))),
              i
            );
          }
          return (
            r['__extends'](e, t),
            (e.prototype._next = function (t) {
              this._oneComplete && 0 === this._b.length
                ? this.emit(!1)
                : (this._a.push(t), this.checkValues());
            }),
            (e.prototype._complete = function () {
              this._oneComplete
                ? this.emit(0 === this._a.length && 0 === this._b.length)
                : (this._oneComplete = !0),
                this.unsubscribe();
            }),
            (e.prototype.checkValues = function () {
              var t = this,
                e = t._a,
                n = t._b,
                r = t.comparator;
              while (e.length > 0 && n.length > 0) {
                var i = e.shift(),
                  s = n.shift(),
                  o = !1;
                try {
                  o = r ? r(i, s) : i === s;
                } catch (a) {
                  this.destination.error(a);
                }
                o || this.emit(!1);
              }
            }),
            (e.prototype.emit = function (t) {
              var e = this.destination;
              e.next(t), e.complete();
            }),
            (e.prototype.nextB = function (t) {
              this._oneComplete && 0 === this._a.length
                ? this.emit(!1)
                : (this._b.push(t), this.checkValues());
            }),
            (e.prototype.completeB = function () {
              this._oneComplete
                ? this.emit(0 === this._a.length && 0 === this._b.length)
                : (this._oneComplete = !0);
            }),
            e
          );
        })(p['a']),
        Bn = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return (r.parent = n), r;
          }
          return (
            r['__extends'](e, t),
            (e.prototype._next = function (t) {
              this.parent.nextB(t);
            }),
            (e.prototype._error = function (t) {
              this.parent.error(t), this.unsubscribe();
            }),
            (e.prototype._complete = function () {
              this.parent.completeB(), this.unsubscribe();
            }),
            e
          );
        })(p['a']);
      function Fn() {
        return new sn['a']();
      }
      function Un() {
        return function (t) {
          return Object(Cn['a'])()(qe(Fn)(t));
        };
      }
      function Hn(t, e, n) {
        var r;
        return (
          (r =
            t && 'object' === typeof t
              ? t
              : { bufferSize: t, windowTime: e, refCount: !1, scheduler: n }),
          function (t) {
            return t.lift(Wn(r));
          }
        );
      }
      function Wn(t) {
        var e,
          n,
          r = t.bufferSize,
          i = void 0 === r ? Number.POSITIVE_INFINITY : r,
          s = t.windowTime,
          o = void 0 === s ? Number.POSITIVE_INFINITY : s,
          a = t.refCount,
          u = t.scheduler,
          c = 0,
          l = !1,
          h = !1;
        return function (t) {
          var r;
          c++,
            !e || l
              ? ((l = !1),
                (e = new hn['a'](i, o, u)),
                (r = e.subscribe(this)),
                (n = t.subscribe({
                  next: function (t) {
                    e.next(t);
                  },
                  error: function (t) {
                    (l = !0), e.error(t);
                  },
                  complete: function () {
                    (h = !0), (n = void 0), e.complete();
                  },
                })),
                h && (n = void 0))
              : (r = e.subscribe(this)),
            this.add(function () {
              c--,
                r.unsubscribe(),
                (r = void 0),
                n &&
                  !h &&
                  a &&
                  0 === c &&
                  (n.unsubscribe(), (n = void 0), (e = void 0));
            });
        };
      }
      function zn(t) {
        return function (e) {
          return e.lift(new Vn(t, e));
        };
      }
      var Vn = (function () {
          function t(t, e) {
            (this.predicate = t), (this.source = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new qn(t, this.predicate, this.source));
            }),
            t
          );
        })(),
        qn = (function (t) {
          function e(e, n, r) {
            var i = t.call(this, e) || this;
            return (
              (i.predicate = n),
              (i.source = r),
              (i.seenValue = !1),
              (i.index = 0),
              i
            );
          }
          return (
            r['__extends'](e, t),
            (e.prototype.applySingleValue = function (t) {
              this.seenValue
                ? this.destination.error(
                    'Sequence contains more than one element',
                  )
                : ((this.seenValue = !0), (this.singleValue = t));
            }),
            (e.prototype._next = function (t) {
              var e = this.index++;
              this.predicate ? this.tryNext(t, e) : this.applySingleValue(t);
            }),
            (e.prototype.tryNext = function (t, e) {
              try {
                this.predicate(t, e, this.source) && this.applySingleValue(t);
              } catch (n) {
                this.destination.error(n);
              }
            }),
            (e.prototype._complete = function () {
              var t = this.destination;
              this.index > 0
                ? (t.next(this.seenValue ? this.singleValue : void 0),
                  t.complete())
                : t.error(new Nt['a']());
            }),
            e
          );
        })(p['a']);
      function Gn(t) {
        return function (e) {
          return e.lift(new Zn(t));
        };
      }
      var Zn = (function () {
          function t(t) {
            this.total = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new Jn(t, this.total));
            }),
            t
          );
        })(),
        Jn = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return (r.total = n), (r.count = 0), r;
          }
          return (
            r['__extends'](e, t),
            (e.prototype._next = function (t) {
              ++this.count > this.total && this.destination.next(t);
            }),
            e
          );
        })(p['a']);
      function Yn(t) {
        return function (e) {
          return e.lift(new Qn(t));
        };
      }
      var Qn = (function () {
          function t(t) {
            if (((this._skipCount = t), this._skipCount < 0))
              throw new At['a']();
          }
          return (
            (t.prototype.call = function (t, e) {
              return 0 === this._skipCount
                ? e.subscribe(new p['a'](t))
                : e.subscribe(new Kn(t, this._skipCount));
            }),
            t
          );
        })(),
        Kn = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return (
              (r._skipCount = n), (r._count = 0), (r._ring = new Array(n)), r
            );
          }
          return (
            r['__extends'](e, t),
            (e.prototype._next = function (t) {
              var e = this._skipCount,
                n = this._count++;
              if (n < e) this._ring[n] = t;
              else {
                var r = n % e,
                  i = this._ring,
                  s = i[r];
                (i[r] = t), this.destination.next(s);
              }
            }),
            e
          );
        })(p['a']);
      function $n(t) {
        return function (e) {
          return e.lift(new Xn(t));
        };
      }
      var Xn = (function () {
          function t(t) {
            this.notifier = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new tr(t, this.notifier));
            }),
            t
          );
        })(),
        tr = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            r.hasValue = !1;
            var s = new i['a'](r);
            r.add(s), (r.innerSubscription = s);
            var o = Object(i['c'])(n, s);
            return o !== s && (r.add(o), (r.innerSubscription = o)), r;
          }
          return (
            r['__extends'](e, t),
            (e.prototype._next = function (e) {
              this.hasValue && t.prototype._next.call(this, e);
            }),
            (e.prototype.notifyNext = function () {
              (this.hasValue = !0),
                this.innerSubscription && this.innerSubscription.unsubscribe();
            }),
            (e.prototype.notifyComplete = function () {}),
            e
          );
        })(i['b']);
      function er(t) {
        return function (e) {
          return e.lift(new nr(t));
        };
      }
      var nr = (function () {
          function t(t) {
            this.predicate = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new rr(t, this.predicate));
            }),
            t
          );
        })(),
        rr = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return (r.predicate = n), (r.skipping = !0), (r.index = 0), r;
          }
          return (
            r['__extends'](e, t),
            (e.prototype._next = function (t) {
              var e = this.destination;
              this.skipping && this.tryCallPredicate(t),
                this.skipping || e.next(t);
            }),
            (e.prototype.tryCallPredicate = function (t) {
              try {
                var e = this.predicate(t, this.index++);
                this.skipping = Boolean(e);
              } catch (n) {
                this.destination.error(n);
              }
            }),
            e
          );
        })(p['a']);
      function ir() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var n = t[t.length - 1];
        return Object(v['a'])(n)
          ? (t.pop(),
            function (e) {
              return Object(V['a'])(t, e, n);
            })
          : function (e) {
              return Object(V['a'])(t, e);
            };
      }
      var sr = n('KQya'),
        or = n('/21U'),
        ar = (function (t) {
          function e(e, n, r) {
            void 0 === n && (n = 0), void 0 === r && (r = sr['a']);
            var i = t.call(this) || this;
            return (
              (i.source = e),
              (i.delayTime = n),
              (i.scheduler = r),
              (!Object(or['a'])(n) || n < 0) && (i.delayTime = 0),
              (r && 'function' === typeof r.schedule) ||
                (i.scheduler = sr['a']),
              i
            );
          }
          return (
            r['__extends'](e, t),
            (e.create = function (t, n, r) {
              return (
                void 0 === n && (n = 0),
                void 0 === r && (r = sr['a']),
                new e(t, n, r)
              );
            }),
            (e.dispatch = function (t) {
              var e = t.source,
                n = t.subscriber;
              return this.add(e.subscribe(n));
            }),
            (e.prototype._subscribe = function (t) {
              var n = this.delayTime,
                r = this.source,
                i = this.scheduler;
              return i.schedule(e.dispatch, n, { source: r, subscriber: t });
            }),
            e
          );
        })(bt['a']);
      function ur(t, e) {
        return (
          void 0 === e && (e = 0),
          function (n) {
            return n.lift(new cr(t, e));
          }
        );
      }
      var cr = (function () {
        function t(t, e) {
          (this.scheduler = t), (this.delay = e);
        }
        return (
          (t.prototype.call = function (t, e) {
            return new ar(e, this.delay, this.scheduler).subscribe(t);
          }),
          t
        );
      })();
      function lr(t, e) {
        return 'function' === typeof e
          ? function (n) {
              return n.pipe(
                lr(function (n, r) {
                  return Object(W['a'])(t(n, r)).pipe(
                    Object(Kt['a'])(function (t, i) {
                      return e(n, t, r, i);
                    }),
                  );
                }),
              );
            }
          : function (e) {
              return e.lift(new hr(t));
            };
      }
      var hr = (function () {
          function t(t) {
            this.project = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new dr(t, this.project));
            }),
            t
          );
        })(),
        dr = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return (r.project = n), (r.index = 0), r;
          }
          return (
            r['__extends'](e, t),
            (e.prototype._next = function (t) {
              var e,
                n = this.index++;
              try {
                e = this.project(t, n);
              } catch (r) {
                return void this.destination.error(r);
              }
              this._innerSub(e);
            }),
            (e.prototype._innerSub = function (t) {
              var e = this.innerSubscription;
              e && e.unsubscribe();
              var n = new i['a'](this),
                r = this.destination;
              r.add(n),
                (this.innerSubscription = Object(i['c'])(t, n)),
                this.innerSubscription !== n && r.add(this.innerSubscription);
            }),
            (e.prototype._complete = function () {
              var e = this.innerSubscription;
              (e && !e.closed) || t.prototype._complete.call(this),
                this.unsubscribe();
            }),
            (e.prototype._unsubscribe = function () {
              this.innerSubscription = void 0;
            }),
            (e.prototype.notifyComplete = function () {
              (this.innerSubscription = void 0),
                this.isStopped && t.prototype._complete.call(this);
            }),
            (e.prototype.notifyNext = function (t) {
              this.destination.next(t);
            }),
            e
          );
        })(i['b']);
      function fr() {
        return lr(he['a']);
      }
      function pr(t, e) {
        return e
          ? lr(function () {
              return t;
            }, e)
          : lr(function () {
              return t;
            });
      }
      function br(t) {
        return function (e) {
          return e.lift(new gr(t));
        };
      }
      var gr = (function () {
          function t(t) {
            this.notifier = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              var n = new mr(t),
                r = Object(i['c'])(this.notifier, new i['a'](n));
              return r && !n.seenValue ? (n.add(r), e.subscribe(n)) : n;
            }),
            t
          );
        })(),
        mr = (function (t) {
          function e(e) {
            var n = t.call(this, e) || this;
            return (n.seenValue = !1), n;
          }
          return (
            r['__extends'](e, t),
            (e.prototype.notifyNext = function () {
              (this.seenValue = !0), this.complete();
            }),
            (e.prototype.notifyComplete = function () {}),
            e
          );
        })(i['b']);
      function yr(t, e) {
        return (
          void 0 === e && (e = !1),
          function (n) {
            return n.lift(new vr(t, e));
          }
        );
      }
      var vr = (function () {
          function t(t, e) {
            (this.predicate = t), (this.inclusive = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new _r(t, this.predicate, this.inclusive));
            }),
            t
          );
        })(),
        _r = (function (t) {
          function e(e, n, r) {
            var i = t.call(this, e) || this;
            return (i.predicate = n), (i.inclusive = r), (i.index = 0), i;
          }
          return (
            r['__extends'](e, t),
            (e.prototype._next = function (t) {
              var e,
                n = this.destination;
              try {
                e = this.predicate(t, this.index++);
              } catch (r) {
                return void n.error(r);
              }
              this.nextOrComplete(t, e);
            }),
            (e.prototype.nextOrComplete = function (t, e) {
              var n = this.destination;
              Boolean(e)
                ? n.next(t)
                : (this.inclusive && n.next(t), n.complete());
            }),
            e
          );
        })(p['a']),
        wr = n('+umK'),
        Sr = n('2Bdj');
      function Mr(t, e, n) {
        return function (r) {
          return r.lift(new Er(t, e, n));
        };
      }
      var Er = (function () {
          function t(t, e, n) {
            (this.nextOrObserver = t), (this.error = e), (this.complete = n);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                new xr(t, this.nextOrObserver, this.error, this.complete),
              );
            }),
            t
          );
        })(),
        xr = (function (t) {
          function e(e, n, r, i) {
            var s = t.call(this, e) || this;
            return (
              (s._tapNext = wr['a']),
              (s._tapError = wr['a']),
              (s._tapComplete = wr['a']),
              (s._tapError = r || wr['a']),
              (s._tapComplete = i || wr['a']),
              Object(Sr['a'])(n)
                ? ((s._context = s), (s._tapNext = n))
                : n &&
                  ((s._context = n),
                  (s._tapNext = n.next || wr['a']),
                  (s._tapError = n.error || wr['a']),
                  (s._tapComplete = n.complete || wr['a'])),
              s
            );
          }
          return (
            r['__extends'](e, t),
            (e.prototype._next = function (t) {
              try {
                this._tapNext.call(this._context, t);
              } catch (e) {
                return void this.destination.error(e);
              }
              this.destination.next(t);
            }),
            (e.prototype._error = function (t) {
              try {
                this._tapError.call(this._context, t);
              } catch (t) {
                return void this.destination.error(t);
              }
              this.destination.error(t);
            }),
            (e.prototype._complete = function () {
              try {
                this._tapComplete.call(this._context);
              } catch (t) {
                return void this.destination.error(t);
              }
              return this.destination.complete();
            }),
            e
          );
        })(p['a']),
        kr = { leading: !0, trailing: !1 };
      function Cr(t, e) {
        return (
          void 0 === e && (e = kr),
          function (n) {
            return n.lift(new Ir(t, !!e.leading, !!e.trailing));
          }
        );
      }
      var Ir = (function () {
          function t(t, e, n) {
            (this.durationSelector = t),
              (this.leading = e),
              (this.trailing = n);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                new Or(t, this.durationSelector, this.leading, this.trailing),
              );
            }),
            t
          );
        })(),
        Or = (function (t) {
          function e(e, n, r, i) {
            var s = t.call(this, e) || this;
            return (
              (s.destination = e),
              (s.durationSelector = n),
              (s._leading = r),
              (s._trailing = i),
              (s._hasValue = !1),
              s
            );
          }
          return (
            r['__extends'](e, t),
            (e.prototype._next = function (t) {
              (this._hasValue = !0),
                (this._sendValue = t),
                this._throttled ||
                  (this._leading ? this.send() : this.throttle(t));
            }),
            (e.prototype.send = function () {
              var t = this,
                e = t._hasValue,
                n = t._sendValue;
              e && (this.destination.next(n), this.throttle(n)),
                (this._hasValue = !1),
                (this._sendValue = void 0);
            }),
            (e.prototype.throttle = function (t) {
              var e = this.tryDurationSelector(t);
              e &&
                this.add(
                  (this._throttled = Object(i['c'])(e, new i['a'](this))),
                );
            }),
            (e.prototype.tryDurationSelector = function (t) {
              try {
                return this.durationSelector(t);
              } catch (e) {
                return this.destination.error(e), null;
              }
            }),
            (e.prototype.throttlingDone = function () {
              var t = this,
                e = t._throttled,
                n = t._trailing;
              e && e.unsubscribe(),
                (this._throttled = void 0),
                n && this.send();
            }),
            (e.prototype.notifyNext = function () {
              this.throttlingDone();
            }),
            (e.prototype.notifyComplete = function () {
              this.throttlingDone();
            }),
            e
          );
        })(i['b']);
      function jr(t, e, n) {
        return (
          void 0 === e && (e = u['a']),
          void 0 === n && (n = kr),
          function (r) {
            return r.lift(new Ar(t, e, n.leading, n.trailing));
          }
        );
      }
      var Ar = (function () {
          function t(t, e, n, r) {
            (this.duration = t),
              (this.scheduler = e),
              (this.leading = n),
              (this.trailing = r);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                new Rr(
                  t,
                  this.duration,
                  this.scheduler,
                  this.leading,
                  this.trailing,
                ),
              );
            }),
            t
          );
        })(),
        Rr = (function (t) {
          function e(e, n, r, i, s) {
            var o = t.call(this, e) || this;
            return (
              (o.duration = n),
              (o.scheduler = r),
              (o.leading = i),
              (o.trailing = s),
              (o._hasTrailingValue = !1),
              (o._trailingValue = null),
              o
            );
          }
          return (
            r['__extends'](e, t),
            (e.prototype._next = function (t) {
              this.throttled
                ? this.trailing &&
                  ((this._trailingValue = t), (this._hasTrailingValue = !0))
                : (this.add(
                    (this.throttled = this.scheduler.schedule(
                      Nr,
                      this.duration,
                      { subscriber: this },
                    )),
                  ),
                  this.leading
                    ? this.destination.next(t)
                    : this.trailing &&
                      ((this._trailingValue = t),
                      (this._hasTrailingValue = !0)));
            }),
            (e.prototype._complete = function () {
              this._hasTrailingValue
                ? (this.destination.next(this._trailingValue),
                  this.destination.complete())
                : this.destination.complete();
            }),
            (e.prototype.clearThrottle = function () {
              var t = this.throttled;
              t &&
                (this.trailing &&
                  this._hasTrailingValue &&
                  (this.destination.next(this._trailingValue),
                  (this._trailingValue = null),
                  (this._hasTrailingValue = !1)),
                t.unsubscribe(),
                this.remove(t),
                (this.throttled = null));
            }),
            e
          );
        })(p['a']);
      function Nr(t) {
        var e = t.subscriber;
        e.clearThrottle();
      }
      var Tr = n('lYZG');
      function Lr(t) {
        return (
          void 0 === t && (t = u['a']),
          function (e) {
            return Object(Tr['a'])(function () {
              return e.pipe(
                je(
                  function (e, n) {
                    var r = e.current;
                    return { value: n, current: t.now(), last: r };
                  },
                  { current: t.now(), value: void 0, last: void 0 },
                ),
                Object(Kt['a'])(function (t) {
                  var e = t.current,
                    n = t.last,
                    r = t.value;
                  return new Pr(r, e - n);
                }),
              );
            });
          }
        );
      }
      var Pr = (function () {
          function t(t, e) {
            (this.value = t), (this.interval = e);
          }
          return t;
        })(),
        Dr = n('3U0i');
      function Br(t, e, n) {
        return (
          void 0 === n && (n = u['a']),
          function (r) {
            var i = ct(t),
              s = i ? +t - n.now() : Math.abs(t);
            return r.lift(new Fr(s, i, e, n));
          }
        );
      }
      var Fr = (function () {
          function t(t, e, n, r) {
            (this.waitFor = t),
              (this.absoluteTimeout = e),
              (this.withObservable = n),
              (this.scheduler = r);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                new Ur(
                  t,
                  this.absoluteTimeout,
                  this.waitFor,
                  this.withObservable,
                  this.scheduler,
                ),
              );
            }),
            t
          );
        })(),
        Ur = (function (t) {
          function e(e, n, r, i, s) {
            var o = t.call(this, e) || this;
            return (
              (o.absoluteTimeout = n),
              (o.waitFor = r),
              (o.withObservable = i),
              (o.scheduler = s),
              o.scheduleTimeout(),
              o
            );
          }
          return (
            r['__extends'](e, t),
            (e.dispatchTimeout = function (t) {
              var e = t.withObservable;
              t._unsubscribeAndRecycle(),
                t.add(Object(i['c'])(e, new i['a'](t)));
            }),
            (e.prototype.scheduleTimeout = function () {
              var t = this.action;
              t
                ? (this.action = t.schedule(this, this.waitFor))
                : this.add(
                    (this.action = this.scheduler.schedule(
                      e.dispatchTimeout,
                      this.waitFor,
                      this,
                    )),
                  );
            }),
            (e.prototype._next = function (e) {
              this.absoluteTimeout || this.scheduleTimeout(),
                t.prototype._next.call(this, e);
            }),
            (e.prototype._unsubscribe = function () {
              (this.action = void 0),
                (this.scheduler = null),
                (this.withObservable = null);
            }),
            e
          );
        })(i['b']),
        Hr = n('XlPw');
      function Wr(t, e) {
        return (
          void 0 === e && (e = u['a']), Br(t, Object(Hr['a'])(new Dr['a']()), e)
        );
      }
      function zr(t) {
        return (
          void 0 === t && (t = u['a']),
          Object(Kt['a'])(function (e) {
            return new Vr(e, t.now());
          })
        );
      }
      var Vr = (function () {
        function t(t, e) {
          (this.value = t), (this.timestamp = e);
        }
        return t;
      })();
      function qr(t, e, n) {
        return 0 === n ? [e] : (t.push(e), t);
      }
      function Gr() {
        return Te(qr, []);
      }
      function Zr(t) {
        return function (e) {
          return e.lift(new Jr(t));
        };
      }
      var Jr = (function () {
          function t(t) {
            this.windowBoundaries = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              var n = new Yr(t),
                r = e.subscribe(n);
              return (
                r.closed ||
                  n.add(Object(i['c'])(this.windowBoundaries, new i['a'](n))),
                r
              );
            }),
            t
          );
        })(),
        Yr = (function (t) {
          function e(e) {
            var n = t.call(this, e) || this;
            return (n.window = new sn['a']()), e.next(n.window), n;
          }
          return (
            r['__extends'](e, t),
            (e.prototype.notifyNext = function () {
              this.openWindow();
            }),
            (e.prototype.notifyError = function (t) {
              this._error(t);
            }),
            (e.prototype.notifyComplete = function () {
              this._complete();
            }),
            (e.prototype._next = function (t) {
              this.window.next(t);
            }),
            (e.prototype._error = function (t) {
              this.window.error(t), this.destination.error(t);
            }),
            (e.prototype._complete = function () {
              this.window.complete(), this.destination.complete();
            }),
            (e.prototype._unsubscribe = function () {
              this.window = null;
            }),
            (e.prototype.openWindow = function () {
              var t = this.window;
              t && t.complete();
              var e = this.destination,
                n = (this.window = new sn['a']());
              e.next(n);
            }),
            e
          );
        })(i['b']);
      function Qr(t, e) {
        return (
          void 0 === e && (e = 0),
          function (n) {
            return n.lift(new Kr(t, e));
          }
        );
      }
      var Kr = (function () {
          function t(t, e) {
            (this.windowSize = t), (this.startWindowEvery = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                new $r(t, this.windowSize, this.startWindowEvery),
              );
            }),
            t
          );
        })(),
        $r = (function (t) {
          function e(e, n, r) {
            var i = t.call(this, e) || this;
            return (
              (i.destination = e),
              (i.windowSize = n),
              (i.startWindowEvery = r),
              (i.windows = [new sn['a']()]),
              (i.count = 0),
              e.next(i.windows[0]),
              i
            );
          }
          return (
            r['__extends'](e, t),
            (e.prototype._next = function (t) {
              for (
                var e =
                    this.startWindowEvery > 0
                      ? this.startWindowEvery
                      : this.windowSize,
                  n = this.destination,
                  r = this.windowSize,
                  i = this.windows,
                  s = i.length,
                  o = 0;
                o < s && !this.closed;
                o++
              )
                i[o].next(t);
              var a = this.count - r + 1;
              if (
                (a >= 0 && a % e === 0 && !this.closed && i.shift().complete(),
                ++this.count % e === 0 && !this.closed)
              ) {
                var u = new sn['a']();
                i.push(u), n.next(u);
              }
            }),
            (e.prototype._error = function (t) {
              var e = this.windows;
              if (e) while (e.length > 0 && !this.closed) e.shift().error(t);
              this.destination.error(t);
            }),
            (e.prototype._complete = function () {
              var t = this.windows;
              if (t) while (t.length > 0 && !this.closed) t.shift().complete();
              this.destination.complete();
            }),
            (e.prototype._unsubscribe = function () {
              (this.count = 0), (this.windows = null);
            }),
            e
          );
        })(p['a']);
      function Xr(t) {
        var e = u['a'],
          n = null,
          r = Number.POSITIVE_INFINITY;
        return (
          Object(v['a'])(arguments[3]) && (e = arguments[3]),
          Object(v['a'])(arguments[2])
            ? (e = arguments[2])
            : Object(or['a'])(arguments[2]) && (r = Number(arguments[2])),
          Object(v['a'])(arguments[1])
            ? (e = arguments[1])
            : Object(or['a'])(arguments[1]) && (n = Number(arguments[1])),
          function (i) {
            return i.lift(new ti(t, n, r, e));
          }
        );
      }
      var ti = (function () {
          function t(t, e, n, r) {
            (this.windowTimeSpan = t),
              (this.windowCreationInterval = e),
              (this.maxWindowSize = n),
              (this.scheduler = r);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                new ni(
                  t,
                  this.windowTimeSpan,
                  this.windowCreationInterval,
                  this.maxWindowSize,
                  this.scheduler,
                ),
              );
            }),
            t
          );
        })(),
        ei = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e._numberOfNextedValues = 0), e;
          }
          return (
            r['__extends'](e, t),
            (e.prototype.next = function (e) {
              this._numberOfNextedValues++, t.prototype.next.call(this, e);
            }),
            Object.defineProperty(e.prototype, 'numberOfNextedValues', {
              get: function () {
                return this._numberOfNextedValues;
              },
              enumerable: !0,
              configurable: !0,
            }),
            e
          );
        })(sn['a']),
        ni = (function (t) {
          function e(e, n, r, i, s) {
            var o = t.call(this, e) || this;
            (o.destination = e),
              (o.windowTimeSpan = n),
              (o.windowCreationInterval = r),
              (o.maxWindowSize = i),
              (o.scheduler = s),
              (o.windows = []);
            var a = o.openWindow();
            if (null !== r && r >= 0) {
              var u = { subscriber: o, window: a, context: null },
                c = {
                  windowTimeSpan: n,
                  windowCreationInterval: r,
                  subscriber: o,
                  scheduler: s,
                };
              o.add(s.schedule(si, n, u)), o.add(s.schedule(ii, r, c));
            } else {
              var l = { subscriber: o, window: a, windowTimeSpan: n };
              o.add(s.schedule(ri, n, l));
            }
            return o;
          }
          return (
            r['__extends'](e, t),
            (e.prototype._next = function (t) {
              for (var e = this.windows, n = e.length, r = 0; r < n; r++) {
                var i = e[r];
                i.closed ||
                  (i.next(t),
                  i.numberOfNextedValues >= this.maxWindowSize &&
                    this.closeWindow(i));
              }
            }),
            (e.prototype._error = function (t) {
              var e = this.windows;
              while (e.length > 0) e.shift().error(t);
              this.destination.error(t);
            }),
            (e.prototype._complete = function () {
              var t = this.windows;
              while (t.length > 0) {
                var e = t.shift();
                e.closed || e.complete();
              }
              this.destination.complete();
            }),
            (e.prototype.openWindow = function () {
              var t = new ei();
              this.windows.push(t);
              var e = this.destination;
              return e.next(t), t;
            }),
            (e.prototype.closeWindow = function (t) {
              t.complete();
              var e = this.windows;
              e.splice(e.indexOf(t), 1);
            }),
            e
          );
        })(p['a']);
      function ri(t) {
        var e = t.subscriber,
          n = t.windowTimeSpan,
          r = t.window;
        r && e.closeWindow(r), (t.window = e.openWindow()), this.schedule(t, n);
      }
      function ii(t) {
        var e = t.windowTimeSpan,
          n = t.subscriber,
          r = t.scheduler,
          i = t.windowCreationInterval,
          s = n.openWindow(),
          o = this,
          a = { action: o, subscription: null },
          u = { subscriber: n, window: s, context: a };
        (a.subscription = r.schedule(si, e, u)),
          o.add(a.subscription),
          o.schedule(t, i);
      }
      function si(t) {
        var e = t.subscriber,
          n = t.window,
          r = t.context;
        r && r.action && r.subscription && r.action.remove(r.subscription),
          e.closeWindow(n);
      }
      function oi(t, e) {
        return function (n) {
          return n.lift(new ai(t, e));
        };
      }
      var ai = (function () {
          function t(t, e) {
            (this.openings = t), (this.closingSelector = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                new ui(t, this.openings, this.closingSelector),
              );
            }),
            t
          );
        })(),
        ui = (function (t) {
          function e(e, n, r) {
            var i = t.call(this, e) || this;
            return (
              (i.openings = n),
              (i.closingSelector = r),
              (i.contexts = []),
              i.add((i.openSubscription = Object(I['a'])(i, n, n))),
              i
            );
          }
          return (
            r['__extends'](e, t),
            (e.prototype._next = function (t) {
              var e = this.contexts;
              if (e)
                for (var n = e.length, r = 0; r < n; r++) e[r].window.next(t);
            }),
            (e.prototype._error = function (e) {
              var n = this.contexts;
              if (((this.contexts = null), n)) {
                var r = n.length,
                  i = -1;
                while (++i < r) {
                  var s = n[i];
                  s.window.error(e), s.subscription.unsubscribe();
                }
              }
              t.prototype._error.call(this, e);
            }),
            (e.prototype._complete = function () {
              var e = this.contexts;
              if (((this.contexts = null), e)) {
                var n = e.length,
                  r = -1;
                while (++r < n) {
                  var i = e[r];
                  i.window.complete(), i.subscription.unsubscribe();
                }
              }
              t.prototype._complete.call(this);
            }),
            (e.prototype._unsubscribe = function () {
              var t = this.contexts;
              if (((this.contexts = null), t)) {
                var e = t.length,
                  n = -1;
                while (++n < e) {
                  var r = t[n];
                  r.window.unsubscribe(), r.subscription.unsubscribe();
                }
              }
            }),
            (e.prototype.notifyNext = function (t, e, n, r, i) {
              if (t === this.openings) {
                var s = void 0;
                try {
                  var o = this.closingSelector;
                  s = o(e);
                } catch (h) {
                  return this.error(h);
                }
                var a = new sn['a'](),
                  u = new C['a'](),
                  c = { window: a, subscription: u };
                this.contexts.push(c);
                var l = Object(I['a'])(this, s, c);
                l.closed
                  ? this.closeWindow(this.contexts.length - 1)
                  : ((l.context = c), u.add(l)),
                  this.destination.next(a);
              } else this.closeWindow(this.contexts.indexOf(t));
            }),
            (e.prototype.notifyError = function (t) {
              this.error(t);
            }),
            (e.prototype.notifyComplete = function (t) {
              t !== this.openSubscription &&
                this.closeWindow(this.contexts.indexOf(t.context));
            }),
            (e.prototype.closeWindow = function (t) {
              if (-1 !== t) {
                var e = this.contexts,
                  n = e[t],
                  r = n.window,
                  i = n.subscription;
                e.splice(t, 1), r.complete(), i.unsubscribe();
              }
            }),
            e
          );
        })(O['a']);
      function ci(t) {
        return function (e) {
          return e.lift(new li(t));
        };
      }
      var li = (function () {
          function t(t) {
            this.closingSelector = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new hi(t, this.closingSelector));
            }),
            t
          );
        })(),
        hi = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return (
              (r.destination = e), (r.closingSelector = n), r.openWindow(), r
            );
          }
          return (
            r['__extends'](e, t),
            (e.prototype.notifyNext = function (t, e, n, r, i) {
              this.openWindow(i);
            }),
            (e.prototype.notifyError = function (t) {
              this._error(t);
            }),
            (e.prototype.notifyComplete = function (t) {
              this.openWindow(t);
            }),
            (e.prototype._next = function (t) {
              this.window.next(t);
            }),
            (e.prototype._error = function (t) {
              this.window.error(t),
                this.destination.error(t),
                this.unsubscribeClosingNotification();
            }),
            (e.prototype._complete = function () {
              this.window.complete(),
                this.destination.complete(),
                this.unsubscribeClosingNotification();
            }),
            (e.prototype.unsubscribeClosingNotification = function () {
              this.closingNotification &&
                this.closingNotification.unsubscribe();
            }),
            (e.prototype.openWindow = function (t) {
              void 0 === t && (t = null),
                t && (this.remove(t), t.unsubscribe());
              var e = this.window;
              e && e.complete();
              var n,
                r = (this.window = new sn['a']());
              this.destination.next(r);
              try {
                var i = this.closingSelector;
                n = i();
              } catch (s) {
                return this.destination.error(s), void this.window.error(s);
              }
              this.add((this.closingNotification = Object(I['a'])(this, n)));
            }),
            e
          );
        })(O['a']);
      function di() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return function (e) {
          var n;
          'function' === typeof t[t.length - 1] && (n = t.pop());
          var r = t;
          return e.lift(new fi(r, n));
        };
      }
      var fi = (function () {
          function t(t, e) {
            (this.observables = t), (this.project = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new pi(t, this.observables, this.project));
            }),
            t
          );
        })(),
        pi = (function (t) {
          function e(e, n, r) {
            var i = t.call(this, e) || this;
            (i.observables = n), (i.project = r), (i.toRespond = []);
            var s = n.length;
            i.values = new Array(s);
            for (var o = 0; o < s; o++) i.toRespond.push(o);
            for (o = 0; o < s; o++) {
              var a = n[o];
              i.add(Object(I['a'])(i, a, void 0, o));
            }
            return i;
          }
          return (
            r['__extends'](e, t),
            (e.prototype.notifyNext = function (t, e, n) {
              this.values[n] = e;
              var r = this.toRespond;
              if (r.length > 0) {
                var i = r.indexOf(n);
                -1 !== i && r.splice(i, 1);
              }
            }),
            (e.prototype.notifyComplete = function () {}),
            (e.prototype._next = function (t) {
              if (0 === this.toRespond.length) {
                var e = [t].concat(this.values);
                this.project ? this._tryProject(e) : this.destination.next(e);
              }
            }),
            (e.prototype._tryProject = function (t) {
              var e;
              try {
                e = this.project.apply(this, t);
              } catch (n) {
                return void this.destination.error(n);
              }
              this.destination.next(e);
            }),
            e
          );
        })(O['a']),
        bi = n('909l');
      function gi() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return function (e) {
          return e.lift.call(bi['b'].apply(void 0, [e].concat(t)));
        };
      }
      function mi(t) {
        return function (e) {
          return e.lift(new bi['a'](t));
        };
      }
    },
    arZh: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.filterFromParam = e.FilterPolyfill = void 0);
      const r = n('Iwol'),
        i = n('Qann'),
        s = 3e5,
        o = { jsonrpc: '2.0', id: 0 };
      class a {
        constructor(t) {
          (this.logFilters = new Map()),
            (this.blockFilters = new Set()),
            (this.pendingTransactionFilters = new Set()),
            (this.cursors = new Map()),
            (this.timeouts = new Map()),
            (this.nextFilterId = (0, r.IntNumber)(1)),
            (this.provider = t);
        }
        async newFilter(t) {
          const e = u(t),
            n = this.makeFilterId(),
            r = await this.setInitialCursorPosition(n, e.fromBlock);
          return (
            console.log(
              `Installing new log filter(${n}):`,
              e,
              'initial cursor position:',
              r,
            ),
            this.logFilters.set(n, e),
            this.setFilterTimeout(n),
            (0, i.hexStringFromIntNumber)(n)
          );
        }
        async newBlockFilter() {
          const t = this.makeFilterId(),
            e = await this.setInitialCursorPosition(t, 'latest');
          return (
            console.log(
              `Installing new block filter (${t}) with initial cursor position:`,
              e,
            ),
            this.blockFilters.add(t),
            this.setFilterTimeout(t),
            (0, i.hexStringFromIntNumber)(t)
          );
        }
        async newPendingTransactionFilter() {
          const t = this.makeFilterId(),
            e = await this.setInitialCursorPosition(t, 'latest');
          return (
            console.log(
              `Installing new block filter (${t}) with initial cursor position:`,
              e,
            ),
            this.pendingTransactionFilters.add(t),
            this.setFilterTimeout(t),
            (0, i.hexStringFromIntNumber)(t)
          );
        }
        uninstallFilter(t) {
          const e = (0, i.intNumberFromHexString)(t);
          return (
            console.log(`Uninstalling filter (${e})`), this.deleteFilter(e), !0
          );
        }
        getFilterChanges(t) {
          const e = (0, i.intNumberFromHexString)(t);
          return (
            this.timeouts.has(e) && this.setFilterTimeout(e),
            this.logFilters.has(e)
              ? this.getLogFilterChanges(e)
              : this.blockFilters.has(e)
              ? this.getBlockFilterChanges(e)
              : this.pendingTransactionFilters.has(e)
              ? this.getPendingTransactionFilterChanges(e)
              : Promise.resolve(d())
          );
        }
        async getFilterLogs(t) {
          const e = (0, i.intNumberFromHexString)(t),
            n = this.logFilters.get(e);
          return n
            ? this.sendAsyncPromise(
                Object.assign(Object.assign({}, o), {
                  method: 'eth_getLogs',
                  params: [c(n)],
                }),
              )
            : d();
        }
        makeFilterId() {
          return (0, r.IntNumber)(++this.nextFilterId);
        }
        sendAsyncPromise(t) {
          return new Promise((e, n) => {
            this.provider.sendAsync(t, (t, r) =>
              t
                ? n(t)
                : Array.isArray(r) || null == r
                ? n(
                    new Error(
                      `unexpected response received: ${JSON.stringify(r)}`,
                    ),
                  )
                : void e(r),
            );
          });
        }
        deleteFilter(t) {
          console.log(`Deleting filter (${t})`),
            this.logFilters.delete(t),
            this.blockFilters.delete(t),
            this.pendingTransactionFilters.delete(t),
            this.cursors.delete(t),
            this.timeouts.delete(t);
        }
        async getLogFilterChanges(t) {
          const e = this.logFilters.get(t),
            n = this.cursors.get(t);
          if (!n || !e) return d();
          const s = await this.getCurrentBlockHeight(),
            a = 'latest' === e.toBlock ? s : e.toBlock;
          if (n > s) return f();
          if (n > e.toBlock) return f();
          console.log(`Fetching logs from ${n} to ${a} for filter ${t}`);
          const u = await this.sendAsyncPromise(
            Object.assign(Object.assign({}, o), {
              method: 'eth_getLogs',
              params: [
                c(
                  Object.assign(Object.assign({}, e), {
                    fromBlock: n,
                    toBlock: a,
                  }),
                ),
              ],
            }),
          );
          if (Array.isArray(u.result)) {
            const e = u.result.map((t) =>
                (0, i.intNumberFromHexString)(t.blockNumber || '0x0'),
              ),
              s = Math.max(...e);
            if (s && s > n) {
              const e = (0, r.IntNumber)(s + 1);
              console.log(
                `Moving cursor position for filter (${t}) from ${n} to ${e}`,
              ),
                this.cursors.set(t, e);
            }
          }
          return u;
        }
        async getBlockFilterChanges(t) {
          const e = this.cursors.get(t);
          if (!e) return d();
          const n = await this.getCurrentBlockHeight();
          if (e > n) return f();
          console.log(`Fetching blocks from ${e} to ${n} for filter (${t})`);
          const s = (
              await Promise.all(
                (0, i.range)(e, n + 1).map((t) =>
                  this.getBlockHashByNumber((0, r.IntNumber)(t)),
                ),
              )
            ).filter((t) => !!t),
            a = (0, r.IntNumber)(e + s.length);
          return (
            console.log(
              `Moving cursor position for filter (${t}) from ${e} to ${a}`,
            ),
            this.cursors.set(t, a),
            Object.assign(Object.assign({}, o), { result: s })
          );
        }
        async getPendingTransactionFilterChanges(t) {
          return Promise.resolve(f());
        }
        async setInitialCursorPosition(t, e) {
          const n = await this.getCurrentBlockHeight(),
            r = 'number' === typeof e && e > n ? e : n;
          return this.cursors.set(t, r), r;
        }
        setFilterTimeout(t) {
          const e = this.timeouts.get(t);
          e && window.clearTimeout(e);
          const n = window.setTimeout(() => {
            console.log(`Filter (${t}) timed out`), this.deleteFilter(t);
          }, s);
          this.timeouts.set(t, n);
        }
        async getCurrentBlockHeight() {
          const { result: t } = await this.sendAsyncPromise(
            Object.assign(Object.assign({}, o), {
              method: 'eth_blockNumber',
              params: [],
            }),
          );
          return (0, i.intNumberFromHexString)((0, i.ensureHexString)(t));
        }
        async getBlockHashByNumber(t) {
          const e = await this.sendAsyncPromise(
            Object.assign(Object.assign({}, o), {
              method: 'eth_getBlockByNumber',
              params: [(0, i.hexStringFromIntNumber)(t), !1],
            }),
          );
          return e.result && 'string' === typeof e.result.hash
            ? (0, i.ensureHexString)(e.result.hash)
            : null;
        }
      }
      function u(t) {
        return {
          fromBlock: l(t.fromBlock),
          toBlock: l(t.toBlock),
          addresses:
            void 0 === t.address
              ? null
              : Array.isArray(t.address)
              ? t.address
              : [t.address],
          topics: t.topics || [],
        };
      }
      function c(t) {
        const e = {
          fromBlock: h(t.fromBlock),
          toBlock: h(t.toBlock),
          topics: t.topics,
        };
        return null !== t.addresses && (e.address = t.addresses), e;
      }
      function l(t) {
        if (void 0 === t || 'latest' === t || 'pending' === t) return 'latest';
        if ('earliest' === t) return (0, r.IntNumber)(0);
        if ((0, i.isHexString)(t)) return (0, i.intNumberFromHexString)(t);
        throw new Error(`Invalid block option: ${String(t)}`);
      }
      function h(t) {
        return 'latest' === t ? t : (0, i.hexStringFromIntNumber)(t);
      }
      function d() {
        return Object.assign(Object.assign({}, o), {
          error: { code: -32e3, message: 'filter not found' },
        });
      }
      function f() {
        return Object.assign(Object.assign({}, o), { result: [] });
      }
      (e.FilterPolyfill = a), (e.filterFromParam = u);
    },
    awvh: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return i;
      });
      var r = (function () {
          function t(t) {
            return (
              Error.call(this),
              (this.message = t
                ? t.length +
                  ' errors occurred during unsubscription:\n' +
                  t
                    .map(function (t, e) {
                      return e + 1 + ') ' + t.toString();
                    })
                    .join('\n  ')
                : ''),
              (this.name = 'UnsubscriptionError'),
              (this.errors = t),
              this
            );
          }
          return (t.prototype = Object.create(Error.prototype)), t;
        })(),
        i = r;
    },
    b7mW: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return i;
      });
      var r = (function () {
          function t() {
            return (
              Error.call(this),
              (this.message = 'argument out of range'),
              (this.name = 'ArgumentOutOfRangeError'),
              this
            );
          }
          return (t.prototype = Object.create(Error.prototype)), t;
        })(),
        i = r;
    },
    b94t: function (t, e) {
      const n = [
        1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0,
        2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136,
        0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905,
        2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648,
        32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896,
        2147483648, 2147483649, 0, 2147516424, 2147483648,
      ];
      e.p1600 = function (t) {
        for (let e = 0; e < 24; ++e) {
          const r = t[0] ^ t[10] ^ t[20] ^ t[30] ^ t[40],
            i = t[1] ^ t[11] ^ t[21] ^ t[31] ^ t[41],
            s = t[2] ^ t[12] ^ t[22] ^ t[32] ^ t[42],
            o = t[3] ^ t[13] ^ t[23] ^ t[33] ^ t[43],
            a = t[4] ^ t[14] ^ t[24] ^ t[34] ^ t[44],
            u = t[5] ^ t[15] ^ t[25] ^ t[35] ^ t[45],
            c = t[6] ^ t[16] ^ t[26] ^ t[36] ^ t[46],
            l = t[7] ^ t[17] ^ t[27] ^ t[37] ^ t[47],
            h = t[8] ^ t[18] ^ t[28] ^ t[38] ^ t[48],
            d = t[9] ^ t[19] ^ t[29] ^ t[39] ^ t[49];
          let f = h ^ ((s << 1) | (o >>> 31)),
            p = d ^ ((o << 1) | (s >>> 31));
          const b = t[0] ^ f,
            g = t[1] ^ p,
            m = t[10] ^ f,
            y = t[11] ^ p,
            v = t[20] ^ f,
            _ = t[21] ^ p,
            w = t[30] ^ f,
            S = t[31] ^ p,
            M = t[40] ^ f,
            E = t[41] ^ p;
          (f = r ^ ((a << 1) | (u >>> 31))), (p = i ^ ((u << 1) | (a >>> 31)));
          const x = t[2] ^ f,
            k = t[3] ^ p,
            C = t[12] ^ f,
            I = t[13] ^ p,
            O = t[22] ^ f,
            j = t[23] ^ p,
            A = t[32] ^ f,
            R = t[33] ^ p,
            N = t[42] ^ f,
            T = t[43] ^ p;
          (f = s ^ ((c << 1) | (l >>> 31))), (p = o ^ ((l << 1) | (c >>> 31)));
          const L = t[4] ^ f,
            P = t[5] ^ p,
            D = t[14] ^ f,
            B = t[15] ^ p,
            F = t[24] ^ f,
            U = t[25] ^ p,
            H = t[34] ^ f,
            W = t[35] ^ p,
            z = t[44] ^ f,
            V = t[45] ^ p;
          (f = a ^ ((h << 1) | (d >>> 31))), (p = u ^ ((d << 1) | (h >>> 31)));
          const q = t[6] ^ f,
            G = t[7] ^ p,
            Z = t[16] ^ f,
            J = t[17] ^ p,
            Y = t[26] ^ f,
            Q = t[27] ^ p,
            K = t[36] ^ f,
            $ = t[37] ^ p,
            X = t[46] ^ f,
            tt = t[47] ^ p;
          (f = c ^ ((r << 1) | (i >>> 31))), (p = l ^ ((i << 1) | (r >>> 31)));
          const et = t[8] ^ f,
            nt = t[9] ^ p,
            rt = t[18] ^ f,
            it = t[19] ^ p,
            st = t[28] ^ f,
            ot = t[29] ^ p,
            at = t[38] ^ f,
            ut = t[39] ^ p,
            ct = t[48] ^ f,
            lt = t[49] ^ p,
            ht = b,
            dt = g,
            ft = (y << 4) | (m >>> 28),
            pt = (m << 4) | (y >>> 28),
            bt = (v << 3) | (_ >>> 29),
            gt = (_ << 3) | (v >>> 29),
            mt = (S << 9) | (w >>> 23),
            yt = (w << 9) | (S >>> 23),
            vt = (M << 18) | (E >>> 14),
            _t = (E << 18) | (M >>> 14),
            wt = (x << 1) | (k >>> 31),
            St = (k << 1) | (x >>> 31),
            Mt = (I << 12) | (C >>> 20),
            Et = (C << 12) | (I >>> 20),
            xt = (O << 10) | (j >>> 22),
            kt = (j << 10) | (O >>> 22),
            Ct = (R << 13) | (A >>> 19),
            It = (A << 13) | (R >>> 19),
            Ot = (N << 2) | (T >>> 30),
            jt = (T << 2) | (N >>> 30),
            At = (P << 30) | (L >>> 2),
            Rt = (L << 30) | (P >>> 2),
            Nt = (D << 6) | (B >>> 26),
            Tt = (B << 6) | (D >>> 26),
            Lt = (U << 11) | (F >>> 21),
            Pt = (F << 11) | (U >>> 21),
            Dt = (H << 15) | (W >>> 17),
            Bt = (W << 15) | (H >>> 17),
            Ft = (V << 29) | (z >>> 3),
            Ut = (z << 29) | (V >>> 3),
            Ht = (q << 28) | (G >>> 4),
            Wt = (G << 28) | (q >>> 4),
            zt = (J << 23) | (Z >>> 9),
            Vt = (Z << 23) | (J >>> 9),
            qt = (Y << 25) | (Q >>> 7),
            Gt = (Q << 25) | (Y >>> 7),
            Zt = (K << 21) | ($ >>> 11),
            Jt = ($ << 21) | (K >>> 11),
            Yt = (tt << 24) | (X >>> 8),
            Qt = (X << 24) | (tt >>> 8),
            Kt = (et << 27) | (nt >>> 5),
            $t = (nt << 27) | (et >>> 5),
            Xt = (rt << 20) | (it >>> 12),
            te = (it << 20) | (rt >>> 12),
            ee = (ot << 7) | (st >>> 25),
            ne = (st << 7) | (ot >>> 25),
            re = (at << 8) | (ut >>> 24),
            ie = (ut << 8) | (at >>> 24),
            se = (ct << 14) | (lt >>> 18),
            oe = (lt << 14) | (ct >>> 18);
          (t[0] = ht ^ (~Mt & Lt)),
            (t[1] = dt ^ (~Et & Pt)),
            (t[10] = Ht ^ (~Xt & bt)),
            (t[11] = Wt ^ (~te & gt)),
            (t[20] = wt ^ (~Nt & qt)),
            (t[21] = St ^ (~Tt & Gt)),
            (t[30] = Kt ^ (~ft & xt)),
            (t[31] = $t ^ (~pt & kt)),
            (t[40] = At ^ (~zt & ee)),
            (t[41] = Rt ^ (~Vt & ne)),
            (t[2] = Mt ^ (~Lt & Zt)),
            (t[3] = Et ^ (~Pt & Jt)),
            (t[12] = Xt ^ (~bt & Ct)),
            (t[13] = te ^ (~gt & It)),
            (t[22] = Nt ^ (~qt & re)),
            (t[23] = Tt ^ (~Gt & ie)),
            (t[32] = ft ^ (~xt & Dt)),
            (t[33] = pt ^ (~kt & Bt)),
            (t[42] = zt ^ (~ee & mt)),
            (t[43] = Vt ^ (~ne & yt)),
            (t[4] = Lt ^ (~Zt & se)),
            (t[5] = Pt ^ (~Jt & oe)),
            (t[14] = bt ^ (~Ct & Ft)),
            (t[15] = gt ^ (~It & Ut)),
            (t[24] = qt ^ (~re & vt)),
            (t[25] = Gt ^ (~ie & _t)),
            (t[34] = xt ^ (~Dt & Yt)),
            (t[35] = kt ^ (~Bt & Qt)),
            (t[44] = ee ^ (~mt & Ot)),
            (t[45] = ne ^ (~yt & jt)),
            (t[6] = Zt ^ (~se & ht)),
            (t[7] = Jt ^ (~oe & dt)),
            (t[16] = Ct ^ (~Ft & Ht)),
            (t[17] = It ^ (~Ut & Wt)),
            (t[26] = re ^ (~vt & wt)),
            (t[27] = ie ^ (~_t & St)),
            (t[36] = Dt ^ (~Yt & Kt)),
            (t[37] = Bt ^ (~Qt & $t)),
            (t[46] = mt ^ (~Ot & At)),
            (t[47] = yt ^ (~jt & Rt)),
            (t[8] = se ^ (~ht & Mt)),
            (t[9] = oe ^ (~dt & Et)),
            (t[18] = Ft ^ (~Ht & Xt)),
            (t[19] = Ut ^ (~Wt & te)),
            (t[28] = vt ^ (~wt & Nt)),
            (t[29] = _t ^ (~St & Tt)),
            (t[38] = Yt ^ (~Kt & ft)),
            (t[39] = Qt ^ (~$t & pt)),
            (t[48] = Ot ^ (~At & zt)),
            (t[49] = jt ^ (~Rt & Vt)),
            (t[0] ^= n[2 * e]),
            (t[1] ^= n[2 * e + 1]);
        }
      };
    },
    bnw0: function (t, e, n) {
      'use strict';
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, e, n, r) {
                void 0 === r && (r = n),
                  Object.defineProperty(t, r, {
                    enumerable: !0,
                    get: function () {
                      return e[n];
                    },
                  });
              }
            : function (t, e, n, r) {
                void 0 === r && (r = n), (t[r] = e[n]);
              }),
        i =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (t, e) {
                Object.defineProperty(t, 'default', {
                  enumerable: !0,
                  value: e,
                });
              }
            : function (t, e) {
                t['default'] = e;
              }),
        s =
          (this && this.__decorate) ||
          function (t, e, n, r) {
            var i,
              s = arguments.length,
              o =
                s < 3
                  ? e
                  : null === r
                  ? (r = Object.getOwnPropertyDescriptor(e, n))
                  : r;
            if (
              'object' === typeof Reflect &&
              'function' === typeof Reflect.decorate
            )
              o = Reflect.decorate(t, e, n, r);
            else
              for (var a = t.length - 1; a >= 0; a--)
                (i = t[a]) &&
                  (o = (s < 3 ? i(o) : s > 3 ? i(e, n, o) : i(e, n)) || o);
            return s > 3 && o && Object.defineProperty(e, n, o), o;
          },
        o =
          (this && this.__importStar) ||
          function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
              for (var n in t)
                'default' !== n &&
                  Object.prototype.hasOwnProperty.call(t, n) &&
                  r(e, t, n);
            return i(e, t), e;
          },
        a =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.WalletSDKRelay = void 0);
      const u = a(n('7wIv')),
        c = n('oktN'),
        l = n('DtyJ'),
        h = n('ahDk'),
        d = n('Y5IT'),
        f = n('I2MC'),
        p = n('kK/L'),
        b = n('Iwol'),
        g = n('Qann'),
        m = o(n('ZtDX')),
        y = n('9vAn'),
        v = n('K6Iq'),
        _ = n('nAhp'),
        w = n('eq/O'),
        S = n('2wVo'),
        M = n('MmAt'),
        E = n('llQS');
      class x extends v.WalletSDKRelayAbstract {
        constructor(t) {
          var e;
          super(),
            (this.accountsCallback = null),
            (this.chainCallback = null),
            (this.dappDefaultChainSubject = new l.BehaviorSubject(1)),
            (this.dappDefaultChain = 1),
            (this.appName = ''),
            (this.appLogoUrl = null),
            (this.subscriptions = new l.Subscription()),
            (this.linkAPIUrl = t.linkAPIUrl),
            (this.storage = t.storage),
            (this.options = t);
          const { session: n, ui: r, connection: i } = this.subscribe();
          if (
            ((this._session = n),
            (this.connection = i),
            (this.relayEventManager = t.relayEventManager),
            t.diagnosticLogger && t.eventListener)
          )
            throw new Error(
              "Can't have both eventListener and diagnosticLogger options, use only diagnosticLogger",
            );
          t.eventListener
            ? (this.diagnostic = { log: t.eventListener.onEvent })
            : (this.diagnostic = t.diagnosticLogger),
            (this._reloadOnDisconnect =
              null === (e = t.reloadOnDisconnect) || void 0 === e || e),
            (this.ui = r);
        }
        subscribe() {
          this.subscriptions.add(
            this.dappDefaultChainSubject.subscribe((t) => {
              this.dappDefaultChain !== t && (this.dappDefaultChain = t);
            }),
          );
          const t =
              y.Session.load(this.storage) ||
              new y.Session(this.storage).save(),
            e = new f.WalletSDKConnection(
              t.id,
              t.key,
              this.linkAPIUrl,
              this.diagnostic,
            );
          this.subscriptions.add(
            e.sessionConfig$.subscribe({
              next: (t) => {
                this.onSessionConfigChanged(t);
              },
              error: () => {
                var t;
                null === (t = this.diagnostic) ||
                  void 0 === t ||
                  t.log(d.EVENTS.GENERAL_ERROR, {
                    message: 'error while invoking session config callback',
                  });
              },
            }),
          ),
            this.subscriptions.add(
              e.incomingEvent$
                .pipe((0, h.filter)((t) => 'Web3Response' === t.event))
                .subscribe({ next: this.handleIncomingEvent }),
            ),
            this.subscriptions.add(
              e.linked$
                .pipe(
                  (0, h.skip)(1),
                  (0, h.tap)((t) => {
                    var e;
                    this.isLinked = t;
                    const n = this.storage.getItem(
                      v.LOCAL_STORAGE_ADDRESSES_KEY,
                    );
                    if (
                      (t && (this.session.linked = t),
                      (this.isUnlinkedErrorState = !1),
                      n)
                    ) {
                      const r = n.split(' '),
                        i =
                          'true' ===
                          this.storage.getItem('IsStandaloneSigning');
                      if ('' !== r[0] && !t && this.session.linked && !i) {
                        this.isUnlinkedErrorState = !0;
                        const t = this.getSessionIdHash();
                        null === (e = this.diagnostic) ||
                          void 0 === e ||
                          e.log(d.EVENTS.UNLINKED_ERROR_STATE, {
                            sessionIdHash: t,
                          });
                      }
                    }
                  }),
                )
                .subscribe(),
            ),
            this.subscriptions.add(
              e.sessionConfig$
                .pipe(
                  (0, h.filter)(
                    (t) => !!t.metadata && '1' === t.metadata.__destroyed,
                  ),
                )
                .subscribe(() => {
                  var t;
                  const n = e.isDestroyed;
                  return (
                    null === (t = this.diagnostic) ||
                      void 0 === t ||
                      t.log(d.EVENTS.METADATA_DESTROYED, {
                        alreadyDestroyed: n,
                        sessionIdHash: this.getSessionIdHash(),
                      }),
                    this.resetAndReload()
                  );
                }),
            ),
            this.subscriptions.add(
              e.sessionConfig$
                .pipe(
                  (0, h.filter)(
                    (t) => t.metadata && void 0 !== t.metadata.WalletUsername,
                  ),
                )
                .pipe(
                  (0, h.mergeMap)((e) =>
                    m.decrypt(e.metadata.WalletUsername, t.secret),
                  ),
                )
                .subscribe({
                  next: (t) => {
                    this.storage.setItem(v.WALLET_USER_NAME_KEY, t);
                  },
                  error: () => {
                    var t;
                    null === (t = this.diagnostic) ||
                      void 0 === t ||
                      t.log(d.EVENTS.GENERAL_ERROR, {
                        message: 'Had error decrypting',
                        value: 'username',
                      });
                  },
                }),
            ),
            this.subscriptions.add(
              e.sessionConfig$
                .pipe(
                  (0, h.filter)(
                    (t) => t.metadata && void 0 !== t.metadata.AppVersion,
                  ),
                )
                .pipe(
                  (0, h.mergeMap)((e) =>
                    m.decrypt(e.metadata.AppVersion, t.secret),
                  ),
                )
                .subscribe({
                  next: (t) => {
                    this.storage.setItem(v.APP_VERSION_KEY, t);
                  },
                  error: () => {
                    var t;
                    null === (t = this.diagnostic) ||
                      void 0 === t ||
                      t.log(d.EVENTS.GENERAL_ERROR, {
                        message: 'Had error decrypting',
                        value: 'appversion',
                      });
                  },
                }),
            ),
            this.subscriptions.add(
              e.sessionConfig$
                .pipe(
                  (0, h.filter)(
                    (t) =>
                      t.metadata &&
                      void 0 !== t.metadata.ChainId &&
                      void 0 !== t.metadata.JsonRpcUrl,
                  ),
                )
                .pipe(
                  (0, h.mergeMap)((e) =>
                    (0, l.zip)(
                      m.decrypt(e.metadata.ChainId, t.secret),
                      m.decrypt(e.metadata.JsonRpcUrl, t.secret),
                    ),
                  ),
                )
                .pipe((0, h.distinctUntilChanged)())
                .subscribe({
                  next: ([t, e]) => {
                    this.chainCallback && this.chainCallback(t, e);
                  },
                  error: () => {
                    var t;
                    null === (t = this.diagnostic) ||
                      void 0 === t ||
                      t.log(d.EVENTS.GENERAL_ERROR, {
                        message: 'Had error decrypting',
                        value: 'chainId|jsonRpcUrl',
                      });
                  },
                }),
            ),
            this.subscriptions.add(
              e.sessionConfig$
                .pipe(
                  (0, h.filter)(
                    (t) => t.metadata && void 0 !== t.metadata.EthereumAddress,
                  ),
                )
                .pipe(
                  (0, h.mergeMap)((e) =>
                    m.decrypt(e.metadata.EthereumAddress, t.secret),
                  ),
                )
                .subscribe({
                  next: (t) => {
                    this.accountsCallback && this.accountsCallback([t]),
                      x.accountRequestCallbackIds.size > 0 &&
                        (Array.from(
                          x.accountRequestCallbackIds.values(),
                        ).forEach((e) => {
                          const n = (0, E.Web3ResponseMessage)({
                            id: e,
                            response: (0, M.RequestEthereumAccountsResponse)([
                              t,
                            ]),
                          });
                          this.invokeCallback(
                            Object.assign(Object.assign({}, n), { id: e }),
                          );
                        }),
                        x.accountRequestCallbackIds.clear());
                  },
                  error: () => {
                    var t;
                    null === (t = this.diagnostic) ||
                      void 0 === t ||
                      t.log(d.EVENTS.GENERAL_ERROR, {
                        message: 'Had error decrypting',
                        value: 'selectedAddress',
                      });
                  },
                }),
            ),
            this.subscriptions.add(
              e.sessionConfig$
                .pipe(
                  (0, h.filter)(
                    (t) => t.metadata && void 0 !== t.metadata.AppSrc,
                  ),
                )
                .pipe(
                  (0, h.mergeMap)((e) =>
                    m.decrypt(e.metadata.AppSrc, t.secret),
                  ),
                )
                .subscribe({
                  next: (t) => {
                    this.ui.setAppSrc(t);
                  },
                  error: () => {
                    var t;
                    null === (t = this.diagnostic) ||
                      void 0 === t ||
                      t.log(d.EVENTS.GENERAL_ERROR, {
                        message: 'Had error decrypting',
                        value: 'appSrc',
                      });
                  },
                }),
            );
          const n = this.options.uiConstructor({
            linkAPIUrl: this.options.linkAPIUrl,
            version: this.options.version,
            darkMode: this.options.darkMode,
            session: t,
            connected$: e.connected$,
            chainId$: this.dappDefaultChainSubject,
          });
          return e.connect(), { session: t, ui: n, connection: e };
        }
        attachUI() {
          this.ui.attach();
        }
        resetAndReload() {
          this.connection
            .setSessionMetadata('__destroyed', '1')
            .pipe(
              (0, h.timeout)(1e3),
              (0, h.catchError)((t) => (0, l.of)(null)),
            )
            .subscribe(
              (t) => {
                var e, n, r;
                const i = this.ui.isStandalone();
                try {
                  this.subscriptions.unsubscribe();
                } catch (c) {
                  null === (e = this.diagnostic) ||
                    void 0 === e ||
                    e.log(d.EVENTS.GENERAL_ERROR, {
                      message: 'Had error unsubscribing',
                    });
                }
                null === (n = this.diagnostic) ||
                  void 0 === n ||
                  n.log(d.EVENTS.SESSION_STATE_CHANGE, {
                    method: 'relay::resetAndReload',
                    sessionMetadataChange: '__destroyed, 1',
                    sessionIdHash: this.getSessionIdHash(),
                  }),
                  this.connection.destroy();
                const s = y.Session.load(this.storage);
                if (
                  ((null === s || void 0 === s ? void 0 : s.id) ===
                  this._session.id
                    ? this.storage.clear()
                    : s &&
                      (null === (r = this.diagnostic) ||
                        void 0 === r ||
                        r.log(d.EVENTS.SKIPPED_CLEARING_SESSION, {
                          sessionIdHash: this.getSessionIdHash(),
                          storedSessionIdHash: y.Session.hash(s.id),
                        })),
                  this._reloadOnDisconnect)
                )
                  return void this.ui.reloadUI();
                this.accountsCallback && this.accountsCallback([], !0),
                  (this.subscriptions = new l.Subscription());
                const { session: o, ui: a, connection: u } = this.subscribe();
                (this._session = o),
                  (this.connection = u),
                  (this.ui = a),
                  i && this.ui.setStandalone && this.ui.setStandalone(!0),
                  this.attachUI();
              },
              (t) => {
                var e;
                null === (e = this.diagnostic) ||
                  void 0 === e ||
                  e.log(d.EVENTS.FAILURE, {
                    method: 'relay::resetAndReload',
                    message: `failed to reset and reload with ${t}`,
                    sessionIdHash: this.getSessionIdHash(),
                  });
              },
            );
        }
        setAppInfo(t, e) {
          (this.appName = t), (this.appLogoUrl = e);
        }
        getStorageItem(t) {
          return this.storage.getItem(t);
        }
        get session() {
          return this._session;
        }
        setStorageItem(t, e) {
          this.storage.setItem(t, e);
        }
        signEthereumMessage(t, e, n, r) {
          return this.sendRequest({
            method: _.Web3Method.signEthereumMessage,
            params: {
              message: (0, g.hexStringFromBuffer)(t, !0),
              address: e,
              addPrefix: n,
              typedDataJson: r || null,
            },
          });
        }
        ethereumAddressFromSignedMessage(t, e, n) {
          return this.sendRequest({
            method: _.Web3Method.ethereumAddressFromSignedMessage,
            params: {
              message: (0, g.hexStringFromBuffer)(t, !0),
              signature: (0, g.hexStringFromBuffer)(e, !0),
              addPrefix: n,
            },
          });
        }
        signEthereumTransaction(t) {
          return this.sendRequest({
            method: _.Web3Method.signEthereumTransaction,
            params: {
              fromAddress: t.fromAddress,
              toAddress: t.toAddress,
              weiValue: (0, g.bigIntStringFromBN)(t.weiValue),
              data: (0, g.hexStringFromBuffer)(t.data, !0),
              nonce: t.nonce,
              gasPriceInWei: t.gasPriceInWei
                ? (0, g.bigIntStringFromBN)(t.gasPriceInWei)
                : null,
              maxFeePerGas: t.gasPriceInWei
                ? (0, g.bigIntStringFromBN)(t.gasPriceInWei)
                : null,
              maxPriorityFeePerGas: t.gasPriceInWei
                ? (0, g.bigIntStringFromBN)(t.gasPriceInWei)
                : null,
              gasLimit: t.gasLimit
                ? (0, g.bigIntStringFromBN)(t.gasLimit)
                : null,
              chainId: t.chainId,
              shouldSubmit: !1,
            },
          });
        }
        signAndSubmitEthereumTransaction(t) {
          return this.sendRequest({
            method: _.Web3Method.signEthereumTransaction,
            params: {
              fromAddress: t.fromAddress,
              toAddress: t.toAddress,
              weiValue: (0, g.bigIntStringFromBN)(t.weiValue),
              data: (0, g.hexStringFromBuffer)(t.data, !0),
              nonce: t.nonce,
              gasPriceInWei: t.gasPriceInWei
                ? (0, g.bigIntStringFromBN)(t.gasPriceInWei)
                : null,
              maxFeePerGas: t.maxFeePerGas
                ? (0, g.bigIntStringFromBN)(t.maxFeePerGas)
                : null,
              maxPriorityFeePerGas: t.maxPriorityFeePerGas
                ? (0, g.bigIntStringFromBN)(t.maxPriorityFeePerGas)
                : null,
              gasLimit: t.gasLimit
                ? (0, g.bigIntStringFromBN)(t.gasLimit)
                : null,
              chainId: t.chainId,
              shouldSubmit: !0,
            },
          });
        }
        submitEthereumTransaction(t, e) {
          return this.sendRequest({
            method: _.Web3Method.submitEthereumTransaction,
            params: {
              signedTransaction: (0, g.hexStringFromBuffer)(t, !0),
              chainId: e,
            },
          });
        }
        scanQRCode(t) {
          return this.sendRequest({
            method: _.Web3Method.scanQRCode,
            params: { regExp: t },
          });
        }
        getQRCodeUrl() {
          return (0, g.createQrUrl)(
            this._session.id,
            this._session.secret,
            this.linkAPIUrl,
            !1,
            this.options.version,
            this.dappDefaultChain,
          );
        }
        genericRequest(t, e) {
          return this.sendRequest({
            method: _.Web3Method.generic,
            params: { action: e, data: t },
          });
        }
        sendGenericMessage(t) {
          return this.sendRequest(t);
        }
        sendRequest(t) {
          let e = null;
          const n = (0, g.randomBytesHex)(8),
            r = (r) => {
              this.publishWeb3RequestCanceledEvent(n),
                this.handleErrorResponse(n, t.method, r),
                null === e || void 0 === e || e();
            },
            i = new Promise((i, s) => {
              this.ui.isStandalone() ||
                (e = this.ui.showConnecting({
                  isUnlinkedErrorState: this.isUnlinkedErrorState,
                  onCancel: r,
                  onResetConnection: this.resetAndReload,
                })),
                this.relayEventManager.callbacks.set(n, (t) => {
                  if ((null === e || void 0 === e || e(), t.errorMessage))
                    return s(new Error(t.errorMessage));
                  i(t);
                }),
                this.ui.isStandalone()
                  ? this.sendRequestStandalone(n, t)
                  : this.publishWeb3RequestEvent(n, t);
            });
          return { promise: i, cancel: r };
        }
        setConnectDisabled(t) {
          this.ui.setConnectDisabled(t);
        }
        setAccountsCallback(t) {
          this.accountsCallback = t;
        }
        setChainCallback(t) {
          this.chainCallback = t;
        }
        setDappDefaultChainCallback(t) {
          this.dappDefaultChainSubject.next(t);
        }
        publishWeb3RequestEvent(t, e) {
          var n;
          const r = (0, S.Web3RequestMessage)({ id: t, request: e }),
            i = y.Session.load(this.storage);
          null === (n = this.diagnostic) ||
            void 0 === n ||
            n.log(d.EVENTS.WEB3_REQUEST, {
              eventId: r.id,
              method: `relay::${r.request.method}`,
              sessionIdHash: this.getSessionIdHash(),
              storedSessionIdHash: i ? y.Session.hash(i.id) : '',
              isSessionMismatched: (
                (null === i || void 0 === i ? void 0 : i.id) !==
                this._session.id
              ).toString(),
            }),
            this.subscriptions.add(
              this.publishEvent('Web3Request', r, !0).subscribe({
                next: (t) => {
                  var e;
                  null === (e = this.diagnostic) ||
                    void 0 === e ||
                    e.log(d.EVENTS.WEB3_REQUEST_PUBLISHED, {
                      eventId: r.id,
                      method: `relay::${r.request.method}`,
                      sessionIdHash: this.getSessionIdHash(),
                      storedSessionIdHash: i ? y.Session.hash(i.id) : '',
                      isSessionMismatched: (
                        (null === i || void 0 === i ? void 0 : i.id) !==
                        this._session.id
                      ).toString(),
                    });
                },
                error: (t) => {
                  this.handleWeb3ResponseMessage(
                    (0, E.Web3ResponseMessage)({
                      id: r.id,
                      response: {
                        method: r.request.method,
                        errorMessage: t.message,
                      },
                    }),
                  );
                },
              }),
            );
        }
        publishWeb3RequestCanceledEvent(t) {
          const e = (0, w.Web3RequestCanceledMessage)(t);
          this.subscriptions.add(
            this.publishEvent('Web3RequestCanceled', e, !1).subscribe(),
          );
        }
        publishEvent(t, e, n) {
          const r = this.session.secret;
          return new l.Observable((t) => {
            m.encrypt(
              JSON.stringify(
                Object.assign(Object.assign({}, e), {
                  origin: location.origin,
                }),
              ),
              r,
            ).then((e) => {
              t.next(e), t.complete();
            });
          }).pipe(
            (0, h.mergeMap)((e) => this.connection.publishEvent(t, e, n)),
          );
        }
        handleIncomingEvent(t) {
          try {
            this.subscriptions.add(
              (0, l.from)(m.decrypt(t.data, this.session.secret))
                .pipe((0, h.map)((t) => JSON.parse(t)))
                .subscribe({
                  next: (t) => {
                    const e = (0, E.isWeb3ResponseMessage)(t) ? t : null;
                    e && this.handleWeb3ResponseMessage(e);
                  },
                  error: () => {
                    var t;
                    null === (t = this.diagnostic) ||
                      void 0 === t ||
                      t.log(d.EVENTS.GENERAL_ERROR, {
                        message: 'Had error decrypting',
                        value: 'incomingEvent',
                      });
                  },
                }),
            );
          } catch (e) {
            return;
          }
        }
        handleWeb3ResponseMessage(t) {
          var e;
          const { response: n } = t;
          if (
            (null === (e = this.diagnostic) ||
              void 0 === e ||
              e.log(d.EVENTS.WEB3_RESPONSE, {
                eventId: t.id,
                method: `relay::${n.method}`,
                sessionIdHash: this.getSessionIdHash(),
              }),
            (0, M.isRequestEthereumAccountsResponse)(n))
          )
            return (
              x.accountRequestCallbackIds.forEach((e) =>
                this.invokeCallback(
                  Object.assign(Object.assign({}, t), { id: e }),
                ),
              ),
              void x.accountRequestCallbackIds.clear()
            );
          this.invokeCallback(t);
        }
        handleErrorResponse(t, e, n, r) {
          this.handleWeb3ResponseMessage(
            (0, E.Web3ResponseMessage)({
              id: t,
              response: (0, M.ErrorResponse)(
                e,
                (null !== n && void 0 !== n
                  ? n
                  : p.WalletUIError.UserRejectedRequest
                ).message,
                r,
              ),
            }),
          );
        }
        invokeCallback(t) {
          const e = this.relayEventManager.callbacks.get(t.id);
          e && (e(t.response), this.relayEventManager.callbacks.delete(t.id));
        }
        requestEthereumAccounts() {
          const t = {
              method: _.Web3Method.requestEthereumAccounts,
              params: {
                appName: this.appName,
                appLogoUrl: this.appLogoUrl || null,
              },
            },
            e = null,
            n = (0, g.randomBytesHex)(8),
            r = (r) => {
              this.publishWeb3RequestCanceledEvent(n),
                this.handleErrorResponse(n, t.method, r),
                null === e || void 0 === e || e();
            },
            i = new Promise((i, s) => {
              var o;
              this.relayEventManager.callbacks.set(n, (t) => {
                if (
                  (this.ui.hideRequestEthereumAccounts(),
                  null === e || void 0 === e || e(),
                  t.errorMessage)
                )
                  return s(new Error(t.errorMessage));
                i(t);
              });
              const a =
                (null ===
                  (o =
                    null === window || void 0 === window
                      ? void 0
                      : window.navigator) || void 0 === o
                  ? void 0
                  : o.userAgent) || null;
              if (
                a &&
                /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                  a,
                )
              ) {
                let t;
                try {
                  t =
                    (0, g.isInIFrame)() && window.top
                      ? window.top.location
                      : window.location;
                } catch (u) {
                  t = window.location;
                }
                t.href = `https://www.coinbase.com/connect-dapp?uri=${encodeURIComponent(
                  t.href,
                )}`;
              } else {
                if (this.ui.inlineAccountsResponse()) {
                  const t = (t) => {
                    this.handleWeb3ResponseMessage(
                      (0, E.Web3ResponseMessage)({
                        id: n,
                        response: (0, M.RequestEthereumAccountsResponse)(t),
                      }),
                    );
                  };
                  this.ui.requestEthereumAccounts({
                    onCancel: r,
                    onAccounts: t,
                  });
                } else {
                  const t = c.ethErrors.provider.userRejectedRequest(
                    'User denied account authorization',
                  );
                  this.ui.requestEthereumAccounts({ onCancel: () => r(t) });
                }
                x.accountRequestCallbackIds.add(n),
                  this.ui.inlineAccountsResponse() ||
                    this.ui.isStandalone() ||
                    this.publishWeb3RequestEvent(n, t);
              }
            });
          return { promise: i, cancel: r };
        }
        selectProvider(t) {
          const e = {
              method: _.Web3Method.selectProvider,
              params: { providerOptions: t },
            },
            n = (0, g.randomBytesHex)(8),
            r = (t) => {
              this.publishWeb3RequestCanceledEvent(n),
                this.handleErrorResponse(n, e.method, t);
            },
            i = new Promise((e, r) => {
              this.relayEventManager.callbacks.set(n, (t) => {
                if (t.errorMessage) return r(new Error(t.errorMessage));
                e(t);
              });
              const i = (t) => {
                  this.handleWeb3ResponseMessage(
                    (0, E.Web3ResponseMessage)({
                      id: n,
                      response: (0, M.SelectProviderResponse)(
                        b.ProviderType.Unselected,
                      ),
                    }),
                  );
                },
                s = (t) => {
                  this.handleWeb3ResponseMessage(
                    (0, E.Web3ResponseMessage)({
                      id: n,
                      response: (0, M.SelectProviderResponse)(t),
                    }),
                  );
                };
              this.ui.selectProvider &&
                this.ui.selectProvider({
                  onApprove: s,
                  onCancel: i,
                  providerOptions: t,
                });
            });
          return { cancel: r, promise: i };
        }
        watchAsset(t, e, n, r, i, s) {
          const o = {
            method: _.Web3Method.watchAsset,
            params: {
              type: t,
              options: { address: e, symbol: n, decimals: r, image: i },
              chainId: s,
            },
          };
          let a = null;
          const u = (0, g.randomBytesHex)(8),
            c = (t) => {
              this.publishWeb3RequestCanceledEvent(u),
                this.handleErrorResponse(u, o.method, t),
                null === a || void 0 === a || a();
            };
          this.ui.inlineWatchAsset() ||
            (a = this.ui.showConnecting({
              isUnlinkedErrorState: this.isUnlinkedErrorState,
              onCancel: c,
              onResetConnection: this.resetAndReload,
            }));
          const l = new Promise((c, l) => {
            this.relayEventManager.callbacks.set(u, (t) => {
              if ((null === a || void 0 === a || a(), t.errorMessage))
                return l(new Error(t.errorMessage));
              c(t);
            });
            const h = (t) => {
                this.handleWeb3ResponseMessage(
                  (0, E.Web3ResponseMessage)({
                    id: u,
                    response: (0, M.WatchAssetReponse)(!1),
                  }),
                );
              },
              d = () => {
                this.handleWeb3ResponseMessage(
                  (0, E.Web3ResponseMessage)({
                    id: u,
                    response: (0, M.WatchAssetReponse)(!0),
                  }),
                );
              };
            this.ui.inlineWatchAsset() &&
              this.ui.watchAsset({
                onApprove: d,
                onCancel: h,
                type: t,
                address: e,
                symbol: n,
                decimals: r,
                image: i,
                chainId: s,
              }),
              this.ui.inlineWatchAsset() ||
                this.ui.isStandalone() ||
                this.publishWeb3RequestEvent(u, o);
          });
          return { cancel: c, promise: l };
        }
        addEthereumChain(t, e, n, r, i, s) {
          const o = {
            method: _.Web3Method.addEthereumChain,
            params: {
              chainId: t,
              rpcUrls: e,
              blockExplorerUrls: r,
              chainName: i,
              iconUrls: n,
              nativeCurrency: s,
            },
          };
          let a = null;
          const u = (0, g.randomBytesHex)(8),
            c = (t) => {
              this.publishWeb3RequestCanceledEvent(u),
                this.handleErrorResponse(u, o.method, t),
                null === a || void 0 === a || a();
            };
          this.ui.inlineAddEthereumChain(t) ||
            (a = this.ui.showConnecting({
              isUnlinkedErrorState: this.isUnlinkedErrorState,
              onCancel: c,
              onResetConnection: this.resetAndReload,
            }));
          const l = new Promise((e, n) => {
            this.relayEventManager.callbacks.set(u, (t) => {
              if ((null === a || void 0 === a || a(), t.errorMessage))
                return n(new Error(t.errorMessage));
              e(t);
            });
            const r = (t) => {
                this.handleWeb3ResponseMessage(
                  (0, E.Web3ResponseMessage)({
                    id: u,
                    response: (0, M.AddEthereumChainResponse)({
                      isApproved: !1,
                      rpcUrl: '',
                    }),
                  }),
                );
              },
              i = (t) => {
                this.handleWeb3ResponseMessage(
                  (0, E.Web3ResponseMessage)({
                    id: u,
                    response: (0, M.AddEthereumChainResponse)({
                      isApproved: !0,
                      rpcUrl: t,
                    }),
                  }),
                );
              };
            this.ui.inlineAddEthereumChain(t) &&
              this.ui.addEthereumChain({
                onCancel: r,
                onApprove: i,
                chainId: o.params.chainId,
                rpcUrls: o.params.rpcUrls,
                blockExplorerUrls: o.params.blockExplorerUrls,
                chainName: o.params.chainName,
                iconUrls: o.params.iconUrls,
                nativeCurrency: o.params.nativeCurrency,
              }),
              this.ui.inlineAddEthereumChain(t) ||
                this.ui.isStandalone() ||
                this.publishWeb3RequestEvent(u, o);
          });
          return { promise: l, cancel: c };
        }
        switchEthereumChain(t, e) {
          const n = {
              method: _.Web3Method.switchEthereumChain,
              params: Object.assign({ chainId: t }, { address: e }),
            },
            r = (0, g.randomBytesHex)(8),
            i = (t) => {
              this.publishWeb3RequestCanceledEvent(r),
                this.handleErrorResponse(r, n.method, t);
            },
            s = new Promise((t, e) => {
              this.relayEventManager.callbacks.set(r, (n) =>
                n.errorMessage && n.errorCode
                  ? e(
                      c.ethErrors.provider.custom({
                        code: n.errorCode,
                        message:
                          'Unrecognized chain ID. Try adding the chain using addEthereumChain first.',
                      }),
                    )
                  : n.errorMessage
                  ? e(new Error(n.errorMessage))
                  : void t(n),
              );
              const i = (t) => {
                  if ('number' === typeof t) {
                    const e = t;
                    this.handleWeb3ResponseMessage(
                      (0, E.Web3ResponseMessage)({
                        id: r,
                        response: (0, M.ErrorResponse)(
                          _.Web3Method.switchEthereumChain,
                          p.WalletUIError.SwitchEthereumChainUnsupportedChainId
                            .message,
                          e,
                        ),
                      }),
                    );
                  } else
                    t instanceof p.WalletUIError
                      ? this.handleErrorResponse(
                          r,
                          _.Web3Method.switchEthereumChain,
                          t,
                          t.errorCode,
                        )
                      : this.handleWeb3ResponseMessage(
                          (0, E.Web3ResponseMessage)({
                            id: r,
                            response: (0, M.SwitchEthereumChainResponse)({
                              isApproved: !1,
                              rpcUrl: '',
                            }),
                          }),
                        );
                },
                s = (t) => {
                  this.handleWeb3ResponseMessage(
                    (0, E.Web3ResponseMessage)({
                      id: r,
                      response: (0, M.SwitchEthereumChainResponse)({
                        isApproved: !0,
                        rpcUrl: t,
                      }),
                    }),
                  );
                };
              this.ui.switchEthereumChain({
                onCancel: i,
                onApprove: s,
                chainId: n.params.chainId,
                address: n.params.address,
              }),
                this.ui.inlineSwitchEthereumChain() ||
                  this.ui.isStandalone() ||
                  this.publishWeb3RequestEvent(r, n);
            });
          return { promise: s, cancel: i };
        }
        inlineAddEthereumChain(t) {
          return this.ui.inlineAddEthereumChain(t);
        }
        getSessionIdHash() {
          return y.Session.hash(this._session.id);
        }
        sendRequestStandalone(t, e) {
          const n = (n) => {
              this.handleErrorResponse(t, e.method, n);
            },
            r = (e) => {
              this.handleWeb3ResponseMessage(
                (0, E.Web3ResponseMessage)({ id: t, response: e }),
              );
            };
          switch (e.method) {
            case _.Web3Method.signEthereumMessage:
              this.ui.signEthereumMessage({
                request: e,
                onSuccess: r,
                onCancel: n,
              });
              break;
            case _.Web3Method.signEthereumTransaction:
              this.ui.signEthereumTransaction({
                request: e,
                onSuccess: r,
                onCancel: n,
              });
              break;
            case _.Web3Method.submitEthereumTransaction:
              this.ui.submitEthereumTransaction({
                request: e,
                onSuccess: r,
                onCancel: n,
              });
              break;
            case _.Web3Method.ethereumAddressFromSignedMessage:
              this.ui.ethereumAddressFromSignedMessage({
                request: e,
                onSuccess: r,
              });
              break;
            default:
              n();
              break;
          }
        }
        onSessionConfigChanged(t) {}
      }
      (x.accountRequestCallbackIds = new Set()),
        s([u.default], x.prototype, 'resetAndReload', null),
        s([u.default], x.prototype, 'handleIncomingEvent', null),
        (e.WalletSDKRelay = x);
    },
    cqoG: function (t, e, n) {
      var r = n('P7XM'),
        i = n('olUY'),
        s = n('tnIz'),
        o = n('hwdV').Buffer,
        a = new Array(64);
      function u() {
        this.init(), (this._w = a), s.call(this, 64, 56);
      }
      r(u, i),
        (u.prototype.init = function () {
          return (
            (this._a = 3238371032),
            (this._b = 914150663),
            (this._c = 812702999),
            (this._d = 4144912697),
            (this._e = 4290775857),
            (this._f = 1750603025),
            (this._g = 1694076839),
            (this._h = 3204075428),
            this
          );
        }),
        (u.prototype._hash = function () {
          var t = o.allocUnsafe(28);
          return (
            t.writeInt32BE(this._a, 0),
            t.writeInt32BE(this._b, 4),
            t.writeInt32BE(this._c, 8),
            t.writeInt32BE(this._d, 12),
            t.writeInt32BE(this._e, 16),
            t.writeInt32BE(this._f, 20),
            t.writeInt32BE(this._g, 24),
            t
          );
        }),
        (t.exports = u);
    },
    dEwP: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return s;
      });
      var r = n('F/XL'),
        i = n('Txjg');
      function s() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return Object(i['a'])()(r['a'].apply(void 0, t));
      }
    },
    dzgT: function (t, e, n) {
      'use strict';
      n.d(e, 'b', function () {
        return l;
      }),
        n.d(e, 'a', function () {
          return h;
        });
      var r = n('mrSG'),
        i = n('nkY7'),
        s = n('isby'),
        o = n('MGBS'),
        a = n('zotm'),
        u = n('IUTb'),
        c = {};
      function l() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var n = void 0,
          r = void 0;
        return (
          Object(i['a'])(t[t.length - 1]) && (r = t.pop()),
          'function' === typeof t[t.length - 1] && (n = t.pop()),
          1 === t.length && Object(s['a'])(t[0]) && (t = t[0]),
          Object(u['a'])(t, r).lift(new h(n))
        );
      }
      var h = (function () {
          function t(t) {
            this.resultSelector = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new d(t, this.resultSelector));
            }),
            t
          );
        })(),
        d = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return (
              (r.resultSelector = n),
              (r.active = 0),
              (r.values = []),
              (r.observables = []),
              r
            );
          }
          return (
            r['__extends'](e, t),
            (e.prototype._next = function (t) {
              this.values.push(c), this.observables.push(t);
            }),
            (e.prototype._complete = function () {
              var t = this.observables,
                e = t.length;
              if (0 === e) this.destination.complete();
              else {
                (this.active = e), (this.toRespond = e);
                for (var n = 0; n < e; n++) {
                  var r = t[n];
                  this.add(Object(a['a'])(this, r, void 0, n));
                }
              }
            }),
            (e.prototype.notifyComplete = function (t) {
              0 === (this.active -= 1) && this.destination.complete();
            }),
            (e.prototype.notifyNext = function (t, e, n) {
              var r = this.values,
                i = r[n],
                s = this.toRespond
                  ? i === c
                    ? --this.toRespond
                    : this.toRespond
                  : 0;
              (r[n] = e),
                0 === s &&
                  (this.resultSelector
                    ? this._tryResultSelector(r)
                    : this.destination.next(r.slice()));
            }),
            (e.prototype._tryResultSelector = function (t) {
              var e;
              try {
                e = this.resultSelector.apply(this, t);
              } catch (n) {
                return void this.destination.error(n);
              }
              this.destination.next(e);
            }),
            e
          );
        })(o['a']);
    },
    e9aO: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.RelayMessageType = void 0),
        (function (t) {
          (t['SESSION_ID_REQUEST'] = 'SESSION_ID_REQUEST'),
            (t['SESSION_ID_RESPONSE'] = 'SESSION_ID_RESPONSE'),
            (t['LINKED'] = 'LINKED'),
            (t['UNLINKED'] = 'UNLINKED'),
            (t['WEB3_REQUEST'] = 'WEB3_REQUEST'),
            (t['WEB3_REQUEST_CANCELED'] = 'WEB3_REQUEST_CANCELED'),
            (t['WEB3_RESPONSE'] = 'WEB3_RESPONSE');
        })(e.RelayMessageType || (e.RelayMessageType = {}));
    },
    eXAK: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.RxWebSocket = e.ConnectionState = void 0);
      const r = n('DtyJ'),
        i = n('ahDk');
      var s;
      (function (t) {
        (t[(t['DISCONNECTED'] = 0)] = 'DISCONNECTED'),
          (t[(t['CONNECTING'] = 1)] = 'CONNECTING'),
          (t[(t['CONNECTED'] = 2)] = 'CONNECTED');
      })((s = e.ConnectionState || (e.ConnectionState = {})));
      class o {
        constructor(t, e = WebSocket) {
          (this.WebSocketClass = e),
            (this.webSocket = null),
            (this.connectionStateSubject = new r.BehaviorSubject(
              s.DISCONNECTED,
            )),
            (this.incomingDataSubject = new r.Subject()),
            (this.url = t.replace(/^http/, 'ws'));
        }
        connect() {
          return this.webSocket
            ? (0, r.throwError)(new Error('webSocket object is not null'))
            : new r.Observable((t) => {
                let e;
                try {
                  this.webSocket = e = new this.WebSocketClass(this.url);
                } catch (n) {
                  return void t.error(n);
                }
                this.connectionStateSubject.next(s.CONNECTING),
                  (e.onclose = (e) => {
                    this.clearWebSocket(),
                      t.error(
                        new Error(`websocket error ${e.code}: ${e.reason}`),
                      ),
                      this.connectionStateSubject.next(s.DISCONNECTED);
                  }),
                  (e.onopen = (e) => {
                    t.next(),
                      t.complete(),
                      this.connectionStateSubject.next(s.CONNECTED);
                  }),
                  (e.onmessage = (t) => {
                    this.incomingDataSubject.next(t.data);
                  });
              }).pipe((0, i.take)(1));
        }
        disconnect() {
          const { webSocket: t } = this;
          if (t) {
            this.clearWebSocket(),
              this.connectionStateSubject.next(s.DISCONNECTED);
            try {
              t.close();
            } catch (e) {}
          }
        }
        get connectionState$() {
          return this.connectionStateSubject.asObservable();
        }
        get incomingData$() {
          return this.incomingDataSubject.asObservable();
        }
        get incomingJSONData$() {
          return this.incomingData$.pipe(
            (0, i.flatMap)((t) => {
              let e;
              try {
                e = JSON.parse(t);
              } catch (n) {
                return (0, r.empty)();
              }
              return (0, r.of)(e);
            }),
          );
        }
        sendData(t) {
          const { webSocket: e } = this;
          if (!e) throw new Error('websocket is not connected');
          e.send(t);
        }
        clearWebSocket() {
          const { webSocket: t } = this;
          t &&
            ((this.webSocket = null),
            (t.onclose = null),
            (t.onerror = null),
            (t.onmessage = null),
            (t.onopen = null));
        }
      }
      e.RxWebSocket = o;
    },
    eoIc: function (t, e, n) {
      'use strict';
      var r =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.CoinbaseAppSteps =
          e.CoinbaseWalletSteps =
          e.ConnectItem =
          e.ConnectContent =
            void 0);
      const i = r(n('iuhU')),
        s = n('2mXy'),
        o = n('MOxe'),
        a = n('Qann'),
        u = n('zphe'),
        c = n('TagH'),
        l = r(n('zqVs')),
        h = r(n('J7gi')),
        d = n('XVFd'),
        f = r(n('+i6M')),
        p = r(n('4e0E')),
        b = n('1LlY'),
        g = n('Bnji'),
        m = n('4xR1'),
        y = r(n('LDUz')),
        v = {
          'coinbase-wallet-app': {
            title: 'Coinbase Wallet app',
            description: 'Connect with your self-custody wallet',
            icon: h.default,
            steps: E,
          },
          'coinbase-app': {
            title: 'Coinbase app',
            description: 'Connect with your Coinbase account',
            icon: l.default,
            steps: x,
          },
        },
        _ = (t) => {
          switch (t) {
            case 'coinbase-app':
              return f.default;
            case 'coinbase-wallet-app':
            default:
              return p.default;
          }
        },
        w = (t) => ('light' === t ? '#FFFFFF' : '#0A0B0D');
      function S(t) {
        const { theme: e } = t,
          [n, r] = (0, o.useState)('coinbase-wallet-app'),
          l = (0, o.useCallback)((t) => {
            r(t);
          }, []),
          h = (0, a.createQrUrl)(
            t.sessionId,
            t.sessionSecret,
            t.linkAPIUrl,
            t.isParentConnection,
            t.version,
            t.chainId,
          ),
          d = v[n];
        if (!n) return null;
        const f = d.steps,
          p = 'coinbase-app' === n;
        return (0, s.h)(
          'div',
          {
            'data-testid': 'connect-content',
            class: (0, i.default)('-cbwsdk-connect-content', e),
          },
          (0, s.h)('style', null, y.default),
          (0, s.h)(
            'div',
            { class: '-cbwsdk-connect-content-header' },
            (0, s.h)(
              'h2',
              { class: (0, i.default)('-cbwsdk-connect-content-heading', e) },
              'Scan to connect with one of our mobile apps',
            ),
            t.onCancel &&
              (0, s.h)(
                'button',
                {
                  type: 'button',
                  class: '-cbwsdk-cancel-button',
                  onClick: t.onCancel,
                },
                (0, s.h)(c.CloseIcon, {
                  fill: 'light' === e ? '#0A0B0D' : '#FFFFFF',
                }),
              ),
          ),
          (0, s.h)(
            'div',
            { class: '-cbwsdk-connect-content-layout' },
            (0, s.h)(
              'div',
              { class: '-cbwsdk-connect-content-column-left' },
              (0, s.h)(
                'div',
                null,
                Object.entries(v).map(([t, r]) =>
                  (0, s.h)(M, {
                    key: t,
                    title: r.title,
                    description: r.description,
                    icon: r.icon,
                    selected: n === t,
                    onClick: () => l(t),
                    theme: e,
                  }),
                ),
              ),
              p &&
                (0, s.h)(
                  'div',
                  {
                    class: (0, i.default)(
                      '-cbwsdk-connect-content-update-app',
                      e,
                    ),
                  },
                  'Don\u2019t see a ',
                  (0, s.h)('strong', null, 'Scan'),
                  ' option? Update your Coinbase app to the latest version and try again.',
                ),
            ),
            (0, s.h)(
              'div',
              { class: '-cbwsdk-connect-content-column-right' },
              (0, s.h)(
                'div',
                { class: '-cbwsdk-connect-content-qr-wrapper' },
                (0, s.h)(g.QRCode, {
                  content: h,
                  width: 200,
                  height: 200,
                  fgColor: '#000',
                  bgColor: 'transparent',
                  image: { svg: _(n), width: 25, height: 25 },
                }),
                (0, s.h)('input', {
                  type: 'hidden',
                  name: 'cbw-cbwsdk-version',
                  value: u.LIB_VERSION,
                }),
                (0, s.h)('input', { type: 'hidden', value: h }),
              ),
              (0, s.h)(f, { theme: e }),
              !t.isConnected &&
                (0, s.h)(
                  'div',
                  {
                    'data-testid': 'connecting-spinner',
                    class: (0, i.default)(
                      '-cbwsdk-connect-content-qr-connecting',
                      e,
                    ),
                  },
                  (0, s.h)(m.Spinner, {
                    size: 36,
                    color: 'dark' === e ? '#FFF' : '#000',
                  }),
                  (0, s.h)('p', null, 'Connecting...'),
                ),
            ),
          ),
        );
      }
      function M({
        title: t,
        description: e,
        icon: n,
        selected: r,
        theme: o,
        onClick: a,
      }) {
        return (0, s.h)(
          'div',
          {
            onClick: a,
            class: (0, i.default)('-cbwsdk-connect-item', o, { selected: r }),
          },
          (0, s.h)('div', null, (0, s.h)('img', { src: n, alt: t })),
          (0, s.h)(
            'div',
            { class: '-cbwsdk-connect-item-copy-wrapper' },
            (0, s.h)('h3', { class: '-cbwsdk-connect-item-title' }, t),
            (0, s.h)('p', { class: '-cbwsdk-connect-item-description' }, e),
          ),
        );
      }
      function E({ theme: t }) {
        return (0, s.h)(
          'ol',
          { class: '-cbwsdk-wallet-steps' },
          (0, s.h)(
            'li',
            { class: (0, i.default)('-cbwsdk-wallet-steps-item', t) },
            (0, s.h)(
              'div',
              { class: '-cbwsdk-wallet-steps-item-wrapper' },
              'Open Coinbase Wallet app',
            ),
          ),
          (0, s.h)(
            'li',
            { class: (0, i.default)('-cbwsdk-wallet-steps-item', t) },
            (0, s.h)(
              'div',
              { class: '-cbwsdk-wallet-steps-item-wrapper' },
              (0, s.h)(
                'span',
                null,
                'Tap ',
                (0, s.h)('strong', null, 'Scan'),
                ' ',
              ),
              (0, s.h)(
                'span',
                {
                  class: (0, i.default)(
                    '-cbwsdk-wallet-steps-pad-left',
                    '-cbwsdk-wallet-steps-icon',
                    t,
                  ),
                },
                (0, s.h)(d.QRCodeIcon, { fill: w(t) }),
              ),
            ),
          ),
        );
      }
      function x({ theme: t }) {
        return (0, s.h)(
          'ol',
          { class: '-cbwsdk-wallet-steps' },
          (0, s.h)(
            'li',
            { class: (0, i.default)('-cbwsdk-wallet-steps-item', t) },
            (0, s.h)(
              'div',
              { class: '-cbwsdk-wallet-steps-item-wrapper' },
              'Open Coinbase app',
            ),
          ),
          (0, s.h)(
            'li',
            { class: (0, i.default)('-cbwsdk-wallet-steps-item', t) },
            (0, s.h)(
              'div',
              { class: '-cbwsdk-wallet-steps-item-wrapper' },
              (0, s.h)('span', null, 'Tap ', (0, s.h)('strong', null, 'More')),
              (0, s.h)(
                'span',
                {
                  class: (0, i.default)(
                    '-cbwsdk-wallet-steps-pad-left',
                    '-cbwsdk-wallet-steps-icon',
                    t,
                  ),
                },
                (0, s.h)(b.StatusDotIcon, { fill: w(t) }),
              ),
              (0, s.h)(
                'span',
                { class: '-cbwsdk-wallet-steps-pad-left' },
                'then ',
                (0, s.h)('strong', null, 'Scan'),
              ),
              (0, s.h)(
                'span',
                {
                  class: (0, i.default)(
                    '-cbwsdk-wallet-steps-pad-left',
                    '-cbwsdk-wallet-steps-icon',
                    t,
                  ),
                },
                (0, s.h)(d.QRCodeIcon, { fill: w(t) }),
              ),
            ),
          ),
        );
      }
      (e.ConnectContent = S),
        (e.ConnectItem = M),
        (e.CoinbaseWalletSteps = E),
        (e.CoinbaseAppSteps = x);
    },
    'eq/O': function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.Web3RequestCanceledMessage = void 0);
      const r = n('e9aO');
      function i(t) {
        return { type: r.RelayMessageType.WEB3_REQUEST_CANCELED, id: t };
      }
      e.Web3RequestCanceledMessage = i;
    },
    fnjI: function (t, e, n) {
      var r = n('P7XM'),
        i = n('tnIz'),
        s = n('hwdV').Buffer,
        o = [1518500249, 1859775393, -1894007588, -899497514],
        a = new Array(80);
      function u() {
        this.init(), (this._w = a), i.call(this, 64, 56);
      }
      function c(t) {
        return (t << 1) | (t >>> 31);
      }
      function l(t) {
        return (t << 5) | (t >>> 27);
      }
      function h(t) {
        return (t << 30) | (t >>> 2);
      }
      function d(t, e, n, r) {
        return 0 === t
          ? (e & n) | (~e & r)
          : 2 === t
          ? (e & n) | (e & r) | (n & r)
          : e ^ n ^ r;
      }
      r(u, i),
        (u.prototype.init = function () {
          return (
            (this._a = 1732584193),
            (this._b = 4023233417),
            (this._c = 2562383102),
            (this._d = 271733878),
            (this._e = 3285377520),
            this
          );
        }),
        (u.prototype._update = function (t) {
          for (
            var e = this._w,
              n = 0 | this._a,
              r = 0 | this._b,
              i = 0 | this._c,
              s = 0 | this._d,
              a = 0 | this._e,
              u = 0;
            u < 16;
            ++u
          )
            e[u] = t.readInt32BE(4 * u);
          for (; u < 80; ++u)
            e[u] = c(e[u - 3] ^ e[u - 8] ^ e[u - 14] ^ e[u - 16]);
          for (var f = 0; f < 80; ++f) {
            var p = ~~(f / 20),
              b = (l(n) + d(p, r, i, s) + a + e[f] + o[p]) | 0;
            (a = s), (s = i), (i = h(r)), (r = n), (n = b);
          }
          (this._a = (n + this._a) | 0),
            (this._b = (r + this._b) | 0),
            (this._c = (i + this._c) | 0),
            (this._d = (s + this._d) | 0),
            (this._e = (a + this._e) | 0);
        }),
        (u.prototype._hash = function () {
          var t = s.allocUnsafe(20);
          return (
            t.writeInt32BE(0 | this._a, 0),
            t.writeInt32BE(0 | this._b, 4),
            t.writeInt32BE(0 | this._c, 8),
            t.writeInt32BE(0 | this._d, 12),
            t.writeInt32BE(0 | this._e, 16),
            t
          );
        }),
        (t.exports = u);
    },
    gI3B: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return a;
      });
      var r = n('6blF'),
        i = n('T1DM'),
        s = n('/21U'),
        o = n('nkY7');
      function a(t, e, n) {
        void 0 === t && (t = 0);
        var a = -1;
        return (
          Object(s['a'])(e)
            ? (a = Number(e) < 1 ? 1 : Number(e))
            : Object(o['a'])(e) && (n = e),
          Object(o['a'])(n) || (n = i['a']),
          new r['a'](function (e) {
            var r = Object(s['a'])(t) ? t : +t - n.now();
            return n.schedule(u, r, { index: 0, period: a, subscriber: e });
          })
        );
      }
      function u(t) {
        var e = t.index,
          n = t.period,
          r = t.subscriber;
        if ((r.next(e), !r.closed)) {
          if (-1 === n) return r.complete();
          (t.index = e + 1), this.schedule(t, n);
        }
      }
    },
    h9Dq: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return o;
      });
      var r = n('mrSG'),
        i = n('pugT'),
        s = (function (t) {
          function e(e, n) {
            return t.call(this) || this;
          }
          return (
            r['__extends'](e, t),
            (e.prototype.schedule = function (t, e) {
              return void 0 === e && (e = 0), this;
            }),
            e
          );
        })(i['a']),
        o = (function (t) {
          function e(e, n) {
            var r = t.call(this, e, n) || this;
            return (r.scheduler = e), (r.work = n), (r.pending = !1), r;
          }
          return (
            r['__extends'](e, t),
            (e.prototype.schedule = function (t, e) {
              if ((void 0 === e && (e = 0), this.closed)) return this;
              this.state = t;
              var n = this.id,
                r = this.scheduler;
              return (
                null != n && (this.id = this.recycleAsyncId(r, n, e)),
                (this.pending = !0),
                (this.delay = e),
                (this.id = this.id || this.requestAsyncId(r, this.id, e)),
                this
              );
            }),
            (e.prototype.requestAsyncId = function (t, e, n) {
              return (
                void 0 === n && (n = 0), setInterval(t.flush.bind(t, this), n)
              );
            }),
            (e.prototype.recycleAsyncId = function (t, e, n) {
              if (
                (void 0 === n && (n = 0),
                null !== n && this.delay === n && !1 === this.pending)
              )
                return e;
              clearInterval(e);
            }),
            (e.prototype.execute = function (t, e) {
              if (this.closed) return new Error('executing a cancelled action');
              this.pending = !1;
              var n = this._execute(t, e);
              if (n) return n;
              !1 === this.pending &&
                null != this.id &&
                (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
            }),
            (e.prototype._execute = function (t, e) {
              var n = !1,
                r = void 0;
              try {
                this.work(t);
              } catch (i) {
                (n = !0), (r = (!!i && i) || new Error(i));
              }
              if (n) return this.unsubscribe(), r;
            }),
            (e.prototype._unsubscribe = function () {
              var t = this.id,
                e = this.scheduler,
                n = e.actions,
                r = n.indexOf(this);
              (this.work = null),
                (this.state = null),
                (this.pending = !1),
                (this.scheduler = null),
                -1 !== r && n.splice(r, 1),
                null != t && (this.id = this.recycleAsyncId(e, t, null)),
                (this.delay = null);
            }),
            e
          );
        })(s);
    },
    h9tj: function (t, e, n) {
      'use strict';
      const r = (t, e, n, r) =>
          function (...i) {
            const s = e.promiseModule;
            return new s((s, o) => {
              e.multiArgs
                ? i.push((...t) => {
                    e.errorFirst ? (t[0] ? o(t) : (t.shift(), s(t))) : s(t);
                  })
                : e.errorFirst
                ? i.push((t, e) => {
                    t ? o(t) : s(e);
                  })
                : i.push(s);
              const a = this === n ? r : this;
              Reflect.apply(t, a, i);
            });
          },
        i = new WeakMap();
      t.exports = (t, e) => {
        e = {
          exclude: [/.+(?:Sync|Stream)$/],
          errorFirst: !0,
          promiseModule: Promise,
          ...e,
        };
        const n = typeof t;
        if (null === t || ('object' !== n && 'function' !== n))
          throw new TypeError(
            `Expected \`input\` to be a \`Function\` or \`Object\`, got \`${
              null === t ? 'null' : n
            }\``,
          );
        const s = (t, n) => {
            let r = i.get(t);
            if ((r || ((r = {}), i.set(t, r)), n in r)) return r[n];
            const s = (t) =>
                'string' === typeof t || 'symbol' === typeof n
                  ? n === t
                  : t.test(n),
              o = Reflect.getOwnPropertyDescriptor(t, n),
              a = void 0 === o || o.writable || o.configurable,
              u = e.include ? e.include.some(s) : !e.exclude.some(s),
              c = u && a;
            return (r[n] = c), c;
          },
          o = new WeakMap(),
          a = new Proxy(t, {
            apply(t, n, i) {
              const s = o.get(t);
              if (s) return Reflect.apply(s, n, i);
              const u = e.excludeMain ? t : r(t, e, a, t);
              return o.set(t, u), Reflect.apply(u, n, i);
            },
            get(t, n) {
              const i = t[n];
              if (!s(t, n) || i === Function.prototype[n]) return i;
              const u = o.get(i);
              if (u) return u;
              if ('function' === typeof i) {
                const n = r(i, e, a, t);
                return o.set(i, n), n;
              }
              return i;
            },
          });
        return a;
      };
    },
    hJOY: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.ethErrors = void 0);
      const r = n('aAza'),
        i = n('qiyp'),
        s = n('RlVT');
      function o(t, e) {
        const [n, s] = u(e);
        return new r.EthereumRpcError(t, n || i.getMessageFromCode(t), s);
      }
      function a(t, e) {
        const [n, s] = u(e);
        return new r.EthereumProviderError(t, n || i.getMessageFromCode(t), s);
      }
      function u(t) {
        if (t) {
          if ('string' === typeof t) return [t];
          if ('object' === typeof t && !Array.isArray(t)) {
            const { message: e, data: n } = t;
            if (e && 'string' !== typeof e)
              throw new Error('Must specify string message.');
            return [e || void 0, n];
          }
        }
        return [];
      }
      e.ethErrors = {
        rpc: {
          parse: (t) => o(s.errorCodes.rpc.parse, t),
          invalidRequest: (t) => o(s.errorCodes.rpc.invalidRequest, t),
          invalidParams: (t) => o(s.errorCodes.rpc.invalidParams, t),
          methodNotFound: (t) => o(s.errorCodes.rpc.methodNotFound, t),
          internal: (t) => o(s.errorCodes.rpc.internal, t),
          server: (t) => {
            if (!t || 'object' !== typeof t || Array.isArray(t))
              throw new Error(
                'Ethereum RPC Server errors must provide single object argument.',
              );
            const { code: e } = t;
            if (!Number.isInteger(e) || e > -32005 || e < -32099)
              throw new Error(
                '"code" must be an integer such that: -32099 <= code <= -32005',
              );
            return o(e, t);
          },
          invalidInput: (t) => o(s.errorCodes.rpc.invalidInput, t),
          resourceNotFound: (t) => o(s.errorCodes.rpc.resourceNotFound, t),
          resourceUnavailable: (t) =>
            o(s.errorCodes.rpc.resourceUnavailable, t),
          transactionRejected: (t) =>
            o(s.errorCodes.rpc.transactionRejected, t),
          methodNotSupported: (t) => o(s.errorCodes.rpc.methodNotSupported, t),
          limitExceeded: (t) => o(s.errorCodes.rpc.limitExceeded, t),
        },
        provider: {
          userRejectedRequest: (t) =>
            a(s.errorCodes.provider.userRejectedRequest, t),
          unauthorized: (t) => a(s.errorCodes.provider.unauthorized, t),
          unsupportedMethod: (t) =>
            a(s.errorCodes.provider.unsupportedMethod, t),
          disconnected: (t) => a(s.errorCodes.provider.disconnected, t),
          chainDisconnected: (t) =>
            a(s.errorCodes.provider.chainDisconnected, t),
          custom: (t) => {
            if (!t || 'object' !== typeof t || Array.isArray(t))
              throw new Error(
                'Ethereum Provider custom errors must provide single object argument.',
              );
            const { code: e, message: n, data: i } = t;
            if (!n || 'string' !== typeof n)
              throw new Error('"message" must be a nonempty string');
            return new r.EthereumProviderError(e, n, i);
          },
        },
      };
    },
    hwdV: function (t, e, n) {
      var r = n('HDXh'),
        i = r.Buffer;
      function s(t, e) {
        for (var n in t) e[n] = t[n];
      }
      function o(t, e, n) {
        return i(t, e, n);
      }
      i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow
        ? (t.exports = r)
        : (s(r, e), (e.Buffer = o)),
        (o.prototype = Object.create(i.prototype)),
        s(i, o),
        (o.from = function (t, e, n) {
          if ('number' === typeof t)
            throw new TypeError('Argument must not be a number');
          return i(t, e, n);
        }),
        (o.alloc = function (t, e, n) {
          if ('number' !== typeof t)
            throw new TypeError('Argument must be a number');
          var r = i(t);
          return (
            void 0 !== e
              ? 'string' === typeof n
                ? r.fill(e, n)
                : r.fill(e)
              : r.fill(0),
            r
          );
        }),
        (o.allocUnsafe = function (t) {
          if ('number' !== typeof t)
            throw new TypeError('Argument must be a number');
          return i(t);
        }),
        (o.allocUnsafeSlow = function (t) {
          if ('number' !== typeof t)
            throw new TypeError('Argument must be a number');
          return r.SlowBuffer(t);
        });
    },
    hyCD: function (t, e, n) {
      const r = n('zvTS'),
        i = n('0QlC'),
        { incrementHexInt: s } = n('UJ2e');
      class o extends r {
        constructor({ provider: t }) {
          super(), (this.type = 'tx'), (this.provider = t);
        }
        async update({ oldBlock: t }) {
          const e = t,
            n = s(t),
            r = await i({ provider: this.provider, fromBlock: n, toBlock: e }),
            o = [];
          for (const i of r) o.push(...i.transactions);
          this.addResults(o);
        }
      }
      t.exports = o;
    },
    i4X3: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return b;
      });
      var r = n('6blF'),
        i = n('pugT'),
        s = n('xTla');
      function o(t, e) {
        return new r['a'](function (n) {
          var r = new i['a']();
          return (
            r.add(
              e.schedule(function () {
                var i = t[s['a']]();
                r.add(
                  i.subscribe({
                    next: function (t) {
                      r.add(
                        e.schedule(function () {
                          return n.next(t);
                        }),
                      );
                    },
                    error: function (t) {
                      r.add(
                        e.schedule(function () {
                          return n.error(t);
                        }),
                      );
                    },
                    complete: function () {
                      r.add(
                        e.schedule(function () {
                          return n.complete();
                        }),
                      );
                    },
                  }),
                );
              }),
            ),
            r
          );
        });
      }
      function a(t, e) {
        return new r['a'](function (n) {
          var r = new i['a']();
          return (
            r.add(
              e.schedule(function () {
                return t.then(
                  function (t) {
                    r.add(
                      e.schedule(function () {
                        n.next(t),
                          r.add(
                            e.schedule(function () {
                              return n.complete();
                            }),
                          );
                      }),
                    );
                  },
                  function (t) {
                    r.add(
                      e.schedule(function () {
                        return n.error(t);
                      }),
                    );
                  },
                );
              }),
            ),
            r
          );
        });
      }
      var u = n('JF+6'),
        c = n('En8+');
      function l(t, e) {
        if (!t) throw new Error('Iterable cannot be null');
        return new r['a'](function (n) {
          var r,
            s = new i['a']();
          return (
            s.add(function () {
              r && 'function' === typeof r.return && r.return();
            }),
            s.add(
              e.schedule(function () {
                (r = t[c['a']]()),
                  s.add(
                    e.schedule(function () {
                      if (!n.closed) {
                        var t, e;
                        try {
                          var i = r.next();
                          (t = i.value), (e = i.done);
                        } catch (s) {
                          return void n.error(s);
                        }
                        e ? n.complete() : (n.next(t), this.schedule());
                      }
                    }),
                  );
              }),
            ),
            s
          );
        });
      }
      function h(t) {
        return t && 'function' === typeof t[s['a']];
      }
      var d = n('/WYv'),
        f = n('2ePl');
      function p(t) {
        return t && 'function' === typeof t[c['a']];
      }
      function b(t, e) {
        if (null != t) {
          if (h(t)) return o(t, e);
          if (Object(d['a'])(t)) return a(t, e);
          if (Object(f['a'])(t)) return Object(u['a'])(t, e);
          if (p(t) || 'string' === typeof t) return l(t, e);
        }
        throw new TypeError(
          ((null !== t && typeof t) || t) + ' is not observable',
        );
      }
    },
    iKJY: function (t, e, n) {
      'use strict';
      (function (e) {
        var r =
          Object.keys ||
          function (t) {
            var e = [];
            for (var n in t) e.push(n);
            return e;
          };
        t.exports = c;
        var i = n('aKBX'),
          s = n('m9xF');
        n('P7XM')(c, i);
        for (var o = r(s.prototype), a = 0; a < o.length; a++) {
          var u = o[a];
          c.prototype[u] || (c.prototype[u] = s.prototype[u]);
        }
        function c(t) {
          if (!(this instanceof c)) return new c(t);
          i.call(this, t),
            s.call(this, t),
            (this.allowHalfOpen = !0),
            t &&
              (!1 === t.readable && (this.readable = !1),
              !1 === t.writable && (this.writable = !1),
              !1 === t.allowHalfOpen &&
                ((this.allowHalfOpen = !1), this.once('end', l)));
        }
        function l() {
          this._writableState.ended || e.nextTick(h, this);
        }
        function h(t) {
          t.end();
        }
        Object.defineProperty(c.prototype, 'writableHighWaterMark', {
          enumerable: !1,
          get: function () {
            return this._writableState.highWaterMark;
          },
        }),
          Object.defineProperty(c.prototype, 'writableBuffer', {
            enumerable: !1,
            get: function () {
              return this._writableState && this._writableState.getBuffer();
            },
          }),
          Object.defineProperty(c.prototype, 'writableLength', {
            enumerable: !1,
            get: function () {
              return this._writableState.length;
            },
          }),
          Object.defineProperty(c.prototype, 'destroyed', {
            enumerable: !1,
            get: function () {
              return (
                void 0 !== this._readableState &&
                void 0 !== this._writableState &&
                this._readableState.destroyed &&
                this._writableState.destroyed
              );
            },
            set: function (t) {
              void 0 !== this._readableState &&
                void 0 !== this._writableState &&
                ((this._readableState.destroyed = t),
                (this._writableState.destroyed = t));
            },
          });
      }).call(this, n('Q2Ig'));
    },
    iLxQ: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return i;
      });
      var r = !1,
        i = {
          Promise: void 0,
          set useDeprecatedSynchronousErrorHandling(t) {
            if (t) {
              var e = new Error();
              e.stack;
            }
            r = t;
          },
          get useDeprecatedSynchronousErrorHandling() {
            return r;
          },
        };
    },
    isby: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return r;
      });
      var r = (function () {
        return (
          Array.isArray ||
          function (t) {
            return t && 'number' === typeof t.length;
          }
        );
      })();
    },
    iuhU: function (t, e, n) {
      'use strict';
      function r(t) {
        var e,
          n,
          i = '';
        if ('string' == typeof t || 'number' == typeof t) i += t;
        else if ('object' == typeof t)
          if (Array.isArray(t))
            for (e = 0; e < t.length; e++)
              t[e] && (n = r(t[e])) && (i && (i += ' '), (i += n));
          else for (e in t) t[e] && (i && (i += ' '), (i += e));
        return i;
      }
      function i() {
        for (var t, e, n = 0, i = ''; n < arguments.length; )
          (t = arguments[n++]) && (e = r(t)) && (i && (i += ' '), (i += e));
        return i;
      }
      n.r(e),
        n.d(e, 'clsx', function () {
          return i;
        }),
        (e['default'] = i);
    },
    'j/1Z': function (t, e) {
      t.exports = function (t) {
        return (
          t &&
          'object' === typeof t &&
          'function' === typeof t.copy &&
          'function' === typeof t.fill &&
          'function' === typeof t.readUInt8
        );
      };
    },
    jFaF: function (t, e, n) {
      'use strict';
      function r(t, e) {
        function n() {
          return !n.pred.apply(n.thisArg, arguments);
        }
        return (n.pred = t), (n.thisArg = e), n;
      }
      n.d(e, 'a', function () {
        return r;
      });
    },
    kFRM: function (t, e, n) {
      'use strict';
      function r(t, e) {
        (t.prototype = Object.create(e.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = e);
      }
      var i = {};
      function s(t, e, n) {
        function s(t, n, r) {
          return 'string' === typeof e ? e : e(t, n, r);
        }
        n || (n = Error);
        var o = (function (t) {
          function e(e, n, r) {
            return t.call(this, s(e, n, r)) || this;
          }
          return r(e, t), e;
        })(n);
        (o.prototype.name = n.name), (o.prototype.code = t), (i[t] = o);
      }
      function o(t, e) {
        if (Array.isArray(t)) {
          var n = t.length;
          return (
            (t = t.map(function (t) {
              return String(t);
            })),
            n > 2
              ? 'one of '
                  .concat(e, ' ')
                  .concat(t.slice(0, n - 1).join(', '), ', or ') + t[n - 1]
              : 2 === n
              ? 'one of '.concat(e, ' ').concat(t[0], ' or ').concat(t[1])
              : 'of '.concat(e, ' ').concat(t[0])
          );
        }
        return 'of '.concat(e, ' ').concat(String(t));
      }
      function a(t, e, n) {
        return t.substr(!n || n < 0 ? 0 : +n, e.length) === e;
      }
      function u(t, e, n) {
        return (
          (void 0 === n || n > t.length) && (n = t.length),
          t.substring(n - e.length, n) === e
        );
      }
      function c(t, e, n) {
        return (
          'number' !== typeof n && (n = 0),
          !(n + e.length > t.length) && -1 !== t.indexOf(e, n)
        );
      }
      s(
        'ERR_INVALID_OPT_VALUE',
        function (t, e) {
          return 'The value "' + e + '" is invalid for option "' + t + '"';
        },
        TypeError,
      ),
        s(
          'ERR_INVALID_ARG_TYPE',
          function (t, e, n) {
            var r, i;
            if (
              ('string' === typeof e && a(e, 'not ')
                ? ((r = 'must not be'), (e = e.replace(/^not /, '')))
                : (r = 'must be'),
              u(t, ' argument'))
            )
              i = 'The '.concat(t, ' ').concat(r, ' ').concat(o(e, 'type'));
            else {
              var s = c(t, '.') ? 'property' : 'argument';
              i = 'The "'
                .concat(t, '" ')
                .concat(s, ' ')
                .concat(r, ' ')
                .concat(o(e, 'type'));
            }
            return (i += '. Received type '.concat(typeof n)), i;
          },
          TypeError,
        ),
        s('ERR_STREAM_PUSH_AFTER_EOF', 'stream.push() after EOF'),
        s('ERR_METHOD_NOT_IMPLEMENTED', function (t) {
          return 'The ' + t + ' method is not implemented';
        }),
        s('ERR_STREAM_PREMATURE_CLOSE', 'Premature close'),
        s('ERR_STREAM_DESTROYED', function (t) {
          return 'Cannot call ' + t + ' after a stream was destroyed';
        }),
        s('ERR_MULTIPLE_CALLBACK', 'Callback called multiple times'),
        s('ERR_STREAM_CANNOT_PIPE', 'Cannot pipe, not readable'),
        s('ERR_STREAM_WRITE_AFTER_END', 'write after end'),
        s(
          'ERR_STREAM_NULL_VALUES',
          'May not write null values to stream',
          TypeError,
        ),
        s(
          'ERR_UNKNOWN_ENCODING',
          function (t) {
            return 'Unknown encoding: ' + t;
          },
          TypeError,
        ),
        s(
          'ERR_STREAM_UNSHIFT_AFTER_END_EVENT',
          'stream.unshift() after end event',
        ),
        (t.exports.codes = i);
    },
    'kK/L': function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.WalletUIError = void 0);
      class r extends Error {
        constructor(t, e) {
          super(t), (this.message = t), (this.errorCode = e);
        }
      }
      (e.WalletUIError = r),
        (r.UserRejectedRequest = new r('User rejected request')),
        (r.SwitchEthereumChainUnsupportedChainId = new r(
          'Unsupported chainId',
          4902,
        ));
    },
    kqlA: function (t, e, n) {
      (function (e) {
        const { Transform: r } = n('45ke');
        t.exports = (t) =>
          class n extends r {
            constructor(e, n, r, i) {
              super(i),
                (this._rate = e),
                (this._capacity = n),
                (this._delimitedSuffix = r),
                (this._options = i),
                (this._state = new t()),
                this._state.initialize(e, n),
                (this._finalized = !1);
            }
            _transform(t, e, n) {
              let r = null;
              try {
                this.update(t, e);
              } catch (i) {
                r = i;
              }
              n(r);
            }
            _flush() {}
            _read(t) {
              this.push(this.squeeze(t));
            }
            update(t, n) {
              if (!e.isBuffer(t) && 'string' !== typeof t)
                throw new TypeError('Data must be a string or a buffer');
              if (this._finalized) throw new Error('Squeeze already called');
              return (
                e.isBuffer(t) || (t = e.from(t, n)), this._state.absorb(t), this
              );
            }
            squeeze(t, e) {
              this._finalized ||
                ((this._finalized = !0),
                this._state.absorbLastFewBits(this._delimitedSuffix));
              let n = this._state.squeeze(t);
              return void 0 !== e && (n = n.toString(e)), n;
            }
            _resetState() {
              return this._state.initialize(this._rate, this._capacity), this;
            }
            _clone() {
              const t = new n(
                this._rate,
                this._capacity,
                this._delimitedSuffix,
                this._options,
              );
              return (
                this._state.copy(t._state), (t._finalized = this._finalized), t
              );
            }
          };
      }).call(this, n('HDXh').Buffer);
    },
    lFtt: function (t, e, n) {
      (function (e) {
        const r = n('aYMp'),
          i = n('pUf3');
        function s(t) {
          return e.allocUnsafe(t).fill(0);
        }
        function o(t, e, n) {
          const r = s(e);
          return (
            (t = u(t)),
            n
              ? t.length < e
                ? (t.copy(r), r)
                : t.slice(0, e)
              : t.length < e
              ? (t.copy(r, e - t.length), r)
              : t.slice(-e)
          );
        }
        function a(t, e) {
          return o(t, e, !0);
        }
        function u(t) {
          if (!e.isBuffer(t))
            if (Array.isArray(t)) t = e.from(t);
            else if ('string' === typeof t)
              t = d(t) ? e.from(h(f(t)), 'hex') : e.from(t);
            else if ('number' === typeof t) t = intToBuffer(t);
            else if (null === t || void 0 === t) t = e.allocUnsafe(0);
            else if (i.isBN(t)) t = t.toArrayLike(e);
            else {
              if (!t.toArray) throw new Error('invalid type');
              t = e.from(t.toArray());
            }
          return t;
        }
        function c(t) {
          return (t = u(t)), '0x' + t.toString('hex');
        }
        function l(t, e) {
          return (
            (t = u(t)),
            e || (e = 256),
            r('keccak' + e)
              .update(t)
              .digest()
          );
        }
        function h(t) {
          return t.length % 2 ? '0' + t : t;
        }
        function d(t) {
          return 'string' === typeof t && t.match(/^0x[0-9A-Fa-f]*$/);
        }
        function f(t) {
          return 'string' === typeof t && t.startsWith('0x') ? t.slice(2) : t;
        }
        t.exports = {
          zeros: s,
          setLength: o,
          setLengthRight: a,
          isHexString: d,
          stripHexPrefix: f,
          toBuffer: u,
          bufferToHex: c,
          keccak: l,
        };
      }).call(this, n('HDXh').Buffer);
    },
    lYZG: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return o;
      });
      var r = n('6blF'),
        i = n('0/uQ'),
        s = n('G5J1');
      function o(t) {
        return new r['a'](function (e) {
          var n;
          try {
            n = t();
          } catch (o) {
            return void e.error(o);
          }
          var r = n ? Object(i['a'])(n) : Object(s['b'])();
          return r.subscribe(e);
        });
      }
    },
    llQS: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.isWeb3ResponseMessage = e.Web3ResponseMessage = void 0);
      const r = n('e9aO');
      function i(t) {
        return Object.assign({ type: r.RelayMessageType.WEB3_RESPONSE }, t);
      }
      function s(t) {
        return t && t.type === r.RelayMessageType.WEB3_RESPONSE;
      }
      (e.Web3ResponseMessage = i), (e.isWeb3ResponseMessage = s);
    },
    llSS: function (t, e, n) {
      'use strict';
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, e, n, r) {
                void 0 === r && (r = n),
                  Object.defineProperty(t, r, {
                    enumerable: !0,
                    get: function () {
                      return e[n];
                    },
                  });
              }
            : function (t, e, n, r) {
                void 0 === r && (r = n), (t[r] = e[n]);
              }),
        i =
          (this && this.__exportStar) ||
          function (t, e) {
            for (var n in t)
              'default' === n ||
                Object.prototype.hasOwnProperty.call(e, n) ||
                r(e, t, n);
          };
      Object.defineProperty(e, '__esModule', { value: !0 }),
        i(n('XW5J'), e),
        i(n('LPKZ'), e),
        i(n('vhlx'), e),
        i(n('RhWC'), e),
        i(n('X+co'), e),
        i(n('1Ti9'), e);
    },
    m9xF: function (t, e, n) {
      'use strict';
      (function (e, r) {
        function i(t) {
          var e = this;
          (this.next = null),
            (this.entry = null),
            (this.finish = function () {
              q(e, t);
            });
        }
        var s;
        (t.exports = I), (I.WritableState = C);
        var o = { deprecate: n('t9FE') },
          a = n('An3H'),
          u = n('HDXh').Buffer,
          c =
            ('undefined' !== typeof e
              ? e
              : 'undefined' !== typeof window
              ? window
              : 'undefined' !== typeof self
              ? self
              : {}
            ).Uint8Array || function () {};
        function l(t) {
          return u.from(t);
        }
        function h(t) {
          return u.isBuffer(t) || t instanceof c;
        }
        var d,
          f = n('rAwC'),
          p = n('TSgA'),
          b = p.getHighWaterMark,
          g = n('kFRM').codes,
          m = g.ERR_INVALID_ARG_TYPE,
          y = g.ERR_METHOD_NOT_IMPLEMENTED,
          v = g.ERR_MULTIPLE_CALLBACK,
          _ = g.ERR_STREAM_CANNOT_PIPE,
          w = g.ERR_STREAM_DESTROYED,
          S = g.ERR_STREAM_NULL_VALUES,
          M = g.ERR_STREAM_WRITE_AFTER_END,
          E = g.ERR_UNKNOWN_ENCODING,
          x = f.errorOrDestroy;
        function k() {}
        function C(t, e, r) {
          (s = s || n('iKJY')),
            (t = t || {}),
            'boolean' !== typeof r && (r = e instanceof s),
            (this.objectMode = !!t.objectMode),
            r && (this.objectMode = this.objectMode || !!t.writableObjectMode),
            (this.highWaterMark = b(this, t, 'writableHighWaterMark', r)),
            (this.finalCalled = !1),
            (this.needDrain = !1),
            (this.ending = !1),
            (this.ended = !1),
            (this.finished = !1),
            (this.destroyed = !1);
          var o = !1 === t.decodeStrings;
          (this.decodeStrings = !o),
            (this.defaultEncoding = t.defaultEncoding || 'utf8'),
            (this.length = 0),
            (this.writing = !1),
            (this.corked = 0),
            (this.sync = !0),
            (this.bufferProcessing = !1),
            (this.onwrite = function (t) {
              P(e, t);
            }),
            (this.writecb = null),
            (this.writelen = 0),
            (this.bufferedRequest = null),
            (this.lastBufferedRequest = null),
            (this.pendingcb = 0),
            (this.prefinished = !1),
            (this.errorEmitted = !1),
            (this.emitClose = !1 !== t.emitClose),
            (this.autoDestroy = !!t.autoDestroy),
            (this.bufferedRequestCount = 0),
            (this.corkedRequestsFree = new i(this));
        }
        function I(t) {
          s = s || n('iKJY');
          var e = this instanceof s;
          if (!e && !d.call(I, this)) return new I(t);
          (this._writableState = new C(t, this, e)),
            (this.writable = !0),
            t &&
              ('function' === typeof t.write && (this._write = t.write),
              'function' === typeof t.writev && (this._writev = t.writev),
              'function' === typeof t.destroy && (this._destroy = t.destroy),
              'function' === typeof t.final && (this._final = t.final)),
            a.call(this);
        }
        function O(t, e) {
          var n = new M();
          x(t, n), r.nextTick(e, n);
        }
        function j(t, e, n, i) {
          var s;
          return (
            null === n
              ? (s = new S())
              : 'string' === typeof n ||
                e.objectMode ||
                (s = new m('chunk', ['string', 'Buffer'], n)),
            !s || (x(t, s), r.nextTick(i, s), !1)
          );
        }
        function A(t, e, n) {
          return (
            t.objectMode ||
              !1 === t.decodeStrings ||
              'string' !== typeof e ||
              (e = u.from(e, n)),
            e
          );
        }
        function R(t, e, n, r, i, s) {
          if (!n) {
            var o = A(e, r, i);
            r !== o && ((n = !0), (i = 'buffer'), (r = o));
          }
          var a = e.objectMode ? 1 : r.length;
          e.length += a;
          var u = e.length < e.highWaterMark;
          if ((u || (e.needDrain = !0), e.writing || e.corked)) {
            var c = e.lastBufferedRequest;
            (e.lastBufferedRequest = {
              chunk: r,
              encoding: i,
              isBuf: n,
              callback: s,
              next: null,
            }),
              c
                ? (c.next = e.lastBufferedRequest)
                : (e.bufferedRequest = e.lastBufferedRequest),
              (e.bufferedRequestCount += 1);
          } else N(t, e, !1, a, r, i, s);
          return u;
        }
        function N(t, e, n, r, i, s, o) {
          (e.writelen = r),
            (e.writecb = o),
            (e.writing = !0),
            (e.sync = !0),
            e.destroyed
              ? e.onwrite(new w('write'))
              : n
              ? t._writev(i, e.onwrite)
              : t._write(i, s, e.onwrite),
            (e.sync = !1);
        }
        function T(t, e, n, i, s) {
          --e.pendingcb,
            n
              ? (r.nextTick(s, i),
                r.nextTick(z, t, e),
                (t._writableState.errorEmitted = !0),
                x(t, i))
              : (s(i), (t._writableState.errorEmitted = !0), x(t, i), z(t, e));
        }
        function L(t) {
          (t.writing = !1),
            (t.writecb = null),
            (t.length -= t.writelen),
            (t.writelen = 0);
        }
        function P(t, e) {
          var n = t._writableState,
            i = n.sync,
            s = n.writecb;
          if ('function' !== typeof s) throw new v();
          if ((L(n), e)) T(t, n, i, e, s);
          else {
            var o = U(n) || t.destroyed;
            o ||
              n.corked ||
              n.bufferProcessing ||
              !n.bufferedRequest ||
              F(t, n),
              i ? r.nextTick(D, t, n, o, s) : D(t, n, o, s);
          }
        }
        function D(t, e, n, r) {
          n || B(t, e), e.pendingcb--, r(), z(t, e);
        }
        function B(t, e) {
          0 === e.length &&
            e.needDrain &&
            ((e.needDrain = !1), t.emit('drain'));
        }
        function F(t, e) {
          e.bufferProcessing = !0;
          var n = e.bufferedRequest;
          if (t._writev && n && n.next) {
            var r = e.bufferedRequestCount,
              s = new Array(r),
              o = e.corkedRequestsFree;
            o.entry = n;
            var a = 0,
              u = !0;
            while (n) (s[a] = n), n.isBuf || (u = !1), (n = n.next), (a += 1);
            (s.allBuffers = u),
              N(t, e, !0, e.length, s, '', o.finish),
              e.pendingcb++,
              (e.lastBufferedRequest = null),
              o.next
                ? ((e.corkedRequestsFree = o.next), (o.next = null))
                : (e.corkedRequestsFree = new i(e)),
              (e.bufferedRequestCount = 0);
          } else {
            while (n) {
              var c = n.chunk,
                l = n.encoding,
                h = n.callback,
                d = e.objectMode ? 1 : c.length;
              if (
                (N(t, e, !1, d, c, l, h),
                (n = n.next),
                e.bufferedRequestCount--,
                e.writing)
              )
                break;
            }
            null === n && (e.lastBufferedRequest = null);
          }
          (e.bufferedRequest = n), (e.bufferProcessing = !1);
        }
        function U(t) {
          return (
            t.ending &&
            0 === t.length &&
            null === t.bufferedRequest &&
            !t.finished &&
            !t.writing
          );
        }
        function H(t, e) {
          t._final(function (n) {
            e.pendingcb--,
              n && x(t, n),
              (e.prefinished = !0),
              t.emit('prefinish'),
              z(t, e);
          });
        }
        function W(t, e) {
          e.prefinished ||
            e.finalCalled ||
            ('function' !== typeof t._final || e.destroyed
              ? ((e.prefinished = !0), t.emit('prefinish'))
              : (e.pendingcb++, (e.finalCalled = !0), r.nextTick(H, t, e)));
        }
        function z(t, e) {
          var n = U(e);
          if (
            n &&
            (W(t, e),
            0 === e.pendingcb &&
              ((e.finished = !0), t.emit('finish'), e.autoDestroy))
          ) {
            var r = t._readableState;
            (!r || (r.autoDestroy && r.endEmitted)) && t.destroy();
          }
          return n;
        }
        function V(t, e, n) {
          (e.ending = !0),
            z(t, e),
            n && (e.finished ? r.nextTick(n) : t.once('finish', n)),
            (e.ended = !0),
            (t.writable = !1);
        }
        function q(t, e, n) {
          var r = t.entry;
          t.entry = null;
          while (r) {
            var i = r.callback;
            e.pendingcb--, i(n), (r = r.next);
          }
          e.corkedRequestsFree.next = t;
        }
        n('P7XM')(I, a),
          (C.prototype.getBuffer = function () {
            var t = this.bufferedRequest,
              e = [];
            while (t) e.push(t), (t = t.next);
            return e;
          }),
          (function () {
            try {
              Object.defineProperty(C.prototype, 'buffer', {
                get: o.deprecate(
                  function () {
                    return this.getBuffer();
                  },
                  '_writableState.buffer is deprecated. Use _writableState.getBuffer instead.',
                  'DEP0003',
                ),
              });
            } catch (t) {}
          })(),
          'function' === typeof Symbol &&
          Symbol.hasInstance &&
          'function' === typeof Function.prototype[Symbol.hasInstance]
            ? ((d = Function.prototype[Symbol.hasInstance]),
              Object.defineProperty(I, Symbol.hasInstance, {
                value: function (t) {
                  return (
                    !!d.call(this, t) ||
                    (this === I && t && t._writableState instanceof C)
                  );
                },
              }))
            : (d = function (t) {
                return t instanceof this;
              }),
          (I.prototype.pipe = function () {
            x(this, new _());
          }),
          (I.prototype.write = function (t, e, n) {
            var r = this._writableState,
              i = !1,
              s = !r.objectMode && h(t);
            return (
              s && !u.isBuffer(t) && (t = l(t)),
              'function' === typeof e && ((n = e), (e = null)),
              s ? (e = 'buffer') : e || (e = r.defaultEncoding),
              'function' !== typeof n && (n = k),
              r.ending
                ? O(this, n)
                : (s || j(this, r, t, n)) &&
                  (r.pendingcb++, (i = R(this, r, s, t, e, n))),
              i
            );
          }),
          (I.prototype.cork = function () {
            this._writableState.corked++;
          }),
          (I.prototype.uncork = function () {
            var t = this._writableState;
            t.corked &&
              (t.corked--,
              t.writing ||
                t.corked ||
                t.bufferProcessing ||
                !t.bufferedRequest ||
                F(this, t));
          }),
          (I.prototype.setDefaultEncoding = function (t) {
            if (
              ('string' === typeof t && (t = t.toLowerCase()),
              !(
                [
                  'hex',
                  'utf8',
                  'utf-8',
                  'ascii',
                  'binary',
                  'base64',
                  'ucs2',
                  'ucs-2',
                  'utf16le',
                  'utf-16le',
                  'raw',
                ].indexOf((t + '').toLowerCase()) > -1
              ))
            )
              throw new E(t);
            return (this._writableState.defaultEncoding = t), this;
          }),
          Object.defineProperty(I.prototype, 'writableBuffer', {
            enumerable: !1,
            get: function () {
              return this._writableState && this._writableState.getBuffer();
            },
          }),
          Object.defineProperty(I.prototype, 'writableHighWaterMark', {
            enumerable: !1,
            get: function () {
              return this._writableState.highWaterMark;
            },
          }),
          (I.prototype._write = function (t, e, n) {
            n(new y('_write()'));
          }),
          (I.prototype._writev = null),
          (I.prototype.end = function (t, e, n) {
            var r = this._writableState;
            return (
              'function' === typeof t
                ? ((n = t), (t = null), (e = null))
                : 'function' === typeof e && ((n = e), (e = null)),
              null !== t && void 0 !== t && this.write(t, e),
              r.corked && ((r.corked = 1), this.uncork()),
              r.ending || V(this, r, n),
              this
            );
          }),
          Object.defineProperty(I.prototype, 'writableLength', {
            enumerable: !1,
            get: function () {
              return this._writableState.length;
            },
          }),
          Object.defineProperty(I.prototype, 'destroyed', {
            enumerable: !1,
            get: function () {
              return (
                void 0 !== this._writableState && this._writableState.destroyed
              );
            },
            set: function (t) {
              this._writableState && (this._writableState.destroyed = t);
            },
          }),
          (I.prototype.destroy = f.destroy),
          (I.prototype._undestroy = f.undestroy),
          (I.prototype._destroy = function (t, e) {
            e(t);
          });
      }).call(this, n('IyRk'), n('Q2Ig'));
    },
    mChF: function (t, e, n) {
      'use strict';
      function r(t) {
        return t;
      }
      n.d(e, 'a', function () {
        return r;
      });
    },
    mZXl: function (t, e, n) {
      'use strict';
      n.d(e, 'b', function () {
        return o;
      }),
        n.d(e, 'a', function () {
          return u;
        });
      var r = n('mrSG'),
        i = n('FFOo'),
        s = n('60iU');
      function o(t, e) {
        return (
          void 0 === e && (e = 0),
          function (n) {
            return n.lift(new a(t, e));
          }
        );
      }
      var a = (function () {
          function t(t, e) {
            void 0 === e && (e = 0), (this.scheduler = t), (this.delay = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new u(t, this.scheduler, this.delay));
            }),
            t
          );
        })(),
        u = (function (t) {
          function e(e, n, r) {
            void 0 === r && (r = 0);
            var i = t.call(this, e) || this;
            return (i.scheduler = n), (i.delay = r), i;
          }
          return (
            r['__extends'](e, t),
            (e.dispatch = function (t) {
              var e = t.notification,
                n = t.destination;
              e.observe(n), this.unsubscribe();
            }),
            (e.prototype.scheduleMessage = function (t) {
              var n = this.destination;
              n.add(
                this.scheduler.schedule(
                  e.dispatch,
                  this.delay,
                  new c(t, this.destination),
                ),
              );
            }),
            (e.prototype._next = function (t) {
              this.scheduleMessage(s['a'].createNext(t));
            }),
            (e.prototype._error = function (t) {
              this.scheduleMessage(s['a'].createError(t)), this.unsubscribe();
            }),
            (e.prototype._complete = function () {
              this.scheduleMessage(s['a'].createComplete()), this.unsubscribe();
            }),
            e
          );
        })(i['a']),
        c = (function () {
          function t(t, e) {
            (this.notification = t), (this.destination = e);
          }
          return t;
        })();
    },
    mrSG: function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, '__extends', function () {
          return i;
        }),
        n.d(e, '__assign', function () {
          return s;
        }),
        n.d(e, '__rest', function () {
          return o;
        }),
        n.d(e, '__decorate', function () {
          return a;
        }),
        n.d(e, '__param', function () {
          return u;
        }),
        n.d(e, '__metadata', function () {
          return c;
        }),
        n.d(e, '__awaiter', function () {
          return l;
        }),
        n.d(e, '__generator', function () {
          return h;
        }),
        n.d(e, '__createBinding', function () {
          return d;
        }),
        n.d(e, '__exportStar', function () {
          return f;
        }),
        n.d(e, '__values', function () {
          return p;
        }),
        n.d(e, '__read', function () {
          return b;
        }),
        n.d(e, '__spread', function () {
          return g;
        }),
        n.d(e, '__spreadArrays', function () {
          return m;
        }),
        n.d(e, '__await', function () {
          return y;
        }),
        n.d(e, '__asyncGenerator', function () {
          return v;
        }),
        n.d(e, '__asyncDelegator', function () {
          return _;
        }),
        n.d(e, '__asyncValues', function () {
          return w;
        }),
        n.d(e, '__makeTemplateObject', function () {
          return S;
        }),
        n.d(e, '__importStar', function () {
          return M;
        }),
        n.d(e, '__importDefault', function () {
          return E;
        }),
        n.d(e, '__classPrivateFieldGet', function () {
          return x;
        }),
        n.d(e, '__classPrivateFieldSet', function () {
          return k;
        });
      var r = function (t, e) {
        return (
          (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            }),
          r(t, e)
        );
      };
      function i(t, e) {
        function n() {
          this.constructor = t;
        }
        r(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((n.prototype = e.prototype), new n()));
      }
      var s = function () {
        return (
          (s =
            Object.assign ||
            function (t) {
              for (var e, n = 1, r = arguments.length; n < r; n++)
                for (var i in ((e = arguments[n]), e))
                  Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
              return t;
            }),
          s.apply(this, arguments)
        );
      };
      function o(t, e) {
        var n = {};
        for (var r in t)
          Object.prototype.hasOwnProperty.call(t, r) &&
            e.indexOf(r) < 0 &&
            (n[r] = t[r]);
        if (null != t && 'function' === typeof Object.getOwnPropertySymbols) {
          var i = 0;
          for (r = Object.getOwnPropertySymbols(t); i < r.length; i++)
            e.indexOf(r[i]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
              (n[r[i]] = t[r[i]]);
        }
        return n;
      }
      function a(t, e, n, r) {
        var i,
          s = arguments.length,
          o =
            s < 3
              ? e
              : null === r
              ? (r = Object.getOwnPropertyDescriptor(e, n))
              : r;
        if (
          'object' === typeof Reflect &&
          'function' === typeof Reflect.decorate
        )
          o = Reflect.decorate(t, e, n, r);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (i = t[a]) &&
              (o = (s < 3 ? i(o) : s > 3 ? i(e, n, o) : i(e, n)) || o);
        return s > 3 && o && Object.defineProperty(e, n, o), o;
      }
      function u(t, e) {
        return function (n, r) {
          e(n, r, t);
        };
      }
      function c(t, e) {
        if (
          'object' === typeof Reflect &&
          'function' === typeof Reflect.metadata
        )
          return Reflect.metadata(t, e);
      }
      function l(t, e, n, r) {
        function i(t) {
          return t instanceof n
            ? t
            : new n(function (e) {
                e(t);
              });
        }
        return new (n || (n = Promise))(function (n, s) {
          function o(t) {
            try {
              u(r.next(t));
            } catch (e) {
              s(e);
            }
          }
          function a(t) {
            try {
              u(r['throw'](t));
            } catch (e) {
              s(e);
            }
          }
          function u(t) {
            t.done ? n(t.value) : i(t.value).then(o, a);
          }
          u((r = r.apply(t, e || [])).next());
        });
      }
      function h(t, e) {
        var n,
          r,
          i,
          s,
          o = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (s = { next: a(0), throw: a(1), return: a(2) }),
          'function' === typeof Symbol &&
            (s[Symbol.iterator] = function () {
              return this;
            }),
          s
        );
        function a(t) {
          return function (e) {
            return u([t, e]);
          };
        }
        function u(s) {
          if (n) throw new TypeError('Generator is already executing.');
          while (o)
            try {
              if (
                ((n = 1),
                r &&
                  (i =
                    2 & s[0]
                      ? r['return']
                      : s[0]
                      ? r['throw'] || ((i = r['return']) && i.call(r), 0)
                      : r.next) &&
                  !(i = i.call(r, s[1])).done)
              )
                return i;
              switch (((r = 0), i && (s = [2 & s[0], i.value]), s[0])) {
                case 0:
                case 1:
                  i = s;
                  break;
                case 4:
                  return o.label++, { value: s[1], done: !1 };
                case 5:
                  o.label++, (r = s[1]), (s = [0]);
                  continue;
                case 7:
                  (s = o.ops.pop()), o.trys.pop();
                  continue;
                default:
                  if (
                    ((i = o.trys),
                    !(i = i.length > 0 && i[i.length - 1]) &&
                      (6 === s[0] || 2 === s[0]))
                  ) {
                    o = 0;
                    continue;
                  }
                  if (3 === s[0] && (!i || (s[1] > i[0] && s[1] < i[3]))) {
                    o.label = s[1];
                    break;
                  }
                  if (6 === s[0] && o.label < i[1]) {
                    (o.label = i[1]), (i = s);
                    break;
                  }
                  if (i && o.label < i[2]) {
                    (o.label = i[2]), o.ops.push(s);
                    break;
                  }
                  i[2] && o.ops.pop(), o.trys.pop();
                  continue;
              }
              s = e.call(t, o);
            } catch (a) {
              (s = [6, a]), (r = 0);
            } finally {
              n = i = 0;
            }
          if (5 & s[0]) throw s[1];
          return { value: s[0] ? s[1] : void 0, done: !0 };
        }
      }
      function d(t, e, n, r) {
        void 0 === r && (r = n), (t[r] = e[n]);
      }
      function f(t, e) {
        for (var n in t)
          'default' === n || e.hasOwnProperty(n) || (e[n] = t[n]);
      }
      function p(t) {
        var e = 'function' === typeof Symbol && Symbol.iterator,
          n = e && t[e],
          r = 0;
        if (n) return n.call(t);
        if (t && 'number' === typeof t.length)
          return {
            next: function () {
              return (
                t && r >= t.length && (t = void 0),
                { value: t && t[r++], done: !t }
              );
            },
          };
        throw new TypeError(
          e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.',
        );
      }
      function b(t, e) {
        var n = 'function' === typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r,
          i,
          s = n.call(t),
          o = [];
        try {
          while ((void 0 === e || e-- > 0) && !(r = s.next()).done)
            o.push(r.value);
        } catch (a) {
          i = { error: a };
        } finally {
          try {
            r && !r.done && (n = s['return']) && n.call(s);
          } finally {
            if (i) throw i.error;
          }
        }
        return o;
      }
      function g() {
        for (var t = [], e = 0; e < arguments.length; e++)
          t = t.concat(b(arguments[e]));
        return t;
      }
      function m() {
        for (var t = 0, e = 0, n = arguments.length; e < n; e++)
          t += arguments[e].length;
        var r = Array(t),
          i = 0;
        for (e = 0; e < n; e++)
          for (var s = arguments[e], o = 0, a = s.length; o < a; o++, i++)
            r[i] = s[o];
        return r;
      }
      function y(t) {
        return this instanceof y ? ((this.v = t), this) : new y(t);
      }
      function v(t, e, n) {
        if (!Symbol.asyncIterator)
          throw new TypeError('Symbol.asyncIterator is not defined.');
        var r,
          i = n.apply(t, e || []),
          s = [];
        return (
          (r = {}),
          o('next'),
          o('throw'),
          o('return'),
          (r[Symbol.asyncIterator] = function () {
            return this;
          }),
          r
        );
        function o(t) {
          i[t] &&
            (r[t] = function (e) {
              return new Promise(function (n, r) {
                s.push([t, e, n, r]) > 1 || a(t, e);
              });
            });
        }
        function a(t, e) {
          try {
            u(i[t](e));
          } catch (n) {
            h(s[0][3], n);
          }
        }
        function u(t) {
          t.value instanceof y
            ? Promise.resolve(t.value.v).then(c, l)
            : h(s[0][2], t);
        }
        function c(t) {
          a('next', t);
        }
        function l(t) {
          a('throw', t);
        }
        function h(t, e) {
          t(e), s.shift(), s.length && a(s[0][0], s[0][1]);
        }
      }
      function _(t) {
        var e, n;
        return (
          (e = {}),
          r('next'),
          r('throw', function (t) {
            throw t;
          }),
          r('return'),
          (e[Symbol.iterator] = function () {
            return this;
          }),
          e
        );
        function r(r, i) {
          e[r] = t[r]
            ? function (e) {
                return (n = !n)
                  ? { value: y(t[r](e)), done: 'return' === r }
                  : i
                  ? i(e)
                  : e;
              }
            : i;
        }
      }
      function w(t) {
        if (!Symbol.asyncIterator)
          throw new TypeError('Symbol.asyncIterator is not defined.');
        var e,
          n = t[Symbol.asyncIterator];
        return n
          ? n.call(t)
          : ((t = 'function' === typeof p ? p(t) : t[Symbol.iterator]()),
            (e = {}),
            r('next'),
            r('throw'),
            r('return'),
            (e[Symbol.asyncIterator] = function () {
              return this;
            }),
            e);
        function r(n) {
          e[n] =
            t[n] &&
            function (e) {
              return new Promise(function (r, s) {
                (e = t[n](e)), i(r, s, e.done, e.value);
              });
            };
        }
        function i(t, e, n, r) {
          Promise.resolve(r).then(function (e) {
            t({ value: e, done: n });
          }, e);
        }
      }
      function S(t, e) {
        return (
          Object.defineProperty
            ? Object.defineProperty(t, 'raw', { value: e })
            : (t.raw = e),
          t
        );
      }
      function M(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
          for (var n in t) Object.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return (e['default'] = t), e;
      }
      function E(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function x(t, e) {
        if (!e.has(t))
          throw new TypeError('attempted to get private field on non-instance');
        return e.get(t);
      }
      function k(t, e, n) {
        if (!e.has(t))
          throw new TypeError('attempted to set private field on non-instance');
        return e.set(t, n), n;
      }
    },
    nAhp: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.Web3Method = void 0),
        (function (t) {
          (t['requestEthereumAccounts'] = 'requestEthereumAccounts'),
            (t['signEthereumMessage'] = 'signEthereumMessage'),
            (t['signEthereumTransaction'] = 'signEthereumTransaction'),
            (t['submitEthereumTransaction'] = 'submitEthereumTransaction'),
            (t['ethereumAddressFromSignedMessage'] =
              'ethereumAddressFromSignedMessage'),
            (t['scanQRCode'] = 'scanQRCode'),
            (t['generic'] = 'generic'),
            (t['childRequestEthereumAccounts'] =
              'childRequestEthereumAccounts'),
            (t['addEthereumChain'] = 'addEthereumChain'),
            (t['switchEthereumChain'] = 'switchEthereumChain'),
            (t['makeEthereumJSONRPCRequest'] = 'makeEthereumJSONRPCRequest'),
            (t['watchAsset'] = 'watchAsset'),
            (t['selectProvider'] = 'selectProvider');
        })(e.Web3Method || (e.Web3Method = {}));
    },
    nkY7: function (t, e, n) {
      'use strict';
      function r(t) {
        return t && 'function' === typeof t.schedule;
      }
      n.d(e, 'a', function () {
        return r;
      });
    },
    oktN: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.getMessageFromCode =
          e.serializeError =
          e.EthereumProviderError =
          e.EthereumRpcError =
          e.ethErrors =
          e.errorCodes =
            void 0);
      const r = n('aAza');
      Object.defineProperty(e, 'EthereumRpcError', {
        enumerable: !0,
        get: function () {
          return r.EthereumRpcError;
        },
      }),
        Object.defineProperty(e, 'EthereumProviderError', {
          enumerable: !0,
          get: function () {
            return r.EthereumProviderError;
          },
        });
      const i = n('qiyp');
      Object.defineProperty(e, 'serializeError', {
        enumerable: !0,
        get: function () {
          return i.serializeError;
        },
      }),
        Object.defineProperty(e, 'getMessageFromCode', {
          enumerable: !0,
          get: function () {
            return i.getMessageFromCode;
          },
        });
      const s = n('hJOY');
      Object.defineProperty(e, 'ethErrors', {
        enumerable: !0,
        get: function () {
          return s.ethErrors;
        },
      });
      const o = n('RlVT');
      Object.defineProperty(e, 'errorCodes', {
        enumerable: !0,
        get: function () {
          return o.errorCodes;
        },
      });
    },
    olUY: function (t, e, n) {
      var r = n('P7XM'),
        i = n('tnIz'),
        s = n('hwdV').Buffer,
        o = [
          1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
          2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
          1925078388, 2162078206, 2614888103, 3248222580, 3835390401,
          4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692,
          1996064986, 2554220882, 2821834349, 2952996808, 3210313671,
          3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912,
          1294757372, 1396182291, 1695183700, 1986661051, 2177026350,
          2456956037, 2730485921, 2820302411, 3259730800, 3345764771,
          3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616,
          659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
          1955562222, 2024104815, 2227730452, 2361852424, 2428436474,
          2756734187, 3204031479, 3329325298,
        ],
        a = new Array(64);
      function u() {
        this.init(), (this._w = a), i.call(this, 64, 56);
      }
      function c(t, e, n) {
        return n ^ (t & (e ^ n));
      }
      function l(t, e, n) {
        return (t & e) | (n & (t | e));
      }
      function h(t) {
        return (
          ((t >>> 2) | (t << 30)) ^
          ((t >>> 13) | (t << 19)) ^
          ((t >>> 22) | (t << 10))
        );
      }
      function d(t) {
        return (
          ((t >>> 6) | (t << 26)) ^
          ((t >>> 11) | (t << 21)) ^
          ((t >>> 25) | (t << 7))
        );
      }
      function f(t) {
        return ((t >>> 7) | (t << 25)) ^ ((t >>> 18) | (t << 14)) ^ (t >>> 3);
      }
      function p(t) {
        return ((t >>> 17) | (t << 15)) ^ ((t >>> 19) | (t << 13)) ^ (t >>> 10);
      }
      r(u, i),
        (u.prototype.init = function () {
          return (
            (this._a = 1779033703),
            (this._b = 3144134277),
            (this._c = 1013904242),
            (this._d = 2773480762),
            (this._e = 1359893119),
            (this._f = 2600822924),
            (this._g = 528734635),
            (this._h = 1541459225),
            this
          );
        }),
        (u.prototype._update = function (t) {
          for (
            var e = this._w,
              n = 0 | this._a,
              r = 0 | this._b,
              i = 0 | this._c,
              s = 0 | this._d,
              a = 0 | this._e,
              u = 0 | this._f,
              b = 0 | this._g,
              g = 0 | this._h,
              m = 0;
            m < 16;
            ++m
          )
            e[m] = t.readInt32BE(4 * m);
          for (; m < 64; ++m)
            e[m] = (p(e[m - 2]) + e[m - 7] + f(e[m - 15]) + e[m - 16]) | 0;
          for (var y = 0; y < 64; ++y) {
            var v = (g + d(a) + c(a, u, b) + o[y] + e[y]) | 0,
              _ = (h(n) + l(n, r, i)) | 0;
            (g = b),
              (b = u),
              (u = a),
              (a = (s + v) | 0),
              (s = i),
              (i = r),
              (r = n),
              (n = (v + _) | 0);
          }
          (this._a = (n + this._a) | 0),
            (this._b = (r + this._b) | 0),
            (this._c = (i + this._c) | 0),
            (this._d = (s + this._d) | 0),
            (this._e = (a + this._e) | 0),
            (this._f = (u + this._f) | 0),
            (this._g = (b + this._g) | 0),
            (this._h = (g + this._h) | 0);
        }),
        (u.prototype._hash = function () {
          var t = s.allocUnsafe(32);
          return (
            t.writeInt32BE(this._a, 0),
            t.writeInt32BE(this._b, 4),
            t.writeInt32BE(this._c, 8),
            t.writeInt32BE(this._d, 12),
            t.writeInt32BE(this._e, 16),
            t.writeInt32BE(this._f, 20),
            t.writeInt32BE(this._g, 24),
            t.writeInt32BE(this._h, 28),
            t
          );
        }),
        (t.exports = u);
    },
    p0ib: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return a;
      });
      var r = n('6blF'),
        i = n('nkY7'),
        s = n('Zn8D'),
        o = n('IUTb');
      function a() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var n = Number.POSITIVE_INFINITY,
          a = null,
          u = t[t.length - 1];
        return (
          Object(i['a'])(u)
            ? ((a = t.pop()),
              t.length > 1 &&
                'number' === typeof t[t.length - 1] &&
                (n = t.pop()))
            : 'number' === typeof u && (n = t.pop()),
          null === a && 1 === t.length && t[0] instanceof r['a']
            ? t[0]
            : Object(s['a'])(n)(Object(o['a'])(t, a))
        );
      }
    },
    pOKl: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.SafeIcon = void 0);
      const r = n('2mXy');
      function i(t) {
        return (0, r.h)(
          'svg',
          Object.assign(
            {
              width: '14',
              height: '14',
              viewBox: '0 0 14 14',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            t,
          ),
          (0, r.h)('path', {
            'fill-rule': 'evenodd',
            'clip-rule': 'evenodd',
            d: 'M0.600098 0.600098V11.8001H13.4001V0.600098H0.600098ZM7.0001 9.2001C5.3441 9.2001 4.0001 7.8561 4.0001 6.2001C4.0001 4.5441 5.3441 3.2001 7.0001 3.2001C8.6561 3.2001 10.0001 4.5441 10.0001 6.2001C10.0001 7.8561 8.6561 9.2001 7.0001 9.2001ZM0.600098 12.6001H3.8001V13.4001H0.600098V12.6001ZM10.2001 12.6001H13.4001V13.4001H10.2001V12.6001ZM8.8001 6.2001C8.8001 7.19421 7.99421 8.0001 7.0001 8.0001C6.00598 8.0001 5.2001 7.19421 5.2001 6.2001C5.2001 5.20598 6.00598 4.4001 7.0001 4.4001C7.99421 4.4001 8.8001 5.20598 8.8001 6.2001Z',
          }),
        );
      }
      e.SafeIcon = i;
    },
    pUf3: function (t, e, n) {
      (function (t) {
        (function (t, e) {
          'use strict';
          function r(t, e) {
            if (!t) throw new Error(e || 'Assertion failed');
          }
          function i(t, e) {
            t.super_ = e;
            var n = function () {};
            (n.prototype = e.prototype),
              (t.prototype = new n()),
              (t.prototype.constructor = t);
          }
          function s(t, e, n) {
            if (s.isBN(t)) return t;
            (this.negative = 0),
              (this.words = null),
              (this.length = 0),
              (this.red = null),
              null !== t &&
                (('le' !== e && 'be' !== e) || ((n = e), (e = 10)),
                this._init(t || 0, e || 10, n || 'be'));
          }
          var o;
          'object' === typeof t ? (t.exports = s) : (e.BN = s),
            (s.BN = s),
            (s.wordSize = 26);
          try {
            o =
              'undefined' !== typeof window &&
              'undefined' !== typeof window.Buffer
                ? window.Buffer
                : n(5).Buffer;
          } catch (j) {}
          function a(t, e) {
            var n = t.charCodeAt(e);
            return n >= 48 && n <= 57
              ? n - 48
              : n >= 65 && n <= 70
              ? n - 55
              : n >= 97 && n <= 102
              ? n - 87
              : void r(!1, 'Invalid character in ' + t);
          }
          function u(t, e, n) {
            var r = a(t, n);
            return n - 1 >= e && (r |= a(t, n - 1) << 4), r;
          }
          function c(t, e, n, i) {
            for (
              var s = 0, o = 0, a = Math.min(t.length, n), u = e;
              u < a;
              u++
            ) {
              var c = t.charCodeAt(u) - 48;
              (s *= i),
                (o = c >= 49 ? c - 49 + 10 : c >= 17 ? c - 17 + 10 : c),
                r(c >= 0 && o < i, 'Invalid character'),
                (s += o);
            }
            return s;
          }
          function l(t, e) {
            (t.words = e.words),
              (t.length = e.length),
              (t.negative = e.negative),
              (t.red = e.red);
          }
          if (
            ((s.isBN = function (t) {
              return (
                t instanceof s ||
                (null !== t &&
                  'object' === typeof t &&
                  t.constructor.wordSize === s.wordSize &&
                  Array.isArray(t.words))
              );
            }),
            (s.max = function (t, e) {
              return t.cmp(e) > 0 ? t : e;
            }),
            (s.min = function (t, e) {
              return t.cmp(e) < 0 ? t : e;
            }),
            (s.prototype._init = function (t, e, n) {
              if ('number' === typeof t) return this._initNumber(t, e, n);
              if ('object' === typeof t) return this._initArray(t, e, n);
              'hex' === e && (e = 16),
                r(e === (0 | e) && e >= 2 && e <= 36),
                (t = t.toString().replace(/\s+/g, ''));
              var i = 0;
              '-' === t[0] && (i++, (this.negative = 1)),
                i < t.length &&
                  (16 === e
                    ? this._parseHex(t, i, n)
                    : (this._parseBase(t, e, i),
                      'le' === n && this._initArray(this.toArray(), e, n)));
            }),
            (s.prototype._initNumber = function (t, e, n) {
              t < 0 && ((this.negative = 1), (t = -t)),
                t < 67108864
                  ? ((this.words = [67108863 & t]), (this.length = 1))
                  : t < 4503599627370496
                  ? ((this.words = [67108863 & t, (t / 67108864) & 67108863]),
                    (this.length = 2))
                  : (r(t < 9007199254740992),
                    (this.words = [67108863 & t, (t / 67108864) & 67108863, 1]),
                    (this.length = 3)),
                'le' === n && this._initArray(this.toArray(), e, n);
            }),
            (s.prototype._initArray = function (t, e, n) {
              if ((r('number' === typeof t.length), t.length <= 0))
                return (this.words = [0]), (this.length = 1), this;
              (this.length = Math.ceil(t.length / 3)),
                (this.words = new Array(this.length));
              for (var i = 0; i < this.length; i++) this.words[i] = 0;
              var s,
                o,
                a = 0;
              if ('be' === n)
                for (i = t.length - 1, s = 0; i >= 0; i -= 3)
                  (o = t[i] | (t[i - 1] << 8) | (t[i - 2] << 16)),
                    (this.words[s] |= (o << a) & 67108863),
                    (this.words[s + 1] = (o >>> (26 - a)) & 67108863),
                    (a += 24),
                    a >= 26 && ((a -= 26), s++);
              else if ('le' === n)
                for (i = 0, s = 0; i < t.length; i += 3)
                  (o = t[i] | (t[i + 1] << 8) | (t[i + 2] << 16)),
                    (this.words[s] |= (o << a) & 67108863),
                    (this.words[s + 1] = (o >>> (26 - a)) & 67108863),
                    (a += 24),
                    a >= 26 && ((a -= 26), s++);
              return this._strip();
            }),
            (s.prototype._parseHex = function (t, e, n) {
              (this.length = Math.ceil((t.length - e) / 6)),
                (this.words = new Array(this.length));
              for (var r = 0; r < this.length; r++) this.words[r] = 0;
              var i,
                s = 0,
                o = 0;
              if ('be' === n)
                for (r = t.length - 1; r >= e; r -= 2)
                  (i = u(t, e, r) << s),
                    (this.words[o] |= 67108863 & i),
                    s >= 18
                      ? ((s -= 18), (o += 1), (this.words[o] |= i >>> 26))
                      : (s += 8);
              else {
                var a = t.length - e;
                for (r = a % 2 === 0 ? e + 1 : e; r < t.length; r += 2)
                  (i = u(t, e, r) << s),
                    (this.words[o] |= 67108863 & i),
                    s >= 18
                      ? ((s -= 18), (o += 1), (this.words[o] |= i >>> 26))
                      : (s += 8);
              }
              this._strip();
            }),
            (s.prototype._parseBase = function (t, e, n) {
              (this.words = [0]), (this.length = 1);
              for (var r = 0, i = 1; i <= 67108863; i *= e) r++;
              r--, (i = (i / e) | 0);
              for (
                var s = t.length - n,
                  o = s % r,
                  a = Math.min(s, s - o) + n,
                  u = 0,
                  l = n;
                l < a;
                l += r
              )
                (u = c(t, l, l + r, e)),
                  this.imuln(i),
                  this.words[0] + u < 67108864
                    ? (this.words[0] += u)
                    : this._iaddn(u);
              if (0 !== o) {
                var h = 1;
                for (u = c(t, l, t.length, e), l = 0; l < o; l++) h *= e;
                this.imuln(h),
                  this.words[0] + u < 67108864
                    ? (this.words[0] += u)
                    : this._iaddn(u);
              }
              this._strip();
            }),
            (s.prototype.copy = function (t) {
              t.words = new Array(this.length);
              for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
              (t.length = this.length),
                (t.negative = this.negative),
                (t.red = this.red);
            }),
            (s.prototype._move = function (t) {
              l(t, this);
            }),
            (s.prototype.clone = function () {
              var t = new s(null);
              return this.copy(t), t;
            }),
            (s.prototype._expand = function (t) {
              while (this.length < t) this.words[this.length++] = 0;
              return this;
            }),
            (s.prototype._strip = function () {
              while (this.length > 1 && 0 === this.words[this.length - 1])
                this.length--;
              return this._normSign();
            }),
            (s.prototype._normSign = function () {
              return (
                1 === this.length && 0 === this.words[0] && (this.negative = 0),
                this
              );
            }),
            'undefined' !== typeof Symbol && 'function' === typeof Symbol.for)
          )
            try {
              s.prototype[Symbol.for('nodejs.util.inspect.custom')] = h;
            } catch (j) {
              s.prototype.inspect = h;
            }
          else s.prototype.inspect = h;
          function h() {
            return (this.red ? '<BN-R: ' : '<BN: ') + this.toString(16) + '>';
          }
          var d = [
              '',
              '0',
              '00',
              '000',
              '0000',
              '00000',
              '000000',
              '0000000',
              '00000000',
              '000000000',
              '0000000000',
              '00000000000',
              '000000000000',
              '0000000000000',
              '00000000000000',
              '000000000000000',
              '0000000000000000',
              '00000000000000000',
              '000000000000000000',
              '0000000000000000000',
              '00000000000000000000',
              '000000000000000000000',
              '0000000000000000000000',
              '00000000000000000000000',
              '000000000000000000000000',
              '0000000000000000000000000',
            ],
            f = [
              0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6,
              6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
            ],
            p = [
              0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
              16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
              11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
              5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
              20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
              60466176,
            ];
          (s.prototype.toString = function (t, e) {
            var n;
            if (((t = t || 10), (e = 0 | e || 1), 16 === t || 'hex' === t)) {
              n = '';
              for (var i = 0, s = 0, o = 0; o < this.length; o++) {
                var a = this.words[o],
                  u = (16777215 & ((a << i) | s)).toString(16);
                (s = (a >>> (24 - i)) & 16777215),
                  (i += 2),
                  i >= 26 && ((i -= 26), o--),
                  (n =
                    0 !== s || o !== this.length - 1
                      ? d[6 - u.length] + u + n
                      : u + n);
              }
              0 !== s && (n = s.toString(16) + n);
              while (n.length % e !== 0) n = '0' + n;
              return 0 !== this.negative && (n = '-' + n), n;
            }
            if (t === (0 | t) && t >= 2 && t <= 36) {
              var c = f[t],
                l = p[t];
              n = '';
              var h = this.clone();
              h.negative = 0;
              while (!h.isZero()) {
                var b = h.modrn(l).toString(t);
                (h = h.idivn(l)),
                  (n = h.isZero() ? b + n : d[c - b.length] + b + n);
              }
              this.isZero() && (n = '0' + n);
              while (n.length % e !== 0) n = '0' + n;
              return 0 !== this.negative && (n = '-' + n), n;
            }
            r(!1, 'Base should be between 2 and 36');
          }),
            (s.prototype.toNumber = function () {
              var t = this.words[0];
              return (
                2 === this.length
                  ? (t += 67108864 * this.words[1])
                  : 3 === this.length && 1 === this.words[2]
                  ? (t += 4503599627370496 + 67108864 * this.words[1])
                  : this.length > 2 &&
                    r(!1, 'Number can only safely store up to 53 bits'),
                0 !== this.negative ? -t : t
              );
            }),
            (s.prototype.toJSON = function () {
              return this.toString(16, 2);
            }),
            o &&
              (s.prototype.toBuffer = function (t, e) {
                return this.toArrayLike(o, t, e);
              }),
            (s.prototype.toArray = function (t, e) {
              return this.toArrayLike(Array, t, e);
            });
          var b = function (t, e) {
            return t.allocUnsafe ? t.allocUnsafe(e) : new t(e);
          };
          function g(t) {
            for (var e = new Array(t.bitLength()), n = 0; n < e.length; n++) {
              var r = (n / 26) | 0,
                i = n % 26;
              e[n] = (t.words[r] >>> i) & 1;
            }
            return e;
          }
          function m(t, e, n) {
            n.negative = e.negative ^ t.negative;
            var r = (t.length + e.length) | 0;
            (n.length = r), (r = (r - 1) | 0);
            var i = 0 | t.words[0],
              s = 0 | e.words[0],
              o = i * s,
              a = 67108863 & o,
              u = (o / 67108864) | 0;
            n.words[0] = a;
            for (var c = 1; c < r; c++) {
              for (
                var l = u >>> 26,
                  h = 67108863 & u,
                  d = Math.min(c, e.length - 1),
                  f = Math.max(0, c - t.length + 1);
                f <= d;
                f++
              ) {
                var p = (c - f) | 0;
                (i = 0 | t.words[p]),
                  (s = 0 | e.words[f]),
                  (o = i * s + h),
                  (l += (o / 67108864) | 0),
                  (h = 67108863 & o);
              }
              (n.words[c] = 0 | h), (u = 0 | l);
            }
            return 0 !== u ? (n.words[c] = 0 | u) : n.length--, n._strip();
          }
          (s.prototype.toArrayLike = function (t, e, n) {
            this._strip();
            var i = this.byteLength(),
              s = n || Math.max(1, i);
            r(i <= s, 'byte array longer than desired length'),
              r(s > 0, 'Requested array length <= 0');
            var o = b(t, s),
              a = 'le' === e ? 'LE' : 'BE';
            return this['_toArrayLike' + a](o, i), o;
          }),
            (s.prototype._toArrayLikeLE = function (t, e) {
              for (var n = 0, r = 0, i = 0, s = 0; i < this.length; i++) {
                var o = (this.words[i] << s) | r;
                (t[n++] = 255 & o),
                  n < t.length && (t[n++] = (o >> 8) & 255),
                  n < t.length && (t[n++] = (o >> 16) & 255),
                  6 === s
                    ? (n < t.length && (t[n++] = (o >> 24) & 255),
                      (r = 0),
                      (s = 0))
                    : ((r = o >>> 24), (s += 2));
              }
              if (n < t.length) {
                t[n++] = r;
                while (n < t.length) t[n++] = 0;
              }
            }),
            (s.prototype._toArrayLikeBE = function (t, e) {
              for (
                var n = t.length - 1, r = 0, i = 0, s = 0;
                i < this.length;
                i++
              ) {
                var o = (this.words[i] << s) | r;
                (t[n--] = 255 & o),
                  n >= 0 && (t[n--] = (o >> 8) & 255),
                  n >= 0 && (t[n--] = (o >> 16) & 255),
                  6 === s
                    ? (n >= 0 && (t[n--] = (o >> 24) & 255), (r = 0), (s = 0))
                    : ((r = o >>> 24), (s += 2));
              }
              if (n >= 0) {
                t[n--] = r;
                while (n >= 0) t[n--] = 0;
              }
            }),
            Math.clz32
              ? (s.prototype._countBits = function (t) {
                  return 32 - Math.clz32(t);
                })
              : (s.prototype._countBits = function (t) {
                  var e = t,
                    n = 0;
                  return (
                    e >= 4096 && ((n += 13), (e >>>= 13)),
                    e >= 64 && ((n += 7), (e >>>= 7)),
                    e >= 8 && ((n += 4), (e >>>= 4)),
                    e >= 2 && ((n += 2), (e >>>= 2)),
                    n + e
                  );
                }),
            (s.prototype._zeroBits = function (t) {
              if (0 === t) return 26;
              var e = t,
                n = 0;
              return (
                0 === (8191 & e) && ((n += 13), (e >>>= 13)),
                0 === (127 & e) && ((n += 7), (e >>>= 7)),
                0 === (15 & e) && ((n += 4), (e >>>= 4)),
                0 === (3 & e) && ((n += 2), (e >>>= 2)),
                0 === (1 & e) && n++,
                n
              );
            }),
            (s.prototype.bitLength = function () {
              var t = this.words[this.length - 1],
                e = this._countBits(t);
              return 26 * (this.length - 1) + e;
            }),
            (s.prototype.zeroBits = function () {
              if (this.isZero()) return 0;
              for (var t = 0, e = 0; e < this.length; e++) {
                var n = this._zeroBits(this.words[e]);
                if (((t += n), 26 !== n)) break;
              }
              return t;
            }),
            (s.prototype.byteLength = function () {
              return Math.ceil(this.bitLength() / 8);
            }),
            (s.prototype.toTwos = function (t) {
              return 0 !== this.negative
                ? this.abs().inotn(t).iaddn(1)
                : this.clone();
            }),
            (s.prototype.fromTwos = function (t) {
              return this.testn(t - 1)
                ? this.notn(t).iaddn(1).ineg()
                : this.clone();
            }),
            (s.prototype.isNeg = function () {
              return 0 !== this.negative;
            }),
            (s.prototype.neg = function () {
              return this.clone().ineg();
            }),
            (s.prototype.ineg = function () {
              return this.isZero() || (this.negative ^= 1), this;
            }),
            (s.prototype.iuor = function (t) {
              while (this.length < t.length) this.words[this.length++] = 0;
              for (var e = 0; e < t.length; e++)
                this.words[e] = this.words[e] | t.words[e];
              return this._strip();
            }),
            (s.prototype.ior = function (t) {
              return r(0 === (this.negative | t.negative)), this.iuor(t);
            }),
            (s.prototype.or = function (t) {
              return this.length > t.length
                ? this.clone().ior(t)
                : t.clone().ior(this);
            }),
            (s.prototype.uor = function (t) {
              return this.length > t.length
                ? this.clone().iuor(t)
                : t.clone().iuor(this);
            }),
            (s.prototype.iuand = function (t) {
              var e;
              e = this.length > t.length ? t : this;
              for (var n = 0; n < e.length; n++)
                this.words[n] = this.words[n] & t.words[n];
              return (this.length = e.length), this._strip();
            }),
            (s.prototype.iand = function (t) {
              return r(0 === (this.negative | t.negative)), this.iuand(t);
            }),
            (s.prototype.and = function (t) {
              return this.length > t.length
                ? this.clone().iand(t)
                : t.clone().iand(this);
            }),
            (s.prototype.uand = function (t) {
              return this.length > t.length
                ? this.clone().iuand(t)
                : t.clone().iuand(this);
            }),
            (s.prototype.iuxor = function (t) {
              var e, n;
              this.length > t.length
                ? ((e = this), (n = t))
                : ((e = t), (n = this));
              for (var r = 0; r < n.length; r++)
                this.words[r] = e.words[r] ^ n.words[r];
              if (this !== e)
                for (; r < e.length; r++) this.words[r] = e.words[r];
              return (this.length = e.length), this._strip();
            }),
            (s.prototype.ixor = function (t) {
              return r(0 === (this.negative | t.negative)), this.iuxor(t);
            }),
            (s.prototype.xor = function (t) {
              return this.length > t.length
                ? this.clone().ixor(t)
                : t.clone().ixor(this);
            }),
            (s.prototype.uxor = function (t) {
              return this.length > t.length
                ? this.clone().iuxor(t)
                : t.clone().iuxor(this);
            }),
            (s.prototype.inotn = function (t) {
              r('number' === typeof t && t >= 0);
              var e = 0 | Math.ceil(t / 26),
                n = t % 26;
              this._expand(e), n > 0 && e--;
              for (var i = 0; i < e; i++)
                this.words[i] = 67108863 & ~this.words[i];
              return (
                n > 0 &&
                  (this.words[i] = ~this.words[i] & (67108863 >> (26 - n))),
                this._strip()
              );
            }),
            (s.prototype.notn = function (t) {
              return this.clone().inotn(t);
            }),
            (s.prototype.setn = function (t, e) {
              r('number' === typeof t && t >= 0);
              var n = (t / 26) | 0,
                i = t % 26;
              return (
                this._expand(n + 1),
                (this.words[n] = e
                  ? this.words[n] | (1 << i)
                  : this.words[n] & ~(1 << i)),
                this._strip()
              );
            }),
            (s.prototype.iadd = function (t) {
              var e, n, r;
              if (0 !== this.negative && 0 === t.negative)
                return (
                  (this.negative = 0),
                  (e = this.isub(t)),
                  (this.negative ^= 1),
                  this._normSign()
                );
              if (0 === this.negative && 0 !== t.negative)
                return (
                  (t.negative = 0),
                  (e = this.isub(t)),
                  (t.negative = 1),
                  e._normSign()
                );
              this.length > t.length
                ? ((n = this), (r = t))
                : ((n = t), (r = this));
              for (var i = 0, s = 0; s < r.length; s++)
                (e = (0 | n.words[s]) + (0 | r.words[s]) + i),
                  (this.words[s] = 67108863 & e),
                  (i = e >>> 26);
              for (; 0 !== i && s < n.length; s++)
                (e = (0 | n.words[s]) + i),
                  (this.words[s] = 67108863 & e),
                  (i = e >>> 26);
              if (((this.length = n.length), 0 !== i))
                (this.words[this.length] = i), this.length++;
              else if (n !== this)
                for (; s < n.length; s++) this.words[s] = n.words[s];
              return this;
            }),
            (s.prototype.add = function (t) {
              var e;
              return 0 !== t.negative && 0 === this.negative
                ? ((t.negative = 0), (e = this.sub(t)), (t.negative ^= 1), e)
                : 0 === t.negative && 0 !== this.negative
                ? ((this.negative = 0),
                  (e = t.sub(this)),
                  (this.negative = 1),
                  e)
                : this.length > t.length
                ? this.clone().iadd(t)
                : t.clone().iadd(this);
            }),
            (s.prototype.isub = function (t) {
              if (0 !== t.negative) {
                t.negative = 0;
                var e = this.iadd(t);
                return (t.negative = 1), e._normSign();
              }
              if (0 !== this.negative)
                return (
                  (this.negative = 0),
                  this.iadd(t),
                  (this.negative = 1),
                  this._normSign()
                );
              var n,
                r,
                i = this.cmp(t);
              if (0 === i)
                return (
                  (this.negative = 0),
                  (this.length = 1),
                  (this.words[0] = 0),
                  this
                );
              i > 0 ? ((n = this), (r = t)) : ((n = t), (r = this));
              for (var s = 0, o = 0; o < r.length; o++)
                (e = (0 | n.words[o]) - (0 | r.words[o]) + s),
                  (s = e >> 26),
                  (this.words[o] = 67108863 & e);
              for (; 0 !== s && o < n.length; o++)
                (e = (0 | n.words[o]) + s),
                  (s = e >> 26),
                  (this.words[o] = 67108863 & e);
              if (0 === s && o < n.length && n !== this)
                for (; o < n.length; o++) this.words[o] = n.words[o];
              return (
                (this.length = Math.max(this.length, o)),
                n !== this && (this.negative = 1),
                this._strip()
              );
            }),
            (s.prototype.sub = function (t) {
              return this.clone().isub(t);
            });
          var y = function (t, e, n) {
            var r,
              i,
              s,
              o = t.words,
              a = e.words,
              u = n.words,
              c = 0,
              l = 0 | o[0],
              h = 8191 & l,
              d = l >>> 13,
              f = 0 | o[1],
              p = 8191 & f,
              b = f >>> 13,
              g = 0 | o[2],
              m = 8191 & g,
              y = g >>> 13,
              v = 0 | o[3],
              _ = 8191 & v,
              w = v >>> 13,
              S = 0 | o[4],
              M = 8191 & S,
              E = S >>> 13,
              x = 0 | o[5],
              k = 8191 & x,
              C = x >>> 13,
              I = 0 | o[6],
              O = 8191 & I,
              j = I >>> 13,
              A = 0 | o[7],
              R = 8191 & A,
              N = A >>> 13,
              T = 0 | o[8],
              L = 8191 & T,
              P = T >>> 13,
              D = 0 | o[9],
              B = 8191 & D,
              F = D >>> 13,
              U = 0 | a[0],
              H = 8191 & U,
              W = U >>> 13,
              z = 0 | a[1],
              V = 8191 & z,
              q = z >>> 13,
              G = 0 | a[2],
              Z = 8191 & G,
              J = G >>> 13,
              Y = 0 | a[3],
              Q = 8191 & Y,
              K = Y >>> 13,
              $ = 0 | a[4],
              X = 8191 & $,
              tt = $ >>> 13,
              et = 0 | a[5],
              nt = 8191 & et,
              rt = et >>> 13,
              it = 0 | a[6],
              st = 8191 & it,
              ot = it >>> 13,
              at = 0 | a[7],
              ut = 8191 & at,
              ct = at >>> 13,
              lt = 0 | a[8],
              ht = 8191 & lt,
              dt = lt >>> 13,
              ft = 0 | a[9],
              pt = 8191 & ft,
              bt = ft >>> 13;
            (n.negative = t.negative ^ e.negative),
              (n.length = 19),
              (r = Math.imul(h, H)),
              (i = Math.imul(h, W)),
              (i = (i + Math.imul(d, H)) | 0),
              (s = Math.imul(d, W));
            var gt = (((c + r) | 0) + ((8191 & i) << 13)) | 0;
            (c = (((s + (i >>> 13)) | 0) + (gt >>> 26)) | 0),
              (gt &= 67108863),
              (r = Math.imul(p, H)),
              (i = Math.imul(p, W)),
              (i = (i + Math.imul(b, H)) | 0),
              (s = Math.imul(b, W)),
              (r = (r + Math.imul(h, V)) | 0),
              (i = (i + Math.imul(h, q)) | 0),
              (i = (i + Math.imul(d, V)) | 0),
              (s = (s + Math.imul(d, q)) | 0);
            var mt = (((c + r) | 0) + ((8191 & i) << 13)) | 0;
            (c = (((s + (i >>> 13)) | 0) + (mt >>> 26)) | 0),
              (mt &= 67108863),
              (r = Math.imul(m, H)),
              (i = Math.imul(m, W)),
              (i = (i + Math.imul(y, H)) | 0),
              (s = Math.imul(y, W)),
              (r = (r + Math.imul(p, V)) | 0),
              (i = (i + Math.imul(p, q)) | 0),
              (i = (i + Math.imul(b, V)) | 0),
              (s = (s + Math.imul(b, q)) | 0),
              (r = (r + Math.imul(h, Z)) | 0),
              (i = (i + Math.imul(h, J)) | 0),
              (i = (i + Math.imul(d, Z)) | 0),
              (s = (s + Math.imul(d, J)) | 0);
            var yt = (((c + r) | 0) + ((8191 & i) << 13)) | 0;
            (c = (((s + (i >>> 13)) | 0) + (yt >>> 26)) | 0),
              (yt &= 67108863),
              (r = Math.imul(_, H)),
              (i = Math.imul(_, W)),
              (i = (i + Math.imul(w, H)) | 0),
              (s = Math.imul(w, W)),
              (r = (r + Math.imul(m, V)) | 0),
              (i = (i + Math.imul(m, q)) | 0),
              (i = (i + Math.imul(y, V)) | 0),
              (s = (s + Math.imul(y, q)) | 0),
              (r = (r + Math.imul(p, Z)) | 0),
              (i = (i + Math.imul(p, J)) | 0),
              (i = (i + Math.imul(b, Z)) | 0),
              (s = (s + Math.imul(b, J)) | 0),
              (r = (r + Math.imul(h, Q)) | 0),
              (i = (i + Math.imul(h, K)) | 0),
              (i = (i + Math.imul(d, Q)) | 0),
              (s = (s + Math.imul(d, K)) | 0);
            var vt = (((c + r) | 0) + ((8191 & i) << 13)) | 0;
            (c = (((s + (i >>> 13)) | 0) + (vt >>> 26)) | 0),
              (vt &= 67108863),
              (r = Math.imul(M, H)),
              (i = Math.imul(M, W)),
              (i = (i + Math.imul(E, H)) | 0),
              (s = Math.imul(E, W)),
              (r = (r + Math.imul(_, V)) | 0),
              (i = (i + Math.imul(_, q)) | 0),
              (i = (i + Math.imul(w, V)) | 0),
              (s = (s + Math.imul(w, q)) | 0),
              (r = (r + Math.imul(m, Z)) | 0),
              (i = (i + Math.imul(m, J)) | 0),
              (i = (i + Math.imul(y, Z)) | 0),
              (s = (s + Math.imul(y, J)) | 0),
              (r = (r + Math.imul(p, Q)) | 0),
              (i = (i + Math.imul(p, K)) | 0),
              (i = (i + Math.imul(b, Q)) | 0),
              (s = (s + Math.imul(b, K)) | 0),
              (r = (r + Math.imul(h, X)) | 0),
              (i = (i + Math.imul(h, tt)) | 0),
              (i = (i + Math.imul(d, X)) | 0),
              (s = (s + Math.imul(d, tt)) | 0);
            var _t = (((c + r) | 0) + ((8191 & i) << 13)) | 0;
            (c = (((s + (i >>> 13)) | 0) + (_t >>> 26)) | 0),
              (_t &= 67108863),
              (r = Math.imul(k, H)),
              (i = Math.imul(k, W)),
              (i = (i + Math.imul(C, H)) | 0),
              (s = Math.imul(C, W)),
              (r = (r + Math.imul(M, V)) | 0),
              (i = (i + Math.imul(M, q)) | 0),
              (i = (i + Math.imul(E, V)) | 0),
              (s = (s + Math.imul(E, q)) | 0),
              (r = (r + Math.imul(_, Z)) | 0),
              (i = (i + Math.imul(_, J)) | 0),
              (i = (i + Math.imul(w, Z)) | 0),
              (s = (s + Math.imul(w, J)) | 0),
              (r = (r + Math.imul(m, Q)) | 0),
              (i = (i + Math.imul(m, K)) | 0),
              (i = (i + Math.imul(y, Q)) | 0),
              (s = (s + Math.imul(y, K)) | 0),
              (r = (r + Math.imul(p, X)) | 0),
              (i = (i + Math.imul(p, tt)) | 0),
              (i = (i + Math.imul(b, X)) | 0),
              (s = (s + Math.imul(b, tt)) | 0),
              (r = (r + Math.imul(h, nt)) | 0),
              (i = (i + Math.imul(h, rt)) | 0),
              (i = (i + Math.imul(d, nt)) | 0),
              (s = (s + Math.imul(d, rt)) | 0);
            var wt = (((c + r) | 0) + ((8191 & i) << 13)) | 0;
            (c = (((s + (i >>> 13)) | 0) + (wt >>> 26)) | 0),
              (wt &= 67108863),
              (r = Math.imul(O, H)),
              (i = Math.imul(O, W)),
              (i = (i + Math.imul(j, H)) | 0),
              (s = Math.imul(j, W)),
              (r = (r + Math.imul(k, V)) | 0),
              (i = (i + Math.imul(k, q)) | 0),
              (i = (i + Math.imul(C, V)) | 0),
              (s = (s + Math.imul(C, q)) | 0),
              (r = (r + Math.imul(M, Z)) | 0),
              (i = (i + Math.imul(M, J)) | 0),
              (i = (i + Math.imul(E, Z)) | 0),
              (s = (s + Math.imul(E, J)) | 0),
              (r = (r + Math.imul(_, Q)) | 0),
              (i = (i + Math.imul(_, K)) | 0),
              (i = (i + Math.imul(w, Q)) | 0),
              (s = (s + Math.imul(w, K)) | 0),
              (r = (r + Math.imul(m, X)) | 0),
              (i = (i + Math.imul(m, tt)) | 0),
              (i = (i + Math.imul(y, X)) | 0),
              (s = (s + Math.imul(y, tt)) | 0),
              (r = (r + Math.imul(p, nt)) | 0),
              (i = (i + Math.imul(p, rt)) | 0),
              (i = (i + Math.imul(b, nt)) | 0),
              (s = (s + Math.imul(b, rt)) | 0),
              (r = (r + Math.imul(h, st)) | 0),
              (i = (i + Math.imul(h, ot)) | 0),
              (i = (i + Math.imul(d, st)) | 0),
              (s = (s + Math.imul(d, ot)) | 0);
            var St = (((c + r) | 0) + ((8191 & i) << 13)) | 0;
            (c = (((s + (i >>> 13)) | 0) + (St >>> 26)) | 0),
              (St &= 67108863),
              (r = Math.imul(R, H)),
              (i = Math.imul(R, W)),
              (i = (i + Math.imul(N, H)) | 0),
              (s = Math.imul(N, W)),
              (r = (r + Math.imul(O, V)) | 0),
              (i = (i + Math.imul(O, q)) | 0),
              (i = (i + Math.imul(j, V)) | 0),
              (s = (s + Math.imul(j, q)) | 0),
              (r = (r + Math.imul(k, Z)) | 0),
              (i = (i + Math.imul(k, J)) | 0),
              (i = (i + Math.imul(C, Z)) | 0),
              (s = (s + Math.imul(C, J)) | 0),
              (r = (r + Math.imul(M, Q)) | 0),
              (i = (i + Math.imul(M, K)) | 0),
              (i = (i + Math.imul(E, Q)) | 0),
              (s = (s + Math.imul(E, K)) | 0),
              (r = (r + Math.imul(_, X)) | 0),
              (i = (i + Math.imul(_, tt)) | 0),
              (i = (i + Math.imul(w, X)) | 0),
              (s = (s + Math.imul(w, tt)) | 0),
              (r = (r + Math.imul(m, nt)) | 0),
              (i = (i + Math.imul(m, rt)) | 0),
              (i = (i + Math.imul(y, nt)) | 0),
              (s = (s + Math.imul(y, rt)) | 0),
              (r = (r + Math.imul(p, st)) | 0),
              (i = (i + Math.imul(p, ot)) | 0),
              (i = (i + Math.imul(b, st)) | 0),
              (s = (s + Math.imul(b, ot)) | 0),
              (r = (r + Math.imul(h, ut)) | 0),
              (i = (i + Math.imul(h, ct)) | 0),
              (i = (i + Math.imul(d, ut)) | 0),
              (s = (s + Math.imul(d, ct)) | 0);
            var Mt = (((c + r) | 0) + ((8191 & i) << 13)) | 0;
            (c = (((s + (i >>> 13)) | 0) + (Mt >>> 26)) | 0),
              (Mt &= 67108863),
              (r = Math.imul(L, H)),
              (i = Math.imul(L, W)),
              (i = (i + Math.imul(P, H)) | 0),
              (s = Math.imul(P, W)),
              (r = (r + Math.imul(R, V)) | 0),
              (i = (i + Math.imul(R, q)) | 0),
              (i = (i + Math.imul(N, V)) | 0),
              (s = (s + Math.imul(N, q)) | 0),
              (r = (r + Math.imul(O, Z)) | 0),
              (i = (i + Math.imul(O, J)) | 0),
              (i = (i + Math.imul(j, Z)) | 0),
              (s = (s + Math.imul(j, J)) | 0),
              (r = (r + Math.imul(k, Q)) | 0),
              (i = (i + Math.imul(k, K)) | 0),
              (i = (i + Math.imul(C, Q)) | 0),
              (s = (s + Math.imul(C, K)) | 0),
              (r = (r + Math.imul(M, X)) | 0),
              (i = (i + Math.imul(M, tt)) | 0),
              (i = (i + Math.imul(E, X)) | 0),
              (s = (s + Math.imul(E, tt)) | 0),
              (r = (r + Math.imul(_, nt)) | 0),
              (i = (i + Math.imul(_, rt)) | 0),
              (i = (i + Math.imul(w, nt)) | 0),
              (s = (s + Math.imul(w, rt)) | 0),
              (r = (r + Math.imul(m, st)) | 0),
              (i = (i + Math.imul(m, ot)) | 0),
              (i = (i + Math.imul(y, st)) | 0),
              (s = (s + Math.imul(y, ot)) | 0),
              (r = (r + Math.imul(p, ut)) | 0),
              (i = (i + Math.imul(p, ct)) | 0),
              (i = (i + Math.imul(b, ut)) | 0),
              (s = (s + Math.imul(b, ct)) | 0),
              (r = (r + Math.imul(h, ht)) | 0),
              (i = (i + Math.imul(h, dt)) | 0),
              (i = (i + Math.imul(d, ht)) | 0),
              (s = (s + Math.imul(d, dt)) | 0);
            var Et = (((c + r) | 0) + ((8191 & i) << 13)) | 0;
            (c = (((s + (i >>> 13)) | 0) + (Et >>> 26)) | 0),
              (Et &= 67108863),
              (r = Math.imul(B, H)),
              (i = Math.imul(B, W)),
              (i = (i + Math.imul(F, H)) | 0),
              (s = Math.imul(F, W)),
              (r = (r + Math.imul(L, V)) | 0),
              (i = (i + Math.imul(L, q)) | 0),
              (i = (i + Math.imul(P, V)) | 0),
              (s = (s + Math.imul(P, q)) | 0),
              (r = (r + Math.imul(R, Z)) | 0),
              (i = (i + Math.imul(R, J)) | 0),
              (i = (i + Math.imul(N, Z)) | 0),
              (s = (s + Math.imul(N, J)) | 0),
              (r = (r + Math.imul(O, Q)) | 0),
              (i = (i + Math.imul(O, K)) | 0),
              (i = (i + Math.imul(j, Q)) | 0),
              (s = (s + Math.imul(j, K)) | 0),
              (r = (r + Math.imul(k, X)) | 0),
              (i = (i + Math.imul(k, tt)) | 0),
              (i = (i + Math.imul(C, X)) | 0),
              (s = (s + Math.imul(C, tt)) | 0),
              (r = (r + Math.imul(M, nt)) | 0),
              (i = (i + Math.imul(M, rt)) | 0),
              (i = (i + Math.imul(E, nt)) | 0),
              (s = (s + Math.imul(E, rt)) | 0),
              (r = (r + Math.imul(_, st)) | 0),
              (i = (i + Math.imul(_, ot)) | 0),
              (i = (i + Math.imul(w, st)) | 0),
              (s = (s + Math.imul(w, ot)) | 0),
              (r = (r + Math.imul(m, ut)) | 0),
              (i = (i + Math.imul(m, ct)) | 0),
              (i = (i + Math.imul(y, ut)) | 0),
              (s = (s + Math.imul(y, ct)) | 0),
              (r = (r + Math.imul(p, ht)) | 0),
              (i = (i + Math.imul(p, dt)) | 0),
              (i = (i + Math.imul(b, ht)) | 0),
              (s = (s + Math.imul(b, dt)) | 0),
              (r = (r + Math.imul(h, pt)) | 0),
              (i = (i + Math.imul(h, bt)) | 0),
              (i = (i + Math.imul(d, pt)) | 0),
              (s = (s + Math.imul(d, bt)) | 0);
            var xt = (((c + r) | 0) + ((8191 & i) << 13)) | 0;
            (c = (((s + (i >>> 13)) | 0) + (xt >>> 26)) | 0),
              (xt &= 67108863),
              (r = Math.imul(B, V)),
              (i = Math.imul(B, q)),
              (i = (i + Math.imul(F, V)) | 0),
              (s = Math.imul(F, q)),
              (r = (r + Math.imul(L, Z)) | 0),
              (i = (i + Math.imul(L, J)) | 0),
              (i = (i + Math.imul(P, Z)) | 0),
              (s = (s + Math.imul(P, J)) | 0),
              (r = (r + Math.imul(R, Q)) | 0),
              (i = (i + Math.imul(R, K)) | 0),
              (i = (i + Math.imul(N, Q)) | 0),
              (s = (s + Math.imul(N, K)) | 0),
              (r = (r + Math.imul(O, X)) | 0),
              (i = (i + Math.imul(O, tt)) | 0),
              (i = (i + Math.imul(j, X)) | 0),
              (s = (s + Math.imul(j, tt)) | 0),
              (r = (r + Math.imul(k, nt)) | 0),
              (i = (i + Math.imul(k, rt)) | 0),
              (i = (i + Math.imul(C, nt)) | 0),
              (s = (s + Math.imul(C, rt)) | 0),
              (r = (r + Math.imul(M, st)) | 0),
              (i = (i + Math.imul(M, ot)) | 0),
              (i = (i + Math.imul(E, st)) | 0),
              (s = (s + Math.imul(E, ot)) | 0),
              (r = (r + Math.imul(_, ut)) | 0),
              (i = (i + Math.imul(_, ct)) | 0),
              (i = (i + Math.imul(w, ut)) | 0),
              (s = (s + Math.imul(w, ct)) | 0),
              (r = (r + Math.imul(m, ht)) | 0),
              (i = (i + Math.imul(m, dt)) | 0),
              (i = (i + Math.imul(y, ht)) | 0),
              (s = (s + Math.imul(y, dt)) | 0),
              (r = (r + Math.imul(p, pt)) | 0),
              (i = (i + Math.imul(p, bt)) | 0),
              (i = (i + Math.imul(b, pt)) | 0),
              (s = (s + Math.imul(b, bt)) | 0);
            var kt = (((c + r) | 0) + ((8191 & i) << 13)) | 0;
            (c = (((s + (i >>> 13)) | 0) + (kt >>> 26)) | 0),
              (kt &= 67108863),
              (r = Math.imul(B, Z)),
              (i = Math.imul(B, J)),
              (i = (i + Math.imul(F, Z)) | 0),
              (s = Math.imul(F, J)),
              (r = (r + Math.imul(L, Q)) | 0),
              (i = (i + Math.imul(L, K)) | 0),
              (i = (i + Math.imul(P, Q)) | 0),
              (s = (s + Math.imul(P, K)) | 0),
              (r = (r + Math.imul(R, X)) | 0),
              (i = (i + Math.imul(R, tt)) | 0),
              (i = (i + Math.imul(N, X)) | 0),
              (s = (s + Math.imul(N, tt)) | 0),
              (r = (r + Math.imul(O, nt)) | 0),
              (i = (i + Math.imul(O, rt)) | 0),
              (i = (i + Math.imul(j, nt)) | 0),
              (s = (s + Math.imul(j, rt)) | 0),
              (r = (r + Math.imul(k, st)) | 0),
              (i = (i + Math.imul(k, ot)) | 0),
              (i = (i + Math.imul(C, st)) | 0),
              (s = (s + Math.imul(C, ot)) | 0),
              (r = (r + Math.imul(M, ut)) | 0),
              (i = (i + Math.imul(M, ct)) | 0),
              (i = (i + Math.imul(E, ut)) | 0),
              (s = (s + Math.imul(E, ct)) | 0),
              (r = (r + Math.imul(_, ht)) | 0),
              (i = (i + Math.imul(_, dt)) | 0),
              (i = (i + Math.imul(w, ht)) | 0),
              (s = (s + Math.imul(w, dt)) | 0),
              (r = (r + Math.imul(m, pt)) | 0),
              (i = (i + Math.imul(m, bt)) | 0),
              (i = (i + Math.imul(y, pt)) | 0),
              (s = (s + Math.imul(y, bt)) | 0);
            var Ct = (((c + r) | 0) + ((8191 & i) << 13)) | 0;
            (c = (((s + (i >>> 13)) | 0) + (Ct >>> 26)) | 0),
              (Ct &= 67108863),
              (r = Math.imul(B, Q)),
              (i = Math.imul(B, K)),
              (i = (i + Math.imul(F, Q)) | 0),
              (s = Math.imul(F, K)),
              (r = (r + Math.imul(L, X)) | 0),
              (i = (i + Math.imul(L, tt)) | 0),
              (i = (i + Math.imul(P, X)) | 0),
              (s = (s + Math.imul(P, tt)) | 0),
              (r = (r + Math.imul(R, nt)) | 0),
              (i = (i + Math.imul(R, rt)) | 0),
              (i = (i + Math.imul(N, nt)) | 0),
              (s = (s + Math.imul(N, rt)) | 0),
              (r = (r + Math.imul(O, st)) | 0),
              (i = (i + Math.imul(O, ot)) | 0),
              (i = (i + Math.imul(j, st)) | 0),
              (s = (s + Math.imul(j, ot)) | 0),
              (r = (r + Math.imul(k, ut)) | 0),
              (i = (i + Math.imul(k, ct)) | 0),
              (i = (i + Math.imul(C, ut)) | 0),
              (s = (s + Math.imul(C, ct)) | 0),
              (r = (r + Math.imul(M, ht)) | 0),
              (i = (i + Math.imul(M, dt)) | 0),
              (i = (i + Math.imul(E, ht)) | 0),
              (s = (s + Math.imul(E, dt)) | 0),
              (r = (r + Math.imul(_, pt)) | 0),
              (i = (i + Math.imul(_, bt)) | 0),
              (i = (i + Math.imul(w, pt)) | 0),
              (s = (s + Math.imul(w, bt)) | 0);
            var It = (((c + r) | 0) + ((8191 & i) << 13)) | 0;
            (c = (((s + (i >>> 13)) | 0) + (It >>> 26)) | 0),
              (It &= 67108863),
              (r = Math.imul(B, X)),
              (i = Math.imul(B, tt)),
              (i = (i + Math.imul(F, X)) | 0),
              (s = Math.imul(F, tt)),
              (r = (r + Math.imul(L, nt)) | 0),
              (i = (i + Math.imul(L, rt)) | 0),
              (i = (i + Math.imul(P, nt)) | 0),
              (s = (s + Math.imul(P, rt)) | 0),
              (r = (r + Math.imul(R, st)) | 0),
              (i = (i + Math.imul(R, ot)) | 0),
              (i = (i + Math.imul(N, st)) | 0),
              (s = (s + Math.imul(N, ot)) | 0),
              (r = (r + Math.imul(O, ut)) | 0),
              (i = (i + Math.imul(O, ct)) | 0),
              (i = (i + Math.imul(j, ut)) | 0),
              (s = (s + Math.imul(j, ct)) | 0),
              (r = (r + Math.imul(k, ht)) | 0),
              (i = (i + Math.imul(k, dt)) | 0),
              (i = (i + Math.imul(C, ht)) | 0),
              (s = (s + Math.imul(C, dt)) | 0),
              (r = (r + Math.imul(M, pt)) | 0),
              (i = (i + Math.imul(M, bt)) | 0),
              (i = (i + Math.imul(E, pt)) | 0),
              (s = (s + Math.imul(E, bt)) | 0);
            var Ot = (((c + r) | 0) + ((8191 & i) << 13)) | 0;
            (c = (((s + (i >>> 13)) | 0) + (Ot >>> 26)) | 0),
              (Ot &= 67108863),
              (r = Math.imul(B, nt)),
              (i = Math.imul(B, rt)),
              (i = (i + Math.imul(F, nt)) | 0),
              (s = Math.imul(F, rt)),
              (r = (r + Math.imul(L, st)) | 0),
              (i = (i + Math.imul(L, ot)) | 0),
              (i = (i + Math.imul(P, st)) | 0),
              (s = (s + Math.imul(P, ot)) | 0),
              (r = (r + Math.imul(R, ut)) | 0),
              (i = (i + Math.imul(R, ct)) | 0),
              (i = (i + Math.imul(N, ut)) | 0),
              (s = (s + Math.imul(N, ct)) | 0),
              (r = (r + Math.imul(O, ht)) | 0),
              (i = (i + Math.imul(O, dt)) | 0),
              (i = (i + Math.imul(j, ht)) | 0),
              (s = (s + Math.imul(j, dt)) | 0),
              (r = (r + Math.imul(k, pt)) | 0),
              (i = (i + Math.imul(k, bt)) | 0),
              (i = (i + Math.imul(C, pt)) | 0),
              (s = (s + Math.imul(C, bt)) | 0);
            var jt = (((c + r) | 0) + ((8191 & i) << 13)) | 0;
            (c = (((s + (i >>> 13)) | 0) + (jt >>> 26)) | 0),
              (jt &= 67108863),
              (r = Math.imul(B, st)),
              (i = Math.imul(B, ot)),
              (i = (i + Math.imul(F, st)) | 0),
              (s = Math.imul(F, ot)),
              (r = (r + Math.imul(L, ut)) | 0),
              (i = (i + Math.imul(L, ct)) | 0),
              (i = (i + Math.imul(P, ut)) | 0),
              (s = (s + Math.imul(P, ct)) | 0),
              (r = (r + Math.imul(R, ht)) | 0),
              (i = (i + Math.imul(R, dt)) | 0),
              (i = (i + Math.imul(N, ht)) | 0),
              (s = (s + Math.imul(N, dt)) | 0),
              (r = (r + Math.imul(O, pt)) | 0),
              (i = (i + Math.imul(O, bt)) | 0),
              (i = (i + Math.imul(j, pt)) | 0),
              (s = (s + Math.imul(j, bt)) | 0);
            var At = (((c + r) | 0) + ((8191 & i) << 13)) | 0;
            (c = (((s + (i >>> 13)) | 0) + (At >>> 26)) | 0),
              (At &= 67108863),
              (r = Math.imul(B, ut)),
              (i = Math.imul(B, ct)),
              (i = (i + Math.imul(F, ut)) | 0),
              (s = Math.imul(F, ct)),
              (r = (r + Math.imul(L, ht)) | 0),
              (i = (i + Math.imul(L, dt)) | 0),
              (i = (i + Math.imul(P, ht)) | 0),
              (s = (s + Math.imul(P, dt)) | 0),
              (r = (r + Math.imul(R, pt)) | 0),
              (i = (i + Math.imul(R, bt)) | 0),
              (i = (i + Math.imul(N, pt)) | 0),
              (s = (s + Math.imul(N, bt)) | 0);
            var Rt = (((c + r) | 0) + ((8191 & i) << 13)) | 0;
            (c = (((s + (i >>> 13)) | 0) + (Rt >>> 26)) | 0),
              (Rt &= 67108863),
              (r = Math.imul(B, ht)),
              (i = Math.imul(B, dt)),
              (i = (i + Math.imul(F, ht)) | 0),
              (s = Math.imul(F, dt)),
              (r = (r + Math.imul(L, pt)) | 0),
              (i = (i + Math.imul(L, bt)) | 0),
              (i = (i + Math.imul(P, pt)) | 0),
              (s = (s + Math.imul(P, bt)) | 0);
            var Nt = (((c + r) | 0) + ((8191 & i) << 13)) | 0;
            (c = (((s + (i >>> 13)) | 0) + (Nt >>> 26)) | 0),
              (Nt &= 67108863),
              (r = Math.imul(B, pt)),
              (i = Math.imul(B, bt)),
              (i = (i + Math.imul(F, pt)) | 0),
              (s = Math.imul(F, bt));
            var Tt = (((c + r) | 0) + ((8191 & i) << 13)) | 0;
            return (
              (c = (((s + (i >>> 13)) | 0) + (Tt >>> 26)) | 0),
              (Tt &= 67108863),
              (u[0] = gt),
              (u[1] = mt),
              (u[2] = yt),
              (u[3] = vt),
              (u[4] = _t),
              (u[5] = wt),
              (u[6] = St),
              (u[7] = Mt),
              (u[8] = Et),
              (u[9] = xt),
              (u[10] = kt),
              (u[11] = Ct),
              (u[12] = It),
              (u[13] = Ot),
              (u[14] = jt),
              (u[15] = At),
              (u[16] = Rt),
              (u[17] = Nt),
              (u[18] = Tt),
              0 !== c && ((u[19] = c), n.length++),
              n
            );
          };
          function v(t, e, n) {
            (n.negative = e.negative ^ t.negative),
              (n.length = t.length + e.length);
            for (var r = 0, i = 0, s = 0; s < n.length - 1; s++) {
              var o = i;
              i = 0;
              for (
                var a = 67108863 & r,
                  u = Math.min(s, e.length - 1),
                  c = Math.max(0, s - t.length + 1);
                c <= u;
                c++
              ) {
                var l = s - c,
                  h = 0 | t.words[l],
                  d = 0 | e.words[c],
                  f = h * d,
                  p = 67108863 & f;
                (o = (o + ((f / 67108864) | 0)) | 0),
                  (p = (p + a) | 0),
                  (a = 67108863 & p),
                  (o = (o + (p >>> 26)) | 0),
                  (i += o >>> 26),
                  (o &= 67108863);
              }
              (n.words[s] = a), (r = o), (o = i);
            }
            return 0 !== r ? (n.words[s] = r) : n.length--, n._strip();
          }
          function _(t, e, n) {
            return v(t, e, n);
          }
          function w(t, e) {
            (this.x = t), (this.y = e);
          }
          Math.imul || (y = m),
            (s.prototype.mulTo = function (t, e) {
              var n,
                r = this.length + t.length;
              return (
                (n =
                  10 === this.length && 10 === t.length
                    ? y(this, t, e)
                    : r < 63
                    ? m(this, t, e)
                    : r < 1024
                    ? v(this, t, e)
                    : _(this, t, e)),
                n
              );
            }),
            (w.prototype.makeRBT = function (t) {
              for (
                var e = new Array(t), n = s.prototype._countBits(t) - 1, r = 0;
                r < t;
                r++
              )
                e[r] = this.revBin(r, n, t);
              return e;
            }),
            (w.prototype.revBin = function (t, e, n) {
              if (0 === t || t === n - 1) return t;
              for (var r = 0, i = 0; i < e; i++)
                (r |= (1 & t) << (e - i - 1)), (t >>= 1);
              return r;
            }),
            (w.prototype.permute = function (t, e, n, r, i, s) {
              for (var o = 0; o < s; o++) (r[o] = e[t[o]]), (i[o] = n[t[o]]);
            }),
            (w.prototype.transform = function (t, e, n, r, i, s) {
              this.permute(s, t, e, n, r, i);
              for (var o = 1; o < i; o <<= 1)
                for (
                  var a = o << 1,
                    u = Math.cos((2 * Math.PI) / a),
                    c = Math.sin((2 * Math.PI) / a),
                    l = 0;
                  l < i;
                  l += a
                )
                  for (var h = u, d = c, f = 0; f < o; f++) {
                    var p = n[l + f],
                      b = r[l + f],
                      g = n[l + f + o],
                      m = r[l + f + o],
                      y = h * g - d * m;
                    (m = h * m + d * g),
                      (g = y),
                      (n[l + f] = p + g),
                      (r[l + f] = b + m),
                      (n[l + f + o] = p - g),
                      (r[l + f + o] = b - m),
                      f !== a &&
                        ((y = u * h - c * d), (d = u * d + c * h), (h = y));
                  }
            }),
            (w.prototype.guessLen13b = function (t, e) {
              var n = 1 | Math.max(e, t),
                r = 1 & n,
                i = 0;
              for (n = (n / 2) | 0; n; n >>>= 1) i++;
              return 1 << (i + 1 + r);
            }),
            (w.prototype.conjugate = function (t, e, n) {
              if (!(n <= 1))
                for (var r = 0; r < n / 2; r++) {
                  var i = t[r];
                  (t[r] = t[n - r - 1]),
                    (t[n - r - 1] = i),
                    (i = e[r]),
                    (e[r] = -e[n - r - 1]),
                    (e[n - r - 1] = -i);
                }
            }),
            (w.prototype.normalize13b = function (t, e) {
              for (var n = 0, r = 0; r < e / 2; r++) {
                var i =
                  8192 * Math.round(t[2 * r + 1] / e) +
                  Math.round(t[2 * r] / e) +
                  n;
                (t[r] = 67108863 & i),
                  (n = i < 67108864 ? 0 : (i / 67108864) | 0);
              }
              return t;
            }),
            (w.prototype.convert13b = function (t, e, n, i) {
              for (var s = 0, o = 0; o < e; o++)
                (s += 0 | t[o]),
                  (n[2 * o] = 8191 & s),
                  (s >>>= 13),
                  (n[2 * o + 1] = 8191 & s),
                  (s >>>= 13);
              for (o = 2 * e; o < i; ++o) n[o] = 0;
              r(0 === s), r(0 === (-8192 & s));
            }),
            (w.prototype.stub = function (t) {
              for (var e = new Array(t), n = 0; n < t; n++) e[n] = 0;
              return e;
            }),
            (w.prototype.mulp = function (t, e, n) {
              var r = 2 * this.guessLen13b(t.length, e.length),
                i = this.makeRBT(r),
                s = this.stub(r),
                o = new Array(r),
                a = new Array(r),
                u = new Array(r),
                c = new Array(r),
                l = new Array(r),
                h = new Array(r),
                d = n.words;
              (d.length = r),
                this.convert13b(t.words, t.length, o, r),
                this.convert13b(e.words, e.length, c, r),
                this.transform(o, s, a, u, r, i),
                this.transform(c, s, l, h, r, i);
              for (var f = 0; f < r; f++) {
                var p = a[f] * l[f] - u[f] * h[f];
                (u[f] = a[f] * h[f] + u[f] * l[f]), (a[f] = p);
              }
              return (
                this.conjugate(a, u, r),
                this.transform(a, u, d, s, r, i),
                this.conjugate(d, s, r),
                this.normalize13b(d, r),
                (n.negative = t.negative ^ e.negative),
                (n.length = t.length + e.length),
                n._strip()
              );
            }),
            (s.prototype.mul = function (t) {
              var e = new s(null);
              return (
                (e.words = new Array(this.length + t.length)), this.mulTo(t, e)
              );
            }),
            (s.prototype.mulf = function (t) {
              var e = new s(null);
              return (
                (e.words = new Array(this.length + t.length)), _(this, t, e)
              );
            }),
            (s.prototype.imul = function (t) {
              return this.clone().mulTo(t, this);
            }),
            (s.prototype.imuln = function (t) {
              var e = t < 0;
              e && (t = -t), r('number' === typeof t), r(t < 67108864);
              for (var n = 0, i = 0; i < this.length; i++) {
                var s = (0 | this.words[i]) * t,
                  o = (67108863 & s) + (67108863 & n);
                (n >>= 26),
                  (n += (s / 67108864) | 0),
                  (n += o >>> 26),
                  (this.words[i] = 67108863 & o);
              }
              return (
                0 !== n && ((this.words[i] = n), this.length++),
                e ? this.ineg() : this
              );
            }),
            (s.prototype.muln = function (t) {
              return this.clone().imuln(t);
            }),
            (s.prototype.sqr = function () {
              return this.mul(this);
            }),
            (s.prototype.isqr = function () {
              return this.imul(this.clone());
            }),
            (s.prototype.pow = function (t) {
              var e = g(t);
              if (0 === e.length) return new s(1);
              for (var n = this, r = 0; r < e.length; r++, n = n.sqr())
                if (0 !== e[r]) break;
              if (++r < e.length)
                for (var i = n.sqr(); r < e.length; r++, i = i.sqr())
                  0 !== e[r] && (n = n.mul(i));
              return n;
            }),
            (s.prototype.iushln = function (t) {
              r('number' === typeof t && t >= 0);
              var e,
                n = t % 26,
                i = (t - n) / 26,
                s = (67108863 >>> (26 - n)) << (26 - n);
              if (0 !== n) {
                var o = 0;
                for (e = 0; e < this.length; e++) {
                  var a = this.words[e] & s,
                    u = ((0 | this.words[e]) - a) << n;
                  (this.words[e] = u | o), (o = a >>> (26 - n));
                }
                o && ((this.words[e] = o), this.length++);
              }
              if (0 !== i) {
                for (e = this.length - 1; e >= 0; e--)
                  this.words[e + i] = this.words[e];
                for (e = 0; e < i; e++) this.words[e] = 0;
                this.length += i;
              }
              return this._strip();
            }),
            (s.prototype.ishln = function (t) {
              return r(0 === this.negative), this.iushln(t);
            }),
            (s.prototype.iushrn = function (t, e, n) {
              var i;
              r('number' === typeof t && t >= 0),
                (i = e ? (e - (e % 26)) / 26 : 0);
              var s = t % 26,
                o = Math.min((t - s) / 26, this.length),
                a = 67108863 ^ ((67108863 >>> s) << s),
                u = n;
              if (((i -= o), (i = Math.max(0, i)), u)) {
                for (var c = 0; c < o; c++) u.words[c] = this.words[c];
                u.length = o;
              }
              if (0 === o);
              else if (this.length > o)
                for (this.length -= o, c = 0; c < this.length; c++)
                  this.words[c] = this.words[c + o];
              else (this.words[0] = 0), (this.length = 1);
              var l = 0;
              for (c = this.length - 1; c >= 0 && (0 !== l || c >= i); c--) {
                var h = 0 | this.words[c];
                (this.words[c] = (l << (26 - s)) | (h >>> s)), (l = h & a);
              }
              return (
                u && 0 !== l && (u.words[u.length++] = l),
                0 === this.length && ((this.words[0] = 0), (this.length = 1)),
                this._strip()
              );
            }),
            (s.prototype.ishrn = function (t, e, n) {
              return r(0 === this.negative), this.iushrn(t, e, n);
            }),
            (s.prototype.shln = function (t) {
              return this.clone().ishln(t);
            }),
            (s.prototype.ushln = function (t) {
              return this.clone().iushln(t);
            }),
            (s.prototype.shrn = function (t) {
              return this.clone().ishrn(t);
            }),
            (s.prototype.ushrn = function (t) {
              return this.clone().iushrn(t);
            }),
            (s.prototype.testn = function (t) {
              r('number' === typeof t && t >= 0);
              var e = t % 26,
                n = (t - e) / 26,
                i = 1 << e;
              if (this.length <= n) return !1;
              var s = this.words[n];
              return !!(s & i);
            }),
            (s.prototype.imaskn = function (t) {
              r('number' === typeof t && t >= 0);
              var e = t % 26,
                n = (t - e) / 26;
              if (
                (r(
                  0 === this.negative,
                  'imaskn works only with positive numbers',
                ),
                this.length <= n)
              )
                return this;
              if (
                (0 !== e && n++,
                (this.length = Math.min(n, this.length)),
                0 !== e)
              ) {
                var i = 67108863 ^ ((67108863 >>> e) << e);
                this.words[this.length - 1] &= i;
              }
              return this._strip();
            }),
            (s.prototype.maskn = function (t) {
              return this.clone().imaskn(t);
            }),
            (s.prototype.iaddn = function (t) {
              return (
                r('number' === typeof t),
                r(t < 67108864),
                t < 0
                  ? this.isubn(-t)
                  : 0 !== this.negative
                  ? 1 === this.length && (0 | this.words[0]) <= t
                    ? ((this.words[0] = t - (0 | this.words[0])),
                      (this.negative = 0),
                      this)
                    : ((this.negative = 0),
                      this.isubn(t),
                      (this.negative = 1),
                      this)
                  : this._iaddn(t)
              );
            }),
            (s.prototype._iaddn = function (t) {
              this.words[0] += t;
              for (var e = 0; e < this.length && this.words[e] >= 67108864; e++)
                (this.words[e] -= 67108864),
                  e === this.length - 1
                    ? (this.words[e + 1] = 1)
                    : this.words[e + 1]++;
              return (this.length = Math.max(this.length, e + 1)), this;
            }),
            (s.prototype.isubn = function (t) {
              if ((r('number' === typeof t), r(t < 67108864), t < 0))
                return this.iaddn(-t);
              if (0 !== this.negative)
                return (
                  (this.negative = 0), this.iaddn(t), (this.negative = 1), this
                );
              if (
                ((this.words[0] -= t), 1 === this.length && this.words[0] < 0)
              )
                (this.words[0] = -this.words[0]), (this.negative = 1);
              else
                for (var e = 0; e < this.length && this.words[e] < 0; e++)
                  (this.words[e] += 67108864), (this.words[e + 1] -= 1);
              return this._strip();
            }),
            (s.prototype.addn = function (t) {
              return this.clone().iaddn(t);
            }),
            (s.prototype.subn = function (t) {
              return this.clone().isubn(t);
            }),
            (s.prototype.iabs = function () {
              return (this.negative = 0), this;
            }),
            (s.prototype.abs = function () {
              return this.clone().iabs();
            }),
            (s.prototype._ishlnsubmul = function (t, e, n) {
              var i,
                s,
                o = t.length + n;
              this._expand(o);
              var a = 0;
              for (i = 0; i < t.length; i++) {
                s = (0 | this.words[i + n]) + a;
                var u = (0 | t.words[i]) * e;
                (s -= 67108863 & u),
                  (a = (s >> 26) - ((u / 67108864) | 0)),
                  (this.words[i + n] = 67108863 & s);
              }
              for (; i < this.length - n; i++)
                (s = (0 | this.words[i + n]) + a),
                  (a = s >> 26),
                  (this.words[i + n] = 67108863 & s);
              if (0 === a) return this._strip();
              for (r(-1 === a), a = 0, i = 0; i < this.length; i++)
                (s = -(0 | this.words[i]) + a),
                  (a = s >> 26),
                  (this.words[i] = 67108863 & s);
              return (this.negative = 1), this._strip();
            }),
            (s.prototype._wordDiv = function (t, e) {
              var n = this.length - t.length,
                r = this.clone(),
                i = t,
                o = 0 | i.words[i.length - 1],
                a = this._countBits(o);
              (n = 26 - a),
                0 !== n &&
                  ((i = i.ushln(n)),
                  r.iushln(n),
                  (o = 0 | i.words[i.length - 1]));
              var u,
                c = r.length - i.length;
              if ('mod' !== e) {
                (u = new s(null)),
                  (u.length = c + 1),
                  (u.words = new Array(u.length));
                for (var l = 0; l < u.length; l++) u.words[l] = 0;
              }
              var h = r.clone()._ishlnsubmul(i, 1, c);
              0 === h.negative && ((r = h), u && (u.words[c] = 1));
              for (var d = c - 1; d >= 0; d--) {
                var f =
                  67108864 * (0 | r.words[i.length + d]) +
                  (0 | r.words[i.length + d - 1]);
                (f = Math.min((f / o) | 0, 67108863)), r._ishlnsubmul(i, f, d);
                while (0 !== r.negative)
                  f--,
                    (r.negative = 0),
                    r._ishlnsubmul(i, 1, d),
                    r.isZero() || (r.negative ^= 1);
                u && (u.words[d] = f);
              }
              return (
                u && u._strip(),
                r._strip(),
                'div' !== e && 0 !== n && r.iushrn(n),
                { div: u || null, mod: r }
              );
            }),
            (s.prototype.divmod = function (t, e, n) {
              return (
                r(!t.isZero()),
                this.isZero()
                  ? { div: new s(0), mod: new s(0) }
                  : 0 !== this.negative && 0 === t.negative
                  ? ((a = this.neg().divmod(t, e)),
                    'mod' !== e && (i = a.div.neg()),
                    'div' !== e &&
                      ((o = a.mod.neg()), n && 0 !== o.negative && o.iadd(t)),
                    { div: i, mod: o })
                  : 0 === this.negative && 0 !== t.negative
                  ? ((a = this.divmod(t.neg(), e)),
                    'mod' !== e && (i = a.div.neg()),
                    { div: i, mod: a.mod })
                  : 0 !== (this.negative & t.negative)
                  ? ((a = this.neg().divmod(t.neg(), e)),
                    'div' !== e &&
                      ((o = a.mod.neg()), n && 0 !== o.negative && o.isub(t)),
                    { div: a.div, mod: o })
                  : t.length > this.length || this.cmp(t) < 0
                  ? { div: new s(0), mod: this }
                  : 1 === t.length
                  ? 'div' === e
                    ? { div: this.divn(t.words[0]), mod: null }
                    : 'mod' === e
                    ? { div: null, mod: new s(this.modrn(t.words[0])) }
                    : {
                        div: this.divn(t.words[0]),
                        mod: new s(this.modrn(t.words[0])),
                      }
                  : this._wordDiv(t, e)
              );
              var i, o, a;
            }),
            (s.prototype.div = function (t) {
              return this.divmod(t, 'div', !1).div;
            }),
            (s.prototype.mod = function (t) {
              return this.divmod(t, 'mod', !1).mod;
            }),
            (s.prototype.umod = function (t) {
              return this.divmod(t, 'mod', !0).mod;
            }),
            (s.prototype.divRound = function (t) {
              var e = this.divmod(t);
              if (e.mod.isZero()) return e.div;
              var n = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
                r = t.ushrn(1),
                i = t.andln(1),
                s = n.cmp(r);
              return s < 0 || (1 === i && 0 === s)
                ? e.div
                : 0 !== e.div.negative
                ? e.div.isubn(1)
                : e.div.iaddn(1);
            }),
            (s.prototype.modrn = function (t) {
              var e = t < 0;
              e && (t = -t), r(t <= 67108863);
              for (
                var n = (1 << 26) % t, i = 0, s = this.length - 1;
                s >= 0;
                s--
              )
                i = (n * i + (0 | this.words[s])) % t;
              return e ? -i : i;
            }),
            (s.prototype.modn = function (t) {
              return this.modrn(t);
            }),
            (s.prototype.idivn = function (t) {
              var e = t < 0;
              e && (t = -t), r(t <= 67108863);
              for (var n = 0, i = this.length - 1; i >= 0; i--) {
                var s = (0 | this.words[i]) + 67108864 * n;
                (this.words[i] = (s / t) | 0), (n = s % t);
              }
              return this._strip(), e ? this.ineg() : this;
            }),
            (s.prototype.divn = function (t) {
              return this.clone().idivn(t);
            }),
            (s.prototype.egcd = function (t) {
              r(0 === t.negative), r(!t.isZero());
              var e = this,
                n = t.clone();
              e = 0 !== e.negative ? e.umod(t) : e.clone();
              var i = new s(1),
                o = new s(0),
                a = new s(0),
                u = new s(1),
                c = 0;
              while (e.isEven() && n.isEven()) e.iushrn(1), n.iushrn(1), ++c;
              var l = n.clone(),
                h = e.clone();
              while (!e.isZero()) {
                for (
                  var d = 0, f = 1;
                  0 === (e.words[0] & f) && d < 26;
                  ++d, f <<= 1
                );
                if (d > 0) {
                  e.iushrn(d);
                  while (d-- > 0)
                    (i.isOdd() || o.isOdd()) && (i.iadd(l), o.isub(h)),
                      i.iushrn(1),
                      o.iushrn(1);
                }
                for (
                  var p = 0, b = 1;
                  0 === (n.words[0] & b) && p < 26;
                  ++p, b <<= 1
                );
                if (p > 0) {
                  n.iushrn(p);
                  while (p-- > 0)
                    (a.isOdd() || u.isOdd()) && (a.iadd(l), u.isub(h)),
                      a.iushrn(1),
                      u.iushrn(1);
                }
                e.cmp(n) >= 0
                  ? (e.isub(n), i.isub(a), o.isub(u))
                  : (n.isub(e), a.isub(i), u.isub(o));
              }
              return { a: a, b: u, gcd: n.iushln(c) };
            }),
            (s.prototype._invmp = function (t) {
              r(0 === t.negative), r(!t.isZero());
              var e = this,
                n = t.clone();
              e = 0 !== e.negative ? e.umod(t) : e.clone();
              var i,
                o = new s(1),
                a = new s(0),
                u = n.clone();
              while (e.cmpn(1) > 0 && n.cmpn(1) > 0) {
                for (
                  var c = 0, l = 1;
                  0 === (e.words[0] & l) && c < 26;
                  ++c, l <<= 1
                );
                if (c > 0) {
                  e.iushrn(c);
                  while (c-- > 0) o.isOdd() && o.iadd(u), o.iushrn(1);
                }
                for (
                  var h = 0, d = 1;
                  0 === (n.words[0] & d) && h < 26;
                  ++h, d <<= 1
                );
                if (h > 0) {
                  n.iushrn(h);
                  while (h-- > 0) a.isOdd() && a.iadd(u), a.iushrn(1);
                }
                e.cmp(n) >= 0 ? (e.isub(n), o.isub(a)) : (n.isub(e), a.isub(o));
              }
              return (
                (i = 0 === e.cmpn(1) ? o : a), i.cmpn(0) < 0 && i.iadd(t), i
              );
            }),
            (s.prototype.gcd = function (t) {
              if (this.isZero()) return t.abs();
              if (t.isZero()) return this.abs();
              var e = this.clone(),
                n = t.clone();
              (e.negative = 0), (n.negative = 0);
              for (var r = 0; e.isEven() && n.isEven(); r++)
                e.iushrn(1), n.iushrn(1);
              do {
                while (e.isEven()) e.iushrn(1);
                while (n.isEven()) n.iushrn(1);
                var i = e.cmp(n);
                if (i < 0) {
                  var s = e;
                  (e = n), (n = s);
                } else if (0 === i || 0 === n.cmpn(1)) break;
                e.isub(n);
              } while (1);
              return n.iushln(r);
            }),
            (s.prototype.invm = function (t) {
              return this.egcd(t).a.umod(t);
            }),
            (s.prototype.isEven = function () {
              return 0 === (1 & this.words[0]);
            }),
            (s.prototype.isOdd = function () {
              return 1 === (1 & this.words[0]);
            }),
            (s.prototype.andln = function (t) {
              return this.words[0] & t;
            }),
            (s.prototype.bincn = function (t) {
              r('number' === typeof t);
              var e = t % 26,
                n = (t - e) / 26,
                i = 1 << e;
              if (this.length <= n)
                return this._expand(n + 1), (this.words[n] |= i), this;
              for (var s = i, o = n; 0 !== s && o < this.length; o++) {
                var a = 0 | this.words[o];
                (a += s), (s = a >>> 26), (a &= 67108863), (this.words[o] = a);
              }
              return 0 !== s && ((this.words[o] = s), this.length++), this;
            }),
            (s.prototype.isZero = function () {
              return 1 === this.length && 0 === this.words[0];
            }),
            (s.prototype.cmpn = function (t) {
              var e,
                n = t < 0;
              if (0 !== this.negative && !n) return -1;
              if (0 === this.negative && n) return 1;
              if ((this._strip(), this.length > 1)) e = 1;
              else {
                n && (t = -t), r(t <= 67108863, 'Number is too big');
                var i = 0 | this.words[0];
                e = i === t ? 0 : i < t ? -1 : 1;
              }
              return 0 !== this.negative ? 0 | -e : e;
            }),
            (s.prototype.cmp = function (t) {
              if (0 !== this.negative && 0 === t.negative) return -1;
              if (0 === this.negative && 0 !== t.negative) return 1;
              var e = this.ucmp(t);
              return 0 !== this.negative ? 0 | -e : e;
            }),
            (s.prototype.ucmp = function (t) {
              if (this.length > t.length) return 1;
              if (this.length < t.length) return -1;
              for (var e = 0, n = this.length - 1; n >= 0; n--) {
                var r = 0 | this.words[n],
                  i = 0 | t.words[n];
                if (r !== i) {
                  r < i ? (e = -1) : r > i && (e = 1);
                  break;
                }
              }
              return e;
            }),
            (s.prototype.gtn = function (t) {
              return 1 === this.cmpn(t);
            }),
            (s.prototype.gt = function (t) {
              return 1 === this.cmp(t);
            }),
            (s.prototype.gten = function (t) {
              return this.cmpn(t) >= 0;
            }),
            (s.prototype.gte = function (t) {
              return this.cmp(t) >= 0;
            }),
            (s.prototype.ltn = function (t) {
              return -1 === this.cmpn(t);
            }),
            (s.prototype.lt = function (t) {
              return -1 === this.cmp(t);
            }),
            (s.prototype.lten = function (t) {
              return this.cmpn(t) <= 0;
            }),
            (s.prototype.lte = function (t) {
              return this.cmp(t) <= 0;
            }),
            (s.prototype.eqn = function (t) {
              return 0 === this.cmpn(t);
            }),
            (s.prototype.eq = function (t) {
              return 0 === this.cmp(t);
            }),
            (s.red = function (t) {
              return new I(t);
            }),
            (s.prototype.toRed = function (t) {
              return (
                r(!this.red, 'Already a number in reduction context'),
                r(0 === this.negative, 'red works only with positives'),
                t.convertTo(this)._forceRed(t)
              );
            }),
            (s.prototype.fromRed = function () {
              return (
                r(
                  this.red,
                  'fromRed works only with numbers in reduction context',
                ),
                this.red.convertFrom(this)
              );
            }),
            (s.prototype._forceRed = function (t) {
              return (this.red = t), this;
            }),
            (s.prototype.forceRed = function (t) {
              return (
                r(!this.red, 'Already a number in reduction context'),
                this._forceRed(t)
              );
            }),
            (s.prototype.redAdd = function (t) {
              return (
                r(this.red, 'redAdd works only with red numbers'),
                this.red.add(this, t)
              );
            }),
            (s.prototype.redIAdd = function (t) {
              return (
                r(this.red, 'redIAdd works only with red numbers'),
                this.red.iadd(this, t)
              );
            }),
            (s.prototype.redSub = function (t) {
              return (
                r(this.red, 'redSub works only with red numbers'),
                this.red.sub(this, t)
              );
            }),
            (s.prototype.redISub = function (t) {
              return (
                r(this.red, 'redISub works only with red numbers'),
                this.red.isub(this, t)
              );
            }),
            (s.prototype.redShl = function (t) {
              return (
                r(this.red, 'redShl works only with red numbers'),
                this.red.shl(this, t)
              );
            }),
            (s.prototype.redMul = function (t) {
              return (
                r(this.red, 'redMul works only with red numbers'),
                this.red._verify2(this, t),
                this.red.mul(this, t)
              );
            }),
            (s.prototype.redIMul = function (t) {
              return (
                r(this.red, 'redMul works only with red numbers'),
                this.red._verify2(this, t),
                this.red.imul(this, t)
              );
            }),
            (s.prototype.redSqr = function () {
              return (
                r(this.red, 'redSqr works only with red numbers'),
                this.red._verify1(this),
                this.red.sqr(this)
              );
            }),
            (s.prototype.redISqr = function () {
              return (
                r(this.red, 'redISqr works only with red numbers'),
                this.red._verify1(this),
                this.red.isqr(this)
              );
            }),
            (s.prototype.redSqrt = function () {
              return (
                r(this.red, 'redSqrt works only with red numbers'),
                this.red._verify1(this),
                this.red.sqrt(this)
              );
            }),
            (s.prototype.redInvm = function () {
              return (
                r(this.red, 'redInvm works only with red numbers'),
                this.red._verify1(this),
                this.red.invm(this)
              );
            }),
            (s.prototype.redNeg = function () {
              return (
                r(this.red, 'redNeg works only with red numbers'),
                this.red._verify1(this),
                this.red.neg(this)
              );
            }),
            (s.prototype.redPow = function (t) {
              return (
                r(this.red && !t.red, 'redPow(normalNum)'),
                this.red._verify1(this),
                this.red.pow(this, t)
              );
            });
          var S = { k256: null, p224: null, p192: null, p25519: null };
          function M(t, e) {
            (this.name = t),
              (this.p = new s(e, 16)),
              (this.n = this.p.bitLength()),
              (this.k = new s(1).iushln(this.n).isub(this.p)),
              (this.tmp = this._tmp());
          }
          function E() {
            M.call(
              this,
              'k256',
              'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f',
            );
          }
          function x() {
            M.call(
              this,
              'p224',
              'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001',
            );
          }
          function k() {
            M.call(
              this,
              'p192',
              'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff',
            );
          }
          function C() {
            M.call(
              this,
              '25519',
              '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed',
            );
          }
          function I(t) {
            if ('string' === typeof t) {
              var e = s._prime(t);
              (this.m = e.p), (this.prime = e);
            } else
              r(t.gtn(1), 'modulus must be greater than 1'),
                (this.m = t),
                (this.prime = null);
          }
          function O(t) {
            I.call(this, t),
              (this.shift = this.m.bitLength()),
              this.shift % 26 !== 0 && (this.shift += 26 - (this.shift % 26)),
              (this.r = new s(1).iushln(this.shift)),
              (this.r2 = this.imod(this.r.sqr())),
              (this.rinv = this.r._invmp(this.m)),
              (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
              (this.minv = this.minv.umod(this.r)),
              (this.minv = this.r.sub(this.minv));
          }
          (M.prototype._tmp = function () {
            var t = new s(null);
            return (t.words = new Array(Math.ceil(this.n / 13))), t;
          }),
            (M.prototype.ireduce = function (t) {
              var e,
                n = t;
              do {
                this.split(n, this.tmp),
                  (n = this.imulK(n)),
                  (n = n.iadd(this.tmp)),
                  (e = n.bitLength());
              } while (e > this.n);
              var r = e < this.n ? -1 : n.ucmp(this.p);
              return (
                0 === r
                  ? ((n.words[0] = 0), (n.length = 1))
                  : r > 0
                  ? n.isub(this.p)
                  : void 0 !== n.strip
                  ? n.strip()
                  : n._strip(),
                n
              );
            }),
            (M.prototype.split = function (t, e) {
              t.iushrn(this.n, 0, e);
            }),
            (M.prototype.imulK = function (t) {
              return t.imul(this.k);
            }),
            i(E, M),
            (E.prototype.split = function (t, e) {
              for (
                var n = 4194303, r = Math.min(t.length, 9), i = 0;
                i < r;
                i++
              )
                e.words[i] = t.words[i];
              if (((e.length = r), t.length <= 9))
                return (t.words[0] = 0), void (t.length = 1);
              var s = t.words[9];
              for (e.words[e.length++] = s & n, i = 10; i < t.length; i++) {
                var o = 0 | t.words[i];
                (t.words[i - 10] = ((o & n) << 4) | (s >>> 22)), (s = o);
              }
              (s >>>= 22),
                (t.words[i - 10] = s),
                0 === s && t.length > 10 ? (t.length -= 10) : (t.length -= 9);
            }),
            (E.prototype.imulK = function (t) {
              (t.words[t.length] = 0),
                (t.words[t.length + 1] = 0),
                (t.length += 2);
              for (var e = 0, n = 0; n < t.length; n++) {
                var r = 0 | t.words[n];
                (e += 977 * r),
                  (t.words[n] = 67108863 & e),
                  (e = 64 * r + ((e / 67108864) | 0));
              }
              return (
                0 === t.words[t.length - 1] &&
                  (t.length--, 0 === t.words[t.length - 1] && t.length--),
                t
              );
            }),
            i(x, M),
            i(k, M),
            i(C, M),
            (C.prototype.imulK = function (t) {
              for (var e = 0, n = 0; n < t.length; n++) {
                var r = 19 * (0 | t.words[n]) + e,
                  i = 67108863 & r;
                (r >>>= 26), (t.words[n] = i), (e = r);
              }
              return 0 !== e && (t.words[t.length++] = e), t;
            }),
            (s._prime = function (t) {
              if (S[t]) return S[t];
              var e;
              if ('k256' === t) e = new E();
              else if ('p224' === t) e = new x();
              else if ('p192' === t) e = new k();
              else {
                if ('p25519' !== t) throw new Error('Unknown prime ' + t);
                e = new C();
              }
              return (S[t] = e), e;
            }),
            (I.prototype._verify1 = function (t) {
              r(0 === t.negative, 'red works only with positives'),
                r(t.red, 'red works only with red numbers');
            }),
            (I.prototype._verify2 = function (t, e) {
              r(
                0 === (t.negative | e.negative),
                'red works only with positives',
              ),
                r(t.red && t.red === e.red, 'red works only with red numbers');
            }),
            (I.prototype.imod = function (t) {
              return this.prime
                ? this.prime.ireduce(t)._forceRed(this)
                : (l(t, t.umod(this.m)._forceRed(this)), t);
            }),
            (I.prototype.neg = function (t) {
              return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
            }),
            (I.prototype.add = function (t, e) {
              this._verify2(t, e);
              var n = t.add(e);
              return n.cmp(this.m) >= 0 && n.isub(this.m), n._forceRed(this);
            }),
            (I.prototype.iadd = function (t, e) {
              this._verify2(t, e);
              var n = t.iadd(e);
              return n.cmp(this.m) >= 0 && n.isub(this.m), n;
            }),
            (I.prototype.sub = function (t, e) {
              this._verify2(t, e);
              var n = t.sub(e);
              return n.cmpn(0) < 0 && n.iadd(this.m), n._forceRed(this);
            }),
            (I.prototype.isub = function (t, e) {
              this._verify2(t, e);
              var n = t.isub(e);
              return n.cmpn(0) < 0 && n.iadd(this.m), n;
            }),
            (I.prototype.shl = function (t, e) {
              return this._verify1(t), this.imod(t.ushln(e));
            }),
            (I.prototype.imul = function (t, e) {
              return this._verify2(t, e), this.imod(t.imul(e));
            }),
            (I.prototype.mul = function (t, e) {
              return this._verify2(t, e), this.imod(t.mul(e));
            }),
            (I.prototype.isqr = function (t) {
              return this.imul(t, t.clone());
            }),
            (I.prototype.sqr = function (t) {
              return this.mul(t, t);
            }),
            (I.prototype.sqrt = function (t) {
              if (t.isZero()) return t.clone();
              var e = this.m.andln(3);
              if ((r(e % 2 === 1), 3 === e)) {
                var n = this.m.add(new s(1)).iushrn(2);
                return this.pow(t, n);
              }
              var i = this.m.subn(1),
                o = 0;
              while (!i.isZero() && 0 === i.andln(1)) o++, i.iushrn(1);
              r(!i.isZero());
              var a = new s(1).toRed(this),
                u = a.redNeg(),
                c = this.m.subn(1).iushrn(1),
                l = this.m.bitLength();
              l = new s(2 * l * l).toRed(this);
              while (0 !== this.pow(l, c).cmp(u)) l.redIAdd(u);
              var h = this.pow(l, i),
                d = this.pow(t, i.addn(1).iushrn(1)),
                f = this.pow(t, i),
                p = o;
              while (0 !== f.cmp(a)) {
                for (var b = f, g = 0; 0 !== b.cmp(a); g++) b = b.redSqr();
                r(g < p);
                var m = this.pow(h, new s(1).iushln(p - g - 1));
                (d = d.redMul(m)), (h = m.redSqr()), (f = f.redMul(h)), (p = g);
              }
              return d;
            }),
            (I.prototype.invm = function (t) {
              var e = t._invmp(this.m);
              return 0 !== e.negative
                ? ((e.negative = 0), this.imod(e).redNeg())
                : this.imod(e);
            }),
            (I.prototype.pow = function (t, e) {
              if (e.isZero()) return new s(1).toRed(this);
              if (0 === e.cmpn(1)) return t.clone();
              var n = 4,
                r = new Array(1 << n);
              (r[0] = new s(1).toRed(this)), (r[1] = t);
              for (var i = 2; i < r.length; i++) r[i] = this.mul(r[i - 1], t);
              var o = r[0],
                a = 0,
                u = 0,
                c = e.bitLength() % 26;
              for (0 === c && (c = 26), i = e.length - 1; i >= 0; i--) {
                for (var l = e.words[i], h = c - 1; h >= 0; h--) {
                  var d = (l >> h) & 1;
                  o !== r[0] && (o = this.sqr(o)),
                    0 !== d || 0 !== a
                      ? ((a <<= 1),
                        (a |= d),
                        u++,
                        (u === n || (0 === i && 0 === h)) &&
                          ((o = this.mul(o, r[a])), (u = 0), (a = 0)))
                      : (u = 0);
                }
                c = 26;
              }
              return o;
            }),
            (I.prototype.convertTo = function (t) {
              var e = t.umod(this.m);
              return e === t ? e.clone() : e;
            }),
            (I.prototype.convertFrom = function (t) {
              var e = t.clone();
              return (e.red = null), e;
            }),
            (s.mont = function (t) {
              return new O(t);
            }),
            i(O, I),
            (O.prototype.convertTo = function (t) {
              return this.imod(t.ushln(this.shift));
            }),
            (O.prototype.convertFrom = function (t) {
              var e = this.imod(t.mul(this.rinv));
              return (e.red = null), e;
            }),
            (O.prototype.imul = function (t, e) {
              if (t.isZero() || e.isZero())
                return (t.words[0] = 0), (t.length = 1), t;
              var n = t.imul(e),
                r = n
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                i = n.isub(r).iushrn(this.shift),
                s = i;
              return (
                i.cmp(this.m) >= 0
                  ? (s = i.isub(this.m))
                  : i.cmpn(0) < 0 && (s = i.iadd(this.m)),
                s._forceRed(this)
              );
            }),
            (O.prototype.mul = function (t, e) {
              if (t.isZero() || e.isZero()) return new s(0)._forceRed(this);
              var n = t.mul(e),
                r = n
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                i = n.isub(r).iushrn(this.shift),
                o = i;
              return (
                i.cmp(this.m) >= 0
                  ? (o = i.isub(this.m))
                  : i.cmpn(0) < 0 && (o = i.iadd(this.m)),
                o._forceRed(this)
              );
            }),
            (O.prototype.invm = function (t) {
              var e = this.imod(t._invmp(this.m).mul(this.r2));
              return e._forceRed(this);
            });
        })(t, this);
      }).call(this, n('hOG+')(t));
    },
    psW0: function (t, e, n) {
      'use strict';
      n.d(e, 'b', function () {
        return a;
      }),
        n.d(e, 'a', function () {
          return l;
        });
      var r = n('mrSG'),
        i = n('67Y/'),
        s = n('0/uQ'),
        o = n('z4bA');
      function a(t, e, n) {
        return (
          void 0 === n && (n = Number.POSITIVE_INFINITY),
          'function' === typeof e
            ? function (r) {
                return r.pipe(
                  a(function (n, r) {
                    return Object(s['a'])(t(n, r)).pipe(
                      Object(i['a'])(function (t, i) {
                        return e(n, t, r, i);
                      }),
                    );
                  }, n),
                );
              }
            : ('number' === typeof e && (n = e),
              function (e) {
                return e.lift(new u(t, n));
              })
        );
      }
      var u = (function () {
          function t(t, e) {
            void 0 === e && (e = Number.POSITIVE_INFINITY),
              (this.project = t),
              (this.concurrent = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new c(t, this.project, this.concurrent));
            }),
            t
          );
        })(),
        c = (function (t) {
          function e(e, n, r) {
            void 0 === r && (r = Number.POSITIVE_INFINITY);
            var i = t.call(this, e) || this;
            return (
              (i.project = n),
              (i.concurrent = r),
              (i.hasCompleted = !1),
              (i.buffer = []),
              (i.active = 0),
              (i.index = 0),
              i
            );
          }
          return (
            r['__extends'](e, t),
            (e.prototype._next = function (t) {
              this.active < this.concurrent
                ? this._tryNext(t)
                : this.buffer.push(t);
            }),
            (e.prototype._tryNext = function (t) {
              var e,
                n = this.index++;
              try {
                e = this.project(t, n);
              } catch (r) {
                return void this.destination.error(r);
              }
              this.active++, this._innerSub(e);
            }),
            (e.prototype._innerSub = function (t) {
              var e = new o['a'](this),
                n = this.destination;
              n.add(e);
              var r = Object(o['c'])(t, e);
              r !== e && n.add(r);
            }),
            (e.prototype._complete = function () {
              (this.hasCompleted = !0),
                0 === this.active &&
                  0 === this.buffer.length &&
                  this.destination.complete(),
                this.unsubscribe();
            }),
            (e.prototype.notifyNext = function (t) {
              this.destination.next(t);
            }),
            (e.prototype.notifyComplete = function () {
              var t = this.buffer;
              this.active--,
                t.length > 0
                  ? this._next(t.shift())
                  : 0 === this.active &&
                    this.hasCompleted &&
                    this.destination.complete();
            }),
            e
          );
        })(o['b']),
        l = a;
    },
    pugT: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return a;
      });
      var r = n('isby'),
        i = n('McSo'),
        s = n('2Bdj'),
        o = n('awvh'),
        a = (function () {
          function t(t) {
            (this.closed = !1),
              (this._parentOrParents = null),
              (this._subscriptions = null),
              t && ((this._ctorUnsubscribe = !0), (this._unsubscribe = t));
          }
          return (
            (t.prototype.unsubscribe = function () {
              var e;
              if (!this.closed) {
                var n = this,
                  a = n._parentOrParents,
                  c = n._ctorUnsubscribe,
                  l = n._unsubscribe,
                  h = n._subscriptions;
                if (
                  ((this.closed = !0),
                  (this._parentOrParents = null),
                  (this._subscriptions = null),
                  a instanceof t)
                )
                  a.remove(this);
                else if (null !== a)
                  for (var d = 0; d < a.length; ++d) {
                    var f = a[d];
                    f.remove(this);
                  }
                if (Object(s['a'])(l)) {
                  c && (this._unsubscribe = void 0);
                  try {
                    l.call(this);
                  } catch (g) {
                    e = g instanceof o['a'] ? u(g.errors) : [g];
                  }
                }
                if (Object(r['a'])(h)) {
                  d = -1;
                  var p = h.length;
                  while (++d < p) {
                    var b = h[d];
                    if (Object(i['a'])(b))
                      try {
                        b.unsubscribe();
                      } catch (g) {
                        (e = e || []),
                          g instanceof o['a']
                            ? (e = e.concat(u(g.errors)))
                            : e.push(g);
                      }
                  }
                }
                if (e) throw new o['a'](e);
              }
            }),
            (t.prototype.add = function (e) {
              var n = e;
              if (!e) return t.EMPTY;
              switch (typeof e) {
                case 'function':
                  n = new t(e);
                case 'object':
                  if (
                    n === this ||
                    n.closed ||
                    'function' !== typeof n.unsubscribe
                  )
                    return n;
                  if (this.closed) return n.unsubscribe(), n;
                  if (!(n instanceof t)) {
                    var r = n;
                    (n = new t()), (n._subscriptions = [r]);
                  }
                  break;
                default:
                  throw new Error(
                    'unrecognized teardown ' + e + ' added to Subscription.',
                  );
              }
              var i = n._parentOrParents;
              if (null === i) n._parentOrParents = this;
              else if (i instanceof t) {
                if (i === this) return n;
                n._parentOrParents = [i, this];
              } else {
                if (-1 !== i.indexOf(this)) return n;
                i.push(this);
              }
              var s = this._subscriptions;
              return null === s ? (this._subscriptions = [n]) : s.push(n), n;
            }),
            (t.prototype.remove = function (t) {
              var e = this._subscriptions;
              if (e) {
                var n = e.indexOf(t);
                -1 !== n && e.splice(n, 1);
              }
            }),
            (t.EMPTY = (function (t) {
              return (t.closed = !0), t;
            })(new t())),
            t
          );
        })();
      function u(t) {
        return t.reduce(function (t, e) {
          return t.concat(e instanceof o['a'] ? e.errors : e);
        }, []);
      }
    },
    'q6/2': function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, 'Mutex', function () {
          return u;
        }),
        n.d(e, 'Semaphore', function () {
          return o;
        }),
        n.d(e, 'withTimeout', function () {
          return c;
        });
      function r(t, e, n, r) {
        function i(t) {
          return t instanceof n
            ? t
            : new n(function (e) {
                e(t);
              });
        }
        return new (n || (n = Promise))(function (n, s) {
          function o(t) {
            try {
              u(r.next(t));
            } catch (e) {
              s(e);
            }
          }
          function a(t) {
            try {
              u(r['throw'](t));
            } catch (e) {
              s(e);
            }
          }
          function u(t) {
            t.done ? n(t.value) : i(t.value).then(o, a);
          }
          u((r = r.apply(t, e || [])).next());
        });
      }
      function i(t, e) {
        var n,
          r,
          i,
          s,
          o = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (s = { next: a(0), throw: a(1), return: a(2) }),
          'function' === typeof Symbol &&
            (s[Symbol.iterator] = function () {
              return this;
            }),
          s
        );
        function a(t) {
          return function (e) {
            return u([t, e]);
          };
        }
        function u(a) {
          if (n) throw new TypeError('Generator is already executing.');
          while ((s && ((s = 0), a[0] && (o = 0)), o))
            try {
              if (
                ((n = 1),
                r &&
                  (i =
                    2 & a[0]
                      ? r['return']
                      : a[0]
                      ? r['throw'] || ((i = r['return']) && i.call(r), 0)
                      : r.next) &&
                  !(i = i.call(r, a[1])).done)
              )
                return i;
              switch (((r = 0), i && (a = [2 & a[0], i.value]), a[0])) {
                case 0:
                case 1:
                  i = a;
                  break;
                case 4:
                  return o.label++, { value: a[1], done: !1 };
                case 5:
                  o.label++, (r = a[1]), (a = [0]);
                  continue;
                case 7:
                  (a = o.ops.pop()), o.trys.pop();
                  continue;
                default:
                  if (
                    ((i = o.trys),
                    !(i = i.length > 0 && i[i.length - 1]) &&
                      (6 === a[0] || 2 === a[0]))
                  ) {
                    o = 0;
                    continue;
                  }
                  if (3 === a[0] && (!i || (a[1] > i[0] && a[1] < i[3]))) {
                    o.label = a[1];
                    break;
                  }
                  if (6 === a[0] && o.label < i[1]) {
                    (o.label = i[1]), (i = a);
                    break;
                  }
                  if (i && o.label < i[2]) {
                    (o.label = i[2]), o.ops.push(a);
                    break;
                  }
                  i[2] && o.ops.pop(), o.trys.pop();
                  continue;
              }
              a = e.call(t, o);
            } catch (u) {
              (a = [6, u]), (r = 0);
            } finally {
              n = i = 0;
            }
          if (5 & a[0]) throw a[1];
          return { value: a[0] ? a[1] : void 0, done: !0 };
        }
      }
      Object.create;
      Object.create;
      var s = (function () {
          function t(t) {
            if (((this._maxConcurrency = t), (this._queue = []), t <= 0))
              throw new Error(
                'semaphore must be initialized to a positive value',
              );
            this._value = t;
          }
          return (
            (t.prototype.acquire = function () {
              var t = this,
                e = this.isLocked(),
                n = new Promise(function (e) {
                  return t._queue.push(e);
                });
              return e || this._dispatch(), n;
            }),
            (t.prototype.runExclusive = function (t) {
              return r(this, void 0, void 0, function () {
                var e, n, r;
                return i(this, function (i) {
                  switch (i.label) {
                    case 0:
                      return [4, this.acquire()];
                    case 1:
                      (e = i.sent()), (n = e[0]), (r = e[1]), (i.label = 2);
                    case 2:
                      return i.trys.push([2, , 4, 5]), [4, t(n)];
                    case 3:
                      return [2, i.sent()];
                    case 4:
                      return r(), [7];
                    case 5:
                      return [2];
                  }
                });
              });
            }),
            (t.prototype.isLocked = function () {
              return this._value <= 0;
            }),
            (t.prototype.release = function () {
              if (this._maxConcurrency > 1)
                throw new Error(
                  'this method is unavailabel on semaphores with concurrency > 1; use the scoped release returned by acquire instead',
                );
              if (this._currentReleaser) {
                var t = this._currentReleaser;
                (this._currentReleaser = void 0), t();
              }
            }),
            (t.prototype._dispatch = function () {
              var t = this,
                e = this._queue.shift();
              if (e) {
                var n = !1;
                (this._currentReleaser = function () {
                  n || ((n = !0), t._value++, t._dispatch());
                }),
                  e([this._value--, this._currentReleaser]);
              }
            }),
            t
          );
        })(),
        o = s,
        a = (function () {
          function t() {
            this._semaphore = new o(1);
          }
          return (
            (t.prototype.acquire = function () {
              return r(this, void 0, void 0, function () {
                var t, e;
                return i(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this._semaphore.acquire()];
                    case 1:
                      return (t = n.sent()), (e = t[1]), [2, e];
                  }
                });
              });
            }),
            (t.prototype.runExclusive = function (t) {
              return this._semaphore.runExclusive(function () {
                return t();
              });
            }),
            (t.prototype.isLocked = function () {
              return this._semaphore.isLocked();
            }),
            (t.prototype.release = function () {
              this._semaphore.release();
            }),
            t
          );
        })(),
        u = a;
      function c(t, e, n) {
        var s = this;
        return (
          void 0 === n && (n = new Error('timeout')),
          {
            acquire: function () {
              return new Promise(function (o, a) {
                return r(s, void 0, void 0, function () {
                  var r, s, u;
                  return i(this, function (i) {
                    switch (i.label) {
                      case 0:
                        return (
                          (r = !1),
                          setTimeout(function () {
                            (r = !0), a(n);
                          }, e),
                          [4, t.acquire()]
                        );
                      case 1:
                        return (
                          (s = i.sent()),
                          r ? ((u = Array.isArray(s) ? s[1] : s), u()) : o(s),
                          [2]
                        );
                    }
                  });
                });
              });
            },
            runExclusive: function (t) {
              return r(this, void 0, void 0, function () {
                var e, n;
                return i(this, function (r) {
                  switch (r.label) {
                    case 0:
                      (e = function () {}), (r.label = 1);
                    case 1:
                      return r.trys.push([1, , 7, 8]), [4, this.acquire()];
                    case 2:
                      return (
                        (n = r.sent()),
                        Array.isArray(n) ? ((e = n[1]), [4, t(n[0])]) : [3, 4]
                      );
                    case 3:
                      return [2, r.sent()];
                    case 4:
                      return (e = n), [4, t()];
                    case 5:
                      return [2, r.sent()];
                    case 6:
                      return [3, 8];
                    case 7:
                      return e(), [7];
                    case 8:
                      return [2];
                  }
                });
              });
            },
            release: function () {
              t.release();
            },
            isLocked: function () {
              return t.isLocked();
            },
          }
        );
      }
    },
    qiJe: function (t, e, n) {
      'use strict';
      var r = n('hwdV').Buffer,
        i =
          r.isEncoding ||
          function (t) {
            switch (((t = '' + t), t && t.toLowerCase())) {
              case 'hex':
              case 'utf8':
              case 'utf-8':
              case 'ascii':
              case 'binary':
              case 'base64':
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
              case 'raw':
                return !0;
              default:
                return !1;
            }
          };
      function s(t) {
        if (!t) return 'utf8';
        var e;
        while (1)
          switch (t) {
            case 'utf8':
            case 'utf-8':
              return 'utf8';
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return 'utf16le';
            case 'latin1':
            case 'binary':
              return 'latin1';
            case 'base64':
            case 'ascii':
            case 'hex':
              return t;
            default:
              if (e) return;
              (t = ('' + t).toLowerCase()), (e = !0);
          }
      }
      function o(t) {
        var e = s(t);
        if ('string' !== typeof e && (r.isEncoding === i || !i(t)))
          throw new Error('Unknown encoding: ' + t);
        return e || t;
      }
      function a(t) {
        var e;
        switch (((this.encoding = o(t)), this.encoding)) {
          case 'utf16le':
            (this.text = p), (this.end = b), (e = 4);
            break;
          case 'utf8':
            (this.fillLast = h), (e = 4);
            break;
          case 'base64':
            (this.text = g), (this.end = m), (e = 3);
            break;
          default:
            return (this.write = y), void (this.end = v);
        }
        (this.lastNeed = 0),
          (this.lastTotal = 0),
          (this.lastChar = r.allocUnsafe(e));
      }
      function u(t) {
        return t <= 127
          ? 0
          : t >> 5 === 6
          ? 2
          : t >> 4 === 14
          ? 3
          : t >> 3 === 30
          ? 4
          : t >> 6 === 2
          ? -1
          : -2;
      }
      function c(t, e, n) {
        var r = e.length - 1;
        if (r < n) return 0;
        var i = u(e[r]);
        return i >= 0
          ? (i > 0 && (t.lastNeed = i - 1), i)
          : --r < n || -2 === i
          ? 0
          : ((i = u(e[r])),
            i >= 0
              ? (i > 0 && (t.lastNeed = i - 2), i)
              : --r < n || -2 === i
              ? 0
              : ((i = u(e[r])),
                i >= 0
                  ? (i > 0 && (2 === i ? (i = 0) : (t.lastNeed = i - 3)), i)
                  : 0));
      }
      function l(t, e, n) {
        if (128 !== (192 & e[0])) return (t.lastNeed = 0), '\ufffd';
        if (t.lastNeed > 1 && e.length > 1) {
          if (128 !== (192 & e[1])) return (t.lastNeed = 1), '\ufffd';
          if (t.lastNeed > 2 && e.length > 2 && 128 !== (192 & e[2]))
            return (t.lastNeed = 2), '\ufffd';
        }
      }
      function h(t) {
        var e = this.lastTotal - this.lastNeed,
          n = l(this, t, e);
        return void 0 !== n
          ? n
          : this.lastNeed <= t.length
          ? (t.copy(this.lastChar, e, 0, this.lastNeed),
            this.lastChar.toString(this.encoding, 0, this.lastTotal))
          : (t.copy(this.lastChar, e, 0, t.length),
            void (this.lastNeed -= t.length));
      }
      function d(t, e) {
        var n = c(this, t, e);
        if (!this.lastNeed) return t.toString('utf8', e);
        this.lastTotal = n;
        var r = t.length - (n - this.lastNeed);
        return t.copy(this.lastChar, 0, r), t.toString('utf8', e, r);
      }
      function f(t) {
        var e = t && t.length ? this.write(t) : '';
        return this.lastNeed ? e + '\ufffd' : e;
      }
      function p(t, e) {
        if ((t.length - e) % 2 === 0) {
          var n = t.toString('utf16le', e);
          if (n) {
            var r = n.charCodeAt(n.length - 1);
            if (r >= 55296 && r <= 56319)
              return (
                (this.lastNeed = 2),
                (this.lastTotal = 4),
                (this.lastChar[0] = t[t.length - 2]),
                (this.lastChar[1] = t[t.length - 1]),
                n.slice(0, -1)
              );
          }
          return n;
        }
        return (
          (this.lastNeed = 1),
          (this.lastTotal = 2),
          (this.lastChar[0] = t[t.length - 1]),
          t.toString('utf16le', e, t.length - 1)
        );
      }
      function b(t) {
        var e = t && t.length ? this.write(t) : '';
        if (this.lastNeed) {
          var n = this.lastTotal - this.lastNeed;
          return e + this.lastChar.toString('utf16le', 0, n);
        }
        return e;
      }
      function g(t, e) {
        var n = (t.length - e) % 3;
        return 0 === n
          ? t.toString('base64', e)
          : ((this.lastNeed = 3 - n),
            (this.lastTotal = 3),
            1 === n
              ? (this.lastChar[0] = t[t.length - 1])
              : ((this.lastChar[0] = t[t.length - 2]),
                (this.lastChar[1] = t[t.length - 1])),
            t.toString('base64', e, t.length - n));
      }
      function m(t) {
        var e = t && t.length ? this.write(t) : '';
        return this.lastNeed
          ? e + this.lastChar.toString('base64', 0, 3 - this.lastNeed)
          : e;
      }
      function y(t) {
        return t.toString(this.encoding);
      }
      function v(t) {
        return t && t.length ? this.write(t) : '';
      }
      (e.StringDecoder = a),
        (a.prototype.write = function (t) {
          if (0 === t.length) return '';
          var e, n;
          if (this.lastNeed) {
            if (((e = this.fillLast(t)), void 0 === e)) return '';
            (n = this.lastNeed), (this.lastNeed = 0);
          } else n = 0;
          return n < t.length
            ? e
              ? e + this.text(t, n)
              : this.text(t, n)
            : e || '';
        }),
        (a.prototype.end = f),
        (a.prototype.text = d),
        (a.prototype.fillLast = function (t) {
          if (this.lastNeed <= t.length)
            return (
              t.copy(
                this.lastChar,
                this.lastTotal - this.lastNeed,
                0,
                this.lastNeed,
              ),
              this.lastChar.toString(this.encoding, 0, this.lastTotal)
            );
          t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, t.length),
            (this.lastNeed -= t.length);
        });
    },
    qiyp: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.serializeError =
          e.isValidCode =
          e.getMessageFromCode =
          e.JSON_RPC_SERVER_ERROR_MESSAGE =
            void 0);
      const r = n('RlVT'),
        i = n('aAza'),
        s = r.errorCodes.rpc.internal,
        o = 'Unspecified error message. This is a bug, please report it.',
        a = { code: s, message: u(s) };
      function u(t, n = o) {
        if (Number.isInteger(t)) {
          const n = t.toString();
          if (f(r.errorValues, n)) return r.errorValues[n].message;
          if (h(t)) return e.JSON_RPC_SERVER_ERROR_MESSAGE;
        }
        return n;
      }
      function c(t) {
        if (!Number.isInteger(t)) return !1;
        const e = t.toString();
        return !!r.errorValues[e] || !!h(t);
      }
      function l(t, { fallbackError: e = a, shouldIncludeStack: n = !1 } = {}) {
        var r, s;
        if (!e || !Number.isInteger(e.code) || 'string' !== typeof e.message)
          throw new Error(
            'Must provide fallback error with integer number code and string message.',
          );
        if (t instanceof i.EthereumRpcError) return t.serialize();
        const o = {};
        if (
          t &&
          'object' === typeof t &&
          !Array.isArray(t) &&
          f(t, 'code') &&
          c(t.code)
        ) {
          const e = t;
          (o.code = e.code),
            e.message && 'string' === typeof e.message
              ? ((o.message = e.message), f(e, 'data') && (o.data = e.data))
              : ((o.message = u(o.code)), (o.data = { originalError: d(t) }));
        } else {
          o.code = e.code;
          const n = null === (r = t) || void 0 === r ? void 0 : r.message;
          (o.message = n && 'string' === typeof n ? n : e.message),
            (o.data = { originalError: d(t) });
        }
        const l = null === (s = t) || void 0 === s ? void 0 : s.stack;
        return n && t && l && 'string' === typeof l && (o.stack = l), o;
      }
      function h(t) {
        return t >= -32099 && t <= -32e3;
      }
      function d(t) {
        return t && 'object' === typeof t && !Array.isArray(t)
          ? Object.assign({}, t)
          : t;
      }
      function f(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }
      (e.JSON_RPC_SERVER_ERROR_MESSAGE = 'Unspecified server error.'),
        (e.getMessageFromCode = u),
        (e.isValidCode = c),
        (e.serializeError = l);
    },
    rAwC: function (t, e, n) {
      'use strict';
      (function (e) {
        function n(t, n) {
          var s = this,
            a = this._readableState && this._readableState.destroyed,
            u = this._writableState && this._writableState.destroyed;
          return a || u
            ? (n
                ? n(t)
                : t &&
                  (this._writableState
                    ? this._writableState.errorEmitted ||
                      ((this._writableState.errorEmitted = !0),
                      e.nextTick(o, this, t))
                    : e.nextTick(o, this, t)),
              this)
            : (this._readableState && (this._readableState.destroyed = !0),
              this._writableState && (this._writableState.destroyed = !0),
              this._destroy(t || null, function (t) {
                !n && t
                  ? s._writableState
                    ? s._writableState.errorEmitted
                      ? e.nextTick(i, s)
                      : ((s._writableState.errorEmitted = !0),
                        e.nextTick(r, s, t))
                    : e.nextTick(r, s, t)
                  : n
                  ? (e.nextTick(i, s), n(t))
                  : e.nextTick(i, s);
              }),
              this);
        }
        function r(t, e) {
          o(t, e), i(t);
        }
        function i(t) {
          (t._writableState && !t._writableState.emitClose) ||
            (t._readableState && !t._readableState.emitClose) ||
            t.emit('close');
        }
        function s() {
          this._readableState &&
            ((this._readableState.destroyed = !1),
            (this._readableState.reading = !1),
            (this._readableState.ended = !1),
            (this._readableState.endEmitted = !1)),
            this._writableState &&
              ((this._writableState.destroyed = !1),
              (this._writableState.ended = !1),
              (this._writableState.ending = !1),
              (this._writableState.finalCalled = !1),
              (this._writableState.prefinished = !1),
              (this._writableState.finished = !1),
              (this._writableState.errorEmitted = !1));
        }
        function o(t, e) {
          t.emit('error', e);
        }
        function a(t, e) {
          var n = t._readableState,
            r = t._writableState;
          (n && n.autoDestroy) || (r && r.autoDestroy)
            ? t.destroy(e)
            : t.emit('error', e);
        }
        t.exports = { destroy: n, undestroy: s, errorOrDestroy: a };
      }).call(this, n('Q2Ig'));
    },
    rW7p: function (t, e, n) {
      const r = n('zvTS'),
        i = n('0QlC'),
        { incrementHexInt: s } = n('UJ2e');
      class o extends r {
        constructor({ provider: t, params: e }) {
          super(), (this.type = 'block'), (this.provider = t);
        }
        async update({ oldBlock: t, newBlock: e }) {
          const n = e,
            r = s(t),
            o = await i({ provider: this.provider, fromBlock: r, toBlock: n }),
            a = o.map((t) => t.hash);
          this.addResults(a);
        }
      }
      t.exports = o;
    },
    sG9t: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.ArrowLeftIcon = void 0);
      const r = n('2mXy');
      function i(t) {
        return (0, r.h)(
          'svg',
          Object.assign(
            {
              width: '16',
              height: '16',
              viewBox: '0 0 16 16',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            t,
          ),
          (0, r.h)('path', {
            d: 'M8.60675 0.155884L7.37816 1.28209L12.7723 7.16662H0V8.83328H12.6548L6.82149 14.6666L8 15.8451L15.8201 8.02501L8.60675 0.155884Z',
          }),
        );
      }
      e.ArrowLeftIcon = i;
    },
    siIJ: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return r;
      });
      var r = (function () {
        function t(e, n) {
          void 0 === n && (n = t.now),
            (this.SchedulerAction = e),
            (this.now = n);
        }
        return (
          (t.prototype.schedule = function (t, e, n) {
            return (
              void 0 === e && (e = 0),
              new this.SchedulerAction(this, t).schedule(n, e)
            );
          }),
          (t.now = function () {
            return Date.now();
          }),
          t
        );
      })();
    },
    svcd: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return o;
      });
      var r = n('mrSG'),
        i = n('K9Ia'),
        s = n('pugT'),
        o = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.value = null), (e.hasNext = !1), (e.hasCompleted = !1), e;
          }
          return (
            r['__extends'](e, t),
            (e.prototype._subscribe = function (e) {
              return this.hasError
                ? (e.error(this.thrownError), s['a'].EMPTY)
                : this.hasCompleted && this.hasNext
                ? (e.next(this.value), e.complete(), s['a'].EMPTY)
                : t.prototype._subscribe.call(this, e);
            }),
            (e.prototype.next = function (t) {
              this.hasCompleted || ((this.value = t), (this.hasNext = !0));
            }),
            (e.prototype.error = function (e) {
              this.hasCompleted || t.prototype.error.call(this, e);
            }),
            (e.prototype.complete = function () {
              (this.hasCompleted = !0),
                this.hasNext && t.prototype.next.call(this, this.value),
                t.prototype.complete.call(this);
            }),
            e
          );
        })(i['a']);
    },
    t7TP: function (t, e, n) {
      const r = n('Fj00').default,
        { createAsyncMiddleware: i, createScaffoldMiddleware: s } = n('llSS'),
        o = n('2nhq'),
        { unsafeRandomBytes: a, incrementHexInt: u } = n('UJ2e'),
        c = n('0QlC');
      function l({ blockTracker: t, provider: e }) {
        const n = {},
          l = o({ blockTracker: t, provider: e });
        let d = !1;
        const f = new r(),
          p = s({ eth_subscribe: i(b), eth_unsubscribe: i(g) });
        return (p.destroy = y), { events: f, middleware: p };
        async function b(r, i) {
          if (d)
            throw new Error(
              'SubscriptionManager - attempting to use after destroying',
            );
          const s = r.params[0],
            o = a(16);
          let f;
          switch (s) {
            case 'newHeads':
              f = p({ subId: o });
              break;
            case 'logs':
              const t = r.params[1],
                e = await l.newLogFilter(t);
              f = b({ subId: o, filter: e });
              break;
            default:
              throw new Error(
                `SubscriptionManager - unsupported subscription type "${s}"`,
              );
          }
          return (n[o] = f), void (i.result = o);
          function p({ subId: n }) {
            const r = {
              type: s,
              destroy: async () => {
                t.removeListener('sync', r.update);
              },
              update: async ({ oldBlock: t, newBlock: r }) => {
                const i = r,
                  s = u(t),
                  o = await c({ provider: e, fromBlock: s, toBlock: i }),
                  a = o.map(h).filter((t) => null !== t);
                a.forEach((t) => {
                  m(n, t);
                });
              },
            };
            return t.on('sync', r.update), r;
          }
          function b({ subId: t, filter: e }) {
            e.on('update', (e) => m(t, e));
            const n = {
              type: s,
              destroy: async () => await l.uninstallFilter(e.idHex),
            };
            return n;
          }
        }
        async function g(t, e) {
          if (d)
            throw new Error(
              'SubscriptionManager - attempting to use after destroying',
            );
          const r = t.params[0],
            i = n[r];
          i
            ? (delete n[r], await i.destroy(), (e.result = !0))
            : (e.result = !1);
        }
        function m(t, e) {
          f.emit('notification', {
            jsonrpc: '2.0',
            method: 'eth_subscription',
            params: { subscription: t, result: e },
          });
        }
        function y() {
          f.removeAllListeners();
          for (const t in n) n[t].destroy(), delete n[t];
          d = !0;
        }
      }
      function h(t) {
        return null === t || void 0 === t
          ? null
          : {
              hash: t.hash,
              parentHash: t.parentHash,
              sha3Uncles: t.sha3Uncles,
              miner: t.miner,
              stateRoot: t.stateRoot,
              transactionsRoot: t.transactionsRoot,
              receiptsRoot: t.receiptsRoot,
              logsBloom: t.logsBloom,
              difficulty: t.difficulty,
              number: t.number,
              gasLimit: t.gasLimit,
              gasUsed: t.gasUsed,
              nonce: t.nonce,
              mixHash: t.mixHash,
              timestamp: t.timestamp,
              extraData: t.extraData,
            };
      }
      t.exports = l;
    },
    t9FE: function (t, e, n) {
      (function (e) {
        function n(t, e) {
          if (r('noDeprecation')) return t;
          var n = !1;
          function i() {
            if (!n) {
              if (r('throwDeprecation')) throw new Error(e);
              r('traceDeprecation') ? console.trace(e) : console.warn(e),
                (n = !0);
            }
            return t.apply(this, arguments);
          }
          return i;
        }
        function r(t) {
          try {
            if (!e.localStorage) return !1;
          } catch (r) {
            return !1;
          }
          var n = e.localStorage[t];
          return null != n && 'true' === String(n).toLowerCase();
        }
        t.exports = n;
      }).call(this, n('IyRk'));
    },
    tnIz: function (t, e, n) {
      var r = n('hwdV').Buffer;
      function i(t, e) {
        (this._block = r.alloc(t)),
          (this._finalSize = e),
          (this._blockSize = t),
          (this._len = 0);
      }
      (i.prototype.update = function (t, e) {
        'string' === typeof t && ((e = e || 'utf8'), (t = r.from(t, e)));
        for (
          var n = this._block,
            i = this._blockSize,
            s = t.length,
            o = this._len,
            a = 0;
          a < s;

        ) {
          for (var u = o % i, c = Math.min(s - a, i - u), l = 0; l < c; l++)
            n[u + l] = t[a + l];
          (o += c), (a += c), o % i === 0 && this._update(n);
        }
        return (this._len += s), this;
      }),
        (i.prototype.digest = function (t) {
          var e = this._len % this._blockSize;
          (this._block[e] = 128),
            this._block.fill(0, e + 1),
            e >= this._finalSize &&
              (this._update(this._block), this._block.fill(0));
          var n = 8 * this._len;
          if (n <= 4294967295)
            this._block.writeUInt32BE(n, this._blockSize - 4);
          else {
            var r = (4294967295 & n) >>> 0,
              i = (n - r) / 4294967296;
            this._block.writeUInt32BE(i, this._blockSize - 8),
              this._block.writeUInt32BE(r, this._blockSize - 4);
          }
          this._update(this._block);
          var s = this._hash();
          return t ? s.toString(t) : s;
        }),
        (i.prototype._update = function () {
          throw new Error('_update must be implemented by subclass');
        }),
        (t.exports = i);
    },
    txxU: function (t, e, n) {
      'use strict';
      function r(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function i(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? r(Object(n), !0).forEach(function (e) {
                s(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : r(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e),
                );
              });
        }
        return t;
      }
      function s(t, e, n) {
        return (
          (e = c(e)),
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function o(t, e) {
        if (!(t instanceof e))
          throw new TypeError('Cannot call a class as a function');
      }
      function a(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, c(r.key), r);
        }
      }
      function u(t, e, n) {
        return (
          e && a(t.prototype, e),
          n && a(t, n),
          Object.defineProperty(t, 'prototype', { writable: !1 }),
          t
        );
      }
      function c(t) {
        var e = l(t, 'string');
        return 'symbol' === typeof e ? e : String(e);
      }
      function l(t, e) {
        if ('object' !== typeof t || null === t) return t;
        var n = t[Symbol.toPrimitive];
        if (void 0 !== n) {
          var r = n.call(t, e || 'default');
          if ('object' !== typeof r) return r;
          throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === e ? String : Number)(t);
      }
      var h = n('HDXh'),
        d = h.Buffer,
        f = n(7),
        p = f.inspect,
        b = (p && p.custom) || 'inspect';
      function g(t, e, n) {
        d.prototype.copy.call(t, e, n);
      }
      t.exports = (function () {
        function t() {
          o(this, t), (this.head = null), (this.tail = null), (this.length = 0);
        }
        return (
          u(t, [
            {
              key: 'push',
              value: function (t) {
                var e = { data: t, next: null };
                this.length > 0 ? (this.tail.next = e) : (this.head = e),
                  (this.tail = e),
                  ++this.length;
              },
            },
            {
              key: 'unshift',
              value: function (t) {
                var e = { data: t, next: this.head };
                0 === this.length && (this.tail = e),
                  (this.head = e),
                  ++this.length;
              },
            },
            {
              key: 'shift',
              value: function () {
                if (0 !== this.length) {
                  var t = this.head.data;
                  return (
                    1 === this.length
                      ? (this.head = this.tail = null)
                      : (this.head = this.head.next),
                    --this.length,
                    t
                  );
                }
              },
            },
            {
              key: 'clear',
              value: function () {
                (this.head = this.tail = null), (this.length = 0);
              },
            },
            {
              key: 'join',
              value: function (t) {
                if (0 === this.length) return '';
                var e = this.head,
                  n = '' + e.data;
                while ((e = e.next)) n += t + e.data;
                return n;
              },
            },
            {
              key: 'concat',
              value: function (t) {
                if (0 === this.length) return d.alloc(0);
                var e = d.allocUnsafe(t >>> 0),
                  n = this.head,
                  r = 0;
                while (n) g(n.data, e, r), (r += n.data.length), (n = n.next);
                return e;
              },
            },
            {
              key: 'consume',
              value: function (t, e) {
                var n;
                return (
                  t < this.head.data.length
                    ? ((n = this.head.data.slice(0, t)),
                      (this.head.data = this.head.data.slice(t)))
                    : (n =
                        t === this.head.data.length
                          ? this.shift()
                          : e
                          ? this._getString(t)
                          : this._getBuffer(t)),
                  n
                );
              },
            },
            {
              key: 'first',
              value: function () {
                return this.head.data;
              },
            },
            {
              key: '_getString',
              value: function (t) {
                var e = this.head,
                  n = 1,
                  r = e.data;
                t -= r.length;
                while ((e = e.next)) {
                  var i = e.data,
                    s = t > i.length ? i.length : t;
                  if (
                    (s === i.length ? (r += i) : (r += i.slice(0, t)),
                    (t -= s),
                    0 === t)
                  ) {
                    s === i.length
                      ? (++n,
                        e.next
                          ? (this.head = e.next)
                          : (this.head = this.tail = null))
                      : ((this.head = e), (e.data = i.slice(s)));
                    break;
                  }
                  ++n;
                }
                return (this.length -= n), r;
              },
            },
            {
              key: '_getBuffer',
              value: function (t) {
                var e = d.allocUnsafe(t),
                  n = this.head,
                  r = 1;
                n.data.copy(e), (t -= n.data.length);
                while ((n = n.next)) {
                  var i = n.data,
                    s = t > i.length ? i.length : t;
                  if ((i.copy(e, e.length - t, 0, s), (t -= s), 0 === t)) {
                    s === i.length
                      ? (++r,
                        n.next
                          ? (this.head = n.next)
                          : (this.head = this.tail = null))
                      : ((this.head = n), (n.data = i.slice(s)));
                    break;
                  }
                  ++r;
                }
                return (this.length -= r), e;
              },
            },
            {
              key: b,
              value: function (t, e) {
                return p(
                  this,
                  i(i({}, e), {}, { depth: 0, customInspect: !1 }),
                );
              },
            },
          ]),
          t
        );
      })();
    },
    uDfV: function (t, e, n) {
      var r = n('P7XM'),
        i = n('T9HO'),
        s = n('tnIz'),
        o = n('hwdV').Buffer,
        a = new Array(160);
      function u() {
        this.init(), (this._w = a), s.call(this, 128, 112);
      }
      r(u, i),
        (u.prototype.init = function () {
          return (
            (this._ah = 3418070365),
            (this._bh = 1654270250),
            (this._ch = 2438529370),
            (this._dh = 355462360),
            (this._eh = 1731405415),
            (this._fh = 2394180231),
            (this._gh = 3675008525),
            (this._hh = 1203062813),
            (this._al = 3238371032),
            (this._bl = 914150663),
            (this._cl = 812702999),
            (this._dl = 4144912697),
            (this._el = 4290775857),
            (this._fl = 1750603025),
            (this._gl = 1694076839),
            (this._hl = 3204075428),
            this
          );
        }),
        (u.prototype._hash = function () {
          var t = o.allocUnsafe(48);
          function e(e, n, r) {
            t.writeInt32BE(e, r), t.writeInt32BE(n, r + 4);
          }
          return (
            e(this._ah, this._al, 0),
            e(this._bh, this._bl, 8),
            e(this._ch, this._cl, 16),
            e(this._dh, this._dl, 24),
            e(this._eh, this._el, 32),
            e(this._fh, this._fl, 40),
            t
          );
        }),
        (t.exports = u);
    },
    uMaO: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return s;
      });
      var r = n('mrSG'),
        i = n('pugT'),
        s = (function (t) {
          function e(e, n) {
            var r = t.call(this) || this;
            return (r.subject = e), (r.subscriber = n), (r.closed = !1), r;
          }
          return (
            r['__extends'](e, t),
            (e.prototype.unsubscribe = function () {
              if (!this.closed) {
                this.closed = !0;
                var t = this.subject,
                  e = t.observers;
                if (
                  ((this.subject = null),
                  e && 0 !== e.length && !t.isStopped && !t.closed)
                ) {
                  var n = e.indexOf(this.subscriber);
                  -1 !== n && e.splice(n, 1);
                }
              }
            }),
            e
          );
        })(i['a']);
    },
    uNvZ: function (t, e, n) {
      'use strict';
      t.exports = i;
      var r = n('U+KF');
      function i(t) {
        if (!(this instanceof i)) return new i(t);
        r.call(this, t);
      }
      n('P7XM')(i, r),
        (i.prototype._transform = function (t, e, n) {
          n(null, t);
        });
    },
    uR6Z: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default =
          '.-cbwsdk-css-reset .-cbwsdk-try-extension{display:flex;margin-top:12px;height:202px;width:700px;border-radius:12px;padding:30px}.-cbwsdk-css-reset .-cbwsdk-try-extension.light{background:#fff}.-cbwsdk-css-reset .-cbwsdk-try-extension.dark{background:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-try-extension-column-half{flex:50%}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading{font-style:normal;font-weight:500;font-size:25px;line-height:32px;margin:0;max-width:204px}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta{appearance:none;border:none;background:none;color:#0052ff;cursor:pointer;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta.light{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta.dark{color:#588af5}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta-wrapper{display:flex;align-items:center;margin-top:12px}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta-icon{display:block;margin-left:4px;height:14px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list{display:flex;flex-direction:column;justify-content:center;align-items:center;margin:0;padding:0;list-style:none;height:100%}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item{display:flex;align-items:center;flex-flow:nowrap;margin-top:24px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item:first-of-type{margin-top:0}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon-wrapper{display:block}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon{display:flex;height:32px;width:32px;border-radius:50%}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon svg{margin:auto;display:block}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon.light{background:#eef0f3}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon.dark{background:#1e2025}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy{display:block;font-weight:400;font-size:14px;line-height:20px;padding-left:12px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy.light{color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy.dark{color:#8a919e}');
    },
    vhlx: function (t, e, n) {
      'use strict';
      function r(t) {
        return (e, n, r, i) => {
          const s = t[e.method];
          return void 0 === s
            ? r()
            : 'function' === typeof s
            ? s(e, n, r, i)
            : ((n.result = s), i());
        };
      }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.createScaffoldMiddleware = void 0),
        (e.createScaffoldMiddleware = r);
    },
    wWR5: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.ScopedLocalStorage = void 0);
      class r {
        constructor(t) {
          this.scope = t;
        }
        setItem(t, e) {
          localStorage.setItem(this.scopedKey(t), e);
        }
        getItem(t) {
          return localStorage.getItem(this.scopedKey(t));
        }
        removeItem(t) {
          localStorage.removeItem(this.scopedKey(t));
        }
        clear() {
          const t = this.scopedKey(''),
            e = [];
          for (let n = 0; n < localStorage.length; n++) {
            const r = localStorage.key(n);
            'string' === typeof r && r.startsWith(t) && e.push(r);
          }
          e.forEach((t) => localStorage.removeItem(t));
        }
        scopedKey(t) {
          return `${this.scope}:${t}`;
        }
      }
      e.ScopedLocalStorage = r;
    },
    xTla: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return r;
      });
      var r = (function () {
        return (
          ('function' === typeof Symbol && Symbol.observable) || '@@observable'
        );
      })();
    },
    y2lW: function (t, e, n) {
      const r = n('7tlc'),
        i = n('+qE3');
      var s = 'object' === typeof Reflect ? Reflect : null,
        o =
          s && 'function' === typeof s.apply
            ? s.apply
            : function (t, e, n) {
                return Function.prototype.apply.call(t, e, n);
              };
      function a() {
        i.call(this);
      }
      function u(t, e, n) {
        try {
          o(t, e, n);
        } catch (r) {
          setTimeout(() => {
            throw r;
          });
        }
      }
      function c(t, e) {
        for (var n = new Array(e), r = 0; r < e; ++r) n[r] = t[r];
        return n;
      }
      (t.exports = a),
        r.inherits(a, i),
        (a.prototype.emit = function (t) {
          for (var e = [], n = 1; n < arguments.length; n++)
            e.push(arguments[n]);
          var r = 'error' === t,
            i = this._events;
          if (void 0 !== i) r = r && void 0 === i.error;
          else if (!r) return !1;
          if (r) {
            var s;
            if ((e.length > 0 && (s = e[0]), s instanceof Error)) throw s;
            var o = new Error(
              'Unhandled error.' + (s ? ' (' + s.message + ')' : ''),
            );
            throw ((o.context = s), o);
          }
          var a = i[t];
          if (void 0 === a) return !1;
          if ('function' === typeof a) u(a, this, e);
          else {
            var l = a.length,
              h = c(a, l);
            for (n = 0; n < l; ++n) u(h[n], this, e);
          }
          return !0;
        });
    },
    y3By: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return i;
      }),
        n.d(e, 'b', function () {
          return s;
        });
      var r = n('mChF');
      function i() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return s(t);
      }
      function s(t) {
        return 0 === t.length
          ? r['a']
          : 1 === t.length
          ? t[0]
          : function (e) {
              return t.reduce(function (t, e) {
                return e(t);
              }, e);
            };
      }
    },
    yGWI: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return s;
      });
      var r = n('mrSG'),
        i = n('FFOo');
      function s() {
        return function (t) {
          return t.lift(new o(t));
        };
      }
      var o = (function () {
          function t(t) {
            this.connectable = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              var n = this.connectable;
              n._refCount++;
              var r = new a(t, n),
                i = e.subscribe(r);
              return r.closed || (r.connection = n.connect()), i;
            }),
            t
          );
        })(),
        a = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return (r.connectable = n), r;
          }
          return (
            r['__extends'](e, t),
            (e.prototype._unsubscribe = function () {
              var t = this.connectable;
              if (t) {
                this.connectable = null;
                var e = t._refCount;
                if (e <= 0) this.connection = null;
                else if (((t._refCount = e - 1), e > 1)) this.connection = null;
                else {
                  var n = this.connection,
                    r = t._connection;
                  (this.connection = null),
                    !r || (n && r !== n) || r.unsubscribe();
                }
              } else this.connection = null;
            }),
            e
          );
        })(i['a']);
    },
    yIX8: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.EthereumProviderError = e.EthereumRpcError = void 0);
      const r = n('N1pS');
      class i extends Error {
        constructor(t, e, n) {
          if (!Number.isInteger(t))
            throw new Error('"code" must be an integer.');
          if (!e || 'string' !== typeof e)
            throw new Error('"message" must be a nonempty string.');
          super(e), (this.code = t), void 0 !== n && (this.data = n);
        }
        serialize() {
          const t = { code: this.code, message: this.message };
          return (
            void 0 !== this.data && (t.data = this.data),
            this.stack && (t.stack = this.stack),
            t
          );
        }
        toString() {
          return r.default(this.serialize(), a, 2);
        }
      }
      e.EthereumRpcError = i;
      class s extends i {
        constructor(t, e, n) {
          if (!o(t))
            throw new Error(
              '"code" must be an integer such that: 1000 <= code <= 4999',
            );
          super(t, e, n);
        }
      }
      function o(t) {
        return Number.isInteger(t) && t >= 1e3 && t <= 4999;
      }
      function a(t, e) {
        if ('[Circular]' !== e) return e;
      }
      e.EthereumProviderError = s;
    },
    yYxu: function (t, e, n) {
      const r = n('4HPa'),
        i = n('kqlA');
      t.exports = function (t) {
        const e = r(t),
          n = i(t);
        return function (t, r) {
          const i = 'string' === typeof t ? t.toLowerCase() : t;
          switch (i) {
            case 'keccak224':
              return new e(1152, 448, null, 224, r);
            case 'keccak256':
              return new e(1088, 512, null, 256, r);
            case 'keccak384':
              return new e(832, 768, null, 384, r);
            case 'keccak512':
              return new e(576, 1024, null, 512, r);
            case 'sha3-224':
              return new e(1152, 448, 6, 224, r);
            case 'sha3-256':
              return new e(1088, 512, 6, 256, r);
            case 'sha3-384':
              return new e(832, 768, 6, 384, r);
            case 'sha3-512':
              return new e(576, 1024, 6, 512, r);
            case 'shake128':
              return new n(1344, 256, 31, r);
            case 'shake256':
              return new n(1088, 512, 31, r);
            default:
              throw new Error('Invald algorithm: ' + t);
          }
        };
      };
    },
    yz7a: function (t, e, n) {
      'use strict';
      var r =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.injectCssReset = void 0);
      const i = r(n('FVkC'));
      function s() {
        const t = document.createElement('style');
        (t.type = 'text/css'),
          t.appendChild(document.createTextNode(i.default)),
          document.documentElement.appendChild(t);
      }
      e.injectCssReset = s;
    },
    z2lR: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.SubscriptionManager = void 0);
      const r = n('V5x4'),
        i = n('t7TP'),
        s = () => {};
      class o {
        constructor(t) {
          const e = new r({
              provider: t,
              pollingInterval: 15e3,
              setSkipCacheFlag: !0,
            }),
            { events: n, middleware: s } = i({ blockTracker: e, provider: t });
          (this.events = n), (this.subscriptionMiddleware = s);
        }
        async handleRequest(t) {
          const e = {};
          return await this.subscriptionMiddleware(t, e, s, s), e;
        }
        destroy() {
          this.subscriptionMiddleware.destroy();
        }
      }
      e.SubscriptionManager = o;
    },
    z4bA: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return a;
      }),
        n.d(e, 'b', function () {
          return u;
        }),
        n.d(e, 'c', function () {
          return c;
        });
      var r = n('mrSG'),
        i = n('FFOo'),
        s = n('6blF'),
        o = n('Fxb1'),
        a = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return (n.parent = e), n;
          }
          return (
            r['__extends'](e, t),
            (e.prototype._next = function (t) {
              this.parent.notifyNext(t);
            }),
            (e.prototype._error = function (t) {
              this.parent.notifyError(t), this.unsubscribe();
            }),
            (e.prototype._complete = function () {
              this.parent.notifyComplete(), this.unsubscribe();
            }),
            e
          );
        })(i['a']),
        u =
          (i['a'],
          (function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this;
            }
            return (
              r['__extends'](e, t),
              (e.prototype.notifyNext = function (t) {
                this.destination.next(t);
              }),
              (e.prototype.notifyError = function (t) {
                this.destination.error(t);
              }),
              (e.prototype.notifyComplete = function () {
                this.destination.complete();
              }),
              e
            );
          })(i['a']));
      i['a'];
      function c(t, e) {
        if (!e.closed) {
          if (t instanceof s['a']) return t.subscribe(e);
          var n;
          try {
            n = Object(o['a'])(t)(e);
          } catch (r) {
            e.error(r);
          }
          return n;
        }
      }
    },
    zHmn: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.ethErrors = void 0);
      const r = n('yIX8'),
        i = n('5eDx'),
        s = n('Ev0B');
      function o(t, e) {
        const [n, s] = u(e);
        return new r.EthereumRpcError(t, n || i.getMessageFromCode(t), s);
      }
      function a(t, e) {
        const [n, s] = u(e);
        return new r.EthereumProviderError(t, n || i.getMessageFromCode(t), s);
      }
      function u(t) {
        if (t) {
          if ('string' === typeof t) return [t];
          if ('object' === typeof t && !Array.isArray(t)) {
            const { message: e, data: n } = t;
            if (e && 'string' !== typeof e)
              throw new Error('Must specify string message.');
            return [e || void 0, n];
          }
        }
        return [];
      }
      e.ethErrors = {
        rpc: {
          parse: (t) => o(s.errorCodes.rpc.parse, t),
          invalidRequest: (t) => o(s.errorCodes.rpc.invalidRequest, t),
          invalidParams: (t) => o(s.errorCodes.rpc.invalidParams, t),
          methodNotFound: (t) => o(s.errorCodes.rpc.methodNotFound, t),
          internal: (t) => o(s.errorCodes.rpc.internal, t),
          server: (t) => {
            if (!t || 'object' !== typeof t || Array.isArray(t))
              throw new Error(
                'Ethereum RPC Server errors must provide single object argument.',
              );
            const { code: e } = t;
            if (!Number.isInteger(e) || e > -32005 || e < -32099)
              throw new Error(
                '"code" must be an integer such that: -32099 <= code <= -32005',
              );
            return o(e, t);
          },
          invalidInput: (t) => o(s.errorCodes.rpc.invalidInput, t),
          resourceNotFound: (t) => o(s.errorCodes.rpc.resourceNotFound, t),
          resourceUnavailable: (t) =>
            o(s.errorCodes.rpc.resourceUnavailable, t),
          transactionRejected: (t) =>
            o(s.errorCodes.rpc.transactionRejected, t),
          methodNotSupported: (t) => o(s.errorCodes.rpc.methodNotSupported, t),
          limitExceeded: (t) => o(s.errorCodes.rpc.limitExceeded, t),
        },
        provider: {
          userRejectedRequest: (t) =>
            a(s.errorCodes.provider.userRejectedRequest, t),
          unauthorized: (t) => a(s.errorCodes.provider.unauthorized, t),
          unsupportedMethod: (t) =>
            a(s.errorCodes.provider.unsupportedMethod, t),
          disconnected: (t) => a(s.errorCodes.provider.disconnected, t),
          chainDisconnected: (t) =>
            a(s.errorCodes.provider.chainDisconnected, t),
          custom: (t) => {
            if (!t || 'object' !== typeof t || Array.isArray(t))
              throw new Error(
                'Ethereum Provider custom errors must provide single object argument.',
              );
            const { code: e, message: n, data: i } = t;
            if (!n || 'string' !== typeof n)
              throw new Error('"message" must be a nonempty string');
            return new r.EthereumProviderError(e, n, i);
          },
        },
      };
    },
    zjHv: function (t, e, n) {
      'use strict';
      var r =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.TryExtensionContent = void 0);
      const i = r(n('iuhU')),
        s = n('2mXy'),
        o = n('MOxe'),
        a = n('sG9t'),
        u = n('Dy/5'),
        c = n('pOKl'),
        l = r(n('uR6Z'));
      function h({ theme: t }) {
        const [e, n] = (0, o.useState)(!1),
          r = (0, o.useCallback)(() => {
            window.open(
              'https://api.wallet.coinbase.com/rpc/v2/desktop/chrome',
              '_blank',
            );
          }, []),
          h = (0, o.useCallback)(() => {
            e ? window.location.reload() : (r(), n(!0));
          }, [r, e]);
        return (0, s.h)(
          'div',
          { class: (0, i.default)('-cbwsdk-try-extension', t) },
          (0, s.h)('style', null, l.default),
          (0, s.h)(
            'div',
            { class: '-cbwsdk-try-extension-column-half' },
            (0, s.h)(
              'h3',
              { class: (0, i.default)('-cbwsdk-try-extension-heading', t) },
              'Or try the Coinbase Wallet browser extension',
            ),
            (0, s.h)(
              'div',
              { class: '-cbwsdk-try-extension-cta-wrapper' },
              (0, s.h)(
                'button',
                {
                  class: (0, i.default)('-cbwsdk-try-extension-cta', t),
                  onClick: h,
                },
                e ? 'Refresh' : 'Install',
              ),
              (0, s.h)(
                'div',
                null,
                !e &&
                  (0, s.h)(a.ArrowLeftIcon, {
                    class: '-cbwsdk-try-extension-cta-icon',
                    fill: 'light' === t ? '#0052FF' : '#588AF5',
                  }),
              ),
            ),
          ),
          (0, s.h)(
            'div',
            { class: '-cbwsdk-try-extension-column-half' },
            (0, s.h)(
              'ul',
              { class: '-cbwsdk-try-extension-list' },
              (0, s.h)(
                'li',
                { class: '-cbwsdk-try-extension-list-item' },
                (0, s.h)(
                  'div',
                  { class: '-cbwsdk-try-extension-list-item-icon-wrapper' },
                  (0, s.h)(
                    'span',
                    {
                      class: (0, i.default)(
                        '-cbwsdk-try-extension-list-item-icon',
                        t,
                      ),
                    },
                    (0, s.h)(u.LaptopIcon, {
                      fill: 'light' === t ? '#0A0B0D' : '#FFFFFF',
                    }),
                  ),
                ),
                (0, s.h)(
                  'div',
                  {
                    class: (0, i.default)(
                      '-cbwsdk-try-extension-list-item-copy',
                      t,
                    ),
                  },
                  'Connect with dapps with just one click on your desktop browser',
                ),
              ),
              (0, s.h)(
                'li',
                { class: '-cbwsdk-try-extension-list-item' },
                (0, s.h)(
                  'div',
                  { class: '-cbwsdk-try-extension-list-item-icon-wrapper' },
                  (0, s.h)(
                    'span',
                    {
                      class: (0, i.default)(
                        '-cbwsdk-try-extension-list-item-icon',
                        t,
                      ),
                    },
                    (0, s.h)(c.SafeIcon, {
                      fill: 'light' === t ? '#0A0B0D' : '#FFFFFF',
                    }),
                  ),
                ),
                (0, s.h)(
                  'div',
                  {
                    class: (0, i.default)(
                      '-cbwsdk-try-extension-list-item-copy',
                      t,
                    ),
                  },
                  'Add an additional layer of security by using a supported Ledger hardware wallet',
                ),
              ),
            ),
          ),
        );
      }
      e.TryExtensionContent = h;
    },
    zo3G: function (t, e, n) {
      'use strict';
      n.d(e, 'b', function () {
        return u;
      }),
        n.d(e, 'a', function () {
          return c;
        });
      var r = n('mrSG'),
        i = n('h9Dq'),
        s = (function (t) {
          function e(e, n) {
            var r = t.call(this, e, n) || this;
            return (r.scheduler = e), (r.work = n), r;
          }
          return (
            r['__extends'](e, t),
            (e.prototype.schedule = function (e, n) {
              return (
                void 0 === n && (n = 0),
                n > 0
                  ? t.prototype.schedule.call(this, e, n)
                  : ((this.delay = n),
                    (this.state = e),
                    this.scheduler.flush(this),
                    this)
              );
            }),
            (e.prototype.execute = function (e, n) {
              return n > 0 || this.closed
                ? t.prototype.execute.call(this, e, n)
                : this._execute(e, n);
            }),
            (e.prototype.requestAsyncId = function (e, n, r) {
              return (
                void 0 === r && (r = 0),
                (null !== r && r > 0) || (null === r && this.delay > 0)
                  ? t.prototype.requestAsyncId.call(this, e, n, r)
                  : e.flush(this)
              );
            }),
            e
          );
        })(i['a']),
        o = n('CS9Q'),
        a = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return r['__extends'](e, t), e;
        })(o['a']),
        u = new a(s),
        c = u;
    },
    zotm: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return u;
      });
      var r = n('mrSG'),
        i = n('FFOo'),
        s = (function (t) {
          function e(e, n, r) {
            var i = t.call(this) || this;
            return (
              (i.parent = e),
              (i.outerValue = n),
              (i.outerIndex = r),
              (i.index = 0),
              i
            );
          }
          return (
            r['__extends'](e, t),
            (e.prototype._next = function (t) {
              this.parent.notifyNext(
                this.outerValue,
                t,
                this.outerIndex,
                this.index++,
                this,
              );
            }),
            (e.prototype._error = function (t) {
              this.parent.notifyError(t, this), this.unsubscribe();
            }),
            (e.prototype._complete = function () {
              this.parent.notifyComplete(this), this.unsubscribe();
            }),
            e
          );
        })(i['a']),
        o = n('Fxb1'),
        a = n('6blF');
      function u(t, e, n, r, i) {
        if ((void 0 === i && (i = new s(t, n, r)), !i.closed))
          return e instanceof a['a'] ? e.subscribe(i) : Object(o['a'])(e)(i);
      }
    },
    zphe: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.LIB_VERSION = void 0),
        (e.LIB_VERSION = '3.6.5');
    },
    zqVs: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default =
          'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTQiIGN5PSIxNCIgcj0iMTQiIGZpbGw9IiMwMDUyRkYiLz48cGF0aCBkPSJNMTQuMDM3IDE4LjkyNmMtMi43NSAwLTQuOTA3LTIuMjA1LTQuOTA3LTQuOTI2IDAtMi43MiAyLjIzLTQuOTI2IDQuOTA3LTQuOTI2YTQuODY2IDQuODY2IDAgMCAxIDQuODMzIDQuMTE4aDQuOTgyYy0uNDQ2LTUuMDczLTQuNjg0LTkuMDQ0LTkuODE1LTkuMDQ0QzguNjEgNC4xNDggNC4xNDkgOC41NiA0LjE0OSAxNHM0LjM4NyA5Ljg1MiA5Ljg5IDkuODUyYzUuMjA0IDAgOS4zNjgtMy45NyA5LjgxNC05LjA0M0gxOC44N2E0Ljg2NiA0Ljg2NiAwIDAgMS00LjgzMyA0LjExN1oiIGZpbGw9IiNmZmYiLz48L3N2Zz4=');
    },
    zvTS: function (t, e, n) {
      const r = n('Fj00').default;
      class i extends r {
        constructor() {
          super(), (this.updates = []);
        }
        async initialize() {}
        async update() {
          throw new Error('BaseFilter - no update method specified');
        }
        addResults(t) {
          (this.updates = this.updates.concat(t)),
            t.forEach((t) => this.emit('update', t));
        }
        addInitialResults(t) {}
        getChangesAndClear() {
          const t = this.updates;
          return (this.updates = []), t;
        }
      }
      t.exports = i;
    },
  },
]);
