const db = require('../db/index')

exports.getTickets = async (req, res) => {
    try {
        const results = await db.query("SELECT * FROM ticket");
        res.json(results.rows);
    } catch (err) {
        res.status(500).json({message: err.message});
    }   
}

exports.getTicket = async (req, res) => {
    try {
        const {id} = req.params;
         const result = await db.query(`SELECT * FROM ticket WHERE ticketId = ${id}`);
        res.json(result.rows[0]);
    } catch (err) {
         res.status(500).json({message: err.message});
    }
}

exports.addTicket = async (req, res) => {
    try {
        const {showId, hallNo, employeeId, seatNo, price} = req.body;
        const newEmp = await db.query(`INSERT INTO ticket (
            showId, 
            hallNo, 
            employeeId, 
            seatNo, 
            price
            ) 
            VALUES($1, $2, $3, $4, $5) 
            RETURNING *`, 
        [showId, hallNo, employeeId, seatNo, price]);
        res.json(newEmp.rows[0]);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

exports.updateTicket = async (req, res) => {
    try {
        const {showId, hallNo, employeeId, seatNo, price} = req.body;
        const {id} = req.params;
        const result = await db.query(`UPDATE ticket SET
                showId = $1,
                hallNo= $2,
                employeeId = $3,
                seatNo = $4,
                price = $5
            WHERE ticketId = $6
            RETURNING *
        `,
         [showId, hallNo, employeeId, seatNo, price])
         res.json({message: `Ticket with id ${id} is succesfully updated`, updatedRow: result.rows[0]});
    } catch (err) {
         res.status(500).json({message: err.message});
    }
}

exports.deleteTicket = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await db.query('DELETE FROM ticket WHERE ticketId=$1 RETURNING *', [id]);
        res.json({message: `Deleted ticket with id ${id}`, deletedRow: result.rows[0]});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}