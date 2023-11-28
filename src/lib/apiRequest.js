import axios from 'axios';
import cookies from 'react-cookies';

export default function apiRequest(
  url,
  method = 'GET',
  data = null,
  headers = null,
) {
  //외부API인 경우 http(s)로 시작, 내부API인 경우 localhost:3001 고정
  if (!/^http[s]?/i.test(url)) {
    //http://localhost:3001/api/vi(환경변수) + 매개변수url
    url = process.env.REACT_APP_API_URL + url;
  }

  //요청데티어(data)가 있고 요청메서드가 GET방식 -> 쿼리스트링으로 변환
  if (method.toUpperCase() === 'GET' && data) {
    const searchParams = new URLSearchParams(data);
    url += `?${searchParams.toString()}`;
    data = null;
  }

  const token = cookies.load('token');
  if (token) {
    headers = headers || {};
    headers.Authorization = `Bearer ${token}`;
  }

  return axios({
    method,
    url,
    data,
    headers,
    validationStatus: (state) => state < 500,
  });
}
