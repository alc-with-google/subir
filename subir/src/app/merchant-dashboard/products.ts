import { ProductI } from './product-i'

export class Products {

  constructor(
    public id: number,
    public product: string,
    public price: number,
    public loyaltypercent: number,
    public seller?: string
  ) {  }
}

// { id: 11, product: 'LG TV', price: 85000, loyaltypercent: .3,seller: 'SPAR' },
