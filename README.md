<p align="center"><img src="logo.png" alt="Apache ECharts" height="64"></p>

# ECharts engine for MyBI

Apache ECharts — statistical, hierarchy, geo/map and 3D chart kinds. The most capable MyBI chart engine: bar/line/area/scatter, pie/treemap/sunburst, heatmap, boxplot, candlestick, sankey, graph, gauge, radar, parallel, themeRiver, calendar, geo/map and (via the GL build) 3D.

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

## Source

The readable adapter source (the per-library draw, built against the MyBI chart host SDK) lives in
`src/`. The published `.mybiadapter` is this source **bundled + minified + signed** by MyBI CI — the
minification/packaging is the build step, not what we author. The library itself (echarts/recharts)
is upstream's official build (see ACKNOWLEDGEMENT).
