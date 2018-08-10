

waldayu.transducers["gitksan_compare"] = (function() {
    var correspondences = {'hn': 'h', 'r': 'n', 'n': 'r'};
    var keys = ['hn', 'hn', 'r', 'n'];
    var regex = new RegExp("(" + keys.join('|') + ")", 'g');
    return function(str) {
        return str.replace(regex, function(a,b) {
            return correspondences[a];
        });
    };
})();var config = {
    "L1": {
        "name": "Gitksan",
        "underlying": "",
        "compare": "gitksan_compare",
        "lettersInLanguage" : ['a', 'aa', 'i', 'ii', 'u', 'uu', 'e', 'ee', 'o', 'oo', 'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'kj', "kj'", 'm', 'n', 'p', 's', 'sj', 't', 'ts', 'w']
    },
    "L2": {
        "name": "English",
        "underlying": "",
        "compare": ""
    }
};

/* Search Variables */
var l1_weights_config = {'underlying_form': 0.1, 'compare_form': 1.0};

var l1_thresholds_config = {'partial': 1.0, 'other': 4.0, 'exact': 0.0};

var l2_weights_config = {'definition': 1.0};

var l2_thresholds_config = {'partial': 1.9, 'other': 1000.0, 'exact': 0.9};
