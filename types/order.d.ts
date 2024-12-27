export interface OrderItem {
    id: string
    orderDate: string
    deliveryDate: string
    product: {
      name: string
      variant: string
      imageUrl: StaticImageData
    }
    summary: {
      price: number
      discount: {
        percentage: number
        amount: number
      }
      delivery: number
      tax: number
      total: number
    }
    shipping: {
      street: string
      city: string
      postalCode: string
    }
  }
  
  