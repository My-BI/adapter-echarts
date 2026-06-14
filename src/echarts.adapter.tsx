// Entry for the DOWNLOADED ECharts adapter UMD.
// ----------------------------------------------------------------------------
// Built by vite.adapter.config.ts into a UMD that reads window.echarts +
// window.MyBIChartHost (+ window.React) and assigns the ChartAdapterModule to
// globalThis.MyBIChartAdapter. The draw is the SAME EChartsRenderer the app ships bundled;
// its ./echartsLib, ./mapAssets and ./adapters/hostImpl seams are aliased to window-reading
// shims, so this UMD carries only the draw (ECharts, the maps and the host stay external).
//
// 3D (echarts-gl) kinds are INCLUDED — echarts-gl is bundled INTO this adapter (see
// echartsLib.umd.ts + vite.adapter.config.ts), registering its 3D series (bar3D/scatter3D/
// surface/map3D/globe) into the external window.echarts. So this adapter renders the FULL
// echarts kind set, 3D and all. Geo maps work via host.maps.
import { EChartsRenderer } from "../../EChartsRenderer";
import { engineKinds, type ChartSpec } from "../../chartSpec";
import type { QueryResult } from "../../../../types";
import type { ChartAdapterModule } from "../host";

const SUPPORTED = engineKinds("echarts");

function Renderer({ spec, result }: { spec: ChartSpec; result: QueryResult }) {
  return <EChartsRenderer spec={spec} result={result} />;
}

const adapter: ChartAdapterModule = {
  apiVersion: 1,
  id: "echarts",
  name: "ECharts",
  framework: "global",
  supportedKinds: SUPPORTED,
  capabilities: () => ({
    marks: true, axes: true, legend: true, dataLabels: true,
    data: true, crossFilter: true, highlight: true,
  }),
  Renderer,
};

(globalThis as unknown as { MyBIChartAdapter: ChartAdapterModule }).MyBIChartAdapter = adapter;
