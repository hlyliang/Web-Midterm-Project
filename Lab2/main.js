$(function () {
    $.getScript("topic.js", function () {
        // 呼叫setInitialDate設定初始日期
        setInitialDate("2023-02-21");
        renderTable();
    });

    $("#addBtn").click(function () {
        let newTopic = $("#topic").val();
        if (newTopic.trim() !== "") {
            topic.push(newTopic);
            $("#topic").val(""); // 清除輸入框
            renderTable();
        }
    });

    $("#submitBtn").click(function () {
        let selectedDate = $("#startDate").val();
        let year = selectedDate.substring(0, 4);
        let month = selectedDate.substring(5, 7);
        let day = selectedDate.substring(8, 10);
        setMonthAndDay(parseInt(month), parseInt(day), parseInt(year));
        renderTable();
    });

    function renderTable() {
        $("#courseTable").empty().append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
        let topicCount = topic.length;
        let millisecsPerDay = 24 * 60 * 60 * 1000;
        for (var x = 0; x < topicCount; x++) {
            let topicText = topic[x];
            if (topic[x] === "國定假日" || topic[x] === "尚未開學") {
                $("#courseTable").append(
                    "<tr>" +
                    `<td class="gray">${x + 1}</td>` +
                    `<td class="gray">${(new Date(startDate.getTime() + 7 * x * millisecsPerDay)).toLocaleDateString('zh-Hant', { month: 'numeric', day: 'numeric' })}</td>` +
                    `<td class="gray">${topic[x]}</td>` +
                    "</tr>"
                );
            } else {
                $("#courseTable").append(
                    "<tr>" +
                    `<td>${x + 1}</td>` +
                    `<td>${(new Date(startDate.getTime() + 7 * x * millisecsPerDay)).toLocaleDateString('zh-Hant', { month: 'numeric', day: 'numeric' })}</td>` +
                    `<td>${topic[x]}</td>` +
                    "</tr>"
                );
            }
        }

    }

    function setMonthAndDay(month, day, year) {
        startDate.setFullYear(year, month - 1, day);
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
    }

});
