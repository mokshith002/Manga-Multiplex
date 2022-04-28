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
        const {hallId, showId} = req.query;
         const result = await db.query(`SELECT * FROM hall WHERE hallNo = ${hallId} AND showId=${showId}`);
        res.json(result.rows);
    } catch (err) {
         res.status(500).json({message: err.message});
    }
}

exports.getHallSeats = async (req, res) => {
    
    try {
        const {showId} = req.params;
        const result = await db.query(`SELECT seatNo, isBooked FROM hall WHERE showId=${showId} ORDER BY seatno`);
        res.json(result.rows);
    } catch (err) {
         res.status(500).json({message: err.message});
    }
}

exports.addHall = async (req, res) => {
    try {
        const {hallId, showId, seatNo, isBooked} = req.body;
        const newEmp = await db.query(`INSERT INTO hall 
            VALUES('${hallId}', '${showId}', '${seatNo}', '${isBooked}') 
            RETURNING *`);
        res.json(newEmp.rows[0]);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

exports.updateHall = async (req, res) => {
    try {
        const {showId, seatNo, isBooked} = req.body;
        const {id} = req.params;
        const result = await db.query(`UPDATE hall SET
                showId = $1,
                seatNo = $2,
                isBooked  = $3
            WHERE hallNo = $4
            RETURNING *
        `,
         [showId, seatNo, isBooked, id])
         res.json({message: `Hall with id ${id} is succesfully updated`, updatedRow: result.rows[0]});
    } catch (err) {
         res.status(500).json({message: err.message});
    }
}

exports.bookHallSeats = async (req, res) => {
    try {
        const {showId, seats} = req.body;
        const len = seats.length;
        const seatArr = seats.map((st, index) => {
            if(index == len - 1)
                return `'${st}'`;
            else
                return `'${st}' `
        })
        const q = `UPDATE hall SET isbooked=true WHERE seatno IN (${seatArr}) AND showId=${showId} RETURNING *`;
        const result = await db.query(q);
        res.json({message: 'Seats are booked!', updatedSeats: result.rows});
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