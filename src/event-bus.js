import Vue from 'vue'; // 뷰에서 제공하는 기본 기능들을 사용하기 위해서 vue imort
export const bus = new Vue(); // 버스에 담은 이 이벤트를 다른 컴포넌트에서 사용할 수 있도록 모듈화를 해주면 거칠 필요 없이 서로 연관 없는 다른 곳에서도 사용할 수 있음