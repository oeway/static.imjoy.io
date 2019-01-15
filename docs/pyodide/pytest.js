var Module=typeof pyodide._module!=="undefined"?pyodide._module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0;Module.finishedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH;if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}else{throw"using preloaded data can only be done on a web page or in a web worker"}var PACKAGE_NAME="pytest.data";var REMOTE_PACKAGE_BASE="pytest.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata.remote_package_size;var PACKAGE_UUID=metadata.package_uuid;function fetchRemotePackage(packageName,packageSize,callback,errback){var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.7",true,true);Module["FS_createPath"]("/lib/python3.7","site-packages",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages","pytest-3.6.3-py3.7.egg-info",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages","_pytest",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/_pytest","mark",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/_pytest","assertion",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/_pytest","config",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/_pytest","_code",true,true);Module["FS_createPath"]("/","bin",true,true);function DataRequest(start,end,audio){this.start=start;this.end=end;this.audio=audio}DataRequest.prototype={requests:{},open:function(mode,name){this.name=name;this.requests[name]=this;Module["addRunDependency"]("fp "+this.name)},send:function(){},onload:function(){var byteArray=this.byteArray.subarray(this.start,this.end);this.finish(byteArray)},finish:function(byteArray){var that=this;Module["FS_createPreloadedFile"](this.name,null,byteArray,true,true,function(){Module["removeRunDependency"]("fp "+that.name)},function(){if(that.audio){Module["removeRunDependency"]("fp "+that.name)}else{err("Preloading file "+that.name+" failed")}},false,true);this.requests[this.name]=null}};function processPackageData(arrayBuffer){Module.finishedDataFileDownloads++;assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:376655,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1297,2315,3448,4670,5484,5980,6872,7842,9185,10393,11678,12876,13867,15138,16239,17410,18634,20032,21096,22397,23684,24939,26142,27288,28475,29606,30666,31779,32995,34159,35372,36637,37701,38797,40147,41333,42566,43663,44946,46138,47581,48919,50174,51312,52491,53628,54914,56308,57241,58139,59067,60326,61654,62665,63815,64952,66330,67780,68988,70135,71148,72299,73455,74704,75986,76944,78312,79634,80939,82296,83639,84947,86259,87654,88986,90378,91521,92553,93890,95295,96432,97180,98320,99626,100855,101839,102782,103906,105135,106430,107675,108863,110173,111300,112516,113421,114435,115430,116501,117556,118632,119774,121120,122289,123271,124454,125731,127070,128281,129445,130644,131860,133139,134439,135504,136620,137887,139084,140209,141263,142599,144112,145247,146302,147383,148599,149874,151097,152235,153397,154587,155844,156897,158050,159177,160288,161528,162632,163613,164707,165898,166936,168124,169144,170210,171602,172812,174144,175402,176729,178106,179275,180272,181272,182400,183780,185008,186152,187286,188073,189291,190453,191707,192895,193912,194933,196064,197337,198702,199936,201091,202275,203525,204608,205940,207092,208213,209424,210576,211845,212999,214225,215355,216689,217911,219252,220503,221620,222727,223824,225063,226286,227606,228869,229862,231136,232276,233694,234881,236203,237654,238999,240152,241535,242763,243974,245152,246416,247530,248575,249826,251040,252347,253545,254705,255933,257141,258328,259611,260743,261993,263169,264479,265574,266704,267844,269029,270314,271583,272668,273951,275128,276420,277684,278992,280213,281473,282731,284158,285324,286490,287662,288683,289854,291186,292399,293779,295067,296265,297507,298918,300337,301578,302814,304141,305509,306641,307810,309081,310246,311451,312532,313656,314922,316120,317482,318693,320016,321309,322489,323789,324882,326078,327317,328480,329753,330939,332183,333420,334495,335694,336993,338304,339499,340906,341832,342850,344006,345303,346573,347536,348743,350154,351423,352487,353712,354912,356156,357529,358792,360042,361186,362315,363557,364790,365875,367043,368258,369371,370504,371745,372734,373829,374779,375837],sizes:[1297,1018,1133,1222,814,496,892,970,1343,1208,1285,1198,991,1271,1101,1171,1224,1398,1064,1301,1287,1255,1203,1146,1187,1131,1060,1113,1216,1164,1213,1265,1064,1096,1350,1186,1233,1097,1283,1192,1443,1338,1255,1138,1179,1137,1286,1394,933,898,928,1259,1328,1011,1150,1137,1378,1450,1208,1147,1013,1151,1156,1249,1282,958,1368,1322,1305,1357,1343,1308,1312,1395,1332,1392,1143,1032,1337,1405,1137,748,1140,1306,1229,984,943,1124,1229,1295,1245,1188,1310,1127,1216,905,1014,995,1071,1055,1076,1142,1346,1169,982,1183,1277,1339,1211,1164,1199,1216,1279,1300,1065,1116,1267,1197,1125,1054,1336,1513,1135,1055,1081,1216,1275,1223,1138,1162,1190,1257,1053,1153,1127,1111,1240,1104,981,1094,1191,1038,1188,1020,1066,1392,1210,1332,1258,1327,1377,1169,997,1e3,1128,1380,1228,1144,1134,787,1218,1162,1254,1188,1017,1021,1131,1273,1365,1234,1155,1184,1250,1083,1332,1152,1121,1211,1152,1269,1154,1226,1130,1334,1222,1341,1251,1117,1107,1097,1239,1223,1320,1263,993,1274,1140,1418,1187,1322,1451,1345,1153,1383,1228,1211,1178,1264,1114,1045,1251,1214,1307,1198,1160,1228,1208,1187,1283,1132,1250,1176,1310,1095,1130,1140,1185,1285,1269,1085,1283,1177,1292,1264,1308,1221,1260,1258,1427,1166,1166,1172,1021,1171,1332,1213,1380,1288,1198,1242,1411,1419,1241,1236,1327,1368,1132,1169,1271,1165,1205,1081,1124,1266,1198,1362,1211,1323,1293,1180,1300,1093,1196,1239,1163,1273,1186,1244,1237,1075,1199,1299,1311,1195,1407,926,1018,1156,1297,1270,963,1207,1411,1269,1064,1225,1200,1244,1373,1263,1250,1144,1129,1242,1233,1085,1168,1215,1113,1133,1241,989,1095,950,1058,818],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData.data=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData});Module["removeRunDependency"]("datafile_pytest.data")}Module["addRunDependency"]("datafile_pytest.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.7/site-packages/pytest.py",start:0,end:1712,audio:0},{filename:"/lib/python3.7/site-packages/pytest-3.6.3-py3.7.egg-info/PKG-INFO",start:1712,end:7641,audio:0},{filename:"/lib/python3.7/site-packages/pytest-3.6.3-py3.7.egg-info/SOURCES.txt",start:7641,end:16621,audio:0},{filename:"/lib/python3.7/site-packages/pytest-3.6.3-py3.7.egg-info/top_level.txt",start:16621,end:16636,audio:0},{filename:"/lib/python3.7/site-packages/pytest-3.6.3-py3.7.egg-info/dependency_links.txt",start:16636,end:16637,audio:0},{filename:"/lib/python3.7/site-packages/pytest-3.6.3-py3.7.egg-info/requires.txt",start:16637,end:16814,audio:0},{filename:"/lib/python3.7/site-packages/pytest-3.6.3-py3.7.egg-info/entry_points.txt",start:16814,end:16876,audio:0},{filename:"/lib/python3.7/site-packages/pytest-3.6.3-py3.7.egg-info/not-zip-safe",start:16876,end:16877,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/runner.py",start:16877,end:34402,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/python.py",start:34402,end:81988,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/_argcomplete.py",start:81988,end:85668,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/skipping.py",start:85668,end:95748,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/capture.py",start:95748,end:119120,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/doctest.py",start:119120,end:136067,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/outcomes.py",start:136067,end:140876,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/compat.py",start:140876,end:151638,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/monkeypatch.py",start:151638,end:161444,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/junitxml.py",start:161444,end:180466,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/pastebin.py",start:180466,end:184102,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/helpconfig.py",start:184102,end:190797,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/hookspec.py",start:190797,end:209131,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/unittest.py",start:209131,end:217704,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/nodes.py",start:217704,end:231631,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/warnings.py",start:231631,end:234961,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/setuponly.py",start:234961,end:237584,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/recwarn.py",start:237584,end:246193,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/deprecated.py",start:246193,end:248805,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/_version.py",start:248805,end:248921,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/__init__.py",start:248921,end:249160,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/main.py",start:249160,end:269565,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/terminal.py",start:269565,end:298370,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/setupplan.py",start:298370,end:299193,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/nose.py",start:299193,end:301782,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/freeze_support.py",start:301782,end:302977,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/tmpdir.py",start:302977,end:307243,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/cacheprovider.py",start:307243,end:319214,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/resultlog.py",start:319214,end:322938,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/logging.py",start:322938,end:342568,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/fixtures.py",start:342568,end:389486,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/debugging.py",start:389486,end:394539,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/python_api.py",start:394539,end:419192,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/pytester.py",start:419192,end:461827,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/mark/evaluate.py",start:461827,end:465597,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/mark/__init__.py",start:465597,end:470762,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/mark/structures.py",start:470762,end:484278,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/mark/legacy.py",start:484278,end:487324,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/assertion/util.py",start:487324,end:498817,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/assertion/__init__.py",start:498817,end:503942,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/assertion/rewrite.py",start:503942,end:540014,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/assertion/truncate.py",start:540014,end:543345,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/config/__init__.py",start:543345,end:577576,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/config/exceptions.py",start:577576,end:577805,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/config/argparsing.py",start:577805,end:592923,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/config/findpaths.py",start:592923,end:597932,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/_code/_py2traceback.py",start:597932,end:600937,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/_code/source.py",start:600937,end:613107,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/_code/__init__.py",start:613107,end:613517,audio:0},{filename:"/lib/python3.7/site-packages/_pytest/_code/code.py",start:613517,end:645972,audio:0},{filename:"/bin/py.test",start:645972,end:646391,audio:0},{filename:"/bin/pytest",start:646391,end:646808,audio:0}],remote_package_size:380751,package_uuid:"af02cd94-a1b9-497a-a092-5d1ea5359e66"})})();