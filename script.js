
    var dict = {
        Date2: "http://public.tableau.com/views/RegionalSampleWorkbook/Storms",
        Date1: "https://public.tableau.com/views/Testing1_16492670078510/Sheet1?:language=en-US&:display_count=n&:origin=viz_share_link"
    }

    var viz;

    function dateOnChange() {
        //create stuff here
        console.log("ON CHANGE");
        var containerDiv = document.getElementById("vizContainer");
        var selectedValue = document.getElementById("DateList").value;
        console.log(dict[selectedValue]);

        let options = {
            hideTabs: true,
            onFirstInteractive: function () {
                console.log("finished loading.");
            }
            //make it bigger
        };

        if (viz != null) {
            viz.dispose();
        }
        viz = new tableau.Viz(containerDiv, dict[selectedValue], options);
    }

    var viz2;

    function compareOnChange() {
        //create stuff here
        console.log("ON CHANGE");
        var containerDiv = document.getElementById("vizCompareContainer");
        var selectedValue = document.getElementById("CompareDateList").value;
        console.log(dict[selectedValue]);

        let options = {
            hideTabs: true,
            onFirstInteractive: function () {
                console.log("finished loading.");
            }
            //make it bigger
        };

        if (viz2 != null) {
            viz2.dispose();
        }
        viz2 = new tableau.Viz(containerDiv, dict[selectedValue], options);
    }

    //https://community.tableau.com/s/question/0D54T00000C5ja9SAB/another-viz-is-already-present-in-element-divtableauviz-error