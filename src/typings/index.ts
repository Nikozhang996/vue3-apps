export interface Ilesson {
  title: string;
  video: string;
  poster: string;
  price: string;
  category?: string;
}

// 类别接口
export interface ISlider {
  url: string;
}

// 课程接口
export interface ILessons {
  hasMore: boolean;
  loading: boolean;
  offset: number;
  limit: number;
  list: ILessons[];
}

// 主页状态
export interface IHomeState {
  currentCategory: CATOGORY_TYPES;
  sliders: ISlider[];
  lessons: ILessons;
}

// 导出元祖
export enum CATOGORY_TYPES {
  ALL,
  REACT,
  VUE,
  NODE,
}
