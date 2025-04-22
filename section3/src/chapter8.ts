/**
 * 서로소 유니온 타입
 * 교집합이 없는 타입들로만 만든 유니온 타입을 말함
 */

//tag 속성을 리터럴로 만들어주면서, 각각의 타입이 서로소가 된다.
type Admin = {
  tag: "ADMIN";
  name: string;
  kickCount: number;
};

type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};

type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

// Admin -> {name} 님 현재까지 {kickCount}명 강퇴했습니다.
// Member -> {name} 님 현재까지 {point}모았습니다.
// Guest -> {name} 님 현재까지 {visitCount}번 방문했습니다.

function login(user: User) {
  //   if ("kickCount" in user) {
  //     // admin 타입
  //     console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
  //   } else if ("point" in user) {
  //     // member 타입
  //     console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`);
  //   } else {
  //     // guest 타입
  //     console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문했습니다.`);
  //   }
  //tag를 이용하여 보다 직관적인 타입가드를 만든다.
  // 방법 1
  if (user.tag === "ADMIN") {
    // admin 타입
    console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
  } else if (user.tag === "MEMBER") {
    // member 타입
    console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`);
  } else {
    // guest 타입
    console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문했습니다.`);
  }
  // 방법 2.
  switch (user.tag) {
    case "ADMIN":
      console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
      break;
    case "MEMBER":
      console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`);
      break;
    case "GUEST":
      console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문했습니다.`);
      break;
  }
}

/**
 * 복습겸 다른 사례
 */

// 비동기 작업의 결과를 처리하는 객체

type LoadingTask = {
  state: "loading";
};
type FailedTask = {
  state: "failed";
  error: {
    message: string;
  };
};

type SuccessTask = {
  state: "success";
  response: {
    data: string;
  };
};

type AsyncTask = LoadingTask | FailedTask | SuccessTask;
// 로딩 중 -> 콘솔에 로딩중 출력
// 실패 - > 실패: 에러메시지를 출력
// 성공 -> 성공: 데이터를 출력
function processResult(task: AsyncTask) {
  switch (task.state) {
    case "loading":
      console.log("로딩중입니다.");
      break;
    case "failed":
      console.log(`실패 : ${task.error.message}`);
      break;
    case "success":
      console.log(`성공 : ${task.response.data}`);
  }
}

const loading: AsyncTask = {
  state: "loading",
};

const failed: AsyncTask = {
  state: "failed",
  error: {
    message: "에러가 발생했습니다.",
  },
};

const success: AsyncTask = {
  state: "success",
  response: {
    data: "데이터",
  },
};
