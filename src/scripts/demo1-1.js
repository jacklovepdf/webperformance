/**
 * Created by chengyong.lin on 17/3/25.
 */
module.exports = (function() {
    console.log("the current enviroment is:",ENV_PARAMS.name);
    var ele = document.getElementById("#content");
    ele.innerHTML = "my content update by external demo1-1.js file."
})();
