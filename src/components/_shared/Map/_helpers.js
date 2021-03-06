export const toPoint = point => ({
  type: 'Feature',
  properties: {
    id: point.pointId,
  },
  geometry: {
    type: 'Point',
    coordinates: [point.longitude, point.latitude],
  },
});

export const returnGeoPoints = points => ({
  type: 'FeatureCollection',
  features: points.map((point, index) => toPoint(point)),
});
