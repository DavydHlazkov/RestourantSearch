import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: "Bearer ENIeCBFG8rS_-DBhlDmZpw0HnfYkVePH9ibmdBqfFf_zrQBwfcv2AnWnQr9Hw_AQ3K_CMGWTege4y47zKCaBf95Og7UxkGF923yB1FM4oPEP0uHslCWveiIdVBMzY3Yx"
    }
})