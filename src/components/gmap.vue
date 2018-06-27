<template>
  <div class="google-map" :id="mapName"></div>
</template>
<script>
// const BASE_URL = "http://localhost:8000";
const BASE_URL = "http://everyday.com.ng";
export default {
  name: "GoogleMap",
  props: ["name"],
  data: function() {
    return {
      mapName: this.name + "-map",
      circles: [],
      map: null
    };
  },
  mounted: function() {
    let url = BASE_URL + "/sigmap/get_center/";
    fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        console.log(responseJson.center);
        this.loadMap(responseJson.center.lat, responseJson.center.lng);
        // this.circles = responseJson;
        let rj = responseJson;
        let ne = this.drawCircle(rj.ne_center.lat, rj.ne_center.lng);
        let nw = this.drawCircle(rj.nw_center.lat, rj.nw_center.lng);
        let se = this.drawCircle(rj.se_center.lat, rj.se_center.lng);
        let sw = this.drawCircle(rj.sw_center.lat, rj.sw_center.lng);
      });
  },
  methods: {
    loadMap: function(lat, lng) {
      console.log("latitude: " + lat + ", lng: " + lng);
      const element = document.getElementById(this.mapName);
      const options = {
        zoom: 17,
        center: new google.maps.LatLng(lat, lng)
      };
      this.map = new google.maps.Map(element, options);
    },
    drawCircle: function(lat, lng) {
      console.log("drawing circle here: (" + lat + ", " + lng + ")");
      return new google.maps.Circle({
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        map: this.map,
        center: { lat: lat, lng: lng },
        radius: 100
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
