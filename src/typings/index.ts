export interface Lesson {
  title: string;
  video: string;
  poster: string;
  price: string;
  category?: string;
}

// 类别接口
export interface Slider {
  url: string;
}

// 课程接口
export interface Lessons {
  hasMore: boolean;
  loading: boolean;
  offset: number;
  limit: number;
  list: Lessons[];
}

// 导出元祖
export enum CATOGORY_TYPES {
  ALL,
  REACT,
  VUE,
  NODE,
}

// 主页状态
export interface HomeState {
  currentCategory: CATOGORY_TYPES;
  sliders: Slider[];
  lessons: Lessons;
}
