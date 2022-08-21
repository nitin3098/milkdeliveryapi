
const express = require("express");
const router = new express.Router();


const milkorder = require("../model/milkdelivery");






//POST: To place an order.


router.post("/order",async(req,res)=>{

    try{
            const order = new milkorder(req.body);
        
           
           const orderdata = await order.save();
           res.status(201).send(orderdata);
    }
    catch(error){
         res.status(400).send(error);

    }
});



//To get all orders for a particular date.

router.get("/order/:orderedAt",async(req,res)=>{
   

    try{
            const orders = req.params.orderedAt;

        
            const allorders = await milkorder.find( {orders: {
                $gte: new Date(new Date().setHours(00, 00, 00)),
                $lt: new Date(new Date().setHours(23, 59, 59)),
              }});
            console.log(orders);
            if(!allorders){
                res.status(500);
            }
         
            res.send(allorders);
    }
    catch(error){
         res.status(400).send(error);

    }
})

//PUT: To Edit an order.

router.put("/order/:id",async(req,res)=>{
   
            try{
                    const _id = req.params.id;
                
                    const updateorder = await milkorder.findOneAndUpdate(_id,{
                            $set:req.body
                    });
                   
                 
                   res.status(201).send(updateorder);
            }
            catch(error){
                 res.status(500).send(error);
        
            }
        })



//DELETE: To Delete an order.

router.delete("/order/:id",async(req,res)=>{
   
    try{
            const _id = req.params.id;
        
            const deleteorder = await milkorder.findByIdAndDelete(_id);
         
           res.status(201).send(deleteorder);
    }
    catch(error){
         res.status(500).send(error);

    }
})


module.exports = router;