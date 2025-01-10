const http = require("http");
const nodemailer = require("nodemailer");

const server = http.createServer((request, response) => {
    const auth = nodemailer.createTransport({
        service: "gmail",
        secure: true,
        port: 465,
        auth: {
            user: "divya.numetry@gmail.com",
            pass: "pyqwvvlrdolkscqq", // App password (not your actual email password)
        },
    });

    const receiver = {
        from: "divya.numetry@gmail.com",
        to: "nimbalkard57@gmail.com",
        subject: "Node.js Mail Testing!",
        text: "Hello, this is a test email!",
    };

    auth.sendMail(receiver, (error, emailResponse) => {
        if (error) {
            console.error("Error sending email:", error);
            response.writeHead(500, { "Content-Type": "text/plain" });
            response.end("Error sending email");
        } else {
            console.log("Email sent successfully:", emailResponse);
            response.writeHead(200, { "Content-Type": "text/plain" });
            response.end("Email sent successfully!");
        }
    });
});

server.listen(8080, () => {
    console.log("Server is running on http://localhost:8080");
});
