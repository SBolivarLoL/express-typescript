import express from 'express'
import * as diaryServices from '../services/diary'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})

router.post('/', (_req, res) => {
  res.send('creating a new entry diary')
})

export default router
