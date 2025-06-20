'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   const usersData = require('../Data/users.json')
   usersData.map((el)=> {
    delete el.id
    el.createdAt = new Date()
    el.updatedAt = new Date ()
   })
   await queryInterface.bulkInsert("Users", usersData)
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {
      truncate: true,
      restartIdentity: true // make id start from 1 again
    });
  }
};
