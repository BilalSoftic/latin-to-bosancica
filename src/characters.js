import { nanoid } from 'nanoid';
/* A */
import A from './assets/letterSVGs/A.svg';
import a from './assets/letterSVGs/A1.svg';
import a1 from './assets/letterSVGs/A2.svg';
import a2 from './assets/letterSVGs/A3.svg';
/* B */
import B from './assets/letterSVGs/B.svg';
import b from './assets/letterSVGs/B1.svg';
import b1 from './assets/letterSVGs/B2.svg';
import b2 from './assets/letterSVGs/B3.svg';
/* V */
import V from './assets/letterSVGs/V.svg';
import v from './assets/letterSVGs/V1.svg';
import v1 from './assets/letterSVGs/V2.svg';
import v2 from './assets/letterSVGs/V3.svg';
/* G */
import G from './assets/letterSVGs/G.svg';
import g from './assets/letterSVGs/G1.svg';
import g1 from './assets/letterSVGs/G2.svg';
import g2 from './assets/letterSVGs/G3.svg';
/* D */
import D from './assets/letterSVGs/D.svg';
import d from './assets/letterSVGs/D1.svg';
import d1 from './assets/letterSVGs/D2.svg';
import d2 from './assets/letterSVGs/D3.svg';
/* E */
import E from './assets/letterSVGs/E.svg';
import e from './assets/letterSVGs/E1.svg';
import e1 from './assets/letterSVGs/E2.svg';
import e2 from './assets/letterSVGs/E3.svg';
/* Ž */
import Ž from './assets/letterSVGs/Ž.svg';
import ž from './assets/letterSVGs/Ž1.svg';
import ž1 from './assets/letterSVGs/Ž2.svg';
import ž2 from './assets/letterSVGs/Ž3.svg';
/* Z */
import Z from './assets/letterSVGs/Z.svg';
import z from './assets/letterSVGs/Z1.svg';
import z1 from './assets/letterSVGs/Z2.svg';
import z2 from './assets/letterSVGs/Z3.svg';
/* I */
import I from './assets/letterSVGs/I.svg';
import i from './assets/letterSVGs/I1.svg';
import i1 from './assets/letterSVGs/I2.svg';
import i2 from './assets/letterSVGs/I3.svg';
/* J */
import J from './assets/letterSVGs/J.svg';
import j from './assets/letterSVGs/J1.svg';
import j1 from './assets/letterSVGs/J2.svg';
/* K */
import K from './assets/letterSVGs/K.svg';
import k from './assets/letterSVGs/K1.svg';
import k1 from './assets/letterSVGs/K2.svg';
import k2 from './assets/letterSVGs/K3.svg';
/* L */
import L from './assets/letterSVGs/L.svg';
import l from './assets/letterSVGs/L1.svg';
import l1 from './assets/letterSVGs/L2.svg';
import l2 from './assets/letterSVGs/L3.svg';
/* M */
import M from './assets/letterSVGs/M.svg';
import m from './assets/letterSVGs/M1.svg';
import m1 from './assets/letterSVGs/M2.svg';
import m2 from './assets/letterSVGs/M3.svg';
/* N*/
import N from './assets/letterSVGs/N.svg';
import n from './assets/letterSVGs/N1.svg';
import n1 from './assets/letterSVGs/N2.svg';
import n2 from './assets/letterSVGs/N3.svg';
/* P*/
import P from './assets/letterSVGs/P.svg';
import p from './assets/letterSVGs/P1.svg';
import p1 from './assets/letterSVGs/P2.svg';
import p2 from './assets/letterSVGs/P3.svg';
/* R*/
import R from './assets/letterSVGs/R.svg';
import r from './assets/letterSVGs/R1.svg';
import r1 from './assets/letterSVGs/R2.svg';
import r2 from './assets/letterSVGs/R3.svg';
/* S*/
import S from './assets/letterSVGs/S.svg';
import s from './assets/letterSVGs/S1.svg';
import s1 from './assets/letterSVGs/S2.svg';
import s2 from './assets/letterSVGs/S3.svg';
/* T*/
import T from './assets/letterSVGs/T.svg';
import t from './assets/letterSVGs/T1.svg';
import t1 from './assets/letterSVGs/T2.svg';
import t2 from './assets/letterSVGs/T3.svg';
/* Ć*/
import Ć from './assets/letterSVGs/Ć.svg';
import ć from './assets/letterSVGs/Ć1.svg';
import ć1 from './assets/letterSVGs/Ć2.svg';
import ć2 from './assets/letterSVGs/Ć3.svg';
/* U*/
import U from './assets/letterSVGs/U.svg';
import u from './assets/letterSVGs/U1.svg';
import u1 from './assets/letterSVGs/U2.svg';
import u2 from './assets/letterSVGs/U3.svg';
/* F*/
import F from './assets/letterSVGs/F.svg';
import f from './assets/letterSVGs/F1.svg';
import f1 from './assets/letterSVGs/F2.svg';
/* H*/
import H from './assets/letterSVGs/H.svg';
import h from './assets/letterSVGs/H1.svg';
import h1 from './assets/letterSVGs/H2.svg';
import h2 from './assets/letterSVGs/H3.svg';
/* C*/
import C from './assets/letterSVGs/C.svg';
import c from './assets/letterSVGs/C1.svg';
import c1 from './assets/letterSVGs/C2.svg';
import c2 from './assets/letterSVGs/C3.svg';
/* Č*/
import Č from './assets/letterSVGs/Č.svg';
import č from './assets/letterSVGs/Č1.svg';
import č1 from './assets/letterSVGs/Č2.svg';
import č2 from './assets/letterSVGs/Č3.svg';
/* Š*/
import Š from './assets/letterSVGs/Š.svg';
import š from './assets/letterSVGs/Š1.svg';
import š1 from './assets/letterSVGs/Š2.svg';
import š2 from './assets/letterSVGs/Š3.svg';

