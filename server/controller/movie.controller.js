const db = require('../db/index')

exports.getMovies = async (req, res) => {
    try {
        const results = await db.query("SELECT * FROM movie");
        res.json(results.rows);
    } catch (err) {
        res.status(500).json({message: err.message});
    }   
}

exports.getMovie = async (req, res) => {
    try {
        const {id} = req.params;
         const result = await db.query(`SELECT * FROM movie WHERE movieId = ${id}`);
        res.json(result.rows[0]);
    } catch (err) {
         res.status(500).json({message: err.message});
    }
}

exports.addMovie = async (req, res) => {
    try {
        const {movieName} = req.body;
        const newEmp = await db.query(`INSERT INTO movie (
                movieName
            ) 
            VALUES($1) 
            RETURNING *`, 
        [movieName]);
        res.json(newEmp.rows[0]);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

exports.updateMovie = async (req, res) => {
    try {
        const {movieName} = req.body;
        const {id} = req.params;
        const result = await db.query(`UPDATE movie SET
                movieName = $1,
                    WHERE movieId = $2
            RETURNING *
        `,
         [movieName,id])
         res.json({message: `Movie with id ${id} is succesfully updated`, updatedRow: result.rows[0]});
    } catch (err) {
         res.status(500).json({message: err.message});
    }
}

exports.deleteMovie = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await db.query('DELETE FROM movie WHERE movieId=$1 RETURNING *', [id]);
        res.json({message: `Deleted movie with id ${id}`, deletedRow: result.rows[0]});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}