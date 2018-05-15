import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appCalendarioPtBr]'
})
export class CalendarioDirective {

  @HostBinding('locale') pt_BR: any;
  @HostBinding('dateFormat') formatoData: string;

  constructor() {
    this.formatoData = 'dd/mm/yy';
    this.pt_BR = {
      firstDayOfWeek: 0,
      dayNames: [ 'Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado' ],
      dayNamesShort: [ 'dom', 'seg', 'ter', 'qua', 'qui', 'sex' , 'sáb' ],
      dayNamesMin: [ 'D', 'S', 'T', 'Q', 'Q', 'S', 'S' ],
      monthNames: [ 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
                    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      monthNamesShort: [ 'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
                          'Jul', 'Ago' , 'Set', 'Out', 'Nov', 'Dez' ]
    };
  }

}
