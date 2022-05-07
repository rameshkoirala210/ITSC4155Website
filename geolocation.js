
    var dict = {
        August2: "",
        August3: "",
        August9: "",
        August10: "",
        August16: "",
        August17: "",
        August30: "",
        September6: "",
        September7: "",
        September13: "",
        September14: "",
        September20: "",
        September21: "",
        September27: "",
        September28: "",
        October4: "",
        October5: "",
        October11: "",
        October12: "",
        October18: "",
        October19: "",
        October25: "",
        October26: "",
        November1: "",
        November2: "",
        November8: "",
        November9: "",
        November15: "",
        November16: "",
        November22: "",
        November23: "",
        November29: "",
        November30: "",
        December6: "",
        December7: "",
        December13: "",
        December14: "",
        December20: "",
        December21: "",
        December27: "",
        December28: "",
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