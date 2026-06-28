import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const data = await req.json()

    await resend.emails.send({
      from: 'Diastral Web Solutions <info@diastralws.co.za>',
      to: 'info@diastralws.co.za', // your email
      subject: `New Project Enquiry from ${data.fullName}`,
      html: `
        <h2>New Project Enquiry</h2>

        <p><strong>Name:</strong> ${data.fullName}</p>
        <p><strong>Company:</strong> ${data.company}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Budget:</strong> ${data.budget}</p>

        <p><strong>Challenge:</strong></p>
        <p>${data.challenge}</p>

        <p><strong>What they've tried:</strong></p>
        <p>${data.tried}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { success: false },
      { status: 500 }
    )
  }
}