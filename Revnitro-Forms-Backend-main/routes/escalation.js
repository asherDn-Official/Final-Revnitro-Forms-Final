const express = require("express");
const { sendMailWithPDF } = require("../controllers/SendMailWithPdf");
const Escalation = require("../modals/EscalationInbox"); // Import the Mongoose model
var router = express.Router();
router.post("/", async (req, res) => {
  try {
    const details = await req.body;
    // Create a new escalation record using the Mongoose model
    const newEscalation = new Escalation({
      customerName: details.personname,
      email: details.email,
      phone: details.phoneNo,
      location: details.location,
      address: details.address,
      problematicService: details.service,
      issueFaced: details.issueFaced,  // Use the correct field name
      tieupPerson: details.tieupPerson,
    });

    // Save the record to the database
    await newEscalation.save();
    const Subject = "Escalation Request From RevNitro";
    const content = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Mention Notification</title>
        <style>
          .notification-container {
            font-family: sans-serif;
            max-width: 100%;
            margin: 0 auto;
          }

          .notification-content {
            margin-bottom: 20px;
          }

          .button-link {
            display: inline-block;
            padding: 10px 20px;
            font-size: 16px;
            background-color: #f01f1f;
            color: #fff;
            border-radius: 5px;
            text-decoration: none;
            border: none;
            cursor: pointer;
          }

          .button-link:hover {
            background-color: #6af071;
          }

          .logo-container {
            margin-top: 20px;
          }

          .logo-container img {
            width: 100px; /* Adjust the size as needed */
            height: auto;
          }
        </style>
      </head>
      <body>
        <div>
          <h1>${Subject}</h1>
        </div>
        <div class="notification-container">
          <p>Service : <strong>${details.service}</strong></p>
          <p>TieUp Company/Person Name: <strong>${details.tieupPerson}</strong></p>
          <p>Issue Faced : <strong>${details.issueFaced}</strong></p>
          <p>Name: <strong>${details.personname}</strong></p>
          <p>Email: <strong>${details.email}</strong></p>
          <p>Mobile Number: <strong>${details.phoneNo}</strong></p>
          <p>Location: <strong>${details.location}</strong></p>
          <p>Address: <strong>${details.address}</strong></p>
          <br/>
          <br/>
          <div class="logo-container">
          <p>With Regards,</p>
          <p>Team RevNitro</p>
          </div>
        </div>
      </body>
    </html>
    `;
    await sendMailWithPDF(process.env.nodeMailer_User, Subject, content);
    res.status(200).send(true);
  } catch (err) {
    res.status(500).send(false);
  }
});
module.exports = router;
