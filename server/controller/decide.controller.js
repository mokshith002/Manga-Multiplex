const db = require('../db/index')

exports.getDecides = async (req, res) => {
    try {
        const results = await db.query("SELECT * FROM decide");
        res.json(results.rows);
    } catch (err) {
        res.status(500).json({message: err.message});
    }   
}

exports.getDecide = async (req, res) => {
    try {
        const {id1,id2} = req.params;
         const result = await db.query(`SELECT * FROM decide WHERE employeeId = ${id1} AND showId = ${id2}`);
        res.json(result.rows[0]);
    } catch (err) {
         res.status(500).json({message: err.message});
    }
}

exports.addDecide = async (req, res) => {
    try {
        const {id1,id2} = req.body;
        const newEmp = await db.query(`INSERT INTO decide (
                
            ) 
            VALUES($1,$2) 
            RETURNING *`, 
        [id1,id2]);
        res.json(newEmp.rows[0]);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}



exports.deleteDecide = async (req, res) => {
    try {
        const {id1,id2} = req.params;
        const result = await db.query('DELETE FROM decide WHERE employeeId=$1 AND showId=$2 RETURNING *', [id1,id2]);
        res.json({message: `Deleted decide with employeeId ${id1} and showId ${id2}`, deletedRow: result.rows[0]});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}