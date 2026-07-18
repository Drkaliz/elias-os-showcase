import { analyzeLive, formatLiveFailure } from './live-analysis.js';

try {
  const result = await analyzeLive({
    userRequest: 'Review whether this showcase request has sufficient evidence for a human review decision.'
  });
  console.log(JSON.stringify(result, null, 2));
} catch (error) {
  console.error(JSON.stringify(formatLiveFailure(error), null, 2));
  process.exitCode = 1;
}
