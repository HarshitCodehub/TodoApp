// access the schema or model for dataa  operation
import todo from "../models/todo.js";
export const addTodo = async (req,res) => {
    try {
        await todo.create(req.body)
        res.status (201).json({message:"task created"})
    } catch (error) {
        console.error("error",error)
        res.status(400).json({message: error.message})
    }
}
// to fetch all task
export const getAllTask = async(req,res)=>{
    const tasks = await todo.find()
    res.status(200).json(tasks);

}

// to delete a task by id
export const deleteTask = async (req,res)=>{
    try {
        const{id}=req.params
        const deleteTasks = await todo.findByIdAndDelete(id);
        res.status(200).json(deleteTasks)
    } catch (error) {
        console.error(error)
        res.status(400).json({
            message:error.message
        } )   
    }
}
// create function for update task by id
export const updateTask = async (req,res)=>{
    try {
        const{id} = req.params
        const updateTask = await todo.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).json(updateTask)    
    } catch (error) {
        console.error(error)
        res.status(400).json({
            message:error.message
        }) 
    }
}
