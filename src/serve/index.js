import express from 'express'
import {renderServe} from '../utils'

const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => res.send(renderServe()))

app.listen(3000, () => console.log('Example app listening on port 3000!'))