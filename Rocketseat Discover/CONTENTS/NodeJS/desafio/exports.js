function getFlagValue(flagName) {
    const index = process.argv.indexOf(flagName) + 1;
    return process.argv[index];
}
module.exports = getFlagValue;
