#!/usr/bin/env zx

async function main() {
    // enable colors and fancy output
    $.verbose = true;
    $.stdio = "inherit";

    // Windows support without Git Bash
    if (process.platform === "win32") {
        const { usePowerShell } = require("zx");
        usePowerShell();
    }

    const lastArg = process.argv[process.argv.length - 1];

    // Run upload and terminal in parallel so that serial output is not missed
    const upload =
        $`pros upload --target v5 --slot 1 --after run -- ${lastArg}.bin`.catch(
            () => {
                console.log("Upload failed!");
                terminal?.abort();
                process.exitCode = 1;
            },
        );
    // Sleep for a bit so that the upload is far enough in for the terminal to not interfere
    await sleep(500);
    const terminal = $`pros terminal --raw`;

    await upload;
    await terminal;
}

main();
