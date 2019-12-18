import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 
            'Bearer TQMmXsise2kDqmqhks7X0m6bY5CTtSYjGTHI9LnhQguwZI1ZB7-PChs1BmL90KyLSmSr02kCthkneI3HXjIx7ck3g4d6okK5_T4hG5VqGmg40bVWo6rRW9MRX0D5XXYx',
    },
});