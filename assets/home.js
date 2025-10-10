import {
  p as e,
  f as a,
  g as s,
  h as l,
  i as n,
  j as t,
  o as i,
  c as u,
  k as o,
  l as v,
  u as c,
  n as d,
  m as r,
  F as m,
  q as w,
  s as g,
  t as p,
  v as f,
  x as A,
  y as b,
  z as y,
  A as k,
  B as h,
  C as L,
  D as C,
  a as E,
  w as R,
  T as U,
} from "./vendor.ba249473.js";
import { _ as T, a as I, b as O } from "./RightBar.d7687bb9.js";
e("data-v-408edf4d");
const F = { class: "slider" },
  J = { class: "slide bottom" },
  N = ["src"],
  D = ["src"],
  M = { class: "dots" },
  W = { class: "v-indicator" };
a();
const X = {
  props: { slides: { type: Array, default: () => [] } },
  setup(e) {
    const a = e,
      b = [
        new URL("./assets/banner1.080d5b46.png", window.location).href,
        new URL("./assets/banner2.95462274.png", window.location).href,
      ],
      y = s(() => (a.slides && a.slides.length ? a.slides : b)),
      k = s(() => (y.value.length < 2 ? 2 : y.value.length)),
      h = l(0),
      L = l(1),
      C = l("up"),
      E = l(0),
      R = l(!1),
      U = l(!1),
      T = l(!1),
      I = l(0),
      O = l(null);
    let X = !1,
      Y = null;
    const H = l(!0),
      q = l(!1);
    let B = null,
      Q = null;
    function S() {
      Y && (clearTimeout(Y), (Y = null));
    }
    function x() {
      (Q && (clearTimeout(Q), (Q = null)), (B = null), (q.value = !1));
    }
    function V() {
      if (q.value && B) {
        const e = B;
        (x(), e());
      }
    }
    async function K() {
      ((h.value = L.value),
        await A(),
        (R.value = !1),
        (E.value = 0),
        await A(),
        (U.value = !1),
        (H.value = !0),
        (L.value = (h.value + 1) % k.value),
        (C.value = "up"),
        (X = !1),
        S());
    }
    async function G() {
      U.value && (await K());
    }
    function z(e) {
      U.value ||
        q.value ||
        ((T.value = !0),
        (R.value = !1),
        (I.value = "touches" in e ? e.touches[0].clientY : e.clientY),
        (C.value = "up"),
        (L.value = (h.value + 1) % k.value),
        window.addEventListener("mousemove", Z),
        window.addEventListener("mouseup", j),
        window.addEventListener("touchmove", Z, { passive: !1 }),
        window.addEventListener("touchend", j),
        window.addEventListener("touchcancel", j));
    }
    function Z(e) {
      if (!T.value) return;
      "preventDefault" in e && e.preventDefault();
      const a = ("touches" in e ? e.touches[0].clientY : e.clientY) - I.value,
        s = O.value;
      let l = (a / (s ? s.clientHeight : window.innerHeight)) * 100;
      (l < 0
        ? ((C.value = "up"),
          (L.value = (h.value + 1) % k.value),
          l < -100 && (l = -100))
        : l > 0 &&
          ((C.value = "down"),
          (L.value = (h.value - 1 + k.value) % k.value),
          l > 100 && (l = 100)),
        (E.value = l));
    }
    function P(e) {
      return (
        "up" === e
          ? ((C.value = "up"), (L.value = (h.value + 1) % k.value))
          : ((C.value = "down"), (L.value = (h.value - 1 + k.value) % k.value)),
        (U.value = !0),
        S(),
        new Promise((e) => {
          ((q.value = !0), (B = e), (H.value = !1));
          const a = y.value[h.value];
          Q = setTimeout(
            () => {
              if (B) {
                const e = B;
                (x(), e());
              }
            },
            "string" == typeof a ? 10 : 2400,
          );
        }).then(() => {
          ((R.value = !0),
            (E.value = "up" === e ? -100 : 100),
            (Y = setTimeout(() => {
              U.value && K();
            }, 1500)));
        })
      );
    }
    function j() {
      T.value &&
        ((T.value = !1),
        U.value ||
          q.value ||
          ("up" === C.value && E.value <= -20
            ? P("up")
            : "down" === C.value && E.value >= 20
              ? P("down")
              : ((R.value = !0),
                (E.value = 0),
                setTimeout(() => {
                  R.value = !1;
                }, 820)),
          window.removeEventListener("mousemove", Z),
          window.removeEventListener("mouseup", j),
          window.removeEventListener("touchmove", Z),
          window.removeEventListener("touchend", j),
          window.removeEventListener("touchcancel", j)));
    }
    function _(e) {
      if (U.value || T.value || X || q.value) return;
      e.preventDefault();
      const a = e.deltaY;
      Math.abs(a) < 10 || ((X = !0), P(a > 0 ? "up" : "down"));
    }
    return (
      n(() => {
        L.value = (h.value + 1) % k.value;
        const e = O.value;
        e && e.addEventListener("wheel", _, { passive: !1 });
      }),
      t(() => {
        (window.removeEventListener("mousemove", Z),
          window.removeEventListener("mouseup", j),
          window.removeEventListener("touchmove", Z),
          window.removeEventListener("touchend", j),
          window.removeEventListener("touchcancel", j));
        const e = O.value;
        (e && e.removeEventListener("wheel", _), S(), x());
      }),
      (e, a) => (
        i(),
        u("div", F, [
          o(
            "div",
            {
              class: "viewport",
              ref: (e, a) => {
                ((a.viewportRef = e), (O.value = e));
              },
              onMousedown: z,
              onTouchstart: z,
              onDragstart: a[0] || (a[0] = r(() => {}, ["prevent"])),
            },
            [
              o("div", J, [
                v(
                  e.$slots,
                  "item",
                  { item: c(y)[L.value], index: L.value, active: !1 },
                  () => [
                    "string" == typeof c(y)[L.value]
                      ? (i(),
                        u(
                          "img",
                          {
                            key: 0,
                            src: c(y)[L.value],
                            alt: "slide",
                            draggable: "false",
                          },
                          null,
                          8,
                          N,
                        ))
                      : (i(), p(f(c(y)[L.value]), { key: 1, active: !1 })),
                  ],
                  !0,
                ),
              ]),
              o(
                "div",
                {
                  class: "slide top",
                  style: d({
                    transform: `translateY(${E.value}%)`,
                    transition: R.value ? "" : "none",
                  }),
                  onTransitionend: G,
                },
                [
                  v(
                    e.$slots,
                    "item",
                    { item: c(y)[h.value], index: h.value, active: H.value },
                    () => [
                      "string" == typeof c(y)[h.value]
                        ? (i(),
                          u(
                            "img",
                            {
                              key: 0,
                              src: c(y)[h.value],
                              alt: "slide",
                              draggable: "false",
                            },
                            null,
                            8,
                            D,
                          ))
                        : (i(),
                          p(
                            f(c(y)[h.value]),
                            { key: 1, active: H.value, onLeaveend: V },
                            null,
                            8,
                            ["active"],
                          )),
                    ],
                    !0,
                  ),
                ],
                36,
              ),
            ],
            544,
          ),
          o("div", M, [
            (i(!0),
            u(
              m,
              null,
              w(
                c(k),
                (e) => (
                  i(),
                  u(
                    "span",
                    { key: e, class: g({ on: e - 1 === h.value }) },
                    null,
                    2,
                  )
                ),
              ),
              128,
            )),
          ]),
          o("div", W, [
            (i(!0),
            u(
              m,
              null,
              w(
                c(k),
                (e) => (
                  i(),
                  u(
                    "span",
                    { key: "v" + e, class: g({ on: e - 1 === h.value }) },
                    null,
                    2,
                  )
                ),
              ),
              128,
            )),
          ]),
        ])
      )
    );
  },
  __scopeId: "data-v-408edf4d",
};
e("data-v-344f1322");
const Y = { class: "clouds" },
  H = ["src"];
