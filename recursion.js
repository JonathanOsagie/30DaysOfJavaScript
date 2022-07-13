// # Recursion Exercise
 
// ## 1. Generiere ein Array von `Object`s:
 
// Die Objects müssen folgendem Schema entsprechen:
// ```
// interface DataObject {
//   level: number;
//   value: number;
//   children: DataObject[];
// }
// ```
 
// Die `children`-Property enthält weitere Objects desselben Schemas, auf diese Weise ergibt sich ein hierarchischer "Baum" (i.e. ein mehrdimensionales Array) von Objects mit gleichen Properties
// Die Properties eines jeweiligen Objects müssen folgende Werte enthalten:
// `level`: Die hierarchische Stufe im "Baum", in der das Object sich befindet. Das oberste Level beginnt bei 0, das nächste darunter hat 1, und so weiter.
// `value`: Eine zufällige Dezimalzahl. Sie darf allerdings nicht niedriger sein als das Level.
// `children`: Ein Array mit weiteren Instanzen desselben Interface.
 
// Erstelle eine *Self-Invoking function*, die ein mehrdimensionales Array dieser Objects generiert und in eine Variable `response` speichert.
// Die Funktion muss Parameter unterstützen, um folgende Faktoren bei der Generierung des Arrays beeinflussen zu können:
// • Anzahl von Objects, die in jedes Level generiert werden (default-Wert = 2)
// • Maximale Anzahl von maxLevels (default-Wert = 4)
 
// Anm. zum besseren Verständnis und Vergleich; das generierte Array sollte folgendermaßen aussehen:
// (die drei Punkte sind *kein* Spread Operator, sondern sollen nur veranschaulichen dass an den jeweiligen Stellen mehrere Objekte folgen)
// ```
// const response = [
//   {
//     "level": 0,
//     "value": 0.6990147657488668,
//     "children": [
//       {
//         "level": 1,
//         "value": 1.3523616457985546,
//         "children": [
//           {
//             "level": 2,
//             "value": 2.548415469301279,
//             "children": [
//               {
//                 "level": 3,
//                 "value": 3.7471796763564553,
//                 "children": [
//                   {
//                     "level": 4,
//                     "value": 4.917528134655811,
//                     "children": []
//                   },
//                   ...
//                 ]
//               },
//               ...
//             ]
//           },
//           ...
//         ]
//       },
//       ...
//     ]
//   }
// ]
// ```
 
// ## 2. Berechne die Summe der values aller Objekte in ihrer Hierarchie
 
// ### 2.1 subTotal jedes Objects
// Füge jedem Object in dem mehrdimensionalen Array eine weitere Eigenschaft hinzu:
// ```
// interface DataObjectExtended extends DataObject {
//   subTotal: number;
// }
// ```
 
// Der jeweilige Wert für die subTotal-Eigenschaft errechnet sich aus der Summe von (eigene value) [plus] (values aller children und sub-children).
// Beispiel:
// ```
// [
//   {
//     level: 0,
//     value: 0.5,
//     children: [
//       {
//         level: 1,
//         value: 1.5,
//         children: [
//           {
//             level: 2,
//             value: 2.5,
//             children: [],
//             subTotal: 2.5 // die Summe der eigenen Value plus aller children: 2.5 + 0 = 2.5
//           },
//           subTotal: 4 // die Summe der eigenen Value plus aller children: 1.5 + 2.5 = 4
//         ]
//       }
//     ],
//     subTotal: 4.5 // die Summe der eigenen Value plus aller children: 0.5 + 1.5 + 2.5 = 4.5
//   }
// ]
// ```
 
// ### 2.2 total aller Objekte
// Ermittle die Summe aller Objekte im Array.
 
// ## 3. Verifiziere die Gesamtsumme
// Summiere die Values aller Objekte schon bei deren Generierung (Schritt 1) in einer Variable.
// Vergleiche diese dann mit der Summe aller Objects (Schritt 2.2) um sicherzugehen, dass der Wert stimmt.
 
 