const { Queue } = require("bullmq")

const notificationQueue = new Queue('email-queue', {
    connection: {
        host: '127.0.0.1',
        port: '6379'
    }
})

async function INIT() {
    const res = await notificationQueue.add('email to sender', {
        email: "shasnk2267@gmail.com",
        subject: "Namaste!",
        body: "THIS IS AWESOME!"
    })

    console.log ('Job added to queue', res.id)
}

INIT()