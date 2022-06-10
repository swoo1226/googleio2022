# CSS Layers

## 1. [CSS Cascade](https://wit.nts-corp.com/wp-content/uploads/2022/05/011.png)

css cascade(종속)는 css의 강력한 강점이다. CSS가 요소에 적용하고자 하는 스타일의 우선순위를 정할 때 사용하는 알고리즘이다. 서로 다른 원점에서 가져온 속성 여럿을 조합하여 최종 결과를 도출하게 된다. CSS 이름 그 자체를 대표하기도 한다.

![cascade](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQBAupXQBmzbiHoDQiYgUosJezPUxbaZ42JS7Tbs-pZFs3rXlzPM4tCL9ZATfTlOLPKGI&usqp=CAU)

1. Origin ad Importance
2. Context
3. [Style attribute](https://developer.mozilla.org/ko/docs/Web/HTML/Element/style)
4. [Specificity](https://developer.mozilla.org/ko/docs/Web/CSS/Specificity)
5. Order of Apperance

### Origin

- User-agent stylesheets
- Author stylesheets
- User stylesheets

#### User-agent stylesheets

    browser가 가진 기본 스타일 시트
    어떤 html 문서에도 기본 스타일 지정

#### Author stylesheets

    가장 공통된 타입의 스타일 시트
    스타일을 지정된 웹 페이지 또는 사이트 설계의 일부로 정의하는 스타일 시트

#### User stylesheets

    사용자 입맛에 맞게 override 하는 커스텀 스타일 시트

inline style sheet > ID > class > 시멘틱 태그

---

## 2. [Cascade Layers](https://css-tricks.com/css-cascade-layers/)

![cacade layers](https://wit.nts-corp.com/wp-content/uploads/2022/05/0a710ba9-7e47-1064-817e-f60353e22adf.png)

_Layers가 `Specificity`나 `Order of Appearance` 보다 더 높은 기준에 있다!_

또한 layer의 분할이나, 적용시 순서 지정이 가능하다.
