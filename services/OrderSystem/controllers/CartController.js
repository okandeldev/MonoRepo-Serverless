require('custom-env').env(); 

export class CartController {
  constructor({ cartService}) { 
    this.cartService = cartService; 
  }
  async getPhamarcyUserCart(req, res) { 
    const query = req.query;
    const pharmacyUserId = query?.pharmacyUserId; 
    console.log('pharmacyUserId', pharmacyUserId);
    const cart = await  this.cartService.getPhamarcyUserCart(pharmacyUserId);  
    res.send({
      statusCode: 200,
      body: (cart) ? cart.toJSON() : null,
    })
  }
}