define(['./BuildByName.js'], buildbyname => {
  return function(name) {
    var build = buildbyname[name]

    var heroes = new Set()
    build.HeroIcons.map(icon => heroes.add(icon.slice(20, -4)))

    var units = new Set()
    build.UnitIcons.map(icon => units.add(icon.slice(20, -4)))

    function searchforimage(string) {
      var result = string
      heroes.forEach(hero => {
        result = result.replace(hero, '<img src="../../img/HeroIcons/' + hero + '.png">' + ' ' + hero)
      })
      units.forEach(unit => {
        result = result.replace(unit, '<img src="../../img/UnitIcons/' + unit + '.png">' + ' ' + unit)
      })
      return result
    }

    return `<style>
  body {
    background-image: url('../../img/ingametestbg5.png');
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    overflow: hidden;
  }

.uppercase{
text-transform: uppercase;  
}

div.ad
{
  background-color: ${build.racecolor};
}

  div.textbox {
    background-color: ${build.racecolor};
    border: 2px solid rgb(255, 255, 255);
    opacity: 0.8;
    filter: alpha(opacity=80); /* For IE8 and earlier */
    padding-top: 10px;
    padding-right: 10px;
    padding-bottom: 20px;
    padding-left: 20px;
    overflow: auto;
    height: 465px;
    width: 650px;
    max-width: 650px;
    float: left;
    border-radius: 4px;
    margin-right: 0px;
    margin-left: 30px;
  }

  li{
    margin: 5px 0;
  }

  div.buildbox {
    background-color: ${build.racedarkcolor};
    border: 2px solid rgb(255, 255, 255);
    opacity: 0.8;
    padding-top: 7px;
    padding-right: 0px;
    padding-bottom: 9px;
    padding-left: 0px;
    padding-top: 0px;
    overflow: auto;
    height: 225px;
    width: 300px;
    max-width: 300px;
    border-radius: 4px;
    display: block;
    margin: 5px;
    float: left;
  }

  div.tipbox {
    background-color: ${build.racedarkcolor};
    opacity: 0.8;
    padding-top: 7px;
    padding-right: 10px;
    padding-bottom: 0px;
    padding-left: 0px;
    padding-top: 0px;
    overflow: auto;
    height: 233px;
    width: 300px;
    max-width: 300px;
    border-radius: 4px;
    display: block;
    margin: 5px;
    float: left;
    border-style: solid;
    border: 2px solid rgb(255, 255, 255);
    border-collapse: collapse;
    border-radius: 4px;
    font-size: 12px;
  }

  .textbox::-webkit-scrollbar,
  .buildbox::-webkit-scrollbar, .tipbox::-webkit-scrollbar {
    display: none;
  }

  div.rightsidecontainer {
    float: right;
    width: 400px;
    max-width: 400px;
    margin-right: 40px;
    margin-left: 10px;
  }
  div.textbox p {
    font: Helvetica;
    font-weight: normal;
    color: #000000;
  }

  div.vodbox {
    background-color: ${build.racecolor};
    border: 2px solid rgb(255, 255, 255);
    opacity: 0.8;
    filter: alpha(opacity=80); /* For IE8 and earlier */
    height: 180px;
    max-width: 400px;
    width: 400px;
    border-radius: 4px;
    padding-top: 5px;
    padding-right: 0px;
    padding-left: 0px;
    margin: 0px;
  }

  div.vodbox p {
    font: Helvetica;
    font-weight: normal;
    color: #000000;
    text-align: center;
  }

  table.prosandconstable {
    margin-left: 5px;
    margin-top: 5px;
    border-collapse: collapse;
    opacity: 0.8;
    background: ${build.racedarkcolor};
    border-radius: 5px;
    width: 97%;
    font-size: 12px;
    border-style: solid;
    border: 2px solid rgb(255, 255, 255);
    border-collapse: collapse;
  }

  table.prosandconstable th,
  table.prosandconstable td {
    text-align: center;
    padding: 8px;
    color: white;
  }

  table.prosandconstable th {
    color: #edd00f;
  }

  table.prosandconstable tr:first-of-type {
    border-bottom: 2px solid white;
  }

  table.buildordertable {
    border-collapse: collapse;
    font-size: 10px;
    margin: 0px;
    padding: 0px;
    width: 100%;
  }

  #wrapper {
    float: left;
    width: 800px;
}

  table.buildordertable th,
  table.buildordertable td {
    text-align: center;
    padding-bottom: 3px;
    padding-left: 5px;
    padding-right: 10px;
    padding-top: 3px;
    color: white;
    margin: 0px;
  }

  table.buildordertable th {

    color: #edd00f;
  }

  table.buildordertable tr:first-of-type {
    border-bottom: 2px solid rgb(255, 255, 255);
  }

  .UpperTitle {
    text-align: center;
    padding-top: 14px;
    padding-bottom: 8px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 5px;
    position: relative;
    vertical-align: middle;
  }

  .leftimage{
    float: left;
    vertical-align: middle;
  }

  .rightimage{
    float: right;
    vertical-align: middle;
    cursor:pointer;
  }

  .technicalName{
    margin-top: 8px;
    margin-bottom: 6px;
  }

  .whenStratIsBest
  {
    margin-top: 9px;
    margin-bottom: 5px;
  }

  .buildDescription{
    margin-top: 11px;
    margin-bottom: 10px;
  }
  
</style>

<main>
  
    <div class="UpperTitle">
        <h1 class="uppercase">
        <a href="../in-game/in-game.html"><img class="leftimage" style="vertical-align:middle" src="../../img/BackButton.png"/></a>
        <font color="${build.racecolor}"><u>${name}</u></font>
        <img class="rightimage" style="vertical-align:middle" src="../../img/StartGameButton.png" id="StartGameButton"></h1>
        <br> 
    </div>
    <div class="races">
    <style>
      h1 > img {
        vertical-align: middle;
      }
    </style>
    <br />
    <div class="textbox">
    <div class="technicalName">
    <center><h2>
    <font color="black" size="5"><u>${build.TechnicalName}</u></font></center>
    </div>
  </h2>  
  <div class="whenStratIsBest">
    <h2><font color="black" size="4"><u>WHEN THIS STRATEGY IS BEST:</u></font></h2>
      <ul style="margin-top: 2px; margin-bottom: 3px">
        <li><b>Gametype:</b> ${build.WhenToUseGametypes}</li>  
        <li><b>Enemy Race:</b> ${build.WhenToUseEnemyRaces}</li>
        <li><b>Map:</b> ${build.WhenToUseMaps}</li>
        <li><b>Other:</b> ${build.WhenToUseOther}</li>
      </ul>
      </div>
      <div class="buildDescription">
      <h2>
        <font color="black" size="4"><u>DETAILED EXPLANATION + BUILD ORDER:</u></font>
      </h2>
<div  style="margin-top: 5px; text-indent: 50px" ;>
       ${searchforimage(build.Description)}
      </div></div>
      <div style="border-radius: 4px" ; class="buildbox">
      <img align="left" src="../../img/EtcIcons/woodicon.png"><font align="left" color="white" size="3"> = ${
        build.WoodWorkerCount
      }</font>
      <table class="buildordertable">
          <tr>
            <th width="32%">Cue</th>
            <th width="1%">Time</th>
            <th width="67%">Action</th>
          </tr>
          ${build.BuildTable.map(
            row => `
          <tr>
          <td>${row[0]}</td>
          <td>${row[1]}</td>
          <td>${row[2]}</td>
          </tr>
          `
          ).join('')}
        </table>
      </div>
      <div style="border-radius: 4px" ; class="tipbox">
      <h2>
      <font color="white" size="4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u>TIPS:</u></font>
 </h2>
 <font color="white">
 <ul>
 ${build.Tips.map(
   tip => `
 <li>${tip}</li>
 `
 ).join('')}
 </ul>
 </font>
      </div>
      <div id="wrapper"></div>

      <div class="analysisSection">
      <h2>
        <left>      <font color="black" size="4"><u><br><br>ANALYSIS:</u></font></left>
      </h2>
      <table class="prosandconstable">
      <tr>
        <th width="50%">Pros</th>
        <th width="50%">Cons</th>
      </tr>
      ${build.ProsAndCons.map(
        row => `
      <tr>
      <td>${row[0]}</td>
      <td>${row[1]}</td>
      </tr>
      `
      ).join('')}
      </table>
      </div>
<br>
<div style="text-indent: 50px" ;>
      ${build.Analysis}
      </div>
      <div style="margin-top: 7px; margin-bottom: 0px">
      <h2>
        <font color="black" size="4"><u>VARIATIONS:</u></font>
      </h2>
      </div>
      <ul style="margin-top: 2px; margin-bottom: 3px">
      ${build.Variations.map(
        variation => `
      <li>${variation}</li>
      `
      ).join('')}
      </ul>
      <h2><font color="black" size="4"><a href="${
        build.DiscussionLink
      }"  target="_blank">Discussion Thread (Opens in New Window)</a></font></h2>
    </div>
    <div class="rightsidecontainer">
      <div class="vodbox">
      <br>
        <left>&nbsp;&nbsp;
        <iframe src="${build.YoutubePro}"
            width="185"
            height="120"
            style="vertical-align:middle"
            frameborder="0">
        </iframe>
          <iframe src="${build.YoutubeClan}"
            width="185"
            height="120"
            style="vertical-align:middle"
            frameborder="0">
        </iframe></left>
          <h3><font color="black">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Pro Replay</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Clan AT Tutorial</b></font></h3>
         </div>
      <div class="ad" id="ad">
        <br />
        <center>
          <a href="http://www.clanat.org" target="_blank"><img src="../../img/clanatbiglogo.png"/></a>
        </center>
      </div>
    </div>
  </div>
</main>
`
  }
})
