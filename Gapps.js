function getTimeZone() {
  let offset = new Date().getTimezoneOffset(),
    o = Math.abs(offset);
  return (offset < 0 ? "+" : "-") + ("00" + Math.floor(o / 60)).slice(-2) + ":" + ("00" + (o % 60)).slice(-2);
}

console.log(getTimeZone())

function generateGapps() {
  let checkbox = document.getElementById("agree_document");
  let text = document.getElementById("confirm");
  let firstSection = "A) General Information";
  let playerName = "1. Player  Name:";
  let playerNameData = document.getElementById("Ingame_name").value;
  let accountName = "2. Account Name:";
  let accountNameData = document.getElementById("Account_name").value;
  let Serial = "3. MTA Serial: ";
  let SerialData = document.getElementById("Serial").value;
  let rateEnlish = "4. Rate English Level:";
  let rateEnlishData = document.getElementById("Rate_english").value;
  let Nationality = "5. Nationality & Timezone:";
  let NationalityData = document.getElementById("Nationality").value;
  let formerGroups = "6. Former Groups:";
  let formerGroupsData = document.getElementById("Former_groups").value;
  let SecondAccount = "7. Do you have any other account in CIT?"
  let SecondAccountData = document.getElementById("SecondAccount").value;


  let SecondSection = "B) Questions";
  let About = "1. Tell us about yourself:"
  let AboutData = document.getElementById("About").value;
  let whyFBI = "2. What attracts you to choose the FBI:";
  let whyFBIData = document.getElementById("WhyFBI").value;
  let Roleplay = "3. Are you familiar with roleplay?:";
  let RolePlayData = document.getElementById("RolePlay").value;

  let Thirdsection = "C) Screenshots";

  let SSstats = "1. /stats:";
  let SSstatsData = document.getElementById("SSstats").value;
  let SSpunishlog = "2. /punishlog:";
  let SSpunishlogData = document.getElementById("SSpunishlog").value;
  let SShistoryleft = "4. /history(left):";
  let SShistoryleftData = document.getElementById("SShistoryleft").value;
  let SShistoryjoined = "5. /history(joined):";
  let SShistoryjoinedData = document.getElementById("SShistoryjoined").value;


  if (checkbox.checked) {
    results.classList.remove('hidden');
    document.getElementById("result").value = `${firstSection}

${playerName} ${playerNameData}
${accountName} ${accountNameData}
${Serial} ${SerialData}
${rateEnlish} ${rateEnlishData}
${Nationality} ${NationalityData} (${getTimeZone()})
${formerGroups} \n${formerGroupsData}
${SecondAccount} ${SecondAccountData}

${SecondSection}

${About} ${AboutData}
${whyFBI} ${whyFBIData}
${Roleplay} ${RolePlayData}
    
${Thirdsection}

${SSstats} ${SSstatsData}
${SSpunishlog} ${SSpunishlogData}
${SShistoryleft} ${SShistoryleftData}
${SShistoryjoined} ${SShistoryjoinedData}`;

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
