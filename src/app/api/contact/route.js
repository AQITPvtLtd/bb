import nodemailer from "nodemailer";
import pool from "@/helper/db";
import { NextResponse } from "next/server";
import { v4 as uuid } from "uuid";

export async function POST(request) {
  try {
    const formData = await request.formData();
    const name = formData.get("name");
    const Email = formData.get("Email");
    const Phone = formData.get("Phone");
    const Query = formData.get("Query");
    const medicalReport = formData.get("medicalReport");

    const unique_id = uuid();

    // Convert File to Buffer if a file is uploaded
    let attachment = null;
    let reportFilename = null;
    if (medicalReport && medicalReport.name) {
      const arrayBuffer = await medicalReport.arrayBuffer();
      attachment = Buffer.from(arrayBuffer);
      reportFilename = medicalReport.name;
    }

    // Insert into database (store only the filename if provided)
    await pool.query(
      "INSERT INTO form(id, date, name, Email, Phone, Query, medicalReport) VALUES (?, NOW(), ?, ?, ?, ?, ?)",
      [unique_id, name, Email, Phone, Query, medicalReport ? medicalReport.name : ""]
    );

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      secure: true,
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD,
      },
    });

    // Send email to admin
    await transporter.sendMail({
      from: process.env.MY_EMAIL,
      to: process.env.MY_EMAIL,
      subject: "Dr. Bhupendra Pratap Bharti Form",
      html: `<html>
              <body>
                <h3>You've got a new mail from ${name}, their email is: ✉️${Email} and phone number is ${Phone}</h3>
                <p>Message:</p>
                <p>${Query}</p>
                ${reportFilename ? `<p>Medical Report Attached: ${reportFilename}</p>` : ""}
              </body>
             </html>`,
      attachments: attachment
        ? [{ filename: reportFilename, content: attachment }]
        : [],
    });

    // Send confirmation email to the user
    await transporter.sendMail({
      from: process.env.MY_EMAIL,
      to: Email,
      subject: "Thank You for contacting Dr. Bhupendra Pratap Bharti!",
      html: `<html>
              <body>
                <h2>Hey ${name}!</h2>
                <p>Your query is noted! Our team will contact you as soon as possible.</p>
              </body>
             </html>`,
    });

    // Return success response
    return NextResponse.json({
      message: "Message Sent",
      success: true,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      message: "Failed to send query",
      success: false,
    });
  }
}
