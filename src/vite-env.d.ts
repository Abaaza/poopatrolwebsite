/// <reference types="vite/client" />

// Google Maps JavaScript API types (loaded dynamically)
declare namespace google.maps.places {
  class PlacesService {
    constructor(attrContainer: HTMLElement);
    getDetails(
      request: { placeId: string; fields: string[] },
      callback: (
        result: any | null,
        status: PlacesServiceStatus
      ) => void
    ): void;
    findPlaceFromQuery(
      request: { query: string; fields: string[] },
      callback: (
        results: any[] | null,
        status: PlacesServiceStatus
      ) => void
    ): void;
  }
  enum PlacesServiceStatus {
    OK = "OK",
    ZERO_RESULTS = "ZERO_RESULTS",
    ERROR = "ERROR",
  }
}
