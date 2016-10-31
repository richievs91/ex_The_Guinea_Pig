// There is sample HTML file content below so create an index.html for it and place the content in the body tag.
// Link in a JavaScript file named events.js.
// Link in a CSS file named events.css. You'll be using element.classList to manipulate the CSS classes on elements.
// Note: Output target is the output-target element.
// When any section is clicked the output target text should be "You clicked on the {text of the section} section"
// When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".
// When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".
// When you type characters into the input field, the output element should mirror the text in the input field.
// When you click the "Add color" button, the guinea-pig element's text color should change to blue.
// When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.
// When you click the "Capture it" button, the guinea-pig element should have a border added to it.
// When you click the "Rounded" button, the guinea-pig element's border should become rounded.
// The first section's text should be bold.
// The last section's text should be bold and italicized.
// Make the buttons stop appearing next to each other as inline elements. Change them into block elements.


var h1 = document.getElementById("page-title");
// console.log("h1", h1);

var outputTarget = document.getElementById("output-target");
// console.log("outputTarget", outputTarget );

var articleSection = document.getElementById("article-section");
// console.log("articleSection", articleSection);

var guineaPig = document.getElementById("guinea-pig");
// console.log("guineaPig", guineaPig);

var keypressInput = document.getElementById("keypress-input");
// console.log("keypressInput", keypressInput);

var addColorBtn = document.getElementById("add-color")
// console.log("addColorBtn", addColorBtn);

var hulk = document.getElementById("make-large");
// console.log("hulk", hulk );

var addBorder = document.getElementById("add-border");
// console.log("addBorder", addBorder);

var addRound = document.getElementById("add-rounding");
// console.log("addRound", addRound);


articleSection.addEventListener("click", function() {
	outputTarget.innerHTML = "You clicked on the " + event.target.innerHTML + " section";
});


h1.addEventListener("mouseover", function() {
	outputTarget.innerHTML = "You moved your mouse over the header";
}); 


h1.addEventListener("mouseout", function() {
	outputTarget.innerHTML = "You left me!!";
});  


keypressInput.addEventListener("keyup", function() {
	outputTarget.innerHTML = "<p>" + keypressInput.value + "</p>";
});


addColorBtn.addEventListener("click", function() {
	guineaPig.classList.toggle("addcolor");
});


hulk.addEventListener("click", function() {
	guineaPig.classList.toggle("hulkify");
});


addBorder.addEventListener("click", function() {
	guineaPig.classList.toggle("capture");
});


addRound.addEventListener("click", function() {
	guineaPig.classList.toggle("rounded");
});

















