function getDailyFX(settings, callback) {
    API.get('dailyFX', settings, function (data) {
        data = data['Time Series FX (Daily)'];
        var usedKeys = Object.keys(data).splice(0, 15);
        var formatedObj = [];

        for(var i = 0; i < usedKeys.length; i++) {
            var date = usedKeys[i];
            var newValue = {
                date: date,
                value: data[date]['4. close']
            }
            formatedObj.push(newValue);
        }
        callback(formatedObj);
    })
}

function getCurrentFX(settings, callback) {
    API.get('currentFX', settings, function (data) {
        var currentValue = data['Realtime Currency Exchange Rate']['5. Exchange Rate']
        callback(currentValue);
    })
}