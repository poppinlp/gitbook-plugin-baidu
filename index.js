module.exports = {
    book: {
        assets: "./book",
        js: [
            "plugin.js"
        ],
        html: {
            "body:end": function() {
                var config = this.options.pluginsConfig.baidu || {};

                if (!config.token) {
                    throw "Need to provide 'token' for Baidu Analytics plugin";
                }

                return "<script>var _hmt = _hmt || [];"
                    + "(function() {"
                    + "var hm = document.createElement('script');"
                    + "hm.src = '//hm.baidu.com/hm.js?" + config.token + "';"
                    + "var s = document.getElementsByTagName('script')[0];"
                    + "s.parentNode.insertBefore(hm, s);"
                    + "})();</script>";
            }
        }
    }
};
