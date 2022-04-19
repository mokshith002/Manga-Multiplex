const db = require('../db/index')

exports.getHalls = async (req, res) => {
    try {
        const results = await db.query("SELECT * FROM hall");
        res.json(results.rows);
    } catch (err) {
        res.status(500).json({message: err.message});
    }   
}

exports.getHall = async (req, res) => {
    try {
        const {hallId, theaterId} = req.query;
         const result = await db.query(`SELECT * FROM hall WHERE hallNo = ${hallId} AND theaterId=${theaterId}`);
        res.json(result.rows);
    } catch (err) {
         res.status(500).json({message: err.message});
    }
}

exports.getHallSeats = async (req, res) => {
    try {
        const {hallId, theaterId} = req.params;
         const result = await db.query(`SELECT seatNo, isBooked FROM hall WHERE hallNo = ${hallId} AND theaterId=${theaterId}`);
        res.json(result.rows);
    } catch (err) {
         res.status(500).json({message: err.message});
    }
}

exports.addHall = async (req, res) => {
    try {
        const {hallId, theaterId, seatNo, isBooked} = req.body;
        const newEmp = await db.query(`INSERT INTO hall 
            VALUES($1, $2, $3, $4) 
            RETURNING *`, 
        [hallId, theaterId, seatNo, isBooked]);
        res.json(newEmp.rows[0]);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

exports.updateHall = async (req, res) => {
    try {
        const {theaterId, seatNo, isBooked} = req.body;
        const {id} = req.params;
        const result = await db.query(`UPDATE hall SET
                theaterId = $1,
                seatNo = $2,
                isBooked  = $3
            WHERE hallNo = $4
            RETURNING *
        `,
         [theaterId, seatNo, isBooked, id])
         res.json({message: `Hall with id ${id} is succesfully updated`, updatedRow: result.rows[0]});
    } catch (err) {
         res.status(500).json({message: err.message});
    }
}

exports.deleteHall = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await db.query('DELETE FROM hall WHERE hallNo=$1 RETURNING *', [id]);
        res.json({message: `Deleted hall with id ${id}`, deletedRow: result.rows[0]});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}