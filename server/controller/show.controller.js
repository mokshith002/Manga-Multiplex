const db = require('../db/index')

exports.getShows = async (req, res) => {
    try {
        const results = await db.query("SELECT * FROM show");
        res.json(results.rows);
    } catch (err) {
        res.status(500).json({message: err.message});
    }   
}

exports.getShow = async (req, res) => {
    try {
        const {id} = req.params;
         const result = await db.query(`SELECT * FROM show WHERE showId = ${id}`);
        res.json(result.rows[0]);
    } catch (err) {
         res.status(500).json({message: err.message});
    }
}

exports.addShow = async (req, res) => {
    try {
        const {hallNo, movieId, theaterId, startTime, endTime} = req.body;
        const newEmp = await db.query(`INSERT INTO show (
            hallNo, 
            movieId, 
            theaterId, 
            startTime, 
            endTime
            ) 
            VALUES($1, $2, $3, $4, $5) 
            RETURNING *`, 
        [hallNo, movieId, theaterId, startTime, endTime]);
        res.json(newEmp.rows[0]);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

exports.updateShow = async (req, res) => {
    try {
        const {hallNo, movieId, theaterId, startTime, endTime} = req.body;
        const {id} = req.params;
        const result = await db.query(`UPDATE show SET
                hallNo = $1,
                movieId = $2,
                theaterId = $3,
                startTime = $4,
                endTime = $5
            WHERE showId = $6
            RETURNING *
        `,
         [hallNo, movieId, theaterId, startTime, endTime, id])
         res.json({message: `Show with id ${id} is succesfully updated`, updatedRow: result.rows[0]});
    } catch (err) {
         res.status(500).json({message: err.message});
    }
}

exports.deleteShow = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await db.query('DELETE FROM show WHERE showId=$1 RETURNING *', [id]);
        res.json({message: `Deleted show with id ${id}`, deletedRow: result.rows[0]});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}