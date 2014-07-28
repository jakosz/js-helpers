h = {
    'randomString': function(n) {
        if (!arguments.length) n = 4;
        var set = '1234567890qwertyuiopasdfghjklzxcvbnm'.split(''), 
            res = '';
        for (var i = 0; i < n; i++) {
            res += set[Math.round(Math.random() * (set.length - 1))];
        }
        return res;
    }
}
