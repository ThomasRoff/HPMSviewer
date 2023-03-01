var AlabamaRoadLayer = new FeatureLayer({
    url: "https://geo.dot.gov/server/rest/services/Hosted/HPMS_AL_GeoIntersections_2019/FeatureServer",
    outFields: HPMSattributes,
    popupTemplate:popupRoadAttributes
  });
  var AlaskaRoadLayer = new FeatureLayer({
    url: "https://geo.dot.gov/server/rest/services/Hosted/HPMS_AK_GeoIntersections2019/FeatureServer",
    outFields: HPMSattributes,
    popupTemplate:popupRoadAttributes
  });
  var ArizonaRoadLayer = new FeatureLayer({
    url: "https://geo.dot.gov/server/rest/services/Hosted/HPMS_AZ_GeoIntersections_2019/FeatureServer",
    outFields: HPMSattributes,
    popupTemplate:popupRoadAttributes
  });
  var ArkansasRoadLayer = new FeatureLayer({
    url: "https://geo.dot.gov/server/rest/services/Hosted/HPMS_AR_GeoIntersections_2019/FeatureServer",
    outFields: HPMSattributes,
    popupTemplate:popupRoadAttributes
  });
  var CaliforniaRoadLayer = new FeatureLayer({
    url: "https://geo.dot.gov/server/rest/services/Hosted/HPMS_CA_GeoIntersections_2019/FeatureServer",
    outFields: HPMSattributes,
    popupTemplate:popupRoadAttributes
  });
  var ColoradoRoadLayer = new FeatureLayer({
    url: "https://geo.dot.gov/server/rest/services/Hosted/HPMS_CO_GeoIntersections_2019/FeatureServer",
    outFields: HPMSattributes,
    popupTemplate:popupRoadAttributes
  });
  var ConnecticutRoadLayer = new FeatureLayer({
    url: "https://geo.dot.gov/server/rest/services/Hosted/HPMS_CT_GeoIntersections_2019/FeatureServer",
    outFields: HPMSattributes,
    popupTemplate:popupRoadAttributes
  });
  var DelawareRoadLayer = new FeatureLayer({
    url: "https://geo.dot.gov/server/rest/services/Hosted/HPMS_DE_GeoIntersections_2019/FeatureServer",
    outFields: HPMSattributes,
    popupTemplate:popupRoadAttributes
  });
  var DistrictRoadLayer = new FeatureLayer({
    url: "https://geo.dot.gov/server/rest/services/Hosted/HPMS_FULL_DC_2021/FeatureServer", 
  // url: "https://geo.dot.gov/server/rest/services/Hosted/HPMS_MD_GeoIntersections_2019/FeatureServer",
    renderer: F_SystemRenderer,
    outFields: HPMSattributes,
    popupTemplate:popupRoadAttributes
  });
  var FloridaRoadLayer = new FeatureLayer({
    url: "https://geo.dot.gov/server/rest/services/Hosted/HPMS_FL_GeoIntersections_2019/FeatureServer",
    outFields: HPMSattributes,
    popupTemplate:popupRoadAttributes
  });
  var GeorgiaRoadLayer = new FeatureLayer({
    url: "https://geo.dot.gov/server/rest/services/Hosted/HPMS_GA_GeoIntersections_2019/FeatureServer",
    outFields: HPMSattributes,
    popupTemplate:popupRoadAttributes
  });
  var HawaiiRoadLayer = new FeatureLayer({
    url: "https://geo.dot.gov/server/rest/services/Hosted/HPMS_HI_GeoIntersections_2019R/FeatureServer",
   outFields: HPMSattributes,
    popupTemplate:popupRoadAttributes
  }); 
  var IdahoRoadLayer = new FeatureLayer({
    url: "https://geo.dot.gov/server/rest/services/Hosted/HPMS_ID_GeoIntersections_2019/FeatureServer",
    outFields: HPMSattributes,
    popupTemplate:popupRoadAttributes
  });
  var IllinoisRoadLayer = new FeatureLayer({
    url: "https://geo.dot.gov/server/rest/services/Hosted/HPMS_IL_GeoIntersections_2019/FeatureServer",
    outFields: HPMSattributes,
    popupTemplate:popupRoadAttributes
  });
  var IndianaRoadLayer = new FeatureLayer({
    url: "https://geo.dot.gov/server/rest/services/Hosted/HPMS_IN_GeoIntersections_2019/FeatureServer",
    outFields: HPMSattributes,
    popupTemplate:popupRoadAttributes
  });
  var IowaRoadLayer = new FeatureLayer({
    url: "https://geo.dot.gov/server/rest/services/Hosted/HPMS_IA_GeoIntersections_2019r/FeatureServer",
    outFields: HPMSattributes,
    popupTemplate:popupRoadAttributes
  });
  var KentuckyRoadLayer = new FeatureLayer({
    url: "https://geo.dot.gov/server/rest/services/Hosted/HPMS_KY_GeoIntersections_2019/FeatureServer",
    outFields: HPMSattributes,
    popupTemplate:popupRoadAttributes
  });
  var KansasRoadLayer = new FeatureLayer({
    url: "https://geo.dot.gov/server/rest/services/Hosted/HPMS_KS_GeoIntersections_2019/FeatureServer",
    outFields: HPMSattributes,
    popupTemplate:popupRoadAttributes
  });
  var LouisianaRoadLayer = new FeatureLayer({
    url: "https://geo.dot.gov/server/rest/services/Hosted/HPMS_LA_GeoIntersections_2019/FeatureServer",
    outFields: HPMSattributes,
    popupTemplate:popupRoadAttributes
  });
  var MaineRoadLayer = new FeatureLayer({
    url: "https://geo.dot.gov/server/rest/services/Hosted/HPMS_ME_GeoIntersections_2019/FeatureServer",
    outFields: HPMSattributes,
    popupTemplate: popupRoadAttributes
  });
  var MarylandRoadLayer = new FeatureLayer({
  url: "https://geo.dot.gov/server/rest/services/Hosted/HPMS_FULL_MD_2021/FeatureServer", 
  // url: "https://geo.dot.gov/server/rest/services/Hosted/HPMS_MD_GeoIntersections_2019/FeatureServer",
    renderer: F_SystemRenderer,
    //definitionExpression: "NHS = 1",
    outFields: HPMSattributes,
    popupTemplate:popupRoadAttributes
  });
  var MassachusettsRoadLayer = new FeatureLayer({
    url: "https://geo.dot.gov/server/rest/services/Hosted/HPMS_MA_GeoIntersections_2019/FeatureServer",
    outFields: HPMSattributes,
    popupTemplate:popupRoadAttributes
  });
  var MichiganRoadLayer = new FeatureLayer({
    url: "https://geo.dot.gov/server/rest/services/Hosted/HPMS_MI_GeoIntersections_2019/FeatureServer",
    outFields: HPMSattributes,
    popupTemplate:popupRoadAttributes
  });
  var MinnesotaRoadLayer = new FeatureLayer({
    url: "https://geo.dot.gov/server/rest/services/Hosted/HPMS_MN_GeoIntersections_2019/FeatureServer",
    outFields: HPMSattributes,
    popupTemplate:popupRoadAttributes
  });
  var MississippiRoadLayer = new FeatureLayer({
    url: "https://geo.dot.gov/server/rest/services/Hosted/HPMS_MS_GeoIntersections_2019/FeatureServer",
    outFields: HPMSattributes,
    popupTemplate:popupRoadAttributes
  });
  var MissouriRoadLayer = new FeatureLayer({
    url: "https://geo.dot.gov/server/rest/services/Hosted/HPMS_MO_GeoIntersections_2019/FeatureServer",
    outFields: HPMSattributes,
    popupTemplate:popupRoadAttributes
  });
  var MontanaRoadLayer = new FeatureLayer({
    url: "https://geo.dot.gov/server/rest/services/Hosted/HPMS_MT_GeoIntersections_2019/FeatureServer",
    outFields: HPMSattributes,
    popupTemplate:popupRoadAttributes
  });
  var NebraskaRoadLayer = new FeatureLayer({
    url: "https://geo.dot.gov/server/rest/services/Hosted/HPMS_NE_GeoIntersections_2019/FeatureServer",
    outFields: HPMSattributes,
    popupTemplate:popupRoadAttributes
  });
  var NevadaRoadLayer = new FeatureLayer({
    url: "https://geo.dot.gov/server/rest/services/Hosted/HPMS_NV_GeoIntersections_2019/FeatureServer",
    outFields: HPMSattributes,
    popupTemplate:popupRoadAttributes
  });
  var NewHampshireRoadLayer = new FeatureLayer({
    url: "https://geo.dot.gov/server/rest/services/Hosted/HPMS_NH_GeoIntersections_2019/FeatureServer",
    outFields: HPMSattributes,
    popupTemplate:popupRoadAttributes
  });
  
  var NewJerseyRoadLayer = new FeatureLayer({
    url: "https://geo.dot.gov/server/rest/services/Hosted/HPMS_NJ_GeoIntersections_2019/FeatureServer",
    outFields: HPMSattributes,
    popupTemplate:popupRoadAttributes
  });
  var NewMexicoRoadLayer = new FeatureLayer({
    url: "https://geo.dot.gov/server/rest/services/Hosted/HPMS_NM_GeoIntersections_2019/FeatureServer",
    outFields: HPMSattributes,
    popupTemplate:popupRoadAttributes
  });
  var NewYorkRoadLayer = new FeatureLayer({
    url: "https://geo.dot.gov/server/rest/services/Hosted/HPMS_NY_GeoIntersections_2019/FeatureServer",
    outFields: HPMSattributes,
    popupTemplate:popupRoadAttributes
  });
  var NorthCarolinaRoadLayer = new FeatureLayer({
    url: "https://geo.dot.gov/server/rest/services/Hosted/HPMS_NC_GeoIntersections_2019/FeatureServer",
    outFields: HPMSattributes,
    popupTemplate:popupRoadAttributes
  });
  var NorthDakotaRoadLayer = new FeatureLayer({
    url: "https://geo.dot.gov/server/rest/services/Hosted/HPMS_ND_GeoIntersections_2019R/FeatureServer",
    outFields: HPMSattributes,
    popupTemplate:popupRoadAttributes
  });
  var PennsylvaniaRoadLayer = new FeatureLayer({
    url: "https://geo.dot.gov/server/rest/services/Hosted/HPMS_PA_GeoIntersections_2019/FeatureServer",
    outFields: HPMSattributes,
    popupTemplate:popupRoadAttributes
  });
  var OhioRoadLayer = new FeatureLayer({
    url: "https://geo.dot.gov/server/rest/services/Hosted/HPMS_OH_GeoIntersections_2019/FeatureServer",
    outFields: HPMSattributes,
    popupTemplate:popupRoadAttributes
  });
  var OklahomaRoadLayer = new FeatureLayer({
    url: "https://geo.dot.gov/server/rest/services/Hosted/HPMS_OK_GeoIntersections_2019/FeatureServer",
    outFields: HPMSattributes,
    popupTemplate:popupRoadAttributes
  });
  var OregonRoadLayer = new FeatureLayer({
    url: "https://geo.dot.gov/server/rest/services/Hosted/HPMS_OR_GeoIntersections_2019/FeatureServer",
    outFields: HPMSattributes,
    popupTemplate:popupRoadAttributes
  });
  var RhodeIslandRoadLayer = new FeatureLayer({
    url: "https://geo.dot.gov/server/rest/services/Hosted/HPMS_RI_GeoIntersections_2019/FeatureServer",
    outFields: HPMSattributes,
    popupTemplate:popupRoadAttributes
  });
  var SouthCarolinaRoadLayer = new FeatureLayer({
    url: "https://geo.dot.gov/server/rest/services/Hosted/HPMS_SC_GeoIntersections_2019/FeatureServer",
    outFields: HPMSattributes,
    popupTemplate:popupRoadAttributes
  });
  var SouthDakotaRoadLayer = new FeatureLayer({
    url: "https://geo.dot.gov/server/rest/services/Hosted/HPMS_SD_GeoIntersections_2019/FeatureServer",
    outFields: HPMSattributes,
    popupTemplate:popupRoadAttributes
  });
  var TennesseeRoadLayer = new FeatureLayer({
    url: "https://geo.dot.gov/server/rest/services/Hosted/HPMS_TN_GeoIntersections_2019/FeatureServer",
    outFields: HPMSattributes,
    popupTemplate:popupRoadAttributes
  });
  var TexasRoadLayer = new FeatureLayer({
    url: "https://geo.dot.gov/server/rest/services/Hosted/HPMS_TX_GeoIntersections_2019/FeatureServer",
    outFields: HPMSattributes,
    popupTemplate:popupRoadAttributes
  });
  var VermontRoadLayer = new FeatureLayer({
    url: "https://geo.dot.gov/server/rest/services/Hosted/HPMS_VT_GeoIntersections_2019/FeatureServer",
    outFields: HPMSattributes,
    popupTemplate:popupRoadAttributes
  });
  var UtahRoadLayer = new FeatureLayer({
    url: "https://geo.dot.gov/server/rest/services/Hosted/HPMS_UT_GeoIntersections_2019/FeatureServer",
    outFields: HPMSattributes,
    popupTemplate:popupRoadAttributes
  });
  var VirginiaRoadLayer = new FeatureLayer({
    url: "https://geo.dot.gov/server/rest/services/Hosted/HPMS_FULL_VA_2021/FeatureServer", 
  // url: "https://geo.dot.gov/server/rest/services/Hosted/HPMS_MD_GeoIntersections_2019/FeatureServer",
    renderer: F_SystemRenderer,
    outFields: HPMSattributes,
    popupTemplate:popupRoadAttributes
  });
  var WashingtonRoadLayer = new FeatureLayer({
    url: "https://geo.dot.gov/server/rest/services/Hosted/HPMS_WA_GeoIntersections_2019/FeatureServer",
    outFields: HPMSattributes,
    popupTemplate:popupRoadAttributes
  });

  var WestVirginiaRoadLayer = new FeatureLayer({
    url: "https://geo.dot.gov/server/rest/services/Hosted/HPMS_WV_GeoIntersections_2019/FeatureServer",
    outFields: HPMSattributes,
    popupTemplate:popupRoadAttributes
  });
  var WisconsinRoadLayer = new FeatureLayer({
    url: "https://geo.dot.gov/server/rest/services/Hosted/HPMS_WI_GeoIntersections_2019/FeatureServer",
    outFields: HPMSattributes,
    popupTemplate:popupRoadAttributes
  });
  var WyomingRoadLayer = new FeatureLayer({
    url: "https://geo.dot.gov/server/rest/services/Hosted/HPMS_WY_GeoIntersections_2019/FeatureServer",
    outFields: HPMSattributes,
    popupTemplate:popupRoadAttributes
  });
  var PuertoRicoRoadLayer = new FeatureLayer({
    url: "https://geo.dot.gov/server/rest/services/Hosted/HPMS_PR_GeoIntersections_2019/FeatureServer",
    outFields: HPMSattributes,
    popupTemplate:popupRoadAttributes
  });
  var InterstateConditionLayer = new FeatureLayer({
    url: "https://geo.dot.gov/server/rest/services/Hosted/PavementConditions2018/FeatureServer"
    //outFields: HPMSattributes,
    //popupTemplate:popupRoadAttributes
  });

  


 // map.add(NNRoadLayer);
  map.add(AlabamaRoadLayer);
  map.add(AlaskaRoadLayer);
  map.add(ArizonaRoadLayer);
  map.add(ArkansasRoadLayer);
  
  map.add(CaliforniaRoadLayer);
  map.add(ColoradoRoadLayer);
  map.add(ConnecticutRoadLayer);
  
  map.add(DelawareRoadLayer);
  map.add(DistrictRoadLayer);
  
  map.add(FloridaRoadLayer);
  map.add(GeorgiaRoadLayer);
  map.add(HawaiiRoadLayer);

  map.add(IdahoRoadLayer);
  map.add(IllinoisRoadLayer);
  map.add(IndianaRoadLayer);
  map.add(IowaRoadLayer);

  map.add(KentuckyRoadLayer);
  map.add(KansasRoadLayer);
  map.add(LouisianaRoadLayer);
  
  map.add(MaineRoadLayer);
  map.add(MarylandRoadLayer);
  map.add(MassachusettsRoadLayer);
  map.add(MichiganRoadLayer);
  map.add(MinnesotaRoadLayer);
  map.add(MississippiRoadLayer);
  map.add(MissouriRoadLayer);
  map.add(MontanaRoadLayer);
  
  map.add(NebraskaRoadLayer);
  map.add(NevadaRoadLayer);
  map.add(NewHampshireRoadLayer);
  map.add(NewJerseyRoadLayer);
  map.add(NewMexicoRoadLayer);
  map.add(NewYorkRoadLayer);
  map.add(NorthCarolinaRoadLayer);
  map.add(NorthDakotaRoadLayer);

  map.add(OhioRoadLayer);
  map.add(OklahomaRoadLayer);
  map.add(OregonRoadLayer);
  
  map.add(PennsylvaniaRoadLayer);
  map.add(RhodeIslandRoadLayer);
  
  map.add(SouthCarolinaRoadLayer);
  map.add(SouthDakotaRoadLayer);
  
  map.add(TennesseeRoadLayer);
  map.add(TexasRoadLayer);
  
  map.add(UtahRoadLayer);
  map.add(VermontRoadLayer);
  map.add(VirginiaRoadLayer);

  map.add(WashingtonRoadLayer)
  map.add(WestVirginiaRoadLayer);
  map.add(WisconsinRoadLayer);
  map.add(WyomingRoadLayer);
  
  map.add(PuertoRicoRoadLayer);
  });