module.exports = {
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.jsx?$': 'babel-jest', // JSX와 JS 파일을 위한 변환
    },
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy' // 스타일 시트 모듈을 처리하기 위한 설정
    }
  };
  