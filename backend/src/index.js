import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ data: "hello world!" });
});

const port = 8000;

app.listen(port, () => console.log(`server listening on port ${port}`));

//ENDPOINTS

/*
---AUTH---

POST /auth/login
POST /auth/signup

---Admin---

GET /events (all the events created by admin)
POST /events
PATCH /events/:eventId
DELETE /events/:eventId

POST /auth/signup (create volunteer)
POST /volunteering (assign volunteer)

GET /events/:eventId/participants
GET /events/:eventId/analytics
GET /events/:eventId/volunteers

GET /volunteering (all volunteers created by admin)

---Volunteer---

GET /volunteering/me (assigned events)
POST /participations/:id/checkin

---Participant---

GET /events (all events)
GET /events/:eventId
POST /participations
GET /participations/me (QR codes)
*/
