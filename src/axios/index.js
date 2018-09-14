import axios from "axios";
const helpBase = "https://cors-anywhere.herokuapp.com/";
const interfaceUrl="https://www.easy-mock.com/mock/5b3e3917fc9d1e400072ee04/wxx/wxx/grocery";
const comUrl=helpBase+interfaceUrl;

export const getImgList=()=> axios.get(comUrl)
        .then(res=> res.data.data);

export const connectData = (obj) => {
    let _data = obj.settings.map((ite, ind) => {
        ite.thumb = obj.baseUrl + ite.thumb;
        return ite
    });
    return _data;
};