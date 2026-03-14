import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const INTERNAL_FIELDS = ['formType', 'sendAutoReply']

function buildTable(data) {
    const rows = Object.entries(data)
        .filter(([key]) => !INTERNAL_FIELDS.includes(key))
        .map(([key, value]) => {
            const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, s => s.toUpperCase())
            return `<tr><td style="padding:8px;border:1px solid #eee;font-weight:bold;white-space:nowrap;">${label}</td><td style="padding:8px;border:1px solid #eee;">${value || '—'}</td></tr>`
        })
        .join('')
    return `<table style="border-collapse:collapse;width:100%;font-family:sans-serif;font-size:14px;">${rows}</table>`
}

export async function POST(request) {
    try {
        const body = await request.json()
        const { formType = 'New Inquiry', sendAutoReply = true } = body

        const email = body.email
        const name = body.firstname || body.fullName || body.name || ''

        const { error: notifyError } = await resend.emails.send({
            from: 'DestinationPick <noreply@send.destinationpick.com>',
            to: ['info.us@destinationpick.com', 'stan@destinationpick.com', 'shake@destinationpick.com'],
            subject: `${formType}${name ? ` — ${name}` : ''}`,
            html: `<h2 style="font-family:sans-serif;">${formType}</h2>${buildTable(body)}`,
        })

        if (notifyError) throw new Error(notifyError.message)

        if (sendAutoReply && email) {
            const { error: replyError } = await resend.emails.send({
                from: 'DestinationPick <noreply@send.destinationpick.com>',
                to: email,
                subject: `We received your inquiry${name ? `, ${name}` : ''}!`,
                html: `
                    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
                        <h2>Thank you${name ? `, ${name}` : ''}!</h2>
                        <p>We've received your inquiry and will be in touch shortly.</p>
                        <p>In the meantime, feel free to reach us at <a href="mailto:info.us@destinationpick.com">info.us@destinationpick.com</a> or call us at <a href="tel:9179134262">917-913-4262</a>.</p>
                        <p>— The DestinationPick Team</p>
                    </div>
                `,
            })
            if (replyError) throw new Error(replyError.message)
        }

        return Response.json({ success: true })
    } catch (error) {
        console.error('Contact form error:', error)
        return Response.json({ success: false }, { status: 500 })
    }
}
