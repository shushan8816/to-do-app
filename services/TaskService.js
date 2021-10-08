const Task = require("../model/task.js");

module.exports = class TaskService {

    static async getAllTasks() {
        try {
            return await Task.find();
        } catch (error) {
            console.log("Could not fetch tasks ${error}`")
        }
    }

    static async addTask(data) {
        try {
            const newTask = {
                text: data.text
            };
            return await new Task(newTask).save();
        } catch (error) {
            console.log(error);
        }
    }

    static async getTaskById(Id) {
        try {
            return await Task.findById({id: Id});
        } catch (error) {
            console.log(`Task not found. ${error}`)
        }
    }

    static async updateTask(Id, task) {
        try {
            return await Task.findByIdAndUpdate(Id, task,  {new: true});
        } catch (error) {
            console.log(`Could not update task ${error}`);

        }
    }

    static async deleteTask(Id) {
        try {
            return await Task.findByIdAndDelete(Id);
        } catch (error) {
            console.log(`Could not delete task ${error}`);
        }
    }
}