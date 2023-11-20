import loadable from '@loadable/component';

const Message = loadable(() => import('./Message'));

/*
    1개 이상의 오류 메시지 배열로 출력
*/

const ErrorMessages = ({ errors, field }) => {
  return (
    errors &&
    errors[field] &&
    errors[field].map((s, i) => <Message key={`${field}_${i}`}>{s}</Message>)
  );
};

export default ErrorMessages;
