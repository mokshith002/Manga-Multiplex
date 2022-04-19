const db = require('../db/index')

exports.getTheaters = async (req, res) => {
    try {
        const results = await db.query("SELECT * FROM theater");
        res.json(results.rows);
    } catch (err) {
        res.status(500).json({message: err.message});
    }   
}

exports.getTheater = async (req, res) => {
    try {
        const {id} = req.params;
         const result = await db.query(`SELECT * FROM theater WHERE theaterId = ${id}`);
        res.json(result.rows[0]);
    } catch (err) {
         res.status(500).json({message: err.message});
    }
}

exports.addTheater = async (req, res) => {
    try {
        const {theaterName, location} = req.body;
        const newEmp = await db.query(`INSERT INTO theater (
                theaterName, 
                location
            ) 
            VALUES($1, $2) 
            RETURNING *`, 
        [theaterName, location]);
        res.json(newEmp.rows[0]);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

exports.updateTheater = async (req, res) => {
    try {
        const {theaterName, location} = req.body;
        const {id} = req.params;
        await db.query(`UPDATE TABLE todo SET
                ${theaterName && 'theaterName=$1,'}
                ${location && 'location=$2,'}
            WHERE theaterId=$3
        `,
         [theaterName, location, id])
         res.json({message: `Theater with id ${id} is succesfully updated`});
    } catch (err) {
         res.status(500).json({message: err.message});
    }
}

exports.deleteTheater = async (req, res) => {
    try {
        const {id} = req.params;
        db.query('DELETE FROM theater WHERE theaterId=$1', [id]);
        res.json({message: `Deleted theater with id ${id}`});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

exports.getTheaterIds = async (req, res) => {
    try {
        const {rows} = await db.query('SELECT theaterId FROM theater');
        const result = rows.map(ele => ele.theaterid);
        res.status(200).send(result);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}