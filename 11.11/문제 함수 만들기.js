//*정해진 숫자만큼 출력하는 함수 만들기 ---> printNums ex) (start,end) (from,to) ....    *printNums (숫자 출력 용도)


//*로또 번호 생성 함수 만들기

let lottoArr = []
let lottoResult =[]

//1. 1-45까지의 숫자를 배열에 집어넣는 함수
function nums() {
    const num() {
    for (let i = 1; i <= 45; i++)
        .push(i)

}

//2. 숫자 6개뽑기
function randomNum(arr1, arr2) {
    for (let i = 0; i < 6; i++) {

        const index = parseInt(Math.random() * arr1.length)

        arr1.splice(index, 1) // 당첨번호로 1번 뽑힌 숫자는 lottoArr 배열에서 제거
        arr2.push(index) // 당첨번호롤 뽑힌 숫자를 로또당첨 lottoResult 배열에 넣기
    }

    console.log(arr1)
    console.log(arr2)
}

//3. 이 모든 과정을 한번에 하는 함수
function lottoFun(arr1, arr2) {
    nums(arr1)
    randomNum(arr1,arr2)

}

lottoFun(lottoArr, lottoResult)





//배열을 주면 max값을 찾아내는 함수 만들기


//배열을 주면 min값을 찾아내는 함수 만들기

// function printNames(str1, str2 = "111", str3 = "222"){              //"숫자" 는 기본값
//     console.log(str1)
//     console.log(str2)
//     console.log(str3)
// }
//
// printNames("AAA")
//
// Function calc ( a, b, fn){
//
//     console.log("A : " + a)
//     console.log("B : " + b)
//
//     const result = fn(a + 1, b + 1)
//
//     return result
// }
//
// console.log(calc(10, 20, (x,y) => x + y))
//
// console.log(calc(10, 20, (x,y) => x - y))


//이름 > 파라미터 > 리턴값