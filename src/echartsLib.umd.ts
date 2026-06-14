// UMD-build shim. ECharts comes from window.echarts (the downloaded library global the
// engine path already provides) — not the in-app loader. echarts-gl (3D) IS bundled INTO
// this adapter (un-externalised in vite.adapter.config.ts), so loadEChartsGL imports it on
// demand; it registers grid3D / bar3D / scatter3D / surface / map3D / globe into the shared
// (external) window.echarts, so the adapter's supportedKinds can INCLUDE the 3D kinds. A
// failure here degrades ONLY 3D charts inside this adapter — it can't break the host app.
// The adapter Vite build ALIASES ./echartsLib to this file.
export type EChartsModule = typeof import("echarts");

export function loadECharts(): Promise<EChartsModule> {
  const e = (globalThis as unknown as { echarts?: EChartsModule }).echarts;
  return e
    ? Promise.resolve(e)
    : Promise.reject(new Error("MyBI echarts adapter: window.echarts is not available"));
}

let glPromise: Promise<unknown> | null = null;
export function loadEChartsGL(): Promise<unknown> {
  // echarts MUST be present first (echarts-gl registers its 3D series into it).
  return (glPromise ??= loadECharts().then(() => import("echarts-gl")));
}
