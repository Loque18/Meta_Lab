import axios from 'axios';

// const endpoint = process.env.ENDPOINT1;
// const endpoint1 = process.env.ENDPOINT;

const endpoint = 'https://kind-gray-badger-tutu.cyclic.app';
// const endpoint = 'http://localhost:5000';

const api = {
    contacts: {
        post: data =>
            axios({
                method: 'post',
                url: `${endpoint}/api/contacts`,
                data,
            }),
    },
};

export default api;
