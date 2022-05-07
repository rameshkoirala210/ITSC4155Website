
    var dict = {
        August2: "https://public.tableau.com/views/Aug02Errors_16518962690320/Dashboard1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link",
        August3: "https://public.tableau.com/views/Aug03Errors/Dashboard1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link",
        August9: "https://public.tableau.com/views/Aug09Errors/Dashboard1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link",
        August10: "https://public.tableau.com/views/Aug10Errors/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link",
        August16: "https://public.tableau.com/views/Aug16Errors/Dashboard1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link",
        August17: "https://public.tableau.com/views/Aug17Errors/Dashboard1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link",
        August30: "https://public.tableau.com/views/Aug30Errors/Dashboard1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link",
        August31: "https://public.tableau.com/views/Aug31Errors/Dashboard1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link",
        September6: "https://public.tableau.com/app/profile/mihir.vashi/viz/Sep06Errors/Dashboard1?publish=yes",
        September7: "https://public.tableau.com/views/Sep07Errors/Dashboard1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link",
        September13: "https://public.tableau.com/views/Sep13Errors/Dashboard1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link",
        September14: "https://public.tableau.com/views/Sep14Errors/Dashboard1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link",
        September20: "https://public.tableau.com/views/Sep20Errors/Dashboard1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link",
        September21: "https://public.tableau.com/views/Sep21Errors/Dashboard1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link",
        September27: "https://public.tableau.com/views/Sep27Errors/Dashboard1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link",
        September28: "https://public.tableau.com/views/Sep28Errors/Dashboard1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link",
        October4: "https://public.tableau.com/views/Oct04Errors/Dashboard1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link",
        October5: "https://public.tableau.com/views/Oct05Errors/Dashboard1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link",
        October11: "https://public.tableau.com/views/Oct11Errors/Dashboard1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link",
        October12: "https://public.tableau.com/views/Oct12Errors/Dashboard1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link",
        October18: "https://public.tableau.com/views/Oct18Errors/Dashboard1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link",
        October19: "https://public.tableau.com/views/Oct19Errors/Dashboard1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link",
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