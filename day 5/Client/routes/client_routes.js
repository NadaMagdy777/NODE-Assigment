const ClientsController = require('../controllers/clients_controller')

module.exports = (app)=>{

    app.get('/api/clients', ClientsController.all)

    app.post('/api/clients', ClientsController.create_client)

    app.put('/api/clients/:id', ClientsController.edit_client)
    
    app.delete('/api/clients/:id',  ClientsController.delete_client)
  
    app.get('/api/clients/:id', ClientsController.client_details)
}
