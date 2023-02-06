"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var AlunosDaClasse = /*#__PURE__*/_createClass(function AlunosDaClasse(nomeDoAluno, notaDoAluno) {
  _classCallCheck(this, AlunosDaClasse);
  this.nome = nomeDoAluno;
  this.nota = notaDoAluno;
});
var aluno1 = new AlunosDaClasse('João', 4);
var aluno2 = new AlunosDaClasse('Maria', 10);
var aluno3 = new AlunosDaClasse('Jade', 8);
var aluno4 = new AlunosDaClasse('Erika', 6);
var aluno5 = new AlunosDaClasse('Laercio', 3);
var alunosTotal = [aluno1, aluno2, aluno3, aluno4, aluno5];
var alunosNotaAzul = alunosTotal.filter(function (aluno) {
  return aluno.nota >= 6;
});
console.log(alunosNotaAzul);