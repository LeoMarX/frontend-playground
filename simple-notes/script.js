var NotesManager = (function(){

	function _addNote(note) {
		$notes.prepend(
			$("<a href='#'></a>")
			.addClass("note")
			.text(note)
		);
	}

	function _addCurrentNote() {
		var current_note = $new_note.val();

		if (current_note) {
			notes.push(current_note);
			_addNote(current_note);
			$new_note.val("");
		}
	}

	function _handleAddNote(evt) {
		_addCurrentNote();
	}

	function _handleEnter(evt) {
		if (evt.which == 13) {
			_addCurrentNote();
		}
	}

	function _handleDocumentClick(evt) {
		$notes.removeClass("active");
		$notes.children(".note").removeClass("highlighted");
	}

	function _handleNoteClick(evt) {
		evt.preventDefault();
		evt.stopPropagation();

		$notes.addClass("active");
		$notes.children(".note").removeClass("highlighted");
		$(evt.target).addClass("highlighted");
	}

	function loadData(data) {
		for (var i=0; i<data.length; i++) {
			notes.push(data[i]);
		}
	}

	function init(opts) {
		// cache references to the DOM elements we need to manage
		$notes = $(opts.notes);
		$new_note = $(opts.new_note);
		$add_note = $(opts.add_note);

		// build the initial list from the existing `notes` data
		var html = "";
		for (i=0; i<notes.length; i++) {
			html += "<a href='#' class='note'>" + notes[i] + "</a>";
		}
		$notes.html(html);

		// listen to "add" button
		$add_note.bind("click",_handleAddNote);

		// listen for <enter> in text box
		$new_note.bind("keypress",_handleEnter);

		// listen for clicks outside the notes box
		$(document).bind("click",_handleDocumentClick);

		// listen for clicks on note elements
		$notes.on("click",".note",_handleNoteClick);
	}


	var
		// private `notes` data
		notes = [],

		// DOM refs
		$notes,
		$new_note,
		$add_note,

		// module API
		publicAPI = {
			loadData: loadData,
			init: init
		}
	;

	return publicAPI;
})();


// assume this data came from the database
NotesManager.loadData([
	"This is the first note I've taken!",
	"Now is the time for all good men to come to the aid of their country.",
	"The quick brown fox jumped over the moon."
]);


$(document).ready(function(){
	NotesManager.init({
		notes: "#notes",
		new_note: "#note",
		add_note: "#add_note"
	});

});