a();
const q = {
  props: { active: { type: Boolean, default: !1 } },
  emits: ["leaveend"],
  setup(e, { emit: a }) {
    const s = e,
      t = [
        new URL("./assets/i1.77b7a461.png", window.location).href,
        new URL("./assets/i2.3fa22f26.png", window.location).href,
        new URL("./assets/i3.f239815b.png", window.location).href,
        new URL("./assets/i4.3299d505.png", window.location).href,
        new URL("./assets/i5.9eace426.png", window.location).href,
        new URL("./assets/i6.321fd21a.png", window.location).href,
      ],
      v = l(!1),
      c = l(!1);
    let d = null;
    function r() {
      requestAnimationFrame(() => {
        v.value = !0;
      });
    }
    return (
      b(
        () => s.active,
        (e) => {
          e
            ? (d && clearTimeout(d), (c.value = !1), (v.value = !1), r())
            : ((c.value = !0),
              d && clearTimeout(d),
              (d = setTimeout(() => {
                ((c.value = !1), (v.value = !1), a("leaveend"));
              }, 1e3)));
        },
      ),
      n(() => {
        s.active && r();
      }),
      y(() => {
        d && clearTimeout(d);
      }),
      (e, a) => (
        i(),
        u(
          "div",
          { class: g(["orange", { entered: v.value, leaving: c.value }]) },
          [
            o("div", Y, [
              (i(),
              u(
                m,
                null,
                w(t, (e, a) =>
                  o(
                    "img",
                    {
                      key: a,
                      src: e,
                      class: g("c" + (a + 1)),
                      draggable: "false",
                    },
                    null,
                    10,
                    H,
                  ),
                ),
                64,
              )),
            ]),
          ],
          2,
        )
      )
    );
  },
  __scopeId: "data-v-344f1322",
};
e("data-v-bacab88e");
const B = [
  o("div", { class: "bg" }, null, -1),
  o(
    "div",
    { class: "content" },
    [
      o("div", { class: "title" }, [
        k(" 加入 KISHU CITY "),
        o("br"),
        k(" 共享资产升值红利 "),
      ]),
      o("div", { class: "panel left" }, [
        o("div", { class: "card line" }, [
          o("div", { class: "tokenCol" }, [
            o("div", { class: "icon usdc" }),
            o("div", { class: "name" }, "USDC"),
          ]),
          o("div", { class: "vline" }),
          o("div", { class: "infoCol" }, [
            o("div", { class: "balance" }, "余额：102000.00"),
            o("div", { class: "pill min" }, "最小100"),
          ]),
        ]),
        o("div", { class: "divider" }, [
          o("div", { class: "dot" }, [
            o("img", {
              src: "data:image/png;base64,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",
              alt: "",
            }),
          ]),
          o("div", { class: "rate" }, "1USDC=10KSC"),
        ]),
        o("div", { class: "card" }, [
          o("div", { class: "tokenCol" }, [
            o("div", { class: "icon ksc" }),
            o("div", { class: "name" }, "KSC"),
          ]),
          o("div", { class: "vline" }),
          o("div", { class: "infoCol" }, [
            o("div", { class: "balance" }, "余额：102000.00"),
            o("div", { class: "pill input" }, "13000.00"),
          ]),
        ]),
        o("button", { class: "buy" }, "立即购买"),
      ]),
      o("div", { class: "panel right" }, [
        o("div", { class: "circle" }, [
          o("div", { class: "c c1" }),
          o("div", { class: "c c2" }),
          o("span", { class: "tick t1" }),
          o("span", { class: "tick t2" }),
          o("div", { class: "txt" }, "300/1000000"),
        ]),
        o("div", { class: "legend" }, [
          o("span", { class: "dot " }),
          o("span", null, "已解锁"),
          o("span", { class: "dot on", style: { "margin-left": ".4rem" } }),
          o("span", null, "已提取"),
        ]),
        o("div", { class: "progress" }, "销售进度"),
      ]),
    ],
    -1,
  ),
];
a();
const Q = {
  props: { active: { type: Boolean, default: !1 } },
  emits: ["leaveend"],
  setup(e, { emit: a }) {
    const s = e,
      t = l(!1),
      o = l(!1);
    let v = null;
    function c() {
      requestAnimationFrame(() => {
        t.value = !0;
      });
    }
    return (
      b(
        () => s.active,
        (e) => {
          e
            ? (v && clearTimeout(v), (o.value = !1), (t.value = !1), c())
            : ((o.value = !0),
              v && clearTimeout(v),
              (v = setTimeout(() => {
                ((o.value = !1), (t.value = !1), a("leaveend"));
              }, 500)));
        },
      ),
      n(() => {
        s.active && c();
      }),
      y(() => {
        v && clearTimeout(v);
      }),
      (e, a) => (
        i(),
        u(
          "div",
          { class: g(["slide2", { entered: t.value, leaving: o.value }]) },
          B,
          2,
        )
      )
    );
  },
  __scopeId: "data-v-bacab88e",
};
e("data-v-b377aa98");
const S = o("div", { class: "bg" }, null, -1),
  x = { class: "content" },
  V = o(
    "div",
    { class: "title" },
    [
      k("每一个加入纪州的人，都是叙事者、治理者、创造者。"),
      o("br"),
      k(" 选择你的归属藩......"),
    ],
    -1,
  ),
  K = { class: "cards" },
  G = { class: "hd" },
  z = { class: "num" },
  Z = { class: "name" },
  P = o("div", { class: "line" }, null, -1),
  j = { class: "sub" },
  _ = { class: "img" },
  $ = ["src"],
  ee = { class: "ft" },
  ae = { class: "tags" },
  se = o("button", { class: "btn" }, "加入部藩", -1),
  le = { class: "group clone" },
  ne = { class: "hd" },
  te = { class: "num" },
  ie = { class: "name" },
  ue = o("div", { class: "line" }, null, -1),
  oe = { class: "sub" },
  ve = { class: "img" },
  ce = ["src"],
  de = { class: "ft" },
  re = { class: "tags" },
  me = o("button", { class: "btn" }, "加入部藩", -1);
