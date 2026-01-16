import {
  Map,
  MapControls,
  MapMarker,
  MarkerContent,
  MarkerPopup,
  MarkerTooltip,
} from "@/components/UI/map";

const ContactUsMap = () => {
  return (
    <div
      className="h-[420px] w-full  overflow-hidden border border-amber-300"
      data-lenis-prevent
    >
      <Map center={[21.0122, 52.2297]} zoom={12}>
        <MapControls
          position="bottom-right"
          showZoom
          showCompass
          showLocate
          showFullscreen
        />

        <MapMarker longitude={21.0122} latitude={52.2297}>
          <MarkerContent>
            <div className="relative">
              <span className="absolute inset-0 rounded-full bg-yellow-400/40 animate-ping" />
              <div className="size-6 rounded-full bg-yellow-400/30 flex items-center justify-center">
                <div className="size-3 rounded-full bg-yellow-400 shadow-lg" />
              </div>
            </div>
          </MarkerContent>

          <MarkerTooltip>Warsaw</MarkerTooltip>

          <MarkerPopup>
            <div className="min-w-160px rounded-lg bg-background p-3 shadow-xl border">
              <p className="font-semibold text-sm text-foreground">
                Warsaw FutureTech
              </p>
              <p className="text-xs text-muted-foreground mt-1">Poland</p>
              <p className="text-xs text-muted-foreground mt-2">
                52.2297, 21.0122
              </p>
            </div>
          </MarkerPopup>
        </MapMarker>
      </Map>
    </div>
  );
};

export default ContactUsMap;
