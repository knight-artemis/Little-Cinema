const router = require('express').Router()

router.get('/:id', async (req, res) => {
    console.log('Мама, я в ручке');
    try {
        const { id } = req.params
        const updId = parseInt(id)
        const response = await fetch(`https://api.kinopoisk.dev/v1.4/movie?selectFields=name&selectFields=poster&selectFields=year&selectFields=rating&selectFields=description&selectFields=movieLength&selectFields=premiere&selectFields=genres&selectFields=id&id=${updId}`,
            {
                headers: {
                    'accept': 'application/json',
                    'X-API-KEY': '6TNPP65-9424ARE-PSJRDF8-S3FEVA5'
                }
            })
        const result = await response.json()
        res.status(200).json(result.docs[0])
    } catch (error) {
        res.status(500).json({ err: 'Ошибка в movieRouter' })
    }
})


module.exports = router