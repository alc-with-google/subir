import { ProductI } from './product-i'

export class Products {

  constructor(

    public product: string,
    public price: number,
    public loyaltypercent: number,
    public seller?: string,
    public id?: number
  ) {  }
}

// { id: 11, product: 'LG TV', price: 85000, loyaltypercent: .3,seller: 'SPAR' },
