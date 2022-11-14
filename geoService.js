import axios from "axios";

class GeoService {
    // create axios get request to get coordinates from api
    async getCoordinates() {
        let data = await axios.get('http://localhost:3000/api/coordinates');
        console.log(data);
        return data;
    }
}

export default new GeoService();