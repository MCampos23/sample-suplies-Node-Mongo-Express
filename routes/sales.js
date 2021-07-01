var express = require('express');
var router = express.Router();
const mongoose = require('mongoose')
const {Sale} = require('../models/sale')

//Filter each sale by id
router.get('/sale/:id', async (req, res) => {
    const sale = await Sale.findById(req.params.id)
                            .select('items')                       
      res.send(sale)
  })  
 
 //Filtered by store location
  router.get('/store/:location', async (req, res) => {
      const locationSales = await Sale.find({storeLocation: req.params.location})
                                       .select('storeLocation')
     res.send(locationSales)
  })

  // Filtered by purchase Method
  router.get('/:purchasemethod', async (req, res) => {
      const purchaseMethodSales = await Sale.find({purchaseMethod: req.params.purchasemethod})
                                            .select('purchaseMethod')
  
      
      res.send(purchaseMethodSales)
  })

  // All the sales & coupon used
  router.get('/', async (req, res) => {
    let filter = {}  
    if(req.query.couponused){
        filter = {couponUsed: req.query.couponused}
    }
    const salesList = await Sale.find(filter).select('-items')
    
    res.send(salesList)
  })
  

module.exports = router;
