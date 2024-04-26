const router = require('express').Router()

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const updId = parseInt(id)
        const response = await fetch(`https://api.kinopoisk.dev/v1.4/movie?selectFields=name&selectFields=poster&selectFields=year&selectFields=rating&selectFields=description&selectFields=movieLength&selectFields=premiere&selectFields=genres&id=${updId}`,
            {
                headers: {
                    'accept': 'application/json',
                    'X-API-KEY': '2BY14MR-YAQ49DR-HZNX7T0-J73CEEE'
                }
            })
        const result = await response.json()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ err: 'Ошибка в movieRouter' })
    }
})


module.exports = router