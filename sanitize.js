const fs = require('fs');
const argv = require('minimist')(process.argv.slice(2));

function print() {
    console.log.apply(null, arguments);
}

(async function main() {
    print("Starting Sanitizing...");

    const tagRegex = /<[^>]*>/gi;

    const { i: inputDir } = argv;
    const { o: outputDir = 'result' } = argv;

    try {
        if (typeof argv.i === "undefined") {
            throw new Error("Input Source missing.");
        }

        const sourceBuffer = await fs.promises.readFile(inputDir);
        const sourceText = sourceBuffer.toString();
        const sanitizedText = sourceText.replace(tagRegex, '');

        fs.promises.writeFile(outputDir, sanitizedText);
        print("Sanitization completed. Please check your output directory.");
        print("Written as: " + outputDir);
    }
    catch (err) {
        console.error(err);
        process.exit(1);
    }
})();
