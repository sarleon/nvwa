
/*

中文，日文，韩文：/[\u4E00-\u9FA5\uF900-\uFA2D]/
全角符号：/[\uFF00-\uFFEF]/


*/
console.log('test_begin');
function remove_space_in_adjancent_character_and_dot(string) {

    var regx_after=/([\u4E00-\u9FA5\uF900-\uFA2D])\s+([\uFF00-\uFFEF\,\.])/g;
    string=string.replace(regx_after,"$1$2");

    var regx_before=/([\uFF00-\uFFEF\,\.])\s+([\u4E00-\u9FA5\uF900-\uFA2D])/g;
    string=string.replace(regx_before,"$1$2");
    return string;
}




document.body.innerHTML=remove_space_in_adjancent_character_and_dot(document.body.innerHTML);