a();
const we = {
  props: { active: { type: Boolean, default: !1 } },
  emits: ["leaveend"],
  setup(e, { emit: a }) {
    const s = e,
      t = l(!1),
      v = l(!1);
    let c = null;
    function r() {
      requestAnimationFrame(() => {
        t.value = !0;
      });
    }
    b(
      () => s.active,
      (e) => {
        e
          ? (c && clearTimeout(c), (v.value = !1), (t.value = !1), r())
          : ((v.value = !0),
            c && clearTimeout(c),
            (c = setTimeout(() => {
              ((v.value = !1), (t.value = !1), a("leaveend"));
            }, 500)));
      },
    );
    const p = l(null),
      f = l(0),
      k = l(30);
    function L() {
      const e = p.value;
      if (!e) return;
      const a = e.scrollWidth;
      f.value = a;
      k.value = Math.max(10, Math.round(a / 60));
    }
    function C() {
      L();
    }
    const E = [
      {
        num: "01",
        name: "SONIK CLAN",
        sub: "音 藩",
        tags: "音乐制作 / DJ / 声音艺术",
        img: new URL("./assets/a17.bf29b7f8.png", window.location).href,
      },
      {
        num: "02",
        name: "KAGE CLAN",
        sub: "影 藩",
        tags: "影视 / 剧场 / 表演 / 角色叙事",
        img: new URL("./assets/a18.d4524d08.png", window.location).href,
      },
      {
        num: "03",
        name: "MONO CLAN",
        sub: "造 藩",
        tags: "建筑 / 手工艺 / 空间美学",
        img: new URL("./assets/a19.adbcfe31.png", window.location).href,
      },
      {
        num: "04",
        name: "MONO CLAN",
        sub: "文 藩",
        tags: "写作 / 策展 / 编辑出版",
        img: new URL("./assets/a20.69f5db4a.png", window.location).href,
      },
      {
        num: "05",
        name: "SAGE CLAN",
        sub: "機 藩",
        tags: "AI艺术 / 算法美学 / 技术创作",
        img: new URL("./assets/a21.bac865f5.png", window.location).href,
      },
      {
        num: "06",
        name: "NEON CLAN",
        sub: "霓 藩",
        tags: "虚拟角色 / ACGN / 插画 / Vtuber文化",
        img: new URL("./assets/a22.34fbe812.png", window.location).href,
      },
      {
        num: "07",
        name: "YORU CLAN",
        sub: "夜 藩",
        tags: "派对文化 / 品牌运营 / 社交实验",
        img: new URL("./assets/a23.6f6cb13b.png", window.location).href,
      },
      {
        num: "08",
        name: "GENKA CLAN",
        sub: "幻 藩",
        tags: "沉浸式Play空间 / Metaverse入口站",
        img: new URL("./assets/a24.13103615.png", window.location).href,
      },
    ];
    return (
      n(async () => {
        (s.active && r(),
          await A(),
          requestAnimationFrame(L),
          window.addEventListener("resize", C));
      }),
      y(() => {
        (c && clearTimeout(c), window.removeEventListener("resize", C));
      }),
      (e, a) => (
        i(),
        u(
          "div",
          { class: g(["slide3", { entered: t.value, leaving: v.value }]) },
          [
            S,
            o("div", x, [
              V,
              o("div", K, [
                o(
                  "div",
                  {
                    class: "track",
                    style: d({
                      "--loop-w": f.value + "px",
                      "--duration": k.value + "s",
                    }),
                  },
                  [
                    o(
                      "div",
                      {
                        class: "group",
                        ref: (e, a) => {
                          ((a.groupRef = e), (p.value = e));
                        },
                      },
                      [
                        (i(),
                        u(
                          m,
                          null,
                          w(E, (e, a) =>
                            o("div", { class: "oval", key: "g1-" + a }, [
                              o("div", G, [
                                o("div", z, h(e.num), 1),
                                o("div", Z, h(e.name), 1),
                                P,
                                o("div", j, h(e.sub), 1),
                              ]),
                              o("div", _, [
                                o("img", { src: e.img, alt: "" }, null, 8, $),
                              ]),
                              o("div", ee, [o("div", ae, h(e.tags), 1), se]),
                            ]),
                          ),
                          64,
                        )),
                      ],
                      512,
                    ),
                    o("div", le, [
                      (i(),
                      u(
                        m,
                        null,
                        w(E, (e, a) =>
                          o("div", { class: "oval", key: "g2-" + a }, [
                            o("div", ne, [
                              o("div", te, h(e.num), 1),
                              o("div", ie, h(e.name), 1),
                              ue,
                              o("div", oe, h(e.sub), 1),
                            ]),
                            o("div", ve, [
                              o("img", { src: e.img, alt: "" }, null, 8, ce),
                            ]),
                            o("div", de, [o("div", re, h(e.tags), 1), me]),
                          ]),
                        ),
                        64,
                      )),
                    ]),
                  ],
                  4,
                ),
              ]),
            ]),
          ],
          2,
        )
      )
    );
  },
  __scopeId: "data-v-b377aa98",
};
e("data-v-1386bd05");
const ge = o("div", { class: "bg" }, null, -1),
  pe = { class: "floats" },
  fe = ["src"];