export const charactersData = [
  {
    id: 'a',
    letter: A,
    letterIcons: {
      1: { icon: a, id: nanoid() },
      2: { icon: a1, text: '1', id: nanoid() },
      3: { icon: a2, text: '2', id: nanoid() },
    },
  },
  {
    id: 'b',
    letter: B,
    letterIcons: {
      1: { icon: b, id: nanoid() },
      2: { icon: b1, text: '1', id: nanoid() },
      3: { icon: b2, text: '2', id: nanoid() },
    },
  },
  {
    id: 'v',
    letter: V,
    letterIcons: {
      1: { icon: v, id: nanoid() },
      2: { icon: v1, text: '1', id: nanoid() },
      3: { icon: v2, text: '2', id: nanoid() },
    },
  },
  {
    id: 'g',
    letter: G,
    letterIcons: {
      1: { icon: g, id: nanoid() },
      2: { icon: g1, text: '1', id: nanoid() },
      3: { icon: g2, text: '2', id: nanoid() },
    },
  },
  {
    id: 'd',
    letter: D,
    letterIcons: {
      1: { icon: d, id: nanoid() },
      2: { icon: d1, text: '1', id: nanoid() },
      3: { icon: d2, text: '2', id: nanoid() },
    },
  },
  {
    id: 'e',
    letter: E,
    letterIcons: {
      1: { icon: e, id: nanoid() },
      2: { icon: e1, text: '1', id: nanoid() },
      3: { icon: e2, text: '2', id: nanoid() },
    },
  },
  {
    id: 'ž',
    letter: Ž,
    letterIcons: {
      1: { icon: ž, id: nanoid() },
      2: { icon: ž1, text: '1', id: nanoid() },
      3: { icon: ž2, text: '2', id: nanoid() },
    },
  },
  {
    id: 'z',
    letter: Z,
    letterIcons: {
      1: { icon: z, id: nanoid() },
      2: { icon: z1, text: '1', id: nanoid() },
      3: { icon: z2, text: '2', id: nanoid() },
    },
  },
  {
    id: 'i',
    letter: I,
    letterIcons: {
      1: { icon: i, id: nanoid() },
      2: { icon: i1, text: '1', id: nanoid() },
      3: { icon: i2, text: '2', id: nanoid() },
    },
  },
  {
    id: 'j',
    letter: J,
    letterIcons: {
      1: { icon: j, id: nanoid() },
      2: { icon: j1, text: '1', id: nanoid() },
    },
  },
  {
    id: 'k',
    letter: K,
    letterIcons: {
      1: { icon: k, id: nanoid() },
      2: { icon: k1, text: '1', id: nanoid() },
      3: { icon: k2, text: '2', id: nanoid() },
    },
  },
  {
    id: 'l',
    letter: L,
    letterIcons: {
      1: { icon: l, id: nanoid() },
      2: { icon: l1, text: '1', id: nanoid() },
      3: { icon: l2, text: '2', id: nanoid() },
    },
  },
  {
    id: 'm',
    letter: M,
    letterIcons: {
      1: { icon: m, id: nanoid() },
      2: { icon: m1, text: '1', id: nanoid() },
      3: { icon: m2, text: '2', id: nanoid() },
    },
  },
  {
    id: 'n',
    letter: N,
    letterIcons: {
      1: { icon: n, id: nanoid() },
      2: { icon: n1, text: '1', id: nanoid() },
      3: { icon: n2, text: '2', id: nanoid() },
    },
  },
  {
    id: 'p',
    letter: P,
    letterIcons: {
      1: { icon: p, id: nanoid() },
      2: { icon: p1, text: '1', id: nanoid() },
      3: { icon: p2, text: '2', id: nanoid() },
    },
  },
  {
    id: 'r',
    letter: R,
    letterIcons: {
      1: { icon: r, id: nanoid() },
      2: { icon: r1, text: '1', id: nanoid() },
      3: { icon: r2, text: '2', id: nanoid() },
    },
  },
  {
    id: 's',
    letter: S,
    letterIcons: {
      1: { icon: s, id: nanoid() },
      2: { icon: s1, text: '1', id: nanoid() },
      3: { icon: s2, text: '2', id: nanoid() },
    },
  },
  {
    id: 't',
    letter: T,
    letterIcons: {
      1: { icon: t, id: nanoid() },
      2: { icon: t1, text: '1', id: nanoid() },
      3: { icon: t2, text: '2', id: nanoid() },
    },
  },
  {
    id: 'ć',
    letter: Ć,
    letterIcons: {
      1: { icon: ć, id: nanoid() },
      2: { icon: ć1, text: '1', id: nanoid() },
      3: { icon: ć2, text: '2', id: nanoid() },
    },
  },
  {
    id: 'u',
    letter: U,
    letterIcons: {
      1: { icon: u, id: nanoid() },
      2: { icon: u1, text: '1', id: nanoid() },
      3: { icon: u2, text: '2', id: nanoid() },
    },
  },
  {
    id: 'f',
    letter: F,
    letterIcons: {
      1: { icon: f, id: nanoid() },
      2: { icon: f1, text: '1', id: nanoid() },
    },
  },
  {
    id: 'h',
    letter: H,
    letterIcons: {
      1: { icon: h, id: nanoid() },
      2: { icon: h1, text: '1', id: nanoid() },
      3: { icon: h2, text: '2', id: nanoid() },
    },
  },
  {
    id: 'c',
    letter: C,
    letterIcons: {
      1: { icon: c, id: nanoid() },
      2: { icon: c1, text: '1', id: nanoid() },
      3: { icon: c2, text: '2', id: nanoid() },
    },
  },
  {
    id: 'č',
    letter: Č,
    letterIcons: {
      1: { icon: č, id: nanoid() },
      2: { icon: č1, text: '1', id: nanoid() },
      3: { icon: č2, text: '2', id: nanoid() },
    },
  },
  {
    id: 'š',
    letter: Š,
    letterIcons: {
      1: { icon: š, id: nanoid() },
      2: { icon: š1, text: '1', id: nanoid() },
      3: { icon: š2, text: '2', id: nanoid() },
    },
  },
];
