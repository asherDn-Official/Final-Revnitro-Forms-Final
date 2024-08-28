const express = require("express");
const { sendMailWithPDF } = require("../controllers/SendMailWithPdf");
const Racing = require("../modals/JoinRacingInbox"); // Import the Mongoose model
var router = express.Router();
router.post("/", async (req, res) => {
  try {
    const details = await req.body;
    // Create a new racing request record using the Mongoose model
    const newRacingRequest = new Racing({
      riderName: details.personname,
      email: details.email,
      age: details.age,
      phone: details.phoneNo,
      location: details.location,
      address: details.address,
      purpose: details.purpose,
      trackExperience: details.exprerience,
      racingClass: details.cc,
    });

    // Save the record to the database
    await newRacingRequest.save();

    const Subject = "Join Our Racing";
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
          <p>Name: <strong>${details.personname}</strong></p>
          <p>Email: <strong>${details.email}</strong></p>
          <p>Age: <strong>${details.age}</strong></p>
          <p>Mobile Number: <strong>${details.phoneNo}</strong></p>
          <p>Location: <strong>${details.location}</strong></p>
          <p>Address: <strong>${details.address}</strong></p>
          <p>Purpose of Training: <strong>${details.purpose}</strong></p>
          <p>Previous Experience: <strong>${details.exprerience}</strong></p>
          <p>Interested ClassName: <strong>${details.cc}</strong></p>
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
    const customercontent = `
    
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Bike Service</title>
    <style>

      a {
        text-decoration: none;
      }

      .gshehehe {
        width: 120px;
        margin-top: 10px;
        margin-bottom: -14px;
      }

      .ksijkkrkk5545,
      .ijrtiririririri {
        font-family: "Poppins", sans-serif;
        color:"#000";
      }
      @media (min-width: 1000px) {
        .ijrtiririririri {
          font-family: "Poppins", sans-serif;
          font-size: 18px;
          font-weight: 600;
          margin-top: 20px;
          text-align: justify;
          color:"#000";
        }

        .ksijkkrkk5545 {
          font-family: "Poppins", sans-serif;
          font-size: 20px;
          font-weight: 500;
          margin-top: 20px;
          color:"#000";
        }

        .headimg {
          display: flex;
          justify-content: center;
          margin-top: 50px;
        }
        .imgclass {
          width: 200px;
          height: auto;
        }
        .bigborder {
          width: 700px;
          height: 950px;
          background-color: #ffff;
        }
        .bigdiv {
          width: 100%;
          display: flex;
          justify-content: center;
          margin-top: 40px;
        }
        .wellcome {
          font-size: 36px;
          text-align: center;
          padding-top: 50px;
          font-family: "Poppins", sans-serif;
          font-weight: 600;
          color:"#000";
        }
        .thumps {
          width: 250px;
          height: auto;
        }
        .imgdiv {
          display: flex;
          justify-content: center;
        }
        .hello {
          font-family: "Poppins", sans-serif;
          font-size: 24px;
          font-weight: 600;
          color: black;
          margin-top: 50px;
          color:"#000";
        }
        .contentdiv {
          display: flex;
          justify-content: center;
        }
        .widthdiv {
          width: 550px;
        }
        .paras {
          font-family: "Poppins", sans-serif;
          font-size: 18px;
          font-weight: 400;
          margin-top: 20px;
          text-align: justify;
          color:"#000";
        }
        .summitbutton {
          background-color: #00afff;
          border: none;
          width: 250px;
          height: 60px;
          border-radius: 5px;
          margin-top: 40px;
          font-family: "Poppins", sans-serif;
          font-size: 17px;
          font-weight: 400;
          color: azure;
         
        }
        .butdiv {
          display: flex;
          color:"#000";
          justify-content: center;
        }
        .base {
          color: #00afff;
          text-decoration: underline;
        }
      }

      @media (max-width: 650px) {
        .headimg {
          display: flex;
          justify-content: center;
          margin-top: 20px;
        }
        .imgclass {
          width: 150px;
          height: auto;
        }
        .bigborder {
          width: 100%;
          height: auto;
      
        }
        .bigdiv {
          width: 100%;
          display: flex;
          justify-content: center;
          margin-top: 0px;
        }
        .wellcome {
          font-size: 20px;
          text-align: center;
          padding-top: 20px;
          font-family: "Poppins", sans-serif;
          font-weight: 600;
          color:"#000";
        }
        .thumps {
          width: 100%;
          height: auto;
        }
        .imgdiv {
          display: flex;
          justify-content: center;
        }
        .hello {
          font-family: "Poppins", sans-serif;
          font-size: 15px;
          font-weight: 600;
          color: black;
          margin-top: 20px;
          color:"#000";
        }
        .contentdiv {
          display: flex;
          justify-content: center;
        }
        .widthdiv {
          width: 100%;
          padding-left: 15px;
          padding-right: 15px;
        }
        .paras {
          font-family: "Poppins", sans-serif;
          font-size: 15px;
          font-weight: 400;
          margin-top: 20px;
          text-align: left;
          color:"#000";
        }
        .summitbutton {
          background-color: #00afff;
          border: none;
          width: 1005;
          height: auto;
          border-radius: 5px;
          margin-top: 40px;
          font-family: "Poppins", sans-serif;
          font-size: 13px;
          font-weight: 400;
          color: azure;
        }
        .butdiv {
          display: flex;
          justify-content: center;
        }
        .base {
          color: #00afff;
          text-decoration: underline;
        }
      }
    </style>
      </head>
      <body>
            <div>
      <div class="headimg">
        <div>
          <img class="imgclass" src="./images/revnitro final WB 2.png" alt="" />
        </div>
      </div>
      <div class="bigdiv">
        <div class="bigborder">
          <div>
            <div class="wellcome">Thank You for Your Submission!</div>
          </div>
          <div>
            <div class="imgdiv">
              <img class="thumps" src="./images/yellow bike.png" alt="" />
            </div>
          </div>
          <div class="contentdiv">
            <div class="widthdiv">
              <div>
                <div class="hello">Hi ${details.personname},</div>
              </div>
              <div>
                <div class="paras">
                  Thank you for taking the time to fill out our 
                  <span
                    ><a href="https://forms.revnitro.com/Racing"
                      >forms.revnitro.com/Racing</a
                    ></span
                  >
                  . We’ve received your submission and wanted to let you know
                  that we’re currently reviewing the information you provided.
                </div>
              </div>
              <!-- <div class="butdiv">
                <button class="summitbutton" type="submit">
                  LOGIN TO YOUR ACCOUNT
                </button>
              </div> -->

              <div>
                <div class="ksijkkrkk5545">
                  We will review your request and get back to you Soon
                </div>
              </div>

              <div>
                <div class="paras">
                  If you have any questions or need to make changes to your
                  submission, please feel free to reply to this email or contact
                  us at
                  <a href="https://forms.revnitro.com/contact"
                    >forms.revnitro.com/contact</a
                  >.
                </div>
              </div>

              <div>
                <div class="ijrtiririririri">
                  We appreciate your interest and look forward to assisting you!
                </div>
              </div>

              <div>
                <div class="paras">
                  Best regards,<br />


                  <img  class="gshehehe"
          src="	https://revnitro.com/images/Group%2026.png"
          alt="RevNitro Logo"
        />

                  <div>
                    <a href="https://revnitro.com">www.revnitro.com</a><br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      </body>
    </html>
    
    `;
    await sendMailWithPDF(process.env.nodeMailer_User, Subject, content);
    await sendMail(details.email, Subject, customercontent);
    res.status(200).send(true);
  } catch (err) {
    res.status(500).send(false);
  }
});
module.exports = router;
