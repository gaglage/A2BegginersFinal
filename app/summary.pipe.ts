import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'summary'
})

export class SumamryPipe implements PipeTransform {
    transform(value: string, args: any[]): any { 
         
        var limit = (args && args[0]) ? parseInt(args[0]) : 50;
        if (value){
            return value.substring(0, limit)+  '...';
        }
    }
}