export function getBreakpoint(){
    if(window.innerWidth<576) return "xs";
    if(window.innerWidth<768) return "sm";
    if(window.innerWidth<992) return "md";
    if(window.innerWidth<1200) return "lg";
    if(window.innerWidth<1400) return "xl";
    return "xxl"
}

export function moreThan(big, small){
    if(big==='xxl' || small==='xs') return true;
    if(big==="xl" && small!=="xxl") return true;
    if(big==="lg" && small!=="xl" && small!=="xxl") return true;
    if(big==="md" && small!=="xl" && small!=="lg" && small!=="xxl") return true;
    if(big==="sm" && small==="sm") return true;
    return false;
}