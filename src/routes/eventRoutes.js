const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

// Middleware para logar as requisições
router.use((req, res, next) => {
    console.log(`Método: ${req.method}, URL: ${req.originalUrl}`);
    next();
});

// Roteadores de eventos
router.get('/get', eventController.getAllEvents);                  // Obter todos os eventos
router.get('/get/:id', eventController.getEventById);   

router.get('/recent', eventController.getRecentEvents);// Obter evento por ID

router.get('/paid', eventController.getPaidEvents);                 // Obter todos os eventos pagos
router.get('/free', eventController.getFreeEvents);                 // Obter todos os eventos gratuitos

router.get('/get/type/:eventType', eventController.getEventsByType); // Obter eventos pelo tipo

router.get('/paid/desc', eventController.getEventsByPriceDesc);     // Obter eventos ordenados pelo maior valor
router.get('/paid/asc', eventController.getEventsByPriceAsc);       // Obter eventos ordenados pelo menor valor

router.get('/date/asc', eventController.getEventsByDateAsc);        // Listar eventos por data (mais próximos)
router.get('/date/desc', eventController.getEventsByDateDesc);      // Listar eventos por data (mais distantes)

router.post('/post', eventController.createEvent);                   // Criar novo evento

router.put('/put/:id', eventController.updateEvent);                 // Atualizar evento por ID

router.delete('/delete/:id', eventController.deleteEvent);           // Deletar evento por ID
router.delete('/deleteAll', eventController.deleteAllEvents);        // Deletar tudo

module.exports = router;  
