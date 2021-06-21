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
}