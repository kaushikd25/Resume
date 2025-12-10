// SHOW/HIDE BIO DATA USING jQuery
$("#toggleBio").click(function () {
    $("#biodataTable").slideToggle(400);

    if ($(this).text() === "Show Bio Data") {
        $(this).text("Hide Bio Data");
    } else {
        $(this).text("Show Bio Data");
    }
});

// DOWNLOAD RESUME BUTTON ACTION
$("#downloadBtn").click(function () {
    alert("To generate a real downloadable PDF, integrate jsPDF.\nThis is currently a UI button only.");
});
