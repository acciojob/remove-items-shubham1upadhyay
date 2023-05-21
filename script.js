window.onload = function() {
    var colorSelect = document.getElementById("colorSelect");
    var submit = document.getElementById("submit");
      submit.addEventListener("click", function() {
        var selectedIndex = colorSelect.selectedIndex;
        if(selectedIndex !== -1)
		{
          colorSelect.remove(selectedIndex);
        }
      });
    };