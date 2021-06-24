require('custom-env').env();

export class CartItemController {
  constructor({cartItemService}) {
    this.cartItemService = cartItemService;
  }

  async createCartItem(req, res) { 
    const data = req.body;
    const cartItem = await this.cartItemService.createCartItem(data);
    if (cartItem) {
      res.send({
        statusCode: 200,
        data: cartItem.toJSON() 
      })
    } else {
      res.send({
        statusCode: 500,
        data: {
          error: "Server error"
        },
      })
    }
  }

  async deleteCartItem(req, res) { 
    const {data, query} = req; 
    res.send({
      statusCode: 200,
      data:  data,
      query: query
    })
    // console.log('deleteCartItem');
    // const cartItem = await this.cartItemService.deleteCartItem(id);
    // if (cartItem) {
    //   res.send({
    //     statusCode: 200,
    //     data: {
    //       message: "Cart item deleted successfully"
    //     }
    //   })
    // } else if (cartItem == null) {
    //   res.send({
    //     statusCode: 404,
    //     data: {
    //       error: "Cart item not found"
    //     }})
    // } else {
    //   res.send({
    //     statusCode: 500,
    //     data: {
    //       error: "Server error"
    //     },
    //   })
    // }
  }
}