require('custom-env').env();   
export class UserController {
  constructor({ userService}) { 
    this.userService = userService; 
  }
  async getUsersByPhone(req, res) {  
    const query = req.query;
    const mobile = query?.mobile;
    const user = await this.userService.getUserByPhone(mobile)
    res.send({
      statusCode: 200, 
      user: user,
      req:req
    }) 
  }
} 