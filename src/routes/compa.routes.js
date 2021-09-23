import { Router } from "express";
import compaController from '../controller/compaController'
const router = Router()
router.get('/compa', compaController.getCompa)
router.post('/compa', compaController.addCompa)
router.put('/compa/:id', compaController.putCompa)
router.delete('/compa/:id', compaController.delCompa)
export default router