
/* --------------------------------------------------------------------------------- */


/*
STEP 1:
// BASIC
export default async function handler(req, res) {
  const result = await checker.availability("155", "S69022537")
  console.log("Result", result)

  res.status(200).json({
    result,
  })
}

*/


/* --------------------------------------------------------------------------------- */


/* STEP 2:
// SENDGRID EMAIL
const sgMail = require("@sendgrid/mail")
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const emailMessage = {
  to: "andre.elmoznino@valtech.com", // Change to your recipient
  from: "andrewlaufer@hotmail.com", // Change to your verified sender
  subject: "IKEA STUFF AVAILABLE!",
  text: "Direct link: https://www.ikea.com/se/sv/",
  html: `<a href="https://www.ikea.com/se/sv" target="_blank">Direct link</a>`,
}
async function sendEmail() {
  try {
    await sgMail.send(emailMessage)
    console.log("Email sent")
  } catch (error) {
    console.error(error)

    if (error.response) {
      console.error(JSON.stringify(error.response.body, null, 2))
    }
  }
}

export default async function handler(req, res) {
  const result = await checker.availability("155", "S69022537")
  console.log("Result", result)

  if (result.stock > 0) {
    await sendEmail()

    return res.status(200).json({
      status: "Email sent WOOP WOOP!",
    })
  }

  res.status(200).json({
    result,
  })
}

*/


/* --------------------------------------------------------------------------------- */



/* 
STEP 3:
    await sendSms(result.stock, "+46729385370")

    const accountSid = process.env.TWILIO_SID
const authToken = process.env.TWILIO_API_KEY
const client = require("twilio")(accountSid, authToken)
async function sendSms(stock, recipient) {
  const message = await client.messages.create({
    body: `IKEA Stuff Available. Count: ${stock}`,
    from: "+17164669058",
    to: recipient,
  })
}
*/

/* --------------------------------------------------------------------------------- */


/* NOTICE: Linux runners "cost" less minutes */
/* NOTICE: Use GitHub Secrets for environment variables in your GH Actions (e.g. auth headers) */

/*
  STEP 4: main.yml
  name: cron-every-minute
on:
  schedule:
    - cron: "* * * * *"
jobs:
  cron:
    runs-on: ubuntu-latest
    steps:
      - name: Call Vercel route
        run: |
          curl --request GET \
          --url 'https://ikea-live-demo-aelmoznino.vercel.app/api' \

*/