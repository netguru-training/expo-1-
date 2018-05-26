import axios from 'axios';
import {
    GET_WEATHER_REQUEST,
    GET_WEATHER_SUCCESS,
    GET_WEATHER_FAIL
} from '../types';
//import apiKeys from '../../../api_config';

const WEATHER_KEY = ''//apiKeys.weatherKey;


export const getWeatherRequest = () => {
  return {
    type: GET_WEATHER_REQUEST,
  };
};

export const getWeatherSuccess = (weatherData) => {
  return {
    type: GET_WEATHER_SUCCESS,
    payload: { weatherData },
  };
};

export const getWeatherFail = (error) => {
  return {
    type: GET_WEATHER_FAIL,
    payload: { error },
  };
};

export function getWeather() {
    return (dispatch) => {
        const apiUrl = 'https://api.weatherbit.io/v2.0/forecast/daily';
        dispatch(getWeatherRequest());
        navigator.geolocation.getCurrentPosition((loc) => {
            const { latitude, longitude } = loc.coords;
            const reqParams = `lat=${latitude}&lon=${longitude}&key=${WEATHER_KEY}`;
             dispatch(getWeatherSuccess({...fakeApi.data.weatherData}));
            // axios.get(`${apiUrl}?${reqParams}`).then((res) => {
            //     dispatch(getWeatherSuccess(res));
            //     console.log(res);
            // }).catch((err) => {
            //     dispatch(getWeatherFail(err));
            // });
        });
    }
}



