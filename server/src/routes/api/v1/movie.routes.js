const router = require('express').Router()

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const response = await fetch(`https://moviesminidatabase.p.rapidapi.com/movie/id/${id}/`,
            {
                headers: {
                    'accept': 'application/json',
                    'X-RapidAPI-Key': '3dddc1fa8cmsh7a1c0d70abbf7b5p11b08djsn81bb8cff8a35',
                    'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
                }
            })
        const result = await response.json()
        res.status(200).json(result.results)
    } catch (error) {
        res.status(500).json({ err: 'Ошибка в movieRouter' })
    }
})


module.exports = router