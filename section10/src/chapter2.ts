/**
 * Pick<T,K>
 * -> 뽑다, 고르다
 * -> 객체 타입으로 부터 특정 프로퍼티만 가져옴
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL: string;
}

type Pick<T, K extends keyof T> = {
  // k extends 'title' | 'tags' | 'content' | 'thumbnailURL'
  // ('title' | 'tags') extends ('title' | 'tags' | 'content' | 'thumbnailURL')
  [key in K]: T[key];
};
const legacyPost: Pick<Post, "title" | "content"> = {
  title: "ds",
  content: "dsad",
};

/**
 * omit<T,K>
 * -> 객체 타입으로부터 특정 프로퍼티를 제거하는 타입
 */

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// T = Post , K = 'title'
// Pick <Post,Exclude<keyof Post,'title>
//Pick <Post,Exclude<'title' | 'tags' | 'content' | 'thumbnailURL' , 'title'>
// Pick<Post, 'tags' | 'content' | 'thumbnailURL'>

const noTitlePost: Omit<Post, "title"> = {
  content: "ds",
  tags: [],
  thumbnailURL: "",
};

/**
 * Record<K,V>
 *
 */

type ThumbnailLegacy = {
  large: {
    url: string;
  };
  medium: { url: string };
  small: { url: string };
};

type Record<K extends keyof any, V> = {
  [key in K]: V;
};

type Thumbnail = Record<"large" | "medium" | "small", { url: string }>;
// 동일한 패턴의 프로퍼티를 한번에 만들어줌