a();
const Ae = {
  props: { active: { type: Boolean, default: !1 } },
  emits: ["leaveend"],
  setup(e, { emit: a }) {
    const s = e,
      t = [
        new URL("./assets/d1.ac8ec8e3.png", window.location).href,
        new URL("./assets/d2.39f80b01.png", window.location).href,
        new URL("./assets/d3.ba1efc3d.png", window.location).href,
        new URL("./assets/d4.57f8ee73.png", window.location).href,
      ],
      v = l(!1),
      c = l(!1);
    let d = null;
    function r() {
      requestAnimationFrame(() => {
        v.value = !0;
      });
    }
    return (
      b(
        () => s.active,
        (e) => {
          e
            ? (d && clearTimeout(d), (c.value = !1), (v.value = !1), r())
            : ((c.value = !0),
              d && clearTimeout(d),
              (d = setTimeout(() => {
                ((c.value = !1), (v.value = !1), a("leaveend"));
              }, 2e3)));
        },
      ),
      n(() => {
        s.active && r();
      }),
      y(() => {
        d && clearTimeout(d);
      }),
      (e, a) => (
        i(),
        u(
          "div",
          { class: g(["b2", { entered: v.value, leaving: c.value }]) },
          [
            ge,
            o("div", pe, [
              (i(),
              u(
                m,
                null,
                w(t, (e, a) =>
                  o(
                    "img",
                    {
                      key: a,
                      src: e,
                      class: g("f" + (a + 1)),
                      draggable: "false",
                    },
                    null,
                    10,
                    fe,
                  ),
                ),
                64,
              )),
            ]),
          ],
          2,
        )
      )
    );
  },
  __scopeId: "data-v-1386bd05",
};
e("data-v-127ac53e");
const be = o("div", { class: "bg" }, null, -1),
  ye = { class: "floats" },
  ke = ["src"];
