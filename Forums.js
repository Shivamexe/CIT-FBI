function getTimeZone() {
  let offset = new Date().getTimezoneOffset(),
    o = Math.abs(offset);
  return (offset < 0 ? "+" : "-") + ("00" + Math.floor(o / 60)).slice(-2) + ":" + ("00" + (o % 60)).slice(-2);
}


function generateBBcode() {
  let checkbox = document.getElementById("agree_document");
  let text = document.getElementById("confirm");

  let header = `[center][img width=875 height=125]http://i.imgur.com/B5r4inn.png[/img]
[img]https://i.imgur.com/59ZeHXd.png[/img]
  
[font=andale mono][b]EMPLOYMENT APPLICATION[/b]
Addressed to: Human Resources Branch, FBI, U.S. Department of Justice
Western Avenue/Olympic Boulevard at Rodeo, West Los Santos, San Andreas[/font]
  
[hr]
[color=red][b]Note[/b][/color]: [b]You should read the requirements on forum before submitting the application. Don’t contact any agent unless your application has been processed for over 3 days.[/b]
[hr]
[/center]`;




  let firstSection = "[size=10pt][color=#283593][b]A) Personal Information and Account Data[/b][/color][/size]";
  let playerName = "[color=#283593][b]A.1)[/color] [b]Player Name[/b]:";
  let playerNameData = document.getElementById("Ingame_name").value;
  let accountName = "[color=#283593][b]A.2)[/color] [b]Account Name[/b]:";
  let accountNameData = document.getElementById("Account_name").value;
  let Serial = "[color=#283593][b]A.3)[/color] [b]MTA Serial[/b]:";
  let SerialData = document.getElementById("Serial").value;
  let rateEnlish = "[color=#283593][b]A.4)[/color] [b]Rate English level[/b]:";
  let rateEnlishData = document.getElementById("Rate_english").value;
  let Nationality = "[color=#283593][b]A.5)[/color] [b]Nationality & Timezone[/b]";
  let NationalityData = document.getElementById("Nationality").value;
  let formerGroups = "[color=#283593][b]A.6)[/color] [b]Former groups[/b] [i](state the reason of departure)[/i]:";
  let formerGroupsData = document.getElementById("Former_groups").value;
  let SecondAccount = `[color=#283593][b]A.7)[/color] [b]Do you have another account in CIT?[/b]:`;
  let SecondAccountData = document.getElementById("SecondAccount").value;
  let hr = "[hr]";

  let SecondSection = "[size=10pt][color=#283593][b]B) Questions[/b][/color][/size]";
  let About = "[b][color=#283593]B.1)[/color] Tell us about yourself[/b]";
  let AboutData = document.getElementById("About").value;
  let whyFBI = "[b][color=#283593]B.2)[/color] What attracts you to choose the FBI[/b]:";
  let whyFBIData = document.getElementById("WhyFBI").value;
  let Roleplay = "[b][color=#283593]B.3) [/color]Are you familiar with roleplay?[/b]:";
  let RolePlayData = document.getElementById("RolePlay").value;

  let Thirdsection = "[size=10pt][color=#283593][b]C) Screenshots[/b][/color][/size]";

  let SSLinksStats = "][b]Stats[/b][/url]";
  let SSLinksPunishlog = "][b]Punishlog[/b][/url]";
  let SSLinksRecentlogs = "][b]Recentlogs[/b][/url]";
  let SSLinksHistoryLeft = "][b]History(left)[/b][/url]";
  let SSLinksHistoryJoined = "][b]History(joined)[/b][/url]";


  let SSstats = "[b][color=#283593]C.1) [/color]Stats:[/b] [url=";
  let SSstatsData = document.getElementById("SSstats").value;
  let SSpunishlog = "[b][color=#283593]C.2) [/color]Punishlog:[/b] [url=";
  let SSpunishlogData = document.getElementById("SSpunishlog").value;
  let SSrecentlog = "[b][color=#283593]C.3) [/color]Recentlogins:[/b] [url=";
  let SSrecentlogData = document.getElementById("SSrecentlogs").value;
  let SShistoryleft = "[b][color=#283593]C.4) [/color]History:[/b]: [url=";
  let SShistoryleftData = document.getElementById("SShistoryleft").value;
  let SShistoryjoined = "[b][color=#283593]C.5) [/color]History:[/b]: [url=";
  let SShistoryjoinedData = document.getElementById("SShistoryjoined").value;

  let footer = `[size=10pt][color=#283593][u][b]Disclaimer[/b][/u][/color][/size]
[size=8pt][i]By applying here, I agree that the Federal Bureau of Investigation will pursue any evidence that an applicant has cheated or failed to follow the application rules, in either letter or spirit. Any irregularity or suspected violation will be investigated. When a violation is confirmed, disciplinary actions may include, but are not limited to, disqualification of the applicant's application, disqualification of the applicant in the recruitment process, and the termination of the ability of being to participate in the recruitment process in the future.[/i][/size]
[hr]`;

  if (checkbox.checked) {
    results.classList.remove('hidden');
    document.getElementById("result").value = `${header}
${firstSection}

${playerName} ${playerNameData}
${accountName} ${accountNameData}
${Serial} ${SerialData}
${rateEnlish} ${rateEnlishData}
${Nationality} ${NationalityData} (${getTimeZone()})
${formerGroups} \n${formerGroupsData}
${SecondAccount} ${SecondAccountData}
${hr}
${SecondSection}

${About} ${AboutData}
${whyFBI} ${whyFBIData}
${Roleplay} ${RolePlayData}

${hr}
${Thirdsection}

${SSstats}${SSstatsData}${SSLinksStats}
${SSpunishlog}${SSpunishlogData}${SSLinksPunishlog}
${SSrecentlog}${SSrecentlogData}${SSLinksRecentlogs}
${SShistoryleft}${SShistoryleftData}${SSLinksHistoryLeft}
${SShistoryjoined}${SShistoryjoinedData}${SSLinksHistoryJoined}

${hr}

${footer}`;

    text.innerHTML = "";

  } else {
    text.innerHTML = "👆 Please accept the agreement before generating the code.";
    document.getElementById("result").value = "";
    results.classList.add('hidden');

  }
}

function copyText() {
  var copyText = document.getElementById("result");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  let text = document.getElementById("confirmCopy");
  text.innerHTML = "Code has been copied to the clipboard!";
}