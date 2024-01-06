// user-detail.model.ts
export interface UserDetail {
    userId: string;
    firstName: string;
    userRole:string;
    lastName: string;
    email: string;
    phoneNumber?: string; // Optional property
    // ... other personal details
  
    addresses?: Address[];
    orders?: Order[];
    cart?: CartItem[];
  }
  
  export interface Address {
    addressId: string;
    street: string;
    city: string;
    state: string;
    zipCode: string;
  }
  
  export interface Order {
    orderId: string;
    orderDate: string;
    orderStatus: string;
    products: OrderProduct[];
    totalAmount: number;
  }
  
  export interface OrderProduct {
    productId: number;
    productName: string;
    quantity: number;
    price: number;
  }
  
  export interface CartItem {
    productId: number;
    productName: string;
    quantity: number;
    price: number;
  }
  