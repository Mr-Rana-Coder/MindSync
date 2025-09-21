function getMoodCategory(mood) {
  if (mood <= 2) return "Sad";
  if (mood <= 4) return "Stressed";
  if (mood <= 6) return "Neutral";
  if (mood <= 8) return "Excited";
  return "Happy";
}

function groupByDay(entries, field) {
  const map = new Map();
  entries.forEach(e => {
    const day = e.date.toISOString().split("T")[0]; 
    if (!map.has(day)) map.set(day, []);
    map.get(day).push(e[field]);
  });

  return Array.from(map.entries()).map(([day, vals]) => ({
    day,
    value: vals.reduce((a, b) => a + b, 0) / vals.length,
  }));
}

function groupByWeek(entries, field) {
  const map = new Map();

  entries.forEach(e => {
    const date = new Date(e.date);
    const week = getWeekOfYear(date);
    if (!map.has(week)) map.set(week, { values: [], startDate: getWeekStart(date) });
    map.get(week).values.push(e[field]);
  });

  return Array.from(map.entries()).map(([week, obj]) => ({
    week,
    startDate: obj.startDate,
    value: obj.values.reduce((a, b) => a + b, 0) / obj.values.length,
  }));
}
function getWeekOfYear(date) {
  const firstDay = new Date(date.getFullYear(), 0, 1);
  const pastDays = (date.getTime() - firstDay.getTime()) / 86400000;
  return Math.ceil((pastDays + firstDay.getDay() + 1) / 7);
}

function getWeekStart(date) {
  const day = date.getDay();
  const diff = date.getDate() - day;
  return new Date(date.setDate(diff));
}

export {
  groupByDay, getMoodCategory, groupByWeek
}