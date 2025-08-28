(function(){
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const cfgEl = document.getElementById('dao-config');
  const cfg = JSON.parse(cfgEl.textContent);

  // Render wallets
  const treasuryGrid = document.getElementById('treasuryGrid');
  treasuryGrid.innerHTML = (cfg.wallets || []).map(w => `
    <div class="card">
      <h3>${w.label}</h3>
      <div class="kv">Role: ${w.role}</div>
      <div class="kv">Address:<br><code>${w.address}</code></div>
      <p class="sub">${w.note || ''}</p>
    </div>
  `).join('');

  // Rules
  document.getElementById('rulesList').innerHTML =
    (cfg.rules || []).map(r => `<li>${r}</li>`).join('');

  // Multisig signers
  document.getElementById('signerList').innerHTML =
    (cfg.multisig.signers || []).map(s => `<li><code>${s.pubkey}</code> — ${s.label}</li>`).join('');

  // Proposals list (sample / placeholder)
  document.getElementById('proposalList').innerHTML =
    (cfg.proposals_sample || []).map(p => `
      <div class="card">
        <h3>${p.title}</h3>
        <p>${p.summary}</p>
        <div class="status">Status: ${p.status}${p.ends_in_hours ? ` • Ends in ${p.ends_in_hours}h` : ''}</div>
        <a class="btn ghost" href="${p.link}">Open</a>
      </div>
    `).join('');

  // TX feed (sample / placeholder)
  const txList = document.getElementById('txList');
  txList.innerHTML = (cfg.tx_sample || []).map(tx =>
    `<li><strong>${tx.ts}</strong> — ${tx.desc} <span class="sub">(${tx.short})</span></li>`
  ).join('');

  // “Create Proposal” placeholder
  document.getElementById('newProposalBtn').addEventListener('click', (e)=>{
    e.preventDefault();
    alert('On-chain proposals coming soon. For now, post in the Telegram + submit via the Google Form link we’ll add here.');
  });
})();
