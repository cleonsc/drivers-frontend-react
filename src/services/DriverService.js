import http from '../http-common.js';

const getAll = () => {
    return http.get(`/drivers`);
}

const get = id => {
    return http.get(`/drivers/${id}`);
}

const create = data => {
    return http.post(`/drivers`, data);
}

const update = (id, data) => {
    return http.put(`/drivers/${id}`, data);
};

const remove = id => {
    return http.delete(`/drivers/${id}`);
};

const findByName = name => {
    return http.get(`/drivers?name=${name}`);
  };

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getAll,
    get,
    create,
    update,
    remove,
    findByName
}
