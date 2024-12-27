export interface Product {
    id: string
    name: string
    subtitle: string
    price: number
    description: string
    rating: number
    idealFor: string[]
    formulaFacts: string[]
    image:StaticImageData
    skinType: string
    variant?:string
  }
  
  export interface ProductTypes {
    img: StaticImageData;
    title: string;
    subTitle: string;
    prize: number;
    desc: string;
  }

  export interface UserProfile {
    name: string
    email: string
    phone: string
    address: {
      street: string
      city: string
      postalCode: string
    }
  }
  