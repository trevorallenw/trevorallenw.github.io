/**
 * Created by Hans Dulimarta
 * TODO: Add your name below this line
 * TREVOR WEST
 */

/**
 * Given the ID of a node {rootId}, find all its descendant elements having
 * its attribute id set and then change their class to {klazName}.
 * The function returns the number of such elements found.
 *
 * @param rootId    the ID of the "root" element to begin searching
 * @param klazName  the class to assign to each descendant whose id attrib 
 *                  is set.
 * @returns {number}
 */
function findElementsWithId(rootId, klazName) {
	/* complete this function */
	// find all its descendant elements having its id attribute set
	
	// check if id attribute is set
	var elems = document.querySelectorAll('#' + rootId + ' > *'); // ANYTHING IMMEDIATELY UNDER ROOT ID
	    
	// loop throught node list from query selector all and change DOM
	var i;
	var count = 0;
	for (i = 0; i < elems.length; i++) {
		if (elems[i].id) {
			elems[i].className += klazName;
			count++;
		}
	}

	return count;
}

/**
 * The following function finds all elements with attribute 'data-gv-row' (or
 * 'data-gv-column') and create a table of the desired dimension as a child of
 * the element (the table should go inside the div (immediate child of the div)).
 *
 * @returns NONE
 */
function createTable() {
  	/* complete this function */
	var tableHome = document.getElementsByClassName("table-home")[0]; // grab the first (only) one

	var rows = tableHome.getAttribute("data-gv-row");
	var cols = tableHome.getAttribute("data-gv-column");
	
	console.log("Rows: " + rows);
	console.log("Cols: " + cols);
	
	var table = document.createElement('table');
	
	// create th header including the heading row with text “Heading 1” and “Heading 2”.
	var i = 0, j = 0;

	for(i = 0; i <= rows; i++){
		var tr = document.createElement("tr");

		for(j = 0; j < cols; j++){

			if (i === 0) {
				// insert th correcrly FIX ME
				var th = document.createElement("th");
				th.appendChild(document.createTextNode('Heading ' + (j + 1)));
				tr.appendChild(th);
				console.log("Printing Header at i = " + i + ', j = ' + j);
		    } else {
				var td = tr.insertCell();
			    
			     const lips = new LoremIpsum();
			     let text = lips.generate(10);
			    
				td.appendChild(document.createTextNode(text));
			    	tr.appendChild(td);
		    }
			

		}
		
		table.appendChild(tr);
	}
	


	tableHome.appendChild(table);
}



