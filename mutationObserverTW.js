var target = document.body;
var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        var newNodes = mutation.addedNodes;
        var mName = mutation.attributeName;
        var mNamespace = mutation.attributeNamespace;
        var mTgt = mutation.target;
        if (newNodes !== null) {
            console.log(mutation.type);
            if(mutation.type === "childList") {
                updateTW();
            }
        }
    });
});
var config = {
    attributes: true
    , attributeFilter: ['role']
    , childList: true
    , characterData: true
    , subtree: true
};

function obs() {
    observer.observe(target, config);
    console.log("observing");
}

function eo() {
    observer.disconnect();
    console.log("MutationObserver disconnected.");
}
//end mutation observer
window.onload = obs;