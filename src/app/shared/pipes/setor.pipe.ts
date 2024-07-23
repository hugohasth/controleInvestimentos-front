import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'setor',
    standalone: true
})
export class SetorPipe implements PipeTransform {

  transform(value: string): string {
	  switch(value) {
		  case 'AÇÕES (BRASIL)': return 'public';
		  case 'AÇÕES (USA)': return 'reorder';
	  }
    return 'unknown_document';
  }

}
