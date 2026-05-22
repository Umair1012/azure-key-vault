/**
 * =========================================================
 * 🚀 Advanced Azure Key Vault Secret Manager
 * =========================================================
 * Features:
 * ✅ Colored terminal UI
 * ✅ Loading spinner
 * ✅ Error handling
 * ✅ Environment variable support
 * ✅ Secret metadata display
 * ✅ Reusable functions
 * ✅ Secure production-ready structure
 * =========================================================
 */

require("dotenv").config();

const chalk = require("chalk");
const ora = require("ora");
const boxen = require("boxen");

const { DefaultAzureCredential } = require("@azure/identity");
const { SecretClient } = require("@azure/keyvault-secrets");

/* =========================================================
   CONFIGURATION
========================================================= */

const KEY_VAULT_NAME = process.env.KEY_VAULT_NAME || "myKeyVault123";
const SECRET_NAME = process.env.SECRET_NAME || "DbPassword";

const VAULT_URL = `https://${KEY_VAULT_NAME}.vault.azure.net`;

/* =========================================================
   AZURE CLIENT
========================================================= */

const credential = new DefaultAzureCredential();

const client = new SecretClient(
  VAULT_URL,
  credential
);

/* =========================================================
   UI FUNCTIONS
========================================================= */

function showBanner() {
  console.log(
    boxen(
      chalk.cyanBright.bold(
        "🔐 Azure Key Vault Secret Manager"
      ),
      {
        padding: 1,
        margin: 1,
        borderStyle: "round",
        borderColor: "green",
      }
    )
  );
}

function showSecret(secret) {
  console.log(
    boxen(
      `
${chalk.green.bold("✅ Secret Retrieved Successfully")}

${chalk.yellow("Secret Name :")} ${secret.name}
${chalk.yellow("Secret Value:")} ${chalk.white(secret.value)}
${chalk.yellow("Version     :")} ${secret.properties.version}
${chalk.yellow("Created On  :")} ${secret.properties.createdOn}
${chalk.yellow("Updated On  :")} ${secret.properties.updatedOn}
${chalk.yellow("Enabled     :")} ${secret.properties.enabled}
      `,
      {
        padding: 1,
        borderStyle: "double",
        borderColor: "blue",
      }
    )
  );
}

function showError(error) {
  console.log(
    boxen(
      chalk.red.bold("❌ Error Fetching Secret\n\n") +
        chalk.white(error.message),
      {
        padding: 1,
        borderStyle: "double",
        borderColor: "red",
      }
    )
  );
}

/* =========================================================
   MAIN FUNCTION
========================================================= */

async function getSecret(secretName) {
  const spinner = ora(
    chalk.cyan(`Fetching secret "${secretName}"...`)
  ).start();

  try {
    const secret = await client.getSecret(secretName);

    spinner.succeed(
      chalk.green("Secret fetched successfully!")
    );

    showSecret(secret);
  } catch (error) {
    spinner.fail("Failed to fetch secret");
    showError(error);
  }
}

/* =========================================================
   APPLICATION START
========================================================= */

async function startApp() {
  showBanner();

  console.log(
    chalk.magentaBright(
      `\n🌐 Key Vault URL: ${VAULT_URL}\n`
    )
  );

  await getSecret(SECRET_NAME);
}

startApp();
