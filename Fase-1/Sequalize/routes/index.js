const Controller = require('../contollers/controllers')

// const express = require('express')
const  router = require('express').Router()

router.get('/', Controller.home)
router.get('/users', Controller.getUsers)
router.get('/users/form', Controller.showAddForm)
router.post('/users/add', Controller.addUser)
router.get('/users/:id/form', Controller.showUpdateUserForm)
router.post('/users/:id/update', Controller.updateUser)
router.post('/users/:id/delete', Controller.deleteUserById)

module.exports = router
