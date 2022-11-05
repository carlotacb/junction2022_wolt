package com.junction.wolt22.controller

import com.junction.wolt22.beans.CycleDTO
import com.junction.wolt22.service.CycleService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping(path=["/cycles"])
class CycleController(
        private val cycleService: CycleService
) {

    @GetMapping("/{userId}")
    fun getUserCycles(@PathVariable("userId") userId : Int,) : ResponseEntity<Any>{
        try {
            var cycles = cycleService.getUserCycles(userId)
            return ResponseEntity.ok(cycles)
        } catch (e : Exception) {
            return ResponseEntity(HttpStatus.BAD_REQUEST)
        }
    }

    @PostMapping("/{idCycle}")
    fun claimCycle(@PathVariable("idCycle") idCycle : Int, @RequestBody cycleDTO: CycleDTO) : ResponseEntity<Any>{
        try {
            //TODO val created = cycleService.claimCycle(idCycle, cycleDTO)
            //TODO if (created) return ResponseEntity(HttpStatus.CREATED)
            return ResponseEntity(HttpStatus.OK)
        } catch (e : Exception) {
            return ResponseEntity(HttpStatus.BAD_REQUEST)
        }
    }

    //TODO(" GET OUTGOING")
    //TODO(" GET INCOMING")
    //TODO(" GET TRASH")
}