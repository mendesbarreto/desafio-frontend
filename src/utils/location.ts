const defaultOptionsLocation: PositionOptions = { maximumAge: 1500000, timeout: 0 };

export function getLocation(onSucess: PositionCallback, onError?: PositionErrorCallback, options = defaultOptionsLocation) {
  if (navigator.geolocation) {
    return navigator.geolocation.getCurrentPosition(onSucess, onError, options);
  } else {
    throw TypeError("Geolocation is not supported by this browser.");
  }
}
