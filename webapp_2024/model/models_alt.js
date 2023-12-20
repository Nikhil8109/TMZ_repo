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
			var data = {
				"tmpTeam": "",
				"tmpPkt": "",
				"tmpTore": "",
				"clock": "09:00",
				"timerDuration": 600,
				"stop": false,
				"spielstand": "0:0",
				"gast": 0,
				"heim": 0,
				"isTimerAktive": false,
				"isResetet": true,
				"Heimteam": "",
				"Gastteam": "",
				"heimURL": "",
				"gastURL": "",
				"tmpPlatz": "",
				"showTabelle": false,
				"showWerbung": false,
				"showText": false,
				"textnachricht":"",
				"tor":false,
				"ad":"",
				"Gruppe": "",
				"tabelle": [
					{
						"Platz":"1",
						"Team":"",
						"Tore":"",
						"Pkt":""
					},{
						"Platz":"2",
						"Team":"",
						"Tore":"",
						"Pkt":""
					},{
						"Platz":"3",
						"Team":"",
						"Tore":"",
						"Pkt":""
					},{
						"Platz":"4",
						"Team":"",
						"Tore":"",
						"Pkt":""
					},{
						"Platz":"5",
						"Team":"",
						"Tore":"",
						"Pkt":""
					}
				],
				"teams": [{
						"url": "pics/vfl.png",
						"name": "VfL Munderkingen"
					}, {
						"url": "pics/slask.png",
						name: "Śląsk Wrocław"
					}, {
						"url": "pics/ksc.png",
						name: "Karlsruher SC"
					}, {
						"url": "pics/risstissen.png",
						"name": "SGM Donau/Riss"
					}, {
						"url": "pics/odense.png",
						"name": "Odense BK"
					}, {
						"url": "pics/neufra.png",
						"name": "FV Neufra"
					}, {
						"url": "pics/mainz.png",
						"name": "1.FSV Mainz 05"
					}, {
						"url": "pics/smt.png",
						"name": "Skola Mladih Talenata"
					}, {
						"url": "pics/unterstadion.png",
						"name": "SV Unterstadion"
					}, {
						"url": "pics/prag.png",
						"name": "SK Slavia Prag"
					}, {
						"url": "pics/oepfingen.png",
						"name": "SG Öpfingen"
					}, {
						"url": "pics/maribor.png",
						"name": "NK Maribor"
					}, {
						"url": "pics/fds.png",
						"name": "FDS Suomi"
					}, {
						"url": "pics/lauterach.png",
						"name": "SC Lauterach"
					}, {
						"url": "pics/cfr.png",
						"name": "CFR Cluj 1907"
					}, {
						"url": "pics/dettingen.png",
						"name": "SG Dettingen"
					}, {
						"url": "pics/eintracht.png",
						"name": "Eintracht Frankfurt"
					}, {
						"url": "pics/metz.png",
						"name": "Football Club de Metz"
					}, {
						"url": "pics/rottenacker.png",
						"name": "TSG Rottenacker"
					}, {
						"url": "pics/tottenham.png",
						"name": "Tottenham Hotspur"
					}, {
						"url": "pics/rapid.png",
						"name": "SK Rapid Wien"
					}, {
						"url": "pics/mengen.png",
						"name": "SGM Mengen"
					}, {
						"url": "pics/galatasaray.png",
						"name": "Galatasaray Istanbul"
					}, {
						"url": "pics/ringingen.png",
						"name": "SV Ringingen"
					}, {
						"url": "pics/schalke.png",
						"name": "FC Schalke 04"
					}, {
						"url": "pics/atalanta.png",
						"name": "Atalanta Bergamo"
					}, {
						"url": "pics/langenenslingen.png",
						"name": "SV Langenenslingen"
					}, {
						"url": "pics/bvb.png",
						"name": "Borussia Dortmund"
					}, {
						"url": "pics/kirchbierlingen.png",
						"name": "SSV Ehingen Süd"
					}, {
						"url": "pics/stuttgart.png",
						"name": "VfB Stuttgart"
					}, {
						"url": "pics/schlins.png",
						"name": "ERNE FC Schlins"
					},					{
						"url": "pics/vaihingen7654.png",
						"name": "SV Vaihingen"
					},					{
						"url": "pics/luzern.png",
						"name": "FC Luzern"
					}, {
						"url": "pics/wacker.png",
						"name": "FC Wacker Innsbruck"
					}, {
						"url": "pics/freiburg.png",
						"name": "SC Freiburg"
					}, {
						"url": "pics/schelklingen.png",
						"name": "SGM Schelklingen"
					}

				],
				"ads": [
					{
						"url": "pics/ads/1.png",
						"name": "Spe.Stoehr | Berg Br."
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
						"name": "Tafel 9"
					},{
						"url": "pics/ads/10.png",
						"name": "Tafel 10"
					},{
						"url": "pics/ads/11.png",
						"name": "Tafel 11"
					},{
						"url": "pics/ads/12.png",
						"name": "Tafel 12"
					},{
						"url": "pics/ads/13.png",
						"name": "Tafel 13"
					}
				],
				"gifs": [
					{
						"url": "pics/gifs/a1.gif",
						"name": "a1"
					},{
						"url": "pics/gifs/a2.gif",
						"name": "a2test2"
					},{
						"url": "pics/gifs/a3.gif",
						"name": "a3"
					},{
						"url": "pics/gifs/a4.gif",
						"name": "zzzzzzzzz"
					},
					{
						"url": "pics/gifs/a5.gif",
						"name": "zzzzzzzzzzzz"
					},
					{
						"url": "pics/gifs/a8.gif",
						"name": "a8"
					},
					{
						"url": "pics/gifs/1_FSVMainz05.gif",
						"name": "1.FSV Mainz 05"
					}, {
						"url": "pics/gifs/1_FSVMainz051.gif",
						"name": "1.FSV Mainz 051"
					}, {
						"url": "pics/gifs/AtalantaBergamo.gif",
						"name": "Atalanta Bergamo"
					}, {
						"url": "pics/gifs/AtalantaBergamo1.gif",
						"name": "Atalanta Bergamo1"
					}, {
						"url": "pics/gifs/BorussiaDortmund.gif",
						"name": "Borussia Dortmund1"
					}, {
						"url": "pics/gifs/BorussiaDortmund1.gif",
						"name": "Borussia Dortmund1"
					}, {
						"url": "pics/gifs/BorussiaDortmund2.gif",
						"name": "Borussia Dortmund2"
					}, {
						"url": "pics/gifs/CFRCluj1907.gif",
						"name": "CFR Cluj 1907"
					}, {
						"url": "pics/gifs/EintrachtFrankfurt.gif",
						"name": "Eintracht Frankfurt"
					}, {
						"url": "pics/gifs/EintrachtFrankfurt1.gif",
						"name": "Eintracht Frankfurt1"
					}, {
						"url": "pics/gifs/EintrachtFrankfurt2.gif",
						"name": "Eintracht Frankfurt2"
					}, {
						"url": "pics/gifs/EintrachtFrankfurt3.gif",
						"name": "Eintracht Frankfurt3"
					}, {
						"url": "pics/gifs/EintrachtFrankfurt4.gif",
						"name": "Eintracht Frankfurt4"
					}, {
						"url": "pics/gifs/ERNEFCSchlins.gif",
						"name": "ERNE FC Schlins"
					}, {
						"url": "pics/gifs/FCLuzern.gif",
						"name": "FC Luzern"
					},{
						"url": "pics/gifs/FCSchalke04.gif",
						"name": "FC Schalke 04"
					},{
						"url": "pics/gifs/FCSchalke041.gif",
						"name": "FC Schalke 041"
					}, {
						"url": "pics/gifs/FCSchalke042.gif",
						"name": "FC Schalke 042"
					}, {
						"url": "pics/gifs/FCSchalke043.gif",
						"name": "FC Schalke 043"
					}, {
						"url": "pics/gifs/FCWackerInnsbruck.gif",
						"name": "FC Wacker Innsbruck"
					}, {
						"url": "pics/gifs/FDSSuomi.gif",
						"name": "FDS Suomi"
					}, {
						"url": "pics/gifs/FDSSuomi1.gif",
						"name": "FDS Suomi1"
					}, {
						"url": "pics/gifs/FootballClubdeMetz.gif",
						"name": "FC Metz"
					}, {
						"url": "pics/gifs/GalatasarayIstanbul.gif",
						"name": "Galatasaray Istanbul"
					}, {
						"url": "pics/gifs/ksc.gif",
						"name": "Karslruher SC"
					}, {
						"url": "pics/gifs/NKMaribor.gif",
						"name": "NK Maribor"
					}, {
						"url": "pics/gifs/OdenseBK.gif",
						"name": "Odense BK"
					}, {
						"url": "pics/gifs/SCFreiburg.gif",
						"name": "SC Freiburg"
					}, {
						"url": "pics/gifs/SCFreiburg1.gif",
						"name": "SC Freiburg1"
					}, {
						"url": "pics/gifs/SCFreiburg2.gif",
						"name": "SC Freiburg2"
					}, {
						"url": "pics/gifs/SkolaMladihTalenata.gif",
						"name": "Skola Mladih Talenata"
					},{
						"url": "pics/gifs/SKRapidWien.gif",
						"name": "SK Rapid Wien"
					},{
						"url": "pics/gifs/SKSlaviaPrag.gif",
						"name": "SK Slavia Prag"
					},{
						"url": "pics/gifs/SKSlaviaPrag1.gif",
						"name": "SK Slavia Prag1"
					}, {
						"url": "pics/gifs/SKSlaviaPrag2.gif",
						"name": "SK Slavia Prag2"
					}, {
						"url": "pics/gifs/SKSlaviaPrag3.gif",
						"name": "SK Slavia Prag3"
					},
					{
						"url": "pics/gifs/SKSlaviaPrag4.gif",
						"name": "SK Slavia Prag4"
					},					{
						"url": "pics/gifs/TottenhamHotspur.gif",
						"name": "Tottenham Hotspur"
					},					{
						"url": "pics/gifs/TottenhamHotspur1.gif",
						"name": "Tottenham Hotspur1"
					}, {
						"url": "pics/gifs/TottenhamHotspur2.gif",
						"name": "Tottenham Hotspur2"
					}, {
						"url": "pics/gifs/TottenhamHotspur3.gif",
						"name": "Tottenham Hotspur3"
					}, {
						"url": "pics/gifs/VfBStuttgart.gif",
						"name": "VfB Stuttgart"
					},
					{
						"url": "pics/gifs/VfBStuttgart1.gif",
						"name": "VfB Stuttgart1"
					}
					,
					{
						"url": "pics/gifs/VfBStuttgart2.gif",
						"name": "VfB Stuttgart2"
					}
					,
					{
						"url": "pics/gifs/VfBStuttgart3.gif",
						"name": "VfB Stuttgart3"
					}
					,
					{
						"url": "pics/gifs/VfBStuttgart4.gif",
						"name": "VfB Stuttgart4"
					}
					,
					{
						"url": "pics/gifs/VfLMunderkingen.gif",
						"name": "VfL Munderkingen"
					}
					,
					{
						"url": "pics/gifs/VfLMunderkingen1.gif",
						"name": "VfL Munderkingen1"
					}
					,
					{
						"url": "pics/gifs/VfLMunderkingen2.gif",
						"name": "VfL Munderkingen2"
					}
					,
					{
						"url": "pics/gifs/VfLMunderkingen3.gif",
						"name": "VfL Munderkingen3"
					}
					
				]
			};
			var oModel = new JSONModel(data);
			oModel.setDefaultBindingMode("TwoWay");
			return oModel;
		}

	};
});