const sizeAmount={
    "xs" : 1,
    "sm" : 2,
    "md" : 3,
    "lg" : 4,
    "xl" : 5,
    "xxl": 6
}

export function getBreakpoint(){
    if(window.innerWidth<576) return "xs";
    if(window.innerWidth<768) return "sm";
    if(window.innerWidth<992) return "md";
    if(window.innerWidth<1200) return "lg";
    if(window.innerWidth<1400) return "xl";
    return "xxl"
}

export function breakpointValue(bp, xs, sm, md, lg, xl, xxl){
    if(!sizeAmount[bp]) throw "breakpoint 가 올바른 입력값이 아닙니다. 'xs','sm','md','lg','xl','xxl'중에 입력해 주세요."
    if(xs === undefined) throw "xs를 정의해 주세요."
    sm = sm || xs;
    md = md || sm;
    lg = lg || md;
    xl = xl || lg;
    xxl = xxl || xl;
    if(sizeAmount[bp]<sizeAmount['sm']) return xs;
    if(sizeAmount[bp]<sizeAmount['md']) return sm;
    if(sizeAmount[bp]<sizeAmount['lg']) return md;
    if(sizeAmount[bp]<sizeAmount['xl']) return lg;
    if(sizeAmount[bp]<sizeAmount['xxl']) return xl;
    return xxl;
}