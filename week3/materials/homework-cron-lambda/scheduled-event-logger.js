// For part II:
const { CloudWatchClient } = require('@aws-sdk/client-cloudwatch');
const { GetMetricDataCommand } = require('@aws-sdk/client-cloudwatch');

exports.scheduledEventLoggerHandler = async () => {
	// For part I
	//let saneString = 'Hello, HYF!';
	//let weirdString = [...saneString];
	// .map(char => {
	// 	return nextChar(char);
	// })
	// .join('');

	//return saneString;

	// For part II:
	const cloudwatchClient = new CloudWatchClient({ region: 'us-east-1' });

	let startDate = new Date();
	startDate.setMonth(startDate.getMonth() - 3);

	const params = {
		StartTime: startDate,
		EndTime: new Date(),
		MetricDataQueries: [
			{
				Id: 'counts',
				MetricStat: {
					Metric: {
						Dimensions: [
							{
								Name: 'ApiName',
								Value: 'Latency',
							},
						],
						MetricName: 'count',
						Namespace: 'AWS/ApiGateway',
					},

					Period: 3000000,
					Stat: 'SampleCount',
				},
			},
			{
				Id: 'Error',
				MetricStat: {
					Metric: {
						Dimensions: [
							{
								Name: 'ApiName',
								Value: '4XX',
							},
						],
						MetricName: 'count',
						Namespace: 'AWS/login',
					},

					Period: 300,
					Stat: 'Sum',
				},
			},
		],
	};

	const results = await cloudwatchClient.send(new GetMetricDataCommand(params));
	console.log('Success', results.MetricDataResults);
	return results;
};

// function nextChar(c) {
// 	return String.fromCharCode(c.charCodeAt(0) + 1);
// }
