
    let selection = document.querySelector('select');
    let result = document.querySelector('h2');

    selection.addEventListener('change', () => {
        result.innerText = selection.options[selection.selectedIndex].text;
        console.log(selection.selectedIndex);
        console.log(result.innerText);
    });
            
    function initViz() {
        var containerDiv = document.getElementById("vizContainer")
        url = "http://public.tableau.com/views/RegionalSampleWorkbook/Storms";
        //url = "https://public.tableau.com/views/Testing1_16492670078510/Sheet1?:language=en-US&:display_count=n&:origin=viz_share_link";

        options = {
            hideTabs: true,
            onFirstInteractive: function () {
            console.log("finished loading.");
        }
    };
    var viz = new tableau.Viz(containerDiv, url, options);
    }