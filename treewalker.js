var currEl = {
    elRole: "",
    elLbl: "",
    elType: ""
}
var allNodes = [];

function walk(elem) {
    var walkerInside;
    if (elem !== null && typeof elem !== "undefined") {
        elem = elem;
        //        console.log(elem);
    } else {
        elem = document.body;
        //        console.log(elem);
    }
    walkerInside = document.createTreeWalker(elem, NodeFilter.SHOW_TEXT, {
        acceptNode: function (node) {
            //            console.log(node.parentElement);
            if (node.parentElement !== document.body) {
                return NodeFilter.FILTER_ACCEPT;
            }
        }
    }, false);
    while (walkerInside.nextNode()) {
        allNodes.push(walkerInside.currentNode.parentElement);
    }
    return walkerInside;
}
var walker = walk();
console.log(allNodes);
var currNode;

function remOutline(curr) {
    qsa(".focused").forEach(function (elem) {
        elem.classList.remove("focused");
    });
    curr.classList.add("focused");
}

/*function goNext() {
    if (walker.nextNode()) {
        currNode = walker.currentNode;
    }
    remOutline();
    currNode.parentElement.classList.add("focused");
    return currNode;
}*/
var curr = -1;

function goNextArr(elType) {
    if (curr < allNodes.length - 1) {
        if (typeof elType === "undefined") {
            curr += 1;
            console.log(allNodes[curr]);
            currNode = allNodes[curr];
        } else {
            console.log("elType is: ", elType);
            if (curr > -1) {
                for (var i = curr; i < allNodes.length; i++) {
                    console.log("this is: ", allNodes[i]);
                    console.log("does it match? ", allNodes[i].nodeName === elType);
                    if (allNodes[i].nodeName === elType) {
                        /*too many nested if-else loops!!*/
                        curr = i;

                    } else { 
                    curr+=1;
                    }
                }
            } else if (curr === -1) {
                for (var i = 0; i < allNodes.length; i++) {
                    console.log("this is: ", allNodes[i]);
                    console.log("does it match? ", allNodes[i].nodeName === elType);

                }
            }



        }
        currNode = allNodes[curr];
        console.log("finally, currNode is: ", currNode);
        remOutline(currNode);

    }

}


function goPrevArr(elType) {
    if (curr > 0) {
        if (typeof elType === "undefined") {
            curr -= 1;
            console.log(allNodes[curr]);
        } else {
            for (i = allNodes[curr]; i > -1; i--) {
                console.log(allNodes[i].nodeName);
                console.log(allNodes[i].nodeName === elType);

            }
        }
        currNode = allNodes[curr];
        remOutline(currNode);
    }

}
/*function goPrev() {

    if (walker.previousNode()) {
        currNode = walker.currentNode;
    }
    if (currNode !== document.body || currNode.parentElement !== document.body) {
        remOutline();
        currNode.parentElement.classList.add("focused");
    }
    return currNode;
}*/


function goFwdTo(elType) {}
/* use mutationObserver to update treewalker */
/* get the current TW node every time you use the MO*/
/*function updateTW(elem) {
    var tempCurr = currNode;
    console.log("currentNode is: ", currNode);
    walk();
    console.log("currentNode is now:", currNode);
    currNode = tempCurr;
    console.log("currentNode NOW is: ", currNode);
    console.log("walker: ", walker);
}*/

function jumpEls() {
    document.body.ev("keydown", function (evt) {
        console.log(evt.which);
        switch (evt.which) {
        case 40:
            goNextArr();
            break;
        case 38:
            goPrevArr();
            break;
        case 80:
            goNextArr("P");
            break;
        }
    });
}
jumpEls();