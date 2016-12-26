import {Pipe , PipeTransform} from '@angular/core';

@Pipe({ name: 'priceDiscount' })
export class PriceDiscount implements PipeTransform{
    transform(value: number, discount?: number) {
        if (discount) {
            return value - discount;
        }
        return value - 1;
    }
}