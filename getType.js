// 외부에서도 사용가능하도록 설정 export default 
export default function getType(data) {
    return Object.prototype.toString.call(data).slice(8, -1)
}