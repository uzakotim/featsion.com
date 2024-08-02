const { execSync } = require("child_process");
const args = process.argv.slice(2);

const repoUrl = args[0];
const branchName = args[1] || "gh-pages"; // Default to 'gh-pages' if not provided

function runCommand(command) {
    execSync(command, { stdio: "inherit" });
}

try {
    console.log(`Cloning repository from ${repoUrl}`);
    runCommand(`git clone ${repoUrl} temp-repo`);
    process.chdir("temp-repo");

    console.log(`Checking out to ${branchName}`);
    runCommand(`git checkout ${branchName}`);

    console.log("Removing all files from the branch");
    runCommand("rm -rf *");
    runCommand("rm -rf .[^.]*"); // Removes hidden files

    console.log("Committing the empty state");
    runCommand("git add -A");
    runCommand('git commit -m "Clear gh-pages branch"');
    runCommand("git push origin " + branchName);

    console.log("Cleaning up");
    process.chdir("..");
    runCommand("rm -rf temp-repo");

    console.log("Successfully cleared gh-pages branch");
} catch (error) {
    console.error("Failed to clear gh-pages branch:", error);
}
