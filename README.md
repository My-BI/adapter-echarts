# adapter-echarts

The **Apache ECharts** rendering engine, packaged for **MyBI**.

MyBI's chart adapter (which ships with the app) renders charts through ECharts; this repo
hosts the unmodified ECharts UMD bundle (`echarts.min.js`) so MyBI can **download it on
demand** instead of compiling it into the app. MyBI's registry
(`My-BI/plugin-registry → charts/registry.json`) points the `echarts` engine at this repo's
releases; the app verifies the download against the published SHA-256.

- **Library:** [Apache ECharts](https://echarts.apache.org) v6.1.0 — **unmodified upstream**.
- **Licence:** Apache-2.0 (see `LICENSE` / `NOTICE`).
- **Asset:** `echarts.min.js` — SHA-256 `b66b25aeb4df84e33199dc21694014d336d222cbd9deb0e5a7c14bd6aa0d0fd0`.

Fixes for how MyBI *uses* ECharts live in the in-app adapter, never in this bundle.
