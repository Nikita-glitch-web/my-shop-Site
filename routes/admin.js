const path = require("path");

const express = require("express");

const adminController = require("../controllers/admin");

const router = express.Router();

// /admin/products => GET
router.get("/", adminController.getProducts); // spisok

// /admin/add-product => GET
router.get("/add-product", adminController.getAddProduct); //forma

// /admin/add-product => POST
router.post("/add-product", adminController.postAddProduct); //прийом данних з форми

router.get("/edit-product/:productId", adminController.getEditProduct);

router.post("/edit-product", adminController.postEditProduct);

router.post("/delete-product", adminController.postDeleteProduct);

router.get("/health-check", adminController.healthCheck);

module.exports = router;
