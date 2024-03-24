# 사용자가 원하는 그림을 설명을 입력받아 제공하는 사이트
- 배포 URL : https://screenshot-to-data-d2b6a6ad2c88.herokuapp.com/

<img width="1440" alt="스크린샷 2024-03-23 오후 9 17 01" src="https://github.com/Ellie998/screenshot-to-data/assets/89681100/38f0aeed-3767-4793-9ed2-420a3fa171ae">

## 기간
24.03.03, 24.03.14


## 동작
- dall-e를 통해 사용자가 작성한 설명대로 그림을 생성한다.
- 그림 생성 과정에서는 로딩중 아이콘을 표시한다.
- 그림 생성이 완료되면 우측 화면에 그림을 보인다.

## 설계 방법
- Chat GPT API 사용
- node.js 사용

## 요구사항 명세

#### 기능적 요구사항:

1. **사용자 입력 받기**: 사용자로부터 그림에 대한 설명을 텍스트 형태로 입력받는 기능.
2. **이미지 생성**: 사용자가 제공한 설명을 바탕으로 그림을 생성하는 기능.
3. **이미지 표시**: 생성된 이미지를 웹사이트의 오른쪽 화면에 표시하는 기능.
4. **입력 검증**: 사용자가 입력하는 내용이 적절한지 검증하는 기능(예: 비속어 필터링).

#### 비기능적 요구사항:

1. **사용성**: 웹사이트는 사용하기 쉽고 직관적이어야 합니다.
2. **응답 시간**: 이미지 생성 및 표시는 사용자가 기다리는 것을 최소화할 정도로 빠르게 수행되어야 합니다.
3. **보안**: 사용자 입력은 안전하게 처리되어야 하며, 민감한 정보를 요구하지 않아야 합니다.
4. **확장성**: 시스템은 사용자 수가 증가하거나 기능이 추가되어도 성능 저하 없이 확장 가능해야 합니다.
5. **유지보수성**: 코드는 잘 구조화되어 있고, 문서화되어 있어야 하며, 유지보수가 쉬워야 합니다.

### 2. 모델링:

#### 사용자 인터페이스:

- 입력 폼: 사용자가 그림에 대한 설명을 입력할 수 있는 텍스트 박스.
- 제출 버튼: 사용자가 설명을 제출하고 이미지를 생성할 수 있는 버튼.
- 이미지 표시 영역: 생성된 이미지를 표시하는 섹션.

#### 백엔드 구성요소:

- 입력 처리기: 사용자 입력을 받아 검증하고 처리하는 모듈.
- 이미지 생성기: 사용자의 설명을 바탕으로 이미지를 생성하는 엔진.
