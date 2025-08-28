# $QUEEF DAO Site

This repository contains a basic microsite scaffold for the $QUEEF DAO. The site is designed to provide transparency for the community treasury, host proposals, and outline governance rules.

## Deploy
- Host on GitHub Pages or another static hosting platform using the root of this folder. For GitHub Pages, serve from the `main` branch at the root (not `/docs`).
- Set your custom domain (e.g. `dao.yourdomain.tld`) via a `CNAME` file or DNS settings if desired.

## Configure
- Edit `/config.json` to provide real data:
  - Replace wallet addresses and signer pubkeys with actual values.
  - Adjust quorum thresholds or voting windows to fit your governance parameters.
  - Remove `*_sample` sections once live data integrations are ready.

## Next Integrations
- Add Solana RPC read via `@solana/web3.js` or similar to fetch live balances for each treasury wallet.
- Link or embed your SPL Governance Realm for on-chain proposals and votes.
- Replace the “Create Proposal” placeholder alert with a real form that posts proposals to a forum and drafts an on-chain transaction.

## Security
- Use hardware wallets for all multisig signers.
- Publish signer rotation policies and emergency processes in the Transparency section of the site.
