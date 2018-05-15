import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent {
  pessoas = [
    {nome: 'José da Silva', cidade: 'Aracati', estado: 'CE', ativo: true},
    {nome: 'Maria Nogueira Silva', cidade: 'Cascavel', estado: 'CE', ativo: false},
    {nome: 'Juvenal Gondim', cidade: 'Fortaleza', estado: 'CE', ativo: false},
    {nome: 'Airton Soares', cidade: 'Natal', estado: 'RN', ativo: false},
    {nome: 'Maicon Albuquerque', cidade: 'Fortaleza', estado: 'CE', ativo: true},
    {nome: 'Priscila Moreno', cidade: 'Cascavel', estado: 'CE', ativo: true},
    {nome: 'Amanda Feitosa', cidade: 'Fortaleza', estado: 'CE', ativo: false},
    {nome: 'Antonio Justino', cidade: 'Cascavel', estado: 'CE', ativo: true},
    {nome: 'Jorje Cardoso', cidade: 'Mossoro', estado: 'RN', ativo: true},
    {nome: 'Cicero Duarte', cidade: 'Aracati', estado: 'CE', ativo: true},
    {nome: 'Cosmo Fernandes', cidade: 'Fortaleza', estado: 'CE', ativo: false},
    {nome: 'Maria Dolores', cidade: 'Beberibe', estado: 'CE', ativo: true}
  ];
}
