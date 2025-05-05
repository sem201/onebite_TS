/**
 * 템플릿 리터럴 타입
 */

type Color = "red" | "black" | "green";

type Animal = "dog" | "cat" | "chicken";

type ColorAnimal = "red-dog" | "red-cat" | "red-chicken"; //... 일일이 다 쓰기 귀찮..


// 템플릿 리터럴 타입!

type ColorAnimal2 = `${Color}-${Animal}`;

