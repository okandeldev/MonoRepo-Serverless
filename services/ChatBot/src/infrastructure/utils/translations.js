var Localize = require('localize');

export let localization = new Localize({
    //================
    //====Pharmacy====
    //================ 
    "P_chatbot_notRegistered": {
        "en-us": "Thanks for contacting Pharma company, \n You can contact us with $[1]",
        "ar": ""
    },
    "P_chatbot_hasOrderNoDraft": {
        "en-us": "Welcome to $[1] pharmacy, \n You can track your order from this link \n $[2] \n You can create order from the website $[3] \n You can contact us with $[4] \n Or enter the product name",
        "ar": ""
    },
    "P_chatbot_noOrderNoDraft": {
        "en-us": "Welcome to $[1] pharmacy, \n You can create order from the website $[2] \n You can contact us with $[3] \n Or enter the product name",
        "ar": ""
    },
    "P_chatbot_verifyProductName_InvalidName": {
        "en-us": "Product not found, Please try again",
        "ar": ""
    },
    "P_chatbot_verifyProductName_NameWithManyProducts": {
        "en-us": "Do you need \n $[1]",
        "ar": ""
    },
    "P_chatbot_verifyProductName_ValidNameButNotExistsInOrder": {
        "en-us": "How many boxes Panadol extra you need? \n Enter 0 if you need to change the product",
        "ar": ""
    },
    "P_chatbot_verifyProductName_ValidNameAndExistsInOrder": {
        "en-us": "There are $[1] boxes in the order, How many boxes do you need? \n To delete product from order enter 0",
        "ar": ""
    },
    "P_chatbot_verifyNumber_InvalidNumber": {
        "en-us": "Invalid number of boxes please try again \n To change the product enter 0",
        "ar": ""
    },
    "P_chatbot_enterNewProductName": {
        "en-us": "Enter the new product name, Or you don't need to add new product?",
        "ar": ""
    }, 
    "P_chatbot_enterNotes": {
        "en-us": "Do you have any notes?",
        "ar": ""
    },
    "P_chatbot_reviewOrder": {
        "en-us": "Your order contains: \n $[1] \n Do you want to confirm the order 1- Confirm \n 2- Edit or add to order",
        "ar": ""
    },
    "P_chatbot_editProducts": {
        "en-us": "Enter the product name to edit or add new, you don't need to add new?",
        "ar": ""
    },
    "P_chatbot_confirmOrder": {
        "en-us": "Your order has been sent to the suppliers to make the best offers for at maximum 6 hours \n You can track your orders form our website $[1]",
        "ar": ""
    },
    "P_chatbot_noOrderButHasDraft": {
        "en-us": "Welcome $[1] , \n You can contact us with $[2] \n You can complete order from the website $[3] \n You have added these products for your order: \n $[4] \n Do you need 1- Confirm order 2- Edit or add in order",
        "ar": ""
    },
    "P_chatbot_sendSupplierOfferToClient": {
        "en-us": "Welcome $[1] , The international company has sent an offer to confirm your order with code $[1] with total coast $[2] LE \n To review the offer and confirm it from the website \n $[3]",
        "ar": ""
    },
    "P_chatbot_sendRatingOrderRequest": {
        "en-us": "Welcome $[1] , \n Please rate your communication with the international company order with code $[1] from the website \n $[2]",
        "ar": ""
    },

    //================
    //====Supplier====
    //================ 
    "S_chatbot_notRegistered": {
        "en-us": "Thanks for contacting Pharma company, \n You can contact us with $[1]",
        "ar": ""
    },
    "S_chatbot_sendRequestOfOffer": {
        "en-us": "Welcome $[1] company \n You can contact us on our website $[2] \n The $[3] pharmacy is near to you asking for offer from your company for delivering order with $[4] products, Make an offer from here $[5]",
        "ar": ""
    },
    "S_chatbot_sendApprovingOffer": {
        "en-us": "Welcome $[1] company \n You can contact us on our website $[2] \n The $[3] pharmacy is approved to your offer for order with code $[4] to see the offer visit $[5], Will you deliver the order in time?",
        "ar": ""
    },
    "S_chatbot_sendUpdatingStatusRequest": {
        "en-us": "Welcome $[1] company \n You can contact us on our website $[2] \n Please update the status of order with the $[3] pharmacy with code $[4] to see the the offer and update the status from here $[5]",
        "ar": ""
    },
})