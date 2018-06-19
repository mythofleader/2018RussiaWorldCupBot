const group = require('./group');


module.exports = [
  {
    date: new Date('2018-06-15 00:00:00'),
    group: group.A.name,
    nations: [group.A.nations.Russia, group.A.nations.SaudiArabia],
    score: [5, 0],
  },
  {
    date: new Date('2018-06-15 21:00:00'),
    group: group.A.name,
    nations: [group.A.nations.Egypt, group.A.nations.Uruguay],
    score: [0, 1],
  },
  {
    date: new Date('2018-06-16 00:00:00'),
    group: group.B.name,
    nations: [group.B.nations.Morocco, group.B.nations.Iran],
    score: [0, 1],
  },
  {
    date: new Date('2018-06-16 03:00:00'),
    group: group.B.name,
    nations: [group.B.nations.Portugal, group.B.nations.Spain],
    score: [3, 3],
  },
  {
    date: new Date('2018-06-16 19:00:00'),
    group: group.C.name,
    nations: [group.C.nations.France, group.C.nations.Australia],
    score: [2, 1],
  },
  {
    date: new Date('2018-06-16 22:00:00'),
    group: group.D.name,
    nations: [group.D.nations.Argentina, group.D.nations.Iceland],
    score: [1, 1],
  },
  {
    date: new Date('2018-06-17 01:00:00'),
    group: group.C.name,
    nations: [group.C.nations.Peru, group.C.nations.Denmark],
    score: [0, 1],
  },
  {
    date: new Date('2018-06-17 04:00:00'),
    group: group.D.name,
    nations: [group.D.nations.Croatia, group.D.nations.Nigeria],
    score: [2, 0],
  },
  {
    date: new Date('2018-06-17 21:00:00'),
    group: group.E.name,
    nations: [group.E.nations.Costarica, group.E.nations.Seriba],
    score: [0, 1],
  },
  {
    date: new Date('2018-06-18 00:00:00'),
    group: group.F.name,
    nations: [group.F.nations.Germany, group.F.nations.Mexico],
    score: [0, 1],
  },
  {
    date: new Date('2018-06-18 03:00:00'),
    group: group.E.name,
    nations: [group.E.nations.Brazil, group.E.nations.Switzerland],
    score: [1, 1],
  },
  {
    date: new Date('2018-06-18 21:00:00'),
    group: group.F.name,
    nations: [group.F.nations.Sweden, group.F.nations.Korea],
    score: [1, 0],
  },
  {
    date: new Date('2018-06-19 00:00:00'),
    nations: [group.G.nations.Belguim, group.G.nations.Panama],
    group: group.G.name,
    score: [3, 0],
  },
  {
    date: new Date('2018-06-19 03:00:00'),
    nations: [group.G.nations.Tunisia, group.G.nations.England],
    group: group.G.name,
    score: [1, 2],
  },
  {
    date: new Date('2018-06-19 21:00:00'),
    nations: [group.H.nations.Colombia, group.H.nations.Japan],
    group: group.H.name,
  },
  {
    date: new Date('2018-06-20 00:00:00'),
    nations: [group.H.nations.Poland, group.H.nations.Senegal],
    group: group.H.name,
  },
  {
    date: new Date('2018-06-20 03:00:00'),
    nations: [group.A.nations.Russia, group.A.nations.Egypt],
    group: group.A.name,
  },
  {
    date: new Date('2018-06-20 21:00:00'),
    nations: [group.B.nations.Portugal, group.B.nations.Morocco],
    group: group.B.name,
  },
  {
    date: new Date('2018-06-21 00:00:00'),
    nations: [group.A.nations.Uruguay, group.A.nations.SaudiArabia],
    group: group.A.name,
  },
  {
    date: new Date('2018-06-21 03:00:00'),
    nations: [group.B.nations.Iran, group.B.nations.Spain],
    group: group.B.name,
  },
  {
    date: new Date('2018-06-21 21:00:00'),
    nations: [group.C.nations.Denmark, group.C.nations.Australia],
    group: group.C.name,
  },
  {
    date: new Date('2018-06-22 00:00:00'),
    nations: [group.C.nations.France, group.C.nations.Peru],
    group: group.C.name,
  },
  {
    date: new Date('2018-06-22 03:00:00'),
    nations: [group.D.nations.Argentina, group.D.nations.Croatia],
    group: group.D.name,
  },
  {
    date: new Date('2018-06-22 21:00:00'),
    nations: [group.E.nations.Brazil, group.E.nations.Costarica],
    group: group.E.name,
  },
  {
    date: new Date('2018-06-23 00:00:00'),
    nations: [group.D.nations.Nigeria, group.D.nations.Iceland],
    group: group.D.name,
  },
  {
    date: new Date('2018-06-23 03:00:00'),
    nations: [group.E.nations.Seriba, group.E.nations.Switzerland],
    group: group.E.name,
  },
  {
    date: new Date('2018-06-23 21:00:00'),
    nations: [group.G.nations.Belguim, group.G.nations.Tunisia],
    group: group.G.name,
  },
  {
    date: new Date('2018-06-24 00:00:00'),
    nations: [group.F.nations.Korea, group.F.nations.Mexico],
    group: group.F.name,
  },
  {
    date: new Date('2018-06-24 03:00:00'),
    nations: [group.F.nations.Germany, group.F.nations.Sweden],
    group: group.F.name,
  },
  {
    date: new Date('2018-06-24 21:00:00'),
    nations: [group.G.nations.England, group.G.nations.Panama],
    group: group.G.name,
  },
  {
    date: new Date('2018-06-25 00:00:00'),
    nations: [group.H.nations.Japan, group.H.nations.Senegal],
    group: group.H.name,
  },
  {
    date: new Date('2018-06-25 03:00:00'),
    nations: [group.H.nations.Poland, group.H.nations.Colombia],
    group: group.H.name,
  },
  {
    date: new Date('2018-06-25 23:00:00'),
    nations: [group.A.nations.Uruguay, group.A.nations.Russia],
    group: group.A.name,
  },
  {
    date: new Date('2018-06-25 23:00:00'),
    nations: [group.A.nations.SaudiArabia, group.A.nations.Egypt],
    group: group.A.name,
  },
  {
    date: new Date('2018-06-26 03:00:00'),
    nations: [group.B.nations.Iran, group.B.nations.Portugal],
    group: group.B.name,
  },
  {
    date: new Date('2018-06-26 03:00:00'),
    nations: [group.B.nations.Spain, group.B.nations.Morocco],
    group: group.B.name,
  },
  {
    date: new Date('2018-06-26 23:00:00'),
    nations: [group.C.nations.Denmark, group.C.nations.France],
    group: group.C.name,
  },
  {
    date: new Date('2018-06-26 23:00:00'),
    nations: [group.C.nations.Australia, group.C.nations.Peru],
    group: group.C.name,
  },
  {
    date: new Date('2018-06-27 03:00:00'),
    nations: [group.D.nations.Nigeria, group.D.nations.Argentina],
    group: group.D.name,
  },
  {
    date: new Date('2018-06-27 03:00:00'),
    nations: [group.D.nations.Iceland, group.D.nations.Croatia],
    group: group.D.name,
  },
  {
    date: new Date('2018-06-27 23:00:00'),
    nations: [group.F.nations.Korea, group.F.nations.Germany],
    group: group.F.name,
  },
  {
    date: new Date('2018-06-27 23:00:00'),
    nations: [group.F.nations.Mexico, group.F.nations.Sweden],
    group: group.F.name,
  },
  {
    date: new Date('2018-06-28 03:00:00'),
    nations: [group.E.nations.Seriba, group.E.nations.Brazil],
    group: group.E.name,
  },
  {
    date: new Date('2018-06-28 03:00:00'),
    nations: [group.E.nations.Switzerland, group.E.nations.Costarica],
    group: group.E.name,
  },
  {
    date: new Date('2018-06-28 23:00:00'),
    nations: [group.H.nations.Japan, group.H.nations.Poland],
    group: group.H.name,
  },
  {
    date: new Date('2018-06-28 23:00:00'),
    nations: [group.H.nations.Senegal, group.H.nations.Colombia],
    group: group.H.name,
  },
  {
    date: new Date('2018-06-29 03:00:00'),
    nations: [group.G.nations.England, group.G.nations.Belguim],
    group: group.G.name,
  },
  {
    date: new Date('2018-06-29 03:00:00'),
    nations: [group.G.nations.Panama, group.G.nations.Tunisia],
    group: group.G.name,
  }
];