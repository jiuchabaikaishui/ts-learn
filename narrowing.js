(function () {
    (function () {
        function padLeft(padding, input) {
            return ' '.repeat(padding) + input;
        }
    })();
    {
        function padLeft(padding, input) {
            if (typeof padding === 'number') {
                return ' '.repeat(padding) + input;
            }
            return padding + input;
        }
    }
    // typeof 类型保护
    {
        function printAll(strs) {
            if (typeof strs === 'object') {
                // 'strs' 可能是 'null'.
                for (var s in strs) {
                    console.log(s);
                }
            }
            else if (typeof strs === 'string') {
                console.log(strs);
            }
            else {
                // ……
            }
        }
        printAll(null);
    }
})();
