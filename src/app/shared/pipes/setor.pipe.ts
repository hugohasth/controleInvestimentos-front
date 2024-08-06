import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'setor',
    standalone: true
})
export class SetorPipe implements PipeTransform {

  transform(value: string): string {
	  switch(value) {
		  case 'AÇÕES (BRASIL)': return 'trending_up';
		  case 'AÇÕES (USA)': return 'monitoring';
	  }
    return 'unknown_document';
  }

}
