const LEFT_PARENTHESIS = "("
const RIGHT_PARENTHESIS = ")"

function solution(str) {
    const stack = [];

    stack.push(str[0])

    for(let i = 1; i < str.length; i++) {
        const stackLast = stack[stack.length -1];
        const currentParenthesis = str[i];

        if(stackLast && currentParenthesis !== stackLast) {
            stack.pop();
        } else {
            stack.push(currentParenthesis)
        }   
    }

    return !!stack.length ? "NO" : "YES";
};

// (())()) -> NO
// (((()())() -> NO
// (()())((())) -> YES
// ((()()(()))(((())))() -> NO
// ()()()()(()()())() -> YES
// (()((())()( -> NO
console.log(solution("(()((())()("))

