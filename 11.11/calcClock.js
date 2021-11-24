//12시 38분인 시계의 시침 분침 각도 구하기

function calcTotal(hourValue, minValue){

//1.시침의 각도 구하는 함수 > 입력값(12시) 출력값(각도)
function calcHour(hour) {

    const result = (360 / 12) * (hour % 12)
    return result
}
   //분침의 각도
    const calcMin = min => (360 / 60) * min                 //화살표 함수

//2.분침에 따른 시침의 이동 각도를 구하는 함수2
function getExtra (min) {
    return ((360 / 12) / 60) * min
}
    const result = Math.abs((calcHour(hourValue) + getExtra(minValue)) - calcMin(minValue))

    return result > 180 ? 360 - result : result

}
// 12시 38분으로 정함
console.log(calcTotal(12,38))



