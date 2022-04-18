const db = require('../db/index')

exports.getSells = async (req, res) => {
    try {
        const results = await db.query("SELECT * FROM sell");
        res.json(results.rows);
    } catch (err) {
        res.status(500).json({message: err.message});
    }   
}

exports.getSell = async (req, res) => {
    try {
        const {id1,id2} = req.params;
         const result = await db.query(`SELECT * FROM sell WHERE ticketId = ${id1} AND employeeId = ${id2}`);
        res.json(result.rows[0]);
    } catch (err) {
         res.status(500).json({message: err.message});
    }
}

exports.addSell = async (req, res) => {
    try {
        const {id1,id2} = req.body;
        const newEmp = await db.query(`INSERT INTO sell (
                
            ) 
            VALUES($1,$2) 
            RETURNING *`, 
        [id1,id2]);
        res.json(newEmp.rows[0]);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}



exports.deleteMovie = async (req, res) => {
    try {
        const {id1,id2} = req.params;
        const result = await db.query('DELETE FROM sell WHERE ticketId=$1 AND employeeId=$2 RETURNING *', [id1,id2]);
        res.json({message: `Deleted sell with ticketId ${id1} and employeeId ${id2}`, deletedRow: result.rows[0]});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}