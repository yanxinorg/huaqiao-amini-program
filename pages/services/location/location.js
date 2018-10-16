Page({
  data: {
    scale: 14,
    longitude: 119.153737,
    latitude: 25.473838,
    markers: [{
      iconPath: "/images/hospital_info.png",
      id: 10,
      latitude: 25.473838,
      longitude: 119.153737,
      width: 240,
      height: 63
    }]
  },
  onLoad() { },
  onMarkerTap(evt) {
    console.log(evt)
  },
  // onRegionChange(evt) {
  //   console.log(evt)
  // }
});
