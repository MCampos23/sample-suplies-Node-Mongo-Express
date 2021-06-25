var express = require('express');
var router = express.Router();
const mongoose = require('mongoose')
const {Sale} = require('../models/sale')

//Filter by satisfaction rate
router.get('/satisfaction/:num', async (req, res) => {
    const saleSatisfaction = await Sale.find({"customer.satisfaction": req.params.num}).select('customer')                                    
    res.send(saleSatisfaction)
})

//Filter by customer gender
router.get('/:gender', async (req, res) => {
    const customerGender = await Sale.find({"customer.gender": req.params.gender}).select('customer')                                             
    res.send(customerGender)
})
  
//Filter by customer age < 35
router.get('/age/young', async (req, res) => {
    const youngCustomers = await Sale.find({"customer.age": {$lt: 35}}).select('customer')                                             
    res.send(youngCustomers)
})

//Filter by customer age > 35 & < 65
router.get('/age/adult', async (req, res) => {
    const adultCustomers = await Sale.find({"customer.age": {$gt: 35}, "customer.age": {$lt: 65}}).select('customer')                                             
    res.send(adultCustomers)
})

//Filter by customer age > 65
router.get('/age/elder', async (req, res) => {
    const elderCustomers = await Sale.find({"customer.age": {$gt: 65}}).select('customer')                                             
    res.send(elderCustomers)
})
module.exports = router;
