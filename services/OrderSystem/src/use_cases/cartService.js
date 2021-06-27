require('custom-env').env();

export class cartService {
  constructor({cartRepository, cartItemRepository, requestRepository}) {
    this.cartRepository = cartRepository;
    this.cartItemRepository = cartItemRepository;
    this.requestRepository = requestRepository;
  }

  //get PhamarcyUser Cart Items
  // Params  :  pharmacyUserId
  // returns :  cart & cart Items Object
  async getPhamarcyUserCart(pharmacyUserId) {
    const cart = await this.cartRepository.getPhamarcyUserCart(pharmacyUserId);
    return cart;
  }

  //checkout
  // returns :  request Object
  async checkout(data) {
    const cart = await this.cartRepository.getPhamarcyUserCart(data.pharmacyUserId);
    const cartItems = cart.CartItems;

    if (cartItems.length > 0) {
      // 1- Create MySQL Request
      const sqlRequestObj = {
        pharmacyUserId: data.pharmacyUserId,
        statusId: 1, // new
        total: 0,
        productsCount: cartItems.length
      }
      const mysqlRequest = await this.requestRepository.createMySQLRequest(sqlRequestObj)

      // 2- Create Mongo Request
      cartItems = cartItems.map(async (item) => {
        item.requestId = mysqlRequest.id
        // item.pharmacyNote = item.note
      })
      const mongoRequestObj = {
        pharmacyUserId: data.pharmacyUserId,
        PharmacyNote: data.note,
        requestItems: cartItems,
        status: [
          {
            name: "New",
            statusDate: Date.now()
          }
        ]
      }
      await this.requestRepository.createMongoRequest(mongoRequestObj)

      // 3- Empty Cart
      await this.cartItemRepository.deleteCartItem({cartId:item.cartId})      
      return "Done"

    } else {
      return null
    }

  }

  async updateCart(cartData) {
    return await this.cartRepository.updateCart(cartData)
  }

}  