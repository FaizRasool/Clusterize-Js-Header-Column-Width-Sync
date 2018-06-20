var clusteriseHeaderColsWidth = [];
var clusteriseNumberOfCols = 0;

function calculateHeader(headerDiv) {
    $('#' + headerDiv + ' th').each(function () {
        clusteriseHeaderColsWidth.push($(this).width());
    });
    clusteriseNumberOfCols = clusteriseHeaderColsWidth.length;
}

function adjustRowsWidth(bodyDiv) {
    var count = 1;
    var widthCounter = 0;
    $('#' + bodyDiv + ' td').each(function () {
        $(this).width(clusteriseHeaderColsWidth[widthCounter]);
        if (count % clusteriseNumberOfCols === 0) {
            widthCounter = 0;
        }
        widthCounter++;
        count++;
    });
}


function getSyncingClusterise(headerDiv, contentDiv, scrollArea) {
    calculateHeader(headerDiv);
    return new Clusterize({
        scrollId: scrollArea,
        contentId: contentDiv,
        callbacks: {
            // Update headers width on cluster change
            clusterChanged: function () {
                adjustRowsWidth(contentDiv)
            }
        }
    });
}