const fakeApi = {"loading":false,"error":{},"data":{"weatherData":{"data":{"data":[{"wind_cdir":"SSE","app_min_temp":18.3,"wind_gust_spd":4.75073,"rh":50,"wind_spd":1.05688,"pop":15,"wind_cdir_full":"south-southeast","app_max_temp":25.2,"slp":1021.55,"clouds_mid":4,"snow_depth":0,"valid_date":"2018-05-26","pres":1013.26,"clouds_low":1,"dewpt":11.4,"snow":0,"uv":6.0747,"wind_dir":157,"ozone":364.703,"weather":{"icon":"c02d","code":802,"description":"Scattered clouds"},"clouds_hi":16,"precip":0.0595703,"max_dhi":null,"max_temp":25.5,"ts":1527285660,"datetime":"2018-05-26","temp":22.9,"min_temp":18.3,"clouds":20,"vis":0},{"wind_cdir":"E","app_min_temp":15.1,"wind_gust_spd":7.41483,"rh":67,"wind_spd":1.98005,"pop":15,"wind_cdir_full":"east","app_max_temp":26.9,"slp":1021.8,"clouds_mid":4,"snow_depth":0,"valid_date":"2018-05-27","pres":1013.49,"clouds_low":3,"dewpt":14.1,"snow":0,"uv":7.98488,"wind_dir":101,"ozone":348.4,"weather":{"icon":"c02d","code":802,"description":"Scattered clouds"},"clouds_hi":15,"precip":0.0585938,"max_dhi":null,"max_temp":27,"ts":1527372060,"datetime":"2018-05-27","temp":21.5,"min_temp":15.1,"clouds":21,"vis":0},{"wind_cdir":"ESE","app_min_temp":16.7,"wind_gust_spd":10.3926,"rh":57,"wind_spd":3.07169,"pop":0,"wind_cdir_full":"east-southeast","app_max_temp":27.7,"slp":1021.58,"clouds_mid":1,"snow_depth":0,"valid_date":"2018-05-28","pres":1013.3,"clouds_low":0,"dewpt":12.8,"snow":0,"uv":8.12554,"wind_dir":104,"ozone":328.891,"weather":{"icon":"c02d","code":801,"description":"Few clouds"},"clouds_hi":17,"precip":0,"max_dhi":null,"max_temp":28.7,"ts":1527458460,"datetime":"2018-05-28","temp":22.5,"min_temp":16.7,"clouds":19,"vis":0},{"wind_cdir":"ESE","app_min_temp":15.1,"wind_gust_spd":10.3862,"rh":51,"wind_spd":3.23306,"pop":0,"wind_cdir_full":"east-southeast","app_max_temp":27.4,"slp":1019.05,"clouds_mid":0,"snow_depth":0,"valid_date":"2018-05-29","pres":1010.75,"clouds_low":0,"dewpt":9.6,"snow":0,"uv":9.35261,"wind_dir":104,"ozone":327.929,"weather":{"icon":"c01d","code":800,"description":"Clear Sky"},"clouds_hi":0,"precip":0,"max_dhi":null,"max_temp":28.2,"ts":1527544860,"datetime":"2018-05-29","temp":20.5,"min_temp":15.1,"clouds":0,"vis":0},{"wind_cdir":"ESE","app_min_temp":16.9,"wind_gust_spd":8.60098,"rh":52,"wind_spd":2.54517,"pop":0,"wind_cdir_full":"east-southeast","app_max_temp":29.1,"slp":1014.24,"clouds_mid":8,"snow_depth":0,"valid_date":"2018-05-30","pres":1006.03,"clouds_low":0,"dewpt":12.9,"snow":0,"uv":8.82049,"wind_dir":106,"ozone":332.227,"weather":{"icon":"c02d","code":801,"description":"Few clouds"},"clouds_hi":0,"precip":0,"max_dhi":null,"max_temp":30.3,"ts":1527631260,"datetime":"2018-05-30","temp":24.1,"min_temp":16.9,"clouds":8,"vis":0},{"wind_cdir":"ENE","app_min_temp":17.1,"wind_gust_spd":8.95764,"rh":65,"wind_spd":2.67704,"pop":15,"wind_cdir_full":"east-northeast","app_max_temp":27.4,"slp":1012.3,"clouds_mid":0,"snow_depth":0,"valid_date":"2018-05-31","pres":1002.88,"clouds_low":8,"dewpt":14.6,"snow":0,"uv":5.66981,"wind_dir":74,"ozone":345.125,"weather":{"icon":"c02d","code":802,"description":"Scattered clouds"},"clouds_hi":21,"precip":1.1875,"max_dhi":null,"max_temp":27.5,"ts":1527717660,"datetime":"2018-05-31","temp":21.7,"min_temp":17.1,"clouds":27,"vis":23.83},{"wind_cdir":"E","app_min_temp":14.8,"wind_gust_spd":13.1204,"rh":73,"wind_spd":5.02544,"pop":40,"wind_cdir_full":"east","app_max_temp":27.7,"slp":1012.5,"clouds_mid":28,"snow_depth":0,"valid_date":"2018-06-01","pres":1003.24,"clouds_low":0,"dewpt":16.3,"snow":0,"uv":3.25162,"wind_dir":93,"ozone":351.715,"weather":{"icon":"c04d","code":804,"description":"Overcast clouds"},"clouds_hi":60,"precip":4.1875,"max_dhi":null,"max_temp":27.6,"ts":1527804060,"datetime":"2018-06-01","temp":21.7,"min_temp":14.5,"clouds":81,"vis":20.8625},{"wind_cdir":"ESE","app_min_temp":18.5,"wind_gust_spd":12.5265,"rh":67,"wind_spd":5.01782,"pop":15,"wind_cdir_full":"east-southeast","app_max_temp":28.8,"slp":1012.63,"clouds_mid":2,"snow_depth":0,"valid_date":"2018-06-02","pres":1003.1,"clouds_low":0,"dewpt":16.4,"snow":0,"uv":6.45619,"wind_dir":106,"ozone":342.295,"weather":{"icon":"c04d","code":804,"description":"Overcast clouds"},"clouds_hi":75,"precip":0.3125,"max_dhi":null,"max_temp":28.4,"ts":1527890460,"datetime":"2018-06-02","temp":23.2,"min_temp":18.4,"clouds":75,"vis":24.1},{"wind_cdir":"ESE","app_min_temp":18.8,"wind_gust_spd":8.30229,"rh":71,"wind_spd":2.97843,"pop":25,"wind_cdir_full":"east-southeast","app_max_temp":28.9,"slp":1012.64,"clouds_mid":13,"snow_depth":0,"valid_date":"2018-06-03","pres":1003.13,"clouds_low":0,"dewpt":17.5,"snow":0,"uv":3.82827,"wind_dir":113,"ozone":336.295,"weather":{"icon":"c04d","code":804,"description":"Overcast clouds"},"clouds_hi":88,"precip":2.25,"max_dhi":null,"max_temp":28.8,"ts":1527976860,"datetime":"2018-06-03","temp":23.4,"min_temp":18.4,"clouds":88,"vis":23.1125},{"wind_cdir":"ESE","app_min_temp":18.7,"wind_gust_spd":11.3142,"rh":70,"wind_spd":4.49727,"pop":25,"wind_cdir_full":"east-southeast","app_max_temp":29,"slp":1015.36,"clouds_mid":6,"snow_depth":0,"valid_date":"2018-06-04","pres":1005.88,"clouds_low":0,"dewpt":17.5,"snow":0,"uv":8.24003,"wind_dir":103,"ozone":337.904,"weather":{"icon":"c03d","code":803,"description":"Broken clouds"},"clouds_hi":44,"precip":2,"max_dhi":null,"max_temp":28.2,"ts":1528063260,"datetime":"2018-06-04","temp":23.6,"min_temp":18.4,"clouds":44,"vis":22.125},{"wind_cdir":"ESE","app_min_temp":19.6,"wind_gust_spd":10.1144,"rh":63,"wind_spd":4.77039,"pop":0,"wind_cdir_full":"east-southeast","app_max_temp":28.1,"slp":1015.68,"clouds_mid":0,"snow_depth":0,"valid_date":"2018-06-05","pres":1006.04,"clouds_low":0,"dewpt":16,"snow":0,"uv":9.13525,"wind_dir":121,"ozone":351.276,"weather":{"icon":"c01d","code":800,"description":"Clear Sky"},"clouds_hi":0,"precip":0,"max_dhi":null,"max_temp":28,"ts":1528149660,"datetime":"2018-06-05","temp":23.5,"min_temp":16.9,"clouds":0,"vis":24.1},{"wind_cdir":"ESE","app_min_temp":20,"wind_gust_spd":5.82063,"rh":73,"wind_spd":3.53405,"pop":65,"wind_cdir_full":"east-southeast","app_max_temp":28.1,"slp":1015.36,"clouds_mid":66,"snow_depth":0,"valid_date":"2018-06-06","pres":1005.83,"clouds_low":0,"dewpt":17.9,"snow":0,"uv":3.08858,"wind_dir":116,"ozone":337.766,"weather":{"icon":"r01d","code":500,"description":"Light rain"},"clouds_hi":72,"precip":10.9375,"max_dhi":null,"max_temp":27.6,"ts":1528236060,"datetime":"2018-06-06","temp":23.5,"min_temp":19.3,"clouds":84,"vis":15.1501},{"wind_cdir":"ESE","app_min_temp":19.8,"wind_gust_spd":9.30847,"rh":66,"wind_spd":4.73156,"pop":15,"wind_cdir_full":"east-southeast","app_max_temp":30,"slp":1016.96,"clouds_mid":0,"snow_depth":0,"valid_date":"2018-06-07","pres":1007.21,"clouds_low":2,"dewpt":17.1,"snow":0,"uv":8.84521,"wind_dir":121,"ozone":335.817,"weather":{"icon":"c03d","code":803,"description":"Broken clouds"},"clouds_hi":46,"precip":1.0625,"max_dhi":null,"max_temp":29.3,"ts":1528322460,"datetime":"2018-06-07","temp":24.3,"min_temp":18.4,"clouds":48,"vis":24.1001},{"wind_cdir":"SE","app_min_temp":20.6,"wind_gust_spd":8.20992,"rh":63,"wind_spd":4.43327,"pop":25,"wind_cdir_full":"southeast","app_max_temp":29.9,"slp":1015.88,"clouds_mid":0,"snow_depth":0,"valid_date":"2018-06-08","pres":1006.18,"clouds_low":3,"dewpt":17.1,"snow":0,"uv":8.03386,"wind_dir":134,"ozone":332.648,"weather":{"icon":"c02d","code":801,"description":"Few clouds"},"clouds_hi":9,"precip":2,"max_dhi":null,"max_temp":29.5,"ts":1528408860,"datetime":"2018-06-08","temp":24.9,"min_temp":18.8,"clouds":12,"vis":23.5},{"wind_cdir":"ESE","app_min_temp":20.4,"wind_gust_spd":5.14913,"rh":63,"wind_spd":3.50212,"pop":20,"wind_cdir_full":"east-southeast","app_max_temp":29.5,"slp":1014.28,"clouds_mid":0,"snow_depth":0,"valid_date":"2018-06-09","pres":1004.71,"clouds_low":2,"dewpt":16.8,"snow":0,"uv":8.42385,"wind_dir":120,"ozone":342.709,"weather":{"icon":"c02d","code":801,"description":"Few clouds"},"clouds_hi":4,"precip":1.6875,"max_dhi":null,"max_temp":28.9,"ts":1528495260,"datetime":"2018-06-09","temp":24.6,"min_temp":18.9,"clouds":6,"vis":22.65},{"wind_cdir":"ESE","app_min_temp":19,"wind_gust_spd":6.49495,"rh":63,"wind_spd":3.85837,"pop":0,"wind_cdir_full":"east-southeast","app_max_temp":28.2,"slp":1011.24,"clouds_mid":0,"snow_depth":0,"valid_date":"2018-06-10","pres":1001.55,"clouds_low":0,"dewpt":15.6,"snow":0,"uv":8.49681,"wind_dir":109,"ozone":347.913,"weather":{"icon":"c02d","code":801,"description":"Few clouds"},"clouds_hi":6,"precip":0,"max_dhi":null,"max_temp":28.3,"ts":1528581660,"datetime":"2018-06-10","temp":23.5,"min_temp":17.6,"clouds":6,"vis":24.1}],"city_name":"Poznań","lon":16.89,"timezone":"Europe/Warsaw","lat":52.4,"country_code":"PL","state_code":"86"},"status":200,"headers":{"x-iplb-instance":"12422","server":"openresty/1.11.2.2","x-cache-key":"api.weatherbit.io/v2.0/forecast/daily?lat=52.4&lon=16.89&key=c34e274d500d40118013ecb4d242b02a","x-ratelimit-limit":"75","content-encoding":"gzip","transfer-encoding":"Identity","content-type":"application/json; charset=utf-8","access-control-allow-origin":"*","access-control-allow-methods":"GET, OPTIONS, POST","x-ratelimit-reset":"1527343583","x-ratelimit-remaining":"55","x-proxy-cache":"HIT","access-control-expose-headers":"DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Content-Range,Range","access-control-allow-headers":"DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Content-Range,Range","date":"Sat, 26 May 2018 13:39:02 GMT"},"config":{"transformRequest":{},"transformResponse":{},"timeout":0,"xsrfCookieName":"XSRF-TOKEN","xsrfHeaderName":"X-XSRF-TOKEN","maxContentLength":-1,"headers":{"Accept":"application/json, text/plain, */*"},"method":"get","url":"https://api.weatherbit.io/v2.0/forecast/daily?lat=52.401501996465036&lon=16.894312351597407&key=c34e274d500d40118013ecb4d242b02a"},"request":{"UNSENT":0,"OPENED":1,"HEADERS_RECEIVED":2,"LOADING":3,"DONE":4,"readyState":4,"status":200,"timeout":0,"withCredentials":true,"upload":{},"_aborted":false,"_hasError":false,"_method":"GET","_response":"{\"data\":[{\"wind_cdir\":\"SSE\",\"app_min_temp\":18.3,\"wind_gust_spd\":4.75073,\"rh\":50,\"wind_spd\":1.05688,\"pop\":15,\"wind_cdir_full\":\"south-southeast\",\"app_max_temp\":25.2,\"slp\":1021.55,\"clouds_mid\":4,\"snow_depth\":0,\"valid_date\":\"2018-05-26\",\"pres\":1013.26,\"clouds_low\":1,\"dewpt\":11.4,\"snow\":0,\"uv\":6.0747,\"wind_dir\":157,\"ozone\":364.703,\"weather\":{\"icon\":\"c02d\",\"code\":802,\"description\":\"Scattered clouds\"},\"clouds_hi\":16,\"precip\":0.0595703,\"max_dhi\":null,\"max_temp\":25.5,\"ts\":1527285660,\"datetime\":\"2018-05-26\",\"temp\":22.9,\"min_temp\":18.3,\"clouds\":20,\"vis\":0},{\"wind_cdir\":\"E\",\"app_min_temp\":15.1,\"wind_gust_spd\":7.41483,\"rh\":67,\"wind_spd\":1.98005,\"pop\":15,\"wind_cdir_full\":\"east\",\"app_max_temp\":26.9,\"slp\":1021.8,\"clouds_mid\":4,\"snow_depth\":0,\"valid_date\":\"2018-05-27\",\"pres\":1013.49,\"clouds_low\":3,\"dewpt\":14.1,\"snow\":0,\"uv\":7.98488,\"wind_dir\":101,\"ozone\":348.4,\"weather\":{\"icon\":\"c02d\",\"code\":802,\"description\":\"Scattered clouds\"},\"clouds_hi\":15,\"precip\":0.0585938,\"max_dhi\":null,\"max_temp\":27,\"ts\":1527372060,\"datetime\":\"2018-05-27\",\"temp\":21.5,\"min_temp\":15.1,\"clouds\":21,\"vis\":0},{\"wind_cdir\":\"ESE\",\"app_min_temp\":16.7,\"wind_gust_spd\":10.3926,\"rh\":57,\"wind_spd\":3.07169,\"pop\":0,\"wind_cdir_full\":\"east-southeast\",\"app_max_temp\":27.7,\"slp\":1021.58,\"clouds_mid\":1,\"snow_depth\":0,\"valid_date\":\"2018-05-28\",\"pres\":1013.3,\"clouds_low\":0,\"dewpt\":12.8,\"snow\":0,\"uv\":8.12554,\"wind_dir\":104,\"ozone\":328.891,\"weather\":{\"icon\":\"c02d\",\"code\":801,\"description\":\"Few clouds\"},\"clouds_hi\":17,\"precip\":0,\"max_dhi\":null,\"max_temp\":28.7,\"ts\":1527458460,\"datetime\":\"2018-05-28\",\"temp\":22.5,\"min_temp\":16.7,\"clouds\":19,\"vis\":0},{\"wind_cdir\":\"ESE\",\"app_min_temp\":15.1,\"wind_gust_spd\":10.3862,\"rh\":51,\"wind_spd\":3.23306,\"pop\":0,\"wind_cdir_full\":\"east-southeast\",\"app_max_temp\":27.4,\"slp\":1019.05,\"clouds_mid\":0,\"snow_depth\":0,\"valid_date\":\"2018-05-29\",\"pres\":1010.75,\"clouds_low\":0,\"dewpt\":9.6,\"snow\":0,\"uv\":9.35261,\"wind_dir\":104,\"ozone\":327.929,\"weather\":{\"icon\":\"c01d\",\"code\":800,\"description\":\"Clear Sky\"},\"clouds_hi\":0,\"precip\":0,\"max_dhi\":null,\"max_temp\":28.2,\"ts\":1527544860,\"datetime\":\"2018-05-29\",\"temp\":20.5,\"min_temp\":15.1,\"clouds\":0,\"vis\":0},{\"wind_cdir\":\"ESE\",\"app_min_temp\":16.9,\"wind_gust_spd\":8.60098,\"rh\":52,\"wind_spd\":2.54517,\"pop\":0,\"wind_cdir_full\":\"east-southeast\",\"app_max_temp\":29.1,\"slp\":1014.24,\"clouds_mid\":8,\"snow_depth\":0,\"valid_date\":\"2018-05-30\",\"pres\":1006.03,\"clouds_low\":0,\"dewpt\":12.9,\"snow\":0,\"uv\":8.82049,\"wind_dir\":106,\"ozone\":332.227,\"weather\":{\"icon\":\"c02d\",\"code\":801,\"description\":\"Few clouds\"},\"clouds_hi\":0,\"precip\":0,\"max_dhi\":null,\"max_temp\":30.3,\"ts\":1527631260,\"datetime\":\"2018-05-30\",\"temp\":24.1,\"min_temp\":16.9,\"clouds\":8,\"vis\":0},{\"wind_cdir\":\"ENE\",\"app_min_temp\":17.1,\"wind_gust_spd\":8.95764,\"rh\":65,\"wind_spd\":2.67704,\"pop\":15,\"wind_cdir_full\":\"east-northeast\",\"app_max_temp\":27.4,\"slp\":1012.3,\"clouds_mid\":0,\"snow_depth\":0,\"valid_date\":\"2018-05-31\",\"pres\":1002.88,\"clouds_low\":8,\"dewpt\":14.6,\"snow\":0,\"uv\":5.66981,\"wind_dir\":74,\"ozone\":345.125,\"weather\":{\"icon\":\"c02d\",\"code\":802,\"description\":\"Scattered clouds\"},\"clouds_hi\":21,\"precip\":1.1875,\"max_dhi\":null,\"max_temp\":27.5,\"ts\":1527717660,\"datetime\":\"2018-05-31\",\"temp\":21.7,\"min_temp\":17.1,\"clouds\":27,\"vis\":23.83},{\"wind_cdir\":\"E\",\"app_min_temp\":14.8,\"wind_gust_spd\":13.1204,\"rh\":73,\"wind_spd\":5.02544,\"pop\":40,\"wind_cdir_full\":\"east\",\"app_max_temp\":27.7,\"slp\":1012.5,\"clouds_mid\":28,\"snow_depth\":0,\"valid_date\":\"2018-06-01\",\"pres\":1003.24,\"clouds_low\":0,\"dewpt\":16.3,\"snow\":0,\"uv\":3.25162,\"wind_dir\":93,\"ozone\":351.715,\"weather\":{\"icon\":\"c04d\",\"code\":804,\"description\":\"Overcast clouds\"},\"clouds_hi\":60,\"precip\":4.1875,\"max_dhi\":null,\"max_temp\":27.6,\"ts\":1527804060,\"datetime\":\"2018-06-01\",\"temp\":21.7,\"min_temp\":14.5,\"clouds\":81,\"vis\":20.8625},{\"wind_cdir\":\"ESE\",\"app_min_temp\":18.5,\"wind_gust_spd\":12.5265,\"rh\":67,\"wind_spd\":5.01782,\"pop\":15,\"wind_cdir_full\":\"east-southeast\",\"app_max_temp\":28.8,\"slp\":1012.63,\"clouds_mid\":2,\"snow_depth\":0,\"valid_date\":\"2018-06-02\",\"pres\":1003.1,\"clouds_low\":0,\"dewpt\":16.4,\"snow\":0,\"uv\":6.45619,\"wind_dir\":106,\"ozone\":342.295,\"weather\":{\"icon\":\"c04d\",\"code\":804,\"description\":\"Overcast clouds\"},\"clouds_hi\":75,\"precip\":0.3125,\"max_dhi\":null,\"max_temp\":28.4,\"ts\":1527890460,\"datetime\":\"2018-06-02\",\"temp\":23.2,\"min_temp\":18.4,\"clouds\":75,\"vis\":24.1},{\"wind_cdir\":\"ESE\",\"app_min_temp\":18.8,\"wind_gust_spd\":8.30229,\"rh\":71,\"wind_spd\":2.97843,\"pop\":25,\"wind_cdir_full\":\"east-southeast\",\"app_max_temp\":28.9,\"slp\":1012.64,\"clouds_mid\":13,\"snow_depth\":0,\"valid_date\":\"2018-06-03\",\"pres\":1003.13,\"clouds_low\":0,\"dewpt\":17.5,\"snow\":0,\"uv\":3.82827,\"wind_dir\":113,\"ozone\":336.295,\"weather\":{\"icon\":\"c04d\",\"code\":804,\"description\":\"Overcast clouds\"},\"clouds_hi\":88,\"precip\":2.25,\"max_dhi\":null,\"max_temp\":28.8,\"ts\":1527976860,\"datetime\":\"2018-06-03\",\"temp\":23.4,\"min_temp\":18.4,\"clouds\":88,\"vis\":23.1125},{\"wind_cdir\":\"ESE\",\"app_min_temp\":18.7,\"wind_gust_spd\":11.3142,\"rh\":70,\"wind_spd\":4.49727,\"pop\":25,\"wind_cdir_full\":\"east-southeast\",\"app_max_temp\":29,\"slp\":1015.36,\"clouds_mid\":6,\"snow_depth\":0,\"valid_date\":\"2018-06-04\",\"pres\":1005.88,\"clouds_low\":0,\"dewpt\":17.5,\"snow\":0,\"uv\":8.24003,\"wind_dir\":103,\"ozone\":337.904,\"weather\":{\"icon\":\"c03d\",\"code\":803,\"description\":\"Broken clouds\"},\"clouds_hi\":44,\"precip\":2,\"max_dhi\":null,\"max_temp\":28.2,\"ts\":1528063260,\"datetime\":\"2018-06-04\",\"temp\":23.6,\"min_temp\":18.4,\"clouds\":44,\"vis\":22.125},{\"wind_cdir\":\"ESE\",\"app_min_temp\":19.6,\"wind_gust_spd\":10.1144,\"rh\":63,\"wind_spd\":4.77039,\"pop\":0,\"wind_cdir_full\":\"east-southeast\",\"app_max_temp\":28.1,\"slp\":1015.68,\"clouds_mid\":0,\"snow_depth\":0,\"valid_date\":\"2018-06-05\",\"pres\":1006.04,\"clouds_low\":0,\"dewpt\":16,\"snow\":0,\"uv\":9.13525,\"wind_dir\":121,\"ozone\":351.276,\"weather\":{\"icon\":\"c01d\",\"code\":800,\"description\":\"Clear Sky\"},\"clouds_hi\":0,\"precip\":0,\"max_dhi\":null,\"max_temp\":28,\"ts\":1528149660,\"datetime\":\"2018-06-05\",\"temp\":23.5,\"min_temp\":16.9,\"clouds\":0,\"vis\":24.1},{\"wind_cdir\":\"ESE\",\"app_min_temp\":20,\"wind_gust_spd\":5.82063,\"rh\":73,\"wind_spd\":3.53405,\"pop\":65,\"wind_cdir_full\":\"east-southeast\",\"app_max_temp\":28.1,\"slp\":1015.36,\"clouds_mid\":66,\"snow_depth\":0,\"valid_date\":\"2018-06-06\",\"pres\":1005.83,\"clouds_low\":0,\"dewpt\":17.9,\"snow\":0,\"uv\":3.08858,\"wind_dir\":116,\"ozone\":337.766,\"weather\":{\"icon\":\"r01d\",\"code\":500,\"description\":\"Light rain\"},\"clouds_hi\":72,\"precip\":10.9375,\"max_dhi\":null,\"max_temp\":27.6,\"ts\":1528236060,\"datetime\":\"2018-06-06\",\"temp\":23.5,\"min_temp\":19.3,\"clouds\":84,\"vis\":15.1501},{\"wind_cdir\":\"ESE\",\"app_min_temp\":19.8,\"wind_gust_spd\":9.30847,\"rh\":66,\"wind_spd\":4.73156,\"pop\":15,\"wind_cdir_full\":\"east-southeast\",\"app_max_temp\":30,\"slp\":1016.96,\"clouds_mid\":0,\"snow_depth\":0,\"valid_date\":\"2018-06-07\",\"pres\":1007.21,\"clouds_low\":2,\"dewpt\":17.1,\"snow\":0,\"uv\":8.84521,\"wind_dir\":121,\"ozone\":335.817,\"weather\":{\"icon\":\"c03d\",\"code\":803,\"description\":\"Broken clouds\"},\"clouds_hi\":46,\"precip\":1.0625,\"max_dhi\":null,\"max_temp\":29.3,\"ts\":1528322460,\"datetime\":\"2018-06-07\",\"temp\":24.3,\"min_temp\":18.4,\"clouds\":48,\"vis\":24.1001},{\"wind_cdir\":\"SE\",\"app_min_temp\":20.6,\"wind_gust_spd\":8.20992,\"rh\":63,\"wind_spd\":4.43327,\"pop\":25,\"wind_cdir_full\":\"southeast\",\"app_max_temp\":29.9,\"slp\":1015.88,\"clouds_mid\":0,\"snow_depth\":0,\"valid_date\":\"2018-06-08\",\"pres\":1006.18,\"clouds_low\":3,\"dewpt\":17.1,\"snow\":0,\"uv\":8.03386,\"wind_dir\":134,\"ozone\":332.648,\"weather\":{\"icon\":\"c02d\",\"code\":801,\"description\":\"Few clouds\"},\"clouds_hi\":9,\"precip\":2,\"max_dhi\":null,\"max_temp\":29.5,\"ts\":1528408860,\"datetime\":\"2018-06-08\",\"temp\":24.9,\"min_temp\":18.8,\"clouds\":12,\"vis\":23.5},{\"wind_cdir\":\"ESE\",\"app_min_temp\":20.4,\"wind_gust_spd\":5.14913,\"rh\":63,\"wind_spd\":3.50212,\"pop\":20,\"wind_cdir_full\":\"east-southeast\",\"app_max_temp\":29.5,\"slp\":1014.28,\"clouds_mid\":0,\"snow_depth\":0,\"valid_date\":\"2018-06-09\",\"pres\":1004.71,\"clouds_low\":2,\"dewpt\":16.8,\"snow\":0,\"uv\":8.42385,\"wind_dir\":120,\"ozone\":342.709,\"weather\":{\"icon\":\"c02d\",\"code\":801,\"description\":\"Few clouds\"},\"clouds_hi\":4,\"precip\":1.6875,\"max_dhi\":null,\"max_temp\":28.9,\"ts\":1528495260,\"datetime\":\"2018-06-09\",\"temp\":24.6,\"min_temp\":18.9,\"clouds\":6,\"vis\":22.65},{\"wind_cdir\":\"ESE\",\"app_min_temp\":19,\"wind_gust_spd\":6.49495,\"rh\":63,\"wind_spd\":3.85837,\"pop\":0,\"wind_cdir_full\":\"east-southeast\",\"app_max_temp\":28.2,\"slp\":1011.24,\"clouds_mid\":0,\"snow_depth\":0,\"valid_date\":\"2018-06-10\",\"pres\":1001.55,\"clouds_low\":0,\"dewpt\":15.6,\"snow\":0,\"uv\":8.49681,\"wind_dir\":109,\"ozone\":347.913,\"weather\":{\"icon\":\"c02d\",\"code\":801,\"description\":\"Few clouds\"},\"clouds_hi\":6,\"precip\":0,\"max_dhi\":null,\"max_temp\":28.3,\"ts\":1528581660,\"datetime\":\"2018-06-10\",\"temp\":23.5,\"min_temp\":17.6,\"clouds\":6,\"vis\":24.1}],\"city_name\":\"Poznań\",\"lon\":16.89,\"timezone\":\"Europe\\/Warsaw\",\"lat\":52.4,\"country_code\":\"PL\",\"state_code\":\"86\"}\n","_url":"https://api.weatherbit.io/v2.0/forecast/daily?lat=52.401501996465036&lon=16.894312351597407&key=c34e274d500d40118013ecb4d242b02a","_timedOut":false,"_trackingName":"unknown","_incrementalEvents":false,"responseHeaders":{"X-IPLB-Instance":"12422","Server":"openresty/1.11.2.2","X-Cache-Key":"api.weatherbit.io/v2.0/forecast/daily?lat=52.4&lon=16.89&key=c34e274d500d40118013ecb4d242b02a","X-RateLimit-Limit":"75","Content-Encoding":"gzip","Transfer-Encoding":"Identity","Content-Type":"application/json; charset=utf-8","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET, OPTIONS, POST","X-RateLimit-Reset":"1527343583","X-RateLimit-Remaining":"55","X-Proxy-Cache":"HIT","Access-Control-Expose-Headers":"DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Content-Range,Range","Access-Control-Allow-Headers":"DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Content-Range,Range","Date":"Sat, 26 May 2018 13:39:02 GMT"},"_requestId":null,"_headers":{"accept":"application/json, text/plain, */*"},"_responseType":"","_sent":true,"_lowerCaseResponseHeaders":{"x-iplb-instance":"12422","server":"openresty/1.11.2.2","x-cache-key":"api.weatherbit.io/v2.0/forecast/daily?lat=52.4&lon=16.89&key=c34e274d500d40118013ecb4d242b02a","x-ratelimit-limit":"75","content-encoding":"gzip","transfer-encoding":"Identity","content-type":"application/json; charset=utf-8","access-control-allow-origin":"*","access-control-allow-methods":"GET, OPTIONS, POST","x-ratelimit-reset":"1527343583","x-ratelimit-remaining":"55","x-proxy-cache":"HIT","access-control-expose-headers":"DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Content-Range,Range","access-control-allow-headers":"DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Content-Range,Range","date":"Sat, 26 May 2018 13:39:02 GMT"},"_subscriptions":[],"responseURL":"https://api.weatherbit.io/v2.0/forecast/daily?lat=52.401501996465036&lon=16.894312351597407&key=c34e274d500d40118013ecb4d242b02a"}}},"errorMsg":""}
