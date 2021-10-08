const TaskService = require('../services/TaskService.js')

module.exports = class Task {

    static async addTask(req, res) {
        try {
            const newTask = await TaskService.addTask(req.body);
            res.json(newTask);
        } catch (error) {
            res.status(500).json({error: error})
        }
    };

    static async getAllTasks(req, res) {
        try {
            const tasks = await TaskService.getAllTasks()
            if (!tasks) {
                res.status(404).json("There are no tasks published yet!")
            }
            res.json(tasks);
        } catch (error) {
            res.status(500).json({error: error})
        }
    };

    static async getTaskById(req, res) {
        try {
            const id = req.params.id || {};
            const task = await TaskService.getTaskById(id);
            res.json(task);
        } catch (error) {
            res.status(500).json({error: error})
        }
    };

    static async updateTask(req, res) {
        try {
            const task = await TaskService.updateTask(req.params.id, req.body);
            res.json(task)
        } catch (error) {
            res.status(500).json({error: error})
        }
    };

    static async deleteTask(req, res) {
        try {
            const Id = req.params.id;
            const task = await TaskService.deleteTask(Id)
            res.json(task);
        } catch (error) {
            res.status(500).json({error: error})
        }
    };
}



    
    
    
    
    
    

