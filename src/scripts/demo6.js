/**
 * Created by chengyong.lin on 17/4/10.
 */
module.exports = (function() {
    var ele = document.getElementById("content");
    ele.innerHTML = "my content is demo6.";
    ele.onclick = function (e) {
        ele.style.backgroundColor = 'red';
    }
})();