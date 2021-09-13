function solution(id_list, report, k) {
  const set = new Set(report);
  const deleteDuplicateReport = Array.from(set);
  const reportedUsers = [];
  const result = [];

  const reportUserObj = id_list.reduce((obj, curr) => {
    obj[curr] = { reportedCount: 0, reportUsers: [] };
    return obj;
  }, {});

  deleteDuplicateReport.forEach((singleReport) => {
    const [user, reportUser] = singleReport.split(" ");

    reportUserObj[reportUser] = {
      ...reportUserObj[reportUser],
      reportedCount: reportUserObj[reportUser].reportedCount + 1,
    };

    reportUserObj[user] = {
      ...reportUserObj[user],
      reportUsers: [...reportUserObj[user].reportUsers, reportUser],
    };
  });

  Object.keys(reportUserObj).forEach((reportUser) => {
    if (reportUserObj[reportUser].reportedCount >= k)
      reportedUsers.push(reportUser);
  });

  Object.keys(reportUserObj).forEach((reportUser) => {
    const count = reportUserObj[reportUser].reportUsers.filter((user) =>
      reportedUsers.includes(user)
    ).length;
    result.push(count);
  });

  return result;
}

console.log(
  solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3)
);
