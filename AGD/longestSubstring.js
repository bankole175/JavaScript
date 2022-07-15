function lengthOfLongestSubstring(s) {
    let existingStringHolder = {};
    let start = 0;
    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {
        let currentChar = s[i];
        if (existingStringHolder[currentChar] !== undefined) {
            start = Math.max(start, existingStringHolder[currentChar] + 1);
        }
        existingStringHolder[currentChar] = i;
        maxLength = Math.max(maxLength, i - start + 1);
    }
    console.log(maxLength);
}

lengthOfLongestSubstring('abcabcbb');
lengthOfLongestSubstring('pwwkew');
