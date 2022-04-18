const db = require('../db/index')
const bcrypt = require('bcrypt')

exports.getEmployees = async (req, res) => {
    try {
        const results = await db.query("SELECT * FROM employee");
        res.json(results.rows);
    } catch (err) {
        res.status(500).json({message: err.message});
    }   
}

exports.getEmployee = async (req, res) => {
    try {
        const {id} = req.params;
         const result = await db.query(`SELECT * FROM employee WHERE empId = ${id}`);
        res.json(result.rows[0]);
    } catch (err) {
         res.status(500).json({message: err.message});
    }
}

exports.addEmployee = async (req, res) => {
    try {
        const {theaterId, empName, contactNo, role, education} = req.body;
        const newEmp = await db.query(`INSERT INTO employee (
                theaterId, 
                empName, 
                contactNo, 
                role, 
                education
            ) 
            VALUES($1, $2, $3, $4, $5) 
            RETURNING *`, 
        [theaterId, empName, contactNo, role, education]);
        res.json(newEmp.rows[0]);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

exports.updateEmployee = async (req, res) => {
    try {
        const {theaterId, empName, contactNo, role, education} = req.body;
        const {id} = req.params;
        const result = await db.query(`UPDATE employee SET
                theaterId = $1,
                empName = $2,
                contactNo = $3,
                role = $4,
                education = $5
            WHERE empId = $6
            RETURNING *
        `,
         [theaterId, empName, contactNo, role, education, id])
         res.json({message: `User with id ${id} is succesfully updated`, updatedRow: result.rows[0]});
    } catch (err) {
         res.status(500).json({message: err.message});
    }
}

exports.deleteEmployee = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await db.query('DELETE FROM employee WHERE empId=$1 RETURNING *', [id]);
        res.json({message: `Deleted employee with id ${id}`, deletedRow: result.rows[0]});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

exports.authenticateEmployee = async (req, res) => {
    try {
        const {email, password} = req.query;
        const result = await db.query('SELECT empId, passwordHash FROM employee WHERE email=$1', [email]);
        if (!result.rows.length) return res.status(200).json({ success: false });
        const {passwordHash, empId} = result.rows[0];
        const isPasswordCorrect = await bcrypt.compare(password, passwordHash);
         if (!isPasswordCorrect) return res.status(200).json({ success: false });
      res.status(200).send({success: true, empId: empId});
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}