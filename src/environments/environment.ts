// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    // Sistema
    SYSTEM_PREFIX: 'UnifaSystem', // Prefixo para indentificar o sistema, usado nos cookies,
    // SMN Auth
    SMN_AUTH_API: 'http://192.168.7.35:13001', // API do auth
    SMN_AUTH_ID: 11, // ID do sistema, deve ser pego no auth
    AUTH_BY_EMAIL: false // O sistema faz o login atráves do e-mail
};
