sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function (JSONModel, Device) {
	"use strict";

	return {

		createDeviceModel: function () {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},

		createModel: function () {
			var me = this;
			var oModel = new JSONModel();
			oModel.setDefaultBindingMode("TwoWay");
			var excelData = [];
		    var oFinalSheetsData = [];
			var xhr = new XMLHttpRequest();
            xhr.open("GET", "./DataFiles/DataModel.xlsx", true);
            xhr.responseType = "blob";
			xhr.onload = function (e) {
                var file = this.response;
                var reader = new FileReader();
                //For Browsers other than IE.
				reader.onload = function (e) {
					var data = e.target.result;
					var workbook = XLSX.read(data, {
						type: 'binary'
					});
					workbook.SheetNames.forEach(function (sheetName) {
						// Here is your object for every sheet in workbook
						excelData = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
						var obJ = {};
						Object.defineProperty(obJ, sheetName, {
							value: excelData,
							writable: true,
							enumerable: true,
							configurable: true,
						  });
						oFinalSheetsData.push(obJ);
					});
					var oTeamsData = oFinalSheetsData.filter((oData)=>{ return oData.Teams});
					var oCompetitionsData = oFinalSheetsData.filter((oData)=>{ return oData.Competitions});
					var oGifsData = oFinalSheetsData.filter((oData)=>{ return oData.Gifs});
					var oaudioData = oFinalSheetsData.filter((oData)=>{ return oData.Audios});
					var data = {
						"testinput":"",
						"tableStatus": "Paarung noch nicht gesetzt",
						"tmpTeam": "",
						"tmpPkt": "",
						"tmpTore": "",
						"clock": "09:00",
						"penaltyClock1": "02:00",
						"penaltyClock2": "02:00",
						"penaltyClock3": "02:00",
						"penaltyClock4": "02:00",
						"timerDuration": 540, //in sekunden
						"timerDurationMinutes": 9, //in sekunden
						"timerDurationSeconds": 0, //in sekunden
						"penTimerDuration": 120, // in sekunden
						"stop": false,
						"stopPenTimer": false,
						"spielstand": "0:0",
						"anzahlToreHeim": 0,
						"anzahlToreGast": 0,
						"isTimerAktive": false,
						"isPenTimer1Aktive": false,
						"isPenTimer2Aktive": false,
						"isPenTimer3Aktive": false,
						"isPenTimer4Aktive": false,
						"isResetet": true,
						"heimteam": "",
						"gastteam": "",
						"koteam1": "",
						"koteam2": "",
						"koteam3": "",
						"koteam4": "",
						"textPic": "",
						"heimURL": "",
						"gastURL": "",
						"koteam1URL": "",
						"koteam2URL": "",
						"heimLogo": "",
						"gastLogo": "",
						"koLogoTeam1": "",
						"koLogoTeam2": "",
						"koLogoTeam3": "",
						"koLogoTeam4": "",
						"gifURL": "",
						"gifNameHeim": "",
						"gifNameGast": "",
						"matchingGifsHeim": "",
						"matchingGifsGast": "",
						"gifSrcHeim": "",
						"gifSrcGast": "",
						"tmpPlatz": "",
						"showClock": true,
						"showPenTimer1": false,
						"showPenTimer2": false,
						"showPenTimer3": false,
						"showPenTimer4": false,
						"showTabelle": false,
						"showWerbung": false,
						"showText": false,
						"showKO": false,
						"showKOFirstMatch": false,
						"showKOSecMatch": false,
						"showTextPic": false,
						"textnachricht":"",
						"tor":false,
						"heimtor":false,
						"gasttor":false,
						"adName":"Automatisch",
						"adSrc":"",
						"adList":"",
						"gifsHome": [],
						"gifsGuest": [],
						"tormusikName":"Automatisch",
						"tormusikSrc":"",
						"tormusikList":"",
						"lastShownAdIndex":-1,
						"tableTitle":"",
						"currentGroupName":"",
						"currentGroupIndex":"",
						"tableClass":"sapUiTinyMargin",
						"gruppe": "",
						"noOfTeamsQualified":4,
						"allGroupsAndTeams":["teamsGruppeE","teamsGruppeF"],
						"allGroupsAndGames":["spieleGruppeE","spieleGruppeF"],
						"allGroupsAndPoints":["pktGruppeE","pktGruppeF"],
						"allGroupsAndGoalDiffs":["torDiffGruppeE","torDiffGruppeF"],
						"allGroupsAndGoals":["toreGruppeE","toreGruppeF"],
						"teamsGruppeE":["VfB Stuttgart", "Borussia Mönchengladbach","SK Slavia Prag","Karlsruher SC", "1. FC Nürnberg","1. FSV Mainz 05"],
						"spieleGruppeE":[0,0,0,0,0,0],
						"pktGruppeE":[0,0,0,0,0,0],
						"torDiffGruppeE":[0,0,0,0,0,0],
						"toreGruppeE":[0,0,0,0,0,0],
						"teamsGruppeF":["FC Schalke", "NK Maribor","SC Freiburg","Borussia Dortmund", "FC Augsburg","CFR Cluj"],
						"spieleGruppeF":[0,0,0,0,0,0],
						"pktGruppeF":[0,0,0,0,0,0],
						"torDiffGruppeF":[0,0,0,0,0,0],
						"toreGruppeF":[0,0,0,0,0,0],
						"teamsCurrGroup":"",
						"gamesCurrGroup":"",
						"pointsCurrGroup":"",
						"goalDiffCurrGroup":"",
						"goalsCurrGroup":"",
						"liveMode":false,
						"korrekturMode":false,
						"liveTblTeams":[],
						"liveTblSpiele":[],
						"liveTblPkt":[],
						"liveTblTorDiff":[],
						"liveTblTore":[],
						"gruppen": [{
								"url": "E",
								"name": "E"
							}, {
								"url": "F",
								"name": "F"
							}
						],
						"matches": [],
						"tabelle": [
							{
								"platz":"",
								"team":"",
								"spiele":"",
								"torDiff":"",
								"pkt":""
							},{
								"platz":"",
								"team":"",
								"spiele":"",
								"torDiff":"",
								"pkt":""
							},{
								"platz":"",
								"team":"",
								"spiele":"",
								"torDiff":"",
								"pkt":""
							},{
								"platz":"",
								"team":"",
								"spiele":"",
								"torDiff":"",
								"pkt":""
							},{
								"platz":"",
								"team":"",
								"spiele":"",
								"torDiff":"",
								"pkt":""
							},{
								"platz":"",
								"team":"",
								"spiele":"",
								"torDiff":"",
								"pkt":""
							}
						],
						"teams": oTeamsData[0].Teams,
						"ads": [
							{
								"url": "auto",
								"name": "Automatisch"
							},
							{
								"url": "null",
								"name": "keine"
							},
							{
								"url": "pics/ads/1.png",
								"name": "Spedition Stoehr | Berg Br."
							},{
								"url": "pics/ads/2.png",
								"name": "ILS | Kaplan Haust."
							},{
								"url": "pics/ads/3.png",
								"name": "Strobl Elektro | ACT"
							},{
								"url": "pics/ads/4.png",
								"name": "Durdu Stu. | MSR"
							},{
								"url": "pics/ads/5.png",
								"name": "Senn Kramer | Repass"
							},{
								"url": "pics/ads/6.png",
								"name": "Schalt.Strobl | Hanna Tiefbau"
							},{
								"url": "pics/ads/7.png",
								"name": "FS System | Halder"
							},{
								"url": "pics/ads/8.png",
								"name": "Rössle | Bauforum"
							},{
								"url": "pics/ads/9.png",
								"name": "Mundal | CSW"
							},{
								"url": "pics/ads/10.png",
								"name": "Nailfun | Sport Express"
							},{
								"url": "pics/ads/11.png",
								"name": "11 Teamsports | Engst"
							},{
								"url": "pics/ads/12.png",
								"name": "vs-schelkle"
							},{
								"url": "pics/ads/13.png",
								"name": "Tafel 13"
							},{
								"url": "pics/ads/14.png",
								"name": "Tafel 14"
							}
						],
						"competitions": me.removeDuplicates(oCompetitionsData[0].Competitions,"Competition"),
						// "gifs": [
						// 	{
						// 		"url": "auto",
						// 		"name": "Automatisch"
						// 	},{
						// 		"url": "pics/gifs/lude1.gif",
						// 		"name": "Lude"
						// 	},{
						// 		"url": "pics/gifs/lude2.gif",
						// 		"name": "Lude"
						// 	},{
						// 		"url": "pics/gifs/lude3.gif",
						// 		"name": "Lude"
						// 	},{
						// 		"url": "pics/gifs/darmstadt2.gif",
						// 		"name": "SV Darmstadt"
						// 	}, {
						// 		"url": "pics/gifs/darmstadt3.gif",
						// 		"name": "SV Darmstadt"
						// 	}, {
						// 		"url": "pics/gifs/darmstadt4.gif",
						// 		"name": "SV Darmstadt"
						// 	}, {
						// 		"url": "pics/gifs/dettingen1.gif",
						// 		"name": "SG Dettingen"
						// 	}, {
						// 		"url": "pics/gifs/gladbach1.gif",
						// 		"name": "Borussia Mönchengladbach"
						// 	}, {
						// 		"url": "pics/gifs/gladbach2.gif",
						// 		"name": "Borussia Mönchengladbach"
						// 	}, {
						// 		"url": "pics/gifs/gladbach3.gif",
						// 		"name": "Borussia Mönchengladbach"
						// 	}, {
						// 		"url": "pics/gifs/gladbach4.gif",
						// 		"name": "Borussia Mönchengladbach"
						// 	}, {
						// 		"url": "pics/gifs/gladbach5.gif",
						// 		"name": "Borussia Mönchengladbach"
						// 	}, {
						// 		"url": "pics/gifs/gladbach6.gif",
						// 		"name": "Borussia Mönchengladbach"
						// 	}, {
						// 		"url": "pics/gifs/gladbach7.gif",
						// 		"name": "Borussia Mönchengladbach"
						// 	}, {
						// 		"url": "pics/gifs/gladbach8.gif",
						// 		"name": "Borussia Mönchengladbach"
						// 	}, {
						// 		"url": "pics/gifs/gladbach9.gif",
						// 		"name": "Borussia Mönchengladbach"
						// 	}, {
						// 		"url": "pics/gifs/gladbach10.gif",
						// 		"name": "Borussia Mönchengladbach"
						// 	}, {
						// 		"url": "pics/gifs/gladbach11.gif",
						// 		"name": "Borussia Mönchengladbach"
						// 	}, {
						// 		"url": "pics/gifs/cluj1.gif",
						// 		"name": "CFR Cluj"
						// 	}, {
						// 		"url": "pics/gifs/cluj2.gif",
						// 		"name": "CFR Cluj"
						// 	}, {
						// 		"url": "pics/gifs/cluj3.gif",
						// 		"name": "CFR Cluj"
						// 	}, {
						// 		"url": "pics/gifs/dortmund1.gif",
						// 		"name": "Borussia Dortmund"
						// 	}, {
						// 		"url": "pics/gifs/dortmund2.gif",
						// 		"name": "Borussia Dortmund"
						// 	}, {
						// 		"url": "pics/gifs/dortmund3.gif",
						// 		"name": "Borussia Dortmund"
						// 	}, {
						// 		"url": "pics/gifs/dortmund4.gif",
						// 		"name": "Borussia Dortmund"
						// 	}, {
						// 		"url": "pics/gifs/dortmund5.gif",
						// 		"name": "Borussia Dortmund"
						// 	}, {
						// 		"url": "pics/gifs/dortmund6.gif",
						// 		"name": "Borussia Dortmund"
						// 	}, {
						// 		"url": "pics/gifs/dortmund7.gif",
						// 		"name": "Borussia Dortmund"
						// 	}, {
						// 		"url": "pics/gifs/dortmund8.gif",
						// 		"name": "Borussia Dortmund"
						// 	}, {
						// 		"url": "pics/gifs/dortmund9.gif",
						// 		"name": "Borussia Dortmund"
						// 	}, {
						// 		"url": "pics/gifs/dortmund10.gif",
						// 		"name": "Borussia Dortmund"
						// 	}, {
						// 		"url": "pics/gifs/augsburg1.gif",
						// 		"name": "FC Augsburg"
						// 	}, {
						// 		"url": "pics/gifs/augsburg2.gif",
						// 		"name": "FC Augsburg"
						// 	}, {
						// 		"url": "pics/gifs/augsburg3.gif",
						// 		"name": "FC Augsburg"
						// 	}, {
						// 		"url": "pics/gifs/augsburg4.gif",
						// 		"name": "FC Augsburg"
						// 	}, {
						// 		"url": "pics/gifs/augsburg5.gif",
						// 		"name": "FC Augsburg"
						// 	}, {
						// 		"url": "pics/gifs/augsburg6.gif",
						// 		"name": "FC Augsburg"
						// 	}, {
						// 		"url": "pics/gifs/augsburg7.gif",
						// 		"name": "FC Augsburg"
						// 	}, {
						// 		"url": "pics/gifs/augsburg8.gif",
						// 		"name": "FC Augsburg"
						// 	}, {
						// 		"url": "pics/gifs/heidenheim1.gif",
						// 		"name": "1. FC Heidenheim"
						// 	}, {
						// 		"url": "pics/gifs/heidenheim2.gif",
						// 		"name": "1. FC Heidenheim"
						// 	}, {
						// 		"url": "pics/gifs/heidenheim3.gif",
						// 		"name": "1. FC Heidenheim"
						// 	}, {
						// 		"url": "pics/gifs/heidenheim4.gif",
						// 		"name": "1. FC Heidenheim"
						// 	}, {
						// 		"url": "pics/gifs/heidenheim5.gif",
						// 		"name": "1. FC Heidenheim"
						// 	}, {
						// 		"url": "pics/gifs/innsbruck1.gif",
						// 		"name": "FC Wacker Innsbruck"
						// 	}, {
						// 		"url": "pics/gifs/innsbruck2.gif",
						// 		"name": "FC Wacker Innsbruck"
						// 	}, {
						// 		"url": "pics/gifs/innsbruck3.gif",
						// 		"name": "FC Wacker Innsbruck"
						// 	}, {
						// 		"url": "pics/gifs/innsbruck4.gif",
						// 		"name": "FC Wacker Innsbruck"
						// 	}, {
						// 		"url": "pics/gifs/innsbruck5.gif",
						// 		"name": "FC Wacker Innsbruck"
						// 	}, {
						// 		"url": "pics/gifs/kickers1.gif",
						// 		"name": "Stuttgarter Kickers"
						// 	}, {
						// 		"url": "pics/gifs/kickers2.gif",
						// 		"name": "Stuttgarter Kickers"
						// 	}, {
						// 		"url": "pics/gifs/nurnberg1.gif",
						// 		"name": "1. FC Nürnberg"
						// 	}, {
						// 		"url": "pics/gifs/nurnberg2.gif",
						// 		"name": "1. FC Nürnberg"
						// 	}, {
						// 		"url": "pics/gifs/nurnberg3.gif",
						// 		"name": "1. FC Nürnberg"
						// 	}, {
						// 		"url": "pics/gifs/nurnberg4.gif",
						// 		"name": "1. FC Nürnberg"
						// 	}, {
						// 		"url": "pics/gifs/nurnberg5.gif",
						// 		"name": "1. FC Nürnberg"
						// 	}, {
						// 		"url": "pics/gifs/nurnberg6.gif",
						// 		"name": "1. FC Nürnberg"
						// 	}, {
						// 		"url": "pics/gifs/nurnberg7.gif",
						// 		"name": "1. FC Nürnberg"
						// 	}, {
						// 		"url": "pics/gifs/oberdischingen1.gif",
						// 		"name": "SGM Oberdischingen"
						// 	}, {
						// 		"url": "pics/gifs/opfingen1.gif",
						// 		"name": "SG Öpfingen"
						// 	}, {
						// 		"url": "pics/gifs/regensburg1.gif",
						// 		"name": "SSV Jahn Regensburg"
						// 	}, {
						// 		"url": "pics/gifs/regensburg2.gif",
						// 		"name": "SSV Jahn Regensburg"
						// 	}, {
						// 		"url": "pics/gifs/ssvulm1.gif",
						// 		"name": "SSV Ulm"
						// 	}, {
						// 		"url": "pics/gifs/ksc1.gif",
						// 		"name": "Karlsruher SC"
						// 	}, {
						// 		"url": "pics/gifs/ksc2.gif",
						// 		"name": "Karlsruher SC"
						// 	}, {
						// 		"url": "pics/gifs/ksc3.gif",
						// 		"name": "Karlsruher SC"
						// 	}, {
						// 		"url": "pics/gifs/ksc4.gif",
						// 		"name": "Karlsruher SC"
						// 	}, {
						// 		"url": "pics/gifs/ksc5.gif",
						// 		"name": "Karlsruher SC"
						// 	}, {
						// 		"url": "pics/gifs/ksc6.gif",
						// 		"name": "Karlsruher SC"
						// 	}, {
						// 		"url": "pics/gifs/ksc7.gif",
						// 		"name": "Karlsruher SC"
						// 	}, {
						// 		"url": "pics/gifs/ksc8.gif",
						// 		"name": "Karlsruher SC"
						// 	}, {
						// 		"url": "pics/gifs/riedisheim1.gif",
						// 		"name": "FC Riedisheim"
						// 	}, {
						// 		"url": "pics/gifs/ringingen1.gif",
						// 		"name": "SV Ringingen"
						// 	}, {
						// 		"url": "pics/gifs/unterstadion1.gif",
						// 		"name": "SV Unterstadion"
						// 	}, {
						// 		"url": "pics/gifs/alb1.gif",
						// 		"name": "SGM Alb-Hochsträß"
						// 	}, {
						// 		"url": "pics/gifs/mainz_051.gif",
						// 		"name": "1. FSV Mainz 05"
						// 	}, {
						// 		"url": "pics/gifs/mainz_052.gif",
						// 		"name": "1. FSV Mainz 05"
						// 	}, {
						// 		"url": "pics/gifs/mainz_053.gif",
						// 		"name": "1. FSV Mainz 05"
						// 	}, {
						// 		"url": "pics/gifs/mainz_054.gif",
						// 		"name": "1. FSV Mainz 05"
						// 	}, {
						// 		"url": "pics/gifs/mainz_055.gif",
						// 		"name": "1. FSV Mainz 05"
						// 	}, {
						// 		"url": "pics/gifs/mainz_056.gif",
						// 		"name": "1. FSV Mainz 05"
						// 	}, {
						// 		"url": "pics/gifs/mainz_057.gif",
						// 		"name": "1. FSV Mainz 05"
						// 	}, {
						// 		"url": "pics/gifs/mainz_058.gif",
						// 		"name": "1. FSV Mainz 05"
						// 	}, {
						// 		"url": "pics/gifs/maribor1.gif",
						// 		"name": "NK Maribor"
						// 	}, {
						// 		"url": "pics/gifs/maribor2.gif",
						// 		"name": "NK Maribor"
						// 	}, {
						// 		"url": "pics/gifs/maribor3.gif",
						// 		"name": "NK Maribor"
						// 	}, {
						// 		"url": "pics/gifs/freiburg1.gif",
						// 		"name": "SC Freiburg"
						// 	}, {
						// 		"url": "pics/gifs/freiburg2.gif",
						// 		"name": "SC Freiburg"
						// 	}, {
						// 		"url": "pics/gifs/freiburg3.gif",
						// 		"name": "SC Freiburg"
						// 	}, {
						// 		"url": "pics/gifs/freiburg4.gif",
						// 		"name": "SC Freiburg"
						// 	}, {
						// 		"url": "pics/gifs/freiburg5.gif",
						// 		"name": "SC Freiburg"
						// 	}, {
						// 		"url": "pics/gifs/freiburg6.gif",
						// 		"name": "SC Freiburg"
						// 	}, {
						// 		"url": "pics/gifs/freiburg7.gif",
						// 		"name": "SC Freiburg"
						// 	}, {
						// 		"url": "pics/gifs/freiburg8.gif",
						// 		"name": "SC Freiburg"
						// 	}, {
						// 		"url": "pics/gifs/freiburg9.gif",
						// 		"name": "SC Freiburg"
						// 	}, {
						// 		"url": "pics/gifs/schalke1.gif",
						// 		"name": "FC Schalke"
						// 	}, {
						// 		"url": "pics/gifs/schalke2.gif",
						// 		"name": "FC Schalke"
						// 	}, {
						// 		"url": "pics/gifs/schalke3.gif",
						// 		"name": "FC Schalke"
						// 	}, {
						// 		"url": "pics/gifs/schalke4.gif",
						// 		"name": "FC Schalke"
						// 	}, {
						// 		"url": "pics/gifs/schalke5.gif",
						// 		"name": "FC Schalke"
						// 	}, {
						// 		"url": "pics/gifs/schalke6.gif",
						// 		"name": "FC Schalke"
						// 	}, {
						// 		"url": "pics/gifs/schalke7.gif",
						// 		"name": "FC Schalke"
						// 	}, {
						// 		"url": "pics/gifs/schalke8.gif",
						// 		"name": "FC Schalke"
						// 	}, {
						// 		"url": "pics/gifs/slavia01.gif",
						// 		"name": "SK Slavia Prag"
						// 	}, {
						// 		"url": "pics/gifs/slavia02.gif",
						// 		"name": "SK Slavia Prag"
						// 	}, {
						// 		"url": "pics/gifs/slavia03.gif",
						// 		"name": "SK Slavia Prag"
						// 	}, {
						// 		"url": "pics/gifs/slavia04.gif",
						// 		"name": "SK Slavia Prag"
						// 	}, {
						// 		"url": "pics/gifs/slavia05.gif",
						// 		"name": "SK Slavia Prag"
						// 	}, {
						// 		"url": "pics/gifs/slavia06.gif",
						// 		"name": "SK Slavia Prag"
						// 	}, {
						// 		"url": "pics/gifs/stuttgart1.gif",
						// 		"name": "VfB Stuttgart"
						// 	}, {
						// 		"url": "pics/gifs/stuttgart2.gif",
						// 		"name": "VfB Stuttgart"
						// 	}, {
						// 		"url": "pics/gifs/stuttgart3.gif",
						// 		"name": "VfB Stuttgart"
						// 	}, {
						// 		"url": "pics/gifs/stuttgart4.gif",
						// 		"name": "VfB Stuttgart"
						// 	}, {
						// 		"url": "pics/gifs/stuttgart5.gif",
						// 		"name": "VfB Stuttgart"
						// 	}, {
						// 		"url": "pics/gifs/stuttgart6.gif",
						// 		"name": "VfB Stuttgart"
						// 	}, {
						// 		"url": "pics/gifs/stuttgart7.gif",
						// 		"name": "VfB Stuttgart"
						// 	}, {
						// 		"url": "pics/gifs/stuttgart8.gif",
						// 		"name": "VfB Stuttgart"
						// 	}, {
						// 		"url": "pics/gifs/schlins1.gif",
						// 		"name": "FC Schlins"
						// 	}, {
						// 		"url": "pics/gifs/sonnenhof1.gif",
						// 		"name": "SG Sonnenhof Großaspach"
						// 	}, {
						// 		"url": "pics/gifs/sonnenhof2.gif",
						// 		"name": "SG Sonnenhof Großaspach"
						// 	}, {
						// 		"url": "pics/gifs/sonnenhof3.gif",
						// 		"name": "SG Sonnenhof Großaspach"
						// 	}, {
						// 		"url": "pics/gifs/sonnenhof4.gif",
						// 		"name": "SG Sonnenhof Großaspach"
						// 	}, {
						// 		"url": "pics/gifs/sonnenhof5.gif",
						// 		"name": "SG Sonnenhof Großaspach"
						// 	}, {
						// 		"url": "pics/gifs/vaihingen1.gif",
						// 		"name": "SV Vaihingen"
						// 	}, {
						// 		"url": "pics/gifs/swd1.gif",
						// 		"name": "SW Donau I"
						// 	}, {
						// 		"url": "pics/gifs/swd2.gif",
						// 		"name": "SW Donau I"
						// 	}, {
						// 		"url": "pics/gifs/swd3.gif",
						// 		"name": "SW Donau I"
						// 	}, {
						// 		"url": "pics/gifs/swd1.gif",
						// 		"name": "SW Donau II"
						// 	}, {
						// 		"url": "pics/gifs/swd2.gif",
						// 		"name": "SW Donau II"
						// 	}, {
						// 		"url": "pics/gifs/swd3.gif",
						// 		"name": "SW Donau II"
						// 	}, {
						// 		"url": "pics/gifs/swd1.gif",
						// 		"name": "SW Donau U14"
						// 	}, {
						// 		"url": "pics/gifs/swd2.gif",
						// 		"name": "SW Donau U14"
						// 	}, {
						// 		"url": "pics/gifs/swd3.gif",
						// 		"name": "SW Donau U14"
						// 	}
						// ]
						"gifs": oGifsData[0].Gifs,
						"audio": oaudioData[0].Audios,
						"audiosHome": [],
						"audiosGuest": []
		/* 				"tormusik": [
							{
								"url": "auto",
								"name": "Automatisch"
							},
							{
								"url": "mp3/tormusik/Kalimba.mp3",
								"name": "Kalimba"
							},
							{
								"url": "mp3/tormusik/Maid with the Flaxen Hair.mp3",
								"name": "Maid with the Flaxen Hair"
							}
						] */
					};
					oModel.setData(data);
				};
				reader.onerror = function (ex) {
					console.log(ex);
				};
				reader.readAsBinaryString(file);
				}
		 xhr.send();

// 			var data = {
// 				"testinput":"",
// 				"tableStatus": "Paarung noch nicht gesetzt",
// 				"tmpTeam": "",
// 				"tmpPkt": "",
// 				"tmpTore": "",
// 				"clock": "09:00",
// 				"penaltyClock1": "02:00",
// 				"penaltyClock2": "02:00",
// 				"penaltyClock3": "02:00",
// 				"penaltyClock4": "02:00",
// 				"timerDuration": 540, //in sekunden
// 				"timerDurationMinutes": 9, //in sekunden
// 				"timerDurationSeconds": 0, //in sekunden
// 				"penTimerDuration": 120, // in sekunden
// 				"stop": false,
// 				"stopPenTimer": false,
// 				"spielstand": "0:0",
// 				"anzahlToreHeim": 0,
// 				"anzahlToreGast": 0,
// 				"isTimerAktive": false,
// 				"isPenTimer1Aktive": false,
// 				"isPenTimer2Aktive": false,
// 				"isPenTimer3Aktive": false,
// 				"isPenTimer4Aktive": false,
// 				"isResetet": true,
// 				"heimteam": "",
// 				"gastteam": "",
// 				"koteam1": "",
// 				"koteam2": "",
// 				"koteam3": "",
// 				"koteam4": "",
// 				"textPic": "",
// 				"heimURL": "",
// 				"gastURL": "",
// 				"koteam1URL": "",
// 				"koteam2URL": "",
// 				"heimLogo": "",
// 				"gastLogo": "",
// 				"koLogoTeam1": "",
// 				"koLogoTeam2": "",
// 				"koLogoTeam3": "",
// 				"koLogoTeam4": "",
// 				"gifURL": "",
// 				"gifNameHeim": "",
// 				"gifNameGast": "",
// 				"matchingGifsHeim": "",
// 				"matchingGifsGast": "",
// 				"gifSrcHeim": "",
// 				"gifSrcGast": "",
// 				"tmpPlatz": "",
// 				"showClock": true,
// 				"showPenTimer1": false,
// 				"showPenTimer2": false,
// 				"showPenTimer3": false,
// 				"showPenTimer4": false,
// 				"showTabelle": false,
// 				"showWerbung": false,
// 				"showText": false,
// 				"showKO": false,
// 				"showKOFirstMatch": false,
// 				"showKOSecMatch": false,
// 				"showTextPic": false,
// 				"textnachricht":"",
// 				"tor":false,
// 				"heimtor":false,
// 				"gasttor":false,
// 				"adName":"Automatisch",
// 				"adSrc":"",
// 				"adList":"",
// 				"tormusikName":"Automatisch",
// 				"tormusikSrc":"",
// 				"tormusikList":"",
// 				"lastShownAdIndex":-1,
// 				"tableTitle":"",
// 				"currentGroupName":"",
// 				"currentGroupIndex":"",
// 				"tableClass":"sapUiTinyMargin",
// 				"gruppe": "",
// 				"noOfTeamsQualified":4,
// 				"allGroupsAndTeams":["teamsGruppeE","teamsGruppeF"],
// 				"allGroupsAndGames":["spieleGruppeE","spieleGruppeF"],
// 				"allGroupsAndPoints":["pktGruppeE","pktGruppeF"],
// 				"allGroupsAndGoalDiffs":["torDiffGruppeE","torDiffGruppeF"],
// 				"allGroupsAndGoals":["toreGruppeE","toreGruppeF"],
// 				"teamsGruppeE":["VfB Stuttgart", "Borussia Mönchengladbach","SK Slavia Prag","Karlsruher SC", "1. FC Nürnberg","1. FSV Mainz 05"],
// 				"spieleGruppeE":[0,0,0,0,0,0],
// 				"pktGruppeE":[0,0,0,0,0,0],
// 				"torDiffGruppeE":[0,0,0,0,0,0],
// 				"toreGruppeE":[0,0,0,0,0,0],
// 				"teamsGruppeF":["FC Schalke", "NK Maribor","SC Freiburg","Borussia Dortmund", "FC Augsburg","CFR Cluj"],
// 				"spieleGruppeF":[0,0,0,0,0,0],
// 				"pktGruppeF":[0,0,0,0,0,0],
// 				"torDiffGruppeF":[0,0,0,0,0,0],
// 				"toreGruppeF":[0,0,0,0,0,0],
// 				"teamsCurrGroup":"",
// 				"gamesCurrGroup":"",
// 				"pointsCurrGroup":"",
// 				"goalDiffCurrGroup":"",
// 				"goalsCurrGroup":"",
// 				"liveMode":false,
// 				"korrekturMode":false,
// 				"liveTblTeams":[],
// 				"liveTblSpiele":[],
// 				"liveTblPkt":[],
// 				"liveTblTorDiff":[],
// 				"liveTblTore":[],
// 				"gruppen": [{
// 						"url": "E",
// 						"name": "E"
// 					}, {
// 						"url": "F",
// 						"name": "F"
// 					}
// 				],
// 				"matches": [],
// 				"tabelle": [
// 					{
// 						"platz":"",
// 						"team":"",
// 						"spiele":"",
// 						"torDiff":"",
// 						"pkt":""
// 					},{
// 						"platz":"",
// 						"team":"",
// 						"spiele":"",
// 						"torDiff":"",
// 						"pkt":""
// 					},{
// 						"platz":"",
// 						"team":"",
// 						"spiele":"",
// 						"torDiff":"",
// 						"pkt":""
// 					},{
// 						"platz":"",
// 						"team":"",
// 						"spiele":"",
// 						"torDiff":"",
// 						"pkt":""
// 					},{
// 						"platz":"",
// 						"team":"",
// 						"spiele":"",
// 						"torDiff":"",
// 						"pkt":""
// 					},{
// 						"platz":"",
// 						"team":"",
// 						"spiele":"",
// 						"torDiff":"",
// 						"pkt":""
// 					}
// 				],
// 				"teams": [
// 						{"url": "","name": "_leer"},
// 						{"url": "pics/1. FC Heidenheim.png", "name": "1. FC Heidenheim"}, 
// 						{"url": "pics/nberg.png", "name": "1. FC Nürnberg"} ,
// 						{"url": "pics/1. FSV Mainz 05.png", "name": "1. FSV Mainz 05"} ,
// 						{"url": "pics/Borussia Dortmund.png", "name": "Borussia Dortmund"} ,
// 						{"url": "pics/Borussia Monchengladbach.png", "name": "Borussia Mönchengladbach"} ,
// 						{"url": "pics/CFR Cluj.png", "name": "CFR Cluj"} ,
// 						{"url": "pics/FC Augsburg.png", "name": "FC Augsburg"} ,
// 						{"url": "pics/FC Riedisheim.png", "name": "FC Riedisheim"} ,
// 						{"url": "pics/FC Schalke.png", "name": "FC Schalke"} ,
// 						{"url": "pics/FC Schlins.png", "name": "FC Schlins"} ,
// 						{"url": "pics/FC Wacker Innsbruck.png", "name": "FC Wacker Innsbruck"} ,
// 						{"url": "pics/Karlsruher SC.png", "name": "Karlsruher SC"} ,
// 						{"url": "pics/NK Maribor.png", "name": "NK Maribor"} ,
// 						{"url": "pics/SC Freiburg.png", "name": "SC Freiburg"} ,
// 						{"url": "pics/SF Kirchen.png", "name": "SF Kirchen"} ,
// 						{"url": "pics/SG Dettingen.png", "name": "SG Dettingen"} ,
// 						{"url": "pics/SG Sonnenhof Grossaspach.png", "name": "SG Sonnenhof Großaspach"} ,
// 						{"url": "pics/SG Opfingen.png", "name": "SG Öpfingen"}  ,
// 						{"url": "pics/SGM Oberdischingen.png", "name": "SGM Oberdischingen"} ,
// 						{"url": "pics/SK Slavia Prag.png", "name": "SK Slavia Prag"} ,
// 						{"url": "pics/SSV Jahn Regensburg.png", "name": "SSV Jahn Regensburg"},
// 						{"url": "pics/SSV Ulm.png", "name": "SSV Ulm"} ,
// 						{"url": "pics/Stuttgarter Kickers.png", "name": "Stuttgarter Kickers"} ,
// 						{"url": "pics/SV Darmstadt.png", "name": "SV Darmstadt"} ,
// 						{"url": "pics/SV Ringingen.png", "name": "SV Ringingen"} ,
// 						{"url": "pics/SV Unterstadion.png", "name": "SV Unterstadion"} ,
// 						{"url": "pics/SV Vaihingen.png", "name": "SV Vaihingen"} ,
// 						{"url": "pics/SW Donau.png", "name": "SW Donau I"}  ,
// 						{"url": "pics/SW Donau.png", "name": "SW Donau II"}  ,
// 						{"url": "pics/SW Donau.png", "name": "SW Donau U14"}  ,
// 						{"url": "pics/TSG Ehingen.png", "name": "TSG Ehingen"} ,
// 						{"url": "pics/SGM Alb-Hochstrass.png", "name": "SGM Alb-Hochsträß"}  ,
// 						{"url": "pics/VfB Stuttgart.png", "name": "VfB Stuttgart"} 
// 				],
// 				"ads": [
// 					{
// 						"url": "auto",
// 						"name": "Automatisch"
// 					},
// 					{
// 						"url": "null",
// 						"name": "keine"
// 					},
// 					{
// 						"url": "pics/ads/1.png",
// 						"name": "Spedition Stoehr | Berg Br."
// 					},{
// 						"url": "pics/ads/2.png",
// 						"name": "ILS | Kaplan Haust."
// 					},{
// 						"url": "pics/ads/3.png",
// 						"name": "Strobl Elektro | ACT"
// 					},{
// 						"url": "pics/ads/4.png",
// 						"name": "Durdu Stu. | MSR"
// 					},{
// 						"url": "pics/ads/5.png",
// 						"name": "Senn Kramer | Repass"
// 					},{
// 						"url": "pics/ads/6.png",
// 						"name": "Schalt.Strobl | Hanna Tiefbau"
// 					},{
// 						"url": "pics/ads/7.png",
// 						"name": "FS System | Halder"
// 					},{
// 						"url": "pics/ads/8.png",
// 						"name": "Rössle | Bauforum"
// 					},{
// 						"url": "pics/ads/9.png",
// 						"name": "Mundal | CSW"
// 					},{
// 						"url": "pics/ads/10.png",
// 						"name": "Nailfun | Sport Express"
// 					},{
// 						"url": "pics/ads/11.png",
// 						"name": "11 Teamsports | Engst"
// 					},{
// 						"url": "pics/ads/12.png",
// 						"name": "vs-schelkle"
// 					},{
// 						"url": "pics/ads/13.png",
// 						"name": "Tafel 13"
// 					},{
// 						"url": "pics/ads/14.png",
// 						"name": "Tafel 14"
// 					}
// 				],
// 				"gifs": [
// 					{
// 						"url": "auto",
// 						"name": "Automatisch"
// 					},{
// 						"url": "pics/gifs/lude1.gif",
// 						"name": "Lude"
// 					},{
// 						"url": "pics/gifs/lude2.gif",
// 						"name": "Lude"
// 					},{
// 						"url": "pics/gifs/lude3.gif",
// 						"name": "Lude"
// 					},{
// 						"url": "pics/gifs/darmstadt2.gif",
// 						"name": "SV Darmstadt"
// 					}, {
// 						"url": "pics/gifs/darmstadt3.gif",
// 						"name": "SV Darmstadt"
// 					}, {
// 						"url": "pics/gifs/darmstadt4.gif",
// 						"name": "SV Darmstadt"
// 					}, {
// 						"url": "pics/gifs/dettingen1.gif",
// 						"name": "SG Dettingen"
// 					}, {
// 						"url": "pics/gifs/gladbach1.gif",
// 						"name": "Borussia Mönchengladbach"
// 					}, {
// 						"url": "pics/gifs/gladbach2.gif",
// 						"name": "Borussia Mönchengladbach"
// 					}, {
// 						"url": "pics/gifs/gladbach3.gif",
// 						"name": "Borussia Mönchengladbach"
// 					}, {
// 						"url": "pics/gifs/gladbach4.gif",
// 						"name": "Borussia Mönchengladbach"
// 					}, {
// 						"url": "pics/gifs/gladbach5.gif",
// 						"name": "Borussia Mönchengladbach"
// 					}, {
// 						"url": "pics/gifs/gladbach6.gif",
// 						"name": "Borussia Mönchengladbach"
// 					}, {
// 						"url": "pics/gifs/gladbach7.gif",
// 						"name": "Borussia Mönchengladbach"
// 					}, {
// 						"url": "pics/gifs/gladbach8.gif",
// 						"name": "Borussia Mönchengladbach"
// 					}, {
// 						"url": "pics/gifs/gladbach9.gif",
// 						"name": "Borussia Mönchengladbach"
// 					}, {
// 						"url": "pics/gifs/gladbach10.gif",
// 						"name": "Borussia Mönchengladbach"
// 					}, {
// 						"url": "pics/gifs/gladbach11.gif",
// 						"name": "Borussia Mönchengladbach"
// 					}, {
// 						"url": "pics/gifs/cluj1.gif",
// 						"name": "CFR Cluj"
// 					}, {
// 						"url": "pics/gifs/cluj2.gif",
// 						"name": "CFR Cluj"
// 					}, {
// 						"url": "pics/gifs/cluj3.gif",
// 						"name": "CFR Cluj"
// 					}, {
// 						"url": "pics/gifs/dortmund1.gif",
// 						"name": "Borussia Dortmund"
// 					}, {
// 						"url": "pics/gifs/dortmund2.gif",
// 						"name": "Borussia Dortmund"
// 					}, {
// 						"url": "pics/gifs/dortmund3.gif",
// 						"name": "Borussia Dortmund"
// 					}, {
// 						"url": "pics/gifs/dortmund4.gif",
// 						"name": "Borussia Dortmund"
// 					}, {
// 						"url": "pics/gifs/dortmund5.gif",
// 						"name": "Borussia Dortmund"
// 					}, {
// 						"url": "pics/gifs/dortmund6.gif",
// 						"name": "Borussia Dortmund"
// 					}, {
// 						"url": "pics/gifs/dortmund7.gif",
// 						"name": "Borussia Dortmund"
// 					}, {
// 						"url": "pics/gifs/dortmund8.gif",
// 						"name": "Borussia Dortmund"
// 					}, {
// 						"url": "pics/gifs/dortmund9.gif",
// 						"name": "Borussia Dortmund"
// 					}, {
// 						"url": "pics/gifs/dortmund10.gif",
// 						"name": "Borussia Dortmund"
// 					}, {
// 						"url": "pics/gifs/augsburg1.gif",
// 						"name": "FC Augsburg"
// 					}, {
// 						"url": "pics/gifs/augsburg2.gif",
// 						"name": "FC Augsburg"
// 					}, {
// 						"url": "pics/gifs/augsburg3.gif",
// 						"name": "FC Augsburg"
// 					}, {
// 						"url": "pics/gifs/augsburg4.gif",
// 						"name": "FC Augsburg"
// 					}, {
// 						"url": "pics/gifs/augsburg5.gif",
// 						"name": "FC Augsburg"
// 					}, {
// 						"url": "pics/gifs/augsburg6.gif",
// 						"name": "FC Augsburg"
// 					}, {
// 						"url": "pics/gifs/augsburg7.gif",
// 						"name": "FC Augsburg"
// 					}, {
// 						"url": "pics/gifs/augsburg8.gif",
// 						"name": "FC Augsburg"
// 					}, {
// 						"url": "pics/gifs/heidenheim1.gif",
// 						"name": "1. FC Heidenheim"
// 					}, {
// 						"url": "pics/gifs/heidenheim2.gif",
// 						"name": "1. FC Heidenheim"
// 					}, {
// 						"url": "pics/gifs/heidenheim3.gif",
// 						"name": "1. FC Heidenheim"
// 					}, {
// 						"url": "pics/gifs/heidenheim4.gif",
// 						"name": "1. FC Heidenheim"
// 					}, {
// 						"url": "pics/gifs/heidenheim5.gif",
// 						"name": "1. FC Heidenheim"
// 					}, {
// 						"url": "pics/gifs/innsbruck1.gif",
// 						"name": "FC Wacker Innsbruck"
// 					}, {
// 						"url": "pics/gifs/innsbruck2.gif",
// 						"name": "FC Wacker Innsbruck"
// 					}, {
// 						"url": "pics/gifs/innsbruck3.gif",
// 						"name": "FC Wacker Innsbruck"
// 					}, {
// 						"url": "pics/gifs/innsbruck4.gif",
// 						"name": "FC Wacker Innsbruck"
// 					}, {
// 						"url": "pics/gifs/innsbruck5.gif",
// 						"name": "FC Wacker Innsbruck"
// 					}, {
// 						"url": "pics/gifs/kickers1.gif",
// 						"name": "Stuttgarter Kickers"
// 					}, {
// 						"url": "pics/gifs/kickers2.gif",
// 						"name": "Stuttgarter Kickers"
// 					}, {
// 						"url": "pics/gifs/nurnberg1.gif",
// 						"name": "1. FC Nürnberg"
// 					}, {
// 						"url": "pics/gifs/nurnberg2.gif",
// 						"name": "1. FC Nürnberg"
// 					}, {
// 						"url": "pics/gifs/nurnberg3.gif",
// 						"name": "1. FC Nürnberg"
// 					}, {
// 						"url": "pics/gifs/nurnberg4.gif",
// 						"name": "1. FC Nürnberg"
// 					}, {
// 						"url": "pics/gifs/nurnberg5.gif",
// 						"name": "1. FC Nürnberg"
// 					}, {
// 						"url": "pics/gifs/nurnberg6.gif",
// 						"name": "1. FC Nürnberg"
// 					}, {
// 						"url": "pics/gifs/nurnberg7.gif",
// 						"name": "1. FC Nürnberg"
// 					}, {
// 						"url": "pics/gifs/oberdischingen1.gif",
// 						"name": "SGM Oberdischingen"
// 					}, {
// 						"url": "pics/gifs/opfingen1.gif",
// 						"name": "SG Öpfingen"
// 					}, {
// 						"url": "pics/gifs/regensburg1.gif",
// 						"name": "SSV Jahn Regensburg"
// 					}, {
// 						"url": "pics/gifs/regensburg2.gif",
// 						"name": "SSV Jahn Regensburg"
// 					}, {
// 						"url": "pics/gifs/ssvulm1.gif",
// 						"name": "SSV Ulm"
// 					}, {
// 						"url": "pics/gifs/ksc1.gif",
// 						"name": "Karlsruher SC"
// 					}, {
// 						"url": "pics/gifs/ksc2.gif",
// 						"name": "Karlsruher SC"
// 					}, {
// 						"url": "pics/gifs/ksc3.gif",
// 						"name": "Karlsruher SC"
// 					}, {
// 						"url": "pics/gifs/ksc4.gif",
// 						"name": "Karlsruher SC"
// 					}, {
// 						"url": "pics/gifs/ksc5.gif",
// 						"name": "Karlsruher SC"
// 					}, {
// 						"url": "pics/gifs/ksc6.gif",
// 						"name": "Karlsruher SC"
// 					}, {
// 						"url": "pics/gifs/ksc7.gif",
// 						"name": "Karlsruher SC"
// 					}, {
// 						"url": "pics/gifs/ksc8.gif",
// 						"name": "Karlsruher SC"
// 					}, {
// 						"url": "pics/gifs/riedisheim1.gif",
// 						"name": "FC Riedisheim"
// 					}, {
// 						"url": "pics/gifs/ringingen1.gif",
// 						"name": "SV Ringingen"
// 					}, {
// 						"url": "pics/gifs/unterstadion1.gif",
// 						"name": "SV Unterstadion"
// 					}, {
// 						"url": "pics/gifs/alb1.gif",
// 						"name": "SGM Alb-Hochsträß"
// 					}, {
// 						"url": "pics/gifs/mainz_051.gif",
// 						"name": "1. FSV Mainz 05"
// 					}, {
// 						"url": "pics/gifs/mainz_052.gif",
// 						"name": "1. FSV Mainz 05"
// 					}, {
// 						"url": "pics/gifs/mainz_053.gif",
// 						"name": "1. FSV Mainz 05"
// 					}, {
// 						"url": "pics/gifs/mainz_054.gif",
// 						"name": "1. FSV Mainz 05"
// 					}, {
// 						"url": "pics/gifs/mainz_055.gif",
// 						"name": "1. FSV Mainz 05"
// 					}, {
// 						"url": "pics/gifs/mainz_056.gif",
// 						"name": "1. FSV Mainz 05"
// 					}, {
// 						"url": "pics/gifs/mainz_057.gif",
// 						"name": "1. FSV Mainz 05"
// 					}, {
// 						"url": "pics/gifs/mainz_058.gif",
// 						"name": "1. FSV Mainz 05"
// 					}, {
// 						"url": "pics/gifs/maribor1.gif",
// 						"name": "NK Maribor"
// 					}, {
// 						"url": "pics/gifs/maribor2.gif",
// 						"name": "NK Maribor"
// 					}, {
// 						"url": "pics/gifs/maribor3.gif",
// 						"name": "NK Maribor"
// 					}, {
// 						"url": "pics/gifs/freiburg1.gif",
// 						"name": "SC Freiburg"
// 					}, {
// 						"url": "pics/gifs/freiburg2.gif",
// 						"name": "SC Freiburg"
// 					}, {
// 						"url": "pics/gifs/freiburg3.gif",
// 						"name": "SC Freiburg"
// 					}, {
// 						"url": "pics/gifs/freiburg4.gif",
// 						"name": "SC Freiburg"
// 					}, {
// 						"url": "pics/gifs/freiburg5.gif",
// 						"name": "SC Freiburg"
// 					}, {
// 						"url": "pics/gifs/freiburg6.gif",
// 						"name": "SC Freiburg"
// 					}, {
// 						"url": "pics/gifs/freiburg7.gif",
// 						"name": "SC Freiburg"
// 					}, {
// 						"url": "pics/gifs/freiburg8.gif",
// 						"name": "SC Freiburg"
// 					}, {
// 						"url": "pics/gifs/freiburg9.gif",
// 						"name": "SC Freiburg"
// 					}, {
// 						"url": "pics/gifs/schalke1.gif",
// 						"name": "FC Schalke"
// 					}, {
// 						"url": "pics/gifs/schalke2.gif",
// 						"name": "FC Schalke"
// 					}, {
// 						"url": "pics/gifs/schalke3.gif",
// 						"name": "FC Schalke"
// 					}, {
// 						"url": "pics/gifs/schalke4.gif",
// 						"name": "FC Schalke"
// 					}, {
// 						"url": "pics/gifs/schalke5.gif",
// 						"name": "FC Schalke"
// 					}, {
// 						"url": "pics/gifs/schalke6.gif",
// 						"name": "FC Schalke"
// 					}, {
// 						"url": "pics/gifs/schalke7.gif",
// 						"name": "FC Schalke"
// 					}, {
// 						"url": "pics/gifs/schalke8.gif",
// 						"name": "FC Schalke"
// 					}, {
// 						"url": "pics/gifs/slavia01.gif",
// 						"name": "SK Slavia Prag"
// 					}, {
// 						"url": "pics/gifs/slavia02.gif",
// 						"name": "SK Slavia Prag"
// 					}, {
// 						"url": "pics/gifs/slavia03.gif",
// 						"name": "SK Slavia Prag"
// 					}, {
// 						"url": "pics/gifs/slavia04.gif",
// 						"name": "SK Slavia Prag"
// 					}, {
// 						"url": "pics/gifs/slavia05.gif",
// 						"name": "SK Slavia Prag"
// 					}, {
// 						"url": "pics/gifs/slavia06.gif",
// 						"name": "SK Slavia Prag"
// 					}, {
// 						"url": "pics/gifs/stuttgart1.gif",
// 						"name": "VfB Stuttgart"
// 					}, {
// 						"url": "pics/gifs/stuttgart2.gif",
// 						"name": "VfB Stuttgart"
// 					}, {
// 						"url": "pics/gifs/stuttgart3.gif",
// 						"name": "VfB Stuttgart"
// 					}, {
// 						"url": "pics/gifs/stuttgart4.gif",
// 						"name": "VfB Stuttgart"
// 					}, {
// 						"url": "pics/gifs/stuttgart5.gif",
// 						"name": "VfB Stuttgart"
// 					}, {
// 						"url": "pics/gifs/stuttgart6.gif",
// 						"name": "VfB Stuttgart"
// 					}, {
// 						"url": "pics/gifs/stuttgart7.gif",
// 						"name": "VfB Stuttgart"
// 					}, {
// 						"url": "pics/gifs/stuttgart8.gif",
// 						"name": "VfB Stuttgart"
// 					}, {
// 						"url": "pics/gifs/schlins1.gif",
// 						"name": "FC Schlins"
// 					}, {
// 						"url": "pics/gifs/sonnenhof1.gif",
// 						"name": "SG Sonnenhof Großaspach"
// 					}, {
// 						"url": "pics/gifs/sonnenhof2.gif",
// 						"name": "SG Sonnenhof Großaspach"
// 					}, {
// 						"url": "pics/gifs/sonnenhof3.gif",
// 						"name": "SG Sonnenhof Großaspach"
// 					}, {
// 						"url": "pics/gifs/sonnenhof4.gif",
// 						"name": "SG Sonnenhof Großaspach"
// 					}, {
// 						"url": "pics/gifs/sonnenhof5.gif",
// 						"name": "SG Sonnenhof Großaspach"
// 					}, {
// 						"url": "pics/gifs/vaihingen1.gif",
// 						"name": "SV Vaihingen"
// 					}, {
// 						"url": "pics/gifs/swd1.gif",
// 						"name": "SW Donau I"
// 					}, {
// 						"url": "pics/gifs/swd2.gif",
// 						"name": "SW Donau I"
// 					}, {
// 						"url": "pics/gifs/swd3.gif",
// 						"name": "SW Donau I"
// 					}, {
// 						"url": "pics/gifs/swd1.gif",
// 						"name": "SW Donau II"
// 					}, {
// 						"url": "pics/gifs/swd2.gif",
// 						"name": "SW Donau II"
// 					}, {
// 						"url": "pics/gifs/swd3.gif",
// 						"name": "SW Donau II"
// 					}, {
// 						"url": "pics/gifs/swd1.gif",
// 						"name": "SW Donau U14"
// 					}, {
// 						"url": "pics/gifs/swd2.gif",
// 						"name": "SW Donau U14"
// 					}, {
// 						"url": "pics/gifs/swd3.gif",
// 						"name": "SW Donau U14"
// 					}
// 				]
// 				,
// /* 				"tormusik": [
// 					{
// 						"url": "auto",
// 						"name": "Automatisch"
// 					},
// 					{
// 						"url": "mp3/tormusik/Kalimba.mp3",
// 						"name": "Kalimba"
// 					},
// 					{
// 						"url": "mp3/tormusik/Maid with the Flaxen Hair.mp3",
// 						"name": "Maid with the Flaxen Hair"
// 					}
// 				] */
// 			};
// 			var oModel = new JSONModel(data);
// 			oModel.setDefaultBindingMode("TwoWay");
			return oModel;
		},
		removeDuplicates: function (originalArray, prop) {
			var newArray = [];
			// var lookupObject = [];
			// for (var i in originalArray) {
			//   // if (i === "__proto__" || i === "constructor" || i === "prototype") {
			//   //   continue;
			//   //   }
			//   lookupObject[originalArray[i][prop]] = originalArray[i];
			// }
			// for (i in lookupObject) {
			//   newArray.push(lookupObject[i]);
			// }
			// return newArray;
			newArray = [...new Map(originalArray.map(item => [item[prop], item])).values()];
			return newArray;
		  },
	};
});