import { TOOLS } from "../tools/index.js";

export async function run(chat, q) {
    while (true) {
        const result = await chat.sendMessage(q);
        const responseText = result.response.text();

        try {
            const jsonString = responseText.slice(
                responseText.indexOf("{"),
                responseText.lastIndexOf("}") + 1
            );
            const parsed = JSON.parse(jsonString);

            switch (parsed.step) {
                case "think":
                    console.log(`🧠: ${parsed.content}`);
                    break;

                case "action":
                    const output = await TOOLS[parsed.tool](parsed.input);
                    console.log(
                        `⚒️: ${parsed.tool}(${JSON.stringify(
                            parsed.input
                        )}) => ${JSON.stringify(output)}`
                    );
                    await chat.sendMessage(
                        JSON.stringify({ step: "observe", content: output })
                    );
                    break;

                case "output":
                    console.log(`🧠: ${parsed.content}`);
                    return;

                default:
                    console.warn(`Unknown step: ${parsed.step}`);
                    return;
            }
        } catch (error) {
            console.error("Error parsing response:", error);
            break;
        }
    }
}
