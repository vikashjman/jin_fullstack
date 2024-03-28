import { useSelector } from "react-redux";



export const calculateTime = (work) => {
    const { mon, tue, wed, thrus, fri, sat, sun } = work;

    const monNum = parseInt(mon, 10) || 0;
    const tueNum = parseInt(tue, 10) || 0;
    const wedNum = parseInt(wed, 10) || 0;
    const thrusNum = parseInt(thrus, 10) || 0;
    const friNum = parseInt(fri, 10) || 0;
    const satNum = parseInt(sat, 10) || 0;
    const sunNum = parseInt(sun, 10) || 0;

    const total = monNum + tueNum + wedNum + thrusNum + friNum + satNum + sunNum;
    return total;
};


export const horizontalCal = (works, field) => {
    let sum = 0;
    works.forEach((val) => {
        sum += (parseInt(val[field], 10) || 0)
    })
    return sum;
}


export const calculateTotalHours = (work) => {
    let sum = 0;
    work.forEach((ele) => {
        sum += calculateTime(ele)
    });
    return sum;
}