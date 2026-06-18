import { Router } from 'express'
import { createEnquiry } from '../controllers/enquiryController.js'

const router = Router()

router.post('/api/enquiry', createEnquiry)

export default router
