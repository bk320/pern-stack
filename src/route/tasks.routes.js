const { Router } = require('express');
const { getAllTasks, 
        getTask, 
        createTask, 
        deleteTask, 
        putTask 
        } = require('../controllers/tasks.controller')

const router = Router();

router.get('/tasks', getAllTasks)

router.get('/tasks/:id', getTask)      //id puede ser cualquier valor para comparar

router.post('/tasks', createTask)

router.delete('/tasks/:id', deleteTask)

router.put('/tasks/:id', putTask)

module.exports = router;