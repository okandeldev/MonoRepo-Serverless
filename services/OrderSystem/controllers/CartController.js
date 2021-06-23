require('custom-env').env(); 

export class CartController {
  constructor({ cartService}) { 
    this.cartService = cartService; 
  }
  async getPhamarcyUserCart(req, res) { 
    const query = req.query;
    const pharmacyUserId = query?.pharmacyUserId;  
    const cart = await  this.cartService.getPhamarcyUserCart(pharmacyUserId);  
    res.send({
      statusCode: 200,
      data: (cart) ? cart.toJSON() : null,
    })
  }

  async updateCart(req, res) {
    // const data = req.apiGateway.event.body;
    const data = req.body;
    const cart = await this.cartService.updateCart(data);
    if (cart) {
      res.send({
        statusCode: 200,
        body: cart.toJSON()
      })
    } else if (cart == null) {
      res.send({
        statusCode: 404,
        body: {
          error: "Cart not found"
        },
      })
    } else {
      res.send({
        statusCode: 500,
        body: {
          error: "Server error"
        },
      })
    }
  }

  async checkout(req, res) {
    const data = req.body;
    const result = await this.cartService.checkout(data);
    if (result) {
      res.send({
        statusCode: 200,
        body: {
          message: "Done"
        }
      })
    } else if (result == null) {
      res.send({
        statusCode: 404,
        body: {
          error: "No items in the cart"
        },
      })
    } else {
      res.send({
        statusCode: 500,
        body: {
          error: "Server error"
        },
      })
    }
  }

}