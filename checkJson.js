const data = [{
    name: "abc",
    lang: "eng"
},{
    name: "123",
    lang: "lat"
},{
    name: "kkk",
    lang: "lat"
},{
    name: "abc",
    lang: "eng"
}];
let answer = [];
data.forEach(e=>{
    answer.push(isValidObj(e));
});
function isValidObj(e) {
    if(e.lang === "eng" && e.name === "abc" )
        return true;
    return false;
}
console.log(answer);