import { startChat } from "./ai/model.js";
import { run } from "./ai/agent.js";
import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "> ",
});

async function main() {
    const chat = startChat();

    console.log("Ask a question or type 'exit' to quit.");
    rl.prompt();

    rl.on("line", async (line) => {
        const q = line.trim();
        if (q.toLowerCase() === "exit") {
            console.log("🧠: Goodbye!");
            rl.close();
            process.exit(0);
        }

        try {
            await run(chat, q);
        } catch (error) {
            console.error("Error:", error.message);
        }

        rl.prompt();
    });
}

main();
