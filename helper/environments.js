const environments = {}

environments.staging = {
    port: 3001,
    envName: 'staging'
}

environments.production = {
  port: 4001,
  envName: "production",
};

const currentEnvironment =
  typeof process.env.NODE_ENV === "string"
    ? process.env.NODE_ENV.toLowerCase()
    : "staging";
const environmentsToExport = typeof environments[currentEnvironment] === "object"? environments[currentEnvironment]: environments.staging;

module.exports = environmentsToExport;