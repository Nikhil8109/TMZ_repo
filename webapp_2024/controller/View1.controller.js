sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.vflmunderkingen.Anzeigetafel.controller.View1", {
		onInit:function(){
			this._oHomeCount = 0;
			this._oGuestCount = 0;
		},
	
		closeWindow: function(){
			window.close();
		},
		
		showText: function(oEvent){
			var oModel = this.getView().getModel();
			oModel.setProperty("/showText",true);
			oModel.setProperty("/showKO",false);
			oModel.setProperty("/showWerbung",false);
			oModel.setProperty("/showTabelle",false);
			oModel.setProperty("/heimtor", false);
			oModel.setProperty("/gasttor", false);
			oModel.setProperty("/showTextPic",false);
		},
		
		showKO: function(oEvent){
			var oModel = this.getView().getModel();
			oModel.setProperty("/showKO",true);
			oModel.setProperty("/showText",false);
			oModel.setProperty("/showWerbung",false);
			oModel.setProperty("/showTabelle",false);
			oModel.setProperty("/heimtor", false);
			oModel.setProperty("/gasttor", false);
			oModel.setProperty("/showTextPic",false);
		},
		
		showTextPic: function(oEvent){
			var oModel = this.getView().getModel();
			oModel.setProperty("/showTextPic",true);
			oModel.setProperty("/showKO",false);
			oModel.setProperty("/showWerbung",false);
			oModel.setProperty("/showTabelle",false);
			oModel.setProperty("/heimtor", false);
			oModel.setProperty("/gasttor", false);
			oModel.setProperty("/showText",false);
			oModel.setProperty("/showClock",false);
		},
		
		playTormusik: function(oEvent){
		
			// sap.m.MessageToast.show("Musik ab !", {
					// duration: 8000,
					// my: "left top",
					// at: "left center" ,
					// offset: "10",
			// });
			// var oModel = this.getView().getModel();
			// var selection = this.getView().byId("selectTormusik");
			// var tormusikName = selection.getSelectedItem().getText();
			// var tormusikSrc = selection.getSelectedKey();
			// var lastTMIndex = selection.indexOfItem(selection.getLastItem());
			
			// var tormusikList = oModel.getProperty("/tormusikList");
			
			// sap.m.MessageToast.show(tormusikList[0], {
					// duration: 8000,
					// my: "left top",
					// at: "left center" ,
					// offset: "10",
			// });
			
			// var songSrc = "";
			// if(tormusikName === "Automatisch"){
				// if(tormusikList.length > 0) {
					// var randomNr = Math.floor(Math.random() * lastTMIndex);
					// oModel.setProperty("/tormusikSrc",tormusikList[randomNr]);
					// songSrc = tormusikList[randomNr];
				// }else{
					// songSrc = "mp3/tormusik/Kalimba.mp3";
					// oModel.setProperty("/tormusikSrc","mp3/tormusik/Kalimba.mp3");
				// }
			// }else {
				// oModel.setProperty("/tormusikSrc",oModel.getProperty("/tormusikName"));
				// songSrc = oModel.getProperty("/tormusikName");
			// }
			
			// sap.m.MessageToast.show(songSrc, {
					// duration: 8000,
					// my: "left top",
					// at: "left top" ,
					// offset: "10",
			// });
			// var mp3 = new Audio(songSrc); 

			// mp3.play();
		
		},
		showWerbung: function(oEvent){
			var oModel = this.getView().getModel();
			var selection = this.getView().byId("selectAd")
			var adName = selection.getSelectedItem().getText();
			var adSrc = selection.getSelectedKey();
			var lastAdIndex = selection.indexOfItem(selection.getLastItem());
			var adList = oModel.getProperty("/adList");
			
			if(adName === "Automatisch"){
				if(adList.length > 0) {
					var randomNr = Math.floor(Math.random() * lastAdIndex);
					oModel.setProperty("/adSrc",adList[randomNr]);
				}else{
					oModel.setProperty("/adSrc","pics/ads/1.png");
				}
			}else {
				oModel.setProperty("/adSrc",oModel.getProperty("/adName"));
			}
			
			oModel.setProperty("/showWerbung",true);
			oModel.setProperty("/showTabelle",false);
			oModel.setProperty("/showText",false);
			oModel.setProperty("/showKO",false);
			oModel.setProperty("/showTextPic",false);
			

		},
		
		highlightCurrentTeams: function(oEvent){
			var oModel = this.getView().getModel();
			var liveMode = oModel.getProperty("/liveMode");
			
			if(liveMode === true) {	
				//Highlight playing teams in table
				var heimteam = oModel.getProperty("/heimteam");
				var gastteam = oModel.getProperty("/gastteam");
				var noOfTeamsQualified = oModel.getProperty("/noOfTeamsQualified");
				var table = this.getView().byId("table");
				var aItems = table.getItems();
				
				 //table.getItems()[1].$().css("background-color", "red");
				
/*  				sap.m.MessageToast.show(table.getRows(), {
					duration: 5000,
					my: "left top",
					at: "left center" ,
					offset: "10",
				});  */

				for (var i = 0; i < aItems.length; ++i) {
					var itemTeam = table.getItems()[i].getBindingContext().getProperty("team")
					var allItemCells = aItems[i].getCells();
					console.log("Loop: " + i)
					if(itemTeam === heimteam || itemTeam === gastteam){
						console.log("itemTeam === heimteam")
						allItemCells[0].addStyleClass("highlight");
						allItemCells[1].addStyleClass("highlight");
						allItemCells[2].addStyleClass("highlight");
						allItemCells[3].addStyleClass("highlight");
						allItemCells[4].addStyleClass("highlight");
					}else{
						allItemCells[0].removeStyleClass("highlight");
						allItemCells[1].removeStyleClass("highlight");
						allItemCells[2].removeStyleClass("highlight");
						allItemCells[3].removeStyleClass("highlight");
						allItemCells[4].removeStyleClass("highlight");
					}
				}
			}else{
				//Highlight playing teams in table
				var table = this.getView().byId("table");
				var aItems = table.getItems();
				
				for (var i = 0; i < aItems.length; ++i) {
					var itemTeam = table.getItems()[i].getBindingContext().getProperty("team")
					var allItemCells = aItems[i].getCells();
					allItemCells[0].removeStyleClass("highlight");
					allItemCells[1].removeStyleClass("highlight");
					allItemCells[2].removeStyleClass("highlight");
					allItemCells[3].removeStyleClass("highlight");
					allItemCells[4].removeStyleClass("highlight");
				}
			}
		},
		
		showTabelle: function(oEvent){
			var oModel = this.getView().getModel();
			var tableStatus = oModel.getProperty("/tableStatus");
			
			if(tableStatus !== "Teams nicht in gleicher (oder keiner) Gruppe") {
				this.getView().getController().highlightCurrentTeams();
				
				oModel.setProperty("/showTabelle",true);
				oModel.setProperty("/showWerbung",false);
				oModel.setProperty("/showText",false);
				oModel.setProperty("/showKO",false);
				oModel.setProperty("/showTextPic",false);
			}
		},
		
		showResult: function(oEvent){
			var oModel = this.getView().getModel();
			oModel.setProperty("/showClock",true);
			oModel.setProperty("/showTabelle",false);
			oModel.setProperty("/showWerbung",false);
			oModel.setProperty("/showText",false);
			oModel.setProperty("/showKO",false);
			oModel.setProperty("/showTextPic",false);
		},
		
		selectAd: function(){
			var oModel = this.getView().getModel();
			var selection = this.getView().byId("selectAd")
			var adName = selection.getSelectedItem().getText();
			var adSrc = selection.getSelectedKey();
			var lastAdIndex = selection.indexOfItem(selection.getLastItem());
		
			if(adName === "Automatisch"){
				//Create gif list
				var adList = [];
				
				for (var i = 0; i <= lastAdIndex; i++) {
					if (selection.getItems()[i].getText() !== "keine" && selection.getItems()[i].getText() !== "Automatisch") {
						var ad = selection.getItems()[i].getKey();
						adList.push(ad);
					}
				}
				
				oModel.setProperty("/adList", adList);
				
				var lastShownAdIndex = oModel.getProperty("/lastShownAdIndex");
				var newLastShownAdIndex = lastShownAdIndex + 1
				if(newLastShownAdIndex >= adList.length) {
					newLastShownAdIndex = 0;
				}
				
				oModel.setProperty("/adSrc", adList[newLastShownAdIndex]);
				oModel.setProperty("/lastShownAdIndex", newLastShownAdIndex);
			}else{
				oModel.setProperty("/adSrc",adSrc);
			}
		},
		
		showTorHeim: function(oEvent){
			var oSourceParam = oEvent.getParameters().value;
			if(this._oHomeCount === 0 || this._oHomeCount < oSourceParam){
				var oModel = this.getView().getModel();
				var penTimer3Aktive = oModel.getProperty("/isPenTimer3Aktive");
				var penTimer4Aktive = oModel.getProperty("/isPenTimer4Aktive");
				var animationControl = this.getView().byId("animationControl1").getSelected();
				var controller = this.getView().getController();
							
				//controller.playTormusik();
				
				oModel.setProperty("/showTabelle", false);
				
				if(animationControl === true) {
					//show Animation
					oModel.setProperty("/heimtor", true);
					//Hide Animation
					setTimeout(function(){
						oModel.setProperty("/heimtor", false);
					}, 4000);
				}
				
				//Reset Zeitstrafen Gastteam
				if(penTimer3Aktive == true) {
					clearInterval(this.z3);
					oModel.setProperty("/showPenTimer3",false);
					oModel.setProperty("/isPenTimer3Aktive", false);
					oModel.setProperty("/penaltyClock3", "02:00");
				}
				if(penTimer4Aktive == true) {
					clearInterval(this.z4);
					oModel.setProperty("/showPenTimer4",false);
					oModel.setProperty("/isPenTimer4Aktive", false);
					oModel.setProperty("/penaltyClock4", "02:00");
				}
				
				//Call function for gif selection if auto-selection is active
				var gifSelection = this.getView().byId("selectGifHeim").getSelectedItem().getText();
				var audioSelection = this.getView().byId("selectAudTeam1").getSelectedItem().getText();
				
				if(gifSelection === "Automatisch"){
					var oHomeTeam = this.getView().byId("selectHeimTeam").getSelectedItem().getText();
					var oHomeGifs = oModel.getProperty("/gifsHome");
					// var matchingGifs = oModel.getProperty("/matchingGifsHeim");
					// var randomNr = Math.floor(Math.random() * matchingGifs.length);
					var matchingGifs = oHomeGifs.filter((oItem)=>{return oItem.GifName.startsWith(oHomeTeam)});
					var otherGifs = oHomeGifs.filter((oItem)=>{return (oItem.GifName.startsWith("goal"))});
					if(matchingGifs.length > 0){
						var matchedGif = [];
					   matchingGifs.forEach((oItem)=>{
							var obJ = {};
							Object.defineProperty(obJ, "GifName", {
								value: oItem.GifName.replaceAll(' ', ''),
								writable: true,
								enumerable: true,
								configurable: true,
							  });
							matchedGif.push(obJ);
						});
						var randomNr = Math.floor(Math.random() * matchedGif.length);
						var oHomeUrl = "./DataFiles/gifs/"+matchedGif[randomNr].GifName+".gif";
						oModel.setProperty("/gifSrcHeim",oHomeUrl);
					}
					else{
						var randomNr = Math.floor(Math.random() * otherGifs.length);
						var oOtherUrl = "./DataFiles/gifs/"+otherGifs[randomNr].GifName+".gif";
						oModel.setProperty("/gifSrcHeim",oOtherUrl);
					}	
				}
				else{
					oModel.setProperty("/gifSrcHeim","./DataFiles/gifs/"+gifSelection.replaceAll(' ', '')+".gif");
				}
			// 	if(isTeamAnthemSelected){
			// 		var oHomeTeam = this.getView().byId("selectHeimTeam").getSelectedItem().getText();
			// 		var oHomeAudios = oModel.getProperty("/audiosHome");
			// 		var matchingaudios = oHomeAudios.filter((oItem)=>{return oItem.AudioName.startsWith(oHomeTeam + " Anthem")});
			// 		var otheraudios = oHomeAudios.filter((oItem)=>{return (oItem.AudioName.startsWith("general"))});
			// 		if(matchingaudios.length > 0){
			// 			var matchedAudio = [];
			// 		   matchingaudios.forEach((oItem)=>{
			// 				var obJ = {};
			// 				Object.defineProperty(obJ, "AudioName", {
			// 					value: oItem.AudioName.replaceAll(' ', ''),
			// 					writable: true,
			// 					enumerable: true,
			// 					configurable: true,
			// 				  });
			// 				matchedAudio.push(obJ);
			// 			});
			// 			var randomNr = Math.floor(Math.random() * matchedAudio.length);
			// 			var oHomeUrl = "./DataFiles/audios/"+matchedAudio[randomNr].AudioName+".mp3";
			// 			// oModel.setProperty("/gifSrcHeim",oHomeUrl);
			// 			var audioElement = document.createElement('audio');
			// 			audioElement.setAttribute('src', oHomeUrl);
			// 			audioElement.play();
			// 	}
			// 	else{
			// 		var randomNr = Math.floor(Math.random() * otheraudios.length);
			// 		var oOtherUrl = "./DataFiles/audios/"+otheraudios[randomNr].AudioName+".mp3";
			// 		// oModel.setProperty("/gifSrcHeim",oOtherUrl);
			// 		var audioElement = document.createElement('audio');
			// 		audioElement.setAttribute('src', oOtherUrl);
			// 		audioElement.play();
			// 	}	
			// }
			// 	else{
					if(audioSelection === "Automatisch"){
						var oHomeTeam = this.getView().byId("selectHeimTeam").getSelectedItem().getText();
						var oHomeAudios = oModel.getProperty("/audiosHome");
						var matchingaudios = oHomeAudios.filter((oItem)=>{return oItem.AudioName.startsWith(oHomeTeam)});
						var otheraudios = oHomeAudios.filter((oItem)=>{return (oItem.AudioName.startsWith("general"))});
						if(matchingaudios.length > 0){
							var matchedAudio = [];
						   matchingaudios.forEach((oItem)=>{
								var obJ = {};
								Object.defineProperty(obJ, "AudioName", {
									value: oItem.AudioName.replaceAll(' ', ''),
									writable: true,
									enumerable: true,
									configurable: true,
								  });
								matchedAudio.push(obJ);
							});
							var randomNr = Math.floor(Math.random() * matchedAudio.length);
							var oHomeUrl = "./DataFiles/audios/"+matchedAudio[randomNr].AudioName+".mp3";
							// oModel.setProperty("/gifSrcHeim",oHomeUrl);
							var audioElement = document.createElement('audio');
							audioElement.setAttribute('src', oHomeUrl);
							audioElement.play();
						}
						else{
							var randomNr = Math.floor(Math.random() * otheraudios.length);
							var oOtherUrl = "./DataFiles/audios/"+otheraudios[randomNr].AudioName+".mp3";
							// oModel.setProperty("/gifSrcHeim",oOtherUrl);
							var audioElement = document.createElement('audio');
							audioElement.setAttribute('src', oOtherUrl);
							audioElement.play();
						}	
					}
					else{
						// oModel.setProperty("/gifSrcHeim","./DataFiles/gifs/"+gifSelection+".gif");
						var audioElement = document.createElement('audio');
							audioElement.setAttribute('src', "./DataFiles/audios/"+audioSelection.replaceAll(' ', '')+".mp3");
							audioElement.play();
					}
				// } 
				//Update Live Score
				controller.liveTableUpdate();
				//Highlight current teams in table
				controller.highlightCurrentTeams();
				
				//Anzeige Live Tabelle 
				var liveTableControl = this.getView().byId("liveTableControl1").getSelected();						
				setTimeout(function(){
					if (liveTableControl == true){
						controller.showTabelle();
	
						this.timer2Table = setTimeout(function(){ 
							oModel.setProperty("/showTabelle", false);
							this.timer2Table = null;
						}, 14000);
					}
				}, 8000);
			}
			this._oHomeCount = oSourceParam;
		},
		onSelectTeamAnthem:function(oEvent){
			var oTeamAnthemchck = oEvent.getSource().getSelected();
			var oModel = this.getView().getModel();
			var oAudiosAll = oModel.getProperty("/audio");
			var oHomeAudios = oModel.getProperty("/audiosHome");
			var oGuestAudios = oModel.getProperty("/audiosGuest");
			var oHome = this.getView().byId("selectHeimTeam");
			var oGuest = this.getView().byId("selectGastTeam");
			var oHomeTeam = oHome.getSelectedItem().getText();
			var oGuestTeam = oGuest.getSelectedItem().getText();
			if(oTeamAnthemchck){
				if(oHome !== undefined && oGuest !== undefined){
					var oHomeAnthems = oAudiosAll.filter((oData)=>{ return oData.AudioName.startsWith(oHomeTeam + " Anthem")});
					var oGuestAnthems = oAudiosAll.filter((oData)=>{ return oData.AudioName.startsWith(oGuestTeam + " Anthem")});
					oHomeAudios =  oHomeAudios.concat(oHomeAnthems);
					oGuestAudios =  oGuestAudios.concat(oGuestAnthems);
					oModel.setProperty("/audiosHome",oHomeAudios);
					oModel.setProperty("/audiosGuest",oGuestAudios);
				}
				}
				else{
					oHomeAudios = oHomeAudios.filter((oItem)=>{return !oItem.AudioName.startsWith(oHomeTeam + " Anthem")});
					oGuestAudios = oGuestAudios.filter((oItem)=>{return !oItem.AudioName.startsWith(oGuestTeam + " Anthem")});
					oModel.setProperty("/audiosHome",oHomeAudios);
					oModel.setProperty("/audiosGuest",oGuestAudios);
				}
			},
		showTorGast: function(oEvent){
			var oSourceParam = oEvent.getParameters().value;
		if(this._oGuestCount === 0 || this._oGuestCount < oSourceParam){
			var oModel = this.getView().getModel();
			// var isTeamAnthemSelected = this.getView().byId("selectTeamAnthem").getSelected();
			var penTimer1Aktive = oModel.getProperty("/isPenTimer1Aktive");
			var penTimer2Aktive = oModel.getProperty("/isPenTimer2Aktive");
			var animationControl = this.getView().byId("animationControl1").getSelected();
			var controller = this.getView().getController();
			
			oModel.setProperty("/showTabelle", false);
						
			if(animationControl === true) {
				//show Animation
				oModel.setProperty("/gasttor", true);
				//Hide Animation
				setTimeout(function(){ 
					oModel.setProperty("/gasttor", false);
				}, 4000);
			}
									

			//controller.playTormusik();
			
			//Reset Zeitstrafen Heimteam
			if(penTimer1Aktive == true) {
				clearInterval(this.z1);
				oModel.setProperty("/showPenTimer1",false);
				oModel.setProperty("/isPenTimer1Aktive", false);
				oModel.setProperty("/penaltyClock1", "02:00");
			}
			if(penTimer2Aktive == true) {
				clearInterval(this.z2);
				oModel.setProperty("/showPenTimer2",false);
				oModel.setProperty("/isPenTimer2Aktive", false);
				oModel.setProperty("/penaltyClock2", "02:00");
			}
			
			//Call function for gif selection if auto-selection is active
			var gifSelection = this.getView().byId("selectGifGast").getSelectedItem().getText();
			var audioSelection = this.getView().byId("selectAudTeam2").getSelectedItem().getText();

			if(gifSelection === "Automatisch"){
				var oGuestTeam = this.getView().byId("selectGastTeam").getSelectedItem().getText();
				var oGuestGifs = oModel.getProperty("/gifsGuest");
				// var matchingGifs = oModel.getProperty("/matchingGifsHeim");
				// var randomNr = Math.floor(Math.random() * matchingGifs.length);
				var matchingGifs = oGuestGifs.filter((oItem)=>{return oItem.GifName.startsWith(oGuestTeam)});
				var otherGifs = oGuestGifs.filter((oItem)=>{return (oItem.GifName.startsWith("goal"))});
				if(matchingGifs.length > 0){
					var matchedGif = [];
			       matchingGifs.forEach((oItem)=>{
						var obJ = {};
						Object.defineProperty(obJ, "GifName", {
							value: oItem.GifName.replaceAll(' ', ''),
							writable: true,
							enumerable: true,
							configurable: true,
						  });
						matchedGif.push(obJ);
					});
					var randomNr = Math.floor(Math.random() * matchedGif.length);
					oModel.setProperty("/gifSrcGast","./DataFiles/gifs/"+matchedGif[randomNr].GifName+".gif");
				}
				else{
					var randomNr = Math.floor(Math.random() * otherGifs.length);
					oModel.setProperty("/gifSrcGast","./DataFiles/gifs/"+otherGifs[randomNr].GifName+".gif");
				}	
			}
			else{
				oModel.setProperty("/gifSrcGast","./DataFiles/gifs/"+gifSelection.replaceAll(' ', '')+".gif");
			}
		// 	if(isTeamAnthemSelected){
		// 		var oGuestTeam = this.getView().byId("selectGastTeam").getSelectedItem().getText();
		// 		var oGuestAudios = oModel.getProperty("/audiosGuest");
		// 		var matchingaudios = oGuestAudios.filter((oItem)=>{return oItem.AudioName.startsWith(oGuestTeam + " Anthem")});
		// 		var otheraudios = oGuestAudios.filter((oItem)=>{return (oItem.AudioName.startsWith("general"))});
		// 		if(matchingaudios.length > 0){
		// 			var matchedAudio = [];
		// 		   matchingaudios.forEach((oItem)=>{
		// 				var obJ = {};
		// 				Object.defineProperty(obJ, "AudioName", {
		// 					value: oItem.AudioName.replaceAll(' ', ''),
		// 					writable: true,
		// 					enumerable: true,
		// 					configurable: true,
		// 				  });
		// 				matchedAudio.push(obJ);
		// 			});
		// 			var randomNr = Math.floor(Math.random() * matchedAudio.length);
		// 			var oGuestUrl = "./DataFiles/audios/"+matchedAudio[randomNr].AudioName+".mp3";
		// 			// oModel.setProperty("/gifSrcHeim",oHomeUrl);
		// 			var audioElement = document.createElement('audio');
		// 			audioElement.setAttribute('src', oGuestUrl);
		// 			audioElement.play();
		// 	}
		// 	else{
		// 		var randomNr = Math.floor(Math.random() * otheraudios.length);
		// 		var oOtherUrl = "./DataFiles/audios/"+otheraudios[randomNr].AudioName+".mp3";
		// 		// oModel.setProperty("/gifSrcHeim",oOtherUrl);
		// 		var audioElement = document.createElement('audio');
		// 		audioElement.setAttribute('src', oOtherUrl);
		// 		audioElement.play();
		// 	}	
		// }
		// 	else{
				if(audioSelection === "Automatisch"){
					var oGuestTeam = this.getView().byId("selectGastTeam").getSelectedItem().getText();
					var oGuestAudios = oModel.getProperty("/audiosGuest");
					var matchingaudios = oGuestAudios.filter((oItem)=>{return oItem.AudioName.startsWith(oGuestTeam)});
					var otheraudios = oGuestAudios.filter((oItem)=>{return (oItem.AudioName.startsWith("general"))});
					if(matchingaudios.length > 0){
						var matchedAudio = [];
					   matchingaudios.forEach((oItem)=>{
							var obJ = {};
							Object.defineProperty(obJ, "AudioName", {
								value: oItem.AudioName.replaceAll(' ', ''),
								writable: true,
								enumerable: true,
								configurable: true,
							  });
							matchedAudio.push(obJ);
						});
						var randomNr = Math.floor(Math.random() * matchedAudio.length);
						var oGuestUrl = "./DataFiles/audios/"+matchedAudio[randomNr].AudioName+".mp3";
						// oModel.setProperty("/gifSrcHeim",oHomeUrl);
						var audioElement = document.createElement('audio');
						audioElement.setAttribute('src', oGuestUrl);
						audioElement.play();
					}
					else{
						var randomNr = Math.floor(Math.random() * otheraudios.length);
						var oOtherUrl = "./DataFiles/audios/"+otheraudios[randomNr].AudioName+".mp3";
						// oModel.setProperty("/gifSrcHeim",oOtherUrl);
						var audioElement = document.createElement('audio');
						audioElement.setAttribute('src', oOtherUrl);
						audioElement.play();
					}	
				}
				else{
					// oModel.setProperty("/gifSrcHeim","./DataFiles/gifs/"+gifSelection+".gif");
					var audioElement = document.createElement('audio');
						audioElement.setAttribute('src', "./DataFiles/audios/"+audioSelection.replaceAll(' ', '')+".mp3");
						audioElement.play();
				}
			// } 
			//Update Live Score
			controller.liveTableUpdate();
			//Highlight current teams in table
			controller.highlightCurrentTeams();
			
			//Anzeige Live Tabelle 
			var liveTableControl = this.getView().byId("liveTableControl1").getSelected();						
			setTimeout(function(){
				if (liveTableControl == true){
					controller.showTabelle();

					this.timer3Table = setTimeout(function(){ 
						oModel.setProperty("/showTabelle", false);
						this.timer3Table = null;
					}, 14000);
				}
			}, 8000);
			}
			this._oGuestCount = oSourceParam;
		},
		
		findMatchingGifHeim: function(){
			var oModel = this.getView().getModel();
			//var test = this.getView().byId("selectHeimTeam").getItems().getKey();
			var heimteam = oModel.getProperty("/heimteam");
			var gifNameHeim = this.getView().byId("selectGifHeim").getSelectedItem().getText();
			var gifSrcHeim = this.getView().byId("selectGifHeim").getSelectedKey();
			//var noOfGifs = this.getView().byId("selectGifHeim").getItems().length;
			var gifArray = oModel.getProperty("/gifs");
			var noOfGifs = gifArray.length;
			
			//Create gif list
			var gifSrcList = [];
			var gifNameList = [];
			
			for (var i = 0; i < noOfGifs; i++) {
				var gifsrc = oModel.getProperty("/gifs/"+ i + "/url");
				var gifName = oModel.getProperty("/gifs/"+ i + "/name");
				gifSrcList.push(gifsrc);
				gifNameList.push(gifName);
			}
			
			//search for matching gifs in giflist
			var matchingGifs = [];
			var generalGifs = [];
						
			for (var i = 0; i < noOfGifs; i++) {
				if(heimteam === gifNameList[i]){
					matchingGifs.push(gifSrcList[i]);
				}else if(gifNameList[i] == "All"){
					generalGifs.push(gifSrcList[i]);
				}
			}
			/*Add General Gifs if less then 4 gifs of team could be found*/
			if(matchingGifs.length < 1){
				matchingGifs = matchingGifs.concat(generalGifs);
			}
			
/* 			sap.m.MessageToast.show(matchingGifs, {
					duration: 8000,
					my: "left top",
					at: "left center" ,
					offset: "10",
				}); */
			
			oModel.setProperty("/matchingGifsHeim",matchingGifs);
			
		},
		
		selectGifHeim: function(){
			var oModel = this.getView().getModel();
			var gifNameHeim = this.getView().byId("selectGifHeim").getSelectedItem().getText();
			var gifSrcHeim = this.getView().byId("selectGifHeim").getSelectedKey();
			
			if(gifNameHeim === "Automatisch"){
				this.getView().getController().findMatchingGifHeim();
				var matchingGifs = oModel.getProperty("/matchingGifsHeim");
				matchingGifs = matchingGifs[Math.floor(Math.random() * matchingGifs.length)];
				sap.m.MessageToast.show("Selected Gif:" + matchingGifs, {
					duration: 4000,
					my: "left top",
					at: "left top" ,
					offset: "10"
				}); 
				oModel.setProperty("/gifSrcHeim",matchingGifs);
			}else{
				oModel.setProperty("/gifSrcHeim",gifSrcHeim);
			}
		},
		
		findMatchingGifGast: function(){
			var oModel = this.getView().getModel();
			var gastteam = oModel.getProperty("/gastteam");
			var gifNameGast = this.getView().byId("selectGifGast").getSelectedItem().getText();
			var gifSrcGast = this.getView().byId("selectGifGast").getSelectedKey();
			var gifArray = oModel.getProperty("/gifs");
			var noOfGifs = gifArray.length;
			
			//Create gif list
			var gifSrcList = [];
			var gifNameList = [];
			
			for (var i = 0; i < noOfGifs; i++) {
				var gifsrc = oModel.getProperty("/gifs/"+ i + "/url");
				var gifName = oModel.getProperty("/gifs/"+ i + "/name");
				gifSrcList.push(gifsrc);
				gifNameList.push(gifName);
			}
			
			//search for matching gifs in giflist
			var matchingGifs = [];
			var generalGifs = [];
						
			for (var i = 0; i < noOfGifs; i++) {
				if(gastteam === gifNameList[i]){
					matchingGifs.push(gifSrcList[i]);
				}else if(gifNameList[i] == "All"){
					generalGifs.push(gifSrcList[i]);
				}
			}
			
			if(matchingGifs.length < 4){
				matchingGifs = matchingGifs.concat(generalGifs);
			}
			
			oModel.setProperty("/matchingGifsGast",matchingGifs);

		},
		
		selectGifGast: function(){
			var oModel = this.getView().getModel();
			var gifNameGast = this.getView().byId("selectGifGast").getSelectedItem().getText();
			var gifSrcGast = this.getView().byId("selectGifGast").getSelectedKey();
			
			if(gifNameGast === "Automatisch"){
				this.getView().getController().findMatchingGifGast();
				var matchingGifs = oModel.getProperty("/matchingGifsGast");
				matchingGifs = matchingGifs[Math.floor(Math.random() * matchingGifs.length)];
				sap.m.MessageToast.show(matchingGifs, {
					duration: 4000,
					my: "left top",
					at: "left top" ,
					offset: "10"
				}); 
				oModel.setProperty("/gifSrcGast",matchingGifs);
			}else{
				oModel.setProperty("/gifSrcGast",gifSrcGast);
			}
		},
		
		onAfterRendering: function() {
			//disable mousewheel / wheel in stepInput (heimtore und gasttore)
		    this.getView().byId("heimtore").attachBrowserEvent("wheel",
			function(event){
				event.preventDefault();
			}
			);		
			
			this.getView().byId("gasttore").attachBrowserEvent("wheel",
			function(event){
				event.preventDefault();
			}
			);	
			
		},
		
		setPaarung: function(){
			var oModel = this.getView().getModel();
			
			var heimteam = this.getView().byId("selectHeimTeam").getSelectedItem().getText();
			oModel.setProperty("/heimteam",heimteam);
			console.log(heimteam)
			var gastteam = this.getView().byId("selectGastTeam").getSelectedItem().getText();
			oModel.setProperty("/gastteam",gastteam);
			var heimURL = oModel.getProperty("/heimURL");
			var gastURL = oModel.getProperty("/gastURL");
			console.log(heimURL)
			//trigger functions to select goal animations
			this.getView().getController().selectGifHeim();
			this.getView().getController().selectGifGast();
			
			oModel.setProperty("/heimLogo",heimURL);
			oModel.setProperty("/gastLogo",gastURL);
			oModel.setProperty("/heimtor", false);
			oModel.setProperty("/gasttor", false);
			oModel.setProperty("/showWerbung",false);
			oModel.setProperty("/showTabelle",false);
			oModel.setProperty("/showText",false);
			oModel.setProperty("/showKO",false);
			oModel.setProperty("/showTextPic",false);
			
			/* //Erstellen Liste Tormusik (wenn noch nicht vorhanden)
			var selection = this.getView().byId("selectTormusik");
			var tormusikList = oModel.getProperty("/tormusikList");
			
			if(tormusikList === "") {
					sap.m.MessageToast.show("ERSTELLEN SONG LISTE", {
					duration: 15000,
					my: "left top",
					at: "left center" ,
					offset: "10",
				});
				tormusikList = [];
				var tormusikName = selection.getSelectedItem().getText();
				var tormusikSrc = selection.getSelectedKey();
				var lastTMIndex = selection.indexOfItem(selection.getLastItem());
				
				for (var i = 0; i <= lastTMIndex; i++) {
					if (selection.getItems()[i].getText() !== "keine" && selection.getItems()[i].getText() !== "Automatisch") {
						var song = selection.getItems()[i].getKey();
						tormusikList.push(song);
					}
				}
			
				oModel.setProperty("/tormusikList", tormusikList);
			} */

			
			//Get current group
			//loop durch Gruppen
			var tableSelection = this.getView().byId("selectGroup");
			var allGroups = [...oModel.getProperty("/allGroupsAndTeams")];
			var allGroupsGames = [...oModel.getProperty("/allGroupsAndGames")];
			var allGroupsPt = [...oModel.getProperty("/allGroupsAndPoints")];
			var allGroupsGoalDiff = [...oModel.getProperty("/allGroupsAndGoalDiffs")];
			var allGroupsGoals = [...oModel.getProperty("/allGroupsAndGoals")];
			var nrOfGroups = allGroups.length;
			
			
			for (var i = 0; i < nrOfGroups; i++) {
				var tempGroupTeams = oModel.getProperty("/" + allGroups[i]);
				var tempGroupName = tableSelection.getItems()[i].getText();
				
				if(tempGroupTeams.includes(heimteam) && tempGroupTeams.includes(gastteam)) {
					
					var tempGroupGames = [...oModel.getProperty("/" + allGroupsGames[i])];
					var tempGroupPoints = [...oModel.getProperty("/" + allGroupsPt[i])];
					var tempGroupGoalDiff = [...oModel.getProperty("/" + allGroupsGoalDiff[i])];
					var tempGroupGoals = [...oModel.getProperty("/" + allGroupsGoals[i])];
					
					oModel.setProperty("/currentGroupName",tempGroupName);
					oModel.setProperty("/currentGroupIndex",i);
					oModel.setProperty("/teamsCurrGroup",tempGroupTeams);
					oModel.setProperty("/gamesCurrGroup",tempGroupGames);
					oModel.setProperty("/pointsCurrGroup",tempGroupPoints);
					oModel.setProperty("/goalDiffCurrGroup",tempGroupGoalDiff);
					oModel.setProperty("/goalsCurrGroup",tempGroupGoals);
					
					oModel.setProperty("/tableStatus","Gruppe " + tempGroupName);
					
					tableSelection.setSelectedKey(tableSelection.getItems()[i].getKey());
					this.getView().getController().sortTable();
					break;
				}else{
					oModel.setProperty("/tableStatus","Teams nicht in gleicher (oder keiner) Gruppe");
				}
			}
			
			//Reset Live Table
			this.getView().getController().liveTableUpdate();
		},
		onSelectHome:function(oEvent){
			// var oPicurl = "pics/"+oEvent.getSource().getSelectedKey();
			// var oHomeImg = this.getView().byId("imiiii5ge0");
			// var oHomeTxt = this.getView().byId("homeTxt");
			// oHomeTxt.setVisible(false);
			// oHomeImg.setSrc(oPicurl);
			var oHomeGifCtrl = this.getView().byId("selectGifHeim");
			var oHomeStepCtrl = this.getView().byId("heimtore");
			var oHomeAudCtrl = this.getView().byId("selectAudTeam1");
			var oModel = this.getView().getModel();
			var oteamName = oEvent.getSource().getSelectedItem().getText();
			var oGifsData = oModel.getProperty("/gifs");
			var oaudioData = oModel.getProperty("/audio");
			var oT1Audios = oaudioData.filter((oItem)=>{
				return ((oItem.AudioName.startsWith(oteamName)  && !oItem.AudioName.startsWith(oteamName + " Anthem")) || oItem.AudioName.startsWith("general") || oItem.AudioName.startsWith("Automatisch"));
			});
			var oHomeGifs = oGifsData.filter((oItem)=>{
				return ((oItem.GifName.startsWith(oteamName) || oItem.GifName.startsWith("goal") || oItem.GifName.startsWith("Automatisch")));
			});
			oHomeGifCtrl.setEnabled(true);
			oHomeAudCtrl.setEnabled(true);
			oHomeStepCtrl.setEnabled(true);
			oModel.setProperty("/gifsHome",oHomeGifs);
			oModel.setProperty("/audiosHome",oT1Audios);
		},
		onSelectGuest:function(oEvent){
			var oGuestGifCtrl = this.getView().byId("selectGifGast");
			var oGuestAudCtrl = this.getView().byId("selectAudTeam2");
			var oGuestStepCtrl = this.getView().byId("gasttore");
			var oModel = this.getView().getModel();
			var oteamName = oEvent.getSource().getSelectedItem().getText();
			var oGifsData = oModel.getProperty("/gifs");
			var oaudioData = oModel.getProperty("/audio");
			var oT2Audios = oaudioData.filter((oItem)=>{
				return ((oItem.AudioName.startsWith(oteamName)  && !oItem.AudioName.startsWith(oteamName + " Anthem")) || oItem.AudioName.startsWith("general") || oItem.AudioName.startsWith("Automatisch"));
			});
			var oGuestGifs = oGifsData.filter((oItem)=>{
				return (oItem.GifName.startsWith(oteamName) || oItem.GifName.startsWith("goal") || oItem.GifName.startsWith("Automatisch"));
			});
			oGuestGifCtrl.setEnabled(true);
			oGuestAudCtrl.setEnabled(true);
			oGuestStepCtrl.setEnabled(true);
			oModel.setProperty("/gifsGuest",oGuestGifs);
			oModel.setProperty("/audiosGuest",oT2Audios);
		},
		setKOPaarung: function(){
			var oModel = this.getView().getModel();
			
			oModel.setProperty("/showKO",true);
			oModel.setProperty("/showText",false);
			oModel.setProperty("/showWerbung",false);
			oModel.setProperty("/showTabelle",false);
			oModel.setProperty("/heimtor", false);
			oModel.setProperty("/gasttor", false);
			oModel.setProperty("/showTextPic",false);

			
			
			var team1 = this.getView().byId("selectKOTeam1").getSelectedItem().getText();
			oModel.setProperty("/koteam1",team1);
			var team2 = this.getView().byId("selectKOTeam2").getSelectedItem().getText();
			oModel.setProperty("/koteam2",team2);
			var team3 = this.getView().byId("selectKOTeam3").getSelectedItem().getText();
			oModel.setProperty("/koteam3",team2);
			var team4 = this.getView().byId("selectKOTeam4").getSelectedItem().getText();
			oModel.setProperty("/koteam4",team2);
			
			if(team3 == "_leer") {
				oModel.setProperty("/showKOSecMatch", false);
			}else{
				oModel.setProperty("/showKOSecMatch", true);
			}
			
			
			var team1URL = oModel.getProperty("/koteam1URL");
			var team2URL = oModel.getProperty("/koteam2URL");
			var team3URL = oModel.getProperty("/koteam3URL");
			var team4URL = oModel.getProperty("/koteam4URL");
			console.log(team1URL)
			console.log(team2URL)
			
			oModel.setProperty("/koLogoTeam1",team1URL);
			oModel.setProperty("/koLogoTeam2",team2URL);
			oModel.setProperty("/koLogoTeam3",team3URL);
			oModel.setProperty("/koLogoTeam4",team4URL);
			oModel.setProperty("/heimtor", false);
			oModel.setProperty("/gasttor", false);
			oModel.setProperty("/showWerbung",false);
			oModel.setProperty("/showTabelle",false);
			oModel.setProperty("/showText",false);
			oModel.setProperty("/showTextPic",false);
			
		},
		
		liveTableUpdate: function(oEvent){
			var oModel = this.getView().getModel();
			
			var tableStatus = oModel.getProperty("/tableStatus");
			
			if(tableStatus !== "Teams nicht in gleicher (oder keiner) Gruppe") {
			
				var heimteam = oModel.getProperty("/heimteam");
				var gastteam = oModel.getProperty("/gastteam");
				
				console.log("CHECK NOW!")
				console.log(heimteam)
				console.log(gastteam)

				if(heimteam == "SW Donau U14") {
					console.log("HEIM TEAM SWD")
					var heimtore = 0;
					var gasttore = 1;
				}else if(gastteam == "SW Donau U14") {
					var heimtore = 1;
					var gasttore = 0;
				}else {
					var heimtore = oModel.getProperty("/anzahlToreHeim");
					var gasttore = oModel.getProperty("/anzahlToreGast");
				}
				
				var heimTorDiff = heimtore - gasttore;
				var gastTorDiff = gasttore - heimtore;
				var heimPkt;
				var gastPkt;
				console.log("------")

				if(heimtore > gasttore) {
					heimPkt = 3;
					gastPkt = 0;
				}else if(heimtore < gasttore) {
					heimPkt = 0;
					gastPkt = 3;
				}else if(heimtore === gasttore) {
					heimPkt = 1;
					gastPkt = 1;			
				}
							
				//assign new values to existing group and values
				
				var currentGroupTeams = [...oModel.getProperty("/teamsCurrGroup")];
				var currentGroupGames = [...oModel.getProperty("/gamesCurrGroup")];
				console.log(currentGroupTeams)
				console.log(currentGroupGames)
				var currentGroupPoints = [...oModel.getProperty("/pointsCurrGroup")];
				console.log(currentGroupPoints)
				var currentGroupGoalDiffs = [...oModel.getProperty("/goalDiffCurrGroup")];
				var currentGroupGoals = [...oModel.getProperty("/goalsCurrGroup")];

				var currentTeamIndexHT = currentGroupTeams.indexOf(heimteam);
				var currentTeamIndexGT = currentGroupTeams.indexOf(gastteam);
				
				var currentGamesHT = currentGroupGames[currentTeamIndexHT]; 
				var currentGamesGT = currentGroupGames[currentTeamIndexGT]; 
				var currentPtsHT = currentGroupPoints[currentTeamIndexHT]; 
				var currentPtsGT = currentGroupPoints[currentTeamIndexGT]; 
				var currentgoalDiffHT = currentGroupGoalDiffs[currentTeamIndexHT]; 
				var currentgoalDiffGT = currentGroupGoalDiffs[currentTeamIndexGT]; 
				var currentgoalsHT = currentGroupGoals[currentTeamIndexHT]; 
				var currentgoalsGT = currentGroupGoals[currentTeamIndexGT]; 
							
				var liveTblTeams = [...oModel.getProperty("/teamsCurrGroup")];
				var liveTblSpiele = currentGroupGames;
				var liveTblPkt = currentGroupPoints;
				var liveTblTorDiff = currentGroupGoalDiffs;
				var liveTblTore = currentGroupGoals;
				console.log(liveTblTeams)
				console.log(liveTblPkt)
				liveTblSpiele[currentTeamIndexHT] = Number(currentGamesHT) + 1;
				liveTblSpiele[currentTeamIndexGT] = Number(currentGamesGT) + 1;
				
				liveTblPkt[currentTeamIndexHT] = Number(currentPtsHT) + heimPkt;
				liveTblPkt[currentTeamIndexGT] = Number(currentPtsGT) + gastPkt;

				liveTblTorDiff[currentTeamIndexHT] = Number(currentgoalDiffHT) + heimTorDiff;
				liveTblTorDiff[currentTeamIndexGT] = Number(currentgoalDiffGT) + gastTorDiff;

				liveTblTore[currentTeamIndexHT] = Number(currentgoalsHT) + heimtore;
				liveTblTore[currentTeamIndexGT] = Number(currentgoalsGT) + gasttore;
							
				oModel.setProperty("/liveTblTeams", liveTblTeams);
				oModel.setProperty("/liveTblSpiele", liveTblSpiele);
				oModel.setProperty("/liveTblPkt", liveTblPkt);
				oModel.setProperty("/liveTblTorDiff", liveTblTorDiff);
				oModel.setProperty("/liveTblTore", liveTblTore);
							
				this.getView().getController().sortTable();
			}
		},
		
		saveMatchData: function(oEvent){
			var oModel = this.getView().getModel();
			
			var tableStatus = oModel.getProperty("/tableStatus");
			
			if(tableStatus !== "Teams nicht in gleicher (oder keiner) Gruppe") {
			
				var heimteam = oModel.getProperty("/heimteam");
				var gastteam = oModel.getProperty("/gastteam");
				
				console.log("CHECK NOW!")
				if(heimteam == "SW Donau U14") {
					console.log("HEIM TEAM SWD")
					var heimtore = 0;
					var gasttore = 1;
				}else if(gastteam == "SW Donau U14") {
					var heimtore = 1;
					var gasttore = 0;
				}else {
					var heimtore = oModel.getProperty("/anzahlToreHeim");
					var gasttore = oModel.getProperty("/anzahlToreGast");
				}
				
				var heimTorDiff = heimtore - gasttore;
				var gastTorDiff = gasttore - heimtore;
				
				var heimPkt;
				var gastPkt;
				
				if(heimtore > gasttore) {
					heimPkt = 3;
					gastPkt = 0;
				}else if(heimtore < gasttore) {
					heimPkt = 0;
					gastPkt = 3;
				}else if(heimtore === gasttore) {
					heimPkt = 1;
					gastPkt = 1;
				}
				
				//assign new values to existing group and values
				var currentGroupName = oModel.getProperty("/currentGroupName");

				var currentGroupTeams = [...oModel.getProperty("/teamsGruppe"+currentGroupName)];
				var currentGroupGames = [...oModel.getProperty("/spieleGruppe"+currentGroupName)];
				var currentGroupPoints = [...oModel.getProperty("/pktGruppe"+currentGroupName)];
				var currentGroupGoalDiffs = [...oModel.getProperty("/torDiffGruppe"+currentGroupName)];
				var currentGroupGoals = [...oModel.getProperty("/toreGruppe"+currentGroupName)];
				
				var currentGroupTeams = [...oModel.getProperty("/teamsCurrGroup")];
				var currentGroupGames = [...oModel.getProperty("/gamesCurrGroup")];
				var currentGroupPoints = [...oModel.getProperty("/pointsCurrGroup")];
				var currentGroupGoalDiffs = [...oModel.getProperty("/goalDiffCurrGroup")];
				var currentGroupGoals = [...oModel.getProperty("/goalsCurrGroup")];
				
				var currentTeamIndexHT = currentGroupTeams.indexOf(heimteam);
				var currentTeamIndexGT = currentGroupTeams.indexOf(gastteam);

				var currentGamesHT = currentGroupGames[currentTeamIndexHT]; 
				var currentGamesGT = currentGroupGames[currentTeamIndexGT]; 
				var currentPtsHT = currentGroupPoints[currentTeamIndexHT]; 
				var currentPtsGT = currentGroupPoints[currentTeamIndexGT]; 
				var currentgoalDiffsHT = currentGroupGoalDiffs[currentTeamIndexHT]; 
				var currentgoalDiffsGT = currentGroupGoalDiffs[currentTeamIndexGT]; 
				var currentgoalsHT = currentGroupGoals[currentTeamIndexHT]; 
				var currentgoalsGT = currentGroupGoals[currentTeamIndexGT]; 
				
				currentGroupGames[currentTeamIndexHT] = Number(currentGamesHT) + 1;
				currentGroupGames[currentTeamIndexGT] = Number(currentGamesGT) + 1;
				
				currentGroupPoints[currentTeamIndexHT] = Number(currentPtsHT) + heimPkt;
				currentGroupPoints[currentTeamIndexGT] = Number(currentPtsGT) + gastPkt;
				
				currentGroupGoalDiffs[currentTeamIndexHT] = Number(currentgoalDiffsHT) + heimTorDiff;
				currentGroupGoalDiffs[currentTeamIndexGT] = Number(currentgoalDiffsGT) + gastTorDiff;
				
				currentGroupGoals[currentTeamIndexHT] = Number(currentgoalsHT) + heimtore;
				currentGroupGoals[currentTeamIndexGT] = Number(currentgoalsGT) + gasttore;
				
				//set new values
				oModel.setProperty("/spieleGruppe"+currentGroupName,currentGroupGames);
				oModel.setProperty("/pktGruppe"+currentGroupName,currentGroupPoints);
				oModel.setProperty("/torDiffGruppe"+currentGroupName,currentGroupGoalDiffs);
				oModel.setProperty("/toreGruppe"+currentGroupName,currentGroupGoals);
				
				//save Match in MatchList
				var matchList = oModel.getProperty("/matches");

				var sep = "~"; //separator
				var matchString =  currentGroupName + sep + heimteam + sep + gastteam + sep + heimtore + sep + gasttore + "\n";
				
				
				matchList.push(matchString);
				oModel.setProperty("/matches",matchList);
				
				oModel.setProperty("/matchList",matchList.toString());
				localStorage.setItem("matchlist",matchList.toString());			
				
				sap.m.MessageToast.show("Spiel hinzugefuegt: \n" + heimteam + " - " + gastteam + " " + heimtore + ":" + gasttore, {
					duration: 8000,
					my: "left top",
					at: "left center" ,
					offset: "10"
				});
				
				//trigger group update 
				this.getView().getController().sortTable();
			}
			
		},
		
		calcTableByMatchList: function(oEvent){
			var oModel = this.getView().getModel();
			oModel.setProperty("/korrekturMode",true);
			this.getView().getController().resetTableData();
			
			var liveMode = oModel.getProperty("/liveMode");

			if(liveMode === true) {
				sap.m.MessageToast.show("Fehler: Korrektur kann nicht im LiveMode durchgef�hrt werden.", {
						duration: 8000,
						my: "left center",         
						at: "left center",
						offset: "10"						
				});
				//return;
			}
			
			var teamListItems = this.getView().byId("selectHeimTeam").getItems();
			var teamList = [];
			//Create Teamlist
			for (var i = 0; i < teamListItems.length; ++i) {
				var teamName = teamListItems[i].getText();
				teamList.push(teamName);
			}
			
			var matchList = this.getView().byId("matches").getValue();
			
			matchList = matchList.split(",");
			
			//loop through matches
			for (var i = 0; i < matchList.length; ++i) {

				var tempMatchString = matchList[i];
				//sap.m.MessageToast.show(tempMatchString);
				var strElements = tempMatchString.split("~");
				var tempGroup = strElements[0].replace(/\s+/g, ''); //remove space from string
				//tempGroup.replace(/\s+/g, '');
				console.log("GROUUUUP")
				
				console.log(tempMatchString)
				console.log(tempGroup)
				var tempHeimteam = strElements[1].trim();
				var tempGastteam = strElements[2].trim();
				var tempHeimtore = strElements[3].replace(/\s+/g, '');//remove space from string
				var tempGasttore = strElements[4].replace(/\s+/g, '');//remove space from string
				tempHeimtore = Number(tempHeimtore);
				tempGasttore = Number(tempGasttore);
				
				
				
				//Check if Teamnames exist
				if(teamList.includes(tempHeimteam) == false) {
					sap.m.MessageToast.show("Fehler: " + tempHeimteam + " nicht gefunden", {
						duration: 8000,
						my: "left center",   
						at: "left center", 
						offset: "10"	
						});
					return;
				}
				if(teamList.includes(tempGastteam) == false) {
					sap.m.MessageToast.show("Fehler: " + tempGastteam + " nicht gefunden", {
						duration: 8000,
						my: "left center",      
						at: "left center",
						offset: "10"
						});
					return;
				}

				var heimTorDiff = tempHeimtore - tempGasttore;
				var gastTorDiff = tempGasttore - tempHeimtore;
				
				var heimPkt;
				var gastPkt;

				if(tempHeimtore > tempGasttore) {
					heimPkt = 3;
					gastPkt = 0;
				}else if(tempHeimtore < tempGasttore) {
					heimPkt = 0;
					gastPkt = 3;
				}else if(tempHeimtore === tempGasttore) {
					heimPkt = 1;
					gastPkt = 1;				
				}
				
				
			//oModel.setProperty("/testinput",tempHeimtore + " > " + tempGasttore + );
			
			//assign new values to existing group and values
			
			var currentGroupName = tempGroup;
			console.log("_____________________________")
			console.log(currentGroupName)
			console.log("_____________________________")
			var currentGroupTeams = [...oModel.getProperty("/teamsGruppe"+currentGroupName)];
			var currentGroupGames = [...oModel.getProperty("/spieleGruppe"+currentGroupName)];
			var currentGroupPoints = [...oModel.getProperty("/pktGruppe"+currentGroupName)];
			var currentGroupGoalDiffs = [...oModel.getProperty("/torDiffGruppe"+currentGroupName)];
			var currentGroupGoals = [...oModel.getProperty("/toreGruppe"+currentGroupName)];
			console.log(currentGroupTeams)
			console.log(currentGroupPoints)
			var currentTeamIndexHT = currentGroupTeams.indexOf(tempHeimteam);
			var currentTeamIndexGT = currentGroupTeams.indexOf(tempGastteam);
			console.log(currentTeamIndexHT)
			console.log(currentTeamIndexGT)
			var currentGamesHT = currentGroupGames[currentTeamIndexHT]; 
			var currentGamesGT = currentGroupGames[currentTeamIndexGT]; 
			var currentPtsHT = currentGroupPoints[currentTeamIndexHT]; 
			var currentPtsGT = currentGroupPoints[currentTeamIndexGT]; 
			var currentgoalDiffsHT = currentGroupGoalDiffs[currentTeamIndexHT]; 
			var currentgoalDiffsGT = currentGroupGoalDiffs[currentTeamIndexGT]; 
			var currentgoalsHT = currentGroupGoals[currentTeamIndexHT]; 
			var currentgoalsGT = currentGroupGoals[currentTeamIndexGT]; 
						
			currentGroupGames[currentTeamIndexHT] = Number(currentGamesHT) + 1;
			currentGroupGames[currentTeamIndexGT] = Number(currentGamesGT) + 1;
			
			currentGroupPoints[currentTeamIndexHT] = Number(currentPtsHT) + heimPkt;
			currentGroupPoints[currentTeamIndexGT] = Number(currentPtsGT) + gastPkt;
			
			oModel.setProperty("/testinput",Number(currentPtsHT) + " + " + heimPkt + ", " + Number(currentPtsGT) + " + " +  gastPkt);
			
			currentGroupGoalDiffs[currentTeamIndexHT] = Number(currentgoalDiffsHT) + heimTorDiff;
			currentGroupGoalDiffs[currentTeamIndexGT] = Number(currentgoalDiffsGT) + gastTorDiff;
			
			currentGroupGoals[currentTeamIndexHT] = Number(currentgoalsHT) + tempHeimtore;
			currentGroupGoals[currentTeamIndexGT] = Number(currentgoalsGT) + tempGasttore;
			

			//set new values
			oModel.setProperty("/spieleGruppe"+currentGroupName,currentGroupGames);
			oModel.setProperty("/pktGruppe"+currentGroupName,currentGroupPoints);
			oModel.setProperty("/torDiffGruppe"+currentGroupName,currentGroupGoalDiffs);
			oModel.setProperty("/toreGruppe"+currentGroupName,currentGroupGoals);
			
			oModel.setProperty("/gamesCurrGroup",currentGroupGames);
			oModel.setProperty("/pointsCurrGroup",currentGroupPoints);
			oModel.setProperty("/goalDiffCurrGroup",currentGroupGoalDiffs);
			oModel.setProperty("/goalsCurrGroup",currentGroupGoals);
			}
			
			oModel.setProperty("/matches",matchList);
			localStorage.setItem("matchlist", matchList);
			
			sap.m.MessageToast.show("Korrektur abgeschlossen. Starte Tabellen update.", {
						duration: 4000,
						my: "left center",    
						at: "left center",
						offset: "10"
						});
			
			//trigger group update 
			this.getView().getController().sortTable();
			this.getView().getController().setPaarung();

		},
		resetSpielstand: function(oEvent){
			var oModel = this.getView().getModel();
			oModel.setProperty("/anzahlToreHeim", 0);
			oModel.setProperty("/anzahlToreGast", 0);
		},
		
		resetTableContent: function(oEvent){
			var oModel = this.getView().getModel();
			var table = this.getView().byId("table");
			var aItems = table.getItems();
			
			for (var i = 0; i < aItems.length; i++) {
				oModel.setProperty("/tabelle/" + i + "/platz","");
				oModel.setProperty("/tabelle/" + i + "/team","");
				oModel.setProperty("/tabelle/" + i + "/spiele","");
				oModel.setProperty("/tabelle/" + i + "/pkt","");
				oModel.setProperty("/tabelle/" + i + "/torDiff","");
			}
		},
		fillMatchesFromStorage: function(oEvent){
			var oModel = this.getView().getModel();
			var matchList = localStorage.getItem("matchlist");
			oModel.setProperty("/matchList",matchList);
			
		},
		
		readStorage: function(oEvent){
			var oModel = this.getView().getModel();
			
			oModel.setProperty("/testinput",localStorage.getItem("matchlist"));
		},
		
		clearStorage: function(oEvent){
			localStorage.setItem("matchlist","");
		},
		
		resetTableData: function(oEvent){
			var oModel = this.getView().getModel();
			oModel.setProperty("/showTabelle",false);
			var allGroupsAndTeams = [...oModel.getProperty("/allGroupsAndTeams")];
			var allGroupsAndGames = [...oModel.getProperty("/allGroupsAndGames")];
			var allGroupsAndPoints = [...oModel.getProperty("/allGroupsAndPoints")];
			var allGroupsAndGoalDiffs = [...oModel.getProperty("/allGroupsAndGoalDiffs")];
			var allGroupsAndGoals = [...oModel.getProperty("/allGroupsAndGoals")];

			for (var i = 0; i < allGroupsAndTeams.length; ++i) {
				var group = [...oModel.getProperty("/" + allGroupsAndTeams[i])];
				var zeroArray = new Int8Array(group.length);

				oModel.setProperty("/" + allGroupsAndGames[i], zeroArray);
				oModel.setProperty("/" + allGroupsAndPoints[i], zeroArray);
				oModel.setProperty("/" + allGroupsAndGoalDiffs[i], zeroArray);
				oModel.setProperty("/" + allGroupsAndGoals[i], zeroArray);
			}
			this.getView().getController().sortTable();

		},
		
		
		sortTable: function(oEvent){
			
			var oModel = this.getView().getModel();
			
			var liveMode = oModel.getProperty("/liveMode");
			var korrekturMode = oModel.getProperty("/korrekturMode");


			this.getView().getController().resetTableContent(); //clear current table
			
			if(liveMode === true) {
				var group = oModel.getProperty("/currentGroupName");
				var teamsGrp = [...oModel.getProperty("/liveTblTeams")];
				var NrOfTeamsGrp = teamsGrp.length;
				var spieleGrp = [...oModel.getProperty("/liveTblSpiele")];

				var pktGrp = [...oModel.getProperty("/liveTblPkt")];
				var torDiffGrp = [...oModel.getProperty("/liveTblTorDiff")];
				var toreGrp = [...oModel.getProperty("/liveTblTore")];

			}else{
				var selection = this.getView().byId("selectGroup");
				if(selection.getSelectedItem() === null) {
				sap.m.MessageToast.show("Fehler: Keine Paarung gesetzt.", {
						duration: 4000,
						my: "left center",         
						at: "left center" ,
						offset: "10"			
						});
					return;
				}
						
				var group = selection.getSelectedItem().getText();
				var teamsGrp = [...oModel.getProperty("/teamsGruppe"+group)];
				var NrOfTeamsGrp = teamsGrp.length;
				var spieleGrp = [...oModel.getProperty("/spieleGruppe"+group)];
				var pktGrp = [...oModel.getProperty("/pktGruppe"+group)];
				var torDiffGrp = [...oModel.getProperty("/torDiffGruppe"+group)];
				var toreGrp = [...oModel.getProperty("/toreGruppe"+group)];
			}
			
			//1. Ordnen der Gruppe nach Punkten 
			var len = NrOfTeamsGrp;
			var indices = new Array(len);
			for (var i = 0; i < len; ++i) indices[i] = i;
			indices.sort(function (a, b) { return pktGrp[a] > pktGrp[b] ? -1 : pktGrp[a] < pktGrp[b] ? 1 : 0; });
			

			var orderedTeamsGrp = new Array(len);
			var orderedSpieleGrp = new Array(len);
			var orderedPktGrp = new Array(len);
			var orderedTorDiffGrp = new Array(len);
			var orderedToreGrp = new Array(len);
			
			for (var i = 0; i < len; ++i) {
				orderedTeamsGrp[i] = teamsGrp[indices[i]];
				orderedSpieleGrp[i] = spieleGrp[indices[i]];
				orderedPktGrp[i] = pktGrp[indices[i]];
				orderedTorDiffGrp[i] = torDiffGrp[indices[i]];
				orderedToreGrp[i] = toreGrp[indices[i]];
			}
						
			//2. Ordnen der Gruppe nach Tordiff bei gleicher Punktzahl
			for (var i = 0; i < 10; ++i) {
				var positionsswitched = false;
				for (var r = 0; r < len; ++r) {
					if(orderedPktGrp[r] === orderedPktGrp[r+1]) {
						if(orderedTorDiffGrp[r] < orderedTorDiffGrp[r+1]) {
							positionsswitched = true;
							//tauschen der Positionen
							var firstPosTe = orderedTeamsGrp[r+1];
							var firstPosSp = orderedSpieleGrp[r+1];
							var firstPosP = orderedPktGrp[r+1];
							var firstPosTd = orderedTorDiffGrp[r+1];
							var firstPosTo = orderedToreGrp[r+1];
							var secPosTe = orderedTeamsGrp[r];
							var secPosSp = orderedSpieleGrp[r];
							var secPosP = orderedPktGrp[r];
							var secPosTd = orderedTorDiffGrp[r];
							var secPosTo = orderedToreGrp[r];
							orderedTeamsGrp[r] = firstPosTe;
							orderedSpieleGrp[r] = firstPosSp;
							orderedPktGrp[r] = firstPosP;
							orderedTorDiffGrp[r] = firstPosTd;
							orderedToreGrp[r] = firstPosTo;
							orderedTeamsGrp[r+1] = secPosTe;
							orderedSpieleGrp[r+1] = secPosSp;
							orderedPktGrp[r+1] = secPosP;
							orderedTorDiffGrp[r+1] = secPosTd;
							orderedToreGrp[r+1] = secPosTo;
						}
					}
				}
				if(positionsswitched === false) break;
			}
			
			//3. ggf. ordnen der Gruppe nach Anzahl geschossener Tore 
			//Suchen nach gleicher Punktzahl + gleicher Tordiff
			for (var i = 0; i < 10; ++i) {
				var positionsswitched = false;
				for (var r = 0; r < len; ++r) {
					if(orderedPktGrp[r] === orderedPktGrp[r+1] && orderedTorDiffGrp[r] === orderedTorDiffGrp[r+1]) {
						if(orderedToreGrp[r] < orderedToreGrp[r+1]) {
							positionsswitched = true;
							//tauschen der Positionen
							var firstPosTe = orderedTeamsGrp[r+1];
							var firstPosSp = orderedSpieleGrp[r+1];
							var firstPosP = orderedPktGrp[r+1];
							var firstPosTd = orderedTorDiffGrp[r+1];
							var firstPosTo = orderedToreGrp[r+1];
							var secPosTe = orderedTeamsGrp[r];
							var secPosSp = orderedSpieleGrp[r];
							var secPosP = orderedPktGrp[r];
							var secPosTd = orderedTorDiffGrp[r];
							var secPosTo = orderedToreGrp[r];
							orderedTeamsGrp[r] = firstPosTe;
							orderedSpieleGrp[r] = firstPosSp;
							orderedPktGrp[r] = firstPosP;
							orderedTorDiffGrp[r] = firstPosTd;
							orderedToreGrp[r] = firstPosTo;
							orderedTeamsGrp[r+1] = secPosTe;
							orderedSpieleGrp[r+1] = secPosSp;
							orderedPktGrp[r+1] = secPosP;
							orderedTorDiffGrp[r+1] = secPosTd;
							orderedToreGrp[r+1] = secPosTo;
						}
					}
				}
				if(positionsswitched === false) break;
			}
			
			//4. ggf. ordnen der Gruppe nach direktem Vergleich 
			var matchList = oModel.getProperty("/matches");
			var unknownPositions = []; //=Teams bei denen alle Kriterien gleich sind und somit die Positionen identisch sind.
			var dirVgl = false;
			
			for (var i = 0; i < 10; ++i) {
				var positionsswitched = false;

				for (var r = 0; r < len; ++r) {
					if(Number(orderedPktGrp[r]) === Number(orderedPktGrp[r+1]) && Number(orderedTorDiffGrp[r]) === Number(orderedTorDiffGrp[r+1]) && Number(orderedToreGrp[r]) === Number(orderedToreGrp[r+1])) {
						console.log("Dir Vergleich notwendig: " + r);
						dirVgl = true;
						var team1 = orderedTeamsGrp[r];
						var team2 = orderedTeamsGrp[r+1];
						var matchFound=false;
						var winnerDetected=false;
						//Suche nach Spiel in MatchList
						console.log("teams: " + team1 + team2);
						console.log("no of matches: " + matchList.length);
						for (var m = 0; m < matchList.length; ++m) {
							if( matchList[m].includes(team1) && matchList[m].includes(team2) ) {
								matchFound=true;
								console.log("Match gefunden: " + m);
								var matchString = matchList[m];
								console.log(matchString);
								//extract result from matchString
								var strElements = matchString.split("~");
								var group = strElements[0].replace(/\s+/g, ''); //remove space from string
								
								var heimteam = strElements[1].trim();
								var gastteam = strElements[2].trim();
								var heimtore = strElements[3].replace(/\s+/g, '');//remove space from string
								var gasttore = strElements[4].replace(/\s+/g, '');//remove space from string
								heimtore = Number(heimtore);
								gasttore = Number(gasttore);
								
								var tempGroup = strElements[0];
								tempGroup.replace(/\s+/g, ''); //remove space from string
								var tempHeimteam = strElements[1].trim();
								var tempGastteam = strElements[2].trim();
								var tempHeimtore = strElements[3].replace(/\s+/g, '');//remove space from string
								var tempGasttore = strElements[4].replace(/\s+/g, '');//remove space from string
								tempHeimtore = Number(tempHeimtore);
								tempGasttore = Number(tempGasttore);
								
								var winner;
								if(heimtore > gasttore) {
									winner = heimteam;
									winnerDetected=true;
								}else if(heimtore < gasttore) {
									winner = gastteam;
									winnerDetected=true;
								}else if(heimtore === gasttore) {
									winner = "draw";
									winnerDetected=false;									
								}
								console.log("---------------------------------------------------------------");
								console.log(winner);
								if(winner === "draw"){
									console.log("winner === draw || winner === team1");
									unknownPositions.push(r+1);
									break;
								}else if(winner === team1){
									break;
								}else if(winner === team2) {
									var positionsswitched = true;
									
									//tauschen der Positionen
									var firstPosTe = orderedTeamsGrp[r+1];
									var firstPosSp = orderedSpieleGrp[r+1];
									var firstPosP = orderedPktGrp[r+1];
									var firstPosTd = orderedTorDiffGrp[r+1];
									var firstPosTo = orderedToreGrp[r+1];
									var secPosTe = orderedTeamsGrp[r];
									var secPosSp = orderedSpieleGrp[r];
									var secPosP = orderedPktGrp[r];
									var secPosTd = orderedTorDiffGrp[r];
									var secPosTo = orderedToreGrp[r];
									orderedTeamsGrp[r] = firstPosTe;
									orderedSpieleGrp[r] = firstPosSp;
									orderedPktGrp[r] = firstPosP;
									orderedTorDiffGrp[r] = firstPosTd;
									orderedToreGrp[r] = firstPosTo;
									orderedTeamsGrp[r+1] = secPosTe;
									orderedSpieleGrp[r+1] = secPosSp;
									orderedPktGrp[r+1] = secPosP;
									orderedTorDiffGrp[r+1] = secPosTd;
									orderedToreGrp[r+1] = secPosTo;
								}
							}	
						}
						console.log("before check");
						if(matchFound === false && winnerDetected === false) unknownPositions.push(r+1);
					}
				}
				if(dirVgl === true) oModel.setProperty("/tableStatus",oModel.getProperty("/tableStatus") + ", dir. Vgl.");
				if(positionsswitched === false) break;
			}
			
			//5. Anzeigen der Gruppe (Teams, Punkte, Tordiff)
			for (var i = 0; i < orderedTeamsGrp.length; i++) {
				
				//add + to positive goal diff
				//Wenn Position nicht eindeutig klar ist, dann entferne Platzierung (bedeutet Team liegt auf selber Platzierung wie Team zuvor)
				if(orderedTorDiffGrp[i] > 0) orderedTorDiffGrp[i] = "+" + orderedTorDiffGrp[i];
				if(unknownPositions.includes(i)) {
					oModel.setProperty("/tabelle/" + i + "/platz","");
				}else{
					oModel.setProperty("/tabelle/" + i + "/platz",i+1);
				}
				oModel.setProperty("/tabelle/" + i + "/team",orderedTeamsGrp[i]);
				oModel.setProperty("/tabelle/" + i + "/spiele",orderedSpieleGrp[i]);
				oModel.setProperty("/tabelle/" + i + "/pkt",orderedPktGrp[i]);
				oModel.setProperty("/tabelle/" + i + "/torDiff",orderedTorDiffGrp[i]);
			}
			if(liveMode === true) {
				oModel.setProperty("/tableTitle","Live-Tabelle Gruppe " + group);
			}else{
				oModel.setProperty("/tableTitle","Tabelle Gruppe " + group);
			}
			
/* 			//Wenn Korrektur w�hrend eines Spiels durchgef�hrt wird, muss liveTableUpdate nochmal neu gestartet werden
			if(korrekturMode === true && liveMode === true) {
				sap.m.MessageToast.show("Korrektur abgeschlossen. Reset weil livemode!", {
					duration: 9000,
					my: "left top",
					at: "left center" ,
					offset: "10"
				});
					
				oModel.setProperty("/korrekturMode",false);
				//this.getView().getController().setPaarung();
				this.getView().getController().liveTableUpdate();
			} */
			


		},
		
		setSpielzeit: function (oEvent) {
			var oModel = this.getView().getModel();
			var button= oEvent.getParameters().id;
			if(button.indexOf("btFuenfMin") > -1){
				oModel.setProperty("/timerDuration", 300);
				oModel.setProperty("/timerDurationMinutes", 5);
				oModel.setProperty("/timerDurationSeconds", 0);
			}else if (button.indexOf("btNeunMin") > -1){
				oModel.setProperty("/timerDuration", 540);
				oModel.setProperty("/timerDurationMinutes", 12);
				oModel.setProperty("/timerDurationSeconds", 0);
			}
		},
		
		resetTimer: function () {
			var oModel = this.getView().getModel();
			clearInterval(this.x);
			clearInterval(this.z1);
			clearInterval(this.z2);
			clearInterval(this.z3);
			clearInterval(this.z4);

			var time = oModel.getProperty("/timerDuration");
			var penTime = oModel.getProperty("/penTimerDuration");
			var minutes = Math.floor(time / 60);
			var seconds = time - Math.floor(time / 60) * 60;

			var sMinutes = minutes;
			var sSeconds = seconds;
			if (minutes < 10) {
				sMinutes = "0" + minutes;
			}
			if (seconds < 10) {
				sSeconds = "0" + seconds;
			}
			
			oModel.setProperty("/clock", sMinutes + ":" + sSeconds);
			oModel.setProperty("/isTimerAktive", false);
			oModel.setProperty("/stop", false);
			oModel.setProperty("/liveMode", false);
			oModel.setProperty("/isResetet", true);
			oModel.setProperty("/showPenTimer1",false);
			oModel.setProperty("/showPenTimer2",false);
			oModel.setProperty("/showPenTimer3",false);
			oModel.setProperty("/showPenTimer4",false);
			oModel.setProperty("/isPenTimer1Aktive", false);
			oModel.setProperty("/penaltyClock1", "02:00");
			oModel.setProperty("/isPenTimer2Aktive", false);
			oModel.setProperty("/penaltyClock2", "02:00");
			oModel.setProperty("/isPenTimer3Aktive", false);
			oModel.setProperty("/penaltyClock3", "02:00");
			oModel.setProperty("/isPenTimer4Aktive", false);
			oModel.setProperty("/penaltyClock4", "02:00");
			this.getView().getController().sortTable();
		},

		resetPenTimer1: function () {
			var oModel = this.getView().getModel();
			clearInterval(this.z1);
			oModel.setProperty("/showPenTimer1",false);
			
			oModel.setProperty("/isPenTimer1Aktive", false);
			oModel.setProperty("/penaltyClock1", "02:00");
		},

		resetPenTimer2: function () {
			var oModel = this.getView().getModel();
			clearInterval(this.z2);
			oModel.setProperty("/showPenTimer2",false);

			oModel.setProperty("/isPenTimer2Aktive", false);
			oModel.setProperty("/penaltyClock2", "02:00");
		},
		
		resetPenTimer3: function () {
			var oModel = this.getView().getModel();
			clearInterval(this.z3);
			oModel.setProperty("/showPenTimer3",false);

			oModel.setProperty("/isPenTimer3Aktive", false);
			oModel.setProperty("/penaltyClock3", "02:00");
		},
		
		resetPenTimer4: function () {
			var oModel = this.getView().getModel();
			clearInterval(this.z4);
			oModel.setProperty("/showPenTimer4",false);

			oModel.setProperty("/isPenTimer4Aktive", false);
			oModel.setProperty("/penaltyClock4", "02:00");
		},
		
		stopTimer: function () {
			var oModel = this.getView().getModel();
			var stop = oModel.getProperty("/stop");
			//var liveMode = oModel.getProperty("/liveMode");
			oModel.setProperty("/stop", !stop);
			//oModel.setProperty("/liveMode", !liveMode); 
		},
		
		startTimer: function () {
			var oModel = this.getView().getModel();
			var oLastMinAudio = this.getView().byId("selectAudLastMin").getSelectedItem().getText();
			var timerAktive = oModel.getProperty("/isTimerAktive");
			var mp3 = document.getElementById(this.getView().byId("audio_with_controls").getIdForLabel()); 
			var mp3LM = new Audio('mp3/letzteMinuteUI.ogg'); 
			var controller = this.getView().getController();
			var view = this.getView();
			
			//Hide Elements
			oModel.setProperty("/showWerbung",false);
			oModel.setProperty("/showTabelle",false);
			
			//start live mode for live table updates
			oModel.setProperty("/liveMode", true); 
			controller.liveTableUpdate();
			
			var timeMin = oModel.getProperty("/timerDurationMinutes");
			var timeSec = oModel.getProperty("/timerDurationSeconds");
			var time = Number(timeSec) + (timeMin * 60); //duration in Seconds
			oModel.setProperty("/timerDuration", time); 
			
			if (timerAktive === false) {
				oModel.setProperty("/isTimerAktive", true);
				var kOneMin = false;
				// Update the count down every 1 second
				this.x = setInterval(function () {
					if (oModel.getProperty("/stop") === false) {
						time = time - 1;
						var minutes = Math.floor(time / 60);
						var seconds = time - Math.floor(time / 60) * 60;
						var sMinutes = minutes;
						var sSeconds = seconds;
						if(minutes === 0 && !kOneMin){
							if(oLastMinAudio === "Automatisch"){
								var oAudios = oModel.getProperty("/audio");
								var matchingaudios = oAudios.filter((oItem)=>{return oItem.AudioName.startsWith("lastminute")});
								var otheraudios = oAudios.filter((oItem)=>{return (oItem.AudioName.startsWith("general"))});
								if(matchingaudios.length > 0){
									var matchedAudio = [];
								   matchingaudios.forEach((oItem)=>{
										var obJ = {};
										Object.defineProperty(obJ, "AudioName", {
											value: oItem.AudioName,
											writable: true,
											enumerable: true,
											configurable: true,
										  });
										matchedAudio.push(obJ);
									});
									var randomNr = Math.floor(Math.random() * matchedAudio.length);
									var oUrl = "./DataFiles/audios/"+matchedAudio[randomNr].AudioName+".mp3";
									// oModel.setProperty("/gifSrcHeim",oHomeUrl);
									var audioElement = document.createElement('audio');
									audioElement.setAttribute('src', oUrl);
									audioElement.play();
								}
								else{
									var randomNr = Math.floor(Math.random() * otheraudios.length);
									var oOtherUrl = "./DataFiles/audios/"+otheraudios[randomNr].AudioName+".mp3";
									// oModel.setProperty("/gifSrcHeim",oOtherUrl);
									var audioElement = document.createElement('audio');
									audioElement.setAttribute('src', oOtherUrl);
									audioElement.play();
								}	
							}
							else{
								// oModel.setProperty("/gifSrcHeim","./DataFiles/gifs/"+gifSelection+".gif");
								var audioElement = document.createElement('audio');
									audioElement.setAttribute('src', "./DataFiles/audios/"+audioSelection.replaceAll(' ', '')+".mp3");
									audioElement.play();
							}
						kOneMin = true;
						}
						if (minutes < 10) {
							sMinutes = "0" + minutes;
						}
						if (seconds < 10) {
							sSeconds = "0" + seconds;
						}
						oModel.setProperty("/clock", sMinutes + ":" + sSeconds);
						
						//Anzeige Live Tabelle (bei 8 min)
						var liveTableControl = view.byId("liveTableControl1").getSelected();						
						if (minutes === 8 && seconds === 40 && liveTableControl == true && typeof this.timer2Table!=="number" && typeof this.timer3Table!=="number"){
						
							controller.showTabelle();
							this.timer1Table = setTimeout(function(){ 
								oModel.setProperty("/showTabelle", false);
								this.timer1Table = null;
							}, 15000);		
						}
						
						//Ansage letzte Minute 
						// var soundActive = view.byId("soundControl1").getSelected();						
						// if (minutes === 1 && seconds === 0 && soundActive == true){
						// 	mp3LM.play();
						// }
						// If the count down is finished, write some text 
						if (minutes === 0 && seconds === 0) {
							mp3.play(); 
							oModel.setProperty("/liveMode", false);

							setTimeout(function(){ 
								controller.saveMatchData(); //save match in matchlist
							}, 500);
							
							//that.resetTimer();
							oModel.setProperty("/stop", true);
							oModel.setProperty("/clock", "00" + ":" + "00");
							oModel.setProperty("/isResetet", false);
														
							if(oModel.getProperty("/adName") !== "null") {
								controller.selectAd();
								setTimeout(function(){ 
									oModel.setProperty("/showWerbung",true);
								}, 3000);
							}

						}
					}
				}, 1000);
			}
		},
		
		startPenaltyTimer1: function () {
			var oModel = this.getView().getModel();
			var time = oModel.getProperty("/penTimerDuration");
			var mp3 = document.getElementById(this.getView().byId("audio_with_controls2").getIdForLabel()); 
			var stopPenTimer = false;
			var timerAktive = oModel.getProperty("/isPenTimer1Aktive");
			var view = this.getView();
			oModel.setProperty("/showPenTimer1",true);
			
			mp3.volume = 0.5;
			
			if (timerAktive === false) {
					oModel.setProperty("/isPenTimer1Aktive", true);
			
				// Update the count down every 1 second
				this.z1 = setInterval(function () {
					if (oModel.getProperty("/stop") === false && stopPenTimer == false) {
						time = time - 1;
						var minutes = Math.floor(time / 60);
						var seconds = time - Math.floor(time / 60) * 60;
						var sMinutes = minutes;
						var sSeconds = seconds;
						if (minutes < 10) {
							sMinutes = "0" + minutes;
						}
						if (seconds < 10) {
							sSeconds = "0" + seconds;
						}
						oModel.setProperty("/penaltyClock1", sMinutes + ":" + sSeconds);

						// If the count down is finished, write some text 
						if (minutes === 0 && seconds === 0) {
							stopPenTimer = true;
							var soundActive = view.byId("soundControl2").getSelected();
							if(soundActive === true) {
								mp3.play(); 
							}
							//that.resetTimer();
							oModel.setProperty("/penaltyClock1", "00" + ":" + "00");
							oModel.setProperty("/showPenTimer1",false);
							//oModel.setProperty("/isResetet", false);
						}
					}
				}, 1000);
			}
		},	

		startPenaltyTimer2: function () {
			var oModel = this.getView().getModel();
			var time = oModel.getProperty("/penTimerDuration");
			var mp3 = document.getElementById(this.getView().byId("audio_with_controls2").getIdForLabel()); 
			var stopPenTimer = false;
			var timerAktive = oModel.getProperty("/isPenTimer2Aktive");
			var view = this.getView();
			oModel.setProperty("/showPenTimer2",true);

			mp3.volume = 0.5;
			
			if (timerAktive === false) {
					oModel.setProperty("/isPenTimer2Aktive", true);
					
				// Update the count down every 1 second
				this.z2 = setInterval(function () {
					if (oModel.getProperty("/stop") === false && stopPenTimer == false) {
						time = time - 1;
						var minutes = Math.floor(time / 60);
						var seconds = time - Math.floor(time / 60) * 60;
						var sMinutes = minutes;
						var sSeconds = seconds;
						if (minutes < 10) {
							sMinutes = "0" + minutes;
						}
						if (seconds < 10) {
							sSeconds = "0" + seconds;
						}
						oModel.setProperty("/penaltyClock2", sMinutes + ":" + sSeconds);
						// If the count down is finished, write some text 
						if (minutes === 0 && seconds === 0) {
							stopPenTimer = true;
							var soundActive = view.byId("soundControl2").getSelected();
							if(soundActive === true) {
								mp3.play(); 
							}
							//that.resetTimer();
							oModel.setProperty("/penaltyClock2", "00" + ":" + "00");
							oModel.setProperty("/showPenTimer2",false);
							//oModel.setProperty("/isResetet", false);
						}
					}
				}, 1000);
			}
		},

		startPenaltyTimer3: function () {
			var oModel = this.getView().getModel();
			var time = oModel.getProperty("/penTimerDuration");
			var mp3 = document.getElementById(this.getView().byId("audio_with_controls2").getIdForLabel()); 
			var stopPenTimer = false;
			var timerAktive = oModel.getProperty("/isPenTimer3Aktive");
			var view = this.getView();
			
			oModel.setProperty("/showPenTimer3",true);
			
			mp3.volume = 0.5;
			
			if (timerAktive === false) {
					oModel.setProperty("/isPenTimer3Aktive", true);
			
				// Update the count down every 1 second
				this.z3 = setInterval(function () {
					if (oModel.getProperty("/stop") === false && stopPenTimer == false) {
						time = time - 1;
						var minutes = Math.floor(time / 60);
						var seconds = time - Math.floor(time / 60) * 60;
						var sMinutes = minutes;
						var sSeconds = seconds;
						if (minutes < 10) {
							sMinutes = "0" + minutes;
						}
						if (seconds < 10) {
							sSeconds = "0" + seconds;
						}
						oModel.setProperty("/penaltyClock3", sMinutes + ":" + sSeconds);
						// If the count down is finished, write some text 
						if (minutes === 0 && seconds === 0) {
							stopPenTimer = true;
							var soundActive = view.byId("soundControl2").getSelected();
							if(soundActive === true) {
								mp3.play(); 
							}
							//that.resetTimer();
							oModel.setProperty("/penaltyClock3", "00" + ":" + "00");
							oModel.setProperty("/showPenTimer3",false);
							//oModel.setProperty("/isResetet", false);
						}
					}
				}, 1000);
			}
		},

		startPenaltyTimer4: function () {
			var oModel = this.getView().getModel();
			var time = oModel.getProperty("/penTimerDuration");
			var mp3 = document.getElementById(this.getView().byId("audio_with_controls2").getIdForLabel()); 
			var stopPenTimer = false;
			var timerAktive = oModel.getProperty("/isPenTimer4Aktive");
			var view = this.getView();
			
			oModel.setProperty("/showPenTimer4",true);
			
			mp3.volume = 0.5;
			
			if (timerAktive === false) {
				oModel.setProperty("/isPenTimer4Aktive", true);
			
				// Update the count down every 1 second
				this.z4 = setInterval(function () {
					if (oModel.getProperty("/stop") === false && stopPenTimer == false) {
						time = time - 1;
						var minutes = Math.floor(time / 60);
						var seconds = time - Math.floor(time / 60) * 60;
						var sMinutes = minutes;
						var sSeconds = seconds;
						if (minutes < 10) {
							sMinutes = "0" + minutes;
						}
						if (seconds < 10) {
							sSeconds = "0" + seconds;
						}
						oModel.setProperty("/penaltyClock4", sMinutes + ":" + sSeconds);
						// If the count down is finished, write some text 
						if (minutes === 0 && seconds === 0) {
							stopPenTimer = true;
							var soundActive = view.byId("soundControl2").getSelected();
							if(soundActive === true) {
								mp3.play(); 
							}
							//that.resetTimer();
							oModel.setProperty("/penaltyClock4", "00" + ":" + "00");
							oModel.setProperty("/showPenTimer4",false);
							//oModel.setProperty("/isResetet", false);
						}
					}
				}, 1000);
			}
		}		
		
	});
});