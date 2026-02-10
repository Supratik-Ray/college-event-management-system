import express from "express";
import {
  assignVolunteer,
  getAllVolunteers,
  getAssignedEvents,
} from "../controllers/VolunteeringController.js";
import { requireRole } from "../middlewares/requireRole.js";

const router = express.Router();

router
  .route("/")
  .get(requireRole("ADMIN"), getAllVolunteers)
  .post(requireRole("ADMIN"), assignVolunteer);

router.route("/me").get(requireRole("VOLUNTEER"), getAssignedEvents);

export default router;
