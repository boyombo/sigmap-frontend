<template>
  <div>
    <select
      v-model="selectedNetwork"
      @change="changeNetwork()"
    >
      <option value="">Select Network</option>
      <option value="mtn">MTN</option>
      <option value="airtel">Airtel</option>
      <option value="glo">Glo</option>
    </select>
    <div
      :id="mapName"
      class="google-map"/>
  </div>
</template>
<script>
// const BASE_URL = "http://localhost:8000";
// var google
const BASE_URL = "http://everyday.com.ng";
export default {
  name: "GoogleMap",
  // eslint-disable-next-line
  props: ["name"],
  data: function() {
    return {
      mapName: this.name + "-map",
      circles: [],
      pointsOfInterest: [],
      map: null,
      selectedNetwork: null
    };
  },
  mounted: function() {
    this.fetchData("");
  },
  methods: {
    changeNetwork: function() {
      console.log("changing network to " + this.selectedNetwork);
      this.fetchData(this.selectedNetwork);
    },
    fetchData: function(network) {
      let url = BASE_URL + "/sigmap/get_signals/";
      if (network) {
        url = url + "?network=" + network;
      }
      fetch(url)
        .then(response => response.json())
        .then(responseJson => {
          console.log(responseJson);
          console.log(responseJson.center);
          const constants = responseJson.constants;
          this.loadMap(
            constants.center.lat,
            constants.center.lng,
            constants.zoom
          );
          // this.circles = responseJson;
          this.pointsOfInterest = responseJson.points;
          this.pointsOfInterest.forEach(item => {
            console.log(item);
            this.drawCircle(item.lat, item.lng, item.signal);
          });
          for (let pt in this.pointsOfInterest) {
            console.log(pt);
          }

          let clat = constants.center.lat;
          let clng = constants.center.lng;

          const signals = responseJson.signals;

          // this.drawPoly(
          //   constants.ne_center.lat,
          //   constants.ne_center.lng,
          //   clat,
          //   clng,
          //   signals.ne
          // );
          // this.drawPoly(
          //   constants.nw_center.lat,
          //   constants.nw_center.lng,
          //   clat,
          //   clng,
          //   signals.nw
          // );
          // this.drawPoly(
          //   constants.se_center.lat,
          //   constants.se_center.lng,
          //   clat,
          //   clng,
          //   signals.se
          // );
          // this.drawPoly(
          //   constants.sw_center.lat,
          //   constants.sw_center.lng,
          //   clat,
          //   clng,
          //   signals.sw
          // );
        });
    },
    loadMap: function(lat, lng, zoom = 1) {
      let msg = "latitude: " + lat + ", lng: " + lng;
      console.log(msg);
      const element = document.getElementById(this.mapName);
      const options = {
        zoom: zoom,
        // eslint-disable-next-line
        center: new google.maps.LatLng(lat, lng)
      };
      // eslint-disable-next-line
      this.map = new google.maps.Map(element, options);
    },
    drawCircle: function(lat, lng, signal) {
      const center = { lat: lat, lng: lng };
      const color = this.getColor(signal);
      return new google.maps.Circle({
        strokeColor: "#000000",
        strokeOpacity: 0.7,
        strokeWeight: 2,
        fillColor: color,
        fillOpacity: 0.65,
        map: this.map,
        center: center,
        radius: 30
      });
    },
    getColor: function(signal) {
      switch (signal) {
        case "4g":
          return "#00ff00";
        case "3g":
          return "#ffff00";
        case "2g":
          return "#ff0000";
        default:
          return "#000000";
      }
    },
    drawPoly: function(plat, plng, clat, clng, signal) {
      const pt1 = { lat: clat, lng: clng };
      const pt2 = { lat: plat, lng: clng };
      const pt3 = { lat: plat, lng: plng };
      const pt4 = { lat: clat, lng: plng };
      const pt5 = { lat: clat, lng: clng };
      const polyPath = [pt1, pt2, pt3, pt4, pt5];
      let color = "#000000";
      switch (signal) {
        case "4g":
          color = "#00ff00";
          break;
        case "3g":
          color = "#ffff00";
          break;
        case "2g":
          color = "#ff0000";
      }
      // eslint-disable-next-line
      return new google.maps.Polygon({
        paths: polyPath,
        strokeColor: color,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: color,
        fillOpacity: 0.35,
        map: this.map
      });
    }
  }
};
</script>
  <style scoped>
.google-map {
  width: 1000px;
  height: 700px;
  margin: 0 auto;
  background: gray;
}
</style>
