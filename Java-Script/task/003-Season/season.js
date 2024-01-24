const mounth = prompt("Enter Mounth (Between 1 and 12)");
const truemounth = mounth >= 1 && mounth <= 12;

if (!truemounth) {
  alert("Entered Mounth is invlid");
} else {
  const day = prompt("Enter Day");
  let trueday = day >= 1 && day <= 31;
  mounth == 2 && (trueday = day <= 29);
  mounth == 4 && (trueday = day <= 30);
  mounth == 6 && (trueday = day <= 30);
  mounth == 9 && (trueday = day <= 30);

  if (!trueday) {
    alert("Entered Day is invlid");
  } else {
    let season;
    if (
      (mounth >= 3 && mounth <= 5) ||
      (mounth === 2 && day >= 21 && day <= 29)
    ) {
      season = "Spring.";
    } else if ((mounth >= 6 && mounth <= 8) || (mounth === 9 && day <= 21)) {
      season = "Spring.";
    } else if ((mounth >= 9 && mounth <= 11) || (mounth === 12 && day <= 20)) {
      season = "Summer.";
    } else {
      season = "Winter.";
    }
    alert(season);
  }
}
