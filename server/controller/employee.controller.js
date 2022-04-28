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
        const {empName, contactNo, role, password, email,  education} = req.body;
        console.log(req.body);
        const passwordHash = await bcrypt.hash(password,12);
        console.log(passwordHash.length);
        const newEmp = await db.query(`INSERT INTO employee ( 
                email, passwordHash, empName, contactNo, role, education
            ) 
            VALUES($1, $2, $3, $4, $5, $6) 
            RETURNING *`, 
        [email, passwordHash, empName, contactNo, role, education]);
        res.json(newEmp.rows[0]);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

exports.updateEmployee = async (req, res) => {
    try {
        const {empName, contactNo, email, education} = req.body;
        const {id} = req.params;
        const result = await db.query(`UPDATE employee SET
                empName = $1,
                contactNo = $2,
                email = $3,
                education = $4
            WHERE empId = $5
            RETURNING *
        `,
         [empName, contactNo, email, education, id])
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
        const {email, password} = req.body;
        console.log(req.body);
        const result = await db.query('SELECT empId, passwordHash, role FROM employee WHERE email=$1', [email]);
        if (!result.rows.length) return res.status(200).json({ success: false, message: 'Email does not exist' });
        const {passwordhash, empid, role} = result.rows[0];
        const isPasswordCorrect = await bcrypt.compare(password, passwordhash);
         if (!isPasswordCorrect) return res.status(200).json({ success: false });
        res.status(200).send({success: true, empId: empid, role: role});
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}