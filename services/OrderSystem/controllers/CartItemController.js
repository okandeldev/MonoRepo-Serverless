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
        data: cart.toJSON()
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
    const id = req.body.id;
    const cartItem = await this.cartItemService.createCartItem(id);
    if (cartItem) {
      res.send({
        statusCode: 200,
        data: cart.toJSON()
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
}