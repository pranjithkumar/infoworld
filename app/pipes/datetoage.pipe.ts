import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'dateToAge' })
export class DateToAgePipe implements PipeTransform {
    transform(value: string) {
        if (value) {
            var today = new Date();
            var birthDate = new Date(value);
            var age = today.getFullYear() - birthDate.getFullYear();
            var m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            return age;
        }
        return;
    }
}