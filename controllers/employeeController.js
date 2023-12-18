const employee = require("../models/employee");

const createEmployee = async function(req,res){

const {employeeId,name,city,salary} = req.body;
const data = employee.build({ employeeId: employeeId, name: name, city: city, salary: salary })
await data.save()
res.status(201).send({status:true,message:data});

}

const allEmployees = async (req,res) =>{
 try{
 const data = await employee.findAll();
 return res.status(200).send({status:false,message:data});
 }catch(error){
    console.log(error.message)
 }
}


module.exports = {createEmployee,allEmployees};