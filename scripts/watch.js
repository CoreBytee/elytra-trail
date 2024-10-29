import { watch } from "fs";
import { join } from "path";
import { $ } from "bun";

watch(
    join(
        __dirname,
        "..",
        "src"
    ),
    {
        recursive: true
    },
    async () => {
        console.log("Detected changes in src directory")
        await $`bun run ./scripts/install.js`
    }
)