a();
const he = {
  props: { active: { type: Boolean, default: !1 } },
  emits: ["leaveend"],
  setup(e, { emit: a }) {
    const s = e,
      t = [
        new URL("./assets/e1.3b42a54f.png", window.location).href,
        new URL("./assets/e2.ad8de915.png", window.location).href,
        new URL("./assets/e3.7506ff3b.png", window.location).href,
        new URL("./assets/e4.5ad9c094.png", window.location).href,
        new URL("./assets/e5.57e1fcb0.png", window.location).href,
      ],
      v = l(!1),
      c = l(!1);
    let d = null;
    function r() {
      requestAnimationFrame(() => {
        v.value = !0;
      });
    }
    return (
      b(
        () => s.active,
        (e) => {
          e
            ? (d && clearTimeout(d), (c.value = !1), (v.value = !1), r())
            : ((c.value = !0),
              d && clearTimeout(d),
              (d = setTimeout(() => {
                ((c.value = !1), (v.value = !1), a("leaveend"));
              }, 1400)));
        },
      ),
      n(() => {
        s.active && r();
      }),
      y(() => {
        d && clearTimeout(d);
      }),
      (e, a) => (
        i(),
        u(
          "div",
          { class: g(["b5", { entered: v.value, leaving: c.value }]) },
          [
            be,
            o("div", ye, [
              (i(),
              u(
                m,
                null,
                w(t, (e, a) =>
                  o(
                    "img",
                    {
                      key: a,
                      src: e,
                      class: g("f" + (a + 1)),
                      draggable: "false",
                    },
                    null,
                    10,
                    ke,
                  ),
                ),
                64,
              )),
            ]),
          ],
          2,
        )
      )
    );
  },
  __scopeId: "data-v-127ac53e",
};
e("data-v-056795de");
const Le = [
  o("div", { class: "mask" }, null, -1),
  o(
    "div",
    { class: "logod" },
    [o("img", { src: T, alt: "", draggable: "false" })],
    -1,
  ),
];
a();
const Ce = {
  props: { active: { type: Boolean, default: !1 } },
  emits: ["leaveend"],
  setup(e, { emit: a }) {
    const s = e,
      t = l(!1),
      o = l(!1);
    let v = null;
    function c() {
      requestAnimationFrame(() => {
        t.value = !0;
      });
    }
    return (
      b(
        () => s.active,
        (e) => {
          e
            ? (v && clearTimeout(v), (o.value = !1), (t.value = !1), c())
            : ((o.value = !0),
              v && clearTimeout(v),
              (v = setTimeout(() => {
                ((o.value = !1), (t.value = !1), a("leaveend"));
              }, 800)));
        },
      ),
      n(() => {
        s.active && c();
      }),
      y(() => {
        v && clearTimeout(v);
      }),
      (e, a) => (
        i(),
        u(
          "div",
          { class: g(["splash", { entered: t.value, leaving: o.value }]) },
          Le,
          2,
        )
      )
    );
  },
  __scopeId: "data-v-056795de",
};
const Ee = { class: "page" },
  Re = { class: "page-header" },
  Ue = { class: "nav" },
  Te = o("a", null, "社群建设", -1),
  Ie = o("a", null, "邀请排行", -1),
  Oe = o("a", null, "复制地址", -1),
  Fe = o("a", null, "断开链接", -1),
  Je = { class: "page-main" },
  Ne = o(
    "div",
    { class: "logo2", style: { "padding-top": ".6rem" } },
    [
      o("img", {
        src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAAB1CAYAAAACy8wKAAAFO0lEQVR4nO2cjVHjMBCFlcw14CshV4KvhFwJXAlQApQAJSQlkBKSEkgJoYRQgm/EaW82y6705NgXE/ab8QC2LMvP+yPJMrOu6wLCbDaLpbDC0+bvjYD3HZlfwU2PzrfKC8w+4T2ejVsSAByTvjJuSQAuEoCLBOAiAbhIAC4SgIsE4CIBuEgALhKAiwTgIgG4SAAuEoCLBOAiAbhIAC4SgIsE4CIBuEgALhKAiwTgIgG4SAAuEoCLBOAiAbhIAHG90TKE0KaibyGEtXIaLxPZhxB27O979vsmhPBqXHoRQrhJdTVp3y6V36Xr565ttY/XTTxVHufI+3nf0aVtq5wQG3hkZV7YDRId25aZC3eZLV7jtnCe1j5iKequPW7eT8ndohgrJkp8knfGE88Rb/RRHN8Li6NraUJdlJJIsdHcze7SzdXCzTee/yOE8JP9JNfdZNzpYuTWTN4LH34g/6xkKdzzSVhQFO1XKtfnAYyOJdKNcI9NIdDVIOMZsetd48ho7tYmNyP2yc36Iq3jMRPcJ4m0JBmoI+segZpDaZsCcpOy1D7tr4lBTUbg1tg/CKXU/AJcpNQFaFI9Wv3H1AbLDUvtszbJaF2ASCuyUx/eUhZ7UKyySS54EIliMlgi7UQGyj3pGmLw/55inOyVx/qfC25DmVDbHsYUVZrzgfk+37/K1IH0uDWWihs+Z9o3iR53dIXf6edOpOXbEYLjLlkEt6qxMp9084VRTu5/kyLtRcqWqV8OLYZADlqHcGsN2RWxHobcvy8F7viEeSdy2WNsRZntJWOJvGHWDMIQSM/Q2sr3v5dHstuTMNXHyqdNwbhNQvHOZJuOc5HGHLvxYVWbYhw9uBvx90l5JDDeimAmuwS5wF3Tz9GmYYYK3MQWbMvJtdBGyCzEFS9ltyXQONnTH0sk6pfl2nISe2cpmlNEf8uMxBci8r+y+MGF2WeGMQ1zPV4+dw7avkbUWxowUzeH35PaFv8oEMBfBAC4SAAuEoCLBFD6zl/LRqHwnuyqyCU26gmXOlyrzECR0PpHkj6TalYHsDWOldqpnXe0RCp1tLQtNyn3v0UKxgMuTRyutHM0kbSC5wp1CZFk77tL08QWC6N8E0XiLwLujZExTWVQD7ZN5WTv+5yBaa53LIc5uV437ae5MH4ujfC1dmrTxnJgryrZpfGa5ssNs7pjYTIOsaQclrWU0KzJeqlx1KwoHuDuprmZNiKXtAMF7jFEsq4tLVPOcJyEDhLJsqKhpmovKZJmTXIO/WBZUWAiaUrmJv1ruaRIwbg+Wb8m4sk0SRRpbljMZN/L9yAXqLWArSYgTekhJ+MvbUlBcamDEWY+eBC5G5oB+jIFkbSQor12/5CEyN0k1zgeWytvYWSY0cq885VmAUrrq8zjX0kk01IKx96RQa02ZpSYQkwitNikxqJ/F08xSVOw1Iv+rGjpXa6g+cDcGCxOcp3QpbBEmtxa6ksyT++7tWUpyOq23BrGq4Gym5b+7guDXFoguh1pSc7kaJQ5lS6z6PNWKW+56JSyW3V9cvpWGxHLyraGmF1mevSqRAqGhSBbbnby04ske9zrtIaxZqpkkz6kmeR3IUOgfVvCP4ihD/ikldBHgRtAnM2Z81Ny6fG5A/Dq+nzpDYCvBQBwkQBcJAAXCcBFAnCRAFwkABcJwEUCcJEAXCQAFwnARQJwkQBcJAAXCcBFAnCRAFwkABcJwEUCcJEAXCQAFwnARQJwkQBcJAAXCcBFAsj979sTZrPSvxD4XNSspoFFSlzDOp3qp+3uViKE8AesRRCczV+InAAAAABJRU5ErkJggg==",
        alt: "",
        draggable: "false",
      }),
    ],
    -1,
  ),
  De = {
    setup(e) {
      const a = l(!1);
      function s() {
        a.value = !a.value;
      }
      function n() {
        a.value = !1;
      }
      const t = L();
      function v() {
        t.push("/");
      }
      function c() {
        t.push("/assets");
      }
      const d = l(!1);
      function r() {
        d.value = !d.value;
      }
      const w = [Ce, q, Ae, Q, he, we];
      return (e, l) => (
        i(),
        u("div", Ee, [
          o("header", Re, [
            o("div", { class: "logo", onClick: v }),
            o("nav", Ue, [
              o("a", { onClick: r }, "登录"),
              d.value
                ? (i(),
                  u(
                    m,
                    { key: 0 },
                    [o("a", { onClick: c }, "我的资产"), Te, Ie, Oe, Fe],
                    64,
                  ))
                : C("", !0),
            ]),
          ]),
          o("main", Je, [E(X, { slides: w })]),
          E(
            I,
            { "fab-open": a.value, "show-langs": d.value, onFabClick: s },
            { extra: R(() => [Ne]), _: 1 },
            8,
            ["fab-open", "show-langs"],
          ),
          E(
            U,
            { name: "mm" },
            {
              default: R(() => [
                a.value ? (i(), p(O, { key: 0, onClose: n })) : C("", !0),
              ]),
              _: 1,
            },
          ),
        ])
      );
    },
  };
export { De as default };
