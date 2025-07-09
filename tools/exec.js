import { execSync } from "child_process";

export function exec(command) {
    try {
        const output = execSync(command, { encoding: "utf-8" });
        return output;
    } catch (error) {
        return `Error: ${error.message}`;
    }
}
