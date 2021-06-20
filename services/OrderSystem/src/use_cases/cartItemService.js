require('custom-env').env();

export class cartItemService {
  constructor({cartItemRepository, cartRepository}) {
    this.cartItemRepository = cartItemRepository;
    this.cartRepository = cartRepository;
  }

  async createCartItem(data) {
    let cart = await this.cartRepository.getPhamarcyUserCart(data.userId)
    if (!cart) {
      cart = await this.cartRepository.createCart(data.cart)
    }

    let cartItems = cart.CartItems;
    cartItems.forEach((item) => {
      if (item.productVarientId === data.cartItem.productVarientId) {
        //update cartItem
        return this.cartItemRepository.updateCartItem(item.id, data.cartItem)
      } else {
        //create cartItem
        return this.cartItemRepository.createCartItem(data.cartItem)
      }
    })
  }

  async deleteCartItem(id) {
    return this.cartItemRepository.deleteCartItem(id)
  }
}  