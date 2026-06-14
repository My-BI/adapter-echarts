// UMD-build shim. The map asset URLs come from the host (the app holds the GeoJSON assets);
// the downloaded adapter reads them off window.MyBIChartHost.maps. The adapter Vite build
// ALIASES ./mapAssets to this file.
import type { MapAssets } from "../host";

export const MAP_ASSETS: MapAssets =
  (globalThis as unknown as { MyBIChartHost: { maps: { assetUrls(): MapAssets } } }).MyBIChartHost.maps.assetUrls();
