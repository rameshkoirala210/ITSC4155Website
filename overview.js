
    var dict = {
        lineChart: "https://public.tableau.com/views/MondaysAndTuesdaysLineChart/LineGraph?:language=en-US&:display_count=n&:origin=viz_share_link",
        barChart: "https://public.tableau.com/views/NumberofConnectionsforMondaysandTuesdays/AreaGraph?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link",

    }

    var viz;

    function dateOnChange() {
        
        console.log("ON CHANGE");
        var containerDiv = document.getElementById("vizContainer");
        var selectedValue = document.getElementById("DateList").value;
        console.log(dict[selectedValue]);

        let options = {
            hideTabs: true,
            onFirstInteractive: function () {
                console.log("finished loading.");
            }

        };

        if (viz != null) {
            viz.dispose();
        }
        viz = new tableau.Viz(containerDiv, dict[selectedValue], options);
    }

    var viz2;

    function compareOnChange() {
        console.log("ON CHANGE");
        var containerDiv = document.getElementById("vizCompareContainer");
        var selectedValue = document.getElementById("CompareDateList").value;
        console.log(dict[selectedValue]);

        let options = {
            hideTabs: true,
            onFirstInteractive: function () {
                console.log("finished loading.");
            }
        };

        if (viz2 != null) {
            viz2.dispose();
        }
        viz2 = new tableau.Viz(containerDiv, dict[selectedValue], options);
    }
