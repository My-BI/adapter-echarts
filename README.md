# adapter-echarts

The MyBI **ECharts engine** — two artifacts on each release:

- **`echarts.min.js`** — the Apache ECharts library bundle (Apache-2.0, unmodified upstream),
  downloaded on demand by MyBI (`delivery: download`).
- **`echarts.mybiadapter`** — the MyBI-signed ECharts chart **adapter** (the per-library draw),
  built against the MyBI host SDK and verified (Ed25519) before it runs.

Releases are published by CI (`github-actions[bot]`) only after the adapter's signature
verifies against the MyBI public key. The library is integrity-pinned (sha256) in the registry.

## Verify

```sh
node scripts/verify-adapter.mjs echarts.mybiadapter
```

Apache-2.0 (library) · MIT (adapter).
