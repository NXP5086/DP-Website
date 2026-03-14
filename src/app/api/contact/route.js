import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
    try {
        const body = await request.json()
        const {
            firstname, lastname, email, phone,
            eventdate, location, totalbudget, events,
            hearabout, lovestory, pageurl, querydate
        } = body

        const { error: notifyError } = await resend.emails.send({
            from: 'DestinationPick <noreply@send.destinationpick.com>',
            to: ['info.us@destinationpick.com', 'stan@destinationpick.com', 'shake@destinationpick.com'],
            subject: `New Wedding Inquiry — ${firstname} ${lastname}`,
            html: `
                <h2>New Wedding Inquiry</h2>
                <table style="border-collapse:collapse;width:100%;font-family:sans-serif;font-size:14px;">
                    <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold;">Name</td><td style="padding:8px;border:1px solid #eee;">${firstname} ${lastname}</td></tr>
                    <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold;">Email</td><td style="padding:8px;border:1px solid #eee;">${email}</td></tr>
                    <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold;">Phone</td><td style="padding:8px;border:1px solid #eee;">${phone}</td></tr>
                    <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold;">Event Date</td><td style="padding:8px;border:1px solid #eee;">${eventdate || '—'}</td></tr>
                    <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold;">Country</td><td style="padding:8px;border:1px solid #eee;">${location}</td></tr>
                    <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold;">Total Budget</td><td style="padding:8px;border:1px solid #eee;">${totalbudget ? `$${totalbudget}` : '—'}</td></tr>
                    <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold;">Events</td><td style="padding:8px;border:1px solid #eee;">${events || '—'}</td></tr>
                    <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold;">Heard About Us</td><td style="padding:8px;border:1px solid #eee;">${hearabout || '—'}</td></tr>
                    <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold;">Love Story</td><td style="padding:8px;border:1px solid #eee;">${lovestory || '—'}</td></tr>
                    <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold;">Page</td><td style="padding:8px;border:1px solid #eee;">${pageurl || '—'}</td></tr>
                    <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold;">Submitted At</td><td style="padding:8px;border:1px solid #eee;">${querydate}</td></tr>
                </table>
            `,
        })

        if (notifyError) throw new Error(notifyError.message)

        const { error: replyError } = await resend.emails.send({
            from: 'DestinationPick <noreply@send.destinationpick.com>',
            to: email,
            subject: `We received your inquiry, ${firstname}!`,
            html: `
                <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
                    <h2>Thank you, ${firstname}!</h2>
                    <p>We've received your wedding inquiry and will be in touch shortly to discuss your dream destination wedding.</p>
                    <p>In the meantime, feel free to reach us at <a href="mailto:info.us@destinationpick.com">info.us@destinationpick.com</a> or call us at <a href="tel:9179134262">917-913-4262</a>.</p>
                    <p>— The DestinationPick Team</p>
                </div>
            `,
        })

        if (replyError) throw new Error(replyError.message)

        return Response.json({ success: true })
    } catch (error) {
        console.error('Contact form error:', error)
        return Response.json({ success: false }, { status: 500 })
    }
}
