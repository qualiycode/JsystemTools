	var totalTests = 0;
	var totalPass = 0;
	var totalFeatures = 0;
	var scenarioId = 0;

	var bgColorBomboxBoxId ='bgColorSelect';
	var spanFieldIdCounter = 0;

	var CHK_FAILURES_ONLY = 'chkFailuresOnly';

	var STRIKE_OUT_CSS = "strikeOut";

	var TEST_LIST_PASS_CSS = "test_list_pass";
	var TEST_LIST_WARN_CSS = "test_list_warn";
	var TEST_LIST_ERRO_CSS = "test_list_erro";	
	var TREE_LEVEL_ERRO_CSS = "tree_erro";
	var TREE_LEVEL_PASS_CSS = "tree_pass";


	var STATISTICS_RESULTS_DIV="ResultsDiv";
	var SCENARIO_INFORMATION_CSS_CLASS = "scenarioInformation";
	var SCENARIO_CHECKBOX_INFORMATION_CSS_CLASS = "scenarioChkInformation";

	var SCENARIO_TEST_PASSED_CSS_CLASS = "ScenarioTestsPassed";
	var SCENARIO_TEST_TOTAL_CSS_CLASS = "ScenarioTestsTotal";

    var testersList={};
    var filterSelectName="filterTester";
    var filterDefaultValue="All";
     /*
     Update Record Background Color
     */
    function updateStyle(obj){    	
    	var bgColor = getColorFromComboBox();

    	if(obj.style.backgroundColor!=''){
    		obj.style.backgroundColor='';	
    	}
    	else{
    		obj.style.backgroundColor=bgColor;
		}
    }

    /*
    Get Current color from a record.
    */
    function getColorFromComboBox(){
    	var e = document.getElementById(bgColorBomboxBoxId);
    	var str = e.options[e.selectedIndex].text;

    	return str;
    }

    function prepareTestersInformation(){
    	var ANDREI_INDEX=0;
    	var JONAH_INDEX=1;
    	var MOSHE_INDEX=2;
    	var DUDI_INDEX=3;
    	var DEAN_INDEX=4;
    	var ELI_INDEX=5;

    	testersList.names=[];
    	testersList.names[ANDREI_INDEX] = "Andrei";
    	testersList.names[JONAH_INDEX] = "Jonah";
    	testersList.names[MOSHE_INDEX] = "Moshe";
    	testersList.names[DUDI_INDEX] = "Dudi";
    	testersList.names[DEAN_INDEX] = "Dean";
    	testersList.names[ELI_INDEX] = "Eli";

    	//Andrei
    	testersList[testersList.names[ANDREI_INDEX]]=[];
    	testersList[testersList.names[ANDREI_INDEX]].push("Rate Control - PerUE");
    	testersList[testersList.names[ANDREI_INDEX]].push("Rate Control - PerFlow");
    	testersList[testersList.names[ANDREI_INDEX]].push("Classification - Download");
    	testersList[testersList.names[ANDREI_INDEX]].push("Classification and Statistics - Video PD");
    	testersList[testersList.names[ANDREI_INDEX]].push("Video Interrupts");
    	testersList[testersList.names[ANDREI_INDEX]].push("Clasification - Video - Youtube");
    	testersList[testersList.names[ANDREI_INDEX]].push("Classification - NetInfra - IP - Other");
    	testersList[testersList.names[ANDREI_INDEX]].push("Configurable RC policy");
    	testersList[testersList.names[ANDREI_INDEX]].push("Statistics - HTTP Browsing stats");
    	testersList[testersList.names[ANDREI_INDEX]].push("DataPlan.Umts-TunnelIdentification");
    	testersList[testersList.names[ANDREI_INDEX]].push("CellManagement-AgingOfCells");
    	testersList[testersList.names[ANDREI_INDEX]].push("Ran Modeling - UMTS - APN");
    	testersList[testersList.names[ANDREI_INDEX]].push("OAM - SNMP");


    	//Jonah
    	testersList[testersList.names[JONAH_INDEX]]=[];
    	testersList[testersList.names[JONAH_INDEX]].push("Classification - Audio");
    	testersList[testersList.names[JONAH_INDEX]].push("Statistics - Cell Metrics");
    	testersList[testersList.names[JONAH_INDEX]].push("Classification - Browsing Heuristics");
    	testersList[testersList.names[JONAH_INDEX]].push("Ran_Modeling_General_Persistency");
    	testersList[testersList.names[JONAH_INDEX]].push("rateControlAutoEnableDisable");
    	testersList[testersList.names[JONAH_INDEX]].push("RanModeling-UMTS-LocationReportProxy");
    	testersList[testersList.names[JONAH_INDEX]].push("HmmLrpTests");
    	testersList[testersList.names[JONAH_INDEX]].push("InterDpeHandovers");
    	testersList[testersList.names[JONAH_INDEX]].push("InterDpeHandoversLrpDisabled");
    	testersList[testersList.names[JONAH_INDEX]].push("LRP - White List");
    	testersList[testersList.names[JONAH_INDEX]].push("Classification Statistics and SR - Youtube");
    	testersList[testersList.names[JONAH_INDEX]].push("Classification Statistics and SR - Video PD");
    	testersList[testersList.names[JONAH_INDEX]].push("Statistics and SR - HTTP Browsing stats");
    	testersList[testersList.names[JONAH_INDEX]].push("Social Media and HTTPS Classification and SR");
    	testersList[testersList.names[JONAH_INDEX]].push("Classification - Audio and SR");
    	testersList[testersList.names[JONAH_INDEX]].push("Classification and SR - Download");
    	testersList[testersList.names[JONAH_INDEX]].push("LRP - Association Learning");
    	testersList[testersList.names[JONAH_INDEX]].push("Health monitoring - Hardware Bypass");
    	testersList[testersList.names[JONAH_INDEX]].push("HMM - Control Plane");
    	testersList[testersList.names[JONAH_INDEX]].push("Hmm-DataPlaneFailure");


    	//Moshe
    	testersList[testersList.names[MOSHE_INDEX]]=[];
    	testersList[testersList.names[MOSHE_INDEX]].push("Classification-Browsing");
    	testersList[testersList.names[MOSHE_INDEX]].push("Retransmission");
    	testersList[testersList.names[MOSHE_INDEX]].push("WebSiteByPassUrls");
		testersList[testersList.names[MOSHE_INDEX]].push("TinyBrowsing");
		testersList[testersList.names[MOSHE_INDEX]].push("Social Media and HTTPS Classification");
		testersList[testersList.names[MOSHE_INDEX]].push("InactivityTimer");
		testersList[testersList.names[MOSHE_INDEX]].push("RanModeling-General-Cell congestion-Drcf-2-0");
		testersList[testersList.names[MOSHE_INDEX]].push("Seamless LRP");
		testersList[testersList.names[MOSHE_INDEX]].push("SA_Licensing");
		testersList[testersList.names[MOSHE_INDEX]].push("OA&amp;M - SNMP Propriety MIBs");
		testersList[testersList.names[MOSHE_INDEX]].push("Data Plan - Vlan filtering");
		testersList[testersList.names[MOSHE_INDEX]].push("Cli - System command");
		testersList[testersList.names[MOSHE_INDEX]].push("SA-Appack - Installation and Classification");
		
		    
    	//Dudi
    	testersList[testersList.names[DUDI_INDEX]]=[];
    	testersList[testersList.names[DUDI_INDEX]].push("OAM - Rolling capture");
    	testersList[testersList.names[DUDI_INDEX]].push("TestTunnelReaasign");
    	

    	//Dean
    	testersList[testersList.names[DEAN_INDEX]]=[];
    	testersList[testersList.names[DEAN_INDEX]].push("Classification - Http on all ports");
    	testersList[testersList.names[DEAN_INDEX]].push("SubscriberIdMaskingTest");
    	testersList[testersList.names[DEAN_INDEX]].push("OamCli");
    	
    	//Eli
    	testersList[testersList.names[ELI_INDEX]]=[];
    	testersList[testersList.names[ELI_INDEX]].push("Hmm-ProcessCrash-MultipleReloads");
    	testersList[testersList.names[ELI_INDEX]].push("Process_Crash");
    }


    /*
    	filterByTester - Tester Name
    	failuresOnly - Boolean. Show fails only.
    */
    function buildTree(filterByTester,failuresOnly) {
    	/*
         Getting all Main UL.
        */
        var rootScenarios = findRootScenarios();           
        var result = "";

        var rootScenarioLi;
        var expendTree = '';
        var collapseTree = '';
        var currScenarioName;

        initCounters();

        for(scn in rootScenarios) 
        {            
        	rootScenarioLi = getAllChildsByType(rootScenarios[scn],"li");	

        	for(valLi in rootScenarioLi){
        		currScenarioName = getTestName(rootScenarioLi[valLi]);        		

        		result += runOnAllChilds(rootScenarioLi[valLi],"",filterByTester,failuresOnly);        		

				expendTree += "expandTree('"+currScenarioName+"');"; //Expend All
				collapseTree += "collapseTree('"+currScenarioName+"');";//Collapse All
        	}					
        }
	
		expendTree += "return false;";
		collapseTree += "return false;";


        /*
        Filter
        */
        var filterDiv ="";

        filterDiv +="<div>";
		filterDiv +="<table>";
		filterDiv +="<tr>";
		filterDiv +="<td>";
			filterDiv +="<label>Failures Only</label>";
		filterDiv +="</td>";
		filterDiv +="<td>";
			filterDiv +="<input type='checkbox' id='"+CHK_FAILURES_ONLY+"' name='"+CHK_FAILURES_ONLY+"' title='Failures Only'";
			if(failuresOnly){
				filterDiv +=" checked";		
			}
			filterDiv +=" onclick='buildTree(getSelectedTester(),isFailuresOnlyTree())'/>";
		filterDiv +="</td>";
		filterDiv +="</tr>";
		filterDiv +="<tr>";
			filterDiv +="<td>";
				filterDiv +="<label>Tester:</label>";
			filterDiv +="</td>";
			filterDiv +="<td>";
				filterDiv +="<select id='"+filterSelectName+"' onchange='buildTree(this.value,isFailuresOnlyTree());'>";		
				if(typeof filterByTester === 'undefined'){
					if(filterByTester==filterDefaultValue){
						filterDiv +="<option value='"+filterDefaultValue+"' selected>"+filterDefaultValue+"</option>";
					}
					else {
						filterDiv +="<option value='"+filterDefaultValue+"'>"+filterDefaultValue+"</option>";	
					}
				}
				else {
					filterDiv +="<option value='"+filterDefaultValue+"' selected>"+filterDefaultValue+"</option>";
				}

				/*
				Add all Testers
				*/
		        for(name in testersList.names){			
		        	if(typeof filterByTester === 'undefined'){
						filterDiv +="<option value='"+testersList.names[name]+"'>"+testersList.names[name]+"</option>";
					}
					else {				
						if(testersList.names[name]==filterByTester){
							filterDiv +="<option value='"+testersList.names[name]+"' selected>"+testersList.names[name]+"</option>";
						}
						else {
							
							filterDiv +="<option value='"+testersList.names[name]+"'>"+testersList.names[name]+"</option>";	
						}
					}
		        }
		        filterDiv +="</select>";
	        filterDiv +="</td>";
		filterDiv +="</tr>";
        //filterDiv +="</div>";
        //filterDiv +="<div>";
        
        //filterDiv +="</div>";
		//filterDiv +="<div>";
		filterDiv +="<tr>";
		filterDiv +="<td>";
			filterDiv += "<label>Color: </label>";
		filterDiv +="</td>";
		filterDiv +="<td>";
			filterDiv += "<select id='"+bgColorBomboxBoxId+"'>"+
	        			"<option value='' selected>None</option>"+
	        			"<option value='blue'>Blue</option>"+
	        			"<option value='green'>Green</option>"+
	        			"<option value='yellow'>Yellow</option>"+
	        			"<option value='gray'>Gray</option>"+
	        			"<option value='brown'>Brown</option>"+
	        			"<option value='pink'>Pink</option>"+
	        			"<option value='purple'>Purple</option>"+
	        		"</select>";
		filterDiv +="</td>";
		filterDiv +="</tr>";
		filterDiv +="</table>";
        filterDiv +="</div>";

		/*
			Calculate Statistics Generation.
		*/		        
		 result = "<div id='"+STATISTICS_RESULTS_DIV+"'></div>" +
        		"<br>"+
				"<a href='#' onclick=\""+expendTree+"\">Expand All</a>&nbsp;&nbsp;"+
				"<a href='#' onclick=\""+collapseTree+"\">Collapse All</a>"+
        		"<br>"+
        		filterDiv+
        		// "<select id='"+bgColorBomboxBoxId+"'>"+
        		// 	"<option value='' selected>None</option>"+
        		// 	"<option value='blue'>Blue</option>"+
        		// 	"<option value='green'>Green</option>"+
        		// 	"<option value='yellow'>Yellow</option>"+
        		// 	"<option value='gray'>Gray</option>"+
        		// 	"<option value='brown'>Brown</option>"+
        		// 	"<option value='pink'>Pink</option>"+
        		// 	"<option value='purple'>Purple</option>"+
        		// "</select>"+
				"<br/>"+

        		"<ul class='mktree' id='"+rootScenarios[0].getAttribute("id")+"'>" + 
        		result+
        		"</ul>";
        
        var outputDiv = document.getElementById("divOutput");
        outputDiv.innerHTML = result;

        var spans = outputDiv.getElementsByClassName("bullet");
        for(i=0;i<spans.length;i++){
			spans[i].onclick = function () {
				this.parentNode.className = (this.parentNode.className==nodeOpenClass) ? nodeClosedClass : nodeOpenClass;
				return false;
			}
		}

		calculateStatistics();

         // make the appropriate lists collapsible
		//CollapsibleLists.apply();		

   	//CollapsibleLists.applyTo(document.getElementById('newList'));
    }
    function isFailuresOnlyTree(){
    	return document.getElementById(CHK_FAILURES_ONLY).checked;
    }

    function getSelectedTester() {
    	return document.getElementById(filterSelectName).value;    	
    }

    /*
		Generate Results (MAIN)
    */
	function createNew(filterName)
    {
    	console.log("filterName: "+filterName);
    	prepareTestersInformation();

		/*$.ajax({
			url:'http://192.168.20.107/report2.html',
	   		type:'GET',
	   		success: function(data){
	       		$('#cutId').html($(data).find('#mktree').html());
	       		buildTree();
	   		},
	   		error: function(jqXHR,textStatus,errorThrown){
	   			alert(jqXHR.responseText +"\n"+
	   				jqXHR.statusText + "\n" + 
	   				jqXHR.status+ "\n"+
	   				jqXHR+ "\n"+
	   				textStatus+"\n"+
	   				errorThrown);
	   		}
		});*/

		buildTree(filterName,false);
    }

    function initCounters(){
    	totalPass = 0;
    	totalTests = 0;
    	totalFeatures = 0;
    	scenarioId = 0;
    }

	function calculateStatistics(){
		var statistics = "";
		var passRate = (totalPass/+totalTests)*100;
		var passRateRound = Math.round(passRate);
        /*      	
		statistics += "Total Number of Tests : <u>" +totalTests +"</u><br>";
		statistics += "Total Features: <u>" + totalFeatures+"</u><br>";			
		statistics += "Total Pass: " + totalPass + " <u>("+ passRateRound+"%)</u><br>";
		statistics += "Total Failed: " + (totalTests - totalPass) + " <u>(" + (100-passRateRound)+"%)</u><br>";


		statistics += "<br><br/>Dynamic<br>";
		*/
		var dynamicTotal = sumAllInformationByClass(SCENARIO_TEST_TOTAL_CSS_CLASS);
		var dynamicPassed = sumAllInformationByClass(SCENARIO_TEST_PASSED_CSS_CLASS);

		var dynamicPassRate = (dynamicPassed/+dynamicTotal)*100;
		var dynamicPassRateRound = Math.round(dynamicPassRate);

		statistics += "Total Number of Tests : <u>" + dynamicTotal +"</u><br>";
		statistics += "Total Features: <u>" + sumAllFeatures() +"</u><br>";			
		statistics += "Total Pass: " + dynamicPassed +" <u>("+ dynamicPassRateRound+"%)</u><br>";					
		statistics += "Total Failed: " + (dynamicTotal - dynamicPassed) + " <u>(" + (100-dynamicPassRateRound)+"%)</u><br>";
		
		var resultDiv = document.getElementById(STATISTICS_RESULTS_DIV);
		resultDiv.innerHTML=statistics;
		//return statistics;
	}

	function sumAllInformationByClass(cssClassName) {
		 /*results += "<input type='checkbox' class='"+SCENARIO_INFORMATION_CSS_CLASS+"' title='Include in calculation' id='' name='' onclick='calcResults(\"spanId"+spanFieldIdCounter+"\")'/>";
        results += "<b>"+scenarioName+"</b> [Total: <span class='"+SCENARIO_TEST_TOTAL_CSS_CLASS+"'>"+numberOfTests+"</span>, Passed: <span class='"+SCENARIO_TEST_PASSED_CSS_CLASS+"'>"+testPassed+"</span> ("+passRateRound+"%)]";
        results += "<input type='checkbox' id='' name='' title='Mark as Done' onclick='markAsDone(\"spanId"+spanFieldIdCounter+"\")'>:";
		*/
        var scenarioInfos = document.getElementsByClassName(SCENARIO_INFORMATION_CSS_CLASS);
        var scenarioInfoContainer;
        var count = 0;
		var cssTmp;
		var isMarked;

		//console.log("cssClassName: " + cssClassName);
		for(var i=0;i<scenarioInfos.length;i++){
			scenarioInfoContainer = scenarioInfos[i];	
			isMarked = scenarioInfoContainer.getElementsByClassName(SCENARIO_CHECKBOX_INFORMATION_CSS_CLASS)[0];
			if(isMarked.checked){
				cssTmp = scenarioInfoContainer.getElementsByClassName(cssClassName)[0];

				count = count + parseInt(cssTmp.innerHTML);
			}
		}

		return count;
	}

	function sumAllFeatures(){
		 var scenarioInfos = document.getElementsByClassName(SCENARIO_INFORMATION_CSS_CLASS);
        var scenarioInfoContainer;
        var count = 0;
		var cssTmp;
		var isMarked;

		//console.log("cssClassName: " + cssClassName);
		for(var i=0;i<scenarioInfos.length;i++){
			scenarioInfoContainer = scenarioInfos[i];	
			isMarked = scenarioInfoContainer.getElementsByClassName(SCENARIO_CHECKBOX_INFORMATION_CSS_CLASS)[0];
			if(isMarked.checked){				
				count = count + 1;
			}
		}

		return count;
	}

    function findRootScenarios(){
     	//var rootScenarios = [];

		//var rootTree = document.getElementsByClassName("mktree");
		var inputDiv = document.getElementById("cutId");
		var found = getAllChildsByType(inputDiv,"ul");
		
		return found;
     }


    /**
    Test
     */
    function getAllChildsByType(element,elementType){
		var childsFound = [];
		var i = 0;

		var findChild = element.childNodes;

		if(findChild!='undefined'){
			for(i=0;i<findChild.length;i++){
				if(findChild[i].nodeName.toLowerCase() == elementType){
					childsFound.push(findChild[i]);				
				}
			}
		}
		return childsFound;
     }

      function getAllChildsByClass(element,elementClassName){
		var childsFound = [];
		var i = 0;

		var findChild = element.childNodes;

		if(findChild!='undefined'){
			for(i=0;i<findChild.length;i++){
				if(findChild[i].className.indexOf(elementClassName) > -1){
					childsFound.push(findChild[i]);				
				}
			}
		}
		return childsFound;
     }

     /*
     Receives UL
     */

    function isContainTests(element)
    {
		var found = getAllChildsByType(element,"span");	

		var result = (found.length>0);
		return result;
    }

    /*
    	Receives UL
    */
    function isContainInnerScenario(element)
    {
		var found = getAllChildsByType(element,"li");	

		var result = (found.length>0);
		return result;
    }

    function checkUnCheckAllChilds(treeScenario,checkValue) {

    	var testChilds = treeScenario.getElementsByClassName(SCENARIO_CHECKBOX_INFORMATION_CSS_CLASS);    	
    	console.log(treeScenario);
    	for(val in testChilds){
    		testChilds[val].checked = checkValue;
    		//console.log(testChilds[val]);
    	}
    	calculateStatistics();
    }
    
    /*
		element - LI Tag.
		filterByTester - Test name in Array
		failuresOnly - Boolean
    */
	function runOnAllChilds(element,parentSpan,filterByTester,failuresOnly)	{
		//var childs = element.childNodes;
		var results = "";
		var innerScenarios;
		var innerUL;
		var scenarioName = getTestName(element);


		innerUL = element.getElementsByTagName("UL")[0];

		/*
		1. first check if has inner scenarios.
		2. check if contains tests.
		*/
		if(isContainInnerScenario(innerUL)){
			scenarioId++;
			results += "<li class='liOpen' id='LI_"+scenarioId+"'>";
            results += "<span class='bullet'>&nbsp;</span>";
        	results += "<span class='"+TREE_LEVEL_ERRO_CSS+"'>";
        	//results += scenarioName;

            results += "<input type='checkbox' checked class='"+SCENARIO_CHECKBOX_INFORMATION_CSS_CLASS+"' title='Include in calculation' id='' name='' onclick='checkUnCheckAllChilds(LI_"+scenarioId+",this.checked)'>";
            results += "<b>"+scenarioName+"</b> ";
			results += "</span>";
        	results += "<ul>";

			innerScenarios = getAllChildsByType(innerUL,"li");

			for(val in innerScenarios){			        
        		results += runOnAllChilds(innerScenarios[val],'',filterByTester,failuresOnly);       				
			}

			results += "</ul>";
			results += "</li>";	
		}
		else if(isContainTests(innerUL)){
			var addToTree = false;

			if(filterByTester==filterDefaultValue)
			{				
				addToTree = true;
			}
			else {
				if(testersList[filterByTester].indexOf(scenarioName.replace(/&nbsp;/g," ")) > -1){
					addToTree = true;
				}				
			}

			/*
			Get test childs before checking Failure only because 
			countErr requires them.
			*/
			var testChilds = getAllChildsByType(innerUL,'span');

			if(failuresOnly && addToTree) {
				if(countErr(testChilds)>0){
					addToTree = true;
				}
				else {
					addToTree = false; //overide all else
				}
			}

			
			if(addToTree){
				results+=analyzeTests(testChilds,scenarioName);
			}			
		}		

		return results;
	}

	/*
		Should receive LI.
	*/
	function getTestName(element){
		/*
		 	We skip the first span in the Li because it's "<span class="bullet">&nbsp;</span>".
		 	The second SPAN is the Test name.
		*/

		//var name = element.getElementsByTagName("span")[1].innerText;
		var name = element.getElementsByTagName("span")[1].innerHTML;
		//console.log("Name: " +name);
		name = name.replace("&nbsp;","");
		return name.trim();
	}

	/*
		add Strike out to SPAN
	*/	
	function markAsDone(spanFieldId){
		var spanElement = document.getElementById(spanFieldId);
		var classInfo = spanElement.className;

		if(classInfo.indexOf(STRIKE_OUT_CSS)!=-1){
			classInfo = classInfo.replace(STRIKE_OUT_CSS,"");
		}
		else{
			classInfo = classInfo + " "+STRIKE_OUT_CSS;
		}
		
		spanElement.className = classInfo.trim();
	}

	function analyzeTests(testChilds,scenarioName){
			var testPassed = countPass(testChilds);
			var testFailed = countErr(testChilds);
			var numberOfTests = countTests(testChilds);
			var color ="blue";
			var failedLinks = "";
			
			totalFeatures++; //count feature

			if(testFailed>0)
			{
				color = "red";
				failedLinks = getFailedLinks(testChilds);
			}
									
			var passRate = (testPassed/numberOfTests)*100;
            var passRateRound = Math.round(passRate);	
	
	
			//results += "<font color='"+color+"'><b>"+ spanName + "</b> [Total: "+numberOfTests+", "+passRateRound+"%]:</font> ";
			var results = "";
			results += "<li class='liClosed'>";
            if(testFailed>0){
            	
            	results += "<span class='bullet'>&nbsp;</span>";
            	results += "<span class='"+TREE_LEVEL_ERRO_CSS+"' id='spanId"+spanFieldIdCounter+"'>";
        	}
        	else {
				results += "<span class='"+TREE_LEVEL_PASS_CSS+"' id='spanId"+spanFieldIdCounter+"'>";
        	}
            

        	/*
        	Scenario Information
        	*/
            results += "<span class='"+SCENARIO_INFORMATION_CSS_CLASS+"'>";
            	results += "<input type='checkbox' checked class='"+SCENARIO_CHECKBOX_INFORMATION_CSS_CLASS+"' title='Include in calculation' id='' name='' onclick='calculateStatistics();'>";
            	results += "<b>"+scenarioName+"</b> [Total: <span class='"+SCENARIO_TEST_TOTAL_CSS_CLASS+"'>"+numberOfTests+"</span>, Passed: <span class='"+SCENARIO_TEST_PASSED_CSS_CLASS+"'>"+testPassed+"</span>, Failed: <span class='"+SCENARIO_TEST_PASSED_CSS_CLASS+"'>"+(numberOfTests-testPassed)+"</span> ("+passRateRound+"%)]";
            	results += "<input type='checkbox' id='' name='' title='Mark as Done' onclick='markAsDone(\"spanId"+spanFieldIdCounter+"\")'>";
            results += "</span>";
            results += ":</span>";
			
			if(testFailed>0)
			{
				results += "<ul>";								
				results += "<li>Passed ["+testPassed+"]</li>";
				results += "<li>Failed ["+testFailed+"]</li>";	
			
			
				results += failedLinks;
				results += "</ul>";
				
			}
			
			results += "</li>";
			//results += "<li class='liClosed'><ul><span class='bullet'>&nbsp;</span><span class='tree_pass'><b>TMP</b></span></ul></li>";//TMP!!!
						
			totalTests += numberOfTests;
			totalPass += testPassed;
			
			spanFieldIdCounter++;

		return results;
	}


	function countPass(allSpans)
	{

		//var allSpans = childTmp.getElementsByTagName("span");
		var count =0;
		var i =0;


		for(i=0;i<allSpans.length;i++)
		{

			if(allSpans[i].getAttribute("class") == TEST_LIST_PASS_CSS || allSpans[i].getAttribute("class") == TEST_LIST_WARN_CSS)
			{

				if(isNotSutChangeTest(allSpans[i]))
					count++;

			}

		}
		
		return count;
	}
	
	function getFailedLinks(allSpans)
	{
		//var allSpans = childTmp.getElementsByTagName("span");
		var count =0;
		var i =0;

		var allFailedLinks = "";

		var failedLink = "";

		for(i=0;i<allSpans.length;i++)
		{
			if(allSpans[i].getAttribute("class")  == TEST_LIST_ERRO_CSS)
			{
				failedLink = allSpans[i].innerHTML;
				failedLink = failedLink.replace("<br>","");
				failedLink = failedLink.replace("<BR>","");
				failedLink = failedLink.replace("\"=\"\"","");
								
				//console.log(failedLink);

				allFailedLinks += "<li class='liTest' onclick='updateStyle(this)'>\n"+failedLink+"\n</li>";
			}

		}
		
		return allFailedLinks;
	}
	
	
	function countTests(allSpans)
	{

		//var allSpans = childTmp.getElementsByTagName("span");
		var count =0;
		var i =0;

		for(i=0;i<allSpans.length;i++)
		{
			if(isNotSutChangeTest(allSpans[i]))
				count++;
		}
		
		return count;
	}

	

	function isNotSutChangeTest(element)
	{	
		var text = element.getElementsByTagName("a")[0].innerHTML;
			
		return (text.indexOf("ChangeSutTest")==-1);		

	}
	

	function countErr(allSpans)
	{
		//var allSpans = childTmp.getElementsByTagName("span");
		var count =0;
		var i =0;
	
		for(i=0;i<allSpans.length;i++)
		{			
			if(allSpans[i].getAttribute("class") == TEST_LIST_ERRO_CSS)
			{
				if(isNotSutChangeTest(allSpans[i]))
					count++;
			}
		}

		return count;
	}

	function escapeRegExp(string) {
	    return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
	}

	function replaceAll(string, find, replace) {
  		return string.replace(new RegExp(escapeRegExp(find), 'g'), replace);
	}
