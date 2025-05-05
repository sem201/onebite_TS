/**
 * 인덱스드 엑세스 타입
 */

// 객체 타입으로부터 특정 프로퍼티의 타입을 뽑아서 변수에 정의하도록 해줌줌
interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string; // 이렇게 추가되더라도 아래의 함수에서 자동으로 추가됨
  };
}

// Post["author"]["id"] // 이렇게 특정 프로퍼티의 특정 프로퍼티를 타입으로 뽑아올 수 도 있다.
function printAuthorInfo(author: Post["author"]) {
  console.log(`${author.name}-${author.id}`);
}

const post: Post = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "이정환",
  },
};

type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
  };
}[];

function printAuthorInfo2(author: PostList[number]["author"]) {
  console.log(`${author.name}-${author.id}`);
}

// 인덱스에 어떤 숫자를 넣던간에 앞에가 배열 타입이면 post2에는 PostList요소중 하나의 타입을 가져온다
const post2: PostList[number] = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "이정환",
  },
};

// 이렇게 튜플타입의 요소를 하나씩 타입으로 가져오는것도 가능하다.
type Tup = [number, string, boolean];
type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];

type Tup3 = Tup[3]; // 에러

type TupNum = Tup[number]; // 튜플타입안에 있는 모든 타입의 최적의 공통 타입을 가져온다
