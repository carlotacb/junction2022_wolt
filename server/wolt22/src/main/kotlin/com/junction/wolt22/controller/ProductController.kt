package com.junction.wolt22.controller

import com.junction.wolt22.beans.ProductDTO
import com.junction.wolt22.service.CycleService
import com.junction.wolt22.service.ProductService
import com.junction.wolt22.service.UserService
import org.springframework.http.HttpEntity
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping(path = ["/product"])
class ProductController (
    private val productService: ProductService,
    private val userService: UserService,
    private val cycleService: CycleService
    ) {

    @PostMapping()
    fun createProduct(@RequestParam("apiKey") apiKey: String, @RequestBody productDTO: ProductDTO) : ResponseEntity<Any> {
        val user = userService.getUser(apiKey)
        try {
            val newProduct = productService.createProduct(user, productDTO)
            val newCycle = cycleService.createNewCycle(newProduct)
            if (newCycle) return ResponseEntity(HttpStatus.CREATED)
            else return ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR)
        } catch (e  : Exception) {
            e.printStackTrace()
            return ResponseEntity(HttpStatus.BAD_REQUEST)
        }

    }

    @GetMapping("/{idProduct}")
    fun getProductDetail(@PathVariable("idProduct") idProduct : Int) : ResponseEntity<ProductDTO>{
        try{
            val product = productService.getProductDetail(idProduct)
            return ResponseEntity.ok(product)
        } catch (e : Exception){
            return ResponseEntity(HttpStatus.BAD_REQUEST)
        }
    }

    @PutMapping("/{idProduct}")
    fun modifyProduct(@PathVariable("idProduct") idProduct: Int, @RequestBody product : ProductDTO) : ResponseEntity<Any>{
        try {
            val productModificat = productService.modifyProduct(idProduct, product)
            return ResponseEntity.ok(productModificat)
        } catch (e : Exception) {
            return ResponseEntity.badRequest().body(e.message)
        }
    }

    // display all products that are not owned by the user that requests it
    @GetMapping("/all/{userId}")
    fun getAllProducts(@PathVariable("userId") userId: Int) : ResponseEntity<ArrayList<ProductDTO>>{
        try {
            val allproducts = productService.getAllProductOf(userId)
            return ResponseEntity.ok(allproducts)
        } catch (e : Exception) {
            return ResponseEntity(HttpStatus.BAD_REQUEST)
        }
    }
}