const { where } = require('sequelize')
const {Users} = require('../models')

class Controller {
    static async home (req, res) {
        try {
            res.render('Home')
        } catch (err) {
            res.send({error: err.message})
        }
    }

    static async getUsers(req, res) {
        try {
            const users = await Users.findAll({
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                },
                order: [
                    ['createdAt', 'DESC']
                ]
            })
            res.render('Users',{users})
        }catch (err) {
             res.send({error: err.message})
        }
    }

    static async showAddForm(req, res) {
        try {
            res.render('AddForm')
        } catch (err) {
            res.send({ error: err.message });
        }
    }

    static async addUser (req, res) {
        try {
            // const {firs_name, last_name, email, gender} = req.body
            await Users.create(req.body);
            res.redirect('/users')
            // res.send(req.body)
        } catch (err) {
            res.send({error: err.message})
        }
    }

    static async showUpdateUserForm(req, res) {
        try {
            const { id } = req.params;
            const user = await Users.findByPk(id)
            res.render('EditForm', {user})
        } catch (err) {
            res.send({ errrrr: err.message });
        }
    }

    static async updateUser (req, res) {
        try {
            const user = req.body
            const {id} = req.params
            await Users.update(user, {where: {id}})
            res.redirect('/users') 
            // res.send(user)
        }catch (err) {
            res.send({errorsss: err.message})
        }
    }

    static async deleteUserById(req, res) {
        try {
            const { id } = req.params;
            const deleted = await Users.destroy({ where: { id } });
            if (!deleted) {
                return res.status(404).send({ error: "User not found" });
            }
            res.redirect('/users')
        } catch (err) {
            res.send({ error: err.message });
        }
    }
}
module.exports = Controller