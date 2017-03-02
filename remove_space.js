
/*

中文，日文，韩文：/[\u4E00-\u9FA5\uF900-\uFA2D]/
全角符号：/[\uFF00-\uFFEF]/


*/
function remove_space_in_adjancent_character_and_dot(string) {

    var regx1=/([\u4E00-\u9FA5\uF900-\uFA2D])\s+([\uFF00-\uFFEF])/;
    string=string.replace(regx1,$1+$2);
    return string;
}
