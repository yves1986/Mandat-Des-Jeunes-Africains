function escapeCsvValue(value) {
  const str = value === null || value === undefined ? "" : String(value);
  if (/[",\n]/.test(str)) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

function toCsv(rows, columns) {
  const header = columns.map((col) => escapeCsvValue(col.label)).join(",");
  const lines = rows.map((row) =>
    columns.map((col) => escapeCsvValue(col.value(row))).join(","),
  );
  return [header, ...lines].join("\n");
}

module.exports = { toCsv };
