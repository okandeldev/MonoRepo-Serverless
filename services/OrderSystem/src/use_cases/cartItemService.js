require('custom-env').env();

export class cartItemService {
  constructor({cartItemRepository, cartRepository}) {
    this.cartItemRepository = cartItemRepository;
    this.cartRepository = cartRepository;
  }

  async createCartItem(data) {
    
  console.log('0000000',data);
    let cart = await this.cartRepository.getPhamarcyUserCart(data.userId)
    if (!cart) {
      cart = await this.cartRepository.createCart({pharmacyUserId:data.userId})
    }
    data.cartItem.cartId = cart.id;

    let cartItems = cart.CartItems;
    if (cart.CartItems.length > 0) {
      let item_filtered = null
      cartItems.filter(async (item) => {
        if (item.productVariantId === data.cartItem.productVariantId) {
          item_filtered = item
        }
      })
      if (item_filtered && item_filtered.productVariantId === data.cartItem.productVariantId) { 
        //update cartItem
        return await this.cartItemRepository.updateCartItem(item_filtered.id, data.cartItem)
      } else {
        //create cartItem
        return await this.cartItemRepository.createCartItem(data.cartItem)
      }
    } else {
      //create cartItem
      return await this.cartItemRepository.createCartItem(data.cartItem)
    }
  }

  async deleteCartItem({id,cartId}) {
    return this.cartItemRepository.deleteCartItem({id,cartId})
  }
}  