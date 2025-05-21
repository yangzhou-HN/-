function toChieseNumber(num) {
    // 1234 1234 1245
    const parts = num
    .toString()
    .replace(/(?=(\d{4})+$)/g, ',')
    .split(",")
    .filter(Boolean);
    // console.log(parts);

    const digits = '零一二三四五六七八九';
    const units = ['', '十', '百', '千']; 
    function _handleZero(str) {
        return str.replace(/(零+)/g, '零').replace(/(零+)$/, '')
    }
    function _transform(str) {
        let result = '';
        for(let i = 0; i < str.length; i++) {
             const n = str[i];
             let c = digits[n];
             let u = units[str.length - i - 1]; 
             if(c === '零' ) {
                u = '';
             }
             result += c + u;      
        }
        result =  _handleZero(result);
        return result;
    }
    let result = '';
    const bigUnits = ['', '万', '亿'];
    for (let i = 0; i < parts.length; i++) {
        let c = _transform(parts[i]);
        let u = bigUnits[parts.length - i - 1];
        if (c === '') {
            c = '零';
            u = '';
        }
        result += c + u;
    }
    result = _handleZero(result);
    return result;
}


function toBigChineseNumber(num) {
    const cnum = toChieseNumber(num);
    const map = {
        '零': '零',
        '一': '壹',
        '二': '贰',
        '三': '叁',
        '四': '肆',
        '五': '伍',
        '六': '陆',
        '七': '柒',
        '八': '捌',
        '九': '玖',
        '十': '拾',
        '百': '佰',
        '千': '仟',
        '万': '萬',
        '亿': '億'
    }
  return cnum.split('').map(c => map[c]).join('');
 
}

const r = toBigChineseNumber(1200000000);
console.log(r);